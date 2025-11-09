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
      return [item.username, item.location, item.position, item.industry].some(
        (item2) => item2.match(filterRe)
      );
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: 0,
      username: "\u0627\u0631\u06CC\u06A9 \u06A9.",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      src: "/img/avatars/20.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633\u060C \u0646\u0648\u0627\u062F\u0627",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 37,
        done: 164,
        status: 0
      },
      relations: [
        {
          id: 0,
          src: "/img/avatars/25.svg",
          text: "AC"
        },
        {
          id: 2,
          src: "/img/avatars/16.svg",
          text: "HM"
        },
        {
          id: 1,
          src: void 0,
          text: "JP"
        },
        {
          id: 3,
          src: "/img/avatars/5.svg",
          text: "ML"
        },
        {
          id: 4,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 1,
      username: "\u0633\u0627\u0646\u062F\u0631\u0627 \u062A\u06CC.",
      position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      src: "/img/avatars/22.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      industry: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      status: "\u0645\u0634\u063A\u0648\u0644",
      tasks: {
        pending: 21,
        done: 598,
        status: 0
      },
      relations: [
        {
          id: 148,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 2,
      username: "\u0645\u0644\u0627\u0646\u06CC \u0648.",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      src: "/img/avatars/25.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0633\u0646 \u062E\u0648\u0632\u0647\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      industry: "\u0637\u0631\u0627\u062D\u06CC",
      status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 45,
        done: 265,
        status: 1
      },
      relations: [
        {
          id: 127,
          src: void 0,
          text: "BT"
        },
        {
          id: 7,
          src: "/img/avatars/10.svg",
          text: "KW"
        },
        {
          id: 19,
          src: "/img/avatars/19.svg",
          text: "GK"
        },
        {
          id: 148,
          src: void 0,
          text: "SC"
        },
        {
          id: 149,
          src: void 0,
          text: "SC"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 3,
      username: "\u0647\u0631\u0645\u0627\u0646 \u0627\u0645.",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0628\u06A9\u200C\u0627\u0646\u062F",
      src: "/img/avatars/16.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0644\u0627\u0633 \u0648\u06AF\u0627\u0633\u060C \u0646\u0648\u0627\u062F\u0627",
      industry: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC",
      status: "\u062A\u0639\u0644\u06CC\u0642 \u0634\u062F\u0647",
      tasks: {
        pending: 15,
        done: 575,
        status: 0
      },
      relations: [
        {
          id: 7,
          src: "/img/avatars/8.svg",
          initials: "TS"
        }
      ]
    },
    {
      id: 4,
      username: "\u0647\u0627\u06CC\u0646\u0631\u06CC\u0634 \u0627\u0644.",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      src: "/img/avatars/13.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      industry: "\u0645\u0627\u0644\u06CC",
      status: "\u0645\u0634\u063A\u0648\u0644",
      tasks: {
        pending: 6,
        done: 47,
        status: 0
      },
      relations: [
        {
          id: 0,
          src: "/img/avatars/3.svg",
          text: "CD"
        },
        {
          id: 14,
          src: "/img/avatars/11.svg",
          text: "KL"
        },
        {
          id: 17,
          src: "/img/avatars/5.svg",
          text: "ML"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        },
        {
          id: 151,
          src: void 0,
          text: "SC"
        },
        {
          id: 152,
          src: void 0,
          text: "SC"
        },
        {
          id: 154,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 5,
      username: "\u06AF\u0631\u062A\u0627 \u06A9.",
      position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
      src: "/img/avatars/19.svg",
      badge: "/img/icons/flags/germany.svg",
      location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
      industry: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 68,
        done: 128,
        status: 1
      },
      relations: [
        {
          id: 0,
          src: "/img/avatars/4.svg",
          text: "AC"
        },
        {
          id: 49,
          src: "/img/avatars/3.svg",
          text: "CJ"
        },
        {
          id: 17,
          src: "/img/avatars/5.svg",
          text: "ML"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        },
        {
          id: 151,
          src: void 0,
          text: "SC"
        },
        {
          id: 152,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 6,
      username: "\u06A9\u0644\u0645\u0627\u0646\u062A \u062F.",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      src: "/img/avatars/3.svg",
      badge: "/img/icons/flags/france.svg",
      location: "\u062A\u0648\u0644\u0648\u0632\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 19,
        done: 127,
        status: 0
      },
      relations: [
        {
          id: 0,
          src: "/img/avatars/15.svg",
          text: "AC"
        },
        {
          id: 145,
          src: "/img/avatars/22.svg",
          text: "AC"
        },
        {
          id: 8,
          src: "/img/avatars/16.svg",
          text: "ML"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        },
        {
          id: 151,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 7,
      username: "\u0631\u0648\u0646\u0627\u0644\u062F \u062F\u06CC.",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      src: "/img/avatars/11.svg",
      badge: "/img/icons/flags/england.svg",
      location: "\u0644\u0646\u062F\u0646\u060C \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 24,
        done: 277,
        status: 0
      },
      relations: [
        {
          id: 25,
          src: "/img/avatars/25.svg",
          text: "AC"
        },
        {
          id: 13,
          src: "/img/avatars/13.svg",
          text: "TS"
        },
        {
          id: 17,
          src: "/img/avatars/5.svg",
          text: "ML"
        }
      ]
    },
    {
      id: 8,
      username: "\u0622\u0644\u0646 \u062A\u06CC.",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      src: void 0,
      badge: "/img/icons/flags/united-states-of-america.svg",
      initials: "AT",
      location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 42,
        done: 227,
        status: 2
      },
      relations: [
        {
          id: 25,
          src: "/img/avatars/25.svg",
          text: "MW"
        }
      ]
    },
    {
      id: 9,
      username: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      src: "/img/avatars/26.svg",
      badge: "/img/icons/flags/australia.svg",
      location: "\u0645\u0644\u0628\u0648\u0631\u0646\u060C \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 12,
        done: 272,
        status: 0
      },
      relations: [
        {
          id: 112,
          src: "/img/avatars/6.svg",
          text: "AC"
        },
        {
          id: 7,
          src: "/img/avatars/10.svg",
          text: "KW"
        },
        {
          id: 27,
          src: "/img/avatars/16.svg",
          text: "CE"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        },
        {
          id: 151,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 10,
      username: "\u062C\u0646\u06CC\u0641\u0631 \u062F.",
      position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
      src: "/img/avatars/24.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      industry: "\u0641\u0631\u0648\u0634",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 11,
        done: 72,
        status: 0
      },
      relations: [
        {
          id: 112,
          src: "/img/avatars/2.svg",
          text: "MR"
        },
        {
          id: 156,
          src: void 0,
          text: "JB"
        }
      ]
    },
    {
      id: 11,
      username: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
      src: "/img/avatars/10.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      industry: "HR",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 17,
        done: 272,
        status: 0
      },
      relations: [
        {
          id: 112,
          src: "/img/avatars/2.svg",
          text: "MR"
        },
        {
          id: 7,
          src: "/img/avatars/6.svg",
          text: "JB"
        },
        {
          id: 27,
          src: "/img/avatars/9.svg",
          text: "AB"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        },
        {
          id: 151,
          src: void 0,
          text: "SC"
        }
      ]
    },
    {
      id: 12,
      username: "\u0645\u0627\u06CC\u06A9 \u0627\u0686.",
      position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      src: "/img/avatars/23.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0647\u06CC\u0648\u0633\u062A\u0648\u0646\u060C \u062A\u06AF\u0632\u0627\u0633",
      industry: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 27,
        done: 272,
        status: 1
      },
      relations: [
        {
          id: 150,
          src: void 0,
          text: "TE"
        },
        {
          id: 151,
          src: void 0,
          text: "GV"
        }
      ]
    },
    {
      id: 13,
      username: "\u0628\u0631\u0627\u06CC\u0627\u0646 \u0641.",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      src: void 0,
      badge: "/img/icons/flags/united-states-of-america.svg",
      initials: "BF",
      location: "\u0633\u0627\u0646\u062A\u0627 \u0645\u0648\u0646\u06CC\u06A9\u0627\u060C CA",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 8,
        done: 28,
        status: 0
      },
      relations: [
        {
          id: 150,
          src: void 0,
          text: "TE"
        },
        {
          id: 151,
          src: void 0,
          text: "GV"
        },
        {
          id: 12,
          src: "/img/avatars/25.svg",
          text: "JT"
        }
      ]
    },
    {
      id: 14,
      username: "\u062C\u0627\u0646 \u0628\u06CC.",
      position: "\u0639\u0636\u0648 \u0647\u06CC\u0626\u062A \u0645\u062F\u06CC\u0631\u0647",
      src: "/img/avatars/6.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      industry: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
      tasks: {
        pending: 4,
        done: 75,
        status: 0
      },
      relations: [
        {
          id: 112,
          src: void 0,
          text: "ST"
        },
        {
          id: 7,
          src: "/img/avatars/10.svg",
          text: "KW"
        },
        {
          id: 27,
          src: "/img/avatars/5.svg",
          text: "CM"
        },
        {
          id: 150,
          src: void 0,
          text: "SC"
        },
        {
          id: 151,
          src: void 0,
          text: "SC"
        }
      ]
    }
  ]);
}

export { index as default };
