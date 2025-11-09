import { d as defineEventHandler, g as getQuery } from '../../../runtime.mjs';
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

const incoming = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  if (perPage >= 50) {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
  }
  const data = await getDemoData();
  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage)
  };
});
function filterDemoData(data, filter, page, perPage) {
  const offset = (page - 1) * perPage;
  if (!filter) {
    return data.slice(offset, offset + perPage);
  }
  const filterRe = new RegExp(filter, "i");
  return data.filter((item) => {
    return [item.recipient.name, item.DemoToolbarLanguage].some(
      (item2) => item2.match(filterRe)
    );
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      date: "\u06F1\u06F8 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 387.56,
      status: "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F",
      account: "**** 7623",
      recipient: {
        name: "\u0645\u0644\u0627\u0646\u06CC \u06AF\u0647\u0644\u0631",
        photo: "/img/avatars/25.svg"
      }
    },
    {
      id: 2,
      date: "\u06F1\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 875,
      status: "\u0628\u0627\u0632 \u0634\u062F\u0647",
      account: "**** 7623",
      recipient: {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
        photo: "/img/avatars/16.svg"
      }
    },
    {
      id: 3,
      date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 185,
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      account: "**** 7623",
      recipient: {
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
        photo: "/img/avatars/5.svg"
      }
    },
    {
      id: 4,
      date: "\u06F8 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 580,
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      account: "**** 7623",
      recipient: {
        name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
        photo: "/img/avatars/3.svg"
      }
    },
    {
      id: 5,
      date: "\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 1240,
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      account: "**** 7623",
      recipient: {
        name: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
        photo: "/img/avatars/8.svg"
      }
    },
    {
      id: 6,
      date: "\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 625,
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      account: "**** 7623",
      recipient: {
        name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0627\u0633\u062A\u0631\u06CC\u0645",
        photo: "/img/avatars/20.svg"
      }
    }
  ]);
}

export { incoming as default };
