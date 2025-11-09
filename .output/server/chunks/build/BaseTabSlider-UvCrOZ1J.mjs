import { defineComponent, mergeModels, useModel, computed, mergeProps, unref, useSSRContext } from 'vue';
import { z as useNuiDefaultProperty } from './server.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTabSlider",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    tabs: {},
    color: { default: void 0 },
    justify: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {
      default: null
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const color = useNuiDefaultProperty(props, "BaseTabSlider", "color");
    const justify = useNuiDefaultProperty(props, "BaseTabSlider", "justify");
    const rounded = useNuiDefaultProperty(props, "BaseTabSlider", "rounded");
    const size = useNuiDefaultProperty(props, "BaseTabSlider", "size");
    const justifies = {
      start: "",
      center: "nui-tabs-centered",
      end: "nui-tabs-end"
    };
    const sizes = {
      sm: "nui-tabs-sm",
      md: "nui-tabs-md"
    };
    const radiuses = {
      none: "",
      sm: "nui-tabs-rounded-sm",
      md: "nui-tabs-rounded-md",
      lg: "nui-tabs-rounded-lg",
      full: "nui-tabs-rounded-full"
    };
    const colors = {
      default: "nui-tabs-default",
      "default-contrast": "nui-tabs-default-contrast",
      primary: "nui-tabs-primary",
      light: "nui-tabs-light",
      dark: "nui-tabs-dark",
      black: "nui-tabs-black"
    };
    const tabsLength = computed(() => Math.min(3, Math.max(2, props.tabs.length)));
    const lengthStyle = computed(
      () => tabsLength.value === 2 ? "nui-tabs-two-slots" : "nui-tabs-three-slots"
    );
    function toggle(value) {
      modelValue.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-tab-slider", [
          unref(color) && colors[unref(color)],
          unref(justify) && justifies[unref(justify)],
          unref(rounded) && radiuses[unref(rounded)],
          unref(size) && sizes[unref(size)],
          unref(lengthStyle),
          props.classes?.wrapper
        ]]
      }, _attrs))}><div class="${ssrRenderClass([props.classes?.inner, "nui-tab-slider-inner"])}"><div class="${ssrRenderClass([props.classes?.track, "nui-tab-slider-track"])}"><!--[-->`);
      ssrRenderList(_ctx.tabs.slice(0, unref(tabsLength)), (tab, index) => {
        _push(`<button type="button" class="${ssrRenderClass([[
          unref(modelValue) === tab.value && "nui-active",
          props.classes?.item
        ], "nui-tab-slider-item"])}">${ssrInterpolate(tab?.label ?? tab?.value)}</button>`);
      });
      _push(`<!--]--><div style="${ssrRenderStyle(unref(modelValue) ? null : { display: "none" })}" class="nui-tab-slider-naver"></div></div></div><div class="${ssrRenderClass([props.classes?.content, "nui-tab-content"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {
        activeValue: unref(modelValue),
        toggle
      }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseTabSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
