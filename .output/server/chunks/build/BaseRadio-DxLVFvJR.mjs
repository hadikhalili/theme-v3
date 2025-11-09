import { z as useNuiDefaultProperty, y as useNinjaId, A as _sfc_main$E } from './server.mjs';
import { defineComponent, mergeModels, useModel, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderClass, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseRadio",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    value: { default: void 0 },
    id: { default: void 0 },
    label: { default: void 0 },
    error: { type: [String, Boolean], default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const color = useNuiDefaultProperty(props, "BaseRadio", "color");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const colors = {
      default: "nui-radio-default",
      muted: "nui-radio-muted",
      light: "nui-radio-light",
      dark: "nui-radio-dark",
      black: "nui-radio-black",
      primary: "nui-radio-primary",
      info: "nui-radio-info",
      success: "nui-radio-success",
      warning: "nui-radio-warning",
      danger: "nui-radio-danger"
    };
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
      const _component_BaseInputHelpText = _sfc_main$E;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-radio", [unref(color) && colors[unref(color)], props.classes?.wrapper]]
      }, _attrs))}><div class="nui-radio-outer"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(modelValue), props.value)
      }, _ctx.$attrs, {
        type: "radio",
        value: props.value,
        class: "nui-radio-input"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}><div class="${ssrRenderClass([props.classes?.inputBg, "nui-radio-inner"])}"></div><div class="${ssrRenderClass([props.classes?.inputDot, "nui-radio-dot"])}"></div></div><div class="nui-radio-label-wrapper">`);
      if (props.label || "default" in _ctx.$slots) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-radio-label-text"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(`<div class="nui-radio-error">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseRadio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
