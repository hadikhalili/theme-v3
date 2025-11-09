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
      id: 13,
      picture: "/demo/avatars/13.jpg",
      badge: "/images/icons/stacks/illustrator.svg",
      username: "\u062A\u0627\u0631\u0627 \u0627\u0633.",
      fullName: "\u062A\u0627\u0631\u0627 \u0633\u0648\u0650\u0646\u0633\u0648\u0646",
      initials: "TS",
      color: "danger",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 37
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "\u0628\u062A\u06CC \u062A\u06CC.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "\u062C\u0627\u0646 \u062F.",
          initials: "JD",
          color: "info"
        },
        {
          id: 7,
          picture: "/demo/avatars/7.jpg",
          name: "\u0622\u0644\u06CC\u0633 \u0633\u06CC.",
          initials: "AC",
          color: "success"
        }
      ]
    },
    {
      id: 37,
      picture: "/demo/avatars/37.jpg",
      badge: "/images/icons/flags/france.svg",
      username: "\u0647\u0644\u0645\u0648\u062A \u0641.",
      fullName: "\u0647\u0644\u0645\u0648\u062A \u0641\u0631\u06CC\u062A\u0632",
      initials: "HF",
      color: "h-purple",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 59
      },
      status: "overdue",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0641.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 189,
          picture: void 0,
          name: "\u0622\u0644\u0646 \u062A\u06CC.",
          initials: "AT",
          color: "success"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 25,
      picture: "/demo/avatars/25.jpg",
      badge: "/images/icons/stacks/js.svg",
      username: "\u0645\u0644\u0627\u0646\u06CC \u0648.",
      fullName: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0627\u0644\u0627\u0633",
      initials: "MW",
      color: "success",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 21
      },
      status: "synced",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0641.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 198,
          picture: void 0,
          name: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 29,
      picture: "/demo/avatars/29.jpg",
      badge: "/images/icons/stacks/python.svg",
      username: "\u062D\u06A9\u06CC\u0645 \u0633\u06CC.",
      fullName: "\u062D\u06A9\u06CC\u0645 \u06A9\u0644\u0627\u0645\u06CC",
      initials: "HC",
      color: "info",
      location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 11
      },
      status: "synced",
      team: [
        {
          id: 28,
          picture: "/demo/avatars/28.jpg",
          name: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641.",
          initials: "EF",
          color: "info"
        },
        {
          id: 33,
          picture: "/demo/avatars/33.jpg",
          name: "\u0647\u0627\u0631\u0648\u06CC \u0627\u0645.",
          initials: "HM",
          color: "warning"
        }
      ]
    },
    {
      id: 39,
      picture: "/demo/avatars/39.jpg",
      badge: "/images/icons/stacks/python.svg",
      username: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
      fullName: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u0627\u062F\u0627\u062E\u0648\u0632",
      initials: "AB",
      color: "h-purple",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 17
      },
      status: "blocked",
      team: [
        {
          id: 189,
          picture: void 0,
          name: "\u0622\u0644\u0646 \u062A\u06CC.",
          initials: "AT",
          color: "success"
        },
        {
          id: 23,
          picture: "/demo/avatars/23.jpg",
          name: "\u0627\u06CC\u0631\u06CC\u0646\u0627 \u0648.",
          initials: "IV",
          color: "danger"
        }
      ]
    },
    {
      id: 40,
      picture: "/demo/avatars/40.jpg",
      badge: "/images/icons/stacks/android.svg",
      username: "\u0698\u0627\u0646 \u0627\u0645.",
      fullName: "\u062C\u06CC\u0646 \u0645\u0627\u0631\u0634\u0646\u062F",
      initials: "JM",
      color: "info",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 14
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "\u0628\u062A\u06CC \u062A\u06CC.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "\u062C\u0627\u0646 \u062F.",
          initials: "JD",
          color: "info"
        }
      ]
    },
    {
      id: 19,
      picture: "/demo/avatars/19.jpg",
      badge: "/images/icons/flags/germany.svg",
      username: "\u06AF\u0631\u062A\u0627 \u06A9.",
      fullName: "\u06AF\u0631\u062A\u0627 \u06A9\u0631\u0648\u067E\u0641\u0631",
      initials: "GK",
      color: "h-yellow",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 18
      },
      status: "synced",
      team: [
        {
          id: 198,
          picture: void 0,
          name: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 27,
          picture: "/demo/avatars/27.jpg",
          name: "\u06A9\u0627\u0631\u0645\u0646 \u0627\u06CC.",
          initials: "CE",
          color: "info"
        }
      ]
    },
    {
      id: 9,
      picture: "/demo/avatars/9.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u0622\u0646\u0627 \u0628\u06CC.",
      fullName: "\u0622\u0646\u0627 \u0628\u06CC\u06A9\u0631",
      initials: "AB",
      color: "info",
      location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 27
      },
      status: "synced",
      team: [
        {
          id: 189,
          picture: void 0,
          name: "\u0622\u0644\u0646 \u062A\u06CC.",
          initials: "AT",
          color: "success"
        },
        {
          id: 23,
          picture: "/demo/avatars/23.jpg",
          name: "\u0627\u06CC\u0631\u06CC\u0646\u0627 \u0648.",
          initials: "IV",
          color: "danger"
        }
      ]
    },
    {
      id: 5,
      picture: "/demo/avatars/5.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u0645\u0631\u06CC \u0627\u0644.",
      fullName: "\u0645\u0631\u06CC \u0644\u0628\u0648\u0641\u0633\u06A9\u06CC",
      initials: "ML",
      color: "h-yellow",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 31
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "\u0628\u062A\u06CC \u062A\u06CC.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "\u062C\u0627\u0646 \u062F.",
          initials: "JD",
          color: "info"
        },
        {
          id: 7,
          picture: "/demo/avatars/7.jpg",
          name: "\u0622\u0644\u06CC\u0633 \u0633\u06CC.",
          initials: "AC",
          color: "success"
        }
      ]
    },
    {
      id: 32,
      picture: "/demo/avatars/32.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9.",
      fullName: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0631\u0648\u06AF\u0631",
      initials: "JK",
      color: "info",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 9
      },
      status: "synced",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0641.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 198,
          picture: void 0,
          name: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 36,
      picture: "/demo/avatars/36.jpg",
      badge: "/images/icons/flags/france.svg",
      username: "\u0628\u0646\u0648\u0622 \u0644.",
      fullName: "\u0628\u0646\u0648\u0622 \u0644\u0628\u0644\u0627\u0646\u06A9",
      initials: "BL",
      color: "h-purple",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 22
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "\u0628\u062A\u06CC \u062A\u06CC.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 31,
          picture: "/demo/avatars/31.jpg",
          name: "\u06CC\u0627\u0633\u06CC\u0646 \u0622.",
          initials: "YA",
          color: "h-purple"
        }
      ]
    },
    {
      id: 38,
      picture: "/demo/avatars/38.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u06A9\u0631\u06CC\u0633\u062A\u06CC \u062F.",
      fullName: "\u06A9\u0631\u06CC\u0633\u062A\u06CC \u062F\u0627\u0644\u0627\u0633",
      initials: "CD",
      color: "info",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 43
      },
      status: "overdue",
      team: [
        {
          id: 33,
          picture: "/demo/avatars/33.jpg",
          name: "\u0647\u0627\u0631\u0648\u06CC \u0627\u0645.",
          initials: "HM",
          color: "warning"
        },
        {
          id: 26,
          picture: "/demo/avatars/26.jpg",
          name: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
          initials: "CW",
          color: "info"
        }
      ]
    },
    {
      id: 26,
      picture: "/demo/avatars/26.jpg",
      badge: "/images/icons/flags/australia.svg",
      username: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
      fullName: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648\u06CC\u0644\u0633\u0648\u0646",
      initials: "CW",
      color: "info",
      location: "\u0645\u0644\u0628\u0648\u0631\u0646\u060C \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 13
      },
      status: "synced",
      team: [
        {
          id: 21,
          picture: "/demo/avatars/21.jpg",
          name: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0641.",
          initials: "EF",
          color: "warning"
        },
        {
          id: 189,
          picture: void 0,
          name: "\u0622\u0644\u0646 \u062A\u06CC.",
          initials: "AT",
          color: "success"
        },
        {
          id: 39,
          picture: "/demo/avatars/39.jpg",
          name: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
          initials: "AB",
          color: "danger"
        }
      ]
    },
    {
      id: 16,
      picture: "/demo/avatars/16.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u062C\u06CC\u0633\u0648\u0646 \u062C.",
      fullName: "\u062C\u06CC\u0633\u0648\u0646 \u06AF\u0648\u0627\u0631\u0627\u0646\u06A9",
      initials: "JG",
      color: "danger",
      location: "\u0647\u06CC\u0648\u0633\u062A\u0648\u0646\u060C \u062A\u06AF\u0632\u0627\u0633",
      position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 39
      },
      status: "synced",
      team: [
        {
          id: 14,
          picture: "/demo/avatars/14.jpg",
          name: "\u0631\u0627\u06CC\u0627\u0646 \u0628.",
          initials: "RB",
          color: "warning"
        },
        {
          id: 198,
          picture: void 0,
          name: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
          initials: "SC",
          color: "h-purple"
        }
      ]
    },
    {
      id: 23,
      picture: "/demo/avatars/23.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u0627\u06CC\u0631\u06CC\u0646\u0627 \u0648.",
      fullName: "\u0627\u06CC\u0631\u06CC\u0646\u0627 \u0648\u06CC\u0631\u0628\u0648\u0641\u0633\u06A9\u06CC",
      initials: "IV",
      color: "info",
      location: "\u0633\u0646 \u062E\u0648\u0632\u0647\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 7
      },
      status: "synced",
      team: [
        {
          id: 189,
          picture: void 0,
          name: "\u0622\u0644\u0646 \u062A\u06CC.",
          initials: "AT",
          color: "success"
        },
        {
          id: 34,
          picture: "/demo/avatars/34.jpg",
          name: "\u062F\u0646\u06CC\u0644 \u0631.",
          initials: "DR",
          color: "h-yellow"
        }
      ]
    },
    {
      id: 28,
      picture: "/demo/avatars/28.jpg",
      badge: "/images/icons/flags/france.svg",
      username: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641.",
      fullName: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646\u062A",
      initials: "EF",
      color: "success",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 19
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "\u0628\u062A\u06CC \u062A\u06CC.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 18,
          picture: "/demo/avatars/18.jpg",
          name: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
          initials: "EC",
          color: "h-purple"
        },
        {
          id: 159,
          picture: void 0,
          name: "\u062C\u0627\u0646 \u062F.",
          initials: "JD",
          color: "info"
        }
      ]
    },
    {
      id: 7,
      picture: "/demo/avatars/7.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u0622\u0644\u06CC\u0633 \u0633\u06CC.",
      fullName: "\u0622\u0644\u06CC\u0633 \u06A9\u0627\u0631\u0627\u0633\u06A9\u0627",
      initials: "AC",
      color: "info",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 14
      },
      status: "synced",
      team: [
        {
          id: 25,
          picture: "/demo/avatars/25.jpg",
          name: "\u0645\u0644\u0627\u0646\u06CC \u0648.",
          initials: "MW",
          color: "success"
        },
        {
          id: 198,
          picture: void 0,
          name: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
          initials: "SC",
          color: "h-purple"
        },
        {
          id: 12,
          picture: "/demo/avatars/12.jpg",
          name: "\u062C\u0627\u0634\u0648\u0627 \u0627\u0633.",
          initials: "JS",
          color: "warning"
        }
      ]
    },
    {
      id: 22,
      picture: "/demo/avatars/22.jpg",
      badge: "/images/icons/flags/united-states-of-america.svg",
      username: "\u062F\u0648\u0627\u06CC\u0646 \u0627\u0686.",
      fullName: "\u062F\u0648\u06CC\u0646 \u0647\u06CC\u06A9\u0633",
      initials: "DH",
      color: "info",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      tasks: {
        pending: 5
      },
      status: "synced",
      team: [
        {
          id: 148,
          picture: void 0,
          name: "\u0628\u062A\u06CC \u062A\u06CC.",
          initials: "BT",
          color: "h-yellow"
        },
        {
          id: 198,
          picture: void 0,
          name: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
          initials: "SC",
          color: "h-purple"
        }
      ]
    }
  ];
});

export { index as default };
