import { _ as _sfc_main$1 } from './AddonInputPhone-C3Hh-ZkB.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseDropdownItem-vorQzQkQ.mjs';
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
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shape",
  __ssrInlineRender: true,
  setup(__props) {
    const phone = ref("+33612345678");
    const country = ref("FR");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonInputPhone = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 sm:grid-cols-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AddonInputPhone, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        country: unref(country),
        "onUpdate:country": ($event) => isRef(country) ? country.value = $event : null,
        rounded: "none",
        label: "Straight"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddonInputPhone, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        country: unref(country),
        "onUpdate:country": ($event) => isRef(country) ? country.value = $event : null,
        rounded: "sm",
        label: "Rounded"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddonInputPhone, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        country: unref(country),
        "onUpdate:country": ($event) => isRef(country) ? country.value = $event : null,
        rounded: "md",
        label: "Smooth"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddonInputPhone, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        country: unref(country),
        "onUpdate:country": ($event) => isRef(country) ? country.value = $event : null,
        rounded: "lg",
        label: "\u0645\u0646\u062D\u0646\u06CC"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AddonInputPhone, {
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
        country: unref(country),
        "onUpdate:country": ($event) => isRef(country) ? country.value = $event : null,
        rounded: "full",
        label: "Full"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-phone/shape.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
