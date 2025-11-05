import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

export function generateJwtToken(user: any, event: H3Event): string {
  // const config = useRuntimeConfig(event)
  const secretKey = process.env.NUXT_JWT_SECRET
  if (!secretKey) {
    throw new Error('JWT_SECRET is not defined')
  }

  const tokenPayload = {
    id: user.id,
    username: user.username,
    exp: Math.round(new Date(Date.now() + 15 * 60 * 1000).getTime() / 1000), // 15 دقیقه
  }

  try {
    return jwt.sign(tokenPayload, secretKey)
  }
  catch (error) {
    console.error('Error generating JWT:', error)
    throw new Error('Failed to generate JWT')
  }
}
