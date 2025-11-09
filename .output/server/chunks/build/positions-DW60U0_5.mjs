import { _ as _sfc_main$1 } from './BaseButtonIcon-B-NRPykg.mjs';
import { i as _export_sfc, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-B_Qxgxxp.mjs';
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
  const _component_BaseButtonIcon = _sfc_main$1;
  const _component_Icon = __nuxt_component_2;
  const _component_BaseButtonAction = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-2" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    rounded: "lg",
    "data-nui-tooltip": "\u0648\u0642\u062A \u0686\u0631\u062A \u0632\u062F\u0646!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:timer-duotone",
          class: "size-5 text-sky-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:timer-duotone",
            class: "size-5 text-sky-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    rounded: "lg",
    "data-nui-tooltip-position": "left",
    "data-nui-tooltip": "\u0627\u06CC\u0646 \u0631\u0627 \u0627\u06A9\u0646\u0648\u0646 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:lock-duotone",
          class: "size-5 text-emerald-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:lock-duotone",
            class: "size-5 text-emerald-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    rounded: "lg",
    "data-nui-tooltip-position": "right",
    "data-nui-tooltip": "\u06A9\u0645\u06CC \u0645\u062D\u0628\u062A \u0628\u062F\u0647\u06CC\u062F!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:heartbeat-duotone",
          class: "size-5 text-rose-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:heartbeat-duotone",
            class: "size-5 text-rose-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    rounded: "lg",
    "data-nui-tooltip-position": "down",
    "data-nui-tooltip": "\u067E\u0627\u062F\u0634\u0627\u0647 \u0634\u0645\u0627\u0644!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:crown-duotone",
          class: "size-5 text-yellow-500"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:crown-duotone",
            class: "size-5 text-yellow-500"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButtonAction, {
    rounded: "lg",
    "data-nui-tooltip": "\u0628\u0641\u0631\u0645\u0627\u06CC\u06CC\u062F!"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:bell-ringing-duotone",
          class: "text-primary-500 -ms-1 me-2 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="py-2"${_scopeId}>\u0627\u0634\u062A\u0631\u0627\u06A9</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:bell-ringing-duotone",
            class: "text-primary-500 -ms-1 me-2 size-4"
          }),
          createVNode("span", { class: "py-2" }, "\u0627\u0634\u062A\u0631\u0627\u06A9")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tooltip/positions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const positions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { positions as default };
