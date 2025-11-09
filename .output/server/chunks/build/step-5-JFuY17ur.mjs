import { _ as _sfc_main$1 } from './DemoWizardStepTitle-DDg6AMcY.mjs';
import { Q as useHead, l as _sfc_main$3, d as _sfc_main$D, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$5 } from './BaseProgress-Bi06w8MA.mjs';
import { defineComponent, ref, watchEffect, unref, withCtx, createVNode, isRef, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/img/illustrations/wizard/team.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-5",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0639\u0636\u0648 \u062A\u06CC\u0645"
    });
    const { data: project, checkPreviousSteps } = useMultiStepForm();
    const toggled = ref(false);
    const team = [
      {
        picture: "/img/avatars/16.svg",
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
        role: void 0
      },
      {
        picture: "/img/avatars/10.svg",
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
        role: void 0
      },
      {
        picture: "/img/avatars/3.svg",
        name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
        role: void 0
      },
      {
        picture: "/img/avatars/5.svg",
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
        role: void 0
      },
      {
        picture: "/img/avatars/8.svg",
        name: "\u0627\u062F\u06CC \u0641\u06CC\u0634\u0631",
        role: void 0
      }
    ];
    const search = ref("");
    const filteredUsers = ref([]);
    function addTeammate(teammate) {
      project.value.team?.push({
        ...teammate,
        role: "reader"
      });
      search.value = "";
    }
    function removeTeammate(index) {
      if (project.value.team) {
        project.value.team.splice(index, 1);
      }
    }
    function getRoleLevel(teammate) {
      switch (teammate.role) {
        case "collaborator":
          return 1;
        case "manager":
          return 2;
        case "owner":
          return 3;
        case "reader":
        default:
          return 0;
      }
    }
    watchEffect(() => {
      const teamRef = project.value.team;
      if (!search.value) {
        filteredUsers.value = [];
        return;
      }
      filteredUsers.value = team.filter((item) => {
        return !teamRef?.find((_item) => {
          return item.name === _item.name;
        });
      }).filter((item) => item.name.match(new RegExp(search.value, "i")));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseProgress = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="px-4">`);
      if (!unref(toggled)) {
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "\u062F\u0639\u0648\u062A \u0627\u0641\u0631\u0627\u062F",
          subtitle: "\u0647\u0645\u06A9\u0627\u0631\u06CC \u0631\u0627 \u0628\u0627 \u062F\u0639\u0648\u062A \u0627\u0639\u0636\u0627\u06CC \u062A\u06CC\u0645 \u0628\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0622\u063A\u0627\u0632 \u06A9\u0646\u06CC\u062F. \u0646\u06AF\u0631\u0627\u0646 \u0646\u0628\u0627\u0634\u06CC\u062F\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u06CC\u0646 \u06A9\u0627\u0631 \u0631\u0627 \u0628\u0639\u062F\u0627\u064B \u0647\u0645 \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u06CC\u062F."
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} class="mx-auto max-w-[210px] rounded-full" alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  class: "mx-auto max-w-[210px] rounded-full",
                  alt: ""
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-2 text-center"${_scopeId}><button type="button" class="text-primary-500 font-sans underline underline-offset-4"${_scopeId}> \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0627\u0639\u0636\u0627 </button></div>`);
            } else {
              return [
                createVNode("div", { class: "mt-2 text-center" }, [
                  createVNode("button", {
                    type: "button",
                    class: "text-primary-500 font-sans underline underline-offset-4",
                    onClick: ($event) => toggled.value = true
                  }, " \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0627\u0639\u0636\u0627 ", 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="relative mx-auto max-w-5xl"><div class="flex w-full flex-col items-center">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          size: "xl",
          src: "/img/avatars/2.svg",
          "badge-src": "/img/icons/flags/united-states-of-america.svg"
        }, null, _parent));
        _push(`<p class="text-muted-400 my-3 font-sans text-sm"> \u0634\u0645\u0627 \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u06CC\u062F </p><div class="relative w-full max-w-sm">`);
        _push(ssrRenderComponent(_component_BaseInput, {
          modelValue: unref(search),
          "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
          icon: "lucide:search",
          rounded: "lg",
          placeholder: "\u0645\u062B\u0627\u0644: \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627\u060C \u06A9\u0646\u062F\u0631\u0627\u060C ...",
          classes: {
            wrapper: "w-full relative z-10",
            input: "h-12 text-base !ps-12",
            icon: "h-12 w-12"
          }
        }, null, _parent));
        _push(`<div class="${ssrRenderClass([
          unref(search).length > 0 ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1",
          "border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-14 z-20 w-full rounded-xl border bg-white p-4 shadow-xl transition-all duration-300"
        ])}">`);
        if (unref(filteredUsers).length > 0) {
          _push(`<div class="nui-slimscroll max-h-[186px] space-y-2 overflow-y-auto"><!--[-->`);
          ssrRenderList(unref(filteredUsers), (user) => {
            _push(`<div role="button" class="hover:bg-muted-100 flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2">`);
            _push(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              src: user.picture
            }, null, _parent));
            _push(`<div class="flex flex-col"><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"> \u062F\u0639\u0648\u062A </h3><p class="text-muted-500 dark:text-muted-400 font-sans text-xs">${ssrInterpolate(user.name)}</p></div><div class="ms-auto">`);
            _push(ssrRenderComponent(_component_BaseButtonIcon, {
              small: "",
              rounded: "full",
              onClick: ($event) => addTeammate(user)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-4"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mx-auto mt-8 w-full max-w-2xl pb-40">`);
        if (unref(project).team && unref(project).team.length > 0) {
          _push(`<div class="w-full space-y-2"><!--[-->`);
          ssrRenderList(unref(project).team, (member, idx) => {
            _push(`<div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-4">`);
            _push(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              src: member.picture
            }, null, _parent));
            _push(`<div class="flex flex-col"><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"> \u062F\u0639\u0648\u062A \u0634\u062F\u0647 </h3><p class="text-muted-500 dark:text-muted-400 font-sans text-xs">${ssrInterpolate(member.name)}</p></div><div class="ms-auto"><div class="relative flex w-48 justify-between"><div role="button" class="relative z-10 shrink-0" data-nui-tooltip="Reader" tabindex="0"><div class="${ssrRenderClass([[
              getRoleLevel(member) >= 0 ? "bg-primary-500" : "bg-muted-300 dark:bg-muted-700"
            ], "size-3 rounded-full"])}"></div></div><div role="button" class="relative z-10 shrink-0" data-nui-tooltip="\u0647\u0645\u06A9\u0627\u0631" tabindex="0"><div class="${ssrRenderClass([[
              getRoleLevel(member) >= 1 ? "bg-primary-500" : "bg-muted-300 dark:bg-muted-700"
            ], "size-3 rounded-full"])}"></div></div><div role="button" class="relative z-10 shrink-0" data-nui-tooltip="\u0645\u062F\u06CC\u0631" tabindex="0"><div class="${ssrRenderClass([[
              getRoleLevel(member) >= 2 ? "bg-primary-500" : "bg-muted-300 dark:bg-muted-700"
            ], "size-3 rounded-full"])}"></div></div><div role="button" class="relative z-10 shrink-0" data-nui-tooltip="Owner" tabindex="0"><div class="${ssrRenderClass([[
              getRoleLevel(member) >= 3 ? "bg-primary-500" : "bg-muted-300 dark:bg-muted-700"
            ], "size-3 rounded-full"])}"></div></div><div class="absolute top-1/2 w-full -translate-y-1/2">`);
            _push(ssrRenderComponent(_component_BaseProgress, {
              size: "xs",
              value: getRoleLevel(member),
              max: 3
            }, null, _parent));
            _push(`</div></div></div><div class="ms-8">`);
            _push(ssrRenderComponent(_component_BaseButtonIcon, {
              small: "",
              rounded: "full",
              onClick: ($event) => removeTeammate(idx)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:x",
                    class: "size-4"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
