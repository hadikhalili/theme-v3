import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as _export_sfc } from './server.mjs';
import '@headlessui/vue';
import '@headlessui-float/vue';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseDropdown = __nuxt_component_0;
  const _component_BaseDropdownItem = _sfc_main$1;
  const _component_BaseAvatar = _sfc_main$2;
  const _component_BaseDropdownDivider = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-start" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseDropdown, {
    variant: "button",
    label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
    placement: "bottom-start",
    "header-label": "\u062A\u06CC\u0645 \u0645\u0646"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u0644\u0627\u0646\u0627 \u062C\u0646\u0633\u0646",
          text: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
          rounded: "sm"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/4.svg",
                size: "xs"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, {
                  src: "https://tairo.cssninja.io/img/avatars/4.svg",
                  size: "xs"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u0634\u0627\u0648\u0646 \u0645\u06CC\u0644\u0631",
          text: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
          rounded: "sm"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/3.svg",
                size: "xs"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, {
                  src: "https://tairo.cssninja.io/img/avatars/3.svg",
                  size: "xs"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u062C\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0633\u06A9\u06CC",
          text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
          rounded: "sm"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/18.svg",
                size: "xs"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, {
                  src: "https://tairo.cssninja.io/img/avatars/18.svg",
                  size: "xs"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseDropdownItem, {
          to: "#",
          title: "\u06AF\u0631\u06CC \u067E\u0648\u0631\u062A\u0631",
          text: "\u0645\u062F\u06CC\u0631 \u0639\u0627\u0645\u0644 - \u0628\u0646\u06CC\u0627\u0646\u200C\u06AF\u0630\u0627\u0631",
          rounded: "sm"
        }, {
          start: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/6.svg",
                size: "xs"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BaseAvatar, {
                  src: "https://tairo.cssninja.io/img/avatars/6.svg",
                  size: "xs"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u0644\u0627\u0646\u0627 \u062C\u0646\u0633\u0646",
            text: "\u0645\u0647\u0646\u062F\u0633 \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
            rounded: "sm"
          }, {
            start: withCtx(() => [
              createVNode(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/4.svg",
                size: "xs"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u0634\u0627\u0648\u0646 \u0645\u06CC\u0644\u0631",
            text: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
            rounded: "sm"
          }, {
            start: withCtx(() => [
              createVNode(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/3.svg",
                size: "xs"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u062C\u0627\u0646 \u0645\u0627\u0631\u06CC\u0646\u0633\u06A9\u06CC",
            text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
            rounded: "sm"
          }, {
            start: withCtx(() => [
              createVNode(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/18.svg",
                size: "xs"
              })
            ]),
            _: 1
          }),
          createVNode(_component_BaseDropdownDivider),
          createVNode(_component_BaseDropdownItem, {
            to: "#",
            title: "\u06AF\u0631\u06CC \u067E\u0648\u0631\u062A\u0631",
            text: "\u0645\u062F\u06CC\u0631 \u0639\u0627\u0645\u0644 - \u0628\u0646\u06CC\u0627\u0646\u200C\u06AF\u0630\u0627\u0631",
            rounded: "sm"
          }, {
            start: withCtx(() => [
              createVNode(_component_BaseAvatar, {
                src: "https://tairo.cssninja.io/img/avatars/6.svg",
                size: "xs"
              })
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/dropdown/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const header = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { header as default };
