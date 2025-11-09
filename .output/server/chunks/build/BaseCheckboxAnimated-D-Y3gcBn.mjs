import { useSSRContext, defineComponent, mergeModels, useModel, ref, computed, watchEffect, onScopeDispose, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { i as _export_sfc, y as useNinjaId, z as useNuiDefaultProperty } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 52 52"
  }, _attrs))}><circle cx="26" cy="26" r="25" fill="none" stroke="currentColor"></circle><path fill="none" stroke="currentColor" d="m14.1 27.2 7.1 7.2 16.7-16.8"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/icon/IconCheckCircle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseCheckboxAnimated",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    value: { default: void 0 },
    trueValue: { default: true },
    falseValue: { default: false },
    id: { default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({
      wrapper: [],
      label: [],
      input: []
    }) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const id = useNinjaId(() => props.id);
    const color = useNuiDefaultProperty(props, "BaseCheckboxAnimated", "color");
    const element = ref();
    const inputRef = ref();
    ref();
    const checked = computed(() => {
      if (modelValue.value === props.trueValue) {
        return true;
      }
      if (modelValue.value === props.falseValue) {
        return false;
      }
      return props.value === void 0 ? false : Array.isArray(modelValue.value) ? modelValue.value.includes(props.value) : modelValue.value === props.value;
    });
    const colors = {
      primary: "text-primary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      light: "text-light-100",
      muted: "text-muted-400",
      dark: "text-muted-900 dark:text-muted-100",
      black: "text-black dark:text-white"
    };
    const isChecked = ref(false);
    const isUnchecked = ref(true);
    const isOpaque = ref(false);
    watchEffect(() => {
      if (checked.value) {
        isChecked.value = true;
        isOpaque.value = true;
      } else {
        isUnchecked.value = true;
        isChecked.value = false;
      }
      onScopeDispose(() => {
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconCheckCircle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "element",
        ref: element,
        class: ["nui-focus block focus-within:outline-current", [
          unref(isChecked) ? "is-checked" : "",
          unref(isUnchecked) ? "is-unchecked" : "",
          props.classes?.wrapper
        ]]
      }, _attrs))} data-v-c8d70b82><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "checkbox",
        class: ["peer cursor-pointer disabled:cursor-not-allowed", props.classes?.input],
        "true-value": props.trueValue,
        "false-value": props.falseValue,
        checked: unref(checked),
        value: props.value
      }, _ctx.$attrs))} data-v-c8d70b82><label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([[unref(color) && colors[unref(color)], props.classes?.label], "peer-disabled:opacity-75"])}" data-v-c8d70b82><div class="${ssrRenderClass([unref(isOpaque) ? "is-opaque" : ""])}" data-v-c8d70b82></div>`);
      _push(ssrRenderComponent(_component_IconCheckCircle, null, null, _parent));
      _push(`</label></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseCheckboxAnimated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8d70b82"]]);

export { __nuxt_component_1 as _ };
