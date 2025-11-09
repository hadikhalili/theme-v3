import { b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoVcardRight",
  __ssrInlineRender: true,
  props: {
    centered: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="${ssrRenderClass([props.centered && "flex-col-reverse", "mb-4 flex items-center"])}"><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "relaxed",
        class: ["text-muted-800 dark:text-white", props.centered && "text-center"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u0627\u06CC\u0627 \u0631.</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u0627\u06CC\u0627 \u0631.")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!props.centered) {
        _push(ssrRenderComponent(_component_BaseParagraph, { lead: "none" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-primary-500 text-xs"${_scopeId}>\u062F\u0641\u062A\u0631 \u0645\u0631\u06A9\u0632\u06CC \u062A\u0627\u06CC\u0631\u0648</span>`);
            } else {
              return [
                createVNode("span", { class: "text-primary-500 text-xs" }, "\u062F\u0641\u062A\u0631 \u0645\u0631\u06A9\u0632\u06CC \u062A\u0627\u06CC\u0631\u0648")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BaseParagraph, {
        lead: "none",
        class: props.centered && "text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400 text-xs"${_scopeId}>\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400 text-xs" }, "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 shrink-0"><div class="${ssrRenderClass([props.centered ? "w-16" : "w-12", "mx-auto"])}">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: props.centered ? "lg" : "md"
      }, null, _parent));
      _push(`</div></div></div><div class="mb-4 space-y-2 font-sans"><div class="${ssrRenderClass([props.centered && "justify-center", "flex items-end gap-2"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:map-pin-duotone",
        class: "text-primary-500 size-4"
      }, null, _parent));
      _push(`<span class="text-muted-400 text-xs">\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627</span></div><div class="${ssrRenderClass([props.centered && "justify-center", "flex items-end gap-2"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:phone-duotone",
        class: "text-primary-500 size-4"
      }, null, _parent));
      _push(`<span class="text-muted-400 text-xs">+1 444-751-5156</span></div></div><div class="border-muted-200 dark:border-muted-700 mt-auto flex items-end justify-between border-t pt-3"><a href="mailto:maya@eltheme.ir" class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"> maya@eltheme.ir </a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:envelope-duotone",
        class: "text-muted-400 size-4"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoVcardRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
