import { Z as useAppConfig, a2 as resolveComponentOrNative, a3 as clearError, a1 as _sfc_main$f, l as _sfc_main$3, e as _sfc_main$e, a as __nuxt_component_2, h as _sfc_main$u, k as _sfc_main$x } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseSwitchBall-krBQpZlI.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$4 } from './BaseIconBox-Cgm-LP3M.mjs';
import { defineComponent, computed, ref, resolveDirective, withCtx, unref, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, mergeProps, createCommentVNode, isRef, withDirectives, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrGetDirectiveProps } from 'vue/server-renderer';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "utility-error",
  __ssrInlineRender: true,
  props: {
    error: { default: () => ({
      statusCode: 500,
      message: "\u06CC\u06A9 \u062E\u0637\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC \u0633\u0631\u0648\u0631 \u062F\u0631 \u062D\u0627\u0644 \u0622\u0632\u0645\u0627\u06CC\u0634 \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A",
      url: "/layouts/error-1",
      stack: [
        `Error`,
        `    at default (/home/cssninja/tairo/.demo/pages/layouts/error-1.vue:33:14)`,
        `    at resolvePropValue (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3944:63)`,
        `    at setFullProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3925:26)`,
        `    at initProps (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:3759:5)`,
        `    at setupComponent (/home/cssninja/tairo/node_modules/.pnpm/@vue+runtime-core@3.2.47/node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:7146:5)`,
        `    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:628:17)`,
        `    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)`,
        `    at renderComponentSubTree (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:719:13)`,
        `    at renderComponentVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:644:16)`,
        `    at renderVNode (/home/cssninja/tairo/node_modules/.pnpm/@vue+server-renderer@3.2.47_vue@3.2.47/node_modules/@vue/server-renderer/dist/server-renderer.cjs.js:755:22)`
      ].join("\n"),
      statusMessage: "\u062E\u0637\u0627\u06CC \u0633\u0645\u062A \u0633\u0631\u0648\u0631"
    }) }
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      if (props.error?.statusCode === 401) {
        return "\u0645\u062C\u0648\u0632 \u0646\u062F\u0627\u0631\u062F";
      }
      if (props.error?.statusCode === 404) {
        return "\u0635\u0641\u062D\u0647 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F";
      }
      return "\u0627\u0648\u0647... \u0686\u06CC\u0632\u06CC \u0627\u0634\u062A\u0628\u0627\u0647 \u067E\u06CC\u0634 \u0631\u0641\u062A";
    });
    const description = computed(() => {
      if (props.error?.statusCode === 401) {
        return "\u0634\u0645\u0627 \u0645\u062C\u0627\u0632 \u0628\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0646\u06CC\u0633\u062A\u06CC\u062F.";
      }
      if (props.error?.statusCode === 404) {
        return "\u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u0622\u0646 \u0628\u0648\u062F\u06CC\u062F \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645.";
      }
      return "\u06CC\u06A9 \u062E\u0637\u0627 \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A. \u0627\u06AF\u0631 \u0645\u0634\u06A9\u0644 \u0627\u062F\u0627\u0645\u0647 \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u060C \u0644\u0637\u0641\u0627\u064B \u0628\u0627 \u0645\u062F\u06CC\u0631 \u0633\u06CC\u0633\u062A\u0645 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u06CC\u0627 \u0628\u0639\u062F\u0627\u064B \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F.";
    });
    const app = useAppConfig();
    const handleError = () => clearError({ redirect: "/" });
    const showStackTrace = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$f;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseSwitchBall = _sfc_main$1;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_BaseIconBox = _sfc_main$4;
      const _directive_focus = resolveDirective("focus");
      _push(ssrRenderComponent(_component_TairoSidebarLayout, _attrs, {
        "toolbar-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(app).tairo?.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(app).tairo?.title), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
              title: unref(title),
              subtitle: unref(description),
              "image-size": "md",
              class: "relative !items-end"
            }, {
              image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(app).tairo?.error?.logo?.component) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo?.error.logo.component)), unref(app).tairo?.error.logo.props, null), _parent3, _scopeId2);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(app).tairo?.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo?.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo?.error.logo.props), null, 16)) : createCommentVNode("", true)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-4"${_scopeId2}><div class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(props.error?.statusCode)}</span></div>`);
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "primary",
                    class: "!h-12 w-48 items-center gap-2",
                    rounded: "lg",
                    onClick: handleError
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "feather:arrow-left",
                          class: "rtl:rotate-180"
                        }, null, _parent4, _scopeId3));
                        _push4(` \u0645\u0631\u0627 \u0628\u0631\u06AF\u0631\u062F\u0627\u0646 `);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "feather:arrow-left",
                            class: "rtl:rotate-180"
                          }),
                          createTextVNode(" \u0645\u0631\u0627 \u0628\u0631\u06AF\u0631\u062F\u0627\u0646 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-6 flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseSwitchBall, {
                    modelValue: unref(showStackTrace),
                    "onUpdate:modelValue": ($event) => isRef(showStackTrace) ? showStackTrace.value = $event : null,
                    color: "danger",
                    label: `${unref(showStackTrace) ? "\u067E\u0646\u0647\u0627\u0646\u200C\u0633\u0627\u0632\u06CC" : "\u0646\u0645\u0627\u06CC\u0634"} \u0627\u0633\u062A\u06A9\u200C\u062A\u0631\u06CC\u0633 (\u0628\u0631\u0627\u06CC \u062D\u0627\u0644\u062A \u062A\u0648\u0633\u0639\u0647)`
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-4" }, [
                      createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                        createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                      ]),
                      createVNode(_component_BaseButton, {
                        color: "primary",
                        class: "!h-12 w-48 items-center gap-2",
                        rounded: "lg",
                        onClick: handleError
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "feather:arrow-left",
                            class: "rtl:rotate-180"
                          }),
                          createTextVNode(" \u0645\u0631\u0627 \u0628\u0631\u06AF\u0631\u062F\u0627\u0646 ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "mt-6 flex items-center justify-center" }, [
                        createVNode(_component_BaseSwitchBall, {
                          modelValue: unref(showStackTrace),
                          "onUpdate:modelValue": ($event) => isRef(showStackTrace) ? showStackTrace.value = $event : null,
                          color: "danger",
                          label: `${unref(showStackTrace) ? "\u067E\u0646\u0647\u0627\u0646\u200C\u0633\u0627\u0632\u06CC" : "\u0646\u0645\u0627\u06CC\u0634"} \u0627\u0633\u062A\u06A9\u200C\u062A\u0631\u06CC\u0633 (\u0628\u0631\u0627\u06CC \u062D\u0627\u0644\u062A \u062A\u0648\u0633\u0639\u0647)`
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(showStackTrace)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCard, mergeProps({
                rounded: "lg",
                class: "nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid",
                tabindex: "0"
              }, ssrGetDirectiveProps(_ctx, _directive_focus)), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"${_scopeId2}>`);
                    if (props.error.statusCode) {
                      _push3(ssrRenderComponent(_component_BaseTag, {
                        color: "danger",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(props.error.statusCode)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(props.error.statusCode), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (props.error.url) {
                      _push3(ssrRenderComponent(_component_BaseTag, {
                        color: "danger",
                        variant: "outline",
                        size: "sm"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(props.error.url)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(props.error.url), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_BaseButtonClose, {
                      color: "muted",
                      class: "ms-auto",
                      onClick: ($event) => showStackTrace.value = false
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="mb-4 flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseIconBox, {
                      color: "danger",
                      rounded: "full",
                      size: "md"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:skull-duotone",
                            class: "size-6"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:skull-duotone",
                              class: "size-6"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><h4 class="text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]"${_scopeId2}>${ssrInterpolate(props.error.message)}</h4><p class="nui-text-500 font-sans text-xs font-medium"${_scopeId2}> \u0627\u06CC\u0646 \u0627\u0633\u062A\u06A9\u200C\u062A\u0631\u06CC\u0633 \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A \u0648 \u062F\u0631 \u067E\u0631\u0648\u062F\u0627\u06A9\u0634\u0646 \u0646\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u06CC\u062F. </p></div></div>`);
                    if (props.error.stack) {
                      _push3(`<div class="mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"${_scopeId2}>${props.error.stack}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, [
                        props.error.statusCode ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          color: "danger",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.error.statusCode), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        props.error.url ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 1,
                          color: "danger",
                          variant: "outline",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.error.url), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_BaseButtonClose, {
                          color: "muted",
                          class: "ms-auto",
                          onClick: ($event) => showStackTrace.value = false
                        }, null, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                        createVNode(_component_BaseIconBox, {
                          color: "danger",
                          rounded: "full",
                          size: "md"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "ph:skull-duotone",
                              class: "size-6"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]" }, toDisplayString(props.error.message), 1),
                          createVNode("p", { class: "nui-text-500 font-sans text-xs font-medium" }, " \u0627\u06CC\u0646 \u0627\u0633\u062A\u06A9\u200C\u062A\u0631\u06CC\u0633 \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A \u0648 \u062F\u0631 \u067E\u0631\u0648\u062F\u0627\u06A9\u0634\u0646 \u0646\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u06CC\u062F. ")
                        ])
                      ]),
                      props.error.stack ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100",
                        innerHTML: props.error.stack
                      }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_BasePlaceholderPage, {
                title: unref(title),
                subtitle: unref(description),
                "image-size": "md",
                class: "relative !items-end"
              }, {
                image: withCtx(() => [
                  unref(app).tairo?.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo?.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo?.error.logo.props), null, 16)) : createCommentVNode("", true)
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "mt-4" }, [
                    createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                      createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                    ]),
                    createVNode(_component_BaseButton, {
                      color: "primary",
                      class: "!h-12 w-48 items-center gap-2",
                      rounded: "lg",
                      onClick: handleError
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "feather:arrow-left",
                          class: "rtl:rotate-180"
                        }),
                        createTextVNode(" \u0645\u0631\u0627 \u0628\u0631\u06AF\u0631\u062F\u0627\u0646 ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-6 flex items-center justify-center" }, [
                      createVNode(_component_BaseSwitchBall, {
                        modelValue: unref(showStackTrace),
                        "onUpdate:modelValue": ($event) => isRef(showStackTrace) ? showStackTrace.value = $event : null,
                        color: "danger",
                        label: `${unref(showStackTrace) ? "\u067E\u0646\u0647\u0627\u0646\u200C\u0633\u0627\u0632\u06CC" : "\u0646\u0645\u0627\u06CC\u0634"} \u0627\u0633\u062A\u06A9\u200C\u062A\u0631\u06CC\u0633 (\u0628\u0631\u0627\u06CC \u062D\u0627\u0644\u062A \u062A\u0648\u0633\u0639\u0647)`
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title", "subtitle"]),
              unref(showStackTrace) ? (openBlock(), createBlock("div", { key: 0 }, [
                withDirectives((openBlock(), createBlock(_component_BaseCard, {
                  rounded: "lg",
                  class: "nui-focus nui-text-700 group relative mx-auto mt-6 max-w-3xl border-2 border-dashed p-8 hover:border-solid",
                  tabindex: "0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mb-3 flex items-center justify-start gap-1 opacity-30 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100" }, [
                      props.error.statusCode ? (openBlock(), createBlock(_component_BaseTag, {
                        key: 0,
                        color: "danger",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.error.statusCode), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      props.error.url ? (openBlock(), createBlock(_component_BaseTag, {
                        key: 1,
                        color: "danger",
                        variant: "outline",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.error.url), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_BaseButtonClose, {
                        color: "muted",
                        class: "ms-auto",
                        onClick: ($event) => showStackTrace.value = false
                      }, null, 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                      createVNode(_component_BaseIconBox, {
                        color: "danger",
                        rounded: "full",
                        size: "md"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:skull-duotone",
                            class: "size-6"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", null, [
                        createVNode("h4", { class: "text-danger-500 font-mono text-lg font-medium [overflow-wrap:anywhere]" }, toDisplayString(props.error.message), 1),
                        createVNode("p", { class: "nui-text-500 font-sans text-xs font-medium" }, " \u0627\u06CC\u0646 \u0627\u0633\u062A\u06A9\u200C\u062A\u0631\u06CC\u0633 \u0646\u0645\u0627\u06CC\u0634\u06CC \u0627\u0633\u062A \u0648 \u062F\u0631 \u067E\u0631\u0648\u062F\u0627\u06A9\u0634\u0646 \u0646\u062E\u0648\u0627\u0647\u06CC\u062F \u062F\u06CC\u062F. ")
                      ])
                    ]),
                    props.error.stack ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-6 overflow-auto whitespace-pre p-2 font-mono text-sm opacity-60 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100",
                      innerHTML: props.error.stack
                    }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })), [
                  [_directive_focus]
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
