import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "recipient",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u062C\u0632\u0626\u06CC\u0627\u062A"
    });
    const {
      data: request,
      currentStepId,
      loading,
      getPrevStep,
      errors,
      steps,
      checkPreviousSteps
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseButton = _sfc_main$e;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="mb-8 space-y-2">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "2xl",
        weight: "medium",
        class: "md:!3xl text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(steps)[unref(currentStepId)].meta.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(steps)[unref(currentStepId)].meta.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400 max-w-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(steps)[unref(currentStepId)].meta.subtitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(steps)[unref(currentStepId)].meta.subtitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full max-w-md"><div class="mb-4"><div class="grid gap-4 md:grid-cols-2"><div class="group relative col-span-2">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        "model-value": unref(request).recipient.name,
        error: unref(errors).fields?.["recipient.name"],
        label: "\u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 \u0646\u0627\u0645",
        icon: "ph:user-duotone",
        placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645 \u0642\u0627\u0633\u0645\u06CC",
        readonly: "",
        classes: {
          input: "bg-muted-100 dark:!bg-muted-900"
        }
      }, null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseInput, mergeProps({
        modelValue: unref(request).routingNumber,
        "onUpdate:modelValue": ($event) => unref(request).routingNumber = $event,
        error: unref(errors).fields.routingNumber,
        label: "\u0634\u0645\u0627\u0631\u0647 \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC",
        placeholder: "\u0645\u062B\u0627\u0644: 183402022"
      }, ssrGetDirectiveProps(_ctx, _directive_focus)), null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(request).prefix,
        "onUpdate:modelValue": ($event) => unref(request).prefix = $event,
        error: unref(errors).fields.prefix,
        label: "\u067E\u06CC\u0634\u0648\u0646\u062F (\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)",
        placeholder: "\u0645\u062B\u0627\u0644: XCQ23"
      }, null, _parent));
      _push(`</div></div></div><div class="flex gap-4">`);
      if (unref(currentStepId) > 0) {
        _push(ssrRenderComponent(_component_BaseButton, {
          to: unref(loading) ? void 0 : unref(getPrevStep)()?.to,
          disabled: !unref(getPrevStep)(),
          size: "lg",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0642\u0628\u0644\u06CC</span>`);
            } else {
              return [
                createVNode("span", null, "\u0642\u0628\u0644\u06CC")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        color: "primary",
        size: "lg",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u062F\u0627\u0645\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0627\u062F\u0627\u0645\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/send/recipient.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
