import { g as useTailwindColors, j as useRoute, u as useRouter, k as _sfc_main$x, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, i as _export_sfc, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$9 } from './DemoLinkArrow-CYqyQpEI.mjs';
import { useSSRContext, defineComponent, ref, reactive, shallowRef, mergeProps, unref, withCtx, createVNode, computed, watch, withAsyncContext, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_5 } from './DemoWidgetAccountBalance-DDhp0RdO.mjs';
import { _ as _sfc_main$8 } from './BaseProgress-Bi06w8MA.mjs';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { _ as _sfc_main$5 } from './DemoWidgetTransactionSummary-Dy1xJLFs.mjs';
import { _ as _sfc_main$6 } from './DemoActionText-D5gsJDsX.mjs';
import { _ as _sfc_main$7 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as __nuxt_component_10 } from './DemoNotificationsCompact-DH4JEGka.mjs';
import { Calendar } from 'v-calendars';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './DemoChartAreaBalance-BPxKKcSf.mjs';
import './fa-DpcB1dqS.mjs';
import './BaseTag-CQSmGSbm.mjs';

const _imports_0 = publicAssetsURL("/img/illustrations/ui/recurring.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/ui/cashback.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_BaseHeading = _sfc_main$w;
  const _component_BaseParagraph = _sfc_main$v;
  const _component_BaseCard = _sfc_main$u;
  const _component_DemoLinkArrow = _sfc_main$9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-200 dark:bg-muted-950/50 rounded-xl p-4 sm:p-6" }, _attrs))}><div class="mb-6 flex items-center justify-between"><div>`);
  _push(ssrRenderComponent(_component_BaseHeading, {
    as: "h3",
    weight: "medium",
    size: "xl",
    class: "text-muted-800 dark:text-muted-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062A\u0627\u0632\u0647 `);
      } else {
        return [
          createTextVNode(" \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062A\u0627\u0632\u0647 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0641\u06CC\u0686\u0631\u0647\u0627\u06CC \u062C\u0630\u0627\u0628\u06CC \u06A9\u0647 \u0627\u062E\u06CC\u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u062F\u0627\u062F\u0647\u200C\u0627\u06CC\u0645 `);
      } else {
        return [
          createTextVNode(" \u0641\u06CC\u0686\u0631\u0647\u0627\u06CC \u062C\u0630\u0627\u0628\u06CC \u06A9\u0647 \u0627\u062E\u06CC\u0631\u0627 \u0627\u0631\u0627\u0626\u0647 \u062F\u0627\u062F\u0647\u200C\u0627\u06CC\u0645 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
  _push(`</div></div><div class="ltablet:grid-cols-2 grid grid-cols-1 gap-6 lg:grid-cols-2"><div class="relative">`);
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "md",
    class: "flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-muted-100 dark:bg-muted-900 flex w-full shrink-0 items-center justify-center rounded-xl sm:size-32"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="w-full" alt=""${_scopeId}></div><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          weight: "medium",
          size: "md",
          class: "text-muted-800 dark:text-muted-100 mb-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627\u06CC \u062F\u0648\u0631\u0647\u200C\u0627\u06CC `);
            } else {
              return [
                createTextVNode(" \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627\u06CC \u062F\u0648\u0631\u0647\u200C\u0627\u06CC ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-500 dark:text-muted-400 mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
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
          createVNode("div", { class: "bg-muted-100 dark:bg-muted-900 flex w-full shrink-0 items-center justify-center rounded-xl sm:size-32" }, [
            createVNode("img", {
              src: _imports_0,
              class: "w-full",
              alt: ""
            })
          ]),
          createVNode("div", { class: "flex flex-col" }, [
            createVNode(_component_BaseHeading, {
              as: "h3",
              weight: "medium",
              size: "md",
              class: "text-muted-800 dark:text-muted-100 mb-2"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627\u06CC \u062F\u0648\u0631\u0647\u200C\u0627\u06CC ")
              ]),
              _: 1
            }),
            createVNode(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 mb-4"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
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
  _push(`</div><div class="relative">`);
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "md",
    class: "flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-muted-200 dark:bg-muted-900 flex w-full shrink-0 items-center justify-center rounded-xl sm:size-32"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="w-full" alt=""${_scopeId}></div><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          weight: "medium",
          size: "md",
          class: "text-muted-800 dark:text-muted-100 mb-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0645\u0648\u062C\u0648\u062F\u06CC \u0627\u0639\u062A\u0628\u0627\u0631 `);
            } else {
              return [
                createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u0627\u0639\u062A\u0628\u0627\u0631 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-500 dark:text-muted-400 mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
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
          createVNode("div", { class: "bg-muted-200 dark:bg-muted-900 flex w-full shrink-0 items-center justify-center rounded-xl sm:size-32" }, [
            createVNode("img", {
              src: _imports_1,
              class: "w-full",
              alt: ""
            })
          ]),
          createVNode("div", { class: "flex flex-col" }, [
            createVNode(_component_BaseHeading, {
              as: "h3",
              weight: "medium",
              size: "md",
              class: "text-muted-800 dark:text-muted-100 mb-2"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u0627\u0639\u062A\u0628\u0627\u0631 ")
              ]),
              _: 1
            }),
            createVNode(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 mb-4"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
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
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetFeatures.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseCard = _sfc_main$u;
  const _component_BaseHeading = _sfc_main$w;
  const _component_BaseParagraph = _sfc_main$v;
  const _component_BaseButton = _sfc_main$e;
  _push(ssrRenderComponent(_component_BaseCard, mergeProps({
    rounded: "md",
    class: "h-full p-10"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex h-full flex-col justify-between gap-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "medium",
          lead: "none",
          class: "text-muted-400 uppercase"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u062D\u0633\u0627\u0628 \u0645\u0627\u06CC\u0627 `);
            } else {
              return [
                createTextVNode(" \u062D\u0633\u0627\u0628 \u0645\u0627\u06CC\u0627 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<h2 class="font-heading ptablet:text-2xl text-muted-800 text-4xl font-medium dark:text-white"${_scopeId}> \u062E\u0648\u0634 \u0628\u0631\u06AF\u0634\u062A\u06CC\u060C \u0645\u0627\u06CC\u0627! \u{1F44B} </h2>`);
        _push2(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0627\u0632 \u0622\u062E\u0631\u06CC\u0646 \u0628\u0627\u0632\u062F\u06CC\u062F \u0634\u0645\u0627 \u0628\u0647 \u0646\u0638\u0631 \u062E\u0648\u0628 \u0648 \u0628\u0647\u200C\u0631\u0648\u0632 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u06A9\u0646\u06CC\u062F\u061F `);
            } else {
              return [
                createTextVNode(" \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0627\u0632 \u0622\u062E\u0631\u06CC\u0646 \u0628\u0627\u0632\u062F\u06CC\u062F \u0634\u0645\u0627 \u0628\u0647 \u0646\u0638\u0631 \u062E\u0648\u0628 \u0648 \u0628\u0647\u200C\u0631\u0648\u0632 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u06A9\u0646\u06CC\u062F\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, {
          color: "primary",
          rounded: "md",
          size: "lg",
          class: "w-full",
          shadow: "hover"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u062A\u0627\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u062D\u0633\u0627\u0628 \u0645\u0646 `);
            } else {
              return [
                createTextVNode(" \u062A\u0627\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u062D\u0633\u0627\u0628 \u0645\u0646 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex h-full flex-col justify-between gap-5" }, [
            createVNode(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "none",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u062D\u0633\u0627\u0628 \u0645\u0627\u06CC\u0627 ")
              ]),
              _: 1
            }),
            createVNode("h2", { class: "font-heading ptablet:text-2xl text-muted-800 text-4xl font-medium dark:text-white" }, " \u062E\u0648\u0634 \u0628\u0631\u06AF\u0634\u062A\u06CC\u060C \u0645\u0627\u06CC\u0627! \u{1F44B} "),
            createVNode(_component_BaseParagraph, { class: "text-muted-500" }, {
              default: withCtx(() => [
                createTextVNode(" \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0627\u0632 \u0622\u062E\u0631\u06CC\u0646 \u0628\u0627\u0632\u062F\u06CC\u062F \u0634\u0645\u0627 \u0628\u0647 \u0646\u0638\u0631 \u062E\u0648\u0628 \u0648 \u0628\u0647\u200C\u0631\u0648\u0632 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u06A9\u0646\u06CC\u062F\u061F ")
              ]),
              _: 1
            }),
            createVNode(_component_BaseButton, {
              color: "primary",
              rounded: "md",
              size: "lg",
              class: "w-full",
              shadow: "hover"
            }, {
              default: withCtx(() => [
                createTextVNode(" \u062A\u0627\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u062D\u0633\u0627\u0628 \u0645\u0646 ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetWelcome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoWidgetMoneyOut",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/transactions", {
      query
    }, "$Swede60Qs1")), __temp = await __temp, __restore(), __temp);
    const outgoing = computed(() => {
      if (data.value?.data.length && data.value?.data.length > 0) {
        return data.value.data.filter((item) => item.type === "out");
      }
    });
    const total = computed(() => {
      let amount = 0;
      for (const item of data.value?.data ?? []) {
        if (item.type === "out") {
          amount = amount + item.amount;
        }
      }
      return amount;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseProgress = _sfc_main$8;
      const _component_DemoLinkArrow = _sfc_main$9;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        rounded: "md",
        class: "h-full px-10 py-16"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-col justify-between gap-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "none",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u0648\u0644 \u062E\u0627\u0631\u062C\u200C\u0634\u062F\u0647 \u062F\u0631 \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u067E\u0648\u0644 \u062E\u0627\u0631\u062C\u200C\u0634\u062F\u0647 \u062F\u0631 \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "light",
              size: "3xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` - `);
                } else {
                  return [
                    createTextVNode(" - ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 font-sans text-4xl font-medium dark:text-white"${_scopeId}>${ssrInterpolate(unref(total).toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </span></div>`);
            if (unref(outgoing)?.length === 0) {
              _push2(`<div class="mb-2 space-y-4"${_scopeId}><div class="space-y-1"${_scopeId}><p class="text-muted-500 font-sans"${_scopeId}> \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u0631\u0627\u06A9\u0646\u0634 \u062E\u0631\u0648\u062C\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F </p><div class="bg-muted-200 dark:bg-muted-800 h-0.5 w-full"${_scopeId}></div></div></div>`);
            } else {
              _push2(`<div class="mb-2 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(outgoing)?.slice(0, 4), (item) => {
                _push2(`<div class="space-y-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.issuer)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.issuer), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="relative flex w-full items-center gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseProgress, {
                  value: item.amount / unref(total) * 100,
                  max: 100,
                  size: "xs"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseText, {
                  weight: "medium",
                  class: "text-muted-800 dark:text-muted-100 block w-1/5 text-end"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`<div class="mt-auto text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoLinkArrow, { to: "#" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-col justify-between gap-7" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-400 uppercase"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u067E\u0648\u0644 \u062E\u0627\u0631\u062C\u200C\u0634\u062F\u0647 \u062F\u0631 \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode(_component_BaseText, {
                    weight: "light",
                    size: "3xl"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" - ")
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "text-muted-800 font-sans text-4xl font-medium dark:text-white" }, toDisplayString(unref(total).toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                ]),
                unref(outgoing)?.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-2 space-y-4"
                }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("p", { class: "text-muted-500 font-sans" }, " \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u0631\u0627\u06A9\u0646\u0634 \u062E\u0631\u0648\u062C\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
                    createVNode("div", { class: "bg-muted-200 dark:bg-muted-800 h-0.5 w-full" })
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mb-2 space-y-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(outgoing)?.slice(0, 4), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "space-y-1"
                    }, [
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-500"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.issuer), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "relative flex w-full items-center gap-4" }, [
                        createVNode(_component_BaseProgress, {
                          value: item.amount / unref(total) * 100,
                          max: 100,
                          size: "xs"
                        }, null, 8, ["value"]),
                        createVNode(_component_BaseText, {
                          weight: "medium",
                          class: "text-muted-800 dark:text-muted-100 block w-1/5 text-end"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]);
                  }), 128))
                ])),
                createVNode("div", { class: "mt-auto text-end" }, [
                  createVNode(_component_DemoLinkArrow, { to: "#" })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetMoneyOut.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoWidgetMoneyIn",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/transactions", {
      query
    }, "$wYsw4N2LHf")), __temp = await __temp, __restore(), __temp);
    const ingoing = computed(() => {
      if (data.value?.data.length && data.value?.data.length > 0) {
        return data.value.data.filter((item) => item.type === "in");
      }
    });
    const total = computed(() => {
      let amount = 0;
      for (const item of data.value?.data ?? []) {
        if (item.type === "in") {
          amount = amount + item.amount;
        }
      }
      return amount;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseProgress = _sfc_main$8;
      const _component_DemoLinkArrow = _sfc_main$9;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        rounded: "md",
        class: "h-full px-10 py-16"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-full flex-col justify-between gap-7"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "none",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u0648\u0644 \u062F\u0631 \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u067E\u0648\u0644 \u062F\u0631 \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "light",
              size: "3xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` + `);
                } else {
                  return [
                    createTextVNode(" + ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 font-sans text-4xl font-medium dark:text-white"${_scopeId}>${ssrInterpolate(unref(total).toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </span></div>`);
            if (unref(ingoing)?.length === 0) {
              _push2(`<div class="mb-2 space-y-4"${_scopeId}><div class="space-y-1"${_scopeId}><p class="text-muted-500 font-sans"${_scopeId}> \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0648\u0631\u0648\u062F\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F </p><div class="bg-muted-200 dark:bg-muted-800 h-0.5 w-full"${_scopeId}></div></div></div>`);
            } else {
              _push2(`<div class="mb-2 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(ingoing)?.slice(0, 4), (item) => {
                _push2(`<div class="space-y-1"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.issuer)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.issuer), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<div class="relative flex w-full items-center gap-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseProgress, {
                  value: item.amount / unref(total) * 100,
                  max: 100,
                  size: "xs"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseText, {
                  weight: "medium",
                  class: "text-muted-800 dark:text-muted-100 block w-1/5 text-end"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`<div class="mt-auto text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoLinkArrow, { to: "#" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-full flex-col justify-between gap-7" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-400 uppercase"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u067E\u0648\u0644 \u062F\u0631 \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode(_component_BaseText, {
                    weight: "light",
                    size: "3xl"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" + ")
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "text-muted-800 font-sans text-4xl font-medium dark:text-white" }, toDisplayString(unref(total).toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                ]),
                unref(ingoing)?.length === 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-2 space-y-4"
                }, [
                  createVNode("div", { class: "space-y-1" }, [
                    createVNode("p", { class: "text-muted-500 font-sans" }, " \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0648\u0631\u0648\u062F\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
                    createVNode("div", { class: "bg-muted-200 dark:bg-muted-800 h-0.5 w-full" })
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mb-2 space-y-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(ingoing)?.slice(0, 4), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "space-y-1"
                    }, [
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-500"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.issuer), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "relative flex w-full items-center gap-4" }, [
                        createVNode(_component_BaseProgress, {
                          value: item.amount / unref(total) * 100,
                          max: 100,
                          size: "xs"
                        }, null, 8, ["value"]),
                        createVNode(_component_BaseText, {
                          weight: "medium",
                          class: "text-muted-800 dark:text-muted-100 block w-1/5 text-end"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]);
                  }), 128))
                ])),
                createVNode("div", { class: "mt-auto text-end" }, [
                  createVNode(_component_DemoLinkArrow, { to: "#" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetMoneyIn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "balance",
  __ssrInlineRender: true,
  setup(__props) {
    const showFeatures = ref(true);
    const gaugePersonal = reactive(useGaugePersonal());
    function useGaugePersonal() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        title: {
          text: void 0
        },
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            hollow: {
              margin: 0,
              size: "35%"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["\u0646\u062A\u0627\u06CC\u062C \u0645\u062A\u0648\u0633\u0637"]
      };
      const series = shallowRef([76]);
      return {
        type,
        height,
        options,
        series
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWidgetFeatures = __nuxt_component_0;
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_DemoWidgetWelcome = __nuxt_component_2;
      const _component_DemoWidgetAccountBalance = __nuxt_component_5;
      const _component_DemoWidgetMoneyOut = _sfc_main$2;
      const _component_DemoWidgetMoneyIn = _sfc_main$1;
      const _component_DemoWidgetTransactionSummary = _sfc_main$5;
      const _component_DemoActionText = _sfc_main$6;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_AddonApexcharts = _sfc_main$7;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_DemoNotificationsCompact = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-12 gap-6" }, _attrs))}><div class="col-span-12 lg:col-span-9">`);
      if (unref(showFeatures)) {
        _push(`<div class="w-full pb-6">`);
        _push(ssrRenderComponent(_component_DemoWidgetFeatures, null, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButtonClose, {
                size: "sm",
                color: "muted",
                "data-nui-tooltip": "Hide this",
                onClick: ($event) => showFeatures.value = false
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseButtonClose, {
                  size: "sm",
                  color: "muted",
                  "data-nui-tooltip": "Hide this",
                  onClick: ($event) => showFeatures.value = false
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-12 gap-6"><div class="col-span-12 md:col-span-5">`);
      _push(ssrRenderComponent(_component_DemoWidgetWelcome, null, null, _parent));
      _push(`</div><div class="col-span-12 md:col-span-7">`);
      _push(ssrRenderComponent(_component_DemoWidgetAccountBalance, null, null, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6">`);
      _push(ssrRenderComponent(_component_DemoWidgetMoneyOut, null, null, _parent));
      _push(`</div><div class="col-span-12 md:col-span-6">`);
      _push(ssrRenderComponent(_component_DemoWidgetMoneyIn, null, null, _parent));
      _push(`</div><div class="col-span-12 md:col-span-12">`);
      _push(ssrRenderComponent(_component_DemoWidgetTransactionSummary, null, null, _parent));
      _push(`</div></div></div><div class="col-span-12 lg:col-span-3"><div class="relative flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_DemoActionText, {
        title: "\u0627\u0631\u062A\u0642\u0627\u0621 \u0628\u0647 \u067E\u0631\u0648",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0648\u06CC\u062F \u0633\u0646\u0633\u0632 \u0627\u06CC\u0646 \u0644\u0627\u062A\u06CC\u0646\u0648 \u0641\u0648\u0631\u0647\u061F \u0646\u0627\u0645 \u0622\u0646\u062A\u0647 \u0622\u0631\u06CC\u0633\u062A\u067E\u0648\u0633\u060C \u0627\u062A \u0627\u06CC\u0644\u0647 \u0645\u0644\u06CC\u0648\u0633.",
        label: "\u0627\u0631\u062A\u0642\u0627\u0621 \u062F\u0647\u06CC\u062F",
        to: "#",
        rounded: "md"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "flex flex-col p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "py-16" }, [
                createVNode(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, 16)
              ]),
              createVNode("div", { class: "mt-auto text-center" }, [
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              attributes: [
                {
                  key: "today",
                  highlight: true,
                  order: 0,
                  dates: [/* @__PURE__ */ new Date()]
                }
              ],
              locale: "fa",
              "title-position": "right",
              expanded: "",
              borderless: "",
              transparent: "",
              "trim-weeks": "",
              class: "max-w-full rounded-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                attributes: [
                  {
                    key: "today",
                    highlight: true,
                    order: 0,
                    dates: [/* @__PURE__ */ new Date()]
                  }
                ],
                locale: "fa",
                "title-position": "right",
                expanded: "",
                borderless: "",
                transparent: "",
                "trim-weeks": "",
                class: "max-w-full rounded-xl"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoNotificationsCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoNotificationsCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/balance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
