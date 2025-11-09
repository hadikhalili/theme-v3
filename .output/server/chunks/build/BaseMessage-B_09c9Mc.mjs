import { z as useNuiDefaultProperty, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseMessage",
  __ssrInlineRender: true,
  props: {
    message: { default: "" },
    icon: { type: [Boolean, String], default: false },
    defaultIcons: { default: void 0 },
    closeIcon: { default: "lucide:x" },
    closable: { type: Boolean },
    color: { default: void 0 },
    rounded: { default: void 0 },
    classes: { default: () => ({}) }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseMessage", "color");
    const rounded = useNuiDefaultProperty(props, "BaseMessage", "rounded");
    const icons = useNuiDefaultProperty(props, "BaseMessage", "defaultIcons");
    const radiuses = {
      none: "",
      sm: "nui-message-rounded-sm",
      md: "nui-message-rounded-md",
      lg: "nui-message-rounded-lg",
      full: "nui-message-rounded-full"
    };
    const colors = {
      default: "nui-message-default",
      "default-contrast": "nui-message-default-contrast",
      muted: "nui-message-muted",
      "muted-contrast": "nui-message-muted-contrast",
      primary: "nui-message-primary",
      info: "nui-message-info",
      success: "nui-message-success",
      warning: "nui-message-warning",
      danger: "nui-message-danger"
    };
    const icon = computed(
      () => typeof props.icon === "string" ? props.icon : color.value ? icons.value[color.value] : ""
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-message", [
          unref(rounded) && radiuses[unref(rounded)],
          unref(color) && colors[unref(color)],
          _ctx.classes?.wrapper,
          props.icon ? "nui-has-icon" : "nui-has-text"
        ]]
      }, _attrs))}>`);
      if (props.icon && unref(icon)) {
        _push(`<div class="${ssrRenderClass([_ctx.classes?.icon, "nui-message-icon-outer"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", { iconName: "icon" }, () => {
          if (unref(icon)) {
            _push(ssrRenderComponent(_component_Icon, {
              name: unref(icon),
              class: "nui-message-icon"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="${ssrRenderClass([_ctx.classes?.text, "nui-message-inner-text"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(props.message)}`);
      }, _push, _parent);
      _push(`</span>`);
      if (props.closable) {
        _push(`<div class="nui-message-close-wrapper"><button type="button" tabindex="0" class="${ssrRenderClass([[unref(rounded) && radiuses[unref(rounded)]], "nui-message-close"])}">`);
        ssrRenderSlot(_ctx.$slots, "close-button", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: _ctx.closeIcon,
            class: "nui-close-icon"
          }, null, _parent));
        }, _push, _parent);
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
