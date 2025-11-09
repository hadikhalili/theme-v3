import { i as _export_sfc, D as useState, T as useMetaKey, t as usePanels, W as useNinjaWindowScroll, _ as __nuxt_component_0$3, v as __nuxt_component_0$1, a as __nuxt_component_2, e as _sfc_main$e, ah as _sfc_main$p } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseThemeToggle-xWG13Wev.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, unref, createTextVNode, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
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
import './composables-DRJhNAUK.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    useState("search-open", () => false);
    const isMobileOpen = ref(false);
    const metaKey = useMetaKey();
    usePanels();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseThemeToggle = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nav ltablet:max-w-[1000px] ptablet:max-w-[47rem] fixed inset-x-0 top-0 z-50 mx-auto max-w-[350px] group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 lg:max-w-7xl" }, _attrs))}><div class="group-[&amp;.scrolled]/landing:dark:bg-muted-950/95 group-[&amp;.scrolled]/landing:border-muted-200 group-[&amp;.scrolled]/landing:dark:border-muted-700 group-[&amp;.scrolled]/landing:motion-safe:shadow-muted-300/30 group-[&amp;.scrolled]/landing:motion-safe:dark:shadow-muted-800/20 flex items-center justify-between rounded-2xl border p-4 group-[&amp;:not(.scrolled)]/landing:border-transparent group-[&amp;.scrolled]/landing:bg-white/95 motion-safe:transition-all motion-safe:duration-200 group-[&amp;.scrolled]/landing:motion-safe:shadow-xl"><div class="flex w-1/2 items-center gap-2 md:w-1/5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "ms-2 inline-flex",
        "aria-label": "Go to Tairo homepage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-primary-500 group-[&.scrolled]/landing:h-6 group-[&:not(.scrolled)]/landing:h-7 motion-safe:transition-all motion-safe:duration-200" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogoText, { class: "text-primary-500 group-[&.scrolled]/landing:h-6 group-[&:not(.scrolled)]/landing:h-7 motion-safe:transition-all motion-safe:duration-200" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[
        unref(isMobileOpen) ? "shadow-muted-300/30 dark:shadow-muted-900/20 group-[&.scrolled]/landing:ltablet:mt-0 group-[&:not(.scrolled)]/landing:ltablet:mt-0 flex flex-col space-y-4 rounded-xl p-6 shadow-xl group-[&.scrolled]/landing:mt-2 group-[&:not(.scrolled)]/landing:mt-4 motion-safe:transition-all motion-safe:duration-200 group-[&.scrolled]/landing:lg:mt-0 group-[&:not(.scrolled)]/landing:lg:mt-0" : "hidden"
      ], "ltablet:static ltablet:w-auto ltablet:flex ltablet:flex-row dark:bg-muted-950 ltablet:!bg-transparent ltablet:mx-0 fixed inset-x-0 top-20 mx-auto w-[calc(100%_-_2rem)] items-center justify-center bg-white lg:static lg:mx-0 lg:flex lg:w-auto lg:flex-row lg:!bg-transparent"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/demos",
        class: "inline-flex items-center justify-center px-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0635\u0641\u062D\u0627\u062A \u0627\u0632 \u067E\u06CC\u0634 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 `);
          } else {
            return [
              createTextVNode(" \u0635\u0641\u062D\u0627\u062A \u0627\u0632 \u067E\u06CC\u0634 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://tairo.cssninja.io/documentation",
        class: "inline-flex items-center justify-center px-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0633\u062A\u0646\u062F\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u0645\u0633\u062A\u0646\u062F\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="px-6"><button type="button" class="group-[&amp;.scrolled]/landing:bg-muted-100 group-[&amp;.scrolled]/landing:dark:bg-muted-900 group-[&amp;.scrolled]/landing:border-muted-100 group-[&amp;.scrolled]/landing:dark:border-muted-800 group-[&amp;.scrolled]/landing:text-muted-400 group-[&amp;.scrolled]/landing:dark:text-muted-500 group-[&amp;.scrolled]/landing:hover:text-primary-500 group-[&amp;.scrolled]/landing:dark:hover:text-primary-500 group-[&amp;:not(.scrolled)]/landing:text-muted-800 group-[&amp;:not(.scrolled)]/landing:dark:text-muted-200 group flex items-center gap-2 rounded-xl py-1 pe-1 ps-3 group-[&amp;.scrolled]/landing:border" aria-label="Open search">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "size-4 motion-safe:transition-colors motion-safe:duration-300"
      }, null, _parent));
      _push(`<span class="group-[&amp;.scrolled]/landing:dark:bg-muted-800 group-[&amp;.scrolled]/landing:border-muted-200 group-[&amp;.scrolled]/landing:dark:border-muted-700 group-[&amp;.scrolled]/landing:group-hover:text-muted-600 group-[&amp;.scrolled]/landing:dark:group-hover:text-muted-100 rounded-lg border px-2 py-0.5 group-[&amp;:not(.scrolled)]/landing:border-transparent group-[&amp;.scrolled]/landing:bg-white group-[&amp;.scrolled]/landing:shadow motion-safe:transition-colors motion-safe:duration-300"><kbd class="font-sans text-sm tracking-wide">${ssrInterpolate(unref(metaKey))} + k </kbd></span></button></div></div><div class="flex w-1/2 items-center justify-end gap-4 md:w-1/5"><button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:drop-half-bottom-duotone",
        class: "text-muted-400 size-5"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, { "aria-label": "Toggle darkmode" }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "lg",
        color: "primary",
        to: "https://go.eltheme.ir/get-tairo",
        class: "ltablet:!flex !hidden lg:!flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0627\u06CC\u0631\u0648 `);
          } else {
            return [
              createTextVNode(" \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0627\u06CC\u0631\u0648 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="ltablet:hidden flex items-center justify-center lg:hidden"${ssrRenderAttr("aria-label", unref(isMobileOpen) ? "Close menu" : "Open menu")}><div class="space-y-1.5"><span class="${ssrRenderClass([unref(isMobileOpen) ? "w-2" : "w-6", "bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"])}"></span><span class="${ssrRenderClass([unref(isMobileOpen) ? "w-6" : "w-6", "bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"])}"></span><span class="${ssrRenderClass([unref(isMobileOpen) ? "w-4" : "w-6", "bg-primary-600 block h-0.5 motion-safe:transition-all motion-safe:duration-300"])}"></span></div></button></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LandingLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingNavbar = _sfc_main$2;
      const _component_TairoPanels = _sfc_main$p;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group/landing overflow-hidden", unref(y) > 60 ? "scrolled" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LandingNavbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LandingLayout = _sfc_main$1;
  _push(ssrRenderComponent(_component_LandingLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { landing as default };
