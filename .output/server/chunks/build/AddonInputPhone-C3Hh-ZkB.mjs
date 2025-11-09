import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { Z as useAppConfig, F as useVModel, $ as useVirtualList, a as __nuxt_component_2, d as _sfc_main$D } from './server.mjs';
import { defineComponent, shallowRef, computed, ref, reactive, watch, onUnmounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, renderSlot, openBlock, createBlock, isRef, createVNode, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AddonInputPhone",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    country: { default: void 0 },
    format: { default: "international" },
    height: { default: 200 },
    itemHeight: { default: 47 },
    icon: { default: "ph:phone" },
    size: { default: "md" },
    rounded: { default: "sm" },
    error: { type: [String, Boolean], default: false },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "update:country", "validation"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    useAppConfig();
    const vmodel = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: ""
    });
    const vcountry = useVModel(props, "country", emits, {
      passive: true,
      defaultValue: void 0
    });
    const countriesMap = shallowRef({});
    const countries = computed(() => Object.values(countriesMap.value));
    const possibleCountries = shallowRef([]);
    const filter = ref("");
    const countriesFiltered = computed(() => {
      const source = possibleCountries.value.length > 0 ? possibleCountries.value.map((code) => countriesMap.value[code]) : countries.value;
      if (!filter.value) {
        return source;
      }
      return source.filter((country) => {
        return country.label.toLowerCase().includes(filter.value.toLowerCase()) || country.labelLocal.toLowerCase().includes(filter.value.toLowerCase()) || country.labelFa.toLowerCase().includes(filter.value.toLowerCase()) || country.code.toLowerCase().includes(filter.value.toLowerCase()) || country.callingCode.toLowerCase().includes(filter.value.toLowerCase());
      });
    });
    const currentCountry = computed(() => {
      if (!vcountry.value || !countriesMap.value) {
        return null;
      }
      return countriesMap.value[vcountry.value.toUpperCase()];
    });
    const internal = ref("");
    const dropdownRef = ref();
    const filterRef = ref();
    const inputRef = ref();
    const validation = reactive({
      valid: false,
      touched: false,
      error: ""
    });
    __expose({
      modelValue: vmodel,
      country: vcountry,
      validation,
      currentCountry,
      possibleCountries,
      filter,
      filterRef,
      dropdownRef,
      inputRef
    });
    const dropdownHeight = computed(() => {
      const maxHeight = props.height;
      const items = countriesFiltered.value.length;
      const height = Math.max(1, items) * props.itemHeight;
      return Math.min(height, maxHeight);
    });
    const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
      countriesFiltered,
      {
        itemHeight: props.itemHeight
      }
    );
    const handleInput = (value, touched = true) => {
      internal.value = value ?? "";
      validation.touched = touched;
      possibleCountries.value = [];
      try {
        formatInput(value);
      } catch (error) {
        validation.valid = false;
        validation.error = error instanceof Error ? error.message : "";
        emits("validation", validation);
      } finally {
        vmodel.value = internal.value;
      }
    };
    function selectCountry(country) {
      if (props.disabled)
        return;
      vcountry.value = country;
      handleInput(internal.value, validation.touched);
      setTimeout(() => {
        inputRef.value?.el?.focus();
      }, 100);
    }
    function formatInput(value) {
      {
        return;
      }
    }
    watch(filter, () => {
      scrollTo(0);
    });
    watch(
      () => props.modelValue,
      (value) => {
        if (value === internal.value) {
          return;
        }
        handleInput(value, validation.touched);
      },
      {
        immediate: true
      }
    );
    let focusTimeout;
    watch(filterRef, () => {
      if (filterRef.value) {
        clearTimeout(focusTimeout);
        focusTimeout = setTimeout(() => {
          filterRef.value?.el?.focus();
        }, 100);
      }
    });
    onUnmounted(() => {
      clearTimeout(focusTimeout);
    });
    const addonHeight = computed(() => {
      switch (props.size) {
        case "sm":
          return "h-8";
        case "lg":
          return "h-12";
        case "md":
        default:
          return "h-10";
      }
    });
    const addonTop = computed(() => {
      switch (props.size) {
        case "sm":
          return "top-[1.58rem]";
        case "lg":
          return "top-[1.7rem]";
        case "md":
        default:
          return "top-[1.5rem]";
      }
    });
    const iconSize = computed(() => {
      switch (props.size) {
        case "lg":
          return "w-6";
        case "sm":
        case "md":
        default:
          return "w-4";
      }
    });
    const inputStart = computed(() => {
      switch (props.size) {
        case "lg":
          return "!ps-[5rem]";
        case "sm":
        case "md":
        default:
          return "!ps-[4.5rem]";
      }
    });
    const dropdownBorder = computed(() => {
      switch (props.rounded) {
        case "sm":
          return "[&_.nui-text-button]:rounded-s";
        case "md":
          return "[&_.nui-text-button]:rounded-s-md";
        case "lg":
          return "[&_.nui-text-button]:rounded-s-xl";
        case "full":
          return "[&_.nui-text-button]:rounded-s-full";
        case "none":
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseDropdownItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex w-full" }, _attrs))}><div class="${ssrRenderClass([[
        unref(addonHeight),
        _ctx.$attrs.label && !("label-float" in _ctx.$attrs) ? unref(addonTop) : "top-0"
      ], "absolute start-0 flex items-center"])}">`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        ref_key: "dropdownRef",
        ref: dropdownRef,
        variant: "text",
        rounded: props.rounded,
        size: "lg",
        class: ["[&_.nui-text-button]:border-muted-200 text-muted-400 dark:[&_.nui-text-button]:border-muted-800 flex h-full [&_.nui-text-button]:relative [&_.nui-text-button]:z-10 [&_.nui-text-button]:size-full [&_.nui-text-button]:border-e [&_.nui-text-button]:pe-2 [&_.nui-text-button]:ps-4", unref(dropdownBorder)]
      }, {
        label: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "country-label", { modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry) }, () => {
              if (unref(currentCountry)?.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: unref(currentCountry).icon,
                  class: ["-mt-0.5", unref(iconSize)]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(currentCountry).code)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(currentCountry).code), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: props.icon,
                  class: ["-mt-0.5", [unref(iconSize), props.error ? "text-danger-500" : ""]]
                }, null, _parent2, _scopeId));
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "country-label", { modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry) }, () => [
                unref(currentCountry)?.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: unref(currentCountry).icon,
                  class: ["-mt-0.5", unref(iconSize)]
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(currentCountry).code), 1)
                  ]),
                  _: 1
                }, 8, ["name", "class"])) : (openBlock(), createBlock(_component_Icon, {
                  key: 1,
                  name: props.icon,
                  class: ["-mt-0.5", [unref(iconSize), props.error ? "text-danger-500" : ""]]
                }, null, 8, ["name", "class"]))
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              ref_key: "filterRef",
              ref: filterRef,
              modelValue: unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
              rounded: _ctx.rounded === "full" ? "lg" : _ctx.rounded,
              size: "sm",
              icon: "ph:magnifying-glass"
            }, null, _parent2, _scopeId));
            _push2(`<div${ssrRenderAttrs(mergeProps(unref(containerProps), {
              style: { height: `${unref(dropdownHeight)}px` },
              class: "nui-slimscroll !mt-2"
            }))}${_scopeId}><div${ssrRenderAttrs(unref(wrapperProps))}${_scopeId}>`);
            if (unref(list).length === 0) {
              _push2(`<div style="${ssrRenderStyle({ height: `${_ctx.itemHeight}px` })}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "country-placeholder", { modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry), selectCountry }, () => {
                _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                  title: "\u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647\u200C\u0627\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
                  text: "\u0633\u0639\u06CC \u06A9\u0646\u06CC\u062F \u0628\u0627 \u0646\u0627\u0645 \u06A9\u0634\u0648\u0631 \u06CC\u0627 \u06A9\u062F \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F",
                  rounded: props.rounded === "full" ? "lg" : props.rounded
                }, null, _parent2, _scopeId));
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(unref(list), ({ data }) => {
                _push2(`<div style="${ssrRenderStyle({ height: `${_ctx.itemHeight}px` })}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "country-item", { item: data, modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry), selectCountry }, () => {
                  _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                    title: data?.labelFa,
                    text: `+${data?.callingCode}`,
                    tabindex: 0,
                    rounded: props.rounded === "full" ? "lg" : props.rounded,
                    onClick: ($event) => selectCountry(data?.code),
                    onKeyboard: ($event) => selectCountry(data?.code)
                  }, {
                    start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<span class="me-1 size-6 shrink-0 text-center"${_scopeId2}>`);
                        if (data?.icon) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: data.icon,
                            class: "size-6"
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`${ssrInterpolate(data.code)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(data.code), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "me-1 size-6 shrink-0 text-center" }, [
                            data?.icon ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: data.icon,
                              class: "size-6"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(data.code), 1)
                              ]),
                              _: 2
                            }, 1032, ["name"])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        if (unref(vcountry) === data?.code) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ph:check",
                            class: "text-success-500 size-4 shrink-0"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                      } else {
                        return [
                          unref(vcountry) === data?.code ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "ph:check",
                            class: "text-success-500 size-4 shrink-0"
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_BaseInput, {
                ref_key: "filterRef",
                ref: filterRef,
                modelValue: unref(filter),
                "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
                rounded: _ctx.rounded === "full" ? "lg" : _ctx.rounded,
                size: "sm",
                icon: "ph:magnifying-glass"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rounded"]),
              createVNode("div", mergeProps(unref(containerProps), {
                style: { height: `${unref(dropdownHeight)}px` },
                class: "nui-slimscroll !mt-2"
              }), [
                createVNode("div", unref(wrapperProps), [
                  unref(list).length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    style: { height: `${_ctx.itemHeight}px` }
                  }, [
                    renderSlot(_ctx.$slots, "country-placeholder", { modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry), selectCountry }, () => [
                      createVNode(_component_BaseDropdownItem, {
                        title: "\u0647\u06CC\u0686 \u0646\u062A\u06CC\u062C\u0647\u200C\u0627\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
                        text: "\u0633\u0639\u06CC \u06A9\u0646\u06CC\u062F \u0628\u0627 \u0646\u0627\u0645 \u06A9\u0634\u0648\u0631 \u06CC\u0627 \u06A9\u062F \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F",
                        rounded: props.rounded === "full" ? "lg" : props.rounded
                      }, null, 8, ["rounded"])
                    ])
                  ], 4)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(list), ({ data }) => {
                    return openBlock(), createBlock("div", {
                      key: data?.code,
                      style: { height: `${_ctx.itemHeight}px` }
                    }, [
                      renderSlot(_ctx.$slots, "country-item", { item: data, modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry), selectCountry }, () => [
                        createVNode(_component_BaseDropdownItem, {
                          title: data?.labelFa,
                          text: `+${data?.callingCode}`,
                          tabindex: 0,
                          rounded: props.rounded === "full" ? "lg" : props.rounded,
                          onClick: ($event) => selectCountry(data?.code),
                          onKeyboard: withModifiers(($event) => selectCountry(data?.code), ["prevent"])
                        }, {
                          start: withCtx(() => [
                            createVNode("span", { class: "me-1 size-6 shrink-0 text-center" }, [
                              data?.icon ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: data.icon,
                                class: "size-6"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.code), 1)
                                ]),
                                _: 2
                              }, 1032, ["name"])) : createCommentVNode("", true)
                            ])
                          ]),
                          end: withCtx(() => [
                            unref(vcountry) === data?.code ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "ph:check",
                              class: "text-success-500 size-4 shrink-0"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["title", "text", "rounded", "onClick", "onKeyboard"])
                      ])
                    ], 4);
                  }), 128))
                ], 16)
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseInput, mergeProps({
        ref_key: "inputRef",
        ref: inputRef,
        "model-value": unref(internal),
        type: "tel",
        autocomplete: "tel",
        size: props.size,
        error: props.error,
        disabled: props.disabled,
        rounded: props.rounded,
        classes: { wrapper: "relative grow [&_.nui-input-placeload]:ms-16", input: `${unref(inputStart)} !pe-8`, icon: "!w-16" }
      }, _ctx.$attrs, {
        "onUpdate:modelValue": (value) => {
          handleInput(String(value));
        }
      }), null, _parent));
      ssrRenderSlot(_ctx.$slots, "action", { modelValue: unref(vmodel), country: unref(vcountry), validation: unref(validation), filter: unref(filter), currentCountry: unref(currentCountry), selectCountry }, () => {
        if (unref(validation).touched && unref(vmodel)) {
          _push(`<div class="${ssrRenderClass([[
            unref(addonHeight),
            _ctx.$attrs.label && !("label-float" in _ctx.$attrs) ? unref(addonTop) : "top-0"
          ], "border-muted-200 dark:border-muted-800 absolute end-0 z-[1] flex items-center pe-3"])}">`);
          if (unref(validation).valid) {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:check",
              class: ["text-success-500 shrink-0", unref(iconSize)]
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_Icon, {
              name: `ph:x`,
              class: ["text-danger-500 -mt-0.5", unref(iconSize)]
            }, null, _parent));
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonInputPhone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
