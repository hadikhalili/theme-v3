import { i as _export_sfc, z as useNuiDefaultProperty, L as useNinjaButton, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode, resolveDynamicComponent, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { MenuItem, Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { Float } from '@headlessui-float/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseDropdown",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    headerLabel: { default: void 0 },
    fixed: { type: Boolean, default: false },
    buttonColor: { default: void 0 },
    color: { default: void 0 },
    placement: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    variant: { default: void 0 },
    classes: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const buttonColor = useNuiDefaultProperty(props, "BaseDropdown", "buttonColor");
    const color = useNuiDefaultProperty(props, "BaseDropdown", "color");
    const placement = useNuiDefaultProperty(props, "BaseDropdown", "placement");
    const rounded = useNuiDefaultProperty(props, "BaseDropdown", "rounded");
    const size = useNuiDefaultProperty(props, "BaseDropdown", "size");
    const variant = useNuiDefaultProperty(props, "BaseDropdown", "variant");
    const sizes = {
      md: "nui-menu-md",
      lg: "nui-menu-lg"
    };
    const radiuses = {
      none: "",
      sm: "nui-menu-rounded-sm",
      md: "nui-menu-rounded-md",
      lg: "nui-menu-rounded-lg",
      full: "nui-menu-rounded-lg"
    };
    const colors = {
      default: "nui-menu-default",
      "default-contrast": "nui-menu-default-contrast",
      muted: "nui-menu-muted",
      "muted-contrast": "nui-menu-muted-contrast",
      primary: "nui-menu-primary",
      info: "nui-menu-info",
      success: "nui-menu-success",
      warning: "nui-menu-warning",
      danger: "nui-menu-danger",
      none: ""
    };
    const textColors = {
      default: "text-inherit",
      "default-contrast": "text-inherit",
      muted: "text-muted-500",
      "muted-contrast": "text-muted-500",
      primary: "text-primary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      light: "text-muted-100",
      dark: "text-muted-900 dark:text-muted-100",
      black: "text-black dark:text-white",
      none: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-dropdown", props.classes?.wrapper]
      }, _attrs))} data-v-c7a8f4c2>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: ["nui-menu", props.classes?.menuWrapper]
      }, {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Float), {
              enter: "transition duration-100 ease-out",
              "enter-from": "transform scale-95 opacity-0",
              "enter-to": "transform scale-100 opacity-100",
              leave: "transition duration-75 ease-in",
              "leave-from": "transform scale-100 opacity-100",
              "leave-to": "transform scale-95 opacity-0",
              flip: "",
              offset: props.variant === "context" ? 6 : 4,
              strategy: props.fixed ? "fixed" : "absolute",
              placement: unref(placement),
              "adaptive-width": props.fixed,
              "z-index": 20
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "button", { open, close }, () => {
                          if (unref(variant) === "button" || props.variant === "button") {
                            _push4(ssrRenderComponent(_component_BaseButton, {
                              color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                              rounded: props.rounded ? props.rounded : unref(rounded),
                              class: "!pe-3 !ps-4"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, "label", { open, close }, () => {
                                    _push5(`<span data-v-c7a8f4c2${_scopeId4}>${ssrInterpolate(props.label)}</span>`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:chevron-down",
                                    class: ["nui-chevron", open && "rotate-180"]
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                      createVNode("span", null, toDisplayString(props.label), 1)
                                    ], true),
                                    createVNode(_component_Icon, {
                                      name: "lucide:chevron-down",
                                      class: ["nui-chevron", open && "rotate-180"]
                                    }, null, 8, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (props.variant === "context") {
                            _push4(`<button type="button" class="nui-context-button nui-focus" data-v-c7a8f4c2${_scopeId3}><span class="nui-context-button-inner" data-v-c7a8f4c2${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:more-horizontal",
                              class: ["nui-context-icon", open && "rotate-90"]
                            }, null, _parent4, _scopeId3));
                            _push4(`</span></button>`);
                          } else if (props.variant === "text") {
                            _push4(`<button type="button" class="${ssrRenderClass([
                              "nui-text-button nui-focus",
                              unref(buttonColor) && textColors[unref(buttonColor)]
                            ])}" data-v-c7a8f4c2${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "label", { open, close }, () => {
                              _push4(`<span class="nui-text-button-inner" data-v-c7a8f4c2${_scopeId3}>${ssrInterpolate(props.label)}</span>`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, _parent4, _scopeId3));
                            _push4(`</button>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "button", { open, close }, () => [
                            unref(variant) === "button" || props.variant === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                              key: 0,
                              color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                              rounded: props.rounded ? props.rounded : unref(rounded),
                              class: "!pe-3 !ps-4"
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                  createVNode("span", null, toDisplayString(props.label), 1)
                                ], true),
                                createVNode(_component_Icon, {
                                  name: "lucide:chevron-down",
                                  class: ["nui-chevron", open && "rotate-180"]
                                }, null, 8, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["color", "rounded"])) : props.variant === "context" ? (openBlock(), createBlock("button", {
                              key: 1,
                              type: "button",
                              class: "nui-context-button nui-focus"
                            }, [
                              createVNode("span", { class: "nui-context-button-inner" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:more-horizontal",
                                  class: ["nui-context-icon", open && "rotate-90"]
                                }, null, 8, ["class"])
                              ])
                            ])) : props.variant === "text" ? (openBlock(), createBlock("button", {
                              key: 2,
                              type: "button",
                              class: [
                                "nui-text-button nui-focus",
                                unref(buttonColor) && textColors[unref(buttonColor)]
                              ]
                            }, [
                              renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                              ], true),
                              createVNode(_component_Icon, {
                                name: "lucide:chevron-down",
                                class: ["nui-chevron", open && "rotate-180"]
                              }, null, 8, ["class"])
                            ], 2)) : createCommentVNode("", true)
                          ], true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(MenuItems), {
                    class: ["nui-dropdown-menu", [
                      unref(size) && sizes[unref(size)],
                      unref(rounded) && radiuses[unref(rounded)],
                      unref(color) && colors[unref(color)],
                      props.classes?.menu
                    ]]
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (props.headerLabel) {
                          _push4(`<div class="${ssrRenderClass([props.classes?.header, "nui-menu-header"])}" data-v-c7a8f4c2${_scopeId3}><div class="nui-menu-header-inner" data-v-c7a8f4c2${_scopeId3}><h4 class="nui-menu-header-title" data-v-c7a8f4c2${_scopeId3}>${ssrInterpolate(props.headerLabel)}</h4></div></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`<div class="${ssrRenderClass([props.classes?.content, "nui-menu-content"])}" data-v-c7a8f4c2${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "default", { open, close }, null, _push4, _parent4, _scopeId3);
                        _push4(`</div>`);
                      } else {
                        return [
                          props.headerLabel ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ["nui-menu-header", props.classes?.header]
                          }, [
                            createVNode("div", { class: "nui-menu-header-inner" }, [
                              createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            class: ["nui-menu-content", props.classes?.content]
                          }, [
                            renderSlot(_ctx.$slots, "default", { open, close }, void 0, true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(MenuButton), { as: "template" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "button", { open, close }, () => [
                          unref(variant) === "button" || props.variant === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                            key: 0,
                            color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                            rounded: props.rounded ? props.rounded : unref(rounded),
                            class: "!pe-3 !ps-4"
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "label", { open, close }, () => [
                                createVNode("span", null, toDisplayString(props.label), 1)
                              ], true),
                              createVNode(_component_Icon, {
                                name: "lucide:chevron-down",
                                class: ["nui-chevron", open && "rotate-180"]
                              }, null, 8, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["color", "rounded"])) : props.variant === "context" ? (openBlock(), createBlock("button", {
                            key: 1,
                            type: "button",
                            class: "nui-context-button nui-focus"
                          }, [
                            createVNode("span", { class: "nui-context-button-inner" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:more-horizontal",
                                class: ["nui-context-icon", open && "rotate-90"]
                              }, null, 8, ["class"])
                            ])
                          ])) : props.variant === "text" ? (openBlock(), createBlock("button", {
                            key: 2,
                            type: "button",
                            class: [
                              "nui-text-button nui-focus",
                              unref(buttonColor) && textColors[unref(buttonColor)]
                            ]
                          }, [
                            renderSlot(_ctx.$slots, "label", { open, close }, () => [
                              createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                            ], true),
                            createVNode(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, 8, ["class"])
                          ], 2)) : createCommentVNode("", true)
                        ], true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(MenuItems), {
                      class: ["nui-dropdown-menu", [
                        unref(size) && sizes[unref(size)],
                        unref(rounded) && radiuses[unref(rounded)],
                        unref(color) && colors[unref(color)],
                        props.classes?.menu
                      ]]
                    }, {
                      default: withCtx(() => [
                        props.headerLabel ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["nui-menu-header", props.classes?.header]
                        }, [
                          createVNode("div", { class: "nui-menu-header-inner" }, [
                            createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        createVNode("div", {
                          class: ["nui-menu-content", props.classes?.content]
                        }, [
                          renderSlot(_ctx.$slots, "default", { open, close }, void 0, true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Float), {
                enter: "transition duration-100 ease-out",
                "enter-from": "transform scale-95 opacity-0",
                "enter-to": "transform scale-100 opacity-100",
                leave: "transition duration-75 ease-in",
                "leave-from": "transform scale-100 opacity-100",
                "leave-to": "transform scale-95 opacity-0",
                flip: "",
                offset: props.variant === "context" ? 6 : 4,
                strategy: props.fixed ? "fixed" : "absolute",
                placement: unref(placement),
                "adaptive-width": props.fixed,
                "z-index": 20
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuButton), { as: "template" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "button", { open, close }, () => [
                        unref(variant) === "button" || props.variant === "button" ? (openBlock(), createBlock(_component_BaseButton, {
                          key: 0,
                          color: props.buttonColor ? props.buttonColor : unref(buttonColor),
                          rounded: props.rounded ? props.rounded : unref(rounded),
                          class: "!pe-3 !ps-4"
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", { open, close }, () => [
                              createVNode("span", null, toDisplayString(props.label), 1)
                            ], true),
                            createVNode(_component_Icon, {
                              name: "lucide:chevron-down",
                              class: ["nui-chevron", open && "rotate-180"]
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["color", "rounded"])) : props.variant === "context" ? (openBlock(), createBlock("button", {
                          key: 1,
                          type: "button",
                          class: "nui-context-button nui-focus"
                        }, [
                          createVNode("span", { class: "nui-context-button-inner" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:more-horizontal",
                              class: ["nui-context-icon", open && "rotate-90"]
                            }, null, 8, ["class"])
                          ])
                        ])) : props.variant === "text" ? (openBlock(), createBlock("button", {
                          key: 2,
                          type: "button",
                          class: [
                            "nui-text-button nui-focus",
                            unref(buttonColor) && textColors[unref(buttonColor)]
                          ]
                        }, [
                          renderSlot(_ctx.$slots, "label", { open, close }, () => [
                            createVNode("span", { class: "nui-text-button-inner" }, toDisplayString(props.label), 1)
                          ], true),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-down",
                            class: ["nui-chevron", open && "rotate-180"]
                          }, null, 8, ["class"])
                        ], 2)) : createCommentVNode("", true)
                      ], true)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(MenuItems), {
                    class: ["nui-dropdown-menu", [
                      unref(size) && sizes[unref(size)],
                      unref(rounded) && radiuses[unref(rounded)],
                      unref(color) && colors[unref(color)],
                      props.classes?.menu
                    ]]
                  }, {
                    default: withCtx(() => [
                      props.headerLabel ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["nui-menu-header", props.classes?.header]
                      }, [
                        createVNode("div", { class: "nui-menu-header-inner" }, [
                          createVNode("h4", { class: "nui-menu-header-title" }, toDisplayString(props.headerLabel), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      createVNode("div", {
                        class: ["nui-menu-content", props.classes?.content]
                      }, [
                        renderSlot(_ctx.$slots, "default", { open, close }, void 0, true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1032, ["offset", "strategy", "placement", "adaptive-width"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseDropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c7a8f4c2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseDropdownItem",
  __ssrInlineRender: true,
  props: {
    to: { default: void 0 },
    href: { default: void 0 },
    rel: { default: void 0 },
    target: { default: void 0 },
    type: { default: void 0 },
    title: { default: void 0 },
    text: { default: void 0 },
    disabled: { type: Boolean },
    color: { default: void 0 },
    contrast: { default: void 0 },
    rounded: { default: void 0 },
    classes: { default: () => ({
      title: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
      text: "text-muted-400 font-sans text-xs"
    }) }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseDropdownItem", "color");
    const contrast = useNuiDefaultProperty(props, "BaseDropdownItem", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseDropdownItem", "rounded");
    const radiuses = {
      none: "",
      sm: "nui-item-rounded-sm",
      md: "nui-item-rounded-md",
      lg: "nui-item-rounded-lg"
    };
    const contrasts = {
      default: "nui-item-default",
      contrast: "nui-item-contrast"
    };
    const colors = {
      primary: "nui-item-primary",
      info: "nui-item-info",
      success: "nui-item-success",
      warning: "nui-item-warning",
      danger: "nui-item-danger",
      dark: "nui-item-dark",
      black: "nui-item-black"
    };
    const { is, attributes } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenuItem), mergeProps({ as: "div" }, _attrs), {
        default: withCtx(({ active, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), {
              class: ["nui-dropdown-item", [
                active && "nui-active",
                unref(rounded) && radiuses[unref(rounded)],
                unref(contrast) && contrasts[unref(contrast)],
                unref(color) && colors[unref(color)],
                props.disabled && "nui-item-disabled",
                props.classes?.wrapper
              ]],
              onClick: close
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "start", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`<div class="nui-item-content"${_scopeId2}><div class="${ssrRenderClass(props.classes?.title)}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", { active, close }, () => {
                    _push3(`${ssrInterpolate(props.title)}`);
                  }, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  if ("text" in _ctx.$slots || props.text) {
                    _push3(`<p class="${ssrRenderClass([props.classes?.text, "text-muted-400 font-sans text-xs"])}"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "text", { active, close }, () => {
                      _push3(`${ssrInterpolate(props.text)}`);
                    }, _push3, _parent3, _scopeId2);
                    _push3(`</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  ssrRenderSlot(_ctx.$slots, "end", { active, close }, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "start"),
                    createVNode("div", { class: "nui-item-content" }, [
                      createVNode("div", {
                        class: props.classes?.title
                      }, [
                        renderSlot(_ctx.$slots, "default", { active, close }, () => [
                          createTextVNode(toDisplayString(props.title), 1)
                        ])
                      ], 2),
                      "text" in _ctx.$slots || props.text ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: ["text-muted-400 font-sans text-xs", props.classes?.text]
                      }, [
                        renderSlot(_ctx.$slots, "text", { active, close }, () => [
                          createTextVNode(toDisplayString(props.text), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    renderSlot(_ctx.$slots, "end", { active, close })
                  ];
                }
              }),
              _: 2
            }), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), {
                class: ["nui-dropdown-item", [
                  active && "nui-active",
                  unref(rounded) && radiuses[unref(rounded)],
                  unref(contrast) && contrasts[unref(contrast)],
                  unref(color) && colors[unref(color)],
                  props.disabled && "nui-item-disabled",
                  props.classes?.wrapper
                ]],
                onClickPassive: close
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "start"),
                  createVNode("div", { class: "nui-item-content" }, [
                    createVNode("div", {
                      class: props.classes?.title
                    }, [
                      renderSlot(_ctx.$slots, "default", { active, close }, () => [
                        createTextVNode(toDisplayString(props.title), 1)
                      ])
                    ], 2),
                    "text" in _ctx.$slots || props.text ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: ["text-muted-400 font-sans text-xs", props.classes?.text]
                    }, [
                      renderSlot(_ctx.$slots, "text", { active, close }, () => [
                        createTextVNode(toDisplayString(props.text), 1)
                      ])
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "end", { active, close })
                ]),
                _: 2
              }, 1040, ["class", "onClickPassive"]))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseDropdownItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main as a };
