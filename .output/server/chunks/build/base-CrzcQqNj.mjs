import { Y as _sfc_main$H } from './server.mjs';
import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-D-Y3gcBn.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
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
  __name: "base",
  __ssrInlineRender: true,
  setup(__props) {
    const options = ref([
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F6",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F7",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F8",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F9",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F0",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F1",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F2",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F3",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F4",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F5",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F6",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F7",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F8",
      "\u06AF\u0632\u06CC\u0646\u0647 \u06F1\u06F9"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$H;
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 md:flex-row md:items-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseFocusLoop, { class: "flex w-3/5 flex-wrap items-end gap-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
              color: "info"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
              color: "warning"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
              modelValue: unref(options),
              "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
              value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
              color: "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F1",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F2",
                color: "info"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F3",
                color: "success"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F4",
                color: "warning"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckboxAnimated, {
                modelValue: unref(options),
                "onUpdate:modelValue": ($event) => isRef(options) ? options.value = $event : null,
                value: "\u06AF\u0632\u06CC\u0646\u0647 \u06F5",
                color: "danger"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox-animated/base.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
