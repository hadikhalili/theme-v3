import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, h as _sfc_main$u, a as __nuxt_component_2, f as _sfc_main$C, _ as __nuxt_component_0$3, d as _sfc_main$D } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseRadioHeadless-BL03emlX.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$3 } from './BaseSwitchBall-krBQpZlI.mjs';
import { _ as _sfc_main$4 } from './BaseRadio-DxLVFvJR.mjs';
import { _ as _sfc_main$5 } from './DemoCreditCardReal-BWXE4_zQ.mjs';
import { _ as _sfc_main$6 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$7 } from './TairoFormSave-DUdgzCNp.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, toDisplayString, isRef, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { g as getRandomColor } from './colors-DmsKZ5uA.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
import './IconCheck--xcA1MPZ.mjs';
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-billing",
  __ssrInlineRender: true,
  setup(__props) {
    const customRadio = ref("enterprise");
    const plans = [
      {
        name: "starter",
        description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064B \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        price: {
          monthly: 9,
          yearly: 99
        },
        features: ["\u06F3 \u0635\u0646\u062F\u0644\u06CC", "\u06F2\u06F0 \u067E\u0631\u0648\u0698\u0647", "\u06F2\u06F0 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A \u062D\u0627\u0641\u0638\u0647 \u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC"],
        benefits: [
          "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647",
          "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647",
          "\u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647"
        ]
      },
      {
        name: "freelancer",
        description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064B \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        price: {
          monthly: 19,
          yearly: 199
        },
        features: ["\u06F8 \u0635\u0646\u062F\u0644\u06CC", "\u06F1\u06F5\u06F0 \u067E\u0631\u0648\u0698\u0647", "\u06F1\u06F0\u06F0 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A \u0641\u0636\u0627\u06CC \u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC"],
        benefits: ["\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647", "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647", "\u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647"]
      },
      {
        name: "business",
        description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064B \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        price: {
          monthly: 29,
          yearly: 299
        },
        features: ["\u06F2\u06F0 \u0635\u0646\u062F\u0644\u06CC", "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0646\u0627\u0645\u062D\u062F\u0648\u062F", "\u06F5\u06F0\u06F0 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A \u0641\u0636\u0627\u06CC \u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC"],
        benefits: ["\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647", "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647", "\u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647"]
      },
      {
        name: "enterprise",
        description: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646\u06CC \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0645\u0639\u0645\u0648\u0644\u0627\u064B \u062F\u0631 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0637\u0631\u0627\u062D\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        price: {
          monthly: 49,
          yearly: 399
        },
        features: ["\u06F4\u06F0 \u0635\u0646\u062F\u0644\u06CC", "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0646\u0627\u0645\u062D\u062F\u0648\u062F", "\u0641\u0636\u0627\u06CC \u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC \u0646\u0627\u0645\u062D\u062F\u0648\u062F"],
        benefits: ["\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647", "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647", "\u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u06CC\u06A9\u200C\u0633\u0627\u0644\u0647"]
      }
    ];
    const selectedPlan = computed(() => {
      return plans.find((plan) => plan.name === customRadio.value);
    });
    const planColor = computed(() => {
      switch (customRadio.value) {
        case "starter":
          return "text-success-500";
        case "freelancer":
          return "text-yellow-400";
        case "business":
          return "text-indigo-500";
        case "enterprise":
          return "text-primary-500";
      }
    });
    const cardInfo = ref({
      name: void 0,
      number: void 0,
      expiryYear: void 0,
      expiryMonth: void 0,
      cvc: void 0
    });
    const billingCycles = ref("monthly");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseRadioHeadless = _sfc_main$2;
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseSwitchBall = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseRadio = _sfc_main$4;
      const _component_DemoCreditCardReal = _sfc_main$5;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$6;
      const _component_TairoFormSave = _sfc_main$7;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "mx-auto w-full max-w-4xl pb-16"
      }, _attrs))}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "lg"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u062F\u06CC\u0631\u06CC\u062A \u067E\u0644\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u067E\u0644\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0628\u0631\u0646\u0627\u0645\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0628\u0631\u0646\u0627\u0645\u0647 \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0630\u062E\u06CC\u0631\u0647 \u0628\u0631\u0627\u06CC</span><span class="font-semibold"${_scopeId}>${ssrInterpolate(unref(selectedPlan)?.price.monthly)} \u062A\u0648\u0645\u0627\u0646</span><span${_scopeId}>/ \u062F\u0631 \u0645\u0627\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647 \u0628\u0631\u0627\u06CC"),
              createVNode("span", { class: "font-semibold" }, toDisplayString(unref(selectedPlan)?.price.monthly) + " \u062A\u0648\u0645\u0627\u0646", 1),
              createVNode("span", null, "/ \u062F\u0631 \u0645\u0627\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8"><div class="grid grid-cols-2 gap-2 xl:gap-6">`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "starter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "size-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0645\u0628\u062A\u062F\u06CC `);
                      } else {
                        return [
                          createTextVNode(" \u0645\u0628\u062A\u062F\u06CC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u067E\u0627\u06CC\u0647 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639 `);
                      } else {
                        return [
                          createTextVNode(" \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u067E\u0627\u06CC\u0647 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "size-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0645\u0628\u062A\u062F\u06CC ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u067E\u0627\u06CC\u0647 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "size-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0645\u0628\u062A\u062F\u06CC ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u067E\u0627\u06CC\u0647 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "freelancer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-yellow-400 peer-checked:text-yellow-400 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "size-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0641\u0631\u06CC\u0644\u0646\u0633\u0631 `);
                      } else {
                        return [
                          createTextVNode(" \u0641\u0631\u06CC\u0644\u0646\u0633\u0631 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u067E\u0644\u0646 \u0628\u0631\u0627\u06CC \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627\u06CC \u067E\u0631\u062A\u0644\u0627\u0634 `);
                      } else {
                        return [
                          createTextVNode(" \u067E\u0644\u0646 \u0628\u0631\u0627\u06CC \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627\u06CC \u067E\u0631\u062A\u0644\u0627\u0634 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "size-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0641\u0631\u06CC\u0644\u0646\u0633\u0631 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u067E\u0644\u0646 \u0628\u0631\u0627\u06CC \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627\u06CC \u067E\u0631\u062A\u0644\u0627\u0634 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-yellow-400 peer-checked:text-yellow-400 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "size-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0641\u0631\u06CC\u0644\u0646\u0633\u0631 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u067E\u0644\u0646 \u0628\u0631\u0627\u06CC \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627\u06CC \u067E\u0631\u062A\u0644\u0627\u0634 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "business"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-indigo-500 peer-checked:text-indigo-500 peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "size-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 `);
                      } else {
                        return [
                          createTextVNode(" \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u06CC\u06A9 \u0637\u0631\u062D \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0645\u062A\u0648\u0633\u0637 \u0648 \u0645\u0642\u0631\u0648\u0646\u200C\u0628\u0647\u200C\u0635\u0631\u0641\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u06CC\u06A9 \u0637\u0631\u062D \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0645\u062A\u0648\u0633\u0637 \u0648 \u0645\u0642\u0631\u0648\u0646\u200C\u0628\u0647\u200C\u0635\u0631\u0641\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "size-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u06CC\u06A9 \u0637\u0631\u062D \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0645\u062A\u0648\u0633\u0637 \u0648 \u0645\u0642\u0631\u0648\u0646\u200C\u0628\u0647\u200C\u0635\u0631\u0641\u0647 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "text-muted-400/50 group relative p-6 text-center peer-checked:!border-indigo-500 peer-checked:text-indigo-500 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "size-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06CC\u06A9 \u0637\u0631\u062D \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0645\u062A\u0648\u0633\u0637 \u0648 \u0645\u0642\u0631\u0648\u0646\u200C\u0628\u0647\u200C\u0635\u0631\u0641\u0647 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, {
        modelValue: unref(customRadio),
        "onUpdate:modelValue": ($event) => isRef(customRadio) ? customRadio.value = $event : null,
        name: "radio_custom",
        value: "enterprise"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "text-muted-400/50 peer-checked:!border-primary-500 peer-checked:text-primary-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "size-3 text-current"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0634\u0631\u06A9\u062A `);
                      } else {
                        return [
                          createTextVNode(" \u0634\u0631\u06A9\u062A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0631\u06A9\u062A\u06CC \u06A9\u0627\u0645\u0644 `);
                      } else {
                        return [
                          createTextVNode(" \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0631\u06A9\u062A\u06CC \u06A9\u0627\u0645\u0644 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "size-3 text-current"
                      })
                    ]),
                    createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0634\u0631\u06A9\u062A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      lead: "tight",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0631\u06A9\u062A\u06CC \u06A9\u0627\u0645\u0644 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "text-muted-400/50 peer-checked:!border-primary-500 peer-checked:text-primary-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex size-7 items-center justify-center rounded-full border bg-white opacity-0" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "size-3 text-current"
                    })
                  ]),
                  createVNode(_component_TairoLogo, { class: "mx-auto mb-2 size-9" }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0634\u0631\u06A9\u062A ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06CC\u06A9 \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0631\u06A9\u062A\u06CC \u06A9\u0627\u0645\u0644 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "sm",
        class: "flex h-full flex-col p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoLogo, {
              class: ["size-12 shrink-0", unref(planColor)]
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "md",
              lead: "tight",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(selectedPlan)?.price.monthly)} \u062A\u0648\u0645\u0627\u0646 <span class="text-muted-400 font-normal"${_scopeId2}>/ \u062F\u0631 \u0645\u0627\u0647</span>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(selectedPlan)?.price.monthly) + " \u062A\u0648\u0645\u0627\u0646 ", 1),
                    createVNode("span", { class: "text-muted-400 font-normal" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              lead: "tight",
              class: ["mb-2", unref(planColor)]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0647 \u0645\u0628\u0644\u063A ${ssrInterpolate(unref(selectedPlan)?.price.yearly)} \u062A\u0648\u0645\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062A \u0633\u0627\u0644\u0627\u0646\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0634\u062F\u0647 \u0627\u0633\u062A. `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0647 \u0645\u0628\u0644\u063A " + toDisplayString(unref(selectedPlan)?.price.yearly) + " \u062A\u0648\u0645\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062A \u0633\u0627\u0644\u0627\u0646\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0634\u062F\u0647 \u0627\u0633\u062A. ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(selectedPlan)?.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(selectedPlan)?.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="my-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627\u06CC\u0631\u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0631\u062F \u0648 \u0647\u0631 \u067E\u0644\u0646 \u0628\u0647\u200C\u062E\u0648\u0628\u06CC \u0628\u0627 \u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u060C \u0686\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u06A9\u0648\u0686\u06A9 \u0628\u0627\u0634\u062F \u06CC\u0627 \u0628\u0632\u0631\u06AF\u060C \u0633\u0627\u0632\u06AF\u0627\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062A\u0627\u06CC\u0631\u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0628\u0627 \u0631\u0634\u062F \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0634\u0645\u0627 \u0628\u0647\u200C\u0631\u0627\u062D\u062A\u06CC \u0645\u0642\u06CC\u0627\u0633\u200C\u0628\u0646\u062F\u06CC \u0634\u0648\u062F. `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0631\u062F \u0648 \u0647\u0631 \u067E\u0644\u0646 \u0628\u0647\u200C\u062E\u0648\u0628\u06CC \u0628\u0627 \u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u060C \u0686\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u06A9\u0648\u0686\u06A9 \u0628\u0627\u0634\u062F \u06CC\u0627 \u0628\u0632\u0631\u06AF\u060C \u0633\u0627\u0632\u06AF\u0627\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062A\u0627\u06CC\u0631\u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0628\u0627 \u0631\u0634\u062F \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0634\u0645\u0627 \u0628\u0647\u200C\u0631\u0627\u062D\u062A\u06CC \u0645\u0642\u06CC\u0627\u0633\u200C\u0628\u0646\u062F\u06CC \u0634\u0648\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 gap-6 font-sans text-xs"${_scopeId}><div${_scopeId}><ul${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedPlan)?.features, (item) => {
              _push2(`<li class="${ssrRenderClass([unref(planColor), "flex items-center gap-2"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                class: "size-3 text-current"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(item)}</span></li>`);
            });
            _push2(`<!--]--></ul></div><div${_scopeId}><ul${_scopeId}><!--[-->`);
            ssrRenderList(unref(selectedPlan)?.benefits, (item) => {
              _push2(`<li class="${ssrRenderClass([unref(planColor), "flex items-center gap-2"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                class: "size-3 text-current"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(item)}</span></li>`);
            });
            _push2(`<!--]--></ul></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-12" }, [
                createVNode(_component_TairoLogo, {
                  class: ["size-12 shrink-0", unref(planColor)]
                }, null, 8, ["class"]),
                createVNode("div", null, [
                  createVNode(_component_BaseText, {
                    size: "md",
                    lead: "tight",
                    weight: "semibold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(selectedPlan)?.price.monthly) + " \u062A\u0648\u0645\u0627\u0646 ", 1),
                      createVNode("span", { class: "text-muted-400 font-normal" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: ["mb-2", unref(planColor)]
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0628\u0647 \u0645\u0628\u0644\u063A " + toDisplayString(unref(selectedPlan)?.price.yearly) + " \u062A\u0648\u0645\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062A \u0633\u0627\u0644\u0627\u0646\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0634\u062F\u0647 \u0627\u0633\u062A. ", 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(selectedPlan)?.description), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "my-8" }, [
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0627\u0631\u062F \u0648 \u0647\u0631 \u067E\u0644\u0646 \u0628\u0647\u200C\u062E\u0648\u0628\u06CC \u0628\u0627 \u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u060C \u0686\u0647 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u06A9\u0648\u0686\u06A9 \u0628\u0627\u0634\u062F \u06CC\u0627 \u0628\u0632\u0631\u06AF\u060C \u0633\u0627\u0632\u06AF\u0627\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062A\u0627\u06CC\u0631\u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0628\u0627 \u0631\u0634\u062F \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0634\u0645\u0627 \u0628\u0647\u200C\u0631\u0627\u062D\u062A\u06CC \u0645\u0642\u06CC\u0627\u0633\u200C\u0628\u0646\u062F\u06CC \u0634\u0648\u062F. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "grid grid-cols-2 gap-6 font-sans text-xs" }, [
                createVNode("div", null, [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedPlan)?.features, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: ["flex items-center gap-2", unref(planColor)]
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:check",
                          class: "size-3 text-current"
                        }),
                        createVNode("span", { class: "text-muted-400" }, toDisplayString(item), 1)
                      ], 2);
                    }), 128))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(selectedPlan)?.benefits, (item) => {
                      return openBlock(), createBlock("li", {
                        key: item,
                        class: ["flex items-center gap-2", unref(planColor)]
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:check",
                          class: "size-3 text-current"
                        }),
                        createVNode("span", { class: "text-muted-400" }, toDisplayString(item), 1)
                      ], 2);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-7 col-span-12 sm:col-span-6 lg:col-span-7"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              lead: "tight",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 6/8 \u0645\u0627\u0646\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" 6/8 \u0645\u0627\u0646\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xs:flex-wrap ptablet:flex-wrap ltablet:justify-between flex items-center gap-2 lg:justify-between"${_scopeId}><div class="xs:flex-wrap ptablet:flex-wrap flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/2.svg",
              size: "sm",
              "data-nui-tooltip": "\u0645\u0627\u06CC\u0627 \u0631."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/10.svg",
              size: "sm",
              "data-nui-tooltip": "\u06A9\u0646\u062F\u0631\u0627 \u0648."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              text: "OD",
              "data-nui-tooltip": "Oliver D.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "sm",
              "data-nui-tooltip": "\u0647\u0631\u0645\u0627\u0646 \u0645."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              text: "MC",
              "data-nui-tooltip": "Matteus C.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "sm",
              text: "GM",
              "data-nui-tooltip": "Gorav M.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><button type="button" class="border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 size-10 rounded-full border-2 border-dashed transition-all duration-300 hover:border-solid" data-nui-tooltip="\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627\u06CC \u0637\u0631\u062D"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:edit-3",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 6/8 \u0645\u0627\u0646\u062F\u0647 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "xs:flex-wrap ptablet:flex-wrap ltablet:justify-between flex items-center gap-2 lg:justify-between" }, [
                createVNode("div", { class: "xs:flex-wrap ptablet:flex-wrap flex items-center gap-2" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/2.svg",
                    size: "sm",
                    "data-nui-tooltip": "\u0645\u0627\u06CC\u0627 \u0631."
                  }),
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/10.svg",
                    size: "sm",
                    "data-nui-tooltip": "\u06A9\u0646\u062F\u0631\u0627 \u0648."
                  }),
                  createVNode(_component_BaseAvatar, {
                    size: "sm",
                    text: "OD",
                    "data-nui-tooltip": "Oliver D.",
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                  }, null, 8, ["class"]),
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/16.svg",
                    size: "sm",
                    "data-nui-tooltip": "\u0647\u0631\u0645\u0627\u0646 \u0645."
                  }),
                  createVNode(_component_BaseAvatar, {
                    size: "sm",
                    text: "MC",
                    "data-nui-tooltip": "Matteus C.",
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                  }, null, 8, ["class"]),
                  createVNode(_component_BaseAvatar, {
                    size: "sm",
                    text: "GM",
                    "data-nui-tooltip": "Gorav M.",
                    class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                  }, null, 8, ["class"])
                ]),
                createVNode("div", null, [
                  createVNode("button", {
                    type: "button",
                    class: "border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 size-10 rounded-full border-2 border-dashed transition-all duration-300 hover:border-solid",
                    "data-nui-tooltip": "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u0646\u062F\u0644\u06CC\u200C\u0647\u0627\u06CC \u0637\u0631\u062D"
                  }, [
                    createVNode(_component_Icon, {
                      name: "lucide:edit-3",
                      class: "size-4"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              lead: "tight",
              class: "text-muted-400"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              id: "billing-ball-1",
              "model-value": false,
              label: "\u0635\u062F\u0648\u0631 \u0641\u0627\u06A9\u062A\u0648\u0631",
              sublabel: "\u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0647 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u0645\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              id: "billing-ball-2",
              "model-value": true,
              label: "\u0647\u0634\u062F\u0627\u0631\u0647\u0627",
              sublabel: "\u0642\u0628\u0644 \u0627\u0632 \u067E\u0627\u06CC\u0627\u0646 \u062F\u0648\u0631\u0647 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0628\u0647 \u0645\u0646 \u0647\u0634\u062F\u0627\u0631 \u062F\u0647\u06CC\u062F",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              id: "billing-ball-3",
              "model-value": true,
              label: "\u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627",
              sublabel: "\u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627\u06CC \u0645\u0627\u0647\u0627\u0646\u0647 \u0631\u0627 \u0628\u0647 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u0645\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    lead: "tight",
                    class: "text-muted-400"
                  })
                ])
              ]),
              createVNode("div", { class: "space-y-6" }, [
                createVNode(_component_BaseSwitchBall, {
                  id: "billing-ball-1",
                  "model-value": false,
                  label: "\u0635\u062F\u0648\u0631 \u0641\u0627\u06A9\u062A\u0648\u0631",
                  sublabel: "\u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0647 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u0645\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F",
                  color: "primary"
                }),
                createVNode(_component_BaseSwitchBall, {
                  id: "billing-ball-2",
                  "model-value": true,
                  label: "\u0647\u0634\u062F\u0627\u0631\u0647\u0627",
                  sublabel: "\u0642\u0628\u0644 \u0627\u0632 \u067E\u0627\u06CC\u0627\u0646 \u062F\u0648\u0631\u0647 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0628\u0647 \u0645\u0646 \u0647\u0634\u062F\u0627\u0631 \u062F\u0647\u06CC\u062F",
                  color: "primary"
                }),
                createVNode(_component_BaseSwitchBall, {
                  id: "billing-ball-3",
                  "model-value": true,
                  label: "\u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627",
                  sublabel: "\u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627\u06CC \u0645\u0627\u0647\u0627\u0646\u0647 \u0631\u0627 \u0628\u0647 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u0645\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F",
                  color: "primary"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0686\u0631\u062E\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u0686\u0631\u062E\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { class: "text-primary-500 font-sans text-xs underline underline-offset-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627\u06CC \u0645\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627\u06CC \u0645\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-1",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "monthly_billing",
              label: "\u0645\u0627\u0647\u0627\u0646\u0647",
              value: "monthly",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-2",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "semestral_billing",
              label: "\u0646\u06CC\u0645\u200C\u0633\u0627\u0644\u0627\u0646\u0647",
              value: "semestral",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-3",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "yearly_billing",
              label: "\u0633\u0627\u0644\u0627\u0646\u0647",
              value: "yearly",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0686\u0631\u062E\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, { class: "text-primary-500 font-sans text-xs underline underline-offset-4" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627\u06CC \u0645\u0646 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "flex items-center gap-6" }, [
                createVNode(_component_BaseRadio, {
                  id: "demo-cycle-1",
                  modelValue: unref(billingCycles),
                  "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                  name: "monthly_billing",
                  label: "\u0645\u0627\u0647\u0627\u0646\u0647",
                  value: "monthly",
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadio, {
                  id: "demo-cycle-2",
                  modelValue: unref(billingCycles),
                  "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                  name: "semestral_billing",
                  label: "\u0646\u06CC\u0645\u200C\u0633\u0627\u0644\u0627\u0646\u0647",
                  value: "semestral",
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseRadio, {
                  id: "demo-cycle-3",
                  modelValue: unref(billingCycles),
                  "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                  name: "yearly_billing",
                  label: "\u0633\u0627\u0644\u0627\u0646\u0647",
                  value: "yearly",
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-5 col-span-12 sm:col-span-6 lg:col-span-5">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u062F\u0627\u062E\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u062F\u0627\u062E\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardReal, {
              name: unref(cardInfo).name,
              number: unref(cardInfo).number,
              "expiry-month": unref(cardInfo).expiryMonth,
              "expiry-year": unref(cardInfo).expiryMonth,
              cvc: unref(cardInfo).cvc
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-5"${_scopeId}><form${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(cardInfo).name,
              "onUpdate:modelValue": ($event) => unref(cardInfo).name = $event,
              label: "\u0646\u0627\u0645 \u0631\u0648\u06CC \u06A9\u0627\u0631\u062A",
              placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645 \u0642\u0627\u0633\u0645\u06CC"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(cardInfo).number,
              "onUpdate:modelValue": ($event) => unref(cardInfo).number = $event,
              label: "\u0634\u0645\u0627\u0631\u0647 \u06A9\u0627\u0631\u062A",
              placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F2\u06F4\u06F2 \u06F4\u06F2\u06F4\u06F2 \u06F4\u06F2\u06F4\u06F2 \u06F4\u06F2\u06F4\u06F2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}><div class="grid gap-4 sm:grid-cols-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(cardInfo).expiryMonth,
              "onUpdate:modelValue": ($event) => unref(cardInfo).expiryMonth = $event,
              label: "\u0645\u0627\u0647 \u0627\u0646\u0642\u0636\u0627"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}> \u0645\u0627\u0647 </option><option value="01"${_scopeId2}> 01 </option><option value="02"${_scopeId2}> 02 </option><option value="03"${_scopeId2}> 03 </option><option value="04"${_scopeId2}> 04 </option><option value="05"${_scopeId2}> 05 </option><option value="06"${_scopeId2}> 06 </option><option value="07"${_scopeId2}> 07 </option><option value="08"${_scopeId2}> 08 </option><option value="09"${_scopeId2}> 09 </option><option value="10"${_scopeId2}> 10 </option><option value="11"${_scopeId2}> 11 </option><option value="12"${_scopeId2}> 12 </option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, " \u0645\u0627\u0647 "),
                    createVNode("option", { value: "01" }, " 01 "),
                    createVNode("option", { value: "02" }, " 02 "),
                    createVNode("option", { value: "03" }, " 03 "),
                    createVNode("option", { value: "04" }, " 04 "),
                    createVNode("option", { value: "05" }, " 05 "),
                    createVNode("option", { value: "06" }, " 06 "),
                    createVNode("option", { value: "07" }, " 07 "),
                    createVNode("option", { value: "08" }, " 08 "),
                    createVNode("option", { value: "09" }, " 09 "),
                    createVNode("option", { value: "10" }, " 10 "),
                    createVNode("option", { value: "11" }, " 11 "),
                    createVNode("option", { value: "12" }, " 12 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(cardInfo).expiryYear,
              "onUpdate:modelValue": ($event) => unref(cardInfo).expiryYear = $event,
              label: "\u0633\u0627\u0644 \u0627\u0646\u0642\u0636\u0627"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}> \u0633\u0627\u0644 </option><option value="03"${_scopeId2}> 03 </option><option value="04"${_scopeId2}> 04 </option><option value="05"${_scopeId2}> 05 </option><option value="06"${_scopeId2}> 06 </option><option value="07"${_scopeId2}> 07 </option><option value="08"${_scopeId2}> 08 </option><option value="09"${_scopeId2}> 09 </option><option value="10"${_scopeId2}> 10 </option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }, " \u0633\u0627\u0644 "),
                    createVNode("option", { value: "03" }, " 03 "),
                    createVNode("option", { value: "04" }, " 04 "),
                    createVNode("option", { value: "05" }, " 05 "),
                    createVNode("option", { value: "06" }, " 06 "),
                    createVNode("option", { value: "07" }, " 07 "),
                    createVNode("option", { value: "08" }, " 08 "),
                    createVNode("option", { value: "09" }, " 09 "),
                    createVNode("option", { value: "10" }, " 10 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(cardInfo).cvc,
              "onUpdate:modelValue": ($event) => unref(cardInfo).cvc = $event,
              label: "CVC",
              placeholder: "\u0645\u062B\u0627\u0644: \u06F2\u06F3\u06F9"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u062F\u0627\u062E\u062A ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoCreditCardReal, {
                name: unref(cardInfo).name,
                number: unref(cardInfo).number,
                "expiry-month": unref(cardInfo).expiryMonth,
                "expiry-year": unref(cardInfo).expiryMonth,
                cvc: unref(cardInfo).cvc
              }, null, 8, ["name", "number", "expiry-month", "expiry-year", "cvc"]),
              createVNode("div", { class: "mt-5" }, [
                createVNode("form", null, [
                  createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(_component_BaseInput, {
                        modelValue: unref(cardInfo).name,
                        "onUpdate:modelValue": ($event) => unref(cardInfo).name = $event,
                        label: "\u0646\u0627\u0645 \u0631\u0648\u06CC \u06A9\u0627\u0631\u062A",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645 \u0642\u0627\u0633\u0645\u06CC"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(_component_BaseInput, {
                        modelValue: unref(cardInfo).number,
                        "onUpdate:modelValue": ($event) => unref(cardInfo).number = $event,
                        label: "\u0634\u0645\u0627\u0631\u0647 \u06A9\u0627\u0631\u062A",
                        placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F2\u06F4\u06F2 \u06F4\u06F2\u06F4\u06F2 \u06F4\u06F2\u06F4\u06F2 \u06F4\u06F2\u06F4\u06F2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode("div", { class: "grid gap-4 sm:grid-cols-3" }, [
                        createVNode("div", null, [
                          createVNode(_component_BaseSelect, {
                            modelValue: unref(cardInfo).expiryMonth,
                            "onUpdate:modelValue": ($event) => unref(cardInfo).expiryMonth = $event,
                            label: "\u0645\u0627\u0647 \u0627\u0646\u0642\u0636\u0627"
                          }, {
                            default: withCtx(() => [
                              createVNode("option", { value: "" }, " \u0645\u0627\u0647 "),
                              createVNode("option", { value: "01" }, " 01 "),
                              createVNode("option", { value: "02" }, " 02 "),
                              createVNode("option", { value: "03" }, " 03 "),
                              createVNode("option", { value: "04" }, " 04 "),
                              createVNode("option", { value: "05" }, " 05 "),
                              createVNode("option", { value: "06" }, " 06 "),
                              createVNode("option", { value: "07" }, " 07 "),
                              createVNode("option", { value: "08" }, " 08 "),
                              createVNode("option", { value: "09" }, " 09 "),
                              createVNode("option", { value: "10" }, " 10 "),
                              createVNode("option", { value: "11" }, " 11 "),
                              createVNode("option", { value: "12" }, " 12 ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseSelect, {
                            modelValue: unref(cardInfo).expiryYear,
                            "onUpdate:modelValue": ($event) => unref(cardInfo).expiryYear = $event,
                            label: "\u0633\u0627\u0644 \u0627\u0646\u0642\u0636\u0627"
                          }, {
                            default: withCtx(() => [
                              createVNode("option", { value: "" }, " \u0633\u0627\u0644 "),
                              createVNode("option", { value: "03" }, " 03 "),
                              createVNode("option", { value: "04" }, " 04 "),
                              createVNode("option", { value: "05" }, " 05 "),
                              createVNode("option", { value: "06" }, " 06 "),
                              createVNode("option", { value: "07" }, " 07 "),
                              createVNode("option", { value: "08" }, " 08 "),
                              createVNode("option", { value: "09" }, " 09 "),
                              createVNode("option", { value: "10" }, " 10 ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(cardInfo).cvc,
                            "onUpdate:modelValue": ($event) => unref(cardInfo).cvc = $event,
                            label: "CVC",
                            placeholder: "\u0645\u062B\u0627\u0644: \u06F2\u06F3\u06F9"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoFormSave, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0630\u062E\u06CC\u0631\u0647 \u0628\u0631\u0627\u06CC</span><span class="font-semibold"${_scopeId2}>${ssrInterpolate(unref(selectedPlan)?.price.monthly)} \u062A\u0648\u0645\u0627\u0646</span><span${_scopeId2}>/ \u062F\u0631 \u0645\u0627\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647 \u0628\u0631\u0627\u06CC"),
                    createVNode("span", { class: "font-semibold" }, toDisplayString(unref(selectedPlan)?.price.monthly) + " \u062A\u0648\u0645\u0627\u0646", 1),
                    createVNode("span", null, "/ \u062F\u0631 \u0645\u0627\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                type: "submit",
                color: "primary",
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647 \u0628\u0631\u0627\u06CC"),
                  createVNode("span", { class: "font-semibold" }, toDisplayString(unref(selectedPlan)?.price.monthly) + " \u062A\u0648\u0645\u0627\u0646", 1),
                  createVNode("span", null, "/ \u062F\u0631 \u0645\u0627\u0647")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-billing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
