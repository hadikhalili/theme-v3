import { _ as __nuxt_component_0 } from './BaseListbox-CK7ULECq.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseIconBox-Cgm-LP3M.mjs';
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
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref();
    const frameworks = ["Javascript", "Vue.js", "React.js", "Angular", "Alpine.js"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseListbox = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end" }, _attrs))}><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseListbox, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        label: "Rounded: md",
        size: "sm",
        items: frameworks,
        placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628",
        rounded: "md",
        error: "\u0627\u06CC\u0646 \u0641\u06CC\u0644\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A"
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseListbox, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        label: "Rounded: md",
        size: "md",
        items: frameworks,
        placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628",
        rounded: "md",
        error: "\u0627\u06CC\u0646 \u0641\u06CC\u0644\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A"
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseListbox, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        label: "Rounded: md",
        size: "lg",
        items: frameworks,
        placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628",
        rounded: "md",
        error: "\u0627\u06CC\u0646 \u0641\u06CC\u0644\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/listbox/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
