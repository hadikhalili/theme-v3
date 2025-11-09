import { z as useNuiDefaultProperty, a as __nuxt_component_2, k as _sfc_main$x } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseSnack",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    icon: { default: void 0 },
    image: { default: void 0 },
    color: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  },
  emits: ["delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const color = useNuiDefaultProperty(props, "BaseSnack", "color");
    const size = useNuiDefaultProperty(props, "BaseSnack", "size");
    const sizes = {
      xs: "nui-snack-xs",
      sm: "nui-snack-sm",
      md: "nui-snack-md"
    };
    const colors = {
      default: "nui-snack-default",
      "default-contrast": "nui-snack-default-contrast",
      muted: "nui-snack-muted",
      "muted-contrast": "nui-snack-muted-contrast"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonClose = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-snack", [
          unref(size) && sizes[unref(size)],
          unref(color) && colors[unref(color)],
          props.icon || props.image ? "nui-has-media" : "",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if (props.icon && !props.image) {
        _push(`<div class="${ssrRenderClass([props.classes?.icon, "nui-snack-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-snack-icon-inner"
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else if (props.image && !props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes?.img, "nui-snack-image"])}"><img${ssrRenderAttr("src", props.image)} class="nui-snack-image-inner" alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="${ssrRenderClass([props.classes?.text, "nui-snack-text"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.label)}`);
      }, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        class: ["nui-snack-button", props.classes?.button],
        rounded: "full",
        size: unref(size),
        onClick: ($event) => emit("delete")
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseSnack.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
