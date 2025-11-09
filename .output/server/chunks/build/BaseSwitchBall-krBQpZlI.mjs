import { _ as __nuxt_component_0 } from './IconCheck--xcA1MPZ.mjs';
import { defineComponent, mergeModels, useModel, ref, mergeProps, unref, useSSRContext } from 'vue';
import { y as useNinjaId, z as useNuiDefaultProperty } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseSwitchBall",
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
    const color = useNuiDefaultProperty(props, "BaseSwitchBall", "color");
    const colors = {
      primary: "nui-switch-ball-primary",
      info: "nui-switch-ball-info",
      success: "nui-switch-ball-success",
      warning: "nui-switch-ball-warning",
      danger: "nui-switch-ball-danger",
      dark: "nui-switch-ball-dark",
      black: "nui-switch-ball-black"
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
      const _component_IconCheck = __nuxt_component_0;
      _push(`<label${ssrRenderAttrs(mergeProps({
        for: unref(id),
        class: ["nui-switch-ball", [unref(color) && colors[unref(color)], props.classes?.wrapper]]
      }, _attrs))}><span class="${ssrRenderClass([props.classes?.outer, "nui-switch-ball-outer"])}"><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: unref(modelValue)
      }, _ctx.$attrs, {
        type: "checkbox",
        class: ["nui-switch-ball-input peer", props.classes?.input]
      }))}><span class="${ssrRenderClass([props.classes?.handle, "nui-switch-ball-handle"])}"></span><span class="${ssrRenderClass([props.classes?.track, "nui-switch-ball-track"])}"></span>`);
      _push(ssrRenderComponent(_component_IconCheck, {
        class: ["nui-switch-ball-icon", props.classes?.icon]
      }, null, _parent));
      _push(`</span>`);
      if (!props.sublabel) {
        _push(`<span class="nui-switch-ball-single-label">${ssrInterpolate(props.label)}</span>`);
      } else {
        _push(`<span class="nui-switch-ball-dual-label"><span class="nui-switch-ball-label">${ssrInterpolate(props.label)}</span><span class="nui-switch-ball-sublabel">${ssrInterpolate(props.sublabel)}</span></span>`);
      }
      _push(`</label>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseSwitchBall.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
