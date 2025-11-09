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
      return [item.username, item.location, item.position].some(
        (item2) => item2.match(filterRe)
      );
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: 29,
      picture: "/img/avatars/22.svg",
      badge: "/img/stacks/python.svg",
      username: "\u0645\u06CC\u0631\u0627\u0646\u062F\u0627 \u0627\u0644.",
      initials: "ML",
      status: "\u062C\u062F\u06CC\u062F",
      location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      completed: 12,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 21,
      picture: "/img/avatars/21.svg",
      badge: "/img/icons/flags/england.svg",
      username: "\u0627\u0644\u06CC\u0632\u0627\u0628\u062A \u0641.",
      initials: "EF",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0646\u062F\u0646\u060C \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
      completed: 49,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 8,
      picture: "/img/avatars/23.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u0627\u0631\u06CC\u06A9 \u06A9.",
      initials: "EK",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      completed: 61,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 7,
      picture: "/img/avatars/10.svg",
      badge: "/img/stacks/js.svg",
      username: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
      initials: "KW",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      completed: 28,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 122,
      picture: "/img/avatars/16.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
      initials: "HM",
      color: "warning",
      status: "\u0645\u0634\u063A\u0648\u0644",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      completed: 36,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 23,
      picture: "/img/avatars/11.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u062F\u0646 \u0628\u06CC.",
      initials: "DB",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      completed: 71,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 37,
      picture: "/img/avatars/24.svg",
      badge: "/img/icons/flags/france.svg",
      username: "\u06A9\u0631\u06CC\u0633\u062A\u06CC\u0646\u0627 \u0641.",
      initials: "CF",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      completed: 32,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 25,
      picture: "/img/avatars/25.svg",
      badge: "/img/stacks/js.svg",
      username: "\u0645\u0644\u0627\u0646\u06CC \u0648.",
      initials: "MW",
      status: "\u062C\u062F\u06CC\u062F",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      completed: 49,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 39,
      picture: "/img/avatars/3.svg",
      badge: "/img/stacks/python.svg",
      username: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
      initials: "AB",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      completed: 58,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 19,
      picture: "/img/avatars/19.svg",
      badge: "/img/icons/flags/germany.svg",
      username: "\u06AF\u0631\u062A\u0627 \u06A9.",
      initials: "GK",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
      completed: 19,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 9,
      picture: "/img/avatars/9.svg",
      badge: "/img/stacks/illustrator.svg",
      username: "\u0622\u0646\u0627 \u0628\u06CC.",
      initials: "AB",
      status: "\u0645\u0634\u063A\u0648\u0644",
      location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      completed: 49,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 124,
      picture: void 0,
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u0622\u0644\u0646 \u062A\u06CC.",
      initials: "AT",
      status: "\u0645\u0634\u063A\u0648\u0644",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      completed: 56,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 120,
      picture: void 0,
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u0633\u0627\u0631\u0627 \u0633\u06CC.",
      initials: "SC",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      completed: 35,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 32,
      picture: "/img/avatars/1.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9.",
      initials: "JK",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      completed: 24,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 36,
      picture: "/img/avatars/18.svg",
      badge: "/img/stacks/reactjs.svg",
      username: "\u0628\u0646\u0648\u0622 \u0628.",
      initials: "BB",
      status: "offline",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      completed: 41,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 38,
      picture: "/img/avatars/2.svg",
      badge: "/img/stacks/vuejs.svg",
      username: "\u0645\u0627\u06CC\u0627 \u0631.",
      initials: "MR",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      completed: 36,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 26,
      picture: "/img/avatars/26.svg",
      badge: "/img/stacks/html5.svg",
      username: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
      initials: "CW",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0645\u0644\u0628\u0648\u0631\u0646\u060C \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      completed: 64,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 16,
      picture: "/img/avatars/8.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u062C\u06CC\u0633\u0648\u0646 \u062C.",
      initials: "JG",
      status: "offline",
      location: "\u0647\u06CC\u0648\u0633\u062A\u0648\u0646\u060C \u062A\u06AF\u0632\u0627\u0633",
      position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      completed: 85,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 28,
      picture: "/img/avatars/17.svg",
      badge: "/img/stacks/angular.svg",
      username: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641.",
      initials: "EF",
      status: "\u062C\u062F\u06CC\u062F",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      completed: 14,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 22,
      picture: "/img/avatars/13.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u062F\u0648\u0627\u06CC\u0646 \u0627\u0686.",
      initials: "DH",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      completed: 29,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 13,
      picture: "/img/avatars/22.svg",
      badge: "/img/stacks/illustrator.svg",
      username: "\u062A\u0627\u0631\u0627 \u0627\u0633.",
      initials: "TS",
      status: "\u0645\u0634\u063A\u0648\u0644",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      completed: 57,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 24,
      picture: "/img/avatars/5.svg",
      badge: "/img/icons/flags/france.svg",
      username: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
      initials: "CM",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u06CC\u0648\u0646\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
      completed: 61,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 27,
      picture: "/img/avatars/12.svg",
      badge: "/img/icons/flags/spain.svg",
      username: "\u06A9\u0627\u0631\u0645\u0646 \u0627\u06CC.",
      initials: "CE",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0645\u0627\u062F\u0631\u06CC\u062F\u060C \u0627\u0633\u067E\u0627\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
      completed: 41,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 11,
      picture: "/img/avatars/4.svg",
      badge: "/img/icons/flags/england.svg",
      username: "\u06A9\u0644\u06CC \u0645.",
      initials: "KM",
      status: "offline",
      location: "\u0644\u0646\u062F\u0646\u060C \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627",
      position: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
      completed: 52,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 15,
      picture: "/img/avatars/15.svg",
      badge: "/img/icons/flags/germany.svg",
      username: "\u062C\u0627\u0634 \u0633\u06CC.",
      initials: "JC",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
      position: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      completed: 37,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 14,
      picture: "/img/avatars/14.svg",
      badge: "/img/icons/flags/england.svg",
      username: "\u0631\u0627\u06CC\u0627\u0646 \u0628.",
      initials: "RB",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0644\u0646\u062F\u0646\u060C \u0628\u0631\u06CC\u062A\u0627\u0646\u06CC\u0627",
      position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      completed: 89,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 10,
      picture: "/img/avatars/6.svg",
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u0647\u0646\u0631\u06CC \u062C.",
      initials: "HG",
      status: "\u0645\u0634\u063A\u0648\u0644",
      location: "\u0645\u06CC\u0627\u0645\u06CC\u060C \u0641\u0644\u0648\u0631\u06CC\u062F\u0627",
      position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      completed: 56,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    },
    {
      id: 18,
      picture: void 0,
      badge: "/img/icons/flags/united-states-of-america.svg",
      username: "\u0627\u0633\u062A\u0628\u0627\u0646 \u0633\u06CC.",
      initials: "EC",
      status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633",
      location: "\u0645\u06CC\u0627\u0645\u06CC\u060C \u0641\u0644\u0648\u0631\u06CC\u062F\u0627",
      position: "\u0637\u0631\u0627\u062D UI/UX",
      completed: 81,
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      socialProfiles: [
        {
          name: "\u0641\u06CC\u0633\u0628\u0648\u06A9",
          icon: "fa6-brands:facebook-f",
          url: "https://facebook.com"
        },
        {
          name: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          icon: "fa6-brands:twitter",
          url: "https://twitter.com"
        },
        {
          name: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          icon: "fa6-brands:linkedin-in",
          url: "https://linkedin.com"
        },
        {
          name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          icon: "fa6-brands:github",
          url: "https://github.com"
        }
      ]
    }
  ]);
}

export { index as default };
