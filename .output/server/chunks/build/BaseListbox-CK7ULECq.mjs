import { _ as _sfc_main$3 } from './BaseIconBox-Cgm-LP3M.mjs';
import { i as _export_sfc, z as useNuiDefaultProperty, a as __nuxt_component_2, b as _sfc_main$w, f as _sfc_main$C, w as __nuxt_component_0$2, A as _sfc_main$E } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, mergeModels, useModel, computed, ref, mergeProps, unref, isRef, renderSlot, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';
import { Float, FloatReference, FloatContent } from '@headlessui-float/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseListboxItem",
  __ssrInlineRender: true,
  props: {
    value: { default: () => ({}) },
    selectedIcon: { default: "lucide:check" },
    active: { type: Boolean },
    selected: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseIconBox = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      _push(`<!--[-->`);
      if (props.value.media) {
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: props.value.media,
          size: "xs"
        }, null, _parent));
      } else if (props.value.icon) {
        _push(ssrRenderComponent(_component_BaseIconBox, {
          size: "sm",
          rounded: "sm",
          class: "!me-0 !bg-transparent"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: props.value.icon,
                class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 size-5 transition-colors duration-200"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: props.value.icon,
                  class: "text-muted-400 group-hover/nui-listbox-option:text-primary-500 size-5 transition-colors duration-200"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-listbox-option-inner">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        weight: _ctx.selected ? "semibold" : "normal",
        size: "sm",
        class: "nui-listbox-heading"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.value.label ? props.value.label : props.value.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.value.label ? props.value.label : props.value.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (props.value.sublabel) {
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "nui-listbox-text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.value.sublabel)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.value.sublabel), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.selected) {
        _push(`<span class="nui-listbox-selected-icon">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: _ctx.selectedIcon,
          class: "nui-listbobx-selected-icon-inner"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseListboxItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseListbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    items: {},
    label: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: "" },
    selectedIcon: { default: "lucide:check" },
    placeholder: { default: "" },
    error: { type: [String, Boolean], default: false },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    colorFocus: { type: Boolean },
    multiple: { type: Boolean },
    multipleLabel: { type: [String, Function], default: void 0 },
    fixed: { type: Boolean },
    properties: { default: () => ({}) },
    contrast: { default: void 0 },
    placement: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const [modelValue, modelModifiers] = useModel(__props, "modelValue", {
      set(value) {
        if (!props.multiple && modelModifiers.prop && props.properties?.value) {
          const attr = props.properties.value;
          return props.items.find(
            (item) => item && typeof item === "object" && attr in item && item[attr] === value
          )?.[attr];
        }
        return value;
      },
      get(value) {
        if (!props.multiple && modelModifiers.prop && props.properties?.value) {
          const attr = props.properties.value;
          return props.items.find(
            (item) => item && typeof item === "object" && attr in item && item[attr] === value
          );
        }
        return value;
      }
    });
    const contrast = useNuiDefaultProperty(props, "BaseListbox", "contrast");
    const placement = useNuiDefaultProperty(props, "BaseListbox", "placement");
    const rounded = useNuiDefaultProperty(props, "BaseListbox", "rounded");
    const size = useNuiDefaultProperty(props, "BaseListbox", "size");
    const radiuses = {
      none: "",
      sm: "nui-listbox-rounded-sm",
      md: "nui-listbox-rounded-md",
      lg: "nui-listbox-rounded-lg",
      full: "nui-listbox-rounded-full"
    };
    const sizes = {
      sm: "nui-listbox-sm",
      md: "nui-listbox-md",
      lg: "nui-listbox-lg"
    };
    const contrasts = {
      default: "nui-listbox-default",
      "default-contrast": "nui-listbox-default-contrast",
      muted: "nui-listbox-muted",
      "muted-contrast": "nui-listbox-muted-contrast"
    };
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    function multipleLabelResolved(value, labelProperty) {
      if (typeof props.multipleLabel === "function") {
        return props.multipleLabel(value, props.properties.label);
      }
      if (props.multipleLabel) {
        return props.multipleLabel;
      }
      if (value.length === 0 && props.placeholder) {
        return "";
      } else if (value.length === 0) {
        return "No elements selected";
      } else if (value.length > 1) {
        return `${value.length} elements selected`;
      }
      if (modelModifiers.prop && props.properties.label) {
        const item = props.items.find(
          (item2) => item2 && typeof item2 === "object" && props.properties.value && item2[props.properties.value] === value[0]
        );
        return labelProperty && typeof item === "object" ? String(item?.[labelProperty]) : String(item);
      }
      return labelProperty && typeof value?.[0] === "object" ? String(value?.[0]?.[labelProperty]) : String(value?.[0]);
    }
    const internal = ref(modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseListboxItem = _sfc_main$1;
      const _component_BaseInputHelpText = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-listbox", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-listbox-error",
          props.loading && "nui-listbox-loading",
          props.labelFloat && "nui-listbox-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-listbox-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))} data-v-9e1683f2>`);
      _push(ssrRenderComponent(unref(Listbox), {
        modelValue: unref(internal),
        "onUpdate:modelValue": ($event) => isRef(internal) ? internal.value = $event : null,
        by: unref(modelModifiers).prop ? void 0 : props.properties.value,
        multiple: props.multiple,
        disabled: props.disabled
      }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Float), {
              composable: "",
              leave: "transition duration-100 ease-in",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0",
              flip: "",
              offset: 5,
              strategy: props.fixed ? "fixed" : "absolute",
              placement: unref(placement),
              "adaptive-width": props.fixed,
              "z-index": 20
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
                    _push3(ssrRenderComponent(unref(ListboxLabel), {
                      class: ["nui-listbox-label", props.classes?.label]
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                            _push4(`${ssrInterpolate(props.label)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "label", {}, () => [
                              createTextVNode(toDisplayString(props.label), 1)
                            ], true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="${ssrRenderClass([props.classes?.outer, "nui-listbox-outer"])}" data-v-9e1683f2${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(FloatReference), null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-9e1683f2${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ListboxButton), {
                          disabled: props.disabled,
                          class: ["nui-listbox-button", props.classes?.button]
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "listbox-button", {
                                value: unref(modelValue),
                                open
                              }, () => {
                                _push5(`<div class="nui-listbox-button-inner" data-v-9e1683f2${_scopeId4}>`);
                                if (props.icon) {
                                  _push5(ssrRenderComponent(_component_BaseIconBox, {
                                    size: "xs",
                                    rounded: "sm",
                                    color: "none",
                                    class: ["nui-icon-box", props.classes?.icon]
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                                          _push6(ssrRenderComponent(_component_Icon, {
                                            name: props.icon,
                                            class: "nui-icon-box-inner"
                                          }, null, _parent6, _scopeId5));
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "icon", {}, () => [
                                            createVNode(_component_Icon, {
                                              name: props.icon,
                                              class: "nui-icon-box-inner"
                                            }, null, 8, ["name"])
                                          ], true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (Array.isArray(unref(modelValue))) {
                                  _push5(`<!--[-->`);
                                  if (unref(modelValue).length === 0 && unref(placeholder)) {
                                    _push5(`<div class="${ssrRenderClass([props.loading && "select-none text-transparent", "nui-listbox-placeholder"])}" data-v-9e1683f2${_scopeId4}>${ssrInterpolate(unref(placeholder))}</div>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<div class="${ssrRenderClass([[
                                    props.loading && "select-none text-transparent",
                                    unref(modelValue).length === 0 && "text-muted-300 dark:text-muted-500"
                                  ], "block truncate text-left"])}" data-v-9e1683f2${_scopeId4}>${ssrInterpolate(multipleLabelResolved(
                                    unref(modelValue),
                                    props.properties.label
                                  ))}</div><!--]-->`);
                                } else if (unref(modelValue)) {
                                  _push5(`<!--[-->`);
                                  if (props.properties.media && unref(modelValue)[props.properties.media]) {
                                    _push5(ssrRenderComponent(_component_BaseAvatar, {
                                      src: unref(modelValue)[props.properties.media],
                                      size: unref(size) === "sm" ? "xxs" : "xs",
                                      class: ["me-2", unref(size) === "sm" ? "-ms-1" : "-ms-2"]
                                    }, null, _parent5, _scopeId4));
                                  } else if (props.properties.icon && unref(modelValue)[props.properties.icon]) {
                                    _push5(ssrRenderComponent(_component_BaseIconBox, {
                                      size: "xs",
                                      rounded: "sm",
                                      color: "none",
                                      class: "-ms-2 me-2"
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_Icon, {
                                            name: unref(modelValue)[props.properties.icon],
                                            class: "size-4"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(_component_Icon, {
                                              name: unref(modelValue)[props.properties.icon],
                                              class: "size-4"
                                            }, null, 8, ["name"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<div class="${ssrRenderClass([props.loading && "select-none text-transparent", "truncate text-left"])}" data-v-9e1683f2${_scopeId4}>${ssrInterpolate(props.properties.label ? unref(modelValue)[props.properties.label] : props.properties.value ? unref(modelValue)[props.properties.value] : unref(modelValue))}</div><!--]-->`);
                                } else {
                                  _push5(`<div class="${ssrRenderClass([props.loading && "select-none text-transparent", "nui-listbox-placeholder"])}" data-v-9e1683f2${_scopeId4}>${ssrInterpolate(unref(placeholder))}</div>`);
                                }
                                _push5(`<span class="nui-listbox-chevron nui-chevron" data-v-9e1683f2${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:chevron-down",
                                  class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                                }, null, _parent5, _scopeId4));
                                _push5(`</span></div>`);
                              }, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "listbox-button", {
                                  value: unref(modelValue),
                                  open
                                }, () => [
                                  createVNode("div", { class: "nui-listbox-button-inner" }, [
                                    props.icon ? (openBlock(), createBlock(_component_BaseIconBox, {
                                      key: 0,
                                      size: "xs",
                                      rounded: "sm",
                                      color: "none",
                                      class: ["nui-icon-box", props.classes?.icon]
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "icon", {}, () => [
                                          createVNode(_component_Icon, {
                                            name: props.icon,
                                            class: "nui-icon-box-inner"
                                          }, null, 8, ["name"])
                                        ], true)
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    Array.isArray(unref(modelValue)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      unref(modelValue).length === 0 && unref(placeholder) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                      }, toDisplayString(unref(placeholder)), 3)) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["block truncate text-left", [
                                          props.loading && "select-none text-transparent",
                                          unref(modelValue).length === 0 && "text-muted-300 dark:text-muted-500"
                                        ]]
                                      }, toDisplayString(multipleLabelResolved(
                                        unref(modelValue),
                                        props.properties.label
                                      )), 3)
                                    ], 64)) : unref(modelValue) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                      props.properties.media && unref(modelValue)[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                        key: 0,
                                        src: unref(modelValue)[props.properties.media],
                                        size: unref(size) === "sm" ? "xxs" : "xs",
                                        class: ["me-2", unref(size) === "sm" ? "-ms-1" : "-ms-2"]
                                      }, null, 8, ["src", "size", "class"])) : props.properties.icon && unref(modelValue)[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                        key: 1,
                                        size: "xs",
                                        rounded: "sm",
                                        color: "none",
                                        class: "-ms-2 me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: unref(modelValue)[props.properties.icon],
                                            class: "size-4"
                                          }, null, 8, ["name"])
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["truncate text-left", props.loading && "select-none text-transparent"]
                                      }, toDisplayString(props.properties.label ? unref(modelValue)[props.properties.label] : props.properties.value ? unref(modelValue)[props.properties.value] : unref(modelValue)), 3)
                                    ], 64)) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                    }, toDisplayString(unref(placeholder)), 3)),
                                    createVNode("span", { class: "nui-listbox-chevron nui-chevron" }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:chevron-down",
                                        class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                                      }, null, 8, ["class"])
                                    ])
                                  ])
                                ], true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
                          _push4(ssrRenderComponent(unref(ListboxLabel), {
                            class: ["nui-label-float", open ? "nui-label-float-active" : ""]
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                                  _push5(`${ssrInterpolate(props.label)}`);
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "label", {}, () => [
                                    createTextVNode(toDisplayString(props.label), 1)
                                  ], true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (props.loading) {
                          _push4(`<div class="${ssrRenderClass([[
                            _ctx.properties.media && unref(size) === "sm" || _ctx.properties.icon && unref(size) === "sm" ? "ms-5" : "",
                            _ctx.properties.media && unref(size) === "md" || _ctx.properties.icon && unref(size) === "md" ? "ms-6" : "",
                            _ctx.properties.media && unref(size) === "lg" || _ctx.properties.icon && unref(size) === "lg" ? "ms-7" : ""
                          ], "nui-listbox-placeload nui-loading-placeload"])}" data-v-9e1683f2${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode(unref(ListboxButton), {
                              disabled: props.disabled,
                              class: ["nui-listbox-button", props.classes?.button]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "listbox-button", {
                                  value: unref(modelValue),
                                  open
                                }, () => [
                                  createVNode("div", { class: "nui-listbox-button-inner" }, [
                                    props.icon ? (openBlock(), createBlock(_component_BaseIconBox, {
                                      key: 0,
                                      size: "xs",
                                      rounded: "sm",
                                      color: "none",
                                      class: ["nui-icon-box", props.classes?.icon]
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "icon", {}, () => [
                                          createVNode(_component_Icon, {
                                            name: props.icon,
                                            class: "nui-icon-box-inner"
                                          }, null, 8, ["name"])
                                        ], true)
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    Array.isArray(unref(modelValue)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      unref(modelValue).length === 0 && unref(placeholder) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                      }, toDisplayString(unref(placeholder)), 3)) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["block truncate text-left", [
                                          props.loading && "select-none text-transparent",
                                          unref(modelValue).length === 0 && "text-muted-300 dark:text-muted-500"
                                        ]]
                                      }, toDisplayString(multipleLabelResolved(
                                        unref(modelValue),
                                        props.properties.label
                                      )), 3)
                                    ], 64)) : unref(modelValue) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                      props.properties.media && unref(modelValue)[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                        key: 0,
                                        src: unref(modelValue)[props.properties.media],
                                        size: unref(size) === "sm" ? "xxs" : "xs",
                                        class: ["me-2", unref(size) === "sm" ? "-ms-1" : "-ms-2"]
                                      }, null, 8, ["src", "size", "class"])) : props.properties.icon && unref(modelValue)[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                        key: 1,
                                        size: "xs",
                                        rounded: "sm",
                                        color: "none",
                                        class: "-ms-2 me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: unref(modelValue)[props.properties.icon],
                                            class: "size-4"
                                          }, null, 8, ["name"])
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["truncate text-left", props.loading && "select-none text-transparent"]
                                      }, toDisplayString(props.properties.label ? unref(modelValue)[props.properties.label] : props.properties.value ? unref(modelValue)[props.properties.value] : unref(modelValue)), 3)
                                    ], 64)) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                    }, toDisplayString(unref(placeholder)), 3)),
                                    createVNode("span", { class: "nui-listbox-chevron nui-chevron" }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:chevron-down",
                                        class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                                      }, null, 8, ["class"])
                                    ])
                                  ])
                                ], true)
                              ]),
                              _: 2
                            }, 1032, ["disabled", "class"]),
                            "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                              key: 0,
                              class: ["nui-label-float", open ? "nui-label-float-active" : ""]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "label", {}, () => [
                                  createTextVNode(toDisplayString(props.label), 1)
                                ], true)
                              ]),
                              _: 2
                            }, 1032, ["class"])) : createCommentVNode("", true),
                            props.loading ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ["nui-listbox-placeload nui-loading-placeload", [
                                _ctx.properties.media && unref(size) === "sm" || _ctx.properties.icon && unref(size) === "sm" ? "ms-5" : "",
                                _ctx.properties.media && unref(size) === "md" || _ctx.properties.icon && unref(size) === "md" ? "ms-6" : "",
                                _ctx.properties.media && unref(size) === "lg" || _ctx.properties.icon && unref(size) === "lg" ? "ms-7" : ""
                              ]]
                            }, [
                              createVNode(_component_BasePlaceload, { class: "nui-placeload" })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(FloatContent), {
                    class: !props.fixed && "w-full"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ListboxOptions), { class: "nui-listbox-options" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(props.items, (item) => {
                                _push5(ssrRenderComponent(unref(ListboxOption), {
                                  key: props.properties.value ? item[props.properties.value] : item,
                                  value: unref(modelModifiers).prop && props.properties.value ? item[props.properties.value] : item,
                                  as: "template"
                                }, {
                                  default: withCtx(({ active, selected }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<li class="${ssrRenderClass([[active && "nui-active"], "nui-listbox-option group/nui-listbox-option"])}" data-v-9e1683f2${_scopeId5}>`);
                                      ssrRenderSlot(_ctx.$slots, "listbox-item", {
                                        item,
                                        open,
                                        active,
                                        selected
                                      }, () => {
                                        _push6(ssrRenderComponent(_component_BaseListboxItem, {
                                          value: {
                                            value: props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item,
                                            label: props.properties.label && item[props.properties.label],
                                            sublabel: props.properties.sublabel && item[props.properties.sublabel],
                                            media: props.properties.media && item[props.properties.media],
                                            icon: props.properties.icon && item[props.properties.icon]
                                          },
                                          "selected-icon": props.selectedIcon,
                                          active,
                                          selected
                                        }, null, _parent6, _scopeId5));
                                      }, _push6, _parent6, _scopeId5);
                                      _push6(`</li>`);
                                    } else {
                                      return [
                                        createVNode("li", {
                                          class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                                        }, [
                                          renderSlot(_ctx.$slots, "listbox-item", {
                                            item,
                                            open,
                                            active,
                                            selected
                                          }, () => [
                                            createVNode(_component_BaseListboxItem, {
                                              value: {
                                                value: props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item,
                                                label: props.properties.label && item[props.properties.label],
                                                sublabel: props.properties.sublabel && item[props.properties.sublabel],
                                                media: props.properties.media && item[props.properties.media],
                                                icon: props.properties.icon && item[props.properties.icon]
                                              },
                                              "selected-icon": props.selectedIcon,
                                              active,
                                              selected
                                            }, null, 8, ["value", "selected-icon", "active", "selected"])
                                          ], true)
                                        ], 2)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item) => {
                                  return openBlock(), createBlock(unref(ListboxOption), {
                                    key: props.properties.value ? item[props.properties.value] : item,
                                    value: unref(modelModifiers).prop && props.properties.value ? item[props.properties.value] : item,
                                    as: "template"
                                  }, {
                                    default: withCtx(({ active, selected }) => [
                                      createVNode("li", {
                                        class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                                      }, [
                                        renderSlot(_ctx.$slots, "listbox-item", {
                                          item,
                                          open,
                                          active,
                                          selected
                                        }, () => [
                                          createVNode(_component_BaseListboxItem, {
                                            value: {
                                              value: props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item,
                                              label: props.properties.label && item[props.properties.label],
                                              sublabel: props.properties.sublabel && item[props.properties.sublabel],
                                              media: props.properties.media && item[props.properties.media],
                                              icon: props.properties.icon && item[props.properties.icon]
                                            },
                                            "selected-icon": props.selectedIcon,
                                            active,
                                            selected
                                          }, null, 8, ["value", "selected-icon", "active", "selected"])
                                        ], true)
                                      ], 2)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ListboxOptions), { class: "nui-listbox-options" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item) => {
                                return openBlock(), createBlock(unref(ListboxOption), {
                                  key: props.properties.value ? item[props.properties.value] : item,
                                  value: unref(modelModifiers).prop && props.properties.value ? item[props.properties.value] : item,
                                  as: "template"
                                }, {
                                  default: withCtx(({ active, selected }) => [
                                    createVNode("li", {
                                      class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                                    }, [
                                      renderSlot(_ctx.$slots, "listbox-item", {
                                        item,
                                        open,
                                        active,
                                        selected
                                      }, () => [
                                        createVNode(_component_BaseListboxItem, {
                                          value: {
                                            value: props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item,
                                            label: props.properties.label && item[props.properties.label],
                                            sublabel: props.properties.sublabel && item[props.properties.sublabel],
                                            media: props.properties.media && item[props.properties.media],
                                            icon: props.properties.icon && item[props.properties.icon]
                                          },
                                          "selected-icon": props.selectedIcon,
                                          active,
                                          selected
                                        }, null, 8, ["value", "selected-icon", "active", "selected"])
                                      ], true)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  if (props.error && typeof props.error === "string") {
                    _push3(ssrRenderComponent(_component_BaseInputHelpText, {
                      color: "danger",
                      class: props.classes?.error
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(props.error)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(props.error), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    "label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                      key: 0,
                      class: ["nui-listbox-label", props.classes?.label]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "label", {}, () => [
                          createTextVNode(toDisplayString(props.label), 1)
                        ], true)
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    createVNode("div", {
                      class: ["nui-listbox-outer", props.classes?.outer]
                    }, [
                      createVNode(unref(FloatReference), null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(unref(ListboxButton), {
                              disabled: props.disabled,
                              class: ["nui-listbox-button", props.classes?.button]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "listbox-button", {
                                  value: unref(modelValue),
                                  open
                                }, () => [
                                  createVNode("div", { class: "nui-listbox-button-inner" }, [
                                    props.icon ? (openBlock(), createBlock(_component_BaseIconBox, {
                                      key: 0,
                                      size: "xs",
                                      rounded: "sm",
                                      color: "none",
                                      class: ["nui-icon-box", props.classes?.icon]
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "icon", {}, () => [
                                          createVNode(_component_Icon, {
                                            name: props.icon,
                                            class: "nui-icon-box-inner"
                                          }, null, 8, ["name"])
                                        ], true)
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    Array.isArray(unref(modelValue)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      unref(modelValue).length === 0 && unref(placeholder) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                      }, toDisplayString(unref(placeholder)), 3)) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["block truncate text-left", [
                                          props.loading && "select-none text-transparent",
                                          unref(modelValue).length === 0 && "text-muted-300 dark:text-muted-500"
                                        ]]
                                      }, toDisplayString(multipleLabelResolved(
                                        unref(modelValue),
                                        props.properties.label
                                      )), 3)
                                    ], 64)) : unref(modelValue) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                      props.properties.media && unref(modelValue)[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                        key: 0,
                                        src: unref(modelValue)[props.properties.media],
                                        size: unref(size) === "sm" ? "xxs" : "xs",
                                        class: ["me-2", unref(size) === "sm" ? "-ms-1" : "-ms-2"]
                                      }, null, 8, ["src", "size", "class"])) : props.properties.icon && unref(modelValue)[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                        key: 1,
                                        size: "xs",
                                        rounded: "sm",
                                        color: "none",
                                        class: "-ms-2 me-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: unref(modelValue)[props.properties.icon],
                                            class: "size-4"
                                          }, null, 8, ["name"])
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["truncate text-left", props.loading && "select-none text-transparent"]
                                      }, toDisplayString(props.properties.label ? unref(modelValue)[props.properties.label] : props.properties.value ? unref(modelValue)[props.properties.value] : unref(modelValue)), 3)
                                    ], 64)) : (openBlock(), createBlock("div", {
                                      key: 3,
                                      class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                    }, toDisplayString(unref(placeholder)), 3)),
                                    createVNode("span", { class: "nui-listbox-chevron nui-chevron" }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:chevron-down",
                                        class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                                      }, null, 8, ["class"])
                                    ])
                                  ])
                                ], true)
                              ]),
                              _: 2
                            }, 1032, ["disabled", "class"]),
                            "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                              key: 0,
                              class: ["nui-label-float", open ? "nui-label-float-active" : ""]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "label", {}, () => [
                                  createTextVNode(toDisplayString(props.label), 1)
                                ], true)
                              ]),
                              _: 2
                            }, 1032, ["class"])) : createCommentVNode("", true),
                            props.loading ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ["nui-listbox-placeload nui-loading-placeload", [
                                _ctx.properties.media && unref(size) === "sm" || _ctx.properties.icon && unref(size) === "sm" ? "ms-5" : "",
                                _ctx.properties.media && unref(size) === "md" || _ctx.properties.icon && unref(size) === "md" ? "ms-6" : "",
                                _ctx.properties.media && unref(size) === "lg" || _ctx.properties.icon && unref(size) === "lg" ? "ms-7" : ""
                              ]]
                            }, [
                              createVNode(_component_BasePlaceload, { class: "nui-placeload" })
                            ], 2)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(FloatContent), {
                        class: !props.fixed && "w-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ListboxOptions), { class: "nui-listbox-options" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item) => {
                                return openBlock(), createBlock(unref(ListboxOption), {
                                  key: props.properties.value ? item[props.properties.value] : item,
                                  value: unref(modelModifiers).prop && props.properties.value ? item[props.properties.value] : item,
                                  as: "template"
                                }, {
                                  default: withCtx(({ active, selected }) => [
                                    createVNode("li", {
                                      class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                                    }, [
                                      renderSlot(_ctx.$slots, "listbox-item", {
                                        item,
                                        open,
                                        active,
                                        selected
                                      }, () => [
                                        createVNode(_component_BaseListboxItem, {
                                          value: {
                                            value: props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item,
                                            label: props.properties.label && item[props.properties.label],
                                            sublabel: props.properties.sublabel && item[props.properties.sublabel],
                                            media: props.properties.media && item[props.properties.media],
                                            icon: props.properties.icon && item[props.properties.icon]
                                          },
                                          "selected-icon": props.selectedIcon,
                                          active,
                                          selected
                                        }, null, 8, ["value", "selected-icon", "active", "selected"])
                                      ], true)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class"]),
                      props.error && typeof props.error === "string" ? (openBlock(), createBlock(_component_BaseInputHelpText, {
                        key: 0,
                        color: "danger",
                        class: props.classes?.error
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.error), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ], 2)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Float), {
                composable: "",
                leave: "transition duration-100 ease-in",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0",
                flip: "",
                offset: 5,
                strategy: props.fixed ? "fixed" : "absolute",
                placement: unref(placement),
                "adaptive-width": props.fixed,
                "z-index": 20
              }, {
                default: withCtx(() => [
                  "label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                    key: 0,
                    class: ["nui-listbox-label", props.classes?.label]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", {}, () => [
                        createTextVNode(toDisplayString(props.label), 1)
                      ], true)
                    ]),
                    _: 3
                  }, 8, ["class"])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["nui-listbox-outer", props.classes?.outer]
                  }, [
                    createVNode(unref(FloatReference), null, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode(unref(ListboxButton), {
                            disabled: props.disabled,
                            class: ["nui-listbox-button", props.classes?.button]
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "listbox-button", {
                                value: unref(modelValue),
                                open
                              }, () => [
                                createVNode("div", { class: "nui-listbox-button-inner" }, [
                                  props.icon ? (openBlock(), createBlock(_component_BaseIconBox, {
                                    key: 0,
                                    size: "xs",
                                    rounded: "sm",
                                    color: "none",
                                    class: ["nui-icon-box", props.classes?.icon]
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "icon", {}, () => [
                                        createVNode(_component_Icon, {
                                          name: props.icon,
                                          class: "nui-icon-box-inner"
                                        }, null, 8, ["name"])
                                      ], true)
                                    ]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  Array.isArray(unref(modelValue)) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    unref(modelValue).length === 0 && unref(placeholder) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                    }, toDisplayString(unref(placeholder)), 3)) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: ["block truncate text-left", [
                                        props.loading && "select-none text-transparent",
                                        unref(modelValue).length === 0 && "text-muted-300 dark:text-muted-500"
                                      ]]
                                    }, toDisplayString(multipleLabelResolved(
                                      unref(modelValue),
                                      props.properties.label
                                    )), 3)
                                  ], 64)) : unref(modelValue) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                    props.properties.media && unref(modelValue)[props.properties.media] ? (openBlock(), createBlock(_component_BaseAvatar, {
                                      key: 0,
                                      src: unref(modelValue)[props.properties.media],
                                      size: unref(size) === "sm" ? "xxs" : "xs",
                                      class: ["me-2", unref(size) === "sm" ? "-ms-1" : "-ms-2"]
                                    }, null, 8, ["src", "size", "class"])) : props.properties.icon && unref(modelValue)[props.properties.icon] ? (openBlock(), createBlock(_component_BaseIconBox, {
                                      key: 1,
                                      size: "xs",
                                      rounded: "sm",
                                      color: "none",
                                      class: "-ms-2 me-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: unref(modelValue)[props.properties.icon],
                                          class: "size-4"
                                        }, null, 8, ["name"])
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: ["truncate text-left", props.loading && "select-none text-transparent"]
                                    }, toDisplayString(props.properties.label ? unref(modelValue)[props.properties.label] : props.properties.value ? unref(modelValue)[props.properties.value] : unref(modelValue)), 3)
                                  ], 64)) : (openBlock(), createBlock("div", {
                                    key: 3,
                                    class: ["nui-listbox-placeholder", props.loading && "select-none text-transparent"]
                                  }, toDisplayString(unref(placeholder)), 3)),
                                  createVNode("span", { class: "nui-listbox-chevron nui-chevron" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:chevron-down",
                                      class: ["nui-listbox-chevron-inner", [open && "rotate-180"]]
                                    }, null, 8, ["class"])
                                  ])
                                ])
                              ], true)
                            ]),
                            _: 2
                          }, 1032, ["disabled", "class"]),
                          "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ListboxLabel), {
                            key: 0,
                            class: ["nui-label-float", open ? "nui-label-float-active" : ""]
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "label", {}, () => [
                                createTextVNode(toDisplayString(props.label), 1)
                              ], true)
                            ]),
                            _: 2
                          }, 1032, ["class"])) : createCommentVNode("", true),
                          props.loading ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ["nui-listbox-placeload nui-loading-placeload", [
                              _ctx.properties.media && unref(size) === "sm" || _ctx.properties.icon && unref(size) === "sm" ? "ms-5" : "",
                              _ctx.properties.media && unref(size) === "md" || _ctx.properties.icon && unref(size) === "md" ? "ms-6" : "",
                              _ctx.properties.media && unref(size) === "lg" || _ctx.properties.icon && unref(size) === "lg" ? "ms-7" : ""
                            ]]
                          }, [
                            createVNode(_component_BasePlaceload, { class: "nui-placeload" })
                          ], 2)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(FloatContent), {
                      class: !props.fixed && "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ListboxOptions), { class: "nui-listbox-options" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item) => {
                              return openBlock(), createBlock(unref(ListboxOption), {
                                key: props.properties.value ? item[props.properties.value] : item,
                                value: unref(modelModifiers).prop && props.properties.value ? item[props.properties.value] : item,
                                as: "template"
                              }, {
                                default: withCtx(({ active, selected }) => [
                                  createVNode("li", {
                                    class: ["nui-listbox-option group/nui-listbox-option", [active && "nui-active"]]
                                  }, [
                                    renderSlot(_ctx.$slots, "listbox-item", {
                                      item,
                                      open,
                                      active,
                                      selected
                                    }, () => [
                                      createVNode(_component_BaseListboxItem, {
                                        value: {
                                          value: props.properties.label ? item[props.properties.label] : props.properties.value ? item[props.properties.value] : item,
                                          label: props.properties.label && item[props.properties.label],
                                          sublabel: props.properties.sublabel && item[props.properties.sublabel],
                                          media: props.properties.media && item[props.properties.media],
                                          icon: props.properties.icon && item[props.properties.icon]
                                        },
                                        "selected-icon": props.selectedIcon,
                                        active,
                                        selected
                                      }, null, 8, ["value", "selected-icon", "active", "selected"])
                                    ], true)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["class"]),
                    props.error && typeof props.error === "string" ? (openBlock(), createBlock(_component_BaseInputHelpText, {
                      key: 0,
                      color: "danger",
                      class: props.classes?.error
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.error), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("", true)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["strategy", "placement", "adaptive-width"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseListbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e1683f2"]]);

export { __nuxt_component_0 as _ };
