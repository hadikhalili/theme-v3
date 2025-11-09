import { _ as _sfc_main$1 } from './DemoPlaceholderMinimal-0TDRe2Dy.mjs';
import { e as _sfc_main$e } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  __name: "tokens",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPlaceholderMinimal = _sfc_main$1;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
        title: "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u062A\u0648\u06A9\u0646 API \u0646\u062F\u0627\u0631\u06CC\u062F",
        description: "\u0627\u06AF\u0631 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F \u0628\u0647 \u0628\u06A9\u200C\u0627\u0646\u062F \u062E\u0648\u062F \u0645\u062A\u0635\u0644 \u0634\u0648\u06CC\u062F\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u06CC\u06A9 \u062A\u0648\u06A9\u0646 API \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062E\u0627\u0631\u062C\u06CC \u0628\u0647 \u062E\u062F\u0645\u0627\u062A \u0645\u0627 \u0645\u062A\u0635\u0644 \u0634\u0648\u06CC\u062F."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-3 flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "md",
              color: "primary",
              class: "w-40"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u062C\u0627\u062F \u0646\u0634\u0627\u0646\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0646\u0634\u0627\u0646\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-3 flex justify-center" }, [
                createVNode(_component_BaseButton, {
                  rounded: "md",
                  color: "primary",
                  class: "w-40"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0646\u0634\u0627\u0646\u0647 ")
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/settings/tokens.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
