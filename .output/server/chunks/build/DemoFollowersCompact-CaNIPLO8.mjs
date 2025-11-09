import { b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFollowersCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const followers = [
      {
        "data-nui-tooltip": "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062B",
        "src": "/img/avatars/3.svg"
      },
      {
        "data-nui-tooltip": "\u062C\u0627\u0646 \u0631\u0627\u0648\u0646\u0631",
        "src": "/img/avatars/6.svg"
      },
      {
        "data-nui-tooltip": "Maggie Pitts",
        "src": "/img/avatars/9.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseAvatarGroup = _sfc_main$1;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "sm",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseAvatarGroup, {
        avatars: followers,
        size: "xs",
        limit: 3
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}> \u062E\u0628\u0631 \u062E\u0648\u0628! `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 underline-offset-2 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0644\u0627\u0631\u06A9 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0644\u0627\u0631\u06A9 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` , `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 underline-offset-2 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` \u0648 `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-primary-500 underline-offset-2 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u06AF\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0645\u06AF\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` \u0627\u06A9\u0646\u0648\u0646 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0646\u0628\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F. \u06A9\u0645\u06CC \u0648\u0642\u062A \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u0648 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, [
                createTextVNode(" \u062E\u0628\u0631 \u062E\u0648\u0628! "),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 underline-offset-2 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u06A9\u0644\u0627\u0631\u06A9 ")
                  ]),
                  _: 1
                }),
                createTextVNode(" , "),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 underline-offset-2 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062C\u0627\u0646 ")
                  ]),
                  _: 1
                }),
                createTextVNode(" \u0648 "),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "text-primary-500 underline-offset-2 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u06AF\u06CC ")
                  ]),
                  _: 1
                }),
                createTextVNode(" \u0627\u06A9\u0646\u0648\u0646 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0646\u0628\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F. \u06A9\u0645\u06CC \u0648\u0642\u062A \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u0648 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. ")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFollowersCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
