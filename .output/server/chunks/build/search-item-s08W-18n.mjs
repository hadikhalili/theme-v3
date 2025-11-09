import { _ as __nuxt_component_0, a as _sfc_main$2 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckboxHeadless-CATHSw1E.mjs';
import { _ as _sfc_main$3 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '@headlessui/vue';
import '@headlessui-float/vue';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-item",
  __ssrInlineRender: true,
  setup(__props) {
    const model = ref(["value_1"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseCheckboxHeadless = _sfc_main$1;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_BaseCheckbox = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        variant: "button",
        label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
        placement: "bottom-start",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative p-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              icon: "lucide:search",
              rounded: "sm",
              placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u06A9\u0627\u0631\u0628\u0631\u0627\u0646..."
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="nui-slimscroll me-2 max-h-[240px] overflow-y-auto pe-2"${_scopeId}><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u062C\u0627\u0646 \u0631\u0648\u0644\u0646\u062F",
                    text: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_1",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_1",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062C\u0627\u0646 \u0631\u0648\u0644\u0646\u062F",
                      text: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_1",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u067E\u0627\u0626\u0648\u0644\u0627 \u0647\u0627\u0631\u062A\u0644\u06CC",
                    text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_2",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_2",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u067E\u0627\u0626\u0648\u0644\u0627 \u0647\u0627\u0631\u062A\u0644\u06CC",
                      text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_2",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u062C\u0627\u0646 \u0644\u0627\u06A9",
                    text: "\u0645\u0627\u062C\u0631\u0627\u062C\u0648",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_3",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_3",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062C\u0627\u0646 \u0644\u0627\u06A9",
                      text: "\u0645\u0627\u062C\u0631\u0627\u062C\u0648",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_3",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0622\u062F\u0631\u06CC\u0627\u0646 \u0627\u0633\u0645\u06CC\u062A",
                    text: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_4",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_4",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0622\u062F\u0631\u06CC\u0627\u0646 \u0627\u0633\u0645\u06CC\u062A",
                      text: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_4",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u06A9\u0644\u0627\u0631\u0646\u0633 \u0646\u0644\u0633\u0648\u0646",
                    text: "\u0645\u0639\u0645\u0627\u0631 \u0631\u0627\u0647\u200C\u062D\u0644",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_5",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_5",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u06A9\u0644\u0627\u0631\u0646\u0633 \u0646\u0644\u0633\u0648\u0646",
                      text: "\u0645\u0639\u0645\u0627\u0631 \u0631\u0627\u0647\u200C\u062D\u0644",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_5",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u062C\u0627\u0646 \u0628\u06A9\u0633\u062A\u0631",
                    text: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631 \u0627\u0631\u0634\u062F",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_6",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_6",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062C\u0627\u0646 \u0628\u06A9\u0633\u062A\u0631",
                      text: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631 \u0627\u0631\u0634\u062F",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_6",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0645\u0627\u06CC\u06A9 \u067E\u0646\u062F\u0644\u062A\u0648\u0646",
                    text: "\u0627\u0641\u0633\u0631 \u0639\u0645\u0644\u06CC\u0627\u062A",
                    rounded: "sm",
                    color: "primary",
                    class: "pointer-events-none"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_7",
                          rounded: "md",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_7",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0645\u0627\u06CC\u06A9 \u067E\u0646\u062F\u0644\u062A\u0648\u0646",
                      text: "\u0627\u0641\u0633\u0631 \u0639\u0645\u0644\u06CC\u0627\u062A",
                      rounded: "sm",
                      color: "primary",
                      class: "pointer-events-none"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseCheckbox, {
                          modelValue: unref(model),
                          "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                          value: "value_7",
                          rounded: "md",
                          color: "primary"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="relative p-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              size: "sm",
              variant: "pastel",
              color: "danger",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:user-minus",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u062D\u0630\u0641 \u06A9\u0627\u0631\u0628\u0631</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:user-minus",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u062D\u0630\u0641 \u06A9\u0627\u0631\u0628\u0631")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative p-2" }, [
                createVNode(_component_BaseInput, {
                  icon: "lucide:search",
                  rounded: "sm",
                  placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u06A9\u0627\u0631\u0628\u0631\u0627\u0646..."
                })
              ]),
              createVNode("div", { class: "nui-slimscroll me-2 max-h-[240px] overflow-y-auto pe-2" }, [
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062C\u0627\u0646 \u0631\u0648\u0644\u0646\u062F",
                        text: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_1",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u067E\u0627\u0626\u0648\u0644\u0627 \u0647\u0627\u0631\u062A\u0644\u06CC",
                        text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_2",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_3"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062C\u0627\u0646 \u0644\u0627\u06A9",
                        text: "\u0645\u0627\u062C\u0631\u0627\u062C\u0648",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_3",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0622\u062F\u0631\u06CC\u0627\u0646 \u0627\u0633\u0645\u06CC\u062A",
                        text: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_4",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_5"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u06A9\u0644\u0627\u0631\u0646\u0633 \u0646\u0644\u0633\u0648\u0646",
                        text: "\u0645\u0639\u0645\u0627\u0631 \u0631\u0627\u0647\u200C\u062D\u0644",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_5",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062C\u0627\u0646 \u0628\u06A9\u0633\u062A\u0631",
                        text: "\u062D\u0633\u0627\u0628\u062F\u0627\u0631 \u0627\u0631\u0634\u062F",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_6",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-700/40 rounded-md transition-colors duration-300" }, [
                  createVNode(_component_BaseCheckboxHeadless, {
                    modelValue: unref(model),
                    "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                    value: "value_7"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0645\u0627\u06CC\u06A9 \u067E\u0646\u062F\u0644\u062A\u0648\u0646",
                        text: "\u0627\u0641\u0633\u0631 \u0639\u0645\u0644\u06CC\u0627\u062A",
                        rounded: "sm",
                        color: "primary",
                        class: "pointer-events-none"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(model),
                            "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                            value: "value_7",
                            rounded: "md",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "relative p-2" }, [
                createVNode(_component_BaseButton, {
                  size: "sm",
                  variant: "pastel",
                  color: "danger",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:user-minus",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u062D\u0630\u0641 \u06A9\u0627\u0631\u0628\u0631")
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/dropdown/search-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
