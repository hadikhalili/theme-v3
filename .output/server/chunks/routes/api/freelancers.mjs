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

const freelancers = defineEventHandler(async (event) => {
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
      id: "5",
      name: "\u0645\u0631\u06CC \u0644\u0628\u0648\u0641\u0633\u06A9\u06CC",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
      roleColor: "primary",
      medias: {
        avatar: "/img/avatars/5.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16
      },
      teams: [{ src: "/img/avatars/9.svg" }, { src: "/img/avatars/11.svg" }]
    },
    {
      id: "34",
      name: "\u062F\u0627\u0646\u06CC\u0644 \u0631\u062F\u0628\u0650\u0631\u062F",
      location: "\u062A\u0648\u0631\u0646\u062A\u0648\u060C \u06A9\u0627\u0646\u0627\u062F\u0627",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/20.svg",
        flag: "/img/icons/flags/canada.svg"
      },
      stats: {
        projects: 45,
        replies: 12,
        posts: 5
      },
      teams: [
        { src: "/img/avatars/12.svg" },
        { src: "/img/avatars/22.svg" },
        { src: "/img/avatars/10.svg" }
      ]
    },
    {
      id: "8",
      name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
      location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
      role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
      roleColor: "secondary",
      medias: {
        avatar: "/img/avatars/16.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16
      },
      teams: [{ src: "/img/avatars/7.svg" }, { src: "/img/avatars/23.svg" }]
    },
    {
      id: "40",
      name: "\u062C\u06CC\u0646 \u0645\u0627\u0631\u0634\u0646\u062F",
      location: "\u067E\u0627\u0631\u06CC\u0633\u060C \u0641\u0631\u0627\u0646\u0633\u0647",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/19.svg",
        flag: "/img/icons/flags/france.svg"
      },
      stats: {
        projects: 6,
        replies: 12,
        posts: 8
      },
      teams: [
        { src: "/img/avatars/18.svg" },
        { src: "/img/avatars/13.svg" },
        { src: "/img/avatars/8.svg" },
        { src: "/img/avatars/4.svg" },
        { src: "/img/avatars/5.svg" },
        { src: "/img/avatars/6.svg" },
        { src: "/img/avatars/7.svg" },
        { src: "/img/avatars/9.svg" }
      ]
    },
    {
      id: "27",
      name: "\u06A9\u0627\u0631\u0645\u0646 \u0627\u0633\u06A9\u0648\u062F\u0631\u0648",
      location: "\u0645\u0627\u062F\u0631\u06CC\u062F\u060C \u0627\u0633\u067E\u0627\u0646\u06CC\u0627",
      role: "\u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
      roleColor: "primary",
      medias: {
        avatar: "/img/avatars/21.svg",
        flag: "/img/icons/flags/spain.svg"
      },
      stats: {
        projects: 8,
        replies: 158,
        posts: 54
      },
      teams: [{ src: "/img/avatars/18.svg" }]
    },
    {
      id: "9",
      name: "\u0622\u0646\u0627 \u0628\u06CC\u06A9\u0631",
      location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u0637\u0631\u0627\u062D UI/UX",
      roleColor: "green",
      medias: {
        avatar: "/img/avatars/9.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 19,
        replies: 28,
        posts: 12
      },
      teams: [{ src: "/img/avatars/12.svg" }, { src: "/img/avatars/5.svg" }]
    },
    {
      id: "18",
      name: "\u0627\u0633\u062A\u0628\u0627\u0646 \u06A9\u0627\u0633\u062A\u0644\u0627\u0646\u0648\u0633",
      location: "\u0645\u06CC\u0627\u0645\u06CC\u060C \u0641\u0644\u0648\u0631\u06CC\u062F\u0627",
      role: "\u0637\u0631\u0627\u062D UI/UX",
      roleColor: "green",
      medias: {
        avatar: "/img/avatars/18.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 59,
        replies: 158,
        posts: 16
      },
      teams: [
        { src: "/img/avatars/19.svg" },
        { src: "/img/avatars/16.svg" },
        { src: "/img/avatars/22.svg" },
        { src: "/img/avatars/4.svg" },
        { src: "/img/avatars/5.svg" },
        { src: "/img/avatars/2.svg" },
        { src: "/img/avatars/6.svg" },
        { src: "/img/avatars/9.svg" },
        { src: "/img/avatars/7.svg" },
        { src: "/img/avatars/3.svg" }
      ]
    },
    {
      id: "10",
      name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
      location: "\u0645\u06CC\u0627\u0645\u06CC\u060C \u0641\u0644\u0648\u0631\u06CC\u062F\u0627",
      role: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
      roleColor: "primary",
      medias: {
        avatar: "/img/avatars/10.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 42,
        replies: 15,
        posts: 2
      },
      teams: [{ src: "/img/avatars/15.svg" }, { src: "/img/avatars/22.svg" }]
    },
    {
      id: "25",
      name: "\u0645\u0644\u0627\u0646\u06CC \u0648\u0627\u0644\u0627\u0633",
      location: "\u0633\u0646 \u062E\u0648\u0632\u0647\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
      role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/25.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 17,
        replies: 22,
        posts: 4
      },
      teams: [
        { src: "/img/avatars/10.svg" },
        { src: "/img/avatars/23.svg" },
        { src: "/img/avatars/16.svg" },
        { src: "/img/avatars/5.svg" },
        { src: "/img/avatars/4.svg" }
      ]
    },
    {
      id: "7",
      name: "\u062A\u0648\u0645\u0627\u0633 \u0627\u0646\u062F\u0631\u0633\u0648\u0646",
      location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
      role: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
      roleColor: "orange",
      medias: {
        avatar: "/img/avatars/7.svg",
        flag: "/img/icons/flags/united-states-of-america.svg"
      },
      stats: {
        projects: 31,
        replies: 82,
        posts: 14
      },
      teams: [{ src: "/img/avatars/9.svg" }, { src: "/img/avatars/14.svg" }]
    }
  ]);
}

export { freelancers as default };
