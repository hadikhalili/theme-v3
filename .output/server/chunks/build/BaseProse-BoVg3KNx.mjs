import { z as useNuiDefaultProperty } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseProse",
  __ssrInlineRender: true,
  props: {
    rounded: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const rounded = useNuiDefaultProperty(props, "BaseProse", "rounded");
    const radiuses = {
      none: "nui-prose-rounded-none",
      sm: "nui-prose-rounded-sm",
      md: "nui-prose-rounded-md",
      lg: "nui-prose-rounded-lg"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-prose", unref(rounded) && radiuses[unref(rounded)]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseProse.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
