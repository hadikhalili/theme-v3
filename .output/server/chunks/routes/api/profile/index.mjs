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
  return await getDemoData();
});
async function getDemoData() {
  return Promise.resolve([
    {
      id: 1,
      user: {
        name: "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644.",
        src: "/img/avatars/25.svg",
        text: "ML"
      },
      date: "\u06F1\u06F1 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
      time: "\u06F1\u06F1:\u06F2\u06F8 \u0642.\u0638",
      status: 0,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
        url: "/layouts/projects/details/delivery-app-project",
        text: "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A\u06CC \u062F\u0631"
      },
      people: [
        {
          name: "\u0645\u0627\u06CC\u0627 \u0631.",
          src: "/img/avatars/2.svg",
          text: "MR"
        }
      ]
    },
    {
      id: 2,
      user: {
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        src: "/img/avatars/10.svg",
        text: "KW"
      },
      date: "\u06F9 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
      time: "\u06F2:\u06F1\u06F4 \u0628.\u0638",
      status: 0,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
        url: "/layouts/projects/details/delivery-app-project",
        text: "\u06CC\u06A9 \u0646\u0638\u0631 \u0631\u0648\u06CC \u0648\u0638\u06CC\u0641\u0647\u200C\u0627\u06CC \u06AF\u0630\u0627\u0634\u062A \u062F\u0631"
      },
      people: [
        {
          name: "\u06AF\u0631\u062A\u0627 \u06A9.",
          src: "/img/avatars/24.svg",
          text: "GK"
        }
      ]
    },
    {
      id: 3,
      user: {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
        src: "/img/avatars/16.svg",
        text: "HM"
      },
      date: "\u06F9 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
      time: "\u06F5:\u06F2\u06F9 \u0639\u0635\u0631",
      status: 1,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0631\u0632\u0648\u0645\u0647",
        url: "/layouts/projects/details/resume-management-mobile-app",
        text: "\u06F3 \u0646\u0641\u0631 \u062F\u0639\u0648\u062A \u0634\u062F\u0647 \u0628\u0647"
      },
      people: [
        {
          name: "\u0645\u0627\u06CC\u0627 \u0631.",
          src: "/img/avatars/2.svg",
          text: "MR"
        },
        {
          name: "\u062C\u0627\u0646 \u0628\u06CC.",
          src: "/img/avatars/8.svg",
          text: "JB"
        },
        {
          name: "\u0628\u062A\u06CC \u0633\u06CC.",
          src: "/img/avatars/24.svg",
          text: "BC"
        }
      ]
    },
    {
      id: 4,
      user: {
        name: "\u062C\u0627\u0646 \u0628\u06CC.",
        src: "/img/avatars/8.svg",
        text: "JB"
      },
      date: "\u06F9 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
      time: "\u06F1\u06F8:\u06F1\u06F2",
      status: 1,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
        url: "/layouts/projects/details/delivery-app-project",
        text: "\u0648\u0636\u0639\u06CC\u062A \u06CC\u06A9 \u06A9\u0627\u0631 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0627\u062F\u060C \u062F\u0631"
      },
      people: []
    },
    {
      id: 5,
      user: {
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
        src: "/img/avatars/5.svg",
        text: "JB"
      },
      date: "\u06F8 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
      time: "\u06F9:\u06F4\u06F7 \u0642.\u0638",
      status: 1,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
        url: "/layouts/projects/details/delivery-app-project",
        text: "3 \u0641\u0627\u06CC\u0644 \u062C\u062F\u06CC\u062F \u0622\u067E\u0644\u0648\u062F \u0634\u062F\u060C \u062F\u0631"
      },
      people: []
    },
    {
      id: 6,
      user: {
        name: "\u0628\u062A\u06CC \u062F.",
        src: "/img/avatars/24.svg",
        text: "BD"
      },
      date: "\u06F7 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1",
      time: "\u06F1\u06F0:\u06F1\u06F9 \u0642.\u0638",
      status: 1,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0631\u0632\u0648\u0645\u0647",
        url: "/layouts/projects/details/resume-management-mobile-app",
        text: "\u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u06CC\u06A9 \u0646\u0638\u0631 \u0630\u06A9\u0631 \u06A9\u0631\u062F\u060C \u062F\u0631"
      },
      people: []
    },
    {
      id: 7,
      user: {
        name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0633\u06CC.",
        src: "/img/avatars/20.svg",
        text: "HC"
      },
      date: "\u06F2\u06F5 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F2",
      time: "\u06F1\u06F1:\u06F2\u06F7 \u0642.\u0638",
      status: 0,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
        url: "/layouts/projects/details/delivery-app-project",
        text: "\u06CC\u06A9 \u0646\u0638\u0631 \u0631\u0648\u06CC \u0648\u0638\u06CC\u0641\u0647\u200C\u0627\u06CC \u06AF\u0630\u0627\u0634\u062A \u062F\u0631"
      },
      people: [
        {
          name: "\u0633\u0627\u0646\u062F\u0631\u0627 \u0648.",
          src: "/img/avatars/12.svg",
          text: "SW"
        }
      ]
    },
    {
      id: 8,
      user: {
        name: "\u062C\u0627\u0646 \u0628\u06CC.",
        src: "/img/avatars/8.svg",
        text: "JB"
      },
      date: "\u06F2\u06F5 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F2",
      time: "\u06F3:\u06F1\u06F9 \u0628.\u0638",
      status: 1,
      target: {
        type: "project",
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644",
        url: "/layouts/projects/details/delivery-app-project",
        text: "\u0648\u0636\u0639\u06CC\u062A \u06CC\u06A9 \u06A9\u0627\u0631 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0627\u062F\u060C \u062F\u0631"
      },
      people: []
    }
  ]);
}

export { index as default };
