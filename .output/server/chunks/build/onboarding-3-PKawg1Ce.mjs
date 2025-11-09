import { _ as __nuxt_component_0$3, b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-xWG13Wev.mjs';
import { _ as _sfc_main$2 } from './BaseRadioHeadless-BL03emlX.mjs';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, toDisplayString, useSSRContext } from 'vue';
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
import './composables-DRJhNAUK.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding-3",
  __ssrInlineRender: true,
  setup(__props) {
    const roleType = ref(0);
    const roles = [
      {
        id: 0,
        name: "\u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
        avatar: "/img/avatars/24.svg",
        logo: "/img/stacks/js.svg"
      },
      {
        id: 1,
        name: "Vue",
        avatar: "/img/avatars/2.svg",
        logo: "/img/stacks/vuejs.svg"
      },
      {
        id: 2,
        name: "\u0631\u06CC\u200C\u0627\u06A9\u062A",
        avatar: "/img/avatars/3.svg",
        logo: "/img/stacks/reactjs.svg"
      },
      {
        id: 3,
        name: "\u0627\u0646\u06AF\u0648\u0644\u0627\u0631",
        avatar: "/img/avatars/25.svg",
        logo: "/img/stacks/angular.svg"
      },
      {
        id: 4,
        name: "\u067E\u0627\u06CC\u062A\u0648\u0646",
        avatar: "/img/avatars/11.svg",
        logo: "/img/stacks/python.svg"
      },
      {
        id: 5,
        name: "C#",
        avatar: "/img/avatars/16.svg",
        logo: "/img/stacks/csharp.svg"
      },
      {
        id: 6,
        name: "Ruby",
        avatar: "/img/avatars/20.svg",
        logo: "/img/stacks/ruby.svg"
      },
      {
        id: 7,
        name: "\u0627\u0646\u062F\u0631\u0648\u06CC\u062F",
        avatar: "/img/avatars/21.svg",
        logo: "/img/stacks/android.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseRadioHeadless = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 min-h-screen" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "size-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "size-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><form action="" method="POST" class="mx-auto max-w-7xl px-4"><div><div class="pt-8 text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h2",
        size: "3xl",
        weight: "medium",
        class: "mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06CC\u06A9 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u06CC\u06A9 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06CC\u06A9\u06CC \u0627\u0632 \u0646\u0642\u0634\u200C\u0647\u0627\u06CC \u0632\u06CC\u0631 \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u06CC\u06A9\u06CC \u0627\u0632 \u0646\u0642\u0634\u200C\u0647\u0627\u06CC \u0632\u06CC\u0631 \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><div class="w-full"><div class="mx-auto w-full max-w-3xl"><div class="w-full"><div class="mb-8 grid grid-cols-3 sm:grid-cols-4"><!--[-->`);
      ssrRenderList(roles, (role) => {
        _push(`<div class="relative flex items-center justify-center p-4">`);
        _push(ssrRenderComponent(_component_BaseRadioHeadless, {
          modelValue: unref(roleType),
          "onUpdate:modelValue": ($event) => isRef(roleType) ? roleType.value = $event : null,
          name: `role-${role.id}`,
          value: role.id,
          class: "size-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative mx-auto flex size-20 items-center justify-center grayscale transition-all duration-200 peer-checked:grayscale-0 peer-checked:[&amp;_.child]:opacity-100"${_scopeId}><div class="child dark:bg-muted-900 absolute end-0 top-0 z-20 flex size-6 items-center justify-center rounded-full bg-white opacity-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:check-circle-duotone",
                class: "text-primary-500 size-6"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                size: "xl",
                src: role.avatar,
                "badge-src": role.logo,
                rounded: "full",
                class: "group-focus-within:outline-muted-300 dark:group-focus-within:outline-muted-600 mx-auto group-focus-within:outline-dashed group-focus-within:outline-offset-2"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mt-3 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(role.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(role.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "relative mx-auto flex size-20 items-center justify-center grayscale transition-all duration-200 peer-checked:grayscale-0 peer-checked:[&_.child]:opacity-100" }, [
                  createVNode("div", { class: "child dark:bg-muted-900 absolute end-0 top-0 z-20 flex size-6 items-center justify-center rounded-full bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 size-6"
                    })
                  ]),
                  createVNode(_component_BaseAvatar, {
                    size: "xl",
                    src: role.avatar,
                    "badge-src": role.logo,
                    rounded: "full",
                    class: "group-focus-within:outline-muted-300 dark:group-focus-within:outline-muted-600 mx-auto group-focus-within:outline-dashed group-focus-within:outline-offset-2"
                  }, null, 8, ["src", "badge-src"])
                ]),
                createVNode("div", { class: "mt-3 text-center" }, [
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(role.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="mx-auto flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/dashboards",
        type: "button",
        rounded: "lg",
        class: "!h-12 w-48",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 `);
          } else {
            return [
              createTextVNode(" \u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/onboarding-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
