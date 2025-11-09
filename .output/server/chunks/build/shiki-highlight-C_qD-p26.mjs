import { _ as __nuxt_component_0 } from './AddonMarkdownRemark-DRrl86xF.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import './BaseProse-BoVg3KNx.mjs';

const markdownDemo = `## \u0639\u0646\u0648\u0627\u0646 \u06F2
\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0639\u0644\u06CC\u200C\u0631\u063A\u0645 \u067E\u06CC\u0686\u06CC\u062F\u06AF\u06CC\u200C\u0647\u0627\u060C \u0633\u0627\u062E\u062A\u0627\u0631 \u0627\u0635\u0644\u06CC \u0633\u0627\u062F\u0647 \u0627\u0633\u062A \u0648 \u0628\u0647\u200C\u0631\u0627\u062D\u062A\u06CC \u0642\u0627\u0628\u0644 \u0627\u062C\u0631\u0627. 
### \u0639\u0646\u0648\u0627\u0646 \u06F3
\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0627\u0632 \u062F\u0646\u06CC\u0627\u06CC \u0686\u0627\u067E \u0627\u0633\u062A \u06A9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064B \u0628\u0631\u0627\u06CC \u062A\u0633\u062A \u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.
`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shiki-highlight",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonMarkdownRemark = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AddonMarkdownRemark, mergeProps({ source: markdownDemo }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/markdown/shiki-highlight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
