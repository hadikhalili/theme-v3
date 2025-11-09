import { d as defineEventHandler, r as readBody, c as createError, s as setCookie } from '../../../runtime.mjs';
import moment from 'moment-timezone';
import { g as generateRefreshToken, a as generateJwtToken } from '../../../_/generateRefreshToken.mjs';
import { generateCode } from './register.mjs';
import { g as getPrismaClient } from '../../../_/prisma.mjs';
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
import 'jsonwebtoken';
import 'bcryptjs';
import '@prisma/client';

const MAX_REFERRAL_CODE_ATTEMPTS = 5;
const splitFullName = (fullName) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }
  const firstName = parts.shift() ?? "";
  const lastName = parts.join(" ");
  return {
    firstName,
    lastName
  };
};
const generateReferralCode = () => Math.random().toString(36).substring(2, 10).toUpperCase();
const ensureReferralCode = async (prisma) => {
  let attempts = 0;
  let referralCode = generateReferralCode();
  while (await prisma.user.findUnique({ where: { referralCode } })) {
    attempts += 1;
    if (attempts >= MAX_REFERRAL_CODE_ATTEMPTS) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u0627\u0645\u06A9\u0627\u0646 \u062A\u0648\u0644\u06CC\u062F \u06A9\u062F \u0645\u0639\u0631\u0641 \u0645\u0646\u062D\u0635\u0631\u0628\u0647\u200C\u0641\u0631\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0644\u0637\u0641\u0627\u064B \u0628\u0639\u062F\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F."
      });
    }
    referralCode = generateReferralCode();
  }
  return referralCode;
};
const googleAuth = defineEventHandler(async (event) => {
  const prisma = getPrismaClient(event);
  const { googleId, email, name } = await readBody(event);
  if (!googleId || !email || !name) {
    throw createError({ statusCode: 400, message: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A." });
  }
  try {
    const { firstName, lastName } = splitFullName(name);
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ googleId }, { email }]
      }
    });
    if (user && !user.googleId) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { googleId }
      });
    }
    const tehranTime = moment().tz("Asia/Tehran").toDate();
    const verificationCode = generateCode();
    if (!user) {
      let username = email.split("@")[0];
      let suffix = 1;
      while (await prisma.user.findUnique({ where: { username } })) {
        username = `${email.split("@")[0]}_${suffix}`;
        suffix += 1;
      }
      const referralCode = await ensureReferralCode(prisma);
      user = await prisma.user.create({
        data: {
          googleId,
          email,
          username,
          name,
          firstName,
          lastName: lastName || null,
          password: "",
          verificationCode,
          isActive: true,
          lastLogin: tehranTime,
          referralCode
        }
      });
    } else {
      const updates = {
        lastLogin: tehranTime
      };
      if (!user.firstName && firstName) {
        updates.firstName = firstName;
      }
      if (!user.lastName && lastName) {
        updates.lastName = lastName;
      }
      if (!user.referralCode) {
        updates.referralCode = await ensureReferralCode(prisma);
      }
      user = await prisma.user.update({
        where: { id: user.id },
        data: updates
      });
    }
    await prisma.refreshToken.deleteMany({
      where: { userId: user.id }
    });
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    const refreshTokenValue = generateRefreshToken(event, user.id);
    await prisma.refreshToken.create({
      data: {
        token: refreshTokenValue,
        userId: user.id,
        expiresAt
      }
    });
    setCookie(event, "refreshToken", refreshTokenValue, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60
    });
    const accessToken = generateJwtToken(user.id, event);
    await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: { lte: /* @__PURE__ */ new Date() }
      }
    });
    return {
      accessToken,
      refreshToken: refreshTokenValue,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        referralCode: user.referralCode || "",
        credit: user.credit ?? 0
      }
    };
  } catch (error) {
    console.error("Error in Google authentication:", error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || "\u062E\u0637\u0627\u06CC\u06CC \u062F\u0631 \u0648\u0631\u0648\u062F \u0628\u0627 \u06AF\u0648\u06AF\u0644 \u0631\u062E \u062F\u0627\u062F."
    });
  }
});

export { googleAuth as default };
