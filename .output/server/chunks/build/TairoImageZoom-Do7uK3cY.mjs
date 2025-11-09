import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderTeleport, ssrRenderComponent } from 'vue/server-renderer';
import { FocusTrap } from '@headlessui/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TairoImageZoom",
  __ssrInlineRender: true,
  props: {
    src: {},
    srcDark: {},
    zoomSrc: {},
    zoomSrcDark: {}
  },
  setup(__props) {
    const props = __props;
    ref({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    });
    ref(null);
    ref(null);
    const isZoomed = ref(false);
    const isUnzooming = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><a role="button" tabindex="0" class="${ssrRenderClass([[unref(isZoomed) ? "outline-none" : "nui-focus"], "block cursor-zoom-in"])}"><img${ssrRenderAttrs(mergeProps({
        class: "block w-full transition-all duration-300 dark:hidden",
        src: props.src
      }, _ctx.$attrs))}><img${ssrRenderAttrs(mergeProps({
        class: "hidden w-full transition-all duration-300 dark:block",
        src: props.srcDark || props.src
      }, _ctx.$attrs))}></a>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isZoomed)) {
          _push2(`<div role="button" tabindex="0" class="dark:bg-muted-900 fixed inset-0 z-[9999] bg-white"></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (unref(isZoomed) || unref(isUnzooming)) {
          _push2(`<a role="button" tabindex="0" class="fixed z-[99999] flex cursor-zoom-out select-none items-center justify-center transition-[height,width,top,left] duration-300">`);
          _push2(ssrRenderComponent(unref(FocusTrap), { class: "flex size-full items-center justify-center" }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttrs(mergeProps({
                  class: "nui-focus block max-h-full max-w-full object-contain dark:hidden",
                  src: props.zoomSrc || props.src
                }, _ctx.$attrs, { tabindex: "0" }))}${_scopeId}><img${ssrRenderAttrs(mergeProps({
                  class: "nui-focus hidden max-h-full max-w-full object-contain dark:block",
                  src: props.zoomSrcDark || props.srcDark || props.zoomSrc || props.src
                }, _ctx.$attrs, { tabindex: "0" }))}${_scopeId}>`);
              } else {
                return [
                  createVNode("img", mergeProps({
                    class: "nui-focus block max-h-full max-w-full object-contain dark:hidden",
                    src: props.zoomSrc || props.src
                  }, _ctx.$attrs, { tabindex: "0" }), null, 16, ["src"]),
                  createVNode("img", mergeProps({
                    class: "nui-focus hidden max-h-full max-w-full object-contain dark:block",
                    src: props.zoomSrcDark || props.srcDark || props.zoomSrc || props.src
                  }, _ctx.$attrs, { tabindex: "0" }), null, 16, ["src"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</a>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoImageZoom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
