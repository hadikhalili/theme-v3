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
const conversations_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const userId = body.userId;
    const requestedTitle = body.title?.trim();
    const provider = body.provider?.trim();
    if (!userId || Number.isNaN(Number(userId))) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0634\u0646\u0627\u0633\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A."
      });
    }
    const chat = await prisma.chats.create({
      data: {
        title: requestedTitle && requestedTitle.length > 0 ? requestedTitle : "\u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F",
        userId,
        apiProvider: provider || null
      },
      include: {
        user: {
          select: {
            name: true,
            profilePicture: true
          }
        }
      }
    });
    const conversation = {
      id: chat.id,
      title: chat.title,
      provider: chat.apiProvider ?? null,
      user: {
        name: chat.user?.name ?? "\u0628\u062F\u0648\u0646 \u0646\u0627\u0645",
        profilePicture: chat.user?.profilePicture ?? "/img/avatars/default-other.jpg"
      },
      messages: []
    };
    return conversation;
  } catch (error) {
    console.error("Error creating conversation:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "\u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F."
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { conversations_post as default };
