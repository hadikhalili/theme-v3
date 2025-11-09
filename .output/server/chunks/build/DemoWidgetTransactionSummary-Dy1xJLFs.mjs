import { j as useRoute, u as useRouter, h as _sfc_main$u, b as _sfc_main$w, l as _sfc_main$3, f as _sfc_main$C, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './DemoLinkArrow-CYqyQpEI.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoWidgetTransactionSummary",
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
    }, "$aoCZ1C2AV0")), __temp = await __temp, __restore(), __temp);
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
      const _component_DemoLinkArrow = _sfc_main$1;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
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
            _push2(ssrRenderComponent(_component_DemoLinkArrow, { to: "#" }, null, _parent2, _scopeId));
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
                _push2(`<tr tabindex="0"${_scopeId}><td class="xs:pe-6 py-2"${_scopeId}>`);
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
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.account)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.account), 1)
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
                _push2(`</td><td class="px-4 py-2"${_scopeId}><div class="text-muted-400 flex items-center gap-2"${_scopeId}>`);
                if (item.method === "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC") {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "ph:credit-card-duotone",
                    class: "size-5"
                  }, null, _parent2, _scopeId));
                } else if (item.method === "\u0686\u06A9") {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "ph:pen-nib-duotone",
                    class: "size-5"
                  }, null, _parent2, _scopeId));
                } else if (item.method === "\u0627\u0646\u062A\u0642\u0627\u0644") {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "ph:arrows-left-right-duotone",
                    class: "size-5"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "sm",
                  weight: "medium",
                  lead: "none",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.method)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.method), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></td></tr>`);
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
                createVNode(_component_DemoLinkArrow, { to: "#" })
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
                        createVNode("td", { class: "xs:pe-6 py-2" }, [
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
                          createVNode(_component_BaseText, {
                            size: "sm",
                            weight: "medium",
                            lead: "none",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.account), 1)
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
                        ]),
                        createVNode("td", { class: "px-4 py-2" }, [
                          createVNode("div", { class: "text-muted-400 flex items-center gap-2" }, [
                            item.method === "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC" ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "ph:credit-card-duotone",
                              class: "size-5"
                            })) : item.method === "\u0686\u06A9" ? (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "ph:pen-nib-duotone",
                              class: "size-5"
                            })) : item.method === "\u0627\u0646\u062A\u0642\u0627\u0644" ? (openBlock(), createBlock(_component_Icon, {
                              key: 2,
                              name: "ph:arrows-left-right-duotone",
                              class: "size-5"
                            })) : createCommentVNode("", true),
                            createVNode(_component_BaseText, {
                              size: "sm",
                              weight: "medium",
                              lead: "none",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.method), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoWidgetTransactionSummary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
