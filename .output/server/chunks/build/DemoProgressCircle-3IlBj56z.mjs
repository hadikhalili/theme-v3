import { b as _sfc_main$w, c as _sfc_main$v, d as _sfc_main$D, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext, shallowRef, ref, computed, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as __nuxt_component_0 } from './BaseProgressCircle-CfqQZLPv.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoInfoBadges",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    image: {},
    badgeSmall: { default: void 0 },
    badgeMedium: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative mb-4"><img class="mx-auto size-48 rounded-full"${ssrRenderAttr("src", props.image)}${ssrRenderAttr("alt", props.title)}><img class="dark:border-muted-800 absolute start-2 top-2 size-14 rounded-full border-2 border-white"${ssrRenderAttr("src", props.badgeSmall)}${ssrRenderAttr("alt", props.title)}><img class="dark:border-muted-800 absolute bottom-2 end-2 size-16 rounded-full border-2 border-white"${ssrRenderAttr("src", props.badgeMedium)}${ssrRenderAttr("alt", props.title)}></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoInfoBadges.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoTeamSearchCompact",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const members = shallowRef([
      {
        id: 0,
        firstName: "\u0647\u0631\u0645\u0627\u0646",
        lastName: "\u0645\u0627\u06CC\u0631",
        image: "/img/avatars/16.svg",
        text: "HM",
        role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647"
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
        firstName: "\u06A9\u0646\u062F\u0631\u0627",
        lastName: "\u0648\u06CC\u0644\u0633\u0648\u0646",
        image: "/img/avatars/10.svg",
        text: "KW",
        role: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634"
      },
      {
        id: 3,
        firstName: "\u062C\u0627\u0646",
        lastName: "\u0628\u06A9\u0633\u062A\u0631",
        image: "/img/avatars/11.svg",
        text: "JB",
        role: "\u0633\u0648\u067E\u0631\u0648\u0627\u06CC\u0632\u0631 \u062A\u06CC\u0645"
      },
      {
        id: 10,
        firstName: "\u0622\u0645\u0644\u06CC\u0627",
        lastName: "\u0627\u0633\u0645\u06CC\u062B",
        image: "/img/avatars/12.svg",
        text: "AS",
        role: "\u0645\u062F\u06CC\u0631 \u0646\u06CC\u0631\u0648\u06CC \u0627\u0646\u0633\u0627\u0646\u06CC"
      }
    ]);
    const filter = ref("");
    const filteredMembers = computed(() => {
      if (!filter.value) {
        return members.value;
      }
      const filterRe = new RegExp(filter.value, "i");
      return members.value.filter((item) => {
        return [item.firstName, item.lastName, item.role].some(
          (item2) => item2.match(filterRe)
        );
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-1" }, _attrs))}><div class="relative mb-4">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(filter),
        "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
        icon: "lucide:search",
        placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0627\u0639\u0636\u0627\u06CC \u062A\u06CC\u0645...",
        rounded: props.rounded
      }, null, _parent));
      _push(`</div>`);
      if (unref(filteredMembers).length === 0) {
        _push(`<div><div class="flex flex-col items-center py-10 text-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "pepicons-print:person",
          class: "text-primary-500 size-10"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "md",
          weight: "medium",
          lead: "tight"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F</span>`);
            } else {
              return [
                createVNode("span", null, "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400 mx-auto max-w-[240px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}> \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u062A\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0627\u0632 \u06A9\u0644\u0645\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. </span>`);
            } else {
              return [
                createVNode("span", null, " \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u062A\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0627\u0632 \u06A9\u0644\u0645\u0627\u062A \u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u062A\u0644\u0641 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(filteredMembers), (member) => {
          _push(`<div class="${ssrRenderClass([[
            props.rounded === "sm" ? "rounded-md" : "",
            props.rounded === "md" ? "rounded-lg" : "",
            props.rounded === "lg" ? "rounded-xl" : "",
            props.rounded === "full" ? "rounded-full" : ""
          ], "hover:bg-muted-100 focus-within:bg-muted-100 dark:hover:bg-muted-700/70 dark:focus-within:bg-muted-700/70 group flex items-center gap-3 p-2"])}">`);
          _push(ssrRenderComponent(_component_BaseAvatar, {
            src: member.image,
            text: member.text,
            size: "xs",
            class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 ms-1 shrink-0"
          }, null, _parent));
          _push(`<div>`);
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h4",
            size: "xs",
            weight: "light",
            lead: "tight",
            class: "text-muted-800 dark:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(member.firstName)} ${ssrInterpolate(member.lastName.slice(0, 1))}. </span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(member.firstName) + " " + toDisplayString(member.lastName.slice(0, 1)) + ". ", 1)
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
          _push(`</div><div class="ms-auto flex -translate-x-1 items-center opacity-0 transition-all duration-300 group-focus-within:translate-x-0 group-focus-within:opacity-100 group-hover:translate-x-0 group-hover:opacity-100">`);
          _push(ssrRenderComponent(_component_BaseButtonIcon, {
            to: "#",
            rounded: props.rounded,
            muted: "",
            class: "scale-75"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "rtl:rotate-180 size-4"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "rtl:rotate-180 size-4"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTeamSearchCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoProgressCircle",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    image: {},
    value: { default: 0 },
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseProgressCircle = __nuxt_component_0;
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseProgressCircle, {
        value: props.value,
        size: 140,
        max: 100,
        thickness: 1,
        class: "text-primary-500"
      }, null, _parent));
      _push(`<div class="absolute start-1/2 top-1/2 size-16 -translate-y-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: props.image,
        size: "lg"
      }, null, _parent));
      _push(`</div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoProgressCircle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
