import { z as useNuiDefaultProperty, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeModels, useModel, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseTabs",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    tabs: {},
    hideLabel: { type: Boolean },
    color: { default: void 0 },
    justify: { default: void 0 },
    type: { default: void 0 },
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
    const color = useNuiDefaultProperty(props, "BaseTabs", "color");
    const justify = useNuiDefaultProperty(props, "BaseTabs", "justify");
    const type = useNuiDefaultProperty(props, "BaseTabs", "type");
    const justifies = {
      start: "",
      center: "nui-tabs-centered",
      end: "nui-tabs-end"
    };
    const types = {
      tabs: "nui-tab-item",
      box: "nui-pill-item"
    };
    const colors = {
      default: "nui-tabs-default",
      primary: "nui-tabs-primary",
      light: "nui-tabs-light",
      dark: "nui-tabs-dark",
      black: "nui-tabs-black"
    };
    function toggle(value) {
      modelValue.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-tabs", [
          unref(justify) && justifies[unref(justify)],
          unref(color) && colors[unref(color)],
          props.type === "tabs" && "nui-tabs-bordered",
          props.classes?.wrapper
        ]]
      }, _attrs))}><div class="${ssrRenderClass([props.classes?.inner, "nui-tabs-inner"])}"><!--[-->`);
      ssrRenderList(_ctx.tabs, (tab, key) => {
        _push(`<a class="${ssrRenderClass([[
          unref(type) && types[unref(type)],
          unref(modelValue) === tab.value && "nui-active",
          tab.icon && "nui-has-icon",
          props.classes?.item
        ], "nui-tabs"])}" tabindex="0">`);
        if (tab.icon) {
          ssrRenderSlot(_ctx.$slots, "icon", {
            iconName: tab.icon,
            toggle
          }, () => {
            _push(ssrRenderComponent(_component_Icon, {
              name: tab.icon,
              class: "me-1 block size-5"
            }, null, _parent));
          }, _push, _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="${ssrRenderClass([
          props.type === "box" && tab.icon && "text-[.85rem]",
          props.type === "box" && !tab.icon && "text-sm",
          props.type === "tabs" && "text-sm"
        ])}">${ssrInterpolate(tab.label)}</span></a>`);
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([props.classes?.content, "relative block"])}">`);
      ssrRenderSlot(_ctx.$slots, "tab", {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
