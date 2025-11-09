import { z as useNuiDefaultProperty, y as useNinjaId, w as __nuxt_component_0$2, a as __nuxt_component_2, A as _sfc_main$E } from './server.mjs';
import { defineComponent, mergeModels, useModel, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInputNumber",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    min: { default: void 0 },
    max: { default: void 0 },
    step: { default: 1 },
    id: { default: void 0 },
    type: { default: "text" },
    inputmode: { default: void 0 },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    placeholder: { default: void 0 },
    error: { type: [String, Boolean], default: false },
    iconDecrement: { default: "lucide:minus" },
    iconIncrement: { default: "lucide:plus" },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    contrast: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    function looseToNumber(val) {
      const n = Number.parseFloat(val);
      return Number.isNaN(n) ? val : n;
    }
    const [modelValue, modelModifiers] = useModel(__props, "modelValue", {
      set(value) {
        return looseToNumber(value);
      }
    });
    const contrast = useNuiDefaultProperty(props, "BaseInputNumber", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseInputNumber", "rounded");
    const size = useNuiDefaultProperty(props, "BaseInputNumber", "size");
    const radiuses = {
      none: "",
      sm: "nui-input-number-rounded-sm",
      md: "nui-input-number-rounded-md",
      lg: "nui-input-number-rounded-lg",
      full: "nui-input-number-rounded-full"
    };
    const sizes = {
      sm: "nui-input-number-sm",
      md: "nui-input-number-md",
      lg: "nui-input-number-lg"
    };
    const contrasts = {
      default: "nui-input-number-default",
      "default-contrast": "nui-input-number-default-contrast",
      muted: "nui-input-number-muted",
      "muted-contrast": "nui-input-number-muted-contrast"
    };
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The internal id of the radio input.
       */
      id
    });
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    const floatPrecision = computed(() => {
      if (!Number.isFinite(props.step) || Number.isNaN(props.step))
        return 0;
      let exp = 1;
      let precision = 0;
      while (Math.round(props.step * exp) / exp !== props.step) {
        exp *= 10;
        precision++;
      }
      return precision;
    });
    computed(() => 10 ** floatPrecision.value);
    computed(() => Math.abs(props.step));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInputHelpText = _sfc_main$E;
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-number-wrapper", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-input-number-error",
          props.loading && "nui-input-number-loading",
          props.labelFloat && "nui-input-number-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-input-number-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-input-number-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.outer, "nui-input-number-outer"])}"><div>`);
      if (unref(modelModifiers).lazy) {
        _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
          id: unref(id),
          ref_key: "inputRef",
          ref: inputRef,
          type: props.type
        }, _ctx.$attrs, {
          class: ["nui-input-number", props.classes?.input],
          placeholder: unref(placeholder),
          inputmode: props.inputmode,
          disabled: props.disabled
        }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
      } else {
        _push(`<input${ssrRenderAttrs((_temp1 = mergeProps({
          id: unref(id),
          ref_key: "inputRef",
          ref: inputRef,
          type: props.type
        }, _ctx.$attrs, {
          class: ["nui-input-number", props.classes?.input],
          placeholder: unref(placeholder),
          inputmode: props.inputmode,
          disabled: props.disabled
        }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, unref(modelValue)))))}>`);
      }
      if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-input-number-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes?.icon, "nui-input-number-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-input-number-icon-inner"
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.buttons, "nui-input-number-buttons"])}"><button type="button" aria-label="Decrement"${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.iconDecrement
      }, null, _parent));
      _push(`</button><button type="button" aria-label="Increment"${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: props.iconIncrement
      }, null, _parent));
      _push(`</button></div></div></div>`);
      if (props.error && typeof props.error === "string") {
        _push(ssrRenderComponent(_component_BaseInputHelpText, {
          color: "danger",
          class: props.classes?.error
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.error)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.error), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseInputNumber.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
