import { _ as __nuxt_component_0 } from './BaseTreeSelect-CsxaJnr6.mjs';
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
import './BaseCheckbox-CfxLaouc.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "async",
  __ssrInlineRender: true,
  setup(__props) {
    const getAsyncTree = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3e3));
      return [
        {
          item: "Item 1",
          open: true,
          children: async () => {
            await new Promise((resolve) => setTimeout(resolve, 8e3));
            return Array.from(
              {
                length: 100
              },
              (x, i) => ({
                item: `Item 1.${i}`,
                children: async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2e3));
                  return Array.from(
                    {
                      length: 10
                    },
                    (x2, j) => ({
                      item: `Item 1.${i}.${j}`
                    })
                  );
                }
              })
            );
          }
        },
        {
          item: "Item 2",
          children: async () => {
            await new Promise((resolve) => setTimeout(resolve, 8e3));
            return Array.from(
              {
                length: 100
              },
              (x, i) => ({
                item: `Item 2.${i}`,
                children: async () => {
                  await new Promise((resolve) => setTimeout(resolve, 2e3));
                  return Array.from(
                    {
                      length: 10
                    },
                    (x2, j) => ({
                      item: `Item 2.${i}.${j}`
                    })
                  );
                }
              })
            );
          }
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTreeSelect = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTreeSelect, {
        children: getAsyncTree,
        treeline: "",
        icons: {
          open: "lucide:chevron-up",
          closed: "lucide:chevron-down",
          pending: "svg-spinners:270-ring-with-bg",
          item: ""
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/treeselect/async.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
