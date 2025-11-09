import _sfc_main$1 from './TairoTocAnchor-DaJFWAih.mjs';
import { i as _export_sfc, b as _sfc_main$w } from './server.mjs';
import { _ as _sfc_main$2 } from './TairoToc-CLxKdbp5.mjs';
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
  const _component_TairoTocAnchor = _sfc_main$1;
  const _component_BaseHeading = _sfc_main$w;
  const _component_TairoToc = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex" }, _attrs))}><div class="flex grow flex-col gap-1">`);
  _push(ssrRenderComponent(_component_TairoTocAnchor, {
    label: "\u0645\u062B\u0627\u0644 \u0644\u06CC\u0646\u06A9 \u0633\u0637\u062D \u06F1",
    level: "1"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TairoTocAnchor, {
    label: "\u0645\u062B\u0627\u0644 \u0644\u06CC\u0646\u06A9 \u0633\u0637\u062D \u06F2",
    level: "2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TairoTocAnchor, {
    label: "\u0645\u062B\u0627\u0644 \u0644\u06CC\u0646\u06A9 \u0633\u0637\u062D \u06F3",
    level: "3"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h4",
    size: "sm",
    weight: "medium"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_TairoTocAnchor, {
          label: "\u0645\u062B\u0627\u0644 \u0644\u06CC\u0646\u06A9 \u0633\u0637\u062D \u06F4",
          level: "4",
          prefix: "\u2022",
          "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_TairoTocAnchor, {
            label: "\u0645\u062B\u0627\u0644 \u0644\u06CC\u0646\u06A9 \u0633\u0637\u062D \u06F4",
            level: "4",
            prefix: "\u2022",
            "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TairoToc, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/toc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { toc as default };
