import { j as useRoute, u as useRouter, o as onClickOutside, b as _sfc_main$w, c as _sfc_main$v, h as _sfc_main$u, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$3 } from './DemoLinkArrow-CYqyQpEI.mjs';
import { useSSRContext, defineComponent, computed, ref, watch, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './AddonCollapseTransition-BB4bvzuf.mjs';
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
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoOfferCollapse",
  __ssrInlineRender: true,
  props: {
    slug: {},
    title: {},
    subtitle: {},
    icon: {},
    remaining: {}
  },
  setup(__props) {
    const props = __props;
    const target = ref(null);
    const open = ref(false);
    onClickOutside(target, (event) => open.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoLinkArrow = _sfc_main$3;
      _push(ssrRenderComponent(_component_BaseCard, mergeProps({
        ref_key: "target",
        ref: target,
        rounded: "lg",
        shadow: "hover",
        class: "p-5"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="click-blur flex w-full items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: props.icon,
              class: "size-8"
            }, null, _parent2, _scopeId));
            _push2(`<span class="block text-start"${_scopeId}><span class="font-heading text-muted-800 dark:text-muted-200 block text-sm font-medium"${_scopeId}>${ssrInterpolate(props.title)}</span><span class="font-heading text-muted-400 block text-xs font-medium"${_scopeId}>${ssrInterpolate(props.subtitle)}</span></span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-down",
              class: ["text-muted-400 ms-auto size-5 transition-transform duration-300", unref(open) ? "rotate-180" : ""]
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(open)) {
                    _push3(`<div class="group flex items-center justify-between pt-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_DemoLinkArrow, {
                      to: "#",
                      label: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u06CC\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="font-heading text-muted-400 text-xs"${_scopeId2}>${ssrInterpolate(props.remaining)} \u0645\u0627\u0646\u062F\u0647</span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(open) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "group flex items-center justify-between pt-4"
                    }, [
                      createVNode(_component_DemoLinkArrow, {
                        to: "#",
                        label: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u06CC\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F"
                      }),
                      createVNode("span", { class: "font-heading text-muted-400 text-xs" }, toDisplayString(props.remaining) + " \u0645\u0627\u0646\u062F\u0647", 1)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "click-blur flex w-full items-center gap-3",
                onClick: ($event) => open.value = !unref(open)
              }, [
                createVNode(_component_Icon, {
                  name: props.icon,
                  class: "size-8"
                }, null, 8, ["name"]),
                createVNode("span", { class: "block text-start" }, [
                  createVNode("span", { class: "font-heading text-muted-800 dark:text-muted-200 block text-sm font-medium" }, toDisplayString(props.title), 1),
                  createVNode("span", { class: "font-heading text-muted-400 block text-xs font-medium" }, toDisplayString(props.subtitle), 1)
                ]),
                createVNode(_component_Icon, {
                  name: "lucide:chevron-down",
                  class: ["text-muted-400 ms-auto size-5 transition-transform duration-300", unref(open) ? "rotate-180" : ""]
                }, null, 8, ["class"])
              ], 8, ["onClick"]),
              createVNode(_sfc_main$2, null, {
                default: withCtx(() => [
                  unref(open) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "group flex items-center justify-between pt-4"
                  }, [
                    createVNode(_component_DemoLinkArrow, {
                      to: "#",
                      label: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u06CC\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F"
                    }),
                    createVNode("span", { class: "font-heading text-muted-400 text-xs" }, toDisplayString(props.remaining) + " \u0645\u0627\u0646\u062F\u0647", 1)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoOfferCollapse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "offers",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(100);
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/offers", {
      query
    }, "$jvG4u6HJBD")), __temp = await __temp, __restore(), __temp);
    const popular = computed(() => {
      return data?.value?.data.filter(
        (item) => item.categories.includes("popular")
      );
    });
    const recent = computed(() => {
      return data?.value?.data.filter(
        (item) => item.categories.includes("recent")
      );
    });
    const communication = computed(() => {
      return data?.value?.data.filter(
        (item) => item.categories.includes("communication")
      );
    });
    const design = computed(() => {
      return data?.value?.data.filter(
        (item) => item.categories.includes("design")
      );
    });
    const development = computed(() => {
      return data?.value?.data.filter(
        (item) => item.categories.includes("development")
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_DemoOfferCollapse = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pb-24" }, _attrs))}><div class="border-muted-200 dark:border-muted-800 border-b py-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0648\u06CC\u0698\u0647 \u0631\u0627 \u0627\u0632 \u0634\u0631\u06A9\u0627\u06CC \u0645\u0627 \u06A9\u0634\u0641 \u06A9\u0646\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0648\u06CC\u0698\u0647 \u0631\u0627 \u0627\u0632 \u0634\u0631\u06A9\u0627\u06CC \u0645\u0627 \u06A9\u0634\u0641 \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-10 py-6"><div class="py-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u062D\u0628\u0648\u0628 `);
          } else {
            return [
              createTextVNode(" \u0645\u062D\u0628\u0648\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u062D\u0628\u0648\u0628\u200C\u062A\u0631\u06CC\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u062F\u0631 \u0645\u06CC\u0627\u0646 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u0645\u0627 `);
          } else {
            return [
              createTextVNode(" \u0645\u062D\u0628\u0648\u0628\u200C\u062A\u0631\u06CC\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u062F\u0631 \u0645\u06CC\u0627\u0646 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u0645\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(popular), (item) => {
        _push(ssrRenderComponent(_component_DemoOfferCollapse, {
          key: item.id,
          slug: item.slug,
          title: item.title,
          subtitle: item.subtitle,
          icon: item.icon,
          remaining: item.remaining
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="py-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u062E\u06CC\u0631 `);
          } else {
            return [
              createTextVNode(" \u0627\u062E\u06CC\u0631 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0627\u062E\u06CC\u0631 \u06A9\u0647 \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u0645 `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0627\u062E\u06CC\u0631 \u06A9\u0647 \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(recent), (item) => {
        _push(ssrRenderComponent(_component_DemoOfferCollapse, {
          key: item.id,
          slug: item.slug,
          title: item.title,
          subtitle: item.subtitle,
          icon: item.icon,
          remaining: item.remaining
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="py-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0631\u062A\u0628\u0637 \u0628\u0627 \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0631\u062A\u0628\u0637 \u0628\u0627 \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(communication), (item) => {
        _push(ssrRenderComponent(_component_DemoOfferCollapse, {
          key: item.id,
          slug: item.slug,
          title: item.title,
          subtitle: item.subtitle,
          icon: item.icon,
          remaining: item.remaining
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="py-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC `);
          } else {
            return [
              createTextVNode(" \u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0631\u062A\u0628\u0637 \u0628\u0627 \u0637\u0631\u0627\u062D\u06CC UX `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0631\u062A\u0628\u0637 \u0628\u0627 \u0637\u0631\u0627\u062D\u06CC UX ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(design), (item) => {
        _push(ssrRenderComponent(_component_DemoOfferCollapse, {
          key: item.id,
          slug: item.slug,
          title: item.title,
          subtitle: item.subtitle,
          icon: item.icon,
          remaining: item.remaining
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="py-6"><div class="mb-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "xl",
        weight: "medium",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0648\u0633\u0639\u0647 `);
          } else {
            return [
              createTextVNode(" \u062A\u0648\u0633\u0639\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-500 dark:text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0631\u062A\u0628\u0637 \u0628\u0627 \u062A\u0648\u0633\u0639\u0647 `);
          } else {
            return [
              createTextVNode(" \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0631\u062A\u0628\u0637 \u0628\u0627 \u062A\u0648\u0633\u0639\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 bg-muted-200 dark:bg-muted-700 grid gap-3 rounded-xl p-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(development), (item) => {
        _push(ssrRenderComponent(_component_DemoOfferCollapse, {
          key: item.id,
          slug: item.slug,
          title: item.title,
          subtitle: item.subtitle,
          icon: item.icon,
          remaining: item.remaining
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/offers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
