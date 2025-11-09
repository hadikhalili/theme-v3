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

const index = defineEventHandler(async (event) => {
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
    return [item.type, item.owner.name].some((item2) => item2.match(filterRe));
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      type: "\u062C\u0627\u0631\u06CC",
      number: "**** 4897",
      balance: 9543.12,
      owner: {
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        avatar: "/img/avatars/10.svg",
        slug: "maya-rosselini"
      },
      details: {
        routingNumber: "856854851",
        accountNumber: "1487 3256 54122 4897",
        iban: "AB-NXC",
        bankCode: "BNK-486155"
      },
      history: [
        {
          name: "\u0645\u0648\u062C\u0648\u062F\u06CC",
          data: [
            3143.16,
            4298.49,
            2876.54,
            5183.76,
            4232.87,
            10876.56,
            9543.12
          ]
        }
      ]
    },
    {
      id: 2,
      type: "\u062C\u0627\u0631\u06CC",
      number: "**** 4869",
      balance: 1211.67,
      owner: {
        name: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
        avatar: "/img/avatars/8.svg",
        slug: "john-baxter"
      },
      details: {
        routingNumber: "856854851",
        accountNumber: "3524 65456 3245 4869",
        iban: "AB-NXC",
        bankCode: "BNK-486155"
      },
      history: [
        {
          name: "\u0645\u0648\u062C\u0648\u062F\u06CC",
          data: [4629.43, 2349.38, 5649.98, 6239.83, 3492.23, 2420.37, 1211.67]
        }
      ]
    },
    {
      id: 3,
      type: "\u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632",
      number: "**** 6279",
      balance: 4653.97,
      owner: {
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        avatar: "/img/avatars/7.svg",
        slug: "maya-rosselini"
      },
      details: {
        routingNumber: "856854851",
        accountNumber: "3524 65456 3245 4869",
        iban: "AB-NXC",
        bankCode: "BNK-486155"
      },
      history: [
        {
          name: "\u0645\u0648\u062C\u0648\u062F\u06CC",
          data: [364.32, 932.38, 1538.39, 2378.89, 3229.23, 3931.19, 4653.97]
        }
      ]
    }
  ]);
}

export { index as default };
