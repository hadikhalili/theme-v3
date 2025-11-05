import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { defineEventHandler, readBody } from 'h3'
import moment from 'moment-timezone' // Uncomment if using moment-timezone
import { getPrismaClient } from '~/lib/prisma'

export function generateCode(): string {
  const randomNumber = Math.floor(Math.random() * 100000) // Random number between 0 and 99999
  return randomNumber.toString().padStart(5, '0') // Convert to string and pad with leading zeros
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (event.method === 'POST') {
    try {
      const prisma = getPrismaClient(event)
      const { email, password, confirmPassword } = body

      // 1. Validation
      if (!email || !password || !confirmPassword) {
        return { statusCode: 400, body: { error: 'تمام فیلدها را پر کنید' } }
      }

      if (password !== confirmPassword) {
        return { statusCode: 400, body: { error: 'دو فیلد کلمه عبور با هم یکسان نیست' } }
      }

      // 2. Check if user exists
      const existingUser = await prisma.user.findUnique({ where: { email } })
      if (existingUser) {
        return { statusCode: 400, body: { error: 'Email already exists' } }
      }

      // 3. Hash the password
      const hashedPassword = await bcrypt.hash(password, 10)

      // 4. Generate verification code
      const verificationCode = generateCode()

      // 5. Get current time in Tehran timezone
      const tehranTime = moment().tz('Asia/Tehran').toDate() // Convert to Date object

      // 6. Create the user
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          lastLogin: tehranTime,
          username: email,
          verificationCode,
          isActive: false, // کاربر هنوز تأیید نشده است
        },
      })

      // 7. Send verification email

      return {
        statusCode: 201,
        body: {
          message:
            'اشتراک کاربری با موفقیت ساخته شد\n لطفا ایمیل خود را برای دریافت کد فعالسازی چک کنید',
          user: { id: newUser.id, email: newUser.email },
        },
      }
    }
    catch (error) {
      console.error('Error creating user:', error)
      return { statusCode: 500, body: { error: 'اشتراک ساخته نشد' } }
    }
    finally {
      // await prisma.$disconnect() // Close the Prisma client connection
    }
  }
  else {
    return { statusCode: 405, body: { error: 'روش غیرمجاز' } }
  }
})
