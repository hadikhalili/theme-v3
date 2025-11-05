import { PrismaClient } from '@prisma/client'
import { defineEventHandler, createError, readBody } from 'h3'
import type { Conversation } from '~/types/conversation'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ userId?: number, title?: string, provider?: string }>(event)
    const userId = body.userId
    const requestedTitle = body.title?.trim()
    const provider = body.provider?.trim()

    if (!userId || Number.isNaN(Number(userId))) {
      throw createError({
        statusCode: 400,
        statusMessage: 'شناسه کاربر برای ایجاد مکالمه الزامی است.',
      })
    }

    const chat = await prisma.chats.create({
      data: {
        title: requestedTitle && requestedTitle.length > 0 ? requestedTitle : 'مکالمه جدید',
        userId,
        apiProvider: provider || null,
      },
      include: {
        user: {
          select: {
            name: true,
            profilePicture: true,
          },
        },
      },
    })

    const conversation: Conversation = {
      id: chat.id,
      title: chat.title,
      provider: chat.apiProvider ?? null,
      user: {
        name: chat.user?.name ?? 'بدون نام',
        profilePicture: chat.user?.profilePicture ?? '/img/avatars/default-other.jpg',
      },
      messages: [],
    }

    return conversation
  }
  catch (error: any) {
    console.error('Error creating conversation:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'ایجاد مکالمه جدید با خطا مواجه شد.',
    })
  }
  finally {
    await prisma.$disconnect()
  }
})


