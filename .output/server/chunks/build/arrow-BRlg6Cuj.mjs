import { _ as _sfc_main$1 } from './BaseBreadcrumb-1ZihDLwr.mjs';
import { a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseDropdownItem-vorQzQkQ.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "arrow",
  __ssrInlineRender: true,
  setup(__props) {
    const demoBreadcrumbOne = [
      {
        label: "\u062E\u0627\u0646\u0647",
        hideLabel: false,
        icon: "ph:house-duotone",
        to: "#"
      },
      {
        label: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A",
        hideLabel: false,
        to: "#"
      },
      {
        label: "\u0644\u067E\u200C\u062A\u0627\u067E\u200C\u0647\u0627",
        hideLabel: false,
        to: "#"
      }
    ];
    const demoBreadcrumbTwo = [
      {
        label: "\u062E\u0627\u0646\u0647",
        hideLabel: false,
        icon: "ph:house-duotone",
        to: "#"
      },
      {
        label: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A",
        hideLabel: false,
        icon: "ph:grid-four-duotone",
        to: "#"
      },
      {
        label: "\u0644\u067E\u200C\u062A\u0627\u067E\u200C\u0647\u0627",
        hideLabel: false,
        icon: "ph:laptop-duotone",
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseBreadcrumb, { items: demoBreadcrumbOne }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "rtl:rotate-180 block size-3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "rtl:rotate-180 block size-3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseBreadcrumb, { items: demoBreadcrumbTwo }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "rtl:rotate-180 block size-3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "rtl:rotate-180 block size-3"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/breadcrumb/arrow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
