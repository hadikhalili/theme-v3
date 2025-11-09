import { z as useNuiDefaultProperty, Y as _sfc_main$H, b as _sfc_main$w, c as _sfc_main$v, i as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_2 } from './IconChevronDown-B9AzKHTY.mjs';
import { defineComponent, ref, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createVNode, renderSlot, withModifiers, createCommentVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/icon/IconPlus.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAccordion",
  __ssrInlineRender: true,
  props: {
    items: {},
    openItems: { default: () => [] },
    exclusive: { type: Boolean },
    action: { default: "dot" },
    color: { default: void 0 },
    dotColor: { default: void 0 },
    rounded: { default: void 0 },
    classes: { default: () => ({}) }
  },
  emits: ["open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const action = useNuiDefaultProperty(props, "BaseAccordion", "action");
    const color = useNuiDefaultProperty(props, "BaseAccordion", "color");
    const dotColor = useNuiDefaultProperty(props, "BaseAccordion", "dotColor");
    const rounded = useNuiDefaultProperty(props, "BaseAccordion", "rounded");
    const colors = {
      default: "nui-accordion-default",
      "default-contrast": "nui-accordion-default-contrast",
      muted: "nui-accordion-muted",
      "muted-contrast": "nui-accordion-muted-contrast"
    };
    const dotColors = {
      default: "nui-dot-default",
      primary: "nui-dot-primary",
      info: "nui-dot-info",
      success: "nui-dot-success",
      warning: "nui-dot-warning",
      danger: "nui-dot-danger",
      dark: "nui-dot-dark",
      black: "nui-dot-black"
    };
    const radiuses = {
      none: "",
      sm: "nui-accordion-rounded-sm",
      md: "nui-accordion-rounded-md",
      lg: "nui-accordion-rounded-lg"
    };
    const actions = {
      dot: "nui-accordion-dot",
      chevron: "nui-accordion-chevron",
      plus: "nui-accordion-plus"
    };
    const internalOpenItems = ref(props.openItems);
    const toggle = (key) => {
      const wasOpen = internalOpenItems.value.includes(key);
      if (props.exclusive) {
        internalOpenItems.value.splice(0, internalOpenItems.value.length);
        if (!wasOpen) {
          emits("open", props.items[key]);
          internalOpenItems.value.push(key);
        }
        return;
      }
      if (wasOpen) {
        internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1);
      } else {
        emits("open", props.items[key]);
        internalOpenItems.value.push(key);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$H;
      const _component_BaseHeading = _sfc_main$w;
      const _component_IconChevronDown = __nuxt_component_2;
      const _component_IconPlus = __nuxt_component_3;
      const _component_BaseParagraph = _sfc_main$v;
      _push(ssrRenderComponent(_component_BaseFocusLoop, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.items, (item, key) => {
              _push2(`<div class="${ssrRenderClass([[
                unref(rounded) && radiuses[unref(rounded)],
                unref(color) && colors[unref(color)],
                unref(dotColor) && dotColors[unref(dotColor)],
                unref(action) && actions[unref(action)],
                props.classes?.wrapper
              ], "nui-accordion"])}"${_scopeId}><details${ssrIncludeBooleanAttr(unref(internalOpenItems)?.includes(key) ?? void 0) ? " open" : ""} class="${ssrRenderClass([props.classes?.details, "nui-accordion-detail"])}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "accordion-item", {
                item,
                index: key,
                toggle
              }, () => {
                _push2(`<summary class="${ssrRenderClass([props.classes?.summary, "nui-accordion-summary"])}" tabindex="0"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "accordion-item-summary", {
                  item,
                  index: key,
                  toggle
                }, () => {
                  _push2(`<div class="${ssrRenderClass([props.classes?.header, "nui-accordion-header"])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "nui-accordion-header-inner"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.title), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  if (props.action === "dot" || unref(action) === "dot") {
                    _push2(`<div class="nui-accordion-dot"${_scopeId}></div>`);
                  } else if (props.action === "chevron" || unref(action) === "chevron") {
                    _push2(`<div class="nui-icon-outer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_IconChevronDown, { class: "nui-chevron-icon" }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else if (props.action === "plus" || unref(action) === "plus") {
                    _push2(`<div class="nui-icon-outer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_IconPlus, { class: "nui-plus-icon" }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                }, _push2, _parent2, _scopeId);
                _push2(`</summary><div class="${ssrRenderClass([props.classes?.content, "nui-accordion-content"])}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "accordion-item-content", {
                  item,
                  index: key,
                  toggle
                }, () => {
                  _push2(ssrRenderComponent(_component_BaseParagraph, {
                    size: "sm",
                    lead: "tight"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.content)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.content), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</details></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, key) => {
                return openBlock(), createBlock("div", {
                  key,
                  class: ["nui-accordion", [
                    unref(rounded) && radiuses[unref(rounded)],
                    unref(color) && colors[unref(color)],
                    unref(dotColor) && dotColors[unref(dotColor)],
                    unref(action) && actions[unref(action)],
                    props.classes?.wrapper
                  ]]
                }, [
                  createVNode("details", {
                    open: unref(internalOpenItems)?.includes(key) ?? void 0,
                    class: ["nui-accordion-detail", props.classes?.details]
                  }, [
                    renderSlot(_ctx.$slots, "accordion-item", {
                      item,
                      index: key,
                      toggle
                    }, () => [
                      createVNode("summary", {
                        class: ["nui-accordion-summary", props.classes?.summary],
                        tabindex: "0",
                        onClick: withModifiers(() => toggle(key), ["prevent"])
                      }, [
                        renderSlot(_ctx.$slots, "accordion-item-summary", {
                          item,
                          index: key,
                          toggle
                        }, () => [
                          createVNode("div", {
                            class: ["nui-accordion-header", props.classes?.header]
                          }, [
                            createVNode(_component_BaseHeading, {
                              as: "h4",
                              size: "sm",
                              weight: "medium",
                              lead: "none",
                              class: "nui-accordion-header-inner"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            props.action === "dot" || unref(action) === "dot" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-accordion-dot"
                            })) : props.action === "chevron" || unref(action) === "chevron" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "nui-icon-outer"
                            }, [
                              createVNode(_component_IconChevronDown, { class: "nui-chevron-icon" })
                            ])) : props.action === "plus" || unref(action) === "plus" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "nui-icon-outer"
                            }, [
                              createVNode(_component_IconPlus, { class: "nui-plus-icon" })
                            ])) : createCommentVNode("", true)
                          ], 2)
                        ])
                      ], 10, ["onClick"]),
                      createVNode("div", {
                        class: ["nui-accordion-content", props.classes?.content]
                      }, [
                        renderSlot(_ctx.$slots, "accordion-item-content", {
                          item,
                          index: key,
                          toggle
                        }, () => [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            lead: "tight"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.content), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ], 2)
                    ])
                  ], 10, ["open"])
                ], 2);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseAccordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
