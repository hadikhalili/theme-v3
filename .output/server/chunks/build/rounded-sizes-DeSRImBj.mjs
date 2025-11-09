import { _ as _sfc_main$1 } from './BaseIconBox-Cgm-LP3M.mjs';
import { i as _export_sfc, a as __nuxt_component_2 } from './server.mjs';
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
  const _component_BaseIconBox = _sfc_main$1;
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseIconBox, {
    size: "xs",
    rounded: "sm",
    class: "bg-gray-200 text-gray-500 dark:bg-gray-800",
    color: "none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:nut-duotone",
          class: "size-3"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:nut-duotone",
            class: "size-3"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseIconBox, {
    size: "sm",
    rounded: "sm",
    class: "bg-gray-200 text-gray-500 dark:bg-gray-800",
    color: "none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:nut-duotone",
          class: "size-4"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:nut-duotone",
            class: "size-4"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseIconBox, {
    size: "md",
    rounded: "sm",
    class: "bg-gray-200 text-gray-500 dark:bg-gray-800",
    color: "none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:nut-duotone",
          class: "size-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:nut-duotone",
            class: "size-5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseIconBox, {
    size: "lg",
    rounded: "sm",
    class: "bg-gray-200 text-gray-500 dark:bg-gray-800",
    color: "none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:nut-duotone",
          class: "size-6"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:nut-duotone",
            class: "size-6"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseIconBox, {
    size: "xl",
    rounded: "sm",
    class: "bg-gray-200 text-gray-500 dark:bg-gray-800",
    color: "none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:nut-duotone",
          class: "size-7"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:nut-duotone",
            class: "size-7"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseIconBox, {
    size: "2xl",
    rounded: "sm",
    class: "bg-gray-200 text-gray-500 dark:bg-gray-800",
    color: "none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:nut-duotone",
          class: "size-8"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:nut-duotone",
            class: "size-8"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/iconbox/rounded-sizes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roundedSizes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { roundedSizes as default };
