import { _ as _sfc_main$1 } from './TairoFormGroup-B2ka3Eid.mjs';
import { d as _sfc_main$D } from './server.mjs';
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
  __name: "form-group",
  __ssrInlineRender: true,
  setup(__props) {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoFormGroup = _sfc_main$1;
      const _component_BaseInput = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md" }, _attrs))}><form action="" method="POST">`);
      _push(ssrRenderComponent(_component_TairoFormGroup, {
        label: "\u0634\u0645\u0627 \u06A9\u06CC \u0647\u0633\u062A\u06CC\u062F\u061F",
        sublabel: "\u0646\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-3"${_scopeId}><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(firstName),
              "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
              label: "\u0646\u0627\u0645",
              placeholder: "\u0645\u062B\u0627\u0644: \u0627\u0645\u06CC\u0644\u06CC"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(lastName),
              "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
              label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
              placeholder: "\u0645\u062B\u0627\u0644: \u0648\u0627\u0644\u062A\u0631\u0632"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              placeholder: "\u0645\u062B\u0627\u0644: emilywalters@eltheme.ir"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-3" }, [
                createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                  createVNode(_component_BaseInput, {
                    modelValue: unref(firstName),
                    "onUpdate:modelValue": ($event) => isRef(firstName) ? firstName.value = $event : null,
                    label: "\u0646\u0627\u0645",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0627\u0645\u06CC\u0644\u06CC"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                  createVNode(_component_BaseInput, {
                    modelValue: unref(lastName),
                    "onUpdate:modelValue": ($event) => isRef(lastName) ? lastName.value = $event : null,
                    label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0648\u0627\u0644\u062A\u0631\u0632"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-12" }, [
                  createVNode(_component_BaseInput, {
                    modelValue: unref(email),
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                    placeholder: "\u0645\u062B\u0627\u0644: emilywalters@eltheme.ir"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/form-group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
