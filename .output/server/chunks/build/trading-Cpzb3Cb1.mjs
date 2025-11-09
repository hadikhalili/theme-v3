import { o as onClickOutside, g as useTailwindColors, c as _sfc_main$v, b as _sfc_main$w, h as _sfc_main$u, f as _sfc_main$C, a as __nuxt_component_2, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$3 } from './DemoLinkArrow-CYqyQpEI.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$4 } from './BaseInputNumber-BvjqvKuw.mjs';
import { defineComponent, ref, reactive, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { f as formatPrice } from './format-currency-Xti0Ih3A.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2 } from './virtual_public-BnP6QEA2.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_3 = publicAssetsURL("/img/logos/companies/td-full.svg");
const _imports_4 = publicAssetsURL("/img/logos/companies/kaspi-full.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "trading",
  __ssrInlineRender: true,
  setup(__props) {
    const banks = ref([
      {
        id: 1,
        name: "\u0686\u06CC\u0633",
        logo: "/img/logos/companies/chase-full.svg",
        series: [
          {
            name: "\u0627\u0631\u0632\u0634 \u0633\u0647\u0627\u0645",
            data: [
              1231.37,
              1453.78,
              1739.87,
              2156.32,
              1932.29,
              1832.38,
              1732.29,
              1832.29,
              1989.39,
              1783.29,
              2130.39,
              2256.39
            ]
          }
        ]
      },
      {
        id: 2,
        name: "\u06CC\u0648\u0631\u0627\u0633\u06CC\u0627\u0646",
        logo: "/img/logos/companies/eurasian-full.svg",
        series: [
          {
            name: "\u0627\u0631\u0632\u0634 \u0633\u0647\u0627\u0645",
            data: [
              1200.23,
              1405.67,
              1653.42,
              1950.18,
              2301.76,
              2714.92,
              3196.57,
              3753.61,
              4393.04,
              5121.88,
              5957.25,
              6907.34
            ]
          }
        ]
      },
      {
        id: 3,
        name: "\u0628\u0627\u0646\u06A9 \u0622\u0645\u0631\u06CC\u06A9\u0627",
        logo: "/img/logos/companies/bank-of-america-full.svg",
        series: [
          {
            name: "\u0627\u0631\u0632\u0634 \u0633\u0647\u0627\u0645",
            data: [
              1300.45,
              1425.67,
              1578.93,
              1750.21,
              1940.56,
              2151.99,
              2386.56,
              2646.32,
              2933.34,
              3249.67,
              3597.38,
              3979.54
            ]
          }
        ]
      }
    ]);
    const activePeriod = ref("year");
    const orderShares = ref();
    const selectedBank = ref(banks.value[0]);
    const target = ref(null);
    const open = ref(false);
    onClickOutside(target, () => open.value = false);
    const areaBtcPrice = reactive(useStockPrice());
    function useStockPrice() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 390;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        colors: [primary.value],
        legend: {
          show: false,
          position: "top"
        },
        grid: {
          show: false,
          padding: {
            left: -10,
            right: 0,
            bottom: 10
          }
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2023-01-01T00:00:00.000Z",
            "2023-02-01T00:00:00.000Z",
            "2023-03-01T00:00:00.000Z",
            "2023-04-01T00:00:00.000Z",
            "2023-05-01T00:00:00.000Z",
            "2023-06-01T00:00:00.000Z",
            "2023-07-01T00:00:00.000Z",
            "2023-08-01T00:00:00.000Z",
            "2023-09-01T00:00:00.000Z",
            "2023-10-01T00:00:00.000Z",
            "2023-11-01T00:00:00.000Z",
            "2023-12-01T00:00:00.000Z"
          ]
        },
        yaxis: {
          labels: {
            show: false,
            offsetX: -15
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          },
          y: {
            formatter: (val) => `$${val}`
          }
        }
      };
      const series = ref(selectedBank.value.series);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_AddonApexcharts = _sfc_main$2;
      const _component_DemoLinkArrow = _sfc_main$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseInputNumber = _sfc_main$4;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20" }, _attrs))}><div class="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center"><div>`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0648\u062C\u0648\u062F\u06CC \u062A\u062C\u0627\u0631\u06CC \u06A9\u0646\u0648\u0646\u06CC `);
          } else {
            return [
              createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u062A\u062C\u0627\u0631\u06CC \u06A9\u0646\u0648\u0646\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "4xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-[&#39;+3.4%&#39;]"${_scopeId}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(22529.43))}</span>`);
          } else {
            return [
              createVNode("span", { class: "after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-['+3.4%']" }, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(22529.43)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "hour" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "hour"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0627\u0639\u062A `);
          } else {
            return [
              createTextVNode(" \u0633\u0627\u0639\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "day" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "day"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0631\u0648\u0632 `);
          } else {
            return [
              createTextVNode(" \u0631\u0648\u0632 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "week" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "week"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0647\u0641\u062A\u0647 `);
          } else {
            return [
              createTextVNode(" \u0647\u0641\u062A\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "month" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "month"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0627\u0647 `);
          } else {
            return [
              createTextVNode(" \u0645\u0627\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        color: unref(activePeriod) === "year" ? "primary" : "default",
        onClick: ($event) => activePeriod.value = "year"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0627\u0644 `);
          } else {
            return [
              createTextVNode(" \u0633\u0627\u0644 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-4"><div class="ltablet:col-span-8 col-span-12 gap-4 lg:col-span-8"><div class="flex flex-col gap-4"><div class="grid gap-4 sm:grid-cols-3"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "flex gap-3 p-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Bank logo" class="size-6"${_scopeId}></div><div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0647\u0627\u0645 \u0686\u06CC\u0633 `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0647\u0627\u0645 \u0686\u06CC\u0633 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>+${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(53.14))}</span><span class="text-success-500 ps-2 text-sm font-semibold"${_scopeId2}>(+1.2%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(53.14)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-sm font-semibold" }, "(+1.2%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "shrink-0" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "Bank logo",
                  class: "size-6"
                })
              ]),
              createVNode("div", { class: "space-y-1" }, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0633\u0647\u0627\u0645 \u0686\u06CC\u0633 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "md",
                  weight: "medium",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(53.14)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-sm font-semibold" }, "(+1.2%)")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "flex gap-3 p-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Bank logo" class="size-6"${_scopeId}></div><div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0647\u0627\u0645 \u0627\u0648\u0631\u0627\u0633\u06CC\u0627\u06CC\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0647\u0627\u0645 \u0627\u0648\u0631\u0627\u0633\u06CC\u0627\u06CC\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>-${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(12.37))}</span><span class="text-danger-500 ps-2 text-sm font-semibold"${_scopeId2}>(-0.7%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "-" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(12.37)), 1),
                    createVNode("span", { class: "text-danger-500 ps-2 text-sm font-semibold" }, "(-0.7%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "shrink-0" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: "Bank logo",
                  class: "size-6"
                })
              ]),
              createVNode("div", { class: "space-y-1" }, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0633\u0647\u0627\u0645 \u0627\u0648\u0631\u0627\u0633\u06CC\u0627\u06CC\u06CC ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "md",
                  weight: "medium",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "-" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(12.37)), 1),
                    createVNode("span", { class: "text-danger-500 ps-2 text-sm font-semibold" }, "(-0.7%)")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "flex gap-3 p-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Bank logo" class="size-6"${_scopeId}></div><div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0647\u0627\u0645 BOA `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0647\u0627\u0645 BOA ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>-${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(23.19))}</span><span class="text-success-500 ps-2 text-sm font-semibold"${_scopeId2}>(+1.9%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "-" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(23.19)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-sm font-semibold" }, "(+1.9%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "shrink-0" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: "Bank logo",
                  class: "size-6"
                })
              ]),
              createVNode("div", { class: "space-y-1" }, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0633\u0647\u0627\u0645 BOA ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "md",
                  weight: "medium",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "-" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(23.19)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-sm font-semibold" }, "(+1.9%)")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative"><div class="absolute end-2 top-2 w-52"><div class="relative z-10 w-full"><button type="button" class="click-blur dark:bg-muted-950 border-muted-200 dark:border-muted-800 w-full rounded-full border bg-white p-3"><span class="flex w-full items-center gap-3 text-start"><img${ssrRenderAttr("src", unref(selectedBank).logo)}${ssrRenderAttr("alt", unref(selectedBank).name)} class="size-6 shrink-0"><div>`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-800 dark:text-muted-200 block capitalize"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(selectedBank).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(selectedBank).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-down",
        class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", unref(open) && "rotate-180"]
      }, null, _parent));
      _push(`</span></button>`);
      if (unref(open)) {
        _push(`<div class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute start-0 top-14 w-full rounded-xl border bg-white p-2 shadow-xl"><ul><!--[-->`);
        ssrRenderList(unref(banks), (bank) => {
          _push(`<li><button type="button" class="hover:bg-muted-100 dark:hover:bg-muted-900 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-start transition-colors duration-300"><img${ssrRenderAttr("src", bank.logo)}${ssrRenderAttr("alt", bank.name)} class="size-6 shrink-0"><span class="block"><span class="font-heading text-muted-800 dark:text-muted-200 block text-sm capitalize">${ssrInterpolate(bank.name)}</span></span></button></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AddonApexcharts, unref(areaBtcPrice), null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u0647\u0627\u0645\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0647\u0627\u0645\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DemoLinkArrow, {
              to: "#",
              label: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="divide-muted-200 dark:divide-muted-800 mb-2 space-y-4 divide-y"${_scopeId}><div class="flex items-center gap-2 pt-4"${_scopeId}><div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Bank logo" class="size-8"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0646\u06A9 \u0686\u06CC\u0633</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u0686\u06CC\u0633")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>+${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(53.14))}</span><span class="text-success-500 ps-2 text-xs font-semibold"${_scopeId2}>(+1.2%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(53.14)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+1.2%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-2 pt-4"${_scopeId}><div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Bank logo" class="size-8"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0646\u06A9 \u0627\u0648\u0631\u0627\u0633\u06CC\u0627\u06CC\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u0627\u0648\u0631\u0627\u0633\u06CC\u0627\u06CC\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>-${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(12.37))}</span><span class="text-danger-500 ps-2 text-xs font-semibold"${_scopeId2}>(-0.7%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "-" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(12.37)), 1),
                    createVNode("span", { class: "text-danger-500 ps-2 text-xs font-semibold" }, "(-0.7%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-down",
              class: "text-danger-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-2 pt-4"${_scopeId}><div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="Bank logo" class="size-8"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0646\u06A9 \u0622\u0645\u0631\u06CC\u06A9\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u0622\u0645\u0631\u06CC\u06A9\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>+${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(23.19))}</span><span class="text-success-500 ps-2 text-xs font-semibold"${_scopeId2}>(+1.9%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(23.19)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+1.9%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-2 pt-4"${_scopeId}><div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="Bank logo" class="size-8"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0646\u06A9 TD</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0627\u0646\u06A9 TD")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>+${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(39.71))}</span><span class="text-success-500 ps-2 text-xs font-semibold"${_scopeId2}>(+2.6%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(39.71)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+2.6%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-2 pt-4"${_scopeId}><div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="Bank logo" class="size-8"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0646\u06A9 \u06A9\u0627\u0633\u067E\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u06A9\u0627\u0633\u067E\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>+${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(76.87))}</span><span class="text-success-500 ps-2 text-xs font-semibold"${_scopeId2}>(+5.8%)</span>`);
                } else {
                  return [
                    createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(76.87)), 1),
                    createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+5.8%)")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0633\u0647\u0627\u0645\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628")
                  ]),
                  _: 1
                }),
                createVNode(_component_DemoLinkArrow, {
                  to: "#",
                  label: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647"
                })
              ]),
              createVNode("div", { class: "divide-muted-200 dark:divide-muted-800 mb-2 space-y-4 divide-y" }, [
                createVNode("div", { class: "flex items-center gap-2 pt-4" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Bank logo",
                      class: "size-8"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u0686\u06CC\u0633")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(53.14)), 1),
                        createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+1.2%)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Icon, {
                      name: "lucide:trending-up",
                      class: "text-success-500 size-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 pt-4" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "Bank logo",
                      class: "size-8"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u0627\u0648\u0631\u0627\u0633\u06CC\u0627\u06CC\u06CC")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "-" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(12.37)), 1),
                        createVNode("span", { class: "text-danger-500 ps-2 text-xs font-semibold" }, "(-0.7%)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Icon, {
                      name: "lucide:trending-down",
                      class: "text-danger-500 size-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 pt-4" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode("img", {
                      src: _imports_2,
                      alt: "Bank logo",
                      class: "size-8"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u0622\u0645\u0631\u06CC\u06A9\u0627")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(23.19)), 1),
                        createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+1.9%)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Icon, {
                      name: "lucide:trending-up",
                      class: "text-success-500 size-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 pt-4" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode("img", {
                      src: _imports_3,
                      alt: "Bank logo",
                      class: "size-8"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0628\u0627\u0646\u06A9 TD")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(39.71)), 1),
                        createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+2.6%)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Icon, {
                      name: "lucide:trending-up",
                      class: "text-success-500 size-4"
                    })
                  ])
                ]),
                createVNode("div", { class: "flex items-center gap-2 pt-4" }, [
                  createVNode("div", { class: "shrink-0" }, [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "Bank logo",
                      class: "size-8"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "sm",
                      weight: "medium",
                      lead: "snug",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0628\u0627\u0646\u06A9 \u06A9\u0627\u0633\u067E\u06CC")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto flex items-center gap-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "medium",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "+" + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(76.87)), 1),
                        createVNode("span", { class: "text-success-500 ps-2 text-xs font-semibold" }, "(+5.8%)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Icon, {
                      name: "lucide:trending-up",
                      class: "text-success-500 size-4"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-4"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-6 md:p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 size-9" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u06CC\u0646\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u06CC\u0646\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0647\u0645\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u06CC\u0631\u0648 `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0647\u0645\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u06CC\u0631\u0648 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-5"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2394.64))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2394.64)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0627\u0644\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0627\u0644\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2789.12))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2789.12)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u0627\u06CC\u06CC\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u067E\u0627\u06CC\u06CC\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2118.27))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2118.27)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0633\u062A\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0633\u062A\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2091.14))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2091.14)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u066A \u062A\u063A\u06CC\u06CC\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u066A \u062A\u063A\u06CC\u06CC\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 6.92% `);
                } else {
                  return [
                    createTextVNode(" 6.92% ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center gap-2" }, [
                createVNode(_component_TairoLogo, { class: "text-primary-500 size-9" }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0627\u06CC\u0646\u0633\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0633\u0647\u0645\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631 \u062A\u0627\u06CC\u0631\u0648 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "space-y-5" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2394.64)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0628\u0627\u0644\u0627 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2789.12)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u067E\u0627\u06CC\u06CC\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2118.27)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0628\u0633\u062A\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(2091.14)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u066A \u062A\u063A\u06CC\u06CC\u0631 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 6.92% ")
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
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-6 md:p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center gap-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "snug",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u0641\u0627\u0631\u0634 \u0645\u0627\u0631\u06A9\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0641\u0627\u0631\u0634 \u0645\u0627\u0631\u06A9\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634 \u0633\u0647\u0627\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634 \u0633\u0647\u0627\u0645 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-5"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0647\u0627\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0647\u0627\u0645 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="max-w-[140px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInputNumber, {
              modelValue: unref(orderShares),
              "onUpdate:modelValue": ($event) => isRef(orderShares) ? orderShares.value = $event : null,
              placeholder: "0.00"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0642\u06CC\u0645\u062A \u0628\u0627\u0632\u0627\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u0642\u06CC\u0645\u062A \u0628\u0627\u0632\u0627\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(689.17))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(689.17)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0645\u06CC\u0633\u06CC\u0648\u0646\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0645\u06CC\u0633\u06CC\u0648\u0646\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(0))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(0)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><hr class="bg-transprent border-muted-200 dark:border-muted-800 border-t"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0647\u0632\u06CC\u0646\u0647 \u062A\u062E\u0645\u06CC\u0646\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0647\u0632\u06CC\u0646\u0647 \u062A\u062E\u0645\u06CC\u0646\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(0))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(0)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "md",
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center gap-2" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0633\u0641\u0627\u0631\u0634 \u0645\u0627\u0631\u06A9\u062A")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634 \u0633\u0647\u0627\u0645 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "space-y-5" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0633\u0647\u0627\u0645 ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "max-w-[140px]" }, [
                    createVNode(_component_BaseInputNumber, {
                      modelValue: unref(orderShares),
                      "onUpdate:modelValue": ($event) => isRef(orderShares) ? orderShares.value = $event : null,
                      placeholder: "0.00"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0642\u06CC\u0645\u062A \u0628\u0627\u0632\u0627\u0631 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(689.17)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0645\u06CC\u0633\u06CC\u0648\u0646\u200C\u0647\u0627 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(0)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("hr", { class: "bg-transprent border-muted-200 dark:border-muted-800 border-t" }),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0647\u0632\u06CC\u0646\u0647 \u062A\u062E\u0645\u06CC\u0646\u06CC ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(0)), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseButton, {
                    rounded: "md",
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062E\u0631\u06CC\u062F \u0633\u0647\u0627\u0645 ")
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
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "relative flex flex-col gap-4 sm:flex-row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col p-6 md:p-8"${_scopeId}><div class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 mb-4 flex size-14 items-center justify-center rounded-full border bg-white"${_scopeId}><div class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-10 items-center justify-center rounded-full border bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bank-duotone",
              class: "text-primary-500 size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              weight: "medium",
              size: "lg",
              class: "text-muted-800 dark:text-muted-100 mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0648\u0644 \u0633\u0631\u06CC\u0639 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0648\u0644 \u0633\u0631\u06CC\u0639 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400 mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. `);
                } else {
                  return [
                    createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mb-1 mt-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoLinkArrow, {
              to: "#",
              label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col p-6 md:p-8" }, [
                createVNode("div", { class: "dark:bg-muted-900 border-muted-200 dark:border-muted-800 mb-4 flex size-14 items-center justify-center rounded-full border bg-white" }, [
                  createVNode("div", { class: "dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-10 items-center justify-center rounded-full border bg-white" }, [
                    createVNode(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "text-primary-500 size-6"
                    })
                  ])
                ]),
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "lg",
                  class: "text-muted-800 dark:text-muted-100 mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0648\u0644 \u0633\u0631\u06CC\u0639 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400 mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mb-1 mt-auto" }, [
                  createVNode(_component_DemoLinkArrow, {
                    to: "#",
                    label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/trading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
