import { createError, defineEventHandler, readBody, setCookie } from 'h3'
import { compare } from 'bcryptjs'
import { generateJwtToken } from '../../utils/generateJwtToken'
import { generateRefreshToken } from '../../utils/generateRefreshToken'
import { getPrismaClient } from '~/lib/prisma'

interface LoginRequestBody {
  username: string
  password: string
}

const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

export default defineEventHandler(async (event) => {
  console.log('[auth/login] request received')
  const { username, password } = await readBody<LoginRequestBody>(event)
  console.log('[auth/login] payload', { username })

  if (!username || !password) {
    throw createError({ statusCode: 400, statusMessage: 'نام کاربری و رمز عبور الزامی است.' })
  }
  console.log('user pass exist. before getPrismaClient')
  const prisma = getPrismaClient(event)
  console.log('[auth/login] prisma client acquired')
  console.log('user pass exist. after getPrismaClient')

  try {
    const account = await prisma.user.findFirst({
      where: {
        OR: [{ username: username.trim() }, { email: username.trim() }],
      },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        firstName: true,
        lastName: true,
        referralCode: true,
        credit: true,
        password: true,
      },
    })

    if (!account) {
      console.log('[auth/login] account not found', { username })
      throw createError({ statusCode: 401, statusMessage: 'نام کاربری یا رمز عبور نامعتبر است.' })
    }

    const passwordMatches = await compare(password, account.password)

    if (!passwordMatches) {
      console.log('[auth/login] password mismatch', { username })
      throw createError({ statusCode: 401, statusMessage: 'نام کاربری یا رمز عبور نامعتبر است.' })
    }

    const now = new Date()
    const refreshTokenValue = generateRefreshToken(event, account.id)
    const refreshTokenExpiresAt = new Date(now.getTime() + REFRESH_TOKEN_TTL_MS)

    await prisma.$transaction(async (tx) => {
      await tx.refreshToken.deleteMany({ where: { userId: account.id } })
      await tx.user.update({
        where: { id: account.id },
        data: { lastLogin: now },
      })
      await tx.refreshToken.create({
        data: {
          token: refreshTokenValue,
          userId: account.id,
          expiresAt: refreshTokenExpiresAt,
        },
      })
    })
    console.log('[auth/login] refresh token saved', { userId: account.id })

    setCookie(event, 'refreshToken', refreshTokenValue, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: REFRESH_TOKEN_TTL_MS / 1000,
    })

    const accessToken = generateJwtToken(account.id, event)
    console.log('[auth/login] access token generated', { userId: account.id })

    return {
      accessToken,
      refreshToken: refreshTokenValue,
      user: {
        id: account.id,
        username: account.username,
        email: account.email,
        name: account.name ?? '',
        firstName: account.firstName ?? '',
        lastName: account.lastName ?? '',
        referralCode: account.referralCode ?? '',
        credit: account.credit ?? 0,
      },
    }
  }
  catch (error: any) {
    if (error?.statusCode && error?.statusMessage) {
      throw error
    }

    console.error('[auth/login] unexpected error', error)
    throw createError({ statusCode: 500, statusMessage: 'خطایی در ورود رخ داد.' })
  }
})
