import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPlaceholderMinimal",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    transparent: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["px-8 py-12 text-center", !props.transparent && "bg-muted-200 dark:bg-muted-800"]
      }, _attrs))}><div class="mx-auto w-full max-w-lg"><h3 class="font-heading text-muted-800 mb-2 text-lg dark:text-white">${ssrInterpolate(props.title)}</h3><p class="text-muted-500 font-sans">${ssrInterpolate(props.description)}</p></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPlaceholderMinimal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
