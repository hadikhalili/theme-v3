import { _ as _sfc_main$1 } from './BaseSnack-C-TcteGW.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as _export_sfc } from './server.mjs';
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
  const _component_BaseSnack = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseSnack, {
    label: "\u0631\u06CC\u200C\u0627\u06A9\u062A",
    color: "default",
    size: "xs",
    icon: "logos:react"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseSnack, {
    label: "\u0627\u0646\u06AF\u0648\u0644\u0627\u0631",
    color: "default",
    size: "sm",
    icon: "logos:angular-icon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseSnack, {
    label: "Vue",
    color: "default",
    size: "md",
    icon: "logos:vue"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/snack/icon-light.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const iconLight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { iconLight as default };
