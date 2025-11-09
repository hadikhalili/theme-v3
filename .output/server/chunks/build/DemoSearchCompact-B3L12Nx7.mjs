import { d as _sfc_main$D } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoSearchCompact",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const search = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="relative flex w-full items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(search),
        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
        icon: "lucide:search",
        placeholder: "\u062C\u0633\u062A\u062C\u0648",
        rounded: props.rounded,
        classes: {
          wrapper: "w-full",
          input: "pe-24 !bg-muted-100 dark:!bg-muted-700 focus:!bg-white dark:focus:!bg-muted-900"
        }
      }, null, _parent));
      _push(`<button type="button" class="${ssrRenderClass([[
        props.rounded === "sm" ? "rounded" : "",
        props.rounded === "md" ? "rounded-md" : "",
        props.rounded === "lg" ? "rounded-lg" : ""
      ], "bg-primary-500 absolute end-1 top-1 inline-flex h-8 items-center justify-center px-4 font-sans text-sm text-white"])}"><span>\u0628\u0631\u0648</span></button></div><div class="mt-2 flex flex-wrap gap-2"><span class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"> #\u0627\u0631\u0648\u067E\u0627 </span><span class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"> #\u0622\u0633\u06CC\u0627 </span><span class="text-muted-500 dark:text-muted-400 bg-muted-200 dark:bg-muted-700/40 inline-flex h-6 items-center justify-center rounded-full px-3 font-sans text-xs font-medium"> #\u0622\u0645\u0631\u06CC\u06A9\u0627 </span></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoSearchCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
