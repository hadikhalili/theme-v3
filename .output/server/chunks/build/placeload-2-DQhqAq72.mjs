import { _ as _sfc_main$1 } from './TairoContentWrapper-BtoDOOS0.mjs';
import { d as _sfc_main$D, w as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$3, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$5 } from './TairoTableCell-C_FebgVa.mjs';
import { _ as _sfc_main$4 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, ref, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './IconChevronDown-B9AzKHTY.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "placeload-2",
  __ssrInlineRender: true,
  setup(__props) {
    const fake = ref("");
    const fakePerPage = ref("");
    const fakeAll = ref(true);
    const fakeItems = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoContentWrapper = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$2;
      const _component_TairoTable = _sfc_main$3;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$4;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$5;
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
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(fakePerPage),
              "onUpdate:modelValue": ($event) => isRef(fakePerPage) ? fakePerPage.value = $event : null,
              placeholder: "\u0622\u06CC\u062A\u0645\u200C\u0647\u0627 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647",
              label: "",
              classes: {
                wrapper: "w-full sm:w-40"
              },
              disabled: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<option${ssrRenderAttr("value", 10)}${_scopeId2}> \u06F1\u06F0 \u0645\u0648\u0631\u062F \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 </option><option${ssrRenderAttr("value", 25)}${_scopeId2}> \u06F2\u06F5 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 </option><option${ssrRenderAttr("value", 50)}${_scopeId2}> \u06F5\u06F0 \u0645\u0648\u0631\u062F \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 </option><option${ssrRenderAttr("value", 100)}${_scopeId2}> \u06F1\u06F0\u06F0 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 </option>`);
                } else {
                  return [
                    createVNode("option", { value: 10 }, " \u06F1\u06F0 \u0645\u0648\u0631\u062F \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 "),
                    createVNode("option", { value: 25 }, " \u06F2\u06F5 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 "),
                    createVNode("option", { value: 50 }, " \u06F5\u06F0 \u0645\u0648\u0631\u062F \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 "),
                    createVNode("option", { value: 100 }, " \u06F1\u06F0\u06F0 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseSelect, {
                modelValue: unref(fakePerPage),
                "onUpdate:modelValue": ($event) => isRef(fakePerPage) ? fakePerPage.value = $event : null,
                placeholder: "\u0622\u06CC\u062A\u0645\u200C\u0647\u0627 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647",
                label: "",
                classes: {
                  wrapper: "w-full sm:w-40"
                },
                disabled: ""
              }, {
                default: withCtx(() => [
                  createVNode("option", { value: 10 }, " \u06F1\u06F0 \u0645\u0648\u0631\u062F \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 "),
                  createVNode("option", { value: 25 }, " \u06F2\u06F5 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 "),
                  createVNode("option", { value: 50 }, " \u06F5\u06F0 \u0645\u0648\u0631\u062F \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 "),
                  createVNode("option", { value: 100 }, " \u06F1\u06F0\u06F0 \u062F\u0631 \u0647\u0631 \u0635\u0641\u062D\u0647 ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoTable, { rounded: "sm" }, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: "",
                    class: "p-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(fakeAll),
                          "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                          rounded: "full",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(fakeAll),
                              "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                              rounded: "full",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0646\u0648\u0639 `);
                      } else {
                        return [
                          createTextVNode(" \u0646\u0648\u0639 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0646\u0627\u0645 `);
                      } else {
                        return [
                          createTextVNode(" \u0646\u0627\u0645 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u0646\u062F\u0627\u0632\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u0646\u062F\u0627\u0632\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0646\u0633\u062E\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0646\u0633\u062E\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC `);
                      } else {
                        return [
                          createTextVNode(" \u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TairoTableHeading, {
                    uppercase: "",
                    spaced: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u0642\u062F\u0627\u0645 `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u0642\u062F\u0627\u0645 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: "",
                      class: "p-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(fakeAll),
                            "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                            rounded: "full",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0646\u0648\u0639 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0646\u0627\u0645 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0646\u062F\u0627\u0632\u0647 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0646\u0633\u062E\u0647 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TairoTableHeading, {
                      uppercase: "",
                      spaced: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0642\u062F\u0627\u0645 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(10, (index) => {
                    _push3(ssrRenderComponent(_component_TairoTableRow, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BaseCheckbox, {
                                  modelValue: unref(fakeItems),
                                  "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                  value: `placeload-item-checkbox-${index}`,
                                  rounded: "full",
                                  color: "primary"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_BaseCheckbox, {
                                      modelValue: unref(fakeItems),
                                      "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                      value: `placeload-item-checkbox-${index}`,
                                      rounded: "full",
                                      color: "primary"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "size-[46px] shrink-0 rounded-xl" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "size-[46px] shrink-0 rounded-xl" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }, null, _parent5, _scopeId4));
                                _push5(`<div class="space-y-1"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                                    createVNode("div", { class: "space-y-1" }, [
                                      createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                      createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(fakeItems),
                                    "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                    value: `placeload-item-checkbox-${index}`,
                                    rounded: "full",
                                    color: "primary"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "size-[46px] shrink-0 rounded-xl" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                      return createVNode(_component_TairoTableRow, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(fakeItems),
                                  "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                  value: `placeload-item-checkbox-${index}`,
                                  rounded: "full",
                                  color: "primary"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "size-[46px] shrink-0 rounded-xl" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, {
                            light: "",
                            spaced: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                  createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TairoTableCell, { spaced: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_component_TairoTable, { rounded: "sm" }, {
                    header: withCtx(() => [
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: "",
                        class: "p-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(fakeAll),
                              "onUpdate:modelValue": ($event) => isRef(fakeAll) ? fakeAll.value = $event : null,
                              rounded: "full",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0646\u0648\u0639 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0646\u0627\u0645 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0646\u062F\u0627\u0632\u0647 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0646\u0633\u062E\u0647 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0622\u062E\u0631\u06CC\u0646 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_TairoTableHeading, {
                        uppercase: "",
                        spaced: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0642\u062F\u0627\u0645 ")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(10, (index) => {
                        return createVNode(_component_TairoTableRow, { key: index }, {
                          default: withCtx(() => [
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(fakeItems),
                                    "onUpdate:modelValue": ($event) => isRef(fakeItems) ? fakeItems.value = $event : null,
                                    value: `placeload-item-checkbox-${index}`,
                                    rounded: "full",
                                    color: "primary"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "size-[46px] shrink-0 rounded-xl" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-24 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, {
                              light: "",
                              spaced: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-3 w-12 rounded-lg" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_BasePlaceload, { class: "size-8 shrink-0 rounded-full" }),
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[70px] rounded-lg" }),
                                    createVNode(_component_BasePlaceload, { class: "h-2 w-[50px] rounded-lg" })
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TairoTableCell, { spaced: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_BasePlaceload, { class: "h-8 w-16 rounded-lg" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/placeload-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
