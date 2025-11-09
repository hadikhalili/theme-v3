import { _ as _sfc_main$1 } from './TairoPopover-CJdqeAYt.mjs';
import { i as _export_sfc, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './TairoPopoverContentHelp-Bu8DVRTS.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '@headlessui-float/vue';
import '@headlessui/vue';
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
import './BaseIconBox-Cgm-LP3M.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TairoPopover = _sfc_main$1;
  const _component_Icon = __nuxt_component_2;
  const _component_TairoPopoverContentHelp = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end justify-end gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TairoPopover, {
    size: "sm",
    placement: "bottom-end"
  }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
          title: "\u0637\u0631\u0627\u062D\u06CC \u062C\u062F\u06CC\u062F",
          subtitle: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F",
          text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0633\u0648\u0644\u0648\u0631\n                      \u0645\u0648\u0631\u0627\u0646\u06CC\u062A\u0648\u0631 \u0644\u0648\u0628\u06CC\u0633 \u0627\u0645.",
          icon: "lucide:gem",
          "icon-color": "info"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoPopoverContentHelp, {
            title: "\u0637\u0631\u0627\u062D\u06CC \u062C\u062F\u06CC\u062F",
            subtitle: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0637\u0631\u062D\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F",
            text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0633\u0648\u0644\u0648\u0631\n                      \u0645\u0648\u0631\u0627\u0646\u06CC\u062A\u0648\u0631 \u0644\u0648\u0628\u06CC\u0633 \u0627\u0645.",
            icon: "lucide:gem",
            "icon-color": "info"
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-muted-500 flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:help-circle",
          class: "me-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="font-sans text-sm"${_scopeId}>\u0645\u062A\u0646 \u06A9\u0645\u06A9</span></span>`);
      } else {
        return [
          createVNode("span", { class: "text-muted-500 flex items-center" }, [
            createVNode(_component_Icon, {
              name: "lucide:help-circle",
              class: "me-1 size-4"
            }),
            createVNode("span", { class: "font-sans text-sm" }, "\u0645\u062A\u0646 \u06A9\u0645\u06A9")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TairoPopover, {
    size: "sm",
    placement: "bottom-end"
  }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoPopoverContentHelp, {
          title: "\u062E\u0637\u0627",
          subtitle: "Handling errors",
          text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0633\u0648\u0644\u0648\u0631\n                      \u0645\u0648\u0631\u0627\u0646\u06CC\u062A\u0648\u0631 \u0644\u0648\u0628\u06CC\u0633 \u0627\u0645.",
          icon: "lucide:x-octagon",
          "icon-color": "danger"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoPopoverContentHelp, {
            title: "\u062E\u0637\u0627",
            subtitle: "Handling errors",
            text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0633\u0648\u0644\u0648\u0631\n                      \u0645\u0648\u0631\u0627\u0646\u06CC\u062A\u0648\u0631 \u0644\u0648\u0628\u06CC\u0633 \u0627\u0645.",
            icon: "lucide:x-octagon",
            "icon-color": "danger"
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-muted-500 flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:help-circle",
          class: "me-1 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="font-sans text-sm"${_scopeId}>\u0645\u062A\u0646 \u06A9\u0645\u06A9</span></span>`);
      } else {
        return [
          createVNode("span", { class: "text-muted-500 flex items-center" }, [
            createVNode(_component_Icon, {
              name: "lucide:help-circle",
              class: "me-1 size-4"
            }),
            createVNode("span", { class: "font-sans text-sm" }, "\u0645\u062A\u0646 \u06A9\u0645\u06A9")
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/popover/help-right.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const helpRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { helpRight as default };
