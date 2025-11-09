import { _ as _sfc_main$1, a as _sfc_main$1$1 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
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
  __name: "allow-create",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = reactive({
      first: void 0,
      second: void 0,
      third: void 0
    });
    const frameworks = ref(["Javascript", "Nuxt", "Vue.js", "React.js", "Angular", "Alpine.js"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAutocomplete = _sfc_main$1;
      const _component_BaseAutocompleteItem = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end" }, _attrs))}><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(fields).first,
        "onUpdate:modelValue": ($event) => unref(fields).first = $event,
        items: unref(frameworks),
        icon: "lucide:search",
        size: "sm",
        rounded: "md",
        placeholder: "\u0645\u062B\u0627\u0644: SvelteKit",
        label: "\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9",
        "allow-create": ""
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(fields).second,
        "onUpdate:modelValue": ($event) => unref(fields).second = $event,
        items: unref(frameworks),
        icon: "lucide:search",
        size: "md",
        rounded: "md",
        placeholder: "\u0645\u062B\u0627\u0644: SvelteKit",
        label: "\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9",
        "allow-create": ""
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(fields).third,
        "onUpdate:modelValue": ($event) => unref(fields).third = $event,
        items: unref(frameworks),
        icon: "lucide:search",
        size: "lg",
        rounded: "md",
        placeholder: "\u0645\u062B\u0627\u0644: SvelteKit",
        label: "\u0641\u0631\u06CC\u0645\u200C\u0648\u0631\u06A9",
        "allow-create": ""
      }, {
        "create-item": withCtx(({
          query,
          active,
          selected
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAutocompleteItem, {
              rounded: "md",
              item: {
                icon: "ph:plus-circle",
                label: `Add '${query}'`,
                sublabel: "Create new item",
                value: query
              },
              active,
              selected
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseAutocompleteItem, {
                rounded: "md",
                item: {
                  icon: "ph:plus-circle",
                  label: `Add '${query}'`,
                  sublabel: "Create new item",
                  value: query
                },
                active,
                selected
              }, null, 8, ["item", "active", "selected"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/autocomplete/allow-create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
