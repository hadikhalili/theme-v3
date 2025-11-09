import { _ as __nuxt_component_0$3, h as _sfc_main$u, a as __nuxt_component_2, b as _sfc_main$w, i as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
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
  __name: "AddonCarouselIcons",
  __ssrInlineRender: true,
  props: {
    slides: { default: () => [] },
    carousel: { default: () => ({
      itemsToShow: 7,
      snapAlign: "start",
      breakpoints: {
        300: {
          itemsToShow: 2.5,
          snapAlign: "start"
        },
        768: {
          itemsToShow: 6,
          snapAlign: "start"
        },
        900: {
          itemsToShow: 8,
          snapAlign: "start"
        },
        1024: {
          itemsToShow: 7,
          snapAlign: "start"
        }
      }
    }) }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-32d46c3a>`);
      _push(ssrRenderComponent(unref(Carousel), props.carousel, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Navigation))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.slides, (slide, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: slide.to,
                      class: "cursor-pointer"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BaseCard, {
                            rounded: "lg",
                            class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-center" data-v-32d46c3a${_scopeId4}>`);
                                if (slide.icon) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: slide.icon,
                                    class: "mx-auto mb-2 !block size-7"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(_component_BaseHeading, {
                                  size: "sm",
                                  weight: "medium",
                                  lead: "tight",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-center" }, [
                                    slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                      key: 0,
                                      name: slide.icon,
                                      class: "mx-auto mb-2 !block size-7"
                                    }, null, 8, ["name"])) : createCommentVNode("", true),
                                    createVNode(_component_BaseHeading, {
                                      size: "sm",
                                      weight: "medium",
                                      lead: "tight",
                                      class: "text-muted-800 dark:text-white"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(slide.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_BaseCard, {
                              rounded: "lg",
                              class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-center" }, [
                                  slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: slide.icon,
                                    class: "mx-auto mb-2 !block size-7"
                                  }, null, 8, ["name"])) : createCommentVNode("", true),
                                  createVNode(_component_BaseHeading, {
                                    size: "sm",
                                    weight: "medium",
                                    lead: "tight",
                                    class: "text-muted-800 dark:text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtLink, {
                        to: slide.to,
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseCard, {
                            rounded: "lg",
                            class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-center" }, [
                                slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                  key: 0,
                                  name: slide.icon,
                                  class: "mx-auto mb-2 !block size-7"
                                }, null, 8, ["name"])) : createCommentVNode("", true),
                                createVNode(_component_BaseHeading, {
                                  size: "sm",
                                  weight: "medium",
                                  lead: "tight",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.slides, (slide, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: slide.to,
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "lg",
                          class: "text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-center" }, [
                              slide.icon ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: slide.icon,
                                class: "mx-auto mb-2 !block size-7"
                              }, null, 8, ["name"])) : createCommentVNode("", true),
                              createVNode(_component_BaseHeading, {
                                size: "sm",
                                weight: "medium",
                                lead: "tight",
                                class: "text-muted-800 dark:text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonCarouselIcons.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-32d46c3a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  setup(__props) {
    const topics = [
      {
        icon: "ph:megaphone-simple-duotone",
        title: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
        link: "/"
      },
      {
        icon: "ph:chart-bar-duotone",
        title: "\u062A\u062D\u0644\u06CC\u0644\u200C\u0647\u0627",
        link: "/"
      },
      {
        icon: "ph:storefront-duotone",
        title: "\u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9",
        link: "/"
      },
      {
        icon: "ph:rocket-duotone",
        title: "\u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E\u200C\u0647\u0627",
        link: "/"
      },
      {
        icon: "ph:bank-duotone",
        title: "\u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC",
        link: "/"
      },
      {
        icon: "ph:app-window-duotone",
        title: "SEO",
        link: "/"
      },
      {
        icon: "ph:sketch-logo-duotone",
        title: "\u0645\u062D\u0635\u0648\u0644",
        link: "/"
      },
      {
        icon: "ph:heartbeat-duotone",
        title: "\u0633\u0644\u0627\u0645\u062A",
        link: "/"
      },
      {
        icon: "ph:pen-nib-duotone",
        title: "\u0645\u062D\u062A\u0648\u0627",
        link: "/"
      },
      {
        icon: "ph:briefcase-duotone",
        title: "\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631",
        link: "/"
      },
      {
        icon: "ph:leaf-duotone",
        title: "\u0627\u06A9\u0648\u0644\u0648\u0698\u06CC",
        link: "/"
      },
      {
        icon: "ph:flask-duotone",
        title: "\u0622\u0632\u0645\u0627\u06CC\u0634\u200C\u0647\u0627",
        link: "/"
      },
      {
        icon: "ph:users-three-duotone",
        title: "\u0634\u063A\u0644\u200C\u0647\u0627",
        link: "/"
      },
      {
        icon: "ph:buildings-duotone",
        title: "\u0634\u0631\u06A9\u062A",
        link: "/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonCarouselIcons = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AddonCarouselIcons, mergeProps({ slides: topics }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/carousel/icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
