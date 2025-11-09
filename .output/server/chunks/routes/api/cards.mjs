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

const cards = defineEventHandler(async (event) => {
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
    return [item.cardInfo.name, item.cardInfo.type, item.cardInfo.brand].some(
      (item2) => item2.match(filterRe)
    );
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
      name: "\u06A9\u0627\u0631\u062A \u0645\u0627\u06CC\u0627",
      account: "**** 7623",
      cardInfo: {
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        type: "\u0641\u06CC\u0632\u06CC\u06A9\u06CC",
        brand: "mastercard",
        number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4479",
        expiryYear: "\u2022\u2022",
        expiryMonth: "\u2022\u2022",
        cvc: "\u2022\u2022\u2022",
        status: "\u0641\u0639\u0627\u0644"
      },
      funds: {
        posted: 142.87,
        pending: 0,
        unavailable: 249.99,
        available: 5423.12
      },
      monthSpent: 3642.27,
      daySpent: 177.34,
      dayWithdraw: 0,
      limits: {
        spend: 250,
        withdraw: 500
      },
      address: ["\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633", "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3", "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"]
    },
    {
      id: 2,
      creationDate: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
      name: "\u06A9\u0627\u0631\u062A \u062C\u0627\u0646",
      account: "**** 3215",
      cardInfo: {
        name: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
        type: "\u0641\u06CC\u0632\u06CC\u06A9\u06CC",
        brand: "visa",
        number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 8923",
        expiryYear: "\u2022\u2022",
        expiryMonth: "\u2022\u2022",
        cvc: "\u2022\u2022\u2022",
        status: "\u0641\u0639\u0627\u0644"
      },
      funds: {
        posted: 123.89,
        pending: 12.45,
        unavailable: 0,
        available: 23893.12
      },
      monthSpent: 4371.87,
      daySpent: 623.67,
      dayWithdraw: 600,
      limits: {
        spend: 2e3,
        withdraw: 3e3
      },
      address: ["\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633", "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3", "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"]
    },
    {
      id: 3,
      creationDate: "\u06F1\u06F3 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
      name: "\u06A9\u0627\u0631\u062A \u0645\u062C\u0627\u0632\u06CC \u0627\u0645\u0628\u0631",
      account: "**** 5645",
      cardInfo: {
        name: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
        type: "\u0645\u062C\u0627\u0632\u06CC",
        brand: "mastercard",
        number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 2197",
        expiryYear: "\u2022\u2022",
        expiryMonth: "\u2022\u2022",
        cvc: "\u2022\u2022\u2022",
        status: "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644"
      },
      funds: {
        posted: 11.43,
        pending: 0,
        unavailable: 0,
        available: 2828.21
      },
      monthSpent: 345.12,
      daySpent: 49.99,
      dayWithdraw: 0,
      limits: {
        spend: 250,
        withdraw: 0
      },
      address: ["\u06F1\u06F2\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u06AF", "\u0633\u0648\u0626\u06CC\u062A C2\u060C \u0637\u0628\u0642\u0647 \u06F1", "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"]
    },
    {
      id: 4,
      creationDate: "\u06F2\u06F3 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
      name: "\u06A9\u0627\u0631\u062A \u06A9\u0627\u0644\u0628",
      account: "**** 5645",
      cardInfo: {
        name: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646",
        type: "\u0641\u06CC\u0632\u06CC\u06A9\u06CC",
        brand: "visa",
        number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4479",
        expiryYear: "\u2022\u2022",
        expiryMonth: "\u2022\u2022",
        cvc: "\u2022\u2022\u2022",
        status: "\u0641\u0639\u0627\u0644"
      },
      funds: {
        posted: 0,
        pending: 49.99,
        unavailable: 249.99,
        available: 863.67
      },
      monthSpent: 1242.13,
      daySpent: 21.99,
      dayWithdraw: 0,
      limits: {
        spend: 150,
        withdraw: 100
      },
      address: ["\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633", "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3", "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"]
    },
    {
      id: 5,
      creationDate: "\u06F2\u06F3 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
      name: "\u06A9\u0627\u0631\u062A \u062C\u0646\u06CC\u0641\u0631",
      account: "**** 5645",
      cardInfo: {
        name: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
        type: "\u0645\u062C\u0627\u0632\u06CC",
        brand: "visa",
        number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4479",
        expiryYear: "\u2022\u2022",
        expiryMonth: "\u2022\u2022",
        cvc: "\u2022\u2022\u2022",
        status: "\u0642\u0641\u0644 \u0634\u062F\u0647"
      },
      funds: {
        posted: 0,
        pending: 324.99,
        unavailable: 612.43,
        available: 235.67
      },
      monthSpent: 753.67,
      daySpent: 0,
      dayWithdraw: 0,
      limits: {
        spend: 350,
        withdraw: 100
      },
      address: ["\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633", "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3", "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"]
    }
  ]);
}

export { cards as default };
