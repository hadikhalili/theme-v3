import { _ as _sfc_main$1 } from './TairoContentWrapper-BtoDOOS0.mjs';
import { j as useRoute, u as useRouter, d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, l as _sfc_main$3 } from './server.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$4 } from './DemoFlexTableCell-5giP0-Gq.mjs';
import { _ as _sfc_main$5 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$6 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { _ as _sfc_main$7 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$8 } from './BasePagination-BbyUf1ZX.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, TransitionGroup, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-BzXbqdKu.mjs';
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
import './BaseIconBox-Cgm-LP3M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "flex-list-2",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/company/candidates",
      {
        query
      },
      "$wYq94uGIdM"
    )), __temp = await __temp, __restore(), __temp);
    function statusColor(itemStatus) {
      switch (itemStatus) {
        case "\u0622\u0646\u0644\u0627\u06CC\u0646":
          return "success";
        case "\u0645\u0634\u063A\u0648\u0644":
          return "info";
        case "\u062A\u0639\u0644\u06CC\u0642 \u0634\u062F\u0647":
          return "warning";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_DemoFlexTableRow = _sfc_main$2;
      const _component_DemoFlexTableStart = _sfc_main$1$1;
      const _component_DemoFlexTableCell = _sfc_main$4;
      const _component_BaseTag = _sfc_main$5;
      const _component_BaseAvatarGroup = _sfc_main$6;
      const _component_BaseButtonAction = _sfc_main$7;
      const _component_BasePagination = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              rounded: "full",
              placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646...",
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
                rounded: "full",
                placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646...",
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
              class: "w-full sm:w-32",
              rounded: "full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u062F\u06CC\u0631\u06CC\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              rounded: "full",
              class: "w-full sm:w-32"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                class: "w-full sm:w-32",
                rounded: "full"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                rounded: "full",
                class: "w-full sm:w-32"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-4"
                  }),
                  createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631")
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
              _push2(`<div class="pt-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_DemoFlexTableRow, {
                  key: index,
                  rounded: "none",
                  condensed: "",
                  spaced: ""
                }, {
                  start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_DemoFlexTableStart, {
                        label: "\u06A9\u0627\u0631\u0628\u0631",
                        "hide-label": index > 0,
                        title: item.username,
                        subtitle: item.position,
                        avatar: item.src,
                        badge: item.badge,
                        initials: item.initials
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_DemoFlexTableStart, {
                          label: "\u06A9\u0627\u0631\u0628\u0631",
                          "hide-label": index > 0,
                          title: item.username,
                          subtitle: item.position,
                          avatar: item.src,
                          badge: item.badge,
                          initials: item.initials
                        }, null, 8, ["hide-label", "title", "subtitle", "avatar", "badge", "initials"])
                      ];
                    }
                  }),
                  end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                        "hide-label": index > 0,
                        class: "w-full sm:w-40"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId3}>${ssrInterpolate(item.location)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.location), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "\u0635\u0646\u0639\u062A",
                        "hide-label": index > 0,
                        class: "w-full sm:w-40"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId3}>${ssrInterpolate(item.industry)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.industry), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "\u0648\u0636\u0639\u06CC\u062A",
                        "hide-label": index > 0,
                        class: "w-full sm:w-16"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: statusColor(item.status),
                              rounded: "full",
                              variant: "pastel",
                              size: "sm",
                              class: "text-nowrap capitalize"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseTag, {
                                color: statusColor(item.status),
                                rounded: "full",
                                variant: "pastel",
                                size: "sm",
                                class: "text-nowrap capitalize"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.status), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A",
                        "hide-label": index > 0,
                        "tablet-hidden": "",
                        class: "w-full sm:w-[160px]"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseAvatarGroup, {
                              size: "xs",
                              avatars: item.relations,
                              limit: 2
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseAvatarGroup, {
                                size: "xs",
                                avatars: item.relations,
                                limit: 2
                              }, null, 8, ["avatars"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_DemoFlexTableCell, {
                        label: "\u0627\u0642\u062F\u0627\u0645",
                        "hide-label": index > 0
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseButtonAction, { color: "muted" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<span${_scopeId4}>\u0645\u0634\u0627\u0647\u062F\u0647</span>`);
                                } else {
                                  return [
                                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseButtonAction, { color: "muted" }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647")
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_DemoFlexTableCell, {
                          label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                          "hide-label": index > 0,
                          class: "w-full sm:w-40"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.location), 1)
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "\u0635\u0646\u0639\u062A",
                          "hide-label": index > 0,
                          class: "w-full sm:w-40"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.industry), 1)
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "\u0648\u0636\u0639\u06CC\u062A",
                          "hide-label": index > 0,
                          class: "w-full sm:w-16"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseTag, {
                              color: statusColor(item.status),
                              rounded: "full",
                              variant: "pastel",
                              size: "sm",
                              class: "text-nowrap capitalize"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A",
                          "hide-label": index > 0,
                          "tablet-hidden": "",
                          class: "w-full sm:w-[160px]"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseAvatarGroup, {
                              size: "xs",
                              avatars: item.relations,
                              limit: 2
                            }, null, 8, ["avatars"])
                          ]),
                          _: 2
                        }, 1032, ["hide-label"]),
                        createVNode(_component_DemoFlexTableCell, {
                          label: "\u0627\u0642\u062F\u0627\u0645",
                          "hide-label": index > 0
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseButtonAction, { color: "muted" }, {
                              default: withCtx(() => [
                                createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["hide-label"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            }
            if (!unref(pending) && unref(data)?.data.length !== 0) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePagination, {
                "total-items": unref(data)?.total ?? 0,
                "item-per-page": unref(perPage),
                "current-page": unref(page),
                classes: { button: "rtl:rotate-180" },
                rounded: "full"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
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
                  class: "pt-6"
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data, (item, index) => {
                        return openBlock(), createBlock(_component_DemoFlexTableRow, {
                          key: index,
                          rounded: "none",
                          condensed: "",
                          spaced: ""
                        }, {
                          start: withCtx(() => [
                            createVNode(_component_DemoFlexTableStart, {
                              label: "\u06A9\u0627\u0631\u0628\u0631",
                              "hide-label": index > 0,
                              title: item.username,
                              subtitle: item.position,
                              avatar: item.src,
                              badge: item.badge,
                              initials: item.initials
                            }, null, 8, ["hide-label", "title", "subtitle", "avatar", "badge", "initials"])
                          ]),
                          end: withCtx(() => [
                            createVNode(_component_DemoFlexTableCell, {
                              label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                              "hide-label": index > 0,
                              class: "w-full sm:w-40"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.location), 1)
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "\u0635\u0646\u0639\u062A",
                              "hide-label": index > 0,
                              class: "w-full sm:w-40"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.industry), 1)
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "\u0648\u0636\u0639\u06CC\u062A",
                              "hide-label": index > 0,
                              class: "w-full sm:w-16"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseTag, {
                                  color: statusColor(item.status),
                                  rounded: "full",
                                  variant: "pastel",
                                  size: "sm",
                                  class: "text-nowrap capitalize"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.status), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "\u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A",
                              "hide-label": index > 0,
                              "tablet-hidden": "",
                              class: "w-full sm:w-[160px]"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseAvatarGroup, {
                                  size: "xs",
                                  avatars: item.relations,
                                  limit: 2
                                }, null, 8, ["avatars"])
                              ]),
                              _: 2
                            }, 1032, ["hide-label"]),
                            createVNode(_component_DemoFlexTableCell, {
                              label: "\u0627\u0642\u062F\u0627\u0645",
                              "hide-label": index > 0
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseButtonAction, { color: "muted" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["hide-label"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])),
                !unref(pending) && unref(data)?.data.length !== 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "mt-4"
                }, [
                  createVNode(_component_BasePagination, {
                    "total-items": unref(data)?.total ?? 0,
                    "item-per-page": unref(perPage),
                    "current-page": unref(page),
                    classes: { button: "rtl:rotate-180" },
                    rounded: "full"
                  }, null, 8, ["total-items", "item-per-page", "current-page"])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/flex-list-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
