import { V as useClipboard, i as _export_sfc, a as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './AddonMarkdownRemark-DRrl86xF.mjs';
import { defineComponent, computed, inject, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
import './BaseProse-BoVg3KNx.mjs';

const _sfc_main = defineComponent({
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  setup: (props) => {
    const markdown = computed(() => {
      return `\`\`\`${props.language}
${props.code}\`\`\``;
    });
    const inCodeGroup = inject("code-group-context", false);
    const { copy, copied, isSupported } = useClipboard({
      source: () => props.code
    });
    return {
      markdown,
      inCodeGroup,
      copy,
      copied,
      isSupported
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_2;
  const _component_AddonMarkdownRemark = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/prose-code relative" }, _attrs))}>`);
  if (!_ctx.inCodeGroup && (_ctx.filename || _ctx.isSupported)) {
    _push(`<div class="${ssrRenderClass([[_ctx.filename && _ctx.isSupported ? "start-4 justify-between" : ""], "absolute end-4 top-2 flex items-center gap-1 text-xs opacity-40 transition-opacity duration-200 group-hover/prose-code:opacity-60 dark:group-hover/prose-code:opacity-80"])}">`);
    if (_ctx.filename) {
      _push(`<span>${ssrInterpolate(_ctx.filename)}</span>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.isSupported) {
      _push(`<button type="button"${ssrRenderAttr("data-nui-tooltip", _ctx.copied ? "Copied!" : "Copy")} class="hover:text-muted-950 dark:hover:text-white">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:copy",
        class: "ms-1 inline-block size-3"
      }, null, _parent));
      _push(`</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
    source: _ctx.markdown,
    fullwidth: "",
    class: ["doc-markdown", [
      _ctx.inCodeGroup ? "" : _ctx.filename && _ctx.isSupported ? "[&_.shiki]:pt-8" : "[&_.shiki]:!pe-10"
    ]],
    lines: false
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
