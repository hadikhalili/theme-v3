import { z as useNuiDefaultProperty, M as useNinjaMark, N as refDebounced, a as __nuxt_component_2, b as _sfc_main$w, f as _sfc_main$C, w as __nuxt_component_0$2, A as _sfc_main$E } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$3 } from './BaseIconBox-Cgm-LP3M.mjs';
import { defineComponent, inject, computed, mergeProps, unref, withCtx, createVNode, useSSRContext, mergeModels, useModel, shallowRef, ref, provide, reactive, watch, isRef, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { Float, FloatReference, FloatContent } from '@headlessui-float/vue';
import { Combobox, ComboboxLabel, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from '@headlessui/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BaseAutocompleteItem",
  __ssrInlineRender: true,
  props: {
    item: { default: void 0 },
    selectedIcon: { default: "lucide:check" },
    active: { type: Boolean },
    selected: { type: Boolean },
    mark: { default: "nui-mark" },
    rounded: { default: void 0 },
    properties: { default: () => ({
      label: "label",
      sublabel: "sublabel",
      media: "media",
      icon: "icon"
    }) }
  },
  setup(__props) {
    const props = __props;
    const rounded = useNuiDefaultProperty(props, "BaseAutocompleteItem", "rounded");
    const radiuses = {
      none: "",
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
      full: "rounded-xl"
    };
    const inputContext = inject("BaseAutocompleteContext", {
      query: ""
    });
    const label = computed(() => {
      if (props.item == null || props.properties == null)
        return;
      if (typeof props.properties.label === "string")
        return props.item[props.properties.label];
      if (typeof props.properties.label === "function")
        return props.properties.label(props.item);
      return;
    });
    const sublabel = computed(() => {
      if (props.item == null || props.properties == null)
        return;
      if (typeof props.properties.sublabel === "string")
        return props.item[props.properties.sublabel];
      if (typeof props.properties.sublabel === "function")
        return props.properties.sublabel(props.item);
      return;
    });
    const media = computed(() => {
      if (props.item == null || props.properties == null)
        return;
      if (typeof props.properties.media === "string")
        return props.item[props.properties.media];
      if (typeof props.properties.media === "function")
        return props.properties.media(props.item);
      return;
    });
    const icon = computed(() => {
      if (props.item == null || props.properties == null)
        return;
      if (typeof props.properties.icon === "string")
        return props.item[props.properties.icon];
      if (typeof props.properties.icon === "function")
        return props.properties.icon(props.item);
      return;
    });
    const query = computed(() => inputContext.query);
    const mark = computed(() => props.mark);
    const markedLabel = useNinjaMark(() => label.value, query, mark);
    const markedSublabel = useNinjaMark(() => sublabel.value, query, mark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseIconBox = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex cursor-pointer items-center p-2 transition-colors duration-300", [
          props.active ? "bg-muted-100 dark:bg-muted-700" : "",
          unref(rounded) && radiuses[unref(rounded)]
        ]]
      }, _attrs))}>`);
      if (unref(media) && !unref(icon)) {
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: unref(media),
          size: "xs",
          class: "me-3"
        }, null, _parent));
      } else if (unref(icon) && !unref(media)) {
        _push(ssrRenderComponent(_component_BaseIconBox, {
          size: "sm",
          rounded: "sm",
          color: "none",
          class: "me-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: unref(icon),
                class: ["size-4", [props.selected ? "text-primary-500" : "text-muted-500"]]
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: unref(icon),
                  class: ["size-4", [props.selected ? "text-primary-500" : "text-muted-500"]]
                }, null, 8, ["name", "class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        weight: props.selected ? "semibold" : "normal",
        size: "sm",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${unref(markedLabel)}</span>`);
          } else {
            return [
              createVNode("span", { innerHTML: unref(markedLabel) }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(sublabel)) {
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${unref(markedSublabel)}</span>`);
            } else {
              return [
                createVNode("span", { innerHTML: unref(markedSublabel) }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div style="${ssrRenderStyle(props.selected ? null : { display: "none" })}" class="${ssrRenderClass([[unref(media) && "size-8", unref(icon) && "size-8"], "ms-auto flex items-center justify-center"])}">`);
      ssrRenderSlot(_ctx.$slots, "selected-icon", {}, () => {
        _push(ssrRenderComponent(_component_Icon, {
          name: _ctx.selectedIcon,
          class: "text-success-500 block size-4"
        }, null, _parent));
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseAutocompleteItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAutocomplete",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    items: { default: () => [] },
    label: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    placeholder: { default: "" },
    error: { type: [String, Boolean], default: "" },
    clearValue: { default: void 0 },
    clearIcon: { default: "lucide:x" },
    chipClearIcon: { default: "lucide:x" },
    dropdownIcon: { default: "lucide:chevron-down" },
    displayValue: { type: Function, default: void 0 },
    filterDebounce: { default: 0 },
    filterItems: { type: Function, default: void 0 },
    allowCreate: { type: Boolean, default: false },
    hideCreatePrompt: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    colorFocus: { type: Boolean, default: false },
    dropdown: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    fixed: { type: Boolean, default: false },
    placement: { default: "bottom-start" },
    properties: { default: void 0 },
    contrast: { default: void 0 },
    i18n: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["keydown"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
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
    const contrast = useNuiDefaultProperty(props, "BaseAutocomplete", "contrast");
    const i18n = useNuiDefaultProperty(props, "BaseAutocomplete", "i18n");
    const rounded = useNuiDefaultProperty(props, "BaseAutocomplete", "rounded");
    const size = useNuiDefaultProperty(props, "BaseAutocomplete", "size");
    const defaultDisplayValue = (item) => {
      if (modelModifiers.prop && props.properties?.value) {
        const attr = props.properties.value;
        const result = items.value.find(
          (i) => i && typeof i === "object" && attr in i && i[attr] === item
        );
        if (typeof result === "object" && result && props.properties.label && props.properties.label in result) {
          return result[props.properties.label];
        }
      }
      if (item == null || typeof item === "string")
        return item;
      if (typeof item === "object" && props.properties?.label && props.properties.label in item)
        return item[props.properties.label];
      return item;
    };
    const defaultFilter = (query2, items2) => {
      if (!query2 || !items2) {
        return items2 ?? [];
      }
      const lower = query2.toLowerCase();
      return items2.filter((item) => {
        if (typeof item === "string")
          return item?.toLowerCase().includes(lower);
        if (typeof item === "object" && props.properties?.label && props.properties.label in item)
          return item[props.properties.label].toLowerCase().includes(lower);
        if (typeof item === "object" && props.properties?.sublabel && props.properties.sublabel in item)
          return item[props.properties.sublabel].toLowerCase().includes(lower);
      });
    };
    const filterResolved = computed(() => {
      if (props.filterItems === void 0)
        return defaultFilter;
      return props.filterItems;
    });
    const displayValueResolved = computed(() => {
      if (props.displayValue === void 0)
        return defaultDisplayValue;
      return props.displayValue;
    });
    const items = shallowRef(props.items);
    const query = ref("");
    const debounced = refDebounced(query, props.filterDebounce);
    const filteredItems = shallowRef(props.dropdown ? props.items : []);
    const pendingFilter = ref(false);
    const pendingDebounce = computed(() => query.value !== debounced.value);
    const pending = computed(() => pendingFilter.value || pendingDebounce.value);
    const queryCreate = computed(() => {
      return query.value === "" ? null : query.value;
    });
    const radiuses = {
      none: "",
      sm: "nui-autocomplete-rounded-sm",
      md: "nui-autocomplete-rounded-md",
      lg: "nui-autocomplete-rounded-lg",
      full: "nui-autocomplete-rounded-full"
    };
    const sizes = {
      sm: "nui-autocomplete-sm",
      md: "nui-autocomplete-md",
      lg: "nui-autocomplete-lg"
    };
    const contrasts = {
      default: "nui-autocomplete-default",
      "default-contrast": "nui-autocomplete-default-contrast",
      muted: "nui-autocomplete-muted",
      "muted-contrast": "nui-autocomplete-muted-contrast"
    };
    provide(
      "BaseAutocompleteContext",
      reactive({
        selected: modelValue,
        items,
        filteredItems,
        query,
        pending,
        clear,
        removeItem
      })
    );
    __expose({
      /**
       * Current selected value.
       */
      selected: modelValue,
      /**
       * Resolved items list.
       */
      filteredItems,
      /**
       * Current search input query.
       */
      query,
      /**
       * The filterItems pending state.
       */
      pending,
      /**
       * Clears the selected value.
       */
      clear,
      /**
       * Removes an item from the selected value.
       */
      removeItem
    });
    watch([debounced, items], async ([value, _items]) => {
      pendingFilter.value = true;
      try {
        filteredItems.value = await filterResolved.value(value, _items);
      } catch (error) {
        if (error?.name === "AbortError") {
          return;
        }
        throw error;
      } finally {
        pendingFilter.value = false;
      }
    });
    watch(
      () => props.items,
      () => {
        items.value = props.items;
      }
    );
    const canClear = computed(() => {
      if (!props.clearable)
        return false;
      if (Array.isArray(modelValue.value)) {
        return modelValue.value.length > 0;
      }
      return modelValue.value !== props.clearValue;
    });
    function clear() {
      modelValue.value = props.clearValue ?? (props.multiple ? [] : null);
    }
    const iconResolved = computed(() => {
      if (modelValue.value && typeof modelValue.value === "object" && !Array.isArray(modelValue.value) && "icon" in modelValue.value && typeof modelValue.value.icon === "string") {
        return modelValue.value.icon;
      }
      return props.icon;
    });
    function removeItem(item) {
      if (!Array.isArray(modelValue.value)) {
        modelValue.value = props.clearValue;
        return;
      }
      for (let i = modelValue.value.length - 1; i >= 0; --i) {
        if (props.properties?.value) {
          if (modelValue.value[i] === item) {
            modelValue.value.splice(i, 1);
          }
        } else if (modelValue.value[i] === item) {
          modelValue.value.splice(i, 1);
        }
      }
    }
    function key(item) {
      if (props.properties == null)
        return displayValueResolved.value(item);
      if (typeof props.properties.value === "string")
        return item[props.properties.value];
      if (typeof props.properties.value === "function")
        return props.properties.value(item);
      return displayValueResolved.value(item);
    }
    const internal = ref(modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseInputHelpText = _sfc_main$E;
      const _component_BaseAutocompleteItem = _sfc_main$1;
      _push(ssrRenderComponent(unref(Combobox), mergeProps({
        modelValue: unref(internal),
        "onUpdate:modelValue": ($event) => isRef(internal) ? internal.value = $event : null,
        by: unref(modelModifiers).prop && props.properties?.value ? void 0 : props.properties?.value,
        multiple: props.multiple,
        disabled: props.disabled,
        class: [
          "nui-autocomplete",
          props.classes?.wrapper,
          unref(size) && sizes[unref(size)],
          unref(contrast) && contrasts[unref(contrast)],
          unref(rounded) && radiuses[unref(rounded)],
          props.icon && "nui-has-icon",
          props.labelFloat && "nui-autocomplete-label-float",
          props.loading && "nui-autocomplete-loading",
          props.colorFocus && "nui-autocomplete-focus",
          props.error && "nui-autocomplete-error"
        ],
        as: "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Float), {
              composable: "",
              leave: "transition ease-in duration-100",
              "leave-from": "opacity-100",
              "leave-to": "opacity-0",
              onHide: ($event) => query.value = "",
              flip: !props.multiple,
              offset: 5,
              strategy: props.fixed ? "fixed" : "absolute",
              placement: props.placement,
              "adaptive-width": props.fixed,
              "z-index": 200
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if ("label" in _ctx.$slots && !_ctx.labelFloat || props.label && !props.labelFloat) {
                    _push3(ssrRenderComponent(unref(ComboboxLabel), {
                      class: ["nui-autocomplete-label", _ctx.classes?.label]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                            _push4(`${ssrInterpolate(_ctx.label)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                              createTextVNode(toDisplayString(_ctx.label), 1)
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (props.multiple) {
                    _push3(`<div class="nui-autocomplete-multiple"${_scopeId2}>`);
                    if (Array.isArray(unref(modelValue)) && unref(modelValue).length > 0) {
                      _push3(`<ul class="nui-autocomplete-multiple-list"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(modelValue), (item) => {
                        _push3(`<li${_scopeId2}>`);
                        ssrRenderSlot(_ctx.$slots, "autocomplete-multiple-list-item", {
                          item,
                          displayValue: unref(displayValueResolved)(item),
                          removeItem
                        }, () => {
                          _push3(`<div class="nui-autocomplete-multiple-list-item"${_scopeId2}>${ssrInterpolate(unref(displayValueResolved)(item))} <button type="button"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: _ctx.chipClearIcon,
                            class: "nui-autocomplete-multiple-list-item-icon"
                          }, null, _parent3, _scopeId2));
                          _push3(`</button></div>`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(FloatReference), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="nui-autocomplete-outer"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ComboboxInput), {
                          class: ["nui-autocomplete-input", [
                            _ctx.classes?.input,
                            props.dropdown && !unref(canClear) && "!pe-12",
                            props.dropdown && unref(canClear) && "!pe-[4.5rem]"
                          ]],
                          "display-value": props.multiple ? void 0 : unref(displayValueResolved),
                          placeholder: props.placeholder,
                          disabled: props.disabled,
                          onChange: ($event) => query.value = $event.target.value,
                          onKeydown: (event) => emits("keydown", event)
                        }, null, _parent4, _scopeId3));
                        if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
                          _push4(ssrRenderComponent(unref(ComboboxLabel), {
                            class: ["nui-label-float", props.classes?.label]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                                  _push5(`${ssrInterpolate(props.label)}`);
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                    createTextVNode(toDisplayString(props.label), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(iconResolved)) {
                          _push4(`<div class="nui-autocomplete-icon"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "icon", { iconName: unref(iconResolved) }, () => {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: unref(iconResolved),
                              class: "nui-autocomplete-icon-inner"
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(canClear) && (Array.isArray(unref(modelValue)) && unref(modelValue)?.length > 0 || !Array.isArray(unref(modelValue)) && unref(modelValue) != null)) {
                          _push4(`<button type="button" tabindex="-1" class="${ssrRenderClass([[props.classes?.icon, props.dropdown && "me-10"], "nui-autocomplete-clear"])}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "clear-icon", {}, () => {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: props.clearIcon,
                              class: "nui-autocomplete-clear-inner"
                            }, null, _parent4, _scopeId3));
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</button>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (props.dropdown) {
                          _push4(ssrRenderComponent(unref(ComboboxButton), { class: "nui-autocomplete-clear nui-autocomplete-chevron" }, {
                            default: withCtx(({ open }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "dropdown-icon", {}, () => {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: props.dropdownIcon,
                                    class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "dropdown-icon", {}, () => [
                                    createVNode(_component_Icon, {
                                      name: props.dropdownIcon,
                                      class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                                    }, null, 8, ["name", "class"])
                                  ])
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (props.loading) {
                          _push4(`<div class="nui-autocomplete-placeload"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BasePlaceload, {
                            class: ["nui-placeload", props.icon && "ms-6"]
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "nui-autocomplete-outer" }, [
                            createVNode(unref(ComboboxInput), {
                              class: ["nui-autocomplete-input", [
                                _ctx.classes?.input,
                                props.dropdown && !unref(canClear) && "!pe-12",
                                props.dropdown && unref(canClear) && "!pe-[4.5rem]"
                              ]],
                              "display-value": props.multiple ? void 0 : unref(displayValueResolved),
                              placeholder: props.placeholder,
                              disabled: props.disabled,
                              onChange: ($event) => query.value = $event.target.value,
                              onKeydown: (event) => emits("keydown", event)
                            }, null, 8, ["class", "display-value", "placeholder", "disabled", "onChange", "onKeydown"]),
                            "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                              key: 0,
                              class: ["nui-label-float", props.classes?.label]
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                  createTextVNode(toDisplayString(props.label), 1)
                                ])
                              ]),
                              _: 3
                            }, 8, ["class"])) : createCommentVNode("", true),
                            unref(iconResolved) ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "nui-autocomplete-icon"
                            }, [
                              renderSlot(_ctx.$slots, "icon", { iconName: unref(iconResolved) }, () => [
                                createVNode(_component_Icon, {
                                  name: unref(iconResolved),
                                  class: "nui-autocomplete-icon-inner"
                                }, null, 8, ["name"])
                              ])
                            ])) : createCommentVNode("", true),
                            unref(canClear) && (Array.isArray(unref(modelValue)) && unref(modelValue)?.length > 0 || !Array.isArray(unref(modelValue)) && unref(modelValue) != null) ? (openBlock(), createBlock("button", {
                              key: 2,
                              type: "button",
                              tabindex: "-1",
                              class: ["nui-autocomplete-clear", [props.classes?.icon, props.dropdown && "me-10"]],
                              onClick: clear
                            }, [
                              renderSlot(_ctx.$slots, "clear-icon", {}, () => [
                                createVNode(_component_Icon, {
                                  name: props.clearIcon,
                                  class: "nui-autocomplete-clear-inner"
                                }, null, 8, ["name"])
                              ])
                            ], 2)) : createCommentVNode("", true),
                            props.dropdown ? (openBlock(), createBlock(unref(ComboboxButton), {
                              key: 3,
                              class: "nui-autocomplete-clear nui-autocomplete-chevron"
                            }, {
                              default: withCtx(({ open }) => [
                                renderSlot(_ctx.$slots, "dropdown-icon", {}, () => [
                                  createVNode(_component_Icon, {
                                    name: props.dropdownIcon,
                                    class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                                  }, null, 8, ["name", "class"])
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            props.loading ? (openBlock(), createBlock("div", {
                              key: 4,
                              class: "nui-autocomplete-placeload"
                            }, [
                              createVNode(_component_BasePlaceload, {
                                class: ["nui-placeload", props.icon && "ms-6"]
                              }, null, 8, ["class"])
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  if (props.error && typeof props.error === "string") {
                    _push3(ssrRenderComponent(_component_BaseInputHelpText, {
                      color: "danger",
                      class: props.classes?.error
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(props.error)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(props.error), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(FloatContent), {
                    class: !props.fixed && "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ComboboxOptions), {
                          as: "div",
                          class: {
                            "nui-autocomplete-results": unref(filteredItems).length > 0 || !_ctx.hideCreatePrompt
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(filteredItems).length === 0 && unref(pending)) {
                                _push5(`<div class="nui-autocomplete-results-placeholder"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                                  _push5(`<span class="nui-autocomplete-results-placeholder-text text-sm"${_scopeId4}>${ssrInterpolate(unref(i18n).pending)}</span>`);
                                }, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else if (unref(filteredItems).length === 0 && !_ctx.allowCreate) {
                                _push5(`<div class="nui-autocomplete-results-placeholder"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => {
                                  _push5(`<span class="nui-autocomplete-results-placeholder-text text-sm"${_scopeId4}>${ssrInterpolate(unref(i18n).empty)}</span>`);
                                }, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else {
                                _push5(`<!--[-->`);
                                if ("start-item" in _ctx.$slots) {
                                  _push5(`<div class="nui-autocomplete-results-header"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "start-item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items)
                                  }, null, _push5, _parent5, _scopeId4);
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (_ctx.allowCreate && unref(queryCreate)) {
                                  _push5(ssrRenderComponent(unref(ComboboxOption), {
                                    value: unref(queryCreate),
                                    class: _ctx.hideCreatePrompt ? "hidden" : "nui-autocomplete-results-item",
                                    as: "div"
                                  }, {
                                    default: withCtx(({ active, selected }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "create-item", {
                                          query: unref(query),
                                          filteredItems: unref(filteredItems),
                                          pending: unref(pending),
                                          items: unref(items),
                                          active,
                                          selected
                                        }, () => {
                                          _push6(ssrRenderComponent(_component_BaseAutocompleteItem, {
                                            rounded: unref(rounded),
                                            item: {
                                              label: `Create '${unref(query)}'`,
                                              value: unref(query)
                                            },
                                            active,
                                            selected
                                          }, null, _parent6, _scopeId5));
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "create-item", {
                                            query: unref(query),
                                            filteredItems: unref(filteredItems),
                                            pending: unref(pending),
                                            items: unref(items),
                                            active,
                                            selected
                                          }, () => [
                                            createVNode(_component_BaseAutocompleteItem, {
                                              rounded: unref(rounded),
                                              item: {
                                                label: `Create '${unref(query)}'`,
                                                value: unref(query)
                                              },
                                              active,
                                              selected
                                            }, null, 8, ["rounded", "item", "active", "selected"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(filteredItems), (item) => {
                                  _push5(ssrRenderComponent(unref(ComboboxOption), {
                                    key: key(item),
                                    class: "nui-autocomplete-results-item",
                                    as: "div",
                                    value: unref(modelModifiers).prop && props.properties?.value ? item[props.properties.value] : item
                                  }, {
                                    default: withCtx(({ active, selected }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "item", {
                                          query: unref(query),
                                          filteredItems: unref(filteredItems),
                                          pending: unref(pending),
                                          items: unref(items),
                                          item,
                                          active,
                                          selected
                                        }, () => {
                                          _push6(ssrRenderComponent(_component_BaseAutocompleteItem, {
                                            rounded: unref(rounded),
                                            item: _ctx.properties ? item : {
                                              label: unref(displayValueResolved)(item)
                                            },
                                            active,
                                            selected,
                                            properties: _ctx.properties
                                          }, null, _parent6, _scopeId5));
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "item", {
                                            query: unref(query),
                                            filteredItems: unref(filteredItems),
                                            pending: unref(pending),
                                            items: unref(items),
                                            item,
                                            active,
                                            selected
                                          }, () => [
                                            createVNode(_component_BaseAutocompleteItem, {
                                              rounded: unref(rounded),
                                              item: _ctx.properties ? item : {
                                                label: unref(displayValueResolved)(item)
                                              },
                                              active,
                                              selected,
                                              properties: _ctx.properties
                                            }, null, 8, ["rounded", "item", "active", "selected", "properties"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                                if ("end-item" in _ctx.$slots) {
                                  _push5(`<div class="nui-autocomplete-results-footer"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "end-item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items)
                                  }, null, _push5, _parent5, _scopeId4);
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<!--]-->`);
                              }
                            } else {
                              return [
                                unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "nui-autocomplete-results-placeholder"
                                }, [
                                  renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                    createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).pending), 1)
                                  ])
                                ])) : unref(filteredItems).length === 0 && !_ctx.allowCreate ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "nui-autocomplete-results-placeholder"
                                }, [
                                  renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                    createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).empty), 1)
                                  ])
                                ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                                  "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "nui-autocomplete-results-header"
                                  }, [
                                    renderSlot(_ctx.$slots, "start-item", {
                                      query: unref(query),
                                      filteredItems: unref(filteredItems),
                                      pending: unref(pending),
                                      items: unref(items)
                                    })
                                  ])) : createCommentVNode("", true),
                                  _ctx.allowCreate && unref(queryCreate) ? (openBlock(), createBlock(unref(ComboboxOption), {
                                    key: 1,
                                    value: unref(queryCreate),
                                    class: _ctx.hideCreatePrompt ? "hidden" : "nui-autocomplete-results-item",
                                    as: "div"
                                  }, {
                                    default: withCtx(({ active, selected }) => [
                                      renderSlot(_ctx.$slots, "create-item", {
                                        query: unref(query),
                                        filteredItems: unref(filteredItems),
                                        pending: unref(pending),
                                        items: unref(items),
                                        active,
                                        selected
                                      }, () => [
                                        createVNode(_component_BaseAutocompleteItem, {
                                          rounded: unref(rounded),
                                          item: {
                                            label: `Create '${unref(query)}'`,
                                            value: unref(query)
                                          },
                                          active,
                                          selected
                                        }, null, 8, ["rounded", "item", "active", "selected"])
                                      ])
                                    ]),
                                    _: 3
                                  }, 8, ["value", "class"])) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                                    return openBlock(), createBlock(unref(ComboboxOption), {
                                      key: key(item),
                                      class: "nui-autocomplete-results-item",
                                      as: "div",
                                      value: unref(modelModifiers).prop && props.properties?.value ? item[props.properties.value] : item
                                    }, {
                                      default: withCtx(({ active, selected }) => [
                                        renderSlot(_ctx.$slots, "item", {
                                          query: unref(query),
                                          filteredItems: unref(filteredItems),
                                          pending: unref(pending),
                                          items: unref(items),
                                          item,
                                          active,
                                          selected
                                        }, () => [
                                          createVNode(_component_BaseAutocompleteItem, {
                                            rounded: unref(rounded),
                                            item: _ctx.properties ? item : {
                                              label: unref(displayValueResolved)(item)
                                            },
                                            active,
                                            selected,
                                            properties: _ctx.properties
                                          }, null, 8, ["rounded", "item", "active", "selected", "properties"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128)),
                                  "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "nui-autocomplete-results-footer"
                                  }, [
                                    renderSlot(_ctx.$slots, "end-item", {
                                      query: unref(query),
                                      filteredItems: unref(filteredItems),
                                      pending: unref(pending),
                                      items: unref(items)
                                    })
                                  ])) : createCommentVNode("", true)
                                ], 64))
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ComboboxOptions), {
                            as: "div",
                            class: {
                              "nui-autocomplete-results": unref(filteredItems).length > 0 || !_ctx.hideCreatePrompt
                            }
                          }, {
                            default: withCtx(() => [
                              unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "nui-autocomplete-results-placeholder"
                              }, [
                                renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                  createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).pending), 1)
                                ])
                              ])) : unref(filteredItems).length === 0 && !_ctx.allowCreate ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "nui-autocomplete-results-placeholder"
                              }, [
                                renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                  createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).empty), 1)
                                ])
                              ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                                "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "nui-autocomplete-results-header"
                                }, [
                                  renderSlot(_ctx.$slots, "start-item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items)
                                  })
                                ])) : createCommentVNode("", true),
                                _ctx.allowCreate && unref(queryCreate) ? (openBlock(), createBlock(unref(ComboboxOption), {
                                  key: 1,
                                  value: unref(queryCreate),
                                  class: _ctx.hideCreatePrompt ? "hidden" : "nui-autocomplete-results-item",
                                  as: "div"
                                }, {
                                  default: withCtx(({ active, selected }) => [
                                    renderSlot(_ctx.$slots, "create-item", {
                                      query: unref(query),
                                      filteredItems: unref(filteredItems),
                                      pending: unref(pending),
                                      items: unref(items),
                                      active,
                                      selected
                                    }, () => [
                                      createVNode(_component_BaseAutocompleteItem, {
                                        rounded: unref(rounded),
                                        item: {
                                          label: `Create '${unref(query)}'`,
                                          value: unref(query)
                                        },
                                        active,
                                        selected
                                      }, null, 8, ["rounded", "item", "active", "selected"])
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["value", "class"])) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                                  return openBlock(), createBlock(unref(ComboboxOption), {
                                    key: key(item),
                                    class: "nui-autocomplete-results-item",
                                    as: "div",
                                    value: unref(modelModifiers).prop && props.properties?.value ? item[props.properties.value] : item
                                  }, {
                                    default: withCtx(({ active, selected }) => [
                                      renderSlot(_ctx.$slots, "item", {
                                        query: unref(query),
                                        filteredItems: unref(filteredItems),
                                        pending: unref(pending),
                                        items: unref(items),
                                        item,
                                        active,
                                        selected
                                      }, () => [
                                        createVNode(_component_BaseAutocompleteItem, {
                                          rounded: unref(rounded),
                                          item: _ctx.properties ? item : {
                                            label: unref(displayValueResolved)(item)
                                          },
                                          active,
                                          selected,
                                          properties: _ctx.properties
                                        }, null, 8, ["rounded", "item", "active", "selected", "properties"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128)),
                                "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "nui-autocomplete-results-footer"
                                }, [
                                  renderSlot(_ctx.$slots, "end-item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items)
                                  })
                                ])) : createCommentVNode("", true)
                              ], 64))
                            ]),
                            _: 3
                          }, 8, ["class"])
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    "label" in _ctx.$slots && !_ctx.labelFloat || props.label && !props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                      key: 0,
                      class: ["nui-autocomplete-label", _ctx.classes?.label]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                          createTextVNode(toDisplayString(_ctx.label), 1)
                        ])
                      ]),
                      _: 3
                    }, 8, ["class"])) : createCommentVNode("", true),
                    props.multiple ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "nui-autocomplete-multiple"
                    }, [
                      Array.isArray(unref(modelValue)) && unref(modelValue).length > 0 ? (openBlock(), createBlock("ul", {
                        key: 0,
                        class: "nui-autocomplete-multiple-list"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(modelValue), (item) => {
                          return openBlock(), createBlock("li", {
                            key: String(item)
                          }, [
                            renderSlot(_ctx.$slots, "autocomplete-multiple-list-item", {
                              item,
                              displayValue: unref(displayValueResolved)(item),
                              removeItem
                            }, () => [
                              createVNode("div", { class: "nui-autocomplete-multiple-list-item" }, [
                                createTextVNode(toDisplayString(unref(displayValueResolved)(item)) + " ", 1),
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => removeItem(item)
                                }, [
                                  createVNode(_component_Icon, {
                                    name: _ctx.chipClearIcon,
                                    class: "nui-autocomplete-multiple-list-item-icon"
                                  }, null, 8, ["name"])
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createVNode(unref(FloatReference), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "nui-autocomplete-outer" }, [
                          createVNode(unref(ComboboxInput), {
                            class: ["nui-autocomplete-input", [
                              _ctx.classes?.input,
                              props.dropdown && !unref(canClear) && "!pe-12",
                              props.dropdown && unref(canClear) && "!pe-[4.5rem]"
                            ]],
                            "display-value": props.multiple ? void 0 : unref(displayValueResolved),
                            placeholder: props.placeholder,
                            disabled: props.disabled,
                            onChange: ($event) => query.value = $event.target.value,
                            onKeydown: (event) => emits("keydown", event)
                          }, null, 8, ["class", "display-value", "placeholder", "disabled", "onChange", "onKeydown"]),
                          "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                            key: 0,
                            class: ["nui-label-float", props.classes?.label]
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                createTextVNode(toDisplayString(props.label), 1)
                              ])
                            ]),
                            _: 3
                          }, 8, ["class"])) : createCommentVNode("", true),
                          unref(iconResolved) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "nui-autocomplete-icon"
                          }, [
                            renderSlot(_ctx.$slots, "icon", { iconName: unref(iconResolved) }, () => [
                              createVNode(_component_Icon, {
                                name: unref(iconResolved),
                                class: "nui-autocomplete-icon-inner"
                              }, null, 8, ["name"])
                            ])
                          ])) : createCommentVNode("", true),
                          unref(canClear) && (Array.isArray(unref(modelValue)) && unref(modelValue)?.length > 0 || !Array.isArray(unref(modelValue)) && unref(modelValue) != null) ? (openBlock(), createBlock("button", {
                            key: 2,
                            type: "button",
                            tabindex: "-1",
                            class: ["nui-autocomplete-clear", [props.classes?.icon, props.dropdown && "me-10"]],
                            onClick: clear
                          }, [
                            renderSlot(_ctx.$slots, "clear-icon", {}, () => [
                              createVNode(_component_Icon, {
                                name: props.clearIcon,
                                class: "nui-autocomplete-clear-inner"
                              }, null, 8, ["name"])
                            ])
                          ], 2)) : createCommentVNode("", true),
                          props.dropdown ? (openBlock(), createBlock(unref(ComboboxButton), {
                            key: 3,
                            class: "nui-autocomplete-clear nui-autocomplete-chevron"
                          }, {
                            default: withCtx(({ open }) => [
                              renderSlot(_ctx.$slots, "dropdown-icon", {}, () => [
                                createVNode(_component_Icon, {
                                  name: props.dropdownIcon,
                                  class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                                }, null, 8, ["name", "class"])
                              ])
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          props.loading ? (openBlock(), createBlock("div", {
                            key: 4,
                            class: "nui-autocomplete-placeload"
                          }, [
                            createVNode(_component_BasePlaceload, {
                              class: ["nui-placeload", props.icon && "ms-6"]
                            }, null, 8, ["class"])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 3
                    }),
                    props.error && typeof props.error === "string" ? (openBlock(), createBlock(_component_BaseInputHelpText, {
                      key: 2,
                      color: "danger",
                      class: props.classes?.error
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.error), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(FloatContent), {
                      class: !props.fixed && "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ComboboxOptions), {
                          as: "div",
                          class: {
                            "nui-autocomplete-results": unref(filteredItems).length > 0 || !_ctx.hideCreatePrompt
                          }
                        }, {
                          default: withCtx(() => [
                            unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-autocomplete-results-placeholder"
                            }, [
                              renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).pending), 1)
                              ])
                            ])) : unref(filteredItems).length === 0 && !_ctx.allowCreate ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "nui-autocomplete-results-placeholder"
                            }, [
                              renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                                createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).empty), 1)
                              ])
                            ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                              "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "nui-autocomplete-results-header"
                              }, [
                                renderSlot(_ctx.$slots, "start-item", {
                                  query: unref(query),
                                  filteredItems: unref(filteredItems),
                                  pending: unref(pending),
                                  items: unref(items)
                                })
                              ])) : createCommentVNode("", true),
                              _ctx.allowCreate && unref(queryCreate) ? (openBlock(), createBlock(unref(ComboboxOption), {
                                key: 1,
                                value: unref(queryCreate),
                                class: _ctx.hideCreatePrompt ? "hidden" : "nui-autocomplete-results-item",
                                as: "div"
                              }, {
                                default: withCtx(({ active, selected }) => [
                                  renderSlot(_ctx.$slots, "create-item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items),
                                    active,
                                    selected
                                  }, () => [
                                    createVNode(_component_BaseAutocompleteItem, {
                                      rounded: unref(rounded),
                                      item: {
                                        label: `Create '${unref(query)}'`,
                                        value: unref(query)
                                      },
                                      active,
                                      selected
                                    }, null, 8, ["rounded", "item", "active", "selected"])
                                  ])
                                ]),
                                _: 3
                              }, 8, ["value", "class"])) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                                return openBlock(), createBlock(unref(ComboboxOption), {
                                  key: key(item),
                                  class: "nui-autocomplete-results-item",
                                  as: "div",
                                  value: unref(modelModifiers).prop && props.properties?.value ? item[props.properties.value] : item
                                }, {
                                  default: withCtx(({ active, selected }) => [
                                    renderSlot(_ctx.$slots, "item", {
                                      query: unref(query),
                                      filteredItems: unref(filteredItems),
                                      pending: unref(pending),
                                      items: unref(items),
                                      item,
                                      active,
                                      selected
                                    }, () => [
                                      createVNode(_component_BaseAutocompleteItem, {
                                        rounded: unref(rounded),
                                        item: _ctx.properties ? item : {
                                          label: unref(displayValueResolved)(item)
                                        },
                                        active,
                                        selected,
                                        properties: _ctx.properties
                                      }, null, 8, ["rounded", "item", "active", "selected", "properties"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128)),
                              "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "nui-autocomplete-results-footer"
                              }, [
                                renderSlot(_ctx.$slots, "end-item", {
                                  query: unref(query),
                                  filteredItems: unref(filteredItems),
                                  pending: unref(pending),
                                  items: unref(items)
                                })
                              ])) : createCommentVNode("", true)
                            ], 64))
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Float), {
                composable: "",
                leave: "transition ease-in duration-100",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0",
                onHide: ($event) => query.value = "",
                flip: !props.multiple,
                offset: 5,
                strategy: props.fixed ? "fixed" : "absolute",
                placement: props.placement,
                "adaptive-width": props.fixed,
                "z-index": 200
              }, {
                default: withCtx(() => [
                  "label" in _ctx.$slots && !_ctx.labelFloat || props.label && !props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                    key: 0,
                    class: ["nui-autocomplete-label", _ctx.classes?.label]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                        createTextVNode(toDisplayString(_ctx.label), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["class"])) : createCommentVNode("", true),
                  props.multiple ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "nui-autocomplete-multiple"
                  }, [
                    Array.isArray(unref(modelValue)) && unref(modelValue).length > 0 ? (openBlock(), createBlock("ul", {
                      key: 0,
                      class: "nui-autocomplete-multiple-list"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(modelValue), (item) => {
                        return openBlock(), createBlock("li", {
                          key: String(item)
                        }, [
                          renderSlot(_ctx.$slots, "autocomplete-multiple-list-item", {
                            item,
                            displayValue: unref(displayValueResolved)(item),
                            removeItem
                          }, () => [
                            createVNode("div", { class: "nui-autocomplete-multiple-list-item" }, [
                              createTextVNode(toDisplayString(unref(displayValueResolved)(item)) + " ", 1),
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => removeItem(item)
                              }, [
                                createVNode(_component_Icon, {
                                  name: _ctx.chipClearIcon,
                                  class: "nui-autocomplete-multiple-list-item-icon"
                                }, null, 8, ["name"])
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  createVNode(unref(FloatReference), null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "nui-autocomplete-outer" }, [
                        createVNode(unref(ComboboxInput), {
                          class: ["nui-autocomplete-input", [
                            _ctx.classes?.input,
                            props.dropdown && !unref(canClear) && "!pe-12",
                            props.dropdown && unref(canClear) && "!pe-[4.5rem]"
                          ]],
                          "display-value": props.multiple ? void 0 : unref(displayValueResolved),
                          placeholder: props.placeholder,
                          disabled: props.disabled,
                          onChange: ($event) => query.value = $event.target.value,
                          onKeydown: (event) => emits("keydown", event)
                        }, null, 8, ["class", "display-value", "placeholder", "disabled", "onChange", "onKeydown"]),
                        "label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat ? (openBlock(), createBlock(unref(ComboboxLabel), {
                          key: 0,
                          class: ["nui-label-float", props.classes?.label]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                              createTextVNode(toDisplayString(props.label), 1)
                            ])
                          ]),
                          _: 3
                        }, 8, ["class"])) : createCommentVNode("", true),
                        unref(iconResolved) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "nui-autocomplete-icon"
                        }, [
                          renderSlot(_ctx.$slots, "icon", { iconName: unref(iconResolved) }, () => [
                            createVNode(_component_Icon, {
                              name: unref(iconResolved),
                              class: "nui-autocomplete-icon-inner"
                            }, null, 8, ["name"])
                          ])
                        ])) : createCommentVNode("", true),
                        unref(canClear) && (Array.isArray(unref(modelValue)) && unref(modelValue)?.length > 0 || !Array.isArray(unref(modelValue)) && unref(modelValue) != null) ? (openBlock(), createBlock("button", {
                          key: 2,
                          type: "button",
                          tabindex: "-1",
                          class: ["nui-autocomplete-clear", [props.classes?.icon, props.dropdown && "me-10"]],
                          onClick: clear
                        }, [
                          renderSlot(_ctx.$slots, "clear-icon", {}, () => [
                            createVNode(_component_Icon, {
                              name: props.clearIcon,
                              class: "nui-autocomplete-clear-inner"
                            }, null, 8, ["name"])
                          ])
                        ], 2)) : createCommentVNode("", true),
                        props.dropdown ? (openBlock(), createBlock(unref(ComboboxButton), {
                          key: 3,
                          class: "nui-autocomplete-clear nui-autocomplete-chevron"
                        }, {
                          default: withCtx(({ open }) => [
                            renderSlot(_ctx.$slots, "dropdown-icon", {}, () => [
                              createVNode(_component_Icon, {
                                name: props.dropdownIcon,
                                class: ["nui-autocomplete-clear-inner transition-transform duration-300", [props.classes?.icon, open && "rotate-180"]]
                              }, null, 8, ["name", "class"])
                            ])
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        props.loading ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "nui-autocomplete-placeload"
                        }, [
                          createVNode(_component_BasePlaceload, {
                            class: ["nui-placeload", props.icon && "ms-6"]
                          }, null, 8, ["class"])
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 3
                  }),
                  props.error && typeof props.error === "string" ? (openBlock(), createBlock(_component_BaseInputHelpText, {
                    key: 2,
                    color: "danger",
                    class: props.classes?.error
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.error), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true),
                  createVNode(unref(FloatContent), {
                    class: !props.fixed && "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ComboboxOptions), {
                        as: "div",
                        class: {
                          "nui-autocomplete-results": unref(filteredItems).length > 0 || !_ctx.hideCreatePrompt
                        }
                      }, {
                        default: withCtx(() => [
                          unref(filteredItems).length === 0 && unref(pending) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "nui-autocomplete-results-placeholder"
                          }, [
                            renderSlot(_ctx.$slots, "pending", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                              createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).pending), 1)
                            ])
                          ])) : unref(filteredItems).length === 0 && !_ctx.allowCreate ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "nui-autocomplete-results-placeholder"
                          }, [
                            renderSlot(_ctx.$slots, "empty", { query: unref(query), filteredItems: unref(filteredItems), pending: unref(pending), items: unref(items) }, () => [
                              createVNode("span", { class: "nui-autocomplete-results-placeholder-text text-sm" }, toDisplayString(unref(i18n).empty), 1)
                            ])
                          ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                            "start-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-autocomplete-results-header"
                            }, [
                              renderSlot(_ctx.$slots, "start-item", {
                                query: unref(query),
                                filteredItems: unref(filteredItems),
                                pending: unref(pending),
                                items: unref(items)
                              })
                            ])) : createCommentVNode("", true),
                            _ctx.allowCreate && unref(queryCreate) ? (openBlock(), createBlock(unref(ComboboxOption), {
                              key: 1,
                              value: unref(queryCreate),
                              class: _ctx.hideCreatePrompt ? "hidden" : "nui-autocomplete-results-item",
                              as: "div"
                            }, {
                              default: withCtx(({ active, selected }) => [
                                renderSlot(_ctx.$slots, "create-item", {
                                  query: unref(query),
                                  filteredItems: unref(filteredItems),
                                  pending: unref(pending),
                                  items: unref(items),
                                  active,
                                  selected
                                }, () => [
                                  createVNode(_component_BaseAutocompleteItem, {
                                    rounded: unref(rounded),
                                    item: {
                                      label: `Create '${unref(query)}'`,
                                      value: unref(query)
                                    },
                                    active,
                                    selected
                                  }, null, 8, ["rounded", "item", "active", "selected"])
                                ])
                              ]),
                              _: 3
                            }, 8, ["value", "class"])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredItems), (item) => {
                              return openBlock(), createBlock(unref(ComboboxOption), {
                                key: key(item),
                                class: "nui-autocomplete-results-item",
                                as: "div",
                                value: unref(modelModifiers).prop && props.properties?.value ? item[props.properties.value] : item
                              }, {
                                default: withCtx(({ active, selected }) => [
                                  renderSlot(_ctx.$slots, "item", {
                                    query: unref(query),
                                    filteredItems: unref(filteredItems),
                                    pending: unref(pending),
                                    items: unref(items),
                                    item,
                                    active,
                                    selected
                                  }, () => [
                                    createVNode(_component_BaseAutocompleteItem, {
                                      rounded: unref(rounded),
                                      item: _ctx.properties ? item : {
                                        label: unref(displayValueResolved)(item)
                                      },
                                      active,
                                      selected,
                                      properties: _ctx.properties
                                    }, null, 8, ["rounded", "item", "active", "selected", "properties"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128)),
                            "end-item" in _ctx.$slots ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "nui-autocomplete-results-footer"
                            }, [
                              renderSlot(_ctx.$slots, "end-item", {
                                query: unref(query),
                                filteredItems: unref(filteredItems),
                                pending: unref(pending),
                                items: unref(items)
                              })
                            ])) : createCommentVNode("", true)
                          ], 64))
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 8, ["onHide", "flip", "strategy", "placement", "adaptive-width"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseAutocomplete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
