import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, a as getCookie, c as createError, s as setCookie } from '../../../runtime.mjs';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
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

const refresh_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const prisma = getPrismaClient(event);
  const body = await readBody(event);
  const refreshToken = body.refreshToken || getCookie(event, "refreshToken");
  if (!refreshToken) {
    throw createError({
      statusCode: 400,
      statusMessage: "Refresh token is required."
    });
  }
  try {
    const rt = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true }
    });
    if (!rt || rt.expiresAt < /* @__PURE__ */ new Date()) {
      throw createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid or expired."
      });
    }
    const accessToken = jwt.sign(
      { id: rt.user.id, username: rt.user.username },
      config.jwtSecret,
      { expiresIn: "1h" }
    );
    const newRefreshToken = nanoid(32);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    await prisma.refreshToken.delete({ where: { token: refreshToken } });
    await prisma.refreshToken.create({
      data: {
        token: newRefreshToken,
        userId: rt.user.id,
        expiresAt
      }
    });
    setCookie(event, "refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      maxAge: 7 * 24 * 60 * 60
    });
    await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: { lte: /* @__PURE__ */ new Date() }
      }
    });
    const userPayload = {
      id: rt.user.id,
      username: rt.user.username,
      email: rt.user.email,
      name: rt.user.name ?? "",
      firstName: rt.user.firstName ?? "",
      lastName: rt.user.lastName ?? "",
      referralCode: rt.user.referralCode ?? "",
      credit: rt.user.credit ?? 0
    };
    return {
      accessToken,
      refreshToken: newRefreshToken,
      user: userPayload
    };
  } catch (error) {
    console.error("Error in refresh token:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || "Failed to refresh token."
    });
  }
});

export { refresh_post as default };
