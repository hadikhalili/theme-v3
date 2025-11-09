import { defineComponent, mergeModels, useModel, ref, mergeProps, unref, useSSRContext } from 'vue';
import { y as useNinjaId } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrLooseEqual, ssrGetDynamicModelProps, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseRadioHeadless",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    value: { default: void 0 },
    id: { default: void 0 },
    name: { default: void 0 },
    label: { default: void 0 }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
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
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-radio-headless relative" }, _attrs))}>`);
      if (_ctx.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm">${ssrInterpolate(props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative"><input${ssrRenderAttrs((_temp0 = mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        checked: ssrLooseEqual(unref(modelValue), props.value)
      }, _ctx.$attrs, {
        type: "radio",
        value: props.value,
        name: props.name,
        class: "peer absolute inset-0 z-20 size-full cursor-pointer appearance-none"
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { value: unref(modelValue) }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseRadioHeadless.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
