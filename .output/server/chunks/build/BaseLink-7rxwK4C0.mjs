import { a0 as defineNuxtLink } from './server.mjs';
import { defineComponent, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseLink",
  __ssrInlineRender: true,
  props: {
    to: { default: void 0 },
    href: { default: void 0 },
    external: { type: Boolean },
    replace: { type: Boolean },
    custom: { type: Boolean },
    target: { default: void 0 },
    rel: { default: void 0 },
    noRel: { type: Boolean },
    prefetch: { type: Boolean, default: void 0 },
    noPrefetch: { type: Boolean, default: void 0 },
    activeClass: { default: void 0 },
    exactActiveClass: { default: void 0 },
    ariaCurrentValue: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const NuxtLink = defineNuxtLink({});
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(NuxtLink)), mergeProps({ class: "nui-link" }, props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
