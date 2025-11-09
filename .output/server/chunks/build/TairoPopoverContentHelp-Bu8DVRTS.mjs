import { _ as _sfc_main$1 } from './BaseIconBox-Cgm-LP3M.mjs';
import { a as __nuxt_component_2, b as _sfc_main$w, f as _sfc_main$C } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPopoverContentHelp",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    text: {},
    icon: {},
    iconColor: { default: "primary" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-col gap-1 p-4" }, _attrs))}><div class="relative mb-1"><div class="flex w-full">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        size: "xs",
        variant: "pastel",
        rounded: "none",
        mask: "blob",
        class: "dark:text-white",
        color: props.iconColor
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: props.icon,
              class: "size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: props.icon,
                class: "size-5"
              }, null, 8, ["name"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ms-2">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "xs",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.subtitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        lead: "snug",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.text), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPopoverContentHelp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
