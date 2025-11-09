import { _ as _sfc_main$2, a as __nuxt_component_7, b as _sfc_main$1 } from './LandingFooter-aDfvtEbi.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import './BaseSwitchThin-DO5QSQNt.mjs';
import './BaseRadio-DxLVFvJR.mjs';
import './BaseTag-CQSmGSbm.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingDemos = _sfc_main$2;
      const _component_LandingCta = __nuxt_component_7;
      const _component_LandingFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white pt-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LandingDemos, { cta: false }, null, _parent));
      _push(ssrRenderComponent(_component_LandingCta, null, null, _parent));
      _push(ssrRenderComponent(_component_LandingFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/pages/demos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
