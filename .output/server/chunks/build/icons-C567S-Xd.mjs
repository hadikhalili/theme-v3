import { i as _export_sfc, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseButton = _sfc_main$e;
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseButton, { color: "default" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:moon",
          class: "-ms-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Button</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "lucide:moon",
            class: "-ms-1 size-4"
          }),
          createVNode("span", null, "Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Button</span>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-right",
          class: "rtl:rotate-180 me-1 size-4"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("span", null, "Button"),
          createVNode(_component_Icon, {
            name: "lucide:arrow-right",
            class: "rtl:rotate-180 me-1 size-4"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButton, { color: "success" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "cib:envato",
          class: "-ms-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Button</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "cib:envato",
            class: "-ms-1 size-4"
          }),
          createVNode("span", null, "Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButton, { color: "info" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "fa:twitter",
          class: "-ms-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Button</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "fa:twitter",
            class: "-ms-1 size-4"
          }),
          createVNode("span", null, "Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButton, { color: "warning" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ion:shapes",
          class: "-ms-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Button</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ion:shapes",
            class: "-ms-1 size-4"
          }),
          createVNode("span", null, "Button")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButton, { color: "danger" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:heart-duotone",
          class: "-ms-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Button</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:heart-duotone",
            class: "-ms-1 size-4"
          }),
          createVNode("span", null, "Button")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/button/icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { icons as default };
