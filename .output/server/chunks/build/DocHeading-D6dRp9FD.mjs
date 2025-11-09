import { b as _sfc_main$w } from './server.mjs';
import _sfc_main$1 from './TairoTocAnchor-DaJFWAih.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "DocHeading",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    level: { default: 3 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_TairoTocAnchor = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseHeading, mergeProps({
        as: "h3",
        weight: "light",
        size: "lg",
        class: "not-prose mt-12"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoTocAnchor, {
              label: props.label,
              level: props.level,
              prefix: "\u2022",
              "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3.5 -top-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoTocAnchor, {
                label: props.label,
                level: props.level,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3.5 -top-1"
              }, null, 8, ["label", "level"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocHeading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
