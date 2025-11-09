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
  __name: "icon",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref({
      id: 2,
      name: "\u0633\u0641\u0631",
      text: "\u06AF\u0631\u062F\u0634\u06AF\u0631\u06CC \u0648 \u0633\u0641\u0631",
      icon: "ph:airplane-duotone"
    });
    const hobbies = [
      {
        id: 1,
        name: "\u0641\u06CC\u0644\u0645\u200C\u0647\u0627",
        text: "\u0633\u06CC\u0646\u0645\u0627 \u0648 \u0646\u0645\u0627\u06CC\u0634\u200C\u0647\u0627",
        icon: "ph:sword-duotone"
      },
      {
        id: 2,
        name: "\u0633\u0641\u0631",
        text: "\u06AF\u0631\u062F\u0634\u06AF\u0631\u06CC \u0648 \u0633\u0641\u0631",
        icon: "ph:airplane-duotone"
      },
      {
        id: 3,
        name: "\u0646\u0648\u0634\u06CC\u062F\u0646\u06CC\u200C\u0647\u0627",
        text: "\u0634\u0631\u0627\u0628\u200C\u0647\u0627 \u0648 \u0646\u0648\u0634\u06CC\u062F\u0646\u06CC\u200C\u0647\u0627\u06CC \u0639\u0627\u0644\u06CC",
        icon: "ph:brandy-duotone"
      },
      {
        id: 4,
        name: "\u0647\u0646\u0631\u0647\u0627",
        text: "\u0646\u0642\u0627\u0634\u06CC\u200C\u0647\u0627 \u0648 \u0645\u062C\u0633\u0645\u0647\u200C\u0633\u0627\u0632\u06CC",
        icon: "ph:paint-brush-duotone"
      },
      {
        id: 5,
        name: "\u06A9\u0627\u0631\u0627\u0626\u0648\u06A9\u0647",
        text: "\u062E\u0648\u0627\u0646\u062F\u0646 \u0628\u0627 \u062F\u0648\u0633\u062A\u0627\u0646",
        icon: "ph:microphone-stage-duotone"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseListbox = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-4xl flex-col flex-wrap gap-3 md:flex-row md:items-end" }, _attrs))}><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseListbox, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        size: "sm",
        rounded: "md",
        label: "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627",
        items: hobbies,
        properties: {
          value: "id",
          label: "name",
          sublabel: "text",
          icon: "icon"
        }
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseListbox, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        size: "md",
        rounded: "md",
        label: "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627",
        items: hobbies,
        properties: {
          value: "id",
          label: "name",
          sublabel: "text",
          icon: "icon"
        }
      }, null, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseListbox, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        size: "lg",
        rounded: "md",
        label: "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627",
        items: hobbies,
        properties: {
          value: "id",
          label: "name",
          sublabel: "text",
          icon: "icon"
        }
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/listbox/icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
