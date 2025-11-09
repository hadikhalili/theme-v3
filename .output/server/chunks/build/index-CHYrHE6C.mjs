import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C, A as _sfc_main$E, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseRadioHeadless-BL03emlX.mjs';
import { defineComponent, resolveDirective, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A"
    });
    const {
      data: request,
      currentStepId,
      loading,
      getPrevStep,
      errors,
      steps,
      checkPreviousSteps
    } = useMultiStepForm();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseRadioHeadless = _sfc_main$1;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseInputHelpText = _sfc_main$E;
      const _component_BaseButton = _sfc_main$e;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="mb-8 space-y-2">`);
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
      _push(`</div><div class="w-full max-w-md"><div class="w-full space-y-4">`);
      _push(ssrRenderComponent(_component_BaseRadioHeadless, mergeProps({
        modelValue: unref(request).method,
        "onUpdate:modelValue": ($event) => unref(request).method = $event,
        value: "bank_transfer",
        name: "payment_method",
        class: "nui-focus !appearance-none rounded-lg !opacity-100"
      }, ssrGetDirectiveProps(_ctx, _directive_focus, unref(request).method === null || unref(request).method === "bank_transfer")), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"${_scopeId}><div class="size-3 rounded-full bg-current transition-colors duration-300"${_scopeId}></div></div><div class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"${_scopeId}><div class="border-muted-200 flex size-5 items-center justify-center rounded-full border"${_scopeId}></div><div class="ms-6 flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0627\u0646\u06A9\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0627\u0646\u06A9\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex w-32 flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0627\u06CC\u06AF\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0627\u06CC\u06AF\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F3 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u06F3 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full" }, [
                createVNode("div", { class: "size-3 rounded-full bg-current transition-colors duration-300" })
              ]),
              createVNode("div", { class: "dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl" }, [
                createVNode("div", { class: "border-muted-200 flex size-5 items-center justify-center rounded-full border" }),
                createVNode("div", { class: "ms-6 flex flex-col" }, [
                  createVNode(_component_BaseText, {
                    weight: "medium",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0627\u0646\u06A9\u06CC ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex w-32 flex-col" }, [
                  createVNode(_component_BaseText, {
                    weight: "medium",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u0627\u06CC\u06AF\u0627\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F3 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, mergeProps({
        modelValue: unref(request).method,
        "onUpdate:modelValue": ($event) => unref(request).method = $event,
        value: "payment_link",
        name: "payment_method",
        class: "nui-focus !appearance-none rounded-lg !opacity-100"
      }, ssrGetDirectiveProps(_ctx, _directive_focus, unref(request).method === "payment_link")), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"${_scopeId}><div class="size-3 rounded-full bg-current transition-colors duration-300"${_scopeId}></div></div><div class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"${_scopeId}><div class="border-muted-200 flex size-5 items-center justify-center rounded-full border"${_scopeId}></div><div class="ms-6 flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u06CC\u0646\u06A9 \u067E\u0631\u062F\u0627\u062E\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0644\u06CC\u0646\u06A9 \u067E\u0631\u062F\u0627\u062E\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex w-32 flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0627\u06CC\u06AF\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0627\u06CC\u06AF\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F1 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u06F1 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full" }, [
                createVNode("div", { class: "size-3 rounded-full bg-current transition-colors duration-300" })
              ]),
              createVNode("div", { class: "dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl" }, [
                createVNode("div", { class: "border-muted-200 flex size-5 items-center justify-center rounded-full border" }),
                createVNode("div", { class: "ms-6 flex flex-col" }, [
                  createVNode(_component_BaseText, {
                    weight: "medium",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0644\u06CC\u0646\u06A9 \u067E\u0631\u062F\u0627\u062E\u062A ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex w-32 flex-col" }, [
                  createVNode(_component_BaseText, {
                    weight: "medium",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u0627\u06CC\u06AF\u0627\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F1 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseRadioHeadless, mergeProps({
        modelValue: unref(request).method,
        "onUpdate:modelValue": ($event) => unref(request).method = $event,
        value: "wire",
        name: "payment_method",
        class: "nui-focus !appearance-none rounded-lg !opacity-100"
      }, ssrGetDirectiveProps(_ctx, _directive_focus, unref(request).method === "wire")), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full"${_scopeId}><div class="size-3 rounded-full bg-current transition-colors duration-300"${_scopeId}></div></div><div class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl"${_scopeId}><div class="border-muted-200 flex size-5 items-center justify-center rounded-full border"${_scopeId}></div><div class="ms-6 flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u0627\u0631\u06CC\u0632 \u0628\u0627\u0646\u06A9\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0648\u0627\u0631\u06CC\u0632 \u0628\u0627\u0646\u06A9\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex w-32 flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u0627\u06CC\u06AF\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0631\u0627\u06CC\u06AF\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F1 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u06F1 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-900 dark:text-muted-900 peer-checked:text-primary-500 absolute start-6 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full" }, [
                createVNode("div", { class: "size-3 rounded-full bg-current transition-colors duration-300" })
              ]),
              createVNode("div", { class: "dark:bg-muted-800 border-muted-200 dark:border-muted-700 peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static group flex cursor-pointer items-center rounded-lg border bg-white px-6 py-4 transition-shadow duration-300 peer-checked:shadow-xl" }, [
                createVNode("div", { class: "border-muted-200 flex size-5 items-center justify-center rounded-full border" }),
                createVNode("div", { class: "ms-6 flex flex-col" }, [
                  createVNode(_component_BaseText, {
                    weight: "medium",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u0627\u0631\u06CC\u0632 \u0628\u0627\u0646\u06A9\u06CC ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex w-32 flex-col" }, [
                  createVNode(_component_BaseText, {
                    weight: "medium",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u0627\u06CC\u06AF\u0627\u0646 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F1 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(errors).fields.method) {
        _push(ssrRenderComponent(_component_BaseInputHelpText, { color: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors).fields.method)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors).fields.method), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-4 flex gap-4">`);
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
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u062F\u0627\u0645\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0627\u062F\u0627\u0645\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/receive/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
