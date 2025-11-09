import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { _ as _sfc_main$1 } from './AddonInputPhone-C3Hh-ZkB.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './BaseDropdownItem-vorQzQkQ.mjs';
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
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "validation",
  __ssrInlineRender: true,
  setup(__props) {
    const phone = ref("012345");
    const error = ref("");
    const inputRef = ref();
    function onValidate(state) {
      if (!state.error) {
        error.value = "";
        return;
      }
      switch (state.error) {
        case "INVALID_COUNTRY":
          error.value = "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06A9\u0634\u0648\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F";
          break;
        case "NO_POSSIBLE_COUNTRIES":
          error.value = "\u06A9\u0634\u0648\u0631\u0647\u0627\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A\u0646\u062F";
          break;
        case "PHONE_NUMBER_NOT_POSSIBLE":
          error.value = "\u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0628\u0631\u0627\u06CC \u06A9\u0634\u0648\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A";
          break;
        case "NOT_A_NUMBER":
        case "TOO_SHORT":
        case "TOO_LONG":
        default:
          error.value = "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F";
          break;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "max-w-md" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        ref_key: "inputRef",
        ref: inputRef,
        modelValue: unref(phone),
        "onUpdate:modelValue": ($event) => isRef(phone) ? phone.value = $event : null,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-phone/validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
