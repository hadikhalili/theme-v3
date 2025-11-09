import { _ as __nuxt_component_0$3, v as __nuxt_component_0$1, c as _sfc_main$v, a as __nuxt_component_2, f as _sfc_main$C } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoNavigationTop",
  __ssrInlineRender: true,
  props: {
    title: {},
    closeLabel: { default: "\u0628\u0627\u0632\u06AF\u0634\u062A" },
    closeTo: { default: "/" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute start-0 top-0 w-full" }, _attrs))}><div class="mx-auto w-full max-w-6xl px-4"><div class="flex w-full items-center justify-between py-5"><div class="flex flex-1 items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-primary-500 hidden h-7 lg:block dark:text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogoText, { class: "text-primary-500 hidden h-7 lg:block dark:text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grow"><div class="flex w-full items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        weight: "medium",
        class: "text-muted-700 dark:text-muted-200"
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
      _push(`</div></div><div class="flex-1"><div class="flex items-center justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.closeTo,
        class: "group text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:x",
              class: "text-muted-800 dark:text-muted-500 dark:group-hover:text-muted-200 size-8 transition-colors duration-300"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400 dark:text-muted-400 dark:group-hover:text-muted-200 block transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.closeLabel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.closeLabel), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:x",
                class: "text-muted-800 dark:text-muted-500 dark:group-hover:text-muted-200 size-8 transition-colors duration-300"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                class: "text-muted-400 dark:text-muted-400 dark:group-hover:text-muted-200 block transition-colors duration-300"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.closeLabel), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoNavigationTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
