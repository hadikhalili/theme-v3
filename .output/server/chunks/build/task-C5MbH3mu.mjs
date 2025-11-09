import { t as usePanels, e as _sfc_main$e } from './server.mjs';
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "task",
  __ssrInlineRender: true,
  setup(__props) {
    const { open } = usePanels();
    const task = {
      id: 0,
      name: "\u06CC\u06A9 \u0637\u0631\u0627\u062D\u06CC \u062C\u062F\u06CC\u062F \u0641\u06CC\u0645\u06AF\u0627 \u0628\u0631\u0627\u06CC \u0639\u0646\u0627\u0635\u0631 \u062C\u062F\u06CC\u062F \u0635\u0641\u062D\u0647\u200C\u0627\u0635\u0644\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F",
      description: "\u0645\u0627 \u0628\u0627\u06CC\u062F \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0633\u0627\u062F\u0647\u200C\u062A\u0631\u06CC\u0646 \u0639\u0646\u0627\u0635\u0631 \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0645\u0627\u0646\u0646\u062F \u062F\u06A9\u0645\u0647\u200C\u0647\u0627\u060C \u0628\u0631\u0686\u0633\u0628\u200C\u0647\u0627 \u0648 \u0639\u0646\u0627\u0635\u0631 \u0641\u0631\u0645 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u0645. \u0633\u067E\u0633 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0627\u06CC\u0646\u200C\u0647\u0627 \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u0628\u0644\u0648\u06A9\u200C\u0647\u0627\u06CC \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u062C\u062F\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645 \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u0633\u0627\u06CC\u0631 \u0635\u0641\u062D\u0627\u062A \u067E\u0631\u0648\u0698\u0647 \u0646\u06CC\u0632 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645.",
      completion: 100,
      status: 5,
      created: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
      assignee: {
        id: 27,
        src: "/img/avatars/24.svg",
        badge: "/img/stacks/illustrator.svg",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        bio: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F.",
        tooltip: "Carmen E.",
        text: "CE"
      },
      files: [
        {
          id: 0,
          name: "company-ux-guide.pdf",
          icon: "/img/icons/files/pdf.svg",
          size: "4.7MB",
          version: "1.5.2",
          uploaded: "2 weeks ago",
          author: {
            name: "Hermann M.",
            picture: "/img/avatars/16.svg"
          }
        },
        {
          id: 1,
          name: "project_sketches.ai",
          icon: "/img/icons/files/ai.svg",
          size: "8.9MB",
          version: "1.1.3",
          uploaded: "\u06CC\u06A9 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
          author: {
            name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
            picture: "/img/avatars/5.svg"
          }
        }
      ],
      checklist: [
        {
          text: "\u0627\u06CC\u062C\u0627\u062F \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0639\u0646\u0627\u0635\u0631 \u062F\u06A9\u0645\u0647",
          done: true
        },
        {
          text: "\u0627\u06CC\u062C\u0627\u062F \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0639\u0646\u0627\u0635\u0631 \u0646\u0634\u0627\u0646",
          done: true
        },
        {
          text: "\u0627\u06CC\u062C\u0627\u062F \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0639\u0646\u0627\u0635\u0631 \u0648\u0631\u0648\u062F\u06CC",
          done: true
        },
        {
          text: "\u0627\u06CC\u062C\u0627\u062F \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0639\u0646\u0627\u0635\u0631 \u0686\u06A9\u200C\u0628\u0627\u06A9\u0633",
          done: true
        },
        {
          text: "\u0627\u06CC\u062C\u0627\u062F \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0627\u0644\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u062A",
          done: true
        }
      ],
      comments: [
        {
          text: "\u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u06AF\u0648\u0634\u0647\u200C\u0647\u0627\u06CC \u062F\u06A9\u0645\u0647\u200C\u0647\u0627 \u0628\u0627\u06CC\u062F \u06A9\u0645\u06CC \u06AF\u0631\u062F\u062A\u0631 \u0628\u0627\u0634\u0646\u062F.",
          author: {
            name: "Marjory L.",
            picture: "/img/avatars/12.svg",
            posted: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634"
          }
        },
        {
          text: "\u0622\u06CC\u0627 \u0642\u0635\u062F \u062F\u0627\u0631\u06CC\u062F \u0627\u06CC\u0646 \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062C\u0647\u0627\u0646\u06CC \u062F\u0631 \u0641\u0627\u06CC\u0644 \u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F\u061F",
          author: {
            name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
            picture: "/img/avatars/10.svg",
            posted: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634"
          }
        },
        {
          text: "\u0647\u0646\u0648\u0632 \u0645\u0637\u0645\u0626\u0646 \u0646\u06CC\u0633\u062A\u0645. \u0647\u0646\u0648\u0632 \u0628\u0627\u06CC\u062F \u0627\u06CC\u0646 \u0645\u0648\u0636\u0648\u0639 \u0631\u0627 \u0628\u0627 \u062A\u06CC\u0645 \u0645\u0647\u0646\u062F\u0633\u06CC \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u0645.",
          author: {
            name: "Marjory L.",
            picture: "/img/avatars/12.svg",
            posted: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634"
          }
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        onClick: ($event) => unref(open)("task", { task })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u067E\u0646\u0644 `);
          } else {
            return [
              createTextVNode(" \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u067E\u0646\u0644 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/panel/task.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
