import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { g as useTailwindColors, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, h as _sfc_main$u, a as __nuxt_component_2, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as _sfc_main$3 } from './AddonApexcharts-cnqu1j3S.mjs';
import { defineComponent, reactive, shallowRef, withCtx, createVNode, mergeProps, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const areaCustomers = reactive(useAreaCustomers());
    const radialBarTeam = reactive(useRadialBarTeam());
    const barProfit = reactive(useBarProfit());
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
          text: void 0
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
    function useRadialBarTeam() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 455;
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
              size: "40%"
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
        grid: {
          padding: {
            top: 80
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
    function useBarProfit() {
      const { primary } = useTailwindColors();
      const type = "bar";
      const height = 255;
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
          formatter: function(val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          categories: ["\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0647\u0631"],
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
            formatter: function(val) {
              return val + "%";
            }
          }
        },
        colors: [primary.value],
        title: {
          text: void 0,
          align: "left"
        }
      };
      const series = shallowRef([
        {
          name: "Ratio",
          data: [2.3, 3.1, 4, 10.1, 4]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseIconBox = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_AddonApexcharts = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$3;
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
            _push2(`<span class="text-muted-500"${_scopeId}> \u062E\u0648\u0634\u062D\u0627\u0644\u06CC\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\u062A\u0627\u0646 \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u0645. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u062E\u0648\u0634\u062D\u0627\u0644\u06CC\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\u062A\u0627\u0646 \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u0645. ")
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
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-6 col-span-12 lg:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u0622\u0645\u0627\u0631 \u0633\u0631\u06CC\u0639 \u0634\u0645\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0622\u0645\u0627\u0631 \u0633\u0631\u06CC\u0639 \u0634\u0645\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-4 md:grid-cols-2"${_scopeId}><div class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "md",
              class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:nut-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:nut-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>2,870</span>`);
                } else {
                  return [
                    createVNode("span", null, "2,870")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u0641\u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0645\u0627\u0647 </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0641\u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0645\u0627\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "md",
              class: "bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:handshake-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:handshake-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>159</span>`);
                } else {
                  return [
                    createVNode("span", null, "159")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "md",
              class: "bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:sketch-logo-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:sketch-logo-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F4\u06F2\u06F9.\u06F1\u06F8 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F4\u06F2\u06F9.\u06F1\u06F8 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u0627\u0645\u0631\u0648\u0632 \u06A9\u0633\u0628 \u0634\u062F\u0647 </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0627\u0645\u0631\u0648\u0632 \u06A9\u0633\u0628 \u0634\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "md",
              class: "bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:bank-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F6\u06F8\u06F1\u06F6.\u06F3\u06F2 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F6\u06F8\u06F1\u06F6.\u06F3\u06F2 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0644 </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
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
                    createVNode("span", null, "\u0622\u0645\u0627\u0631 \u0633\u0631\u06CC\u0639 \u0634\u0645\u0627")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "grid gap-4 md:grid-cols-2" }, [
                createVNode("div", { class: "bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10" }, [
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:nut-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "2,870")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0641\u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0645\u0627\u0647 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10" }, [
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:handshake-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "159")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10" }, [
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-green-100 text-green-500 dark:border-2 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:sketch-logo-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06F4\u06F2\u06F9.\u06F1\u06F8 \u062A\u0648\u0645\u0627\u0646")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0627\u0645\u0631\u0648\u0632 \u06A9\u0633\u0628 \u0634\u062F\u0647 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "bg-muted-100/80 dark:bg-muted-700 flex items-center gap-2 rounded-md px-5 py-10" }, [
                  createVNode(_component_BaseIconBox, {
                    size: "md",
                    class: "bg-indigo-100 text-indigo-500 dark:border-2 dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-400",
                    rounded: "full",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bank-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06F6\u06F8\u06F1\u06F6.\u06F3\u06F2 \u062A\u0648\u0645\u0627\u0646")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0644 ")
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
      _push(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u0645\u0634\u062A\u0631\u06CC\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0634\u062A\u0631\u06CC\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaCustomers), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0645\u0634\u062A\u0631\u06CC\u0627\u0646")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaCustomers), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "from-primary-600 to-primary-700 relative flex h-full items-center justify-center bg-gradient-to-br p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative z-20 flex flex-col gap-3 py-10 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "lg",
              weight: "semibold",
              lead: "tight",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0647\u06CC \u0645\u0627\u06CC\u0627\u060C \u062A\u0648 \u0639\u0627\u0644\u06CC \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC.</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0647\u06CC \u0645\u0627\u06CC\u0627\u060C \u062A\u0648 \u0639\u0627\u0644\u06CC \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "md",
              class: "mx-auto max-w-[280px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-white/80"${_scopeId2}> \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-white/80" }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "font-sans text-white underline-offset-4 hover:underline",
              to: "#"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="absolute bottom-4 end-4 z-10 flex size-14 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:crown-duotone",
              class: "text-primary-900/50 size-14"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative z-20 flex flex-col gap-3 py-10 text-center" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "lg",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0647\u06CC \u0645\u0627\u06CC\u0627\u060C \u062A\u0648 \u0639\u0627\u0644\u06CC \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, {
                  size: "md",
                  class: "mx-auto max-w-[280px]"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-white/80" }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F ")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  class: "font-sans text-white underline-offset-4 hover:underline",
                  to: "#"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "absolute bottom-4 end-4 z-10 flex size-14 items-center justify-center" }, [
                createVNode(_component_Icon, {
                  name: "ph:crown-duotone",
                  class: "text-primary-900/50 size-14"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 ltablet:col-span-4 col-span-12 lg:col-span-4">`);
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
                  _push3(`<span${_scopeId2}>\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="absolute inset-x-0 top-24 flex items-center justify-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/4.svg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              text: "H",
              class: "bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/3.svg" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialBarTeam), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "absolute inset-x-0 top-24 flex items-center justify-center gap-4" }, [
                createVNode(_component_BaseAvatar, { src: "/img/avatars/4.svg" }),
                createVNode(_component_BaseAvatar, {
                  text: "H",
                  class: "bg-yellow-100 text-yellow-500 dark:bg-yellow-500 dark:text-white"
                }),
                createVNode(_component_BaseAvatar, { src: "/img/avatars/3.svg" })
              ]),
              createVNode(_component_AddonApexcharts, unref(radialBarTeam), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4">`);
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
                  _push3(`<span${_scopeId2}>\u062A\u06A9\u0627\u0645\u0644 \u0633\u0648\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u06A9\u0627\u0645\u0644 \u0633\u0648\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barProfit), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062A\u06A9\u0627\u0645\u0644 \u0633\u0648\u062F")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, unref(barProfit), null, 16)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
