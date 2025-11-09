import { _ as _sfc_main$1 } from './BaseButtonIcon-B-NRPykg.mjs';
import { j as useRoute, u as useRouter, a as __nuxt_component_2, d as _sfc_main$D, c as _sfc_main$v, _ as __nuxt_component_0$3, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$2 } from './DemoPlaceholderMinimal-0TDRe2Dy.mjs';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "recipients",
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/payments/recipients",
      {
        query
      },
      "$PrAABv6v6K"
    )), __temp = await __temp, __restore(), __temp);
    const people = computed(() => {
      return data?.value?.data.filter((item) => item.type === "person");
    });
    const companies = computed(() => {
      return data?.value?.data.filter((item) => item.type === "company");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_DemoPlaceholderMinimal = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="space-y-10"><div class="w-full"><div class="mb-5 flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, {
        to: "/layouts/contacts/create",
        rounded: "full",
        size: "sm",
        "data-nui-tooltip": "Add recipient"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
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
      }, _parent));
      _push(`<h3 class="font-heading text-muted-800 dark:text-muted-200 text-xl"> \u0645\u062E\u0627\u0637\u0628\u06CC\u0646 </h3><div class="ms-auto">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(filter),
        "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : null,
        icon: "lucide:search",
        rounded: "lg",
        placeholder: "\u062C\u0633\u062A\u062C\u0648\u06CC \u0645\u062E\u0627\u0637\u0628\u0627\u0646..."
      }, null, _parent));
      _push(`</div></div><div class="py-6">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        weight: "medium",
        class: "text-muted-400 mb-4 uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0641\u0631\u0627\u062F `);
          } else {
            return [
              createTextVNode(" \u0627\u0641\u0631\u0627\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(people)?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u062A\u0645\u0627\u0633\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
          description: "\u0646\u062A\u06CC\u062C\u0647\u200C\u0627\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
          transparent: ""
        }, null, _parent));
      } else {
        _push(`<div class="grid gap-5 md:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(people), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.id,
            to: `/layouts/recipient/${item.slug}`,
            class: "group/contact"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  rounded: "md",
                  shadow: "hover",
                  class: "group-hover/contact:border-primary-500 p-4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        rounded: "full",
                        size: "sm",
                        src: item.picture,
                        class: "bg-muted-100 dark:bg-muted-700/60"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}><h5 class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none"${_scopeId2}>${ssrInterpolate(item.name)}</h5><p class="text-muted-400 font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.category)}</p></div><div class="ms-auto"${_scopeId2}><div class="bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-200 group-hover/contact:opacity-100"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:more-horizontal",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            rounded: "full",
                            size: "sm",
                            src: item.picture,
                            class: "bg-muted-100 dark:bg-muted-700/60"
                          }, null, 8, ["src"]),
                          createVNode("div", null, [
                            createVNode("h5", { class: "text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none" }, toDisplayString(item.name), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.category), 1)
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode("div", { class: "bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-200 group-hover/contact:opacity-100" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:more-horizontal",
                                class: "size-5"
                              })
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BaseCard, {
                    rounded: "md",
                    shadow: "hover",
                    class: "group-hover/contact:border-primary-500 p-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_BaseAvatar, {
                          rounded: "full",
                          size: "sm",
                          src: item.picture,
                          class: "bg-muted-100 dark:bg-muted-700/60"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("h5", { class: "text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none" }, toDisplayString(item.name), 1),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.category), 1)
                        ]),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode("div", { class: "bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-200 group-hover/contact:opacity-100" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:more-horizontal",
                              class: "size-5"
                            })
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><div class="py-6">`);
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        weight: "medium",
        class: "text-muted-400 mb-4 uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(companies)?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u0647\u06CC\u0686 \u0645\u062E\u0627\u0637\u0628\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
          description: "\u0646\u062A\u06CC\u062C\u0647\u200C\u0627\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.",
          transparent: ""
        }, null, _parent));
      } else {
        _push(`<div class="grid gap-5 md:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(companies), (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.id,
            to: `/layouts/recipient/${item.slug}`,
            class: "group/contact"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  rounded: "md",
                  shadow: "hover",
                  class: "group-hover/contact:border-primary-500 p-4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        rounded: "full",
                        size: "sm",
                        src: item.picture,
                        class: "bg-muted-100 dark:bg-muted-700/60"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}><h5 class="text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none"${_scopeId2}>${ssrInterpolate(item.name)}</h5><p class="text-muted-400 font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.category)}</p></div><div class="ms-auto"${_scopeId2}><div class="bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-200 group-hover/contact:opacity-100"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:more-horizontal",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            rounded: "full",
                            size: "sm",
                            src: item.picture,
                            class: "bg-muted-100 dark:bg-muted-700/60"
                          }, null, 8, ["src"]),
                          createVNode("div", null, [
                            createVNode("h5", { class: "text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none" }, toDisplayString(item.name), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.category), 1)
                          ]),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode("div", { class: "bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-200 group-hover/contact:opacity-100" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:more-horizontal",
                                class: "size-5"
                              })
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_BaseCard, {
                    rounded: "md",
                    shadow: "hover",
                    class: "group-hover/contact:border-primary-500 p-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_BaseAvatar, {
                          rounded: "full",
                          size: "sm",
                          src: item.picture,
                          class: "bg-muted-100 dark:bg-muted-700/60"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("h5", { class: "text-muted-500 dark:text-muted-300 font-sans text-sm font-medium leading-none" }, toDisplayString(item.name), 1),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(item.category), 1)
                        ]),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode("div", { class: "bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-200 group-hover/contact:opacity-100" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:more-horizontal",
                              class: "size-5"
                            })
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/payments/recipients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
