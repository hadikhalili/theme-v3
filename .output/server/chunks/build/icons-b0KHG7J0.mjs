import { _ as _sfc_main$1 } from './BaseMessage-B_09c9Mc.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
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
  const _component_BaseMessage = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseMessage, { icon: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0645\u0648\u0641\u0642. `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0645\u0648\u0641\u0642. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseMessage, {
    color: "info",
    icon: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC. `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseMessage, {
    color: "warning",
    icon: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0647\u0634\u062F\u0627\u0631. `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0647\u0634\u062F\u0627\u0631. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseMessage, {
    color: "danger",
    icon: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0645\u062E\u0631\u0628. `);
      } else {
        return [
          createTextVNode(" \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u0645\u062E\u0631\u0628. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/message/icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { icons as default };
