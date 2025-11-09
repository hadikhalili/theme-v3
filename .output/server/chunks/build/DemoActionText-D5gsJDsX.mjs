import { b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoActionText",
  __ssrInlineRender: true,
  props: {
    title: {},
    text: {},
    label: {},
    to: {},
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["bg-muted-200 dark:bg-muted-800 p-6", [
          props.rounded === "sm" ? "rounded-md" : "",
          props.rounded === "md" ? "rounded-lg" : "",
          props.rounded === "lg" ? "rounded-xl" : ""
        ]]
      }, _attrs))}><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mb-2 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: props.to,
        rounded: props.rounded,
        color: "primary",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoActionText.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
