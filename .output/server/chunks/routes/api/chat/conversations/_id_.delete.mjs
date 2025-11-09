import { PrismaClient } from '@prisma/client';
import { d as defineEventHandler, c as createError, r as readBody } from '../../../../runtime.mjs';
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
const _id__delete = defineEventHandler(async (event) => {
  const params = event.context.params || {};
  const chatId = Number(params.id);
  if (!chatId || Number.isNaN(chatId)) {
    throw createError({
      statusCode: 400,
      statusMessage: "\u0634\u0646\u0627\u0633\u0647 \u0645\u06A9\u0627\u0644\u0645\u0647 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A."
    });
  }
  let userId;
  try {
    const body = await readBody(event);
    if (body?.userId) {
      userId = Number(body.userId);
    }
  } catch {
  }
  try {
    await prisma.$transaction(async (tx) => {
      const chat = await tx.chats.findUnique({
        where: { id: chatId },
        select: {
          id: true,
          userId: true
        }
      });
      if (!chat) {
        throw createError({
          statusCode: 404,
          statusMessage: "\u0645\u06A9\u0627\u0644\u0645\u0647 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F."
        });
      }
      if (userId && chat.userId !== userId) {
        throw createError({
          statusCode: 403,
          statusMessage: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0627\u06CC\u0646 \u0645\u06A9\u0627\u0644\u0645\u0647 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A."
        });
      }
      await tx.messages.deleteMany({ where: { chatId } });
      await tx.chats.delete({ where: { id: chatId } });
    });
    return { id: chatId };
  } catch (error) {
    console.error("Error deleting conversation:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "\u062D\u0630\u0641 \u0645\u06A9\u0627\u0644\u0645\u0647 \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F."
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { _id__delete as default };
