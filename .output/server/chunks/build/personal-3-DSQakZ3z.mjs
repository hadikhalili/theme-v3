import { g as useTailwindColors, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as _sfc_main$3 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { _ as _sfc_main$6 } from './BaseButtonIcon-B-NRPykg.mjs';
import { useSSRContext, defineComponent, reactive, shallowRef, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$5 } from './BaseAvatar-3aYTRoBN.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoTrendingSkills",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        id: 0,
        name: "Vue JS",
        count: 149,
        icon: "logos:vue"
      },
      {
        id: 1,
        name: "\u0631\u06CC\u200C\u0627\u06A9\u062A JS",
        count: 117,
        icon: "logos:react"
      },
      {
        id: 2,
        name: "\u0646\u0627\u06A9\u0633\u062A",
        count: 94,
        icon: "logos:nuxt-icon"
      },
      {
        id: 4,
        name: "\u062A\u06CC\u0644\u0648\u06CC\u0646\u062F \u0633\u06CC\u200C\u0627\u0633\u200C\u0627\u0633",
        count: 82,
        icon: "logos:tailwindcss-icon"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div class="flex items-center gap-3"><div class="border-muted-200 dark:border-muted-700 flex size-10 items-center justify-center rounded-full border">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: skill.icon,
          class: "size-5"
        }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(skill.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(skill.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}> \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 ${ssrInterpolate(skill.count)} \u0646\u0627\u0645\u0632\u062F </span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 " + toDisplayString(skill.count) + " \u0646\u0627\u0645\u0632\u062F ", 1)
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
                class: "rtl:rotate-180 size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "rtl:rotate-180 size-5"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTrendingSkills.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "personal-3",
  __ssrInlineRender: true,
  setup(__props) {
    const areaInterviews = reactive(useAreaInterviews());
    function useAreaInterviews() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 220;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          height: 220,
          type: "area",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [primary.value, info.value, success.value],
        title: {
          text: void 0,
          align: "left"
        },
        legend: {
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
          name: "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627",
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
    const candidates = [
      {
        id: 0,
        tooltip: "\u0622\u062F\u0627\u0645 \u0631\u0627\u0646\u06AF\u0644\u0631",
        src: "/img/avatars/15.svg",
        text: "EC",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      },
      {
        id: 1,
        tooltip: "\u062C\u0646\u06CC\u0641\u0631 \u0645\u06CC\u0644\u0631",
        src: "/img/avatars/5.svg",
        text: "JM",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F"
      },
      {
        id: 2,
        tooltip: "\u062A\u0627\u0631\u0627 \u0633\u0648\u0650\u0646\u0633\u0648\u0646",
        src: "/img/avatars/4.svg",
        text: "TS",
        role: "\u0645\u0639\u0645\u0627\u0631 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"
      },
      {
        id: 3,
        tooltip: "\u0646\u0627\u0626\u0648\u0645\u06CC \u0644\u06CC\u0648\u0631\u0633\u06A9\u06CC",
        src: void 0,
        text: "NL",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseIconBox = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$3;
      const _component_DemoTrendingSkills = _sfc_main$1;
      const _component_AddonApexcharts = _sfc_main$4;
      const _component_BaseAvatar = _sfc_main$5;
      const _component_BaseButtonIcon = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ltablet:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "bg-muted-200 flex h-full flex-col border-0 p-8",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "3xl",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 mb-2 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u0644\u0627\u0645\u060C \u0645\u0627\u06CC\u0627 \u0631.</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0644\u0627\u0645\u060C \u0645\u0627\u06CC\u0627 \u0631.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u06F6 \u0645\u0635\u0627\u062D\u0628\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u06CC\u062F. \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0634\u0645\u0627 \u0639\u0627\u0644\u06CC \u0627\u0633\u062A. \u0628\u0631\u0646\u0627\u0645\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F \u0648 \u0647\u06CC\u0686 \u0641\u0639\u0627\u0644\u06CC\u062A\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u06F6 \u0645\u0635\u0627\u062D\u0628\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u06CC\u062F. \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0634\u0645\u0627 \u0639\u0627\u0644\u06CC \u0627\u0633\u062A. \u0628\u0631\u0646\u0627\u0645\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F \u0648 \u0647\u06CC\u0686 \u0641\u0639\u0627\u0644\u06CC\u062A\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-4 mt-auto flex items-center gap-2"${_scopeId}><div class="text-4xl"${_scopeId}><span${_scopeId}>\u{1F389}</span></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400 mb-2"${_scopeId2}>\u067E\u06CC\u0634\u0631\u0641\u062A \u0634\u0645\u0627</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400 mb-2" }, "\u067E\u06CC\u0634\u0631\u0641\u062A \u0634\u0645\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0631\u062C\u0633\u062A\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0631\u062C\u0633\u062A\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              rounded: "lg",
              class: "h-11 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u0631\u0646\u0627\u0645\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u0631\u0646\u0627\u0645\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-5" }, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "3xl",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 mb-2 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0633\u0644\u0627\u0645\u060C \u0645\u0627\u06CC\u0627 \u0631.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u06F6 \u0645\u0635\u0627\u062D\u0628\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0627\u0646\u062C\u0627\u0645 \u062F\u0647\u06CC\u062F. \u067E\u06CC\u0634\u0631\u0641\u062A \u0641\u0639\u0644\u06CC \u0634\u0645\u0627 \u0639\u0627\u0644\u06CC \u0627\u0633\u062A. \u0628\u0631\u0646\u0627\u0645\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F \u0648 \u0647\u06CC\u0686 \u0641\u0639\u0627\u0644\u06CC\u062A\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F. ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-4 mt-auto flex items-center gap-2" }, [
                createVNode("div", { class: "text-4xl" }, [
                  createVNode("span", null, "\u{1F389}")
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400 mb-2" }, "\u067E\u06CC\u0634\u0631\u0641\u062A \u0634\u0645\u0627")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0628\u0631\u062C\u0633\u062A\u0647")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseButton, {
                  color: "primary",
                  rounded: "lg",
                  class: "h-11 w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u0631\u0646\u0627\u0645\u0647")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:timer-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:timer-duotone",
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
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06F6\u06F2 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06F6\u06F2 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>\u062F\u0642\u0627\u06CC\u0642</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u062F\u0642\u0627\u06CC\u0642")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-info-100 text-info-500 dark:bg-info-500/20 dark:text-info-400 dark:border-info-500 dark:border-2",
                rounded: "full",
                color: "none"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:timer-duotone",
                    class: "size-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u06F6\u06F2 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u062F\u0642\u0627\u06CC\u0642")
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
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:broadcast-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:broadcast-duotone",
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
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>263</span>`);
                } else {
                  return [
                    createVNode("span", null, "263")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
                rounded: "full",
                color: "none"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:broadcast-duotone",
                    class: "size-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "263")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627")
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
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:user-plus-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:user-plus-duotone",
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
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>49</span>`);
                } else {
                  return [
                    createVNode("span", null, "49")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>\u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-lime-100 text-lime-500 dark:border-2 dark:border-lime-500 dark:bg-lime-500/20 dark:text-lime-400",
                rounded: "full",
                color: "none"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:user-plus-duotone",
                    class: "size-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "49")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u062A\u0623\u06CC\u06CC\u062F \u0634\u062F\u0647")
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
        class: "flex items-center gap-2 p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseIconBox, {
              size: "sm",
              class: "bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
              rounded: "full",
              color: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:door-duotone",
                    class: "size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:door-duotone",
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
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>214</span>`);
                } else {
                  return [
                    createVNode("span", null, "214")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}>\u0631\u062F \u0634\u062F\u0647</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u0631\u062F \u0634\u062F\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseIconBox, {
                size: "sm",
                class: "bg-amber-100 text-amber-500 dark:border-2 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-400",
                rounded: "full",
                color: "none"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:door-duotone",
                    class: "size-5"
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h2",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "214")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, "\u0631\u062F \u0634\u062F\u0647")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="col-span-2"><div class="mt-auto flex h-full items-end justify-between pb-4"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06A9\u0644 \u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627</span>`);
          } else {
            return [
              createVNode("span", null, "\u06A9\u0644 \u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500 dark:text-muted-400"${_scopeId}> \u06F2\u06F3 \u0645\u0635\u0627\u062D\u0628\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647 </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u06F2\u06F3 \u0645\u0635\u0627\u062D\u0628\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseAvatarGroup, {
        avatars: candidates,
        size: "sm",
        limit: 2
      }, null, _parent));
      _push(`</div></div></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-4",
        rounded: "lg"
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
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
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
                  _push3(`<span${_scopeId2}>\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062A\u0631\u0646\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062A\u0631\u0646\u062F")
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
            _push2(ssrRenderComponent(_component_DemoTrendingSkills, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0645\u0647\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062A\u0631\u0646\u062F")
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
              createVNode(_component_DemoTrendingSkills)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
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
                  _push3(`<span${_scopeId2}>\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627")
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
                  _push3(` \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaInterviews), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0645\u0635\u0627\u062D\u0628\u0647\u200C\u0647\u0627")
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
                    createTextVNode(" \u06AF\u0632\u0627\u0631\u0634\u200C\u0647\u0627 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaInterviews), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "flex items-center gap-3 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/11.svg",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9.</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u06F8:\u06F0\u06F0 \u0642.\u0638 \u2014 \u06F9:\u06F0\u06F0 \u0642.\u0638</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u06F8:\u06F0\u06F0 \u0642.\u0638 \u2014 \u06F9:\u06F0\u06F0 \u0642.\u0638")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "lg",
              muted: "",
              class: "scale-75"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "size-5 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "size-5 rtl:rotate-180"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseAvatar, {
                src: "/img/avatars/11.svg",
                size: "md"
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062C\u0627\u0646\u0627\u062A\u0627\u0646 \u06A9.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, "\u06F8:\u06F0\u06F0 \u0642.\u0638 \u2014 \u06F9:\u06F0\u06F0 \u0642.\u0638")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "ms-auto flex items-center" }, [
                createVNode(_component_BaseButtonIcon, {
                  rounded: "lg",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "size-5 rtl:rotate-180"
                    })
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
        class: "flex items-center gap-3 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0631\u0648\u06CC\u0646 \u0627\u0633.</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0631\u0648\u06CC\u0646 \u0627\u0633.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u06F1\u06F0:\u06F3\u06F0 \u0642.\u0638 \u2014 \u06F1\u06F1:\u06F3\u06F0 \u0642.\u0638</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u06F1\u06F0:\u06F3\u06F0 \u0642.\u0638 \u2014 \u06F1\u06F1:\u06F3\u06F0 \u0642.\u0638")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "lg",
              muted: "",
              class: "scale-75"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "rtl:rotate-180 size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "rtl:rotate-180 size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseAvatar, {
                src: "/img/avatars/16.svg",
                size: "md"
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0631\u0648\u06CC\u0646 \u0627\u0633.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, "\u06F1\u06F0:\u06F3\u06F0 \u0642.\u0638 \u2014 \u06F1\u06F1:\u06F3\u06F0 \u0642.\u0638")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "ms-auto flex items-center" }, [
                createVNode(_component_BaseButtonIcon, {
                  rounded: "lg",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "rtl:rotate-180 size-5"
                    })
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
        class: "flex items-center gap-3 p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/5.svg",
              size: "md"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062C\u0646\u06CC\u0641\u0631 \u0645.</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062C\u0646\u06CC\u0641\u0631 \u0645.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u06F1\u06F4:\u06F0\u06F0 \u2014 \u06F1\u06F5:\u06F0\u06F0</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u06F1\u06F4:\u06F0\u06F0 \u2014 \u06F1\u06F5:\u06F0\u06F0")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "lg",
              muted: "",
              class: "scale-75"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "rtl:rotate-180 size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "rtl:rotate-180 size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseAvatar, {
                src: "/img/avatars/5.svg",
                size: "md"
              }),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "light",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062C\u0646\u06CC\u0641\u0631 \u0645.")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, { size: "xs" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, "\u06F1\u06F4:\u06F0\u06F0 \u2014 \u06F1\u06F5:\u06F0\u06F0")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "ms-auto flex items-center" }, [
                createVNode(_component_BaseButtonIcon, {
                  rounded: "lg",
                  muted: "",
                  class: "scale-75"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "rtl:rotate-180 size-5"
                    })
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/personal-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
