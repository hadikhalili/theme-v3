import { d as defineEventHandler, r as readBody, c as createError, s as setCookie } from '../../../runtime.mjs';
import { compare } from 'bcryptjs';
import { g as generateRefreshToken, a as generateJwtToken } from '../../../_/generateRefreshToken.mjs';
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
import '@prisma/client';

const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1e3;
const login_post = defineEventHandler(async (event) => {
  console.log("[auth/login] request received");
  const { username, password } = await readBody(event);
  console.log("[auth/login] payload", { username });
  if (!username || !password) {
    throw createError({ statusCode: 400, statusMessage: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A." });
  }
  console.log("user pass exist. before getPrismaClient");
  const prisma = getPrismaClient(event);
  console.log("[auth/login] prisma client acquired");
  console.log("user pass exist. after getPrismaClient");
  try {
    const account = await prisma.user.findFirst({
      where: {
        OR: [{ username: username.trim() }, { email: username.trim() }]
      },
      select: {
        id: true,
        username: true,
        email: true,
        name: true,
        firstName: true,
        lastName: true,
        referralCode: true,
        credit: true,
        password: true
      }
    });
    if (!account) {
      console.log("[auth/login] account not found", { username });
      throw createError({ statusCode: 401, statusMessage: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u06CC\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A." });
    }
    const passwordMatches = await compare(password, account.password);
    if (!passwordMatches) {
      console.log("[auth/login] password mismatch", { username });
      throw createError({ statusCode: 401, statusMessage: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u06CC\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A." });
    }
    const now = /* @__PURE__ */ new Date();
    const refreshTokenValue = generateRefreshToken(event, account.id);
    const refreshTokenExpiresAt = new Date(now.getTime() + REFRESH_TOKEN_TTL_MS);
    await prisma.$transaction(async (tx) => {
      await tx.refreshToken.deleteMany({ where: { userId: account.id } });
      await tx.user.update({
        where: { id: account.id },
        data: { lastLogin: now }
      });
      await tx.refreshToken.create({
        data: {
          token: refreshTokenValue,
          userId: account.id,
          expiresAt: refreshTokenExpiresAt
        }
      });
    });
    console.log("[auth/login] refresh token saved", { userId: account.id });
    setCookie(event, "refreshToken", refreshTokenValue, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      maxAge: REFRESH_TOKEN_TTL_MS / 1e3
    });
    const accessToken = generateJwtToken(account.id, event);
    console.log("[auth/login] access token generated", { userId: account.id });
    return {
      accessToken,
      refreshToken: refreshTokenValue,
      user: {
        id: account.id,
        username: account.username,
        email: account.email,
        name: account.name ?? "",
        firstName: account.firstName ?? "",
        lastName: account.lastName ?? "",
        referralCode: account.referralCode ?? "",
        credit: account.credit ?? 0
      }
    };
  } catch (error) {
    if (error?.statusCode && error?.statusMessage) {
      throw error;
    }
    console.error("[auth/login] unexpected error", error);
    throw createError({ statusCode: 500, statusMessage: "\u062E\u0637\u0627\u06CC\u06CC \u062F\u0631 \u0648\u0631\u0648\u062F \u0631\u062E \u062F\u0627\u062F." });
  }
});

export { login_post as default };
