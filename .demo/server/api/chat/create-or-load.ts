// server/api/chat/create-or-load.ts
import { PrismaClient } from '@prisma/client'
import { defineEventHandler, createError, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { userId, provider, title } = body

    if (!userId || !provider || !title) {
      throw createError({
        statusCode: 400,
        statusMessage: 'شناسه کاربر، ارائه‌دهنده یا عنوان نامعتبر است',
      })
    }

    let chat = await prisma.chats.findFirst({
      where: { userId, apiProvider: provider },
    })

    if (!chat) {
      chat = await prisma.chats.create({
        data: {
          title,
          userId,
          apiProvider: provider,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      })
    }

    const usageLimit = await prisma.usage_limits.upsert({
      where: {
        userId_apiProvider: { userId, apiProvider: provider },
      },
      update: { apiProvider: provider },
      create: {
        userId,
        planId: 1,
        maxMessages: 100,
        messagesUsed: 0,
        maxTokens: 10000,
        tokensUsed: 0,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        isActive: true,
        apiProvider: provider,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    await prisma.chats.update({
      where: { id: chat.id },
      data: { usageLimitId: usageLimit.id },
    })

    return chat
  }
  catch (error: any) {
    console.error('Error creating or loading chat:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'خطا در ایجاد یا بارگذاری چت',
    })
  }
  finally {
    await prisma.$disconnect()
  }
})
