import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { i as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
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

const _imports_0 = publicAssetsURL("/img/avatars/15.svg");
const _imports_1 = publicAssetsURL("/img/avatars/1.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseAvatar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseAvatar, { size: "xxs" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} rounded="full" alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            rounded: "full",
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, { size: "xs" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} rounded="full" alt=""${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            rounded: "full",
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/5.svg",
    rounded: "full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/4.svg",
    rounded: "full",
    size: "md"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/3.svg",
    rounded: "full",
    size: "lg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/8.svg",
    rounded: "full",
    size: "xl"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/16.svg",
    rounded: "full",
    size: "2xl"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/2.svg",
    rounded: "full",
    size: "3xl"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/20.svg",
    rounded: "full",
    size: "4xl"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/avatar/circle-size.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const circleSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { circleSize as default };
