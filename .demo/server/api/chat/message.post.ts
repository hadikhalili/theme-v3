import { PrismaClient, type Prisma } from '@prisma/client'
import { defineEventHandler, createError, readBody } from 'h3'
import OpenAI from 'openai'
import type { Message, Attachment } from '~/types/conversation'

const prisma = new PrismaClient()

const buildAttachments = (items: { url: string, name: string, type: string }[]): Attachment[] => {
  return items.map(att => ({
    type: att.type.startsWith('image/') ? 'image' : 'file',
    url: att.url,
    ...(att.type.startsWith('image/') ? { image: att.url } : {}),
    text: att.name,
    name: att.name,
  }))
}

const buildConversationForModel = (
  messages: { content: string, apiResponse: string | null }[],
  latestUserMessage: string,
) => {
  const history: { role: 'system' | 'user' | 'assistant', content: string }[] = [
    { role: 'system', content: 'You are a helpful assistant.' },
  ]

  for (const item of messages) {
    const content = item.content?.trim()
    if (content) {
      history.push({ role: 'user', content })
    }

    if (item.apiResponse) {
      try {
        const parsed = JSON.parse(item.apiResponse)
        if (parsed?.text) {
          history.push({ role: 'assistant', content: String(parsed.text) })
        }
      }
      catch {
        // Ignore malformed payloads
      }
    }
  }

  const trimmedLatest = latestUserMessage.trim()
  history.push({ role: 'user', content: trimmedLatest || 'پیامی ثبت نشد' })
  return history
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{
      userId: number
      conversationId: number
      message: Message
      attachments?: { url: string, name: string, type: string }[]
    }>(event)

    const { userId, conversationId, message, attachments = [] } = body

    if (!userId || !conversationId || (!message.text && !attachments.length)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ارسال پیام جدید امکان‌پذیر نیست. متن پیام یا فایل پیوست الزامی است.',
      })
    }

    const chat = await prisma.chats.findUnique({
      where: { id: conversationId },
    })
    if (!chat || chat.userId !== userId) {
      throw createError({
        statusCode: 404,
        statusMessage: 'مکالمه‌ای با این مشخصات یافت نشد.',
      })
    }

    const mappedAttachments = buildAttachments(attachments)
    const attachmentsPayload: Prisma.JsonArray | undefined = mappedAttachments.length
      ? mappedAttachments.map((att) => {
        const payload: Record<string, string> = {
          type: att.type,
          url: att.url,
          text: att.text,
        }
        if (att.image) payload.image = att.image
        if (att.name) payload.name = att.name
        return payload
      })
      : undefined
    const rawUserText = message.text?.trim() || ''
    const attachmentsSummary = mappedAttachments
      .map(att => `${att.type === 'image' ? 'تصویر' : 'فایل'}: ${att.name || att.url}`)
      .join('\n')
    const llmSegments: string[] = []
    if (rawUserText) {
      llmSegments.push(rawUserText)
    }
    if (attachmentsSummary) {
      llmSegments.push(`پیوست‌ها:
${attachmentsSummary}`)
    }
    const llmMessageText = llmSegments.join('\n\n')
    const storedContent = rawUserText || (mappedAttachments.length ? 'پیوست ارسال شد' : 'پیامی ثبت نشد')

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'کلید OpenAI تنظیم نشده است.',
      })
    }

    const openai = new OpenAI({ apiKey })

    const previousMessages = await prisma.messages.findMany({
      where: { chatId: conversationId },
      orderBy: { createdAt: 'asc' },
      select: { content: true, apiResponse: true },
    })

    const recentHistory = previousMessages.slice(-10)
    const requestMessages = buildConversationForModel(recentHistory, llmMessageText || storedContent)

    const completion = await openai.chat.completions.create({
      model: chat.apiProvider || process.env.OPENAI_DEFAULT_MODEL || 'gpt-3.5-turbo',
      messages: requestMessages,
    })

    const replyText = completion.choices?.[0]?.message?.content?.trim() || '❗️ پاسخی از مدل دریافت نشد.'

    const createdMessage = await prisma.messages.create({
      data: {
        title: 'پیام کاربر',
        content: storedContent,
        senderId: userId,
        chatId: conversationId,
        isBotMessage: false,
        apiResponse: JSON.stringify({ text: replyText, attachments: [] }),
        attachments: attachmentsPayload,
        apiRequestTokens: completion.usage?.prompt_tokens ?? 0,
        apiResponseTokens: completion.usage?.completion_tokens ?? 0,
      },
    })

    const formattedMessage: Message = {
      type: 'sent',
      text: createdMessage.content,
      time: createdMessage.createdAt.toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      attachments: mappedAttachments,
    }

    const assistantMessage: Message = {
      type: 'received',
      text: replyText,
      time: new Date().toLocaleTimeString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      attachments: [],
    }

    return [formattedMessage, assistantMessage]
  }
  catch (error: any) {
    console.error('Error creating message:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'ارسال پیام با خطا مواجه شد.',
    })
  }
  finally {
    await prisma.$disconnect()
  }
})
