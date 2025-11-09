import { _ as _sfc_main$1 } from './BaseAutocomplete-ChFUcoaJ.mjs';
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
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "media-result",
  __ssrInlineRender: true,
  setup(__props) {
    const people = ref([
      {
        id: 1,
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632",
        text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
        media: "/img/avatars/19.svg"
      },
      {
        id: 2,
        name: "\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631",
        text: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        media: "/img/avatars/16.svg"
      },
      {
        id: 3,
        name: "\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631",
        text: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        media: "/img/avatars/3.svg"
      },
      {
        id: 4,
        name: "\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631",
        text: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
        media: "/img/avatars/22.svg"
      },
      {
        id: 5,
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        text: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        media: "/img/avatars/2.svg"
      }
    ]);
    const value = ref();
    function filterItems(query, items) {
      if (!query || !items) {
        return items ?? [];
      }
      return items.filter((item) => {
        const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase());
        const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase());
        return nameMatches || textMatches;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAutocomplete = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-sm" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseAutocomplete, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        items: unref(people),
        "display-value": (item) => item.name,
        "filter-items": filterItems,
        icon: "ph:users-three",
        rounded: "md",
        placeholder: "\u062C\u0633\u062A\u062C\u0648...",
        label: "\u0645\u0627\u0645\u0648\u0631",
        clearable: "",
        properties: {
          value: "id",
          label: "name",
          sublabel: "text",
          media: "media"
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/autocomplete/media-result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
