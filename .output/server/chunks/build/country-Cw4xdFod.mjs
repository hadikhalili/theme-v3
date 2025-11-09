import { _ as _sfc_main$1 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { defineComponent, shallowRef, computed, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
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
  __name: "country",
  __ssrInlineRender: true,
  setup(__props) {
    const countriesMap = shallowRef({});
    const countries = computed(() => Object.values(countriesMap.value));
    const selection = ref("IT");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAutocomplete = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(selection),
        "onUpdate:modelValue": ($event) => isRef(selection) ? selection.value = $event : null,
        modelModifiers: { prop: true },
        items: unref(countries),
        icon: "lucide:globe-2",
        clearable: "",
        properties: {
          label: "label",
          sublabel: "region",
          value: "code",
          icon: "icon"
        },
        "filter-items": (query, items) => {
          if (!query)
            return items?.slice(0, 10) ?? [];
          return (items ?? []).filter((item) => {
            const queryLower = query.toLowerCase();
            const label = item.label.toLowerCase();
            const labelLocal = item.labelLocal.toLowerCase();
            const region = item.region.toLowerCase();
            const code = item.code.toLowerCase();
            return region.includes(queryLower) || label.includes(queryLower) || labelLocal.includes(queryLower) || code.includes(queryLower);
          }).slice(0, 10);
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/autocomplete/country.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
