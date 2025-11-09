import { _ as __nuxt_component_0$3, a as __nuxt_component_2, b as _sfc_main$w } from './server.mjs';
import { _ as _sfc_main$2 } from './TairoImageZoom-Do7uK3cY.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoVideoCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoImageZoom = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "#",
        class: "group flex w-full gap-4"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative shrink-0"${_scopeId}><div class="${ssrRenderClass([
              "h-24 w-20 overflow-hidden",
              props.shape === "rounded" ? "rounded" : "",
              props.shape === "curved" ? "rounded-lg" : ""
            ])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoImageZoom, {
              src: "/img/illustrations/dashboards/hobbies/hobby-3.svg",
              alt: "\u062A\u0635\u0648\u06CC\u0631 \u0648\u06CC\u062C\u062A",
              class: [
                "object-cover object-top",
                props.shape === "rounded" ? "rounded" : "",
                props.shape === "curved" ? "rounded-lg" : ""
              ]
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="pointer-events-none absolute start-1/2 top-1/2 -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2"${_scopeId}><button type="button" class="border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex size-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:round-play-arrow",
              class: "group-hover:text-primary-500 size-5 text-white"
            }, null, _parent2, _scopeId));
            _push2(`</button></div></div><div class="flex flex-col"${_scopeId}><p class="text-primary-500 my-1 font-sans text-xs uppercase"${_scopeId}> \u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u06CC\u0644\u0645\u200C\u0647\u0627 </p>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "tight"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0631\u062F\u06CC \u06A9\u0647 \u0646\u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A \u0628\u0627 \u0627\u0633\u0628\u200C\u0647\u0627 \u0635\u062D\u0628\u062A \u06A9\u0646\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0631\u062F\u06CC \u06A9\u0647 \u0646\u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A \u0628\u0627 \u0627\u0633\u0628\u200C\u0647\u0627 \u0635\u062D\u0628\u062A \u06A9\u0646\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:eye",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u06F3\u06F8\u06F6\u06F2 \u0628\u0627\u0632\u062F\u06CC\u062F</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative shrink-0" }, [
                createVNode("div", {
                  class: [
                    "h-24 w-20 overflow-hidden",
                    props.shape === "rounded" ? "rounded" : "",
                    props.shape === "curved" ? "rounded-lg" : ""
                  ]
                }, [
                  createVNode(_component_TairoImageZoom, {
                    src: "/img/illustrations/dashboards/hobbies/hobby-3.svg",
                    alt: "\u062A\u0635\u0648\u06CC\u0631 \u0648\u06CC\u062C\u062A",
                    class: [
                      "object-cover object-top",
                      props.shape === "rounded" ? "rounded" : "",
                      props.shape === "curved" ? "rounded-lg" : ""
                    ]
                  }, null, 8, ["class"])
                ], 2),
                createVNode("div", { class: "pointer-events-none absolute start-1/2 top-1/2 -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2" }, [
                  createVNode("button", {
                    type: "button",
                    class: "border-primary-500 bg-primary-500 dark:group-hover:bg-muted-800 flex size-10 items-center justify-center rounded-full border-2 transition-colors duration-300 group-hover:bg-white"
                  }, [
                    createVNode(_component_Icon, {
                      name: "ic:round-play-arrow",
                      class: "group-hover:text-primary-500 size-5 text-white"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "flex flex-col" }, [
                createVNode("p", { class: "text-primary-500 my-1 font-sans text-xs uppercase" }, " \u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u06CC\u0644\u0645\u200C\u0647\u0627 "),
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "medium",
                  lead: "tight"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0645\u0631\u062F\u06CC \u06A9\u0647 \u0646\u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A \u0628\u0627 \u0627\u0633\u0628\u200C\u0647\u0627 \u0635\u062D\u0628\u062A \u06A9\u0646\u062F")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "text-muted-400 mt-auto flex items-center gap-2 font-sans text-xs" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:eye",
                    class: "size-4"
                  }),
                  createVNode("span", null, "\u06F3\u06F8\u06F6\u06F2 \u0628\u0627\u0632\u062F\u06CC\u062F")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoVideoCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoInboxMessage",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" },
    name: { default: void 0 },
    picture: { default: void 0 },
    title: { default: void 0 },
    text: { default: void 0 },
    time: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mail",
        class: "text-muted-400 size-4"
      }, null, _parent));
      _push(`<div class="absolute -end-1 top-0.5"><span class="relative flex size-2"><span class="bg-primary-400 absolute inline-flex size-full animate-ping rounded-full opacity-75"></span><span class="bg-primary-500 relative inline-flex size-2 rounded-full"></span></span></div></div></div><div class="mb-4 flex items-center gap-2">`);
      if (props.picture) {
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: props.picture,
          alt: props.name
        }, null, _parent));
      } else {
        _push(`<div class="bg-muted-100 dark:bg-muted-700/80 flex size-10 shrink-0 items-center justify-center rounded-full">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:user-duotone",
          class: "text-muted-400 size-4"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"> \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 <span class="text-muted-800 dark:text-muted-100">${ssrInterpolate(props.name)}</span></span></div><div class="${ssrRenderClass([[
        props.shape === "rounded" ? "rounded" : "",
        props.shape === "curved" ? "rounded-lg" : ""
      ], "border-muted-200 dark:border-muted-700 border p-3"])}"><div class="mb-4 flex items-center gap-2"><div class="bg-success-500 size-2 shrink-0 rounded-full"></div><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm">${ssrInterpolate(props.title)}</h3></div><div class="mb-2"><p class="text-muted-500 dark:text-muted-400 font-sans text-xs">${ssrInterpolate(props.text)}</p></div><p class="text-muted-400 font-sans text-xs">${ssrInterpolate(props.time)} \u067E\u06CC\u0634 </p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoInboxMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
