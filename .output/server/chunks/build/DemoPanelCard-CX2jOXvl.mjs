import { t as usePanels, p as onKeyStroke, b as _sfc_main$w, a as __nuxt_component_2, c as _sfc_main$v, f as _sfc_main$C, e as _sfc_main$e, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseProgress-Bi06w8MA.mjs';
import { _ as _sfc_main$2 } from './DemoCreditCardReal-BWXE4_zQ.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { FocusTrap } from '@headlessui/vue';
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
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './TairoLogo-BETVEPG8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelCard",
  __ssrInlineRender: true,
  props: {
    card: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const { close } = usePanels();
    onKeyStroke("Escape", close);
    const detailsExpanded = ref(false);
    const daySpentProgress = computed(() => {
      return props.card?.daySpent / props.card?.limits.spend * 100;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseProgress = _sfc_main$1;
      const _component_BaseText = _sfc_main$C;
      const _component_DemoCreditCardReal = _sfc_main$2;
      const _component_BaseButton = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border-s bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FocusTrap), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "xs",
              weight: "semibold",
              class: "text-muted-500 dark:text-muted-100 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0627\u0631\u062A `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0627\u0631\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button type="button" class="nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "rtl:rotate-180 size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="nui-slimscroll relative h-[calc(100dvh_-_80px)] w-full overflow-y-auto p-6"${_scopeId}><div class="mb-3"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.card.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.card.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.card.cardInfo.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.card.cardInfo.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.card.daySpent.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.card.daySpent.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0645\u0631\u0648\u0632 \u062E\u0631\u062C \u0634\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0645\u0631\u0648\u0632 \u062E\u0631\u062C \u0634\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseProgress, {
              value: unref(daySpentProgress),
              size: "xs",
              class: "my-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="pt-2"${_scopeId}><button type="button" class="nui-focus mb-3 flex w-full items-center"${_scopeId}><span class="text-muted-500 dark:text-muted-400 flex w-full items-center justify-between"${_scopeId}><span class="flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-down",
              class: ["size-3 transition-transform duration-300", unref(detailsExpanded) ? "rotate-180" : ""]
            }, null, _parent2, _scopeId));
            if (!unref(detailsExpanded)) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0646\u0645\u0627\u06CC\u0634 \u062C\u0632\u0626\u06CC\u0627\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u0646\u0645\u0627\u06CC\u0634 \u062C\u0632\u0626\u06CC\u0627\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(detailsExpanded)) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u067E\u0646\u0647\u0627\u0646 \u06A9\u0631\u062F\u0646 \u062C\u0632\u0626\u06CC\u0627\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u067E\u0646\u0647\u0627\u0646 \u06A9\u0631\u062F\u0646 \u062C\u0632\u0626\u06CC\u0627\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
            if (!unref(detailsExpanded)) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.card.funds.available.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 \u0645\u0648\u062C\u0648\u062F\u06CC \xB7 ${ssrInterpolate(_ctx.card.limits.spend.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 \u0633\u0642\u0641 \u0645\u0648\u062C\u0648\u062F\u06CC `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.card.funds.available.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 \u0645\u0648\u062C\u0648\u062F\u06CC \xB7 " + toDisplayString(_ctx.card.limits.spend.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 \u0633\u0642\u0641 \u0645\u0648\u062C\u0648\u062F\u06CC ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span></button>`);
            if (unref(detailsExpanded)) {
              _push2(`<div class="bg-muted-100 dark:bg-muted-900 rounded-xl p-6"${_scopeId}><div class="border-muted-200 dark:border-muted-700 mb-3 flex items-center justify-between border-b pb-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h5",
                size: "xs",
                weight: "medium",
                class: "text-muted-600 dark:text-muted-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u06A9\u0644 \u0631\u0648\u0632\u0627\u0646\u0647 `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u06A9\u0644 \u0631\u0648\u0632\u0627\u0646\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate((_ctx.card.limits.spend + _ctx.card.limits.withdraw).toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString((_ctx.card.limits.spend + _ctx.card.limits.withdraw).toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-800 size-2 rounded-full"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-700 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span data-nui-tooltip="Settled transactions"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:help-circle",
                class: "text-muted-400 size-3"
              }, null, _parent2, _scopeId));
              _push2(`</span></div>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.card.funds.posted.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.card.funds.posted.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-500 size-2 rounded-full"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-700 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 `);
                  } else {
                    return [
                      createTextVNode(" \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span data-nui-tooltip="Unsettled transactions or temporary holds"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:help-circle",
                class: "text-muted-400 size-3"
              }, null, _parent2, _scopeId));
              _push2(`</span></div>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.card.funds.pending.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.card.funds.pending.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="bg-muted-300 size-2 rounded-full"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-700 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u063A\u06CC\u0631 \u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633 `);
                  } else {
                    return [
                      createTextVNode(" \u063A\u06CC\u0631 \u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<span data-nui-tooltip="\u0648\u062C\u0648\u0647 \u063A\u06CC\u0631\u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0647\u0632\u06CC\u0646\u0647 \u0634\u062F\u0646 \u0628\u0631 \u0631\u0648\u06CC \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631. \u0628\u0631\u0627\u06CC \u06A9\u0645\u06A9 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:help-circle",
                class: "text-muted-400 size-3"
              }, null, _parent2, _scopeId));
              _push2(`</span></div>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.card.funds.unavailable.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.card.funds.unavailable.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="size-2 rounded-full bg-white"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-700 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u062E\u0631\u062C \u06A9\u0631\u062F\u0646 `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u062E\u0631\u062C \u06A9\u0631\u062F\u0646 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.card.funds.available.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.card.funds.available.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-4 w-full space-y-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardReal, {
              status: _ctx.card.cardInfo.status,
              name: _ctx.card.cardInfo.name,
              number: _ctx.card.cardInfo.number,
              brand: _ctx.card.cardInfo.brand
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4 px-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 text-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E ${ssrInterpolate(_ctx.card.creationDate)} \u0635\u0627\u062F\u0631 \u0634\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E " + toDisplayString(_ctx.card.creationDate) + " \u0635\u0627\u062F\u0631 \u0634\u062F ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "md",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              variant: "pastel",
              color: "muted",
              rounded: "md",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              variant: "pastel",
              color: "muted",
              rounded: "md",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u063A\u0648 `);
                } else {
                  return [
                    createTextVNode(" \u0644\u063A\u0648 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="border-muted-200 dark:border-muted-700 border-t"${_scopeId}><div class="pt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0622\u062F\u0631\u0633 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 `);
                } else {
                  return [
                    createTextVNode(" \u0622\u062F\u0631\u0633 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.card.address, (item) => {
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                key: item,
                size: "sm",
                weight: "medium",
                class: "text-muted-600 dark:text-muted-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="border-muted-200 dark:border-muted-700 border-t"${_scopeId}><div class="space-y-4 py-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0647\u0632\u06CC\u0646\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0647\u0632\u06CC\u0646\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u062E\u0631\u062C ${ssrInterpolate(_ctx.card.limits.spend.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u062E\u0631\u062C " + toDisplayString(_ctx.card.limits.spend.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062D\u062F \u0628\u0631\u062F\u0627\u0634\u062A \u0631\u0648\u0632\u0627\u0646\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u062D\u062F \u0628\u0631\u062F\u0627\u0634\u062A \u0631\u0648\u0632\u0627\u0646\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u0648\u0644 \u0646\u0642\u062F \u0627\u0645\u0631\u0648\u0632 \u0628\u0631\u062F\u0627\u0634\u062A \u0634\u062F `);
                } else {
                  return [
                    createTextVNode(" \u067E\u0648\u0644 \u0646\u0642\u062F \u0627\u0645\u0631\u0648\u0632 \u0628\u0631\u062F\u0627\u0634\u062A \u0634\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.card.limits.withdraw.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.card.limits.withdraw.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-400 mb-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.card.dayWithdraw.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.card.dayWithdraw.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "text-muted-600 nui-focus dark:text-muted-300 font-sans text-sm font-medium underline-offset-4 hover:underline",
              "data-nui-tooltip": "\u0645\u0634\u0627\u0647\u062F\u0647 \u062D\u0633\u0627\u0628"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0628\u0631\u0631\u0633\u06CC ${ssrInterpolate(_ctx.card.account)}`);
                } else {
                  return [
                    createTextVNode(" \u0628\u0631\u0631\u0633\u06CC " + toDisplayString(_ctx.card.account), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              weight: "medium",
              class: "text-muted-600 dark:text-muted-300 capitalize"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.card.cardInfo.type)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.card.cardInfo.type), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex h-20 w-full items-center justify-between border-b px-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xs",
                  weight: "semibold",
                  class: "text-muted-500 dark:text-muted-100 uppercase"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0627\u0631\u062A ")
                  ]),
                  _: 1
                }),
                createVNode("button", {
                  type: "button",
                  class: "nui-mask nui-mask-blob hover:bg-muted-100 focus:bg-muted-100 dark:hover:bg-muted-700 dark:focus:bg-muted-700 text-muted-700 dark:text-muted-400 flex size-10 cursor-pointer items-center justify-center outline-transparent transition-colors duration-300",
                  onClick: unref(close)
                }, [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "rtl:rotate-180 size-4"
                  })
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "nui-slimscroll relative h-[calc(100dvh_-_80px)] w-full overflow-y-auto p-6" }, [
                createVNode("div", { class: "mb-3" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.card.name), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.card.cardInfo.name), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "text-end" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.card.daySpent.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0645\u0631\u0648\u0632 \u062E\u0631\u062C \u0634\u062F\u0647 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_BaseProgress, {
                    value: unref(daySpentProgress),
                    size: "xs",
                    class: "my-2"
                  }, null, 8, ["value"]),
                  createVNode("div", { class: "pt-2" }, [
                    createVNode("button", {
                      type: "button",
                      class: "nui-focus mb-3 flex w-full items-center",
                      onClick: ($event) => detailsExpanded.value = !unref(detailsExpanded)
                    }, [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 flex w-full items-center justify-between" }, [
                        createVNode("span", { class: "flex items-center gap-1" }, [
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-down",
                            class: ["size-3 transition-transform duration-300", unref(detailsExpanded) ? "rotate-180" : ""]
                          }, null, 8, ["class"]),
                          !unref(detailsExpanded) ? (openBlock(), createBlock(_component_BaseText, {
                            key: 0,
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0646\u0645\u0627\u06CC\u0634 \u062C\u0632\u0626\u06CC\u0627\u062A ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(detailsExpanded) ? (openBlock(), createBlock(_component_BaseText, {
                            key: 1,
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u067E\u0646\u0647\u0627\u0646 \u06A9\u0631\u062F\u0646 \u062C\u0632\u0626\u06CC\u0627\u062A ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        !unref(detailsExpanded) ? (openBlock(), createBlock(_component_BaseText, {
                          key: 0,
                          size: "xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.card.funds.available.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 \u0645\u0648\u062C\u0648\u062F\u06CC \xB7 " + toDisplayString(_ctx.card.limits.spend.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 \u0633\u0642\u0641 \u0645\u0648\u062C\u0648\u062F\u06CC ", 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ], 8, ["onClick"]),
                    unref(detailsExpanded) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-muted-100 dark:bg-muted-900 rounded-xl p-6"
                    }, [
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 mb-3 flex items-center justify-between border-b pb-3" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h5",
                          size: "xs",
                          weight: "medium",
                          class: "text-muted-600 dark:text-muted-300"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u06A9\u0644 \u0631\u0648\u0632\u0627\u0646\u0647 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "sm",
                          weight: "medium",
                          class: "text-muted-800 dark:text-muted-100"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString((_ctx.card.limits.spend + _ctx.card.limits.withdraw).toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "bg-muted-800 size-2 rounded-full" }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-700 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 ")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { "data-nui-tooltip": "Settled transactions" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:help-circle",
                                class: "text-muted-400 size-3"
                              })
                            ])
                          ]),
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.card.funds.posted.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "bg-muted-500 size-2 rounded-full" }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-700 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 ")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { "data-nui-tooltip": "Unsettled transactions or temporary holds" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:help-circle",
                                class: "text-muted-400 size-3"
                              })
                            ])
                          ]),
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.card.funds.pending.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "bg-muted-300 size-2 rounded-full" }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-700 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u063A\u06CC\u0631 \u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633 ")
                              ]),
                              _: 1
                            }),
                            createVNode("span", { "data-nui-tooltip": "\u0648\u062C\u0648\u0647 \u063A\u06CC\u0631\u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0647\u0632\u06CC\u0646\u0647 \u0634\u062F\u0646 \u0628\u0631 \u0631\u0648\u06CC \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631. \u0628\u0631\u0627\u06CC \u06A9\u0645\u06A9 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F." }, [
                              createVNode(_component_Icon, {
                                name: "lucide:help-circle",
                                class: "text-muted-400 size-3"
                              })
                            ])
                          ]),
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.card.funds.unavailable.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("div", { class: "size-2 rounded-full bg-white" }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-700 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u062E\u0631\u062C \u06A9\u0631\u062F\u0646 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.card.funds.available.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "mt-4 w-full space-y-5" }, [
                    createVNode(_component_DemoCreditCardReal, {
                      status: _ctx.card.cardInfo.status,
                      name: _ctx.card.cardInfo.name,
                      number: _ctx.card.cardInfo.number,
                      brand: _ctx.card.cardInfo.brand
                    }, null, 8, ["status", "name", "number", "brand"]),
                    createVNode("div", { class: "space-y-4 px-2" }, [
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400 text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u06CC\u0646 \u06A9\u0627\u0631\u062A \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E " + toDisplayString(_ctx.card.creationDate) + " \u0635\u0627\u062F\u0631 \u0634\u062F ", 1)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                        createVNode(_component_BaseButton, {
                          rounded: "md",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          variant: "pastel",
                          color: "muted",
                          rounded: "md",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          variant: "pastel",
                          color: "muted",
                          rounded: "md",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0644\u063A\u0648 ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-t" }, [
                      createVNode("div", { class: "pt-6" }, [
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400 mb-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0622\u062F\u0631\u0633 \u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 ")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.card.address, (item) => {
                          return openBlock(), createBlock(_component_BaseParagraph, {
                            key: item,
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-600 dark:text-muted-300"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-t" }, [
                      createVNode("div", { class: "space-y-4 py-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-600 dark:text-muted-300"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u0647\u0632\u06CC\u0646\u0647 \u0631\u0648\u0632\u0627\u0646\u0647 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-600 dark:text-muted-300"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0645\u062D\u062F\u0648\u062F\u06CC\u062A \u062E\u0631\u062C " + toDisplayString(_ctx.card.limits.spend.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", null, [
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              weight: "medium",
                              class: "text-muted-600 dark:text-muted-300"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u062D\u062F \u0628\u0631\u062F\u0627\u0634\u062A \u0631\u0648\u0632\u0627\u0646\u0647 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400 mb-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u067E\u0648\u0644 \u0646\u0642\u062F \u0627\u0645\u0631\u0648\u0632 \u0628\u0631\u062F\u0627\u0634\u062A \u0634\u062F ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              weight: "medium",
                              class: "text-muted-600 dark:text-muted-300 mb-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.card.limits.withdraw.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400 mb-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.card.dayWithdraw.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-600 dark:text-muted-300"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_NuxtLink, {
                            to: "#",
                            class: "text-muted-600 nui-focus dark:text-muted-300 font-sans text-sm font-medium underline-offset-4 hover:underline",
                            "data-nui-tooltip": "\u0645\u0634\u0627\u0647\u062F\u0647 \u062D\u0633\u0627\u0628"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0628\u0631\u0631\u0633\u06CC " + toDisplayString(_ctx.card.account), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-600 dark:text-muted-300"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0646\u0648\u0639 \u06A9\u0627\u0631\u062A ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "sm",
                            weight: "medium",
                            class: "text-muted-600 dark:text-muted-300 capitalize"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.card.cardInfo.type), 1)
                            ]),
                            _: 1
                          })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
