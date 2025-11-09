import _sfc_main$1 from './DemoAccountMenu-C3x7udSm.mjs';
import { a5 as useCollapse } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import './virtual_public-CbxAoqtm.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@headlessui/vue';
import './user-DDZJ47NJ.mjs';
import 'vue-router';
import 'notivue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoCollapseNavigationFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen } = useCollapse();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoAccountMenu = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex h-16 w-full items-center gap-4 transition-all duration-150", !unref(isOpen) ? "px-2 justify-center" : "px-6"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, null, null, _parent));
      _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "text-muted-500 dark:text-muted-400/80 whitespace-nowrap font-sans text-sm"])}"> \u062D\u0633\u0627\u0628 \u0645\u0646 </span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoCollapseNavigationFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
