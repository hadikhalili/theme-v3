import { o as onClickOutside, j as useRoute, u as useRouter, h as _sfc_main$u, a as __nuxt_component_2, c as _sfc_main$v, b as _sfc_main$w, f as _sfc_main$C, e as _sfc_main$e, l as _sfc_main$3$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './BaseProgressCircle-CfqQZLPv.mjs';
import { _ as __nuxt_component_5 } from './DemoWidgetAccountBalance-DDhp0RdO.mjs';
import { _ as _sfc_main$7 } from './DemoLinkArrow-CYqyQpEI.mjs';
import { _ as _sfc_main$8 } from './BaseTag-CQSmGSbm.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, Transition, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed, watch, withAsyncContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './DemoCreditCardReal-BWXE4_zQ.mjs';
import { _ as _sfc_main$3 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$4 } from './BaseRadioHeadless-BL03emlX.mjs';
import { _ as _sfc_main$5 } from './BaseAvatar-3aYTRoBN.mjs';
import __nuxt_component_0$1 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$6 } from './BaseInputNumber-BvjqvKuw.mjs';
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
import './DemoChartAreaBalance-BPxKKcSf.mjs';
import './AddonApexcharts-cnqu1j3S.mjs';
import './fa-DpcB1dqS.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoWidgetTransactionCompact",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(10);
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
    }, "$lW8C5GDyRs")), __temp = await __temp, __restore(), __temp);
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
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_DemoLinkArrow = _sfc_main$7;
      const _component_BasePlaceholderPage = _sfc_main$3$1;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseTag = _sfc_main$8;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        rounded: "md",
        class: "p-4 md:px-8 md:py-7 xl:px-10"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="items-center justify-between sm:flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              lead: "none",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DemoLinkArrow, {
              to: "#",
              label: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (!unref(pending) && unref(data)?.data.length === 0) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
                subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F."
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="mt-7 overflow-x-auto"${_scopeId}><table class="w-full whitespace-nowrap"${_scopeId}><thead${_scopeId}><th class="w-1/5"${_scopeId}></th><th class="w-2/5"${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(data)?.data.slice(0, 8), (item) => {
                _push2(`<tr tabindex="0"${_scopeId}><td class="py-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.date)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.date), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="py-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-600 dark:text-muted-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.issuer)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.issuer), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="px-4 py-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "sm",
                  weight: "semibold",
                  lead: "none",
                  class: "text-muted-800 dark:text-muted-100"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.type === "in" ? "+" : "-")} ${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.type === "in" ? "+" : "-") + " " + toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td><td class="px-4 py-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseTag, {
                  variant: "pastel",
                  rounded: "full",
                  color: statusColor(item.status),
                  size: "sm"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.status)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.status), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div>`);
            }
          } else {
            return [
              createVNode("div", { class: "items-center justify-between sm:flex" }, [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-400 uppercase"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_DemoLinkArrow, {
                  to: "#",
                  label: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647"
                })
              ]),
              !unref(pending) && unref(data)?.data.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_component_BasePlaceholderPage, {
                  title: "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
                  subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F."
                })
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "mt-7 overflow-x-auto"
              }, [
                createVNode("table", { class: "w-full whitespace-nowrap" }, [
                  createVNode("thead", null, [
                    createVNode("th", { class: "w-1/5" }),
                    createVNode("th", { class: "w-2/5" }),
                    createVNode("th"),
                    createVNode("th"),
                    createVNode("th"),
                    createVNode("th")
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.data.slice(0, 8), (item) => {
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        tabindex: "0"
                      }, [
                        createVNode("td", { class: "py-2" }, [
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            lead: "none",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.date), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "py-2" }, [
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            lead: "none",
                            class: "text-muted-600 dark:text-muted-300"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.issuer), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "px-4 py-2" }, [
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "semibold",
                            lead: "none",
                            class: "text-muted-800 dark:text-muted-100"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.type === "in" ? "+" : "-") + " " + toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "px-4 py-2" }, [
                          createVNode(_component_BaseTag, {
                            variant: "pastel",
                            rounded: "full",
                            color: statusColor(item.status),
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetTransactionCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "banking-4",
  __ssrInlineRender: true,
  setup(__props) {
    const accounts = ref([
      {
        id: 1,
        type: "\u062C\u0627\u0631\u06CC",
        label: "**** 4897",
        number: "1487 3256 54122 4897",
        balance: 9543.12
      },
      {
        id: 2,
        type: "\u062C\u0627\u0631\u06CC",
        label: "**** 4869",
        number: "3524 65456 3245 4869",
        balance: 1211.67
      },
      {
        id: 3,
        type: "\u067E\u0633\u200C\u0627\u0646\u062F\u0627\u0632",
        label: "**** 6279",
        number: "3524 65456 3245 6279",
        balance: 4653.97
      }
    ]);
    const selectedPerson = ref("\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646");
    const selectedAccount = ref(accounts.value[0]);
    const amount = ref();
    const target = ref(null);
    const open = ref(false);
    function openDropdown() {
      open.value = true;
    }
    onClickOutside(target, () => open.value = false);
    function setAccount(account) {
      selectedAccount.value = account;
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseProgressCircle = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseHeading = _sfc_main$w;
      const _component_DemoWidgetAccountBalance = __nuxt_component_5;
      const _component_DemoWidgetTransactionCompact = _sfc_main$1;
      const _component_DemoCreditCardReal = _sfc_main$2;
      const _component_BaseButtonIcon = _sfc_main$3;
      const _component_BaseRadioHeadless = _sfc_main$4;
      const _component_BaseAvatar = _sfc_main$5;
      const _component_TairoLogo = __nuxt_component_0$1;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseInputNumber = _sfc_main$6;
      const _component_BaseButton = _sfc_main$e;
      const _component_DemoLinkArrow = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6 pb-20 pt-4" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="text-primary-500 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseProgressCircle, {
              max: 100,
              value: 75,
              size: 82,
              thickness: 1,
              color: "primary"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:sparkles",
              class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0648\u062F \u0647\u0641\u062A\u06AF\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0648\u062F \u0647\u0641\u062A\u06AF\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, { size: "xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F9\u06F2\u06F6.\u06F3\u06F1 \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06F9\u06F2\u06F6.\u06F3\u06F1 \u062A\u0648\u0645\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "text-primary-500 relative" }, [
                  createVNode(_component_BaseProgressCircle, {
                    max: 100,
                    value: 75,
                    size: 82,
                    thickness: 1,
                    color: "primary"
                  }),
                  createVNode(_component_Icon, {
                    name: "lucide:sparkles",
                    class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0633\u0648\u062F \u0647\u0641\u062A\u06AF\u06CC ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, { size: "xl" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F9\u06F2\u06F6.\u06F3\u06F1 \u062A\u0648\u0645\u0627\u0646 ")
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
      _push(`</div><div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="text-success-500 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseProgressCircle, {
              max: 100,
              value: 75,
              size: 82,
              thickness: 1,
              color: "success"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-up",
              class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0644 \u062F\u0631\u0622\u0645\u062F `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0644 \u062F\u0631\u0622\u0645\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, { size: "xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F2\u06F6\u06F2\u06F9.\u06F4\u06F3\u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06F2\u06F6\u06F2\u06F9.\u06F4\u06F3\u062A\u0648\u0645\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "text-success-500 relative" }, [
                  createVNode(_component_BaseProgressCircle, {
                    max: 100,
                    value: 75,
                    size: 82,
                    thickness: 1,
                    color: "success"
                  }),
                  createVNode(_component_Icon, {
                    name: "lucide:trending-up",
                    class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0644 \u062F\u0631\u0622\u0645\u062F ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, { size: "xl" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F2\u06F6\u06F2\u06F9.\u06F4\u06F3\u062A\u0648\u0645\u0627\u0646 ")
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
      _push(`</div><div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="text-danger-500 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseProgressCircle, {
              max: 100,
              value: 34,
              size: 82,
              thickness: 1,
              color: "danger"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:trending-down",
              class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0644 \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0644 \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, { size: "xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F1,\u06F8\u06F2\u06F1.\u06F5\u06F6 \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06F1,\u06F8\u06F2\u06F1.\u06F5\u06F6 \u062A\u0648\u0645\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "text-danger-500 relative" }, [
                  createVNode(_component_BaseProgressCircle, {
                    max: 100,
                    value: 34,
                    size: 82,
                    thickness: 1,
                    color: "danger"
                  }),
                  createVNode(_component_Icon, {
                    name: "lucide:trending-down",
                    class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0644 \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, { size: "xl" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F1,\u06F8\u06F2\u06F1.\u06F5\u06F6 \u062A\u0648\u0645\u0627\u0646 ")
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
      _push(`</div><div class="ltablet:col-span-3 col-span-12 sm:col-span-6 lg:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="text-warning-500 relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseProgressCircle, {
              max: 100,
              value: 82,
              size: 82,
              thickness: 1,
              color: "warning"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:dollar-sign",
              class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A `);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, { size: "xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06F7,\u06F1\u06F2\u06F1,\u06F9\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u06F7,\u06F1\u06F2\u06F1,\u06F9\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "text-warning-500 relative" }, [
                  createVNode(_component_BaseProgressCircle, {
                    max: 100,
                    value: 82,
                    size: 82,
                    thickness: 1,
                    color: "warning"
                  }),
                  createVNode(_component_Icon, {
                    name: "lucide:dollar-sign",
                    class: "absolute start-1/2 top-1/2 size-6 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0644 \u0645\u0627\u0644\u06CC\u0627\u062A ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseHeading, { size: "xl" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06F7,\u06F1\u06F2\u06F1,\u06F9\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646 ")
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
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 space-y-6 lg:col-span-8">`);
      _push(ssrRenderComponent(_component_DemoWidgetAccountBalance, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoWidgetTransactionCompact, null, null, _parent));
      _push(`</div><form action="" class="ltablet:col-span-4 col-span-12 space-y-6 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "p-4 md:p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="my-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoCreditCardReal, {
              status: "active",
              name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
              number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4479",
              brand: "mastercard"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              size: "md",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 flex justify-between gap-3"${_scopeId}><div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, { rounded: "full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(selectedPerson),
              "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
              name: "transfer",
              value: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
              "data-nui-tooltip": "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/8.svg",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/8.svg",
                        size: "sm"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(selectedPerson),
              "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
              name: "transfer",
              value: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
              "data-nui-tooltip": "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/24.svg",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/24.svg",
                        size: "sm"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(selectedPerson),
              "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
              name: "transfer",
              value: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646",
              "data-nui-tooltip": "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/3.svg",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/3.svg",
                        size: "sm"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseRadioHeadless, {
              modelValue: unref(selectedPerson),
              "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
              name: "transfer",
              value: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
              "data-nui-tooltip": "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/12.svg",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/12.svg",
                        size: "sm"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-6 space-y-4"${_scopeId}><div class="relative z-20 w-full"${_scopeId}><button type="button" class="click-blur dark:bg-muted-950 border-muted-200 dark:border-muted-800 w-full rounded-xl border bg-white p-4"${_scopeId}><span class="flex w-full items-center gap-3 text-start"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-500 size-8" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-800 dark:text-muted-200 block capitalize"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(selectedAccount).type)} ${ssrInterpolate(unref(selectedAccount).label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(selectedAccount).type) + " " + toDisplayString(unref(selectedAccount).label), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400 block"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(selectedAccount).balance.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(selectedAccount).balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-down",
              class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", unref(open) && "rotate-180"]
            }, null, _parent2, _scopeId));
            _push2(`</span></button>`);
            if (unref(open)) {
              _push2(`<div class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute start-0 top-20 w-full rounded-xl border bg-white p-2 shadow-xl"${_scopeId}><ul${_scopeId}><!--[-->`);
              ssrRenderList(unref(accounts), (account) => {
                _push2(`<li${_scopeId}><button type="button" class="hover:bg-muted-100 dark:hover:bg-muted-900 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-start transition-colors duration-300"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-muted-400 dark:text-muted-100 size-8" }, null, _parent2, _scopeId));
                _push2(`<span class="block"${_scopeId}><span class="font-heading text-muted-800 dark:text-muted-200 block text-sm capitalize"${_scopeId}>${ssrInterpolate(account.type)} ${ssrInterpolate(account.label)}</span><span class="font-heading text-muted-500 dark:text-muted-400 block text-xs"${_scopeId}>${ssrInterpolate(account.balance.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 </span></span></button></li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInputNumber, {
              modelValue: unref(amount),
              "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
              icon: "lucide:dollar-sign",
              placeholder: "\u0645\u0628\u0644\u063A \u0627\u0646\u062A\u0642\u0627\u0644"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              rounded: "md",
              color: "primary",
              class: "!h-12 w-full"
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "my-6" }, [
                createVNode(_component_DemoCreditCardReal, {
                  status: "active",
                  name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
                  number: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4479",
                  brand: "mastercard"
                })
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  size: "md",
                  weight: "medium",
                  class: "text-muted-800 dark:text-muted-100"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u0646\u062A\u0642\u0627\u0644 \u0633\u0631\u06CC\u0639 ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-6 flex justify-between gap-3" }, [
                  createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                    createVNode(_component_BaseButtonIcon, { rounded: "full" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_BaseRadioHeadless, {
                    modelValue: unref(selectedPerson),
                    "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
                    name: "transfer",
                    value: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
                    "data-nui-tooltip": "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/8.svg",
                          size: "sm"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_BaseRadioHeadless, {
                    modelValue: unref(selectedPerson),
                    "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
                    name: "transfer",
                    value: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
                    "data-nui-tooltip": "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/24.svg",
                          size: "sm"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_BaseRadioHeadless, {
                    modelValue: unref(selectedPerson),
                    "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
                    name: "transfer",
                    value: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646",
                    "data-nui-tooltip": "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/3.svg",
                          size: "sm"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_BaseRadioHeadless, {
                    modelValue: unref(selectedPerson),
                    "onUpdate:modelValue": ($event) => isRef(selectedPerson) ? selectedPerson.value = $event : null,
                    name: "transfer",
                    value: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
                    "data-nui-tooltip": "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "border-muted-200 peer-checked:border-primary-500 dark:border-muted-700 flex size-12 items-center justify-center rounded-full border-2" }, [
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/12.svg",
                          size: "sm"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "mt-6 space-y-4" }, [
                createVNode("div", {
                  ref_key: "target",
                  ref: target,
                  class: "relative z-20 w-full"
                }, [
                  createVNode("button", {
                    type: "button",
                    class: "click-blur dark:bg-muted-950 border-muted-200 dark:border-muted-800 w-full rounded-xl border bg-white p-4",
                    onClick: ($event) => openDropdown()
                  }, [
                    createVNode("span", { class: "flex w-full items-center gap-3 text-start" }, [
                      createVNode(_component_TairoLogo, { class: "text-primary-500 size-8" }),
                      createVNode("div", null, [
                        createVNode(_component_BaseText, {
                          size: "sm",
                          class: "text-muted-800 dark:text-muted-200 block capitalize"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(selectedAccount).type) + " " + toDisplayString(unref(selectedAccount).label), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400 block"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(selectedAccount).balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_Icon, {
                        name: "lucide:chevron-down",
                        class: ["text-muted-400 ms-auto size-4 transition-transform duration-300", unref(open) && "rotate-180"]
                      }, null, 8, ["class"])
                    ])
                  ], 8, ["onClick"]),
                  createVNode(Transition, {
                    "enter-active-class": "transition duration-100 ease-out",
                    "enter-from-class": "transform scale-95 opacity-0",
                    "enter-to-class": "transform scale-100 opacity-100",
                    "leave-active-class": "transition duration-75 ease-in",
                    "leave-from-class": "transform scale-100 opacity-100",
                    "leave-to-class": "transform scale-95 opacity-0"
                  }, {
                    default: withCtx(() => [
                      unref(open) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "border-muted-200 dark:border-muted-800 dark:bg-muted-950 shadow-muted-400/10 dark:shadow-muted-800/10 absolute start-0 top-20 w-full rounded-xl border bg-white p-2 shadow-xl"
                      }, [
                        createVNode("ul", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts), (account) => {
                            return openBlock(), createBlock("li", {
                              key: account.id
                            }, [
                              createVNode("button", {
                                type: "button",
                                class: "hover:bg-muted-100 dark:hover:bg-muted-900 flex w-full items-center gap-3 rounded-lg px-4 py-2 text-start transition-colors duration-300",
                                onClick: ($event) => setAccount(account)
                              }, [
                                createVNode(_component_TairoLogo, { class: "text-muted-400 dark:text-muted-100 size-8" }),
                                createVNode("span", { class: "block" }, [
                                  createVNode("span", { class: "font-heading text-muted-800 dark:text-muted-200 block text-sm capitalize" }, toDisplayString(account.type) + " " + toDisplayString(account.label), 1),
                                  createVNode("span", { class: "font-heading text-muted-500 dark:text-muted-400 block text-xs" }, toDisplayString(account.balance.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                                ])
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ], 512),
                createVNode("div", { class: "relative" }, [
                  createVNode(_component_BaseInputNumber, {
                    modelValue: unref(amount),
                    "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                    icon: "lucide:dollar-sign",
                    placeholder: "\u0645\u0628\u0644\u063A \u0627\u0646\u062A\u0642\u0627\u0644"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseButton, {
                    type: "submit",
                    rounded: "md",
                    color: "primary",
                    class: "!h-12 w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
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
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "md",
        class: "relative flex flex-col gap-4 sm:flex-row"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col p-6"${_scopeId}><div class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 mb-4 flex size-14 items-center justify-center rounded-full border bg-white"${_scopeId}><div class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-10 items-center justify-center rounded-full border bg-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bank-duotone",
              class: "text-primary-500 size-6"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              weight: "medium",
              size: "lg",
              class: "text-muted-800 dark:text-muted-100 mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0648\u0644 \u0633\u0631\u06CC\u0639 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0648\u0644 \u0633\u0631\u06CC\u0639 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-500 dark:text-muted-400 mb-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. `);
                } else {
                  return [
                    createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mb-1 mt-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoLinkArrow, {
              to: "#",
              label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col p-6" }, [
                createVNode("div", { class: "dark:bg-muted-900 border-muted-200 dark:border-muted-800 mb-4 flex size-14 items-center justify-center rounded-full border bg-white" }, [
                  createVNode("div", { class: "dark:bg-muted-900 border-muted-200 dark:border-muted-800 flex size-10 items-center justify-center rounded-full border bg-white" }, [
                    createVNode(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "text-primary-500 size-6"
                    })
                  ])
                ]),
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "lg",
                  class: "text-muted-800 dark:text-muted-100 mb-2"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0631\u062F\u0646 \u067E\u0648\u0644 \u0633\u0631\u06CC\u0639 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400 mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0628\u0648\u0631\u06A9 \u0627\u06CC\u062F\u0645 \u0627\u062F\u0647\u0648\u06A9\u061B \u0627\u06CC\u06AF\u06CC\u062A\u0648\u0631 \u0646\u06A9\u0648\u0647 \u0627\u0633\u062A\u0648\u0644\u062A\u0648\u0631\u0648\u0645 \u06A9\u0633\u06CC \u0628\u0626\u0627\u062A\u0648\u0633 \u0646\u06CC\u0633\u062A. ")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mb-1 mt-auto" }, [
                  createVNode(_component_DemoLinkArrow, {
                    to: "#",
                    label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/banking-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
