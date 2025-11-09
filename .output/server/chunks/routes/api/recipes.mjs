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

const recipes = defineEventHandler(async (event) => {
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
      return [item.name, item.category, item.author.name].some(
        (item2) => item2.match(filterRe)
      );
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: "1",
      icon: "/img/illustrations/layouts/cake-1.svg",
      name: "\u06A9\u06CC\u06A9 \u062A\u0648\u062A\u200C\u0641\u0631\u0646\u06AF\u06CC \u0648 \u062E\u0627\u0645\u0647",
      category: "\u06A9\u06CC\u06A9\u200C\u0647\u0627",
      duration: "\u06F1 \u0633\u0627\u0639\u062A \u06F4\u06F5 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 3,
      author: {
        name: "\u0622\u0644\u06CC\u0633 \u0633\u06CC.",
        avatar: "/img/avatars/22.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/9.svg"
        },
        {
          id: 2,
          src: "/img/avatars/20.svg"
        }
      ]
    },
    {
      id: "2",
      icon: "/img/illustrations/layouts/cake-2.svg",
      name: "\u06A9\u06CC\u06A9 \u067E\u0631\u062A\u0642\u0627\u0644 \u0648 \u0644\u06CC\u0645\u0648",
      category: "\u06A9\u06CC\u06A9\u200C\u0647\u0627",
      duration: "\u06F1 \u0633\u0627\u0639\u062A \u0648 \u06F1\u06F5 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 2,
      author: {
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        avatar: "/img/avatars/10.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/12.svg"
        },
        {
          id: 2,
          src: "/img/avatars/21.svg"
        },
        {
          id: 3,
          src: "/img/avatars/16.svg"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "3",
      icon: "/img/illustrations/layouts/cake-3.svg",
      name: "\u06A9\u06CC\u06A9 \u0633\u0647 \u0634\u06A9\u0644\u0627\u062A\u06CC",
      category: "\u06A9\u06CC\u06A9\u200C\u0647\u0627",
      duration: "2h",
      attachments: 2,
      author: {
        name: "\u06A9\u0627\u0631\u0646 \u0648.",
        avatar: "/img/avatars/24.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/3.svg"
        },
        {
          id: 2,
          src: "/img/avatars/2.svg"
        },
        {
          id: 3,
          src: "/img/avatars/17.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "4",
      icon: "/img/illustrations/layouts/cake-4.svg",
      name: "\u06A9\u06CC\u06A9 \u0639\u0631\u0648\u0633\u06CC",
      category: "\u06A9\u06CC\u06A9\u200C\u0647\u0627",
      duration: "\u06F3 \u0633\u0627\u0639\u062A \u0648 \u06F3\u06F0 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 7,
      author: {
        name: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
        avatar: "/img/avatars/26.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/19.svg"
        },
        {
          id: 2,
          src: "/img/avatars/24.svg"
        },
        {
          id: 3,
          src: "/img/avatars/10.svg"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "5",
      icon: "/img/illustrations/layouts/cake-5.svg",
      name: "\u0648\u0627\u0641\u0644\u200C\u0647\u0627\u06CC \u0648\u0627\u0646\u06CC\u0644\u06CC",
      category: "\u0648\u0627\u0641\u0644",
      duration: "\u06F1 \u0633\u0627\u0639\u062A \u06F0 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 2,
      author: {
        name: "\u0631\u0627\u06CC\u0627\u0646 \u0628.",
        avatar: "/img/avatars/14.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/20.svg"
        },
        {
          id: 2,
          src: "/img/avatars/9.svg"
        },
        {
          id: 3,
          src: "/img/avatars/13.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "6",
      icon: "/img/illustrations/layouts/cake-6.svg",
      name: "\u0628\u0631\u0634 \u062A\u0648\u062A\u200C\u0641\u0631\u0646\u06AF\u06CC",
      category: "\u0628\u0631\u0634\u200C\u0647\u0627",
      duration: "\u06F1 \u0633\u0627\u0639\u062A \u06F0 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 2,
      author: {
        name: "\u0622\u0631\u0646\u0648\u0644\u062F \u062F.",
        avatar: "/img/avatars/20.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/14.svg"
        },
        {
          id: 2,
          src: "/img/avatars/5.svg"
        },
        {
          id: 3,
          src: "/img/avatars/8.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "7",
      icon: "/img/illustrations/layouts/cake-7.svg",
      name: "\u062F\u0648\u0646\u0627\u062A \u0645\u0627\u0631\u0645\u0627\u0644\u0627\u062F",
      category: "\u062F\u0648\u0646\u0627\u062A",
      duration: "\u06F2 \u0633\u0627\u0639\u062A \u0648 \u06F1\u06F5 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 2,
      author: {
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
        avatar: "/img/avatars/5.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/5.svg"
        },
        {
          id: 2,
          src: "/img/avatars/12.svg"
        },
        {
          id: 3,
          src: "/img/avatars/21.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "8",
      icon: "/img/illustrations/layouts/cake-8.svg",
      name: "\u0633\u0627\u0646\u062F\u0648\u06CC\u0686 \u06A9\u0631\u0647 \u0628\u0627\u062F\u0627\u0645 \u0632\u0645\u06CC\u0646\u06CC",
      category: "\u0633\u0627\u0646\u062F\u0648\u06CC\u0686\u200C\u0647\u0627",
      duration: "15m",
      attachments: 1,
      author: {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
        avatar: "/img/avatars/16.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/9.svg"
        },
        {
          id: 2,
          src: "/img/avatars/10.svg"
        },
        {
          id: 3,
          src: "/img/avatars/23.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    },
    {
      id: "9",
      icon: "/img/illustrations/layouts/cake-9.svg",
      name: "\u0627\u0633\u0644\u0627\u06CC\u0633 \u06A9\u0631\u0647 \u0628\u0627\u062F\u0627\u0645\u200C\u0632\u0645\u06CC\u0646\u06CC",
      category: "\u0628\u0631\u0634\u200C\u0647\u0627",
      duration: "15m",
      attachments: 1,
      author: {
        name: "\u062C\u0627\u0634\u0648\u0627 \u0627\u0633.",
        avatar: "/img/avatars/12.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/5.svg"
        },
        {
          id: 2,
          src: "/img/avatars/22.svg"
        },
        {
          id: 3,
          src: "/img/avatars/16.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        }
      ]
    },
    {
      id: "10",
      icon: "/img/illustrations/layouts/cake-9.svg",
      name: "\u062A\u0648\u062A\u200C\u0641\u0631\u0646\u06AF\u06CC \u062A\u0646\u062F",
      category: "\u0628\u0631\u0634\u200C\u0647\u0627",
      duration: "\u06F1 \u0633\u0627\u0639\u062A \u0648 \u06F1\u06F5 \u062F\u0642\u06CC\u0642\u0647",
      attachments: 1,
      author: {
        name: "\u06A9\u0644\u06CC \u0645.",
        avatar: "/img/avatars/9.svg"
      },
      followers: [
        {
          id: 1,
          src: "/img/avatars/24.svg"
        },
        {
          id: 2,
          src: "/img/avatars/23.svg"
        },
        {
          id: 3,
          src: "/img/avatars/13.svg"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        },
        {
          id: 5,
          src: void 0,
          text: "AD"
        },
        {
          id: 6,
          src: void 0,
          text: "TF"
        },
        {
          id: 7,
          src: void 0,
          text: "GR"
        }
      ]
    }
  ]);
}

export { recipes as default };
