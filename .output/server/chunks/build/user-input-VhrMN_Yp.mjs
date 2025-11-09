import { d as _sfc_main$D } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseSwitchThin-DO5QSQNt.mjs';
import { defineComponent, ref, computed, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { _ as _sfc_main$1 } from './AddonInputPassword-DM0uhxUn.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user-input",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordRef = ref();
    const hasError = computed(() => !!passwordRef.value?.validation?.feedback?.warning || !!passwordRef.value?.validation?.feedback?.suggestions?.length);
    const username = ref("superuser");
    const email = ref("contact@eltheme.ir");
    const password = ref("contact@eltheme.ir");
    const useUserInputs = ref(true);
    const userInputs = computed(() => useUserInputs.value ? [username.value, email.value] : []);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSwitchThin = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-4 md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(username),
        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null,
        label: "Username",
        icon: "lucide:user"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        label: "\u0627\u06CC\u0645\u06CC\u0644",
        icon: "lucide:mail"
      }, null, _parent));
      _push(`<div class="col-span-2">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        ref_key: "passwordRef",
        ref: passwordRef,
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        error: unref(hasError),
        icon: "lucide:lock",
        label: "Password",
        "user-inputs": unref(userInputs),
        show: "",
        touched: ""
      }, null, _parent));
      _push(`</div><div class="mt-2">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(useUserInputs),
        "onUpdate:modelValue": ($event) => isRef(useUserInputs) ? useUserInputs.value = $event : null,
        label: "\u0628\u0631\u0631\u0633\u06CC \u0648\u0631\u0648\u062F\u06CC\u200C\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-password/user-input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
