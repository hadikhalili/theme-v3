import { j as useRoute, u as useRouter, t as usePanels, a as __nuxt_component_2, f as _sfc_main$C, c as _sfc_main$v } from './server.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
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
  __name: "rules",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/accounts/rules",
      {
        query
      },
      "$jTeCNJ4cgr"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(data)?.data?.length === 0) {
        _push(`<div class="mb-8"><p class="font-heading text-muted-500 dark:text-muted-500 text-sm"> \u0634\u0645\u0627 \u0647\u06CC\u0686 \u0642\u0627\u0646\u0648\u0646\u06CC \u0641\u0639\u0627\u0644 \u0646\u062F\u0627\u0631\u06CC\u062F </p></div>`);
      } else {
        _push(`<div class="mb-8"></div>`);
      }
      _push(`<div class="bg-muted-200 dark:bg-muted-800 w-full max-w-3xl rounded-xl px-10 py-8"><div class="space-y-4"><h4 class="font-heading text-muted-500 dark:text-muted-500 text-sm"> \u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u0642\u0627\u0646\u0648\u0646 </h4><div class="grid grid-cols-12 gap-8"><div class="col-span-5"><button type="button" class="dark:bg-muted-900 shadow-muted-300/10 dark:shadow-muted-800/10 group flex w-full cursor-pointer items-center gap-2 rounded-xl bg-white p-4 shadow-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 size-4 transition-colors duration-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:diamonds-four-duotone",
        class: "iconify text-muted-400 group-hover:text-primary-500 size-6 transition-colors duration-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0642\u0627\u0646\u0648\u0646 \u062A\u0648\u0627\u0632\u0646 \u0647\u062F\u0641 `);
          } else {
            return [
              createTextVNode(" \u0642\u0627\u0646\u0648\u0646 \u062A\u0648\u0627\u0632\u0646 \u0647\u062F\u0641 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="col-span-7"><div class="flex size-full flex-col justify-center">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628\u06CC \u0628\u0627 \u062A\u0639\u0627\u062F\u0644 \u0647\u062F\u0641\u200C\u06AF\u0630\u0627\u0631\u06CC \u0634\u062F\u0647 \u0646\u06AF\u0647\u200C\u062F\u0627\u0631\u06CC\u062F \u0628\u0627 \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u062C\u0648\u0647 \u0628\u0647 \u06CC\u0627 \u0627\u0632 \u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 \u0647\u0631 \u0631\u0648\u0632. `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628\u06CC \u0628\u0627 \u062A\u0639\u0627\u062F\u0644 \u0647\u062F\u0641\u200C\u06AF\u0630\u0627\u0631\u06CC \u0634\u062F\u0647 \u0646\u06AF\u0647\u200C\u062F\u0627\u0631\u06CC\u062F \u0628\u0627 \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u062C\u0648\u0647 \u0628\u0647 \u06CC\u0627 \u0627\u0632 \u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 \u0647\u0631 \u0631\u0648\u0632. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-12 gap-8"><div class="col-span-5"><button type="button" class="dark:bg-muted-900 shadow-muted-300/10 dark:shadow-muted-800/10 group flex w-full cursor-pointer items-center gap-2 rounded-xl bg-white p-4 shadow-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 size-4 transition-colors duration-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:compass-duotone",
        class: "iconify text-muted-400 group-hover:text-primary-500 size-6 transition-colors duration-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0642\u0627\u0646\u0648\u0646 \u0645\u0648\u062C\u0648\u062F\u06CC \u0635\u0641\u0631 `);
          } else {
            return [
              createTextVNode(" \u0642\u0627\u0646\u0648\u0646 \u0645\u0648\u062C\u0648\u062F\u06CC \u0635\u0641\u0631 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="col-span-7"><div class="flex size-full flex-col justify-center">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628 \u0631\u0627 \u0628\u0627 \u0645\u0648\u062C\u0648\u062F\u06CC \u06F0 \u062A\u0648\u0645\u0627\u0646 \u062D\u0641\u0638 \u06A9\u0646\u06CC\u062F \u0628\u0627 \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u062C\u0648\u0647 \u0648\u0631\u0648\u062F\u06CC \u0628\u0647 \u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 \u0628\u0639\u062F \u0627\u0632 \u0647\u0631 \u062A\u0631\u0627\u06A9\u0646\u0634. `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628 \u0631\u0627 \u0628\u0627 \u0645\u0648\u062C\u0648\u062F\u06CC \u06F0 \u062A\u0648\u0645\u0627\u0646 \u062D\u0641\u0638 \u06A9\u0646\u06CC\u062F \u0628\u0627 \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u062C\u0648\u0647 \u0648\u0631\u0648\u062F\u06CC \u0628\u0647 \u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 \u0628\u0639\u062F \u0627\u0632 \u0647\u0631 \u062A\u0631\u0627\u06A9\u0646\u0634. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/accounts/rules.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
