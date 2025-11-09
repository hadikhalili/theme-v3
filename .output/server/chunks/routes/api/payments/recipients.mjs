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

const recipients = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  const slug = query.slug || "";
  if (perPage >= 150) {
    await new Promise((resolve) => setTimeout(resolve, 1e3));
  }
  const data = await getDemoData();
  const recipient = data.find((item) => item.slug === slug);
  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
    recipient
  };
});
function filterDemoData(data, filter, page, perPage) {
  const offset = (page - 1) * perPage;
  if (!filter) {
    return data.slice(offset, offset + perPage);
  }
  const filterRe = new RegExp(filter, "i");
  return data.filter((item) => {
    return [item.name, item.category].some((item2) => item2.match(filterRe));
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      type: "company",
      name: "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC",
      slug: "airbnb",
      category: "\u0634\u0631\u06A9\u062A \u0645\u0633\u06A9\u0646",
      picture: "/img/logos/companies/airbnb.svg",
      email: "hello@airbnb.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-23413",
      phoneNumber: "+1 202-423-4313",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F1\u06F2\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0627\u0646 \u0627\u0633\u062A\u0641\u0627\u0646\u0648\u060C \u0648\u0627\u062D\u062F \u06F4\u06F3\u060C \u0637\u0628\u0642\u0647 \u0627\u0648\u0644",
        "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 \u06F9\u06F1\u06F2\u06F3\u06F4"
      ],
      paymentMethod: {
        name: "stripe"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 275.31,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.28,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 387.14,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 628.12,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 153.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 311.13,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 251.39,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 742.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 2,
      type: "person",
      name: "\u062C\u06A9\u06CC \u0627\u0633\u062A\u0631\u0627\u0648\u0633",
      slug: "jackie-strauss",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/9.svg",
      email: "jackiestrauss@eltheme.ir",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-392323",
      phoneNumber: "+1 202-555-0176",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627 \u06F1\u06F4\u06F8\u060C \u0648\u0627\u062D\u062F D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
        "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 \u06F1\u06F0\u06F0\u06F0\u06F1"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 3,
      type: "company",
      name: "AT&T",
      slug: "att",
      category: "\u0634\u0631\u06A9\u062A \u062A\u0644\u0641\u0646",
      picture: "/img/logos/companies/att.svg",
      email: "hello@att.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-231331",
      phoneNumber: "+1 131-424-4828",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F4\u06F2\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0628\u0631\u0646\u062A\u0645\u0646\u060C \u0633\u0648\u0626\u06CC\u062A \u06F1\u06F2\u06F4\u060C \u0637\u0628\u0642\u0647 \u06F2\u06F7",
        "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633\u060C NV \u06F9\u06F2\u06F3\u06F4\u06F7"
      ],
      paymentMethod: {
        name: "stripe"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "in",
          amount: 59.13,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F4 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 4,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 9,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 4,
      type: "company",
      name: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
      slug: "gitlab",
      category: "\u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC",
      picture: "/img/logos/companies/gitlab.svg",
      email: "contact@gitlab.com",
      status: "inactive",
      taxId: "TX-429932",
      phoneNumber: "+1 131-424-4828",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u0628\u0632\u0631\u06AF\u0631\u0627\u0647 \u0633\u0646 \u0645\u0627\u0631\u06CC\u0646\u0627 \u06F1\u06F2\u060C \u0633\u0648\u0626\u06CC\u062A U12\u060C \u0637\u0628\u0642\u0647 \u06F5",
        "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 91482"
      ],
      paymentMethod: {
        name: "stripe"
      },
      transactions: []
    },
    {
      id: 5,
      type: "company",
      name: "\u0622\u0645\u0627\u0632\u0648\u0646",
      slug: "amazon",
      category: "\u0634\u0631\u06A9\u062A \u0628\u0627\u0632\u0631\u06AF\u0627\u0646\u06CC",
      picture: "/img/logos/companies/amazon.svg",
      email: "contact@amazon.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-849283",
      phoneNumber: "+1 311-423-5231",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0646\u0647\u062A\u0646 \u06F1\u06F4\u060C \u0633\u0648\u0626\u06CC\u062A \u06F2\u06F3\u06F1\u060C \u0637\u0628\u0642\u0647 \u06F4\u06F5",
        "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 \u06F8\u06F4\u06F2\u06F9\u06F9"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 382.38,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "in",
          amount: 16.31,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F4 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 128.28,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 4,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 31.17,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 483.19,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 76.87,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 12.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 59.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 9,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 131.48,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 6,
      type: "person",
      name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
      slug: "hermann-mayer",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/16.svg",
      email: "hermannm@eltheme.ir",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-24231",
      phoneNumber: "+1 231-555-2431",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "UK",
      address: ["\u06F3\u06F4\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0644\u0631\u062F \u0622\u06CC\u0631\u0648\u0646\u0633\u060C \u0622\u067E \u06F4\u06F4\u060C \u0637\u0628\u0642\u0647 \u0633\u0648\u0645\u060C \u0644\u0646\u062F\u0646\u060C \u0627\u0646\u06AF\u0644\u0633\u062A\u0627\u0646 \u06F3\u06F1\u06F3\u06F1\u06F1"],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 7,
      type: "person",
      name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
      slug: "clark-smith",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/15.svg",
      email: "karlsmith@eltheme.ir",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-4231",
      phoneNumber: "+1 231-555-2431",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0622\u0644\u0645\u0627\u0646",
      address: ["\u06F4\u06F1\u060C \u0628\u0644\u0648\u0627\u0631 \u0641\u0631\u06CC\u06A9\u0646\u0647\u0627\u0648\u0631\u060C \u0622\u067E \u06F1\u06F1\u060C \u0637\u0628\u0642\u0647 \u0627\u0648\u0644\u060C \u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646 \u06F4\u06F7\u06F5\u06F8\u06F4"],
      paymentMethod: {
        name: "stripe"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 8,
      type: "person",
      name: "\u0622\u0631\u0648\u0646 \u067E\u062A\u0631\u0633\u0648\u0646",
      slug: "aaron-patterson",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/14.svg",
      email: "aaronp@eltheme.ir",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-32332",
      phoneNumber: "+1 231-555-2431",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F3\u06F5\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0631\u06CC\u0646\u0645\u0627\u0646\u060C \u0628\u0644\u0648\u06A9 C4\u060C \u0637\u0628\u0642\u0647 \u062F\u0648\u0645",
        "\u0633\u0646 \u062F\u06CC\u06AF\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 \u06F9\u06F1\u06F3\u06F4\u06F2"
      ],
      paymentMethod: {
        name: "stripe"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 9,
      type: "person",
      name: "\u062C\u0627\u0646 \u06A9\u0627\u0631\u06CC\u0644\u0648",
      slug: "john-carillo",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/1.svg",
      email: "carilloj@eltheme.ir",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-42442",
      phoneNumber: "+1 231-555-2431",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u062E\u06CC\u0627\u0628\u0627\u0646 \u06F3\u06F5\u060C \u0631\u0627\u06CC\u0646\u0645\u0627\u0646\u060C \u0633\u0648\u0626\u06CC\u062A A2\u060C \u0637\u0628\u0642\u0647 \u06F1",
        "\u0633\u0627\u0646\u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 \u06F9\u06F1\u06F3\u06F4\u06F2"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 10,
      type: "person",
      name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
      slug: "kendra-wilson",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/10.svg",
      email: "kendraw@eltheme.ir",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-54422",
      phoneNumber: "+1 123-424-6244",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F2\u060C \u062C\u0627\u062F\u0647 \u0633\u0646 \u0631\u0648\u06A9\u0647\u060C \u0628\u0644\u0648\u06A9 B2\u060C \u0633\u0648\u0626\u06CC\u062A B24",
        "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C CA 91342"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 11,
      type: "person",
      name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0627\u0633\u062A\u0631\u06CC\u0645",
      slug: "howard-streim",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/20.svg",
      email: "hstreim@gmail.com",
      status: "inactive",
      taxId: "TX-3234",
      phoneNumber: "+1 123-424-6244",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F3\u06F4\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0627\u0646 \u0627\u0645\u06CC\u0644\u06CC\u0627\u0646\u0648\u060C \u0628\u0644\u0648\u06A9 C3\u060C \u0633\u0648\u0626\u06CC\u062A C56",
        "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C CA 91342"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: []
    },
    {
      id: 12,
      type: "person",
      name: "\u0622\u0646\u0627 \u0644\u0648\u067E\u0632",
      slug: "anna-lopez",
      category: "\u06A9\u0627\u0631\u06AF\u0631 \u0641\u0631\u06CC\u0644\u0646\u0633",
      picture: "/img/avatars/21.svg",
      email: "alopez@gmail.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-428983",
      phoneNumber: "+1 123-424-6244",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u062E\u06CC\u0627\u0628\u0627\u0646 \u06F7\u06F6\u060C \u0631\u0627\u06CC\u0646\u0645\u0646\u060C \u0628\u0644\u0648\u06A9 D2\u060C \u0637\u0628\u0642\u0647 \u0627\u0648\u0644",
        "\u0633\u0646 \u062F\u06CC\u06AF\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 \u06F9\u06F1\u06F3\u06F4\u06F2"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 52.14,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 428.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 112.23,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0686\u06A9"
        },
        {
          id: 4,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 950,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 1500,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 550,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 380,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 449.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 13,
      type: "company",
      name: "\u0622\u062A\u0644\u0633\u06CC\u0627\u0646",
      slug: "atlassian",
      category: "\u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC",
      picture: "/img/logos/companies/atlassian.svg",
      email: "hello@atlassian.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-423255",
      phoneNumber: "+1 342-533-6343",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
      address: [
        "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0647\u0631\u06CC\u0633\u0648\u0646 \u06F1\u06F5\u060C \u0633\u0648\u0626\u06CC\u062A \u06F2\u06F3\u060C \u0637\u0628\u0642\u0647 \u06F7",
        "\u0645\u0644\u0628\u0648\u0631\u0646\u060C \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627 \u06F4\u06F2\u06F8\u06F3\u06F9"
      ],
      paymentMethod: {
        name: "stripe"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "in",
          amount: 59.13,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F4 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 4,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 6,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 7,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 8,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 9,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        }
      ]
    },
    {
      id: 14,
      type: "company",
      name: "\u062F\u0648\u0634\u0646\u0628\u0647",
      slug: "monday",
      category: "\u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC",
      picture: "/img/logos/companies/monday.svg",
      email: "contact@monday.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-8763",
      phoneNumber: "+1 342-533-6343",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F1\u06F5\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0645\u0646\u0647\u0627\u062A\u0646\u060C \u0648\u0627\u062D\u062F \u06F5\u06F4\u060C \u0637\u0628\u0642\u0647 \u0647\u0641\u062F\u0647\u0645",
        "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 \u06F8\u06F7\u06F3\u06F6\u06F2"
      ],
      paymentMethod: {
        name: "stripe"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "in",
          amount: 59.13,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 3,
          date: "\u06F4 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 4,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "\u0627\u0646\u062A\u0642\u0627\u0644"
        },
        {
          id: 5,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 6,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 7,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 8,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 9,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        }
      ]
    },
    {
      id: 15,
      type: "company",
      name: "UPS",
      slug: "ups",
      category: "\u0634\u0631\u06A9\u062A \u0644\u062C\u0633\u062A\u06CC\u06A9",
      picture: "/img/logos/companies/ups.svg",
      email: "contact@ups.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-762623",
      phoneNumber: "+1 143-546-4212",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u06F1\u06F4\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627\u060C \u0628\u0644\u0648\u06A9 D56\u060C \u0637\u0628\u0642\u0647 \u0633\u0648\u0645",
        "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9 \u06F8\u06F4\u06F2\u06F9\u06F9"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 382.38,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "in",
          amount: 16.31,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 3,
          date: "\u06F4 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 128.28,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 4,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 31.17,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 5,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 483.19,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 6,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 76.87,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 7,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 12.47,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 8,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 59.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 9,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 131.48,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        }
      ]
    },
    {
      id: 16,
      type: "company",
      name: "\u0627\u0633\u067E\u0627\u062A\u06CC\u0641\u0627\u06CC",
      slug: "spotify",
      category: "\u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC",
      picture: "/img/logos/companies/spotify.svg",
      email: "hello@spotify.com",
      status: "\u0641\u0639\u0627\u0644",
      taxId: "TX-422413",
      phoneNumber: "+1 276-133-5242",
      language: "\u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC",
      country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647",
      address: [
        "\u062E\u06CC\u0627\u0628\u0627\u0646 \u0633\u0646 \u0633\u0628\u0627\u0633\u062A\u06CC\u0646 42\u060C \u0648\u0627\u062D\u062F 32\u060C \u0637\u0628\u0642\u0647 3",
        "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 \u06F9\u06F2\u06F7\u06F4\u06F6"
      ],
      paymentMethod: {
        name: "paypal"
      },
      transactions: [
        {
          id: 1,
          date: "\u06F2\u06F6 \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
          method: "transfer"
        },
        {
          id: 2,
          date: "\u06F5 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "in",
          amount: 59.13,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 3,
          date: "\u06F4 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 4,
          date: "\u06F2\u06F3 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 5,
          date: "\u06F2 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 6,
          date: "\u06F9 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 7,
          date: "\u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 8,
          date: "\u06F2\u06F5 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        },
        {
          id: 9,
          date: "11 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F4\u06F0\u06F1",
          type: "out",
          amount: 65.99,
          account: "**** 7623",
          status: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          method: "transfer"
        }
      ]
    }
  ]);
}

export { recipients as default };
