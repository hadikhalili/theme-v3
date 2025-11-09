import { _ as _sfc_main$1 } from './BaseInputNumber-BvjqvKuw.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "disabled",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(12.23);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInputNumber = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end" }, _attrs))}><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseInputNumber, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        size: "sm",
        rounded: "md",
        label: "Amount",
        icon: "lucide:euro",
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseInputNumber, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        size: "md",
        rounded: "md",
        label: "Amount",
        icon: "lucide:euro",
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseInputNumber, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        size: "lg",
        rounded: "md",
        label: "Amount",
        icon: "lucide:euro",
        disabled: ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-number/disabled.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
