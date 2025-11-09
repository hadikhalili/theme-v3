import { j as useRoute, u as useRouter, Q as useHead, i as _export_sfc, f as _sfc_main$C, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, E as useNuxtApp, _ as __nuxt_component_0$3, v as __nuxt_component_0$1, h as _sfc_main$u, a as __nuxt_component_2, P as useRuntimeConfig } from './server.mjs';
import { _ as _sfc_main$4 } from './BaseSwitchThin-DO5QSQNt.mjs';
import { _ as _sfc_main$5 } from './BaseRadio-DxLVFvJR.mjs';
import { _ as _sfc_main$6 } from './BaseTag-CQSmGSbm.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, createTextVNode, unref, toDisplayString, isRef, ref, h, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { R as encodeParam, q as hasProtocol, C as withLeadingSlash, x as joinURL, t as parseURL, A as defu, S as encodePath } from '../runtime.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LandingDemoLink",
  __ssrInlineRender: true,
  props: {
    name: {},
    preview: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseTag = _sfc_main$6;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: { name: props.name, params: props.preview?.params },
        class: "group relative block"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><img class="${ssrRenderClass([props.preview?.srcDark ? "dark:hidden" : "", "border-muted-200 block w-full rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75"])}"${ssrRenderAttr("src", props.preview?.src)}${ssrRenderAttr("alt", `Tairo - ${props.preview?.title}`)} height="271" width="487" sizes="sm:100vw md:50vw lg:974px" format="webp" loading="lazy" decoding="async"${_scopeId}>`);
            if (props.preview?.srcDark) {
              _push2(`<img class="border-muted-800 hidden w-full rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block"${ssrRenderAttr("src", props.preview?.srcDark)}${ssrRenderAttr("alt", `Tairo - ${props.preview?.title}`)} height="271" width="487" sizes="sm:100vw md:50vw lg:974px" format="webp" loading="lazy" decoding="async"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, {
              rounded: "lg",
              class: "flex items-center p-4",
              elevated: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "text-muted-800 mx-auto dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.preview?.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.preview?.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.preview?.description)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.preview?.description), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="bg-primary-500/10 text-primary-500 me-2 ms-auto flex size-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "size-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0 ltr:motion-safe:-translate-x-2 rtl:rotate-180 rtl:motion-safe:translate-x-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "sm",
                        weight: "medium",
                        lead: "none",
                        class: "text-muted-800 mx-auto dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.preview?.title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.preview?.description), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "bg-primary-500/10 text-primary-500 me-2 ms-auto flex size-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100" }, [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "size-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0 ltr:motion-safe:-translate-x-2 rtl:rotate-180 rtl:motion-safe:translate-x-2"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (props.preview?.new) {
              _push2(ssrRenderComponent(_component_BaseTag, {
                color: "danger",
                rounded: "full",
                shadow: "flat",
                class: "absolute end-3 top-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062C\u062F\u06CC\u062F `);
                  } else {
                    return [
                      createTextVNode(" \u062C\u062F\u06CC\u062F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("img", {
                  class: ["border-muted-200 block w-full rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75", props.preview?.srcDark ? "dark:hidden" : ""],
                  src: props.preview?.src,
                  alt: `Tairo - ${props.preview?.title}`,
                  height: "271",
                  width: "487",
                  sizes: "sm:100vw md:50vw lg:974px",
                  format: "webp",
                  loading: "lazy",
                  decoding: "async"
                }, null, 10, ["src", "alt"]),
                props.preview?.srcDark ? (openBlock(), createBlock("img", {
                  key: 0,
                  class: "border-muted-800 hidden w-full rounded-lg border motion-safe:transition-opacity motion-safe:duration-200 motion-safe:group-hover:opacity-75 dark:block",
                  src: props.preview?.srcDark,
                  alt: `Tairo - ${props.preview?.title}`,
                  height: "271",
                  width: "487",
                  sizes: "sm:100vw md:50vw lg:974px",
                  format: "webp",
                  loading: "lazy",
                  decoding: "async"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                createVNode("div", { class: "absolute inset-x-0 -bottom-2 mx-auto max-w-[85%]" }, [
                  createVNode(_component_BaseCard, {
                    rounded: "lg",
                    class: "flex items-center p-4",
                    elevated: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          size: "sm",
                          weight: "medium",
                          lead: "none",
                          class: "text-muted-800 mx-auto dark:text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.preview?.title), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-500 dark:text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.preview?.description), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "bg-primary-500/10 text-primary-500 me-2 ms-auto flex size-8 items-center justify-center rounded-full motion-safe:opacity-0 motion-safe:transition-opacity motion-safe:duration-300 motion-safe:group-hover:opacity-100" }, [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "size-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-0 motion-reduce:translate-x-0 ltr:motion-safe:-translate-x-2 rtl:rotate-180 rtl:motion-safe:translate-x-2"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                props.preview?.new ? (openBlock(), createBlock(_component_BaseTag, {
                  key: 1,
                  color: "danger",
                  rounded: "full",
                  shadow: "flat",
                  class: "absolute end-3 top-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062C\u062F\u06CC\u062F ")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingDemoLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LandingDemos",
  __ssrInlineRender: true,
  props: {
    limit: { default: void 0 },
    cta: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const onlyNew = computed({
      get() {
        return Boolean(route.query.new);
      },
      set(value) {
        router.push({
          query: {
            ...route.query,
            new: value ? "1" : void 0
          }
        });
      }
    });
    const selectedCategory = computed({
      get() {
        return route.query.category || "";
      },
      set(value) {
        router.push({
          query: {
            ...route.query,
            category: value ? value : void 0
          }
        });
      }
    });
    const demoPages = computed(() => {
      const match = [];
      function traverseRoutes(routes) {
        for (const route2 of routes) {
          if (route2.children) {
            traverseRoutes(route2.children);
          } else if (route2.path.includes(":") && Array.isArray(route2.meta?.preview)) {
            match.push(route2);
          } else if (!route2.path.includes(":") && route2.meta?.preview) {
            match.push(route2);
          }
        }
      }
      traverseRoutes(router.options.routes);
      return match.sort((a, b) => {
        if (a.meta?.preview?.order === void 0)
          return 0;
        if (b.meta?.preview?.order === void 0)
          return 0;
        if (a.meta.preview?.order < b.meta.preview?.order)
          return -1;
        if (a.meta.preview?.order > b.meta.preview?.order)
          return 1;
        return 0;
      });
    });
    const categories = computed(() => {
      const categories2 = /* @__PURE__ */ new Set();
      let _demos = demoPages.value;
      if (onlyNew.value) {
        _demos = _demos.filter((page) => page.meta?.preview?.new);
      }
      function extractPreview(preview) {
        if (!preview) {
          return;
        }
        if (Array.isArray(preview)) {
          for (const item of preview) {
            extractPreview(item);
          }
          return;
        }
        if (!preview.categories) {
          return;
        }
        if (!Array.isArray(preview.categories)) {
          return;
        }
        for (const category of preview.categories) {
          categories2.add(category);
        }
      }
      for (const route2 of _demos) {
        extractPreview(route2.meta?.preview);
      }
      return Array.from(categories2).sort((a, b) => {
        return a.localeCompare(b);
      });
    });
    const filteredDemos = computed(() => {
      let _demos = demoPages.value;
      if (onlyNew.value) {
        _demos = _demos.filter((page) => page.meta?.preview?.new);
      }
      if (selectedCategory.value.length === 0) {
        return _demos;
      }
      function filterPreview(preview) {
        if (!preview) {
          return false;
        }
        if (Array.isArray(preview)) {
          for (const item of preview) {
            if (filterPreview(item)) {
              return true;
            }
          }
          return false;
        }
        if (!preview.categories) {
          return false;
        }
        if (!Array.isArray(preview.categories)) {
          return false;
        }
        return preview.categories.some(
          (category) => selectedCategory.value.includes(category)
        );
      }
      return _demos.filter((page) => {
        return filterPreview(page.meta?.preview);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseText = _sfc_main$C;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseSwitchThin = _sfc_main$4;
      const _component_BaseRadio = _sfc_main$5;
      const _component_LandingDemoLink = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))}><div class="mx-auto w-full max-w-7xl px-4"><div class="mb-16 max-w-2xl">`);
      _push(ssrRenderComponent(_component_BaseText, { class: "text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0635\u0641\u062D\u0627\u062A \u0627\u0632 \u067E\u06CC\u0634 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 `);
          } else {
            return [
              createTextVNode(" \u0635\u0641\u062D\u0627\u062A \u0627\u0632 \u067E\u06CC\u0634 \u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "4xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 mx-auto mb-4 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(demoPages).length)}+ \u062F\u0645\u0648\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 `);
          } else {
            return [
              createTextVNode(toDisplayString(unref(demoPages).length) + "+ \u062F\u0645\u0648\u06CC \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "lg",
        class: "text-muted-500 dark:text-muted-100 mx-auto mb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0627\u06CC\u0631\u0648 \u0628\u0627 ${ssrInterpolate(unref(demoPages).length)}+ \u0635\u0641\u062D\u0627\u062A \u0627\u0632 \u067E\u06CC\u0634\u200C\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647\u060C \u0627\u0632 \u062C\u0645\u0644\u0647 \u0646\u0645\u0648\u0646\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0647\u0627\u06CC\u06CC \u0645\u0627\u0646\u0646\u062F \u0644\u06CC\u0633\u062A\u200C\u0647\u0627\u060C \u062C\u062F\u0627\u0648\u0644\u060C \u067E\u0631\u0648\u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0648 \u0635\u0641\u062D\u0627\u062A \u0634\u062E\u0635\u06CC \u0648 \u0628\u0633\u06CC\u0627\u0631\u06CC \u0635\u0641\u062D\u0627\u062A \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. `);
          } else {
            return [
              createTextVNode(" \u062A\u0627\u06CC\u0631\u0648 \u0628\u0627 " + toDisplayString(unref(demoPages).length) + "+ \u0635\u0641\u062D\u0627\u062A \u0627\u0632 \u067E\u06CC\u0634\u200C\u0633\u0627\u062E\u062A\u0647 \u0634\u062F\u0647\u060C \u0627\u0632 \u062C\u0645\u0644\u0647 \u0646\u0645\u0648\u0646\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0647\u0627\u06CC\u06CC \u0645\u0627\u0646\u0646\u062F \u0644\u06CC\u0633\u062A\u200C\u0647\u0627\u060C \u062C\u062F\u0627\u0648\u0644\u060C \u067E\u0631\u0648\u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0648 \u0635\u0641\u062D\u0627\u062A \u0634\u062E\u0635\u06CC \u0648 \u0628\u0633\u06CC\u0627\u0631\u06CC \u0635\u0641\u062D\u0627\u062A \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-2 ltablet:block relative col-span-12 hidden lg:col-span-2 lg:block"><ul class="space-y-3 lg:sticky lg:top-28"><li class="pb-4">`);
      _push(ssrRenderComponent(_component_BaseSwitchThin, {
        modelValue: unref(onlyNew),
        "onUpdate:modelValue": ($event) => isRef(onlyNew) ? onlyNew.value = $event : null,
        color: "primary",
        label: "\u062A\u0646\u0647\u0627 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646\u200C\u0647\u0627"
      }, null, _parent));
      _push(`</li><li class="capitalize">`);
      _push(ssrRenderComponent(_component_BaseRadio, {
        modelValue: unref(selectedCategory),
        "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
        value: "",
        color: "primary",
        label: "\u0647\u0645\u0647"
      }, null, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<li class="capitalize">`);
        _push(ssrRenderComponent(_component_BaseRadio, {
          modelValue: unref(selectedCategory),
          "onUpdate:modelValue": ($event) => isRef(selectedCategory) ? selectedCategory.value = $event : null,
          value: category,
          color: "primary",
          label: category
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="ltablet:col-span-10 col-span-12 lg:col-span-10"><div class="grid gap-8 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(filteredDemos).slice(0, props.limit), (page) => {
        _push(`<!--[-->`);
        if (!Array.isArray(page.meta?.preview)) {
          _push(ssrRenderComponent(_component_LandingDemoLink, {
            name: page.name,
            preview: page.meta?.preview
          }, null, _parent));
        } else {
          _push(`<!--[-->`);
          ssrRenderList(page.meta?.preview, (preview) => {
            _push(ssrRenderComponent(_component_LandingDemoLink, {
              key: preview.title,
              name: page.name,
              preview
            }, null, _parent));
          });
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      if (props.cta) {
        _push(`<div class="mt-24 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          rounded: "lg",
          color: "primary",
          variant: "outline",
          to: "/demos"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0645\u0634\u0627\u0647\u062F\u0647 \u062A\u0645\u0627\u0645\u06CC ${ssrInterpolate(unref(demoPages).length)} \u062F\u0645\u0648\u0647\u0627 `);
            } else {
              return [
                createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u062A\u0645\u0627\u0645\u06CC " + toDisplayString(unref(demoPages).length) + " \u062F\u0645\u0648\u0647\u0627 ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingDemos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if (_options.modifiers?.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if (_options.modifiers?.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const width = parseSize(opts.modifiers?.width);
  const height = parseSize(opts.modifiers?.height);
  const sizes = parseSizes(opts.sizes);
  const densities = opts.densities?.trim() ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$LzY8kDvyEu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$LzY8kDvyEu, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  densities: { type: String, default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: {
    type: String,
    default: void 0,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], default: void 0 }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseButton = _sfc_main$e;
  const _component_NuxtImg = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-white py-24" }, _attrs))}><div class="mx-auto w-full max-w-7xl px-4"><div class="mx-auto w-full max-w-6xl"><div class="bg-primary-900 dark:bg-primary-900/40 ltablet:grid ltablet:grid-cols-2 ltablet:gap-4 overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2 lg:gap-4"><div class="ltablet:py-28 ltablet:pe-0 flex items-center px-6 pb-12 pt-10 sm:px-16 sm:pt-16 lg:py-28 lg:pe-0 xl:px-20"><div class="ltablet:self-center font-sans lg:self-center"><h2 class="text-3xl font-medium text-white sm:text-4xl"><span class="block">\u0622\u0645\u0627\u062F\u0647 \u0634\u0631\u0648\u0639 \u0647\u0633\u062A\u06CC\u062F\u061F</span><span class="block">\u062A\u0645\u0627\u0645 \u0627\u062C\u0632\u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u0631\u0627 \u06A9\u0627\u0648\u0634 \u06A9\u0646\u06CC\u062F.</span></h2><p class="mt-4 text-lg leading-6 text-white"> \u0645\u0627 \u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0628\u0633\u06CC\u0627\u0631 \u062E\u0648\u0628\u06CC \u0633\u0627\u062E\u062A\u0647\u200C\u0627\u06CC\u0645 \u062A\u0627 \u0628\u0647 \u0634\u0645\u0627 \u062F\u0631 \u0634\u0631\u0648\u0639 \u06A9\u0627\u0631 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u0645. \u0647\u0631 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u062F\u0627\u0631\u0627\u06CC \u06CC\u06A9 \u0635\u0641\u062D\u0647 \u062F\u0645\u0648 \u0648 \u0642\u0637\u0639\u0647 \u06A9\u062F\u0647\u0627\u06CC\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u0686\u06AF\u0648\u0646\u0647 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0622\u0646 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. </p><div class="mt-8 flex items-center gap-2">`);
  _push(ssrRenderComponent(_component_BaseButton, {
    to: "https://tairo.cssninja.io/documentation",
    rounded: "lg",
    class: "!h-11"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0633\u062A\u0646\u062F\u0627\u062A `);
      } else {
        return [
          createTextVNode(" \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u0645\u0633\u062A\u0646\u062F\u0627\u062A ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "ltablet:translate-y-20 block translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 dark:hidden",
    src: "/img/apps/tairo-screen-full-fa.png",
    alt: "Tairo demo screenshot lightmode",
    format: "webp",
    width: "568",
    height: "532",
    loading: "lazy",
    decoding: "async"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "ltablet:translate-y-20 hidden translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 dark:block",
    src: "/img/apps/tairo-screen-full-dark-fa.png",
    alt: "Tairo demo screenshot darkmode",
    format: "webp",
    width: "568",
    height: "532",
    loading: "lazy",
    decoding: "async"
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/img/logos/eltheme-logo-icon.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const dtf = new Intl.DateTimeFormat("fa", {
      year: "numeric"
    });
    const parts = dtf.formatToParts(/* @__PURE__ */ new Date()).find((p) => p.type === "year");
    const year = parts.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogoText = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://eltheme.ir",
        class: "dark:bg-muted-900 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center bg-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="size-7"${ssrRenderAttr("src", _imports_0)} alt="eltheme logo" height="28" width="28" loading="lazy" decoding="async"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "size-7",
                src: _imports_0,
                alt: "eltheme logo",
                height: "28",
                width: "28",
                loading: "lazy",
                decoding: "async"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ltablet:flex-row mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "aria-label": "Go to Tairo homepage",
        class: "ltablet:w-1/5 block w-full lg:w-1/5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-muted-300 ltablet:mx-0 mx-auto h-6 transition-all duration-200 lg:mx-0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogoText, { class: "text-muted-300 ltablet:mx-0 mx-auto h-6 transition-all duration-200 lg:mx-0" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/demos",
        class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0635\u0641\u062D\u0627\u062A \u062F\u0645\u0648 `);
          } else {
            return [
              createTextVNode(" \u0635\u0641\u062D\u0627\u062A \u062F\u0645\u0648 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://tairo.cssninja.io/documentation",
        class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0633\u062A\u0646\u062F\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u0645\u0633\u062A\u0646\u062F\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://github.com/shuriken-ui",
        target: "_blank",
        rel: "noopener",
        class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u0631\u06CC\u06A9\u0646 `);
          } else {
            return [
              createTextVNode(" \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0648\u0631\u06CC\u06A9\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://go.eltheme.ir/support",
        target: "_blank",
        rel: "noopener",
        class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC `);
          } else {
            return [
              createTextVNode(" \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"><span> \xA9 `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://eltheme.ir",
        target: "_blank",
        rel: "noopener",
        class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u0644 \u062A\u0645 `);
          } else {
            return [
              createTextVNode(" \u0627\u0644 \u062A\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \u06F1\u06F3\u06F9\u06F7-${ssrInterpolate(unref(year))}. </span></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/landing/components/LandingFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$2 as _, __nuxt_component_7 as a, _sfc_main as b, _imports_0 as c };
