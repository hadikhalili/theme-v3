import { r as useTailwindBreakpoints, _ as __nuxt_component_0$3, a as __nuxt_component_2, s as __nuxt_component_4$1 } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import _sfc_main$1 from './DemoAccountMenu-C3x7udSm.mjs';
import { defineComponent, ref, watch, nextTick, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './virtual_public-CbxAoqtm.mjs';
import './user-DDZJ47NJ.mjs';

publicAssetsURL("/img/icons/files/pdf.svg");
publicAssetsURL("/img/icons/files/zip-format.svg");
publicAssetsURL("/img/icons/files/ai.svg");
publicAssetsURL("/img/icons/files/sheet.svg");
publicAssetsURL("/img/icons/files/doc-2.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inbox",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    ref("");
    const { md } = useTailwindBreakpoints();
    const paneSize = ref(50);
    watch(
      md,
      async (isMd) => {
        await nextTick();
        if (isMd) {
          paneSize.value = 50;
        } else {
          paneSize.value = 100;
        }
      },
      { immediate: true }
    );
    const messages = [
      {
        id: 1,
        sender: {
          name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
          email: "kwilson@eltheme.ir",
          photo: "/img/avatars/10.svg"
        },
        title: "\u0645\u0627 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u067E\u0631\u0648\u0698\u0647 \u062F\u0627\u0631\u06CC\u0645",
        abstract: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u067E\u0648\u06AF\u0631\u0627\u0641\u200C\u0647\u0627 \u0648 \u0637\u0631\u0627\u062D\u0627\u0646 \u0648\u0628 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        content: "\u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C  /n\u0627\u0645\u0631\u0648\u0632 \u0635\u0628\u062D \u0628\u0627 \u0628\u0642\u06CC\u0647 \u062A\u06CC\u0645 \u0635\u062D\u0628\u062A \u06A9\u0631\u062F\u0645. \u0622\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F \u06CC\u06A9 \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u06A9\u0627\u0645\u0644 \u0627\u0632 \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0646\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0627\u0645\u0631\u0648\u0632 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u06CC\u0627 \u0641\u0631\u062F\u0627 \u0635\u0628\u062D \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0628\u0627\u0634\u06CC\u061F  /n\u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0627\u0635 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u0645 \u06A9\u0647 \u0627\u0632 \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645\u200C\u0647\u0627\u06CC \u0628\u0627 \u06A9\u06CC\u0641\u06CC\u062A \u0628\u0627\u0644\u0627 \u0628\u06AF\u0630\u0631\u06CC\u0645 \u0648 \u0628\u0628\u06CC\u0646\u06CC\u0645 \u0686\u06AF\u0648\u0646\u0647 \u0628\u0627 \u0633\u0646\u0627\u0631\u06CC\u0648\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 UX \u06A9\u0647 \u0642\u0628\u0644\u0627\u064B \u062F\u0627\u0631\u06CC\u0645\u060C \u0633\u0627\u0632\u06AF\u0627\u0631 \u0647\u0633\u062A\u0646\u062F. \u0648\u0642\u062A\u06CC \u0686\u06CC\u0632\u06CC \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u060C \u0628\u0627\u06CC\u062F \u0644\u0631\u06CC \u0634\u0631\u0648\u0639 \u0628\u0647 \u06A9\u0627\u0631 \u0631\u0648\u06CC \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u062C\u0632\u0626\u06CC\u200C\u062A\u0631 \u06A9\u0646\u062F.  /n\u0647\u0645\u0686\u0646\u06CC\u0646 \u0641\u06A9\u0631 \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0645\u0639\u0631\u0641\u06CC \u06A9\u0646\u06CC\u0645. \u0645\u0646 \u062F\u06CC\u06AF\u0631 \u0628\u0647 XD \u0639\u0644\u0627\u0642\u0647\u200C\u0627\u06CC \u0646\u062F\u0627\u0631\u0645 \u0648 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645 \u062A\u06CC\u0645 \u062A\u0627 \u067E\u0627\u06CC\u0627\u0646 \u0645\u0627\u0647 \u0628\u0647 \u0641\u06CC\u06AF\u0645\u0627 \u0645\u0646\u062A\u0642\u0644 \u0634\u0648\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0627\u06CC\u0646 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u06CC\u0627 \u0628\u0627\u06CC\u062F \u062F\u0648\u0628\u0627\u0631\u0647 \u0647\u0632\u06CC\u0646\u0647 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u062C\u0644\u0633\u0627\u062A \u0622\u0645\u0648\u0632\u0634\u06CC \u0641\u0634\u0631\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u0645\u061F  /n\u0628\u0627 \u0627\u062D\u062A\u0631\u0627\u0645\u060C  /n\u06A9\u0646\u062F\u0631\u0627",
        attachments: [
          {
            name: "project.pdf",
            size: "2.5MB",
            type: "pdf"
          },
          {
            name: "project.zip",
            size: "2.5MB",
            type: "zip"
          }
        ],
        time: "\u06F1 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634"
      },
      {
        id: 2,
        sender: {
          name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
          email: "hermann@eltheme.ir",
          photo: "/img/avatars/16.svg"
        },
        title: "\u0645\u0627 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u067E\u0631\u0648\u0698\u0647 \u062F\u0627\u0631\u06CC\u0645",
        abstract: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u067E\u0648\u06AF\u0631\u0627\u0641\u200C\u0647\u0627 \u0648 \u0637\u0631\u0627\u062D\u0627\u0646 \u0648\u0628 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        content: "\u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C/n \u0627\u0645\u0631\u0648\u0632 \u0635\u0628\u062D \u0628\u0627 \u0628\u0642\u06CC\u0647 \u062A\u06CC\u0645 \u0635\u062D\u0628\u062A \u06A9\u0631\u062F\u0645. \u0622\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F \u06CC\u06A9 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644 \u0627\u0632 \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0646\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0627\u0645\u0631\u0648\u0632 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u06CC\u0627 \u0641\u0631\u062F\u0627 \u0635\u0628\u062D \u0648\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u061F /n \u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0627\u0635 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9\u200C\u0647\u0627\u06CC \u0628\u0627 \u0648\u0636\u0648\u062D \u0628\u0627\u0644\u0627 \u0639\u0628\u0648\u0631 \u06A9\u0646\u06CC\u0645 \u0648 \u0628\u0628\u06CC\u0646\u06CC\u0645 \u0686\u06AF\u0648\u0646\u0647 \u0628\u0627 \u0633\u0646\u0627\u0631\u06CC\u0648\u0647\u0627\u06CC UX \u0645\u062E\u062A\u0644\u0641 \u06A9\u0647 \u0642\u0628\u0644\u0627\u064B \u062F\u0627\u0631\u06CC\u0645\u060C \u0647\u0645\u0627\u0647\u0646\u06AF \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0647\u0631 \u0632\u0645\u0627\u0646 \u06A9\u0647 \u0686\u06CC\u0632\u06CC \u0647\u0645\u0627\u0647\u0646\u06AF \u0634\u062F\u060C \u0628\u0627\u06CC\u062F \u0644\u0631\u06CC \u0631\u0648\u06CC \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u06A9\u0627\u0631 \u06A9\u0646\u062F./n \u0647\u0645\u0686\u0646\u06CC\u0646 \u0641\u06A9\u0631 \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u0634\u0627\u06CC\u062F \u0628\u062A\u0648\u0627\u0646\u06CC\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0645\u0639\u0631\u0641\u06CC \u06A9\u0646\u06CC\u0645. \u0645\u0646 \u062F\u06CC\u06AF\u0631 \u062E\u06CC\u0644\u06CC \u0628\u0647 XD \u0639\u0644\u0627\u0642\u0647 \u0646\u062F\u0627\u0631\u0645 \u0648 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645 \u062A\u06CC\u0645 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647 \u0628\u0647 \u0641\u06CC\u06AF\u0645\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0627\u0634\u062F \u06CC\u0627 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u06CC\u062F \u0647\u0632\u06CC\u0646\u0647 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u062C\u0644\u0633\u0627\u062A \u0622\u0645\u0648\u0632\u0634\u06CC \u062A\u0633\u0631\u06CC\u0639\u200C\u0634\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u0645\u061F /n \u0628\u0627 \u0627\u062D\u062A\u0631\u0627\u0645\u060C/n \u0647\u0631\u0645\u0627\u0646",
        attachments: [
          {
            name: "design.pdf",
            size: "8.5MB",
            type: "pdf"
          },
          {
            name: "design.ai",
            size: "14.5MB",
            type: "ai"
          }
        ],
        time: "\u06F4 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634"
      },
      {
        id: 3,
        sender: {
          name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
          email: "clarissa@eltheme.ir",
          photo: "/img/avatars/5.svg"
        },
        title: "\u0686\u0637\u0648\u0631 \u0627\u0633\u062A \u06A9\u0647 \u0628\u0627 \u0647\u0645 \u0646\u0627\u0647\u0627\u0631 \u0628\u062E\u0648\u0631\u06CC\u0645\u061F",
        abstract: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u067E\u0648\u06AF\u0631\u0627\u0641\u200C\u0647\u0627 \u0648 \u0637\u0631\u0627\u062D\u0627\u0646 \u0648\u0628 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        content: "\u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C/n \u0627\u0645\u0631\u0648\u0632 \u0635\u0628\u062D \u0628\u0627 \u0628\u0642\u06CC\u0647 \u062A\u06CC\u0645 \u0635\u062D\u0628\u062A \u06A9\u0631\u062F\u0645. \u0622\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F \u06CC\u06A9 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644 \u0627\u0632 \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0646\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0627\u0645\u0631\u0648\u0632 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u06CC\u0627 \u0641\u0631\u062F\u0627 \u0635\u0628\u062D \u0648\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u061F /n \u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0627\u0635 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9\u200C\u0647\u0627\u06CC \u0628\u0627 \u0648\u0636\u0648\u062D \u0628\u0627\u0644\u0627 \u0639\u0628\u0648\u0631 \u06A9\u0646\u06CC\u0645 \u0648 \u0628\u0628\u06CC\u0646\u06CC\u0645 \u0686\u06AF\u0648\u0646\u0647 \u0628\u0627 \u0633\u0646\u0627\u0631\u06CC\u0648\u0647\u0627\u06CC UX \u0645\u062E\u062A\u0644\u0641 \u06A9\u0647 \u0642\u0628\u0644\u0627\u064B \u062F\u0627\u0631\u06CC\u0645\u060C \u0647\u0645\u0627\u0647\u0646\u06AF \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0647\u0631 \u0632\u0645\u0627\u0646 \u06A9\u0647 \u0686\u06CC\u0632\u06CC \u0647\u0645\u0627\u0647\u0646\u06AF \u0634\u062F\u060C \u0628\u0627\u06CC\u062F \u0644\u0631\u06CC \u0631\u0648\u06CC \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u06A9\u0627\u0631 \u06A9\u0646\u062F./n \u0647\u0645\u0686\u0646\u06CC\u0646 \u0641\u06A9\u0631 \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u0634\u0627\u06CC\u062F \u0628\u062A\u0648\u0627\u0646\u06CC\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0645\u0639\u0631\u0641\u06CC \u06A9\u0646\u06CC\u0645. \u0645\u0646 \u062F\u06CC\u06AF\u0631 \u062E\u06CC\u0644\u06CC \u0628\u0647 XD \u0639\u0644\u0627\u0642\u0647 \u0646\u062F\u0627\u0631\u0645 \u0648 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645 \u062A\u06CC\u0645 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647 \u0628\u0647 \u0641\u06CC\u06AF\u0645\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0627\u0634\u062F \u06CC\u0627 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u06CC\u062F \u0647\u0632\u06CC\u0646\u0647 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u062C\u0644\u0633\u0627\u062A \u0622\u0645\u0648\u0632\u0634\u06CC \u062A\u0633\u0631\u06CC\u0639\u200C\u0634\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u0645\u061F /n \u0628\u0627 \u0627\u062D\u062A\u0631\u0627\u0645\u060C/n \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627",
        attachments: [
          {
            name: "restaurants.pdf",
            size: "3.74MB",
            type: "pdf"
          }
        ],
        time: "\u06F5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634"
      },
      {
        id: 4,
        sender: {
          name: "\u0627\u062F\u06CC \u0628\u0631\u06CC\u06A9\u0633",
          email: "eddy@eltheme.ir",
          photo: "/img/avatars/8.svg"
        },
        title: "\u0628\u0627\u06CC\u062F \u062F\u0631\u0628\u0627\u0631\u0647 \u0628\u0648\u062F\u062C\u0647 \u0635\u062D\u0628\u062A \u06A9\u0646\u06CC\u0645",
        abstract: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u067E\u0648\u06AF\u0631\u0627\u0641\u200C\u0647\u0627 \u0648 \u0637\u0631\u0627\u062D\u0627\u0646 \u0648\u0628 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        content: "\u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C/n \u0627\u0645\u0631\u0648\u0632 \u0635\u0628\u062D \u0628\u0627 \u0628\u0642\u06CC\u0647 \u062A\u06CC\u0645 \u0635\u062D\u0628\u062A \u06A9\u0631\u062F\u0645. \u0622\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F \u06CC\u06A9 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644 \u0627\u0632 \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0646\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0627\u0645\u0631\u0648\u0632 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u06CC\u0627 \u0641\u0631\u062F\u0627 \u0635\u0628\u062D \u0648\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u061F /n \u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0627\u0635 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9\u200C\u0647\u0627\u06CC \u0628\u0627 \u0648\u0636\u0648\u062D \u0628\u0627\u0644\u0627 \u0639\u0628\u0648\u0631 \u06A9\u0646\u06CC\u0645 \u0648 \u0628\u0628\u06CC\u0646\u06CC\u0645 \u0686\u06AF\u0648\u0646\u0647 \u0628\u0627 \u0633\u0646\u0627\u0631\u06CC\u0648\u0647\u0627\u06CC UX \u0645\u062E\u062A\u0644\u0641 \u06A9\u0647 \u0642\u0628\u0644\u0627\u064B \u062F\u0627\u0631\u06CC\u0645\u060C \u0647\u0645\u0627\u0647\u0646\u06AF \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0647\u0631 \u0632\u0645\u0627\u0646 \u06A9\u0647 \u0686\u06CC\u0632\u06CC \u0647\u0645\u0627\u0647\u0646\u06AF \u0634\u062F\u060C \u0628\u0627\u06CC\u062F \u0644\u0631\u06CC \u0631\u0648\u06CC \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u06A9\u0627\u0631 \u06A9\u0646\u062F./n \u0647\u0645\u0686\u0646\u06CC\u0646 \u0641\u06A9\u0631 \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u0634\u0627\u06CC\u062F \u0628\u062A\u0648\u0627\u0646\u06CC\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0645\u0639\u0631\u0641\u06CC \u06A9\u0646\u06CC\u0645. \u0645\u0646 \u062F\u06CC\u06AF\u0631 \u062E\u06CC\u0644\u06CC \u0628\u0647 XD \u0639\u0644\u0627\u0642\u0647 \u0646\u062F\u0627\u0631\u0645 \u0648 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645 \u062A\u06CC\u0645 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647 \u0628\u0647 \u0641\u06CC\u06AF\u0645\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0627\u0634\u062F \u06CC\u0627 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u06CC\u062F \u0647\u0632\u06CC\u0646\u0647 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u062C\u0644\u0633\u0627\u062A \u0622\u0645\u0648\u0632\u0634\u06CC \u062A\u0633\u0631\u06CC\u0639\u200C\u0634\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u0645\u061F /n \u0628\u0627 \u0627\u062D\u062A\u0631\u0627\u0645\u060C/n \u0627\u062F\u06CC",
        attachments: [
          {
            name: "budget.pdf",
            size: "3.74MB",
            type: "pdf"
          },
          {
            name: "budget.xls",
            size: "175KB",
            type: "sheet"
          }
        ],
        time: "\u06F7 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634"
      },
      {
        id: 5,
        sender: {
          name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
          email: "clark@eltheme.ir",
          photo: "/img/avatars/3.svg"
        },
        title: "\u0622\u062E\u0631\u06CC\u0646 \u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0627\u0632 \u0645\u0634\u062A\u0631\u06CC",
        abstract: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u067E\u0648\u06AF\u0631\u0627\u0641\u200C\u0647\u0627 \u0648 \u0637\u0631\u0627\u062D\u0627\u0646 \u0648\u0628 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        content: "\u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C/n \u0627\u0645\u0631\u0648\u0632 \u0635\u0628\u062D \u0628\u0627 \u0628\u0642\u06CC\u0647 \u062A\u06CC\u0645 \u0635\u062D\u0628\u062A \u06A9\u0631\u062F\u0645. \u0622\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F \u06CC\u06A9 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644 \u0627\u0632 \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u0646\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0627\u0645\u0631\u0648\u0632 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u06CC\u0627 \u0641\u0631\u062F\u0627 \u0635\u0628\u062D \u0648\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u061F /n \u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0627\u0635 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9\u200C\u0647\u0627\u06CC \u0628\u0627 \u0648\u0636\u0648\u062D \u0628\u0627\u0644\u0627 \u0639\u0628\u0648\u0631 \u06A9\u0646\u06CC\u0645 \u0648 \u0628\u0628\u06CC\u0646\u06CC\u0645 \u0686\u06AF\u0648\u0646\u0647 \u0628\u0627 \u0633\u0646\u0627\u0631\u06CC\u0648\u0647\u0627\u06CC UX \u0645\u062E\u062A\u0644\u0641 \u06A9\u0647 \u0642\u0628\u0644\u0627\u064B \u062F\u0627\u0631\u06CC\u0645\u060C \u0647\u0645\u0627\u0647\u0646\u06AF \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0647\u0631 \u0632\u0645\u0627\u0646 \u06A9\u0647 \u0686\u06CC\u0632\u06CC \u0647\u0645\u0627\u0647\u0646\u06AF \u0634\u062F\u060C \u0628\u0627\u06CC\u062F \u0644\u0631\u06CC \u0631\u0648\u06CC \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u062F\u0642\u06CC\u0642\u200C\u062A\u0631 \u06A9\u0627\u0631 \u06A9\u0646\u062F./n \u0647\u0645\u0686\u0646\u06CC\u0646 \u0641\u06A9\u0631 \u06A9\u0631\u062F\u0645 \u06A9\u0647 \u0634\u0627\u06CC\u062F \u0628\u062A\u0648\u0627\u0646\u06CC\u0645 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F\u06CC \u0645\u0639\u0631\u0641\u06CC \u06A9\u0646\u06CC\u0645. \u0645\u0646 \u062F\u06CC\u06AF\u0631 \u062E\u06CC\u0644\u06CC \u0628\u0647 XD \u0639\u0644\u0627\u0642\u0647 \u0646\u062F\u0627\u0631\u0645 \u0648 \u062F\u0648\u0633\u062A \u062F\u0627\u0631\u0645 \u062A\u06CC\u0645 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647 \u0628\u0647 \u0641\u06CC\u06AF\u0645\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u062F. \u0622\u06CC\u0627 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0627\u0634\u062F \u06CC\u0627 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u06CC\u062F \u0647\u0632\u06CC\u0646\u0647 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631\u0627\u06CC \u062C\u0644\u0633\u0627\u062A \u0622\u0645\u0648\u0632\u0634\u06CC \u062A\u0633\u0631\u06CC\u0639\u200C\u0634\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u0645\u061F /n \u0628\u0627 \u0627\u062D\u062A\u0631\u0627\u0645\u060C/n \u06A9\u0644\u0627\u0631\u06A9",
        attachments: [
          {
            name: "feedback.pdf",
            size: "3.74MB",
            type: "pdf"
          },
          {
            name: "feedback.docx",
            size: "175KB",
            type: "doc"
          }
        ],
        time: "\u062F\u06CC\u0631\u0648\u0632"
      }
    ];
    const activeMessage = ref(1);
    computed(() => {
      return messages.find((message) => message.id === activeMessage.value);
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoAccountMenu = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_4$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 flex h-screen w-full overflow-hidden" }, _attrs))}><div class="border-muted-200 dark:border-muted-700/40 dark:bg-muted-800 flex w-20 flex-col items-center border-e bg-white">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-600 h-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-primary-600 h-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="relative flex h-full flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500/10 text-primary-500 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:tray-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500/10 text-primary-500 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:tray-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bookmark-simple-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:bookmark-simple-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/calendar",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:calendar-blank-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute -end-1 -top-1 flex size-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white"${_scopeId}> 5 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:calendar-blank-duotone",
                  class: "size-5"
                }),
                createVNode("span", { class: "absolute -end-1 -top-1 flex size-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white" }, " 5 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:folder-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:folder-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:trash-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:trash-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:gear-six-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto flex flex-col items-center"><a href="#" class="relative flex size-16 items-center justify-center" title="\u0628\u0627\u0632\u06AF\u0634\u062A"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-left",
        class: "size-5 rtl:rotate-180"
      }, null, _parent));
      _push(`</div></a><button type="button" class="relative flex size-16 items-center justify-center"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "size-5"
      }, null, _parent));
      _push(`</div></button><div class="relative flex size-16 items-center justify-center">`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, null, null, _parent));
      _push(`</div></div></nav></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/inbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
