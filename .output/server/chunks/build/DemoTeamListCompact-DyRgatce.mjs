import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-B-NRPykg.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoTeamListCompact",
  __ssrInlineRender: true,
  props: {
    actions: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const members = [
      {
        id: 0,
        firstName: "\u06A9\u0644\u0627\u0631\u06A9",
        lastName: "\u0627\u0633\u0645\u06CC\u062A",
        image: "/img/avatars/3.svg",
        text: "EC",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      },
      {
        id: 1,
        firstName: "\u0633\u0627\u0631\u0627",
        lastName: "\u06A9\u0648\u0646\u0648\u0631",
        image: void 0,
        text: "SC",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F"
      },
      {
        id: 2,
        firstName: "\u062A\u0627\u0631\u0627",
        lastName: "\u0633\u0648\u0646\u0633\u0648\u0646",
        image: "/img/avatars/4.svg",
        text: "TS",
        role: "\u0645\u0639\u0645\u0627\u0631 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631"
      },
      {
        id: 3,
        firstName: "\u0646\u0627\u0626\u0648\u0645\u06CC",
        lastName: "\u0644\u06CC\u0648\u0631\u0633\u06A9\u06CC",
        image: void 0,
        text: "NL",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(members, (member) => {
        _push(`<div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: member.image,
          text: member.text,
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(member.firstName)} ${ssrInterpolate(member.lastName.slice(0, 1))}.</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(member.firstName) + " " + toDisplayString(member.lastName.slice(0, 1)) + ".", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(member.role)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(member.role), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
        if (props.actions) {
          _push(`<div class="ms-auto flex items-center">`);
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            rounded: "lg",
            muted: "",
            class: "scale-75"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:phone-duotone",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:phone-duotone",
                    class: "size-5"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            rounded: "lg",
            muted: "",
            class: "scale-75"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:video-camera-duotone",
                  class: "size-5"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:video-camera-duotone",
                    class: "size-5"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTeamListCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
