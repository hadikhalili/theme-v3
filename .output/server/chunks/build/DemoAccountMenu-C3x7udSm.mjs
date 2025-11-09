import { u as useRouter, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CbxAoqtm.mjs';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { u as useUserStore } from './user-DDZJ47NJ.mjs';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoAccountMenu",
  __ssrInlineRender: true,
  props: {
    horizontal: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const userStore = useUserStore();
    const accountName = computed(() => {
      const user = userStore.user;
      if (!user)
        return "\u06A9\u0627\u0631\u0628\u0631";
      if (user.name)
        return user.name;
      const parts = [user.firstName, user.lastName].filter(Boolean).join(" ");
      return parts || user.username || "\u06A9\u0627\u0631\u0628\u0631";
    });
    const accountEmail = computed(() => userStore.user?.email ?? "");
    const accountCredit = computed(() => Number(userStore.user?.credit ?? 0));
    const handleProfile = (close) => {
      close();
      router.push("/layouts/profile-edit");
    };
    const handleLogout = async (close) => {
      userStore.logout();
      close();
      await router.push("/auth");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group inline-flex items-center justify-center text-right" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "relative z-20 size-10 text-start"
      }, {
        default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"${_scopeId2}><div class="relative inline-flex size-10 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt="Avatar"${_scopeId2}></div></button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                    }, [
                      createVNode("div", { class: "relative inline-flex size-10 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: "Avatar"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), {
              class: ["border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 rounded-md border bg-white text-start shadow-lg focus:outline-none ltr:origin-bottom-right rtl:origin-bottom-left", props.horizontal ? "top-10 end-0" : "bottom-0 -end-64"]
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-muted-50 dark:bg-muted-700/40 p-6"${_scopeId2}><div class="bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-200 mb-4 inline-flex items-center justify-center rounded-[20px] px-4 py-2 font-sans text-xs"${_scopeId2}> \u0627\u0639\u062A\u0628\u0627\u0631: ${ssrInterpolate(accountCredit.value.toLocaleString("fa-IR"))} \u062A\u0648\u0645\u0627\u0646 </div><div class="flex items-center"${_scopeId2}><div class="relative inline-flex size-14 items-center justify-center rounded-full"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt="Avatar"${_scopeId2}></div><div class="ms-3 text-start"${_scopeId2}><h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white"${_scopeId2}>${ssrInterpolate(accountName.value)}</h6><p class="text-muted-400 font-sans text-xs"${_scopeId2}>${ssrInterpolate(accountEmail.value)}</p></div></div></div><div class="p-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuItem), { as: "div" }, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button type="button" class="${ssrRenderClass([[
                          active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                        ], "group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:gear-six-duotone",
                          class: "size-5"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ms-3 text-start"${_scopeId3}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId3}> \u0645\u062F\u06CC\u0631\u06CC\u062A \u062D\u0633\u0627\u0628 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId3}> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC </p></div></button>`);
                      } else {
                        return [
                          createVNode("button", {
                            type: "button",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClick: ($event) => handleProfile(close)
                          }, [
                            createVNode(_component_Icon, {
                              name: "ph:gear-six-duotone",
                              class: "size-5"
                            }),
                            createVNode("div", { class: "ms-3 text-start" }, [
                              createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " \u0645\u062F\u06CC\u0631\u06CC\u062A \u062D\u0633\u0627\u0628 "),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                            ])
                          ], 10, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(MenuItem), { as: "div" }, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button type="button" class="${ssrRenderClass([[
                          active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                        ], "group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "ph:sign-out-duotone",
                          class: "size-5"
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ms-3 text-start"${_scopeId3}><h6 class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"${_scopeId3}> \u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId3}> \u067E\u0627\u06CC\u0627\u0646 \u062C\u0644\u0633\u0647 \u0641\u0639\u0644\u06CC </p></div></button>`);
                      } else {
                        return [
                          createVNode("button", {
                            type: "button",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClick: ($event) => handleLogout(close)
                          }, [
                            createVNode(_component_Icon, {
                              name: "ph:sign-out-duotone",
                              class: "size-5"
                            }),
                            createVNode("div", { class: "ms-3 text-start" }, [
                              createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " \u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628 "),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u067E\u0627\u06CC\u0627\u0646 \u062C\u0644\u0633\u0647 \u0641\u0639\u0644\u06CC ")
                            ])
                          ], 10, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/40 p-6" }, [
                      createVNode("div", { class: "bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-200 mb-4 inline-flex items-center justify-center rounded-[20px] px-4 py-2 font-sans text-xs" }, " \u0627\u0639\u062A\u0628\u0627\u0631: " + toDisplayString(accountCredit.value.toLocaleString("fa-IR")) + " \u062A\u0648\u0645\u0627\u0646 ", 1),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "relative inline-flex size-14 items-center justify-center rounded-full" }, [
                          createVNode("img", {
                            src: _imports_0,
                            class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                            alt: "Avatar"
                          })
                        ]),
                        createVNode("div", { class: "ms-3 text-start" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, toDisplayString(accountName.value), 1),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(accountEmail.value), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "p-2" }, [
                      createVNode(unref(MenuItem), { as: "div" }, {
                        default: withCtx(({ active }) => [
                          createVNode("button", {
                            type: "button",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClick: ($event) => handleProfile(close)
                          }, [
                            createVNode(_component_Icon, {
                              name: "ph:gear-six-duotone",
                              class: "size-5"
                            }),
                            createVNode("div", { class: "ms-3 text-start" }, [
                              createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " \u0645\u062F\u06CC\u0631\u06CC\u062A \u062D\u0633\u0627\u0628 "),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                            ])
                          ], 10, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(MenuItem), { as: "div" }, {
                        default: withCtx(({ active }) => [
                          createVNode("button", {
                            type: "button",
                            class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                              active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                            ]],
                            onClick: ($event) => handleLogout(close)
                          }, [
                            createVNode(_component_Icon, {
                              name: "ph:sign-out-duotone",
                              class: "size-5"
                            }),
                            createVNode("div", { class: "ms-3 text-start" }, [
                              createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " \u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628 "),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u067E\u0627\u06CC\u0627\u0646 \u062C\u0644\u0633\u0647 \u0641\u0639\u0644\u06CC ")
                            ])
                          ], 10, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenuButton), { as: "template" }, {
                default: withCtx(() => [
                  createVNode("button", {
                    type: "button",
                    class: "group-hover:ring-primary-500 dark:ring-offset-muted-800 inline-flex size-10 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
                  }, [
                    createVNode("div", { class: "relative inline-flex size-10 items-center justify-center rounded-full" }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                        alt: "Avatar"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), {
                    class: ["border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 rounded-md border bg-white text-start shadow-lg focus:outline-none ltr:origin-bottom-right rtl:origin-bottom-left", props.horizontal ? "top-10 end-0" : "bottom-0 -end-64"]
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/40 p-6" }, [
                        createVNode("div", { class: "bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-200 mb-4 inline-flex items-center justify-center rounded-[20px] px-4 py-2 font-sans text-xs" }, " \u0627\u0639\u062A\u0628\u0627\u0631: " + toDisplayString(accountCredit.value.toLocaleString("fa-IR")) + " \u062A\u0648\u0645\u0627\u0646 ", 1),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", { class: "relative inline-flex size-14 items-center justify-center rounded-full" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: "Avatar"
                            })
                          ]),
                          createVNode("div", { class: "ms-3 text-start" }, [
                            createVNode("h6", { class: "font-heading text-muted-800 text-sm font-medium dark:text-white" }, toDisplayString(accountName.value), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(accountEmail.value), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "p-2" }, [
                        createVNode(unref(MenuItem), { as: "div" }, {
                          default: withCtx(({ active }) => [
                            createVNode("button", {
                              type: "button",
                              class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                              ]],
                              onClick: ($event) => handleProfile(close)
                            }, [
                              createVNode(_component_Icon, {
                                name: "ph:gear-six-duotone",
                                class: "size-5"
                              }),
                              createVNode("div", { class: "ms-3 text-start" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " \u0645\u062F\u06CC\u0631\u06CC\u062A \u062D\u0633\u0627\u0628 "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                              ])
                            ], 10, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(MenuItem), { as: "div" }, {
                          default: withCtx(({ active }) => [
                            createVNode("button", {
                              type: "button",
                              class: ["group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300", [
                                active ? "bg-muted-100 dark:bg-muted-700 text-primary-500" : "text-muted-400"
                              ]],
                              onClick: ($event) => handleLogout(close)
                            }, [
                              createVNode(_component_Icon, {
                                name: "ph:sign-out-duotone",
                                class: "size-5"
                              }),
                              createVNode("div", { class: "ms-3 text-start" }, [
                                createVNode("h6", { class: "font-heading text-muted-800 text-xs font-medium leading-none dark:text-white" }, " \u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0633\u0627\u0628 "),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u067E\u0627\u06CC\u0627\u0646 \u062C\u0644\u0633\u0647 \u0641\u0639\u0644\u06CC ")
                              ])
                            ], 10, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoAccountMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
