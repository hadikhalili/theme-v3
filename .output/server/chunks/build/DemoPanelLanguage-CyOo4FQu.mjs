import { t as usePanels, p as onKeyStroke, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-B50wzwB4.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { FocusTrap } from '@headlessui/vue';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_1 = publicAssetsURL("/img/icons/flags/united-states-of-america.svg");
const _imports_2 = publicAssetsURL("/img/icons/flags/france.svg");
const _imports_3 = publicAssetsURL("/img/icons/flags/spain.svg");
const _imports_4 = publicAssetsURL("/img/icons/flags/germany.svg");
const _imports_5 = publicAssetsURL("/img/icons/flags/mexico.svg");
const _imports_6 = publicAssetsURL("/img/icons/flags/china.svg");
const _imports_7 = publicAssetsURL("/img/illustrations/translation.svg");
const _imports_8 = publicAssetsURL("/img/illustrations/translation-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelLanguage",
  __ssrInlineRender: true,
  setup(__props) {
    const { close } = usePanels();
    onKeyStroke("Escape", close);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FocusTrap), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-16 w-full items-center justify-between px-10"${_scopeId}><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"${_scopeId}> \u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646 </h2><button type="button" class="text-muted-400 nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:chevron-right",
              class: "size-6 rtl:rotate-180"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="relative h-[calc(100dvh_-_64px)] w-full px-10"${_scopeId}><div class="grid grid-cols-3 py-6"${_scopeId}><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0" checked${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_0)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_1)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_2)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_3)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_4)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_5)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="relative my-4 flex items-center justify-center"${_scopeId}><div class="nui-focus relative rounded-full"${_scopeId}><input type="radio" name="language_selection" class="peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"${_scopeId}><img class="size-10 rounded-full"${ssrRenderAttr("src", _imports_6)} alt="flag icon"${_scopeId}></div><div class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:check",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div><div${_scopeId}><img${ssrRenderAttr("src", _imports_7)} class="mx-auto w-full max-w-[280px] dark:hidden" alt="illustration"${_scopeId}><img${ssrRenderAttr("src", _imports_8)} class="mx-auto hidden w-full max-w-[280px] dark:block" alt="illustration"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-16 w-full items-center justify-between px-10" }, [
                createVNode("h2", { class: "font-heading text-muted-700 text-lg font-semibold dark:text-white" }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0632\u0628\u0627\u0646 "),
                createVNode("button", {
                  type: "button",
                  class: "text-muted-400 nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white",
                  onClick: unref(close)
                }, [
                  createVNode(_component_Icon, {
                    name: "feather:chevron-right",
                    class: "size-6 rtl:rotate-180"
                  })
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "relative h-[calc(100dvh_-_64px)] w-full px-10" }, [
                createVNode("div", { class: "grid grid-cols-3 py-6" }, [
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0",
                        checked: ""
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_0,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_1,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_2,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_3,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_4,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_5,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "relative my-4 flex items-center justify-center" }, [
                    createVNode("div", { class: "nui-focus relative rounded-full" }, [
                      createVNode("input", {
                        type: "radio",
                        name: "language_selection",
                        class: "peer absolute start-0 top-0 z-20 size-full cursor-pointer opacity-0"
                      }),
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-600 flex size-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300" }, [
                        createVNode("img", {
                          class: "size-10 rounded-full",
                          src: _imports_6,
                          alt: "flag icon"
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden size-7 items-center justify-center rounded-full border-4 border-white text-white peer-checked:flex" }, [
                        createVNode(_component_Icon, {
                          name: "feather:check",
                          class: "size-3"
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("img", {
                    src: _imports_7,
                    class: "mx-auto w-full max-w-[280px] dark:hidden",
                    alt: "illustration"
                  }),
                  createVNode("img", {
                    src: _imports_8,
                    class: "mx-auto hidden w-full max-w-[280px] dark:block",
                    alt: "illustration"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelLanguage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
