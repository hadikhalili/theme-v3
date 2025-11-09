import { t as usePanels, p as onKeyStroke, g as useTailwindColors, b as _sfc_main$w, a as __nuxt_component_2, c as _sfc_main$v, f as _sfc_main$C } from './server.mjs';
import { _ as _sfc_main$1 } from './AddonApexcharts-cnqu1j3S.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { FocusTrap } from '@headlessui/vue';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelAccount",
  __ssrInlineRender: true,
  props: {
    account: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { close } = usePanels();
    onKeyStroke("Escape", close);
    const demoAreaBalance = reactive(useDemoAreaBalance());
    function useDemoAreaBalance() {
      const { primary } = useTailwindColors();
      const type = "area";
      const height = 250;
      const options = {
        chart: {
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
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
            "2022-09-19T00:00:00.000Z",
            "2022-09-20T01:30:00.000Z",
            "2022-09-21T02:30:00.000Z",
            "2022-09-22T03:30:00.000Z",
            "2022-09-23T04:30:00.000Z",
            "2022-09-24T05:30:00.000Z",
            "2022-09-25T06:30:00.000Z"
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
      const series = ref(props.account.history);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseText = _sfc_main$C;
      const _component_AddonApexcharts = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-s bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FocusTrap), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "xs",
              weight: "semibold",
              class: "text-muted-500 dark:text-muted-100 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="button" class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "rtl:rotate-180 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="nui-slimscroll relative h-[calc(100dvh_-_5rem)] w-full overflow-y-auto overflow-x-hidden p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "lg",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100 capitalize"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.account.type)} ${ssrInterpolate(props.account.number)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.account.type) + " " + toDisplayString(props.account.number), 1)
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
                  _push3(`${ssrInterpolate(_ctx.account.owner.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.account.owner.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="py-6 pe-4 text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "2xl",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.account.balance.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-4 py-6 pe-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-500 size-2 rounded-full"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-700 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0645\u0627\u0631\u0647 \u0645\u0633\u06CC\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u0645\u0633\u06CC\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { "data-nui-tooltip": "The wire routing number" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:help-circle",
                    class: "text-muted-400 size-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:help-circle",
                      class: "text-muted-400 size-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.account.details.routingNumber)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.account.details.routingNumber), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-500 size-2 rounded-full"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-700 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0645\u0627\u0631\u0647 \u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { "data-nui-tooltip": "\u0634\u0645\u0627\u0631\u0647 \u06A9\u0627\u0645\u0644 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:help-circle",
                    class: "text-muted-400 size-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:help-circle",
                      class: "text-muted-400 size-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.account.details.accountNumber)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.account.details.accountNumber), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-300 size-2 rounded-full"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-700 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0645\u0627\u0631\u0647 IBAN `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0645\u0627\u0631\u0647 IBAN ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { "data-nui-tooltip": "The international identifier" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:help-circle",
                    class: "text-muted-400 size-3"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:help-circle",
                      class: "text-muted-400 size-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.account.details.iban)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.account.details.iban), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-200 size-2 rounded-full"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-700 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u062F \u0628\u0627\u0646\u06A9\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u062F \u0628\u0627\u0646\u06A9\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.account.details.bankCode)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.account.details.bankCode), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="-mt-6 p-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(demoAreaBalance), null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xs",
                  weight: "semibold",
                  class: "text-muted-500 dark:text-muted-100 uppercase"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u062D\u0633\u0627\u0628 ")
                  ]),
                  _: 1
                }),
                createVNode("button", {
                  type: "button",
                  class: "nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300",
                  onClick: unref(close)
                }, [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "rtl:rotate-180 size-4"
                  })
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "nui-slimscroll relative h-[calc(100dvh_-_5rem)] w-full overflow-y-auto overflow-x-hidden p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "lg",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100 capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.account.type) + " " + toDisplayString(props.account.number), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.account.owner.name), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "py-6 pe-4 text-end" }, [
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400 mb-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "2xl",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100 mb-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "space-y-4 py-6 pe-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "bg-muted-500 size-2 rounded-full" }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-700 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u0645\u0633\u06CC\u0631 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, { "data-nui-tooltip": "The wire routing number" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:help-circle",
                            class: "text-muted-400 size-3"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.account.details.routingNumber), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "bg-muted-500 size-2 rounded-full" }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-700 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u062D\u0633\u0627\u0628 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, { "data-nui-tooltip": "\u0634\u0645\u0627\u0631\u0647 \u06A9\u0627\u0645\u0644 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:help-circle",
                            class: "text-muted-400 size-3"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.account.details.accountNumber), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "bg-muted-300 size-2 rounded-full" }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-700 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0634\u0645\u0627\u0631\u0647 IBAN ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, { "data-nui-tooltip": "The international identifier" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:help-circle",
                            class: "text-muted-400 size-3"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.account.details.iban), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode("div", { class: "bg-muted-200 size-2 rounded-full" }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-700 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u06A9\u062F \u0628\u0627\u0646\u06A9\u06CC ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.account.details.bankCode), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "-mt-6 p-4" }, [
                  createVNode(_component_AddonApexcharts, unref(demoAreaBalance), null, 16)
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
