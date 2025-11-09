import { i as _export_sfc, z as useNuiDefaultProperty } from './server.mjs';
import { useSSRContext, defineComponent, computed, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseProgressCircle",
  __ssrInlineRender: true,
  props: {
    value: { default: 0 },
    max: { default: 100 },
    size: { default: 60 },
    thickness: { default: 4 },
    animation: { type: [Boolean, Number], default: 2 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseProgressCircle", "color");
    const percent = computed(() => {
      const { value, max } = props;
      if (max === 0) {
        return 0;
      }
      return value / max * 100;
    });
    const dasharray = computed(() => {
      return `${percent.value} 100`;
    });
    const duration = computed(() => {
      if (props.animation === false) {
        return "0s";
      }
      const maxDuration = props.animation === true ? 2 : props.animation;
      const ratio = percent.value / 100;
      return ratio ? `${Math.round(maxDuration * ratio * 10) / 10}s` : "0s";
    });
    const colors = {
      light: "text-muted-500 dark:text-muted-400",
      dark: "text-muted-900 dark:text-muted-100",
      black: "text-black dark:text-white",
      primary: "text-primary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--65b841ba": unref(duration),
        "--7388fea1": unref(dasharray)
      } };
      _push(`<svg${ssrRenderAttrs(mergeProps({
        role: "progressbar",
        "aria-valuenow": props.value,
        "aria-valuemax": props.max,
        class: ["block", props.classes?.wrapper],
        viewBox: "0 0 45 45",
        width: props.size,
        height: props.size
      }, _attrs, _cssVars))} data-v-42c67875><circle class="${ssrRenderClass([props.classes?.track, "text-muted-200 dark:text-muted-700 stroke-current"])}"${ssrRenderAttr("stroke-width", props.thickness)} fill="none" cx="50%" cy="50%" r="15.91549431" data-v-42c67875></circle><circle class="${ssrRenderClass([[unref(color) && colors[unref(color)], props.classes?.progress], "circle-value stroke-current transition-all duration-500"])}"${ssrRenderAttr("stroke-width", props.thickness)}${ssrRenderAttr("stroke-dasharray", `${unref(percent)},100`)} stroke-linecap="round" fill="none" cx="50%" cy="50%" r="15.91549431" data-v-42c67875></circle></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseProgressCircle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42c67875"]]);

export { __nuxt_component_0 as _ };
