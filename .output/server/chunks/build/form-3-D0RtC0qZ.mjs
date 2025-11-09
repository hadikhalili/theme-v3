import { h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C, a as __nuxt_component_2, c as _sfc_main$v, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$3 } from './DemoCreditCardReal-BWXE4_zQ.mjs';
import { _ as _sfc_main$4 } from './BaseRadio-DxLVFvJR.mjs';
import { _ as _sfc_main$5 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, withModifiers, openBlock, createBlock, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
import './IconChevronDown-B9AzKHTY.mjs';
import './TairoLogo-BETVEPG8.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-3",
  __ssrInlineRender: true,
  setup(__props) {
    const cardInfo = ref({
      name: void 0,
      number: void 0,
      expiryYear: "",
      expiryMonth: "",
      cvc: void 0
    });
    const selectedMethod = ref("cc");
    const billingCycles = ref("monthly");
    const termsApproval = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$2;
      const _component_DemoCreditCardReal = _sfc_main$3;
      const _component_BaseRadio = _sfc_main$4;
      const _component_BaseCheckbox = _sfc_main$5;
      const _component_BaseButton = _sfc_main$e;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3" }, _attrs))}><div class="lg:col-span-2">`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06CC\u06A9 \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u06CC\u06A9 \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              onClick: ($event) => _ctx.$router.back()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "me-2 size-3 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0644\u063A\u0648</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "me-2 size-3 rtl:rotate-180"
                    }),
                    createVNode("span", null, "\u0644\u063A\u0648")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div role="button" tabindex="0" class="${ssrRenderClass([
              unref(selectedMethod) === "paypal" ? "bg-muted-50 dark:bg-muted-900/60" : "",
              "flex cursor-pointer items-center px-8 py-5"
            ])}"${_scopeId}><div class="${ssrRenderClass([
              unref(selectedMethod) === "paypal" ? "bg-primary-600 ring-primary-600" : "ring-muted-400",
              "dark:border-muted-800 size-4 rounded-full border-2 border-white ring-2 transition-colors"
            ])}"${_scopeId}></div><label class="ms-4 text-sm font-medium"${_scopeId}>\u067E\u06CC\u200C\u067E\u0627\u0644</label></div>`);
            if (unref(selectedMethod) === "paypal") {
              _push2(`<div class="flex items-center justify-between gap-4 p-8 pt-4"${_scopeId}><div class="max-w-xs"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "medium",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u067E\u06CC\u200C\u067E\u0627\u0644 `);
                  } else {
                    return [
                      createTextVNode(" \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u067E\u06CC\u200C\u067E\u0627\u0644 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u067E\u0633 \u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u0628\u0631 \u0631\u0648\u06CC &quot;\u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9&quot;\u060C \u0628\u0647 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u067E\u06CC\u200C\u067E\u0627\u0644 \u0647\u062F\u0627\u06CC\u062A \u062E\u0648\u0627\u0647\u06CC\u062F \u0634\u062F \u062A\u0627 \u062E\u0631\u06CC\u062F \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u0627\u0645\u0646 \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0646\u06CC\u062F. `);
                  } else {
                    return [
                      createTextVNode(' \u067E\u0633 \u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u0628\u0631 \u0631\u0648\u06CC "\u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9"\u060C \u0628\u0647 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u067E\u06CC\u200C\u067E\u0627\u0644 \u0647\u062F\u0627\u06CC\u062A \u062E\u0648\u0627\u0647\u06CC\u062F \u0634\u062F \u062A\u0627 \u062E\u0631\u06CC\u062F \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u0627\u0645\u0646 \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0646\u06CC\u062F. ')
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grow"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                elevated: "",
                class: "mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "logos:paypal",
                      class: "size-12"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "logos:paypal",
                        class: "size-12"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border-muted-200 dark:border-muted-700 border-t"${_scopeId}><div role="button" tabindex="0" class="${ssrRenderClass([
              unref(selectedMethod) === "cc" ? "bg-muted-50 dark:bg-muted-900/60" : "",
              "flex cursor-pointer items-center px-8 py-5"
            ])}"${_scopeId}><div class="${ssrRenderClass([
              unref(selectedMethod) === "cc" ? "bg-primary-600 ring-primary-600" : "ring-muted-400",
              "dark:border-muted-800 size-4 rounded-full border-2 border-white ring-2"
            ])}"${_scopeId}></div><label class="ms-4 text-sm font-medium"${_scopeId}>\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC</label></div>`);
            if (unref(selectedMethod) === "cc") {
              _push2(`<div class="grid grid-cols-2 gap-4 p-8 pt-4"${_scopeId}><div${_scopeId}><form${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
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
                label: "\u0645\u0627\u0647 \u0627\u0646\u0642\u0636\u0627",
                placeholder: "\u0645\u0627\u0647"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value="01"${_scopeId2}> 01 </option><option value="02"${_scopeId2}> 02 </option><option value="03"${_scopeId2}> 03 </option><option value="04"${_scopeId2}> 04 </option><option value="05"${_scopeId2}> 05 </option><option value="06"${_scopeId2}> 06 </option><option value="07"${_scopeId2}> 07 </option><option value="08"${_scopeId2}> 08 </option><option value="09"${_scopeId2}> 09 </option><option value="10"${_scopeId2}> 10 </option><option value="11"${_scopeId2}> 11 </option><option value="12"${_scopeId2}> 12 </option>`);
                  } else {
                    return [
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
                label: "\u0633\u0627\u0644 \u0627\u0646\u0642\u0636\u0627",
                placeholder: "\u0633\u0627\u0644"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<option value="03"${_scopeId2}> 03 </option><option value="04"${_scopeId2}> 04 </option><option value="05"${_scopeId2}> 05 </option><option value="06"${_scopeId2}> 06 </option><option value="07"${_scopeId2}> 07 </option><option value="08"${_scopeId2}> 08 </option><option value="09"${_scopeId2}> 09 </option><option value="10"${_scopeId2}> 10 </option>`);
                  } else {
                    return [
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
              _push2(`</div></div></div></div></form></div><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DemoCreditCardReal, {
                name: unref(cardInfo).name,
                number: unref(cardInfo).number,
                "expiry-month": unref(cardInfo).expiryMonth,
                "expiry-year": unref(cardInfo).expiryYear,
                cvc: unref(cardInfo).cvc
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-8 py-5" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06CC\u06A9 \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseButtonAction, {
                    onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-left",
                        class: "me-2 size-3 rtl:rotate-180"
                      }),
                      createVNode("span", null, "\u0644\u063A\u0648")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", {
                  role: "button",
                  tabindex: "0",
                  class: [
                    "flex cursor-pointer items-center px-8 py-5",
                    unref(selectedMethod) === "paypal" ? "bg-muted-50 dark:bg-muted-900/60" : ""
                  ],
                  onClick: ($event) => selectedMethod.value = "paypal"
                }, [
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 size-4 rounded-full border-2 border-white ring-2 transition-colors",
                      unref(selectedMethod) === "paypal" ? "bg-primary-600 ring-primary-600" : "ring-muted-400"
                    ]
                  }, null, 2),
                  createVNode("label", { class: "ms-4 text-sm font-medium" }, "\u067E\u06CC\u200C\u067E\u0627\u0644")
                ], 10, ["onClick"]),
                unref(selectedMethod) === "paypal" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between gap-4 p-8 pt-4"
                }, [
                  createVNode("div", { class: "max-w-xs" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "md",
                      weight: "medium",
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u067E\u06CC\u200C\u067E\u0627\u0644 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(' \u067E\u0633 \u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u0628\u0631 \u0631\u0648\u06CC "\u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9"\u060C \u0628\u0647 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u067E\u06CC\u200C\u067E\u0627\u0644 \u0647\u062F\u0627\u06CC\u062A \u062E\u0648\u0627\u0647\u06CC\u062F \u0634\u062F \u062A\u0627 \u062E\u0631\u06CC\u062F \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u0627\u0645\u0646 \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0646\u06CC\u062F. ')
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grow" }, [
                    createVNode(_component_BaseCard, {
                      rounded: "lg",
                      elevated: "",
                      class: "mx-auto flex max-w-[280px] items-center justify-center px-8 py-16"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "logos:paypal",
                          class: "size-12"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-t" }, [
                createVNode("div", {
                  role: "button",
                  tabindex: "0",
                  class: [
                    "flex cursor-pointer items-center px-8 py-5",
                    unref(selectedMethod) === "cc" ? "bg-muted-50 dark:bg-muted-900/60" : ""
                  ],
                  onClick: ($event) => selectedMethod.value = "cc"
                }, [
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 size-4 rounded-full border-2 border-white ring-2",
                      unref(selectedMethod) === "cc" ? "bg-primary-600 ring-primary-600" : "ring-muted-400"
                    ]
                  }, null, 2),
                  createVNode("label", { class: "ms-4 text-sm font-medium" }, "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC")
                ], 10, ["onClick"]),
                unref(selectedMethod) === "cc" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-2 gap-4 p-8 pt-4"
                }, [
                  createVNode("div", null, [
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
                                label: "\u0645\u0627\u0647 \u0627\u0646\u0642\u0636\u0627",
                                placeholder: "\u0645\u0627\u0647"
                              }, {
                                default: withCtx(() => [
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
                                label: "\u0633\u0627\u0644 \u0627\u0646\u0642\u0636\u0627",
                                placeholder: "\u0633\u0627\u0644"
                              }, {
                                default: withCtx(() => [
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
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_DemoCreditCardReal, {
                      name: unref(cardInfo).name,
                      number: unref(cardInfo).number,
                      "expiry-month": unref(cardInfo).expiryMonth,
                      "expiry-year": unref(cardInfo).expiryYear,
                      cvc: unref(cardInfo).cvc
                    }, null, 8, ["name", "number", "expiry-month", "expiry-year", "cvc"])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "pb-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 border-b px-8 py-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u0644\u0627\u0635\u0647 \u0633\u0641\u0627\u0631\u0634 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u0644\u0627\u0635\u0647 \u0633\u0641\u0627\u0631\u0634 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u0633\u0641\u0627\u0631\u0634 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u0633\u0641\u0627\u0631\u0634 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="px-8 pt-5"${_scopeId}><div class="mb-6"${_scopeId}><label class="nui-label pb-3 text-[0.825rem]"${_scopeId}>\u0686\u0631\u062E\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628</label><div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-1",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "monthly_billing",
              label: "\u0645\u0627\u0647\u0627\u0646\u0647",
              value: "monthly",
              color: "primary",
              classes: {
                label: "relative top-0.5 text-xs"
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadio, {
              id: "demo-cycle-2",
              modelValue: unref(billingCycles),
              "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
              name: "yearly_billing",
              label: "\u0633\u0627\u0644\u0627\u0646\u0647",
              value: "yearly",
              color: "primary",
              classes: {
                label: "relative top-0.5 text-xs"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0637\u0631\u062D \u062D\u0631\u0641\u0647\u200C\u0627\u06CC Fasterio `);
                } else {
                  return [
                    createTextVNode(" \u0637\u0631\u062D \u062D\u0631\u0641\u0647\u200C\u0627\u06CC Fasterio ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold"${_scopeId2}>\u06F1\u066C\u06F4\u06F9\u06F9\u066C\u06F5\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646</span><span class="text-muted-500 dark:text-muted-400 text-xs"${_scopeId2}>/ \u062F\u0631 \u0645\u0627\u0647</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold" }, "\u06F1\u066C\u06F4\u06F9\u06F9\u066C\u06F5\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646"),
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-xs" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F2\u06F0\u066A \u0635\u0631\u0641\u0647\u200C\u062C\u0648\u06CC\u06CC \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0633\u0627\u0644\u0627\u0646\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u06F2\u06F0\u066A \u0635\u0631\u0641\u0647\u200C\u062C\u0648\u06CC\u06CC \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0633\u0627\u0644\u0627\u0646\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 px-8 pb-5"${_scopeId}><div class="flex items-end justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold"${_scopeId2}>\u06F2\u06F9\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold" }, "\u06F2\u06F9\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5"${_scopeId}><div class="flex items-end justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0631\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0645\u0631\u0648\u0632 (\u062A\u0648\u0645\u0627\u0646) `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0631\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0645\u0631\u0648\u0632 (\u062A\u0648\u0645\u0627\u0646) ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "md",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="font-semibold"${_scopeId2}>\u06F0 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", { class: "font-semibold" }, "\u06F0 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0631\u0648\u0639 \u0627\u0632 \u0645\u0627\u0647 \u0628\u0639\u062F: \u06F1\u066C\u06F4\u06F9\u06F9\u066C\u06F5\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 / \u062F\u0631 \u0645\u0627\u0647. `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0631\u0648\u0639 \u0627\u0632 \u0645\u0627\u0647 \u0628\u0639\u062F: \u06F1\u066C\u06F4\u06F9\u06F9\u066C\u06F5\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 / \u062F\u0631 \u0645\u0627\u0647. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="my-4 flex items-center px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(termsApproval),
              "onUpdate:modelValue": ($event) => isRef(termsApproval) ? termsApproval.value = $event : null,
              color: "primary",
              rounded: "full",
              label: "\u0645\u0646 \u0628\u0627 \u0634\u0631\u0627\u06CC\u0637 \u062E\u062F\u0645\u0627\u062A \u0645\u0648\u0627\u0641\u0642\u0645",
              classes: {
                label: "relative top-0.5 text-xs"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col px-8 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9 `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b px-8 py-5" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062E\u0644\u0627\u0635\u0647 \u0633\u0641\u0627\u0631\u0634 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u0633\u0641\u0627\u0631\u0634 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "px-8 pt-5" }, [
                createVNode("div", { class: "mb-6" }, [
                  createVNode("label", { class: "nui-label pb-3 text-[0.825rem]" }, "\u0686\u0631\u062E\u0647 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628"),
                  createVNode("div", { class: "flex items-center gap-6" }, [
                    createVNode(_component_BaseRadio, {
                      id: "demo-cycle-1",
                      modelValue: unref(billingCycles),
                      "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                      name: "monthly_billing",
                      label: "\u0645\u0627\u0647\u0627\u0646\u0647",
                      value: "monthly",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseRadio, {
                      id: "demo-cycle-2",
                      modelValue: unref(billingCycles),
                      "onUpdate:modelValue": ($event) => isRef(billingCycles) ? billingCycles.value = $event : null,
                      name: "yearly_billing",
                      label: "\u0633\u0627\u0644\u0627\u0646\u0647",
                      value: "yearly",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0637\u0631\u062D \u062D\u0631\u0641\u0647\u200C\u0627\u06CC Fasterio ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-semibold" }, "\u06F1\u066C\u06F4\u06F9\u06F9\u066C\u06F5\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646"),
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400 text-xs" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u06F2\u06F0\u066A \u0635\u0631\u0641\u0647\u200C\u062C\u0648\u06CC\u06CC \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0633\u0627\u0644\u0627\u0646\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-4 px-8 pb-5" }, [
                createVNode("div", { class: "flex items-end justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold" }, "\u06F2\u06F9\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 mt-4 border-t px-8 pt-5" }, [
                createVNode("div", { class: "flex items-end justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0628\u0631\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0645\u0631\u0648\u0632 (\u062A\u0648\u0645\u0627\u0646) ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "md",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "font-semibold" }, "\u06F0 \u062A\u0648\u0645\u0627\u0646")
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_BaseText, { class: "text-muted-500 dark:text-muted-400 mt-2 text-xs" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0634\u0631\u0648\u0639 \u0627\u0632 \u0645\u0627\u0647 \u0628\u0639\u062F: \u06F1\u066C\u06F4\u06F9\u06F9\u066C\u06F5\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 / \u062F\u0631 \u0645\u0627\u0647. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "my-4 flex items-center px-8" }, [
                createVNode(_component_BaseCheckbox, {
                  modelValue: unref(termsApproval),
                  "onUpdate:modelValue": ($event) => isRef(termsApproval) ? termsApproval.value = $event : null,
                  color: "primary",
                  rounded: "full",
                  label: "\u0645\u0646 \u0628\u0627 \u0634\u0631\u0627\u06CC\u0637 \u062E\u062F\u0645\u0627\u062A \u0645\u0648\u0627\u0641\u0642\u0645",
                  classes: {
                    label: "relative top-0.5 text-xs"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "flex flex-col px-8 pt-4" }, [
                createVNode(_component_BaseButton, {
                  color: "primary",
                  class: "!h-12 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
