import { getPrismaClient } from '~/lib/prisma'
import { defineEventHandler, createError, readBody } from 'h3'
import { hash, compare } from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    const prisma = getPrismaClient(event)
    const body = await readBody(event)
    const { userId, currentPassword, newPassword, twoFactor, notifications } = body

    if (!userId) {
      throw createError({ statusCode: 400, statusMessage: 'شناسه کاربر نامعتبر است' })
    }

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: { id: true, password: true },
    })

    if (!user) {
      throw createError({ statusCode: 404, statusMessage: 'کاربر یافت نشد' })
    }

    // بررسی رمز عبور فعلی
    const isPasswordValid = await compare(currentPassword, user.password)
    if (!isPasswordValid) {
      throw createError({ statusCode: 401, statusMessage: 'رمز عبور فعلی اشتباه است' })
    }

    const updateData: any = {}
    if (newPassword) {
      updateData.password = await hash(newPassword, 10)
    }

    await prisma.settings.upsert({
      where: { userId: user.id },
      update: {
        twoFactorEnabled: twoFactor.enabled,
        phoneNumber: twoFactor.phoneNumber || null,
        notificationsEnabled: notifications.enabled,
        flushLowPriority: notifications.flushLowPriority,
        marketing: notifications.marketing,
        partners: notifications.partners,
        updatedAt: new Date(),
      },
      create: {
        userId: user.id,
        twoFactorEnabled: twoFactor.enabled,
        phoneNumber: twoFactor.phoneNumber || null,
        notificationsEnabled: notifications.enabled,
        flushLowPriority: notifications.flushLowPriority,
        marketing: notifications.marketing,
        partners: notifications.partners,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    if (Object.keys(updateData).length > 0) {
      await prisma.user.update({
        where: { id: user.id },
        data: updateData,
      })
    }

    return {
      message: 'تنظیمات با موفقیت به‌روزرسانی شد',
    }
  }
  catch (error: any) {
    console.error('Error updating settings:', error)
    throw createError({ statusCode: error.statusCode || 500, statusMessage: error.statusMessage || 'خطا در به‌روزرسانی تنظیمات' })
  }
  finally {
    // await prisma.$disconnect()
  }
})
