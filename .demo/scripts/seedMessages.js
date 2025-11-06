// const { PrismaClient } = require('@prisma/client')
import { PrismaClient } from '@prisma/client'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set.')
}

const prisma = new PrismaClient({ datasources: { db: { url: databaseUrl } } })

async function seedMessages() {
  try {
    // داده‌های تستی برای جدول Messages
    const messages = [
      {
        title: 'پیام تستی 1',
        senderId: 1, // فرض: کاربر با id=1 وجود دارد
        content: 'سلام، این یک پیام تستی است.',
        apiResponse: JSON.stringify({ text: 'پاسخ API به پیام تستی 1' }),
        attachments: JSON.stringify([
          { url: '/uploads/image1.jpg', name: 'image1.jpg', type: 'image/jpeg' },
        ]),
        apiRequestTokens: 10,
        apiResponseTokens: 20,
        isBotMessage: false,
        chatId: 1, // فرض: مکالمه با id=1 وجود دارد
      },
      {
        title: 'پیام تستی 2',
        senderId: 1,
        content: 'این یک پیام دیگر است.',
        apiResponse: JSON.stringify({ text: 'پاسخ API به پیام تستی 2' }),
        attachments: null,
        apiRequestTokens: 15,
        apiResponseTokens: 25,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 3',
        senderId: 1,
        content: 'آیا می‌توانم فایل ارسال کنم؟',
        apiResponse: JSON.stringify({
          text: 'بله، می‌توانید فایل ارسال کنید.',
          attachments: [{ url: '/uploads/file.pdf', name: 'file.pdf', type: 'application/pdf' }],
        }),
        attachments: JSON.stringify([
          { url: '/uploads/doc1.pdf', name: 'doc1.pdf', type: 'application/pdf' },
        ]),
        apiRequestTokens: 12,
        apiResponseTokens: 30,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 4',
        senderId: 1,
        content: 'این یک تست دیگر است.',
        apiResponse: null,
        attachments: null,
        apiRequestTokens: 8,
        apiResponseTokens: 0,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 5',
        senderId: 1,
        content: 'تصویر نمونه ارسال شد.',
        apiResponse: JSON.stringify({ text: 'تصویر دریافت شد.' }),
        attachments: JSON.stringify([
          { url: '/uploads/image2.png', name: 'image2.png', type: 'image/png' },
        ]),
        apiRequestTokens: 20,
        apiResponseTokens: 40,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 6',
        senderId: 1,
        content: 'سوال درباره API',
        apiResponse: JSON.stringify({ text: 'لطفاً جزئیات بیشتری ارائه دهید.' }),
        attachments: null,
        apiRequestTokens: 10,
        apiResponseTokens: 15,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 7',
        senderId: 1,
        content: 'این پیام برای تست است.',
        apiResponse: JSON.stringify({ text: 'تست موفقیت‌آمیز بود.' }),
        attachments: JSON.stringify([
          { url: '/uploads/image3.jpg', name: 'image3.jpg', type: 'image/jpeg' },
        ]),
        apiRequestTokens: 18,
        apiResponseTokens: 35,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 8',
        senderId: 1,
        content: 'ارسال فایل صوتی؟',
        apiResponse: null,
        attachments: JSON.stringify([
          { url: '/uploads/audio.mp3', name: 'audio.mp3', type: 'audio/mpeg' },
        ]),
        apiRequestTokens: 5,
        apiResponseTokens: 0,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 9',
        senderId: 1,
        content: 'این یک پیام طولانی‌تر برای تست است.',
        apiResponse: JSON.stringify({ text: 'پیام طولانی دریافت شد.' }),
        attachments: null,
        apiRequestTokens: 25,
        apiResponseTokens: 50,
        isBotMessage: false,
        chatId: 1,
      },
      {
        title: 'پیام تستی 10',
        senderId: 1,
        content: 'آخرین پیام تستی.',
        apiResponse: JSON.stringify({ text: 'پاسخ به آخرین پیام تستی.' }),
        attachments: JSON.stringify([
          { url: '/uploads/image4.jpg', name: 'image4.jpg', type: 'image/jpeg' },
        ]),
        apiRequestTokens: 15,
        apiResponseTokens: 30,
        isBotMessage: false,
        chatId: 1,
      },
    ]

    // پاک‌سازی جدول Messages (اختیاری - اگر می‌خواهید داده‌های قبلی حذف شوند)
    // await prisma.messages.deleteMany({})

    // افزودن داده‌های تستی
    for (const message of messages) {
      await prisma.messages.create({
        data: message,
      })
      console.log(`پیام "${message.title}" با موفقیت اضافه شد.`)
    }

    console.log('Seed data برای جدول Messages با موفقیت اضافه شد.')
  }
  catch (error) {
    console.error('خطا در افزودن داده‌های تستی:', error)
  }
  finally {
    await prisma.$disconnect()
  }
}

seedMessages()
