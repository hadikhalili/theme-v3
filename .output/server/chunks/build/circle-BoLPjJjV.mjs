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
  __name: "circle",
  __ssrInlineRender: true,
  setup(__props) {
    const options = reactive({
      first: true,
      second: true,
      third: true,
      fourth: true,
      fifth: true,
      sixth: true,
      seventh: true
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
              label: "Default",
              rounded: "full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).second,
              "onUpdate:modelValue": ($event) => unref(options).second = $event,
              label: "Muted",
              rounded: "full",
              color: "muted"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).third,
              "onUpdate:modelValue": ($event) => unref(options).third = $event,
              label: "Primary",
              rounded: "full",
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).fourth,
              "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
              label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A",
              rounded: "full",
              color: "info"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).fifth,
              "onUpdate:modelValue": ($event) => unref(options).fifth = $event,
              label: "\u0645\u0648\u0641\u0642\u06CC\u062A",
              rounded: "full",
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).sixth,
              "onUpdate:modelValue": ($event) => unref(options).sixth = $event,
              label: "\u0647\u0634\u062F\u0627\u0631",
              rounded: "full",
              color: "warning"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              modelValue: unref(options).seventh,
              "onUpdate:modelValue": ($event) => unref(options).seventh = $event,
              label: "\u062E\u0637\u0631",
              rounded: "full",
              color: "danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).first,
                "onUpdate:modelValue": ($event) => unref(options).first = $event,
                label: "Default",
                rounded: "full"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).second,
                "onUpdate:modelValue": ($event) => unref(options).second = $event,
                label: "Muted",
                rounded: "full",
                color: "muted"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).third,
                "onUpdate:modelValue": ($event) => unref(options).third = $event,
                label: "Primary",
                rounded: "full",
                color: "primary"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).fourth,
                "onUpdate:modelValue": ($event) => unref(options).fourth = $event,
                label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A",
                rounded: "full",
                color: "info"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).fifth,
                "onUpdate:modelValue": ($event) => unref(options).fifth = $event,
                label: "\u0645\u0648\u0641\u0642\u06CC\u062A",
                rounded: "full",
                color: "success"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).sixth,
                "onUpdate:modelValue": ($event) => unref(options).sixth = $event,
                label: "\u0647\u0634\u062F\u0627\u0631",
                rounded: "full",
                color: "warning"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BaseCheckbox, {
                modelValue: unref(options).seventh,
                "onUpdate:modelValue": ($event) => unref(options).seventh = $event,
                label: "\u062E\u0637\u0631",
                rounded: "full",
                color: "danger"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/checkbox/circle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
