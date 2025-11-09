import { j as useRoute, e as _sfc_main$e, a as __nuxt_component_2, _ as __nuxt_component_0$3, X as __nuxt_component_4 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "accounts",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isAccounts = computed(() => {
      return route.path.match("^/layouts/accounts$");
    });
    const isLinked = computed(() => {
      return route.path.startsWith("/layouts/accounts/linked");
    });
    const isRules = computed(() => {
      return route.path.startsWith("/layouts/accounts/rules");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_NuxtPage = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pb-24" }, _attrs))}><div class="flex items-center justify-end py-6"><div class="hidden items-center gap-2 md:flex">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "full",
        color: "default",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:building",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u062D\u0633\u0627\u0628 \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:building",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u062D\u0633\u0627\u0628 \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "full",
        color: "default",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:link",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0627\u062A\u0635\u0627\u0644 \u062D\u0633\u0627\u0628</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:link",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u0627\u062A\u0635\u0627\u0644 \u062D\u0633\u0627\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><div class="flex items-center justify-between overflow-hidden"><div class="border-muted-200 dark:border-muted-800 xs:overflow-x-auto flex grow gap-x-6 border-b font-sans">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/accounts",
        class: [
          "cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300",
          unref(isAccounts) ? "text-muted-700 dark:text-muted-100 border-primary-500" : "text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/accounts/linked",
        class: [
          "cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300",
          unref(isLinked) ? "text-muted-700 dark:text-muted-100 border-primary-500" : "text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0644\u06CC\u0646\u06A9\u200C\u0634\u062F\u0647 `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0644\u06CC\u0646\u06A9\u200C\u0634\u062F\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/accounts/rules",
        class: [
          "cursor-pointer select-none border-b-2 pb-2 transition-colors duration-300",
          unref(isRules) ? "text-muted-700 dark:text-muted-100 border-primary-500" : "text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0642\u0648\u0627\u0646\u06CC\u0646 \u0627\u0646\u062A\u0642\u0627\u0644 `);
          } else {
            return [
              createTextVNode(" \u0642\u0648\u0627\u0646\u06CC\u0646 \u0627\u0646\u062A\u0642\u0627\u0644 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full py-6">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/accounts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
