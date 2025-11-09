import { defineComponent, computed, unref, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Float } from '@headlessui-float/vue';
import { Popover, PopoverButton, PopoverPanel, FocusTrap } from '@headlessui/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoPopover",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" },
    size: { default: "md" },
    orientation: { default: "start" },
    fixed: { type: Boolean, default: false },
    placement: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const placementValue = computed(() => {
      if (props.placement) {
        return props.placement;
      }
      return props.orientation === "end" ? "bottom-end" : "bottom-start";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Popover), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Float), {
              enter: "transition-all duration-200 ease-out",
              "enter-from": "translate-y-1 opacity-0",
              "enter-to": "translate-y-0 opacity-100",
              leave: "transition duration-150 ease-in",
              "leave-from": "translate-y-0 opacity-100",
              "leave-to": "translate-y-1 opacity-0",
              "tailwindcss-origin-class": "",
              offset: 10,
              strategy: props.fixed ? "fixed" : "absolute",
              placement: unref(placementValue),
              "adaptive-width": props.fixed,
              "z-index": 20
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PopoverButton), {
                    class: "group inline-flex cursor-pointer font-sans focus:outline-none",
                    as: "div"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(PopoverPanel), {
                    class: ["absolute z-10 mt-3 w-screen", [
                      props.size === "sm" && "max-w-[240px]",
                      props.size === "md" && "max-w-xs",
                      props.orientation === "start" && "-start-3",
                      props.orientation === "end" && "-end-3"
                    ]]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(FocusTrap), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="${ssrRenderClass([[
                                props.orientation === "start" && "after:start-6",
                                props.orientation === "end" && "after:end-6"
                              ], "border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:size-4 after:rotate-[-135deg] after:border-b after:border-e after:bg-white after:content-['']"])}"${_scopeId4}>`);
                              ssrRenderSlot(_ctx.$slots, "content", {}, null, _push5, _parent5, _scopeId4);
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  class: ["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:size-4 after:rotate-[-135deg] after:border-b after:border-e after:bg-white after:content-['']", [
                                    props.orientation === "start" && "after:start-6",
                                    props.orientation === "end" && "after:end-6"
                                  ]]
                                }, [
                                  renderSlot(_ctx.$slots, "content")
                                ], 2)
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(FocusTrap), null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: ["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:size-4 after:rotate-[-135deg] after:border-b after:border-e after:bg-white after:content-['']", [
                                  props.orientation === "start" && "after:start-6",
                                  props.orientation === "end" && "after:end-6"
                                ]]
                              }, [
                                renderSlot(_ctx.$slots, "content")
                              ], 2)
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(PopoverButton), {
                      class: "group inline-flex cursor-pointer font-sans focus:outline-none",
                      as: "div"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }),
                    createVNode(unref(PopoverPanel), {
                      class: ["absolute z-10 mt-3 w-screen", [
                        props.size === "sm" && "max-w-[240px]",
                        props.size === "md" && "max-w-xs",
                        props.orientation === "start" && "-start-3",
                        props.orientation === "end" && "-end-3"
                      ]]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(FocusTrap), null, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: ["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:size-4 after:rotate-[-135deg] after:border-b after:border-e after:bg-white after:content-['']", [
                                props.orientation === "start" && "after:start-6",
                                props.orientation === "end" && "after:end-6"
                              ]]
                            }, [
                              renderSlot(_ctx.$slots, "content")
                            ], 2)
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Float), {
                enter: "transition-all duration-200 ease-out",
                "enter-from": "translate-y-1 opacity-0",
                "enter-to": "translate-y-0 opacity-100",
                leave: "transition duration-150 ease-in",
                "leave-from": "translate-y-0 opacity-100",
                "leave-to": "translate-y-1 opacity-0",
                "tailwindcss-origin-class": "",
                offset: 10,
                strategy: props.fixed ? "fixed" : "absolute",
                placement: unref(placementValue),
                "adaptive-width": props.fixed,
                "z-index": 20
              }, {
                default: withCtx(() => [
                  createVNode(unref(PopoverButton), {
                    class: "group inline-flex cursor-pointer font-sans focus:outline-none",
                    as: "div"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }),
                  createVNode(unref(PopoverPanel), {
                    class: ["absolute z-10 mt-3 w-screen", [
                      props.size === "sm" && "max-w-[240px]",
                      props.size === "md" && "max-w-xs",
                      props.orientation === "start" && "-start-3",
                      props.orientation === "end" && "-end-3"
                    ]]
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(FocusTrap), null, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: ["border-muted-200 after:border-muted-200 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 dark:after:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 relative w-full rounded-lg border bg-white shadow-xl after:absolute after:-top-2 after:size-4 after:rotate-[-135deg] after:border-b after:border-e after:bg-white after:content-['']", [
                              props.orientation === "start" && "after:start-6",
                              props.orientation === "end" && "after:end-6"
                            ]]
                          }, [
                            renderSlot(_ctx.$slots, "content")
                          ], 2)
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 8, ["strategy", "placement", "adaptive-width"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPopover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
