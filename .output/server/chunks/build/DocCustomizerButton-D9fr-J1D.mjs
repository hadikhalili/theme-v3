import { D as useState, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-BTqzHIxV.mjs';
import { r as renderSlot } from './slot-CU1HPQzS.mjs';
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
import './MDCSlot-Bm6IuY7a.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocCustomizerButton",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = useState("switcher-open", () => false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_BaseButton, mergeProps({ onClick: toggle }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:drop-half-bottom-duotone",
              class: "me-1 size-4"
            }, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, () => {
              _push2(` \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0642\u0627\u0644\u0628 `);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:drop-half-bottom-duotone",
                class: "me-1 size-4"
              }),
              renderSlot(_ctx.$slots, "default", { unwrap: "p" }, () => [
                createTextVNode(" \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0642\u0627\u0644\u0628 ")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocCustomizerButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
