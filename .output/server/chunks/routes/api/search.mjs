import { d as defineEventHandler } from '../../runtime.mjs';
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

const search = defineEventHandler(async () => {
  return await getDemoData();
});
async function getDemoData() {
  return Promise.resolve([
    {
      type: "people",
      name: "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644.",
      subtext: "\u0637\u0631\u0627\u062D UI/UX",
      src: "/img/avatars/25.svg",
      text: "ML",
      url: "#"
    },
    {
      type: "people",
      name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
      subtext: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
      src: "/img/avatars/10.svg",
      text: "KW",
      url: "#"
    },
    {
      type: "people",
      name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
      subtext: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0628\u06A9\u200C\u0627\u0646\u062F",
      src: "/img/avatars/16.svg",
      text: "HM",
      url: "#"
    },
    {
      type: "project",
      name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
      src: "/img/apps/1.png",
      subtext: "\u067E\u0631\u0648\u0698\u0647 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628",
      text: "CG",
      url: "#"
    },
    {
      type: "project",
      name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0622\u0645\u0648\u0632\u0634 \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9",
      src: "/img/apps/2.png",
      subtext: "\u067E\u0631\u0648\u0698\u0647 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628",
      text: "CG",
      url: "#"
    },
    {
      type: "people",
      name: "\u06AF\u0631\u062A\u0627 \u06A9.",
      subtext: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
      src: "/img/avatars/24.svg",
      text: "GK",
      url: "#"
    },
    {
      type: "people",
      name: "\u0645\u0627\u06CC\u0627 \u0631.",
      subtext: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
      src: "/img/avatars/2.svg",
      text: "MR",
      url: "#"
    },
    {
      type: "file",
      name: "company-ui-ux-guide.pdf",
      src: "/img/icons/files/pdf.svg",
      subtext: "\u0641\u0627\u06CC\u0644 PDF",
      text: "CG",
      url: "#"
    },
    {
      type: "file",
      name: "company-budget.xlsx",
      src: "/img/icons/files/sheet.svg",
      subtext: "\u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644",
      text: "CG",
      url: "#"
    },
    {
      type: "file",
      name: "company-logo.ai",
      src: "/img/icons/files/ai.svg",
      subtext: "\u0641\u0627\u06CC\u0644 AI",
      text: "AI",
      url: "#"
    },
    {
      type: "project",
      name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0633\u0644\u0627\u0645\u062A \u0648 \u062A\u0646\u0627\u0633\u0628 \u0627\u0646\u062F\u0627\u0645",
      src: "/img/apps/3.png",
      subtext: "\u067E\u0631\u0648\u0698\u0647 \u0648\u0628 \u0627\u067E",
      text: "HF",
      url: "#"
    },
    {
      type: "project",
      name: "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628\u200C\u0627\u067E HR",
      src: "/img/apps/4.png",
      subtext: "\u067E\u0631\u0648\u0698\u0647 \u0637\u0631\u0627\u062D\u06CC \u0648\u0628",
      text: "HR",
      url: "#"
    },
    {
      type: "people",
      name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0633\u06CC.",
      subtext: "\u0645\u0639\u0645\u0627\u0631 \u0631\u0627\u0647\u200C\u062D\u0644",
      src: "/img/avatars/20.svg",
      text: "HC",
      url: "#"
    },
    {
      type: "people",
      name: "\u06A9\u0644\u0627\u0631\u06A9 \u06AF.",
      subtext: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644 \u0627\u0633\u062A\u06A9",
      src: "/img/avatars/3.svg",
      text: "CG",
      url: "#"
    }
  ]);
}

export { search as default };
