import { z as useNuiDefaultProperty, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseFullscreenDropfile",
  __ssrInlineRender: true,
  props: {
    label: { default: "Drop your files" },
    icon: { default: "" },
    filterFileDropped: { type: Function, default: () => true },
    color: { default: void 0 }
  },
  emits: ["drop"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseFullscreenDropfile", "color");
    const isDropping = ref(false);
    const colors = {
      primary: "nui-dropfile-primary",
      dark: "nui-dropfile-dark",
      black: "nui-dropfile-black"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-fullscreen-dropfile", unref(color) && colors[unref(color)]]
      }, _attrs))}>`);
      if (unref(isDropping)) {
        _push(`<div class="nui-fullscreen-dropfile-outer"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(isDropping) ? null : { display: "none" })}" class="nui-fullscreen-dropfile-inner">`);
      if (unref(isDropping)) {
        _push(`<div class="nui-fullscreen-dropfile-container"><div class="nui-fullscreen-dropfile-content">`);
        if (props.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-fullscreen-dropfile-icon"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="nui-fullscreen-dropfile-label">${ssrInterpolate(props.label)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseFullscreenDropfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
