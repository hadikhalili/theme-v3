import { _ as _sfc_main$1 } from './BaseTabs-_jPxp9j_.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseTabs = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-sm" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseTabs, {
    justify: "center",
    "model-value": "team",
    tabs: [
      { label: "\u062A\u06CC\u0645", value: "team" },
      { label: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627", value: "projects" }
    ]
  }, {
    tab: withCtx(({ activeValue }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (activeValue === "team") {
          _push2(`<p class="font-sans text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u062D\u0648\u0627\u0633 \u0686\u06AF\u0648\u0646\u0647 \u0642\u0636\u0627\u0648\u062A \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062D\u062A\u06CC \u0633\u0639\u0627\u062F\u062A\u061F \u0622\u06CC\u0627 \u0646\u06AF\u0631\u0627\u0646 \u0631\u0628\u0648\u062F\u0646 \u0634\u0627\u06AF\u0631\u062F \u0646\u06CC\u0633\u062A\u06CC\u061F </p>`);
        } else if (activeValue === "projects") {
          _push2(`<p class="font-sans text-sm text-gray-500 dark:text-gray-400"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u062D\u0648\u0627\u0633 \u0686\u06AF\u0648\u0646\u0647 \u0642\u0636\u0627\u0648\u062A \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062D\u062A\u06CC \u0633\u0639\u0627\u062F\u062A\u061F \u0622\u06CC\u0627 \u0646\u06AF\u0631\u0627\u0646 \u0631\u0628\u0648\u062F\u0646 \u0634\u0627\u06AF\u0631\u062F \u0646\u06CC\u0633\u062A\u06CC\u061F \u0627\u06CC\u0646\u0647\u0627 \u062F\u0642\u06CC\u0642\u0627\u064B \u0639\u0644\u06CC\u0647 \u0622\u0631\u06CC\u0633\u062A\u0648\u0646 \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F \u062A\u0648\u0633\u0637 \u06A9\u0631\u06CC\u067E\u067E\u0648. \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A. </p>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          activeValue === "team" ? (openBlock(), createBlock("p", {
            key: 0,
            class: "font-sans text-sm text-gray-500 dark:text-gray-400"
          }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u062D\u0648\u0627\u0633 \u0686\u06AF\u0648\u0646\u0647 \u0642\u0636\u0627\u0648\u062A \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062D\u062A\u06CC \u0633\u0639\u0627\u062F\u062A\u061F \u0622\u06CC\u0627 \u0646\u06AF\u0631\u0627\u0646 \u0631\u0628\u0648\u062F\u0646 \u0634\u0627\u06AF\u0631\u062F \u0646\u06CC\u0633\u062A\u06CC\u061F ")) : activeValue === "projects" ? (openBlock(), createBlock("p", {
            key: 1,
            class: "font-sans text-sm text-gray-500 dark:text-gray-400"
          }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u062D\u0648\u0627\u0633 \u0686\u06AF\u0648\u0646\u0647 \u0642\u0636\u0627\u0648\u062A \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062D\u062A\u06CC \u0633\u0639\u0627\u062F\u062A\u061F \u0622\u06CC\u0627 \u0646\u06AF\u0631\u0627\u0646 \u0631\u0628\u0648\u062F\u0646 \u0634\u0627\u06AF\u0631\u062F \u0646\u06CC\u0633\u062A\u06CC\u061F \u0627\u06CC\u0646\u0647\u0627 \u062F\u0642\u06CC\u0642\u0627\u064B \u0639\u0644\u06CC\u0647 \u0622\u0631\u06CC\u0633\u062A\u0648\u0646 \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F \u062A\u0648\u0633\u0637 \u06A9\u0631\u06CC\u067E\u067E\u0648. \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A. ")) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tabs/center.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const center = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { center as default };
