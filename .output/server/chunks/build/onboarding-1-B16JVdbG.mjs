import { _ as __nuxt_component_0$3, b as _sfc_main$w, c as _sfc_main$v, h as _sfc_main$u, a as __nuxt_component_2, e as _sfc_main$e, d as _sfc_main$D, f as _sfc_main$C } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-xWG13Wev.mjs';
import { _ as _sfc_main$2 } from './BaseRadioHeadless-BL03emlX.mjs';
import { _ as _sfc_main$3 } from './BaseIconBox-Cgm-LP3M.mjs';
import { _ as __nuxt_component_0$1 } from './TairoCheckAnimated-802ZeQv1.mjs';
import { defineComponent, ref, computed, resolveDirective, mergeProps, withCtx, createVNode, unref, createTextVNode, isRef, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
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
import './composables-DRJhNAUK.mjs';

const _imports_0 = publicAssetsURL("/img/illustrations/onboarding/2fa-web.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/onboarding/2fa-sms.svg");
const _imports_2 = publicAssetsURL("/img/illustrations/onboarding/2fa-app.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "onboarding-1",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(false);
    const twoFaMode = ref("\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644");
    const currentStep = ref(1);
    const codeLength = ref(4);
    const input = ref([]);
    const inputElements = ref([]);
    const correctPin = ref("1234");
    ref(true);
    const email = ref("");
    const tel = ref("");
    const code = ref("");
    function goToStep(n) {
      loading.value = true;
      const timer = setTimeout(() => {
        loading.value = false;
        if (n < 1) {
          currentStep.value = 1;
        } else if (n > 3) {
          currentStep.value = 3;
        } else {
          currentStep.value = n;
        }
        clearTimeout(timer);
      }, 1e3);
    }
    const validatePin = computed(() => {
      return input.value.join("") == correctPin.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseRadioHeadless = _sfc_main$2;
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseIconBox = _sfc_main$3;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseText = _sfc_main$C;
      const _component_TairoCheckAnimated = __nuxt_component_0$1;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 min-h-screen" }, _attrs))}><div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "size-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "size-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><form action="" method="POST" class="mx-auto max-w-7xl px-4">`);
      if (unref(currentStep) === 1) {
        _push(`<div><div class="pt-8 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "3xl",
          weight: "medium",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0628\u0647 \u062A\u0627\u06CC\u0631\u0648 \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F \u{1F44B} `);
            } else {
              return [
                createTextVNode(" \u0628\u0647 \u062A\u0627\u06CC\u0631\u0648 \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F \u{1F44B} ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-8" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F `);
            } else {
              return [
                createTextVNode(" \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div><div class="w-full"><div class="mx-auto w-full"><div class="w-full"><div class="mx-auto mb-8 grid max-w-4xl gap-6 sm:grid-cols-3">`);
        _push(ssrRenderComponent(_component_BaseRadioHeadless, {
          modelValue: unref(twoFaMode),
          "onUpdate:modelValue": ($event) => isRef(twoFaMode) ? twoFaMode.value = $event : null,
          name: "radio_custom",
          value: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644" class="mx-auto max-w-[160px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644 `);
                        } else {
                          return [
                            createTextVNode(" \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseParagraph, {
                      size: "xs",
                      lead: "snug",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u06A9\u062F\u06CC \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0628\u0647 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F `);
                        } else {
                          return [
                            createTextVNode(" \u06A9\u062F\u06CC \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0628\u0647 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 size-7"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col text-center" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644",
                          class: "mx-auto max-w-[160px]"
                        }),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "snug",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u06A9\u062F\u06CC \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0628\u0647 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-primary-500 size-7"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col text-center" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644",
                        class: "mx-auto max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u06A9\u062F\u06CC \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0628\u0647 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-primary-500 size-7"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseRadioHeadless, {
          modelValue: unref(twoFaMode),
          "onUpdate:modelValue": ($event) => isRef(twoFaMode) ? twoFaMode.value = $event : null,
          name: "radio_custom",
          value: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9" class="mx-auto max-w-[160px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9 `);
                        } else {
                          return [
                            createTextVNode(" \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseParagraph, {
                      size: "xs",
                      lead: "snug",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u06CC\u06A9 \u067E\u06CC\u0627\u0645\u06A9 \u062D\u0627\u0648\u06CC \u06A9\u062F \u0628\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F. `);
                        } else {
                          return [
                            createTextVNode(" \u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u06CC\u06A9 \u067E\u06CC\u0627\u0645\u06A9 \u062D\u0627\u0648\u06CC \u06A9\u062F \u0628\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 size-7"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col text-center" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9",
                          class: "mx-auto max-w-[160px]"
                        }),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "snug",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u06CC\u06A9 \u067E\u06CC\u0627\u0645\u06A9 \u062D\u0627\u0648\u06CC \u06A9\u062F \u0628\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F. ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-primary-500 size-7"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col text-center" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9",
                        class: "mx-auto max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0627 \u067E\u06CC\u0627\u0645\u06A9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u06CC\u06A9 \u067E\u06CC\u0627\u0645\u06A9 \u062D\u0627\u0648\u06CC \u06A9\u062F \u0628\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F. ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-primary-500 size-7"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseRadioHeadless, {
          modelValue: unref(twoFaMode),
          "onUpdate:modelValue": ($event) => isRef(twoFaMode) ? twoFaMode.value = $event : null,
          name: "radio_custom",
          value: "\u0627\u067E \u0622\u06CC\u062F\u06CC"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col text-center"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646" class="mx-auto max-w-[160px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0628\u0627 \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 `);
                        } else {
                          return [
                            createTextVNode(" \u0628\u0627 \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseParagraph, {
                      size: "xs",
                      lead: "snug",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u06A9\u062F \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u0628\u0647 `);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "https://authy.com/",
                            class: "text-primary-500 underline-offset-4 hover:underline"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0622\u0648\u062B\u06CC `);
                              } else {
                                return [
                                  createTextVNode(" \u0622\u0648\u062B\u06CC ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A `);
                        } else {
                          return [
                            createTextVNode(" \u06A9\u062F \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u0628\u0647 "),
                            createVNode(_component_NuxtLink, {
                              to: "https://authy.com/",
                              class: "text-primary-500 underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0622\u0648\u062B\u06CC ")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="child absolute end-2 top-3 opacity-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:check-circle-duotone",
                      class: "text-primary-500 size-7"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col text-center" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
                          class: "mx-auto max-w-[160px]"
                        }),
                        createVNode(_component_BaseHeading, {
                          size: "md",
                          weight: "medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627 \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "snug",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u06A9\u062F \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u0628\u0647 "),
                            createVNode(_component_NuxtLink, {
                              to: "https://authy.com/",
                              class: "text-primary-500 underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0622\u0648\u062B\u06CC ")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                        createVNode(_component_Icon, {
                          name: "ph:check-circle-duotone",
                          class: "text-primary-500 size-7"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "peer-checked:!border-primary-500 relative border-2 p-8 opacity-60 grayscale peer-checked:opacity-100 peer-checked:grayscale-0 peer-checked:[&_.child]:!opacity-100"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col text-center" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: "\u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC \u0628\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
                        class: "mx-auto max-w-[160px]"
                      }),
                      createVNode(_component_BaseHeading, {
                        size: "md",
                        weight: "medium"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0627 \u06CC\u06A9 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "snug",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u06A9\u062F \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u0628\u0647 "),
                          createVNode(_component_NuxtLink, {
                            to: "https://authy.com/",
                            class: "text-primary-500 underline-offset-4 hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0622\u0648\u062B\u06CC ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "child absolute end-2 top-3 opacity-0" }, [
                      createVNode(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: "text-primary-500 size-7"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mx-auto flex flex-col items-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          type: "button",
          rounded: "lg",
          class: "!h-12 w-48",
          color: "primary",
          loading: unref(loading),
          onClick: ($event) => goToStep(2)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u062F\u0627\u0645\u0647 `);
            } else {
              return [
                createTextVNode(" \u0627\u062F\u0627\u0645\u0647 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/dashboards",
          class: "text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u062E\u06CC\u0631\u060C \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645 \u0631\u062F \u0634\u0648\u0645 `);
            } else {
              return [
                createTextVNode(" \u062E\u06CC\u0631\u060C \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645 \u0631\u062F \u0634\u0648\u0645 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(currentStep) === 2) {
        _push(`<div class="w-full"><div class="flex size-full flex-col"><div class="pointer-events-none flex w-full items-center justify-center pt-8">`);
        _push(ssrRenderComponent(_component_BaseIconBox, {
          color: "primary",
          size: "lg",
          rounded: "full",
          class: "mx-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(twoFaMode) === "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:envelope-duotone",
                  class: "text-primary-500 mx-auto size-8"
                }, null, _parent2, _scopeId));
              } else if (unref(twoFaMode) === "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:device-mobile-speaker-duotone",
                  class: "text-primary-500 mx-auto size-8"
                }, null, _parent2, _scopeId));
              } else if (unref(twoFaMode) === "\u0627\u067E \u0622\u06CC\u062F\u06CC") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:fingerprint-duotone",
                  class: "text-primary-500 mx-auto size-8"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(twoFaMode) === "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644" ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: "ph:envelope-duotone",
                  class: "text-primary-500 mx-auto size-8"
                })) : unref(twoFaMode) === "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646" ? (openBlock(), createBlock(_component_Icon, {
                  key: 1,
                  name: "ph:device-mobile-speaker-duotone",
                  class: "text-primary-500 mx-auto size-8"
                })) : unref(twoFaMode) === "\u0627\u067E \u0622\u06CC\u062F\u06CC" ? (openBlock(), createBlock(_component_Icon, {
                  key: 2,
                  name: "ph:fingerprint-duotone",
                  class: "text-primary-500 mx-auto size-8"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="pt-4 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "3xl",
          weight: "medium",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(twoFaMode).split("_").join(" "))} \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(twoFaMode).split("_").join(" ")) + " \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u0627\u0632\u0645 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F `);
            } else {
              return [
                createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0644\u0627\u0632\u0645 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mx-auto w-full max-w-sm py-6">`);
        if (unref(twoFaMode) === "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644") {
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: unref(email),
            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
            icon: "ph:envelope-duotone",
            rounded: "lg",
            placeholder: "\u0645\u062B\u0627\u0644: ghasem@eltheme.ir",
            classes: {
              wrapper: "w-full",
              input: "!h-12 !ps-12",
              icon: "!h-12 !w-12"
            }
          }, null, _parent));
        } else if (unref(twoFaMode) === "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646") {
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: unref(tel),
            "onUpdate:modelValue": ($event) => isRef(tel) ? tel.value = $event : null,
            icon: "ph:device-mobile-speaker-duotone",
            rounded: "lg",
            placeholder: "\u0645\u062B\u0627\u0644: +\u06F1\u06F5\u06F5\u06F5\u06F4\u06F8\u06F1\u06F5\u06F6\u06F5\u06F9",
            classes: {
              wrapper: "w-full",
              input: "!h-12 !ps-12",
              icon: "!h-12 !w-12"
            }
          }, null, _parent));
        } else if (unref(twoFaMode) === "\u0627\u067E \u0622\u06CC\u062F\u06CC") {
          _push(`<div class="space-y-4"><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "logos:authy",
            class: "size-6"
          }, null, _parent));
          _push(`<div>`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            class: "text-muted-500 dark:text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0641\u0642\u0637 `);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: "https://authy.com/",
                  class: "text-primary-500 underline-offset-4 hover:underline"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0622\u0648\u062B\u06CC `);
                    } else {
                      return [
                        createTextVNode(" \u0622\u0648\u062B\u06CC ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(` \u062A\u0627 \u0628\u0647 \u0627\u06CC\u0646 \u0644\u062D\u0638\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F `);
              } else {
                return [
                  createTextVNode(" \u0641\u0642\u0637 "),
                  createVNode(_component_NuxtLink, {
                    to: "https://authy.com/",
                    class: "text-primary-500 underline-offset-4 hover:underline"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0622\u0648\u062B\u06CC ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" \u062A\u0627 \u0628\u0647 \u0627\u06CC\u0646 \u0644\u062D\u0638\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
          _push(ssrRenderComponent(_component_BaseInput, {
            modelValue: unref(code),
            "onUpdate:modelValue": ($event) => isRef(code) ? code.value = $event : null,
            icon: "ph:fingerprint-duotone",
            rounded: "lg",
            placeholder: "\u0645\u062B\u0627\u0644: efcdwdeg16jei85",
            classes: {
              wrapper: "w-full",
              input: "!h-12 !ps-12",
              icon: "!h-12 !w-12"
            }
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mx-auto flex flex-col items-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          type: "button",
          rounded: "lg",
          class: "!h-12 w-48",
          color: "primary",
          loading: unref(loading),
          onClick: ($event) => goToStep(3)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u062F\u0627\u0645\u0647 `);
            } else {
              return [
                createTextVNode(" \u0627\u062F\u0627\u0645\u0647 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="text-muted-400 hover:text-primary-500 mt-4 text-xs font-medium underline-offset-4 transition-colors duration-300 hover:underline"> \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u0645\u060C \u0645\u0631\u0627 \u0628\u0627\u0632\u06AF\u0631\u062F\u0627\u0646 </button></div></div></div>`);
      } else if (unref(currentStep) === 3) {
        _push(`<div><div class="mx-auto max-w-4xl"><div class="flex size-full flex-col"><div class="pointer-events-none flex w-full items-center justify-center pt-8"><div class="flex h-16 items-center justify-center">`);
        if (unref(validatePin)) {
          _push(ssrRenderComponent(_component_TairoCheckAnimated, { size: "sm" }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseIconBox, {
            color: "primary",
            size: "lg",
            rounded: "full",
            class: "mx-auto"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ph:lock-duotone",
                  class: "text-primary-500 mx-auto size-8"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ph:lock-duotone",
                    class: "text-primary-500 mx-auto size-8"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div></div><div class="pt-4 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "3xl",
          weight: "medium",
          class: "mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06A9\u062F \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F `);
            } else {
              return [
                createTextVNode(" \u06A9\u062F \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-500 dark:text-muted-400 mb-2" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06A9\u062F \u067E\u06CC\u0646\u06CC \u0631\u0627 \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u0645 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. `);
            } else {
              return [
                createTextVNode(" \u06A9\u062F \u067E\u06CC\u0646\u06CC \u0631\u0627 \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u0645 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          lead: "snug",
          class: "text-muted-500 dark:text-muted-400 mb-8"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block"${_scopeId}><span class="font-bold"${_scopeId}>1234</span> \u067E\u06CC\u0646 \u062F\u0645\u0648\u06CC \u0634\u0645\u0627\u0633\u062A. </span>`);
            } else {
              return [
                createVNode("span", { class: "block" }, [
                  createVNode("span", { class: "font-bold" }, "1234"),
                  createTextVNode(" \u067E\u06CC\u0646 \u062F\u0645\u0648\u06CC \u0634\u0645\u0627\u0633\u062A. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-muted-800 dark:text-muted-100 mx-auto flex h-60 w-72 flex-col rounded text-center"><div class="${ssrRenderClass([unref(validatePin) && "pointer-events-none", "flex w-full justify-center gap-3"])}" dir="ltr"><!--[-->`);
        ssrRenderList(unref(codeLength), (i) => {
          _push(`<input${ssrRenderAttrs(mergeProps({
            key: "pin" + i,
            ref_for: true,
            ref: (el) => {
              unref(inputElements)[i] = el;
            },
            type: "text",
            name: "pin" + i,
            maxlength: "1",
            class: "dark:bg-muted-800 unselectable nui-focus inline w-16 select-none rounded-lg bg-white py-5 text-center text-4xl font-bold transition-all",
            value: unref(input)[i - 1] !== void 0 ? unref(input)[i - 1] : "-",
            placeholder: "0",
            disabled: unref(input).length < i - 1 || unref(validatePin)
          }, ssrGetDirectiveProps(_ctx, _directive_focus, i === 1)))}>`);
        });
        _push(`<!--]--></div><div class="mt-10">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/dashboards",
          rounded: "lg",
          class: "!h-12",
          color: unref(validatePin) ? "primary" : "default",
          disabled: !unref(validatePin)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0645\u0646 \u0631\u0627 \u0628\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0628\u0628\u0631 `);
            } else {
              return [
                createTextVNode(" \u0645\u0646 \u0631\u0627 \u0628\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0628\u0628\u0631 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-8 flex items-center justify-between">`);
        _push(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u06A9\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u06A9\u0631\u062F\u06CC\u062F\u061F `);
            } else {
              return [
                createTextVNode(" \u06A9\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u06A9\u0631\u062F\u06CC\u062F\u061F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"> \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F </button></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/onboarding-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
