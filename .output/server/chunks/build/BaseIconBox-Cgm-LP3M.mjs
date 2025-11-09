import { z as useNuiDefaultProperty } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseIconBox",
  __ssrInlineRender: true,
  props: {
    mask: { default: void 0 },
    bordered: { type: Boolean, default: false },
    color: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseIconBox", "color");
    const rounded = useNuiDefaultProperty(props, "BaseIconBox", "rounded");
    const size = useNuiDefaultProperty(props, "BaseIconBox", "size");
    const variant = useNuiDefaultProperty(props, "BaseIconBox", "variant");
    const radiuses = {
      none: "",
      sm: "nui-box-rounded-sm",
      md: "nui-box-rounded-md",
      lg: "nui-box-rounded-lg",
      full: "nui-box-rounded-full"
    };
    const sizes = {
      xs: "nui-box-xs",
      sm: "nui-box-sm",
      md: "nui-box-md",
      lg: "nui-box-lg",
      xl: "nui-box-xl",
      "2xl": "nui-box-2xl"
    };
    const variants = {
      solid: "nui-box-solid",
      pastel: "nui-box-pastel",
      outline: "nui-box-outline"
    };
    const colors = {
      none: "",
      default: "nui-box-default",
      "default-contrast": "nui-box-default-contrast",
      muted: "nui-box-muted",
      "muted-contrast": "nui-box-muted-contrast",
      light: "nui-box-light",
      dark: "nui-box-dark",
      black: "nui-box-black",
      primary: "nui-box-primary",
      info: "nui-box-info",
      success: "nui-box-success",
      warning: "nui-box-warning",
      danger: "nui-box-danger"
    };
    const masks = {
      hex: "nui-mask nui-mask-hex",
      hexed: "nui-mask nui-mask-hexed",
      deca: "nui-mask nui-mask-deca",
      blob: "nui-mask nui-mask-blob",
      diamond: "nui-mask nui-mask-diamond"
    };
    const classes = computed(() => [
      "nui-icon-box",
      props.bordered && "nui-box-bordered",
      rounded.value && radiuses[rounded.value],
      size.value && sizes[size.value],
      variant.value && variants[variant.value],
      color.value && colors[color.value],
      rounded.value === "none" && props.mask && masks[props.mask]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseIconBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
