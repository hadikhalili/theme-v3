import { d as _sfc_main$D, f as _sfc_main$C, l as _sfc_main$3 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-BzXbqdKu.mjs';
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
  __name: "search-empty",
  __ssrInlineRender: true,
  setup(__props) {
    const searchTerms = ref("\u067E\u06CC\u062A\u0632\u0627\u06CC \u0628\u0633\u062A\u0646\u06CC");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseText = _sfc_main$C;
      const _component_BasePlaceholderPage = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl" }, _attrs))}><div class="mx-auto mt-6 flex w-full max-w-sm items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(searchTerms),
        "onUpdate:modelValue": ($event) => isRef(searchTerms) ? searchTerms.value = $event : null,
        icon: "lucide:search",
        placeholder: "\u062C\u0633\u062A\u062C\u0648...",
        rounded: "full",
        classes: {
          wrapper: "w-full",
          input: "h-12 !ps-12",
          icon: "h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7"
        }
      }, null, _parent));
      _push(`</div><div class="mb-12 mt-2 text-center">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06F0 \u0646\u062A\u06CC\u062C\u0647 \u0628\u0631\u0627\u06CC &quot;\u067E\u06CC\u062A\u0632\u0627\u06CC \u0628\u0633\u062A\u0646\u06CC&quot; `);
          } else {
            return [
              createTextVNode(' \u06F0 \u0646\u062A\u06CC\u062C\u0647 \u0628\u0631\u0627\u06CC "\u067E\u06CC\u062A\u0632\u0627\u06CC \u0628\u0633\u062A\u0646\u06CC" ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
        subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F."
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "block dark:hidden",
                src: _imports_0,
                alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
              }),
              createVNode("img", {
                class: "hidden dark:block",
                src: _imports_1,
                alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/search-empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
