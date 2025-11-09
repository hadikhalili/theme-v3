import { i as _export_sfc, a as __nuxt_component_2 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ion:gift-outline",
    class: "text-muted-400 dark:text-muted-500 block size-6"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ion:gift-outline",
    class: "text-muted-400 dark:text-muted-500 block size-7"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ion:gift-outline",
    class: "text-muted-400 dark:text-muted-500 block size-8"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ion:gift-outline",
    class: "text-muted-400 dark:text-muted-500 block size-9"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ion:gift-outline",
    class: "text-muted-400 dark:text-muted-500 block size-10"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ion:gift-outline",
    class: "block size-12 text-pink-500"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/icons/ion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ion as default };
