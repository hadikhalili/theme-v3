import { _ as _sfc_main$1 } from './DemoPlaceholderMinimal-0TDRe2Dy.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { j as useRoute, u as useRouter, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseTag-CQSmGSbm.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
  __name: "incoming",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/payments/incoming",
      {
        query
      },
      "$zXiEG8iEcX"
    )), __temp = await __temp, __restore(), __temp);
    const completed = computed(() => {
      return data?.value?.data.filter((item) => item.status === "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647");
    });
    const active = computed(() => {
      return data?.value?.data.filter((item) => item.status !== "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647");
    });
    function statusColor(itemStatus) {
      switch (itemStatus) {
        case "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647":
          return "default";
        case "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644":
          return "success";
        case "\u0627\u0631\u0633\u0627\u0644 \u0634\u062F":
          return "info";
        case "\u0628\u0627\u0632 \u0634\u062F\u0647":
          return "primary";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPlaceholderMinimal = _sfc_main$1;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseTag = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 w-full" }, _attrs))}><div class="space-y-10"><div class="mb-16 w-full"><h3 class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"> \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A\u06CC </h3>`);
      if (unref(completed)?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
          description: "\u0634\u0645\u0627 \u0647\u06CC\u0686 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u06A9\u0627\u0645\u0644 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0644\u0637\u0641\u0627\u064B \u0628\u0639\u062F\u0627\u064B \u0628\u0631\u06AF\u0631\u062F\u06CC\u062F."
        }, null, _parent));
      } else {
        _push(`<div class="mt-7 overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-1/5"><span>\u0627\u06CC\u062C\u0627\u062F \u0634\u062F\u0647</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-2/5"><span>\u062A\u0645\u0627\u0633</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0645\u0642\u062F\u0627\u0631</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0648\u0636\u0639\u06CC\u062A</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0627\u0642\u062F\u0627\u0645\u0627\u062A</span></th></thead><tbody><!--[-->`);
        ssrRenderList(unref(completed), (item, index) => {
          _push(`<tr tabindex="0" class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300"><td class="p-4"><span class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none">${ssrInterpolate(item.date)}</span></td><td class="p-4"><div class="me-5 flex items-center gap-2 md:me-0">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            rounded: "full",
            size: "xs",
            src: item.recipient.photo,
            class: "bg-muted-100 dark:bg-muted-700/60"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            lead: "none",
            weight: "medium",
            class: "text-muted-500 dark:text-muted-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.recipient.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.recipient.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></td><td class="p-4"><span class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none">${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </span></td><td class="p-4"><span class="text-muted-400 font-sans text-sm font-medium leading-none">${ssrInterpolate(item.account)}</span></td><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseTag, {
            variant: item.status === "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647" ? "solid" : "pastel",
            rounded: "full",
            color: index > 6 ? "muted" : statusColor(item.status),
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.status)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.status), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4 text-end">`);
          _push(ssrRenderComponent(_component_BaseButton, {
            rounded: "md",
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u062C\u0632\u0626\u06CC\u0627\u062A `);
              } else {
                return [
                  createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div><div class="w-full"><h3 class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"> \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A </h3>`);
      if (unref(active)?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u0628\u062F\u0648\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A",
          description: "Yo have no payment requests pending. Please come back later."
        }, null, _parent));
      } else {
        _push(`<div class="mt-7 overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-1/5"><span>\u0627\u06CC\u062C\u0627\u062F \u0634\u062F\u0647</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-2/5"><span>\u062A\u0645\u0627\u0633</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0645\u0642\u062F\u0627\u0631</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0648\u0636\u0639\u06CC\u062A</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0627\u0642\u062F\u0627\u0645\u0627\u062A</span></th></thead><tbody><!--[-->`);
        ssrRenderList(unref(active), (item, index) => {
          _push(`<tr tabindex="0" class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300"><td class="p-4"><span class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none">${ssrInterpolate(item.date)}</span></td><td class="p-4"><div class="me-5 flex items-center gap-2 md:me-0">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            rounded: "full",
            size: "xs",
            src: item.recipient.photo,
            class: "bg-muted-100 dark:bg-muted-700/60"
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            lead: "none",
            weight: "medium",
            class: "text-muted-500 dark:text-muted-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.recipient.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.recipient.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></td><td class="p-4"><span class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none">${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </span></td><td class="p-4"><span class="text-muted-400 font-sans text-sm font-medium leading-none">${ssrInterpolate(item.account)}</span></td><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseTag, {
            variant: item.status === "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647" ? "solid" : "pastel",
            rounded: "full",
            color: index > 6 ? "muted" : statusColor(item.status),
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.status)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.status), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4 text-end">`);
          _push(ssrRenderComponent(_component_BaseButton, {
            color: "muted",
            rounded: "md",
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0644\u063A\u0648 `);
              } else {
                return [
                  createTextVNode(" \u0644\u063A\u0648 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/payments/incoming.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
