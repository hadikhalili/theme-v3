import { PrismaClient } from '@prisma/client';
import { d as defineEventHandler, g as getQuery, c as createError, b as readMultipartFormData } from '../../runtime.mjs';
import { join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
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
const REFERRAL_BONUS_FOR_NEW_USER = 20;
const REFERRAL_BONUS_FOR_INVITER = 50;
const profile_post = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const userIdRaw = query.userId ? query.userId : void 0;
    const userId = userIdRaw && !Number.isNaN(Number.parseInt(userIdRaw, 10)) ? Number.parseInt(userIdRaw, 10) : void 0;
    if (!userId) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0634\u0646\u0627\u0633\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0627\u0631\u0633\u0627\u0644 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A."
      });
    }
    const user = await prisma.user.findFirst({
      where: { id: userId }
    });
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: "User not found"
      });
    }
    const formData = await readMultipartFormData(event);
    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid form data"
      });
    }
    let profileData;
    let infoData;
    let socialData;
    let avatarFile;
    for (const field of formData) {
      if (field.name === "profile") {
        profileData = JSON.parse(field.data.toString());
      } else if (field.name === "info") {
        infoData = JSON.parse(field.data.toString());
      } else if (field.name === "social") {
        socialData = JSON.parse(field.data.toString());
      } else if (field.name === "avatar" && field.data) {
        avatarFile = { data: field.data, filename: field.filename };
      }
    }
    if (!profileData || !infoData || !socialData) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required form data"
      });
    }
    let normalizedReferralCode = null;
    if (typeof profileData.referralCode === "string") {
      const trimmed = profileData.referralCode.trim();
      if (trimmed.length > 0) {
        const sanitizedReferral = trimmed.toUpperCase().replace(/[^A-Z0-9]/g, "");
        if (sanitizedReferral.length > 0) {
          normalizedReferralCode = sanitizedReferral;
        }
      }
    }
    const userRecord = user;
    const existingReferrerId = userRecord.referredById ?? null;
    let referrerToAttach = null;
    let resolvedReferrerCode = null;
    if (existingReferrerId) {
      const existingReferrer = await prisma.user.findUnique({
        where: { id: existingReferrerId },
        select: { id: true, referralCode: true }
      });
      resolvedReferrerCode = existingReferrer?.referralCode ?? null;
      if (normalizedReferralCode && normalizedReferralCode !== resolvedReferrerCode) {
        throw createError({
          statusCode: 409,
          statusMessage: "\u06A9\u062F \u0645\u0639\u0631\u0641 \u0627\u0634\u062A\u0628\u0627\u0647 \u0648\u0627\u0631\u062F \u0634\u062F\u0647"
        });
      }
      normalizedReferralCode = resolvedReferrerCode;
    } else if (normalizedReferralCode) {
      const referralOwner = await prisma.user.findUnique({
        where: { referralCode: normalizedReferralCode },
        select: { id: true, referralCode: true }
      });
      if (!referralOwner) {
        throw createError({
          statusCode: 404,
          statusMessage: "\u06A9\u062F \u0645\u0639\u0631\u0641 \u0627\u0634\u062A\u0628\u0627\u0647 \u0648\u0627\u0631\u062F \u0634\u062F\u0647"
        });
      }
      if (referralOwner.id === user.id) {
        throw createError({
          statusCode: 409,
          statusMessage: "You cannot use your own referral code."
        });
      }
      if (!referralOwner.referralCode) {
        throw createError({
          statusCode: 409,
          statusMessage: "\u06A9\u062F \u0645\u0639\u0631\u0641 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0634\u062F\u0647 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A."
        });
      }
      referrerToAttach = {
        id: referralOwner.id,
        referralCode: referralOwner.referralCode
      };
      resolvedReferrerCode = referrerToAttach.referralCode;
    }
    let picturePath;
    if (avatarFile && avatarFile.filename) {
      const uploadDir = join(process.cwd(), "public", "uploads", "avatars");
      await mkdir(uploadDir, { recursive: true });
      const fileName = `${user.id}-${Date.now()}-${avatarFile.filename}`;
      const filePath = join(uploadDir, fileName);
      await writeFile(filePath, avatarFile.data);
      picturePath = `/uploads/avatars/${fileName}`;
    }
    const updateData = {
      firstName: profileData.firstName ?? user.firstName ?? void 0,
      lastName: profileData.lastName ?? user.lastName ?? void 0,
      role: profileData.role ?? user.role ?? void 0,
      location: profileData.location ?? user.location ?? void 0,
      bio: profileData.bio ?? user.bio ?? void 0,
      profilePicture: picturePath ?? user.profilePicture ?? void 0,
      experience: infoData.experience ?? user.experience ?? void 0,
      firstJob: infoData.firstJob?.value ?? user.firstJob ?? void 0,
      flexible: infoData.flexible?.value ?? user.flexible ?? void 0,
      remote: infoData.remote?.value ?? user.remote ?? void 0,
      facebook: socialData.facebook ?? user.facebook ?? void 0,
      twitter: socialData.twitter ?? user.twitter ?? void 0,
      dribbble: socialData.dribbble ?? user.dribbble ?? void 0,
      instagram: socialData.instagram ?? user.instagram ?? void 0,
      github: socialData.github ?? user.github ?? void 0,
      gitlab: socialData.gitlab ?? user.gitlab ?? void 0,
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (referrerToAttach) {
      updateData.referredBy = { connect: { id: referrerToAttach.id } };
      updateData.credit = { increment: REFERRAL_BONUS_FOR_NEW_USER };
    }
    const updatedUser = await prisma.$transaction(async (tx) => {
      if (referrerToAttach) {
        await tx.user.update({
          where: { id: referrerToAttach.id },
          data: {
            credit: {
              increment: REFERRAL_BONUS_FOR_INVITER
            }
          }
        });
      }
      return tx.user.update({
        where: { id: user.id },
        data: updateData,
        include: {
          referredBy: {
            select: { referralCode: true }
          }
        }
      });
    });
    const responseReferralCode = updatedUser.referralCode ?? "";
    const responseReferredByCode = updatedUser.referredBy?.referralCode ?? resolvedReferrerCode ?? null;
    const responseCredit = updatedUser.credit ?? 0;
    return {
      message: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F",
      id: updatedUser.id,
      username: updatedUser.username || "",
      email: updatedUser.email || "",
      name: updatedUser.name || "",
      firstName: updatedUser.firstName || "",
      lastName: updatedUser.lastName || "",
      profilePicture: updatedUser.profilePicture || "/img/avatars/default-other.jpg",
      role: updatedUser.role || "",
      location: updatedUser.location || "",
      bio: updatedUser.bio || "",
      experience: updatedUser.experience || "",
      firstJob: updatedUser.firstJob ?? null,
      flexible: updatedUser.flexible ?? null,
      remote: updatedUser.remote ?? null,
      facebook: updatedUser.facebook || "",
      twitter: updatedUser.twitter || "",
      dribbble: updatedUser.dribbble || "",
      instagram: updatedUser.instagram || "",
      github: updatedUser.github || "",
      gitlab: updatedUser.gitlab || "",
      verificationCode: updatedUser.verificationCode || "",
      referralCode: responseReferralCode,
      referredByCode: responseReferredByCode,
      credit: responseCredit
    };
  } catch (error) {
    console.error("Error updating profile:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { profile_post as default };
