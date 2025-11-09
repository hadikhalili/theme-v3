import { b as _sfc_main$w, a as __nuxt_component_2, h as _sfc_main$u, c as _sfc_main$v } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$3 } from './BaseInputNumber-BvjqvKuw.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

const vatRate = 0.1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-invoice",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      {
        name: "\u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A",
        unit: "hrs",
        quantity: 54,
        rate: 24
      },
      {
        name: "\u0644\u0648\u06AF\u0648 \u0637\u0631\u0627\u062D\u06CC",
        unit: "hrs",
        quantity: 12,
        rate: 24
      },
      {
        name: "\u062A\u0635\u0627\u0648\u06CC\u0631 \u062F\u0644\u062E\u0648\u0627\u0647",
        unit: "hrs",
        quantity: 7,
        rate: 32
      }
    ]);
    const totalData = computed(() => {
      const subtotal = data.value.reduce((acc, item) => {
        return acc + item.quantity * item.rate;
      }, 0);
      const vatValue = subtotal * vatRate;
      const total = subtotal + vatValue;
      return [
        {
          label: "\u0632\u06CC\u0631\u0645\u062C\u0645\u0648\u0639\u0647",
          value: subtotal
        },
        {
          label: "\u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u0647\u0627",
          value: vatValue
        },
        {
          label: "\u0645\u062C\u0645\u0648\u0639",
          value: total
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseInputNumber = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl py-10" }, _attrs))}><div class="mb-4 flex items-center justify-between"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "medium",
        lead: "none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0641\u0627\u0631\u0634 #ox-81469 `);
          } else {
            return [
              createTextVNode(" \u0633\u0641\u0627\u0631\u0634 #ox-81469 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-end gap-3">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        rounded: "full",
        "data-nui-tooltip": "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0641\u0627\u06A9\u062A\u0648\u0631"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:pencil-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:pencil-duotone",
                class: "size-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        rounded: "full",
        "data-nui-tooltip": "\u0627\u0631\u0633\u0627\u0644 \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0627\u06CC\u0645\u06CC\u0644"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:envelope-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:envelope-duotone",
                class: "size-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        rounded: "full",
        "data-nui-tooltip": "Print invoice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:printer-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:printer-duotone",
                class: "size-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        size: "sm",
        rounded: "full",
        "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 PDF"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:download-duotone",
              class: "size-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:download-duotone",
                class: "size-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="overflow-hidden font-sans"${_scopeId}><div${_scopeId}><div class="border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/24.svg",
              "badge-src": "/img/stacks/reactjs.svg",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u062A\u06CC \u0644\u0648\u067E\u0632 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u062A\u06CC \u0644\u0648\u067E\u0632 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` bettylopez@eltheme.ir `);
                } else {
                  return [
                    createTextVNode(" bettylopez@eltheme.ir ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex gap-12"${_scopeId}><div class="text-muted-500 dark:text-muted-400 text-sm font-light"${_scopeId}><p class="text-muted-700 dark:text-muted-100 text-xs font-normal"${_scopeId}> \u0634\u0645\u0627\u0631\u0647 \u0641\u0627\u06A9\u062A\u0648\u0631 </p><p${_scopeId}>INV-48654</p><p class="text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"${_scopeId}> \u062A\u0627\u0631\u06CC\u062E \u0635\u062F\u0648\u0631 </p><p${_scopeId}>\u06F2\u06F9 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1</p></div><div class="text-muted-500 dark:text-muted-400 text-sm font-light"${_scopeId}><p class="text-muted-700 dark:text-muted-100 text-xs font-normal"${_scopeId}> \u0634\u0631\u0627\u06CC\u0637 </p><p${_scopeId}>\u06F3\u06F0 \u0631\u0648\u0632</p><p class="text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal"${_scopeId}> \u0645\u0642\u0631\u0631\u06CC </p><p${_scopeId}>\u06F1\u06F9.\u06F0\u06F4.\u06F1\u06F4\u06F0\u06F2</p></div></div></div><div class="border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center"${_scopeId}><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 size-12" }, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627\u06CC\u0631\u0648 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 ")
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
                  _push3(` \u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex gap-12"${_scopeId}><div class="text-muted-500 dark:text-muted-400 text-sm font-light"${_scopeId}><p class="text-muted-700 dark:text-muted-100 text-sm font-normal"${_scopeId}> \u0622\u062F\u0631\u0633 </p><p class="text-xs"${_scopeId}> \u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627\u060C \u0634\u0645\u0627\u0631\u0647 43 </p><p class="text-xs"${_scopeId}> \u0633\u0646 \u062E\u0648\u0632\u0647 \u062F \u0644\u0627 \u0647\u0631\u06CC\u062F\u0627 </p><p class="text-xs"${_scopeId}> \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 91853 </p></div></div></div><div class="px-6 py-8 sm:p-8"${_scopeId}><div class="flex flex-col"${_scopeId}><table class="divide-muted-200 dark:divide-muted-700 min-w-full divide-y"${_scopeId}><thead class="font-sans"${_scopeId}><tr${_scopeId}><th scope="col" class="text-muted-400 py-3.5 pe-3 ps-4 text-start text-xs font-medium uppercase sm:ps-6 md:ps-0"${_scopeId}> \u062A\u0648\u0636\u06CC\u062D\u0627\u062A </th><th scope="col" class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"${_scopeId}> \u0648\u0627\u062D\u062F </th><th scope="col" class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"${_scopeId}> \u062A\u0639\u062F\u0627\u062F </th><th scope="col" class="text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"${_scopeId}> \u0646\u0631\u062E </th><th scope="col" class="text-muted-400 py-3.5 pe-4 ps-3 text-right text-xs font-medium uppercase sm:pe-6 md:pe-0"${_scopeId}> \u0645\u0642\u062F\u0627\u0631 </th></tr></thead><tbody class="font-sans"${_scopeId}><!--[-->`);
            ssrRenderList(unref(data), (item) => {
              _push2(`<tr class="border-muted-200 dark:border-muted-700 border-b"${_scopeId}><td class="py-4 pe-3 ps-4 text-sm sm:ps-6 md:ps-0"${_scopeId}><div class="text-muted-800 dark:text-muted-100 font-medium"${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-muted-400 mt-0.5 text-xs"${_scopeId}>${ssrInterpolate(item.quantity)} \u0648\u0627\u062D\u062F \u0628\u0647 \u0642\u06CC\u0645\u062A \u0646\u0631\u062E ${ssrInterpolate(item.rate)} \u062A\u0648\u0645\u0627\u0646 </div></td><td class="text-muted-500 dark:text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"${_scopeId}> \u0633\u0627\u0639\u062A\u200C\u0647\u0627 </td><td class="hidden px-3 py-4 text-right text-sm sm:table-cell"${_scopeId}><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseInputNumber, {
                modelValue: item.quantity,
                "onUpdate:modelValue": ($event) => item.quantity = $event,
                min: 0,
                classes: {
                  wrapper: "w-32"
                }
              }, null, _parent2, _scopeId));
              _push2(`</div></td><td class="text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell"${_scopeId}> \u0646\u0631\u062E ${ssrInterpolate(item.rate)} \u062A\u0648\u0645\u0627\u0646 </td><td class="text-muted-800 dark:text-muted-100 py-4 pe-4 ps-3 text-right text-sm sm:pe-6 md:pe-0"${_scopeId}>${ssrInterpolate((item.rate * item.quantity).toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </td></tr>`);
            });
            _push2(`<!--]--></tbody><tfoot${_scopeId}><!--[-->`);
            ssrRenderList(unref(totalData), (item) => {
              _push2(`<tr${_scopeId}><th scope="row" colspan="4" class="text-muted-400 hidden pe-3 ps-6 pt-6 text-right text-sm font-light sm:table-cell md:ps-0"${_scopeId}>${ssrInterpolate(item.label)}</th><th scope="row" class="text-muted-500 pe-3 ps-4 pt-6 text-start text-sm font-light sm:hidden"${_scopeId}>${ssrInterpolate(item.label)}</th><td class="${ssrRenderClass([
                item.label === "\u0645\u062C\u0645\u0648\u0639" ? "font-semibold text-lg text-muted-800 dark:text-muted-100" : "text-sm text-muted-500 dark:text-muted-200/70",
                "pe-4 ps-3 pt-6 text-right sm:pe-6 md:pe-0"
              ])}"${_scopeId}>${ssrInterpolate(item.value.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </td></tr>`);
            });
            _push2(`<!--]--></tfoot></table></div></div><div class="mt-8 p-8"${_scopeId}><div class="border-muted-200 dark:border-muted-700 border-t pt-8"${_scopeId}><div class="text-muted-400"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0631\u0627\u06CC\u0637 \u067E\u0631\u062F\u0627\u062E\u062A \u06F1\u06F4 \u0631\u0648\u0632 \u0627\u0633\u062A. \u0644\u0637\u0641\u0627\u064B \u062A\u0648\u062C\u0647 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F \u06A9\u0647 \u0637\u0628\u0642 \u0642\u0627\u0646\u0648\u0646 \u062A\u0623\u062E\u06CC\u0631 \u062F\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u062F\u0647\u06CC\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u062A\u060C \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627 \u062D\u0642 \u062F\u0627\u0631\u0646\u062F \u062F\u0631 \u0635\u0648\u0631\u062A \u0639\u062F\u0645 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u062F\u0647\u06CC \u067E\u0633 \u0627\u0632 \u0627\u06CC\u0646 \u0645\u062F\u062A\u060C \u0645\u0628\u0644\u063A \u062A\u0623\u062E\u06CC\u0631 \u0645\u0637\u0627\u0644\u0628\u0647 \u06A9\u0646\u0646\u062F \u0648 \u0641\u0627\u06A9\u062A\u0648\u0631 \u062C\u062F\u06CC\u062F\u06CC \u0628\u0627 \u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u06CC\u0646 \u0647\u0632\u06CC\u0646\u0647 \u0635\u0627\u062F\u0631 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. \u0627\u06AF\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u0641\u0627\u06A9\u062A\u0648\u0631 \u0627\u0635\u0644\u0627\u062D\u200C\u0634\u062F\u0647 \u062F\u0631 \u0645\u062F\u062A \u06F1\u06F4 \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0634\u0648\u062F\u060C \u0628\u0647\u0631\u0647 \u0627\u0636\u0627\u0641\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u062F\u06CC\u0631\u06A9\u0631\u062F \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647 \u0648 \u0646\u0631\u062E \u0642\u0627\u0646\u0648\u0646\u06CC \u06F8\u066A \u0628\u0647\u200C\u0639\u0644\u0627\u0648\u0647 \u06F0.\u06F5\u066A \u067E\u0627\u06CC\u0647 \u0628\u0627\u0646\u06A9 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u062F\u0631 \u0645\u062C\u0645\u0648\u0639 \u06F8.\u06F5\u066A \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. \u0637\u0631\u0641\u06CC\u0646 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0627\u0632 \u0645\u0641\u0627\u062F \u0627\u06CC\u0646 \u0642\u0627\u0646\u0648\u0646 \u062E\u0627\u0631\u062C \u0634\u0648\u0646\u062F. `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0631\u0627\u06CC\u0637 \u067E\u0631\u062F\u0627\u062E\u062A \u06F1\u06F4 \u0631\u0648\u0632 \u0627\u0633\u062A. \u0644\u0637\u0641\u0627\u064B \u062A\u0648\u062C\u0647 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F \u06A9\u0647 \u0637\u0628\u0642 \u0642\u0627\u0646\u0648\u0646 \u062A\u0623\u062E\u06CC\u0631 \u062F\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u062F\u0647\u06CC\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u062A\u060C \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627 \u062D\u0642 \u062F\u0627\u0631\u0646\u062F \u062F\u0631 \u0635\u0648\u0631\u062A \u0639\u062F\u0645 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u062F\u0647\u06CC \u067E\u0633 \u0627\u0632 \u0627\u06CC\u0646 \u0645\u062F\u062A\u060C \u0645\u0628\u0644\u063A \u062A\u0623\u062E\u06CC\u0631 \u0645\u0637\u0627\u0644\u0628\u0647 \u06A9\u0646\u0646\u062F \u0648 \u0641\u0627\u06A9\u062A\u0648\u0631 \u062C\u062F\u06CC\u062F\u06CC \u0628\u0627 \u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u06CC\u0646 \u0647\u0632\u06CC\u0646\u0647 \u0635\u0627\u062F\u0631 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. \u0627\u06AF\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u0641\u0627\u06A9\u062A\u0648\u0631 \u0627\u0635\u0644\u0627\u062D\u200C\u0634\u062F\u0647 \u062F\u0631 \u0645\u062F\u062A \u06F1\u06F4 \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0634\u0648\u062F\u060C \u0628\u0647\u0631\u0647 \u0627\u0636\u0627\u0641\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u062F\u06CC\u0631\u06A9\u0631\u062F \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647 \u0648 \u0646\u0631\u062E \u0642\u0627\u0646\u0648\u0646\u06CC \u06F8\u066A \u0628\u0647\u200C\u0639\u0644\u0627\u0648\u0647 \u06F0.\u06F5\u066A \u067E\u0627\u06CC\u0647 \u0628\u0627\u0646\u06A9 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u062F\u0631 \u0645\u062C\u0645\u0648\u0639 \u06F8.\u06F5\u066A \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. \u0637\u0631\u0641\u06CC\u0646 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0627\u0632 \u0645\u0641\u0627\u062F \u0627\u06CC\u0646 \u0642\u0627\u0646\u0648\u0646 \u062E\u0627\u0631\u062C \u0634\u0648\u0646\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "overflow-hidden font-sans" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center" }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/24.svg",
                        "badge-src": "/img/stacks/reactjs.svg",
                        size: "lg"
                      }),
                      createVNode("div", { class: "" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "md",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u062A\u06CC \u0644\u0648\u067E\u0632 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" bettylopez@eltheme.ir ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-12" }, [
                      createVNode("div", { class: "text-muted-500 dark:text-muted-400 text-sm font-light" }, [
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 text-xs font-normal" }, " \u0634\u0645\u0627\u0631\u0647 \u0641\u0627\u06A9\u062A\u0648\u0631 "),
                        createVNode("p", null, "INV-48654"),
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal" }, " \u062A\u0627\u0631\u06CC\u062E \u0635\u062F\u0648\u0631 "),
                        createVNode("p", null, "\u06F2\u06F9 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1")
                      ]),
                      createVNode("div", { class: "text-muted-500 dark:text-muted-400 text-sm font-light" }, [
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 text-xs font-normal" }, " \u0634\u0631\u0627\u06CC\u0637 "),
                        createVNode("p", null, "\u06F3\u06F0 \u0631\u0648\u0632"),
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 mt-2 text-xs font-normal" }, " \u0645\u0642\u0631\u0631\u06CC "),
                        createVNode("p", null, "\u06F1\u06F9.\u06F0\u06F4.\u06F1\u06F4\u06F0\u06F2")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col justify-between gap-y-8 border-b p-8 sm:flex-row sm:items-center" }, [
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode(_component_TairoLogo, { class: "text-primary-500 size-12" }),
                      createVNode("div", { class: "" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "md",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0634\u0631\u06A9\u062A \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u06CC ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-12" }, [
                      createVNode("div", { class: "text-muted-500 dark:text-muted-400 text-sm font-light" }, [
                        createVNode("p", { class: "text-muted-700 dark:text-muted-100 text-sm font-normal" }, " \u0622\u062F\u0631\u0633 "),
                        createVNode("p", { class: "text-xs" }, " \u062E\u06CC\u0627\u0628\u0627\u0646 \u06A9\u0644\u06CC\u0633\u0627\u060C \u0634\u0645\u0627\u0631\u0647 43 "),
                        createVNode("p", { class: "text-xs" }, " \u0633\u0646 \u062E\u0648\u0632\u0647 \u062F \u0644\u0627 \u0647\u0631\u06CC\u062F\u0627 "),
                        createVNode("p", { class: "text-xs" }, " \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627 91853 ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "px-6 py-8 sm:p-8" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("table", { class: "divide-muted-200 dark:divide-muted-700 min-w-full divide-y" }, [
                        createVNode("thead", { class: "font-sans" }, [
                          createVNode("tr", null, [
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 py-3.5 pe-3 ps-4 text-start text-xs font-medium uppercase sm:ps-6 md:ps-0"
                            }, " \u062A\u0648\u0636\u06CC\u062D\u0627\u062A "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                            }, " \u0648\u0627\u062D\u062F "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                            }, " \u062A\u0639\u062F\u0627\u062F "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 hidden px-3 py-3.5 text-right text-xs font-medium uppercase sm:table-cell"
                            }, " \u0646\u0631\u062E "),
                            createVNode("th", {
                              scope: "col",
                              class: "text-muted-400 py-3.5 pe-4 ps-3 text-right text-xs font-medium uppercase sm:pe-6 md:pe-0"
                            }, " \u0645\u0642\u062F\u0627\u0631 ")
                          ])
                        ]),
                        createVNode("tbody", { class: "font-sans" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.name,
                              class: "border-muted-200 dark:border-muted-700 border-b"
                            }, [
                              createVNode("td", { class: "py-4 pe-3 ps-4 text-sm sm:ps-6 md:ps-0" }, [
                                createVNode("div", { class: "text-muted-800 dark:text-muted-100 font-medium" }, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-muted-400 mt-0.5 text-xs" }, toDisplayString(item.quantity) + " \u0648\u0627\u062D\u062F \u0628\u0647 \u0642\u06CC\u0645\u062A \u0646\u0631\u062E " + toDisplayString(item.rate) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                              ]),
                              createVNode("td", { class: "text-muted-500 dark:text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell" }, " \u0633\u0627\u0639\u062A\u200C\u0647\u0627 "),
                              createVNode("td", { class: "hidden px-3 py-4 text-right text-sm sm:table-cell" }, [
                                createVNode("div", { class: "flex justify-end" }, [
                                  createVNode(_component_BaseInputNumber, {
                                    modelValue: item.quantity,
                                    "onUpdate:modelValue": ($event) => item.quantity = $event,
                                    min: 0,
                                    classes: {
                                      wrapper: "w-32"
                                    }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("td", { class: "text-muted-400 hidden px-3 py-4 text-right text-sm sm:table-cell" }, " \u0646\u0631\u062E " + toDisplayString(item.rate) + " \u062A\u0648\u0645\u0627\u0646 ", 1),
                              createVNode("td", { class: "text-muted-800 dark:text-muted-100 py-4 pe-4 ps-3 text-right text-sm sm:pe-6 md:pe-0" }, toDisplayString((item.rate * item.quantity).toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]);
                          }), 128))
                        ]),
                        createVNode("tfoot", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(totalData), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.label
                            }, [
                              createVNode("th", {
                                scope: "row",
                                colspan: "4",
                                class: "text-muted-400 hidden pe-3 ps-6 pt-6 text-right text-sm font-light sm:table-cell md:ps-0"
                              }, toDisplayString(item.label), 1),
                              createVNode("th", {
                                scope: "row",
                                class: "text-muted-500 pe-3 ps-4 pt-6 text-start text-sm font-light sm:hidden"
                              }, toDisplayString(item.label), 1),
                              createVNode("td", {
                                class: [
                                  "pe-4 ps-3 pt-6 text-right sm:pe-6 md:pe-0",
                                  item.label === "\u0645\u062C\u0645\u0648\u0639" ? "font-semibold text-lg text-muted-800 dark:text-muted-100" : "text-sm text-muted-500 dark:text-muted-200/70"
                                ]
                              }, toDisplayString(item.value.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 3)
                            ]);
                          }), 128))
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-8 p-8" }, [
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-t pt-8" }, [
                      createVNode("div", { class: "text-muted-400" }, [
                        createVNode(_component_BaseParagraph, { size: "xs" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0634\u0631\u0627\u06CC\u0637 \u067E\u0631\u062F\u0627\u062E\u062A \u06F1\u06F4 \u0631\u0648\u0632 \u0627\u0633\u062A. \u0644\u0637\u0641\u0627\u064B \u062A\u0648\u062C\u0647 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F \u06A9\u0647 \u0637\u0628\u0642 \u0642\u0627\u0646\u0648\u0646 \u062A\u0623\u062E\u06CC\u0631 \u062F\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u062F\u0647\u06CC\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u062A\u060C \u0641\u0631\u06CC\u0644\u0646\u0633\u0631\u0647\u0627 \u062D\u0642 \u062F\u0627\u0631\u0646\u062F \u062F\u0631 \u0635\u0648\u0631\u062A \u0639\u062F\u0645 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u062F\u0647\u06CC \u067E\u0633 \u0627\u0632 \u0627\u06CC\u0646 \u0645\u062F\u062A\u060C \u0645\u0628\u0644\u063A \u062A\u0623\u062E\u06CC\u0631 \u0645\u0637\u0627\u0644\u0628\u0647 \u06A9\u0646\u0646\u062F \u0648 \u0641\u0627\u06A9\u062A\u0648\u0631 \u062C\u062F\u06CC\u062F\u06CC \u0628\u0627 \u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u06CC\u0646 \u0647\u0632\u06CC\u0646\u0647 \u0635\u0627\u062F\u0631 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. \u0627\u06AF\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u0641\u0627\u06A9\u062A\u0648\u0631 \u0627\u0635\u0644\u0627\u062D\u200C\u0634\u062F\u0647 \u062F\u0631 \u0645\u062F\u062A \u06F1\u06F4 \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0634\u0648\u062F\u060C \u0628\u0647\u0631\u0647 \u0627\u0636\u0627\u0641\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u062F\u06CC\u0631\u06A9\u0631\u062F \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647 \u0648 \u0646\u0631\u062E \u0642\u0627\u0646\u0648\u0646\u06CC \u06F8\u066A \u0628\u0647\u200C\u0639\u0644\u0627\u0648\u0647 \u06F0.\u06F5\u066A \u067E\u0627\u06CC\u0647 \u0628\u0627\u0646\u06A9 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u062F\u0631 \u0645\u062C\u0645\u0648\u0639 \u06F8.\u06F5\u066A \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. \u0637\u0631\u0641\u06CC\u0646 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0627\u0632 \u0645\u0641\u0627\u062F \u0627\u06CC\u0646 \u0642\u0627\u0646\u0648\u0646 \u062E\u0627\u0631\u062C \u0634\u0648\u0646\u062F. ")
                          ]),
                          _: 1
                        })
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-invoice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
