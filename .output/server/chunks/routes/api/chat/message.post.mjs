import { PrismaClient } from '@prisma/client';
import { d as defineEventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
import OpenAI from 'openai';
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
const buildAttachments = (items) => {
  return items.map((att) => ({
    type: att.type.startsWith("image/") ? "image" : "file",
    url: att.url,
    ...att.type.startsWith("image/") ? { image: att.url } : {},
    text: att.name,
    name: att.name
  }));
};
const buildConversationForModel = (messages, latestUserMessage) => {
  const history = [
    { role: "system", content: "You are a helpful assistant." }
  ];
  for (const item of messages) {
    const content = item.content?.trim();
    if (content) {
      history.push({ role: "user", content });
    }
    if (item.apiResponse) {
      try {
        const parsed = JSON.parse(item.apiResponse);
        if (parsed?.text) {
          history.push({ role: "assistant", content: String(parsed.text) });
        }
      } catch {
      }
    }
  }
  const trimmedLatest = latestUserMessage.trim();
  history.push({ role: "user", content: trimmedLatest || "\u067E\u06CC\u0627\u0645\u06CC \u062B\u0628\u062A \u0646\u0634\u062F" });
  return history;
};
const message_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { userId, conversationId, message, attachments = [] } = body;
    if (!userId || !conversationId || !message.text && !attachments.length) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 \u062C\u062F\u06CC\u062F \u0627\u0645\u06A9\u0627\u0646\u200C\u067E\u0630\u06CC\u0631 \u0646\u06CC\u0633\u062A. \u0645\u062A\u0646 \u067E\u06CC\u0627\u0645 \u06CC\u0627 \u0641\u0627\u06CC\u0644 \u067E\u06CC\u0648\u0633\u062A \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A."
      });
    }
    const chat = await prisma.chats.findUnique({
      where: { id: conversationId }
    });
    if (!chat || chat.userId !== userId) {
      throw createError({
        statusCode: 404,
        statusMessage: "\u0645\u06A9\u0627\u0644\u0645\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u06CC\u0646 \u0645\u0634\u062E\u0635\u0627\u062A \u06CC\u0627\u0641\u062A \u0646\u0634\u062F."
      });
    }
    const mappedAttachments = buildAttachments(attachments);
    const attachmentsPayload = mappedAttachments.length ? mappedAttachments.map((att) => {
      const payload = {
        type: att.type,
        url: att.url,
        text: att.text
      };
      if (att.image)
        payload.image = att.image;
      if (att.name)
        payload.name = att.name;
      return payload;
    }) : void 0;
    const rawUserText = message.text?.trim() || "";
    const attachmentsSummary = mappedAttachments.map((att) => `${att.type === "image" ? "\u062A\u0635\u0648\u06CC\u0631" : "\u0641\u0627\u06CC\u0644"}: ${att.name || att.url}`).join("\n");
    const llmSegments = [];
    if (rawUserText) {
      llmSegments.push(rawUserText);
    }
    if (attachmentsSummary) {
      llmSegments.push(`\u067E\u06CC\u0648\u0633\u062A\u200C\u0647\u0627:
${attachmentsSummary}`);
    }
    const llmMessageText = llmSegments.join("\n\n");
    const storedContent = rawUserText || (mappedAttachments.length ? "\u067E\u06CC\u0648\u0633\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F" : "\u067E\u06CC\u0627\u0645\u06CC \u062B\u0628\u062A \u0646\u0634\u062F");
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u06A9\u0644\u06CC\u062F OpenAI \u062A\u0646\u0638\u06CC\u0645 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A."
      });
    }
    const openai = new OpenAI({ apiKey });
    const previousMessages = await prisma.messages.findMany({
      where: { chatId: conversationId },
      orderBy: { createdAt: "asc" },
      select: { content: true, apiResponse: true }
    });
    const recentHistory = previousMessages.slice(-10);
    const requestMessages = buildConversationForModel(recentHistory, llmMessageText || storedContent);
    const completion = await openai.chat.completions.create({
      model: chat.apiProvider || process.env.OPENAI_DEFAULT_MODEL || "gpt-3.5-turbo",
      messages: requestMessages
    });
    const replyText = completion.choices?.[0]?.message?.content?.trim() || "\u2757\uFE0F \u067E\u0627\u0633\u062E\u06CC \u0627\u0632 \u0645\u062F\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0634\u062F.";
    const createdMessage = await prisma.messages.create({
      data: {
        title: "\u067E\u06CC\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631",
        content: storedContent,
        senderId: userId,
        chatId: conversationId,
        isBotMessage: false,
        apiResponse: JSON.stringify({ text: replyText, attachments: [] }),
        attachments: attachmentsPayload,
        apiRequestTokens: completion.usage?.prompt_tokens ?? 0,
        apiResponseTokens: completion.usage?.completion_tokens ?? 0
      }
    });
    const formattedMessage = {
      type: "sent",
      text: createdMessage.content,
      time: createdMessage.createdAt.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }),
      attachments: mappedAttachments
    };
    const assistantMessage = {
      type: "received",
      text: replyText,
      time: (/* @__PURE__ */ new Date()).toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }),
      attachments: []
    };
    return [formattedMessage, assistantMessage];
  } catch (error) {
    console.error("Error creating message:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "\u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F."
    });
  } finally {
    await prisma.$disconnect();
  }
});

export { message_post as default };
