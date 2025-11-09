import { b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseSwitchThin-DO5QSQNt.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, useSSRContext } from 'vue';
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
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    const incoming = ref(true);
    const outgoing = ref(false);
    const failed = ref(false);
    const uncashed = ref(false);
    const payments = ref(true);
    const low = ref(true);
    const features = ref(true);
    const offers = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseSwitchThin = _sfc_main$1;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-muted-200 dark:divide-muted-800 space-y-20 py-6" }, _attrs))}><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0641\u0639\u0627\u0644\u06CC\u062A \u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u0641\u0639\u0627\u0644\u06CC\u062A \u062D\u0633\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0641\u0627\u0631\u0634\u06CC\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0646\u06A9\u0647 \u0686\u0647 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0631 \u0645\u0648\u0631\u062F \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u0633\u0641\u0627\u0631\u0634\u06CC\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0646\u06A9\u0647 \u0686\u0647 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u0631 \u0645\u0648\u0631\u062F \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0641\u0639\u0627\u0644\u06CC\u062A `);
          } else {
            return [
              createTextVNode(" \u0641\u0639\u0627\u0644\u06CC\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(incoming),
        "onUpdate:modelValue": ($event) => isRef(incoming) ? incoming.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u0631\u0648\u062F\u06CC `);
          } else {
            return [
              createTextVNode(" \u0648\u0631\u0648\u062F\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0648\u0631\u0648\u062F\u06CC `);
          } else {
            return [
              createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0648\u0631\u0648\u062F\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(outgoing),
        "onUpdate:modelValue": ($event) => isRef(outgoing) ? outgoing.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062E\u0631\u0648\u062C\u06CC `);
          } else {
            return [
              createTextVNode(" \u062E\u0631\u0648\u062C\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u062E\u0631\u0648\u062C\u06CC `);
          } else {
            return [
              createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u062E\u0631\u0648\u062C\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(failed),
        "onUpdate:modelValue": ($event) => isRef(failed) ? failed.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0646\u0627\u0645\u0648\u0641\u0642 `);
          } else {
            return [
              createTextVNode(" \u0646\u0627\u0645\u0648\u0641\u0642 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0646\u0627\u0645\u0648\u0641\u0642 `);
          } else {
            return [
              createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0646\u0627\u0645\u0648\u0641\u0642 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(uncashed),
        "onUpdate:modelValue": ($event) => isRef(uncashed) ? uncashed.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0646\u0642\u062F \u0646\u0634\u062F\u0647 `);
          } else {
            return [
              createTextVNode(" \u0646\u0642\u062F \u0646\u0634\u062F\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0686\u06A9\u200C\u0647\u0627\u06CC \u0648\u0635\u0648\u0644\u200C\u0646\u0634\u062F\u0647 `);
          } else {
            return [
              createTextVNode(" \u0686\u06A9\u200C\u0647\u0627\u06CC \u0648\u0635\u0648\u0644\u200C\u0646\u0634\u062F\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(payments),
        "onUpdate:modelValue": ($event) => isRef(payments) ? payments.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A `);
          } else {
            return [
              createTextVNode(" \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0645 `);
          } else {
            return [
              createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0627 \u0648\u0642\u062A\u06CC \u0645\u0648\u062C\u0648\u062F\u06CC \u06CC\u06A9\u06CC \u0627\u0632 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0632\u06CC\u0631 \u0645\u0642\u062F\u0627\u0631\u06CC \u06A9\u0647 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F \u0628\u0631\u0633\u062F\u060C \u0628\u0647 \u0634\u0645\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u06CC\u200C\u0632\u0646\u06CC\u0645. `);
          } else {
            return [
              createTextVNode(" \u0645\u0627 \u0648\u0642\u062A\u06CC \u0645\u0648\u062C\u0648\u062F\u06CC \u06CC\u06A9\u06CC \u0627\u0632 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0632\u06CC\u0631 \u0645\u0642\u062F\u0627\u0631\u06CC \u06A9\u0647 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F \u0628\u0631\u0633\u062F\u060C \u0628\u0647 \u0634\u0645\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u06CC\u200C\u0632\u0646\u06CC\u0645. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0645 `);
          } else {
            return [
              createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u06A9\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(low),
        "onUpdate:modelValue": ($event) => isRef(low) ? low.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0647\u0634\u062F\u0627\u0631 \u06A9\u0645 `);
          } else {
            return [
              createTextVNode(" \u0647\u0634\u062F\u0627\u0631 \u06A9\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0648\u062C\u0648\u062F\u06CC \u0628\u0647 \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F2\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 \u06A9\u0627\u0647\u0634 \u06CC\u0627\u0641\u062A `);
          } else {
            return [
              createTextVNode(" \u0645\u0648\u062C\u0648\u062F\u06CC \u0628\u0647 \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F2\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 \u06A9\u0627\u0647\u0634 \u06CC\u0627\u0641\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627\u06CC \u062A\u0627\u06CC\u0631\u0648 `);
          } else {
            return [
              createTextVNode(" \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627\u06CC \u062A\u0627\u06CC\u0631\u0648 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u0627 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u06CC\u0627 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u062C\u0627\u0644\u0628 \u0645\u0648\u0631\u062F \u0639\u0644\u0627\u0642\u0647\u200C\u062A\u0627\u0646 \u0628\u0647\u200C\u0631\u0648\u0632 \u0628\u0627\u0634\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u0628\u0627 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u06CC\u0627 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u062C\u0627\u0644\u0628 \u0645\u0648\u0631\u062F \u0639\u0644\u0627\u0642\u0647\u200C\u062A\u0627\u0646 \u0628\u0647\u200C\u0631\u0648\u0632 \u0628\u0627\u0634\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(features),
        "onUpdate:modelValue": ($event) => isRef(features) ? features.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u06CC\u0698\u06AF\u06CC \u062C\u062F\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0648\u06CC\u0698\u06AF\u06CC \u062C\u062F\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(offers),
        "onUpdate:modelValue": ($event) => isRef(offers) ? offers.value = $event : null
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xs",
        weight: "medium",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0648\u06CC\u0698\u0647 `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0648\u06CC\u0698\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/settings/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
