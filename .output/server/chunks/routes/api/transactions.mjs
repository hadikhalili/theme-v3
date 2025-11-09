import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
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

const transactions = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  if (perPage >= 50) {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
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
    return [item.issuer, item.date, item.status].some(
      (item2) => item2.match(filterRe)
    );
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0634\u06CC\u0631\u06CC\u0646\u06CC\u200C\u062C\u0627\u062A \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627",
      type: "out",
      amount: 52.14,
      account: "**** 7623",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 2,
      date: "\u06F2\u06F5 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0645\u0648\u0631\u06AF\u0627\u0646 \u0633\u06CC\u0633\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F",
      type: "out",
      amount: 428.47,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 3,
      date: "\u06F2\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0648\u0627\u0644\u200C\u0645\u0627\u0631\u062A",
      type: "out",
      amount: 112.23,
      account: "**** 7623",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      method: "\u0686\u06A9"
    },
    {
      id: 4,
      date: "\u06F2\u06F1 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u062C\u0627\u0646 \u0631\u0648\u0644\u0646\u062F",
      type: "out",
      amount: 950,
      account: "**** 7623",
      status: "\u0631\u062F \u0634\u062F\u0647",
      method: "\u0627\u0646\u062A\u0642\u0627\u0644"
    },
    {
      id: 5,
      date: "\u06F1\u06F8 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "LLC \u0647\u0631\u06CC",
      type: "out",
      amount: 24.49,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 6,
      date: "\u06F1\u06F8 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0628\u0627\u0632\u06CC\u200C\u0647\u0627",
      type: "out",
      amount: 89.49,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 7,
      date: "\u06F1\u06F7 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0648\u0627\u0644\u200C\u0645\u0627\u0631\u062A",
      type: "out",
      amount: 143.19,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u0686\u06A9"
    },
    {
      id: 8,
      date: "\u06F1\u06F4 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u062E\u0648\u0627\u0631\u0628\u0627\u0631 \u067E\u0627\u0631\u06A9",
      type: "out",
      amount: 31.22,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 9,
      date: "\u06F1\u06F4 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u062C\u06CC\u0646 \u06A9\u0627\u0644\u0648\u0648\u06CC",
      type: "in",
      amount: 300,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u0627\u0646\u062A\u0642\u0627\u0644"
    },
    {
      id: 10,
      date: "\u06F1\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0647\u0627\u0631\u0648\u0644\u062F \u0628\u0631\u0646\u0631",
      type: "in",
      amount: 575,
      account: "**** 3283",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u0627\u0646\u062A\u0642\u0627\u0644"
    },
    {
      id: 11,
      date: "\u06F1\u06F2 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0627\u0631\u0628\u0646\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F",
      type: "out",
      amount: 79.99,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 12,
      date: "\u06F1\u06F2 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0648\u0627\u0644\u200C\u0645\u0627\u0631\u062A",
      type: "out",
      amount: 84.67,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u0686\u06A9"
    },
    {
      id: 13,
      date: "\u06F1\u06F1 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0622\u0631\u062A\u06A9\u0627\u0645\u060C \u0634\u0631\u06A9\u062A",
      type: "in",
      amount: 5272.99,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u0627\u0646\u062A\u0642\u0627\u0644"
    },
    {
      id: 14,
      date: "\u06F1\u06F1 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0648\u0627\u0645\u200C\u0647\u0627\u06CC HS",
      type: "out",
      amount: 3275.27,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "bank"
    },
    {
      id: 15,
      date: "\u06F1\u06F2 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0633\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0627",
      type: "out",
      amount: 279.44,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 16,
      date: "\u06F1\u06F0 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u067E\u0627\u0631\u06A9 \u062A\u0648\u0626\u06CC\u0633\u062A\u0631",
      type: "out",
      amount: 120,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 17,
      date: "\u06F1\u06F0 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u067E\u06CC\u062A\u0632\u0627\u06CC \u062C\u06CC\u0627\u0646\u06CC",
      type: "out",
      amount: 40.22,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 18,
      date: "\u06F9 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u0633\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0627",
      type: "out",
      amount: 110.31,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 19,
      date: "\u06F7 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u062A\u0627\u06A9\u0648 \u0628\u0644",
      type: "out",
      amount: 31.19,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 20,
      date: "\u06F5 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u062E\u0637\u0648\u0637 \u0647\u0648\u0627\u06CC\u06CC \u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC\u06CC",
      type: "out",
      amount: 489.99,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 21,
      date: "\u06F5 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u062E\u0648\u0627\u0631\u0628\u0627\u0631 \u067E\u0627\u0631\u06A9",
      type: "out",
      amount: 45.52,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 22,
      date: "\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u067E\u06CC\u062A\u0632\u0627\u06CC \u062C\u06CC\u0627\u0646\u06CC",
      type: "out",
      amount: 61.17,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 23,
      date: "\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0627\u0631\u0628\u0646\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F",
      type: "out",
      amount: 156.29,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    },
    {
      id: 24,
      date: "\u06F2 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      issuer: "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647 \u0646\u06CC\u0646\u062A\u0646\u062F\u0648",
      type: "out",
      amount: 265.99,
      account: "**** 7623",
      status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
      method: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"
    }
  ]);
}

export { transactions as default };
