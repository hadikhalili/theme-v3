import { i as _export_sfc, Z as useAppConfig, af as resolveIconName } from './server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "IconCSS",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const appConfig = useAppConfig();
    const props = __props;
    const iconName = computed(() => {
      if (appConfig.nuxtIcon?.aliases?.[props.name]) {
        return appConfig.nuxtIcon.aliases[props.name];
      }
      return props.name;
    });
    const resolvedIcon = computed(() => resolveIconName(iconName.value));
    const iconUrl = computed(() => {
      const customUrl = appConfig.nuxtIcon?.iconifyApiOptions?.url;
      if (customUrl) {
        try {
          new URL(customUrl);
        } catch (e) {
          console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");
          return;
        }
      }
      const baseUrl = customUrl || "https://api.iconify.design";
      return `url('${baseUrl}/${resolvedIcon.value.prefix}/${resolvedIcon.value.name}.svg')`;
    });
    const sSize = computed(() => {
      if (!props.size && typeof appConfig.nuxtIcon?.size === "boolean" && !appConfig.nuxtIcon?.size) {
        return void 0;
      }
      const size = props.size || appConfig.nuxtIcon?.size || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--7d2256e0": iconUrl.value
      } };
      _push(`<span${ssrRenderAttrs(mergeProps({
        style: { width: sSize.value, height: sSize.value }
      }, _attrs, _cssVars))} data-v-ea10aa27></span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.6.10_nuxt@3.11.2_vue@3.4.21/node_modules/nuxt-icon/dist/runtime/IconCSS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconCSS = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea10aa27"]]);

export { IconCSS as default };
