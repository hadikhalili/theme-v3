import { PrismaClient } from '@prisma/client';
import { d as defineEventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
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
const createOrLoad = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, provider, title } = body;
    if (!userId || !provider || !title) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0634\u0646\u0627\u0633\u0647 \u06A9\u0627\u0631\u0628\u0631\u060C \u0627\u0631\u0627\u0626\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u06CC\u0627 \u0639\u0646\u0648\u0627\u0646 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A"
      });
    }
    let chat = await prisma.chats.findFirst({
      where: { userId, apiProvider: provider }
    });
    if (!chat) {
      chat = await prisma.chats.create({
        data: {
          title,
          userId,
          apiProvider: provider,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }
      });
    }
    const usageLimit = await prisma.usage_limits.upsert({
      where: {
        userId_apiProvider: { userId, apiProvider: provider }
      },
      update: { apiProvider: provider },
      create: {
        userId,
        planId: 1,
        maxMessages: 100,
        messagesUsed: 0,
        maxTokens: 1e4,
        tokensUsed: 0,
        startDate: /* @__PURE__ */ new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3),
        isActive: true,
        apiProvider: provider,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    await prisma.chats.update({
      where: { id: chat.id },
      data: { usageLimitId: usageLimit.id }
    });
    return chat;
  } catch (error) {
    console.error("Error creating or loading chat:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "\u062E\u0637\u0627 \u062F\u0631 \u0627\u06CC\u062C\u0627\u062F \u06CC\u0627 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0686\u062A"
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { createOrLoad as default };
