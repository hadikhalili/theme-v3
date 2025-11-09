import { Q as useHead, o as onClickOutside, a1 as _sfc_main$f, _ as __nuxt_component_0$3, a as __nuxt_component_2, X as __nuxt_component_4, h as _sfc_main$u, e as _sfc_main$e } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$3 } from './BaseThemeToggle-xWG13Wev.mjs';
import _sfc_main$4 from './DemoAccountMenu-C3x7udSm.mjs';
import { _ as _sfc_main$5 } from './BaseProgress-Bi06w8MA.mjs';
import { p as provideMultiStepForm, u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, withModifiers, unref, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useToaster } from './toaster-C48C19qj.mjs';
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
import './virtual_public-CbxAoqtm.mjs';
import './user-DDZJ47NJ.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoWizardNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      steps,
      currentStep,
      progress,
      goToStep
    } = useMultiStepForm();
    const target = ref(null);
    const open = ref(false);
    onClickOutside(target, () => open.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseThemeToggle = _sfc_main$3;
      const _component_DemoAccountMenu = _sfc_main$4;
      const _component_BaseProgress = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-800 absolute start-0 top-0 h-16 w-full bg-white" }, _attrs))}><div class="relative flex h-16 w-full items-center justify-between px-4"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "border-muted-200 dark:border-muted-700 flex w-14 items-center justify-center border-e pe-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-600 h-10 shrink-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-primary-600 h-10 shrink-0" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden items-center gap-2 ps-6 font-sans sm:flex"><p class="text-muted-500 dark:text-muted-400"> \u0645\u0631\u062D\u0644\u0647 ${ssrInterpolate(unref(currentStep).id + 1)}: </p><h2 class="text-muted-800 font-semibold dark:text-white">${ssrInterpolate(unref(currentStep).meta.name)}</h2></div><div class="relative hidden sm:block"><button type="button" class="flex size-10 items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: ["text-muted-400 size-4 transition-transform duration-300", unref(open) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</button><div class="${ssrRenderClass([
        unref(open) ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1",
        "border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-8 z-20 w-52 rounded-xl border bg-white p-2 shadow-xl transition-all duration-300"
      ])}"><div class="space-y-1"><!--[-->`);
      ssrRenderList(unref(steps), (step) => {
        _push(`<button type="button" class="hover:bg-muted-100 dark:hover:bg-muted-700 flex w-full items-center gap-2 rounded-lg px-3 py-2 font-sans disabled:cursor-not-allowed disabled:opacity-70"><p class="text-muted-500 dark:text-muted-400 text-xs"> \u0645\u0631\u062D\u0644\u0647 ${ssrInterpolate(step.id + 1)}: </p><h4 class="text-muted-800 text-xs font-medium dark:text-white">${ssrInterpolate(step.meta.name)}</h4></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="flex items-center justify-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoAccountMenu, { horizontal: "" }, null, _parent));
      _push(`</div><div class="absolute inset-x-0 bottom-0 z-10 w-full">`);
      _push(ssrRenderComponent(_component_BaseProgress, {
        value: unref(progress),
        size: "xs",
        rounded: "full"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWizardNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoWizardButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      totalSteps,
      currentStepId,
      loading,
      complete,
      getPrevStep
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(currentStepId) > 0 && !unref(complete)) {
        _push(`<div class="fixed inset-x-0 bottom-6 z-20 mx-auto w-full max-w-[304px]">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButton, {
                to: unref(loading) ? void 0 : unref(getPrevStep)()?.to,
                disabled: !unref(getPrevStep)(),
                rounded: "lg",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0642\u0628\u0644\u06CC</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0642\u0628\u0644\u06CC")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(currentStepId) < unref(totalSteps) - 1) {
                _push2(ssrRenderComponent(_component_BaseButton, {
                  type: "submit",
                  rounded: "lg",
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u0627\u062F\u0627\u0645\u0647</span>`);
                    } else {
                      return [
                        createVNode("span", null, "\u0627\u062F\u0627\u0645\u0647")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BaseButton, {
                  type: "submit",
                  rounded: "lg",
                  color: "primary",
                  class: "w-full",
                  loading: unref(loading),
                  disabled: unref(loading)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u067E\u0627\u06CC\u0627\u0646</span>`);
                    } else {
                      return [
                        createVNode("span", null, "\u067E\u0627\u06CC\u0627\u0646")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
            } else {
              return [
                createVNode(_component_BaseButton, {
                  to: unref(loading) ? void 0 : unref(getPrevStep)()?.to,
                  disabled: !unref(getPrevStep)(),
                  rounded: "lg",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0642\u0628\u0644\u06CC")
                  ]),
                  _: 1
                }, 8, ["to", "disabled"]),
                unref(currentStepId) < unref(totalSteps) - 1 ? (openBlock(), createBlock(_component_BaseButton, {
                  key: 0,
                  type: "submit",
                  rounded: "lg",
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u062F\u0627\u0645\u0647")
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_BaseButton, {
                  key: 1,
                  type: "submit",
                  rounded: "lg",
                  color: "primary",
                  class: "w-full",
                  loading: unref(loading),
                  disabled: unref(loading)
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u067E\u0627\u06CC\u0627\u0646")
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWizardButtons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "wizard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (title) => `${title} | \u0648\u06CC\u0632\u0627\u0631\u062F - \u06AF\u0627\u0645 ${currentStepId.value + 1}`
    });
    const initialState = ref({
      type: void 0,
      name: "",
      description: "",
      startDate: void 0,
      endDate: void 0,
      customer: {
        name: void 0,
        logo: void 0,
        location: void 0
      },
      files: null,
      avatar: null,
      team: [],
      tools: [],
      budget: "< 5K"
    });
    const toaster = useToaster();
    const { handleSubmit, currentStepId } = provideMultiStepForm({
      initialState,
      steps: [
        {
          to: "/wizard",
          meta: {
            name: "\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647",
            title: "\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
            subtitle: "\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError(["type"]);
            if (!data.value.type) {
              setFieldError("type", "\u0644\u0637\u0641\u0627\u064B \u0646\u0648\u0639\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F");
            }
          }
        },
        {
          to: "/wizard/step-2",
          meta: {
            name: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0698\u0647",
            title: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u0686\u06CC\u0633\u062A\u061F",
            subtitle: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0628\u0647\u062A\u0631 \u0628\u0627 \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u0645\u0627\u0645 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u067E\u0631\u0648\u0698\u0647"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError(["name"]);
            if (!data.value.name) {
              setFieldError("name", "\u0644\u0637\u0641\u0627\u064B \u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
            }
          }
        },
        {
          to: "/wizard/step-3",
          meta: {
            name: "\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0698\u0647",
            title: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F",
            subtitle: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0645\u0641\u06CC\u062F \u0631\u0627 \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 \u062E\u0648\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u06CC\u0646 \u0631\u0627 \u0628\u0639\u062F\u0627\u064B \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F"
          }
        },
        {
          to: "/wizard/step-4",
          meta: {
            name: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647",
            title: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F",
            subtitle: "\u06CC\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u06CC\u0646 \u0645\u0631\u062D\u0644\u0647 \u0631\u0627 \u0631\u062F \u06A9\u0646\u06CC\u062F. \u0647\u0645\u06CC\u0634\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0639\u062F\u0627\u064B \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F"
          }
        },
        {
          to: "/wizard/step-5",
          meta: {
            name: "\u0639\u0636\u0648 \u062A\u06CC\u0645",
            title: "\u0686\u0647 \u06A9\u0633\u06CC \u0631\u0648\u06CC \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u06A9\u0627\u0631 \u062E\u0648\u0627\u0647\u062F \u06A9\u0631\u062F\u061F",
            subtitle: "\u0628\u0627 \u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0639\u0636\u0627\u06CC \u062A\u06CC\u0645 \u062E\u0648\u062F \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F"
          }
        },
        {
          to: "/wizard/step-6",
          meta: {
            name: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647",
            title: "\u0686\u0647 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC\u06CC \u0631\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0631\u062F\u061F",
            subtitle: "\u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0631\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          }
        },
        {
          to: "/wizard/step-7",
          meta: {
            preview: true,
            name: "\u067E\u0627\u06CC\u0627\u0646",
            title: "\u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u06A9\u0647 \u062E\u0648\u0628 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F",
            subtitle: "\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0645\u0631\u0627\u062D\u0644 \u0642\u0628\u0644\u06CC \u0628\u0631\u06AF\u0631\u062F\u06CC\u062F \u0627\u06AF\u0631 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0686\u06CC\u0632\u06CC \u062F\u0627\u0631\u06CC\u062F"
          }
        }
      ],
      onSubmit: async (state, ctx) => {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
        toaster.clearAll();
        toaster.show({
          title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
          message: `\u067E\u0631\u0648\u0698\u0647 ${state.name} \u0627\u06CC\u062C\u0627\u062F \u0634\u062F!`,
          color: "success",
          icon: "ph:check",
          closable: true
        });
      },
      onError: (error) => {
        toaster.clearAll();
        toaster.show({
          title: "\u0627\u0648\u0647!",
          message: error.message,
          color: "danger",
          icon: "lucide:alert-triangle",
          closable: true
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$f;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoWizardNavigation = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_4;
      const _component_DemoWizardButtons = _sfc_main$1;
      _push(ssrRenderComponent(_component_TairoSidebarLayout, mergeProps({
        toolbar: false,
        sidebar: false,
        class: "bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
      }, _attrs), {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
              onClick: ($event) => _ctx.$router.back()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "size-5 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "size-5 rtl:rotate-180"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
                onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "size-5 rtl:rotate-180"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoWizardNavigation, null, null, _parent2, _scopeId));
            _push2(`<form action="" method="POST" novalidate${_scopeId}><div class="pb-32 pt-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoWizardButtons, null, null, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(_component_DemoWizardNavigation),
              createVNode("form", {
                action: "",
                method: "POST",
                novalidate: "",
                onSubmit: withModifiers(unref(handleSubmit), ["prevent"])
              }, [
                createVNode("div", { class: "pb-32 pt-24" }, [
                  createVNode(_component_NuxtPage)
                ]),
                createVNode(_component_DemoWizardButtons)
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
