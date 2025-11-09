import { d as defineEventHandler } from '../../../runtime.mjs';
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

const index = defineEventHandler(async () => {
  return [
    {
      id: 0,
      name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
      customer: "\u0628\u0644\u06CC\u06A9 \u0648 \u0645\u0648\u0631\u062A\u06CC\u0645\u0631",
      duration: "\u06F3 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/1.png",
      industry: "\u0628\u0631\u0631\u0633\u06CC \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 1,
          picture: void 0,
          initials: "JP",
          color: "info"
        },
        {
          id: 2,
          picture: "/images/avatars/11.svg",
          initials: "EK",
          color: "h-purple"
        },
        {
          id: 3,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "danger"
        },
        {
          id: 4,
          picture: void 0,
          initials: "SC",
          color: "success"
        }
      ]
    },
    {
      id: 1,
      name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u0648\u0628\u0627\u06CC\u0644",
      customer: "\u067E\u0648\u0644\u0648\u0633 \u0647\u0631\u0645\u0627\u0646\u0648\u0633",
      duration: "\u06F2 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/2.png",
      industry: "\u063A\u0630\u0627",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 148,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 2,
      name: "\u062A\u0648\u0633\u0639\u0647 \u0631\u0627\u0647\u200C\u062D\u0644 ERP",
      customer: "\u0628\u0647\u062A\u0631\u06CC\u0646 \u0645\u0627\u0631\u062A",
      duration: "\u06F6 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/3.png",
      industry: "\u062A\u0648\u0632\u06CC\u0639",
      status: "\u0645\u06A9\u062B",
      team: [
        {
          id: 127,
          picture: void 0,
          initials: "BT",
          color: "success"
        },
        {
          id: 7,
          picture: "/img/avatars/7.svg",
          initials: "AC",
          color: "h-purple"
        },
        {
          id: 19,
          picture: "/img/avatars/19.svg",
          initials: "GK",
          color: "h-yellow"
        },
        {
          id: 148,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 149,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 3,
      name: "\u0645\u062F\u0631\u06A9 \u0645\u0641\u0647\u0648\u0645 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
      customer: "\u0644\u0633 \u0641\u0631\u0627\u06AF\u0631\u0648\u0633",
      duration: "\u06F1 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/4.png",
      industry: "\u0644\u0628\u0627\u0633",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 188,
          picture: void 0,
          initials: "BT",
          color: "success"
        },
        {
          id: 187,
          picture: void 0,
          initials: "AT",
          color: "h-yellow"
        },
        {
          id: 5,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        }
      ]
    },
    {
      id: 4,
      name: "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u0645\u0627\u0698\u0648\u0644 \u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC",
      customer: "\u0646\u06CC\u0631\u0648\u06CC \u06A9\u0627\u0631",
      duration: "\u06F3 \u0647\u0641\u062A\u0647",
      picture: "/img/photos/abstracts/5.png",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 18,
          picture: "/img/avatars/18.svg",
          initials: "EC",
          color: "info"
        }
      ]
    },
    {
      id: 5,
      name: "\u0627\u06A9\u062A\u0634\u0627\u0641 UX \u062C\u062F\u06CC\u062F",
      customer: "\u0646\u06CC\u0631\u0648\u06CC \u06A9\u0627\u0631",
      duration: "\u06F3 \u0647\u0641\u062A\u0647",
      picture: "/img/photos/abstracts/6.png",
      industry: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 14,
          picture: "/img/avatars/11.svg",
          initials: "KL",
          color: "danger"
        },
        {
          id: 17,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 152,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 154,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 6,
      name: "\u062A\u0648\u0633\u0639\u0647 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0633\u0641\u0627\u0631\u0634\u200C\u062F\u0647\u06CC",
      customer: "\u0645\u0648\u0627\u0631\u062F \u062E\u0648\u062F \u0631\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F",
      duration: "\u06F5 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/7.png",
      industry: "\u062E\u0631\u062F\u0647 \u0641\u0631\u0648\u0634\u06CC",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 14,
          picture: void 0,
          initials: "AT",
          color: "h-yellow"
        },
        {
          id: 17,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 152,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 7,
      name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0622\u0645\u0648\u0632\u0634\u06CC \u0628\u0631\u0627\u06CC \u06A9\u0648\u062F\u06A9\u0627\u0646",
      customer: "\u06A9\u0648\u062F\u06A9\u0627\u0646 \u06A9\u062F\u0646\u0648\u06CC\u0633",
      duration: "\u06F2 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/8.png",
      industry: "\u062A\u062D\u0635\u06CC\u0644\u0627\u062A",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 0,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 14,
          picture: void 0,
          initials: "BV",
          color: "h-purple"
        },
        {
          id: 8,
          picture: "/images/avatars/11.svg",
          initials: "ML",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 8,
      name: "\u067E\u06CC\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
      customer: "\u0641\u0631\u06CC\u06A9\u0648",
      duration: "2 \u0647\u0641\u062A\u0647",
      picture: "/img/photos/abstracts/9.png",
      industry: "\u062E\u0631\u062F\u0647 \u0641\u0631\u0648\u0634\u06CC",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 25,
          picture: "/img/avatars/25.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 13,
          picture: "/img/avatars/13.svg",
          initials: "TS",
          color: "info"
        },
        {
          id: 17,
          picture: "/img/avatars/5.svg",
          initials: "ML",
          color: "warning"
        }
      ]
    },
    {
      id: 9,
      name: "\u0634\u0628\u06A9\u0647 \u0627\u062C\u062A\u0645\u0627\u0639\u06CC \u0634\u0631\u06A9\u062A\u06CC",
      customer: "\u067E\u0648\u0628\u0644\u06CC\u0633\u06CC\u0633",
      duration: "\u06F5 \u0645\u0627\u0647",
      picture: "/img/photos/abstracts/9.png",
      industry: "Media",
      status: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
      team: [
        {
          id: 7,
          picture: "/img/avatars/7.svg",
          initials: "AC",
          color: "info"
        },
        {
          id: 165,
          picture: void 0,
          initials: "JD",
          color: "info"
        },
        {
          id: 27,
          picture: "/img/avatars/27.svg",
          initials: "CE",
          color: "warning"
        },
        {
          id: 150,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 151,
          picture: void 0,
          initials: "SC",
          color: "h-purple"
        }
      ]
    }
  ];
});

export { index as default };
