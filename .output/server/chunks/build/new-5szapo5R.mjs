import { _ as _sfc_main$1 } from './DemoNavigationTop-ObEBtUkj.mjs';
import { b as _sfc_main$w, e as _sfc_main$e, a as __nuxt_component_2, f as _sfc_main$C, A as _sfc_main$E, c as _sfc_main$v } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseMessage-B_09c9Mc.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$3 } from './BaseDropdownItem-vorQzQkQ.mjs';
import __nuxt_component_0$1 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$4 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$5 } from './BaseInputNumber-BvjqvKuw.mjs';
import { _ as _sfc_main$6 } from './DemoCreditCardReal-BWXE4_zQ.mjs';
import { _ as __nuxt_component_0$2 } from './TairoCheckAnimated-802ZeQv1.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
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
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import '@headlessui-float/vue';
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
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
    const VALIDATION_TEXT = {
      DAILY_SPEND_REQUIRED: "\u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0647\u0632\u06CC\u0646\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 \u0631\u0627 \u062A\u0639\u0631\u06CC\u0641 \u06A9\u0646\u06CC\u062F",
      DAILY_WITHDRAW_REQUIRED: "\u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0628\u0631\u062F\u0627\u0634\u062A \u0631\u0648\u0632\u0627\u0646\u0647 \u0631\u0627 \u062A\u0639\u0631\u06CC\u0641 \u06A9\u0646\u06CC\u062F",
      DAILY_LIMIT: "\u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646 \u0628\u0631\u0627\u06CC \u062E\u0631\u062C \u06A9\u0631\u062F\u0646 \u0631\u0648\u0632\u0627\u0646\u0647 \u0645\u062C\u0627\u0632 \u06A9\u0646\u06CC\u062F.",
      ACCOUNT_SELECTION: "\u0628\u0627\u06CC\u062F \u06CC\u06A9 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      OWNER_SELECTION: "\u0628\u0627\u06CC\u062F \u06CC\u06A9 \u0645\u0627\u0644\u06A9 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      BRAND_SELECTION: "\u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u06CC\u06A9 \u0628\u0631\u0646\u062F \u06A9\u0627\u0631\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      TYPE_SELECTION: "\u0628\u0627\u06CC\u062F \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
    };
    const zodSchema = z.object({
      owner: z.string().min(1, VALIDATION_TEXT.OWNER_SELECTION),
      account: z.object({
        id: z.number(),
        number: z.string(),
        type: z.string(),
        label: z.string(),
        balance: z.number()
      }).nullable(),
      brand: z.string().min(1, VALIDATION_TEXT.BRAND_SELECTION),
      type: z.string().min(1, VALIDATION_TEXT.TYPE_SELECTION),
      dailySpend: z.number(),
      dailyWithdraw: z.number()
    }).superRefine((data, ctx) => {
      if (data.account === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.ACCOUNT_SELECTION,
          path: ["account"]
        });
      }
      if (data.dailySpend === null || data.dailySpend <= 50) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.DAILY_LIMIT,
          path: ["dailySpend"]
        });
      }
      if (data.dailyWithdraw === null || data.dailyWithdraw <= 50) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.DAILY_LIMIT,
          path: ["dailyWithdraw"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      owner: "",
      account: null,
      brand: "",
      type: "",
      dailySpend: 0,
      dailyWithdraw: 0
    };
    const {
      handleSubmit,
      isSubmitting,
      setFieldError,
      meta,
      values,
      errors,
      resetForm,
      setFieldValue,
      setErrors
    } = useForm({
      validationSchema,
      initialValues
    });
    const success = ref(false);
    const fieldsWithErrors = computed(() => Object.keys(errors.value).length);
    onBeforeRouteLeave(() => {
      if (meta.value.dirty && !success.value) {
        return confirm("\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("card-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.dailySpend && values2.dailySpend > 5e3) {
              setTimeout(
                () => reject(new Error("\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F")),
                2e3
              );
            }
            setTimeout(resolve, 4e3);
          });
          toaster.clearAll();
          toaster.show({
            title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
            message: `\u06A9\u0627\u0631\u062A \u0627\u06CC\u062C\u0627\u062F \u0634\u062F\u0647 \u0627\u0633\u062A!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F") {
            setFieldError("dailySpend", "\u062D\u062F\u0627\u06A9\u062B\u0631 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0645\u062C\u0627\u0632 \u06F5\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 \u0627\u0633\u062A");
            (void 0).documentElement.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            toaster.clearAll();
            toaster.show({
              title: "\u0627\u0648\u0647!",
              message: "\u0644\u0637\u0641\u0627\u064B \u062E\u0637\u0627\u0647\u0627\u06CC \u0641\u0631\u0645 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F",
              color: "danger",
              icon: "lucide:alert-triangle",
              closable: true
            });
          }
          return;
        }
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        success.value = true;
      },
      (error) => {
        success.value = false;
        console.log("card-create-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoNavigationTop = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseMessage = _sfc_main$2;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$e;
      const _component_TairoLogo = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseDropdownItem = _sfc_main$3;
      const _component_BaseInputHelpText = _sfc_main$E;
      const _component_BaseSelect = _sfc_main$4;
      const _component_BaseInputNumber = _sfc_main$5;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_DemoCreditCardReal = _sfc_main$6;
      const _component_TairoCheckAnimated = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-muted-50 min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DemoNavigationTop, {
        title: "\u06A9\u0627\u0631\u062A \u062C\u062F\u06CC\u062F",
        "close-to": "/layouts/cards"
      }, null, _parent));
      _push(`<div class="w-full pb-20 pt-32"><div class="mx-auto w-full max-w-6xl px-4">`);
      if (!unref(success)) {
        _push(`<div><form action="" method="POST" class="ltablet:gap-16 grid w-full gap-8 md:grid-cols-12 lg:gap-16"><div class="md:col-span-7 lg:col-span-7"><div class="w-full max-w-md"><div class="pb border-muted-200 dark:border-muted-800 border-b">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          size: "xl",
          weight: "medium",
          class: "text-muted-800 mb-8 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062C\u062F\u06CC\u062F `);
            } else {
              return [
                createTextVNode(" \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062C\u062F\u06CC\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(fieldsWithErrors)) {
          _push(`<div class="mt-8">`);
          _push(ssrRenderComponent(_component_BaseMessage, {
            color: "warning",
            icon: "",
            onClose: () => unref(setErrors)({})
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0627\u06CC\u0646 \u0641\u0631\u0645 \u062F\u0627\u0631\u0627\u06CC ${ssrInterpolate(unref(fieldsWithErrors))} \u062E\u0637\u0627 \u0627\u0633\u062A\u060C \u0644\u0637\u0641\u0627\u064B \u0642\u0628\u0644 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u062F. `);
              } else {
                return [
                  createTextVNode(" \u0627\u06CC\u0646 \u0641\u0631\u0645 \u062F\u0627\u0631\u0627\u06CC " + toDisplayString(unref(fieldsWithErrors)) + " \u062E\u0637\u0627 \u0627\u0633\u062A\u060C \u0644\u0637\u0641\u0627\u064B \u0642\u0628\u0644 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646\u200C\u0647\u0627 \u0631\u0627 \u0645\u0631\u0648\u0631 \u06A9\u0646\u06CC\u062F. ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="divide-muted-200 dark:divide-muted-800 space-y-8 divide-y"><div class="pt-8">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-600 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u062D\u0633\u0627\u0628 \u0645\u0631\u062A\u0628\u0637 `);
            } else {
              return [
                createTextVNode(" \u062D\u0633\u0627\u0628 \u0645\u0631\u062A\u0628\u0637 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseDropdown, {
          rounded: "lg",
          classes: { menuWrapper: "w-full [&>div]:end-0", menu: "!w-full" }
        }, {
          button: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButton, {
                size: "xl",
                rounded: "lg",
                class: ["!h-auto w-full !p-4", [unref(errors).account ? "!border-danger-500" : ""]]
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="flex w-full items-center gap-3 text-start"${_scopeId2}>`);
                    if (unref(values)?.account) {
                      _push3(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 size-8" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:wallet",
                        class: "text-muted-500 mx-1 my-2 size-6"
                      }, null, _parent3, _scopeId2));
                    }
                    if (unref(values)?.account) {
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseText, {
                        size: "sm",
                        class: "text-muted-800 dark:text-muted-200 block capitalize"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(values).account.type)} ${ssrInterpolate(unref(values).account.label)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(values).account.type) + " " + toDisplayString(unref(values).account.label), 1)
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
                            _push4(`${ssrInterpolate(unref(values).account.balance?.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(values).account.balance?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
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
                        unref(values)?.account ? (openBlock(), createBlock(_component_TairoLogo, {
                          key: 0,
                          class: "text-primary-500 size-8"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:wallet",
                          class: "text-muted-500 mx-1 my-2 size-6"
                        })),
                        unref(values)?.account ? (openBlock(), createBlock("div", { key: 2 }, [
                          createVNode(_component_BaseText, {
                            size: "sm",
                            class: "text-muted-800 dark:text-muted-200 block capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(values).account.type) + " " + toDisplayString(unref(values).account.label), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: "text-muted-500 dark:text-muted-400 block"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(values).account.balance?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
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
                  class: ["!h-auto w-full !p-4", [unref(errors).account ? "!border-danger-500" : ""]]
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "flex w-full items-center gap-3 text-start" }, [
                      unref(values)?.account ? (openBlock(), createBlock(_component_TairoLogo, {
                        key: 0,
                        class: "text-primary-500 size-8"
                      })) : (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "lucide:wallet",
                        class: "text-muted-500 mx-1 my-2 size-6"
                      })),
                      unref(values)?.account ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode(_component_BaseText, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-200 block capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(values).account.type) + " " + toDisplayString(unref(values).account.label), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400 block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(values).account.balance?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
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
              ssrRenderList(unref(accounts).filter((account) => account.id !== unref(values)?.account?.id), (account) => {
                _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                  key: account.id,
                  title: `${account.type} ${account.label}`,
                  text: `${account.balance.toFixed(2)} \u062A\u0648\u0645\u0627\u0646`,
                  onClick: ($event) => unref(setFieldValue)("account", account)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts).filter((account) => account.id !== unref(values)?.account?.id), (account) => {
                  return openBlock(), createBlock(_component_BaseDropdownItem, {
                    key: account.id,
                    title: `${account.type} ${account.label}`,
                    text: `${account.balance.toFixed(2)} \u062A\u0648\u0645\u0627\u0646`,
                    onClick: ($event) => unref(setFieldValue)("account", account)
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
        if (unref(errors).account) {
          _push(ssrRenderComponent(_component_BaseInputHelpText, { color: "danger" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(errors).account)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(errors).account), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="pt-8">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-600 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u0628\u0631\u0627\u06CC \u06A9\u06CC\u0633\u062A\u061F `);
            } else {
              return [
                createTextVNode(" \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u0628\u0631\u0627\u06CC \u06A9\u06CC\u0633\u062A\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(unref(Field), { name: "owner" }, {
          default: withCtx(({
            field,
            errorMessage,
            handleChange,
            handleBlur
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseSelect, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                placeholder: "\u06CC\u06A9 \u0646\u0641\u0631 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value="\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC"${_scopeId2}> \u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC </option><option value="\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646"${_scopeId2}> \u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646 </option><option value="\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646"${_scopeId2}> \u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646 </option><option value="\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646"${_scopeId2}> \u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646 </option><option value="\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631"${_scopeId2}> \u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631 </option>`);
                  } else {
                    return [
                      createVNode("option", { value: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC" }, " \u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC "),
                      createVNode("option", { value: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646" }, " \u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646 "),
                      createVNode("option", { value: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646" }, " \u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646 "),
                      createVNode("option", { value: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646" }, " \u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646 "),
                      createVNode("option", { value: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631" }, " \u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseSelect, {
                  "model-value": field.value,
                  error: errorMessage,
                  disabled: unref(isSubmitting),
                  placeholder: "\u06CC\u06A9 \u0646\u0641\u0631 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
                  "onUpdate:modelValue": handleChange,
                  onBlur: handleBlur
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC" }, " \u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC "),
                    createVNode("option", { value: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646" }, " \u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646 "),
                    createVNode("option", { value: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646" }, " \u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646 "),
                    createVNode("option", { value: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646" }, " \u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646 "),
                    createVNode("option", { value: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631" }, " \u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631 ")
                  ]),
                  _: 2
                }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="pt-8">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-600 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0686\u0647 \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u061F `);
            } else {
              return [
                createTextVNode(" \u0686\u0647 \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(unref(Field), { name: "brand" }, {
          default: withCtx(({
            field,
            errorMessage,
            handleChange,
            handleBlur
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseSelect, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0628\u0631\u0646\u062F \u06A9\u0627\u0631\u062A",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value="visa"${_scopeId2}> \u0648\u06CC\u0632\u0627 </option><option value="mastercard"${_scopeId2}> \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A </option>`);
                  } else {
                    return [
                      createVNode("option", { value: "visa" }, " \u0648\u06CC\u0632\u0627 "),
                      createVNode("option", { value: "mastercard" }, " \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseSelect, {
                  "model-value": field.value,
                  error: errorMessage,
                  disabled: unref(isSubmitting),
                  placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0628\u0631\u0646\u062F \u06A9\u0627\u0631\u062A",
                  "onUpdate:modelValue": handleChange,
                  onBlur: handleBlur
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "visa" }, " \u0648\u06CC\u0632\u0627 "),
                    createVNode("option", { value: "mastercard" }, " \u0645\u0633\u062A\u0631\u06A9\u0627\u0631\u062A ")
                  ]),
                  _: 2
                }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="pt-8">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-600 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u0627\u0632 \u0686\u0647 \u0646\u0648\u0639\u06CC \u0627\u0633\u062A\u061F `);
            } else {
              return [
                createTextVNode(" \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u0627\u0632 \u0686\u0647 \u0646\u0648\u0639\u06CC \u0627\u0633\u062A\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="group relative">`);
        _push(ssrRenderComponent(unref(Field), { name: "type" }, {
          default: withCtx(({
            field,
            errorMessage,
            handleChange,
            handleBlur
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseSelect, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                placeholder: "\u06CC\u06A9 \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value="\u0641\u06CC\u0632\u06CC\u06A9\u06CC"${_scopeId2}> \u0641\u06CC\u0632\u06CC\u06A9\u06CC </option><option value="\u0645\u062C\u0627\u0632\u06CC"${_scopeId2}> \u0645\u062C\u0627\u0632\u06CC </option>`);
                  } else {
                    return [
                      createVNode("option", { value: "\u0641\u06CC\u0632\u06CC\u06A9\u06CC" }, " \u0641\u06CC\u0632\u06CC\u06A9\u06CC "),
                      createVNode("option", { value: "\u0645\u062C\u0627\u0632\u06CC" }, " \u0645\u062C\u0627\u0632\u06CC ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseSelect, {
                  "model-value": field.value,
                  error: errorMessage,
                  disabled: unref(isSubmitting),
                  placeholder: "\u06CC\u06A9 \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
                  "onUpdate:modelValue": handleChange,
                  onBlur: handleBlur
                }, {
                  default: withCtx(() => [
                    createVNode("option", { value: "\u0641\u06CC\u0632\u06CC\u06A9\u06CC" }, " \u0641\u06CC\u0632\u06CC\u06A9\u06CC "),
                    createVNode("option", { value: "\u0645\u062C\u0627\u0632\u06CC" }, " \u0645\u062C\u0627\u0632\u06CC ")
                  ]),
                  _: 2
                }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="pt-8">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-600 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0647\u0632\u06CC\u0646\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 \u0686\u0642\u062F\u0631 \u0627\u0633\u062A\u061F `);
            } else {
              return [
                createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0647\u0632\u06CC\u0646\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 \u0686\u0642\u062F\u0631 \u0627\u0633\u062A\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(unref(Field), { name: "dailySpend" }, {
          default: withCtx(({
            field,
            errorMessage,
            handleChange,
            handleBlur
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseInputNumber, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                icon: "lucide:dollar-sign",
                placeholder: "0.00",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseInputNumber, {
                  "model-value": field.value,
                  error: errorMessage,
                  disabled: unref(isSubmitting),
                  icon: "lucide:dollar-sign",
                  placeholder: "0.00",
                  "onUpdate:modelValue": handleChange,
                  onBlur: handleBlur
                }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="pt-8">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          class: "text-muted-600 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0628\u0631\u062F\u0627\u0634\u062A \u0631\u0648\u0632\u0627\u0646\u0647 \u0686\u0642\u062F\u0631 \u0627\u0633\u062A\u061F `);
            } else {
              return [
                createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0628\u0631\u062F\u0627\u0634\u062A \u0631\u0648\u0632\u0627\u0646\u0647 \u0686\u0642\u062F\u0631 \u0627\u0633\u062A\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(unref(Field), { name: "dailyWithdraw" }, {
          default: withCtx(({
            field,
            errorMessage,
            handleChange,
            handleBlur
          }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseInputNumber, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                icon: "lucide:dollar-sign",
                placeholder: "0.00",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseInputNumber, {
                  "model-value": field.value,
                  error: errorMessage,
                  disabled: unref(isSubmitting),
                  icon: "lucide:dollar-sign",
                  placeholder: "0.00",
                  "onUpdate:modelValue": handleChange,
                  onBlur: handleBlur
                }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="flex flex-col-reverse gap-4 py-8 sm:flex-row"><div class="inline-flex h-12 w-full items-center justify-center">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-600 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06A9\u0627\u0631\u062A \u0637\u06CC \u06F1-\u06F2 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u0641\u0639\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. `);
            } else {
              return [
                createTextVNode(" \u06A9\u0627\u0631\u062A \u0637\u06CC \u06F1-\u06F2 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u0641\u0639\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BaseButton, {
          type: "submit",
          color: "primary",
          size: "lg",
          rounded: "md",
          class: "w-full",
          loading: unref(isSubmitting)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0635\u062F\u0648\u0631 \u06A9\u0627\u0631\u062A \u062C\u062F\u06CC\u062F `);
            } else {
              return [
                createTextVNode(" \u0635\u062F\u0648\u0631 \u06A9\u0627\u0631\u062A \u062C\u062F\u06CC\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div><div class="relative md:col-span-5 lg:col-span-5"><div class="sticky top-20">`);
        _push(ssrRenderComponent(_component_DemoCreditCardReal, {
          status: "active",
          name: unref(values)?.owner,
          number: unref(values)?.account?.number,
          brand: unref(values)?.brand,
          contrast: "high"
        }, null, _parent));
        _push(`</div></div></form></div>`);
      } else {
        _push(`<div><div class="mx-auto w-full max-w-md py-6 text-center"><div class="text-primary-500 mx-auto mb-4 size-14">`);
        _push(ssrRenderComponent(_component_TairoCheckAnimated, {
          color: "primary",
          size: "lg"
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h2",
          weight: "medium",
          size: "2xl",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0627\u06CC\u062C\u0627\u062F \u0634\u062F! `);
            } else {
              return [
                createTextVNode(" \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0627\u06CC\u062C\u0627\u062F \u0634\u062F! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-5" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0639\u0627\u0644\u06CC! \u0634\u0645\u0627 \u06A9\u0627\u0631\u062A \u062C\u062F\u06CC\u062F \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0645\u062D\u0636 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646 \u0628\u0647 \u0634\u0645\u0627\u060C \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u06CC\u0645 \u062F\u0627\u062F. `);
            } else {
              return [
                createTextVNode(" \u0639\u0627\u0644\u06CC! \u0634\u0645\u0627 \u06A9\u0627\u0631\u062A \u062C\u062F\u06CC\u062F \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0645\u062D\u0636 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646 \u0628\u0647 \u0634\u0645\u0627\u060C \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u06CC\u0645 \u062F\u0627\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/layouts/cards",
          color: "primary",
          rounded: "md",
          class: "w-48"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 `);
            } else {
              return [
                createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/card/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
