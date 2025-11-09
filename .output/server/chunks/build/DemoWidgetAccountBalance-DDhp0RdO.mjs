import { i as _export_sfc, h as _sfc_main$u, b as _sfc_main$w, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './DemoChartAreaBalance-BPxKKcSf.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseCard = _sfc_main$u;
  const _component_BaseHeading = _sfc_main$w;
  const _component_Icon = __nuxt_component_2;
  const _component_DemoChartAreaBalance = _sfc_main$1;
  _push(ssrRenderComponent(_component_BaseCard, mergeProps({ rounded: "md" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col gap-4 px-8 pt-8 text-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          lead: "none",
          class: "text-muted-400 uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0645\u0648\u062C\u0648\u062F\u06CC \u0627\u06A9\u0627\u0646\u062A `);
            } else {
              return [
                createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u0627\u06A9\u0627\u0646\u062A ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<p${_scopeId}><span class="text-muted-800 font-sans text-4xl font-medium dark:text-white"${_scopeId}> 9,543.12 <small class="text-xl"${_scopeId}>\u062A\u0648\u0645\u0627\u0646</small></span></p><div class="flex items-center justify-center gap-x-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Icon, {
          name: "lucide:arrow-up",
          class: "iconify text-success-500 size-4"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-muted-400 font-sans text-sm"${_scopeId}> \u06F1\u06F4\u06F9.\u06F3\u06F2 \u062A\u0648\u0645\u0627\u0646 \u0627\u0645\u0631\u0648\u0632\u060C \u06F2\u06F5 \u0634\u0647\u0631\u06CC\u0648\u0631 </span></div></div>`);
        _push2(ssrRenderComponent(_component_DemoChartAreaBalance, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "flex flex-col gap-4 px-8 pt-8 text-center" }, [
            createVNode(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "none",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u0627\u06A9\u0627\u0646\u062A ")
              ]),
              _: 1
            }),
            createVNode("p", null, [
              createVNode("span", { class: "text-muted-800 font-sans text-4xl font-medium dark:text-white" }, [
                createTextVNode(" 9,543.12 "),
                createVNode("small", { class: "text-xl" }, "\u062A\u0648\u0645\u0627\u0646")
              ])
            ]),
            createVNode("div", { class: "flex items-center justify-center gap-x-2" }, [
              createVNode(_component_Icon, {
                name: "lucide:arrow-up",
                class: "iconify text-success-500 size-4"
              }),
              createVNode("span", { class: "text-muted-400 font-sans text-sm" }, " \u06F1\u06F4\u06F9.\u06F3\u06F2 \u062A\u0648\u0645\u0627\u0646 \u0627\u0645\u0631\u0648\u0632\u060C \u06F2\u06F5 \u0634\u0647\u0631\u06CC\u0648\u0631 ")
            ])
          ]),
          createVNode(_component_DemoChartAreaBalance)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetAccountBalance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as _ };
