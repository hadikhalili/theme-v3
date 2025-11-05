import { createError, defineEventHandler, readBody, getCookie, setCookie } from 'h3'
import jwt from 'jsonwebtoken'
import { nanoid } from 'nanoid'
import { getPrismaClient } from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const prisma = getPrismaClient(event)
  const body = await readBody<{ refreshToken?: string }>(event)
  const refreshToken = body.refreshToken || getCookie(event, 'refreshToken')

  if (!refreshToken) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Refresh token is required.',
    })
  }

  try {
    const rt = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    })

    if (!rt || rt.expiresAt < new Date()) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Refresh token is invalid or expired.',
      })
    }

    const accessToken = jwt.sign(
      { id: rt.user.id, username: rt.user.username },
      config.jwtSecret,
      { expiresIn: '1h' },
    )

    const newRefreshToken = nanoid(32)
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    await prisma.refreshToken.delete({ where: { token: refreshToken } })

    await prisma.refreshToken.create({
      data: {
        token: newRefreshToken,
        userId: rt.user.id,
        expiresAt,
      },
    })

    setCookie(event, 'refreshToken', newRefreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: { lte: new Date() },
      },
    })

    const userPayload = {
      id: rt.user.id,
      username: rt.user.username,
      email: rt.user.email,
      name: rt.user.name ?? '',
      firstName: rt.user.firstName ?? '',
      lastName: rt.user.lastName ?? '',
      referralCode: rt.user.referralCode ?? '',
      credit: rt.user.credit ?? 0,
    }

    return {
      accessToken,
      refreshToken: newRefreshToken,
      user: userPayload,
    }
  }
  catch (error: any) {
    console.error('Error in refresh token:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Failed to refresh token.',
    })
  }
})
