import { _ as __nuxt_component_0 } from './BaseTreeSelect-CsxaJnr6.mjs';
import { e as _sfc_main$e } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseCheckbox-CfxLaouc.mjs';
import './IconCheck--xcA1MPZ.mjs';
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
  __name: "exposed",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref([]);
    const treeSelectRef = ref(null);
    function toggleAll() {
      treeSelectRef.value?.toggleChildrenSelection();
    }
    function unselectAll() {
      treeSelectRef.value?.unselectAllChildren();
    }
    function selectAll() {
      treeSelectRef.value?.selectAllChildren();
    }
    const tree = ref([
      {
        item: "Item 1",
        children: [
          {
            item: "Item 1.1"
          },
          {
            item: "Item 1.2"
          }
        ]
      },
      {
        item: "Item 2"
      },
      {
        item: "Item 3",
        open: true,
        children: [
          {
            item: "Item 3.0"
          },
          {
            item: "Item 3.1",
            open: true,
            children: [
              {
                item: "Item 3.1.1"
              },
              {
                item: "Item 3.1.2",
                open: true,
                children: []
              },
              {
                item: "Item 3.1.3"
              }
            ]
          },
          {
            item: "Item 3.2"
          },
          {
            item: "Item 3.3",
            children: []
          }
        ]
      },
      {
        item: "Item 4"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTreeSelect = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTreeSelect, {
        ref_key: "treeSelectRef",
        ref: treeSelectRef,
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        children: unref(tree),
        treeline: ""
      }, null, _parent));
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_BaseButton, { onClick: toggleAll }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u063A\u06CC\u06CC\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u062A\u063A\u06CC\u06CC\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { onClick: selectAll }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0645\u0627\u0645 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0645\u0627\u0645 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { onClick: unselectAll }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0644\u063A\u0648 \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 `);
          } else {
            return [
              createTextVNode(" \u0644\u063A\u0648 \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/treeselect/exposed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
