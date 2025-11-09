import { _ as _sfc_main$1 } from './DemoPlaceholderMinimal-0TDRe2Dy.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { j as useRoute, u as useRouter, t as usePanels, f as _sfc_main$C, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(45);
    usePanels();
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/accounts", {
      query
    }, "$gApT6pKKX5")), __temp = await __temp, __restore(), __temp);
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPlaceholderMinimal = _sfc_main$1;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="py-6"><p class="font-heading text-muted-400 mb-1 text-xs"> \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0644 </p><h3 class="font-heading text-muted-800 dark:text-muted-100 mb-1 text-3xl font-medium"> \u06F1\u06F5,\u06F3\u06F8\u06F9.\u06F2\u06F2 \u062A\u0648\u0645\u0627\u0646 </h3></div>`);
      if (unref(data)?.data?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
          description: "\u0634\u0645\u0627 \u0647\u06CC\u0686 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u06A9\u0627\u0645\u0644 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0644\u0637\u0641\u0627\u064B \u0628\u0639\u062F\u0627\u064B \u0628\u0631\u06AF\u0631\u062F\u06CC\u062F."
        }, null, _parent));
      } else {
        _push(`<ul class="max-w-2xl"><li><div class="border-muted-200 dark:border-muted-800 flex w-full max-w-2xl gap-x-4 border-b px-3 py-2"><div class="w-3/5"><span class="font-heading text-muted-400 mb-1 text-xs">\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC</span></div><div class="w-1/5"><span class="font-heading text-muted-400 mb-1 text-xs">\u0645\u0648\u062C\u0648\u062F\u06CC</span></div><div class="hidden md:w-1/5"><span class="font-heading text-muted-400 mb-1 text-xs"> \u0642\u0648\u0627\u0646\u06CC\u0646 \u0627\u0646\u062A\u0642\u0627\u0644 </span></div></div></li><!--[-->`);
        ssrRenderList(unref(data)?.data, (account) => {
          _push(`<li role="button" tabindex="0" class="hover:bg-muted-200 dark:hover:bg-muted-800 cursor-pointer px-3 transition-colors duration-300"><div class="border-muted-200 dark:border-muted-800 flex w-full max-w-2xl items-center gap-x-4 border-b py-4"><div class="w-3/5"><div class="flex w-full items-center gap-3">`);
          _push(ssrRenderComponent(_component_TairoLogo, { class: "text-muted-400 size-8" }, null, _parent));
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            class: "text-muted-800 dark:text-muted-200"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(account.type)} ${ssrInterpolate(account.number)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(account.type) + " " + toDisplayString(account.number), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><div class="w-2/5 md:w-1/5">`);
          _push(ssrRenderComponent(_component_BaseText, { class: "text-muted-800 dark:text-muted-200" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(account.balance.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
              } else {
                return [
                  createTextVNode(toDisplayString(account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="hidden md:block md:w-1/5">`);
          _push(ssrRenderComponent(_component_BaseButton, {
            to: "/layouts/accounts/rules",
            rounded: "md",
            size: "sm",
            onClick: () => {
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:edit-3",
                  class: "size-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="font-heading text-sm"${_scopeId}>\u0642\u0627\u0646\u0648\u0646 \u062C\u062F\u06CC\u062F</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "lucide:edit-3",
                    class: "size-4"
                  }),
                  createVNode("span", { class: "font-heading text-sm" }, "\u0642\u0627\u0646\u0648\u0646 \u062C\u062F\u06CC\u062F")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></li>`);
        });
        _push(`<!--]--><li class="hover:bg-muted-200 dark:hover:bg-muted-800 cursor-pointer px-3 transition-colors duration-300"><div class="border-muted-200 dark:border-muted-800 group flex w-full items-center gap-x-4 border-b py-4"><div class="w-3/5"><div class="flex w-full items-center gap-3"><div class="text-muted-500 bg-muted-100 dark:bg-muted-800 group-hover:bg-primary-500 flex size-8 items-center justify-center rounded-full transition-colors duration-300 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:plus",
          class: "size-4"
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: "text-muted-400 dark:text-muted-500 group-hover:text-muted-600 dark:group-hover:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u062D\u0633\u0627\u0628 `);
            } else {
              return [
                createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u062D\u0633\u0627\u0628 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></li></ul>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/accounts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
