import { _ as _sfc_main$1 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, shallowRef, computed, ref, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';
import '@headlessui/vue';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "country-multiple",
  __ssrInlineRender: true,
  setup(__props) {
    const countriesMap = shallowRef({});
    const countries = computed(() => Object.values(countriesMap.value));
    const selection = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAutocomplete = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(selection),
        "onUpdate:modelValue": ($event) => isRef(selection) ? selection.value = $event : null,
        items: unref(countries),
        icon: "lucide:globe-2",
        multiple: "",
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
      }, {
        "autocomplete-multiple-list-item": withCtx(({
          item,
          displayValue,
          removeItem
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-autocomplete-multiple-list-item flex gap-2 !px-2 !py-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: item.icon,
              class: "w-4"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.code)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.code), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(displayValue)}</span><button type="button"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:x",
              class: "nui-autocomplete-multiple-list-item-icon"
            }, null, _parent2, _scopeId));
            _push2(`</button></div>`);
          } else {
            return [
              createVNode("div", { class: "nui-autocomplete-multiple-list-item flex gap-2 !px-2 !py-1" }, [
                createVNode(_component_Icon, {
                  name: item.icon,
                  class: "w-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.code), 1)
                  ]),
                  _: 2
                }, 1032, ["name"]),
                createVNode("span", null, toDisplayString(displayValue), 1),
                createVNode("button", {
                  type: "button",
                  onClick: ($event) => removeItem(item)
                }, [
                  createVNode(_component_Icon, {
                    name: "ph:x",
                    class: "nui-autocomplete-multiple-list-item-icon"
                  })
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/autocomplete/country-multiple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
