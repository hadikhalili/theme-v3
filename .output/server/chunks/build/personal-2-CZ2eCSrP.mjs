import { g as useTailwindColors, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3, a as __nuxt_component_2, e as _sfc_main$e, i as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$7 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { useSSRContext, defineComponent, reactive, shallowRef, withCtx, createVNode, createTextVNode, mergeProps, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$5 } from './DemoTeamListCompact-DyRgatce.mjs';
import { _ as _sfc_main$6 } from './DemoTodoListCompact-zuvFev_H.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import './BaseButtonIcon-B-NRPykg.mjs';
import './BaseCheckboxAnimated-D-Y3gcBn.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoProjectListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        id: 0,
        name: "\u067E\u0631\u0648\u0698\u0647 \u0627\u067E \u062F\u0644\u06CC\u0648\u0631\u06CC",
        image: "/img/icons/logos/fastpizza.svg",
        badge: "/img/stacks/illustrator.svg",
        updated: "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        members: [
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062B",
            src: "/img/avatars/3.svg"
          },
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u06AF\u0644\u0631",
            src: "/img/avatars/5.svg"
          }
        ]
      },
      {
        id: 1,
        name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0633\u0644\u0627\u0645\u062A \u0648 \u062A\u0646\u0627\u0633\u0628 \u0627\u0646\u062F\u0627\u0645",
        image: "/img/icons/logos/slicer.svg",
        badge: "/img/stacks/reactjs.svg",
        updated: "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        members: [
          {
            tooltip: "\u0645\u0627\u06CC\u0627 (\u062A\u0648)",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "\u062C\u0627\u0646 \u0631\u0627\u0648\u0646\u0631",
            src: "/img/avatars/6.svg"
          },
          {
            tooltip: "Maggie Pitts",
            src: "/img/avatars/9.svg"
          }
        ]
      },
      {
        id: 2,
        name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC",
        image: "/img/icons/logos/metamovies.svg",
        badge: "/img/stacks/angular.svg",
        updated: "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        members: [
          {
            tooltip: "Alan Mariovski",
            src: "/img/avatars/11.svg"
          },
          {
            tooltip: "Robert Mapa",
            src: "/img/avatars/7.svg"
          },
          {
            tooltip: "Chris Welling",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "Ruth Raminov",
            src: "/img/avatars/19.svg"
          }
        ]
      },
      {
        id: 3,
        name: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u062F\u0627\u0634\u0628\u0648\u0631\u062F",
        image: "/img/icons/logos/envato.svg",
        badge: "/img/stacks/js.svg",
        updated: "30 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        members: [
          {
            tooltip: "\u0645\u0627\u06CC\u0627 (\u062A\u0648)",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "Maggie Pitts",
            src: "/img/avatars/9.svg"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseAvatarGroup = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(projects, (project) => {
        _push(`<div class="flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: project.image,
          "badge-src": project.badge,
          class: "shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(project.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(project.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>\u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC ${ssrInterpolate(project.updated)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, "\u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC " + toDisplayString(project.updated), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto hidden md:block">`);
        _push(ssrRenderComponent(_component_BaseAvatarGroup, {
          avatars: project.members,
          size: "sm",
          limit: 3
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoProjectListCompact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`<div class="mt-4 text-center">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="mt-4">`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPlaceholderCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/img/illustrations/placeholders/flat/chart-guy.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/placeholders/flat/chart-guy-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "personal-2",
  __ssrInlineRender: true,
  setup(__props) {
    const areaTaskCompletion = reactive(useAreaTaskCompletion());
    const barTeamEfficiency = reactive(useBarTeamEfficiency());
    function useAreaTaskCompletion() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 295;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [success.value, info.value, primary.value],
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
          name: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "\u0645\u0633\u062F\u0648\u062F \u0634\u062F\u0647",
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
    function useBarTeamEfficiency() {
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
        colors: [success.value, info.value, primary.value],
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
              return val + "hrs";
            }
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0637\u0631\u0627\u062D\u06CC",
          data: [-26, -15, -13, -14, -9, -12, -7, -10, -4]
        },
        {
          name: "\u062A\u0648\u0633\u0639\u0647",
          data: [6, 15, 31, 28, 17, 35, 21, 44, 24]
        },
        {
          name: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
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
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$e;
      const _component_DemoProjectListCompact = _sfc_main$2;
      const _component_AddonApexcharts = _sfc_main$4;
      const _component_DemoTeamListCompact = _sfc_main$5;
      const _component_DemoTodoListCompact = _sfc_main$6;
      const _component_DemoPlaceholderCompact = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-6"><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center md:flex-row"${_scopeId}><div class="ltablet:flex-row ltablet:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-start lg:flex-row lg:items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/2.svg",
              size: "xl",
              "badge-src": "/img/icons/flags/united-states-of-america.svg"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center md:text-start"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "xl",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u0645\u0627\u06CC\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u0645\u0627\u06CC\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u062E\u0648\u0634\u062D\u0627\u0644\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0645\u06CC\u200C\u0628\u06CC\u0646\u0645\u062A</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u062E\u0648\u0634\u062D\u0627\u0644\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0645\u06CC\u200C\u0628\u06CC\u0646\u0645\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="ltablet:flex-row ltablet:items-center ms-auto flex flex-col gap-6 text-center md:text-start lg:flex-row lg:items-center"${_scopeId}><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "3xl",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}> 31 <small class="text-base font-medium"${_scopeId2}>\u0648\u0638\u06CC\u0641\u0647</small></span>`);
                } else {
                  return [
                    createVNode("span", null, [
                      createTextVNode(" 31 "),
                      createVNode("small", { class: "text-base font-medium" }, "\u0648\u0638\u06CC\u0641\u0647")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400 text-sm"${_scopeId2}> \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0633\u062A </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400 text-sm" }, " \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0633\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseCard, { class: "from-primary-600 to-primary-700 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-5 shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative z-20 flex flex-col gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-white/80"${_scopeId3}> \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-white/80" }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    class: "font-sans text-sm text-white underline-offset-4 hover:underline",
                    to: "#"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="absolute bottom-0 end-2 z-10 flex size-14 items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:crown-duotone",
                    class: "text-primary-900/50 size-10"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative z-20 flex flex-col gap-3" }, [
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-white/80" }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "font-sans text-sm text-white underline-offset-4 hover:underline",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "absolute bottom-0 end-2 z-10 flex size-14 items-center justify-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:crown-duotone",
                        class: "text-primary-900/50 size-10"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center md:flex-row" }, [
                createVNode("div", { class: "ltablet:flex-row ltablet:items-center flex flex-col items-center gap-4 text-center md:items-start md:text-start lg:flex-row lg:items-center" }, [
                  createVNode(_component_BaseAvatar, {
                    src: "/img/avatars/2.svg",
                    size: "xl",
                    "badge-src": "/img/icons/flags/united-states-of-america.svg"
                  }),
                  createVNode("div", { class: "text-center md:text-start" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "xl",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F\u060C \u0645\u0627\u06CC\u0627")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, "\u062E\u0648\u0634\u062D\u0627\u0644\u0645 \u06A9\u0647 \u062F\u0648\u0628\u0627\u0631\u0647 \u0645\u06CC\u200C\u0628\u06CC\u0646\u0645\u062A")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "ltablet:flex-row ltablet:items-center ms-auto flex flex-col gap-6 text-center md:text-start lg:flex-row lg:items-center" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "3xl",
                      weight: "semibold",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, [
                          createTextVNode(" 31 "),
                          createVNode("small", { class: "text-base font-medium" }, "\u0648\u0638\u06CC\u0641\u0647")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, null, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400 text-sm" }, " \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0633\u062A ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_BaseCard, { class: "from-primary-600 to-primary-700 shadow-primary-500/20 relative flex flex-1 items-center justify-center bg-gradient-to-br p-5 shadow-xl" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative z-20 flex flex-col gap-3" }, [
                        createVNode(_component_BaseParagraph, { size: "sm" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-white/80" }, " \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 \u0648 \u067E\u0631\u0648\u0698\u0647 \u0645\u0627 \u0631\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u062F ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "font-sans text-sm text-white underline-offset-4 hover:underline",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "absolute bottom-0 end-2 z-10 flex size-14 items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:crown-duotone",
                          class: "text-primary-900/50 size-10"
                        })
                      ])
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
      _push(`</div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062C\u0627\u0631\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062C\u0627\u0631\u06CC")
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
            _push2(ssrRenderComponent(_component_DemoProjectListCompact, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062C\u0627\u0631\u06CC")
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
              createVNode(_component_DemoProjectListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u062A\u06A9\u0645\u06CC\u0644</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u06A9\u0645\u06CC\u0644")
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
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(areaTaskCompletion), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062A\u06A9\u0645\u06CC\u0644")
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
              createVNode(_component_AddonApexcharts, mergeProps(unref(areaTaskCompletion), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645")
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
            _push2(ssrRenderComponent(_component_AddonApexcharts, unref(barTeamEfficiency), null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u062A\u06CC\u0645")
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
              createVNode(_component_AddonApexcharts, unref(barTeamEfficiency), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="ptablet:grid-cols-2 grid gap-6 lg:flex lg:flex-col">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u062A\u06CC\u0645 \u0645\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u06CC\u0645 \u0645\u0646")
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
            _push2(ssrRenderComponent(_component_DemoTeamListCompact, { actions: "" }, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062A\u06CC\u0645 \u0645\u0646")
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
              createVNode(_component_DemoTeamListCompact, { actions: "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
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
                  _push3(`<span${_scopeId2}>\u06A9\u0627\u0631\u0647\u0627\u06CC \u0627\u0645\u0631\u0648\u0632</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06A9\u0627\u0631\u0647\u0627\u06CC \u0627\u0645\u0631\u0648\u0632")
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
            _push2(ssrRenderComponent(_component_DemoTodoListCompact, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u06A9\u0627\u0631\u0647\u0627\u06CC \u0627\u0645\u0631\u0648\u0632")
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
              createVNode(_component_DemoTodoListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoPlaceholderCompact, null, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_0)} class="block w-full dark:hidden" width="225" height="150" alt="Placeholder illustration"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="hidden w-full dark:block" width="225" height="150" alt="Placeholder illustration"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_0,
                      class: "block w-full dark:hidden",
                      width: "225",
                      height: "150",
                      alt: "Placeholder illustration"
                    }),
                    createVNode("img", {
                      src: _imports_1,
                      class: "hidden w-full dark:block",
                      width: "225",
                      height: "150",
                      alt: "Placeholder illustration"
                    })
                  ];
                }
              }),
              action: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    rounded: "sm",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButton, {
                      color: "primary",
                      rounded: "sm",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}> \u0628\u0627 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u06CC\u06A9 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645\u060C \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F. </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, " \u0628\u0627 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u06CC\u06A9 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645\u060C \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "lg",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 mb-1 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "sm" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, " \u0628\u0627 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u06CC\u06A9 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645\u060C \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoPlaceholderCompact, null, {
                image: withCtx(() => [
                  createVNode("img", {
                    src: _imports_0,
                    class: "block w-full dark:hidden",
                    width: "225",
                    height: "150",
                    alt: "Placeholder illustration"
                  }),
                  createVNode("img", {
                    src: _imports_1,
                    class: "hidden w-full dark:block",
                    width: "225",
                    height: "150",
                    alt: "Placeholder illustration"
                  })
                ]),
                action: withCtx(() => [
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    rounded: "sm",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648")
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "lg",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062D\u0631\u0641\u0647\u200C\u0627\u06CC")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "sm" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, " \u0628\u0627 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u06CC\u06A9 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645\u060C \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631 \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0646\u06CC\u062F. ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/personal-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
