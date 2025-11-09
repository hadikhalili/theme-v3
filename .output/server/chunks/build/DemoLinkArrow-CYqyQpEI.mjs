import { _ as __nuxt_component_0$3, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoLinkArrow",
  __ssrInlineRender: true,
  props: {
    label: { default: "" },
    to: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.to,
        class: "text-primary-500 hover:text-primary-400 group inline-flex items-center gap-2 transition-colors duration-300"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-sans text-sm font-medium underline-offset-4 group-hover:underline"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`${ssrInterpolate(props.label)}`);
            }, _push2, _parent2, _scopeId);
            _push2(`</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "size-4 transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "font-sans text-sm font-medium underline-offset-4 group-hover:underline" }, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(props.label), 1)
                ])
              ]),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "size-4 transition-transform duration-300 ltr:group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoLinkArrow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
