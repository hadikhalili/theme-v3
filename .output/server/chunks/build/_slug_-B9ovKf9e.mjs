import { t as usePanels, j as useRoute, S as navigateTo, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { defineComponent, computed, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    usePanels();
    const route = useRoute();
    const slug = computed(() => route.params.slug);
    const query = computed(() => {
      return {
        slug: slug.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/members", {
      query
    }, "$wICFJFrqUB")), __temp = await __temp, __restore(), __temp);
    if (!data.value?.member) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/layouts/members/kendra-wilson")), await __temp, __restore();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_BaseCard, { rounded: "md" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-800 flex gap-4 border-b p-6 sm:p-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: unref(data)?.member?.picture,
              alt: unref(data)?.member?.name,
              size: "lg",
              rounded: "none",
              mask: "blob"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "xl",
              lead: "none",
              class: "line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(data)?.member?.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(data)?.member?.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400 mb-2 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(data)?.member?.email)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(data)?.member?.email), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseTag, {
              rounded: "lg",
              variant: "pastel",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(data)?.member?.role?.label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(data)?.member?.role?.label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="p-6 sm:p-10"${_scopeId}><div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(unref(data)?.member?.role?.details, (role) => {
              _push2(`<div class="border-muted-200 dark:border-muted-800 grid grid-cols-12 border-b pb-6"${_scopeId}><div class="xs:mb-6 col-span-12 sm:col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(role.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(role.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "md",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(role.access)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(role.access), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="col-span-12 sm:col-span-8"${_scopeId}><ul class="list-disc space-y-1"${_scopeId}><!--[-->`);
              ssrRenderList(role.permissions, (permission) => {
                _push2(`<li class="flex gap-2"${_scopeId}>`);
                if (permission.status) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "text-success-500 relative top-1 size-4 shrink-0"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:x",
                    class: "text-danger-500 relative top-1 size-4 shrink-0"
                  }, null, _parent2, _scopeId));
                }
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(permission.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(permission.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></div></div>`);
            });
            _push2(`<!--]--><div class="grid grid-cols-12 pb-6"${_scopeId}><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(data)?.member?.cards?.length ?? 0)} \u06A9\u0627\u0631\u062A${ssrInterpolate(unref(data)?.member?.cards?.length && unref(data).member.cards.length > 1 ? "\u0647\u0627" : "")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(data)?.member?.cards?.length ?? 0) + " \u06A9\u0627\u0631\u062A" + toDisplayString(unref(data)?.member?.cards?.length && unref(data).member.cards.length > 1 ? "\u0647\u0627" : ""), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-8"${_scopeId}><table class="w-full whitespace-nowrap"${_scopeId}><tbody${_scopeId}><!--[-->`);
            ssrRenderList(unref(data)?.member?.cards, (card) => {
              _push2(`<tr tabindex="0"${_scopeId}><td class="p-4"${_scopeId}><div class="text-muted-500 dark:text-muted-300 me-5 flex items-center gap-2 md:me-0"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:credit-card",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                weight: "medium",
                lead: "none"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(card.cardInfo.number)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(card.cardInfo.number), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<span class="bg-muted-100 dark:bg-muted-600/10 text-muted-500 m-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-sans text-xs"${_scopeId}><span class="${ssrRenderClass([[
                card.cardInfo.status === "\u0641\u0639\u0627\u0644" && "bg-success-500",
                card.cardInfo.status === "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644" && "bg-muted-300 dark:bg-muted-700",
                card.cardInfo.status === "expired" && "bg-warning-500",
                card.cardInfo.status === "\u0642\u0641\u0644 \u0634\u062F\u0647" && "bg-danger-500"
              ], "size-2 rounded-full"])}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(card.cardInfo.status)}</span></span></div></td><td class="xs:hidden p-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                to: "/layouts/cards",
                rounded: "md",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-800 flex gap-4 border-b p-6 sm:p-10" }, [
                createVNode(_component_BaseAvatar, {
                  src: unref(data)?.member?.picture,
                  alt: unref(data)?.member?.name,
                  size: "lg",
                  rounded: "none",
                  mask: "blob"
                }, null, 8, ["src", "alt"]),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    weight: "medium",
                    size: "xl",
                    lead: "none",
                    class: "line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(data)?.member?.name), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400 mb-2 line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(data)?.member?.email), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseTag, {
                    rounded: "lg",
                    variant: "pastel",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(data)?.member?.role?.label), 1)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "p-6 sm:p-10" }, [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.member?.role?.details, (role) => {
                    return openBlock(), createBlock("div", {
                      key: role.label,
                      class: "border-muted-200 dark:border-muted-800 grid grid-cols-12 border-b pb-6"
                    }, [
                      createVNode("div", { class: "xs:mb-6 col-span-12 sm:col-span-4" }, [
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-500"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(role.label), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium",
                          class: "text-muted-800 dark:text-muted-100"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(role.access), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "col-span-12 sm:col-span-8" }, [
                        createVNode("ul", { class: "list-disc space-y-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(role.permissions, (permission) => {
                            return openBlock(), createBlock("li", {
                              key: permission.label,
                              class: "flex gap-2"
                            }, [
                              permission.status ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "lucide:check",
                                class: "text-success-500 relative top-1 size-4 shrink-0"
                              })) : (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "lucide:x",
                                class: "text-danger-500 relative top-1 size-4 shrink-0"
                              })),
                              createVNode(_component_BaseParagraph, {
                                size: "sm",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(permission.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]);
                          }), 128))
                        ])
                      ])
                    ]);
                  }), 128)),
                  createVNode("div", { class: "grid grid-cols-12 pb-6" }, [
                    createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-500"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(data)?.member?.cards?.length ?? 0) + " \u06A9\u0627\u0631\u062A" + toDisplayString(unref(data)?.member?.cards?.length && unref(data).member.cards.length > 1 ? "\u0647\u0627" : ""), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-8" }, [
                      createVNode("table", { class: "w-full whitespace-nowrap" }, [
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.member?.cards, (card) => {
                            return openBlock(), createBlock("tr", {
                              key: card.id,
                              tabindex: "0"
                            }, [
                              createVNode("td", { class: "p-4" }, [
                                createVNode("div", { class: "text-muted-500 dark:text-muted-300 me-5 flex items-center gap-2 md:me-0" }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:credit-card",
                                    class: "size-5"
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(card.cardInfo.number), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("span", { class: "bg-muted-100 dark:bg-muted-600/10 text-muted-500 m-1 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-sans text-xs" }, [
                                    createVNode("span", {
                                      class: ["size-2 rounded-full", [
                                        card.cardInfo.status === "\u0641\u0639\u0627\u0644" && "bg-success-500",
                                        card.cardInfo.status === "\u063A\u06CC\u0631\u0641\u0639\u0627\u0644" && "bg-muted-300 dark:bg-muted-700",
                                        card.cardInfo.status === "expired" && "bg-warning-500",
                                        card.cardInfo.status === "\u0642\u0641\u0644 \u0634\u062F\u0647" && "bg-danger-500"
                                      ]]
                                    }, null, 2),
                                    createVNode("span", null, toDisplayString(card.cardInfo.status), 1)
                                  ])
                                ])
                              ]),
                              createVNode("td", { class: "xs:hidden p-4" }, [
                                createVNode(_component_BaseButton, {
                                  to: "/layouts/cards",
                                  rounded: "md",
                                  size: "sm"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]);
                          }), 128))
                        ])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/members/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
