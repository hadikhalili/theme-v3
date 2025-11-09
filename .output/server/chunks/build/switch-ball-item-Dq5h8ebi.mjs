import { _ as __nuxt_component_0, a as _sfc_main$2 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as _sfc_main$1 } from './BaseCheckboxHeadless-CATHSw1E.mjs';
import { _ as _sfc_main$3 } from './BaseSwitchBall-krBQpZlI.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "switch-ball-item",
  __ssrInlineRender: true,
  setup(__props) {
    const model = ref(["value_1"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseCheckboxHeadless = _sfc_main$1;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_BaseSwitchBall = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-end" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        variant: "button",
        label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
        placement: "bottom-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0634\u062E\u0635\u06CC",
                    text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                    rounded: "sm",
                    color: "primary"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_1"),
                          value: "demo-curved-1",
                          rounded: "curved",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            checked: unref(model).includes("value_1"),
                            value: "demo-curved-1",
                            rounded: "curved",
                            color: "primary"
                          }, null, 8, ["checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0634\u062E\u0635\u06CC",
                      text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                      rounded: "sm",
                      color: "primary"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_1"),
                          value: "demo-curved-1",
                          rounded: "curved",
                          color: "primary"
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u0634\u0631\u06A9\u062A",
                    text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                    rounded: "sm",
                    color: "primary"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_2"),
                          value: "demo-curved-2",
                          rounded: "curved",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            checked: unref(model).includes("value_2"),
                            value: "demo-curved-2",
                            rounded: "curved",
                            color: "primary"
                          }, null, 8, ["checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0634\u0631\u06A9\u062A",
                      text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                      rounded: "sm",
                      color: "primary"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_2"),
                          value: "demo-curved-2",
                          rounded: "curved",
                          color: "primary"
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCheckboxHeadless, {
              modelValue: unref(model),
              "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
              value: "value_3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                    to: "#",
                    title: "\u063A\u06CC\u0631\u0627\u0646\u062A\u0641\u0627\u0639\u06CC",
                    text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                    rounded: "sm",
                    color: "primary"
                  }, {
                    start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_3"),
                          value: "demo-curved-3",
                          rounded: "curved",
                          color: "primary"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            checked: unref(model).includes("value_3"),
                            value: "demo-curved-3",
                            rounded: "curved",
                            color: "primary"
                          }, null, 8, ["checked"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u063A\u06CC\u0631\u0627\u0646\u062A\u0641\u0627\u0639\u06CC",
                      text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                      rounded: "sm",
                      color: "primary"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_3"),
                          value: "demo-curved-3",
                          rounded: "curved",
                          color: "primary"
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300" }, [
                createVNode(_component_BaseCheckboxHeadless, {
                  modelValue: unref(model),
                  "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                  value: "value_1"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0634\u062E\u0635\u06CC",
                      text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                      rounded: "sm",
                      color: "primary"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_1"),
                          value: "demo-curved-1",
                          rounded: "curved",
                          color: "primary"
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300" }, [
                createVNode(_component_BaseCheckboxHeadless, {
                  modelValue: unref(model),
                  "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                  value: "value_2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0634\u0631\u06A9\u062A",
                      text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                      rounded: "sm",
                      color: "primary"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_2"),
                          value: "demo-curved-2",
                          rounded: "curved",
                          color: "primary"
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "hover:bg-muted-100 dark:hover:bg-muted-800 rounded-md transition-colors duration-300" }, [
                createVNode(_component_BaseCheckboxHeadless, {
                  modelValue: unref(model),
                  "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
                  value: "value_3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u063A\u06CC\u0631\u0627\u0646\u062A\u0641\u0627\u0639\u06CC",
                      text: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0641\u06CC\u062F",
                      rounded: "sm",
                      color: "primary"
                    }, {
                      start: withCtx(() => [
                        createVNode(_component_BaseSwitchBall, {
                          checked: unref(model).includes("value_3"),
                          value: "demo-curved-3",
                          rounded: "curved",
                          color: "primary"
                        }, null, 8, ["checked"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/dropdown/switch-ball-item.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
