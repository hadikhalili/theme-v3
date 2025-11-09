import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { g as useTailwindColors, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, h as _sfc_main$u, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-cnqu1j3S.mjs';
import { defineComponent, reactive, shallowRef, withCtx, createVNode, unref, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { e as asKDollar } from './apex-4afj-Z69.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Calendar } from 'v-calendars';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ecommerce",
  __ssrInlineRender: true,
  setup(__props) {
    const sparkLineOne = reactive(useSparkLineOne());
    const sparkLineTwo = reactive(useSparkLineTwo());
    const sparkLineThree = reactive(useSparkLineThree());
    const sparkLineFour = reactive(useSparkLineFour());
    const areaCustomers = reactive(useAreaCustomers());
    const radialSalesRevenue = reactive(useRadialSalesRevenue());
    const radialSmallOne = reactive(useRadialSmallOne());
    const radialSmallTwo = reactive(useRadialSmallTwo());
    const radialSmallThree = reactive(useRadialSmallThree());
    const gaugePersonal = reactive(useGaugePersonal());
    const barOrders = reactive(useBarOrders());
    function useSparkLineOne() {
      const { primary } = useTailwindColors();
      const height = 60;
      const type = "line";
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          id: "sparkline1",
          sparkline: {
            enabled: true
          },
          group: "sparklines"
        },
        grid: {
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        stroke: {
          curve: "smooth",
          width: [2]
        },
        markers: {
          size: 0
        },
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "right"
          },
          x: {
            show: false
          }
        },
        colors: [primary.value]
      };
      const series = shallowRef([
        {
          name: "\u0641\u0631\u0648\u0634",
          data: [2565, 6126, 4271, 5249, 2245, 4424, 1752, 3996, 976, 2157]
        }
      ]);
      return { height, type, options, series };
    }
    function useSparkLineTwo() {
      const { success } = useTailwindColors();
      const type = "line";
      const height = 60;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          id: "sparkline2",
          sparkline: {
            enabled: true
          },
          group: "sparklines"
        },
        grid: {
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        stroke: {
          curve: "smooth",
          width: [2]
        },
        markers: {
          size: 0
        },
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "right"
          },
          x: {
            show: false
          },
          y: {
            formatter: asKDollar
          }
        },
        colors: [success.value]
      };
      const series = shallowRef([
        {
          name: "\u062F\u0631\u0622\u0645\u062F",
          data: [12.2, 14.5, 2.5, 47.5, 32.5, 44.5, 14.8, 55.5, 41.3, 69.7]
        }
      ]);
      return { height, type, options, series };
    }
    function useSparkLineThree() {
      const { info } = useTailwindColors();
      const height = 60;
      const type = "line";
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          id: "sparkline3",
          sparkline: {
            enabled: true
          },
          group: "sparklines"
        },
        grid: {
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        stroke: {
          curve: "smooth",
          width: [2]
        },
        markers: {
          size: 0
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "right"
          },
          x: {
            show: false
          }
        },
        colors: [info.value],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0633\u0641\u0627\u0631\u0634\u0627\u062A \u062C\u062F\u06CC\u062F",
          data: [4457, 4533, 7274, 3272, 5876, 3271, 4614, 3553, 4835, 1579]
        }
      ]);
      return { height, type, options, series };
    }
    function useSparkLineFour() {
      const { danger } = useTailwindColors();
      const type = "line";
      const height = 60;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          id: "sparkline4",
          sparkline: {
            enabled: true
          },
          group: "sparklines"
        },
        grid: {
          padding: {
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        stroke: {
          curve: "smooth",
          width: [2]
        },
        markers: {
          size: 0
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "right"
          },
          x: {
            show: false
          }
        },
        colors: [danger.value],
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0,
          labels: {
            minWidth: 100
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0631\u062F \u0634\u062F\u0647",
          data: [1412, 725, 427, 655, 145, 325, 197, 584, 424, 651]
        }
      ]);
      return { height, type, options, series };
    }
    function useAreaCustomers() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 258;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [primary.value, info.value, success.value],
        title: {
          show: false,
          text: void 0,
          align: "left"
        },
        legend: {
          show: true,
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
            "2020-09-19T00:00:00.000Z",
            "2020-09-20T01:30:00.000Z",
            "2020-09-21T02:30:00.000Z",
            "2020-09-22T03:30:00.000Z",
            "2020-09-23T04:30:00.000Z",
            "2020-09-24T05:30:00.000Z",
            "2020-09-25T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0628\u0627\u0632\u06AF\u0634\u062A",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "\u0646\u0648\u0622\u0648\u0631\u0627\u0646",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "\u0631\u062F \u0634\u062F\u0647",
          data: [78, 53, 36, 10, 14, 5, 2]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSalesRevenue() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 155;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%"
            },
            dataLabels: {
              show: true,
              name: {
                show: false,
                fontSize: "12px",
                fontFamily: "Vazirmatn FD, sans-serif",
                fontWeight: 400,
                offsetY: 5
              },
              value: {
                show: true,
                fontWeight: 600,
                fontFamily: "Vazirmatn FD, sans-serif",
                fontSize: "16px",
                offsetY: 5
              }
            }
          }
        },
        labels: ["\u067E\u06CC\u0634\u0631\u0641\u062A"]
      };
      const series = shallowRef([65]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSmallOne() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 100;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          height: 100,
          type: "radialBar",
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "35%"
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: [""]
      };
      const series = shallowRef([31]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSmallTwo() {
      const { success } = useTailwindColors();
      const type = "radialBar";
      const height = 100;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          height: 100,
          type: "radialBar",
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [success.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "35%"
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: [""]
      };
      const series = shallowRef([53]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialSmallThree() {
      const { danger } = useTailwindColors();
      const type = "radialBar";
      const height = 100;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          height: 100,
          type: "radialBar",
          offsetY: -10,
          toolbar: {
            show: false
          }
        },
        colors: [danger.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "35%"
            },
            dataLabels: {
              show: false
            }
          }
        },
        labels: [""]
      };
      const series = shallowRef([84]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useGaugePersonal() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        title: {
          text: void 0
        },
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            hollow: {
              margin: 0,
              size: "35%"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["\u0646\u062A\u0627\u06CC\u062C \u0645\u062A\u0648\u0633\u0637"]
      };
      const series = shallowRef([76]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useBarOrders() {
      const { primary, success } = useTailwindColors();
      const type = "bar";
      const height = 210;
      const series = shallowRef([]);
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [primary.value, success.value],
        dataLabels: {
          enabled: false
        },
        noData: {
          text: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC..."
        },
        xaxis: {
          type: "category",
          tickPlacement: "on",
          labels: {
            rotate: -45,
            rotateAlways: true
          }
        }
      };
      return {
        height,
        type,
        series,
        options
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2;
      const _component_AddonApexcharts = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full">`);
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
            _push2(`<span${_scopeId}>\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u0645\u0627\u06CC\u0627</span>`);
          } else {
            return [
              createVNode("span", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u0645\u0627\u06CC\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500 dark:text-muted-400"${_scopeId}> \u062E\u0648\u0634\u062D\u0627\u0644\u06CC\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\u062A\u0627\u0646 \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u0645. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062E\u0648\u0634\u062D\u0627\u0644\u06CC\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\u062A\u0627\u0646 \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u0645. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0648\u0634\u06AF\u0627\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0648\u0634\u06AF\u0627\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ptablet:col-span-6 col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0641\u0631\u0648\u0634</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0641\u0631\u0648\u0634")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:shopping-cart-duotone",
              class: "text-primary-500 size-7"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between gap-6 pt-4"${_scopeId}><div class="grow"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 641.4k </span></div><div class="grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkLineOne), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-400 mb-1"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0641\u0631\u0648\u0634")
                  ]),
                  _: 1
                }),
                createVNode(_component_Icon, {
                  name: "ph:shopping-cart-duotone",
                  class: "text-primary-500 size-7"
                })
              ]),
              createVNode("div", { class: "flex items-center justify-between gap-6 pt-4" }, [
                createVNode("div", { class: "grow" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 641.4k ")
                ]),
                createVNode("div", { class: "grow" }, [
                  createVNode(_component_AddonApexcharts, unref(sparkLineOne), null, 16)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062F\u0631\u0622\u0645\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:money-duotone",
              class: "text-success-500 size-7"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between gap-6 pt-4"${_scopeId}><div class="grow"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> \u06F3\u06F8\u06F9\u066C\u06F9\u06F0\u06F0\u066C\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 </span></div><div class="grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkLineTwo), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-400 mb-1"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F")
                  ]),
                  _: 1
                }),
                createVNode(_component_Icon, {
                  name: "ph:money-duotone",
                  class: "text-success-500 size-7"
                })
              ]),
              createVNode("div", { class: "flex items-center justify-between gap-6 pt-4" }, [
                createVNode("div", { class: "grow" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " \u06F3\u06F8\u06F9\u066C\u06F9\u06F0\u06F0\u066C\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
                ]),
                createVNode("div", { class: "grow" }, [
                  createVNode(_component_AddonApexcharts, unref(sparkLineTwo), null, 16)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u0641\u0627\u0631\u0634\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0641\u0627\u0631\u0634\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:package-duotone",
              class: "text-info-500 size-7"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between gap-6 pt-4"${_scopeId}><div class="grow"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 981 </span></div><div class="grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkLineThree), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-400 mb-1"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0633\u0641\u0627\u0631\u0634\u0627\u062A")
                  ]),
                  _: 1
                }),
                createVNode(_component_Icon, {
                  name: "ph:package-duotone",
                  class: "text-info-500 size-7"
                })
              ]),
              createVNode("div", { class: "flex items-center justify-between gap-6 pt-4" }, [
                createVNode("div", { class: "grow" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 981 ")
                ]),
                createVNode("div", { class: "grow" }, [
                  createVNode(_component_AddonApexcharts, unref(sparkLineThree), null, 16)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0631\u062F \u0634\u062F\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0631\u062F \u0634\u062F\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:timer-duotone",
              class: "text-danger-500 size-7"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between gap-6 pt-4"${_scopeId}><div class="grow"${_scopeId}><span class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 43 </span></div><div class="grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(sparkLineFour), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-400 mb-1"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0631\u062F \u0634\u062F\u0647")
                  ]),
                  _: 1
                }),
                createVNode(_component_Icon, {
                  name: "ph:timer-duotone",
                  class: "text-danger-500 size-7"
                })
              ]),
              createVNode("div", { class: "flex items-center justify-between gap-6 pt-4" }, [
                createVNode("div", { class: "grow" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 43 ")
                ]),
                createVNode("div", { class: "grow" }, [
                  createVNode(_component_AddonApexcharts, unref(sparkLineFour), null, 16)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative col-span-12 md:col-span-7">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0631\u0631\u0633\u06CC \u062F\u0631\u0622\u0645\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0631\u0631\u0633\u06CC \u062F\u0631\u0622\u0645\u062F")
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
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex gap-8"${_scopeId}><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>\u0627\u06CC\u0646 \u0645\u0627\u0647</span><p class="text-primary-500 font-sans text-lg font-medium"${_scopeId}> \u06F7\u06F5\u06F6\u06F8\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646 </p></div><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647</span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> \u06F5\u06F9,\u06F7\u06F2\u06F4 \u062A\u0648\u0645\u0627\u0646 </p></div><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646</span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> 66,561 \u062A\u0648\u0645\u0627\u0646 </p></div></div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaCustomers), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-2 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0628\u0631\u0631\u0633\u06CC \u062F\u0631\u0622\u0645\u062F")
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
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex gap-8" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, "\u0627\u06CC\u0646 \u0645\u0627\u0647"),
                  createVNode("p", { class: "text-primary-500 font-sans text-lg font-medium" }, " \u06F7\u06F5\u06F6\u06F8\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, "\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647"),
                  createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " \u06F5\u06F9,\u06F7\u06F2\u06F4 \u062A\u0648\u0645\u0627\u0646 ")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "text-muted-400 font-sans text-xs" }, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646"),
                  createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " 66,561 \u062A\u0648\u0645\u0627\u0646 ")
                ])
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaCustomers), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative col-span-12 md:col-span-5"><div class="flex h-full flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex-1 p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-center"${_scopeId}><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 mb-4 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062F\u0631\u0622\u0645\u062F \u0641\u0631\u0648\u0634</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F \u0641\u0631\u0648\u0634")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "lg",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 mb-2 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F8\u06F6,\u06F4\u06F1\u06F2,\u06F6\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F8\u06F6,\u06F4\u06F1\u06F2,\u06F6\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0646\u0648\u0645 \u0627\u06CC\u0646\u062A\u06AF\u0631\u0627\u062A\u06CC\u0627\u0633 \u06A9\u0648\u0631\u06CC\u0633. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0646\u0648\u0645 \u0627\u06CC\u0646\u062A\u06AF\u0631\u0627\u062A\u06CC\u0627\u0633 \u06A9\u0648\u0631\u06CC\u0633. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSalesRevenue), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-center" }, [
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "semibold",
                    lead: "tight",
                    class: "text-muted-800 mb-4 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F \u0641\u0631\u0648\u0634")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-2 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u06F8\u06F6,\u06F4\u06F1\u06F2,\u06F6\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0646\u0648\u0645 \u0627\u06CC\u0646\u062A\u06AF\u0631\u0627\u062A\u06CC\u0627\u0633 \u06A9\u0648\u0631\u06CC\u0633. ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSalesRevenue), null, 16)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex-1 p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u0622\u0645\u0627\u0631 \u0627\u0636\u0627\u0641\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0622\u0645\u0627\u0631 \u0627\u0636\u0627\u0641\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between gap-2"${_scopeId}><div class="flex flex-1 flex-col gap-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSmallOne), null, _parent2, _scopeId));
            _push2(`<div class="-mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>278</span>`);
                } else {
                  return [
                    createVNode("span", null, "278")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-1 flex-col gap-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSmallTwo), null, _parent2, _scopeId));
            _push2(`<div class="-mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>1,519</span>`);
                } else {
                  return [
                    createVNode("span", null, "1,519")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-1 flex-col gap-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialSmallThree), null, _parent2, _scopeId));
            _push2(`<div class="-mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>3,214</span>`);
                } else {
                  return [
                    createVNode("span", null, "3,214")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u0628\u0633\u062A\u0647\u200C\u0634\u062F\u0647</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u0628\u0633\u062A\u0647\u200C\u0634\u062F\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0622\u0645\u0627\u0631 \u0627\u0636\u0627\u0641\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-between gap-2" }, [
                createVNode("div", { class: "flex flex-1 flex-col gap-2 text-center" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSmallOne), null, 16),
                  createVNode("div", { class: "-mt-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "278")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-1 flex-col gap-2 text-center" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSmallTwo), null, 16),
                  createVNode("div", { class: "-mt-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "1,519")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "flex flex-1 flex-col gap-2 text-center" }, [
                  createVNode(_component_AddonApexcharts, unref(radialSmallThree), null, 16),
                  createVNode("div", { class: "-mt-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "3,214")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u0628\u0633\u062A\u0647\u200C\u0634\u062F\u0647")
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
      _push(`</div></div><div class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex flex-col p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
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
                    createVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "py-16" }, [
                createVNode(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, 16)
              ]),
              createVNode("div", { class: "mt-auto text-center" }, [
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-6">`);
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
                  _push3(`<span${_scopeId2}>\u062E\u0644\u0627\u0635\u0647 \u0633\u0641\u0627\u0631\u0634\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062E\u0644\u0627\u0635\u0647 \u0633\u0641\u0627\u0631\u0634\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barOrders), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062E\u0644\u0627\u0635\u0647 \u0633\u0641\u0627\u0631\u0634\u0627\u062A")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(barOrders), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "py-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              attributes: [
                {
                  key: "today",
                  highlight: true,
                  order: 0,
                  dates: [/* @__PURE__ */ new Date()]
                }
              ],
              locale: "fa",
              "title-position": "right",
              expanded: "",
              borderless: "",
              transparent: "",
              "trim-weeks": "",
              class: "max-w-full rounded-md"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                attributes: [
                  {
                    key: "today",
                    highlight: true,
                    order: 0,
                    dates: [/* @__PURE__ */ new Date()]
                  }
                ],
                locale: "fa",
                "title-position": "right",
                expanded: "",
                borderless: "",
                transparent: "",
                "trim-weeks": "",
                class: "max-w-full rounded-md"
              }, null, 8, ["attributes"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/ecommerce.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
