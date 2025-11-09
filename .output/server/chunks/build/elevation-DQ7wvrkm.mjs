import { i as _export_sfc, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_BaseCard = _sfc_main$u;
  const _component_BaseHeading = _sfc_main$w;
  const _component_BaseParagraph = _sfc_main$v;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid max-w-3xl gap-4 md:grid-cols-2" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "none",
    shadow: "flat",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 `);
            } else {
              return [
                createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "sm",
    shadow: "flat",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 `);
            } else {
              return [
                createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "md",
    shadow: "flat",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 `);
            } else {
              return [
                createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "lg",
    shadow: "flat",
    class: "p-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "semibold",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 `);
            } else {
              return [
                createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          lead: "tight",
          class: "text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 mb-2 dark:text-white"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0645\u0646 \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0647\u0633\u062A\u0645 ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            lead: "tight",
            class: "text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/card/elevation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elevation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { elevation as default };
