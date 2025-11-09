import { Y as _sfc_main$H } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
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
  __name: "colors",
  __ssrInlineRender: true,
  setup(__props) {
    const options = reactive({
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth: true,
      sixth: true,
      seventh: true,
      eighth: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFocusLoop = _sfc_main$H;
      const _component_BaseCheckbox = _sfc_main$1;
      _push(ssrRenderComponent(_component_BaseFocusLoop, mergeProps({ class: "grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).first,
              "onUpdate:modelValue": ($event) => unref(options).first = $event,
              label: "Straight",
              rounded: "none",
              classes: { wrapper: "text-gray-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).second,
              "onUpdate:modelValue": ($event) => unref(options).second = $event,
              label: "Straight",
              rounded: "none",
              classes: { wrapper: "text-emerald-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).third,
              "onUpdate:modelValue": ($event) => unref(options).third = $event,
              label: "Rounded",
              rounded: "sm",
              classes: { wrapper: "text-yellow-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).fourth,
              "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
              label: "Rounded",
              rounded: "sm",
              classes: { wrapper: "text-pink-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).fifth,
              "onUpdate:modelValue": ($event) => unref(options).fifth = $event,
              label: "\u0645\u0646\u062D\u0646\u06CC",
              rounded: "lg",
              classes: { wrapper: "text-indigo-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).sixth,
              "onUpdate:modelValue": ($event) => unref(options).sixth = $event,
              label: "\u0645\u0646\u062D\u0646\u06CC",
              rounded: "lg",
              classes: { wrapper: "text-primary-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).seventh,
              "onUpdate:modelValue": ($event) => unref(options).seventh = $event,
              label: "Circle",
              rounded: "full",
              classes: { wrapper: "text-amber-500" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).eighth,
              "onUpdate:modelValue": ($event) => unref(options).eighth = $event,
              label: "Circle",
              rounded: "full",
              classes: { wrapper: "text-rose-500" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).first,
                "onUpdate:modelValue": ($event) => unref(options).first = $event,
                label: "Straight",
                rounded: "none",
                classes: { wrapper: "text-gray-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).second,
                "onUpdate:modelValue": ($event) => unref(options).second = $event,
                label: "Straight",
                rounded: "none",
                classes: { wrapper: "text-emerald-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).third,
                "onUpdate:modelValue": ($event) => unref(options).third = $event,
                label: "Rounded",
                rounded: "sm",
                classes: { wrapper: "text-yellow-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).fourth,
                "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
                label: "Rounded",
                rounded: "sm",
                classes: { wrapper: "text-pink-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).fifth,
                "onUpdate:modelValue": ($event) => unref(options).fifth = $event,
                label: "\u0645\u0646\u062D\u0646\u06CC",
                rounded: "lg",
                classes: { wrapper: "text-indigo-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).sixth,
                "onUpdate:modelValue": ($event) => unref(options).sixth = $event,
                label: "\u0645\u0646\u062D\u0646\u06CC",
                rounded: "lg",
                classes: { wrapper: "text-primary-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).seventh,
                "onUpdate:modelValue": ($event) => unref(options).seventh = $event,
                label: "Circle",
                rounded: "full",
                classes: { wrapper: "text-amber-500" }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).eighth,
                "onUpdate:modelValue": ($event) => unref(options).eighth = $event,
                label: "Circle",
                rounded: "full",
                classes: { wrapper: "text-rose-500" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox/colors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
