import { i as _export_sfc, h as _sfc_main$u, v as __nuxt_component_0$1, c as _sfc_main$v, f as _sfc_main$C, _ as __nuxt_component_0$3, a as __nuxt_component_2, b as _sfc_main$w } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/img/logos/brands/nuxt-light.svg");
const _imports_1 = publicAssetsURL("/img/logos/brands/nuxt-dark.svg");
const _imports_2 = publicAssetsURL("/img/logos/brands/tailwindcss-light.svg");
const _imports_3 = publicAssetsURL("/img/logos/brands/tailwindcss-dark.svg");
const _imports_4 = publicAssetsURL("/img/logos/brands/shuriken-gradient-light.svg");
const _imports_5 = publicAssetsURL("/img/logos/brands/shuriken-gradient-dark.svg");
const _imports_6 = publicAssetsURL("/img/logos/brands/typescript-text.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseCard = _sfc_main$u;
  const _component_TairoLogoText = __nuxt_component_0$1;
  const _component_BaseParagraph = _sfc_main$v;
  const _component_BaseText = _sfc_main$C;
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_Icon = __nuxt_component_2;
  const _component_BaseHeading = _sfc_main$w;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_BaseCard, {
    rounded: "sm",
    class: "p-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text-muted-400 hover:text-primary-500 dark:text-muted-600 dark:hover:text-primary-500 mb-7 block transition-colors duration-300"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TairoLogoText, { class: "h-8 transition-colors duration-300" }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400 mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u062A\u0627\u06CC\u0631\u0648 \u06CC\u06A9 \u06A9\u06CC\u062A UI \u0642\u062F\u0631\u062A\u0645\u0646\u062F \u0628\u0631\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648\u0628 \u0628\u0627 Nuxt / Tailwind CSS \u0627\u0633\u062A \u06A9\u0647 \u0628\u0627 Vue 3 \u0648 TypeScript \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u06CC\u06A9 \u06A9\u06CC\u062A UI \u0642\u062F\u0631\u062A\u0645\u0646\u062F \u0628\u0631\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648\u0628 \u0628\u0627 Nuxt / Tailwind CSS \u0627\u0633\u062A \u06A9\u0647 \u0628\u0627 Vue 3 \u0648 TypeScript \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: "text-muted-400 dark:text-muted-400"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \u062A\u0627\u06CC\u0631\u0648 \u062A\u0645\u0627\u0645 \u0622\u0646\u0686\u0647 \u0631\u0627 \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648\u0628 \u0645\u062F\u0631\u0646 \u06CC\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u060C \u0641\u0631\u0627\u0647\u0645 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u062A\u0645\u0627\u0645\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0647 \u0628\u0627 Tailwind CSS \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0648 \u0628\u0647 \u0648\u0633\u06CC\u0644\u0647 \u0646\u0627\u06A9\u0633\u062A \u062A\u0642\u0648\u06CC\u062A \u0634\u062F\u0647\u200C\u0627\u0646\u062F. `);
            } else {
              return [
                createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u062A\u0645\u0627\u0645 \u0622\u0646\u0686\u0647 \u0631\u0627 \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648\u0628 \u0645\u062F\u0631\u0646 \u06CC\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u060C \u0641\u0631\u0627\u0647\u0645 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u062A\u0645\u0627\u0645\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0647 \u0628\u0627 Tailwind CSS \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0648 \u0628\u0647 \u0648\u0633\u06CC\u0644\u0647 \u0646\u0627\u06A9\u0633\u062A \u062A\u0642\u0648\u06CC\u062A \u0634\u062F\u0647\u200C\u0627\u0646\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/documentation/setup",
          class: "text-primary-500 group mt-6 flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="me-1"${_scopeId2}>\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639</span>`);
              _push3(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "size-4 transition-transform duration-300 group-hover:translate-x-2"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("span", { class: "me-1" }, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639"),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
                  class: "size-4 transition-transform duration-300 group-hover:translate-x-2"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text-muted-400 hover:text-primary-500 dark:text-muted-600 dark:hover:text-primary-500 mb-7 block transition-colors duration-300" }, [
            createVNode(_component_TairoLogoText, { class: "h-8 transition-colors duration-300" })
          ]),
          createVNode(_component_BaseParagraph, {
            size: "sm",
            class: "text-muted-500 dark:text-muted-400 mb-4"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u06CC\u06A9 \u06A9\u06CC\u062A UI \u0642\u062F\u0631\u062A\u0645\u0646\u062F \u0628\u0631\u0627\u06CC \u0645\u062F\u06CC\u0631\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648\u0628 \u0628\u0627 Nuxt / Tailwind CSS \u0627\u0633\u062A \u06A9\u0647 \u0628\u0627 Vue 3 \u0648 TypeScript \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
            ]),
            _: 1
          }),
          createVNode(_component_BaseText, {
            size: "sm",
            class: "text-muted-400 dark:text-muted-400"
          }, {
            default: withCtx(() => [
              createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u062A\u0645\u0627\u0645 \u0622\u0646\u0686\u0647 \u0631\u0627 \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0633\u0627\u062E\u062A \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648\u0628 \u0645\u062F\u0631\u0646 \u06CC\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u062F\u06CC\u0631\u06CC\u062A\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F\u060C \u0641\u0631\u0627\u0647\u0645 \u0645\u06CC\u200C\u06A9\u0646\u062F. \u062A\u0645\u0627\u0645\u06CC \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A\u200C\u0647\u0627\u06CC \u067E\u0627\u06CC\u0647 \u0628\u0627 Tailwind CSS \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0648 \u0628\u0647 \u0648\u0633\u06CC\u0644\u0647 \u0646\u0627\u06A9\u0633\u062A \u062A\u0642\u0648\u06CC\u062A \u0634\u062F\u0647\u200C\u0627\u0646\u062F. ")
            ]),
            _: 1
          }),
          createVNode(_component_NuxtLink, {
            to: "/documentation/setup",
            class: "text-primary-500 group mt-6 flex items-center font-sans text-sm font-medium transition-opacity hover:opacity-90"
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "me-1" }, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639"),
              createVNode(_component_Icon, {
                name: "lucide:arrow-right",
                class: "size-4 transition-transform duration-300 group-hover:translate-x-2"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid gap-2 sm:grid-cols-2 xl:gap-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://nuxt.com/docs",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          rounded: "sm",
          class: "group-hover:border-success-500 flex h-full items-center p-8 text-center sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} class="block h-6 sm:mx-auto dark:hidden" alt="Nuxt logo"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="hidden h-6 sm:mx-auto dark:block" alt="Nuxt logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Nuxt `);
                  } else {
                    return [
                      createTextVNode(" Nuxt ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  class: "block h-6 sm:mx-auto dark:hidden",
                  alt: "Nuxt logo"
                }),
                createVNode("img", {
                  src: _imports_1,
                  class: "hidden h-6 sm:mx-auto dark:block",
                  alt: "Nuxt logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Nuxt ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            rounded: "sm",
            class: "group-hover:border-success-500 flex h-full items-center p-8 text-center sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                class: "block h-6 sm:mx-auto dark:hidden",
                alt: "Nuxt logo"
              }),
              createVNode("img", {
                src: _imports_1,
                class: "hidden h-6 sm:mx-auto dark:block",
                alt: "Nuxt logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Nuxt ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://tailwindcss.com/docs/installation",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          rounded: "sm",
          class: "flex h-full items-center p-8 text-center group-hover:border-sky-500 sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_2)} class="block h-7 sm:mx-auto dark:hidden" alt="Tailwind CSS logo"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="hidden h-7 sm:mx-auto dark:block" alt="Tailwind CSS logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Tailwind CSS `);
                  } else {
                    return [
                      createTextVNode(" Tailwind CSS ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_2,
                  class: "block h-7 sm:mx-auto dark:hidden",
                  alt: "Tailwind CSS logo"
                }),
                createVNode("img", {
                  src: _imports_3,
                  class: "hidden h-7 sm:mx-auto dark:block",
                  alt: "Tailwind CSS logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tailwind CSS ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            rounded: "sm",
            class: "flex h-full items-center p-8 text-center group-hover:border-sky-500 sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_2,
                class: "block h-7 sm:mx-auto dark:hidden",
                alt: "Tailwind CSS logo"
              }),
              createVNode("img", {
                src: _imports_3,
                class: "hidden h-7 sm:mx-auto dark:block",
                alt: "Tailwind CSS logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tailwind CSS ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://github.com/shuriken-ui",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          rounded: "sm",
          class: "flex h-full items-center p-8 text-center group-hover:border-violet-500 sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_4)} class="block h-8 sm:mx-auto dark:hidden" alt="Shuriken UI logo"${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} class="hidden h-8 sm:mx-auto dark:block" alt="Shuriken UI logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u0631\u06CC\u06A9\u0646 `);
                  } else {
                    return [
                      createTextVNode(" \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u0631\u06CC\u06A9\u0646 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_4,
                  class: "block h-8 sm:mx-auto dark:hidden",
                  alt: "Shuriken UI logo"
                }),
                createVNode("img", {
                  src: _imports_5,
                  class: "hidden h-8 sm:mx-auto dark:block",
                  alt: "Shuriken UI logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u0631\u06CC\u06A9\u0646 ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            rounded: "sm",
            class: "flex h-full items-center p-8 text-center group-hover:border-violet-500 sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_4,
                class: "block h-8 sm:mx-auto dark:hidden",
                alt: "Shuriken UI logo"
              }),
              createVNode("img", {
                src: _imports_5,
                class: "hidden h-8 sm:mx-auto dark:block",
                alt: "Shuriken UI logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u0631\u06CC\u06A9\u0646 ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://www.typescriptlang.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    class: "group flex h-full flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BaseCard, {
          rounded: "sm",
          class: "flex h-full items-center p-8 text-center group-hover:border-blue-500 sm:justify-center sm:p-2"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_6)} class="block h-7 sm:mx-auto" alt="Typescript logo"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Typescript `);
                  } else {
                    return [
                      createTextVNode(" Typescript ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("img", {
                  src: _imports_6,
                  class: "block h-7 sm:mx-auto",
                  alt: "Typescript logo"
                }),
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "semibold",
                  class: "text-muted-800 sr-only dark:text-white"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Typescript ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BaseCard, {
            rounded: "sm",
            class: "flex h-full items-center p-8 text-center group-hover:border-blue-500 sm:justify-center sm:p-2"
          }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_6,
                class: "block h-7 sm:mx-auto",
                alt: "Typescript logo"
              }),
              createVNode(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "semibold",
                class: "text-muted-800 sr-only dark:text-white"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Typescript ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocOverview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { DocOverview as default };
