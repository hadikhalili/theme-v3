import { setCookie } from 'h3'
import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

export function generateRefreshToken(event: H3Event, userId?: number): string {
  // const config = useRuntimeConfig(event)
  const secretKey = process.env.NUXT_JWT_SECRET
  // بررسی وجود secretKey
  if (!secretKey) {
    throw new Error('JWT_SECRET is not defined in environment variables')
  }

  // ایجاد payload برای توکن
  const tokenPayload = userId ? { userId } : {}
  try {
    // Create a unique token
    const token = jwt.sign(tokenPayload, secretKey, { expiresIn: '7d' })

    // Set the token in a cookie that expires in 7 days
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    setCookie(event, 'refreshToken', token, {
      expires,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // فقط در تولید HTTPS
      sameSite: 'strict', // جلوگیری از CSRF
    })

    console.log('Generated refreshToken:', token)
    return token
  }
  catch (error) {
    console.error('Error generating refresh token:', error)
    throw new Error('Failed to generate refresh token')
  }
}
