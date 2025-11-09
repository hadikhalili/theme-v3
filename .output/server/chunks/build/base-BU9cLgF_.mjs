import { g as useTailwindColors, h as _sfc_main$u, b as _sfc_main$w } from './server.mjs';
import { _ as _sfc_main$1 } from './AddonApexcharts-cnqu1j3S.mjs';
import { defineComponent, reactive, shallowRef, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const areaBtcPrice = reactive(useAreaBtcPrice());
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
          }
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
          [0.4, 0.3, 1, 0.9, 2.9, 1.9, 2.5, 0.9, 1.2, 0.7, 1.9, 0.5, 1.3, 0.9, 1.7, 0.2, 0.7, 0.5],
          [0.2, 0.3, 0.8, 0.7, 2.2, 1.6, 2.3, 0.7, 1.1, 0.5, 1.2, 0.5, 1, 0.4, 1.5, 0.2, 0.6, 2]
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_AddonApexcharts = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
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
                  _push3(`<span${_scopeId2}>\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(areaBtcPrice), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0646\u0645\u0648\u062F\u0627\u0631 \u0642\u06CC\u0645\u062A \u0628\u06CC\u062A\u200C\u06A9\u0648\u06CC\u0646")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(areaBtcPrice), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/apexcharts/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
