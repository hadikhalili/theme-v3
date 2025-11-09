import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, f as _sfc_main$C, A as _sfc_main$E } from './server.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import __nuxt_component_0$1 from './TairoLogo-BETVEPG8.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
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
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "amount",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0645\u0642\u062F\u0627\u0631"
    });
    const {
      data: request,
      currentStepId,
      loading,
      getPrevStep,
      errors,
      steps,
      resetFieldError,
      checkPreviousSteps
    } = useMultiStepForm();
    const accounts = ref([
      {
        id: 1,
        type: "\u062C\u0627\u0631\u06CC",
        label: "**** 4897",
        number: "1487 3256 54122 4897",
        balance: 9543.12
      },
      {
        id: 2,
        type: "\u062C\u0627\u0631\u06CC",
        label: "**** 4869",
        number: "3524 65456 3245 4869",
        balance: 1211.67
      },
      {
        id: 3,
        type: "\u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632",
        label: "**** 6279",
        number: "3524 65456 3245 6279",
        balance: 4653.97
      }
    ]);
    function setAccount(account) {
      request.value.account = account;
      resetFieldError("account");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$e;
      const _component_TairoLogo = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseDropdownItem = _sfc_main$1;
      const _component_BaseInputHelpText = _sfc_main$E;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="mb-8 space-y-2">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "2xl",
        weight: "medium",
        class: "md:!3xl text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(steps)[unref(currentStepId)].meta.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(steps)[unref(currentStepId)].meta.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400 max-w-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(steps)[unref(currentStepId)].meta.subtitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(steps)[unref(currentStepId)].meta.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full max-w-md"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseInput, mergeProps({
        modelValue: unref(request).amount,
        "onUpdate:modelValue": ($event) => unref(request).amount = $event,
        type: "number",
        error: unref(errors).fields?.amount,
        rounded: "none",
        icon: "lucide:dollar-sign",
        placeholder: "0.00",
        max: unref(request).account ? unref(request).account.balance : void 0,
        classes: {
          input: "!ps-14 !py-2 !h-14 !text-4xl !leading-5 !border-t-0 !border-s-0  !border-e-0 !border-b-2 focus:!border-primary-500 dark:!bg-muted-900 dark:focus:!border-primary-500",
          icon: "!h-14 !w-14"
        }
      }, ssrGetDirectiveProps(_ctx, _directive_focus)), null, _parent));
      _push(`</div><div class="py-10"><h4 class="font-heading text-muted-600 dark:text-muted-400 mb-4 text-sm"> \u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0632: </h4>`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        rounded: "lg",
        classes: { menuWrapper: "w-full [&>div]:end-0", menu: "!w-full" }
      }, {
        button: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              size: "xl",
              rounded: "lg",
              class: ["!h-auto w-full !p-4", [unref(errors).fields.account ? "!border-danger-500" : ""]]
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="flex w-full items-center gap-3 text-start"${_scopeId2}>`);
                  if (unref(request).account) {
                    _push3(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 size-8" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:wallet",
                      class: "text-muted-500 mx-1 my-2 size-6"
                    }, null, _parent3, _scopeId2));
                  }
                  if (unref(request).account) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-800 dark:text-muted-200 block capitalize"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(request).account.type)} ${ssrInterpolate(unref(request).account.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(request).account.type) + " " + toDisplayString(unref(request).account.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400 block"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(request).account.balance.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(request).account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<span${_scopeId2}> \u06CC\u06A9 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </span>`);
                  }
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-down",
                    class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", open && "rotate-180"]
                  }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", { class: "flex w-full items-center gap-3 text-start" }, [
                      unref(request).account ? (openBlock(), createBlock(_component_TairoLogo, {
                        key: 0,
                        class: "text-primary-500 size-8"
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "lucide:wallet",
                        class: "text-muted-500 mx-1 my-2 size-6"
                      })),
                      unref(request).account ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode(_component_BaseText, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-200 block capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(request).account.type) + " " + toDisplayString(unref(request).account.label), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400 block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(request).account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ]),
                          _: 1
                        })
                      ])) : (openBlock(), createBlock("span", { key: 3 }, " \u06CC\u06A9 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")),
                      createVNode(_component_Icon, {
                        name: "lucide:chevron-down",
                        class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", open && "rotate-180"]
                      }, null, 8, ["class"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                size: "xl",
                rounded: "lg",
                class: ["!h-auto w-full !p-4", [unref(errors).fields.account ? "!border-danger-500" : ""]]
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "flex w-full items-center gap-3 text-start" }, [
                    unref(request).account ? (openBlock(), createBlock(_component_TairoLogo, {
                      key: 0,
                      class: "text-primary-500 size-8"
                    })) : (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "lucide:wallet",
                      class: "text-muted-500 mx-1 my-2 size-6"
                    })),
                    unref(request).account ? (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode(_component_BaseText, {
                        size: "sm",
                        class: "text-muted-800 dark:text-muted-200 block capitalize"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(request).account.type) + " " + toDisplayString(unref(request).account.label), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-500 dark:text-muted-400 block"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(request).account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("span", { key: 3 }, " \u06CC\u06A9 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")),
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-down",
                      class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", open && "rotate-180"]
                    }, null, 8, ["class"])
                  ])
                ]),
                _: 2
              }, 1032, ["class"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(accounts).filter((account) => account.id !== unref(request).account?.id), (account) => {
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                key: account.id,
                title: `${account.type} ${account.label}`,
                text: `${account.balance.toFixed(2)} \u062A\u0648\u0645\u0627\u0646`,
                onClick: ($event) => setAccount(account)
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoLogo, { class: "text-muted-300 dark:text-muted-700 group-hover:text-primary-500 size-8" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TairoLogo, { class: "text-muted-300 dark:text-muted-700 group-hover:text-primary-500 size-8" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts).filter((account) => account.id !== unref(request).account?.id), (account) => {
                return openBlock(), createBlock(_component_BaseDropdownItem, {
                  key: account.id,
                  title: `${account.type} ${account.label}`,
                  text: `${account.balance.toFixed(2)} \u062A\u0648\u0645\u0627\u0646`,
                  onClick: ($event) => setAccount(account)
                }, {
                  start: withCtx(() => [
                    createVNode(_component_TairoLogo, { class: "text-muted-300 dark:text-muted-700 group-hover:text-primary-500 size-8" })
                  ]),
                  _: 2
                }, 1032, ["title", "text", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(errors).fields.account) {
        _push(ssrRenderComponent(_component_BaseInputHelpText, { color: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors).fields.account)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors).fields.account), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-4">`);
      if (unref(currentStepId) > 0) {
        _push(ssrRenderComponent(_component_BaseButton, {
          to: unref(loading) ? void 0 : unref(getPrevStep)()?.to,
          disabled: !unref(getPrevStep)(),
          size: "lg",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0642\u0628\u0644\u06CC</span>`);
            } else {
              return [
                createVNode("span", null, "\u0642\u0628\u0644\u06CC")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        color: "primary",
        size: "lg",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u062F\u0627\u0645\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0627\u062F\u0627\u0645\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/send/amount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
