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

const index = defineEventHandler(async (event) => {
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
      return [item.name, item.author.name].some((item2) => item2.match(filterRe));
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      name: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC UX \u0634\u0631\u06A9\u062A",
      icon: "/img/icons/files/pdf.svg",
      size: "4.7MB",
      version: "1.5.2",
      uploaded: "\u06F2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
      author: {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
        picture: "/img/avatars/16.svg"
      }
    },
    {
      id: 1,
      name: "\u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u062C\u0644\u0627\u0633 \u0641\u0646\u0627\u0648\u0631\u06CC",
      icon: "/img/icons/files/sheet.svg",
      size: "34KB",
      version: "1.1.3",
      uploaded: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
        picture: "/img/avatars/5.svg"
      }
    },
    {
      id: 2,
      name: "\u0637\u0631\u062D \u067E\u0631\u0648\u0698\u0647",
      icon: "/img/icons/files/doc-2.svg",
      size: "77KB",
      version: "1.0.0",
      uploaded: "\u06F5 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u06A9\u0644\u0627\u0631\u06A9 \u062F.",
        picture: "/img/avatars/3.svg"
      }
    },
    {
      id: 3,
      name: "\u0627\u0631\u0627\u0626\u0647 UX",
      icon: "/img/icons/files/ppt.svg",
      size: "2.3MB",
      version: "1.0.0",
      uploaded: "\u06F2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
      author: {
        name: "\u062A\u0631\u06CC \u0627\u0633.",
        picture: "/img/avatars/11.svg"
      }
    },
    {
      id: 4,
      name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
      icon: "/img/icons/files/ai.svg",
      size: "4.8MB",
      version: "1.0.0",
      uploaded: "\u06F2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
      author: {
        name: "\u0644\u0627\u0646\u0627 \u0627\u06CC.",
        picture: "/img/avatars/4.svg"
      }
    },
    {
      id: 5,
      name: "\u0622\u0645\u0648\u0632\u0634 \u0633\u0631\u06CC\u0639 UX \u0628\u0631\u0627\u06CC \u06A9\u0627\u0631\u0622\u0645\u0648\u0632\u0627\u0646",
      icon: "/img/icons/files/doc-2.svg",
      size: "1.8MB",
      version: "1.2.0",
      uploaded: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0627\u0644.",
        picture: "/img/avatars/20.svg"
      }
    },
    {
      id: 6,
      name: "\u062E\u0644\u0627\u0635\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u06F1\u06F3\u06F9\u06F9",
      icon: "/img/icons/files/pdf.svg",
      size: "8.9MB",
      version: "1.3.4",
      uploaded: "3 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
      author: {
        name: "\u0645\u0627\u06CC\u06A9 \u062A\u06CC.",
        picture: "/img/avatars/1.svg"
      }
    },
    {
      id: 7,
      name: "\u06AF\u0632\u0627\u0631\u0634 \u0645\u0627\u0644\u06CC - \u06F1\u06F4\u06F0\u06F1",
      icon: "/img/icons/files/doc-2.svg",
      size: "1.2MB",
      version: "1.0.4",
      uploaded: "\u06F5 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u062C\u0627\u0646 \u0628\u06A9\u0633\u062A\u0631.",
        picture: "/img/avatars/14.svg"
      }
    },
    {
      id: 8,
      name: "\u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u062A\u0623\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u06F1\u06F3\u06F9\u06F9",
      icon: "/img/icons/files/doc-2.svg",
      size: "250KB",
      version: "1.0.0",
      uploaded: "\u06F6 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u0645\u0627\u06CC\u0627 \u0631.",
        picture: "/img/avatars/2.svg"
      }
    },
    {
      id: 9,
      name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0635\u0641\u062D\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u0633\u0627\u06CC\u062A",
      icon: "/img/icons/files/ai.svg",
      size: "3.9MB",
      version: "1.2.4",
      uploaded: "\u06F4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u0627\u0645\u06CC\u0644\u06CC\u0648 \u0622\u0631.",
        picture: "/img/avatars/8.svg"
      }
    },
    {
      id: 10,
      name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0635\u0641\u062D\u0647 \u0642\u06CC\u0645\u062A\u200C\u06AF\u0630\u0627\u0631\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
      icon: "/img/icons/files/ai.svg",
      size: "2.6MB",
      version: "1.2.1",
      uploaded: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u0646\u06CC\u06A9\u0648\u0644 \u0622\u0631.",
        picture: "/img/avatars/9.svg"
      }
    },
    {
      id: 11,
      name: "\u06AF\u0632\u0627\u0631\u0634 \u0645\u0627\u0644\u06CC - \u06F1\u06F4\u06F0\u06F0",
      icon: "/img/icons/files/doc-2.svg",
      size: "1.6MB",
      version: "1.7.2",
      uploaded: "\u06F1 \u0633\u0627\u0644 \u067E\u06CC\u0634",
      author: {
        name: "\u0627\u0644\u0633\u0627\u0646\u062F\u0631\u0627 \u0641.",
        picture: "/img/avatars/21.svg"
      }
    },
    {
      id: 12,
      name: "\u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u062A\u0623\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
      icon: "/img/icons/files/doc-2.svg",
      size: "250KB",
      version: "1.0.0",
      uploaded: "\u06F6 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u0622\u0631\u062A\u0648\u0631 \u0627\u0633.",
        picture: "/img/avatars/7.svg"
      }
    },
    {
      id: 13,
      name: "\u0637\u0631\u0627\u062D\u06CC \u0645\u062C\u062F\u062F \u0635\u0641\u062D\u0647 \u062A\u0645\u0627\u0633 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
      icon: "/img/icons/files/ai.svg",
      size: "3.8",
      version: "1.1.5",
      uploaded: "\u06F8 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        picture: "/img/avatars/10.svg"
      }
    },
    {
      id: 14,
      name: "\u06A9\u062A\u0627\u0628 \u0628\u0631\u0646\u062F \u0634\u0631\u06A9\u062A",
      icon: "/img/icons/files/pdf.svg",
      size: "7.9MB",
      version: "2.5.1",
      uploaded: "3 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
      author: {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
        picture: "/img/avatars/16.svg"
      }
    },
    {
      id: 15,
      name: "\u062E\u0644\u0627\u0635\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u06F1\u06F4\u06F0\u06F0",
      icon: "/img/icons/files/pdf.svg",
      size: "5.9",
      version: "3.4.8",
      uploaded: "\u06F1 \u0633\u0627\u0644 \u067E\u06CC\u0634",
      author: {
        name: "\u062A\u0648\u0646\u06CC \u06CC\u0648.",
        picture: "/img/avatars/23.svg"
      }
    },
    {
      id: 16,
      name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0635\u0641\u062D\u0647 \u0641\u0631\u0648\u062F",
      icon: "/img/icons/files/ai.svg",
      size: "1.8MB",
      version: "1.0.0",
      uploaded: "\u06F3 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u06A9\u0644\u0627\u0631\u0627 \u0633\u06CC.",
        picture: "/img/avatars/22.svg"
      }
    },
    {
      id: 17,
      name: "\u06AF\u0632\u0627\u0631\u0634\u200C\u062F\u0647\u06CC \u0628\u0648\u062F\u062C\u0647",
      icon: "/img/icons/files/sheet.svg",
      size: "34KB",
      version: "1.0.0",
      uploaded: "\u06F5 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u062F\u0627\u0646\u06CC\u0644\u0627 \u062F\u06CC.",
        picture: "/img/avatars/24.svg"
      }
    },
    {
      id: 18,
      name: "\u06AF\u0632\u0627\u0631\u0634 \u0627\u0633\u062A\u0631\u0627\u062A\u0698\u06CC \u06F1\u06F4\u06F0\u06F2",
      icon: "/img/icons/files/pdf.svg",
      size: "4.3MB",
      version: "1.1.0",
      uploaded: "\u06F9 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u0647\u0644\u0646 \u062A.",
        picture: "/img/avatars/25.svg"
      }
    },
    {
      id: 19,
      name: "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u0627\u0646",
      icon: "/img/icons/files/ppt.svg",
      size: "34KB",
      version: "1.1.5",
      uploaded: "\u06F4 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      author: {
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        picture: "/img/avatars/10.svg"
      }
    }
  ]);
}

export { index as default };
