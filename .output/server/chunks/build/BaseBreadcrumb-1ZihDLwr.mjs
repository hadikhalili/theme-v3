import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { z as useNuiDefaultProperty, j as useRoute, u as useRouter, _ as __nuxt_component_0$3, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, renderSlot, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseBreadcrumb",
  __ssrInlineRender: true,
  props: {
    items: { default: void 0 },
    color: { default: void 0 },
    classes: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseBreadcrumb", "color");
    const route = useRoute();
    const router = useRouter();
    const items = computed(() => {
      if (props.items) {
        return props.items;
      }
      const breadcrumbItems = [];
      const indexRoute = router.resolve("/");
      if (indexRoute.meta.breadcrumb === false)
        ;
      else if (indexRoute.meta.breadcrumb) {
        const breadcrumbItem = indexRoute.meta.breadcrumb;
        breadcrumbItems.push({
          to: indexRoute.path,
          ...breadcrumbItem
        });
      } else if (indexRoute.meta.title) {
        breadcrumbItems.push({
          label: indexRoute.meta.title,
          to: indexRoute.path
        });
      }
      for (const matched of route.matched) {
        if (matched.meta.breadcrumb === false)
          ;
        else if (matched.meta.breadcrumb) {
          const breadcrumbItem = matched.meta.breadcrumb;
          breadcrumbItems.push({
            to: matched.path,
            ...breadcrumbItem
          });
        } else if (matched.meta.title) {
          breadcrumbItems.push({
            label: matched.meta.title,
            to: matched.path
          });
        }
      }
      return breadcrumbItems;
    });
    const colors = {
      primary: "nui-breadcrumb-primary",
      dark: "nui-breadcrumb-dark",
      black: "nui-breadcrumb-black"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["nui-breadcrumb", [unref(color) && colors[unref(color)], props.classes?.wrapper]]
      }, _attrs))}><ul class="${ssrRenderClass([props.classes?.list, "nui-breadcrumb-list"])}"><li class="nui-breadcrumb-item-mobile">`);
      _push(ssrRenderComponent(_component_BaseDropdown, {
        variant: "context",
        size: "md",
        class: props.classes?.dropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items).slice(0, unref(items).length - 1), (item, index) => {
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                key: index,
                to: item.to,
                class: "flex items-center gap-x-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items).slice(0, unref(items).length - 1), (item, index) => {
                return openBlock(), createBlock(_component_BaseDropdownItem, {
                  key: index,
                  to: item.to,
                  class: "flex items-center gap-x-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(items), (item, index) => {
        _push(`<!--[--><li class="${ssrRenderClass([[
          index !== unref(items).length - 1 ? "hidden sm:flex" : "flex",
          props.classes?.item
        ], "nui-breadcrumb-item"])}">`);
        ssrRenderSlot(_ctx.$slots, "link", { item, index }, () => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.to,
            class: ["nui-item-inner", [item.to && "nui-has-link"]]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "icon", { item, index }, () => {
                  if (item.icon) {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: item.icon,
                      class: ["nui-item-icon", item.iconClasses]
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                ssrRenderSlot(_ctx.$slots, "label", { item, index }, () => {
                  _push2(`<span class="${ssrRenderClass([item.hideLabel && "sr-only"])}"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
                }, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "icon", { item, index }, () => [
                    item.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: item.icon,
                      class: ["nui-item-icon", item.iconClasses]
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ]),
                  renderSlot(_ctx.$slots, "label", { item, index }, () => [
                    createVNode("span", {
                      class: [item.hideLabel && "sr-only"]
                    }, toDisplayString(item.label), 3)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        }, _push, _parent);
        _push(`</li><li class="nui-breadcrumb-item"><div class="nui-item-inner">`);
        if (index < unref(items).length - 1) {
          _push(`<span class="nui-item-text">`);
          ssrRenderSlot(_ctx.$slots, "default", {}, () => {
            _push(`\xB7`);
          }, _push, _parent);
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li><!--]-->`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseBreadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
