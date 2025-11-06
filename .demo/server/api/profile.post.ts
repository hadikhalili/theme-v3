import { PrismaClient } from '@prisma/client'
import type { Prisma } from '@prisma/client'
import { defineEventHandler, createError, readMultipartFormData, getQuery } from 'h3'
import type { H3Event } from 'h3'
import { join } from 'node:path'
import { writeFile, mkdir } from 'node:fs/promises'

const prisma = new PrismaClient()

const REFERRAL_BONUS_FOR_NEW_USER = 20
const REFERRAL_BONUS_FOR_INVITER = 50

interface ProfileData {
  firstName: string
  lastName: string
  role: string
  location: string | null
  bio: string | null
  referralCode?: string | null
}

interface InfoData {
  experience: string | null
  firstJob: { label: string, value: boolean } | null
  flexible: { label: string, value: boolean } | null
  remote: { label: string, value: boolean } | null
}

interface SocialData {
  facebook: string | null
  twitter: string | null
  dribbble: string | null
  instagram: string | null
  github: string | null
  gitlab: string | null
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event)
    const userIdRaw = query.userId ? query.userId as string : undefined
    const userId = userIdRaw && !Number.isNaN(Number.parseInt(userIdRaw, 10))
      ? Number.parseInt(userIdRaw, 10)
      : undefined

    if (!userId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'شناسه کاربر برای به‌روزرسانی پروفایل ارسال نشده است.',
      })
    }

    const user = await prisma.user.findFirst({
      where: { id: userId },
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    const formData = await readMultipartFormData(event)
    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid form data',
      })
    }

    let profileData: ProfileData | undefined
    let infoData: InfoData | undefined
    let socialData: SocialData | undefined
    let avatarFile: { data: Buffer, filename?: string } | undefined

    for (const field of formData) {
      if (field.name === 'profile') {
        profileData = JSON.parse(field.data.toString()) as ProfileData
      }
      else if (field.name === 'info') {
        infoData = JSON.parse(field.data.toString()) as InfoData
      }
      else if (field.name === 'social') {
        socialData = JSON.parse(field.data.toString()) as SocialData
      }
      else if (field.name === 'avatar' && field.data) {
        avatarFile = { data: field.data, filename: field.filename }
      }
    }

    if (!profileData || !infoData || !socialData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required form data',
      })
    }

    let normalizedReferralCode: string | null = null
    if (typeof profileData.referralCode === 'string') {
      const trimmed = profileData.referralCode.trim()
      if (trimmed.length > 0) {
        const sanitizedReferral = trimmed.toUpperCase().replace(/[^A-Z0-9]/g, '')
        if (sanitizedReferral.length > 0) {
          normalizedReferralCode = sanitizedReferral
        }
      }
    }

    const userRecord = user as { referralCode?: string | null, referredById?: number | null }
    const existingReferrerId = userRecord.referredById ?? null
    let referrerToAttach: { id: number, referralCode: string } | null = null
    let resolvedReferrerCode: string | null = null

    if (existingReferrerId) {
      const existingReferrer = await prisma.user.findUnique({
        where: { id: existingReferrerId },
        select: { id: true, referralCode: true },
      })
      resolvedReferrerCode = existingReferrer?.referralCode ?? null
      if (normalizedReferralCode && normalizedReferralCode !== resolvedReferrerCode) {
        throw createError({
          statusCode: 409,
          statusMessage: 'کد معرف اشتباه وارد شده',
        })
      }
      normalizedReferralCode = resolvedReferrerCode
    }
    else if (normalizedReferralCode) {
      const referralOwner = await prisma.user.findUnique({
        where: { referralCode: normalizedReferralCode },
        select: { id: true, referralCode: true },
      })

      if (!referralOwner) {
        throw createError({
          statusCode: 404,
          statusMessage: 'کد معرف اشتباه وارد شده',
        })
      }

      if (referralOwner.id === user.id) {
        throw createError({
          statusCode: 409,
          statusMessage: 'You cannot use your own referral code.',
        })
      }

      if (!referralOwner.referralCode) {
        throw createError({
          statusCode: 409,
          statusMessage: 'کد معرف انتخاب‌شده معتبر نیست.',
        })
      }

      referrerToAttach = {
        id: referralOwner.id,
        referralCode: referralOwner.referralCode,
      }
      resolvedReferrerCode = referrerToAttach.referralCode
    }

    let picturePath: string | undefined
    if (avatarFile && avatarFile.filename) {
      const uploadDir = join(process.cwd(), 'public', 'uploads', 'avatars')
      await mkdir(uploadDir, { recursive: true })
      const fileName = `${user.id}-${Date.now()}-${avatarFile.filename}`
      const filePath = join(uploadDir, fileName)
      await writeFile(filePath, avatarFile.data)
      picturePath = `/uploads/avatars/${fileName}`
    }

    const updateData: Prisma.UserUpdateInput = {
      firstName: profileData.firstName ?? user.firstName ?? undefined,
      lastName: profileData.lastName ?? user.lastName ?? undefined,
      role: profileData.role ?? user.role ?? undefined,
      location: profileData.location ?? user.location ?? undefined,
      bio: profileData.bio ?? user.bio ?? undefined,
      profilePicture: picturePath ?? user.profilePicture ?? undefined,
      experience: infoData.experience ?? user.experience ?? undefined,
      firstJob: infoData.firstJob?.value ?? user.firstJob ?? undefined,
      flexible: infoData.flexible?.value ?? user.flexible ?? undefined,
      remote: infoData.remote?.value ?? user.remote ?? undefined,
      facebook: socialData.facebook ?? user.facebook ?? undefined,
      twitter: socialData.twitter ?? user.twitter ?? undefined,
      dribbble: socialData.dribbble ?? user.dribbble ?? undefined,
      instagram: socialData.instagram ?? user.instagram ?? undefined,
      github: socialData.github ?? user.github ?? undefined,
      gitlab: socialData.gitlab ?? user.gitlab ?? undefined,
      updatedAt: new Date(),
    }

    if (referrerToAttach) {
      updateData.referredBy = { connect: { id: referrerToAttach.id } }
      updateData.credit = { increment: REFERRAL_BONUS_FOR_NEW_USER }
    }

    const updatedUser = await prisma.$transaction(async (tx) => {
      if (referrerToAttach) {
        await tx.user.update({
          where: { id: referrerToAttach.id },
          data: {
            credit: {
              increment: REFERRAL_BONUS_FOR_INVITER,
            },
          },
        })
      }

      return tx.user.update({
        where: { id: user.id },
        data: updateData,
        include: {
          referredBy: {
            select: { referralCode: true },
          },
        },
      })
    })

    const responseReferralCode = updatedUser.referralCode ?? ''
    const responseReferredByCode = updatedUser.referredBy?.referralCode ?? resolvedReferrerCode ?? null
    const responseCredit = updatedUser.credit ?? 0

    return {
      message: 'پروفایل با موفقیت به‌روزرسانی شد',
      id: updatedUser.id,
      username: updatedUser.username || '',
      email: updatedUser.email || '',
      name: updatedUser.name || '',
      firstName: updatedUser.firstName || '',
      lastName: updatedUser.lastName || '',
      profilePicture: updatedUser.profilePicture || '/img/avatars/default-other.jpg',
      role: updatedUser.role || '',
      location: updatedUser.location || '',
      bio: updatedUser.bio || '',
      experience: updatedUser.experience || '',
      firstJob: updatedUser.firstJob ?? null,
      flexible: updatedUser.flexible ?? null,
      remote: updatedUser.remote ?? null,
      facebook: updatedUser.facebook || '',
      twitter: updatedUser.twitter || '',
      dribbble: updatedUser.dribbble || '',
      instagram: updatedUser.instagram || '',
      github: updatedUser.github || '',
      gitlab: updatedUser.gitlab || '',
      verificationCode: updatedUser.verificationCode || '',
      referralCode: responseReferralCode,
      referredByCode: responseReferredByCode,
      credit: responseCredit,
    }
  }
  catch (error: any) {
    console.error('Error updating profile:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'خطا در به‌روزرسانی پروفایل',
    })
  }
  finally {
    await prisma.$disconnect()
  }
})


