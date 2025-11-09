import { _ as __nuxt_component_0$3, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, computed, unref, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const isExternal = computed(() => {
      return props.href.startsWith("http");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<span${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "inline-flex items-center gap-1",
        href: __props.href,
        target: unref(isExternal) ? "_blank" : void 0,
        rel: unref(isExternal) ? "noopener" : void 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isExternal)) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:external-link",
                class: "size-3 opacity-60 dark:opacity-80"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              unref(isExternal) ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "lucide:external-link",
                class: "size-3 opacity-60 dark:opacity-80"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/ProseA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
