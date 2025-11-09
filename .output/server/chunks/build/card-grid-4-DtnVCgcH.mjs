import { _ as _sfc_main$1 } from './TairoContentWrapper-BtoDOOS0.mjs';
import { j as useRoute, u as useRouter, d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, l as _sfc_main$3, h as _sfc_main$u, b as _sfc_main$w } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$4 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$5 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$6 } from './BasePagination-BbyUf1ZX.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, TransitionGroup, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-Yu7gT9--.mjs';
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
  __name: "card-grid-4",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(12);
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/posts/", {
      query
    }, "$i0CXiDyNcK")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseAvatar = _sfc_main$4;
      const _component_BaseButtonAction = _sfc_main$5;
      const _component_BasePagination = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              rounded: "lg",
              placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u067E\u0633\u062A\u200C\u0647\u0627...",
              classes: {
                wrapper: "w-full sm:w-auto"
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(filter),
                "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
                icon: "lucide:search",
                rounded: "lg",
                placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u067E\u0633\u062A\u200C\u0647\u0627...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "lg",
              class: "w-full sm:w-28"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u0627\u0646\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u0627\u0646\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "lg",
              color: "primary",
              class: "w-full sm:w-28"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "me-2 size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u062C\u062F\u06CC\u062F</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "me-2 size-4"
                    }),
                    createVNode("span", null, "\u062C\u062F\u06CC\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                rounded: "lg",
                class: "w-full sm:w-28"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062E\u0627\u0646\u0647 ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                rounded: "lg",
                color: "primary",
                class: "w-full sm:w-28"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "me-2 size-4"
                  }),
                  createVNode("span", null, "\u062C\u062F\u06CC\u062F")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (!unref(pending) && unref(data)?.data.length === 0) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
                subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F."
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}><div class="ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: item.id,
                  rounded: "lg",
                  class: "group p-3"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="relative"${_scopeId2}><img${ssrRenderAttr("src", item.image)} class="h-40 w-full rounded-lg object-cover" alt=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseTag, {
                        rounded: "full",
                        color: "primary",
                        variant: "pastel",
                        size: "sm",
                        class: "absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.category)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.category), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div${_scopeId2}><div class="mb-6 mt-3"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "md",
                        weight: "medium",
                        lead: "snug",
                        class: "line-clamp-2 text-gray-800 dark:text-gray-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="mt-auto flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: item.author.avatar,
                        text: item.author.initials,
                        size: "xs",
                        class: "bg-muted-500/20 text-muted-500"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="leading-none"${_scopeId2}><h4 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"${_scopeId2}>${ssrInterpolate(item.author.name)}</h4><p class="text-muted-400 font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.published)}</p></div><div class="ms-auto"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseButtonAction, {
                        to: "#",
                        rounded: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:edit-3",
                              class: "me-2"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>\u0648\u06CC\u0631\u0627\u06CC\u0634</span>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "lucide:edit-3",
                                class: "me-2"
                              }),
                              createVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "relative" }, [
                          createVNode("img", {
                            src: item.image,
                            class: "h-40 w-full rounded-lg object-cover",
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode(_component_BaseTag, {
                            rounded: "full",
                            color: "primary",
                            variant: "pastel",
                            size: "sm",
                            class: "absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.category), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "mb-6 mt-3" }, [
                            createVNode(_component_BaseHeading, {
                              tag: "h3",
                              size: "md",
                              weight: "medium",
                              lead: "snug",
                              class: "line-clamp-2 text-gray-800 dark:text-gray-100"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "mt-auto flex items-center gap-2" }, [
                            createVNode(_component_BaseAvatar, {
                              src: item.author.avatar,
                              text: item.author.initials,
                              size: "xs",
                              class: "bg-muted-500/20 text-muted-500"
                            }, null, 8, ["src", "text"]),
                            createVNode("div", { class: "leading-none" }, [
                              createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight" }, toDisplayString(item.author.name), 1),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.published), 1)
                            ]),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_BaseButtonAction, {
                                to: "#",
                                rounded: "sm"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "lucide:edit-3",
                                    class: "me-2"
                                  }),
                                  createVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                classes: { button: "rtl:rotate-180" },
                rounded: "lg"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                !unref(pending) && unref(data)?.data.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
                    subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F."
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-4" }, [
                    createVNode(TransitionGroup, {
                      "enter-active-class": "transform-gpu",
                      "enter-from-class": "opacity-0 -translate-x-full",
                      "enter-to-class": "opacity-100 translate-x-0",
                      "leave-active-class": "absolute transform-gpu",
                      "leave-from-class": "opacity-100 translate-x-0",
                      "leave-to-class": "opacity-0 -translate-x-full"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item) => {
                          return openBlock(), createBlock(_component_BaseCard, {
                            key: item.id,
                            rounded: "lg",
                            class: "group p-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "relative" }, [
                                createVNode("img", {
                                  src: item.image,
                                  class: "h-40 w-full rounded-lg object-cover",
                                  alt: ""
                                }, null, 8, ["src"]),
                                createVNode(_component_BaseTag, {
                                  rounded: "full",
                                  color: "primary",
                                  variant: "pastel",
                                  size: "sm",
                                  class: "absolute start-3 top-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.category), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "mb-6 mt-3" }, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h3",
                                    size: "md",
                                    weight: "medium",
                                    lead: "snug",
                                    class: "line-clamp-2 text-gray-800 dark:text-gray-100"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "mt-auto flex items-center gap-2" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.author.avatar,
                                    text: item.author.initials,
                                    size: "xs",
                                    class: "bg-muted-500/20 text-muted-500"
                                  }, null, 8, ["src", "text"]),
                                  createVNode("div", { class: "leading-none" }, [
                                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight" }, toDisplayString(item.author.name), 1),
                                    createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.published), 1)
                                  ]),
                                  createVNode("div", { class: "ms-auto" }, [
                                    createVNode(_component_BaseButtonAction, {
                                      to: "#",
                                      rounded: "sm"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:edit-3",
                                          class: "me-2"
                                        }),
                                        createVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_BasePagination, {
                      "total-items": unref(data)?.total ?? 0,
                      "item-per-page": unref(perPage),
                      "current-page": unref(page),
                      classes: { button: "rtl:rotate-180" },
                      rounded: "lg"
                    }, null, 8, ["total-items", "item-per-page", "current-page"])
                  ])
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/card-grid-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
