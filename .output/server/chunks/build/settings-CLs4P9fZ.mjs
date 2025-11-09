import { _ as _sfc_main$1 } from './DemoNavigationTop-ObEBtUkj.mjs';
import { j as useRoute, _ as __nuxt_component_0$3, X as __nuxt_component_4 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const isPersonal = computed(() => {
      return route.path.match("^/layouts/settings$");
    });
    const isSecurity = computed(() => {
      return route.path.startsWith("/layouts/settings/security");
    });
    const isNotifications = computed(() => {
      return route.path.startsWith("/layouts/settings/notifications");
    });
    const isTokens = computed(() => {
      return route.path.startsWith("/layouts/settings/tokens");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoNavigationTop = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_NuxtPage = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 min-h-screen bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DemoNavigationTop, {
        title: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        "close-to": "/dashboards"
      }, null, _parent));
      _push(`<div class="w-full pb-20 pt-32"><div class="mx-auto w-full max-w-6xl px-4"><div class="grid w-full gap-8 md:grid-cols-12 md:gap-16"><div class="md:col-span-3 lg:col-span-3"><div class="border-muted-200 dark:border-muted-800 h-full border-e"><ul class="xs:flex xs:gap-4 -me-0.5 font-sans"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/settings",
        class: [
          "font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-e-[3px]",
          unref(isPersonal) ? "text-muted-800 dark:text-muted-100 border-primary-500" : "text-muted-500 dark:text-muted-400 border-transparent"
        ],
        "data-tab": "tab-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0634\u062E\u0635\u06CC `);
          } else {
            return [
              createTextVNode(" \u0634\u062E\u0635\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/settings/security",
        class: [
          "font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-e-[3px]",
          unref(isSecurity) ? "text-muted-800 dark:text-muted-100 border-primary-500" : "text-muted-500 dark:text-muted-400 border-transparent"
        ],
        "data-tab": "tab-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0645\u0646\u06CC\u062A `);
          } else {
            return [
              createTextVNode(" \u0627\u0645\u0646\u06CC\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/settings/notifications",
        class: [
          "font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-e-[3px]",
          unref(isNotifications) ? "text-muted-800 dark:text-muted-100 border-primary-500" : "text-muted-500 dark:text-muted-400 border-transparent"
        ],
        "data-tab": "tab-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/settings/tokens",
        class: [
          "font-heading xs:border-b-[3px] flex w-full cursor-pointer py-2 text-sm md:border-e-[3px]",
          unref(isTokens) ? "text-muted-800 dark:text-muted-100 border-primary-500" : "text-muted-500 dark:text-muted-400 border-transparent"
        ],
        "data-tab": "tab-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0648\u06A9\u0646\u200C\u0647\u0627\u06CC API `);
          } else {
            return [
              createTextVNode(" \u062A\u0648\u06A9\u0646\u200C\u0647\u0627\u06CC API ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="md:col-span-9 lg:col-span-9">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
