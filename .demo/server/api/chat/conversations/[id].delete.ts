import { PrismaClient } from '@prisma/client'
import { defineEventHandler, createError, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const params = event.context.params || {}
  const chatId = Number(params.id)

  if (!chatId || Number.isNaN(chatId)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'شناسه مکالمه معتبر نیست.',
    })
  }

  let userId: number | undefined
  try {
    const body = await readBody<{ userId?: number }>(event)
    if (body?.userId) {
      userId = Number(body.userId)
    }
  }
  catch {
    // Ignore body parsing errors for DELETE requests
  }

  try {
    await prisma.$transaction(async (tx) => {
      const chat = await tx.chats.findUnique({
        where: { id: chatId },
        select: {
          id: true,
          userId: true,
        },
      })

      if (!chat) {
        throw createError({
          statusCode: 404,
          statusMessage: 'مکالمه مورد نظر یافت نشد.',
        })
      }

      if (userId && chat.userId !== userId) {
        throw createError({
          statusCode: 403,
          statusMessage: 'دسترسی به این مکالمه مجاز نیست.',
        })
      }

      await tx.messages.deleteMany({ where: { chatId } })
      await tx.chats.delete({ where: { id: chatId } })
    })

    return { id: chatId }
  }
  catch (error: any) {
    console.error('Error deleting conversation:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'حذف مکالمه با خطا مواجه شد.',
    })
  }
  finally {
    await prisma.$disconnect()
  }
})
