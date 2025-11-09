import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { i as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoCheckAnimated",
  __ssrInlineRender: true,
  props: {
    color: { default: "success" },
    size: { default: "md" }
  },
  setup(__props) {
    const props = __props;
    const strokeWidth = computed(() => {
      if (props.size === "xs" || props.size === "sm") {
        return "4";
      } else {
        return "2";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: ["nui-check-animated", [
          props.color === "info" && "text-info-500",
          props.color === "success" && "text-success-500",
          props.color === "primary" && "text-primary-500",
          props.color === "warning" && "text-warning-500",
          props.color === "danger" && "text-danger-500",
          props.size === "xs" && "size-8",
          props.size === "sm" && "size-10",
          props.size === "md" && "size-12",
          props.size === "lg" && "size-14"
        ]],
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 52 52",
        "stroke-miterlimit": "10",
        "stroke-width": unref(strokeWidth)
      }, _attrs))} data-v-beaa19ca><circle class="${ssrRenderClass([[
        props.color === "info" && "text-info-500",
        props.color === "success" && "text-success-500",
        props.color === "primary" && "text-primary-500"
      ], "nui-check-animated-circle"])}" cx="26" cy="26" r="25" fill="none" stroke-dasharray="166" stroke-dashoffset="166"${ssrRenderAttr("stroke-width", unref(strokeWidth))} stroke-miterlimit="10" data-v-beaa19ca></circle><path class="nui-check-animated-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-width="4" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" data-v-beaa19ca></path></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoCheckAnimated.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-beaa19ca"]]);

export { __nuxt_component_0 as _ };
