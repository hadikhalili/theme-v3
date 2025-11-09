import { _ as __nuxt_component_0 } from './AddonMarkdownRemark-DRrl86xF.mjs';
import { _ as _sfc_main$1 } from './BaseTextarea-BGdIJfqV.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
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
import './BaseProse-BoVg3KNx.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const markdown = ref([
      "# Hello world",
      "",
      `\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.`,
      "",
      "```js",
      'const hello = "world"',
      "```"
    ].join("\n"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonMarkdownRemark = __nuxt_component_0;
      const _component_BaseTextarea = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid items-center gap-8 md:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AddonMarkdownRemark, { source: unref(markdown) }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        modelValue: unref(markdown),
        "onUpdate:modelValue": ($event) => isRef(markdown) ? markdown.value = $event : null,
        autogrow: ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/markdown/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
