import { _ as _sfc_main$1 } from './TairoContentWrapper-BtoDOOS0.mjs';
import { j as useRoute, u as useRouter, d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, l as _sfc_main$3, h as _sfc_main$u, b as _sfc_main$w } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$4 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { _ as _sfc_main$5 } from './BasePagination-BbyUf1ZX.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, TransitionGroup, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-DCEdCpGW.mjs';
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
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tile-grid-3",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/recipes", {
      query
    }, "$p8QRGXOhTp")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$4;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BasePagination = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              rounded: "lg",
              placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644\u200C\u0647\u0627...",
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
                placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644\u200C\u0647\u0627...",
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
              rounded: "lg"
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
              class: "w-full text-nowrap sm:w-32",
              rounded: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "me-2 size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "me-2 size-4"
                    }),
                    createVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButton, {
                class: "w-full sm:w-32",
                rounded: "lg"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                class: "w-full text-nowrap sm:w-32",
                rounded: "lg"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "me-2 size-4"
                  }),
                  createVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC")
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
              _push2(`<div class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: index,
                  rounded: "lg",
                  class: "p-3"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: item.icon,
                        "badge-src": item.author.avatar,
                        "data-nui-tooltip": `by ${item.author.name}`,
                        size: "md",
                        class: "bg-muted-100 dark:bg-muted-700/70"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
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
                      _push3(`<div class="flex items-center justify-center gap-6 sm:justify-start sm:gap-0"${_scopeId2}><div class="text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:archive",
                        class: "size-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.category)}</span></div><div class="hidden px-2 sm:block"${_scopeId2}><span${_scopeId2}>\xB7</span></div><div class="text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:clock",
                        class: "size-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.duration)}</span></div><div class="hidden px-2 sm:block"${_scopeId2}><span${_scopeId2}>\xB7</span></div><div class="text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:paperclip",
                        class: "size-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>${ssrInterpolate(item.attachments)}</span></div></div></div><div class="ms-auto"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseDropdown, {
                        variant: "context",
                        label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                        placement: "bottom-end",
                        size: "md",
                        class: "z-20",
                        rounded: "lg"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                              text: "\u062F\u0627\u0646\u0644\u0648\u062F \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:download-duotone",
                                    class: "me-2 block size-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:download-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                              text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:share-duotone",
                                    class: "me-2 block size-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:share-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "\u0630\u062E\u06CC\u0631\u0647",
                              text: "\u0630\u062E\u06CC\u0631\u0647 \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:bookmark-simple-duotone",
                                    class: "me-2 block size-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:bookmark-simple-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                                text: "\u062F\u0627\u0646\u0644\u0648\u062F \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:download-duotone",
                                    class: "me-2 block size-5"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseDropdownDivider),
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                                text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:share-duotone",
                                    class: "me-2 block size-5"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseDropdownDivider),
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "\u0630\u062E\u06CC\u0631\u0647",
                                text: "\u0630\u062E\u06CC\u0631\u0647 \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:bookmark-simple-duotone",
                                    class: "me-2 block size-5"
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex w-full items-center gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            src: item.icon,
                            "badge-src": item.author.avatar,
                            "data-nui-tooltip": `by ${item.author.name}`,
                            size: "md",
                            class: "bg-muted-100 dark:bg-muted-700/70"
                          }, null, 8, ["src", "badge-src", "data-nui-tooltip"]),
                          createVNode("div", null, [
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
                            createVNode("div", { class: "flex items-center justify-center gap-6 sm:justify-start sm:gap-0" }, [
                              createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:archive",
                                  class: "size-3"
                                }),
                                createVNode("span", null, toDisplayString(item.category), 1)
                              ]),
                              createVNode("div", { class: "hidden px-2 sm:block" }, [
                                createVNode("span", null, "\xB7")
                              ]),
                              createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:clock",
                                  class: "size-3"
                                }),
                                createVNode("span", null, toDisplayString(item.duration), 1)
                              ]),
                              createVNode("div", { class: "hidden px-2 sm:block" }, [
                                createVNode("span", null, "\xB7")
                              ]),
                              createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:paperclip",
                                  class: "size-3"
                                }),
                                createVNode("span", null, toDisplayString(item.attachments), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode(_component_BaseDropdown, {
                              variant: "context",
                              label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                              placement: "bottom-end",
                              size: "md",
                              class: "z-20",
                              rounded: "lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseDropdownItem, {
                                  to: "#",
                                  title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                                  text: "\u062F\u0627\u0646\u0644\u0648\u062F \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                                }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:download-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseDropdownDivider),
                                createVNode(_component_BaseDropdownItem, {
                                  to: "#",
                                  title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                                  text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                                }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:share-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseDropdownDivider),
                                createVNode(_component_BaseDropdownItem, {
                                  to: "#",
                                  title: "\u0630\u062E\u06CC\u0631\u0647",
                                  text: "\u0630\u062E\u06CC\u0631\u0647 \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                                }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ph:bookmark-simple-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
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
                rounded: "lg"
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
                  class: "ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
                        return openBlock(), createBlock(_component_BaseCard, {
                          key: index,
                          rounded: "lg",
                          class: "p-3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full items-center gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                src: item.icon,
                                "badge-src": item.author.avatar,
                                "data-nui-tooltip": `by ${item.author.name}`,
                                size: "md",
                                class: "bg-muted-100 dark:bg-muted-700/70"
                              }, null, 8, ["src", "badge-src", "data-nui-tooltip"]),
                              createVNode("div", null, [
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
                                createVNode("div", { class: "flex items-center justify-center gap-6 sm:justify-start sm:gap-0" }, [
                                  createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:archive",
                                      class: "size-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.category), 1)
                                  ]),
                                  createVNode("div", { class: "hidden px-2 sm:block" }, [
                                    createVNode("span", null, "\xB7")
                                  ]),
                                  createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:clock",
                                      class: "size-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.duration), 1)
                                  ]),
                                  createVNode("div", { class: "hidden px-2 sm:block" }, [
                                    createVNode("span", null, "\xB7")
                                  ]),
                                  createVNode("div", { class: "text-muted-400 mt-3 flex items-center gap-1 text-start text-xs sm:mt-0" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:paperclip",
                                      class: "size-3"
                                    }),
                                    createVNode("span", null, toDisplayString(item.attachments), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "ms-auto" }, [
                                createVNode(_component_BaseDropdown, {
                                  variant: "context",
                                  label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                                  placement: "bottom-end",
                                  size: "md",
                                  class: "z-20",
                                  rounded: "lg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseDropdownItem, {
                                      to: "#",
                                      title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                                      text: "\u062F\u0627\u0646\u0644\u0648\u062F \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                                    }, {
                                      start: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "ph:download-duotone",
                                          class: "me-2 block size-5"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseDropdownDivider),
                                    createVNode(_component_BaseDropdownItem, {
                                      to: "#",
                                      title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                                      text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                                    }, {
                                      start: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "ph:share-duotone",
                                          class: "me-2 block size-5"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseDropdownDivider),
                                    createVNode(_component_BaseDropdownItem, {
                                      to: "#",
                                      title: "\u0630\u062E\u06CC\u0631\u0647",
                                      text: "\u0630\u062E\u06CC\u0631\u0647 \u062F\u0633\u062A\u0648\u0631 \u067E\u062E\u062A"
                                    }, {
                                      start: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "ph:bookmark-simple-duotone",
                                          class: "me-2 block size-5"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
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
                    rounded: "lg"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/tile-grid-3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
