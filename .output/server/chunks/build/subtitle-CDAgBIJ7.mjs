import { _ as _sfc_main$1 } from './BaseList-DVuWj7jW.mjs';
import { _ as _sfc_main$2 } from './BaseListItem-C7Am8hsI.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_BaseList = _sfc_main$1;
  const _component_BaseListItem = _sfc_main$2;
  _push(ssrRenderComponent(_component_BaseList, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "\u0627\u062A\u0645\u0627\u0645 \u067E\u0631\u0648\u0698\u0647 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC (UX)",
          subtitle: "\u0628\u0633\u062A\u0646 \u062A\u06A9\u0627\u0644\u06CC\u0641 \u0645\u0639\u0644\u0642 \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC\u200C\u0634\u062F\u0647"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0627\u0646\u062F\u06CC \u0633\u0627\u0639\u062A \u06F3:\u06F0\u06F0 \u0628.\u0638",
          subtitle: "\u062C\u0644\u0633\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0631\u0627\u062D\u0644 \u0628\u0639\u062F\u06CC \u067E\u0631\u0648\u0698\u0647"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "\u062E\u0631\u06CC\u062F \u0645\u0648\u0627\u062F \u063A\u0630\u0627\u06CC\u06CC \u0628\u0631\u0627\u06CC \u0622\u0646\u0627",
          subtitle: "\u062F\u0631 \u0622\u0645\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0628\u0631\u0627\u06CC \u062C\u0634\u0646 \u062C\u0645\u0639\u0647 \u0622\u06CC\u0646\u062F\u0647"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseListItem, {
          title: "\u067E\u0631\u062F\u0627\u062E\u062A \u0642\u0628\u0636 \u0622\u0628",
          subtitle: "\u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0628\u0627\u06CC\u062F \u0642\u0628\u0644 \u0627\u0632 \u0633\u0647\u200C\u0634\u0646\u0628\u0647 \u0622\u06CC\u0646\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u0634\u0648\u062F"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseListItem, {
            title: "\u0627\u062A\u0645\u0627\u0645 \u067E\u0631\u0648\u0698\u0647 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC (UX)",
            subtitle: "\u0628\u0633\u062A\u0646 \u062A\u06A9\u0627\u0644\u06CC\u0641 \u0645\u0639\u0644\u0642 \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC\u200C\u0634\u062F\u0647"
          }),
          createVNode(_component_BaseListItem, {
            title: "\u0645\u0644\u0627\u0642\u0627\u062A \u0628\u0627 \u0627\u0646\u062F\u06CC \u0633\u0627\u0639\u062A \u06F3:\u06F0\u06F0 \u0628.\u0638",
            subtitle: "\u062C\u0644\u0633\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0631\u0627\u062D\u0644 \u0628\u0639\u062F\u06CC \u067E\u0631\u0648\u0698\u0647"
          }),
          createVNode(_component_BaseListItem, {
            title: "\u062E\u0631\u06CC\u062F \u0645\u0648\u0627\u062F \u063A\u0630\u0627\u06CC\u06CC \u0628\u0631\u0627\u06CC \u0622\u0646\u0627",
            subtitle: "\u062F\u0631 \u0622\u0645\u0627\u062F\u0647\u200C\u0633\u0627\u0632\u06CC \u0628\u0631\u0627\u06CC \u062C\u0634\u0646 \u062C\u0645\u0639\u0647 \u0622\u06CC\u0646\u062F\u0647"
          }),
          createVNode(_component_BaseListItem, {
            title: "\u067E\u0631\u062F\u0627\u062E\u062A \u0642\u0628\u0636 \u0622\u0628",
            subtitle: "\u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0628\u0627\u06CC\u062F \u0642\u0628\u0644 \u0627\u0632 \u0633\u0647\u200C\u0634\u0646\u0628\u0647 \u0622\u06CC\u0646\u062F\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u0634\u0648\u062F"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/list/subtitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subtitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { subtitle as default };
