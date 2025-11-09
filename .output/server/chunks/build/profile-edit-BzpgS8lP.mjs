import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3, a as __nuxt_component_2, X as __nuxt_component_4 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "profile-edit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$P5Z475ujdg")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtPage = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen overflow-hidden" }, _attrs))}><div class="grid gap-8 sm:grid-cols-12"><div class="col-span-12 sm:col-span-4"><div class="flex w-full items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: unref(data)?.personalInfo.picture,
        "badge-src": unref(data)?.personalInfo.badge,
        size: "md"
      }, null, _parent));
      _push(`<div class="">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h2",
        size: "md",
        weight: "medium",
        lead: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(data)?.personalInfo.firstName)} ${ssrInterpolate(unref(data)?.personalInfo.lastName)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(data)?.personalInfo.firstName) + " " + toDisplayString(unref(data)?.personalInfo.lastName), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(data)?.personalInfo.role)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(data)?.personalInfo.role), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 max-w-[240px]"><ul class="space-y-1 font-sans text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:user-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0639\u0645\u0648\u0645\u06CC</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:user-duotone",
                class: "size-4"
              }),
              createVNode("span", null, "\u0639\u0645\u0648\u0645\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit/experience",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:buildings-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u062A\u062C\u0631\u0628\u0647</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:buildings-duotone",
                class: "size-4"
              }),
              createVNode("span", null, "\u062A\u062C\u0631\u0628\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit/skills",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:sketch-logo-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:sketch-logo-duotone",
                class: "size-4"
              }),
              createVNode("span", null, "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/profile-edit/settings",
        "exact-active-class": "!text-primary-500 !bg-primary-500/10",
        class: "text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hover:bg-muted-50 dark:hover:bg-muted-700/50 flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:gear-six-duotone",
                class: "size-4"
              }),
              createVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="col-span-12 sm:col-span-8">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
