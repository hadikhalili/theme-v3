import { b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, f as _sfc_main$C, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseSwitchThin-DO5QSQNt.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, useSSRContext } from 'vue';
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
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    const session = ref(true);
    const password = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseText = _sfc_main$C;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseSwitchThin = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-muted-200 dark:divide-muted-800 space-y-20 py-6" }, _attrs))}><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
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
            _push2(` \u06CC\u06A9 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0645\u0646\u062D\u0635\u0631 \u0628\u0647 \u0641\u0631\u062F \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0645\u062D\u0627\u0641\u0638\u062A \u06A9\u0646\u06CC\u062F. \u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0627\u0632 \u0632\u0645\u0627\u0646 \u0628\u0647 \u0632\u0645\u0627\u0646 \u0622\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u06CC\u06A9 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0645\u0646\u062D\u0635\u0631 \u0628\u0647 \u0641\u0631\u062F \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0645\u062D\u0627\u0641\u0638\u062A \u06A9\u0646\u06CC\u062F. \u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0627\u0632 \u0632\u0645\u0627\u0646 \u0628\u0647 \u0632\u0645\u0627\u0646 \u0622\u0646 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u06CC\u062F. ")
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
            _push2(` \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062D\u0633\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group"><a href="#" class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-4 p-4 text-sm transition-colors duration-300"><div><h3 class="font-heading text-muted-400 text-xs">\u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3><span>\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</span></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:edit-3",
        class: "ms-auto size-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        weight: "semibold",
        class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
          } else {
            return [
              createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><div class="group"><a href="#" class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-4 p-4 text-sm transition-colors duration-300"><div><h3 class="font-heading text-muted-400 text-xs"> \u06A9\u062F\u0647\u0627\u06CC \u067E\u0634\u062A\u06CC\u0628\u0627\u0646 </h3><span>\u0627\u06CC\u062C\u0627\u062F \u06A9\u062F\u0647\u0627</span></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:edit-3",
        class: "ms-auto size-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseText, {
        size: "xs",
        weight: "semibold",
        class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
          } else {
            return [
              createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></div></div></div><div class="grid gap-8 md:grid-cols-12"><div class="md:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062F\u0648 \u0639\u0627\u0645\u0644\u06CC `);
          } else {
            return [
              createTextVNode(" \u062F\u0648 \u0639\u0627\u0645\u0644\u06CC ")
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
            _push2(` \u0631\u0648\u0634 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A (\u0645\u0627\u0646\u0646\u062F \u0622\u0648\u062B\u06CC \u06CC\u0627 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06AF\u0648\u06AF\u0644) \u0631\u0627 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u062A\u0646\u0638\u06CC\u0645 \u06CC\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u0631\u0648\u0634 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A (\u0645\u0627\u0646\u0646\u062F \u0622\u0648\u062B\u06CC \u06CC\u0627 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06AF\u0648\u06AF\u0644) \u0631\u0627 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u062A\u0646\u0638\u06CC\u0645 \u06CC\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F. ")
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
            _push2(` \u062F\u0648 \u0639\u0627\u0645\u0644\u06CC `);
          } else {
            return [
              createTextVNode(" \u062F\u0648 \u0639\u0627\u0645\u0644\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "xs",
              weight: "medium",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:edit-3",
              class: "ms-auto size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xs",
                  weight: "medium",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0631\u0627\u0647\u200C\u0627\u0646\u062F\u0627\u0632\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_Icon, {
                name: "lucide:edit-3",
                class: "ms-auto size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
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
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "xs",
              weight: "medium",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Key `);
                } else {
                  return [
                    createTextVNode(" Key ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0644\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0644\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:edit-3",
              class: "ms-auto size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xs",
                  weight: "medium",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Key ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0644\u06CC\u062F ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_Icon, {
                name: "lucide:edit-3",
                class: "ms-auto size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
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
        class: "font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-4 p-4 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "xs",
              weight: "medium",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0644\u0641\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0644\u0641\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:edit-3",
              class: "ms-auto size-4"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "semibold",
              class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xs",
                  weight: "medium",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062A\u0644\u0641\u0646 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_Icon, {
                name: "lucide:edit-3",
                class: "ms-auto size-4"
              }),
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "semibold",
                class: "text-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 ")
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
        size: "md",
        weight: "medium",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A\u06CC `);
          } else {
            return [
              createTextVNode(" \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A\u06CC ")
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
            _push2(` \u0628\u0631\u062E\u06CC \u0627\u0632 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627 \u0647\u0646\u06AF\u0627\u0645 \u0628\u0631\u0631\u0633\u06CC \u0627\u0645\u0646\u06CC\u062A \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0636\u0631\u0648\u0631\u06CC \u0647\u0633\u062A\u0646\u062F. \u0645\u0631\u0627\u0642\u0628 \u0628\u0627\u0634\u06CC\u062F! `);
          } else {
            return [
              createTextVNode(" \u0628\u0631\u062E\u06CC \u0627\u0632 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627 \u0647\u0646\u06AF\u0627\u0645 \u0628\u0631\u0631\u0633\u06CC \u0627\u0645\u0646\u06CC\u062A \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0636\u0631\u0648\u0631\u06CC \u0647\u0633\u062A\u0646\u062F. \u0645\u0631\u0627\u0642\u0628 \u0628\u0627\u0634\u06CC\u062F! ")
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
            _push2(` \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="divide-muted-200 dark:divide-muted-800 flex flex-col divide-y"><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(session),
        "onUpdate:modelValue": ($event) => isRef(session) ? session.value = $event : null
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
            _push2(` \u062C\u0644\u0633\u0647 `);
          } else {
            return [
              createTextVNode(" \u062C\u0644\u0633\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F \u0634\u0631\u0648\u0639 \u0634\u062F `);
          } else {
            return [
              createTextVNode(" \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F \u0634\u0631\u0648\u0639 \u0634\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="group"><div class="font-heading text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 flex items-center gap-2 p-4 text-sm transition-colors duration-300">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
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
            _push2(` \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 `);
          } else {
            return [
              createTextVNode(" \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 `);
          } else {
            return [
              createTextVNode(" \u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/settings/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
