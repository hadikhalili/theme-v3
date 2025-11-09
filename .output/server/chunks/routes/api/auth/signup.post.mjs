import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
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
import '@prisma/client';

const REFERRAL_BONUS_FOR_NEW_USER = 20;
const REFERRAL_BONUS_FOR_INVITER = 50;
const MAX_VERIFICATION_CODE_ATTEMPTS = 5;
const MAX_REFERRAL_CODE_ATTEMPTS = 5;
const signupSchema = z.object({
  username: z.string().min(3, "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F3 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F"),
  email: z.string().email("\u0627\u06CC\u0645\u06CC\u0644 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A"),
  referralCode: z.string().optional(),
  password: z.string().min(8, "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F8 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F"),
  confirmPassword: z.string()
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "\u0631\u0645\u0632\u0647\u0627\u06CC \u0639\u0628\u0648\u0631 \u0645\u0637\u0627\u0628\u0642\u062A \u0646\u062F\u0627\u0631\u0646\u062F",
      path: ["confirmPassword"]
    });
  }
  if (data.password.includes(data.email)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0634\u0627\u0645\u0644 \u0627\u06CC\u0645\u06CC\u0644 \u0628\u0627\u0634\u062F",
      path: ["password"]
    });
  }
});
function generateVerificationCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}
function generateReferralCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}
const signup_post = defineEventHandler(async (event) => {
  try {
    const prisma = getPrismaClient(event);
    const body = await readBody(event);
    const validatedData = signupSchema.parse(body);
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validatedData.email },
          { username: validatedData.username }
        ]
      }
    });
    if (existingUser) {
      if (existingUser.email === validatedData.email) {
        throw new Error("\u0627\u06CC\u0645\u06CC\u0644 \u0642\u0628\u0644\u0627\u064B \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A");
      }
      if (existingUser.username === validatedData.username) {
        throw new Error("\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0642\u0628\u0644\u0627\u064B \u06AF\u0631\u0641\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A");
      }
    }
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const referralCodeInput = validatedData.referralCode?.trim();
    const sanitizedReferralInput = referralCodeInput ? referralCodeInput.toUpperCase().replace(/[^A-Z0-9]/g, "") : "";
    const referralCodeFromInput = sanitizedReferralInput.length > 0 ? sanitizedReferralInput : void 0;
    let referrer = null;
    if (referralCodeFromInput) {
      referrer = await prisma.user.findUnique({
        where: { referralCode: referralCodeFromInput },
        select: { id: true }
      });
      if (!referrer) {
        throw new Error("\u06A9\u062F \u0645\u0639\u0631\u0641 \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A");
      }
    }
    let verificationCode = generateVerificationCode();
    let verificationAttempts = 0;
    while (await prisma.user.findUnique({ where: { verificationCode } })) {
      verificationAttempts += 1;
      if (verificationAttempts >= MAX_VERIFICATION_CODE_ATTEMPTS) {
        throw new Error("\u0627\u0645\u06A9\u0627\u0646 \u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0628\u0631\u0648\u0632 \u062E\u0637\u0627 \u062F\u0631 \u062A\u0648\u0644\u06CC\u062F \u06A9\u062F \u0645\u0646\u062D\u0635\u0631\u0628\u0647\u200C\u0641\u0631\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0644\u0637\u0641\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F.");
      }
      verificationCode = generateVerificationCode();
    }
    let generatedReferralCode = generateReferralCode();
    let referralAttempts = 0;
    while (await prisma.user.findUnique({ where: { referralCode: generatedReferralCode } })) {
      referralAttempts += 1;
      if (referralAttempts >= MAX_REFERRAL_CODE_ATTEMPTS) {
        throw new Error("\u0627\u0645\u06A9\u0627\u0646 \u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0628\u0631\u0648\u0632 \u062E\u0637\u0627 \u062F\u0631 \u062A\u0648\u0644\u06CC\u062F \u06A9\u062F \u0645\u0639\u0631\u0641 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0644\u0637\u0641\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F.");
      }
      generatedReferralCode = generateReferralCode();
    }
    const user = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          username: validatedData.username,
          email: validatedData.email,
          password: hashedPassword,
          verificationCode,
          referralCode: generatedReferralCode,
          referredById: referrer?.id ?? null,
          credit: referrer ? REFERRAL_BONUS_FOR_NEW_USER : 0,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }
      });
      if (referrer) {
        await tx.user.update({
          where: { id: referrer.id },
          data: {
            credit: {
              increment: REFERRAL_BONUS_FOR_INVITER
            }
          }
        });
      }
      return createdUser;
    });
    return {
      statusCode: 201,
      message: `\u062D\u0633\u0627\u0628 \u0628\u0631\u0627\u06CC ${user.username} \u0627\u06CC\u062C\u0627\u062F \u0634\u062F`,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        credit: user.credit,
        referralCode: user.referralCode,
        verificationCode: user.verificationCode,
        referredById: user.referredById
      }
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        message: "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC",
        errors: error.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message
        }))
      };
    }
    return {
      statusCode: 400,
      message: error.message || "\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A\u200C\u0646\u0627\u0645"
    };
  } finally {
  }
});

export { signup_post as default };
