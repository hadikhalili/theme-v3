// server/api/chat/conversations.get.ts
import { PrismaClient } from '@prisma/client'
import { defineEventHandler, createError } from 'h3'
import type { Conversation, Message, Attachment } from '~/types/conversation'

const prisma = new PrismaClient()

const getRelativeDate = (date: Date): string => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  const isToday = date.toDateString() === today.toDateString()
  const isYesterday = date.toDateString() === yesterday.toDateString()

  return isToday ? 'امروز' : isYesterday ? 'دیروز' : date.toLocaleDateString('fa-IR')
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

function isValidJson(str: string): boolean {
  try {
    JSON.parse(str)
    return true
  }
  catch {
    return false
  }
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const userId = query.userId ? parseInt(query.userId as string) : undefined
    const provider = query.provider as string | undefined // Used to prioritize matching provider chats

    if (!userId || isNaN(userId)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'شناسه کاربر نامعتبر است',
      })
    }

    const whereClause: any = { userId }
    const chats = await prisma.chats.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicture: true,
          },
        },
        Messages: {
          orderBy: { createdAt: 'asc' },
          select: {
            id: true,
            content: true,
            isBotMessage: true,
            createdAt: true,
            apiResponse: true,
            attachments: true, // انتخاب فیلد جدید
          },
        },
      },
    })

    const orderedChats = provider
      ? [...chats].sort((a, b) => {
          const aMatch = a.apiProvider === provider ? 1 : 0
          const bMatch = b.apiProvider === provider ? 1 : 0
          return bMatch - aMatch
        })
      : chats

    const conversations: Conversation[] = orderedChats.map((chat) => {
      const messagesByDate = chat.Messages.reduce((acc, message) => {
        const dateKey = getRelativeDate(message.createdAt)
        if (!acc[dateKey]) {
          acc[dateKey] = []
        }
        acc[dateKey].push(message)
        return acc
      }, {} as Record<string, typeof chat.Messages>)

      const messages: Message[] = []
      Object.keys(messagesByDate)
        .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
        .forEach((date) => {
          messages.push({
            type: 'separator',
            text: '',
            time: date,
            attachments: [],
          })

          messagesByDate[date].forEach((message) => {
            // پیام اول: محتوای ستون content (پیام کاربر)
            let attachments: Attachment[] = []
            if (message.attachments && typeof message.attachments === 'string' && isValidJson(message.attachments)) {
              try {
                attachments = JSON.parse(message.attachments).map((att: { url: string, name: string, type: string }) => {
                  // لاگ کردن نوع پیوست برای دیباگ
                  console.log(`Attachment type in conversations: ${att.type}`)
                  return {
                    type: att.type && att.type.startsWith('image/') ? 'image' : 'file',
                    url: att.url,
                    image: att.type && att.type.startsWith('image/') ? att.url : undefined,
                    text: att.name,
                    name: att.name,
                  }
                })
              }
              catch (err) {
                console.error('Error parsing attachments:', err)
              }
            }

            messages.push({
              type: 'sent',
              text: message.content,
              time: formatTime(message.createdAt),
              attachments,
            })

            // پیام دوم: محتوای ستون apiResponse (پاسخ API)
            let apiResponseText = 'پاسخ API' // متن پیش‌فرض اگر apiResponse خالی باشد
            let apiResponseAttachments: Attachment[] = []
            if (message.apiResponse && isValidJson(message.apiResponse)) {
              try {
                const apiResponseData = JSON.parse(message.apiResponse)
                apiResponseText = apiResponseData.text || 'پاسخ API'
                if (apiResponseData.attachments && Array.isArray(apiResponseData.attachments)) {
                  apiResponseAttachments = apiResponseData.attachments.map((att: { url: string, name: string, type: string }) => ({
                    type: att.type && att.type.startsWith('image/') ? 'image' : 'file',
                    url: att.url,
                    image: att.type && att.type.startsWith('image/') ? att.url : undefined,
                    text: att.name,
                    name: att.name,
                  }))
                }
              }
              catch (err) {
                console.error('Error parsing apiResponse:', err)
              }
            }

            messages.push({
              type: 'received',
              text: apiResponseText,
              time: formatTime(new Date(message.createdAt.getTime() + 1000)), // زمان کمی بعد از پیام اول
              attachments: apiResponseAttachments,
            })
          })
        })

      return {
        id: chat.id,
        title: chat.title,
        user: {
          name: chat.user.name ?? 'بدون نام',
          profilePicture: chat.user.profilePicture ?? '/img/avatars/default-other.jpg',
        },
        messages,
        provider: chat.apiProvider ?? null,
      }
    })

    return conversations
  }
  catch (error) {
    console.error('Error fetching conversations:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'خطا در دریافت مکالمات',
    })
  }
  finally {
    await prisma.$disconnect()
  }
})
