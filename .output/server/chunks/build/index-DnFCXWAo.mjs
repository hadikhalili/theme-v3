import { _ as _sfc_main$1 } from './DemoPlaceholderMinimal-0TDRe2Dy.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { j as useRoute, u as useRouter, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
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
  __name: "index",
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
      "/api/payments/outgoing",
      {
        query
      },
      "$isTg0ffTDV"
    )), __temp = await __temp, __restore(), __temp);
    const toApprove = computed(() => {
      return data?.value?.data.filter((item) => item.status === "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631");
    });
    const scheduled = computed(() => {
      return data?.value?.data.filter((item) => item.status === "scheduled");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPlaceholderMinimal = _sfc_main$1;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 w-full" }, _attrs))}><div class="space-y-10"><div class="w-full"><h3 class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"> \u0646\u06CC\u0627\u0632 \u0628\u0647 \u062A\u0623\u06CC\u06CC\u062F \u062F\u0627\u0631\u062F </h3>`);
      if (unref(toApprove)?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u0647\u06CC\u0686 \u062A\u0623\u06CC\u06CC\u062F\u06CC\u0647\u200C\u0627\u06CC \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u0646\u06CC\u0633\u062A",
          description: "\u0634\u0645\u0627 \u062A\u0623\u06CC\u06CC\u062F\u06CC\u0647\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F. \u0644\u0637\u0641\u0627\u064B \u0628\u0639\u062F\u0627\u064B \u0645\u0631\u0627\u062C\u0639\u0647 \u06A9\u0646\u06CC\u062F."
        }, null, _parent));
      } else {
        _push(`<div class="divide-muted-200 dark:divide-muted-800 mt-3 divide-y"><!--[-->`);
        ssrRenderList(unref(toApprove), (item) => {
          _push(`<div class="hover:bg-muted-200 dark:hover:bg-muted-800 flex flex-col items-center py-3 transition-colors duration-300 md:flex-row"><div class="flex flex-col items-center gap-2 md:flex-row">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            rounded: "full",
            size: "md",
            src: item.recipient.logo,
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
          _push(`</div><div class="flex flex-col items-center gap-6 md:ms-auto md:flex-row"><div><span class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none"> \u0645\u0628\u0644\u063A ${ssrInterpolate(item.amount)} \u062A\u0648\u0645\u0627\u0646 </span></div><div><span class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none">${ssrInterpolate(item.date)}</span></div><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_BaseButton, {
            color: "default",
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
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="w-full"><h3 class="font-heading text-muted-800 dark:text-muted-200 mb-5 text-xl"> \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC\u200C\u0634\u062F\u0647 </h3>`);
      if (unref(scheduled)?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u0628\u062F\u0648\u0646 \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627\u06CC \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC\u200C\u0634\u062F\u0647",
          description: "\u0634\u0645\u0627 \u0647\u06CC\u0686 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC\u200C\u0634\u062F\u0647\u200C\u0627\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F. \u0644\u0637\u0641\u0627 \u0628\u0639\u062F\u0627 \u0628\u0631\u06AF\u0631\u062F\u06CC\u062F."
        }, null, _parent));
      } else {
        _push(`<div class="divide-muted-200 dark:divide-muted-800 mt-3 divide-y"><!--[-->`);
        ssrRenderList(unref(scheduled), (item) => {
          _push(`<div class="hover:bg-muted-200 dark:hover:bg-muted-800 flex flex-col items-center py-3 transition-colors duration-300 md:flex-row md:px-3"><div class="flex flex-col items-center gap-2 md:flex-row">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            rounded: "full",
            size: "md",
            src: item.recipient.logo,
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
          _push(`</div><div class="flex flex-col items-center gap-6 md:ms-auto md:flex-row"><div><span class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium leading-none"> \u0645\u0628\u0644\u063A ${ssrInterpolate(item.amount)} \u062A\u0648\u0645\u0627\u0646 </span></div><div><span class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none">${ssrInterpolate(item.date)}</span></div><div class="flex items-center gap-2">`);
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
          _push(ssrRenderComponent(_component_BaseButton, {
            rounded: "md",
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0627\u06A9\u0646\u0648\u0646 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u062F `);
              } else {
                return [
                  createTextVNode(" \u0627\u06A9\u0646\u0648\u0646 \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u062F ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/payments/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
