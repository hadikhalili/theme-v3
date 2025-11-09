import { _ as _sfc_main$1 } from './BaseCheckboxHeadless-CATHSw1E.mjs';
import { h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCheckboxHeadless = _sfc_main$1;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><form class="mx-auto w-full"><fieldset class="w-full space-y-6"><div class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"><legend class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium"> \u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u0641\u0631\u0627\u062F </legend><button type="reset" class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"> Cancel </button></div><div class="grid gap-6 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        value: "team_member_1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/10.svg" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 `);
                      } else {
                        return [
                          createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 `);
                      } else {
                        return [
                          createTextVNode(" \u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="child text-muted-300 ms-auto"${_scopeId2}><div class="size-3 rounded-full bg-current"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, { src: "/img/avatars/10.svg" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "sm",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                        createVNode("div", { class: "size-3 rounded-full bg-current" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    createVNode(_component_BaseAvatar, { src: "/img/avatars/10.svg" }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                      createVNode("div", { class: "size-3 rounded-full bg-current" })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        value: "team_member_2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/16.svg" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631 `);
                      } else {
                        return [
                          createTextVNode(" \u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634 `);
                      } else {
                        return [
                          createTextVNode(" \u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="child text-muted-300 ms-auto"${_scopeId2}><div class="size-3 rounded-full bg-current"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, { src: "/img/avatars/16.svg" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "sm",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                        createVNode("div", { class: "size-3 rounded-full bg-current" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    createVNode(_component_BaseAvatar, { src: "/img/avatars/16.svg" }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                      createVNode("div", { class: "size-3 rounded-full bg-current" })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        value: "team_member_3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "sm",
              class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, { src: "/img/avatars/25.svg" }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0645\u0644\u0627\u0646\u06CC \u0644\u0627\u0648\u0631\u0627\u06CC\u062A `);
                      } else {
                        return [
                          createTextVNode(" \u0645\u0644\u0627\u0646\u06CC \u0644\u0627\u0648\u0631\u0627\u06CC\u062A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC `);
                      } else {
                        return [
                          createTextVNode(" \u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="child text-muted-300 ms-auto"${_scopeId2}><div class="size-3 rounded-full bg-current"${_scopeId2}></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, { src: "/img/avatars/25.svg" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "sm",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u0644\u0627\u0646\u06CC \u0644\u0627\u0648\u0631\u0627\u06CC\u062A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                        createVNode("div", { class: "size-3 rounded-full bg-current" })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCard, {
                rounded: "sm",
                class: "peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    createVNode(_component_BaseAvatar, { src: "/img/avatars/25.svg" }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u0644\u0627\u0646\u06CC \u0644\u0627\u0648\u0631\u0627\u06CC\u062A ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062F\u06CC\u0631 \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child text-muted-300 ms-auto" }, [
                      createVNode("div", { class: "size-3 rounded-full bg-current" })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></fieldset></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox-custom/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
