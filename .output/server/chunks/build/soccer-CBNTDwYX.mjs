import { h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$3 } from './BaseButtonIcon-B-NRPykg.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as capitalize } from './format-strings-CL2J231F.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoLeagueListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const leagues = [
      {
        id: 0,
        name: "\u0644\u06CC\u06AF \u06F1",
        location: "\u0641\u0631\u0627\u0646\u0633\u0647",
        logo: "/img/icons/soccer/leagues/ligue-1.svg",
        matches: 5
      },
      {
        id: 1,
        name: "\u0644\u0627 \u0644\u06CC\u06AF\u0627",
        location: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627",
        logo: "/img/icons/soccer/leagues/laliga.svg",
        matches: 3
      },
      {
        id: 2,
        name: "\u0644\u06CC\u06AF\u0627",
        location: "\u067E\u0631\u062A\u063A\u0627\u0644",
        logo: "/img/icons/soccer/leagues/liga.svg",
        matches: 7
      },
      {
        id: 3,
        name: "\u0628\u0648\u0646\u062F\u0633\u0644\u06CC\u06AF\u0627",
        location: "\u0622\u0644\u0645\u0627\u0646",
        logo: "/img/icons/soccer/leagues/bundesliga.svg",
        matches: 5
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(leagues, (league) => {
        _push(`<div class="flex items-center gap-3"><img${ssrRenderAttr("src", league.logo)}${ssrRenderAttr("alt", league.name)} class="size-10 shrink-0"><div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(league.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(league.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(league.location)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(league.location), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center gap-1"><span class="text-muted-400 font-sans text-xs">${ssrInterpolate(league.matches)} \u0645\u0633\u0627\u0628\u0642\u0647 </span>`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          rounded: "lg",
          muted: "",
          class: "scale-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "rtl:rotate-180 size-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "rtl:rotate-180 size-4"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoLeagueListCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/icons/soccer/teams/barcelona.svg");
const _imports_1 = publicAssetsURL("/img/icons/soccer/teams/psg.svg");
const _imports_2 = publicAssetsURL("/img/illustrations/dashboards/soccer/soccer-player.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "soccer",
  __ssrInlineRender: true,
  setup(__props) {
    const matches = [
      {
        id: 1,
        status: "live",
        time: "11:30",
        stadium: "\u06A9\u0645\u067E \u0646\u0648",
        match: {
          home: {
            name: "\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627",
            logo: "/img/icons/soccer/teams/barcelona.svg",
            score: 4
          },
          away: {
            name: "PSG",
            logo: "/img/icons/soccer/teams/psg.svg",
            score: 0
          }
        }
      },
      {
        id: 2,
        status: "scheduled",
        time: "14:30",
        stadium: "\u0628\u0631\u0646\u0627\u0628\u0626\u0648",
        match: {
          home: {
            name: "\u0631\u0626\u0627\u0644 \u0645\u0627\u062F\u0631\u06CC\u062F",
            logo: "/img/icons/soccer/teams/madrid.svg",
            score: 1
          },
          away: {
            name: "\u0644\u06CC\u0648\u0631\u067E\u0648\u0644",
            logo: "/img/icons/soccer/teams/liverpool.svg",
            score: 0
          }
        }
      },
      {
        id: 3,
        status: "scheduled",
        time: "16:30",
        stadium: "\u0622\u0631\u0633\u0646\u0627\u0644",
        match: {
          home: {
            name: "\u0622\u0631\u0633\u0646\u0627\u0644",
            logo: "/img/icons/soccer/teams/arsenal.svg",
            score: void 0
          },
          away: {
            name: "\u0686\u0644\u0633\u06CC",
            logo: "/img/icons/soccer/teams/chelsea.svg",
            score: void 0
          }
        }
      },
      {
        id: 4,
        status: "scheduled",
        time: "18:30",
        stadium: "\u06AF\u0648\u062F\u06CC\u0633\u0648\u0646 \u067E\u0627\u0631\u06A9",
        match: {
          home: {
            name: "\u0627\u0648\u0631\u062A\u0648\u0646",
            logo: "/img/icons/soccer/teams/everton.svg",
            score: void 0
          },
          away: {
            name: "\u0644\u06CC\u0648\u0631\u067E\u0648\u0644",
            logo: "/img/icons/soccer/teams/liverpool.svg",
            score: void 0
          }
        }
      },
      {
        id: 5,
        status: "scheduled",
        time: "20:30",
        stadium: "\u062E\u0648\u0632\u0647 \u0632\u0648\u0631\u06CC\u0627",
        match: {
          home: {
            name: "\u0648\u0627\u06CC\u0627\u062F\u0648\u0644\u06CC\u062F",
            logo: "/img/icons/soccer/teams/valladolid.svg",
            score: void 0
          },
          away: {
            name: "\u0632\u0627\u06AF\u0631\u0628",
            logo: "/img/icons/soccer/teams/zagreb.svg",
            score: void 0
          }
        }
      },
      {
        id: 6,
        status: "scheduled",
        time: "22:30",
        stadium: "\u067E\u0627\u0631\u06A9 \u062F \u067E\u0631\u0646\u0633",
        match: {
          home: {
            name: "PSG",
            logo: "/img/icons/soccer/teams/psg.svg",
            score: void 0
          },
          away: {
            name: "\u0686\u0644\u0633\u06CC",
            logo: "/img/icons/soccer/teams/chelsea.svg",
            score: void 0
          }
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$e;
      const _component_DemoLeagueListCompact = _sfc_main$1;
      const _component_BaseButtonIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative mt-12" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="ptablet:flex-row flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0644\u06CC\u06AF \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646 \u06CC\u0648\u0641\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0644\u06CC\u06AF \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646 \u06CC\u0648\u0641\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mb-6 flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-800 mb-1 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06AF\u0631\u0648\u0647 C</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06AF\u0631\u0648\u0647 C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u062A\u0637\u0628\u06CC\u0642 \u06F3 \u0627\u0632 \u06F6</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u062A\u0637\u0628\u06CC\u0642 \u06F3 \u0627\u0632 \u06F6")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseTag, {
              rounded: "full",
              color: "danger",
              class: "inline-flex items-center justify-center gap-1",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:video",
                    class: "size-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u062F\u0631 \u062D\u0627\u0644 \u067E\u062E\u0634</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:video",
                      class: "size-3"
                    }),
                    createVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u067E\u062E\u0634")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mb-6 flex items-center justify-between"${_scopeId}><div class="flex flex-col text-center"${_scopeId}><img class="mx-auto size-12"${ssrRenderAttr("src", _imports_0)} alt="\u0644\u0648\u06AF\u0648\u06CC \u062A\u06CC\u0645"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400 mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans"${_scopeId}><span class="text-5xl font-bold"${_scopeId}>4</span><span class="text-4xl font-bold"${_scopeId}>:</span><span class="text-5xl font-bold"${_scopeId}>0</span></div><div class="flex flex-col text-center"${_scopeId}><img class="mx-auto size-12"${ssrRenderAttr("src", _imports_1)} alt="\u0644\u0648\u06AF\u0648\u06CC \u062A\u06CC\u0645"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "light",
              lead: "tight",
              class: "text-muted-500 dark:text-muted-400 mt-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>PSG</span>`);
                } else {
                  return [
                    createVNode("span", null, "PSG")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              rounded: "lg",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u06A9\u0646\u0648\u0646 \u062A\u0645\u0627\u0634\u0627 \u06A9\u0646\u06CC\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u06A9\u0646\u0648\u0646 \u062A\u0645\u0627\u0634\u0627 \u06A9\u0646\u06CC\u062F")
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
                  size: "lg",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0644\u06CC\u06AF \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646 \u06CC\u0648\u0641\u0627")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u06AF\u0631\u0648\u0647 C")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "\u062A\u0637\u0628\u06CC\u0642 \u06F3 \u0627\u0632 \u06F6")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseTag, {
                    rounded: "full",
                    color: "danger",
                    class: "inline-flex items-center justify-center gap-1",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:video",
                        class: "size-3"
                      }),
                      createVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u067E\u062E\u0634")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode("div", { class: "flex flex-col text-center" }, [
                  createVNode("img", {
                    class: "mx-auto size-12",
                    src: _imports_0,
                    alt: "\u0644\u0648\u06AF\u0648\u06CC \u062A\u06CC\u0645"
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400 mt-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0628\u0627\u0631\u0633\u0644\u0648\u0646\u0627")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans" }, [
                  createVNode("span", { class: "text-5xl font-bold" }, "4"),
                  createVNode("span", { class: "text-4xl font-bold" }, ":"),
                  createVNode("span", { class: "text-5xl font-bold" }, "0")
                ]),
                createVNode("div", { class: "flex flex-col text-center" }, [
                  createVNode("img", {
                    class: "mx-auto size-12",
                    src: _imports_1,
                    alt: "\u0644\u0648\u06AF\u0648\u06CC \u062A\u06CC\u0645"
                  }),
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-500 dark:text-muted-400 mt-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "PSG")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseButton, {
                  color: "primary",
                  rounded: "lg",
                  class: "!h-12 w-full"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u06A9\u0646\u0648\u0646 \u062A\u0645\u0627\u0634\u0627 \u06A9\u0646\u06CC\u062F")
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
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0644\u06CC\u06AF\u200C\u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0644\u06CC\u06AF\u200C\u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoLeagueListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "lg",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0644\u06CC\u06AF\u200C\u0647\u0627\u06CC \u0645\u0648\u062C\u0648\u062F")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoLeagueListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl sm:flex-row"><div class="mt-6 grow pe-6 ps-6 sm:mt-0 sm:pe-0 sm:ps-10"><div class="pb-4 text-center sm:pb-0 sm:text-start">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062F\u0631 \u0645\u0633\u0627\u0628\u0642\u0647 \u0645\u0627 \u062C\u0648\u0627\u06CC\u0632 \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u0628\u0631\u0646\u062F\u0647 \u0634\u0648\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u062F\u0631 \u0645\u0633\u0627\u0628\u0642\u0647 \u0645\u0627 \u062C\u0648\u0627\u06CC\u0632 \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632\u06CC \u0628\u0631\u0646\u062F\u0647 \u0634\u0648\u06CC\u062F")
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
            _push2(`<span${_scopeId}> \u067E\u06CC\u0634\u200C\u0628\u06CC\u0646\u06CC \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0686\u0647 \u06A9\u0633\u06CC \u0628\u0631\u0646\u062F\u0647 \u062E\u0648\u0627\u0647\u062F \u0634\u062F \u0648 \u0686\u06AF\u0648\u0646\u0647 \u06CC\u06A9 \u0645\u0633\u0627\u0628\u0642\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0645\u06CC\u200C\u06CC\u0627\u0628\u062F \u0648 \u0634\u0627\u0646\u0633 \u0628\u0631\u0646\u062F\u0647 \u0634\u062F\u0646 \u062C\u0648\u0627\u06CC\u0632 \u0646\u0642\u062F\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647 \u0631\u0627 \u0628\u0647\u200C\u062F\u0633\u062A \u0622\u0648\u0631\u06CC\u062F. </span>`);
          } else {
            return [
              createVNode("span", null, " \u067E\u06CC\u0634\u200C\u0628\u06CC\u0646\u06CC \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0686\u0647 \u06A9\u0633\u06CC \u0628\u0631\u0646\u062F\u0647 \u062E\u0648\u0627\u0647\u062F \u0634\u062F \u0648 \u0686\u06AF\u0648\u0646\u0647 \u06CC\u06A9 \u0645\u0633\u0627\u0628\u0642\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0645\u06CC\u200C\u06CC\u0627\u0628\u062F \u0648 \u0634\u0627\u0646\u0633 \u0628\u0631\u0646\u062F\u0647 \u0634\u062F\u0646 \u062C\u0648\u0627\u06CC\u0632 \u0646\u0642\u062F\u06CC \u0641\u0648\u0642\u200C\u0627\u0644\u0639\u0627\u062F\u0647 \u0631\u0627 \u0628\u0647\u200C\u062F\u0633\u062A \u0622\u0648\u0631\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        size: "sm",
        color: "light",
        variant: "outline",
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "rtl:rotate-180 size-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F"),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "rtl:rotate-180 size-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative h-[280px] w-[320px] shrink-0 sm:h-[225px]"><img class="pointer-events-none absolute bottom-0 end-6 sm:-end-10"${ssrRenderAttr("src", _imports_2)} alt="\u0628\u0627\u0632\u06CC\u06A9\u0646 \u0641\u0648\u062A\u0628\u0627\u0644"></div></div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex gap-4 font-sans"${_scopeId}><button class="border-primary-500 text-muted-800 dark:text-muted-100 border-b-2 pb-4"${_scopeId}> \u0647\u0645\u0647 </button><button class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"${_scopeId}> \u0632\u0646\u062F\u0647 </button><button class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"${_scopeId}> \u062A\u0645\u0627\u0645\u200C\u0634\u062F\u0647 </button><button class="text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4"${_scopeId}> \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC\u200C\u0634\u062F\u0647 </button></div><div class="overflow-x-auto"${_scopeId}><div class="inline-block min-w-full align-middle"${_scopeId}><div class="overflow-hidden"${_scopeId}><table class="min-w-full table-fixed divide-y divide-slate-200 text-start dark:divide-slate-700"${_scopeId}><thead${_scopeId}><th class="py-3 font-sans text-xs uppercase"${_scopeId}> \u0632\u0645\u0627\u0646 </th><th class="xs:px-8 py-3 text-center font-sans text-xs uppercase"${_scopeId}> \u0645\u0633\u0627\u0628\u0642\u0647 </th><th class="xs:px-4 py-3 font-sans text-xs uppercase"${_scopeId}> \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 </th><th class="xs:px-4 py-3 font-sans text-xs uppercase"${_scopeId}> \u062C\u0632\u0626\u06CC\u0627\u062A </th></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(matches, (match) => {
              _push2(`<tr${_scopeId}><td class="py-4 align-middle"${_scopeId}><div class="text-muted-500 dark:text-muted-400 flex items-center gap-2 font-sans text-sm"${ssrRenderAttr("data-nui-tooltip", ("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(match.status))}${_scopeId}><div class="${ssrRenderClass([
                match.status === "live" ? "bg-rose-500" : "bg-muted-300 dark:bg-muted-600",
                "size-2 rounded-full"
              ])}"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(match.time)}</span></div></td><td class="xs:px-8 py-4"${_scopeId}><div class="flex items-center justify-center gap-4"${_scopeId}><div class="flex w-[120px] items-center justify-end gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "none",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(match.match.home.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(match.match.home.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<img class="size-8"${ssrRenderAttr("src", match.match.home.logo)}${ssrRenderAttr("alt", match.match.home.name)}${_scopeId}></div><div class="text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans"${_scopeId}><span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(match.match.home.score !== void 0 ? match.match.home.score : "-")}</span><span class="text-xs font-bold"${_scopeId}>:</span><span class="text-sm font-bold"${_scopeId}>${ssrInterpolate(match.match.away.score !== void 0 ? match.match.away.score : "-")}</span></div><div class="flex w-[120px] items-center gap-2"${_scopeId}><img class="size-8"${ssrRenderAttr("src", match.match.away.logo)}${ssrRenderAttr("alt", match.match.away.name)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "none",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(match.match.away.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(match.match.away.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></td><td class="xs:px-4 py-4"${_scopeId}><div class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId}><span class="whitespace-nowrap"${_scopeId}>${ssrInterpolate(match.stadium)}</span></div></td><td class="xs:px-4 py-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                muted: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:more-horizontal",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:more-horizontal",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex gap-4 font-sans" }, [
                createVNode("button", { class: "border-primary-500 text-muted-800 dark:text-muted-100 border-b-2 pb-4" }, " \u0647\u0645\u0647 "),
                createVNode("button", { class: "text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4" }, " \u0632\u0646\u062F\u0647 "),
                createVNode("button", { class: "text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4" }, " \u062A\u0645\u0627\u0645\u200C\u0634\u062F\u0647 "),
                createVNode("button", { class: "text-muted-400 dark:text-muted-500 border-b-2 border-transparent pb-4" }, " \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC\u200C\u0634\u062F\u0647 ")
              ]),
              createVNode("div", { class: "overflow-x-auto" }, [
                createVNode("div", { class: "inline-block min-w-full align-middle" }, [
                  createVNode("div", { class: "overflow-hidden" }, [
                    createVNode("table", { class: "min-w-full table-fixed divide-y divide-slate-200 text-start dark:divide-slate-700" }, [
                      createVNode("thead", null, [
                        createVNode("th", { class: "py-3 font-sans text-xs uppercase" }, " \u0632\u0645\u0627\u0646 "),
                        createVNode("th", { class: "xs:px-8 py-3 text-center font-sans text-xs uppercase" }, " \u0645\u0633\u0627\u0628\u0642\u0647 "),
                        createVNode("th", { class: "xs:px-4 py-3 font-sans text-xs uppercase" }, " \u0648\u0631\u0632\u0634\u06AF\u0627\u0647 "),
                        createVNode("th", { class: "xs:px-4 py-3 font-sans text-xs uppercase" }, " \u062C\u0632\u0626\u06CC\u0627\u062A ")
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(), createBlock(Fragment, null, renderList(matches, (match) => {
                          return createVNode("tr", {
                            key: match.id
                          }, [
                            createVNode("td", { class: "py-4 align-middle" }, [
                              createVNode("div", {
                                class: "text-muted-500 dark:text-muted-400 flex items-center gap-2 font-sans text-sm",
                                "data-nui-tooltip": ("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(match.status)
                              }, [
                                createVNode("div", {
                                  class: [
                                    "size-2 rounded-full",
                                    match.status === "live" ? "bg-rose-500" : "bg-muted-300 dark:bg-muted-600"
                                  ]
                                }, null, 2),
                                createVNode("span", null, toDisplayString(match.time), 1)
                              ], 8, ["data-nui-tooltip"])
                            ]),
                            createVNode("td", { class: "xs:px-8 py-4" }, [
                              createVNode("div", { class: "flex items-center justify-center gap-4" }, [
                                createVNode("div", { class: "flex w-[120px] items-center justify-end gap-2" }, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "light",
                                    lead: "none",
                                    class: "text-muted-500 dark:text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(match.match.home.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("img", {
                                    class: "size-8",
                                    src: match.match.home.logo,
                                    alt: match.match.home.name
                                  }, null, 8, ["src", "alt"])
                                ]),
                                createVNode("div", { class: "text-muted-800 dark:text-muted-100 flex items-center justify-center gap-2 text-center font-sans" }, [
                                  createVNode("span", { class: "text-sm font-bold" }, toDisplayString(match.match.home.score !== void 0 ? match.match.home.score : "-"), 1),
                                  createVNode("span", { class: "text-xs font-bold" }, ":"),
                                  createVNode("span", { class: "text-sm font-bold" }, toDisplayString(match.match.away.score !== void 0 ? match.match.away.score : "-"), 1)
                                ]),
                                createVNode("div", { class: "flex w-[120px] items-center gap-2" }, [
                                  createVNode("img", {
                                    class: "size-8",
                                    src: match.match.away.logo,
                                    alt: match.match.away.name
                                  }, null, 8, ["src", "alt"]),
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "light",
                                    lead: "none",
                                    class: "text-muted-500 dark:text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(match.match.away.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "xs:px-4 py-4" }, [
                              createVNode("div", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, [
                                createVNode("span", { class: "whitespace-nowrap" }, toDisplayString(match.stadium), 1)
                              ])
                            ]),
                            createVNode("td", { class: "xs:px-4 py-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_BaseButtonIcon, {
                                  small: "",
                                  muted: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:more-horizontal",
                                      class: "size-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]);
                        }), 64))
                      ])
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/soccer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
