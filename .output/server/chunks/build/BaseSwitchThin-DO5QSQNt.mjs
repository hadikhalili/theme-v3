import { defineComponent, mergeModels, useModel, ref, mergeProps, unref, useSSRContext } from 'vue';
import { y as useNinjaId, z as useNuiDefaultProperty } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchThin",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": { type: Boolean },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const color = useNuiDefaultProperty(props, "BaseSwitchThin", "color");
    const colors = {
      primary: "nui-switch-thin-primary",
      info: "nui-switch-thin-info",
      success: "nui-switch-thin-success",
      warning: "nui-switch-thin-warning",
      danger: "nui-switch-thin-danger",
      dark: "nui-switch-thin-dark",
      black: "nui-switch-thin-black"
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
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-thin", [unref(color) && colors[unref(color)], props.classes?.wrapper]]
      }, _attrs))}><span class="${ssrRenderClass([props.classes?.outer, "nui-switch-thin-outer"])}"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(modelValue)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: ["nui-switch-thin-input peer", props.classes?.input]
      }))}><span class="${ssrRenderClass([props.classes?.handle, "nui-switch-thin-handle"])}"></span><span class="${ssrRenderClass([props.classes?.track, "nui-switch-thin-track"])}"></span></span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-thin-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-thin-dual-label"><span class="nui-switch-thin-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-thin-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchThin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
