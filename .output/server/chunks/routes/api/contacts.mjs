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

const contacts = defineEventHandler(async (event) => {
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
      return [item.name, item.location, item.role].some(
        (item2) => item2.match(filterRe)
      );
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: "13",
      name: "\u062A\u0627\u0631\u0627 \u0633\u0648\u0650\u0646\u0633\u0648\u0646",
      shortname: "\u062A\u0627\u0631\u0627 \u0627\u0633.",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      role: "\u0637\u0631\u0627\u062D UI/UX",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/13.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 65,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "37",
      name: "\u0647\u0644\u0645\u0648\u062A \u0641\u0631\u06CC\u062A\u0632",
      shortname: "\u0647\u0644\u0645\u0648\u062A \u0641.",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/37.jpg",
        badge: "/images/icons/flags/france.svg"
      },
      progress: 38,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "25",
      name: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0627\u0644\u0627\u0633",
      shortname: "\u0645\u0644\u0627\u0646\u06CC \u0648.",
      location: "\u0633\u0646 \u062E\u0648\u0632\u0647\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/25.jpg",
        badge: "/images/icons/stacks/js.svg"
      },
      progress: 58,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "29",
      name: "\u062D\u06A9\u06CC\u0645 \u06A9\u0644\u0627\u0645\u06CC",
      shortname: "\u062D\u06A9\u06CC\u0645 \u0633\u06CC.",
      location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
      role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/29.jpg",
        badge: "/images/icons/stacks/python.svg"
      },
      progress: 85,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "39",
      name: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u0627\u062F\u0627\u062E\u0648\u0632",
      shortname: "\u0627\u0644\u062E\u0627\u0646\u062F\u0631\u0648 \u0628\u06CC.",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      role: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/39.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 28,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "40",
      name: "\u062C\u06CC\u0646 \u0645\u0627\u0631\u0634\u0646\u062F",
      shortname: "\u0698\u0627\u0646 \u0627\u0645.",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/40.jpg",
        badge: "/images/icons/stacks/android.svg"
      },
      progress: 67,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "19",
      name: "\u06AF\u0631\u062A\u0627 \u06A9\u0631\u0648\u067E\u0641\u0631",
      shortname: "\u06AF\u0631\u062A\u0627 \u06A9.",
      location: "\u0628\u0631\u0644\u06CC\u0646\u060C \u0622\u0644\u0645\u0627\u0646",
      role: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/19.jpg",
        badge: "/images/icons/flags/germany.svg"
      },
      progress: 56,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "9",
      name: "\u0622\u0646\u0627 \u0628\u06CC\u06A9\u0631",
      shortname: "\u0622\u0646\u0627 \u0628.",
      location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u0637\u0631\u0627\u062D UI/UX",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/9.jpg",
        badge: "/images/icons/stacks/photoshop.svg"
      },
      progress: 12,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "5",
      name: "\u0645\u0631\u06CC \u0644\u0628\u0648\u0641\u0633\u06A9\u06CC",
      shortname: "\u0645\u0631\u06CC \u0627\u0644.",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/5.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 29,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "32",
      name: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9\u0631\u0648\u06AF\u0631",
      shortname: "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9.",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/32.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 91,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "36",
      name: "\u0628\u0646\u0648\u0622 \u0644\u0628\u0644\u0627\u0646\u06A9",
      shortname: "\u0628\u0646\u0648\u0622 \u0644.",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/36.jpg",
        badge: "/images/icons/stacks/reactjs.svg"
      },
      progress: 44,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "38",
      name: "\u06A9\u0631\u06CC\u0633\u062A\u06CC \u062F\u0627\u0644\u0627\u0633",
      shortname: "\u06A9\u0631\u06CC\u0633\u062A\u06CC \u062F.",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/38.jpg",
        badge: "/images/icons/stacks/vuejs.svg"
      },
      progress: 61,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "26",
      name: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648\u06CC\u0644\u0633\u0648\u0646",
      shortname: "\u06A9\u0648\u0631\u062A\u0646\u06CC \u0648.",
      location: "\u0645\u0644\u0628\u0648\u0631\u0646\u060C \u0627\u0633\u062A\u0631\u0627\u0644\u06CC\u0627",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/26.jpg",
        badge: "/images/icons/stacks/html5.svg"
      },
      progress: 53,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "16",
      name: "\u062C\u06CC\u0633\u0648\u0646 \u06AF\u0648\u0627\u0631\u0627\u0646\u06A9",
      shortname: "\u062C\u06CC\u0633\u0648\u0646 \u062C.",
      location: "\u0647\u06CC\u0648\u0633\u062A\u0648\u0646\u060C \u062A\u06AF\u0632\u0627\u0633",
      role: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/16.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 78,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "23",
      name: "\u0627\u06CC\u0631\u06CC\u0646\u0627 \u0648\u06CC\u0631\u0628\u0648\u0641\u0633\u06A9\u06CC",
      shortname: "\u0627\u06CC\u0631\u06CC\u0646\u0627 \u0648.",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/23.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 36,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "28",
      name: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0627\u0644\u0627\u0646\u062A",
      shortname: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641.",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/28.jpg",
        badge: "/images/icons/stacks/angular.svg"
      },
      progress: 49,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "7",
      name: "\u0622\u0644\u06CC\u0633 \u06A9\u0627\u0631\u0627\u0633\u06A9\u0627",
      shortname: "\u0622\u0644\u06CC\u0633 \u0633\u06CC.",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/7.jpg",
        badge: "/images/icons/stacks/csharp.svg"
      },
      progress: 78,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    },
    {
      id: "22",
      name: "\u062F\u0648\u06CC\u0646 \u0647\u06CC\u06A9\u0633",
      shortname: "\u062F\u0648\u0627\u06CC\u0646 \u0627\u0686.",
      location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      bio: "\u0627\u06CC\u0646 \u06CC\u06A9 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0627\u0631\u0628\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062D\u062A\u0648\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      medias: {
        avatar: "/demo/avatars/22.jpg",
        badge: "/images/icons/flags/united-states-of-america.svg"
      },
      progress: 17,
      social: [
        {
          channel: "\u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646",
          url: "https://linkedin.com",
          icon: "fab fa-linkedin-in"
        },
        {
          channel: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
          url: "https://twitter.com",
          icon: "fab fa-twitter"
        },
        {
          channel: "\u062F\u0631\u06CC\u0628\u0644",
          url: "https://dribbble.com",
          icon: "fab fa-dribbble"
        },
        {
          channel: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
          url: "https://github.com",
          icon: "fab fa-github"
        }
      ]
    }
  ]);
}

export { contacts as default };
