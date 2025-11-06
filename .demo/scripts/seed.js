import { PrismaClient } from '@prisma/client'
// const { PrismaClient } = require('@prisma/client')
import bcrypt from 'bcryptjs'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set.')
}

const prisma = new PrismaClient({ datasources: { db: { url: databaseUrl } } })

async function seed() {
  // اضافه کردن داده‌های پیش‌فرض به جداول
  const usersCount = await prisma.user.count()

  if (usersCount === 0) {
    await prisma.user.createMany({
      data: [
        {
          name: 'کاربر پیش‌فرض ۱',
          email: 'user1@example.com',
          username: 'user1@example.com',
          password: await bcrypt.hash('12345678', 10),
          verificationCode: '345678',
          referralCode: '10101010',
        },
        {
          name: 'کاربر پیش‌فرض ۲',
          email: 'user2@example.com',
          username: 'user2@example.com',
          password: await bcrypt.hash('12345678', 10),
          verificationCode: '34567',
          referralCode: '20202020',
        },
      ],
    })
    console.log('داده‌های پیش‌فرض به جدول User اضافه شدند.')
  }

  // جدول دیگر
  const categoriesCount = await prisma.chats.count()

  if (categoriesCount === 0) {
    const userid = await prisma.user.findFirst({
      select: {
        id: true,
      },
    })
    await prisma.chats.createMany({
      data: [
        { title: 'چت ۱', userId: userid ? userid.id : 1 },
        { title: 'چت ۲', userId: userid ? userid.id : 1 },
      ],
    })
    console.log('داده‌های پیش‌فرض به جدول chats اضافه شدند.')
  }
}

seed()
  .catch((e) => {
    console.error('خطا در اجرای seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
