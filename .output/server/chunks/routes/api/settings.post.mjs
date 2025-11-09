import { g as getPrismaClient } from '../../_/prisma.mjs';
import { d as defineEventHandler, r as readBody, c as createError } from '../../runtime.mjs';
import { compare, hash } from 'bcryptjs';
import '@prisma/client';
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

const settings_post = defineEventHandler(async (event) => {
  try {
    const prisma = getPrismaClient(event);
    const body = await readBody(event);
    const { userId, currentPassword, newPassword, twoFactor, notifications } = body;
    if (!userId) {
      throw createError({ statusCode: 400, statusMessage: "\u0634\u0646\u0627\u0633\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A" });
    }
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      select: { id: true, password: true }
    });
    if (!user) {
      throw createError({ statusCode: 404, statusMessage: "\u06A9\u0627\u0631\u0628\u0631 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F" });
    }
    const isPasswordValid = await compare(currentPassword, user.password);
    if (!isPasswordValid) {
      throw createError({ statusCode: 401, statusMessage: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0641\u0639\u0644\u06CC \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A" });
    }
    const updateData = {};
    if (newPassword) {
      updateData.password = await hash(newPassword, 10);
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
        updatedAt: /* @__PURE__ */ new Date()
      },
      create: {
        userId: user.id,
        twoFactorEnabled: twoFactor.enabled,
        phoneNumber: twoFactor.phoneNumber || null,
        notificationsEnabled: notifications.enabled,
        flushLowPriority: notifications.flushLowPriority,
        marketing: notifications.marketing,
        partners: notifications.partners,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    if (Object.keys(updateData).length > 0) {
      await prisma.user.update({
        where: { id: user.id },
        data: updateData
      });
    }
    return {
      message: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F"
    };
  } catch (error) {
    console.error("Error updating settings:", error);
    throw createError({ statusCode: error.statusCode || 500, statusMessage: error.statusMessage || "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u062A\u0646\u0638\u06CC\u0645\u0627\u062A" });
  } finally {
  }
});

export { settings_post as default };
