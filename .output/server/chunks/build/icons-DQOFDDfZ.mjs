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
  __name: "icons",
  __ssrInlineRender: true,
  setup(__props) {
    const tree = [
      {
        item: ".app",
        children: [
          {
            item: "index.ts"
          },
          {
            item: "shims.d.ts"
          }
        ]
      },
      {
        item: "src",
        children: [
          {
            item: "pages",
            children: []
          },
          {
            item: "home",
            children: [
              {
                item: "index.ts"
              },
              {
                item: "styles.css"
              }
            ]
          },
          {
            item: "index.vue"
          }
        ]
      },
      {
        item: "app.config.ts"
      },
      {
        item: "tailwind.config.cjs"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTreeSelect = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTreeSelect, {
        children: tree,
        treeline: "",
        icons: {
          open: "clarity:folder-open-line",
          closed: "clarity:folder-line",
          item: "clarity:file-line",
          empty: "clarity:alert-line",
          pending: ""
        },
        classes: {
          treeline: "border-muted-300 dark:border-muted-700",
          checkbox: { wrapper: "" },
          emptyIcon: "",
          itemIcon: "",
          pendingIcon: "",
          treeIcon: ""
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/treeselect/icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
