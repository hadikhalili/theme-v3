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

const offers = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = parseInt(query.perPage || "5", 10);
  const page = parseInt(query.page || "1", 10);
  const filter = query.filter || "";
  if (perPage >= 200) {
    await new Promise((resolve) => setTimeout(resolve, 2e3));
  }
  const data = await getDemoData();
  return {
    total: data.length,
    data: filterDemoData(data, filter, page, perPage)
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
      categories: ["popular", "development"],
      slug: "asana",
      title: "\u0622\u0633\u0627\u0646\u0627",
      subtitle: "\u06F1\u06F5\u066A \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9",
      icon: "logos:asana-icon",
      remaining: "\u06F1\u06F0 \u0631\u0648\u0632"
    },
    {
      id: 2,
      categories: ["popular", "development"],
      slug: "supabase",
      title: "\u0633\u0648\u067E\u0627\u0628\u06CC\u0633",
      subtitle: "2 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:supabase-icon",
      remaining: "\u06F1\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 3,
      categories: ["popular", "development"],
      slug: "twilio",
      title: "\u062A\u0648\u06CC\u0644\u06CC\u0648",
      subtitle: "\u0627\u06A9\u0646\u0648\u0646 \u06F2\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641",
      icon: "logos:twilio-icon",
      remaining: "\u06F2\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 4,
      categories: ["popular", "development"],
      slug: "heroku",
      title: "\u0647\u0631\u0648\u06A9\u0648",
      subtitle: "6 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:heroku-icon",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 5,
      categories: ["popular", "development"],
      slug: "dropbox",
      title: "\u062F\u0631\u0627\u067E\u200C\u0628\u0627\u06A9\u0633",
      subtitle: "\u0627\u06A9\u0646\u0648\u0646 \u06F1\u06F5\u066A \u062A\u062E\u0641\u06CC\u0641",
      icon: "logos:dropbox",
      remaining: "\u06F7 \u0631\u0648\u0632"
    },
    {
      id: 6,
      categories: ["popular", "development"],
      slug: "github",
      title: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
      subtitle: "\u06F3\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u0628\u0631\u0627\u06CC \u0633\u0627\u0632\u0645\u0627\u0646\u200C\u0647\u0627",
      icon: "logos:github-icon",
      remaining: "\u06F1\u06F2 \u0631\u0648\u0632"
    },
    {
      id: 7,
      categories: ["recent"],
      slug: "elastic-search",
      title: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0627\u0644\u0627\u0633\u062A\u06CC\u06A9",
      subtitle: "\u06F1\u06F2\u066A \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9",
      icon: "logos:elasticpath-icon",
      remaining: "\u06F2\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 8,
      categories: ["recent"],
      slug: "docker",
      title: "\u062F\u0627\u06A9\u0631",
      subtitle: "2 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:docker-icon",
      remaining: "\u06F3\u06F0 \u0631\u0648\u0632"
    },
    {
      id: 9,
      categories: ["recent"],
      slug: "g-suite",
      title: "\u062C\u06CC \u0633\u0648\u0626\u06CC\u062A",
      subtitle: "\u0627\u06A9\u0646\u0648\u0646 \u06F2\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641",
      icon: "logos:google-icon",
      remaining: "\u06F1\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 10,
      categories: ["recent"],
      slug: "hound-ci",
      title: "\u0647\u0627\u0648\u0646\u062F CI",
      subtitle: "2 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:houndci",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 11,
      categories: ["recent"],
      slug: "haxe",
      title: "\u0647\u0627\u06A9\u0633",
      subtitle: "\u0627\u06A9\u0646\u0648\u0646 \u06F3\u06F5\u066A \u062A\u062E\u0641\u06CC\u0641",
      icon: "logos:haxe",
      remaining: "\u06F2\u06F0 \u0631\u0648\u0632"
    },
    {
      id: 12,
      categories: ["recent"],
      slug: "evergreen",
      title: "\u062C\u0627\u0648\u062F\u0627\u0646\u0647",
      subtitle: "\u06F1\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u062A\u0645\u0627\u0645 \u067E\u0644\u0646\u200C\u0647\u0627",
      icon: "logos:evergreen-icon",
      remaining: "\u06F1\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 13,
      categories: ["communication"],
      slug: "slack",
      title: "\u0627\u0633\u0644\u06A9",
      subtitle: "\u06F1\u06F2\u066A \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9",
      icon: "logos:slack-icon",
      remaining: "\u06F2\u06F0 \u0631\u0648\u0632"
    },
    {
      id: 14,
      categories: ["communication"],
      slug: "mattermost",
      title: "\u0645\u062A\u0631\u0645\u0648\u0633\u062A",
      subtitle: "\u06F1 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:mattermost-icon",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 15,
      categories: ["communication"],
      slug: "teams",
      title: "\u062A\u06CC\u0645\u200C\u0647\u0627",
      subtitle: "-\u06F5\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u0627\u06A9\u0646\u0648\u0646",
      icon: "logos:microsoft-teams",
      remaining: "\u06F2\u06F0 \u0631\u0648\u0632"
    },
    {
      id: 16,
      categories: ["communication"],
      slug: "intercom",
      title: "\u0627\u06CC\u0646\u062A\u0631\u06A9\u0627\u0645",
      subtitle: "2 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:intercom-icon",
      remaining: "\u06F2\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 17,
      categories: ["communication"],
      slug: "google-meet",
      title: "\u0645\u0644\u0627\u0642\u0627\u062A \u06AF\u0648\u06AF\u0644",
      subtitle: "-\u06F1\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u0627\u0644\u0627\u0646",
      icon: "logos:google-meet",
      remaining: "\u06F1\u06F0 \u0631\u0648\u0632"
    },
    {
      id: 18,
      categories: ["communication"],
      slug: "hipchat",
      title: "\u0647\u06CC\u067E\u200C\u0686\u062A",
      subtitle: "\u06F2\u06F5\u066A \u062A\u062E\u0641\u06CC\u0641 \u0628\u0631\u0627\u06CC \u0647\u0645\u0647 \u067E\u0644\u0646\u200C\u0647\u0627",
      icon: "logos:hipchat",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 19,
      categories: ["design"],
      slug: "sketch",
      title: "\u0627\u0633\u06A9\u0686",
      subtitle: "\u06F2\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9",
      icon: "logos:sketch",
      remaining: "\u06F1\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 20,
      categories: ["design"],
      slug: "figma",
      title: "\u0641\u06CC\u06AF\u0645\u0627",
      subtitle: "\u06F3 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:figma",
      remaining: "\u06F2\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 21,
      categories: ["design"],
      slug: "adobe-xd",
      title: "\u0627\u062F\u0648\u0628\u06CC XD",
      subtitle: "\u06F3\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u0627\u06A9\u0646\u0648\u0646",
      icon: "logos:adobe-xd",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 22,
      categories: ["design"],
      slug: "adobe-illustrator",
      title: "\u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631",
      subtitle: "\u06F3\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u0627\u06A9\u0646\u0648\u0646",
      icon: "logos:adobe-illustrator",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 23,
      categories: ["design"],
      slug: "zeplin",
      title: "\u0632\u067E\u0644\u06CC\u0646",
      subtitle: "\u06F3\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u0627\u06A9\u0646\u0648\u0646",
      icon: "logos:zeplin",
      remaining: "\u06F1\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 24,
      categories: ["design"],
      slug: "invision",
      title: "\u0627\u06CC\u0646\u0648\u0698\u0646",
      subtitle: "\u06F2\u06F5\u066A \u062A\u062E\u0641\u06CC\u0641 \u0628\u0631\u0627\u06CC \u0647\u0645\u0647 \u067E\u0644\u0646\u200C\u0647\u0627",
      icon: "logos:invision-icon",
      remaining: "\u06F2\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 25,
      categories: ["development"],
      slug: "code-igniter",
      title: "\u06A9\u062F \u0627\u06CC\u06AF\u0646\u0627\u06CC\u062A\u0631",
      subtitle: "\u06F2\u06F0\u066A \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0627\u0634\u062A\u0631\u0627\u06A9",
      icon: "logos:codeigniter-icon",
      remaining: "\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 26,
      categories: ["development"],
      slug: "gitlab",
      title: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
      subtitle: "\u06F1\u06F5\u066A \u062A\u062E\u0641\u06CC\u0641 \u0628\u0631\u0627\u06CC \u0633\u0627\u0632\u0645\u0627\u0646\u200C\u0647\u0627",
      icon: "logos:gitlab",
      remaining: "\u06F2\u06F5 \u0631\u0648\u0632"
    },
    {
      id: 27,
      categories: ["development"],
      slug: "firebase",
      title: "\u0641\u0627\u06CC\u0631\u0628\u06CC\u0633",
      subtitle: "\u06F3 \u0645\u0627\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646",
      icon: "logos:firebase",
      remaining: "\u06F1\u06F0 \u0631\u0648\u0632"
    }
  ]);
}

export { offers as default };
