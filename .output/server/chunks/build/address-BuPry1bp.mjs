import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-7ut6RcTc.mjs';
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
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0622\u062F\u0631\u0633"
    });
    const {
      data: request,
      currentStepId,
      loading,
      getNextStep,
      handleSubmit,
      getPrevStep,
      errors,
      steps,
      checkPreviousSteps
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$1;
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
      _push(`</div><div class="w-full max-w-md"><form class="mb-4"><div class="grid gap-4 md:grid-cols-2"><div class="relative col-span-2">`);
      _push(ssrRenderComponent(_component_BaseInput, mergeProps({
        modelValue: unref(request).recipient.address.lineOne,
        "onUpdate:modelValue": ($event) => unref(request).recipient.address.lineOne = $event,
        error: unref(errors).fields?.["recipient.address.lineOne"],
        label: "\u062E\u0637 \u0622\u062F\u0631\u0633 1",
        placeholder: "\u0645\u062B\u0627\u0644: \u06F2\u06F9\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0645\u0648\u0646\u06CC\u06A9\u0627",
        autocomplete: "address-line1"
      }, ssrGetDirectiveProps(_ctx, _directive_focus)), null, _parent));
      _push(`</div><div class="relative col-span-2">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(request).recipient.address.lineTwo,
        "onUpdate:modelValue": ($event) => unref(request).recipient.address.lineTwo = $event,
        error: unref(errors).fields?.["recipient.address.lineTwo"],
        label: "\u062E\u0637 \u0622\u062F\u0631\u0633 2",
        placeholder: "\u0645\u062B\u0627\u0644: \u0628\u0644\u0648\u06A9 D4\u060C \u0633\u0648\u0626\u06CC\u062A G23",
        autocomplete: "address-line2"
      }, null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(request).recipient.address.city,
        "onUpdate:modelValue": ($event) => unref(request).recipient.address.city = $event,
        error: unref(errors).fields?.["recipient.address.city"],
        label: "\u0634\u0647\u0631",
        placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
        autocomplete: "address-level2"
      }, null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(request).recipient.address.postalCode,
        "onUpdate:modelValue": ($event) => unref(request).recipient.address.postalCode = $event,
        error: unref(errors).fields?.["recipient.address.postalCode"],
        label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
        placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F2\u06F3\u06F7\u06F2\u06F8",
        autocomplete: "postal-code"
      }, null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(request).recipient.address.state,
        "onUpdate:modelValue": ($event) => unref(request).recipient.address.state = $event,
        error: unref(errors).fields?.["recipient.address.state"],
        label: "\u0627\u06CC\u0627\u0644\u062A/\u0627\u0633\u062A\u0627\u0646",
        placeholder: "\u0645\u062B\u0627\u0644: \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
        autocomplete: "address-level1"
      }, null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(request).recipient.address.country,
        "onUpdate:modelValue": ($event) => unref(request).recipient.address.country = $event,
        error: unref(errors).fields?.["recipient.address.country"],
        label: "\u06A9\u0634\u0648\u0631",
        autocomplete: "country"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"${_scopeId}> \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 </option><option value="\u06A9\u0627\u0646\u0627\u062F\u0627"${_scopeId}> \u06A9\u0627\u0646\u0627\u062F\u0627 </option><option value="\u0641\u0631\u0627\u0646\u0633\u0647"${_scopeId}> \u0641\u0631\u0627\u0646\u0633\u0647 </option><option value="\u0686\u06CC\u0646"${_scopeId}> \u0686\u06CC\u0646 </option><option value="\u0622\u0644\u0645\u0627\u0646"${_scopeId}> \u0622\u0644\u0645\u0627\u0646 </option>`);
          } else {
            return [
              createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
              createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
              createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
              createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
              createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></form><div class="flex gap-4">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/send/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
