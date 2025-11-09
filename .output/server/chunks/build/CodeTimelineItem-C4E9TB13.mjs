import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-BTqzHIxV.mjs';
import './MDCSlot-Bm6IuY7a.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CodeTimelineItem",
  __ssrInlineRender: true,
  props: {
    step: {},
    vertical: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:before:highlight-white/5 before:text-muted-700 before:ring-muted-900/5 after:bg-muted-200 dark:before:bg-muted-950 dark:before:text-muted-200 dark:after:bg-muted-700 relative ms-1 grid grid-cols-6 gap-4 ps-9 before:absolute before:start-0 before:flex before:size-[calc(1.375rem+1px)] before:items-center before:justify-center before:rounded-md before:text-[0.625rem] before:font-bold before:shadow-sm before:ring-1 before:content-[counter(step)] after:absolute after:bottom-0 after:start-[0.6875rem] after:top-[calc(1.875rem+1px)] after:w-px dark:before:shadow-none dark:before:ring-0 [&::marker]:opacity-0", [props.vertical ? "" : "pb-8"]],
        style: `counter-increment: step ${props.step ?? 1};`
      }, _attrs))}><div class="${ssrRenderClass([props.vertical ? "col-span-6" : "col-span-6 mb-6 md:col-span-2 xl:mb-0"])}"><h3 class="text-muted-900 dark:text-muted-200 mb-2 mt-0 text-sm font-semibold leading-6">`);
      ssrRenderSlot(_ctx.$slots, "title", { unwrap: "p" }, null, _push, _parent);
      _push(`</h3><div class="text-sm"><p>`);
      ssrRenderSlot(_ctx.$slots, "description", { unwrap: "p" }, null, _push, _parent);
      _push(`</p></div></div><div class="${ssrRenderClass([[props.vertical ? "col-span-6" : "col-span-6 md:col-span-4 xl:ms-0"], "relative z-10 -ms-10"])}"><div class="-mt-6">`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/CodeTimelineItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
