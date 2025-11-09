import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, a as __nuxt_component_2, e as _sfc_main$e, c as _sfc_main$v, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseProse-BoVg3KNx.mjs';
import { _ as _sfc_main$3 } from './TairoPopover-CJdqeAYt.mjs';
import { _ as _sfc_main$4 } from './TairoPopoverContentHelp-Bu8DVRTS.mjs';
import { _ as _sfc_main$5 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as _sfc_main$6 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "influencer",
  __ssrInlineRender: true,
  setup(__props) {
    const companies = [
      {
        name: "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC",
        logo: "logos:airbnb-icon",
        title: "\u0637\u0631\u0627\u062D UI / UX",
        description: "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC \u0634\u0631\u06A9\u062A\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0628\u0647 \u0627\u0641\u0631\u0627\u062F \u0627\u0645\u06A9\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u0627\u0642\u0627\u0645\u062A\u06AF\u0627\u0647\u200C\u0647\u0627 \u0631\u0627 \u0641\u0647\u0631\u0633\u062A\u060C \u06A9\u0634\u0641 \u0648 \u0631\u0632\u0631\u0648 \u06A9\u0646\u0646\u062F \u062F\u0631 \u0633\u0631\u0627\u0633\u0631 \u062C\u0647\u0627\u0646.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0637\u0631\u0627\u062D\u06CC \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC", "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
            src: "/img/avatars/3.svg"
          },
          {
            tooltip: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
            src: "/img/avatars/5.svg"
          },
          {
            tooltip: "\u062C\u06CC\u0646 \u062F\u0648",
            src: "/img/avatars/4.svg"
          }
        ]
      },
      {
        name: "\u0627\u0633\u0644\u06A9",
        logo: "logos:slack-icon",
        title: "\u0645\u062D\u0635\u0648\u0644 \u0637\u0631\u0627\u062D",
        description: "\u0627\u0633\u0644\u06A9 \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627 \u0648 \u062E\u062F\u0645\u0627\u062A \u0647\u0645\u06A9\u0627\u0631\u06CC \u062A\u06CC\u0645\u06CC \u0645\u0628\u062A\u0646\u06CC \u0628\u0631 \u0627\u0628\u0631 \u0627\u0633\u062A.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0637\u0631\u0627\u062D\u06CC \u0645\u062D\u0635\u0648\u0644", "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
            src: "/img/avatars/16.svg"
          },
          {
            tooltip: "\u062C\u0646 \u0631\u0627\u0633\u06CC",
            src: "/img/avatars/10.svg"
          }
        ]
      },
      {
        name: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
        logo: "logos:gitlab",
        title: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        description: "GitLab \u0627\u0628\u0632\u0627\u0631\u06CC \u0645\u0628\u062A\u0646\u06CC \u0628\u0631 \u0648\u0628 \u0628\u0631\u0627\u06CC \u0686\u0631\u062E\u0647 \u0639\u0645\u0631 DevOps \u0627\u0633\u062A \u06A9\u0647 \u0645\u062F\u06CC\u0631 \u0645\u062E\u0632\u0646 Git \u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u062F\u0647\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062D\u0635\u0648\u0644"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u0627\u0644\u06A9\u0633 \u0648\u06CC\u062F\u0644\u0631",
            src: "/img/avatars/11.svg"
          },
          {
            tooltip: "\u0631\u0627\u0628 \u0647\u0627\u0648\u0627\u0631\u062F\u0632",
            src: "/img/avatars/18.svg"
          }
        ]
      },
      {
        name: "\u06AF\u0648\u06AF\u0644",
        logo: "logos:google-icon",
        title: "\u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644",
        description: "\u06AF\u0648\u06AF\u0644 \u06CC\u06A9 \u0634\u0631\u06A9\u062A \u0641\u0646\u0627\u0648\u0631\u06CC \u0686\u0646\u062F\u0645\u0644\u06CC\u062A\u06CC \u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u062E\u062F\u0645\u0627\u062A \u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A \u062A\u062E\u0635\u0635 \u062F\u0627\u0631\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0645\u062F\u06CC\u0631 \u0627\u0633\u06A9\u0631\u0627\u0645", "\u0645\u062F\u06CC\u0631\u06CC\u062A"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u0646\u0633 \u0628\u0648\u062F\u06CC\u06A9\u0631",
            src: "/img/avatars/13.svg"
          },
          {
            tooltip: "\u0622\u0646\u062F\u0631\u0648 \u0647\u0648\u0644\u0645\u0632",
            src: "/img/avatars/14.svg"
          }
        ]
      },
      {
        name: "\u0622\u062A\u0644\u0633\u06CC\u0627\u0646",
        logo: "logos:atlassian",
        title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644 \u0627\u0633\u062A\u06A9",
        description: "\u0622\u062A\u0644\u0633\u06CC\u0627\u0646 \u0634\u0631\u06A9\u062A\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u0647\u0627\u06CC \u0633\u0627\u0632\u0645\u0627\u0646\u06CC \u0628\u0631\u0627\u06CC \u062A\u06CC\u0645\u200C\u0647\u0627 \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u062F\u0647\u062F. \u0627\u06CC\u0646 \u0634\u0631\u06A9\u062A \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0631\u0627 \u0628\u0631\u0627\u06CC \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u06AF\u0627\u0646 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u060C \u0645\u062F\u06CC\u0631\u0627\u0646 \u067E\u0631\u0648\u0698\u0647 \u0648 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062D\u062A\u0648\u0627 \u062A\u0648\u0633\u0639\u0647 \u0645\u06CC\u200C\u062F\u0647\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0641\u0648\u0644 \u0627\u0633\u062A\u06A9", "\u0645\u0647\u0646\u062F\u0633\u06CC"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u0633\u0627\u0645 \u0628\u0631\u062A\u0645\u0646",
            src: "/img/avatars/15.svg"
          },
          {
            tooltip: "\u0627\u0644\u06CC\u0646\u0627 \u0648\u06CC\u0644\u0631",
            src: "/img/avatars/9.svg"
          }
        ]
      },
      {
        name: "\u062F\u0631\u06CC\u0628\u0644",
        logo: "logos:dribbble-icon",
        title: "\u0645\u062F\u06CC\u0631 \u062C\u0627\u0645\u0639\u0647",
        description: "\u062F\u0631\u06CC\u0628\u0644 \u062C\u0627\u0645\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0637\u0631\u0627\u062D\u0627\u0646 \u0627\u0633\u062A \u06A9\u0647 \u0627\u0633\u06A9\u0631\u06CC\u0646\u200C\u0634\u0627\u062A\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u060C \u0641\u0631\u0622\u06CC\u0646\u062F \u0648 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0645\u06CC\u200C\u06AF\u0630\u0627\u0631\u0646\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0645\u062F\u06CC\u0631", "\u062C\u0627\u0645\u0639\u0647"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
            src: "/img/avatars/6.svg"
          },
          {
            tooltip: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
            src: "/img/avatars/2.svg"
          }
        ]
      },
      {
        name: "\u0641\u06CC\u06AF\u0645\u0627",
        logo: "logos:figma",
        title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
        description: "\u0641\u06CC\u06AF\u0645\u0627 \u06CC\u06A9 \u0648\u06CC\u0631\u0627\u06CC\u0634\u06AF\u0631 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0628\u0631\u062F\u0627\u0631\u06CC \u0648 \u0627\u0628\u0632\u0627\u0631 \u067E\u0631\u0648\u062A\u0648\u062A\u0627\u06CC\u067E \u0627\u0633\u062A \u06A9\u0647 \u0639\u0645\u062F\u062A\u0627\u064B \u0645\u0628\u062A\u0646\u06CC \u0628\u0631 \u0648\u0628 \u0627\u0633\u062A \u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0627\u0636\u0627\u0641\u06CC \u0622\u0641\u0644\u0627\u06CC\u0646 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u062F\u0633\u06A9\u062A\u0627\u067E \u0628\u0631\u0627\u06CC macOS \u0648 Windows \u0641\u0639\u0627\u0644 \u0634\u062F\u0647\u200C\u0627\u0646\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631", "\u0641\u0631\u0648\u0634"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u0627\u062F\u0648\u0627\u0631\u062F \u0631\u0648\u0648\u0644",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "\u0646\u06CC\u06A9 \u06A9\u0648\u0627\u0644\u0633\u06A9\u06CC",
            src: "/img/avatars/17.svg"
          }
        ]
      },
      {
        name: "\u0622\u06CC\u0631\u062A\u06CC\u0628\u0644",
        logo: "logos:airtable",
        title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        description: "\u0622\u06CC\u0631\u062A\u06CC\u0628\u0644 \u06CC\u06A9 \u0647\u06CC\u0628\u0631\u06CC\u062F \u067E\u0627\u06CC\u06AF\u0627\u0647\u200C\u062F\u0627\u062F\u0647-\u0635\u0641\u062D\u0647\u200C\u06AF\u0633\u062A\u0631\u062F\u0647 \u0645\u0628\u062A\u0646\u06CC \u0628\u0631 \u0627\u0628\u0631 \u0627\u0633\u062A \u06A9\u0647 \u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0627\u0645\u06A9\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u062C\u062F\u0627\u0648\u0644 \u0648 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u0631\u0627 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0648\u0628 \u0627\u06CC\u062C\u0627\u062F \u0648 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u0646\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F", "\u0641\u0631\u0648\u0634"],
        stats: [
          {
            label: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627",
            value: 22
          },
          {
            label: "\u0646\u0634\u0631\u06CC\u0627\u062A",
            value: 49
          },
          {
            label: "\u062F\u0631\u0622\u0645\u062F",
            value: 43.2
          }
        ],
        followers: [
          {
            tooltip: "\u0627\u062F\u0648\u0627\u0631\u062F \u0631\u0648\u0648\u0644",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "\u0646\u06CC\u06A9 \u06A9\u0648\u0627\u0644\u0633\u06A9\u06CC",
            src: "/img/avatars/17.svg"
          },
          {
            tooltip: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
            src: "/img/avatars/6.svg"
          },
          {
            tooltip: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
            src: "/img/avatars/2.svg"
          }
        ]
      }
    ];
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseProse = _sfc_main$2;
      const _component_TairoPopover = _sfc_main$3;
      const _component_TairoPopoverContentHelp = _sfc_main$4;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseIconBox = _sfc_main$5;
      const _component_BaseAvatarGroup = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ltablet:h-[410px] dark:bg-muted-800 absolute start-0 top-0 h-[590px] w-full bg-white lg:h-[410px]"></div><div class="ltablet:h-64 ltablet:flex-row relative flex h-[460px] w-full flex-col lg:h-64 lg:flex-row"><div class="ltablet:flex-row relative z-10 flex w-full flex-col gap-6 lg:flex-row">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/5.svg",
        "badge-src": "/img/icons/flags/united-states-of-america.svg",
        size: "3xl",
        alt: "avatar",
        class: "ltablet:mx-0 mx-auto lg:mx-0"
      }, null, _parent));
      _push(`<div class="ltablet:text-start text-center lg:text-start">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "semibold",
        class: "ltablet:justify-start flex items-center justify-center gap-2 lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-800 dark:text-white"${_scopeId}>Sweet_Mango12</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "uiw:star-on",
              class: "size-4 text-yellow-400"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "text-muted-800 dark:text-white" }, "Sweet_Mango12"),
              createVNode(_component_Icon, {
                name: "uiw:star-on",
                class: "size-4 text-yellow-400"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-muted-400 mb-4 block font-sans text-base"> \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631 </span><div class="mb-6 flex items-center gap-x-6"><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 1512 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> \u067E\u0633\u062A\u200C\u0647\u0627 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> \u06F3\u06F8.\u06F3 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 </span></div><div class="ltablet:flex-row ltablet:flex-auto flex flex-1 flex-col gap-x-2 font-sans lg:flex-auto lg:flex-row"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 329 </span><span class="text-muted-400 ltablet:text-base text-xs sm:text-sm lg:text-base"> \u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646 </span></div></div>`);
      _push(ssrRenderComponent(_component_BaseProse, { class: "ltablet:mx-0 prose-sm mx-auto mb-6 max-w-xl lg:mx-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="line-clamp-3"${_scopeId}> \u0647\u0646\u0631\u0645\u0646\u062F\u060C \u0645\u0648\u0633\u06CC\u0642\u06CC\u200C\u062F\u0627\u0646\u060C \u062A\u0631\u0627\u0646\u0647\u200C\u0633\u0631\u0627\u060C \u0627\u06CC\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631\u060C \u0627\u06CC\u0646\u0647\u0627 \u0646\u0627\u0645\u200C\u0647\u0627\u06CC\u06CC \u0647\u0633\u062A\u0646\u062F \u06A9\u0647 \u0645\u0631\u062F\u0645 \u0628\u0647 \u0645\u0646 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627\u060C \u0645\u0646 \u0641\u0642\u0637 \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0647\u0633\u062A\u0645. *\u0647\u0645\u06CC\u0634\u0647 \u0628\u0627 \u0647\u0645\u0647 \u062F\u0648\u0633\u062A\u0627\u0646\u0645* // \u0622\u062E\u0631\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648 \u0631\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u06CC\u0646\u062C\u0627 \u0628\u0628\u06CC\u0646\u06CC\u062F <a href="#"${_scopeId}>youtu.be/8Tcee5Cyz</a></p>`);
          } else {
            return [
              createVNode("p", { class: "line-clamp-3" }, [
                createTextVNode(" \u0647\u0646\u0631\u0645\u0646\u062F\u060C \u0645\u0648\u0633\u06CC\u0642\u06CC\u200C\u062F\u0627\u0646\u060C \u062A\u0631\u0627\u0646\u0647\u200C\u0633\u0631\u0627\u060C \u0627\u06CC\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631\u060C \u0627\u06CC\u0646\u0647\u0627 \u0646\u0627\u0645\u200C\u0647\u0627\u06CC\u06CC \u0647\u0633\u062A\u0646\u062F \u06A9\u0647 \u0645\u0631\u062F\u0645 \u0628\u0647 \u0645\u0646 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627\u060C \u0645\u0646 \u0641\u0642\u0637 \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0647\u0633\u062A\u0645. *\u0647\u0645\u06CC\u0634\u0647 \u0628\u0627 \u0647\u0645\u0647 \u062F\u0648\u0633\u062A\u0627\u0646\u0645* // \u0622\u062E\u0631\u06CC\u0646 \u0648\u06CC\u062F\u06CC\u0648 \u0631\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u06CC\u0646\u062C\u0627 \u0628\u0628\u06CC\u0646\u06CC\u062F "),
                createVNode("a", { href: "#" }, "youtu.be/8Tcee5Cyz")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ltablet:justify-start flex justify-center gap-4 lg:justify-start">`);
      _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
              title: "\u062F\u0631 \u0622\u062A\u0634",
              subtitle: "\u0634\u0645\u0627 \u062F\u0631 \u062D\u0627\u0644\u062A \u0637\u063A\u06CC\u0627\u0646 \u0647\u0633\u062A\u06CC\u062F",
              text: "\u0634\u0645\u0627 \u062F\u0631 \u06F7 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 \u0628\u0633\u06CC\u0627\u0631 \u0641\u0639\u0627\u0644 \u0628\u0648\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F!",
              icon: "ri:fire-fill",
              "icon-color": "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoPopoverContentHelp, {
                title: "\u062F\u0631 \u0622\u062A\u0634",
                subtitle: "\u0634\u0645\u0627 \u062F\u0631 \u062D\u0627\u0644\u062A \u0637\u063A\u06CC\u0627\u0646 \u0647\u0633\u062A\u06CC\u062F",
                text: "\u0634\u0645\u0627 \u062F\u0631 \u06F7 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 \u0628\u0633\u06CC\u0627\u0631 \u0641\u0639\u0627\u0644 \u0628\u0648\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F!",
                icon: "ri:fire-fill",
                "icon-color": "danger"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl"${_scopeId}><div class="bg-danger-500/20 flex size-8 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:fire-fill",
              class: "text-danger-500 size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl" }, [
                createVNode("div", { class: "bg-danger-500/20 flex size-8 items-center justify-center rounded-full" }, [
                  createVNode(_component_Icon, {
                    name: "ri:fire-fill",
                    class: "text-danger-500 size-5"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
              title: "\u06A9\u0647\u0646\u0647\u200C\u0633\u0631\u0628\u0627\u0632",
              subtitle: "Way to go soldier",
              text: "\u0634\u0645\u0627 \u0628\u06CC\u0634 \u0627\u0632 \u06F2\u06F5\u06F0 \u067E\u0633\u062A \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0627\u06A9\u0646\u0648\u0646 \u06CC\u06A9 \u067E\u0633\u062A\u200C\u0628\u0627\u0632 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0647\u0633\u062A\u06CC\u062F!",
              icon: "ri:medal-fill",
              "icon-color": "success"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoPopoverContentHelp, {
                title: "\u06A9\u0647\u0646\u0647\u200C\u0633\u0631\u0628\u0627\u0632",
                subtitle: "Way to go soldier",
                text: "\u0634\u0645\u0627 \u0628\u06CC\u0634 \u0627\u0632 \u06F2\u06F5\u06F0 \u067E\u0633\u062A \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0627\u06A9\u0646\u0648\u0646 \u06CC\u06A9 \u067E\u0633\u062A\u200C\u0628\u0627\u0632 \u062D\u0631\u0641\u0647\u200C\u0627\u06CC \u0647\u0633\u062A\u06CC\u062F!",
                icon: "ri:medal-fill",
                "icon-color": "success"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl"${_scopeId}><div class="bg-success-500/20 flex size-8 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:medal-fill",
              class: "text-success-500 size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl" }, [
                createVNode("div", { class: "bg-success-500/20 flex size-8 items-center justify-center rounded-full" }, [
                  createVNode(_component_Icon, {
                    name: "ri:medal-fill",
                    class: "text-success-500 size-5"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoPopover, { size: "sm" }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
              title: "\u0642\u0647\u0631\u0645\u0627\u0646",
              subtitle: "Hail to the king",
              text: "\u0634\u0645\u0627 \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u0647\u0632\u0627\u0631 \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0634\u0645\u0627 \u06CC\u06A9 \u0642\u0647\u0631\u0645\u0627\u0646 \u0647\u0633\u062A\u06CC\u062F!",
              icon: "ri:trophy-fill",
              "icon-color": "warning"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoPopoverContentHelp, {
                title: "\u0642\u0647\u0631\u0645\u0627\u0646",
                subtitle: "Hail to the king",
                text: "\u0634\u0645\u0627 \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u0647\u0632\u0627\u0631 \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0634\u0645\u0627 \u06CC\u06A9 \u0642\u0647\u0631\u0645\u0627\u0646 \u0647\u0633\u062A\u06CC\u062F!",
                icon: "ri:trophy-fill",
                "icon-color": "warning"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl"${_scopeId}><div class="bg-warning-500/20 flex size-8 items-center justify-center rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri:trophy-fill",
              class: "text-warning-500 size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "dark:bg-muted-700 shadow-muted-300/40 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full bg-white shadow-xl" }, [
                createVNode("div", { class: "bg-warning-500/20 flex size-8 items-center justify-center rounded-full" }, [
                  createVNode(_component_Icon, {
                    name: "ri:trophy-fill",
                    class: "text-warning-500 size-5"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:justify-start ltablet:ms-auto ltablet:mt-0 mt-4 flex shrink-0 justify-center lg:ms-auto lg:mt-0 lg:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, { class: "ltablet:w-auto ltablet:mx-0 mx-auto w-52 lg:mx-0 lg:w-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0627\u0641\u0632\u0648\u062F\u0646 \u062D\u0633\u0627\u0628</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "size-4"
              }),
              createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u062D\u0633\u0627\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:bottom-[-70px] absolute bottom-[-48px] start-0 flex items-end gap-2 lg:bottom-[-70px]"><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-1" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-400",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
      ])}"><span>\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC</span></button><button type="button" class="${ssrRenderClass([
        unref(activeTab) === "tab-2" ? "border-primary-500 text-muted-800 dark:text-muted-100" : "border-transparent text-muted-400",
        "inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
      ])}"><span>\u0634\u0631\u06A9\u062A\u200C\u0647\u0627</span></button></div></div><div class="w-full">`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div class="mt-28"><div class="space-y-16"><div><div class="mb-6 flex w-full items-center justify-between"><div class="hidden sm:block">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "lg",
          weight: "medium",
          lead: "tight",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-800 dark:text-muted-100"${_scopeId}> \u0622\u0645\u0627\u0631 \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645 </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, " \u0622\u0645\u0627\u0631 \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0633\u06CC\u062A \u062F\u0644\u0648\u0631 \u0627\u0645\u062A \u06CC\u06A9 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A</span>`);
            } else {
              return [
                createVNode("span", null, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0633\u06CC\u062A \u062F\u0644\u0648\u0631 \u0627\u0645\u062A \u06CC\u06A9 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="shrink-0">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "logos:instagram",
          class: "w-24 text-3xl dark:invert"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-pink-500/20 text-pink-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:instagram-fill",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ri:instagram-fill",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 119 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-danger-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-down-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>-4.5%</span></div><span class="text-muted-400 text-sm"${_scopeId}>\u06A9\u0645\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-pink-500/20 text-pink-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ri:instagram-fill",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 119 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-danger-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-down-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "-4.5%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-primary-500/20 text-primary-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-four-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> \u06F1\u06F4.\u06F3 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u062F\u0646\u0628\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+9.2%</span></div><span class="text-muted-400 text-sm"${_scopeId}>\u0631\u0634\u062F \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-primary-500/20 text-primary-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" \u06F1\u06F4.\u06F3 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u062F\u0646\u0628\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+9.2%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "\u0631\u0634\u062F \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-emerald-500/20 text-emerald-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-three-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 224 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u062F\u0646\u0628\u0627\u0644 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0634\u0645\u0627 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+1.1%</span></div><span class="text-muted-400 text-sm"${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-emerald-500/20 text-emerald-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 224 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u062F\u0646\u0628\u0627\u0644 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0634\u0645\u0627 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+1.1%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u067E\u0633\u0646\u062F\u0647\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u067E\u0633\u0646\u062F\u0647\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-pink-500/20 text-pink-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:heart-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> \u06F1\u06F2\u06F9.\u06F7 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u0644\u0627\u06CC\u06A9\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0634\u0645\u0627 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+25.7%</span></div><span class="text-muted-400 text-sm"${_scopeId}> \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u067E\u0633\u0646\u062F\u0647\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-pink-500/20 text-pink-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" \u06F1\u06F2\u06F9.\u06F7 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u0644\u0627\u06CC\u06A9\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0634\u0645\u0627 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+25.7%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0646\u0638\u0631\u0627\u062A (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0646\u0638\u0631\u0627\u062A (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-yellow-500/20 text-yellow-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chat-circle-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 5.2k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u0646\u0638\u0631\u0627\u062A \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+11.3%</span></div><span class="text-muted-400 text-sm"${_scopeId}> \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0646\u0638\u0631\u0627\u062A (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-yellow-500/20 text-yellow-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 5.2k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u0646\u0638\u0631\u0627\u062A \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+11.3%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-lime-500/20 text-lime-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:user-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 12.7k <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+8.5%</span></div><span class="text-muted-400 text-sm"${_scopeId}> \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-lime-500/20 text-lime-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 12.7k "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+8.5%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div><div class="mb-6 flex w-full items-center justify-between"><div class="hidden sm:block">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "lg",
          weight: "medium",
          lead: "tight",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-800 dark:text-muted-100"${_scopeId}> \u0622\u0645\u0627\u0631 \u062A\u06CC\u06A9\u200C\u062A\u0627\u06A9 </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, " \u0622\u0645\u0627\u0631 \u062A\u06CC\u06A9\u200C\u062A\u0627\u06A9 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0633\u06CC\u062A \u062F\u0644\u0648\u0631 \u0627\u0645\u062A \u06CC\u06A9 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A</span>`);
            } else {
              return [
                createVNode("span", null, "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0633\u06CC\u062A \u062F\u0644\u0648\u0631 \u0627\u0645\u062A \u06CC\u06A9 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="shrink-0">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "logos:tiktok",
          class: "w-24 text-3xl dark:invert"
        }, null, _parent));
        _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-sky-500/20 text-sky-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "fa6-brands:tiktok",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:tiktok",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 248 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+15.5%</span></div><span class="text-muted-400 text-sm"${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-sky-500/20 text-sky-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "fa6-brands:tiktok",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 248 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u067E\u0633\u062A\u200C\u0647\u0627\u06CC \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+15.5%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-primary-500/20 text-primary-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-four-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> \u06F5.\u06F7 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u062F\u0646\u0628\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+17.2%</span></div><span class="text-muted-400 text-sm"${_scopeId}>\u0631\u0634\u062F \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-primary-500/20 text-primary-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" \u06F5.\u06F7 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u062F\u0646\u0628\u0627\u0644 \u06A9\u0631\u062F\u0646 \u0634\u0645\u0627 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+17.2%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "\u0631\u0634\u062F \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-emerald-500/20 text-emerald-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-three-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> 29 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u062F\u0646\u0628\u0627\u0644 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0634\u0645\u0627 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+0.3%</span></div><span class="text-muted-400 text-sm"${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u0634\u062F\u06AF\u0627\u0646")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-emerald-500/20 text-emerald-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:users-three-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" 29 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u062F\u0646\u0628\u0627\u0644 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u0634\u0645\u0627 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+0.3%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, "\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u0639\u0645\u0648\u0644")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u067E\u0633\u0646\u062F\u0647\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u067E\u0633\u0646\u062F\u0647\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-pink-500/20 text-pink-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:heart-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> \u06F8\u06F0.\u06F4 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u0644\u0627\u06CC\u06A9\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0634\u0645\u0627 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+65.7%</span></div><span class="text-muted-400 text-sm"${_scopeId}> \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u067E\u0633\u0646\u062F\u0647\u0627 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-pink-500/20 text-pink-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:heart-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" \u06F8\u06F0.\u06F4 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u0644\u0627\u06CC\u06A9\u200C\u0647\u0627\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0634\u0645\u0627 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+65.7%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0646\u0638\u0631\u0627\u062A (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0646\u0638\u0631\u0627\u062A (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-yellow-500/20 text-yellow-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chat-circle-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> \u06F2\u06F2.\u06F8 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u0646\u0638\u0631\u0627\u062A \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+49.3%</span></div><span class="text-muted-400 text-sm"${_scopeId}> \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0646\u0638\u0631\u0627\u062A (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-yellow-500/20 text-yellow-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" \u06F2\u06F2.\u06F8 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u0646\u0638\u0631\u0627\u062A \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+49.3%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ltablet:col-span-4 col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "md",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 (\u06F3\u06F0 \u0631\u0648\u0632)</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                size: "md",
                class: "bg-lime-500/20 text-lime-500",
                color: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:user-duotone",
                      class: "size-6"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "size-6"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="pb-6 pt-4"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none"${_scopeId}> \u06F4\u06F8.\u06F3 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 <small class="text-muted-500 dark:text-muted-400 text-sm font-medium"${_scopeId}> \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 </small></span></div><div class="mb-2 flex items-center gap-2 font-sans"${_scopeId}><div class="text-success-500 flex items-center font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>+34.2%</span></div><span class="text-muted-400 text-sm"${_scopeId}> \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 </span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 (\u06F3\u06F0 \u0631\u0648\u0632)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-lime-500/20 text-lime-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:user-duotone",
                        class: "size-6"
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "pb-6 pt-4" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-4xl font-semibold leading-none" }, [
                    createTextVNode(" \u06F4\u06F8.\u06F3 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("small", { class: "text-muted-500 dark:text-muted-400 text-sm font-medium" }, " \u0645\u0634\u0627\u0647\u062F\u0647\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 ")
                  ])
                ]),
                createVNode("div", { class: "mb-2 flex items-center gap-2 font-sans" }, [
                  createVNode("div", { class: "text-success-500 flex items-center font-semibold" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-up-right",
                      class: "size-4"
                    }),
                    createVNode("span", null, "+34.2%")
                  ]),
                  createVNode("span", { class: "text-muted-400 text-sm" }, " \u0631\u0634\u062F \u062A\u0639\u0627\u0645\u0644 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div class="mt-28"><div class="ltablet:grid-cols-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(companies, (company, index) => {
          _push(`<div class="relative h-full">`);
          _push(ssrRenderComponent(_component_BaseCard, {
            rounded: "lg",
            class: "flex h-full flex-col p-6"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex size-full flex-col gap-4"${_scopeId}><div${ssrRenderAttr("data-nui-tooltip", company.name)}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: company.logo,
                  class: "size-8 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex h-full flex-col"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "after:text-muted-800 mb-4 dark:text-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(company.name)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(company.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="text-muted-500 dark:text-muted-400 line-clamp-4"${_scopeId2}>${ssrInterpolate(company.description)}</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(company.description), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="divide-muted-200 dark:divide-muted-700 mt-auto flex items-center justify-center divide-x rtl:divide-x-reverse py-4"${_scopeId}><!--[-->`);
                ssrRenderList(company.stats, (stat, statIndex) => {
                  _push2(`<div class="my-4 flex-1 px-4 text-center font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 block font-semibold"${_scopeId}>${ssrInterpolate(stat.label === "\u062F\u0631\u0622\u0645\u062F" ? `$${stat.value}k` : stat.value)}</span><span class="text-muted-400 block text-xs"${_scopeId}>${ssrInterpolate(stat.label)}</span></div>`);
                });
                _push2(`<!--]--></div><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                  avatars: company.followers,
                  limit: 3,
                  size: "xs"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseButton, {
                  rounded: "lg",
                  color: "default",
                  class: "w-28"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A `);
                    } else {
                      return [
                        createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex size-full flex-col gap-4" }, [
                    createVNode("div", {
                      "data-nui-tooltip": company.name
                    }, [
                      createVNode(_component_Icon, {
                        name: company.logo,
                        class: "size-8 shrink-0"
                      }, null, 8, ["name"])
                    ], 8, ["data-nui-tooltip"]),
                    createVNode("div", { class: "flex h-full flex-col" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "after:text-muted-800 mb-4 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(company.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(company.description), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 mt-auto flex items-center justify-center divide-x rtl:divide-x-reverse py-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(company.stats, (stat, statIndex) => {
                          return openBlock(), createBlock("div", {
                            key: statIndex,
                            class: "my-4 flex-1 px-4 text-center font-sans"
                          }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-semibold" }, toDisplayString(stat.label === "\u062F\u0631\u0622\u0645\u062F" ? `$${stat.value}k` : stat.value), 1),
                            createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(stat.label), 1)
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", null, [
                          createVNode(_component_BaseAvatarGroup, {
                            avatars: company.followers,
                            limit: 3,
                            size: "xs"
                          }, null, 8, ["avatars"])
                        ]),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_BaseButton, {
                            rounded: "lg",
                            color: "default",
                            class: "w-28"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/influencer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
