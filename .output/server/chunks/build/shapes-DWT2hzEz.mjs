import { _ as _sfc_main$1 } from './BaseAccordion-Dejd07uy.mjs';
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
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shapes",
  __ssrInlineRender: true,
  setup(__props) {
    const accordion = [
      {
        title: "\u0622\u06A9\u0627\u0631\u062F\u0626\u0648\u0646 \u0622\u06CC\u062A\u0645 \u06F1",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u067E\u0633 \u0686\u06AF\u0648\u0646\u0647\u061F \u0627\u0632 \u06A9\u062C\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u0645\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A."
      },
      {
        title: "\u0622\u06A9\u0627\u0631\u062F\u0626\u0648\u0646 \u0622\u06CC\u062A\u0645 \u06F2",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u067E\u0633 \u0686\u06AF\u0648\u0646\u0647\u061F \u0627\u0632 \u06A9\u062C\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u0645\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A."
      },
      {
        title: "\u0622\u06A9\u0627\u0631\u062F\u0626\u0648\u0646 \u0622\u06CC\u062A\u0645 \u06F3",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u067E\u0633 \u0686\u06AF\u0648\u0646\u0647\u061F \u0627\u0632 \u06A9\u062C\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u0645\u061F \u0627\u0648\u0644\u06CC\u0646 \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u06CC \u0686\u06CC\u0633\u062A\u061F \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAccordion = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 md:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseAccordion, {
        items: accordion,
        exclusive: "",
        rounded: "none"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAccordion, {
        items: accordion,
        rounded: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAccordion, {
        items: accordion,
        exclusive: "",
        rounded: "md"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAccordion, {
        items: accordion,
        exclusive: "",
        rounded: "lg"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/accordion/shapes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
