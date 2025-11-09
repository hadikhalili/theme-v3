import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { o as onClickOutside, f as _sfc_main$C, a as __nuxt_component_2, d as _sfc_main$D, b as _sfc_main$w, e as _sfc_main$e, c as _sfc_main$v } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "DemoTopnavWorkspaceDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const workspaces = ref([
      {
        id: 1,
        name: "\u0646\u06CC\u062A\u0631\u0648 \u0627\u06CC\u0646\u06A9.",
        logo: "/img/icons/logos/nitro.svg"
      },
      {
        id: 2,
        name: "\u0627\u0648\u06A9\u0627\u0646\u0648 \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F",
        logo: "/img/icons/logos/okano.svg"
      },
      {
        id: 3,
        name: "\u0641\u0644\u0634\u0644\u0627\u06CC\u062A \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F",
        logo: "/img/icons/logos/flashlite.svg"
      }
    ]);
    const selectedWorkspace = ref(workspaces.value[0]);
    const target = ref(null);
    const open = ref(false);
    onClickOutside(target, () => open.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "target",
        ref: target,
        class: "group/workspace relative z-10 ms-auto w-full max-w-[170px] md:ms-0 md:max-w-[240px]"
      }, _attrs))}><button type="button" class="${ssrRenderClass([unref(open) && "bg-muted-100 dark:bg-muted-900/60", "group-hover/workspace:bg-muted-100 dark:group-hover/workspace:bg-muted-900/60 w-full max-w-[170px] rounded-xl py-2 pe-3 ps-2 transition-colors duration-300 md:max-w-[240px]"])}"><span class="flex w-full items-center gap-3 text-start">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xxs",
        src: unref(selectedWorkspace).logo
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-800 dark:text-muted-200 line-clamp-1 block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(selectedWorkspace).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(selectedWorkspace).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevrons-up-down",
        class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", unref(open) && "rotate-180"]
      }, null, _parent));
      _push(`</span></button>`);
      if (unref(open)) {
        _push(`<div class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute end-0 top-12 w-full min-w-[280px] overflow-hidden rounded-xl border bg-white shadow-xl md:start-0 md:min-w-[575px]"><div class="md:divide-muted-200 md:dark:divide-muted-700 grid grid-cols-1 md:grid-cols-2 md:divide-x rtl:divide-x-reverse"><div><div class="border-muted-200 dark:border-muted-700 flex items-center border-b">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          icon: "lucide:search",
          placeholder: "\u06CC\u0627\u0641\u062A\u0646 \u062A\u06CC\u0645...",
          classes: {
            input: "border-none !outline-none !bg-transparent"
          }
        }, null, _parent));
        _push(`<button type="button" class="border-muted-200 dark:border-muted-700 me-2 ms-auto rounded-lg border px-2 py-1">`);
        _push(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Esc `);
            } else {
              return [
                createTextVNode(" Esc ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button></div><div class="flex h-[calc(100%_-_2.5rem)] flex-col p-3">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0641\u0636\u0627\u0647\u0627\u06CC \u06A9\u0627\u0631\u06CC `);
            } else {
              return [
                createTextVNode(" \u0641\u0636\u0627\u0647\u0627\u06CC \u06A9\u0627\u0631\u06CC ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="my-3"><ul class="space-y-1"><!--[-->`);
        ssrRenderList(unref(workspaces), (workspace) => {
          _push(`<li><button type="button" class="hover:bg-muted-100 dark:hover:bg-muted-800 flex w-full items-center gap-2 rounded-lg py-2 pe-4 ps-2 transition-colors duration-200">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            size: "xxs",
            src: workspace.logo
          }, null, _parent));
          _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(workspace.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(workspace.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (unref(selectedWorkspace) === workspace) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-primary-500 ms-auto size-4"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</button></li>`);
        });
        _push(`<!--]--></ul></div><div class="mt-auto">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          rounded: "md",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "me-2 size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0627\u06CC\u062C\u0627\u062F \u0641\u0636\u0627\u06CC \u06A9\u0627\u0631\u06CC</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:plus",
                  class: "me-2 size-4"
                }),
                createVNode("span", null, "\u0627\u06CC\u062C\u0627\u062F \u0641\u0636\u0627\u06CC \u06A9\u0627\u0631\u06CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="hidden md:block"><div class="border-muted-200 dark:border-muted-700 flex items-center border-b">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          icon: "lucide:search",
          placeholder: "\u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F...",
          classes: {
            input: "border-none !outline-none !bg-transparent"
          }
        }, null, _parent));
        _push(`<button type="button" class="border-muted-200 dark:border-muted-700 me-2 ms-auto rounded-lg border px-2 py-1">`);
        _push(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Esc `);
            } else {
              return [
                createTextVNode(" Esc ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button></div><div class="flex h-[calc(100%_-_2.5rem)] flex-col p-3">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 `);
            } else {
              return [
                createTextVNode(" \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="my-3"><ul><li><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          size: "sm",
          weight: "medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0647\u0646\u0648\u0632 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0646\u06CC\u0633\u062A `);
            } else {
              return [
                createTextVNode(" \u0647\u0646\u0648\u0632 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0646\u06CC\u0633\u062A ")
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
              _push2(` \u0627\u06CC\u0646 \u0641\u0636\u0627\u06CC \u06A9\u0627\u0631\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0646\u062F\u0627\u0631\u062F. `);
            } else {
              return [
                createTextVNode(" \u0627\u06CC\u0646 \u0641\u0636\u0627\u06CC \u06A9\u0627\u0631\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0646\u062F\u0627\u0631\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></li></ul></div><div class="mt-auto">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          rounded: "md",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "me-2 size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0627\u06CC\u062C\u0627\u062F \u067E\u0631\u0648\u0698\u0647</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:plus",
                  class: "me-2 size-4"
                }),
                createVNode("span", null, "\u0627\u06CC\u062C\u0627\u062F \u067E\u0631\u0648\u0698\u0647")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoTopnavWorkspaceDropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
