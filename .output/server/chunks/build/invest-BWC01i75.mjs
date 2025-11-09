import { _ as __nuxt_component_7 } from './DemoWidgetInvest-B3-vpEGk.mjs';
import { j as useRoute, u as useRouter, t as usePanels, g as useTailwindColors, b as _sfc_main$w, c as _sfc_main$v, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$2 } from './DemoActionText-D5gsJDsX.mjs';
import { _ as _sfc_main$3 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as __nuxt_component_10 } from './DemoNotificationsCompact-DH4JEGka.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, reactive, shallowRef, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './DemoLinkArrow-CYqyQpEI.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
  __name: "invest",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(45);
    usePanels();
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/invest", {
      query
    }, "$LlIEq3NbdP")), __temp = await __temp, __restore(), __temp);
    ref();
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
      const _component_DemoWidgetInvest = __nuxt_component_7;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseTag = _sfc_main$1;
      const _component_DemoActionText = _sfc_main$2;
      const _component_BaseCard = _sfc_main$u;
      const _component_AddonApexcharts = _sfc_main$3;
      const _component_DemoNotificationsCompact = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-6" }, _attrs))}><div class="ltablet:col-span-9 col-span-12 lg:col-span-9"><div class="w-full max-w-full">`);
      _push(ssrRenderComponent(_component_DemoWidgetInvest, null, null, _parent));
      _push(`<div class="w-full"><div class="border-muted-200 dark:border-muted-800 border-b py-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "2xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
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
            _push2(` \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0645\u0627 \u0631\u0627 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u0646\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0645\u0627 \u0631\u0627 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-7 overflow-auto"><table class="w-full whitespace-nowrap"><thead><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-1/5"><span>\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold md:w-3/5"><span>\u0645\u0639\u0645\u0648\u0644\u0627\u064B \u0635\u0631\u0641 \u0634\u062F\u0647 \u062F\u0631</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-end font-sans text-xs font-semibold"><span>\u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u0628\u0631 \u0627\u0633\u0627\u0633</span></th></thead><tbody><!--[-->`);
      ssrRenderList(unref(data)?.data, (option) => {
        _push(`<tr tabindex="0" class="hover:bg-muted-200 dark:hover:bg-muted-800 border-muted-200 dark:border-muted-800 cursor-pointer border-b transition-colors duration-200 ease-in-out"><td class="p-4"><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "medium",
          class: "text-muted-800 dark:text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(option.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option.subtitle)}`);
            } else {
              return [
                createTextVNode(toDisplayString(option.subtitle), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></td><td class="p-4"><div class="flex items-center gap-2"><!--[-->`);
        ssrRenderList(option.targets, (target) => {
          _push(ssrRenderComponent(_component_BaseTag, {
            key: target,
            size: "sm",
            rounded: "full"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(target)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(target), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></td><td class="p-4 text-end"><div class="flex justify-end">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "none",
          class: "text-muted-500 dark:text-muted-400 block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(option.purpose)}`);
            } else {
              return [
                createTextVNode(toDisplayString(option.purpose), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div><div class="ltablet:col-span-3 col-span-12 lg:col-span-3"><div class="relative flex flex-col gap-6">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/invest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
