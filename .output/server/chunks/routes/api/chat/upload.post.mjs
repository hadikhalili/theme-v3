import { d as defineEventHandler, b as readMultipartFormData, c as createError } from '../../../runtime.mjs';
import { promises } from 'fs';
import { join } from 'path';
import { nanoid } from 'nanoid';
import 'node:http';
import 'node:https';
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

const upload_post = defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event);
    if (!files || files.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "\u0647\u06CC\u0686 \u0641\u0627\u06CC\u0644\u06CC \u0627\u0631\u0633\u0627\u0644 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"
      });
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf"];
    const maxSize = 10 * 1024 * 1024;
    const uploadDir = join(process.cwd(), "public", "uploads");
    await promises.mkdir(uploadDir, { recursive: true });
    const uploadedFiles = [];
    for (const file of files) {
      if (!file.filename || !file.data || !file.type) {
        throw createError({
          statusCode: 400,
          statusMessage: "\u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0641\u0627\u06CC\u0644 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A"
        });
      }
      if (!allowedTypes.includes(file.type)) {
        throw createError({
          statusCode: 400,
          statusMessage: `\u0646\u0648\u0639 \u0641\u0627\u06CC\u0644 ${file.filename} \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC\u200C\u0634\u0648\u062F`
        });
      }
      if (file.data.length > maxSize) {
        throw createError({
          statusCode: 400,
          statusMessage: `\u062D\u062C\u0645 \u0641\u0627\u06CC\u0644 ${file.filename} \u0628\u06CC\u0634 \u0627\u0632 \u062D\u062F \u0645\u062C\u0627\u0632 (10 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A) \u0627\u0633\u062A`
        });
      }
      const fileExt = file.filename.split(".").pop();
      const uniqueFileName = `${nanoid(10)}.${fileExt}`;
      const filePath = join(uploadDir, uniqueFileName);
      await promises.writeFile(filePath, file.data);
      const fileUrl = `/uploads/${uniqueFileName}`;
      uploadedFiles.push({
        url: fileUrl,
        name: file.filename,
        type: file.type
      });
    }
    return uploadedFiles[0];
  } catch (error) {
    console.error("Error uploading file:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || "\u062E\u0637\u0627 \u062F\u0631 \u0622\u067E\u0644\u0648\u062F \u0641\u0627\u06CC\u0644"
    });
  }
});

export { upload_post as default };
