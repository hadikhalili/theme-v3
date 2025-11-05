import { defineEventHandler, readBody } from 'h3'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { getPrismaClient } from '~/lib/prisma'

const REFERRAL_BONUS_FOR_NEW_USER = 20
const REFERRAL_BONUS_FOR_INVITER = 50
const MAX_VERIFICATION_CODE_ATTEMPTS = 5
const MAX_REFERRAL_CODE_ATTEMPTS = 5

// تعریف اسکیما برای اعتبارسنجی ورودی
const signupSchema = z.object({
  username: z.string().min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد'),
  email: z.string().email('ایمیل معتبر نیست'),
  referralCode: z.string().optional(),
  password: z.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
  confirmPassword: z.string(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'رمزهای عبور مطابقت ندارند',
      path: ['confirmPassword'],
    })
  }
  if (data.password.includes(data.email)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'رمز عبور نمی‌تواند شامل ایمیل باشد',
      path: ['password'],
    })
  }
})

// تابع تولید کد تأیید تصادفی
function generateVerificationCode(): string {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
}

function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 10).toUpperCase()
}

export default defineEventHandler(async (event) => {
  try {
    const prisma = getPrismaClient(event)
    // خواندن داده‌های ورودی از درخواست
    const body = await readBody(event)

    // اعتبارسنجی داده‌های ورودی با Zod
    const validatedData = signupSchema.parse(body)

    // بررسی وجود کاربر با ایمیل یا نام کاربری
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validatedData.email },
          { username: validatedData.username },
        ],
      },
    })

    if (existingUser) {
      if (existingUser.email === validatedData.email) {
        throw new Error('ایمیل قبلاً ثبت شده است')
      }
      if (existingUser.username === validatedData.username) {
        throw new Error('نام کاربری قبلاً گرفته شده است')
      }
    }

    // هش کردن رمز عبور
    const hashedPassword = await bcrypt.hash(validatedData.password, 10)

    // ایجاد کاربر جدید در دیتابیس
    const referralCodeInput = validatedData.referralCode?.trim()
    const sanitizedReferralInput = referralCodeInput
      ? referralCodeInput.toUpperCase().replace(/[^A-Z0-9]/g, '')
      : ''
    const referralCodeFromInput = sanitizedReferralInput.length > 0 ? sanitizedReferralInput : undefined

    let referrer: { id: number } | null = null
    if (referralCodeFromInput) {
      referrer = await prisma.user.findUnique({
        where: { referralCode: referralCodeFromInput },
        select: { id: true },
      })

      if (!referrer) {
        throw new Error('کد معرف وارد شده معتبر نیست')
      }
    }

    let verificationCode = generateVerificationCode()
    let verificationAttempts = 0
    while (await prisma.user.findUnique({ where: { verificationCode } })) {
      verificationAttempts += 1
      if (verificationAttempts >= MAX_VERIFICATION_CODE_ATTEMPTS) {
        throw new Error('امکان ایجاد حساب به دلیل بروز خطا در تولید کد منحصربه‌فرد وجود ندارد. لطفاً دوباره تلاش کنید.')
      }
      verificationCode = generateVerificationCode()
    }

    let generatedReferralCode = generateReferralCode()
    let referralAttempts = 0
    while (await prisma.user.findUnique({ where: { referralCode: generatedReferralCode } })) {
      referralAttempts += 1
      if (referralAttempts >= MAX_REFERRAL_CODE_ATTEMPTS) {
        throw new Error('امکان ایجاد حساب به دلیل بروز خطا در تولید کد معرف وجود ندارد. لطفاً دوباره تلاش کنید.')
      }
      generatedReferralCode = generateReferralCode()
    }

    const user = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          username: validatedData.username,
          email: validatedData.email,
          password: hashedPassword,
          verificationCode,
          referralCode: generatedReferralCode,
          referredById: referrer?.id ?? null,
          credit: referrer ? REFERRAL_BONUS_FOR_NEW_USER : 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })

      if (referrer) {
        await tx.user.update({
          where: { id: referrer.id },
          data: {
            credit: {
              increment: REFERRAL_BONUS_FOR_INVITER,
            },
          },
        })
      }

      return createdUser
    })

    // پاسخ موفقیت‌آمیز
    return {
      statusCode: 201,
      message: `حساب برای ${user.username} ایجاد شد`,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        credit: user.credit,
        referralCode: user.referralCode,
        verificationCode: user.verificationCode,
        referredById: user.referredById,
      },
    }
  }
  catch (error: any) {
    // مدیریت خطاها
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        message: 'خطای اعتبارسنجی',
        errors: error.errors.map(e => ({
          path: e.path.join('.'),
          message: e.message,
        })),
      }
    }
    return {
      statusCode: 400,
      message: error.message || 'خطا در ثبت‌نام',
    }
  }
  finally {
    // await prisma.$disconnect()
  }
})
