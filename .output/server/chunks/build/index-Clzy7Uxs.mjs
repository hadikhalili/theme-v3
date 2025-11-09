import { _ as _sfc_main$1 } from './TairoContentWrapper-BtoDOOS0.mjs';
import { j as useRoute, u as useRouter, d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3, h as _sfc_main$u, l as _sfc_main$3 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$4 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, TransitionGroup, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(25);
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
      "/api/company/projects",
      {
        query
      },
      "$QMY9pXZGb3"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseAvatarGroup = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              icon: "lucide:search",
              rounded: "sm",
              placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627...",
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
                rounded: "sm",
                placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627...",
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
              color: "primary",
              class: "w-full sm:w-32",
              rounded: "sm"
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
                color: "primary",
                class: "w-full sm:w-32",
                rounded: "sm"
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
            _push2(`<div class="space-y-10"${_scopeId}><div${_scopeId}>`);
            if (!unref(pending) && unref(data)?.recent.length === 0) {
              _push2(`<div${_scopeId}><div class="bg-muted-200 dark:bg-muted-800/60 rounded-lg p-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                tag: "h4",
                size: "lg",
                weight: "medium"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062E\u0627\u0644\u06CC `);
                  } else {
                    return [
                      createTextVNode(" \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062E\u0627\u0644\u06CC ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. `);
                  } else {
                    return [
                      createTextVNode(" \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div${_scopeId}><div${_scopeId}><h4 class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"${_scopeId}> \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u0634\u062F\u0647 </h4></div><div class="ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.recent.slice(0, 4), (item, r) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: r,
                  class: "group block",
                  to: `/layouts/projects/details/${item.slug}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BaseCard, {
                        rounded: "sm",
                        "elevated-hover": "",
                        class: "group-hover:!border-primary-500 p-5"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="mb-6 flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatar, {
                              src: item.customer.logo,
                              size: "sm",
                              "data-nui-tooltip": item.name,
                              class: "bg-muted-100 dark:bg-muted-700"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseHeading, {
                              tag: "h5",
                              size: "sm",
                              weight: "medium",
                              class: "line-clamp-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.customer.name)} | ${ssrInterpolate(item.customer.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div><div class="flex items-center justify-between"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(item.stacks, (stack) => {
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                key: stack.name,
                                src: stack.icon,
                                size: "xxs",
                                "data-nui-tooltip": stack.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div><div class="text-muted-400 flex items-center gap-4"${_scopeId3}><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:paperclip-duotone",
                              class: "size-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:users-duotone",
                              class: "size-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.team.length)}</span></div></div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "mb-6 flex gap-2" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: item.customer.logo,
                                  size: "sm",
                                  "data-nui-tooltip": item.name,
                                  class: "bg-muted-100 dark:bg-muted-700"
                                }, null, 8, ["src", "data-nui-tooltip"]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h5",
                                    size: "sm",
                                    weight: "medium",
                                    class: "line-clamp-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                    return openBlock(), createBlock(_component_BaseAvatar, {
                                      key: stack.name,
                                      src: stack.icon,
                                      size: "xxs",
                                      "data-nui-tooltip": stack.name,
                                      class: "bg-muted-100 dark:bg-muted-700"
                                    }, null, 8, ["src", "data-nui-tooltip"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:paperclip-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:users-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                  ])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BaseCard, {
                          rounded: "sm",
                          "elevated-hover": "",
                          class: "group-hover:!border-primary-500 p-5"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-6 flex gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                src: item.customer.logo,
                                size: "sm",
                                "data-nui-tooltip": item.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h5",
                                  size: "sm",
                                  weight: "medium",
                                  class: "line-clamp-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                  return openBlock(), createBlock(_component_BaseAvatar, {
                                    key: stack.name,
                                    src: stack.icon,
                                    size: "xxs",
                                    "data-nui-tooltip": stack.name,
                                    class: "bg-muted-100 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:paperclip-duotone",
                                    class: "size-4"
                                  }),
                                  createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                ]),
                                createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:users-duotone",
                                    class: "size-4"
                                  }),
                                  createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            }
            _push2(`</div><div${_scopeId}>`);
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
              _push2(`<div${_scopeId}><div${_scopeId}><h4 class="text-muted-400 mb-4 font-sans text-xs font-semibold uppercase"${_scopeId}> \u062A\u0645\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 </h4></div><div class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data, (item, index) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: index,
                  rounded: "sm",
                  "elevated-hover": "",
                  class: "hover:!border-primary-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        class: "group",
                        to: `/layouts/projects/details/${item.slug}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="p-5"${_scopeId3}><div class="relative mb-4"${_scopeId3}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} class="rounded-md"${_scopeId3}></div><div class="mb-6 flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatar, {
                              src: item.customer.logo,
                              size: "sm",
                              "data-nui-tooltip": item.name,
                              class: "bg-muted-100 dark:bg-muted-700"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseHeading, {
                              tag: "h5",
                              size: "sm",
                              weight: "medium",
                              class: "line-clamp-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.customer.name)} | ${ssrInterpolate(item.customer.text)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div><div class="flex items-center justify-between"${_scopeId3}><div class="flex items-center gap-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(item.stacks, (stack) => {
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                key: stack.name,
                                src: stack.icon,
                                size: "xxs",
                                "data-nui-tooltip": stack.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div><div class="text-muted-400 flex items-center gap-4"${_scopeId3}><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:paperclip-duotone",
                              class: "size-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "ph:users-duotone",
                              class: "size-4"
                            }, null, _parent4, _scopeId3));
                            _push4(`<span class="font-sans"${_scopeId3}>${ssrInterpolate(item.team.length)}</span></div></div></div></div><div class="border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3"${_scopeId3}><div${_scopeId3}><p class="text-muted-400 font-sans text-sm"${_scopeId3}>${ssrInterpolate(item.tasks.length)} \u0648\u0638\u06CC\u0641\u0647 \u0628\u0627\u0642\u06CC\u200C\u0645\u0627\u0646\u062F\u0647 </p></div><div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatarGroup, {
                              avatars: item.team,
                              size: "xs",
                              limit: 3
                            }, null, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "p-5" }, [
                                createVNode("div", { class: "relative mb-4" }, [
                                  createVNode("img", {
                                    src: item.image,
                                    alt: item.name,
                                    class: "rounded-md"
                                  }, null, 8, ["src", "alt"])
                                ]),
                                createVNode("div", { class: "mb-6 flex gap-2" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.customer.logo,
                                    size: "sm",
                                    "data-nui-tooltip": item.name,
                                    class: "bg-muted-100 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      tag: "h5",
                                      size: "sm",
                                      weight: "medium",
                                      class: "line-clamp-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_BaseParagraph, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                      return openBlock(), createBlock(_component_BaseAvatar, {
                                        key: stack.name,
                                        src: stack.icon,
                                        size: "xxs",
                                        "data-nui-tooltip": stack.name,
                                        class: "bg-muted-100 dark:bg-muted-700"
                                      }, null, 8, ["src", "data-nui-tooltip"]);
                                    }), 128))
                                  ]),
                                  createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                    createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                      createVNode(_component_Icon, {
                                        name: "ph:paperclip-duotone",
                                        class: "size-4"
                                      }),
                                      createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                    ]),
                                    createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                      createVNode(_component_Icon, {
                                        name: "ph:users-duotone",
                                        class: "size-4"
                                      }),
                                      createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3" }, [
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.tasks.length) + " \u0648\u0638\u06CC\u0641\u0647 \u0628\u0627\u0642\u06CC\u200C\u0645\u0627\u0646\u062F\u0647 ", 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseAvatarGroup, {
                                    avatars: item.team,
                                    size: "xs",
                                    limit: 3
                                  }, null, 8, ["avatars"])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          class: "group",
                          to: `/layouts/projects/details/${item.slug}`
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-5" }, [
                              createVNode("div", { class: "relative mb-4" }, [
                                createVNode("img", {
                                  src: item.image,
                                  alt: item.name,
                                  class: "rounded-md"
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode("div", { class: "mb-6 flex gap-2" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: item.customer.logo,
                                  size: "sm",
                                  "data-nui-tooltip": item.name,
                                  class: "bg-muted-100 dark:bg-muted-700"
                                }, null, 8, ["src", "data-nui-tooltip"]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h5",
                                    size: "sm",
                                    weight: "medium",
                                    class: "line-clamp-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                    return openBlock(), createBlock(_component_BaseAvatar, {
                                      key: stack.name,
                                      src: stack.icon,
                                      size: "xxs",
                                      "data-nui-tooltip": stack.name,
                                      class: "bg-muted-100 dark:bg-muted-700"
                                    }, null, 8, ["src", "data-nui-tooltip"]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:paperclip-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                  ]),
                                  createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:users-duotone",
                                      class: "size-4"
                                    }),
                                    createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3" }, [
                              createVNode("div", null, [
                                createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.tasks.length) + " \u0648\u0638\u06CC\u0641\u0647 \u0628\u0627\u0642\u06CC\u200C\u0645\u0627\u0646\u062F\u0647 ", 1)
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseAvatarGroup, {
                                  avatars: item.team,
                                  size: "xs",
                                  limit: 3
                                }, null, 8, ["avatars"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-10" }, [
                createVNode("div", null, [
                  !unref(pending) && unref(data)?.recent.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "bg-muted-200 dark:bg-muted-800/60 rounded-lg p-6" }, [
                      createVNode(_component_BaseHeading, {
                        tag: "h4",
                        size: "lg",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u062E\u0627\u0644\u06CC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. ")
                        ]),
                        _: 1
                      })
                    ])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-muted-400 mb-4 font-sans text-xs font-semibold uppercase" }, " \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u0634\u062F\u0647 ")
                    ]),
                    createVNode("div", { class: "ltablet:grid-cols-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, [
                      createVNode(TransitionGroup, {
                        "enter-active-class": "transform-gpu",
                        "enter-from-class": "opacity-0 -translate-x-full",
                        "enter-to-class": "opacity-100 translate-x-0",
                        "leave-active-class": "absolute transform-gpu",
                        "leave-from-class": "opacity-100 translate-x-0",
                        "leave-to-class": "opacity-0 -translate-x-full"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.recent.slice(0, 4), (item, r) => {
                            return openBlock(), createBlock(_component_NuxtLink, {
                              key: r,
                              class: "group block",
                              to: `/layouts/projects/details/${item.slug}`
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseCard, {
                                  rounded: "sm",
                                  "elevated-hover": "",
                                  class: "group-hover:!border-primary-500 p-5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-6 flex gap-2" }, [
                                      createVNode(_component_BaseAvatar, {
                                        src: item.customer.logo,
                                        size: "sm",
                                        "data-nui-tooltip": item.name,
                                        class: "bg-muted-100 dark:bg-muted-700"
                                      }, null, 8, ["src", "data-nui-tooltip"]),
                                      createVNode("div", null, [
                                        createVNode(_component_BaseHeading, {
                                          tag: "h5",
                                          size: "sm",
                                          weight: "medium",
                                          class: "line-clamp-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_BaseParagraph, {
                                          size: "xs",
                                          class: "text-muted-400"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                          return openBlock(), createBlock(_component_BaseAvatar, {
                                            key: stack.name,
                                            src: stack.icon,
                                            size: "xxs",
                                            "data-nui-tooltip": stack.name,
                                            class: "bg-muted-100 dark:bg-muted-700"
                                          }, null, 8, ["src", "data-nui-tooltip"]);
                                        }), 128))
                                      ]),
                                      createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                        createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:paperclip-duotone",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                        ]),
                                        createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                          createVNode(_component_Icon, {
                                            name: "ph:users-duotone",
                                            class: "size-4"
                                          }),
                                          createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]))
                ]),
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
                    createVNode("div", null, [
                      createVNode("h4", { class: "text-muted-400 mb-4 font-sans text-xs font-semibold uppercase" }, " \u062A\u0645\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 ")
                    ]),
                    createVNode("div", { class: "ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" }, [
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
                              rounded: "sm",
                              "elevated-hover": "",
                              class: "hover:!border-primary-500"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  class: "group",
                                  to: `/layouts/projects/details/${item.slug}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "p-5" }, [
                                      createVNode("div", { class: "relative mb-4" }, [
                                        createVNode("img", {
                                          src: item.image,
                                          alt: item.name,
                                          class: "rounded-md"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "mb-6 flex gap-2" }, [
                                        createVNode(_component_BaseAvatar, {
                                          src: item.customer.logo,
                                          size: "sm",
                                          "data-nui-tooltip": item.name,
                                          class: "bg-muted-100 dark:bg-muted-700"
                                        }, null, 8, ["src", "data-nui-tooltip"]),
                                        createVNode("div", null, [
                                          createVNode(_component_BaseHeading, {
                                            tag: "h5",
                                            size: "sm",
                                            weight: "medium",
                                            class: "line-clamp-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_BaseParagraph, {
                                            size: "xs",
                                            class: "text-muted-400"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      createVNode("div", { class: "flex items-center justify-between" }, [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                                            return openBlock(), createBlock(_component_BaseAvatar, {
                                              key: stack.name,
                                              src: stack.icon,
                                              size: "xxs",
                                              "data-nui-tooltip": stack.name,
                                              class: "bg-muted-100 dark:bg-muted-700"
                                            }, null, 8, ["src", "data-nui-tooltip"]);
                                          }), 128))
                                        ]),
                                        createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                                          createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                            createVNode(_component_Icon, {
                                              name: "ph:paperclip-duotone",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                                          ]),
                                          createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                                            createVNode(_component_Icon, {
                                              name: "ph:users-duotone",
                                              class: "size-4"
                                            }),
                                            createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
                                          ])
                                        ])
                                      ])
                                    ]),
                                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3" }, [
                                      createVNode("div", null, [
                                        createVNode("p", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(item.tasks.length) + " \u0648\u0638\u06CC\u0641\u0647 \u0628\u0627\u0642\u06CC\u200C\u0645\u0627\u0646\u062F\u0647 ", 1)
                                      ]),
                                      createVNode("div", null, [
                                        createVNode(_component_BaseAvatarGroup, {
                                          avatars: item.team,
                                          size: "xs",
                                          limit: 3
                                        }, null, 8, ["avatars"])
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ]))
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
