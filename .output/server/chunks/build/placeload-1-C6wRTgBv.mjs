import { _ as _sfc_main$1 } from './TairoContentWrapper-BtoDOOS0.mjs';
import { d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, h as _sfc_main$u, w as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "placeload-1",
  __ssrInlineRender: true,
  setup(__props) {
    const fake = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BasePlaceload = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoContentWrapper, null, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(fake),
              "onUpdate:modelValue": ($event) => isRef(fake) ? fake.value = $event : null,
              icon: "lucide:search",
              placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646...",
              classes: {
                wrapper: "w-full sm:w-auto"
              },
              disabled: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                modelValue: unref(fake),
                "onUpdate:modelValue": ($event) => isRef(fake) ? fake.value = $event : null,
                icon: "lucide:search",
                placeholder: "\u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646...",
                classes: {
                  wrapper: "w-full sm:w-auto"
                },
                disabled: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-full sm:w-32",
              disabled: ""
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
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "me-2 size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u0627\u0631\u0628\u0631</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "me-2 size-4"
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
                disabled: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A ")
                ]),
                _: 1
              }),
              createVNode(_component_BaseButton, {
                color: "primary",
                class: "w-full text-nowrap sm:w-32",
                disabled: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "me-2 size-4"
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
            _push2(`<div${_scopeId}><div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(10, (index) => {
              _push2(ssrRenderComponent(_component_BaseCard, {
                key: index,
                rounded: "lg",
                class: "flex flex-col p-5 sm:flex-row sm:items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "size-16 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`<div class="space-y-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-3 w-[100px] rounded-lg sm:mx-0" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-3 w-[75px] rounded-lg sm:mx-0" }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0"${_scopeId2}><div class="flex w-full items-center justify-center sm:w-[160px] sm:justify-end"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-6 w-24 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x rtl:divide-x-reverse"${_scopeId2}><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="flex flex-col gap-1 px-4 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "hidden h-3 w-12 rounded-full sm:block" }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="sm:ms-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20" }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start" }, [
                        createVNode(_component_BasePlaceload, { class: "size-16 shrink-0 rounded-full" }),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[100px] rounded-lg sm:mx-0" }),
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[75px] rounded-lg sm:mx-0" })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0" }, [
                        createVNode("div", { class: "flex w-full items-center justify-center sm:w-[160px] sm:justify-end" }, [
                          createVNode(_component_BasePlaceload, { class: "h-6 w-24 rounded-full" })
                        ]),
                        createVNode("div", { class: "ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x rtl:divide-x-reverse" }, [
                          createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                            createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                          ]),
                          createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                            createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                          ]),
                          createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                            createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                          ])
                        ]),
                        createVNode("div", { class: "ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0" }, [
                          createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                          createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                          createVNode(_component_BasePlaceload, { class: "hidden h-3 w-12 rounded-full sm:block" })
                        ]),
                        createVNode("div", { class: "sm:ms-6" }, [
                          createVNode(_component_BasePlaceload, { class: "mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20" })
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "space-y-4" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                    return createVNode(_component_BaseCard, {
                      key: index,
                      rounded: "lg",
                      class: "flex flex-col p-5 sm:flex-row sm:items-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-start" }, [
                          createVNode(_component_BasePlaceload, { class: "size-16 shrink-0 rounded-full" }),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[100px] rounded-lg sm:mx-0" }),
                            createVNode(_component_BasePlaceload, { class: "mx-auto h-3 w-[75px] rounded-lg sm:mx-0" })
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0" }, [
                          createVNode("div", { class: "flex w-full items-center justify-center sm:w-[160px] sm:justify-end" }, [
                            createVNode(_component_BasePlaceload, { class: "h-6 w-24 rounded-full" })
                          ]),
                          createVNode("div", { class: "ptablet:hidden divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x rtl:divide-x-reverse" }, [
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                            ]),
                            createVNode("div", { class: "flex flex-col gap-1 px-4 text-center" }, [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-16 rounded-lg" })
                            ])
                          ]),
                          createVNode("div", { class: "ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0" }, [
                            createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                            createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                            createVNode(_component_BasePlaceload, { class: "hidden h-3 w-12 rounded-full sm:block" })
                          ]),
                          createVNode("div", { class: "sm:ms-6" }, [
                            createVNode(_component_BasePlaceload, { class: "mx-auto h-8 w-40 rounded-lg sm:mx-0 sm:w-20" })
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/placeload-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
