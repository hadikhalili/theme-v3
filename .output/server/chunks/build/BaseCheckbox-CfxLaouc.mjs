import { _ as __nuxt_component_0 } from './IconCheck--xcA1MPZ.mjs';
import { defineComponent, mergeModels, useModel, ref, watchEffect, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { z as useNuiDefaultProperty, y as useNinjaId, A as _sfc_main$E, i as _export_sfc } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 12h20"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/icon/IconIndeterminate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseCheckbox",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    value: { default: void 0 },
    trueValue: { default: true },
    falseValue: { default: false },
    id: { default: void 0 },
    label: { default: void 0 },
    error: { type: [String, Boolean], default: "" },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    color: { default: void 0 },
    rounded: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const color = useNuiDefaultProperty(props, "BaseCheckbox", "color");
    const rounded = useNuiDefaultProperty(props, "BaseCheckbox", "rounded");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const radiuses = {
      none: "",
      sm: "nui-checkbox-rounded-sm",
      md: "nui-checkbox-rounded-md",
      lg: "nui-checkbox-rounded-lg",
      full: "nui-checkbox-rounded-full"
    };
    const colors = {
      default: "nui-checkbox-default",
      muted: "nui-checkbox-muted",
      light: "nui-checkbox-light",
      dark: "nui-checkbox-dark",
      black: "nui-checkbox-black",
      primary: "nui-checkbox-primary",
      info: "nui-checkbox-info",
      success: "nui-checkbox-success",
      warning: "nui-checkbox-warning",
      danger: "nui-checkbox-danger"
    };
    watchEffect(() => {
      if (inputRef.value) {
        inputRef.value.indeterminate = props.indeterminate ?? false;
      }
    });
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconCheck = __nuxt_component_0;
      const _component_IconIndeterminate = __nuxt_component_1;
      const _component_BaseInputHelpText = _sfc_main$E;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-checkbox", [
          props.disabled && "opacity-50",
          unref(rounded) && radiuses[unref(rounded)],
          unref(color) && colors[unref(color)],
          props.classes?.wrapper
        ]]
      }, _attrs))}><div class="nui-checkbox-outer"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(modelValue), props.trueValue),
        value: props.value,
        "true-value": props.trueValue,
        "false-value": props.falseValue,
        class: props.classes?.input,
        disabled: props.disabled
      }, _ctx.$attrs, {
        class: "nui-checkbox-input",
        type: "checkbox"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}><div class="nui-checkbox-inner"></div>`);
      _push(ssrRenderComponent(_component_IconCheck, { class: "nui-icon-check" }, null, _parent));
      _push(ssrRenderComponent(_component_IconIndeterminate, { class: "nui-icon-indeterminate" }, null, _parent));
      _push(`</div><div class="nui-checkbox-label-wrapper">`);
      if (props.label || "default" in _ctx.$slots) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-checkbox-label-text"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<div class="nui-checkbox-error">`);
        _push(ssrRenderComponent(_component_BaseInputHelpText, { color: "danger" }, {
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseCheckbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
