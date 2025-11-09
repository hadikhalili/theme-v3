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

const jobs = defineEventHandler(async (event) => {
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
      return [item.title, item.location, item.duration].some(
        (item2) => item2.match(filterRe)
      );
    }).slice(offset, offset + perPage)
  };
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: "1",
      logo: "/img/logos/brands/airbnb.svg",
      title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 Node JS \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u{1F44C}",
      location: "\u0633\u0646 \u062F\u06CC\u06AF\u0648",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F3 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "2",
      logo: "/img/logos/brands/hubspot.svg",
      title: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0631\u06CC\u200C\u0627\u06A9\u062A Native",
      location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      duration: "\u0646\u06CC\u0645\u0647\u200C\u0648\u0642\u062A",
      requirements: "\u06F2 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "3",
      logo: "/img/logos/brands/slack.svg",
      title: "\u0637\u0631\u0627\u062D UI/UX \u0628\u0631\u0627\u06CC \u062A\u0642\u0648\u06CC\u062A \u062A\u06CC\u0645 UX \u{1F4AA}\u{1F4AA}",
      location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F3 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "4",
      logo: "/img/logos/brands/gitlab.svg",
      title: "\u0645\u062F\u06CC\u0631 \u0627\u0631\u0634\u062F DevOps \u062A\u06CC\u0645 IT",
      location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F1\u06F0 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "5",
      logo: "/img/logos/brands/google.svg",
      title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 \u0628\u0627 \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0642\u0648\u06CC Mongo\u067E\u0627\u06CC\u06AF\u0627\u0647 \u062F\u0627\u062F\u0647",
      location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F5 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647"
    },
    {
      id: "6",
      logo: "/img/logos/brands/facebook.svg",
      title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0648 Node.js",
      location: "\u067E\u0627\u0633\u0627\u062F\u0646\u0627",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F4 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "7",
      logo: "/img/logos/brands/tnw.svg",
      title: "\u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0631\u06CC\u200C\u0627\u06A9\u062A Native",
      location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F2 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "8",
      logo: "/img/logos/brands/dribbble.svg",
      title: "\u0637\u0631\u0627\u062D UI/UX \u0628\u0627 \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC Html5 \u0648 Sass \u{1F44D}",
      location: "\u0633\u0646 \u062F\u06CC\u06AF\u0648",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F4 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "9",
      logo: "/img/logos/brands/atlassian.svg",
      title: "\u0645\u062F\u06CC\u0631 \u0627\u0631\u0634\u062F \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0627 \u062A\u062C\u0631\u0628\u0647",
      location: "\u0645\u0644\u0628\u0648\u0631\u0646",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F1\u06F0 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "10",
      logo: "/img/logos/brands/github.svg",
      title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0648 Node.js",
      location: "\u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
      duration: "\u0646\u06CC\u0645\u0647\u200C\u0648\u0642\u062A",
      requirements: "\u06F1 \u0633\u0627\u0644 \u0633\u0627\u0628\u0642\u0647"
    },
    {
      id: "11",
      logo: "/img/logos/brands/airbnb.svg",
      title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 Node JS \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u{1F44C}",
      location: "\u0633\u0646 \u062F\u06CC\u06AF\u0648",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F3 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    },
    {
      id: "12",
      logo: "/img/logos/brands/airbnb.svg",
      title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 Node JS \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u{1F44C}",
      location: "\u0633\u0646 \u062F\u06CC\u06AF\u0648",
      duration: "\u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
      requirements: "\u06F3 \u0633\u0627\u0644 \u062A\u062C\u0631\u0628\u0647"
    }
  ]);
}

export { jobs as default };
