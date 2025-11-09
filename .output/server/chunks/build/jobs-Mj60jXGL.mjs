import { h as _sfc_main$u, d as _sfc_main$D, e as _sfc_main$e, b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-CfxLaouc.mjs';
import { _ as _sfc_main$3 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$4 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './IconChevronDown-B9AzKHTY.mjs';
import './IconCheck--xcA1MPZ.mjs';
import './BaseAvatar-3aYTRoBN.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    const location = ref("");
    const alertKeyword = ref("");
    const selectedType = ref("all");
    const selectedRange = ref("all");
    const jobTypes = ref([]);
    const jobSeniority = ref([]);
    ref([]);
    const jobs = [
      {
        company: "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC",
        logo: "logos:airbnb-icon",
        title: "\u0637\u0631\u0627\u062D UI / UX",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u0637\u0631\u0627\u062D UI / UX \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0628\u0631\u062A\u0631 UI \u0631\u0627 \u062F\u0627\u0631\u0627 \u0628\u0627\u0634\u062F \u0648 \u0628\u062A\u0648\u0627\u0646\u062F \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0631\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627\u06CC \u062A\u0639\u0627\u0645\u0644\u06CC \u0648 \u0622\u062B\u0627\u0631 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u062F \u0648 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0637\u0631\u0627\u062D\u06CC \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC", "\u0633\u0637\u062D \u0627\u0631\u0634\u062F"],
        applicants: [
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
        company: "\u0627\u0633\u0644\u06A9",
        logo: "logos:slack-icon",
        title: "\u0645\u062D\u0635\u0648\u0644 \u0637\u0631\u0627\u062D",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u0637\u0631\u0627\u062D \u0645\u062D\u0635\u0648\u0644 \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0628\u0631\u062A\u0631 UI \u0631\u0627 \u062F\u0627\u0631\u0627 \u0628\u0627\u0634\u062F \u0648 \u0628\u062A\u0648\u0627\u0646\u062F \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0631\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627\u06CC \u062A\u0639\u0627\u0645\u0644\u06CC \u0648 \u0622\u062B\u0627\u0631 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u062F \u0648 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0637\u0631\u0627\u062D\u06CC \u0645\u062D\u0635\u0648\u0644", "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC"],
        applicants: [
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
        company: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
        logo: "logos:gitlab",
        title: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0628\u0631\u062A\u0631 UI \u0631\u0627 \u062F\u0627\u0631\u0627 \u0628\u0627\u0634\u062F \u0648 \u0628\u062A\u0648\u0627\u0646\u062F \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0631\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627\u06CC \u062A\u0639\u0627\u0645\u0644\u06CC \u0648 \u0622\u062B\u0627\u0631 \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u062F \u0648 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u062A\u0628\u062F\u06CC\u0644 \u06A9\u0646\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062D\u0635\u0648\u0644"],
        applicants: [
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
        company: "\u06AF\u0648\u06AF\u0644",
        logo: "logos:google-icon",
        title: "\u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644 \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u0627\u0631\u0627\u06CC \u0686\u0634\u0645\u200C\u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC UI \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u0648 \u0642\u0627\u062F\u0631 \u0628\u0647 \u062A\u0628\u062F\u06CC\u0644 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627 \u0648 \u0622\u062B\u0627\u0631 \u062A\u0639\u0627\u0645\u0644 \u0648 \u062A\u0628\u062F\u06CC\u0644 \u0622\u0646\u200C\u0647\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0628\u0627\u0634\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0645\u062F\u06CC\u0631 \u0627\u0633\u06A9\u0631\u0627\u0645", "\u0645\u062F\u06CC\u0631\u06CC\u062A"],
        applicants: [
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
        company: "\u0622\u062A\u0644\u0633\u06CC\u0627\u0646",
        logo: "logos:atlassian",
        title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644 \u0627\u0633\u062A\u06A9",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9 \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u0627\u0631\u0627\u06CC \u0686\u0634\u0645\u200C\u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC UI \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u0648 \u0642\u0627\u062F\u0631 \u0628\u0647 \u062A\u0628\u062F\u06CC\u0644 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627 \u0648 \u0622\u062B\u0627\u0631 \u062A\u0639\u0627\u0645\u0644 \u0648 \u062A\u0628\u062F\u06CC\u0644 \u0622\u0646\u200C\u0647\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0628\u0627\u0634\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0641\u0648\u0644 \u0627\u0633\u062A\u06A9", "\u0645\u0647\u0646\u062F\u0633\u06CC"],
        applicants: [
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
        company: "\u062F\u0631\u06CC\u0628\u0644",
        logo: "logos:dribbble-icon",
        title: "\u0645\u062F\u06CC\u0631 \u062C\u0627\u0645\u0639\u0647",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062C\u0627\u0645\u0639\u0647 \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u0627\u0631\u0627\u06CC \u0686\u0634\u0645\u200C\u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC UI \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u0648 \u0642\u0627\u062F\u0631 \u0628\u0647 \u062A\u0628\u062F\u06CC\u0644 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627 \u0648 \u0622\u062B\u0627\u0631 \u062A\u0639\u0627\u0645\u0644 \u0648 \u062A\u0628\u062F\u06CC\u0644 \u0622\u0646\u200C\u0647\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0628\u0627\u0634\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0645\u062F\u06CC\u0631", "\u062C\u0627\u0645\u0639\u0647"],
        applicants: [
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
        company: "\u0641\u06CC\u06AF\u0645\u0627",
        logo: "logos:figma",
        title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u0627\u0631\u0627\u06CC \u0686\u0634\u0645\u200C\u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC UI \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u0648 \u0642\u0627\u062F\u0631 \u0628\u0647 \u062A\u0628\u062F\u06CC\u0644 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627 \u0648 \u0622\u062B\u0627\u0631 \u062A\u0639\u0627\u0645\u0644 \u0648 \u062A\u0628\u062F\u06CC\u0644 \u0622\u0646\u200C\u0647\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0628\u0627\u0634\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631", "\u0641\u0631\u0648\u0634"],
        applicants: [
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
        company: "\u0622\u06CC\u0631\u062A\u06CC\u0628\u0644",
        logo: "logos:airtable",
        title: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        description: "\u0645\u0627 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u06CC\u06A9 \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F \u0647\u0633\u062A\u06CC\u0645 \u062A\u0627 \u062A\u062C\u0631\u0628\u0647\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u062E\u0644\u0642 \u06A9\u0646\u062F. \u06A9\u0627\u0646\u062F\u06CC\u062F\u0627\u06CC \u0627\u06CC\u062F\u0647\u200C\u0622\u0644 \u0628\u0627\u06CC\u062F \u062F\u0627\u0631\u0627\u06CC \u0686\u0634\u0645\u200C\u062F\u06CC\u062F\u06CC \u0628\u0631\u0627\u06CC \u0637\u0631\u0627\u062D\u06CC \u062A\u0645\u06CC\u0632 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646\u0647 \u0628\u0627\u0634\u062F\u060C \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC UI \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u0648 \u0642\u0627\u062F\u0631 \u0628\u0647 \u062A\u0628\u062F\u06CC\u0644 \u0646\u06CC\u0627\u0632\u0647\u0627\u06CC \u0633\u0637\u062D \u0628\u0627\u0644\u0627 \u0628\u0647 \u062C\u0631\u06CC\u0627\u0646\u200C\u0647\u0627 \u0648 \u0622\u062B\u0627\u0631 \u062A\u0639\u0627\u0645\u0644 \u0648 \u062A\u0628\u062F\u06CC\u0644 \u0622\u0646\u200C\u0647\u0627 \u0628\u0647 \u0631\u0627\u0628\u0637\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0632\u06CC\u0628\u0627\u060C \u0634\u0647\u0648\u062F\u06CC \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0628\u0627\u0634\u062F.",
        tags: ["\u062A\u0645\u0627\u0645 \u0648\u0642\u062A", "\u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F", "\u0641\u0631\u0648\u0634"],
        applicants: [
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$1;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseTag = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "ptablet:py-6 ptablet:px-4 ptablet:grid ptablet:grid-cols-12 ltablet:divide-x divide-muted-200 dark:divide-muted-700 mb-10 flex w-full flex-col items-center py-2 sm:flex-row sm:py-0 lg:divide-x rtl:divide-x-reverse"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ptablet:ps-4 ptablet:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              modelModifiers: { trim: true },
              rounded: "lg",
              icon: "lucide:search",
              placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0634\u063A\u0644"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(location),
              "onUpdate:modelValue": ($event) => isRef(location) ? location.value = $event : null,
              modelModifiers: { trim: true },
              rounded: "lg",
              icon: "lucide:map-pin",
              placeholder: "\u0645\u0648\u0642\u0639\u06CC\u062A"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(selectedType),
              "onUpdate:modelValue": ($event) => isRef(selectedType) ? selectedType.value = $event : null,
              rounded: "lg",
              icon: "lucide:briefcase",
              label: "",
              "hide-label": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}> \u0646\u0648\u0639\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </option><option value="all"${_scopeId2}> \u0647\u0645\u0647 </option><option value="design"${_scopeId2}> \u0637\u0631\u0627\u062D\u06CC </option><option value="engineering"${_scopeId2}> \u0645\u0647\u0646\u062F\u0633\u06CC </option><option value="frontend"${_scopeId2}> \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F </option><option value="backend"${_scopeId2}> \u0628\u06A9\u200C\u0627\u0646\u062F </option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, " \u0646\u0648\u0639\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                    createVNode("option", { value: "all" }, " \u0647\u0645\u0647 "),
                    createVNode("option", { value: "design" }, " \u0637\u0631\u0627\u062D\u06CC "),
                    createVNode("option", { value: "engineering" }, " \u0645\u0647\u0646\u062F\u0633\u06CC "),
                    createVNode("option", { value: "frontend" }, " \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F "),
                    createVNode("option", { value: "backend" }, " \u0628\u06A9\u200C\u0627\u0646\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(selectedRange),
              "onUpdate:modelValue": ($event) => isRef(selectedRange) ? selectedRange.value = $event : null,
              rounded: "lg",
              icon: "lucide:dollar-sign",
              label: "",
              "hide-label": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}> \u06CC\u06A9 \u0645\u062D\u062F\u0648\u062F\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </option><option value="all"${_scopeId2}> \u0647\u0645\u0647 </option><option value="10k-20k"${_scopeId2}> \u06F1\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F2\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 </option><option value="20k-30k"${_scopeId2}> \u06F2\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F4\u06F0 \u0647\u0632\u0627\u0631 </option><option value="40k-75k"${_scopeId2}> \u06F4\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F7\u06F5 \u0647\u0632\u0627\u0631 </option><option value="75k"${_scopeId2}> \u0628\u06CC\u0634 \u0627\u0632 \u06F7\u06F5 \u0647\u0632\u0627\u0631 </option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, " \u06CC\u06A9 \u0645\u062D\u062F\u0648\u062F\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                    createVNode("option", { value: "all" }, " \u0647\u0645\u0647 "),
                    createVNode("option", { value: "10k-20k" }, " \u06F1\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F2\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("option", { value: "20k-30k" }, " \u06F2\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F4\u06F0 \u0647\u0632\u0627\u0631 "),
                    createVNode("option", { value: "40k-75k" }, " \u06F4\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F7\u06F5 \u0647\u0632\u0627\u0631 "),
                    createVNode("option", { value: "75k" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F7\u06F5 \u0647\u0632\u0627\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:col-span-12 w-full px-4 py-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "lg",
              color: "primary",
              class: "ptablet:w-full w-full sm:w-32"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0633\u062A\u062C\u0648 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0633\u062A\u062C\u0648 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "ptablet:ps-4 ptablet:col-span-6 w-full py-2 pe-4 ps-4 sm:w-auto sm:grow sm:ps-2" }, [
                createVNode(_component_BaseInput, {
                  modelValue: unref(search),
                  "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                  modelModifiers: { trim: true },
                  rounded: "lg",
                  icon: "lucide:search",
                  placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0634\u063A\u0644"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseInput, {
                  modelValue: unref(location),
                  "onUpdate:modelValue": ($event) => isRef(location) ? location.value = $event : null,
                  modelModifiers: { trim: true },
                  rounded: "lg",
                  icon: "lucide:map-pin",
                  placeholder: "\u0645\u0648\u0642\u0639\u06CC\u062A"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseSelect, {
                  modelValue: unref(selectedType),
                  "onUpdate:modelValue": ($event) => isRef(selectedType) ? selectedType.value = $event : null,
                  rounded: "lg",
                  icon: "lucide:briefcase",
                  label: "",
                  "hide-label": ""
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "" }, " \u0646\u0648\u0639\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                    createVNode("option", { value: "all" }, " \u0647\u0645\u0647 "),
                    createVNode("option", { value: "design" }, " \u0637\u0631\u0627\u062D\u06CC "),
                    createVNode("option", { value: "engineering" }, " \u0645\u0647\u0646\u062F\u0633\u06CC "),
                    createVNode("option", { value: "frontend" }, " \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F "),
                    createVNode("option", { value: "backend" }, " \u0628\u06A9\u200C\u0627\u0646\u062F ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-6 w-full flex-1 px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseSelect, {
                  modelValue: unref(selectedRange),
                  "onUpdate:modelValue": ($event) => isRef(selectedRange) ? selectedRange.value = $event : null,
                  rounded: "lg",
                  icon: "lucide:dollar-sign",
                  label: "",
                  "hide-label": ""
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "" }, " \u06CC\u06A9 \u0645\u062D\u062F\u0648\u062F\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                    createVNode("option", { value: "all" }, " \u0647\u0645\u0647 "),
                    createVNode("option", { value: "10k-20k" }, " \u06F1\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F2\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("option", { value: "20k-30k" }, " \u06F2\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F4\u06F0 \u0647\u0632\u0627\u0631 "),
                    createVNode("option", { value: "40k-75k" }, " \u06F4\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F7\u06F5 \u0647\u0632\u0627\u0631 "),
                    createVNode("option", { value: "75k" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F7\u06F5 \u0647\u0632\u0627\u0631 ")
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "ptablet:col-span-12 w-full px-4 py-2 sm:w-auto" }, [
                createVNode(_component_BaseButton, {
                  rounded: "lg",
                  color: "primary",
                  class: "ptablet:w-full w-full sm:w-32"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062C\u0633\u062A\u062C\u0648 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-12 gap-6"><div class="ptablet:col-span-4 ltablet:col-span-4 col-span-12 lg:col-span-3"><div class="w-full"><div class="bg-muted-200 dark:bg-muted-800 mb-12 rounded-xl p-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u06CC\u062C\u0627\u062F \u0647\u0634\u062F\u0627\u0631 \u0634\u063A\u0644\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u0627\u06CC\u062C\u0627\u062F \u0647\u0634\u062F\u0627\u0631 \u0634\u063A\u0644\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u06CC\u06A9 \u0647\u0634\u062F\u0627\u0631 \u0634\u063A\u0644\u06CC \u0628\u0627 \u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0632\u06CC\u0631 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F \u0648 \u0628\u0647 \u0645\u062D\u0636 \u0627\u06CC\u0646\u06A9\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062C\u062F\u06CC\u062F\u06CC \u06A9\u0647 \u0628\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0631\u062F\u060C \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u060C \u0645\u0637\u0644\u0639 \u0634\u0648\u06CC\u062F. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u06CC\u06A9 \u0647\u0634\u062F\u0627\u0631 \u0634\u063A\u0644\u06CC \u0628\u0627 \u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0632\u06CC\u0631 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F \u0648 \u0628\u0647 \u0645\u062D\u0636 \u0627\u06CC\u0646\u06A9\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062C\u062F\u06CC\u062F\u06CC \u06A9\u0647 \u0628\u0627 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627\u06CC \u0634\u0645\u0627 \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0631\u062F\u060C \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u060C \u0645\u0637\u0644\u0639 \u0634\u0648\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form class="space-y-2">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(alertKeyword),
        "onUpdate:modelValue": ($event) => isRef(alertKeyword) ? alertKeyword.value = $event : null,
        modelModifiers: { trim: true },
        rounded: "lg",
        icon: "lucide:search",
        placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0634\u063A\u0644"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "lg",
        color: "primary",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u06CC\u062C\u0627\u062F \u0647\u0634\u062F\u0627\u0631 `);
          } else {
            return [
              createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0647\u0634\u062F\u0627\u0631 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div><div class="space-y-12"><div class="relative"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0646\u0648\u0639 \u0634\u063A\u0644</span>`);
          } else {
            return [
              createVNode("span", null, "\u0646\u0648\u0639 \u0634\u063A\u0644")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 ps-2"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-1",
        label: "\u0645\u0634\u0627\u063A\u0644 \u062A\u0645\u0627\u0645 \u0648\u0642\u062A",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 67 `);
          } else {
            return [
              createTextVNode(" 67 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-2",
        label: "\u0645\u0634\u0627\u063A\u0644 \u067E\u0627\u0631\u0647 \u0648\u0642\u062A",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 31 `);
          } else {
            return [
              createTextVNode(" 31 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-3",
        label: "\u0645\u0634\u0627\u063A\u0644 \u0627\u0632 \u0631\u0627\u0647 \u062F\u0648\u0631",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 49 `);
          } else {
            return [
              createTextVNode(" 49 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobTypes),
        "onUpdate:modelValue": ($event) => isRef(jobTypes) ? jobTypes.value = $event : null,
        value: "job-types-4",
        label: "\u06A9\u0627\u0631\u0622\u0645\u0648\u0632\u06CC\u200C\u0647\u0627",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 17 `);
          } else {
            return [
              createTextVNode(" 17 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631</span>`);
          } else {
            return [
              createVNode("span", null, "\u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 ps-2"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-1",
        label: "\u0633\u0637\u062D \u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u06CC",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 56 `);
          } else {
            return [
              createTextVNode(" 56 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-2",
        label: "\u0633\u0637\u062D \u0645\u0628\u062A\u062F\u06CC",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 84 `);
          } else {
            return [
              createTextVNode(" 84 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-3",
        label: "\u0633\u0637\u062D \u0645\u06CC\u0627\u0646\u06CC",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 31 `);
          } else {
            return [
              createTextVNode(" 31 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-4",
        label: "\u0633\u0637\u062D \u0627\u0631\u0634\u062F",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 59 `);
          } else {
            return [
              createTextVNode(" 59 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "seniority-level-5",
        label: "\u0633\u0637\u062D \u0645\u062F\u06CC\u0631",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 11 `);
          } else {
            return [
              createTextVNode(" 11 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u062D\u062F\u0648\u062F\u0647 \u062D\u0642\u0648\u0642</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u062D\u062F\u0648\u062F\u0647 \u062D\u0642\u0648\u0642")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4 ps-2"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-1",
        label: "\u06F1\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F2\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 61 `);
          } else {
            return [
              createTextVNode(" 61 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-2",
        label: "\u06F2\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F4\u06F0 \u0647\u0632\u0627\u0631",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 28 `);
          } else {
            return [
              createTextVNode(" 28 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-3",
        label: "\u06F4\u06F0 \u0647\u0632\u0627\u0631 ~ \u06F7\u06F5 \u0647\u0632\u0627\u0631",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 112 `);
          } else {
            return [
              createTextVNode(" 112 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(jobSeniority),
        "onUpdate:modelValue": ($event) => isRef(jobSeniority) ? jobSeniority.value = $event : null,
        value: "salary-range-4",
        label: "\u0628\u06CC\u0634 \u0627\u0632 \u06F7\u06F5 \u0647\u0632\u0627\u0631",
        rounded: "sm",
        color: "primary"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "default",
        rounded: "full",
        class: "text-xs",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 58 `);
          } else {
            return [
              createTextVNode(" 58 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="ptablet:col-span-8 ltablet:col-span-8 col-span-12 lg:col-span-9"><div class="mb-6 mt-12 sm:mt-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0646\u0645\u0627\u06CC\u0634 46 \u0634\u063A\u0644</span>`);
          } else {
            return [
              createVNode("span", null, "\u0646\u0645\u0627\u06CC\u0634 46 \u0634\u063A\u0644")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0627\u06CC\u0646\u200C\u0647\u0627 \u0645\u0634\u0627\u063A\u0644 \u0645\u0637\u0627\u0628\u0642\u06CC \u0647\u0633\u062A\u0646\u062F \u06A9\u0647 \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u06CC\u0645 </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0627\u06CC\u0646\u200C\u0647\u0627 \u0645\u0634\u0627\u063A\u0644 \u0645\u0637\u0627\u0628\u0642\u06CC \u0647\u0633\u062A\u0646\u062F \u06A9\u0647 \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u06CC\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 gap-6 lg:grid-cols-2"><!--[-->`);
      ssrRenderList(jobs, (job, index) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId}><div${ssrRenderAttr("data-nui-tooltip", job.company)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: job.logo,
                class: "size-10 shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "semibold",
                lead: "tight",
                class: "after:text-muted-800 mb-4 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(job.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(job.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 line-clamp-4"${_scopeId2}>${ssrInterpolate(job.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(job.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex flex-wrap items-center gap-2 py-4"${_scopeId}><!--[-->`);
              ssrRenderList(job.tags, (tag) => {
                _push2(ssrRenderComponent(_component_BaseTag, {
                  key: tag,
                  color: "default",
                  size: "sm",
                  class: "text-xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(tag)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(tag), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                avatars: job.applicants,
                limit: 2,
                size: "xs"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                rounded: "lg",
                color: "primary",
                class: "w-24"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062F\u0631\u062E\u0648\u0627\u0633\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u062F\u0631\u062E\u0648\u0627\u0633\u062A ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButton, {
                rounded: "lg",
                color: "default",
                class: "w-24"
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
                createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                  createVNode("div", {
                    "data-nui-tooltip": job.company
                  }, [
                    createVNode(_component_Icon, {
                      name: job.logo,
                      class: "size-10 shrink-0"
                    }, null, 8, ["name"])
                  ], 8, ["data-nui-tooltip"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "after:text-muted-800 mb-4 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(job.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-4" }, toDisplayString(job.description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "flex flex-wrap items-center gap-2 py-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(job.tags, (tag) => {
                        return openBlock(), createBlock(_component_BaseTag, {
                          key: tag,
                          color: "default",
                          size: "sm",
                          class: "text-xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tag), 1)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", null, [
                        createVNode(_component_BaseAvatarGroup, {
                          avatars: job.applicants,
                          limit: 2,
                          size: "xs"
                        }, null, 8, ["avatars"])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_BaseButton, {
                          rounded: "lg",
                          color: "primary",
                          class: "w-24"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062F\u0631\u062E\u0648\u0627\u0633\u062A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          rounded: "lg",
                          color: "default",
                          class: "w-24"
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
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
