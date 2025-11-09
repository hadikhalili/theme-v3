import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as _export_sfc } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseAvatar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-end gap-4" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/15.svg",
    rounded: "full",
    size: "xxs",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/1.svg",
    rounded: "full",
    size: "xs",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/5.svg",
    rounded: "full",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/4.svg",
    rounded: "full",
    size: "md",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    src: "/img/avatars/3.svg",
    rounded: "full",
    size: "lg",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    rounded: "full",
    src: "/img/avatars/8.svg",
    size: "xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    rounded: "full",
    src: "/img/avatars/16.svg",
    size: "2xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    rounded: "full",
    src: "/img/avatars/2.svg",
    size: "3xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BaseAvatar, {
    rounded: "full",
    src: "/img/avatars/20.svg",
    size: "4xl",
    "badge-src": "/img/icons/flags/united-states-of-america.svg"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/avatar/circle-badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const circleBadge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { circleBadge as default };
