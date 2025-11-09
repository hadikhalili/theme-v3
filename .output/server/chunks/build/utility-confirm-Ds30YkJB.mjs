import { l as _sfc_main$3, e as _sfc_main$e } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/img/illustrations/placeholders/flat/placeholder-launch.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/placeholders/flat/placeholder-launch-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-confirm",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center pb-12" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: "\u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u062A\u0623\u06CC\u06CC\u062F \u06A9\u0646\u06CC\u062F",
        subtitle: "\u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C \u062E\u0648\u0634\u062D\u0627\u0644\u06CC\u0645 \u06A9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062A\u06CC\u0645 \u062E\u0648\u062F \u062F\u0627\u0631\u06CC\u0645! \u0644\u0637\u0641\u0627 \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u0627 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F."
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="placeholder-image"${_scopeId}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="placeholder-image"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "block dark:hidden",
                src: _imports_0,
                alt: "placeholder-image"
              }),
              createVNode("img", {
                class: "hidden dark:block",
                src: _imports_1,
                alt: "placeholder-image"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto mt-4 flex w-full max-w-[280px] justify-between gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "lg",
              class: "h-11 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u063A\u0648 `);
                } else {
                  return [
                    createTextVNode(" \u0644\u063A\u0648 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              rounded: "lg",
              class: "h-11 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627\u06CC\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627\u06CC\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto mt-4 flex w-full max-w-[280px] justify-between gap-2" }, [
                createVNode(_component_BaseButton, {
                  rounded: "lg",
                  class: "h-11 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0644\u063A\u0648 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  rounded: "lg",
                  class: "h-11 w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062A\u0627\u06CC\u06CC\u062F ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
