import { _ as _sfc_main$1 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
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
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = reactive({
      first: "",
      second: "",
      third: ""
    });
    const frameworks = ref(["Javascript", "Nuxt", "Vue.js", "React.js", "Angular", "Alpine.js"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAutocomplete = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end" }, _attrs))}><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(fields).first,
        "onUpdate:modelValue": ($event) => unref(fields).first = $event,
        items: unref(frameworks),
        size: "sm",
        rounded: "md",
        label: "Size: sm",
        placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
        error: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(fields).second,
        "onUpdate:modelValue": ($event) => unref(fields).second = $event,
        items: unref(frameworks),
        size: "md",
        rounded: "md",
        label: "\u0627\u0646\u062F\u0627\u0632\u0647: md",
        placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
        error: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(fields).third,
        "onUpdate:modelValue": ($event) => unref(fields).third = $event,
        items: unref(frameworks),
        size: "lg",
        rounded: "md",
        label: "Size: lg",
        placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
        error: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/autocomplete/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
