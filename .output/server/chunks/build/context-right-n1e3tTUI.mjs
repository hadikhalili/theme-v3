import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as _export_sfc } from './server.mjs';
import '@headlessui/vue';
import '@headlessui-float/vue';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseDropdown = __nuxt_component_0;
  const _component_BaseDropdownItem = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-end" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseDropdown, {
    variant: "context",
    label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
          text: "\u0646\u0645\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0634\u0645\u0627",
          rounded: "sm"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
          text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0634\u0645\u0627",
          rounded: "sm"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u062A\u06CC\u0645",
          text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0634\u0645\u0627",
          rounded: "sm"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
          text: "\u062A\u0646\u0638\u06CC\u0645 \u062A\u0631\u062C\u06CC\u062D\u0627\u062A \u062E\u0648\u062F",
          rounded: "sm"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
            text: "\u0646\u0645\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0634\u0645\u0627",
            rounded: "sm"
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
            text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0634\u0645\u0627",
            rounded: "sm"
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u062A\u06CC\u0645",
            text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0634\u0645\u0627",
            rounded: "sm"
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
            text: "\u062A\u0646\u0638\u06CC\u0645 \u062A\u0631\u062C\u06CC\u062D\u0627\u062A \u062E\u0648\u062F",
            rounded: "sm"
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/dropdown/context-right.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contextRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contextRight as default };
