import { _ as _sfc_main$1 } from './BaseIconBox-Cgm-LP3M.mjs';
import { g as useTailwindColors, a as __nuxt_component_2, b as _sfc_main$w, c as _sfc_main$v, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$3 } from './DemoLinkArrow-CYqyQpEI.mjs';
import { _ as __nuxt_component_7 } from './DemoWidgetInvest-B3-vpEGk.mjs';
import { _ as _sfc_main$4 } from './DemoActionText-D5gsJDsX.mjs';
import { _ as _sfc_main$5 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as __nuxt_component_10 } from './DemoNotificationsCompact-DH4JEGka.mjs';
import { defineComponent, reactive, shallowRef, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
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
  __name: "vault",
  __ssrInlineRender: true,
  setup(__props) {
    const gaugePersonal = reactive(useGaugePersonal());
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
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseTag = _sfc_main$2;
      const _component_DemoLinkArrow = _sfc_main$3;
      const _component_DemoWidgetInvest = __nuxt_component_7;
      const _component_DemoActionText = _sfc_main$4;
      const _component_AddonApexcharts = _sfc_main$5;
      const _component_DemoNotificationsCompact = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-6" }, _attrs))}><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="w-full"><div class="border-muted-200 dark:border-muted-800 border-b py-6"><div class="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        color: "success",
        variant: "pastel",
        size: "md",
        rounded: "none",
        mask: "blob"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:shield-check-duotone",
              class: "size-6"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:shield-check-duotone",
                class: "size-6"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "2xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06AF\u0648\u0627\u0647\u06CC \u06AF\u0627\u0648\u0635\u0646\u062F\u0648\u0642 `);
          } else {
            return [
              createTextVNode(" \u06AF\u0648\u0627\u0647\u06CC \u06AF\u0627\u0648\u0635\u0646\u062F\u0648\u0642 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06AF\u0646\u062C\u06CC\u0646\u0647 \u0634\u0645\u0627 \u0628\u0647\u200C\u062F\u0631\u0633\u062A\u06CC \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F \u0648 \u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647 \u0627\u0633\u062A. `);
          } else {
            return [
              createTextVNode(" \u06AF\u0646\u062C\u06CC\u0646\u0647 \u0634\u0645\u0627 \u0628\u0647\u200C\u062F\u0631\u0633\u062A\u06CC \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F \u0648 \u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647 \u0627\u0633\u062A. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="divide-muted-200 dark:divide-muted-800 flex items-center divide-x rtl:divide-x-reverse sm:ms-auto"><div class="px-6 text-center sm:text-end">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u06CC\u0645\u0647 FDIC `);
          } else {
            return [
              createTextVNode(" \u0628\u06CC\u0645\u0647 FDIC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "md",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0627 500 \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F \u062A\u0648\u0645\u0627\u0646 `);
          } else {
            return [
              createTextVNode(" \u062A\u0627 500 \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F \u062A\u0648\u0645\u0627\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="px-6 text-center sm:text-end">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "md",
        class: "text-muted-800 dark:text-muted-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06F1\u06F5\u06F6,\u06F7\u06F4\u06F0 \u062A\u0648\u0645\u0627\u0646 `);
          } else {
            return [
              createTextVNode(" \u06F1\u06F5\u06F6,\u06F7\u06F4\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="border-muted-200 dark:border-muted-800 border-b py-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full flex-col justify-between sm:flex-row sm:items-center"${_scopeId}><div class="ptablet:max-w-sm flex max-w-md flex-col gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u06CC\u0645\u0647 FDIC `);
                } else {
                  return [
                    createTextVNode(" \u0628\u06CC\u0645\u0647 FDIC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "lg",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u062A\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062A\u062D\u062A \u067E\u0648\u0634\u0634 \u0628\u06CC\u0645\u0647 FDIC \u0647\u0633\u062A\u0646\u062F `);
                } else {
                  return [
                    createTextVNode(" \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u062A\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062A\u062D\u062A \u067E\u0648\u0634\u0634 \u0628\u06CC\u0645\u0647 FDIC \u0647\u0633\u062A\u0646\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "md",
              class: "text-muted-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0645\u0627 \u0628\u0627 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0633\u0637\u062D \u0628\u06CC\u0645\u0647 FDIC \u06A9\u0647 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0648\u062C\u0648\u062F \u0627\u0633\u062A\u060C \u0645\u062D\u0627\u0641\u0638\u062A \u0645\u06CC\u200C\u0634\u0648\u06CC\u062F. `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0645\u0627 \u0628\u0627 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0633\u0637\u062D \u0628\u06CC\u0645\u0647 FDIC \u06A9\u0647 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0648\u062C\u0648\u062F \u0627\u0633\u062A\u060C \u0645\u062D\u0627\u0641\u0638\u062A \u0645\u06CC\u200C\u0634\u0648\u06CC\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ptablet:me-5 ltablet:me-20 mt-10 flex flex-col gap-3 sm:mt-0 lg:me-20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 \u062C\u0627\u0631\u06CC/\u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 \u062C\u0627\u0631\u06CC/\u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "2xl",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F1\u06F5\u06F6,\u06F7\u06F4\u06F0 \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06F1\u06F5\u06F6,\u06F7\u06F4\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseTag, {
              color: "primary",
              variant: "pastel",
              rounded: "lg",
              class: "text-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062A\u0648\u0633\u0637 FDIC \u0628\u06CC\u0645\u0647 \u0634\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062A\u0648\u0633\u0637 FDIC \u0628\u06CC\u0645\u0647 \u0634\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full flex-col justify-between sm:flex-row sm:items-center" }, [
                createVNode("div", { class: "ptablet:max-w-sm flex max-w-md flex-col gap-3" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0628\u06CC\u0645\u0647 FDIC ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u062A\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062A\u062D\u062A \u067E\u0648\u0634\u0634 \u0628\u06CC\u0645\u0647 FDIC \u0647\u0633\u062A\u0646\u062F ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "md",
                    class: "text-muted-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0634\u0645\u0627 \u0628\u0627 \u0628\u0627\u0644\u0627\u062A\u0631\u06CC\u0646 \u0633\u0637\u062D \u0628\u06CC\u0645\u0647 FDIC \u06A9\u0647 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0648\u062C\u0648\u062F \u0627\u0633\u062A\u060C \u0645\u062D\u0627\u0641\u0638\u062A \u0645\u06CC\u200C\u0634\u0648\u06CC\u062F. ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ptablet:me-5 ltablet:me-20 mt-10 flex flex-col gap-3 sm:mt-0 lg:me-20" }, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 \u062C\u0627\u0631\u06CC/\u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "2xl",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F1\u06F5\u06F6,\u06F7\u06F4\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseTag, {
                    color: "primary",
                    variant: "pastel",
                    rounded: "lg",
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062A\u0648\u0633\u0637 FDIC \u0628\u06CC\u0645\u0647 \u0634\u062F\u0647 ")
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
      _push(`</div><div class="border-muted-200 dark:border-muted-800 border-b py-6"><div class="flex items-center gap-3"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u062E\u0632\u0646 `);
          } else {
            return [
              createTextVNode(" \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u062E\u0632\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "md",
        class: "text-muted-500 dark:text-muted-400 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06AF\u0627\u0648\u0635\u0646\u062F\u0648\u0642 \u0634\u0645\u0627 \u0628\u0647 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0631\u06CC\u0633\u06A9 \u0628\u0627\u0646\u06A9\u06CC \u0648 \u062D\u0641\u0627\u0638\u062A \u0627\u0632 \u0648\u062C\u0648\u0647\u062A\u0627\u0646 \u0647\u0646\u06AF\u0627\u0645 \u0631\u0634\u062F \u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u067E\u0648\u0634\u0634 \u0628\u06CC\u0645\u0647 FDIC \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062D\u062F\u0627\u06A9\u062B\u0631 \u0628\u0631\u0633\u0627\u0646\u06CC\u062F \u0648 \u067E\u0648\u0644 \u0631\u0627 \u0628\u0647 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631 \u0645\u0627\u0644\u06CC \u0645\u062A\u0634\u06A9\u0644 \u0627\u0632 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0627\u0631 \u06A9\u0648\u062A\u0627\u0647 \u0645\u062F\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u062F\u0648\u0644\u062A \u0622\u0645\u0631\u06CC\u06A9\u0627 \u0645\u0646\u062A\u0642\u0644 \u06A9\u0646\u06CC\u062F \u0648\u0642\u062A\u06CC \u06A9\u0647 \u0628\u0647 \u0646\u0641\u0639 \u0634\u0645\u0627 \u0627\u0633\u062A. `);
          } else {
            return [
              createTextVNode(" \u06AF\u0627\u0648\u0635\u0646\u062F\u0648\u0642 \u0634\u0645\u0627 \u0628\u0647 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0631\u06CC\u0633\u06A9 \u0628\u0627\u0646\u06A9\u06CC \u0648 \u062D\u0641\u0627\u0638\u062A \u0627\u0632 \u0648\u062C\u0648\u0647\u062A\u0627\u0646 \u0647\u0646\u06AF\u0627\u0645 \u0631\u0634\u062F \u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u067E\u0648\u0634\u0634 \u0628\u06CC\u0645\u0647 FDIC \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062D\u062F\u0627\u06A9\u062B\u0631 \u0628\u0631\u0633\u0627\u0646\u06CC\u062F \u0648 \u067E\u0648\u0644 \u0631\u0627 \u0628\u0647 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631 \u0645\u0627\u0644\u06CC \u0645\u062A\u0634\u06A9\u0644 \u0627\u0632 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0627\u0631 \u06A9\u0648\u062A\u0627\u0647 \u0645\u062F\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 \u062F\u0648\u0644\u062A \u0622\u0645\u0631\u06CC\u06A9\u0627 \u0645\u0646\u062A\u0642\u0644 \u06A9\u0646\u06CC\u062F \u0648\u0642\u062A\u06CC \u06A9\u0647 \u0628\u0647 \u0646\u0641\u0639 \u0634\u0645\u0627 \u0627\u0633\u062A. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DemoLinkArrow, {
        to: "#",
        label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
      }, null, _parent));
      _push(`</div></div></div><div class="border-muted-200 dark:border-muted-800 border-b py-6">`);
      _push(ssrRenderComponent(_component_DemoWidgetInvest, null, null, _parent));
      _push(`</div><div class="py-6">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062E\u0632\u0627\u0646\u0647 \u062A\u0627\u06CC\u0631\u0648 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u0631\u0648 Advisory, LLC \u06A9\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u0634\u0627\u0648\u0631 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 SEC \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062B\u0628\u062A\u200C\u0646\u0627\u0645 \u062F\u0631 SEC \u0628\u0647 \u0645\u0639\u0646\u0627\u06CC \u0645\u0647\u0627\u0631\u062A \u06CC\u0627 \u0622\u0645\u0648\u0632\u0634 \u062E\u0627\u0635\u06CC \u0646\u06CC\u0633\u062A. \u062B\u0628\u062A SEC \u0628\u0647 \u0645\u0639\u0646\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u062E\u062F\u0645\u0627\u062A \u0645\u0634\u0627\u0648\u0631 \u062A\u0648\u0633\u0637 SEC \u0646\u0645\u06CC\u200C\u0628\u0627\u0634\u062F. \u0627\u06CC\u0646 \u0627\u0637\u0644\u0627\u0639\u06CC\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0641\u0631\u0648\u0634 \u06CC\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F \u0647\u06CC\u0686 \u06CC\u06A9 \u0627\u0632 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u06CC\u0627 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u062A\u0648\u0635\u06CC\u0641 \u0634\u062F\u0647 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0646\u06CC\u0633\u062A. \u0647\u0645\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u062F\u0631 \u0645\u0639\u0631\u0636 \u062E\u0637\u0631 \u0627\u0632 \u062F\u0633\u062A \u062F\u0627\u062F\u0646 \u0647\u0633\u062A\u0646\u062F\u060C \u0627\u0632 \u062C\u0645\u0644\u0647 \u0627\u0632 \u062F\u0633\u062A \u062F\u0627\u062F\u0646 \u0627\u0635\u0644 \u0633\u0631\u0645\u0627\u06CC\u0647. \u0647\u06CC\u0686 \u062A\u0636\u0645\u06CC\u0646\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F \u06A9\u0647 \u0647\u0631 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0628\u0647 \u0627\u0647\u062F\u0627\u0641 \u062E\u0648\u062F \u0628\u0631\u0633\u062F \u06CC\u0627 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631 \u0646\u062A\u0627\u06CC\u062C\u06CC \u0645\u0634\u0627\u0628\u0647 \u0622\u0646\u0686\u0647 \u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u0628\u0647 \u062F\u0633\u062A \u0622\u0648\u0631\u062F. \u0639\u0645\u0644\u06A9\u0631\u062F \u06AF\u0630\u0634\u062A\u0647 \u0646\u0634\u0627\u0646\u200C\u062F\u0647\u0646\u062F\u0647 \u0622\u06CC\u0646\u062F\u0647 \u0646\u06CC\u0633\u062A \u0648 \u062A\u0636\u0645\u06CC\u0646\u06CC \u0628\u0631\u0627\u06CC \u0646\u062A\u0627\u06CC\u062C \u0622\u06CC\u0646\u062F\u0647 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u062A\u0627\u06CC\u0631\u0648 Advisory \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F \u062A\u062D\u062A \u067E\u0648\u0634\u0634 FDIC \u0646\u06CC\u0633\u062A \u0627\u0645\u0627 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u062A\u062D\u062A \u067E\u0648\u0634\u0634 SIPC \u0628\u0627\u0634\u062F. \u0628\u0631\u062E\u06CC \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0627\u06CC\u0646 \u0627\u0637\u0644\u0627\u0639\u06CC\u0647 \u0627\u0632 \u0645\u0646\u0627\u0628\u0639\u06CC \u0628\u0647 \u062F\u0633\u062A \u0622\u0645\u062F\u0647\u200C\u0627\u0646\u062F \u06A9\u0647 \u0628\u0647\u200C\u062F\u0642\u062A \u0628\u0627\u0648\u0631 \u0634\u062F\u0647\u200C\u0627\u0646\u062F\u060C \u0627\u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u0645\u0633\u062A\u0642\u0644 \u062A\u0623\u06CC\u06CC\u062F \u0646\u0634\u062F\u0647\u200C\u0627\u0646\u062F. \u0644\u0637\u0641\u0627\u064B \u0627\u0641\u0634\u0627\u0647\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0631\u0627 \u062F\u0631 \u062A\u0627\u06CC\u0631\u0648.com/treasury \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u062E\u0632\u0627\u0646\u0647 \u062A\u0627\u06CC\u0631\u0648 \u062A\u0648\u0633\u0637 \u062A\u0627\u06CC\u0631\u0648 Advisory, LLC \u06A9\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u0634\u0627\u0648\u0631 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 SEC \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062B\u0628\u062A\u200C\u0646\u0627\u0645 \u062F\u0631 SEC \u0628\u0647 \u0645\u0639\u0646\u0627\u06CC \u0645\u0647\u0627\u0631\u062A \u06CC\u0627 \u0622\u0645\u0648\u0632\u0634 \u062E\u0627\u0635\u06CC \u0646\u06CC\u0633\u062A. \u062B\u0628\u062A SEC \u0628\u0647 \u0645\u0639\u0646\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u062E\u062F\u0645\u0627\u062A \u0645\u0634\u0627\u0648\u0631 \u062A\u0648\u0633\u0637 SEC \u0646\u0645\u06CC\u200C\u0628\u0627\u0634\u062F. \u0627\u06CC\u0646 \u0627\u0637\u0644\u0627\u0639\u06CC\u0647 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0641\u0631\u0648\u0634 \u06CC\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F \u0647\u06CC\u0686 \u06CC\u06A9 \u0627\u0632 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u06CC\u0627 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u062A\u0648\u0635\u06CC\u0641 \u0634\u062F\u0647 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0646\u06CC\u0633\u062A. \u0647\u0645\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u062F\u0631 \u0645\u0639\u0631\u0636 \u062E\u0637\u0631 \u0627\u0632 \u062F\u0633\u062A \u062F\u0627\u062F\u0646 \u0647\u0633\u062A\u0646\u062F\u060C \u0627\u0632 \u062C\u0645\u0644\u0647 \u0627\u0632 \u062F\u0633\u062A \u062F\u0627\u062F\u0646 \u0627\u0635\u0644 \u0633\u0631\u0645\u0627\u06CC\u0647. \u0647\u06CC\u0686 \u062A\u0636\u0645\u06CC\u0646\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F \u06A9\u0647 \u0647\u0631 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0628\u0647 \u0627\u0647\u062F\u0627\u0641 \u062E\u0648\u062F \u0628\u0631\u0633\u062F \u06CC\u0627 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631 \u0646\u062A\u0627\u06CC\u062C\u06CC \u0645\u0634\u0627\u0628\u0647 \u0622\u0646\u0686\u0647 \u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A \u0628\u0647 \u062F\u0633\u062A \u0622\u0648\u0631\u062F. \u0639\u0645\u0644\u06A9\u0631\u062F \u06AF\u0630\u0634\u062A\u0647 \u0646\u0634\u0627\u0646\u200C\u062F\u0647\u0646\u062F\u0647 \u0622\u06CC\u0646\u062F\u0647 \u0646\u06CC\u0633\u062A \u0648 \u062A\u0636\u0645\u06CC\u0646\u06CC \u0628\u0631\u0627\u06CC \u0646\u062A\u0627\u06CC\u062C \u0622\u06CC\u0646\u062F\u0647 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u062A\u0627\u06CC\u0631\u0648 Advisory \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F \u062A\u062D\u062A \u067E\u0648\u0634\u0634 FDIC \u0646\u06CC\u0633\u062A \u0627\u0645\u0627 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u062A\u062D\u062A \u067E\u0648\u0634\u0634 SIPC \u0628\u0627\u0634\u062F. \u0628\u0631\u062E\u06CC \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0627\u06CC\u0646 \u0627\u0637\u0644\u0627\u0639\u06CC\u0647 \u0627\u0632 \u0645\u0646\u0627\u0628\u0639\u06CC \u0628\u0647 \u062F\u0633\u062A \u0622\u0645\u062F\u0647\u200C\u0627\u0646\u062F \u06A9\u0647 \u0628\u0647\u200C\u062F\u0642\u062A \u0628\u0627\u0648\u0631 \u0634\u062F\u0647\u200C\u0627\u0646\u062F\u060C \u0627\u0645\u0627 \u0628\u0647\u200C\u0637\u0648\u0631 \u0645\u0633\u062A\u0642\u0644 \u062A\u0623\u06CC\u06CC\u062F \u0646\u0634\u062F\u0647\u200C\u0627\u0646\u062F. \u0644\u0637\u0641\u0627\u064B \u0627\u0641\u0634\u0627\u0647\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0631\u0627 \u062F\u0631 \u062A\u0627\u06CC\u0631\u0648.com/treasury \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="ltablet:col-span-3 col-span-12 lg:col-span-3"><div class="relative flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_DemoActionText, {
        title: "\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0648\u06CC\u062F \u0633\u0646\u0633\u0632 \u0627\u06CC\u0646 \u0644\u0627\u062A\u06CC\u0646\u0648 \u0641\u0648\u0631\u0647\u061F \u0646\u0627\u0645 \u0622\u0646\u062A\u0647 \u0622\u0631\u06CC\u0633\u062A\u067E\u0648\u0633\u060C \u0627\u062A \u0627\u06CC\u0644\u0647 \u0645\u0644\u06CC\u0648\u0633.",
        label: "\u0627\u0631\u062A\u0642\u0627\u0621 \u062F\u0647\u06CC\u062F",
        to: "#",
        rounded: "md"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "flex flex-col p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
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
                  size: "sm",
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
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "md"
      }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/vault.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
