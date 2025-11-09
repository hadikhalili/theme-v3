import { b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3, f as _sfc_main$C, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
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
  __name: "documents",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pb-24" }, _attrs))}><div class="border-muted-200 dark:border-muted-800 border-b py-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u062F\u0627\u0631\u06A9 `);
          } else {
            return [
              createTextVNode(" \u0645\u062F\u0627\u0631\u06A9 ")
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
            _push2(` \u0645\u062F\u0627\u0631\u06A9 \u062E\u0648\u062F \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0648 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0645\u062F\u0627\u0631\u06A9 \u062E\u0648\u062F \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0648 \u062F\u0627\u0646\u0644\u0648\u062F \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="divide-muted-200 dark:divide-muted-800 space-y-10 py-6"><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "medium",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627 ")
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
            _push2(` \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0648 \u0645\u062C\u0645\u0648\u0639 \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F. \u0628\u0631\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F CSV \u0627\u0632 \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u062E\u0631\u0648\u062C\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0648 \u0645\u062C\u0645\u0648\u0639 \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F. \u0628\u0631\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F CSV \u0627\u0632 \u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u062E\u0631\u0648\u062C\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "xs",
        weight: "medium",
        class: "border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 ")
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
                  _push3(` \u06AF\u0632\u0627\u0631\u0634 \u0633\u0647 \u0645\u0627\u0647\u0647 \u0627\u0648\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u06AF\u0632\u0627\u0631\u0634 \u0633\u0647 \u0645\u0627\u0647\u0647 \u0627\u0648\u0644 ")
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
                  createTextVNode(" \u06AF\u0632\u0627\u0631\u0634 \u0633\u0647 \u0645\u0627\u0647\u0647 \u0627\u0648\u0644 ")
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
                  _push3(` \u0628\u06CC\u0627\u0646\u06CC\u0647 Q\u06F2 `);
                } else {
                  return [
                    createTextVNode(" \u0628\u06CC\u0627\u0646\u06CC\u0647 Q\u06F2 ")
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
                  createTextVNode(" \u0628\u06CC\u0627\u0646\u06CC\u0647 Q\u06F2 ")
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
                  _push3(` \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0633\u0647\u200C\u0645\u0627\u0647\u0647 \u0633\u0648\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0633\u0647\u200C\u0645\u0627\u0647\u0647 \u0633\u0648\u0645 ")
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
                  createTextVNode(" \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 \u0633\u0647\u200C\u0645\u0627\u0647\u0647 \u0633\u0648\u0645 ")
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
      _push(`</div></div></div></div><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "medium",
        class: "text-muted-800 mb-1 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0627\u06CC\u0631 \u0627\u0633\u0646\u0627\u062F `);
          } else {
            return [
              createTextVNode(" \u0633\u0627\u06CC\u0631 \u0627\u0633\u0646\u0627\u062F ")
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
            _push2(` \u0628\u0631\u062E\u06CC \u0627\u0633\u0646\u0627\u062F \u0645\u0641\u06CC\u062F \u06A9\u0647 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0647\u0631 \u0632\u0645\u0627\u0646 \u0628\u0631\u0627\u06CC \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u06CC\u0627 \u062A\u0623\u06CC\u06CC\u062F \u0646\u06CC\u0627\u0632 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u0628\u0631\u062E\u06CC \u0627\u0633\u0646\u0627\u062F \u0645\u0641\u06CC\u062F \u06A9\u0647 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0647\u0631 \u0632\u0645\u0627\u0646 \u0628\u0631\u0627\u06CC \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u06CC\u0627 \u062A\u0623\u06CC\u06CC\u062F \u0646\u06CC\u0627\u0632 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "xs",
        weight: "medium",
        class: "border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 border-b px-4 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0627\u06CC\u0631 \u0627\u0633\u0646\u0627\u062F `);
          } else {
            return [
              createTextVNode(" \u0633\u0627\u06CC\u0631 \u0627\u0633\u0646\u0627\u062F ")
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
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u062D\u0648\u0627\u0644\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u062D\u0648\u0627\u0644\u0647 ")
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
                  createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u062D\u0648\u0627\u0644\u0647 ")
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
                  _push3(` \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0628\u0627\u0646\u06A9\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0628\u0627\u0646\u06A9\u06CC ")
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
                  createTextVNode(" \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0628\u0627\u0646\u06A9\u06CC ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/documents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
