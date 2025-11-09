import { _ as _sfc_main$1 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './BaseAvatar-3aYTRoBN.mjs';
import './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "micro",
  __ssrInlineRender: true,
  setup(__props) {
    const people = [
      {
        "data-nui-tooltip": "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632",
        "src": "/img/avatars/19.svg"
      },
      {
        "data-nui-tooltip": "\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631",
        "src": "/img/avatars/16.svg"
      },
      {
        "data-nui-tooltip": "\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631",
        "src": "/img/avatars/3.svg"
      },
      {
        "data-nui-tooltip": "\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631",
        "src": "/img/avatars/22.svg"
      },
      {
        "data-nui-tooltip": "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        "src": "/img/avatars/2.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatarGroup = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseAvatarGroup, mergeProps({
        size: "xxs",
        avatars: people
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/avatar-group/micro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
