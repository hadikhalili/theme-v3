import { i as _export_sfc, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v } from './server.mjs';
import { _ as _sfc_main$1 } from './DemoLinkArrow-CYqyQpEI.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

const _imports_0 = publicAssetsURL("/img/illustrations/ui/invest.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseCard = _sfc_main$u;
  const _component_BaseHeading = _sfc_main$w;
  const _component_BaseParagraph = _sfc_main$v;
  const _component_DemoLinkArrow = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-6" }, _attrs))}><div class="col-span-12 md:col-span-8">`);
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "lg",
    class: "relative flex flex-col gap-4 overflow-hidden sm:flex-row"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col p-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          weight: "medium",
          size: "lg",
          class: "text-muted-800 dark:text-muted-100 mb-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F `);
            } else {
              return [
                createTextVNode(" \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400 mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. \u0628\u064F\u0631\u06A9 \u0647\u0646\u0648\u0632 \u0647\u0645 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u061B \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0647\u06CC\u0686 \u0627\u062D\u0645\u0642\u06CC \u062E\u0648\u0634\u0628\u062E\u062A \u0646\u06CC\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. \u0628\u064F\u0631\u06A9 \u0647\u0646\u0648\u0632 \u0647\u0645 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u061B \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0647\u06CC\u0686 \u0627\u062D\u0645\u0642\u06CC \u062E\u0648\u0634\u0628\u062E\u062A \u0646\u06CC\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="mb-1 mt-auto"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_DemoLinkArrow, {
          to: "#",
          label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="flex h-44 w-full shrink-0 items-center justify-center sm:w-1/2"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="xs:-bottom-48 xs:start-5 ptablet:top-4 ltablet:w-72 ltablet:object-cover absolute h-full w-auto object-contain object-top sm:end-0 sm:top-0 sm:w-64 lg:w-72 lg:object-cover" alt="\u062A\u0635\u0648\u06CC\u0631 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col p-6" }, [
            createVNode(_component_BaseHeading, {
              as: "h3",
              weight: "medium",
              size: "lg",
              class: "text-muted-800 dark:text-muted-100 mb-2"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
              ]),
              _: 1
            }),
            createVNode(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400 mb-4"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. \u0628\u064F\u0631\u06A9 \u0647\u0646\u0648\u0632 \u0647\u0645 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u061B \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0647\u06CC\u0686 \u0627\u062D\u0645\u0642\u06CC \u062E\u0648\u0634\u0628\u062E\u062A \u0646\u06CC\u0633\u062A. ")
              ]),
              _: 1
            }),
            createVNode("div", { class: "mb-1 mt-auto" }, [
              createVNode(_component_DemoLinkArrow, {
                to: "#",
                label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
              })
            ])
          ]),
          createVNode("div", { class: "flex h-44 w-full shrink-0 items-center justify-center sm:w-1/2" }, [
            createVNode("img", {
              src: _imports_0,
              class: "xs:-bottom-48 xs:start-5 ptablet:top-4 ltablet:w-72 ltablet:object-cover absolute h-full w-auto object-contain object-top sm:end-0 sm:top-0 sm:w-64 lg:w-72 lg:object-cover",
              alt: "\u062A\u0635\u0648\u06CC\u0631 \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-span-12 md:col-span-4">`);
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "lg",
    class: "relative flex h-full flex-col gap-4 sm:flex-row"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col p-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          weight: "medium",
          size: "lg",
          class: "text-muted-800 dark:text-muted-100 mb-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0628\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u061F `);
            } else {
              return [
                createTextVNode(" \u0628\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400 mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. \u0628\u064F\u0631\u06A9 \u0647\u0646\u0648\u0632 \u0647\u0645 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u061B \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0647\u06CC\u0686 \u0627\u062D\u0645\u0642\u06CC \u062E\u0648\u0634\u0628\u062E\u062A \u0646\u06CC\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. \u0628\u064F\u0631\u06A9 \u0647\u0646\u0648\u0632 \u0647\u0645 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u061B \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0647\u06CC\u0686 \u0627\u062D\u0645\u0642\u06CC \u062E\u0648\u0634\u0628\u062E\u062A \u0646\u06CC\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="mb-1 mt-auto"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_DemoLinkArrow, {
          to: "#",
          label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col p-6" }, [
            createVNode(_component_BaseHeading, {
              as: "h3",
              weight: "medium",
              size: "lg",
              class: "text-muted-800 dark:text-muted-100 mb-2"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0628\u0647 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u061F ")
              ]),
              _: 1
            }),
            createVNode(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400 mb-4"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. \u0628\u064F\u0631\u06A9 \u0647\u0646\u0648\u0632 \u0647\u0645 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u061B \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0647\u06CC\u0686 \u0627\u062D\u0645\u0642\u06CC \u062E\u0648\u0634\u0628\u062E\u062A \u0646\u06CC\u0633\u062A. ")
              ]),
              _: 1
            }),
            createVNode("div", { class: "mb-1 mt-auto" }, [
              createVNode(_component_DemoLinkArrow, {
                to: "#",
                label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetInvest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_7 as _ };
