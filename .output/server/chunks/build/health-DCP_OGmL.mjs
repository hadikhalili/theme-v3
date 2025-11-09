import { g as useTailwindColors, b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, h as _sfc_main$u, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$3 } from './DemoSearchCompact-B3L12Nx7.mjs';
import { defineComponent, reactive, shallowRef, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { c as asPercent } from './apex-4afj-Z69.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/img/illustrations/dashboards/health/doctor.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "health",
  __ssrInlineRender: true,
  setup(__props) {
    const areaCondition = reactive(useAreaCondition());
    const scatterEnergy = reactive(useScatterEnergy());
    const barOxygen = reactive(useBarOxygen());
    const areaProgress = reactive(useAreaProgress());
    const gaugePersonal = reactive(useGaugePersonal());
    function useAreaCondition() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 280;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          offsetX: 20,
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
        grid: {
          show: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "straight"
        },
        colors: [primary.value],
        labels: ["\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631"],
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
      const series = shallowRef([
        {
          name: "\u0648\u0636\u0639\u06CC\u062A (pt)",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useScatterEnergy() {
      const { primary, info, success } = useTailwindColors();
      const height = 280;
      const type = "scatter";
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          height: 280,
          type: "scatter",
          zoom: {
            type: "xy"
          },
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [primary.value, success.value, info.value],
        dataLabels: {
          enabled: false,
          show: false
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          show: false,
          type: "datetime"
        },
        yaxis: {
          show: false,
          max: 70
        },
        legend: {
          show: false,
          position: "top",
          horizontalAlign: "center"
        }
      };
      const series = shallowRef([
        {
          name: "\u062A\u0648\u0646\u06CC\u06A9",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("Oct 11 2020 GMT")).getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "\u062A\u0627\u0646\u062A\u0631\u0627",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("Oct 11 2020 GMT")).getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },
        {
          name: "\u062D\u06CC\u0627\u062A\u06CC",
          data: generateDayWiseTimeSeries(
            (/* @__PURE__ */ new Date("Oct 11 2020 GMT")).getTime(),
            30,
            {
              min: 10,
              max: 60
            }
          )
        }
      ]);
      function generateDayWiseTimeSeries(baseval, count, yrange) {
        let i = 0;
        const series2 = [];
        while (i < count) {
          const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          series2.push([baseval, y]);
          baseval += 864e5;
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
    function useBarOxygen() {
      const { primary } = useTailwindColors();
      const height = 280;
      const type = "bar";
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top"
              // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: asPercent,
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        grid: {
          show: false
        },
        xaxis: {
          categories: ["\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647"],
          position: "top",
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: asPercent
          }
        },
        colors: [primary.value]
      };
      const series = shallowRef([
        {
          name: "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A (pt)",
          data: [23, 26, 10, 7, 11, 18, 16]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useAreaProgress() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 280;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          offsetX: 20,
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
        grid: {
          show: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        colors: [primary.value],
        labels: ["\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631"],
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
      const series = shallowRef([
        {
          name: "\u067E\u06CC\u0634\u0631\u0641\u062A (pt)",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ]);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_AddonApexcharts = _sfc_main$2;
      const _component_DemoSearchCompact = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"><div class="relative h-[168px] w-[280px] shrink-0"><img class="pointer-events-none absolute -start-6 -top-20 sm:-start-10"${ssrRenderAttr("src", _imports_0)} alt="Doctor illustration"></div><div class="mt-6 grow sm:mt-0"><div class="text-center sm:text-start">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062E\u0644\u0627\u0635\u0647 \u0627\u0645\u0631\u0648\u0632</span>`);
          } else {
            return [
              createVNode("span", null, "\u062E\u0644\u0627\u0635\u0647 \u0627\u0645\u0631\u0648\u0632")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0641\u0639\u0627\u0644\u06CC\u062A \u062E\u0648\u062F \u0631\u0627 \u0646\u0638\u0627\u0631\u062A \u06A9\u0646\u06CC\u062F \u0648 \u0628\u0647 \u0628\u0647\u0628\u0648\u062F \u0646\u0642\u0627\u0637 \u0636\u0639\u0641 \u062E\u0648\u062F \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0641\u0639\u0627\u0644\u06CC\u062A \u062E\u0648\u062F \u0631\u0627 \u0646\u0638\u0627\u0631\u062A \u06A9\u0646\u06CC\u062F \u0648 \u0628\u0647 \u0628\u0647\u0628\u0648\u062F \u0646\u0642\u0627\u0637 \u0636\u0639\u0641 \u062E\u0648\u062F \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-6 flex flex-wrap gap-y-6 pb-4 text-center sm:mt-4 sm:gap-x-8 sm:pb-0 sm:text-start"><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06F9\u06F0\u06F0 \u06A9\u06CC\u0644\u0648\u06A9\u0627\u0644\u0631\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u06F9\u06F0\u06F0 \u06A9\u06CC\u0644\u0648\u06A9\u0627\u0644\u0631\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0634\u062F\u0647 \u0627\u0645\u0631\u0648\u0632</span>`);
          } else {
            return [
              createVNode("span", null, "\u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0634\u062F\u0647 \u0627\u0645\u0631\u0648\u0632")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06F2\u06F3\u06F0\u06F0 \u06A9\u06CC\u0644\u0648\u06A9\u0627\u0644\u0631\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u06F2\u06F3\u06F0\u06F0 \u06A9\u06CC\u0644\u0648\u06A9\u0627\u0644\u0631\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062E\u0648\u0631\u062F\u0647 \u0634\u062F\u0647 \u0627\u0645\u0631\u0648\u0632</span>`);
          } else {
            return [
              createVNode("span", null, "\u062E\u0648\u0631\u062F\u0647 \u0634\u062F\u0647 \u0627\u0645\u0631\u0648\u0632")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>2%</span>`);
          } else {
            return [
              createVNode("span", null, "2%")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0686\u0631\u0628\u06CC \u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0634\u062F\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0686\u0631\u0628\u06CC \u0633\u0648\u0632\u0627\u0646\u062F\u0647 \u0634\u062F\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>11,424</span>`);
          } else {
            return [
              createVNode("span", null, "11,424")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06AF\u0627\u0645\u200C\u0647\u0627\u06CC \u067E\u06CC\u0645\u0648\u062F\u0647\u200C\u0634\u062F\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u06AF\u0627\u0645\u200C\u0647\u0627\u06CC \u067E\u06CC\u0645\u0648\u062F\u0647\u200C\u0634\u062F\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:hidden min-w-[33.3%] sm:min-w-0">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h4",
        weight: "medium",
        size: "sm",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06F8.\u06F4 \u06A9\u06CC\u0644\u0648\u0645\u062A\u0631</span>`);
          } else {
            return [
              createVNode("span", null, "\u06F8.\u06F4 \u06A9\u06CC\u0644\u0648\u0645\u062A\u0631")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0641\u0627\u0635\u0644\u0647 \u0627\u0645\u0631\u0648\u0632</span>`);
          } else {
            return [
              createVNode("span", null, "\u0641\u0627\u0635\u0644\u0647 \u0627\u0645\u0631\u0648\u0632")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10",
        color: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:drop-duotone",
              class: "text-primary-500 size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:drop-duotone",
                class: "text-primary-500 size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 114/90 </span><span class="text-muted-400 text-sm">\u062D\u062F\u0627\u0642\u0644/\u062D\u062F\u0627\u06A9\u062B\u0631</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06A9\u06CC\u0641\u06CC\u062A \u062E\u0648\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u06A9\u06CC\u0641\u06CC\u062A \u062E\u0648\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10",
        color: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:heartbeat-duotone",
              class: "text-primary-500 size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:heartbeat-duotone",
                class: "text-primary-500 size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 112 </span><span class="text-muted-400 text-sm">\u0628\u06CC\u200C\u067E\u06CC\u200C\u0627\u0645</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0636\u0631\u0628\u0627\u0646 \u0642\u0644\u0628</span>`);
          } else {
            return [
              createVNode("span", null, "\u0636\u0631\u0628\u0627\u0646 \u0642\u0644\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10",
        color: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:drop-half-bottom-duotone",
              class: "text-primary-500 size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:drop-half-bottom-duotone",
                class: "text-primary-500 size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 12/14 </span><span class="text-muted-400 text-sm">\u0648\u0627\u062D\u062F\u0647\u0627</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0641\u0634\u0627\u0631 \u062E\u0648\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u0641\u0634\u0627\u0631 \u062E\u0648\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-6 sm:col-span-3"><div class="flex flex-col"><div class="mb-3 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "md",
        class: "bg-primary-500/10",
        color: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gauge-duotone",
              class: "text-primary-500 size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:gauge-duotone",
                class: "text-primary-500 size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-1 font-sans"><span class="text-muted-800 dark:text-muted-100 font-semibold"> 60.4 </span><span class="text-muted-400 text-sm">\u067E\u0648\u0646\u062F</span></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        size: "sm",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0648\u0632\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u0648\u0632\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A \u0627\u06CC\u0644\u06CC\u0633 \u0648\u06CC\u062F\u062A\u0648\u0631. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-span-12"><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
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
                  _push3(`<span${_scopeId2}>\u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> \u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaCondition), { class: "relative -ms-4 ltr:-start-5 rtl:-end-5" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u0648\u0636\u0639\u06CC\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaCondition), { class: "relative -ms-4 ltr:-start-5 rtl:-end-5" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
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
                  _push3(`<span${_scopeId2}>\u0633\u0637\u062D \u0627\u0646\u0631\u0698\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0637\u062D \u0627\u0646\u0631\u0698\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> \u0627\u0646\u0631\u0698\u06CC \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u0627\u0646\u0631\u0698\u06CC \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(scatterEnergy), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0633\u0637\u062D \u0627\u0646\u0631\u0698\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u0627\u0646\u0631\u0698\u06CC \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(scatterEnergy), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
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
                  _push3(`<span${_scopeId2}>\u0627\u06A9\u0633\u06CC\u0698\u0646\u200C\u0631\u0633\u0627\u0646\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u06A9\u0633\u06CC\u0698\u0646\u200C\u0631\u0633\u0627\u0646\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> \u0633\u0637\u062D \u0627\u06A9\u0633\u06CC\u0698\u0646 \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u0633\u0637\u062D \u0627\u06A9\u0633\u06CC\u0698\u0646 \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(barOxygen), { class: "relative ltr:-start-5 rtl:-end-5" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0627\u06A9\u0633\u06CC\u0698\u0646\u200C\u0631\u0633\u0627\u0646\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u0633\u0637\u062D \u0627\u06A9\u0633\u06CC\u0698\u0646 \u0634\u0645\u0627 \u06A9\u0645\u06CC \u0646\u0627\u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(barOxygen), { class: "relative ltr:-start-5 rtl:-end-5" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
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
                  _push3(`<span${_scopeId2}>\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 max-w-[240px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:question-duotone",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}> \u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. </span>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaProgress), { class: "relative ltr:-start-5 rtl:-end-5 -ms-4" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 max-w-[240px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:question-duotone",
                      class: "size-4"
                    }),
                    createVNode("span", null, " \u067E\u06CC\u0634\u0631\u0641\u062A \u06A9\u0644\u06CC \u0634\u0645\u0627 \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628 \u0627\u0633\u062A. \u0622\u0646 \u0631\u0627 \u062D\u062A\u06CC \u0628\u0647\u062A\u0631 \u06A9\u0646\u06CC\u062F. "),
                    createVNode(_component_NuxtLink, {
                      to: "#",
                      class: "text-primary-500 underline-offset-4 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u062E\u0648\u0627\u0646\u06CC\u062F \u0686\u06AF\u0648\u0646\u0647 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaProgress), { class: "relative ltr:-start-5 rtl:-end-5 -ms-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:col-span-3 col-span-12 lg:col-span-3"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoSearchCompact, { rounded: "lg" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between" }, [
                createVNode(_component_DemoSearchCompact, { rounded: "lg" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-2"
      }, {
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
              class: "max-w-full rounded-xl"
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
                class: "max-w-full rounded-xl"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
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
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/health.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
