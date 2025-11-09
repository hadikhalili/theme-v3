import { g as useTailwindColors, h as _sfc_main$u, b as _sfc_main$w, a as __nuxt_component_2, c as _sfc_main$v, _ as __nuxt_component_0$3, e as _sfc_main$e, i as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-B-NRPykg.mjs';
import { defineComponent, reactive, shallowRef, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0, a as _sfc_main$3 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { _ as _sfc_main$4 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as __nuxt_component_0$1 } from './BaseListbox-CK7ULECq.mjs';
import { _ as _sfc_main$5 } from './BaseProgress-Bi06w8MA.mjs';
import { _ as _sfc_main$6 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$7 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$8 } from './BaseInputNumber-BvjqvKuw.mjs';
import { _ as _sfc_main$9 } from './AddonApexcharts-cnqu1j3S.mjs';
import { f as fa } from './fa-DpcB1dqS.mjs';
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
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-muted-300/50 dark:shadow-muted-900/50 relative flex h-[80px] w-[120px] shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-current px-2.5 pb-2 pt-1.5 shadow-lg" }, _attrs))}><div class="absolute -bottom-2.5 -end-2.5 z-10 size-12 rounded-full bg-white opacity-10"></div><div class="flex items-center justify-between"><span class="block font-sans text-xs font-medium text-white">**4628</span>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "cib:visa",
    class: "size-7 text-white"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-between"><span class="block font-sans text-xs font-medium text-white"> \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC </span></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCreditCardSmall.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "banking-1",
  __ssrInlineRender: true,
  setup(__props) {
    const incomeHistory = reactive(useIncomeHistory());
    function useIncomeHistory() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 315;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          type: "area",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [primary.value, success.value, info.value],
        title: {
          text: "",
          align: "left"
        },
        legend: {
          position: "top"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2022-10-19T00:00:00.000Z",
            "2022-10-20T01:30:00.000Z",
            "2022-10-21T02:30:00.000Z",
            "2022-10-22T03:30:00.000Z",
            "2022-10-23T04:30:00.000Z",
            "2022-10-24T05:30:00.000Z",
            "2022-10-25T06:30:00.000Z",
            "2022-10-26T06:30:00.000Z",
            "2022-10-27T06:30:00.000Z",
            "2022-10-28T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          },
          y: {
            formatter: function(val) {
              return "$" + val;
            }
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627",
          data: [318, 150, 49, 152.13, 421, 1009, 1220, 418, 113, 45]
        },
        {
          name: "\u062F\u0631\u0622\u0645\u062F",
          data: [192, 263, 459, 312, 349, 527, 397, 351, 618, 511]
        }
      ]);
      return { type, height, options, series };
    }
    const banks = [
      {
        id: 1,
        name: "\u0628\u0627\u0646\u06A9 \u0627\u06CC\u06A9\u0633",
        text: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC **** **** 0499",
        media: "/img/icons/banking/bank-1.svg"
      },
      {
        id: 2,
        name: "\u0628\u0627\u0646\u06A9\u0627\u0631\u06CC\u0627",
        text: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC **** **** 1548",
        media: "/img/icons/banking/bank-2.svg"
      },
      {
        id: 3,
        name: "\u0628\u0627\u0646\u06A9\u0648\u0633",
        text: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC **** **** 8448",
        media: "/img/icons/banking/bank-3.svg"
      }
    ];
    const selectedBankTransfert = shallowRef(banks[0]);
    const selectedBankSendTo = shallowRef(banks[0]);
    const selectedCurrency = ref("usd");
    const amount = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoCreditCardSmall = __nuxt_component_4;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$3;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseIconBox = _sfc_main$4;
      const _component_BaseListbox = __nuxt_component_0$1;
      const _component_BaseProgress = _sfc_main$5;
      const _component_BaseAvatar = _sfc_main$6;
      const _component_BaseSelect = _sfc_main$7;
      const _component_BaseInputNumber = _sfc_main$8;
      const _component_BaseButton = _sfc_main$e;
      const _component_AddonApexcharts = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4 md:grid-cols-12" }, _attrs))}><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col py-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0645\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0645\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "full",
              small: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-8 flex items-center gap-4 px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardSmall, { class: "text-primary-500" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "xl",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F1\u06F4,\u06F1\u06F7\u06F1,\u06F5\u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F1\u06F4,\u06F1\u06F7\u06F1,\u06F5\u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              variant: "context",
              label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
              placement: "bottom-end",
              size: "md",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
                    text: "\u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 \u0628\u06CC\u0634\u062A\u0631"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0628\u0646\u0686\u200C\u0645\u0627\u0631\u06A9",
                    text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u062F\u06CC\u06AF\u0631 \u0645\u0646\u0627\u0628\u0639"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u062A\u062C\u0627\u0631\u062A",
                    text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u06A9\u06CC\u0641 \u067E\u0648\u0644",
                    text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u062E\u0648\u062F"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
                      text: "\u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 \u0628\u06CC\u0634\u062A\u0631"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0628\u0646\u0686\u200C\u0645\u0627\u0631\u06A9",
                      text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u062F\u06CC\u06AF\u0631 \u0645\u0646\u0627\u0628\u0639"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062A\u062C\u0627\u0631\u062A",
                      text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u06A9\u06CC\u0641 \u067E\u0648\u0644",
                      text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u062E\u0648\u062F"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="border-muted-200 dark:border-muted-700 mb-8 space-y-5 border-b-2 border-dashed px-6 pb-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0637\u0644\u0627\u0639\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0648\u0636\u0639\u06CC\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}><span class="block size-2 rounded-full bg-emerald-500"${_scopeId}></span><p class="text-muted-400 font-sans text-sm"${_scopeId}> \u0641\u0639\u0627\u0644 </p></div></div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0646\u0642\u0636\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u062F\u0631</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0646\u0642\u0636\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u062F\u0631")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}><p class="text-muted-400 font-sans text-sm"${_scopeId}> \u06F1\u06F2\u06F5 \u0631\u0648\u0632 </p></div></div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0646\u0648\u0639</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0646\u0648\u0639")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "cib:visa",
              class: "text-muted-400 size-10"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-muted-400 font-sans text-xs"${_scopeId}> \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC </p></div></div></div><div class="mb-2 flex items-center gap-4 px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardSmall, { class: "text-success-500" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "xl",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F1\u06F4,\u06F1\u06F7\u06F1,\u06F5\u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F1\u06F4,\u06F1\u06F7\u06F1,\u06F5\u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseDropdown, {
              variant: "context",
              label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
              placement: "bottom-end",
              size: "md",
              class: "z-20"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
                    text: "\u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 \u0628\u06CC\u0634\u062A\u0631"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0628\u0646\u0686\u200C\u0645\u0627\u0631\u06A9",
                    text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u062F\u06CC\u06AF\u0631 \u0645\u0646\u0627\u0628\u0639"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u062A\u062C\u0627\u0631\u062A",
                    text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u06A9\u06CC\u0641 \u067E\u0648\u0644",
                    text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u062E\u0648\u062F"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block size-5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block size-5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
                      text: "\u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 \u0628\u06CC\u0634\u062A\u0631"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:coin-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0628\u0646\u0686\u200C\u0645\u0627\u0631\u06A9",
                      text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u062F\u06CC\u06AF\u0631 \u0645\u0646\u0627\u0628\u0639"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:cell-signal-medium-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062A\u062C\u0627\u0631\u062A",
                      text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:bank-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseDropdownDivider),
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u06A9\u06CC\u0641 \u067E\u0648\u0644",
                      text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u062E\u0648\u062F"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "ph:wallet-duotone",
                          class: "me-2 block size-5"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between px-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0645\u0646")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButtonIcon, {
                  rounded: "full",
                  small: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-3"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-8 flex items-center gap-4 px-6" }, [
                createVNode(_component_DemoCreditCardSmall, { class: "text-primary-500" }),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "xl",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u06F1\u06F4,\u06F1\u06F7\u06F1,\u06F5\u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseDropdown, {
                    variant: "context",
                    label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                    placement: "bottom-end",
                    size: "md",
                    class: "z-20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
                        text: "\u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 \u0628\u06CC\u0634\u062A\u0631"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0628\u0646\u0686\u200C\u0645\u0627\u0631\u06A9",
                        text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u062F\u06CC\u06AF\u0631 \u0645\u0646\u0627\u0628\u0639"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062A\u062C\u0627\u0631\u062A",
                        text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u06A9\u06CC\u0641 \u067E\u0648\u0644",
                        text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u062E\u0648\u062F"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 mb-8 space-y-5 border-b-2 border-dashed px-6 pb-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode("span", { class: "block size-2 rounded-full bg-emerald-500" }),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0641\u0639\u0627\u0644 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0645\u0646\u0642\u0636\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u062F\u0631")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u06F1\u06F2\u06F5 \u0631\u0648\u0632 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0646\u0648\u0639")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex items-center gap-1" }, [
                    createVNode(_component_Icon, {
                      name: "cib:visa",
                      class: "text-muted-400 size-10"
                    }),
                    createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC ")
                  ])
                ])
              ]),
              createVNode("div", { class: "mb-2 flex items-center gap-4 px-6" }, [
                createVNode(_component_DemoCreditCardSmall, { class: "text-success-500" }),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "\u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0627\u0631\u062A")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "xl",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u06F1\u06F4,\u06F1\u06F7\u06F1,\u06F5\u06F5\u06F0 \u062A\u0648\u0645\u0627\u0646")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseDropdown, {
                    variant: "context",
                    label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                    placement: "bottom-end",
                    size: "md",
                    class: "z-20"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC",
                        text: "\u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 \u0628\u06CC\u0634\u062A\u0631"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:coin-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0628\u0646\u0686\u200C\u0645\u0627\u0631\u06A9",
                        text: "\u0645\u0642\u0627\u06CC\u0633\u0647 \u062F\u06CC\u06AF\u0631 \u0645\u0646\u0627\u0628\u0639"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cell-signal-medium-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062A\u062C\u0627\u0631\u062A",
                        text: "\u0641\u0631\u0635\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:bank-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u06A9\u06CC\u0641 \u067E\u0648\u0644",
                        text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u062E\u0648\u062F"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:wallet-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-4"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              class: "bg-success-500/10 text-success-500",
              size: "md",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:pizza-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:pizza-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062A\u062D\u0648\u06CC\u0644 \u063A\u0630\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u062D\u0648\u06CC\u0644 \u063A\u0630\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F1 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1 - \u06F8:\u06F4\u06F6 \u0634\u0628</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F1 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1 - \u06F8:\u06F4\u06F6 \u0634\u0628")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> - \u06F4\u06F1.\u06F4\u06F9 \u062A\u0648\u0645\u0627\u0646 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              class: "bg-orange-500/10 text-orange-500",
              size: "md",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:storefront-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:storefront-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062F\u0631\u0622\u0645\u062F \u0628\u0627\u0632\u0627\u0631</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F \u0628\u0627\u0632\u0627\u0631")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F1\u06F8 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1 - \u0633\u0627\u0639\u062A \u06F9:\u06F1\u06F1 \u0642.\u0638</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F1\u06F8 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1 - \u0633\u0627\u0639\u062A \u06F9:\u06F1\u06F1 \u0642.\u0638")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> + \u06F2,\u06F6\u06F3\u06F3 \u062A\u0648\u0645\u0627\u0646 </span></div></div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              class: "bg-indigo-500/10 text-indigo-500",
              size: "md",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:shopping-cart-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:shopping-cart-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F1\u06F6 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1 - \u0633\u0627\u0639\u062A \u06F2:\u06F1\u06F3 \u0628.\u0638</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F1\u06F6 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1 - \u0633\u0627\u0639\u062A \u06F2:\u06F1\u06F3 \u0628.\u0638")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold"${_scopeId}> - \u06F9\u06F2\u066B\u06F0\u06F0\u062A\u0648\u0645\u0627\u0646 </span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    class: "bg-success-500/10 text-success-500",
                    size: "md",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:pizza-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u062A\u062D\u0648\u06CC\u0644 \u063A\u0630\u0627")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06F1 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1 - \u06F8:\u06F4\u06F6 \u0634\u0628")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " - \u06F4\u06F1.\u06F4\u06F9 \u062A\u0648\u0645\u0627\u0646 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    class: "bg-orange-500/10 text-orange-500",
                    size: "md",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:storefront-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F \u0628\u0627\u0632\u0627\u0631")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06F1\u06F8 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1 - \u0633\u0627\u0639\u062A \u06F9:\u06F1\u06F1 \u0642.\u0638")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " + \u06F2,\u06F6\u06F3\u06F3 \u062A\u0648\u0645\u0627\u0646 ")
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseIconBox, {
                    class: "bg-indigo-500/10 text-indigo-500",
                    size: "md",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:shopping-cart-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06F1\u06F6 \u0645\u0647\u0631 \u06F1\u06F4\u06F0\u06F1 - \u0633\u0627\u0639\u062A \u06F2:\u06F1\u06F3 \u0628.\u0638")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold" }, " - \u06F9\u06F2\u066B\u06F0\u06F0\u062A\u0648\u0645\u0627\u0646 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid gap-4 md:grid-cols-12"><div class="ltablet:col-span-6 col-span-12 flex flex-col gap-4 lg:col-span-6"><form method="POST" action="" class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseListbox, {
              modelValue: unref(selectedBankTransfert),
              "onUpdate:modelValue": ($event) => isRef(selectedBankTransfert) ? selectedBankTransfert.value = $event : null,
              items: banks,
              properties: {
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media"
              }
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2"${_scopeId}><p class="text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight"${_scopeId}> \u06CC\u06A9\u06CC \u0627\u0632 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0631\u062E\u06CC \u0627\u0632 \u0648\u062C\u0648\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F. \u0627\u0646\u062A\u0642\u0627\u0644 \u0646\u0628\u0627\u06CC\u062F \u0627\u0632 \u06F2\u06F0\u066A \u0645\u0648\u062C\u0648\u062F\u06CC \u0634\u0645\u0627 \u062A\u062C\u0627\u0648\u0632 \u06A9\u0646\u062F. </p><div class="mt-2 flex justify-end"${_scopeId}><button type="submit" class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"${_scopeId}> \u062A\u0623\u06CC\u06CC\u062F \u0648 \u0627\u0631\u0633\u0627\u0644 </button></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseListbox, {
                  modelValue: unref(selectedBankTransfert),
                  "onUpdate:modelValue": ($event) => isRef(selectedBankTransfert) ? selectedBankTransfert.value = $event : null,
                  items: banks,
                  properties: {
                    value: "id",
                    label: "name",
                    sublabel: "text",
                    media: "media"
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "mt-2" }, [
                  createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight" }, " \u06CC\u06A9\u06CC \u0627\u0632 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0631\u062E\u06CC \u0627\u0632 \u0648\u062C\u0648\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F. \u0627\u0646\u062A\u0642\u0627\u0644 \u0646\u0628\u0627\u06CC\u062F \u0627\u0632 \u06F2\u06F0\u066A \u0645\u0648\u062C\u0648\u062F\u06CC \u0634\u0645\u0627 \u062A\u062C\u0627\u0648\u0632 \u06A9\u0646\u062F. "),
                  createVNode("div", { class: "mt-2 flex justify-end" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                    }, " \u062A\u0623\u06CC\u06CC\u062F \u0648 \u0627\u0631\u0633\u0627\u0644 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}><span class="text-muted-400 font-sans text-sm"${_scopeId}>\u0633\u0637\u062D \u06F3</span></div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseProgress, {
              size: "xs",
              value: 60
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2"${_scopeId}><p class="text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight"${_scopeId}> \u0627\u06CC\u0646 \u0633\u0637\u062D \u0645\u0634\u062A\u0631\u06CC \u062A\u0627\u06CC\u0631\u0648 \u0634\u0645\u0627 \u0627\u0633\u062A. \u0628\u0647 \u0633\u0637\u0648\u062D \u0628\u0627\u0644\u0627\u062A\u0631 \u062F\u0633\u062A \u06CC\u0627\u0628\u06CC\u062F \u062A\u0627 \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u060C \u0647\u062F\u0627\u06CC\u0627 \u0648\u06CC\u0698\u0647 \u0648 \u0628\u06CC\u0634\u062A\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F. </p><div class="mt-2 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-sm" }, "\u0633\u0637\u062D \u06F3")
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseProgress, {
                  size: "xs",
                  value: 60
                }),
                createVNode("div", { class: "mt-2" }, [
                  createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs leading-tight" }, " \u0627\u06CC\u0646 \u0633\u0637\u062D \u0645\u0634\u062A\u0631\u06CC \u062A\u0627\u06CC\u0631\u0648 \u0634\u0645\u0627 \u0627\u0633\u062A. \u0628\u0647 \u0633\u0637\u0648\u062D \u0628\u0627\u0644\u0627\u062A\u0631 \u062F\u0633\u062A \u06CC\u0627\u0628\u06CC\u062F \u062A\u0627 \u062F\u0633\u062A\u0627\u0648\u0631\u062F\u0647\u0627\u060C \u0647\u062F\u0627\u06CC\u0627 \u0648\u06CC\u0698\u0647 \u0648 \u0628\u06CC\u0634\u062A\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F. "),
                  createVNode("div", { class: "mt-2 flex justify-end" }, [
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><form method="POST" action="" class="ltablet:col-span-6 col-span-12 lg:col-span-6"><div class="relative h-full">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F \u0628\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F \u0628\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div class="mb-4 flex gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              text: "LT",
              size: "xs",
              class: "bg-yellow-400/20 text-yellow-400"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/3.svg",
              size: "xs"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              text: "KC",
              size: "xs",
              class: "bg-indigo-400/20 text-indigo-400"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 \u0645\u062E\u0627\u0637\u0628\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 \u0645\u062E\u0627\u0637\u0628\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="space-y-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseListbox, {
              modelValue: unref(selectedBankSendTo),
              "onUpdate:modelValue": ($event) => isRef(selectedBankSendTo) ? selectedBankSendTo.value = $event : null,
              items: banks,
              properties: {
                value: "id",
                label: "name",
                sublabel: "text",
                media: "media"
              }
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex w-full gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(selectedCurrency),
              "onUpdate:modelValue": ($event) => isRef(selectedCurrency) ? selectedCurrency.value = $event : null,
              rounded: "sm",
              label: "\u0627\u0631\u0632",
              class: "w-16"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option value=""${_scopeId2}></option><option value="usd"${_scopeId2}> $ </option><option value="gbp"${_scopeId2}> \xA3 </option><option value="eur"${_scopeId2}> \u20AC </option>`);
                } else {
                  return [
                    createVNode("option", { value: "" }),
                    createVNode("option", { value: "usd" }, " $ "),
                    createVNode("option", { value: "gbp" }, " \xA3 "),
                    createVNode("option", { value: "eur" }, " \u20AC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInputNumber, {
              modelValue: unref(amount),
              "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
              classes: { wrapper: "grow" },
              placeholder: "0.00",
              rounded: "sm",
              label: "\u0645\u0642\u062F\u0627\u0631",
              min: 0
            }, null, _parent2, _scopeId));
            _push2(`</div></div><p class="text-muted-500 dark:text-muted-400 my-3 font-sans text-xs leading-tight"${_scopeId}> \u0648\u062C\u0648\u0647 \u0641\u0631\u062F\u0627 \u0628\u0647 \u0645\u0642\u0635\u062F \u062E\u0648\u0627\u0647\u0646\u062F \u0631\u0633\u06CC\u062F. </p><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              rounded: "sm",
              size: "sm",
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F \u0628\u0647")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-4 flex gap-3" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/16.svg",
                    size: "xs"
                  }),
                  createVNode(_component_BaseAvatar, {
                    text: "LT",
                    size: "xs",
                    class: "bg-yellow-400/20 text-yellow-400"
                  }),
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/3.svg",
                    size: "xs"
                  }),
                  createVNode(_component_BaseAvatar, {
                    text: "KC",
                    size: "xs",
                    class: "bg-indigo-400/20 text-indigo-400"
                  })
                ]),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 \u0645\u062E\u0627\u0637\u0628\u0627\u0646 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseListbox, {
                      modelValue: unref(selectedBankSendTo),
                      "onUpdate:modelValue": ($event) => isRef(selectedBankSendTo) ? selectedBankSendTo.value = $event : null,
                      items: banks,
                      properties: {
                        value: "id",
                        label: "name",
                        sublabel: "text",
                        media: "media"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex w-full gap-2" }, [
                    createVNode(_component_BaseSelect, {
                      modelValue: unref(selectedCurrency),
                      "onUpdate:modelValue": ($event) => isRef(selectedCurrency) ? selectedCurrency.value = $event : null,
                      rounded: "sm",
                      label: "\u0627\u0631\u0632",
                      class: "w-16"
                    }, {
                      default: withCtx(() => [
                        createVNode("option", { value: "" }),
                        createVNode("option", { value: "usd" }, " $ "),
                        createVNode("option", { value: "gbp" }, " \xA3 "),
                        createVNode("option", { value: "eur" }, " \u20AC ")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseInputNumber, {
                      modelValue: unref(amount),
                      "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                      classes: { wrapper: "grow" },
                      placeholder: "0.00",
                      rounded: "sm",
                      label: "\u0645\u0642\u062F\u0627\u0631",
                      min: 0
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("p", { class: "text-muted-500 dark:text-muted-400 my-3 font-sans text-xs leading-tight" }, " \u0648\u062C\u0648\u0647 \u0641\u0631\u062F\u0627 \u0628\u0647 \u0645\u0642\u0635\u062F \u062E\u0648\u0627\u0647\u0646\u062F \u0631\u0633\u06CC\u062F. "),
                createVNode("div", null, [
                  createVNode(_component_BaseButton, {
                    type: "submit",
                    rounded: "sm",
                    size: "sm",
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form><div class="col-span-12"><div class="relative h-full">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062A\u0627\u0631\u06CC\u062E\u0686\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(incomeHistory), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062A\u0627\u0631\u06CC\u062E\u0686\u0647")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_NuxtLink, {
                    to: "#",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-sm underline-offset-4 transition-colors duration-300 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(incomeHistory), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/banking-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
