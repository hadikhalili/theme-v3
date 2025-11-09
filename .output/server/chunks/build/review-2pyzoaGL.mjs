import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C, a as __nuxt_component_2, e as _sfc_main$e } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as __nuxt_component_0$1 } from './TairoCheckAnimated-802ZeQv1.mjs';
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
      getNextStep,
      getPrevStep,
      steps,
      checkPreviousSteps
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseButton = _sfc_main$e;
      const _component_TairoCheckAnimated = __nuxt_component_0$1;
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
        _push(`</div><div class="w-full max-w-md space-y-6"><div class="flex items-end justify-between pb-4"><div class="flex-1">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0645\u0628\u0644\u063A \u0627\u0646\u062A\u0642\u0627\u0644 `);
            } else {
              return [
                createTextVNode(" \u0645\u0628\u0644\u063A \u0627\u0646\u062A\u0642\u0627\u0644 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "3xl",
          weight: "medium",
          class: "text-muted-800 dark:text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(request).amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(request).amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex-1 text-end">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0634\u0645\u0627\u0631\u0647 \u0645\u0633\u06CC\u0631 `);
            } else {
              return [
                createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u0645\u0633\u06CC\u0631 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(request).routingNumber) {
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h3",
            size: "sm",
            weight: "medium",
            class: "text-muted-800 dark:text-muted-100 flex h-10 items-center justify-end"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(request).prefix) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(unref(request).prefix)}-</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(request).routingNumber)}</span>`);
              } else {
                return [
                  unref(request).prefix ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(request).prefix) + "-", 1)) : createCommentVNode("", true),
                  createVNode("span", null, toDisplayString(unref(request).routingNumber), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            class: "text-muted-500 dark:text-muted-400 flex h-10 items-center justify-end"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0634\u0645\u0627\u0631\u0647\u200C\u0627\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A `);
              } else {
                return [
                  createTextVNode(" \u0634\u0645\u0627\u0631\u0647\u200C\u0627\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div><div><p class="font-heading text-muted-400 mb-1 text-xs"> \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 </p><div class="flex w-full gap-6 py-4"><div class="bg-muted-200 flex size-12 items-center justify-center rounded-full">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:user-duotone",
          class: "text-muted-400 size-6"
        }, null, _parent));
        _push(`</div><div>`);
        if (unref(request).recipient.name !== "") {
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "medium",
            class: "text-muted-800 dark:text-muted-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(request).recipient.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(request).recipient.name), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h4",
            size: "sm",
            weight: "medium",
            class: "text-muted-800 dark:text-muted-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` N/A `);
              } else {
                return [
                  createTextVNode(" N/A ")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        if (unref(request).recipient.address.lineOne !== "") {
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(request).recipient.address.lineOne)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(request).recipient.address.lineOne), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u0622\u062F\u0631\u0633\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A `);
              } else {
                return [
                  createTextVNode(" \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u0622\u062F\u0631\u0633\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        if (unref(request).recipient.address.lineTwo !== "") {
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(request).recipient.address.lineTwo)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(request).recipient.address.lineTwo), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(request).recipient.address.city !== "") {
                _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(request).recipient.address.city)}, `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(request).recipient.address.city) + ", ", 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(request).recipient.address.postalCode !== "") {
                _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(request).recipient.address.postalCode)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(request).recipient.address.postalCode), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(request).recipient.address.city !== "" ? (openBlock(), createBlock(_component_BaseText, {
                  key: 0,
                  size: "xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(request).recipient.address.city) + ", ", 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                unref(request).recipient.address.postalCode !== "" ? (openBlock(), createBlock(_component_BaseText, {
                  key: 1,
                  size: "xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(request).recipient.address.postalCode), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(request).recipient.address.lineOne !== "") {
          _push(ssrRenderComponent(_component_BaseParagraph, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(request).recipient.address.state !== "") {
                  _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(request).recipient.address.state)}, `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(request).recipient.address.state) + ", ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (unref(request).recipient.address.country !== "") {
                  _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(request).recipient.address.country)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(request).recipient.address.country), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(request).recipient.address.state !== "" ? (openBlock(), createBlock(_component_BaseText, {
                    key: 0,
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(request).recipient.address.state) + ", ", 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(request).recipient.address.country !== "" ? (openBlock(), createBlock(_component_BaseText, {
                    key: 1,
                    size: "xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(request).recipient.address.country), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div><p class="font-heading text-muted-400 mb-1 text-xs"> \u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0632 </p><div class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 w-full rounded-xl border bg-white p-4"><div class="flex w-full items-center gap-3 text-start">`);
        _push(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 size-8" }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: "text-muted-800 dark:text-muted-200 block capitalize"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(request).account?.type)} ${ssrInterpolate(unref(request).account?.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(request).account?.type) + " " + toDisplayString(unref(request).account?.label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-500 dark:text-muted-400 block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(request).account?.balance.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(request).account?.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="ms-auto pe-4">`);
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-800 dark:text-muted-200 block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A `);
            } else {
              return [
                createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(request).method) {
          _push(ssrRenderComponent(_component_BaseText, {
            size: "xs",
            class: "text-muted-500 dark:text-muted-400 block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(request).method)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(request).method), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div><div class="flex gap-4">`);
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
              _push2(`<span${_scopeId}>\u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644</span>`);
            } else {
              return [
                createVNode("span", null, "\u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644")
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
              _push2(` \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F! `);
            } else {
              return [
                createTextVNode(" \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-5" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632! \u0634\u0645\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u06CC\u0645 \u062F\u0627\u062F \u0628\u0647 \u0645\u062D\u0636 \u0627\u06CC\u0646\u06A9\u0647 \u0648\u062C\u0648\u0647 \u062F\u0631 \u0631\u0627\u0647 \u0627\u0633\u062A. `);
            } else {
              return [
                createTextVNode(" \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632! \u0634\u0645\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u062A\u06A9\u0645\u06CC\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u0628\u0647 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u06CC\u0645 \u062F\u0627\u062F \u0628\u0647 \u0645\u062D\u0636 \u0627\u06CC\u0646\u06A9\u0647 \u0648\u062C\u0648\u0647 \u062F\u0631 \u0631\u0627\u0647 \u0627\u0633\u062A. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/dashboards",
          color: "primary",
          rounded: "md",
          class: "w-48"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F `);
            } else {
              return [
                createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/send/review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
