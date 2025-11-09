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

const posts = defineEventHandler(async (event) => {
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
      return [item.title, item.author.name].some((item2) => item2.match(filterRe));
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: "1",
      title: "\u0646\u062D\u0648\u0647 \u0633\u0631\u0648 \u06A9\u0631\u062F\u0646 \u0642\u0647\u0648\u0647 \u0628\u0647 \u0631\u0648\u0634 \u0635\u062D\u06CC\u062D \u062F\u0631 \u062F\u0641\u062A\u0631",
      published: "\u06F3\u06F0 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-1.svg",
      category: "\u0628\u0627\u0632\u062F\u0647\u06CC",
      author: {
        id: 39,
        avatar: "/img/avatars/20.svg",
        name: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
        initials: "AB"
      }
    },
    {
      id: "2",
      title: "\u06A9\u0627\u0631 \u062A\u06CC\u0645\u06CC \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0628\u0647 \u0637\u0648\u0631 \u0686\u0634\u0645\u06AF\u06CC\u0631\u06CC \u0628\u0647\u0631\u0647\u200C\u0648\u0631\u06CC \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u062F",
      published: "\u06F4 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-2.svg",
      category: "\u0628\u0627\u0632\u062F\u0647\u06CC",
      author: {
        id: 15,
        avatar: "/img/avatars/5.svg",
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
        initials: "CM"
      }
    },
    {
      id: "3",
      title: "\u0622\u06CC\u0627 \u062A\u06CC\u0645\u200C\u0633\u0627\u0632\u06CC \u06CC\u06A9 \u0641\u0631\u06CC\u0628 \u0627\u0633\u062A \u06CC\u0627 \u0645\u0648\u0636\u0648\u0639 \u0628\u0639\u062F\u06CC\u061F",
      published: "\u06F5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-3.svg",
      category: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
      author: {
        id: 24,
        avatar: "/img/avatars/24.svg",
        name: "\u0633\u0627\u0646\u062F\u0631\u06CC\u0646 \u0633\u06CC.",
        initials: "SC"
      }
    },
    {
      id: "4",
      title: "\u06F3 \u0686\u06CC\u0632 \u06A9\u0647 \u0628\u0627\u06CC\u062F \u0647\u0646\u06AF\u0627\u0645 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0631\u0627\u06CC \u0634\u063A\u0644\u200C\u0647\u0627\u06CC \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0628\u062F\u0627\u0646\u06CC\u062F",
      published: "\u06F8 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-4.svg",
      category: "\u0645\u0647\u0646\u062F\u0633\u06CC",
      author: {
        id: 27,
        avatar: "/img/avatars/12.svg",
        name: "\u06A9\u0627\u0631\u0645\u0646 \u0627\u06CC.",
        initials: "CE"
      }
    },
    {
      id: "5",
      title: "\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631 \u0633\u0627\u062E\u062A \u0648 \u0633\u0627\u0632 \u0628\u0647 \u0637\u0648\u0631 \u06AF\u0633\u062A\u0631\u062F\u0647 \u062F\u0631 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u0645\u0648\u0628\u0627\u06CC\u0644 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F",
      published: "\u06F1 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-5.svg",
      category: "\u0645\u0647\u0646\u062F\u0633\u06CC",
      author: {
        id: 10,
        avatar: "/img/avatars/1.svg",
        name: "\u0647\u0646\u0631\u06CC \u062C.",
        initials: "HG"
      }
    },
    {
      id: "6",
      title: "\u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0646 \u0645\u06A9\u0627\u0646 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E \u0634\u0645\u0627",
      published: "\u06F1 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-6.svg",
      category: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
      author: {
        id: 22,
        avatar: "/img/avatars/10.svg",
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        initials: "KW"
      }
    },
    {
      id: "7",
      title: "\u06F4 \u0646\u06A9\u062A\u0647 \u0628\u0631\u0627\u06CC \u0639\u0627\u0644\u06CC \u06A9\u0631\u062F\u0646 \u0646\u0627\u0647\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u06CC \u0634\u0645\u0627",
      published: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-7.svg",
      category: "\u0647\u0645\u06A9\u0627\u0631\u06CC",
      author: {
        id: 22,
        avatar: "/img/avatars/16.svg",
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
        initials: "HM"
      }
    },
    {
      id: "8",
      title: "\u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0634\u0645\u0627",
      published: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-8.svg",
      category: "\u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
      author: {
        id: 26,
        avatar: "/img/avatars/26.svg",
        name: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
        initials: "CW"
      }
    },
    {
      id: "9",
      title: "\u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0634\u0645\u0627",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-9.svg",
      category: "\u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
      author: {
        id: 8,
        avatar: "/img/avatars/2.svg",
        name: "\u0645\u0627\u06CC\u0627 \u0631.",
        initials: "MR"
      }
    },
    {
      id: "10",
      title: "\u0622\u06CC\u0627 \u0628\u0647 \u0622\u0645\u0648\u0632\u0634 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062D\u0635\u0648\u0644 \u0641\u06A9\u0631 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u061F",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-10.svg",
      category: "\u0645\u062D\u0635\u0648\u0644",
      author: {
        id: 14,
        avatar: "/img/avatars/14.svg",
        name: "\u0631\u0627\u06CC\u0627\u0646 \u0628.",
        initials: "RB"
      }
    },
    {
      id: "11",
      title: "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0631\u0646\u06AF\u200C\u0647\u0627\u06CC \u062C\u0630\u0627\u0628 \u062F\u0631 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u200C\u0647\u0627 \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627\u06CC \u0634\u0645\u0627",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-11.svg",
      category: "\u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
      author: {
        id: 9,
        avatar: "/img/avatars/9.svg",
        name: "\u0622\u0646\u0627 \u0628.",
        initials: "AB"
      }
    },
    {
      id: "12",
      title: "\u0686\u0631\u0627 \u0645\u0641\u06CC\u062F \u0627\u0633\u062A \u06A9\u0647 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u062E\u0648\u062F \u0631\u0627 \u062A\u062D\u0644\u06CC\u0644 \u06A9\u0646\u06CC\u062F",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-12.svg",
      category: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
      author: {
        id: 22,
        avatar: "/img/avatars/10.svg",
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        initials: "KW"
      }
    },
    {
      id: "13",
      title: "\u0633\u0627\u062E\u062A\u0646 \u06CC\u06A9 \u062A\u06CC\u0645 \u0645\u0646\u0633\u062C\u0645 \u0648 \u0628\u0627\u0627\u0633\u062A\u0639\u062F\u0627\u062F",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-13.svg",
      category: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
      author: {
        id: 19,
        avatar: "/img/avatars/19.svg",
        name: "\u06AF\u0631\u062A\u0627 \u06A9.",
        initials: "GK"
      }
    },
    {
      id: "14",
      title: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u062E\u0635\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u062F\u0631 \u062A\u06CC\u0645 \u0634\u0645\u0627",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-14.svg",
      category: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
      author: {
        id: 28,
        avatar: "/img/avatars/6.svg",
        name: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641.",
        initials: "EF"
      }
    },
    {
      id: "15",
      title: "\u0686\u0647 \u0641\u0631\u06CC\u0645\u06CC\u0648\u0631\u06A9\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062F\u0631 \u0633\u0627\u0644 \u06F1\u06F3\u06F9\u06F9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u0645\u061F",
      published: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-15.svg",
      category: "\u0645\u0647\u0646\u062F\u0633\u06CC",
      author: {
        id: 5,
        avatar: "/img/avatars/25.svg",
        name: "\u0645\u0631\u06CC \u0627\u0644.",
        initials: "ML"
      }
    },
    {
      id: "16",
      title: "\u063A\u0648\u0637\u0647\u200C\u0648\u0631 \u0634\u062F\u0646 \u062F\u0631 \u0633\u0627\u062E\u062A \u06CC\u06A9 \u0628\u0631\u0646\u062F \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9 - \u0628\u062E\u0634 \u06F1",
      published: "\u06F4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-16.svg",
      category: "\u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9",
      author: {
        id: 33,
        avatar: "/img/avatars/18.svg",
        name: "\u0647\u0627\u0631\u0648\u06CC \u0627\u0645.",
        initials: "HM"
      }
    },
    {
      id: "17",
      title: "\u063A\u0648\u0637\u0647\u200C\u0648\u0631 \u0634\u062F\u0646 \u062F\u0631 \u0633\u0627\u062E\u062A \u06CC\u06A9 \u0628\u0631\u0646\u062F \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9 - \u0628\u062E\u0634 \u06F2",
      published: "\u06F4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-17.svg",
      category: "\u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9",
      author: {
        id: 33,
        avatar: "/img/avatars/18.svg",
        name: "\u0647\u0627\u0631\u0648\u06CC \u0627\u0645.",
        initials: "HM"
      }
    },
    {
      id: "18",
      title: "\u0686\u06AF\u0648\u0646\u0647 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u0645 \u06A9\u0647 \u0628\u0647 \u0627\u0647\u062F\u0627\u0641\u06CC \u06A9\u0647 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F \u0645\u06CC\u200C\u0631\u0633\u06CC\u062F",
      published: "\u06F4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      image: "/img/illustrations/layouts/post-18.svg",
      category: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
      author: {
        id: 31,
        avatar: "/img/avatars/23.svg",
        name: "\u06CC\u0627\u0633\u06CC\u0646 \u0622.",
        initials: "YA"
      }
    }
  ]);
}

export { posts as default };
