import { Y as _sfc_main$H } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "multiple-value",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(["\u06AF\u0632\u06CC\u0646\u0647 \u06F1", "\u06AF\u0632\u06CC\u0646\u0647 \u06F2"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$H;
      const _component_BaseCheckbox = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-1",
              label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
              rounded: "lg",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-2",
              label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
              rounded: "lg",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-3",
              label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
              rounded: "lg",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-4",
              label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
              rounded: "lg",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(value),
              "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
              name: "multiple-demo-5",
              label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
              rounded: "lg",
              color: "muted"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-1",
                label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
                rounded: "lg",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-2",
                label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
                rounded: "lg",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-3",
                label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
                rounded: "lg",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-4",
                label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
                rounded: "lg",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(value),
                "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                name: "multiple-demo-5",
                label: "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
                rounded: "lg",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox/multiple-value.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
