import { g as useTailwindColors, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$5 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$6 } from './DemoFollowersCompact-CaNIPLO8.mjs';
import { _ as _sfc_main$7 } from './DemoSearchCompact-B3L12Nx7.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$9 } from './DemoInboxMessage-BM5OMRjx.mjs';
import { _ as _sfc_main$b } from './BaseTag-CQSmGSbm.mjs';
import { useSSRContext, defineComponent, reactive, shallowRef, mergeProps, withCtx, createVNode, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$8, a as _sfc_main$1$2 } from './DemoIconText-CbFxNoJW.mjs';
import { _ as __nuxt_component_10 } from './DemoNotificationsCompact-DH4JEGka.mjs';
import { _ as _sfc_main$a } from './DemoActionText-D5gsJDsX.mjs';
import { Calendar } from 'v-calendars';
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
import './BaseAvatarGroup-BdQMrb3Z.mjs';
import './BaseAvatar-3aYTRoBN.mjs';
import './TairoImageZoom-Do7uK3cY.mjs';
import './BaseProgress-Bi06w8MA.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoTagListCompact",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const tags = [
      {
        id: 1,
        name: "\u0633\u06CC\u0627\u0633\u062A",
        highlight: false
      },
      {
        id: 2,
        name: "\u0627\u0642\u062A\u0635\u0627\u062F",
        highlight: true
      },
      {
        id: 3,
        name: "\u0645\u0627\u0644\u06CC",
        highlight: false
      },
      {
        id: 4,
        name: "\u0645\u062D\u06CC\u0637\u200C\u0632\u06CC\u0633\u062A",
        highlight: false
      },
      {
        id: 5,
        name: "\u063A\u0630\u0627",
        highlight: false
      },
      {
        id: 6,
        name: "\u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC",
        highlight: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTag = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(tags, (tag) => {
        _push(ssrRenderComponent(_component_BaseTag, {
          key: tag.id,
          rounded: props.rounded,
          variant: tag.highlight ? "solid" : "outline",
          color: "primary",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(tag.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(tag.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTagListCompact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoIconLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "\u0641\u0639\u0627\u0644\u06CC\u062A",
        url: "#",
        icon: "lucide:activity"
      },
      {
        name: "\u062C\u0633\u062A\u062C\u0648",
        url: "#",
        icon: "lucide:search"
      },
      {
        name: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
        url: "#",
        icon: "lucide:file-text"
      },
      {
        name: "\u062E\u0627\u0646\u0647",
        url: "#",
        icon: "lucide:home"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-between gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.url,
          class: "text-muted-400 hover:bg-primary-500 hover:shadow-primary-500/30 dark:hover:shadow-primary-800/30 flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:text-white hover:shadow-xl"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "size-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "size-4"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoIconLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoDaysSquare",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const days = [
      {
        name: "\u062F\u0648\u0634\u0646\u0628\u0647",
        date: 22,
        url: "#"
      },
      {
        name: "\u0633\u0647\u200C\u0634\u0646\u0628\u0647",
        date: 23,
        url: "#"
      },
      {
        name: "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
        date: 24,
        url: "#"
      },
      {
        name: "\u062C\u0645\u0639\u0647",
        date: 25,
        url: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(days, (day) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: day.name,
          to: day.url,
          class: ["dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-6 transition-all duration-300 hover:shadow-xl", [
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : ""
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><span class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300"${_scopeId}>${ssrInterpolate(day.date)}</span><p class="text-muted-400 font-sans text-xs font-medium uppercase"${_scopeId}>${ssrInterpolate(day.name)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 mb-1 inline-block font-sans text-xl font-bold transition-colors duration-300" }, toDisplayString(day.date), 1),
                  createVNode("p", { class: "text-muted-400 font-sans text-xs font-medium uppercase" }, toDisplayString(day.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoDaysSquare.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoMenuIconList",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const menu = [
      {
        name: "\u062C\u0647\u0627\u0646\u06CC",
        url: "#",
        icon: "lucide:circle"
      },
      {
        name: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
        url: "#",
        icon: "lucide:briefcase"
      },
      {
        name: "\u0633\u0631\u06AF\u0631\u0645\u06CC",
        url: "#",
        icon: "lucide:play"
      },
      {
        name: "\u0637\u0631\u0627\u062D\u06CC",
        url: "#",
        icon: "lucide:feather"
      },
      {
        name: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
        url: "#",
        icon: "lucide:file"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(menu, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.url,
          class: "group flex items-center gap-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([[
                props.shape === "rounded" ? "rounded-lg" : "",
                props.shape === "curved" ? "rounded-xl" : ""
              ], "text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-primary-500/30 flex size-11 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-xl dark:group-hover:text-white"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`</div><span class="text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 font-sans text-sm transition-colors duration-300"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode("div", {
                  class: ["text-muted-500 dark:text-muted-100 bg-muted-100 dark:bg-muted-700 group-hover:bg-primary-500 group-hover:shadow-primary-500/30 flex size-11 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:shadow-xl dark:group-hover:text-white", [
                    props.shape === "rounded" ? "rounded-lg" : "",
                    props.shape === "curved" ? "rounded-xl" : ""
                  ]]
                }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "size-4"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("span", { class: "text-muted-400 group-hover:text-muted-800 dark:group-hover:text-muted-100 font-sans text-sm transition-colors duration-300" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoMenuIconList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_AddonApexcharts = _sfc_main$5;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_DemoFollowersCompact = _sfc_main$6;
      const _component_DemoSearchCompact = _sfc_main$7;
      const _component_DemoVideoCompact = _sfc_main$1$1;
      const _component_DemoTagListCompact = _sfc_main$4;
      const _component_DemoIconLinks = _sfc_main$3;
      const _component_DemoDaysSquare = _sfc_main$2;
      const _component_DemoMenuIconList = _sfc_main$1;
      const _component_DemoIconText = _sfc_main$8;
      const _component_DemoPicture = _sfc_main$1$2;
      const _component_DemoInboxMessage = _sfc_main$9;
      const _component_DemoNotificationsCompact = __nuxt_component_10;
      const _component_DemoActionText = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4" }, _attrs))}><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
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
        rounded: "lg",
        class: "p-6"
      }, {
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
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
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
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoVideoCompact, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVideoCompact, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoTagListCompact, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoTagListCompact, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconLinks, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconLinks, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoDaysSquare, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoDaysSquare, { rounded: "lg" })
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
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoMenuIconList, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoMenuIconList, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconText, {
              title: "\u067E\u0631\u062F\u0627\u062E\u062A",
              icon: "lucide:bell",
              text: "\u0634\u0645\u0627 \u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u062F\u0631 \u067E\u06CC\u0634 \u062F\u0627\u0631\u06CC\u062F \u0628\u0631\u0627\u06CC \u0647\u0632\u06CC\u0646\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0648\u0631\u0647\u200C\u0627\u06CC \u062E\u0648\u062F \u06A9\u0647 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u06F2\u06F0 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F3\u06F9\u06F9 \u0645\u0648\u0639\u062F \u0622\u0646 \u0627\u0633\u062A. \u062C\u0632\u0626\u06CC\u0627\u062A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F.",
              indicator: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconText, {
                title: "\u067E\u0631\u062F\u0627\u062E\u062A",
                icon: "lucide:bell",
                text: "\u0634\u0645\u0627 \u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u062F\u0631 \u067E\u06CC\u0634 \u062F\u0627\u0631\u06CC\u062F \u0628\u0631\u0627\u06CC \u0647\u0632\u06CC\u0646\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0648\u0631\u0647\u200C\u0627\u06CC \u062E\u0648\u062F \u06A9\u0647 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u06F2\u06F0 \u0634\u0647\u0631\u06CC\u0648\u0631 \u06F1\u06F3\u06F9\u06F9 \u0645\u0648\u0639\u062F \u0622\u0646 \u0627\u0633\u062A. \u062C\u0632\u0626\u06CC\u0627\u062A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F.",
                indicator: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoPicture, {
              src: "/img/illustrations/widgets/mountain-picture.svg",
              alt: "Picture widget image description",
              rounded: "lg",
              height: 286,
              width: 212,
              loading: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoPicture, {
                src: "/img/illustrations/widgets/mountain-picture.svg",
                alt: "Picture widget image description",
                rounded: "lg",
                height: 286,
                width: 212,
                loading: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoInboxMessage, {
              picture: "/img/avatars/10.svg",
              name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
              title: "\u067E\u0631\u0648\u0698\u0647 \u0637\u0631\u0627\u062D\u06CC",
              text: "\u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u0637\u0631\u0627\u062D\u06CC \u06A9\u062C\u0627 \u0647\u0633\u062A\u06CC\u0645\u061F \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u0645 \u06A9\u0647 \u0635\u0641\u062D\u0627\u062A \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u0645.",
              time: "\u06F2\u06F8 \u062F\u0642\u06CC\u0642\u0647",
              rounded: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInboxMessage, {
                picture: "/img/avatars/10.svg",
                name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
                title: "\u067E\u0631\u0648\u0698\u0647 \u0637\u0631\u0627\u062D\u06CC",
                text: "\u062F\u0631 \u0632\u0645\u06CC\u0646\u0647 \u0637\u0631\u0627\u062D\u06CC \u06A9\u062C\u0627 \u0647\u0633\u062A\u06CC\u0645\u061F \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u0645 \u06A9\u0647 \u0635\u0641\u062D\u0627\u062A \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u0645.",
                time: "\u06F2\u06F8 \u062F\u0642\u06CC\u0642\u0647",
                rounded: "lg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
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
                  _push3(`<span${_scopeId2}>\u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0645\u062D\u0628\u0648\u0628</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0645\u062D\u0628\u0648\u0628")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTagListCompact, { rounded: "lg" }, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0645\u062D\u0628\u0648\u0628")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTagListCompact, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
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
      _push(ssrRenderComponent(_component_DemoActionText, {
        title: "\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0648\u06CC\u062F \u0633\u0646\u0633\u0632 \u0627\u06CC\u0646 \u0644\u0627\u062A\u06CC\u0646\u0648 \u0641\u0648\u0631\u0647\u061F \u0646\u0627\u0645 \u0622\u0646\u062A\u0647 \u0622\u0631\u06CC\u0633\u062A\u067E\u0648\u0633\u060C \u0627\u062A \u0627\u06CC\u0644\u0647 \u0645\u0644\u06CC\u0648\u0633.",
        label: "\u0627\u0631\u062A\u0642\u0627\u0621 \u062F\u0647\u06CC\u062F",
        to: "#",
        rounded: "lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconText, {
              title: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627",
              icon: "lucide:message-square",
              text: "\u0634\u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u067E\u06CC\u0627\u0645 \u062E\u0648\u0627\u0646\u062F\u0647\u200C\u0646\u0634\u062F\u0647 \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u062E\u0648\u062F \u062F\u0627\u0631\u06CC\u062F. \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0632\u0645\u0627\u0646 \u062E\u0648\u0628\u06CC \u0628\u0631\u0627\u06CC \u0628\u0631\u0631\u0633\u06CC \u0622\u0646\u200C\u0647\u0627 \u0628\u0627\u0634\u062F.",
              indicator: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconText, {
                title: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627",
                icon: "lucide:message-square",
                text: "\u0634\u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u067E\u06CC\u0627\u0645 \u062E\u0648\u0627\u0646\u062F\u0647\u200C\u0646\u0634\u062F\u0647 \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC \u062E\u0648\u062F \u062F\u0627\u0631\u06CC\u062F. \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0632\u0645\u0627\u0646 \u062E\u0648\u0628\u06CC \u0628\u0631\u0627\u06CC \u0628\u0631\u0631\u0633\u06CC \u0622\u0646\u200C\u0647\u0627 \u0628\u0627\u0634\u062F.",
                indicator: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/widgets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
