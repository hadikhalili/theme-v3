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

const members = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  const slug = query.slug || "";
  if (perPage >= 200) {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
  }
  const data = await getDemoData();
  const member = data.find((item) => item.slug === slug);
  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage),
    member
  };
});
function filterDemoData(data, filter, page, perPage) {
  const offset = (page - 1) * perPage;
  if (!filter) {
    return data.slice(offset, offset + perPage);
  }
  const filterRe = new RegExp(filter, "i");
  return data.filter((item) => {
    return [item.categories, item.title].some((item2) => item2.match(filterRe));
  }).slice(offset, offset + perPage);
}
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      slug: "maya-rosselini",
      name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
      email: "mayar@eltheme.ir",
      picture: "/img/avatars/2.svg",
      role: {
        label: "\u0645\u062F\u06CC\u0631",
        details: [
          {
            label: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644",
            permissions: [
              {
                label: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0627\u0646\u062A\u0642\u0627\u0644 \u067E\u0648\u0644",
                status: true
              }
            ]
          },
          {
            label: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644",
            permissions: [
              {
                label: "\u0627\u0639\u0636\u0627 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647/\u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u060C \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u0648 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC\u0634\u0627\u0646 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F.",
                status: true
              },
              {
                label: "\u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0645\u062F\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u06CC\u0627 \u0628\u062F\u0648\u0646 \u0627\u062C\u0627\u0632\u0647 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F.",
                status: true
              }
            ]
          }
        ]
      },
      cards: [
        {
          id: 1,
          creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
          name: "\u06A9\u0627\u0631\u062A \u06A9\u0646\u062F\u0631\u0627",
          account: "**** 7623",
          cardInfo: {
            name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
            type: "physical",
            brand: "mastercard",
            number: "\u2022\u2022\u2022\u2022 4479",
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
          address: [
            "\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633",
            "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
            "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"
          ]
        },
        {
          id: 2,
          creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
          name: "\u06A9\u0627\u0631\u062A \u0645\u062C\u0627\u0632\u06CC \u06A9\u0646\u062F\u0631\u0627",
          account: "**** 7218",
          cardInfo: {
            name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
            type: "\u0645\u062C\u0627\u0632\u06CC",
            brand: "mastercard",
            number: "\u2022\u2022\u2022\u2022 4268",
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
          address: [
            "\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633",
            "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
            "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"
          ]
        }
      ]
    },
    {
      id: 2,
      slug: "john-baxter",
      name: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
      email: "johnbaxter@eltheme.ir",
      picture: "/img/avatars/8.svg",
      role: {
        label: "\u0645\u062F\u06CC\u0631",
        details: [
          {
            label: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644",
            permissions: [
              {
                label: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0627\u0646\u062A\u0642\u0627\u0644 \u067E\u0648\u0644",
                status: true
              }
            ]
          },
          {
            label: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644",
            permissions: [
              {
                label: "\u0627\u0639\u0636\u0627 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647/\u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u060C \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u0648 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC\u0634\u0627\u0646 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F.",
                status: true
              },
              {
                label: "\u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0645\u062F\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u06CC\u0627 \u0628\u062F\u0648\u0646 \u0627\u062C\u0627\u0632\u0647 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F.",
                status: true
              }
            ]
          }
        ]
      },
      cards: [
        {
          id: 1,
          creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
          name: "\u06A9\u0627\u0631\u062A \u062C\u0627\u0646",
          account: "**** 7623",
          cardInfo: {
            name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
            type: "physical",
            brand: "mastercard",
            number: "\u2022\u2022\u2022\u2022 2671",
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
          address: [
            "\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633",
            "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
            "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"
          ]
        }
      ]
    },
    {
      id: 3,
      slug: "jennifer-wilson",
      name: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
      email: "jennwilson@eltheme.ir",
      picture: "/img/avatars/12.svg",
      role: {
        label: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631",
        details: [
          {
            label: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u062C\u0632\u0626\u06CC",
            permissions: [
              {
                label: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0627\u0646\u062A\u0642\u0627\u0644 \u067E\u0648\u0644",
                status: false
              }
            ]
          },
          {
            label: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u062F",
            permissions: [
              {
                label: "\u0627\u0639\u0636\u0627 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647/\u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u060C \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u0648 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC\u0634\u0627\u0646 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F.",
                status: false
              },
              {
                label: "\u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0645\u062F\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u06CC\u0627 \u0628\u062F\u0648\u0646 \u0627\u062C\u0627\u0632\u0647 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F.",
                status: false
              }
            ]
          }
        ]
      },
      cards: [
        {
          id: 1,
          creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
          name: "\u06A9\u0627\u0631\u062A \u062C\u0646\u06CC\u0641\u0631",
          account: "**** 7623",
          cardInfo: {
            name: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
            type: "physical",
            brand: "mastercard",
            number: "\u2022\u2022\u2022\u2022 2671",
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
          address: [
            "\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633",
            "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
            "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"
          ]
        }
      ]
    },
    {
      id: 4,
      slug: "amber-wilson",
      name: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
      email: "amberwilson@eltheme.ir",
      picture: "/img/avatars/24.svg",
      role: {
        label: "\u0641\u0642\u0637 \u06A9\u0627\u0631\u062A",
        details: [
          {
            label: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u062F",
            permissions: [
              {
                label: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: false
              },
              {
                label: "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: false
              },
              {
                label: "\u0627\u0646\u062A\u0642\u0627\u0644 \u067E\u0648\u0644",
                status: false
              }
            ]
          },
          {
            label: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u062F",
            permissions: [
              {
                label: "\u0627\u0639\u0636\u0627 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647/\u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u060C \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u0648 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC\u0634\u0627\u0646 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F.",
                status: false
              },
              {
                label: "\u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0645\u062F\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u06CC\u0627 \u0628\u062F\u0648\u0646 \u0627\u062C\u0627\u0632\u0647 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F.",
                status: false
              }
            ]
          }
        ]
      },
      cards: [
        {
          id: 1,
          creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
          name: "\u06A9\u0627\u0631\u062A \u0627\u0645\u0628\u0631",
          account: "**** 7623",
          cardInfo: {
            name: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
            type: "physical",
            brand: "mastercard",
            number: "\u2022\u2022\u2022\u2022 6982",
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
          address: [
            "\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633",
            "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
            "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"
          ]
        }
      ]
    },
    {
      id: 5,
      slug: "kaleb-wilson",
      name: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646",
      email: "kalebwilson@eltheme.ir",
      picture: "/img/avatars/3.svg",
      role: {
        label: "\u0633\u0641\u0627\u0631\u0634\u06CC",
        details: [
          {
            label: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u062F",
            permissions: [
              {
                label: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627",
                status: true
              },
              {
                label: "\u0627\u0646\u062A\u0642\u0627\u0644 \u067E\u0648\u0644",
                status: false
              }
            ]
          },
          {
            label: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645",
            access: "\u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u062F",
            permissions: [
              {
                label: "\u0627\u0639\u0636\u0627 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647/\u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u060C \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u0648 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC\u0634\u0627\u0646 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F.",
                status: false
              },
              {
                label: "\u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0645\u062F\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F \u06CC\u0627 \u0628\u062F\u0648\u0646 \u0627\u062C\u0627\u0632\u0647 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F.",
                status: false
              }
            ]
          }
        ]
      },
      cards: [
        {
          id: 1,
          creationDate: "\u06F1\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
          name: "\u06A9\u0627\u0631\u062A \u06A9\u0627\u0644\u0628",
          account: "**** 7623",
          cardInfo: {
            name: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646",
            type: "physical",
            brand: "mastercard",
            number: "\u2022\u2022\u2022\u2022 3112",
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
          address: [
            "\u06F1\u06F4\u06F8\u060C \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627\u0633",
            "\u0633\u0648\u0626\u06CC\u062A D23\u060C \u0637\u0628\u0642\u0647 \u06F3",
            "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C NY"
          ]
        }
      ]
    }
  ]);
}

export { members as default };
