import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, h as _sfc_main$u, a as __nuxt_component_2, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as __nuxt_component_0 } from './TairoCheckAnimated-802ZeQv1.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "review",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC"
    });
    const {
      data: request,
      currentStepId,
      loading,
      complete,
      getPrevStep,
      steps,
      checkPreviousSteps
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$e;
      const _component_TairoCheckAnimated = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      if (!unref(complete)) {
        _push(`<div><div class="mb-8 space-y-2">`);
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
        _push(`</div><div class="w-full max-w-md"><div class="mb-6 w-full">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          class: "p-8"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6 flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                alt: unref(request)?.firstName,
                size: "sm",
                rounded: "none",
                mask: "blob",
                text: unref(request)?.firstName[0],
                color: "primary"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(request)?.firstName && unref(request)?.lastName) {
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  weight: "medium",
                  size: "md",
                  lead: "none",
                  class: "line-clamp-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(request)?.firstName)} ${ssrInterpolate(unref(request)?.lastName)} `);
                      if (unref(request).role) {
                        _push3(ssrRenderComponent(_component_BaseTag, {
                          rounded: "lg",
                          class: "capitalize",
                          size: "sm"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(unref(request)?.role)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(request)?.role), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(request)?.firstName) + " " + toDisplayString(unref(request)?.lastName) + " ", 1),
                        unref(request).role ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          rounded: "lg",
                          class: "capitalize",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(request)?.role), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  weight: "medium",
                  size: "md",
                  lead: "none",
                  class: "line-clamp-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0647\u06CC\u0686 \u0627\u0633\u0645\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A `);
                    } else {
                      return [
                        createTextVNode(" \u0647\u06CC\u0686 \u0627\u0633\u0645\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              if (unref(request)?.email) {
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 line-clamp-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(request).email)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(request).email), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400 line-clamp-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0647\u0646\u0648\u0632 \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A `);
                    } else {
                      return [
                        createTextVNode(" \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0647\u0646\u0648\u0632 \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div></div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(request)?.firstName ? unref(request)?.firstName : "\u0627\u06CC\u0646 \u06A9\u0627\u0631\u0628\u0631")} \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F: `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(request)?.firstName ? unref(request)?.firstName : "\u0627\u06CC\u0646 \u06A9\u0627\u0631\u0628\u0631") + " \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F: ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-6"${_scopeId}><ul class="space-y-2"${_scopeId}><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin" || unref(request)?.role === "custom") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin" || unref(request)?.role === "bookkeeper" || unref(request)?.role === "custom") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627 \u0648 \u067E\u06CC\u0648\u0633\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F. `);
                  } else {
                    return [
                      createTextVNode(" \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627 \u0648 \u067E\u06CC\u0648\u0633\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647\u200C\u0647\u0627 \u0648 \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062A\u06CC\u0645 `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647\u200C\u0647\u0627 \u0648 \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062A\u06CC\u0645 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC \u0634\u0631\u06A9\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC \u0634\u0631\u06A9\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin" || unref(request)?.role === "custom") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 \u0631\u0627 \u0635\u0627\u062F\u0631 \u06A9\u0646\u06CC\u062F \u0648 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F `);
                  } else {
                    return [
                      createTextVNode(" \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 \u0631\u0627 \u0635\u0627\u062F\u0631 \u06A9\u0646\u06CC\u062F \u0648 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin" || unref(request)?.role === "bookkeeper") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627 `);
                  } else {
                    return [
                      createTextVNode(" \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex gap-2"${_scopeId}>`);
              if (unref(request)?.role === "admin" || unref(request)?.role === "cardonly" || unref(request)?.role === "custom") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "text-danger-500 relative top-1 size-4 shrink-0"
                }, null, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-800 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0628\u06AF\u06CC\u0631\u06CC\u062F `);
                  } else {
                    return [
                      createTextVNode(" \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0628\u06AF\u06CC\u0631\u06CC\u062F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul></div></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-6 flex items-center gap-3" }, [
                  createVNode(_component_BaseAvatar, {
                    alt: unref(request)?.firstName,
                    size: "sm",
                    rounded: "none",
                    mask: "blob",
                    text: unref(request)?.firstName[0],
                    color: "primary"
                  }, null, 8, ["alt", "text"]),
                  createVNode("div", null, [
                    unref(request)?.firstName && unref(request)?.lastName ? (openBlock(), createBlock(_component_BaseHeading, {
                      key: 0,
                      weight: "medium",
                      size: "md",
                      lead: "none",
                      class: "line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(request)?.firstName) + " " + toDisplayString(unref(request)?.lastName) + " ", 1),
                        unref(request).role ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          rounded: "lg",
                          class: "capitalize",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(request)?.role), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_BaseHeading, {
                      key: 1,
                      weight: "medium",
                      size: "md",
                      lead: "none",
                      class: "line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0647\u06CC\u0686 \u0627\u0633\u0645\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ]),
                      _: 1
                    })),
                    unref(request)?.email ? (openBlock(), createBlock(_component_BaseParagraph, {
                      key: 2,
                      size: "xs",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(request).email), 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_BaseParagraph, {
                      key: 3,
                      size: "xs",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0647\u0646\u0648\u0632 \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ]),
                      _: 1
                    }))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(request)?.firstName ? unref(request)?.firstName : "\u0627\u06CC\u0646 \u06A9\u0627\u0631\u0628\u0631") + " \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F: ", 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6" }, [
                    createVNode("ul", { class: "space-y-2" }, [
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0645\u0627\u0645 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" || unref(request)?.role === "custom" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" || unref(request)?.role === "bookkeeper" || unref(request)?.role === "custom" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627 \u0648 \u067E\u06CC\u0648\u0633\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0647 \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F. ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647\u200C\u0647\u0627 \u0648 \u0645\u062C\u0648\u0632\u0647\u0627\u06CC \u062A\u06CC\u0645 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC \u0634\u0631\u06A9\u062A ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" || unref(request)?.role === "custom" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 \u0631\u0627 \u0635\u0627\u062F\u0631 \u06A9\u0646\u06CC\u062F \u0648 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" || unref(request)?.role === "bookkeeper" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628\u200C\u0647\u0627 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", { class: "flex gap-2" }, [
                        unref(request)?.role === "admin" || unref(request)?.role === "cardonly" || unref(request)?.role === "custom" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "lucide:check",
                          class: "text-success-500 relative top-1 size-4 shrink-0"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "lucide:x",
                          class: "text-danger-500 relative top-1 size-4 shrink-0"
                        })),
                        createVNode(_component_BaseParagraph, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u06CC\u06A9 \u06A9\u0627\u0631\u062A \u0628\u06AF\u06CC\u0631\u06CC\u062F ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex gap-4">`);
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
          class: "w-full",
          loading: unref(loading),
          disabled: unref(loading)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0627\u0631\u0633\u0627\u0644 \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647</span>`);
            } else {
              return [
                createVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div><div class="mx-auto w-full max-w-md py-6 text-center"><div class="text-primary-500 mx-auto mb-4 size-14">`);
        _push(ssrRenderComponent(_component_TairoCheckAnimated, {
          color: "primary",
          size: "lg"
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h2",
          weight: "medium",
          size: "2xl",
          lead: "tight",
          class: "text-muted-800 mb-2 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F! `);
            } else {
              return [
                createTextVNode(" \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-5" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0639\u0627\u0644\u06CC! \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u067E\u0631 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0645\u062D\u0636 \u0627\u06CC\u0646\u06A9\u0647 \u0634\u062E\u0635 \u0622\u0646 \u0631\u0627 \u0642\u0628\u0648\u0644 \u06A9\u0631\u062F\u060C \u0628\u0647 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u06CC\u0645 \u062F\u0627\u062F. `);
            } else {
              return [
                createTextVNode(" \u0639\u0627\u0644\u06CC! \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u067E\u0631 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0645\u062D\u0636 \u0627\u06CC\u0646\u06A9\u0647 \u0634\u062E\u0635 \u0622\u0646 \u0631\u0627 \u0642\u0628\u0648\u0644 \u06A9\u0631\u062F\u060C \u0628\u0647 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u06CC\u0645 \u062F\u0627\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/layouts/members",
          color: "primary",
          rounded: "md",
          class: "w-48"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0627\u0639\u0636\u0627 `);
            } else {
              return [
                createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0627\u0639\u0636\u0627 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/invite/review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
