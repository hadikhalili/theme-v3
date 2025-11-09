import { i as _export_sfc, b as _sfc_main$w } from './server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseHeading = _sfc_main$w;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h2",
    size: "3xl",
    weight: "extrabold",
    class: "text-muted-800 dark:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u0628\u0632\u0631\u06AF `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u0628\u0632\u0631\u06AF ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h3",
    size: "2xl",
    weight: "bold",
    class: "text-muted-800 dark:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u067E\u0631\u0631\u0646\u06AF \u0648 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0632\u0631\u06AF `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u067E\u0631\u0631\u0646\u06AF \u0648 \u0628\u0633\u06CC\u0627\u0631 \u0628\u0632\u0631\u06AF ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h4",
    size: "lg",
    weight: "semibold",
    class: "text-muted-800 dark:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u06A9\u0648\u0686\u06A9\u062A\u0631 \u0648 \u0628\u0627\u0631\u06CC\u06A9\u200C\u062A\u0631 `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u06A9\u0648\u0686\u06A9\u062A\u0631 \u0648 \u0628\u0627\u0631\u06CC\u06A9\u200C\u062A\u0631 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h5",
    size: "md",
    weight: "medium",
    class: "text-muted-400"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06A9\u0648\u0686\u06A9\u062A\u0631 \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0631\u0646\u06AF \u062F\u06CC\u06AF\u0631 `);
      } else {
        return [
          createTextVNode(" \u06A9\u0648\u0686\u06A9\u062A\u0631 \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0631\u0646\u06AF \u062F\u06CC\u06AF\u0631 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/typography/heading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const heading = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { heading as default };
