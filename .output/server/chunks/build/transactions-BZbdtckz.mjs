import { j as useRoute, u as useRouter, d as _sfc_main$D, e as _sfc_main$e, a as __nuxt_component_2, f as _sfc_main$C, i as _export_sfc, w as __nuxt_component_0$2 } from './server.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$6 } from './BaseRadioHeadless-BL03emlX.mjs';
import { _ as _sfc_main$7 } from './BaseCheckboxHeadless-CATHSw1E.mjs';
import { _ as _sfc_main$8 } from './BaseCheckbox-CfxLaouc.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, withAsyncContext, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, Transition } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Menu, MenuButton, MenuItems } from '@headlessui/vue';
import { _ as _sfc_main$3 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$4 } from './BasePagination-BbyUf1ZX.mjs';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
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
import './IconChevronDown-B9AzKHTY.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoTransactionsFilters",
  __ssrInlineRender: true,
  setup(__props) {
    const months = [
      {
        id: "january",
        label: "\u062F\u06CC"
      },
      {
        id: "february",
        label: "\u0628\u0647\u0645\u0646"
      },
      {
        id: "march",
        label: "\u0627\u0633\u0641\u0646\u062F"
      },
      {
        id: "april",
        label: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646"
      },
      {
        id: "may",
        label: "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A"
      },
      {
        id: "june",
        label: "\u062E\u0631\u062F\u0627\u062F"
      },
      {
        id: "july",
        label: "\u062A\u06CC\u0631"
      },
      {
        id: "august",
        label: "\u0627\u064E\u0645\u0631\u062F\u0627\u062F"
      },
      {
        id: "september",
        label: "\u0634\u0647\u0631\u06CC\u0648\u0631"
      },
      {
        id: "october",
        label: "\u0645\u0647\u0631"
      },
      {
        id: "november",
        label: "\u0622\u0628\u0627\u0646"
      },
      {
        id: "december",
        label: "\u0622\u0630\u0631"
      }
    ];
    const defaultKeywords = [
      "\u0648\u0627\u0644\u200C\u0645\u0627\u0631\u062A",
      "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC",
      "\u0634\u0631\u06A9\u062A \u0647\u0631\u06CC",
      "\u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627",
      "\u062F\u0631\u0622\u0645\u062F",
      "\u062E\u0648\u0627\u0631\u0628\u0627\u0631",
      "\u0627\u0633\u0628\u0627\u0628\u200C\u0628\u0627\u0632\u06CC\u200C\u0647\u0627",
      "\u0631\u0633\u062A\u0648\u0631\u0627\u0646"
    ];
    const activeFilterTab = ref("filter-1");
    const timeCategory = ref("all");
    const timeCategoryFrom = ref("");
    const timeCategoryTo = ref("");
    const keywords = ref("");
    const selectedKeyWords = ref([""]);
    const status = ref([""]);
    const accounts = ref([""]);
    const paymentMethods = ref([""]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseSelect = _sfc_main$5;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseRadioHeadless = _sfc_main$6;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseCheckboxHeadless = _sfc_main$7;
      const _component_BaseCheckbox = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative hidden md:block" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { as: "template" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    rounded: "md",
                    size: "sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:filter",
                          class: "me-2 size-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u06CC\u0644\u062A\u0631</span>`);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:filter",
                            class: "me-2 size-4"
                          }),
                          createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u06CC\u0644\u062A\u0631")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseButton, {
                      rounded: "md",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:filter",
                          class: "me-2 size-4"
                        }),
                        createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u06CC\u0644\u062A\u0631")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), { class: "dark:bg-muted-800 border-muted-200 dark:border-muted-700 shadow-muted-400/20 dark:shadow-muted-800/20 absolute start-0 top-11 grid w-[660px] grid-cols-12 overflow-hidden rounded-lg border bg-white shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-muted-50 dark:bg-muted-900 col-span-4 space-y-2 p-6"${_scopeId2}><button type="button" data-tab="tab-1" class="${ssrRenderClass([
                    unref(activeFilterTab) === "filter-1" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800",
                    "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
                  ])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:calendar",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u062C\u0627\u062F</span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "ms-auto size-4 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><button type="button" data-tab="tab-2" class="${ssrRenderClass([
                    unref(activeFilterTab) === "filter-2" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800",
                    "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
                  ])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:search",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u06A9\u0644\u06CC\u062F\u0648\u0627\u0698\u0647\u200C\u0647\u0627</span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "ms-auto size-4 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><button type="button" data-tab="tab-3" class="${ssrRenderClass([
                    unref(activeFilterTab) === "filter-3" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800",
                    "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
                  ])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:loader",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0648\u0636\u0639\u06CC\u062A</span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "ms-auto size-4 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><button type="button" data-tab="tab-4" class="${ssrRenderClass([
                    unref(activeFilterTab) === "filter-4" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800",
                    "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
                  ])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:piggy-bank",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC</span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "ms-auto size-4 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><button type="button" data-tab="tab-5" class="${ssrRenderClass([
                    unref(activeFilterTab) === "filter-5" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800",
                    "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300"
                  ])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:credit-card",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u067E\u0631\u062F\u0627\u062E\u062A</span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "ms-auto size-4 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="col-span-8 min-h-[350px] p-6"${_scopeId2}>`);
                  if (unref(activeFilterTab) === "filter-1") {
                    _push3(`<div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="px-3"${_scopeId2}><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseSelect, {
                      modelValue: unref(timeCategory),
                      "onUpdate:modelValue": ($event) => isRef(timeCategory) ? timeCategory.value = $event : null,
                      label: "Show transactions made within",
                      class: "border-muted-300 text-muted-600 focus:border-muted-300 dark:bg-muted-900 dark:text-muted-200 dark:border-muted-800 dark:focus:border-muted-800 tw-accessibility h-10 w-full appearance-none rounded border bg-white px-3 py-2 font-sans text-sm leading-5 transition-all duration-300 placeholder:text-gray-300 focus:shadow-lg dark:placeholder:text-gray-600"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<option value="all"${_scopeId3}> \u0647\u0645\u0647 \u0632\u0645\u0627\u0646 </option><option value="30_days"${_scopeId3}> \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 </option><option value="this_month"${_scopeId3}> \u0627\u06CC\u0646 \u0645\u0627\u0647 </option><option value="last_month"${_scopeId3}> \u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647 </option><option value="this_year"${_scopeId3}> \u0627\u0645\u0633\u0627\u0644 </option><option value="last_year"${_scopeId3}> \u067E\u0627\u0631\u0633\u0627\u0644 </option>`);
                        } else {
                          return [
                            createVNode("option", { value: "all" }, " \u0647\u0645\u0647 \u0632\u0645\u0627\u0646 "),
                            createVNode("option", { value: "30_days" }, " \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 "),
                            createVNode("option", { value: "this_month" }, " \u0627\u06CC\u0646 \u0645\u0627\u0647 "),
                            createVNode("option", { value: "last_month" }, " \u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647 "),
                            createVNode("option", { value: "this_year" }, " \u0627\u0645\u0633\u0627\u0644 "),
                            createVNode("option", { value: "last_year" }, " \u067E\u0627\u0631\u0633\u0627\u0644 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><hr class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400 mb-4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u06CC\u0627 \u0645\u062D\u062F\u0648\u062F\u0647 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F `);
                        } else {
                          return [
                            createTextVNode(" \u06CC\u0627 \u0645\u062D\u062F\u0648\u062F\u0647 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="grid grid-cols-2 gap-8"${_scopeId2}><div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="mb-2 flex items-center justify-between px-3"${_scopeId2}><button type="button" class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`</button><span class="font-heading text-muted-700 dark:text-muted-100 text-sm"${_scopeId2}> 2023 </span><button type="button" class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                    _push3(`</button></div><div class="grid grid-cols-3 gap-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(months, (month) => {
                      _push3(`<div class="flex items-center justify-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                        modelValue: unref(timeCategoryFrom),
                        "onUpdate:modelValue": ($event) => isRef(timeCategoryFrom) ? timeCategoryFrom.value = $event : null,
                        name: "radio_date_from",
                        value: month.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<button type="button" class="text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"${_scopeId3}>${ssrInterpolate(month.label)}</button>`);
                          } else {
                            return [
                              createVNode("button", {
                                type: "button",
                                class: "text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                              }, toDisplayString(month.label), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div></div></div><div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="mb-2 flex items-center justify-between px-3"${_scopeId2}><button type="button" class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`</button><span class="font-heading text-muted-700 dark:text-muted-100 text-sm"${_scopeId2}> 2023 </span><button type="button" class="text-muted-400 flex w-6 cursor-pointer items-center justify-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                    _push3(`</button></div><div class="grid grid-cols-3 gap-1"${_scopeId2}><!--[-->`);
                    ssrRenderList(months, (month) => {
                      _push3(`<div class="flex items-center justify-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                        modelValue: unref(timeCategoryTo),
                        "onUpdate:modelValue": ($event) => isRef(timeCategoryTo) ? timeCategoryTo.value = $event : null,
                        name: "radio_date_to",
                        value: month.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<button type="button" class="text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"${_scopeId3}>${ssrInterpolate(month.label)}</button>`);
                          } else {
                            return [
                              createVNode("button", {
                                type: "button",
                                class: "text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                              }, toDisplayString(month.label), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div></div></div></div></div></div></div>`);
                  } else if (unref(activeFilterTab) === "filter-2") {
                    _push3(`<div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="px-3"${_scopeId2}><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseInput, {
                      modelValue: unref(keywords),
                      "onUpdate:modelValue": ($event) => isRef(keywords) ? keywords.value = $event : null,
                      label: "\u062C\u0633\u062A\u062C\u0648 \u0628\u0631\u0627\u06CC \u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0628\u062E\u0635\u0648\u0635",
                      icon: "lucide:search",
                      placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0634\u0645\u0627..."
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><hr class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"${_scopeId2}><div class="flex flex-wrap items-center gap-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(defaultKeywords, (keyword) => {
                      _push3(`<div class="flex items-center justify-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseCheckboxHeadless, {
                        modelValue: unref(selectedKeyWords),
                        "onUpdate:modelValue": ($event) => isRef(selectedKeyWords) ? selectedKeyWords.value = $event : null,
                        value: keyword
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<button type="button" class="text-muted-500 dark:text-muted-200 dark:bg-muted-900 border-muted-200 dark:border-muted-800 peer-checked:bg-primary-500/10 peer-checked:border-primary-500 peer-checked:text-primary-500 inline-flex items-center justify-center rounded-full border-2 bg-white px-4 py-1.5 font-sans text-xs transition-colors duration-300"${_scopeId3}>${ssrInterpolate(keyword)}</button>`);
                          } else {
                            return [
                              createVNode("button", {
                                type: "button",
                                class: "text-muted-500 dark:text-muted-200 dark:bg-muted-900 border-muted-200 dark:border-muted-800 peer-checked:bg-primary-500/10 peer-checked:border-primary-500 peer-checked:text-primary-500 inline-flex items-center justify-center rounded-full border-2 bg-white px-4 py-1.5 font-sans text-xs transition-colors duration-300"
                              }, toDisplayString(keyword), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div></div></div></div>`);
                  } else if (unref(activeFilterTab) === "filter-3") {
                    _push3(`<div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="px-3"${_scopeId2}><div class="relative flex items-center justify-between"${_scopeId2}><p class="text-muted-400 font-sans text-sm"${_scopeId2}> \u0628\u0645\u0646\u0638\u0648\u0631 \u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631 \u0648\u0636\u0639\u06CC\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u0626\u06CC\u062F </p><button type="button" class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"${_scopeId2}> \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 </button></div><hr class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"${_scopeId2}><div class="space-y-4"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(status),
                      "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                      color: "primary",
                      label: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
                      value: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(status),
                      "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                      color: "primary",
                      label: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
                      value: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(status),
                      "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                      color: "primary",
                      label: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
                      value: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(status),
                      "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                      color: "primary",
                      label: "\u0631\u062F \u0634\u062F\u0647",
                      value: "\u0631\u062F \u0634\u062F\u0647"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div></div>`);
                  } else if (unref(activeFilterTab) === "filter-4") {
                    _push3(`<div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="px-3"${_scopeId2}><div class="relative flex items-center justify-between"${_scopeId2}><p class="text-muted-400 font-sans text-sm"${_scopeId2}> \u0628\u0631\u0627\u06CC \u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </p><button type="button" class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"${_scopeId2}> \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 </button></div><hr class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"${_scopeId2}><div class="space-y-4"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(accounts),
                      "onUpdate:modelValue": ($event) => isRef(accounts) ? accounts.value = $event : null,
                      color: "primary",
                      label: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC **** 4565 6494",
                      value: "45656494"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(accounts),
                      "onUpdate:modelValue": ($event) => isRef(accounts) ? accounts.value = $event : null,
                      color: "primary",
                      label: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC **** 8346 4209",
                      value: "83464209"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div></div>`);
                  } else if (unref(activeFilterTab) === "filter-5") {
                    _push3(`<div${_scopeId2}><div class="flex flex-col"${_scopeId2}><div class="px-3"${_scopeId2}><div class="relative flex items-center justify-between"${_scopeId2}><p class="text-muted-400 font-sans text-sm"${_scopeId2}> \u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A </p><button type="button" class="text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline"${_scopeId2}> \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 </button></div><hr class="border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t"${_scopeId2}><div class="space-y-4"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(paymentMethods),
                      "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                      color: "primary",
                      label: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC",
                      value: "credit-card"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(paymentMethods),
                      "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                      color: "primary",
                      label: "\u0627\u0646\u062A\u0642\u0627\u0644",
                      value: "transfer"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseCheckbox, {
                      modelValue: unref(paymentMethods),
                      "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                      color: "primary",
                      label: "\u0686\u06A9",
                      value: "cheque"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-muted-50 dark:bg-muted-900 col-span-4 space-y-2 p-6" }, [
                      createVNode("button", {
                        type: "button",
                        "data-tab": "tab-1",
                        class: [
                          "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                          unref(activeFilterTab) === "filter-1" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                        ],
                        onClick: ($event) => activeFilterTab.value = "filter-1"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:calendar",
                          class: "size-4"
                        }),
                        createVNode("span", null, "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u062C\u0627\u062F"),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-right",
                          class: "ms-auto size-4 rtl:rotate-180"
                        })
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        "data-tab": "tab-2",
                        class: [
                          "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                          unref(activeFilterTab) === "filter-2" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                        ],
                        onClick: ($event) => activeFilterTab.value = "filter-2"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:search",
                          class: "size-4"
                        }),
                        createVNode("span", null, "\u06A9\u0644\u06CC\u062F\u0648\u0627\u0698\u0647\u200C\u0647\u0627"),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-right",
                          class: "ms-auto size-4 rtl:rotate-180"
                        })
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        "data-tab": "tab-3",
                        class: [
                          "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                          unref(activeFilterTab) === "filter-3" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                        ],
                        onClick: ($event) => activeFilterTab.value = "filter-3"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:loader",
                          class: "size-4"
                        }),
                        createVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A"),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-right",
                          class: "ms-auto size-4 rtl:rotate-180"
                        })
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        "data-tab": "tab-4",
                        class: [
                          "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                          unref(activeFilterTab) === "filter-4" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                        ],
                        onClick: ($event) => activeFilterTab.value = "filter-4"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:piggy-bank",
                          class: "size-4"
                        }),
                        createVNode("span", null, "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC"),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-right",
                          class: "ms-auto size-4 rtl:rotate-180"
                        })
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        "data-tab": "tab-5",
                        class: [
                          "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                          unref(activeFilterTab) === "filter-5" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                        ],
                        onClick: ($event) => activeFilterTab.value = "filter-5"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:credit-card",
                          class: "size-4"
                        }),
                        createVNode("span", null, "\u067E\u0631\u062F\u0627\u062E\u062A"),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-right",
                          class: "ms-auto size-4 rtl:rotate-180"
                        })
                      ], 10, ["onClick"])
                    ]),
                    createVNode("div", { class: "col-span-8 min-h-[350px] p-6" }, [
                      unref(activeFilterTab) === "filter-1" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "px-3" }, [
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_BaseSelect, {
                                modelValue: unref(timeCategory),
                                "onUpdate:modelValue": ($event) => isRef(timeCategory) ? timeCategory.value = $event : null,
                                label: "Show transactions made within",
                                class: "border-muted-300 text-muted-600 focus:border-muted-300 dark:bg-muted-900 dark:text-muted-200 dark:border-muted-800 dark:focus:border-muted-800 tw-accessibility h-10 w-full appearance-none rounded border bg-white px-3 py-2 font-sans text-sm leading-5 transition-all duration-300 placeholder:text-gray-300 focus:shadow-lg dark:placeholder:text-gray-600"
                              }, {
                                default: withCtx(() => [
                                  createVNode("option", { value: "all" }, " \u0647\u0645\u0647 \u0632\u0645\u0627\u0646 "),
                                  createVNode("option", { value: "30_days" }, " \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 "),
                                  createVNode("option", { value: "this_month" }, " \u0627\u06CC\u0646 \u0645\u0627\u0647 "),
                                  createVNode("option", { value: "last_month" }, " \u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647 "),
                                  createVNode("option", { value: "this_year" }, " \u0627\u0645\u0633\u0627\u0644 "),
                                  createVNode("option", { value: "last_year" }, " \u067E\u0627\u0631\u0633\u0627\u0644 ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-400 mb-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u06CC\u0627 \u0645\u062D\u062F\u0648\u062F\u0647 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "grid grid-cols-2 gap-8" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("div", { class: "mb-2 flex items-center justify-between px-3" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:arrow-left",
                                        class: "size-4"
                                      })
                                    ]),
                                    createVNode("span", { class: "font-heading text-muted-700 dark:text-muted-100 text-sm" }, " 2023 "),
                                    createVNode("button", {
                                      type: "button",
                                      class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:arrow-right",
                                        class: "size-4 rtl:rotate-180"
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-3 gap-1" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(months, (month) => {
                                      return createVNode("div", {
                                        key: month.id,
                                        class: "flex items-center justify-center"
                                      }, [
                                        createVNode(_component_BaseRadioHeadless, {
                                          modelValue: unref(timeCategoryFrom),
                                          "onUpdate:modelValue": ($event) => isRef(timeCategoryFrom) ? timeCategoryFrom.value = $event : null,
                                          name: "radio_date_from",
                                          value: month.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("button", {
                                              type: "button",
                                              class: "text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                                            }, toDisplayString(month.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                      ]);
                                    }), 64))
                                  ])
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("div", { class: "mb-2 flex items-center justify-between px-3" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:arrow-left",
                                        class: "size-4"
                                      })
                                    ]),
                                    createVNode("span", { class: "font-heading text-muted-700 dark:text-muted-100 text-sm" }, " 2023 "),
                                    createVNode("button", {
                                      type: "button",
                                      class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:arrow-right",
                                        class: "size-4 rtl:rotate-180"
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-3 gap-1" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(months, (month) => {
                                      return createVNode("div", {
                                        key: month.id,
                                        class: "flex items-center justify-center"
                                      }, [
                                        createVNode(_component_BaseRadioHeadless, {
                                          modelValue: unref(timeCategoryTo),
                                          "onUpdate:modelValue": ($event) => isRef(timeCategoryTo) ? timeCategoryTo.value = $event : null,
                                          name: "radio_date_to",
                                          value: month.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("button", {
                                              type: "button",
                                              class: "text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                                            }, toDisplayString(month.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                      ]);
                                    }), 64))
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])) : unref(activeFilterTab) === "filter-2" ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "px-3" }, [
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_BaseInput, {
                                modelValue: unref(keywords),
                                "onUpdate:modelValue": ($event) => isRef(keywords) ? keywords.value = $event : null,
                                label: "\u062C\u0633\u062A\u062C\u0648 \u0628\u0631\u0627\u06CC \u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0628\u062E\u0635\u0648\u0635",
                                icon: "lucide:search",
                                placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0634\u0645\u0627..."
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                            createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(defaultKeywords, (keyword) => {
                                return createVNode("div", {
                                  key: keyword,
                                  class: "flex items-center justify-center"
                                }, [
                                  createVNode(_component_BaseCheckboxHeadless, {
                                    modelValue: unref(selectedKeyWords),
                                    "onUpdate:modelValue": ($event) => isRef(selectedKeyWords) ? selectedKeyWords.value = $event : null,
                                    value: keyword
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("button", {
                                        type: "button",
                                        class: "text-muted-500 dark:text-muted-200 dark:bg-muted-900 border-muted-200 dark:border-muted-800 peer-checked:bg-primary-500/10 peer-checked:border-primary-500 peer-checked:text-primary-500 inline-flex items-center justify-center rounded-full border-2 bg-white px-4 py-1.5 font-sans text-xs transition-colors duration-300"
                                      }, toDisplayString(keyword), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                ]);
                              }), 64))
                            ])
                          ])
                        ])
                      ])) : unref(activeFilterTab) === "filter-3" ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "px-3" }, [
                            createVNode("div", { class: "relative flex items-center justify-between" }, [
                              createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0628\u0645\u0646\u0638\u0648\u0631 \u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631 \u0648\u0636\u0639\u06CC\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u0626\u06CC\u062F "),
                              createVNode("button", {
                                type: "button",
                                class: "text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline",
                                onClick: ($event) => status.value = [
                                  "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
                                  "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
                                  "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
                                  "\u0631\u062F \u0634\u062F\u0647"
                                ]
                              }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ", 8, ["onClick"])
                            ]),
                            createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(status),
                                  "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                  color: "primary",
                                  label: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
                                  value: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(status),
                                  "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                  color: "primary",
                                  label: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
                                  value: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(status),
                                  "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                  color: "primary",
                                  label: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
                                  value: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(status),
                                  "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                  color: "primary",
                                  label: "\u0631\u062F \u0634\u062F\u0647",
                                  value: "\u0631\u062F \u0634\u062F\u0647"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ])
                          ])
                        ])
                      ])) : unref(activeFilterTab) === "filter-4" ? (openBlock(), createBlock("div", { key: 3 }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "px-3" }, [
                            createVNode("div", { class: "relative flex items-center justify-between" }, [
                              createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0628\u0631\u0627\u06CC \u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                              createVNode("button", {
                                type: "button",
                                class: "text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline",
                                onClick: ($event) => accounts.value = ["45656494", "83464209"]
                              }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ", 8, ["onClick"])
                            ]),
                            createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(accounts),
                                  "onUpdate:modelValue": ($event) => isRef(accounts) ? accounts.value = $event : null,
                                  color: "primary",
                                  label: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC **** 4565 6494",
                                  value: "45656494"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(accounts),
                                  "onUpdate:modelValue": ($event) => isRef(accounts) ? accounts.value = $event : null,
                                  color: "primary",
                                  label: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC **** 8346 4209",
                                  value: "83464209"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ])
                          ])
                        ])
                      ])) : unref(activeFilterTab) === "filter-5" ? (openBlock(), createBlock("div", { key: 4 }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("div", { class: "px-3" }, [
                            createVNode("div", { class: "relative flex items-center justify-between" }, [
                              createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A "),
                              createVNode("button", {
                                type: "button",
                                class: "text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline",
                                onClick: ($event) => paymentMethods.value = ["credit-card", "transfer", "cheque"]
                              }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ", 8, ["onClick"])
                            ]),
                            createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(paymentMethods),
                                  "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                                  color: "primary",
                                  label: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC",
                                  value: "credit-card"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(paymentMethods),
                                  "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                                  color: "primary",
                                  label: "\u0627\u0646\u062A\u0642\u0627\u0644",
                                  value: "transfer"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", null, [
                                createVNode(_component_BaseCheckbox, {
                                  modelValue: unref(paymentMethods),
                                  "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                                  color: "primary",
                                  label: "\u0686\u06A9",
                                  value: "cheque"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenuButton), { as: "template" }, {
                default: withCtx(() => [
                  createVNode(_component_BaseButton, {
                    rounded: "md",
                    size: "sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:filter",
                        class: "me-2 size-4"
                      }),
                      createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0641\u06CC\u0644\u062A\u0631")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), { class: "dark:bg-muted-800 border-muted-200 dark:border-muted-700 shadow-muted-400/20 dark:shadow-muted-800/20 absolute start-0 top-11 grid w-[660px] grid-cols-12 overflow-hidden rounded-lg border bg-white shadow-xl" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-muted-50 dark:bg-muted-900 col-span-4 space-y-2 p-6" }, [
                        createVNode("button", {
                          type: "button",
                          "data-tab": "tab-1",
                          class: [
                            "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                            unref(activeFilterTab) === "filter-1" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                          ],
                          onClick: ($event) => activeFilterTab.value = "filter-1"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:calendar",
                            class: "size-4"
                          }),
                          createVNode("span", null, "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u062C\u0627\u062F"),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-right",
                            class: "ms-auto size-4 rtl:rotate-180"
                          })
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          "data-tab": "tab-2",
                          class: [
                            "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                            unref(activeFilterTab) === "filter-2" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                          ],
                          onClick: ($event) => activeFilterTab.value = "filter-2"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:search",
                            class: "size-4"
                          }),
                          createVNode("span", null, "\u06A9\u0644\u06CC\u062F\u0648\u0627\u0698\u0647\u200C\u0647\u0627"),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-right",
                            class: "ms-auto size-4 rtl:rotate-180"
                          })
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          "data-tab": "tab-3",
                          class: [
                            "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                            unref(activeFilterTab) === "filter-3" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                          ],
                          onClick: ($event) => activeFilterTab.value = "filter-3"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:loader",
                            class: "size-4"
                          }),
                          createVNode("span", null, "\u0648\u0636\u0639\u06CC\u062A"),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-right",
                            class: "ms-auto size-4 rtl:rotate-180"
                          })
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          "data-tab": "tab-4",
                          class: [
                            "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                            unref(activeFilterTab) === "filter-4" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                          ],
                          onClick: ($event) => activeFilterTab.value = "filter-4"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:piggy-bank",
                            class: "size-4"
                          }),
                          createVNode("span", null, "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC"),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-right",
                            class: "ms-auto size-4 rtl:rotate-180"
                          })
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          "data-tab": "tab-5",
                          class: [
                            "tw-accessibility click-blur flex w-full cursor-pointer items-center gap-2 rounded-lg border-2 px-3 py-2 font-sans text-sm transition-all duration-300",
                            unref(activeFilterTab) === "filter-5" ? "text-primary-500 border-primary-500 bg-primary-500/10" : "text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800"
                          ],
                          onClick: ($event) => activeFilterTab.value = "filter-5"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:credit-card",
                            class: "size-4"
                          }),
                          createVNode("span", null, "\u067E\u0631\u062F\u0627\u062E\u062A"),
                          createVNode(_component_Icon, {
                            name: "lucide:chevron-right",
                            class: "ms-auto size-4 rtl:rotate-180"
                          })
                        ], 10, ["onClick"])
                      ]),
                      createVNode("div", { class: "col-span-8 min-h-[350px] p-6" }, [
                        unref(activeFilterTab) === "filter-1" ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "px-3" }, [
                              createVNode("div", { class: "relative" }, [
                                createVNode(_component_BaseSelect, {
                                  modelValue: unref(timeCategory),
                                  "onUpdate:modelValue": ($event) => isRef(timeCategory) ? timeCategory.value = $event : null,
                                  label: "Show transactions made within",
                                  class: "border-muted-300 text-muted-600 focus:border-muted-300 dark:bg-muted-900 dark:text-muted-200 dark:border-muted-800 dark:focus:border-muted-800 tw-accessibility h-10 w-full appearance-none rounded border bg-white px-3 py-2 font-sans text-sm leading-5 transition-all duration-300 placeholder:text-gray-300 focus:shadow-lg dark:placeholder:text-gray-600"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("option", { value: "all" }, " \u0647\u0645\u0647 \u0632\u0645\u0627\u0646 "),
                                    createVNode("option", { value: "30_days" }, " \u06F3\u06F0 \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647 "),
                                    createVNode("option", { value: "this_month" }, " \u0627\u06CC\u0646 \u0645\u0627\u0647 "),
                                    createVNode("option", { value: "last_month" }, " \u0645\u0627\u0647 \u06AF\u0630\u0634\u062A\u0647 "),
                                    createVNode("option", { value: "this_year" }, " \u0627\u0645\u0633\u0627\u0644 "),
                                    createVNode("option", { value: "last_year" }, " \u067E\u0627\u0631\u0633\u0627\u0644 ")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                              createVNode(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400 mb-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u06CC\u0627 \u0645\u062D\u062F\u0648\u062F\u0647 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid grid-cols-2 gap-8" }, [
                                createVNode("div", null, [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("div", { class: "mb-2 flex items-center justify-between px-3" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:arrow-left",
                                          class: "size-4"
                                        })
                                      ]),
                                      createVNode("span", { class: "font-heading text-muted-700 dark:text-muted-100 text-sm" }, " 2023 "),
                                      createVNode("button", {
                                        type: "button",
                                        class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:arrow-right",
                                          class: "size-4 rtl:rotate-180"
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 gap-1" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(months, (month) => {
                                        return createVNode("div", {
                                          key: month.id,
                                          class: "flex items-center justify-center"
                                        }, [
                                          createVNode(_component_BaseRadioHeadless, {
                                            modelValue: unref(timeCategoryFrom),
                                            "onUpdate:modelValue": ($event) => isRef(timeCategoryFrom) ? timeCategoryFrom.value = $event : null,
                                            name: "radio_date_from",
                                            value: month.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("button", {
                                                type: "button",
                                                class: "text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                                              }, toDisplayString(month.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                        ]);
                                      }), 64))
                                    ])
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("div", { class: "mb-2 flex items-center justify-between px-3" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:arrow-left",
                                          class: "size-4"
                                        })
                                      ]),
                                      createVNode("span", { class: "font-heading text-muted-700 dark:text-muted-100 text-sm" }, " 2023 "),
                                      createVNode("button", {
                                        type: "button",
                                        class: "text-muted-400 flex w-6 cursor-pointer items-center justify-center"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:arrow-right",
                                          class: "size-4 rtl:rotate-180"
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "grid grid-cols-3 gap-1" }, [
                                      (openBlock(), createBlock(Fragment, null, renderList(months, (month) => {
                                        return createVNode("div", {
                                          key: month.id,
                                          class: "flex items-center justify-center"
                                        }, [
                                          createVNode(_component_BaseRadioHeadless, {
                                            modelValue: unref(timeCategoryTo),
                                            "onUpdate:modelValue": ($event) => isRef(timeCategoryTo) ? timeCategoryTo.value = $event : null,
                                            name: "radio_date_to",
                                            value: month.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("button", {
                                                type: "button",
                                                class: "text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 peer-checked:text-primary-500 peer-checked:bg-primary-500/10 group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 flex size-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200"
                                              }, toDisplayString(month.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                        ]);
                                      }), 64))
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])) : unref(activeFilterTab) === "filter-2" ? (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "px-3" }, [
                              createVNode("div", { class: "relative" }, [
                                createVNode(_component_BaseInput, {
                                  modelValue: unref(keywords),
                                  "onUpdate:modelValue": ($event) => isRef(keywords) ? keywords.value = $event : null,
                                  label: "\u062C\u0633\u062A\u062C\u0648 \u0628\u0631\u0627\u06CC \u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0628\u062E\u0635\u0648\u0635",
                                  icon: "lucide:search",
                                  placeholder: "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC \u0634\u0645\u0627..."
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                              createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(defaultKeywords, (keyword) => {
                                  return createVNode("div", {
                                    key: keyword,
                                    class: "flex items-center justify-center"
                                  }, [
                                    createVNode(_component_BaseCheckboxHeadless, {
                                      modelValue: unref(selectedKeyWords),
                                      "onUpdate:modelValue": ($event) => isRef(selectedKeyWords) ? selectedKeyWords.value = $event : null,
                                      value: keyword
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("button", {
                                          type: "button",
                                          class: "text-muted-500 dark:text-muted-200 dark:bg-muted-900 border-muted-200 dark:border-muted-800 peer-checked:bg-primary-500/10 peer-checked:border-primary-500 peer-checked:text-primary-500 inline-flex items-center justify-center rounded-full border-2 bg-white px-4 py-1.5 font-sans text-xs transition-colors duration-300"
                                        }, toDisplayString(keyword), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue", "value"])
                                  ]);
                                }), 64))
                              ])
                            ])
                          ])
                        ])) : unref(activeFilterTab) === "filter-3" ? (openBlock(), createBlock("div", { key: 2 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "px-3" }, [
                              createVNode("div", { class: "relative flex items-center justify-between" }, [
                                createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0628\u0645\u0646\u0638\u0648\u0631 \u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631 \u0648\u0636\u0639\u06CC\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u0626\u06CC\u062F "),
                                createVNode("button", {
                                  type: "button",
                                  class: "text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline",
                                  onClick: ($event) => status.value = [
                                    "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
                                    "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
                                    "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
                                    "\u0631\u062F \u0634\u062F\u0647"
                                  ]
                                }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ", 8, ["onClick"])
                              ]),
                              createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(status),
                                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                    color: "primary",
                                    label: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634",
                                    value: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(status),
                                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                    color: "primary",
                                    label: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644",
                                    value: "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(status),
                                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                    color: "primary",
                                    label: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647",
                                    value: "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(status),
                                    "onUpdate:modelValue": ($event) => isRef(status) ? status.value = $event : null,
                                    color: "primary",
                                    label: "\u0631\u062F \u0634\u062F\u0647",
                                    value: "\u0631\u062F \u0634\u062F\u0647"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ])
                          ])
                        ])) : unref(activeFilterTab) === "filter-4" ? (openBlock(), createBlock("div", { key: 3 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "px-3" }, [
                              createVNode("div", { class: "relative flex items-center justify-between" }, [
                                createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0628\u0631\u0627\u06CC \u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                                createVNode("button", {
                                  type: "button",
                                  class: "text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline",
                                  onClick: ($event) => accounts.value = ["45656494", "83464209"]
                                }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ", 8, ["onClick"])
                              ]),
                              createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(accounts),
                                    "onUpdate:modelValue": ($event) => isRef(accounts) ? accounts.value = $event : null,
                                    color: "primary",
                                    label: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC **** 4565 6494",
                                    value: "45656494"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(accounts),
                                    "onUpdate:modelValue": ($event) => isRef(accounts) ? accounts.value = $event : null,
                                    color: "primary",
                                    label: "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC **** 8346 4209",
                                    value: "83464209"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ])
                          ])
                        ])) : unref(activeFilterTab) === "filter-5" ? (openBlock(), createBlock("div", { key: 4 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "px-3" }, [
                              createVNode("div", { class: "relative flex items-center justify-between" }, [
                                createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0641\u06CC\u0644\u062A\u0631 \u06A9\u0631\u062F\u0646 \u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A "),
                                createVNode("button", {
                                  type: "button",
                                  class: "text-medium text-primary-500 font-sans text-sm underline-offset-4 hover:underline",
                                  onClick: ($event) => paymentMethods.value = ["credit-card", "transfer", "cheque"]
                                }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647 ", 8, ["onClick"])
                              ]),
                              createVNode("hr", { class: "border-muted-200 dark:border-muted-700 mb-4 mt-6 border-t" }),
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(paymentMethods),
                                    "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                                    color: "primary",
                                    label: "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC",
                                    value: "credit-card"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(paymentMethods),
                                    "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                                    color: "primary",
                                    label: "\u0627\u0646\u062A\u0642\u0627\u0644",
                                    value: "transfer"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseCheckbox, {
                                    modelValue: unref(paymentMethods),
                                    "onUpdate:modelValue": ($event) => isRef(paymentMethods) ? paymentMethods.value = $event : null,
                                    color: "primary",
                                    label: "\u0686\u06A9",
                                    value: "cheque"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTransactionsFilters.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BasePlaceload = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-7 overflow-x-auto px-2" }, _attrs))}><table class="w-full whitespace-nowrap"><thead><th class="w-1/5 px-4 pb-3">`);
  _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3.5 w-6 rounded" }, null, _parent));
  _push(`</th><th class="w-2/5 px-4 pb-3">`);
  _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3.5 w-14 rounded" }, null, _parent));
  _push(`</th><th class="px-4 pb-3">`);
  _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3.5 w-16 rounded" }, null, _parent));
  _push(`</th><th class="px-4 pb-3">`);
  _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3.5 w-16 rounded" }, null, _parent));
  _push(`</th><th class="px-4 pb-3">`);
  _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3.5 w-12 rounded" }, null, _parent));
  _push(`</th><th class="px-4 pb-3 font-sans text-xs font-semibold">`);
  _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3.5 w-20 rounded" }, null, _parent));
  _push(`</th></thead><tbody><!--[-->`);
  ssrRenderList(10, (index) => {
    _push(`<tr tabindex="0"><td class="px-4 py-2">`);
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-20 rounded" }, null, _parent));
    _push(`</td><td class="px-4 py-2">`);
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-28 rounded" }, null, _parent));
    _push(`</td><td class="px-4 py-2">`);
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-20 rounded" }, null, _parent));
    _push(`</td><td class="px-4 py-2">`);
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-20 rounded" }, null, _parent));
    _push(`</td><td class="px-4 py-2">`);
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "m-1 w-16 rounded-full p-3" }, null, _parent));
    _push(`</td><td class="px-4 py-2"><div class="flex items-center gap-2">`);
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "size-5 rounded-full" }, null, _parent));
    _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-16 rounded" }, null, _parent));
    _push(`</div></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTransactionsListPlaceload.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "transactions",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(20);
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/transactions", {
      query
    }, "$ok9Pyh6JZ3")), __temp = await __temp, __restore(), __temp);
    function statusColor(itemStatus) {
      switch (itemStatus) {
        case "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647":
          return "success";
        case "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644":
          return "primary";
        case "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634":
          return "info";
        case "\u0631\u062F \u0634\u062F\u0647":
          return "warning";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_DemoTransactionsFilters = _sfc_main$2;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoTransactionsListPlaceload = __nuxt_component_4;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseTag = _sfc_main$3;
      const _component_BasePagination = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pb-24" }, _attrs))}><div class="flex items-center justify-between py-6"><div>`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(filter),
        "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
        icon: "lucide:search",
        rounded: "lg",
        placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627..."
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-2"><span class="text-muted-400 font-sans text-sm"> \u06F0-${ssrInterpolate(unref(perPage))} \u0627\u0632 ${ssrInterpolate(unref(data)?.total)}</span></div></div><div class="w-full"><div class="flex w-full items-center gap-5"><div>`);
      _push(ssrRenderComponent(_component_DemoTransactionsFilters, null, null, _parent));
      _push(`</div><span class="text-muted-600 dark:text-muted-500 hidden font-sans text-sm font-medium md:block"> \u0647\u06CC\u0686 \u0641\u06CC\u0644\u062A\u0631\u06CC \u0627\u0639\u0645\u0627\u0644 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A </span><div class="ms-auto">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "full",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:download",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u062E\u0631\u0648\u062C\u06CC \u0647\u0645\u0647</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:download",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u062E\u0631\u0648\u062C\u06CC \u0647\u0645\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      if (!unref(pending) && unref(data)?.data.length === 0) {
        _push(ssrRenderComponent(_component_DemoTransactionsListPlaceload, null, null, _parent));
      } else {
        _push(`<div class="mt-7 overflow-x-auto px-2"><table class="w-full whitespace-nowrap"><thead><th class="text-muted-400 dark:text-muted-300 w-1/5 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u062A\u0627\u0631\u06CC\u062E</span></th><th class="text-muted-400 dark:text-muted-300 w-2/5 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0628\u0647 / \u0627\u0632</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0645\u0642\u062F\u0627\u0631</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0648\u0636\u0639\u06CC\u062A</span></th><th class="text-muted-400 dark:text-muted-300 px-4 pb-3 text-start font-sans text-xs font-semibold"><span>\u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A</span></th></thead><tbody><!--[-->`);
        ssrRenderList(unref(data)?.data, (item, index) => {
          _push(`<tr tabindex="0" class="hover:bg-muted-200 dark:hover:bg-muted-800 transition-colors duration-300 ease-in-out"><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            weight: "medium",
            lead: "none",
            class: "text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.date)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.date), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            weight: "medium",
            lead: "none",
            class: "text-muted-600 dark:text-muted-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.issuer)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.issuer), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            weight: "semibold",
            lead: "none",
            class: "text-muted-800 dark:text-muted-100"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.type === "in" ? "+" : "-")} ${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
              } else {
                return [
                  createTextVNode(toDisplayString(item.type === "in" ? "+" : "-") + " " + toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            weight: "medium",
            lead: "none",
            class: "text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.account)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.account), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4">`);
          _push(ssrRenderComponent(_component_BaseTag, {
            variant: index > 6 ? "solid" : "pastel",
            rounded: "full",
            color: index > 6 ? "default" : statusColor(item.status),
            size: "sm"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.status)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.status), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="p-4"><div class="text-muted-400 flex items-center gap-2">`);
          if (item.method === "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC") {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:credit-card-duotone",
              class: "size-5"
            }, null, _parent));
          } else if (item.method === "\u0686\u06A9") {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:pen-nib-duotone",
              class: "size-5"
            }, null, _parent));
          } else if (item.method === "\u0627\u0646\u062A\u0642\u0627\u0644") {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:arrows-left-right-duotone",
              class: "size-5"
            }, null, _parent));
          } else if (item.method === "bank") {
            _push(ssrRenderComponent(_component_Icon, {
              name: "ph:bank-duotone",
              class: "size-5"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_BaseText, {
            size: "sm",
            weight: "medium",
            lead: "none",
            class: "text-muted-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.method)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.method), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></td></tr>`);
        });
        _push(`<!--]--></tbody></table><div class="mt-6">`);
        _push(ssrRenderComponent(_component_BasePagination, {
          "total-items": unref(data)?.total ?? 0,
          "item-per-page": unref(perPage),
          "current-page": unref(page),
          classes: { button: "rtl:rotate-180" },
          rounded: "md"
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/transactions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
