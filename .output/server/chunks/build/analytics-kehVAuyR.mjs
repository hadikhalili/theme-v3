import { g as useTailwindColors, h as _sfc_main$u, b as _sfc_main$w, a as __nuxt_component_2, e as _sfc_main$e, c as _sfc_main$v } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as _sfc_main$2 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$3 } from './DemoVcardRight-DF9dRV6L.mjs';
import { _ as _sfc_main$4 } from './DemoFollowersCompact-CaNIPLO8.mjs';
import { _ as __nuxt_component_10 } from './DemoNotificationsCompact-DH4JEGka.mjs';
import { defineComponent, reactive, shallowRef, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
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
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseAvatarGroup-BdQMrb3Z.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const lineRevenue = reactive(useLineRevenue());
    const radialGoal = reactive(useRadialGoal());
    const radialGrowth = reactive(useRadialGrowth());
    const barSalesProfit = reactive(useBarSalesProfit());
    function useLineRevenue() {
      const { primary } = useTailwindColors();
      const type = "line";
      const height = 250;
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
        colors: [primary.value],
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: "smooth"
        },
        grid: {
          row: {
            colors: ["transparent", "transparent"],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "\u0627\u0633\u0641\u0646\u062F",
            "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",
            "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
            "\u062E\u0631\u062F\u0627\u062F",
            "\u062A\u06CC\u0631",
            "\u0645\u0631\u062F\u0627\u062F",
            "\u0634\u0647\u0631\u06CC\u0648\u0631",
            "\u0645\u0647\u0631",
            "\u0622\u0628\u0627\u0646"
          ]
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$" + val;
            }
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u062F\u0631\u0622\u0645\u062F",
          data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialGoal() {
      const { primary, success } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          offsetY: -10
        },
        colors: [primary.value, success.value],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            inverseOrder: true,
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "14px",
                fontFamily: "Vazirmatn FD, sans-serif",
                fontWeight: 500,
                offsetY: -10
              },
              value: {
                show: true,
                fontWeight: 600,
                fontFamily: "Vazirmatn FD, sans-serif",
                fontSize: "16px",
                offsetY: -5
              },
              total: {
                show: true,
                fontFamily: "Vazirmatn FD, sans-serif",
                label: "\u0645\u062C\u0645\u0648\u0639",
                fontSize: "14px",
                fontWeight: 500
              }
            },
            hollow: {
              margin: 15,
              size: "75%"
            },
            track: {
              strokeWidth: "100%"
            }
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["\u0628\u0647\u0631\u0647\u200C\u0648\u0631\u06CC", "\u0628\u0627\u0632\u062F\u0647\u06CC"]
      };
      const series = shallowRef([57, 86]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useRadialGrowth() {
      const { success } = useTailwindColors();
      const height = 180;
      const type = "radialBar";
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          }
        },
        colors: [success.value],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "75%"
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "0.7rem",
                fontFamily: "Vazirmatn FD",
                fontWeight: 400,
                offsetY: -10
              },
              value: {
                show: true,
                fontWeight: 600,
                fontSize: "16px",
                fontFamily: "Vazirmatn FD",
                offsetY: -5
              }
            }
          }
        },
        labels: ["\u0631\u0634\u062F"]
      };
      const series = shallowRef([65]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useBarSalesProfit() {
      const { primary, info, success } = useTailwindColors();
      const type = "bar";
      const height = 250;
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
        legend: {
          position: "top"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "\u0627\u0633\u0641\u0646\u062F",
            "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",
            "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
            "\u062E\u0631\u062F\u0627\u062F",
            "\u062A\u06CC\u0631",
            "\u0645\u0631\u062F\u0627\u062F",
            "\u0634\u0647\u0631\u06CC\u0648\u0631",
            "\u0645\u0647\u0631",
            "\u0622\u0628\u0627\u0646"
          ]
        },
        yaxis: {
          labels: {
            formatter: function(val) {
              return val + 70;
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + 70;
            }
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0633\u0648\u062F \u062E\u0627\u0644\u0635",
          data: [-26, -15, -13, -14, -9, -12, -7, -10, -4]
        },
        {
          name: "\u062F\u0631\u0622\u0645\u062F",
          data: [6, 15, 31, 28, 17, 35, 21, 44, 24]
        },
        {
          name: "\u062C\u0631\u06CC\u0627\u0646 \u0646\u0642\u062F\u06CC \u0622\u0632\u0627\u062F",
          data: [-35, -29, -34, -44, -25, -22, -18, -17, -29]
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
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$e;
      const _component_AddonApexcharts = _sfc_main$2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_DemoVcardRight = _sfc_main$3;
      const _component_DemoFollowersCompact = _sfc_main$4;
      const _component_DemoNotificationsCompact = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-4" }, _attrs))}><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
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
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "xs",
              class: "bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500 dark:border-2",
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
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "3xl",
              weight: "bold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>7,549</span>`);
                } else {
                  return [
                    createVNode("span", null, "7,549")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+7.8%</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>\u0627\u0632 \u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseIconBox, {
                  size: "xs",
                  class: "bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500 dark:border-2",
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
                })
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "7,549")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                createVNode("span", null, "+7.8%"),
                createVNode(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "size-5"
                }),
                createVNode("span", { class: "text-muted-400 text-xs" }, "\u0627\u0632 \u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u0647\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u0647\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "xs",
              class: "bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:rocket-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:rocket-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "3xl",
              weight: "bold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>1,611</span>`);
                } else {
                  return [
                    createVNode("span", null, "1,611")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-danger-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>-2.7%</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-down",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>\u062F\u0631 \u062D\u0627\u0644 \u06A9\u0627\u0647\u0634</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u0647\u0627")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseIconBox, {
                  size: "xs",
                  class: "bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400",
                  rounded: "full",
                  color: "none"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:rocket-duotone",
                      class: "size-5"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "1,611")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-danger-500 flex items-center gap-1 font-sans text-sm" }, [
                createVNode("span", null, "-2.7%"),
                createVNode(_component_Icon, {
                  name: "lucide:trending-down",
                  class: "size-5"
                }),
                createVNode("span", { class: "text-muted-400 text-xs" }, "\u062F\u0631 \u062D\u0627\u0644 \u06A9\u0627\u0647\u0634")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-1 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "medium",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0631\u062C\u0627\u0639\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0631\u062C\u0627\u0639\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "xs",
              class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:megaphone-simple-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:megaphone-simple-duotone",
                      class: "size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "3xl",
              weight: "bold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>862</span>`);
                } else {
                  return [
                    createVNode("span", null, "862")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-success-500 flex items-center gap-1 font-sans text-sm"${_scopeId}><span${_scopeId}>+4.5%</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>\u062F\u0631 \u062D\u0627\u0644 \u0627\u0641\u0632\u0627\u06CC\u0634</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h5",
                  size: "sm",
                  weight: "medium",
                  lead: "tight",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0631\u062C\u0627\u0639\u0627\u062A")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseIconBox, {
                  size: "xs",
                  class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
                  rounded: "full",
                  color: "none"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:megaphone-simple-duotone",
                      class: "size-5"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-2" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "862")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-success-500 flex items-center gap-1 font-sans text-sm" }, [
                createVNode("span", null, "+4.5%"),
                createVNode(_component_Icon, {
                  name: "lucide:trending-up",
                  class: "size-5"
                }),
                createVNode("span", { class: "text-muted-400 text-xs" }, "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0641\u0632\u0627\u06CC\u0634")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-8">`);
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
                  _push3(`<span${_scopeId2}>\u062F\u0631\u0622\u0645\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F")
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
            _push2(`</div><div class="flex gap-8"${_scopeId}><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>\u0627\u06CC\u0646 \u0645\u0627\u0647</span><p class="text-primary-500 font-sans text-lg font-medium"${_scopeId}> \u06F7\u06F5\u06F6\u06F8\u06F9\u06F0 \u062A\u0648\u0645\u0627\u0646 </p></div><div${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}>\u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647</span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> \u06F5\u06F9,\u06F7\u06F2\u06F4 \u062A\u0648\u0645\u0627\u0646 </p></div></div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(lineRevenue), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062F\u0631\u0622\u0645\u062F")
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
                ])
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(lineRevenue), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0646\u0645\u0627\u06CC \u06A9\u0644\u06CC \u0647\u062F\u0641</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0646\u0645\u0627\u06CC \u06A9\u0644\u06CC \u0647\u062F\u0641")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialGoal), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center"${_scopeId}><div class="border-muted-200 dark:border-muted-700 flex-1 border-e px-2"${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}> \u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647 </span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> 1431 </p></div><div class="flex-1 px-2"${_scopeId}><span class="text-muted-400 font-sans text-xs"${_scopeId}> \u062F\u0631 \u062D\u0627\u0644 \u067E\u06CC\u0634\u0631\u0641\u062A </span><p class="text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"${_scopeId}> 219 </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-10 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0646\u0645\u0627\u06CC \u06A9\u0644\u06CC \u0647\u062F\u0641")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_AddonApexcharts, unref(radialGoal), null, 16)
              ]),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center" }, [
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex-1 border-e px-2" }, [
                    createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " \u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647 "),
                    createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " 1431 ")
                  ]),
                  createVNode("div", { class: "flex-1 px-2" }, [
                    createVNode("span", { class: "text-muted-400 font-sans text-xs" }, " \u062F\u0631 \u062D\u0627\u0644 \u067E\u06CC\u0634\u0631\u0641\u062A "),
                    createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium" }, " 219 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0631\u0634\u062F \u0641\u0631\u0648\u0634</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0631\u0634\u062F \u0641\u0631\u0648\u0634")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(radialGrowth), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto"${_scopeId}><div class="flex justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "logos:shopify",
              class: "size-8"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0634\u0627\u067E\u06CC\u0641\u0627\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0634\u0627\u067E\u06CC\u0641\u0627\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u0628\u0647\u062A\u0631\u06CC\u0646 \u06A9\u0627\u0646\u0627\u0644 \u0641\u0631\u0648\u0634</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u0628\u0647\u062A\u0631\u06CC\u0646 \u06A9\u0627\u0646\u0627\u0644 \u0641\u0631\u0648\u0634")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-5 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0631\u0634\u062F \u0641\u0631\u0648\u0634")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_AddonApexcharts, unref(radialGrowth), null, 16)
              ]),
              createVNode("div", { class: "mt-auto" }, [
                createVNode("div", { class: "flex justify-center gap-2" }, [
                  createVNode(_component_Icon, {
                    name: "logos:shopify",
                    class: "size-8"
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h5",
                      size: "sm",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0634\u0627\u067E\u06CC\u0641\u0627\u06CC")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "\u0628\u0647\u062A\u0631\u06CC\u0646 \u06A9\u0627\u0646\u0627\u0644 \u0641\u0631\u0648\u0634")
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
      _push(`</div><div class="col-span-12 md:col-span-8">`);
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
                  _push3(`<span${_scopeId2}>\u0633\u0648\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0648\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(barSalesProfit), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0633\u0648\u062F")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(barSalesProfit), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:col-span-3 col-span-12 lg:col-span-3"><div class="ptablet:grid-cols-2 ltablet:flex ltablet:flex-col grid gap-4 lg:flex lg:flex-col">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVcardRight, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVcardRight)
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoFollowersCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoFollowersCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoNotificationsCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoNotificationsCompact)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
