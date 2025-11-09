import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { z as useNuiDefaultProperty } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseAvatarGroup",
  __ssrInlineRender: true,
  props: {
    avatars: {},
    limit: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const sizes = {
      xxs: "nui-avatar-group-xxs",
      xs: "nui-avatar-group-xs",
      sm: "nui-avatar-group-sm",
      md: "nui-avatar-group-md",
      lg: "nui-avatar-group-lg",
      xl: "nui-avatar-group-lg",
      "2xl": "nui-avatar-group-lg",
      "3xl": "nui-avatar-group-lg",
      "4xl": "nui-avatar-group-lg"
    };
    const size = useNuiDefaultProperty(props, "BaseAvatarGroup", "size");
    const limit = useNuiDefaultProperty(props, "BaseAvatarGroup", "limit");
    const avatarDisplay = computed(() => {
      if (props.avatars && limit.value !== void 0 && props.avatars.length > limit.value) {
        return props.avatars.slice(0, limit.value - 1);
      }
      return props.avatars;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-avatar-group", [unref(size) && sizes[unref(size)], props.classes?.wrapper]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<!--[-->`);
        ssrRenderList(unref(avatarDisplay), (avatar) => {
          _push(`<div class="${ssrRenderClass([props.classes?.outer, "nui-avatar-outer"])}">`);
          _push(ssrRenderComponent(_component_BaseAvatar, mergeProps(typeof avatar === "string" ? { src: avatar } : avatar, {
            size: props.size,
            rounded: "full",
            tabindex: "0",
            class: "bg-primary-500/20 text-primary-500 !scale-90"
          }), null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(limit) !== void 0 && _ctx.avatars.length > unref(limit)) {
          _push(`<div class="${ssrRenderClass([props.classes?.count, "nui-avatar-count"])}"><div class="nui-avatar-count-inner"><span class="nui-avatar-count-text"> +${ssrInterpolate(_ctx.avatars.length - unref(limit) + 1)}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseAvatarGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
