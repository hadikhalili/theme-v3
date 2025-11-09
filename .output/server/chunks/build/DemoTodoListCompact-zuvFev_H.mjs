import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-D-Y3gcBn.mjs';
import { b as _sfc_main$w, c as _sfc_main$v } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoTodoListCompact",
  __ssrInlineRender: true,
  props: {
    color: { default: "success" }
  },
  setup(__props) {
    const todos = [
      {
        id: 0,
        title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0622\u0642\u0627\u06CC \u0645\u0627\u0631\u06A9\u0633\u062A\u0631\u0648\u0645",
        description: "\u0628\u0631\u0631\u0633\u06CC \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645\u200C\u0647\u0627\u06CC \u0627\u0648\u0644\u06CC\u0647 \u067E\u0631\u0648\u0698\u0647",
        completed: true
      },
      {
        id: 1,
        title: "\u067E\u0627\u06CC\u0627\u0646 \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645\u200C\u0647\u0627",
        description: "\u0627\u0639\u0645\u0627\u0644 \u062A\u0645\u0627\u0645 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0634\u062F\u0647 \u0648 \u0627\u0646\u062A\u0634\u0627\u0631",
        completed: false
      },
      {
        id: 2,
        title: "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0628\u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u0632\u0645\u0627\u0646\u06CC",
        description: "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0628\u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u0632\u0645\u0627\u0646\u06CC \u062A\u0645\u0627\u0645 \u062A\u06CC\u0645",
        completed: false
      },
      {
        id: 3,
        title: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A",
        description: "\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06A9\u062A\u0648\u0631 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0634\u062A\u0631\u06CC",
        completed: false
      },
      {
        id: 4,
        title: "\u062A\u0627\u06CC\u06CC\u062F \u0645\u0624\u0644\u0641\u0647\u200C\u0647\u0627",
        description: "\u0628\u0631\u0631\u0633\u06CC \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u06A9\u0627\u0645\u0644",
        completed: true
      }
    ];
    const tasks = ref(["Option 0", "Option 1", "Option 2"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(todos, (task) => {
        _push(`<label class="text-muted-300 flex cursor-pointer items-center gap-3">`);
        _push(ssrRenderComponent(_component_BaseCheckboxAnimated, {
          modelValue: unref(tasks),
          "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
          color: "success",
          value: `Option ${task.id}`
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(task.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(task.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(task.description)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></label>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTodoListCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
