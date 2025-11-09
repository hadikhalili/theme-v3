import { PrismaClient } from '@prisma/client';
import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'ipx';

const prisma = new PrismaClient();
const fallbackProfile = {
  personalInfo: {
    firstName: "",
    lastName: "",
    role: "",
    picture: "/img/avatars/default-other.jpg",
    referralCode: null,
    credit: 0,
    referredByCode: null
  },
  profile: {
    firstName: "",
    lastName: "",
    role: "",
    location: null,
    bio: null,
    referralCode: null,
    credit: 0,
    referredByCode: null
  },
  info: {
    experience: null,
    firstJob: null,
    flexible: null,
    remote: null
  },
  social: {
    facebook: null,
    twitter: null,
    dribbble: null,
    instagram: null,
    github: null,
    gitlab: null
  },
  settings: {
    twoFactor: {
      enabled: false,
      phoneNumber: null
    },
    notifications: {
      enabled: true,
      flushLowPriority: true,
      marketing: false,
      partners: false
    }
  }
};
const booleanChoice = (value) => {
  if (value === null || value === void 0) {
    return null;
  }
  return {
    label: value ? "Yes" : "No",
    value
  };
};
const profile_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const userIdRaw = typeof query.userId === "string" ? query.userId : void 0;
    const userId = userIdRaw && !Number.isNaN(Number.parseInt(userIdRaw, 10)) ? Number.parseInt(userIdRaw, 10) : void 0;
    console.log("[profile.get] incoming query", query, "parsed userId", userId);
    if (!userId) {
      console.warn("[profile.get] missing or invalid userId, falling back");
      return fallbackProfile;
    }
    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: {
        settings: true,
        referredBy: {
          select: {
            referralCode: true
          }
        }
      }
    });
    if (!user) {
      console.warn("[profile.get] user not found in database for id", userId);
      return fallbackProfile;
    }
    console.log("[profile.get] user found", { id: user.id, hasSettings: Boolean(user.settings) });
    return {
      personalInfo: {
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        role: user.role ?? "",
        picture: user.profilePicture ?? "/img/avatars/default-other.jpg",
        referralCode: user.referralCode ?? null,
        credit: user.credit ?? 0,
        referredByCode: user.referredBy?.referralCode ?? null
      },
      profile: {
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        role: user.role ?? "",
        location: user.location ?? null,
        bio: user.bio ?? null,
        referralCode: user.referralCode ?? null,
        credit: user.credit ?? 0,
        referredByCode: user.referredBy?.referralCode ?? null
      },
      info: {
        experience: user.experience ?? null,
        firstJob: booleanChoice(user.firstJob),
        flexible: booleanChoice(user.flexible),
        remote: booleanChoice(user.remote)
      },
      social: {
        facebook: user.facebook ?? null,
        twitter: user.twitter ?? null,
        dribbble: user.dribbble ?? null,
        instagram: user.instagram ?? null,
        github: user.github ?? null,
        gitlab: user.gitlab ?? null
      },
      settings: {
        twoFactor: {
          enabled: user.settings?.twoFactorEnabled ?? false,
          phoneNumber: user.settings?.phoneNumber ?? null
        },
        notifications: {
          enabled: user.settings?.notificationsEnabled ?? true,
          flushLowPriority: user.settings?.flushLowPriority ?? true,
          marketing: user.settings?.marketing ?? false,
          partners: user.settings?.partners ?? false
        }
      }
    };
  } catch (error) {
    console.warn("Error fetching profile:", error);
    return fallbackProfile;
  } finally {
    await prisma.$disconnect();
  }
});

export { profile_get as default };
