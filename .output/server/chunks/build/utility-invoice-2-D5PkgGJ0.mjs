import { h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, f as _sfc_main$C, d as _sfc_main$D, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$3 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$4 } from './BaseSwitchBall-krBQpZlI.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, isRef, createVNode, toDisplayString, useSSRContext } from 'vue';
import { a as asToman } from './apex-4afj-Z69.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "utility-invoice-2",
  __ssrInlineRender: true,
  setup(__props) {
    const pdfAttachment = ref(true);
    const itemName = ref("\u0637\u0631\u0627\u062D\u06CC UI/UX");
    const itemHours = ref(20);
    const hourRate = ref(50.45);
    const taxRate = ref(6.5);
    const itemSubtotal = computed(
      () => (itemHours.value * hourRate.value + itemHours.value * hourRate.value * (taxRate.value / 100)).toFixed(2)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseInput = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_BaseTag = _sfc_main$3;
      const _component_BaseSwitchBall = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/logos/companies/amazon.svg",
              alt: "\u0622\u0645\u0627\u0632\u0648\u0646",
              size: "md",
              rounded: "none",
              mask: "blob",
              class: "bg-muted-100 dark:bg-muted-900"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "lg",
              lead: "none",
              class: "line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0622\u0645\u0627\u0632\u0648\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0622\u0645\u0627\u0632\u0648\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0631\u06A9\u062A \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9 `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0631\u06A9\u062A \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}><div class="text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u06CC\u0627\u0628\u0627\u0646 \u0686\u0631\u0686 \u06F4\u06F8 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u06CC\u0627\u0628\u0627\u0646 \u0686\u0631\u0686 \u06F4\u06F8 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06F9\u06F2\u06F3\u06F8\u06F4 `);
                } else {
                  return [
                    createTextVNode(" \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06F9\u06F2\u06F3\u06F8\u06F4 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="bg-primary-800 relative flex flex-col justify-between gap-y-6 overflow-hidden rounded-2xl p-8 sm:flex-row"${_scopeId}><div class="absolute -bottom-10 -start-10 size-48 rounded-full bg-white/10"${_scopeId}></div><div class="absolute -end-24 -top-10 hidden size-80 rounded-full bg-white/10 sm:block"${_scopeId}></div><div class="relative z-20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              weight: "medium",
              size: "sm",
              lead: "none",
              class: "mb-1 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0645\u0627\u0631\u0647 \u0641\u0627\u06A9\u062A\u0648\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u0641\u0627\u06A9\u062A\u0648\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              weight: "semibold",
              class: "mb-2 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` INV-2023-276 `);
                } else {
                  return [
                    createTextVNode(" INV-2023-276 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "mb-1 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627\u0631\u06CC\u062E \u0635\u062F\u0648\u0631: 11 \u062E\u0631\u062F\u0627\u062F 1402 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627\u0631\u06CC\u062E \u0635\u062F\u0648\u0631: 11 \u062E\u0631\u062F\u0627\u062F 1402 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F: \u06F1\u06F1 \u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F: \u06F1\u06F1 \u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="relative z-20 sm:text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h5",
              weight: "medium",
              size: "sm",
              lead: "none",
              class: "mb-1 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0628\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0628\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              weight: "semibold",
              class: "mb-2 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "mb-1 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u06CC\u0627\u0628\u0627\u0646 \u062C\u0627\u0645\u067E\u0648\u0627\u0644 \u06F2\u06F1 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u06CC\u0627\u0628\u0627\u0646 \u062C\u0627\u0645\u067E\u0648\u0627\u0644 \u06F2\u06F1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "mb-1 text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u0627\u062D\u062F G2\u060C \u0628\u0644\u0648\u06A9 23 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u0627\u062D\u062F G2\u060C \u0628\u0644\u0648\u06A9 23 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="py-6"${_scopeId}><div class="mb-8 flex items-center"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "sm",
              class: "text-mute-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u0641\u0627\u06A9\u062A\u0648\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u0641\u0627\u06A9\u062A\u0648\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u06CC\u0633\u062A \u0627\u0642\u0644\u0627\u0645 \u0641\u0627\u06A9\u062A\u0648\u0631 \u0634\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0644\u06CC\u0633\u062A \u0627\u0642\u0644\u0627\u0645 \u0641\u0627\u06A9\u062A\u0648\u0631 \u0634\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, { rounded: "md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0641\u0627\u0631\u0634\u06CC\u200C\u0633\u0627\u0632\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0641\u0627\u0631\u0634\u06CC\u200C\u0633\u0627\u0632\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="border-muted-200 dark:border-muted-800 w-full overflow-x-auto border-b pb-8"${_scopeId}><table class="w-full text-start"${_scopeId}><thead${_scopeId}><th class="min-w-[200px] px-2 text-start sm:w-1/3 sm:min-w-[auto]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u0627\u0645 \u0645\u0648\u0631\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0646\u0627\u0645 \u0645\u0648\u0631\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</th><th class="min-w-[90px] px-2 text-start sm:min-w-[auto]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0627\u0639\u062A\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0627\u0639\u062A\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</th><th class="min-w-[120px] px-2 text-start sm:min-w-[auto]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u0631\u062E / \u0633\u0627\u0639\u062A\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0646\u0631\u062E / \u0633\u0627\u0639\u062A\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</th><th class="min-w-[60px] px-2 text-start sm:min-w-[60px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0627\u0644\u06CC\u0627\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0627\u0644\u06CC\u0627\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</th><th class="min-w-[120px] px-2 text-start sm:min-w-[120px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</th></thead><tbody${_scopeId}><tr${_scopeId}><td class="px-2 py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(itemName),
              "onUpdate:modelValue": ($event) => isRef(itemName) ? itemName.value = $event : null,
              placeholder: "\u0646\u0627\u0645 \u0645\u0648\u0631\u062F"
            }, null, _parent2, _scopeId));
            _push2(`</td><td class="px-2 py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(itemHours),
              "onUpdate:modelValue": ($event) => isRef(itemHours) ? itemHours.value = $event : null,
              placeholder: "0"
            }, null, _parent2, _scopeId));
            _push2(`</td><td class="px-2 py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(hourRate),
              "onUpdate:modelValue": ($event) => isRef(hourRate) ? hourRate.value = $event : null,
              icon: "lucide:dollar-sign",
              placeholder: "0.00"
            }, null, _parent2, _scopeId));
            _push2(`</td><td class="px-2 py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(taxRate),
              "onUpdate:modelValue": ($event) => isRef(taxRate) ? taxRate.value = $event : null,
              icon: "lucide:percent",
              placeholder: "0"
            }, null, _parent2, _scopeId));
            _push2(`</td><td class="px-2 py-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(itemSubtotal),
              "onUpdate:modelValue": ($event) => isRef(itemSubtotal) ? itemSubtotal.value = $event : null,
              icon: "lucide:dollar-sign",
              placeholder: "0.00",
              readonly: ""
            }, null, _parent2, _scopeId));
            _push2(`</td></tr></tbody></table><div${_scopeId}><button type="button" class="text-primary-500 flex items-center gap-1 underline-offset-4 hover:underline"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</button></div></div><div class="w-full pt-8"${_scopeId}><div class="grid grid-cols-1 gap-12 sm:grid-cols-2"${_scopeId}><div${_scopeId}><div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "sm",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              to: "/layouts/card/new",
              rounded: "lg",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:edit-2",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "size-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-muted-100 dark:bg-muted-900 rounded-xl p-6"${_scopeId}><div class="mb-6 flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u06CC\u200C\u067E\u0627\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u067E\u06CC\u200C\u067E\u0627\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "logos:paypal",
              class: "size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-1"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u0627\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u0646\u0627\u0645 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 3524 65456 3245 4869 `);
                } else {
                  return [
                    createTextVNode(" 3524 65456 3245 4869 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 4238293 `);
                } else {
                  return [
                    createTextVNode(" 4238293 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="flex h-full flex-col"${_scopeId}><div class="mb-6 space-y-2 sm:ps-10"${_scopeId}><div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "sm",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0628\u0644\u063A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0628\u0644\u063A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              to: "/layouts/card/new",
              rounded: "lg",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:printer",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:printer",
                      class: "size-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(1525.18))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(1525.18)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u062E\u0641\u06CC\u0641 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u062E\u0641\u06CC\u0641 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(0))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(0)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(0))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(0)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-auto sm:ps-10"${_scopeId}><div class="border-muted-200 dark:border-muted-800 flex items-center justify-between border-t pt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u062C\u0645\u0648\u0639 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u062C\u0645\u0648\u0639 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "semibold",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(parseInt(unref(itemSubtotal))))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(parseInt(unref(itemSubtotal)))), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center gap-4" }, [
                createVNode(_component_BaseAvatar, {
                  src: "/img/logos/companies/amazon.svg",
                  alt: "\u0622\u0645\u0627\u0632\u0648\u0646",
                  size: "md",
                  rounded: "none",
                  mask: "blob",
                  class: "bg-muted-100 dark:bg-muted-900"
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    weight: "medium",
                    size: "lg",
                    lead: "none",
                    class: "line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0622\u0645\u0627\u0632\u0648\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-400 line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0634\u0631\u06A9\u062A \u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto" }, [
                  createVNode("div", { class: "text-end" }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062E\u06CC\u0627\u0628\u0627\u0646 \u0686\u0631\u0686 \u06F4\u06F8 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06F9\u06F2\u06F3\u06F8\u06F4 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-primary-800 relative flex flex-col justify-between gap-y-6 overflow-hidden rounded-2xl p-8 sm:flex-row" }, [
                createVNode("div", { class: "absolute -bottom-10 -start-10 size-48 rounded-full bg-white/10" }),
                createVNode("div", { class: "absolute -end-24 -top-10 hidden size-80 rounded-full bg-white/10 sm:block" }),
                createVNode("div", { class: "relative z-20" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    weight: "medium",
                    size: "sm",
                    lead: "none",
                    class: "mb-1 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u0641\u0627\u06A9\u062A\u0648\u0631 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    weight: "semibold",
                    class: "mb-2 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" INV-2023-276 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "mb-1 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u0627\u0631\u06CC\u062E \u0635\u062F\u0648\u0631: 11 \u062E\u0631\u062F\u0627\u062F 1402 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F: \u06F1\u06F1 \u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F2 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "relative z-20 sm:text-end" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h5",
                    weight: "medium",
                    size: "sm",
                    lead: "none",
                    class: "mb-1 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0628\u0647 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    weight: "semibold",
                    class: "mb-2 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "mb-1 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062E\u06CC\u0627\u0628\u0627\u0646 \u062C\u0627\u0645\u067E\u0648\u0627\u0644 \u06F2\u06F1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "mb-1 text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u0627\u062D\u062F G2\u060C \u0628\u0644\u0648\u06A9 23 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "py-6" }, [
                createVNode("div", { class: "mb-8 flex items-center" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      weight: "medium",
                      size: "sm",
                      class: "text-mute-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u0641\u0627\u06A9\u062A\u0648\u0631 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0644\u06CC\u0633\u062A \u0627\u0642\u0644\u0627\u0645 \u0641\u0627\u06A9\u062A\u0648\u0631 \u0634\u062F\u0647 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode(_component_BaseButton, { rounded: "md" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0633\u0641\u0627\u0631\u0634\u06CC\u200C\u0633\u0627\u0632\u06CC ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "border-muted-200 dark:border-muted-800 w-full overflow-x-auto border-b pb-8" }, [
                  createVNode("table", { class: "w-full text-start" }, [
                    createVNode("thead", null, [
                      createVNode("th", { class: "min-w-[200px] px-2 text-start sm:w-1/3 sm:min-w-[auto]" }, [
                        createVNode(_component_BaseText, {
                          size: "xs",
                          weight: "semibold",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0646\u0627\u0645 \u0645\u0648\u0631\u062F ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("th", { class: "min-w-[90px] px-2 text-start sm:min-w-[auto]" }, [
                        createVNode(_component_BaseText, {
                          size: "xs",
                          weight: "semibold",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0633\u0627\u0639\u062A\u200C\u0647\u0627 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("th", { class: "min-w-[120px] px-2 text-start sm:min-w-[auto]" }, [
                        createVNode(_component_BaseText, {
                          size: "xs",
                          weight: "semibold",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0646\u0631\u062E / \u0633\u0627\u0639\u062A\u06CC ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("th", { class: "min-w-[60px] px-2 text-start sm:min-w-[60px]" }, [
                        createVNode(_component_BaseText, {
                          size: "xs",
                          weight: "semibold",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u0627\u0644\u06CC\u0627\u062A ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("th", { class: "min-w-[120px] px-2 text-start sm:min-w-[120px]" }, [
                        createVNode(_component_BaseText, {
                          size: "xs",
                          weight: "semibold",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("tbody", null, [
                      createVNode("tr", null, [
                        createVNode("td", { class: "px-2 py-4" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(itemName),
                            "onUpdate:modelValue": ($event) => isRef(itemName) ? itemName.value = $event : null,
                            placeholder: "\u0646\u0627\u0645 \u0645\u0648\u0631\u062F"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "px-2 py-4" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(itemHours),
                            "onUpdate:modelValue": ($event) => isRef(itemHours) ? itemHours.value = $event : null,
                            placeholder: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "px-2 py-4" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(hourRate),
                            "onUpdate:modelValue": ($event) => isRef(hourRate) ? hourRate.value = $event : null,
                            icon: "lucide:dollar-sign",
                            placeholder: "0.00"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "px-2 py-4" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(taxRate),
                            "onUpdate:modelValue": ($event) => isRef(taxRate) ? taxRate.value = $event : null,
                            icon: "lucide:percent",
                            placeholder: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("td", { class: "px-2 py-4" }, [
                          createVNode(_component_BaseInput, {
                            modelValue: unref(itemSubtotal),
                            "onUpdate:modelValue": ($event) => isRef(itemSubtotal) ? itemSubtotal.value = $event : null,
                            icon: "lucide:dollar-sign",
                            placeholder: "0.00",
                            readonly: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("button", {
                      type: "button",
                      class: "text-primary-500 flex items-center gap-1 underline-offset-4 hover:underline"
                    }, [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        weight: "semibold"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u06CC\u062A\u0645 \u062C\u062F\u06CC\u062F ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full pt-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 gap-12 sm:grid-cols-2" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                        createVNode(_component_BaseHeading, {
                          weight: "medium",
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-100"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButtonIcon, {
                          to: "/layouts/card/new",
                          rounded: "lg",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "lucide:edit-2",
                              class: "size-4"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "bg-muted-100 dark:bg-muted-900 rounded-xl p-6" }, [
                        createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h4",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u067E\u06CC\u200C\u067E\u0627\u0644 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_Icon, {
                              name: "logos:paypal",
                              class: "size-6"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "space-y-1" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0646\u0627\u0645 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              weight: "semibold",
                              class: "text-muted-800 dark:text-muted-100"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              weight: "medium",
                              class: "text-muted-800 dark:text-muted-100"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 3524 65456 3245 4869 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              weight: "medium",
                              class: "text-muted-800 dark:text-muted-100"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" 4238293 ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex h-full flex-col" }, [
                      createVNode("div", { class: "mb-6 space-y-2 sm:ps-10" }, [
                        createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                          createVNode(_component_BaseHeading, {
                            weight: "medium",
                            size: "sm",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0645\u0628\u0644\u063A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseButtonIcon, {
                            to: "/layouts/card/new",
                            rounded: "lg",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lucide:printer",
                                class: "size-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "semibold",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(1525.18)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u062A\u062E\u0641\u06CC\u0641 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "semibold",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(0)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "semibold",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(0)), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "mt-auto sm:ps-10" }, [
                        createVNode("div", { class: "border-muted-200 dark:border-muted-800 flex items-center justify-between border-t pt-6" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0645\u062C\u0645\u0648\u0639 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "semibold",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(parseInt(unref(itemSubtotal)))), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        elevated: "",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-800 mb-6 flex items-center gap-4 border-b pb-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/10.svg",
              alt: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
              size: "md",
              rounded: "none",
              mask: "blob",
              class: "bg-muted-100 dark:bg-muted-900"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "md",
              lead: "none",
              class: "line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` kendraw@eltheme.ir `);
                } else {
                  return [
                    createTextVNode(" kendraw@eltheme.ir ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627 \u06F1\u06F4\u06F8\u060C \u0648\u0627\u062D\u062F D23\u060C \u0637\u0628\u0642\u0647 \u06F3 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627 \u06F1\u06F4\u06F8\u060C \u0648\u0627\u062D\u062F D23\u060C \u0637\u0628\u0642\u0647 \u06F3 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0622\u0645\u0631\u06CC\u06A9\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0622\u0645\u0631\u06CC\u06A9\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              variant: "pastel",
              rounded: "md",
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u0634\u062A\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u0634\u062A\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-800 mb-6 flex items-center gap-4 border-b pb-8" }, [
                createVNode(_component_BaseAvatar, {
                  src: "/img/avatars/10.svg",
                  alt: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
                  size: "md",
                  rounded: "none",
                  mask: "blob",
                  class: "bg-muted-100 dark:bg-muted-900"
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    weight: "medium",
                    size: "md",
                    lead: "none",
                    class: "line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-400 line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" kendraw@eltheme.ir ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062E\u06CC\u0627\u0628\u0627\u0646 \u0648\u06CC\u06A9\u062A\u0648\u0631\u06CC\u0627 \u06F1\u06F4\u06F8\u060C \u0648\u0627\u062D\u062F D23\u060C \u0637\u0628\u0642\u0647 \u06F3 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0622\u0645\u0631\u06CC\u06A9\u0627 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseButton, {
                  variant: "pastel",
                  rounded: "md",
                  color: "primary",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u0634\u062A\u0631\u06CC ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "medium",
              size: "md",
              lead: "none",
              class: "line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0628\u0644\u063A \u0641\u0627\u06A9\u062A\u0648\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0628\u0644\u063A \u0641\u0627\u06A9\u062A\u0648\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 line-clamp-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0631 \u062D\u0633\u0628\u062A\u0648\u0645\u0627\u0646 \u0628\u06CC\u0627\u0646 \u0634\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0631 \u062D\u0633\u0628\u062A\u0648\u0645\u0627\u0646 \u0628\u06CC\u0627\u0646 \u0634\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="border-muted-200 dark:border-muted-800 border-b pb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              weight: "semibold",
              size: "2xl",
              lead: "none",
              class: "mb-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(parseInt(unref(itemSubtotal))))} `);
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400 inline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` (\u0634\u0627\u0645\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A) `);
                      } else {
                        return [
                          createTextVNode(" (\u0634\u0627\u0645\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A) ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(parseInt(unref(itemSubtotal)))) + " ", 1),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400 inline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" (\u0634\u0627\u0645\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A) ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseTag, {
              rounded: "full",
              variant: "pastel",
              color: "danger"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0648\u0639\u062F \u067E\u0631\u062F\u0627\u062E\u062A: 23 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1403 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0648\u0639\u062F \u067E\u0631\u062F\u0627\u062E\u062A: 23 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1403 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0636\u0645\u06CC\u0645\u0647 \u06A9\u0631\u062F\u0646 PDF \u062F\u0631 \u0627\u06CC\u0645\u06CC\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u0636\u0645\u06CC\u0645\u0647 \u06A9\u0631\u062F\u0646 PDF \u062F\u0631 \u0627\u06CC\u0645\u06CC\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseSwitchBall, {
              modelValue: unref(pdfAttachment),
              "onUpdate:modelValue": ($event) => isRef(pdfAttachment) ? pdfAttachment.value = $event : null,
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseHeading, {
                  weight: "medium",
                  size: "md",
                  lead: "none",
                  class: "line-clamp-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0628\u0644\u063A \u0641\u0627\u06A9\u062A\u0648\u0631 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 line-clamp-1"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0628\u0631 \u062D\u0633\u0628\u062A\u0648\u0645\u0627\u0646 \u0628\u06CC\u0627\u0646 \u0634\u062F\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "border-muted-200 dark:border-muted-800 border-b pb-4" }, [
                createVNode(_component_BaseHeading, {
                  weight: "semibold",
                  size: "2xl",
                  lead: "none",
                  class: "mb-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(("asToman" in _ctx ? _ctx.asToman : unref(asToman))(parseInt(unref(itemSubtotal)))) + " ", 1),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400 inline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" (\u0634\u0627\u0645\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A) ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseTag, {
                  rounded: "full",
                  variant: "pastel",
                  color: "danger"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0648\u0639\u062F \u067E\u0631\u062F\u0627\u062E\u062A: 23 \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 1403 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex items-center justify-between pt-4" }, [
                createVNode(_component_BaseText, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0636\u0645\u06CC\u0645\u0647 \u06A9\u0631\u062F\u0646 PDF \u062F\u0631 \u0627\u06CC\u0645\u06CC\u0644 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createVNode(_component_BaseSwitchBall, {
                    modelValue: unref(pdfAttachment),
                    "onUpdate:modelValue": ($event) => isRef(pdfAttachment) ? pdfAttachment.value = $event : null,
                    color: "primary"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "md",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:eye",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:eye",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "md",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:download",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u062F\u0627\u0646\u0644\u0648\u062F</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:download",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u062F\u0627\u0646\u0644\u0648\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-4" }, [
                createVNode(_component_BaseButton, {
                  rounded: "md",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:eye",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  rounded: "md",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "lucide:download",
                      class: "size-4"
                    }),
                    createVNode("span", null, "\u062F\u0627\u0646\u0644\u0648\u062F")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "md",
        color: "primary",
        size: "lg",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:mail",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06A9\u062A\u0648\u0631</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:mail",
                class: "size-4"
              }),
              createVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06A9\u062A\u0648\u0631")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-invoice-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
