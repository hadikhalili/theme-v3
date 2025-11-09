import { _ as _sfc_main$1 } from './BaseIconBox-Cgm-LP3M.mjs';
import { a as __nuxt_component_2, b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3, f as _sfc_main$C } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
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
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "downloads",
  __ssrInlineRender: true,
  setup(__props) {
    const format = ref("quickbooks");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseSelect = _sfc_main$2;
      const _component_BaseAvatar = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pb-24" }, _attrs))}><div class="border-muted-200 dark:border-muted-800 border-b py-6"><div class="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-start">`);
      _push(ssrRenderComponent(_component_BaseIconBox, {
        color: "primary",
        variant: "pastel",
        size: "md",
        rounded: "none",
        mask: "blob"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:chart-pie-slice-duotone",
              class: "size-6"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:chart-pie-slice-duotone",
                class: "size-6"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062E\u0631\u0648\u062C\u06CC \u06AF\u0631\u0641\u062A\u0646 \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC\u062A\u0627\u0646 `);
          } else {
            return [
              createTextVNode(" \u062E\u0631\u0648\u062C\u06CC \u06AF\u0631\u0641\u062A\u0646 \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC\u062A\u0627\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0642\u0627\u0644\u0628 CSV \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0642\u0627\u0644\u0628 CSV \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sm:ms-auto">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(format),
        "onUpdate:modelValue": ($event) => isRef(format) ? format.value = $event : null,
        rounded: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="quickbooks"${_scopeId}> \u06A9\u0648\u06CC\u06CC\u06A9\u200C\u0628\u0648\u06A9\u0633 CSV </option><option value="xero"${_scopeId}> \u0632\u0631\u0648 CSV </option><option value="freshbooks"${_scopeId}> \u0641\u0627\u06CC\u0644 CSV \u0641\u0631\u0634\u0628\u0627\u06A9\u0633 </option>`);
          } else {
            return [
              createVNode("option", { value: "quickbooks" }, " \u06A9\u0648\u06CC\u06CC\u06A9\u200C\u0628\u0648\u06A9\u0633 CSV "),
              createVNode("option", { value: "xero" }, " \u0632\u0631\u0648 CSV "),
              createVNode("option", { value: "freshbooks" }, " \u0641\u0627\u06CC\u0644 CSV \u0641\u0631\u0634\u0628\u0627\u06A9\u0633 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="divide-muted-200 dark:divide-muted-800 space-y-10 py-6"><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4"><div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        src: `/img/logos/companies/${unref(format)}-full.svg`
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u062A\u0631\u0627\u06A9\u0646\u0634 `);
          } else {
            return [
              createTextVNode(" \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u062A\u0631\u0627\u06A9\u0646\u0634 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        class: "text-muted-500 dark:text-muted-400 max-w-xs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u0642\u0627\u0644\u0628 CSV \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F. \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u06A9\u0647 \u0642\u0627\u0644\u0628 CSV \u0645\u0646\u0627\u0633\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u0642\u0627\u0644\u0628 CSV \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F. \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u06A9\u0647 \u0642\u0627\u0644\u0628 CSV \u0645\u0646\u0627\u0633\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="md:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "xs",
        weight: "medium",
        class: "border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0648\u0631\u0647 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u062F\u0648\u0631\u0647 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u062A\u06CC\u0631 \u06F1\u06F4\u06F0\u06F2 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u062E\u0631\u062F\u0627\u062F \u06F1\u06F4\u06F0\u06F2 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A \u06F1\u06F4\u06F0\u06F2 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 \u06F1\u06F4\u06F0\u06F2 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0627\u0633\u0641\u0646\u062F \u06F1\u06F4\u06F0\u06F1 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-200 dark:hover:bg-muted-700 flex items-center gap-2 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u06CC \u06F1\u06F4\u06F0\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u062F\u06CC \u06F1\u06F4\u06F0\u06F2 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u0627\u0646\u0644\u0648\u062F PDF `);
                } else {
                  return [
                    createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseText, { size: "sm" }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u06CC \u06F1\u06F4\u06F0\u06F2 ")
                ]),
                _: 1
              }),
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u062F\u0627\u0646\u0644\u0648\u062F PDF ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/downloads.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
