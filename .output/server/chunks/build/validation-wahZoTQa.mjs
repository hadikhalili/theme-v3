import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { _ as _sfc_main$1 } from './AddonInputPassword-DM0uhxUn.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "validation",
  __ssrInlineRender: true,
  setup(__props) {
    const password = ref("qwerty");
    const error = ref("");
    const inputRef = ref();
    function onValidate(state) {
      error.value = state.validation?.feedback.warning ?? "";
      if (state.validation && state.validation.score < 5) {
        error.value = "Please enter a stronger password";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "max-w-md",
        autocomplete: "off"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        ref_key: "inputRef",
        ref: inputRef,
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        placeholder: "\u0628\u0631\u0627\u06CC \u062A\u0633\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062A\u0627\u06CC\u067E \u06A9\u0646\u06CC\u062F",
        error: unref(error),
        onValidation: onValidate
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-password/validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
