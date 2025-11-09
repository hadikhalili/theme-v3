import { g as useTailwindColors, c as _sfc_main$v, b as _sfc_main$w, h as _sfc_main$u, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$3 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$4 } from './DemoTeamListCompact-DyRgatce.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-B-NRPykg.mjs';
import { useSSRContext, defineComponent, ref, reactive, shallowRef, withCtx, createTextVNode, unref, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { f as formatPrice } from './format-currency-Xti0Ih3A.mjs';
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
import './BaseAvatar-3aYTRoBN.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoPopularCryptos",
  __ssrInlineRender: true,
  setup(__props) {
    const currencies = [
      {
        id: 0,
        name: "LTC",
        fullName: "Litecoin",
        icon: "cryptocurrency:ltc"
      },
      {
        id: 1,
        name: "ETH",
        fullName: "Ethereum",
        icon: "cryptocurrency:eth"
      },
      {
        id: 2,
        name: "BELA",
        fullName: "Belacoin",
        icon: "cryptocurrency:bela"
      },
      {
        id: 4,
        name: "XBY",
        fullName: "Xtrabytes",
        icon: "cryptocurrency:xby"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(currencies, (currency) => {
        _push(`<div class="flex items-center gap-3"><div class="border-muted-200 dark:border-muted-700 flex size-10 items-center justify-center rounded-full border">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: currency.icon,
          class: "text-muted-400 size-7"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "xs",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(currency.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(currency.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>\u062A\u0648\u06A9\u0646 ${ssrInterpolate(currency.fullName)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, "\u062A\u0648\u06A9\u0646 " + toDisplayString(currency.fullName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center">`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          rounded: "lg",
          muted: "",
          class: "scale-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "size-5 rtl:rotate-180"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "size-5 rtl:rotate-180"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPopularCryptos.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "banking-3",
  __ssrInlineRender: true,
  setup(__props) {
    const activePeriod = ref("week");
    const areaBtcPrice = reactive(useAreaBtcPrice());
    const radialEvolution = reactive(useRadialEvolution());
    const radialPopularity = reactive(useRadialPopularity());
    function useAreaBtcPrice() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 350;
      const options = shallowRef({
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          foreColor: "#999",
          stacked: true,
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledSeries: [0],
            top: -2,
            left: 2,
            blur: 5,
            opacity: 0.06
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [success.value, primary.value, info.value],
        stroke: {
          curve: "smooth",
          width: 3
        },
        title: {
          text: "",
          align: "left"
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          strokeColor: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          fillOpacity: 1,
          hover: {
            size: 6
          }
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            offsetX: 0,
            offsetY: -5
          },
          tooltip: {
            enabled: true
          }
        },
        grid: {
          show: true,
          padding: {
            left: -5,
            right: 5
          }
        },
        tooltip: {
          x: {
            format: "dd MMMM yyyy"
          },
          y: {
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "center"
        },
        fill: {
          type: "solid",
          fillOpacity: 0.7
        }
      });
      const series = shallowRef([
        {
          name: "\u0645\u0648\u0631\u062F \u0627\u0646\u062A\u0638\u0627\u0631",
          data: generateDayWiseTimeSeries(0, 18)
        },
        {
          name: "\u0648\u0627\u0642\u0639\u06CC",
          data: generateDayWiseTimeSeries(1, 18)
        }
      ]);
      function generateDayWiseTimeSeries(s, count) {
        const values = [
          [
            0.4,
            0.3,
            1,
            0.9,
            2.9,
            1.9,
            2.5,
            0.9,
            1.2,
            0.7,
            1.9,
            0.5,
            1.3,
            0.9,
            1.7,
            0.2,
            0.7,
            0.5
          ],
          [
            0.2,
            0.3,
            0.8,
            0.7,
            2.2,
            1.6,
            2.3,
            0.7,
            1.1,
            0.5,
            1.2,
            0.5,
            1,
            0.4,
            1.5,
            0.2,
            0.6,
            2
          ]
        ];
        let i = 0;
        const series2 = [];
        let x = (/* @__PURE__ */ new Date("11 Nov 2022")).getTime();
        while (i < count) {
          series2.push([x, values[s][i]]);
          x += 864e5;
          i++;
        }
        return series2;
      }
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialEvolution() {
      const { primary, info, success } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const series = shallowRef([54]);
      const options = {
        colors: [primary.value, success.value, info.value],
        title: {
          text: "",
          align: "left"
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                offsetY: 15,
                fontSize: "13px",
                fontFamily: "Vazirmatn FD, sans-serif",
                color: "var(--color-muted-400)",
                formatter: function() {
                  return ["(\u06F3\u06F0 \u0631\u0648\u0632)"];
                }
              },
              value: {
                color: "var(--color-muted-400)",
                offsetY: -20,
                fontSize: "16px",
                fontFamily: "Vazirmatn FD, sans-serif",
                fontWeight: "500"
              }
            }
          }
        },
        labels: ["\u0646\u0633\u0628\u062A \u0645\u06CC\u0627\u0646\u0647"]
      };
      return {
        type,
        height,
        series,
        options
      };
    }
    function useRadialPopularity() {
      const { primary, success } = useTailwindColors();
      const type = "radialBar";
      const height = 225;
      const options = {
        title: {
          text: ""
        },
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          }
        },
        colors: [primary.value, success.value],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "13px",
                fontWeight: "600",
                color: "var(--color-muted-400)",
                offsetY: 80
              },
              value: {
                offsetY: 40,
                fontSize: "18px",
                fontFamily: "Vazirmatn FD, sans-serif",
                fontWeight: "500",
                color: void 0,
                formatter: function(val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          }
        },
        stroke: {
          dashArray: 4
        },
        labels: ["(\u06F3\u06F0 \u0631\u0648\u0632)"]
      };
      const series = shallowRef([67]);
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
      const _component_BaseButtonAction = _sfc_main$2;
      const _component_BaseCard = _sfc_main$u;
      const _component_AddonApexcharts = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoTeamListCompact = _sfc_main$4;
      const _component_DemoPopularCryptos = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center"><div>`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0622\u062E\u0631\u06CC\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 (BTC) `);
          } else {
            return [
              createTextVNode(" \u0622\u062E\u0631\u06CC\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 (BTC) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        size: "3xl",
        weight: "bold",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-[&#39;+3.4%&#39;]"${_scopeId}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584.3))}</span>`);
          } else {
            return [
              createVNode("span", { class: "after:text-success-500 after:relative after:-end-2 after:-top-3 after:text-sm after:content-['+3.4%']" }, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584.3)), 1)
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "space-y-1 p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u0632\u0634 \u0628\u0627\u0632\u0627\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u0632\u0634 \u0628\u0627\u0632\u0627\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "lg",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(129992260090))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(129992260090)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0627\u0631\u0632\u0634 \u0628\u0627\u0632\u0627\u0631 ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseHeading, {
                size: "lg",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(129992260090)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "space-y-1 p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062D\u062C\u0645 \u06F2\u06F4 \u0633\u0627\u0639\u062A `);
                } else {
                  return [
                    createTextVNode(" \u062D\u062C\u0645 \u06F2\u06F4 \u0633\u0627\u0639\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "lg",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(453178))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(453178)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062D\u062C\u0645 \u06F2\u06F4 \u0633\u0627\u0639\u062A ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseHeading, {
                size: "lg",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(453178)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "space-y-1 p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0627\u0644\u0627 \u0648 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0631 \u06F2\u06F4 \u0633\u0627\u0639\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0627\u0644\u0627 \u0648 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0631 \u06F2\u06F4 \u0633\u0627\u0639\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "lg",
              weight: "semibold",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10212))} - ${ssrInterpolate(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584))}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10212)) + " - " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0628\u0627\u0644\u0627 \u0648 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0631 \u06F2\u06F4 \u0633\u0627\u0639\u062A ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseHeading, {
                size: "lg",
                weight: "semibold",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10212)) + " - " + toDisplayString(("formatPrice" in _ctx ? _ctx.formatPrice : unref(formatPrice))(10584)), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A BTC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A BTC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaBtcPrice), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A BTC")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaBtcPrice), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u062A\u062D\u0648\u0644 BTC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u062D\u0648\u0644 BTC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u0631\u06CC\u062F \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u0631\u06CC\u062F \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialEvolution), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062A\u062D\u0648\u0644 BTC")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062E\u0631\u06CC\u062F \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(radialEvolution), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u0645\u062D\u0628\u0648\u0628\u06CC\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u062D\u0628\u0648\u0628\u06CC\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u0631\u06CC\u062F BT `);
                } else {
                  return [
                    createTextVNode(" \u062E\u0631\u06CC\u062F BT ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialPopularity), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0645\u062D\u0628\u0648\u0628\u06CC\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062E\u0631\u06CC\u062F BT ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(radialPopularity), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-4"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "cryptocurrency:btc",
              class: "size-9 text-orange-400"
            }, null, _parent2, _scopeId));
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
                  _push3(`<span${_scopeId2}>\u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` BTC `);
                } else {
                  return [
                    createTextVNode(" BTC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u0632\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u0632\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 \u06CC\u06A9 \u0627\u0631\u0632 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0633\u0627\u0644 \u06F2\u06F0\u06F0\u06F8 \u062A\u0648\u0633\u0637 \u0634\u062E\u0635 \u06CC\u0627 \u06AF\u0631\u0648\u0647\u06CC \u0646\u0627\u0634\u0646\u0627\u0633 \u0628\u0627 \u0646\u0627\u0645 \u0633\u0627\u062A\u0648\u0634\u06CC \u0646\u0627\u06A9\u0627\u0645\u0648\u062A\u0648 \u0627\u062E\u062A\u0631\u0627\u0639 \u0634\u062F. \u0627\u06CC\u0646 \u0627\u0631\u0632 \u0628\u0647 \u0635\u0648\u0631\u062A \u0646\u0627\u0634\u0646\u0627\u0633 \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0634\u062F\u060C \u0628\u062F\u0648\u0646 \u0628\u0627\u0646\u06A9 \u0645\u0631\u06A9\u0632\u06CC \u06CC\u0627 \u0645\u062F\u06CC\u0631 \u0648\u0627\u062D\u062F\u060C \u0648 \u0628\u0647 \u0635\u0648\u0631\u062A \u0647\u0645\u062A\u0627 \u0628\u0647 \u0647\u0645\u062A\u0627 \u0639\u0645\u0644 \u0645\u06CC\u200C\u06A9\u0646\u062F. `);
                } else {
                  return [
                    createTextVNode(" \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 \u06CC\u06A9 \u0627\u0631\u0632 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0633\u0627\u0644 \u06F2\u06F0\u06F0\u06F8 \u062A\u0648\u0633\u0637 \u0634\u062E\u0635 \u06CC\u0627 \u06AF\u0631\u0648\u0647\u06CC \u0646\u0627\u0634\u0646\u0627\u0633 \u0628\u0627 \u0646\u0627\u0645 \u0633\u0627\u062A\u0648\u0634\u06CC \u0646\u0627\u06A9\u0627\u0645\u0648\u062A\u0648 \u0627\u062E\u062A\u0631\u0627\u0639 \u0634\u062F. \u0627\u06CC\u0646 \u0627\u0631\u0632 \u0628\u0647 \u0635\u0648\u0631\u062A \u0646\u0627\u0634\u0646\u0627\u0633 \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0634\u062F\u060C \u0628\u062F\u0648\u0646 \u0628\u0627\u0646\u06A9 \u0645\u0631\u06A9\u0632\u06CC \u06CC\u0627 \u0645\u062F\u06CC\u0631 \u0648\u0627\u062D\u062F\u060C \u0648 \u0628\u0647 \u0635\u0648\u0631\u062A \u0647\u0645\u062A\u0627 \u0628\u0647 \u0647\u0645\u062A\u0627 \u0639\u0645\u0644 \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0642\u0627\u06CC\u0633\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0642\u0627\u06CC\u0633\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062E\u0631\u06CC\u062F \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062E\u0631\u06CC\u062F \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center gap-2" }, [
                createVNode(_component_Icon, {
                  name: "cryptocurrency:btc",
                  class: "size-9 text-orange-400"
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "snug",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    weight: "semibold",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" BTC ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode(_component_BaseButtonAction, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u0631\u0632\u0647\u0627 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646 \u06CC\u06A9 \u0627\u0631\u0632 \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u0633\u0627\u0644 \u06F2\u06F0\u06F0\u06F8 \u062A\u0648\u0633\u0637 \u0634\u062E\u0635 \u06CC\u0627 \u06AF\u0631\u0648\u0647\u06CC \u0646\u0627\u0634\u0646\u0627\u0633 \u0628\u0627 \u0646\u0627\u0645 \u0633\u0627\u062A\u0648\u0634\u06CC \u0646\u0627\u06A9\u0627\u0645\u0648\u062A\u0648 \u0627\u062E\u062A\u0631\u0627\u0639 \u0634\u062F. \u0627\u06CC\u0646 \u0627\u0631\u0632 \u0628\u0647 \u0635\u0648\u0631\u062A \u0646\u0627\u0634\u0646\u0627\u0633 \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0634\u062F\u060C \u0628\u062F\u0648\u0646 \u0628\u0627\u0646\u06A9 \u0645\u0631\u06A9\u0632\u06CC \u06CC\u0627 \u0645\u062F\u06CC\u0631 \u0648\u0627\u062D\u062F\u060C \u0648 \u0628\u0647 \u0635\u0648\u0631\u062A \u0647\u0645\u062A\u0627 \u0628\u0647 \u0647\u0645\u062A\u0627 \u0639\u0645\u0644 \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mt-6 flex items-center gap-2" }, [
                createVNode(_component_BaseButton, {
                  color: "default",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0645\u0642\u0627\u06CC\u0633\u0647")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062E\u0631\u06CC\u062F \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062A\u06CC\u0645 \u0645\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u06CC\u0645 \u0645\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTeamListCompact, { actions: "" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062A\u06CC\u0645 \u0645\u0646")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTeamListCompact, { actions: "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u06A9\u0647\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u06A9\u0647\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoPopularCryptos, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0633\u06A9\u0647\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoPopularCryptos)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/banking-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
