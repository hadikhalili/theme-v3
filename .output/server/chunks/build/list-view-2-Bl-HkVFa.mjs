import { _ as _sfc_main$1 } from './TairoContentWrapperTabbed-C4oQwuE6.mjs';
import { j as useRoute, u as useRouter, d as _sfc_main$D, l as _sfc_main$3, h as _sfc_main$u, b as _sfc_main$w, a as __nuxt_component_2, c as _sfc_main$v, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$2 } from './BasePagination-BbyUf1ZX.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, TransitionGroup, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-1hSz1JCe.mjs';
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

const _imports_2 = publicAssetsURL("/img/illustrations/placeholders/flat/placeholder-having-coffee.svg");
const _imports_3 = publicAssetsURL("/img/illustrations/placeholders/flat/placeholder-having-coffee-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list-view-2",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/rentals", {
      query
    }, "$RzJ66B63K3")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapperTabbed = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BasePagination = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapperTabbed, { labels: ["\u0641\u0639\u0627\u0644", "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644"] }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627...",
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
                placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        "tab-1": withCtx((_, _push2, _parent2, _scopeId) => {
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
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: item.id,
                  rounded: "lg",
                  class: "flex flex-col p-5 sm:flex-row sm:items-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start"${_scopeId2}><img class="bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]"${ssrRenderAttr("src", item.picture)}${ssrRenderAttr("alt", item.name)}${ssrRenderAttr("height", 190)}${ssrRenderAttr("width", 130)}${_scopeId2}><div${_scopeId2}><div class="flex flex-col gap-2 text-start sm:flex-row sm:items-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "uiw:star-on",
                        class: [
                          "size-3",
                          item.rating > 0 ? "text-yellow-400" : "text-muted-400"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "uiw:star-on",
                        class: [
                          "size-3",
                          item.rating >= 2 ? "text-yellow-400" : "text-muted-400"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "uiw:star-on",
                        class: [
                          "size-3",
                          item.rating >= 3 ? "text-yellow-400" : "text-muted-400"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "uiw:star-on",
                        class: [
                          "size-3",
                          item.rating >= 4 ? "text-yellow-400" : "text-muted-400"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "uiw:star-on",
                        class: [
                          "size-3",
                          item.rating === 5 ? "text-yellow-400" : "text-muted-400"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "none",
                        class: "text-muted-400 mt-3 flex gap-1 text-start text-sm sm:mt-0 sm:items-end"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:map-pin",
                              class: "size-3"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.location)}</span>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "lucide:map-pin",
                                class: "size-3"
                              }),
                              createVNode("span", null, toDisplayString(item.location), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="text-primary-500 my-2 flex items-center gap-2"${_scopeId2}><span class="font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.details.rooms)} \u0627\u062A\u0627\u0642 </span><span class="text-muted-400"${_scopeId2}>\xB7</span><span class="font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.details.beds)} \u062A\u062E\u062A \u062E\u0648\u0627\u0628 </span><span class="text-muted-400"${_scopeId2}>\xB7</span><span class="font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.details.bathrooms)} \u062D\u0645\u0627\u0645 </span></div><div class="text-muted-400 mt-auto flex items-center gap-6"${_scopeId2}>`);
                      if (item.amenities.parking) {
                        _push3(`<div class="flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:car-duotone",
                          class: "size-4"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="font-sans text-xs"${_scopeId2}>\u067E\u0627\u0631\u06A9\u06CC\u0646\u06AF</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.amenities.wifi) {
                        _push3(`<div class="flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:broadcast-duotone",
                          class: "size-4"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="font-sans text-xs"${_scopeId2}>\u0648\u0627\u06CC\u200C\u0641\u0627\u06CC</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.amenities.heater) {
                        _push3(`<div class="flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:thermometer-duotone",
                          class: "size-4"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="font-sans text-xs"${_scopeId2}>\u0628\u062E\u0627\u0631\u06CC</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.amenities.cleaning) {
                        _push3(`<div class="flex items-center gap-1"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:waves-duotone",
                          class: "size-4"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="font-sans text-xs"${_scopeId2}>\u0646\u0638\u0627\u0641\u062A</span></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div></div><div class="ptablet:flex-col mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:w-28" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 `);
                          } else {
                            return [
                              createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseButton, {
                        color: "primary",
                        class: "w-full sm:w-28"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646 \u0631\u0632\u0631\u0648 \u06A9\u0646\u06CC\u062F</span>`);
                          } else {
                            return [
                              createVNode("span", null, "\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646 \u0631\u0632\u0631\u0648 \u06A9\u0646\u06CC\u062F")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start" }, [
                          createVNode("img", {
                            class: "bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]",
                            src: item.picture,
                            alt: item.name,
                            height: 190,
                            width: 130
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", null, [
                            createVNode("div", { class: "flex flex-col gap-2 text-start sm:flex-row sm:items-center" }, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium",
                                class: "text-muted-800 dark:text-muted-100"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_Icon, {
                                  name: "uiw:star-on",
                                  class: [
                                    "size-3",
                                    item.rating > 0 ? "text-yellow-400" : "text-muted-400"
                                  ]
                                }, null, 8, ["class"]),
                                createVNode(_component_Icon, {
                                  name: "uiw:star-on",
                                  class: [
                                    "size-3",
                                    item.rating >= 2 ? "text-yellow-400" : "text-muted-400"
                                  ]
                                }, null, 8, ["class"]),
                                createVNode(_component_Icon, {
                                  name: "uiw:star-on",
                                  class: [
                                    "size-3",
                                    item.rating >= 3 ? "text-yellow-400" : "text-muted-400"
                                  ]
                                }, null, 8, ["class"]),
                                createVNode(_component_Icon, {
                                  name: "uiw:star-on",
                                  class: [
                                    "size-3",
                                    item.rating >= 4 ? "text-yellow-400" : "text-muted-400"
                                  ]
                                }, null, 8, ["class"]),
                                createVNode(_component_Icon, {
                                  name: "uiw:star-on",
                                  class: [
                                    "size-3",
                                    item.rating === 5 ? "text-yellow-400" : "text-muted-400"
                                  ]
                                }, null, 8, ["class"])
                              ])
                            ]),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              lead: "none",
                              class: "text-muted-400 mt-3 flex gap-1 text-start text-sm sm:mt-0 sm:items-end"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "lucide:map-pin",
                                  class: "size-3"
                                }),
                                createVNode("span", null, toDisplayString(item.location), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "text-primary-500 my-2 flex items-center gap-2" }, [
                              createVNode("span", { class: "font-sans text-xs" }, toDisplayString(item.details.rooms) + " \u0627\u062A\u0627\u0642 ", 1),
                              createVNode("span", { class: "text-muted-400" }, "\xB7"),
                              createVNode("span", { class: "font-sans text-xs" }, toDisplayString(item.details.beds) + " \u062A\u062E\u062A \u062E\u0648\u0627\u0628 ", 1),
                              createVNode("span", { class: "text-muted-400" }, "\xB7"),
                              createVNode("span", { class: "font-sans text-xs" }, toDisplayString(item.details.bathrooms) + " \u062D\u0645\u0627\u0645 ", 1)
                            ]),
                            createVNode("div", { class: "text-muted-400 mt-auto flex items-center gap-6" }, [
                              item.amenities.parking ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center gap-1"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ph:car-duotone",
                                  class: "size-4"
                                }),
                                createVNode("span", { class: "font-sans text-xs" }, "\u067E\u0627\u0631\u06A9\u06CC\u0646\u06AF")
                              ])) : createCommentVNode("", true),
                              item.amenities.wifi ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center gap-1"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ph:broadcast-duotone",
                                  class: "size-4"
                                }),
                                createVNode("span", { class: "font-sans text-xs" }, "\u0648\u0627\u06CC\u200C\u0641\u0627\u06CC")
                              ])) : createCommentVNode("", true),
                              item.amenities.heater ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "flex items-center gap-1"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ph:thermometer-duotone",
                                  class: "size-4"
                                }),
                                createVNode("span", { class: "font-sans text-xs" }, "\u0628\u062E\u0627\u0631\u06CC")
                              ])) : createCommentVNode("", true),
                              item.amenities.cleaning ? (openBlock(), createBlock("div", {
                                key: 3,
                                class: "flex items-center gap-1"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ph:waves-duotone",
                                  class: "size-4"
                                }),
                                createVNode("span", { class: "font-sans text-xs" }, "\u0646\u0638\u0627\u0641\u062A")
                              ])) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "ptablet:flex-col mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4" }, [
                          createVNode(_component_BaseButton, { class: "w-full sm:w-28" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseButton, {
                            color: "primary",
                            class: "w-full sm:w-28"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646 \u0631\u0632\u0631\u0648 \u06A9\u0646\u06CC\u062F")
                            ]),
                            _: 1
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><div class="mt-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                total: 100,
                "item-per-page": 10,
                "total-items": 100,
                current: 1,
                limit: 10,
                classes: { button: "rtl:rotate-180" },
                rounded: "full"
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
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "space-y-4"
                }, [
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
                          class: "flex flex-col p-5 sm:flex-row sm:items-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start" }, [
                              createVNode("img", {
                                class: "bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]",
                                src: item.picture,
                                alt: item.name,
                                height: 190,
                                width: 130
                              }, null, 8, ["src", "alt"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "flex flex-col gap-2 text-start sm:flex-row sm:items-center" }, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h3",
                                    size: "sm",
                                    weight: "medium",
                                    class: "text-muted-800 dark:text-muted-100"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_Icon, {
                                      name: "uiw:star-on",
                                      class: [
                                        "size-3",
                                        item.rating > 0 ? "text-yellow-400" : "text-muted-400"
                                      ]
                                    }, null, 8, ["class"]),
                                    createVNode(_component_Icon, {
                                      name: "uiw:star-on",
                                      class: [
                                        "size-3",
                                        item.rating >= 2 ? "text-yellow-400" : "text-muted-400"
                                      ]
                                    }, null, 8, ["class"]),
                                    createVNode(_component_Icon, {
                                      name: "uiw:star-on",
                                      class: [
                                        "size-3",
                                        item.rating >= 3 ? "text-yellow-400" : "text-muted-400"
                                      ]
                                    }, null, 8, ["class"]),
                                    createVNode(_component_Icon, {
                                      name: "uiw:star-on",
                                      class: [
                                        "size-3",
                                        item.rating >= 4 ? "text-yellow-400" : "text-muted-400"
                                      ]
                                    }, null, 8, ["class"]),
                                    createVNode(_component_Icon, {
                                      name: "uiw:star-on",
                                      class: [
                                        "size-3",
                                        item.rating === 5 ? "text-yellow-400" : "text-muted-400"
                                      ]
                                    }, null, 8, ["class"])
                                  ])
                                ]),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  lead: "none",
                                  class: "text-muted-400 mt-3 flex gap-1 text-start text-sm sm:mt-0 sm:items-end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:map-pin",
                                      class: "size-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.location), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "text-primary-500 my-2 flex items-center gap-2" }, [
                                  createVNode("span", { class: "font-sans text-xs" }, toDisplayString(item.details.rooms) + " \u0627\u062A\u0627\u0642 ", 1),
                                  createVNode("span", { class: "text-muted-400" }, "\xB7"),
                                  createVNode("span", { class: "font-sans text-xs" }, toDisplayString(item.details.beds) + " \u062A\u062E\u062A \u062E\u0648\u0627\u0628 ", 1),
                                  createVNode("span", { class: "text-muted-400" }, "\xB7"),
                                  createVNode("span", { class: "font-sans text-xs" }, toDisplayString(item.details.bathrooms) + " \u062D\u0645\u0627\u0645 ", 1)
                                ]),
                                createVNode("div", { class: "text-muted-400 mt-auto flex items-center gap-6" }, [
                                  item.amenities.parking ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex items-center gap-1"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:car-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans text-xs" }, "\u067E\u0627\u0631\u06A9\u06CC\u0646\u06AF")
                                  ])) : createCommentVNode("", true),
                                  item.amenities.wifi ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center gap-1"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:broadcast-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans text-xs" }, "\u0648\u0627\u06CC\u200C\u0641\u0627\u06CC")
                                  ])) : createCommentVNode("", true),
                                  item.amenities.heater ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "flex items-center gap-1"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:thermometer-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans text-xs" }, "\u0628\u062E\u0627\u0631\u06CC")
                                  ])) : createCommentVNode("", true),
                                  item.amenities.cleaning ? (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: "flex items-center gap-1"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:waves-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans text-xs" }, "\u0646\u0638\u0627\u0641\u062A")
                                  ])) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "ptablet:flex-col mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4" }, [
                              createVNode(_component_BaseButton, { class: "w-full sm:w-28" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseButton, {
                                color: "primary",
                                class: "w-full sm:w-28"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646 \u0631\u0632\u0631\u0648 \u06A9\u0646\u06CC\u062F")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode(_component_BasePagination, {
                      total: 100,
                      "item-per-page": 10,
                      "total-items": 100,
                      current: 1,
                      limit: 10,
                      classes: { button: "rtl:rotate-180" },
                      rounded: "full"
                    })
                  ])
                ]))
              ])
            ];
          }
        }),
        "tab-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
              title: "\u0647\u06CC\u0686 \u0648\u06CC\u0698\u06AF\u06CC \u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.",
              subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0644\u0637\u0641\u0627\u064B \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F."
            }, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_2)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_3)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "block dark:hidden",
                      src: _imports_2,
                      alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                    }),
                    createVNode("img", {
                      class: "hidden dark:block",
                      src: _imports_3,
                      alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BasePlaceholderPage, {
                title: "\u0647\u06CC\u0686 \u0648\u06CC\u0698\u06AF\u06CC \u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.",
                subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u063A\u06CC\u0631 \u0641\u0639\u0627\u0644 \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0644\u0637\u0641\u0627\u064B \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F."
              }, {
                image: withCtx(() => [
                  createVNode("img", {
                    class: "block dark:hidden",
                    src: _imports_2,
                    alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                  }),
                  createVNode("img", {
                    class: "hidden dark:block",
                    src: _imports_3,
                    alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/list-view-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
