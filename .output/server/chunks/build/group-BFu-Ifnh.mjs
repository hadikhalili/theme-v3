import { _ as __nuxt_component_0 } from './BaseButtonGroup-B2JzkKgM.mjs';
import { i as _export_sfc, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_BaseButtonGroup = __nuxt_component_0;
  const _component_BaseButton = _sfc_main$e;
  const _component_Icon = __nuxt_component_2;
  _push(ssrRenderComponent(_component_BaseButtonGroup, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseButton, { color: "default" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "lucide:edit-3",
                class: "-ms-1 size-3"
              }, null, _parent3, _scopeId2));
              _push3(`<span${_scopeId2}>Edit</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:edit-3",
                  class: "-ms-1 size-3"
                }),
                createVNode("span", null, "Edit")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "default" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "lucide:eye",
                class: "-ms-1 size-3"
              }, null, _parent3, _scopeId2));
              _push3(`<span${_scopeId2}>\u0646\u0645\u0627\u06CC\u0634</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:eye",
                  class: "-ms-1 size-3"
                }),
                createVNode("span", null, "\u0646\u0645\u0627\u06CC\u0634")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "lucide:box",
                class: "-ms-1 size-3"
              }, null, _parent3, _scopeId2));
              _push3(`<span${_scopeId2}>Stash</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:box",
                  class: "-ms-1 size-3"
                }),
                createVNode("span", null, "Stash")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseButton, { color: "default" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Icon, {
                name: "lucide:share-2",
                class: "-ms-1 size-3"
              }, null, _parent3, _scopeId2));
              _push3(`<span${_scopeId2}>\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:share-2",
                  class: "-ms-1 size-3"
                }),
                createVNode("span", null, "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseButton, { color: "default" }, {
            default: withCtx(() => [
              createVNode(_component_Icon, {
                name: "lucide:edit-3",
                class: "-ms-1 size-3"
              }),
              createVNode("span", null, "Edit")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "default" }, {
            default: withCtx(() => [
              createVNode(_component_Icon, {
                name: "lucide:eye",
                class: "-ms-1 size-3"
              }),
              createVNode("span", null, "\u0646\u0645\u0627\u06CC\u0634")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "primary" }, {
            default: withCtx(() => [
              createVNode(_component_Icon, {
                name: "lucide:box",
                class: "-ms-1 size-3"
              }),
              createVNode("span", null, "Stash")
            ]),
            _: 1
          }),
          createVNode(_component_BaseButton, { color: "default" }, {
            default: withCtx(() => [
              createVNode(_component_Icon, {
                name: "lucide:share-2",
                class: "-ms-1 size-3"
              }),
              createVNode("span", null, "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/button/group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const group = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { group as default };
