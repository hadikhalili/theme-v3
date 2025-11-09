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

const products = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  if (perPage >= 50) {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
  }
  const data = await getDemoData();
  const offset = (page - 1) * perPage;
  const filterRe = new RegExp(filter, "i");
  return {
    total: data.length,
    data: !filter ? data.slice(offset, offset + perPage) : data.filter((item) => {
      return [item.name, item.category].some((item2) => item2.match(filterRe));
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: "\u0645\u0628\u0644 \u062E\u0627\u06A9\u0633\u062A\u0631\u06CC",
      price: 2499.99,
      image: "/img/illustrations/layouts/furniture-1.svg",
      sku: "FC-59859",
      stock: 10,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 1,
      name: "\u0645\u0628\u0644 \u0628\u0647 \u0633\u0628\u06A9 \u0633\u0641\u0627\u0644\u06CC",
      price: 1999.99,
      image: "/img/illustrations/layouts/furniture-2.svg",
      sku: "FC-15984",
      stock: 16,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 2,
      name: "\u0635\u0646\u062F\u0644\u06CC \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u06CC\u06CC",
      price: 899.99,
      image: "/img/illustrations/layouts/furniture-3.svg",
      sku: "FC-48668",
      stock: 24,
      category: "\u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627"
    },
    {
      id: 3,
      name: "\u0645\u0628\u0644 \u0631\u0627\u062D\u062A",
      price: 1499.99,
      image: "/img/illustrations/layouts/furniture-4.svg",
      sku: "FC-75549",
      stock: 17,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 4,
      name: "\u0645\u0628\u0644 \u062E\u0627\u06A9\u0633\u062A\u0631\u06CC \u062A\u062E\u062A",
      price: 1649.99,
      image: "/img/illustrations/layouts/furniture-5.svg",
      sku: "FC-45654",
      stock: 11,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 5,
      name: "\u0645\u0628\u0644 \u0631\u0627\u062D\u062A\u06CC \u062A\u062E\u062A\u200C\u062E\u0648\u0627\u0628\u200C\u0634\u0648",
      price: 1449.49,
      image: "/img/illustrations/layouts/furniture-6.svg",
      sku: "FC-81155",
      stock: 21,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 6,
      name: "\u0645\u0628\u0644 \u0633\u0627\u062F\u0647",
      price: 999.99,
      image: "/img/illustrations/layouts/furniture-7.svg",
      sku: "FC-15898",
      stock: 15,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 7,
      name: "\u0645\u0628\u0644 \u0627\u0645\u067E\u0631\u0627\u062A\u0648\u0631",
      price: 2999.99,
      image: "/img/illustrations/layouts/furniture-8.svg",
      sku: "FC-41599",
      stock: 22,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 8,
      name: "\u0645\u0628\u0644 \u0645\u06CC\u0646\u06CC\u0645\u0627\u0644\u06CC\u0633\u062A\u06CC",
      price: 1299.99,
      image: "/img/illustrations/layouts/furniture-9.svg",
      sku: "FC-16945",
      stock: 8,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 9,
      name: "\u0645\u0628\u0644 Lazyboy",
      price: 899.99,
      image: "/img/illustrations/layouts/furniture-10.svg",
      sku: "FC-84165",
      stock: 9,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 10,
      name: "\u0635\u0646\u062F\u0644\u06CC \u0635\u0648\u0645\u0639\u0647\u200C\u0627\u06CC",
      price: 2499,
      image: "/img/illustrations/layouts/furniture-11.svg",
      sku: "FC-59859",
      stock: 10,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 11,
      name: "\u0645\u0628\u0644 \u0633\u0628\u06A9 \u0631\u0648\u0645\u06CC",
      price: 2499,
      image: "/img/illustrations/layouts/furniture-12.svg",
      sku: "FC-47988",
      stock: 3,
      category: "\u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627"
    },
    {
      id: 12,
      name: "\u0635\u0646\u062F\u0644\u06CC \u0631\u0627\u062D\u062A\u06CC",
      price: 3499.99,
      image: "/img/illustrations/layouts/furniture-13.svg",
      sku: "FC-12654",
      stock: 5,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 13,
      name: "\u0645\u0628\u0644 \u062C\u0645\u0639\u200C\u0648\u062C\u0648\u0631",
      price: 549.99,
      image: "/img/illustrations/layouts/furniture-14.svg",
      sku: "FC-23559",
      stock: 52,
      category: "\u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627"
    },
    {
      id: 14,
      name: "\u0635\u0646\u062F\u0644\u06CC \u0631\u0627\u062D\u062A \u0634\u0631\u0627\u0628",
      price: 1299.99,
      image: "/img/illustrations/layouts/furniture-15.svg",
      sku: "FC-11568",
      stock: 16,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 15,
      name: "\u0645\u0628\u0644 \u0645\u062F\u0631\u0646",
      price: 999.99,
      image: "/img/illustrations/layouts/furniture-16.svg",
      sku: "FC-78589",
      stock: 21,
      category: "\u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627"
    },
    {
      id: 16,
      name: "\u0635\u0646\u062F\u0644\u06CC \u0631\u0627\u062D\u062A\u06CC \u0645\u062F\u0631\u0646",
      price: 1499.99,
      image: "/img/illustrations/layouts/furniture-17.svg",
      sku: "FC-154489",
      stock: 9,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 17,
      name: "\u0645\u0628\u0644 \u0645\u0646\u062D\u0646\u06CC",
      price: 899.99,
      image: "/img/illustrations/layouts/furniture-18.svg",
      sku: "FC-41589",
      stock: 19,
      category: "\u0635\u0646\u062F\u0644\u06CC"
    },
    {
      id: 18,
      name: "\u0645\u0628\u0644 \u0634\u06CC\u06A9",
      price: 1799.99,
      image: "/img/illustrations/layouts/furniture-19.svg",
      sku: "FC-15659",
      stock: 12,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    },
    {
      id: 19,
      name: "\u0645\u0628\u0644 \u062A\u062E\u062A\u200C\u062E\u0648\u0627\u0628\u200C\u0634\u0648",
      price: 1299.99,
      image: "/img/illustrations/layouts/furniture-20.svg",
      sku: "FC-11568",
      stock: 7,
      category: "\u0645\u0628\u0644\u200C\u0647\u0627"
    }
  ]);
}

export { products as default };
