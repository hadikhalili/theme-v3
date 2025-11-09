import bcrypt from 'bcryptjs';
import { d as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import moment from 'moment-timezone';
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

function generateCode() {
  const randomNumber = Math.floor(Math.random() * 1e5);
  return randomNumber.toString().padStart(5, "0");
}
const register = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (event.method === "POST") {
    try {
      const prisma = getPrismaClient(event);
      const { email, password, confirmPassword } = body;
      if (!email || !password || !confirmPassword) {
        return { statusCode: 400, body: { error: "\u062A\u0645\u0627\u0645 \u0641\u06CC\u0644\u062F\u0647\u0627 \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F" } };
      }
      if (password !== confirmPassword) {
        return { statusCode: 400, body: { error: "\u062F\u0648 \u0641\u06CC\u0644\u062F \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u0628\u0627 \u0647\u0645 \u06CC\u06A9\u0633\u0627\u0646 \u0646\u06CC\u0633\u062A" } };
      }
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return { statusCode: 400, body: { error: "Email already exists" } };
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const verificationCode = generateCode();
      const tehranTime = moment().tz("Asia/Tehran").toDate();
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          lastLogin: tehranTime,
          username: email,
          verificationCode,
          isActive: false
          // کاربر هنوز تأیید نشده است
        }
      });
      return {
        statusCode: 201,
        body: {
          message: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\n \u0644\u0637\u0641\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u062F \u0641\u0639\u0627\u0644\u0633\u0627\u0632\u06CC \u0686\u06A9 \u06A9\u0646\u06CC\u062F",
          user: { id: newUser.id, email: newUser.email }
        }
      };
    } catch (error) {
      console.error("Error creating user:", error);
      return { statusCode: 500, body: { error: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0633\u0627\u062E\u062A\u0647 \u0646\u0634\u062F" } };
    } finally {
    }
  } else {
    return { statusCode: 405, body: { error: "\u0631\u0648\u0634 \u063A\u06CC\u0631\u0645\u062C\u0627\u0632" } };
  }
});

export { register as default, generateCode };
