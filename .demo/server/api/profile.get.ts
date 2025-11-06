import { PrismaClient, type User, type Settings } from '@prisma/client'
import { defineEventHandler, getQuery } from 'h3'

const prisma = new PrismaClient()

type BooleanChoice = { label: string, value: boolean }
type UserWithSettings = (User & {
  referralCode: string | null
  credit: number
}) & {
  settings: Settings | null
  referredBy: Pick<User, 'referralCode'> | null
}

interface ProfileResponse {
  personalInfo: {
    firstName: string
    lastName: string
    role: string
    picture: string
    referralCode: string | null
    credit: number
    referredByCode: string | null
  }
  profile: {
    firstName: string
    lastName: string
    role: string
    location: string | null
    bio: string | null
    referralCode: string | null
    credit: number
    referredByCode: string | null
  }
  info: {
    experience: string | null
    firstJob: BooleanChoice | null
    flexible: BooleanChoice | null
    remote: BooleanChoice | null
  }
  social: {
    facebook: string | null
    twitter: string | null
    dribbble: string | null
    instagram: string | null
    github: string | null
    gitlab: string | null
  }
  settings: {
    twoFactor: {
      enabled: boolean
      phoneNumber: string | null
    }
    notifications: {
      enabled: boolean
      flushLowPriority: boolean
      marketing: boolean
      partners: boolean
    }
  }
}

const fallbackProfile: ProfileResponse = {
  personalInfo: {
    firstName: '',
    lastName: '',
    role: '',
    picture: '/img/avatars/default-other.jpg',
    referralCode: null,
    credit: 0,
    referredByCode: null,
  },
  profile: {
    firstName: '',
    lastName: '',
    role: '',
    location: null,
    bio: null,
    referralCode: null,
    credit: 0,
    referredByCode: null,
  },
  info: {
    experience: null,
    firstJob: null,
    flexible: null,
    remote: null,
  },
  social: {
    facebook: null,
    twitter: null,
    dribbble: null,
    instagram: null,
    github: null,
    gitlab: null,
  },
  settings: {
    twoFactor: {
      enabled: false,
      phoneNumber: null,
    },
    notifications: {
      enabled: true,
      flushLowPriority: true,
      marketing: false,
      partners: false,
    },
  },
}

const booleanChoice = (value: boolean | null | undefined): BooleanChoice | null => {
  if (value === null || value === undefined) {
    return null
  }

  return {
    label: value ? 'Yes' : 'No',
    value,
  }
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const userIdRaw = typeof query.userId === 'string' ? query.userId : undefined
    const userId = userIdRaw && !Number.isNaN(Number.parseInt(userIdRaw, 10))
      ? Number.parseInt(userIdRaw, 10)
      : undefined

    console.log('[profile.get] incoming query', query, 'parsed userId', userId)

    if (!userId) {
      console.warn('[profile.get] missing or invalid userId, falling back')
      return fallbackProfile
    }

    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: {
        settings: true,
        referredBy: {
          select: {
            referralCode: true,
          },
        },
      },
    }) as UserWithSettings | null

    if (!user) {
      console.warn('[profile.get] user not found in database for id', userId)
      return fallbackProfile
    }

    console.log('[profile.get] user found', { id: user.id, hasSettings: Boolean(user.settings) })

    return {
      personalInfo: {
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        role: user.role ?? '',
        picture: user.profilePicture ?? '/img/avatars/default-other.jpg',
        referralCode: user.referralCode ?? null,
        credit: user.credit ?? 0,
        referredByCode: user.referredBy?.referralCode ?? null,
      },
      profile: {
        firstName: user.firstName ?? '',
        lastName: user.lastName ?? '',
        role: user.role ?? '',
        location: user.location ?? null,
        bio: user.bio ?? null,
        referralCode: user.referralCode ?? null,
        credit: user.credit ?? 0,
        referredByCode: user.referredBy?.referralCode ?? null,
      },
      info: {
        experience: user.experience ?? null,
        firstJob: booleanChoice(user.firstJob),
        flexible: booleanChoice(user.flexible),
        remote: booleanChoice(user.remote),
      },
      social: {
        facebook: user.facebook ?? null,
        twitter: user.twitter ?? null,
        dribbble: user.dribbble ?? null,
        instagram: user.instagram ?? null,
        github: user.github ?? null,
        gitlab: user.gitlab ?? null,
      },
      settings: {
        twoFactor: {
          enabled: user.settings?.twoFactorEnabled ?? false,
          phoneNumber: user.settings?.phoneNumber ?? null,
        },
        notifications: {
          enabled: user.settings?.notificationsEnabled ?? true,
          flushLowPriority: user.settings?.flushLowPriority ?? true,
          marketing: user.settings?.marketing ?? false,
          partners: user.settings?.partners ?? false,
        },
      },
    } satisfies ProfileResponse
  }
  catch (error) {
    console.warn('Error fetching profile:', error)
    return fallbackProfile
  }
  finally {
    await prisma.$disconnect()
  }
})
