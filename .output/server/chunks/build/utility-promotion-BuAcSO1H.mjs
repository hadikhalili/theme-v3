import { h as _sfc_main$u, l as _sfc_main$3, b as _sfc_main$w, e as _sfc_main$e, f as _sfc_main$C, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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

const _imports_0 = publicAssetsURL("/img/illustrations/placeholders/flat/placeholder-promotion.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/placeholders/flat/placeholder-promotion-dark.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-promotion",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-8" }, _attrs))}><div class="mx-auto w-full max-w-4xl">`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x rtl:divide-x-reverse sm:divide-y-0"${_scopeId}><div class="flex flex-col p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
              title: "\u0642\u062F\u0631\u062A\u200C\u0628\u062E\u0634\u06CC \u0628\u0647 \u062A\u06CC\u0645 \u062E\u0648\u062F",
              subtitle: "\u062A\u06CC\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 \u0645\u0627 \u06A9\u0627\u0631\u0622\u0645\u062F\u062A\u0631 \u0648 \u067E\u0631\u0628\u0627\u0632\u062F\u0647\u200C\u062A\u0631 \u06A9\u0646\u06CC\u062F. \u0627\u06CC\u0646 \u0641\u0631\u0635\u062A \u0639\u0627\u0644\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F!"
            }, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="placeholder-image"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="placeholder-image"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "block dark:hidden",
                      src: _imports_0,
                      alt: "placeholder-image"
                    }),
                    createVNode("img", {
                      class: "hidden dark:block",
                      src: _imports_1,
                      alt: "placeholder-image"
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    size: "2xl",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400 text-sm"${_scopeId3}>\u0641\u0642\u0637</span><span class="px-1"${_scopeId3}> \u06F4\u06F4.\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646</span><span class="text-muted-400 text-sm"${_scopeId3}>/ \u062F\u0631 \u0645\u0627\u0647</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400 text-sm" }, "\u0641\u0642\u0637"),
                          createVNode("span", { class: "px-1" }, " \u06F4\u06F4.\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646"),
                          createVNode("span", { class: "text-muted-400 text-sm" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-8 flex items-center justify-between gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0631\u062F \u06A9\u0631\u062F\u0646 `);
                      } else {
                        return [
                          createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u0631\u062A\u0642\u0627\u0621 `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u0631\u062A\u0642\u0627\u0621 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "2xl",
                        weight: "medium",
                        lead: "none"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400 text-sm" }, "\u0641\u0642\u0637"),
                          createVNode("span", { class: "px-1" }, " \u06F4\u06F4.\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646"),
                          createVNode("span", { class: "text-muted-400 text-sm" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "mt-8 flex items-center justify-between gap-2" }, [
                      createVNode(_component_BaseButton, { class: "w-full" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        class: "w-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0631\u062A\u0642\u0627\u0621 ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="flex flex-col p-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "md",
              weight: "medium",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u062A\u0642\u0627\u0621 \u062F\u0647\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u062A\u0642\u0627\u0621 \u062F\u0647\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-xs"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u06AF\u0627\u0647\u06CC \u0628\u0647 \u0628\u0631\u062E\u06CC \u0627\u0632 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 \u06A9\u0647 \u0628\u0647 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 \u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F \u0628\u06CC\u0646\u062F\u0627\u0632\u06CC\u062F. \u0628\u0627\u0648\u0631 \u0646\u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F! `);
                } else {
                  return [
                    createTextVNode(" \u0646\u06AF\u0627\u0647\u06CC \u0628\u0647 \u0628\u0631\u062E\u06CC \u0627\u0632 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 \u06A9\u0647 \u0628\u0647 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 \u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F \u0628\u06CC\u0646\u062F\u0627\u0632\u06CC\u062F. \u0628\u0627\u0648\u0631 \u0646\u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6"${_scopeId}><ul class="space-y-6"${_scopeId}><li class="flex gap-3"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex size-9 items-center justify-center rounded-full border bg-white shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F8 \u0635\u0646\u062F\u0644\u06CC \u062A\u06CC\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u06F8 \u0635\u0646\u062F\u0644\u06CC \u062A\u06CC\u0645 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0647\u0631 \u0639\u0636\u0648 \u062A\u06CC\u0645 \u062F\u0631 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0648 \u0648\u0638\u0627\u06CC\u0641\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u062F. `);
                } else {
                  return [
                    createTextVNode(" \u0647\u0631 \u0639\u0636\u0648 \u062A\u06CC\u0645 \u062F\u0631 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0648 \u0648\u0638\u0627\u06CC\u0641\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li><li class="flex gap-3"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex size-9 items-center justify-center rounded-full border bg-white shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06CC\u06A9\u067E\u0627\u0631\u0686\u06AF\u06CC\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u06CC\u06A9\u067E\u0627\u0631\u0686\u06AF\u06CC\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0627 \u06F5 \u0627\u0641\u0632\u0648\u0646\u0647 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0635\u0644\u06CC \u062E\u0648\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u0647 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u0646\u062F. `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0627 \u06F5 \u0627\u0641\u0632\u0648\u0646\u0647 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0635\u0644\u06CC \u062E\u0648\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u0647 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u0646\u062F. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li><li class="flex gap-3"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex size-9 items-center justify-center rounded-full border bg-white shadow-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:check",
              class: "text-success-500 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0642\u06CC\u0627\u0633 \u0631\u0634\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0642\u06CC\u0627\u0633 \u0631\u0634\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u0628\u0647 \u0645\u0648\u0627\u0632\u0627\u062A \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u062A\u0627\u0646 \u0631\u0634\u062F \u0645\u06CC\u200C\u06A9\u0646\u062F\u060C \u0628\u062F\u0648\u0646 \u0647\u06CC\u0686 \u062A\u0644\u0627\u0634\u06CC. `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u0628\u0647 \u0645\u0648\u0627\u0632\u0627\u062A \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u062A\u0627\u0646 \u0631\u0634\u062F \u0645\u06CC\u200C\u06A9\u0646\u062F\u060C \u0628\u062F\u0648\u0646 \u0647\u06CC\u0686 \u062A\u0644\u0627\u0634\u06CC. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li></ul></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x rtl:divide-x-reverse sm:divide-y-0" }, [
                createVNode("div", { class: "flex flex-col p-8" }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "\u0642\u062F\u0631\u062A\u200C\u0628\u062E\u0634\u06CC \u0628\u0647 \u062A\u06CC\u0645 \u062E\u0648\u062F",
                    subtitle: "\u062A\u06CC\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 \u0645\u0627 \u06A9\u0627\u0631\u0622\u0645\u062F\u062A\u0631 \u0648 \u067E\u0631\u0628\u0627\u0632\u062F\u0647\u200C\u062A\u0631 \u06A9\u0646\u06CC\u062F. \u0627\u06CC\u0646 \u0641\u0631\u0635\u062A \u0639\u0627\u0644\u06CC \u0631\u0627 \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F!"
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "placeholder-image"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "placeholder-image"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "mx-auto mt-6 flex w-full max-w-[280px] items-end justify-center gap-2" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "2xl",
                          weight: "medium",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-400 text-sm" }, "\u0641\u0642\u0637"),
                            createVNode("span", { class: "px-1" }, " \u06F4\u06F4.\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646"),
                            createVNode("span", { class: "text-muted-400 text-sm" }, "/ \u062F\u0631 \u0645\u0627\u0647")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "mt-8 flex items-center justify-between gap-2" }, [
                        createVNode(_component_BaseButton, { class: "w-full" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          color: "primary",
                          class: "w-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0627\u0631\u062A\u0642\u0627\u0621 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "flex flex-col p-8" }, [
                    createVNode(_component_BaseHeading, {
                      tag: "h2",
                      size: "md",
                      weight: "medium",
                      class: "mt-4"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0631\u062A\u0642\u0627\u0621 \u062F\u0647\u06CC\u062F ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400 max-w-xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0646\u06AF\u0627\u0647\u06CC \u0628\u0647 \u0628\u0631\u062E\u06CC \u0627\u0632 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 \u06A9\u0647 \u0628\u0647 \u0637\u0631\u062D \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 \u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F \u0628\u06CC\u0646\u062F\u0627\u0632\u06CC\u062F. \u0628\u0627\u0648\u0631 \u0646\u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F! ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-6" }, [
                      createVNode("ul", { class: "space-y-6" }, [
                        createVNode("li", { class: "flex gap-3" }, [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex size-9 items-center justify-center rounded-full border bg-white shadow-xl" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "text-success-500 size-4"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u06F8 \u0635\u0646\u062F\u0644\u06CC \u062A\u06CC\u0645 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0647\u0631 \u0639\u0636\u0648 \u062A\u06CC\u0645 \u062F\u0631 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0648 \u0648\u0638\u0627\u06CC\u0641\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u062F. ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("li", { class: "flex gap-3" }, [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex size-9 items-center justify-center rounded-full border bg-white shadow-xl" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "text-success-500 size-4"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u06CC\u06A9\u067E\u0627\u0631\u0686\u06AF\u06CC\u200C\u0647\u0627 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u062A\u0627 \u06F5 \u0627\u0641\u0632\u0648\u0646\u0647 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0635\u0644\u06CC \u062E\u0648\u062F \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0628\u0647 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u0646\u062F. ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("li", { class: "flex gap-3" }, [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 flex size-9 items-center justify-center rounded-full border bg-white shadow-xl" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:check",
                              class: "text-success-500 size-4"
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0645\u0642\u06CC\u0627\u0633 \u0631\u0634\u062F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400 max-w-[210px]"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647 \u0634\u0645\u0627 \u0628\u0647 \u0645\u0648\u0627\u0632\u0627\u062A \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631\u062A\u0627\u0646 \u0631\u0634\u062F \u0645\u06CC\u200C\u06A9\u0646\u062F\u060C \u0628\u062F\u0648\u0646 \u0647\u06CC\u0686 \u062A\u0644\u0627\u0634\u06CC. ")
                              ]),
                              _: 1
                            })
                          ])
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-promotion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
