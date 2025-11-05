import { createError, defineEventHandler, readBody, setCookie } from 'h3'
import moment from 'moment-timezone'

import { generateJwtToken } from '../../utils/generateJwtToken'
import { generateRefreshToken } from '../../utils/generateRefreshToken'
import { generateCode } from './register'
import { getPrismaClient } from '~/lib/prisma'
const MAX_REFERRAL_CODE_ATTEMPTS = 5

interface GoogleLoginRequestBody {
  googleId: string
  email: string
  name: string
}

const splitFullName = (fullName: string): { firstName: string, lastName: string } => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) {
    return { firstName: '', lastName: '' }
  }

  const firstName = parts.shift() ?? ''
  const lastName = parts.join(' ')
  return {
    firstName,
    lastName,
  }
}

const generateReferralCode = () => Math.random().toString(36).substring(2, 10).toUpperCase()

const ensureReferralCode = async (prisma: ReturnType<typeof getPrismaClient>): Promise<string> => {
  let attempts = 0
  let referralCode = generateReferralCode()

  while (await prisma.user.findUnique({ where: { referralCode } })) {
    attempts += 1
    if (attempts >= MAX_REFERRAL_CODE_ATTEMPTS) {
      throw createError({
        statusCode: 500,
        statusMessage: 'امکان تولید کد معرف منحصربه‌فرد وجود ندارد. لطفاً بعداً دوباره تلاش کنید.',
      })
    }
    referralCode = generateReferralCode()
  }

  return referralCode
}

export default defineEventHandler(async (event) => {
  const prisma = getPrismaClient(event)
  const { googleId, email, name } = await readBody<GoogleLoginRequestBody>(event)

  if (!googleId || !email || !name) {
    throw createError({ statusCode: 400, message: 'اطلاعات کاربر الزامی است.' })
  }

  try {
    const { firstName, lastName } = splitFullName(name)

    let user = await prisma.user.findFirst({
      where: {
        OR: [{ googleId }, { email }],
      },
    })

    if (user && !user.googleId) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { googleId },
      })
    }

    const tehranTime = moment().tz('Asia/Tehran').toDate()
    const verificationCode = generateCode()

    if (!user) {
      let username = email.split('@')[0]
      let suffix = 1
      while (await prisma.user.findUnique({ where: { username } })) {
        username = `${email.split('@')[0]}_${suffix}`
        suffix += 1
      }

      const referralCode = await ensureReferralCode(prisma)

      user = await prisma.user.create({
        data: {
          googleId,
          email,
          username,
          name,
          firstName,
          lastName: lastName || null,
          password: '',
          verificationCode,
          isActive: true,
          lastLogin: tehranTime,
          referralCode,
        },
      })
    }
    else {
      const updates: Record<string, unknown> = {
        lastLogin: tehranTime,
      }

      if (!user.firstName && firstName) {
        updates.firstName = firstName
      }

      if (!user.lastName && lastName) {
        updates.lastName = lastName
      }

      if (!user.referralCode) {
        updates.referralCode = await ensureReferralCode(prisma)
      }

      user = await prisma.user.update({
        where: { id: user.id },
        data: updates,
      })
    }

    await prisma.refreshToken.deleteMany({
      where: { userId: user.id },
    })

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const refreshTokenValue = generateRefreshToken(event, user.id)

    await prisma.refreshToken.create({
      data: {
        token: refreshTokenValue,
        userId: user.id,
        expiresAt,
      },
    })

    setCookie(event, 'refreshToken', refreshTokenValue, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    const accessToken = generateJwtToken(user.id, event)

    await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: { lte: new Date() },
      },
    })

    return {
      accessToken,
      refreshToken: refreshTokenValue,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        referralCode: user.referralCode || '',
        credit: user.credit ?? 0,
      },
    }
  }
  catch (error: any) {
    console.error('Error in Google authentication:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'خطایی در ورود با گوگل رخ داد.',
    })
  }
})
