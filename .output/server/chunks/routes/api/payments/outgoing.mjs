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

const outgoing = defineEventHandler(async (event) => {
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
      date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 387.56,
      status: "scheduled",
      recipient: {
        name: "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC",
        logo: "/img/logos/companies/airbnb.svg"
      }
    },
    {
      id: 2,
      date: "\u06F2\u06F5 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 125.99,
      status: "scheduled",
      recipient: {
        name: "\u0622\u062A\u0644\u0633\u06CC\u0627\u0646",
        logo: "/img/logos/companies/atlassian.svg"
      }
    },
    {
      id: 3,
      date: "\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 52.14,
      status: "scheduled",
      recipient: {
        name: "\u0622\u0645\u0627\u0632\u0648\u0646",
        logo: "/img/logos/companies/amazon.svg"
      }
    },
    {
      id: 4,
      date: "\u06F3 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
      amount: 39.99,
      status: "scheduled",
      recipient: {
        name: "AT&T",
        logo: "/img/logos/companies/att.svg"
      }
    }
  ]);
}

export { outgoing as default };
