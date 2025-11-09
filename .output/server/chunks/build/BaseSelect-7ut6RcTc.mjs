import { z as useNuiDefaultProperty, y as useNinjaId, w as __nuxt_component_0$2, a as __nuxt_component_2, A as _sfc_main$E } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './IconChevronDown-B9AzKHTY.mjs';
import { defineComponent, mergeModels, useModel, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    label: { default: "" },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    placeholder: { default: "" },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    colorFocus: { type: Boolean },
    error: { type: [String, Boolean], default: false },
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
    useModel(__props, "modelValue");
    const contrast = useNuiDefaultProperty(props, "BaseSelect", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseSelect", "rounded");
    const size = useNuiDefaultProperty(props, "BaseSelect", "size");
    const selectRef = ref();
    const id = useNinjaId(() => props.id);
    const radiuses = {
      none: "",
      sm: "nui-select-rounded-sm",
      md: "nui-select-rounded-md",
      lg: "nui-select-rounded-lg",
      full: "nui-select-rounded-full"
    };
    const sizes = {
      sm: "nui-select-sm",
      md: "nui-select-md",
      lg: "nui-select-lg"
    };
    const contrasts = {
      default: "nui-select-default",
      "default-contrast": "nui-select-default-contrast",
      muted: "nui-select-muted",
      "muted-contrast": "nui-select-muted-contrast"
    };
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: selectRef,
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_2;
      const _component_IconChevronDown = __nuxt_component_2$1;
      const _component_BaseInputHelpText = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-select-wrapper", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-select-error",
          props.loading && "nui-select-loading",
          props.labelFloat && "nui-select-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-select-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-select-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.outer, "nui-select-outer"])}"><select${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "selectRef",
        ref: selectRef
      }, _ctx.$attrs, {
        disabled: props.disabled,
        class: ["nui-select", props.classes?.select]
      }))}>`);
      if (unref(placeholder)) {
        _push(`<option value="" disabled hidden>${ssrInterpolate(unref(placeholder))}</option>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
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
        _push(`<div class="nui-select-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes?.icon, "nui-select-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            class: "nui-select-icon-inner",
            name: props.icon
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.chevron, "nui-select-chevron nui-chevron"])}">`);
      _push(ssrRenderComponent(_component_IconChevronDown, { class: "nui-select-chevron-inner" }, null, _parent));
      _push(`</div>`);
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
