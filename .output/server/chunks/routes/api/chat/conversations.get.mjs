import { d as defineEventHandler, g as getQuery, c as createError } from '../../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
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
const getRelativeDate = (date) => {
  const today = /* @__PURE__ */ new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const isToday = date.toDateString() === today.toDateString();
  const isYesterday = date.toDateString() === yesterday.toDateString();
  return isToday ? "\u0627\u0645\u0631\u0648\u0632" : isYesterday ? "\u062F\u06CC\u0631\u0648\u0632" : date.toLocaleDateString("fa-IR");
};
const formatTime = (date) => {
  return date.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
};
function isValidJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}
const conversations_get = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const userId = query.userId ? parseInt(query.userId) : void 0;
    const provider = query.provider;
    if (!userId || isNaN(userId)) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0634\u0646\u0627\u0633\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A"
      });
    }
    const whereClause = { userId };
    const chats = await prisma.chats.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePicture: true
          }
        },
        Messages: {
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            content: true,
            isBotMessage: true,
            createdAt: true,
            apiResponse: true,
            attachments: true
            // انتخاب فیلد جدید
          }
        }
      }
    });
    const orderedChats = provider ? [...chats].sort((a, b) => {
      const aMatch = a.apiProvider === provider ? 1 : 0;
      const bMatch = b.apiProvider === provider ? 1 : 0;
      return bMatch - aMatch;
    }) : chats;
    const conversations = orderedChats.map((chat) => {
      const messagesByDate = chat.Messages.reduce((acc, message) => {
        const dateKey = getRelativeDate(message.createdAt);
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(message);
        return acc;
      }, {});
      const messages = [];
      Object.keys(messagesByDate).sort((a, b) => new Date(a).getTime() - new Date(b).getTime()).forEach((date) => {
        messages.push({
          type: "separator",
          text: "",
          time: date,
          attachments: []
        });
        messagesByDate[date].forEach((message) => {
          let attachments = [];
          if (message.attachments && typeof message.attachments === "string" && isValidJson(message.attachments)) {
            try {
              attachments = JSON.parse(message.attachments).map((att) => {
                console.log(`Attachment type in conversations: ${att.type}`);
                return {
                  type: att.type && att.type.startsWith("image/") ? "image" : "file",
                  url: att.url,
                  image: att.type && att.type.startsWith("image/") ? att.url : void 0,
                  text: att.name,
                  name: att.name
                };
              });
            } catch (err) {
              console.error("Error parsing attachments:", err);
            }
          }
          messages.push({
            type: "sent",
            text: message.content,
            time: formatTime(message.createdAt),
            attachments
          });
          let apiResponseText = "\u067E\u0627\u0633\u062E API";
          let apiResponseAttachments = [];
          if (message.apiResponse && isValidJson(message.apiResponse)) {
            try {
              const apiResponseData = JSON.parse(message.apiResponse);
              apiResponseText = apiResponseData.text || "\u067E\u0627\u0633\u062E API";
              if (apiResponseData.attachments && Array.isArray(apiResponseData.attachments)) {
                apiResponseAttachments = apiResponseData.attachments.map((att) => ({
                  type: att.type && att.type.startsWith("image/") ? "image" : "file",
                  url: att.url,
                  image: att.type && att.type.startsWith("image/") ? att.url : void 0,
                  text: att.name,
                  name: att.name
                }));
              }
            } catch (err) {
              console.error("Error parsing apiResponse:", err);
            }
          }
          messages.push({
            type: "received",
            text: apiResponseText,
            time: formatTime(new Date(message.createdAt.getTime() + 1e3)),
            // زمان کمی بعد از پیام اول
            attachments: apiResponseAttachments
          });
        });
      });
      return {
        id: chat.id,
        title: chat.title,
        user: {
          name: chat.user.name ?? "\u0628\u062F\u0648\u0646 \u0646\u0627\u0645",
          profilePicture: chat.user.profilePicture ?? "/img/avatars/default-other.jpg"
        },
        messages,
        provider: chat.apiProvider ?? null
      };
    });
    return conversations;
  } catch (error) {
    console.error("Error fetching conversations:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "\u062E\u0637\u0627 \u062F\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0645\u06A9\u0627\u0644\u0645\u0627\u062A"
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { conversations_get as default };
