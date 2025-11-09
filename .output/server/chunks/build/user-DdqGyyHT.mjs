import { _ as __nuxt_component_0$3, h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C, c as _sfc_main$v, i as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
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
  __name: "AddonCarouselTeam",
  __ssrInlineRender: true,
  props: {
    slides: { default: () => [] },
    carousel: { default: () => ({
      slidesToShow: 3,
      snapAlign: "start",
      breakpoints: {
        300: {
          itemsToShow: 1,
          snapAlign: "start"
        },
        768: {
          itemsToShow: 2,
          snapAlign: "start"
        },
        1024: {
          itemsToShow: 3,
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
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-5c795f16>`);
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
                      to: slide.to
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_BaseCard, {
                            rounded: "lg",
                            class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_BaseAvatar, {
                                  src: slide.avatar,
                                  badge: slide.badge,
                                  size: "xl",
                                  class: "mx-auto"
                                }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BaseHeading, {
                                  size: "md",
                                  weight: "semibold",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400 mb-2"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.role)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.role), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_BaseParagraph, {
                                  size: "sm",
                                  class: "text-muted-500"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(slide.text)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(slide.text), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex justify-center gap-4 pt-4" data-v-5c795f16${_scopeId4}><!--[-->`);
                                ssrRenderList(slide.skills, (skill, s) => {
                                  _push5(ssrRenderComponent(_component_BaseAvatar, {
                                    key: s,
                                    src: skill.logo,
                                    size: "xs",
                                    "data-nui-tooltip": skill.name,
                                    class: "bg-muted-200 dark:bg-muted-700"
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode(_component_BaseAvatar, {
                                    src: slide.avatar,
                                    badge: slide.badge,
                                    size: "xl",
                                    class: "mx-auto"
                                  }, null, 8, ["src", "badge"]),
                                  createVNode(_component_BaseHeading, {
                                    size: "md",
                                    weight: "semibold",
                                    class: "text-muted-800 dark:text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400 mb-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.role), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_BaseParagraph, {
                                    size: "sm",
                                    class: "text-muted-500"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(slide.text), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                      return openBlock(), createBlock(_component_BaseAvatar, {
                                        key: s,
                                        src: skill.logo,
                                        size: "xs",
                                        "data-nui-tooltip": skill.name,
                                        class: "bg-muted-200 dark:bg-muted-700"
                                      }, null, 8, ["src", "data-nui-tooltip"]);
                                    }), 128))
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
                              class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_BaseAvatar, {
                                  src: slide.avatar,
                                  badge: slide.badge,
                                  size: "xl",
                                  class: "mx-auto"
                                }, null, 8, ["src", "badge"]),
                                createVNode(_component_BaseHeading, {
                                  size: "md",
                                  weight: "semibold",
                                  class: "text-muted-800 dark:text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400 mb-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.role), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "sm",
                                  class: "text-muted-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(slide.text), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                    return openBlock(), createBlock(_component_BaseAvatar, {
                                      key: s,
                                      src: skill.logo,
                                      size: "xs",
                                      "data-nui-tooltip": skill.name,
                                      class: "bg-muted-200 dark:bg-muted-700"
                                    }, null, 8, ["src", "data-nui-tooltip"]);
                                  }), 128))
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
                        to: slide.to
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseCard, {
                            rounded: "lg",
                            class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseAvatar, {
                                src: slide.avatar,
                                badge: slide.badge,
                                size: "xl",
                                class: "mx-auto"
                              }, null, 8, ["src", "badge"]),
                              createVNode(_component_BaseHeading, {
                                size: "md",
                                weight: "semibold",
                                class: "text-muted-800 dark:text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400 mb-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.role), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "sm",
                                class: "text-muted-500"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(slide.text), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                  return openBlock(), createBlock(_component_BaseAvatar, {
                                    key: s,
                                    src: skill.logo,
                                    size: "xs",
                                    "data-nui-tooltip": skill.name,
                                    class: "bg-muted-200 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]);
                                }), 128))
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
                      to: slide.to
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "lg",
                          class: "hover:border-primary-500 dark:hover:border-primary-500 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_BaseAvatar, {
                              src: slide.avatar,
                              badge: slide.badge,
                              size: "xl",
                              class: "mx-auto"
                            }, null, 8, ["src", "badge"]),
                            createVNode(_component_BaseHeading, {
                              size: "md",
                              weight: "semibold",
                              class: "text-muted-800 dark:text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-400 mb-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.role), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-500"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(slide.text), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "flex justify-center gap-4 pt-4" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(slide.skills, (skill, s) => {
                                return openBlock(), createBlock(_component_BaseAvatar, {
                                  key: s,
                                  src: skill.logo,
                                  size: "xs",
                                  "data-nui-tooltip": skill.name,
                                  class: "bg-muted-200 dark:bg-muted-700"
                                }, null, 8, ["src", "data-nui-tooltip"]);
                              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonCarouselTeam.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5c795f16"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    const team = [
      {
        id: 0,
        avatar: "/img/avatars/3.svg",
        badge: "/img/icons/flags/united-states-of-america.svg",
        name: "\u062F\u0646\u06CC\u0644 \u06A9\u0644\u0627\u0631\u06A9",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.",
        skills: [
          {
            name: "Vue.js",
            logo: "/img/logos/stacks/vue.svg"
          },
          {
            name: "React.js",
            logo: "/img/logos/stacks/react.svg"
          },
          {
            name: "Sass",
            logo: "/img/logos/stacks/sass.svg"
          }
        ],
        to: "#"
      },
      {
        id: 1,
        avatar: "/img/avatars/2.svg",
        badge: "/img/icons/flags/italy.svg",
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        role: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.",
        skills: [
          {
            name: "\u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631",
            logo: "/img/logos/stacks/illustrator.svg"
          },
          {
            name: "\u0627\u0633\u06A9\u0686",
            logo: "/img/logos/stacks/sketch.svg"
          },
          {
            name: "\u0641\u062A\u0648\u0634\u0627\u067E",
            logo: "/img/logos/stacks/photoshop.svg"
          }
        ],
        to: "#"
      },
      {
        id: 2,
        avatar: "/img/avatars/4.svg",
        badge: "/img/icons/flags/finland.svg",
        name: "\u0644\u0627\u0646\u0627 \u0647\u0646\u0631\u06CC\u06A9\u0633",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.",
        skills: [
          {
            name: "HTML5",
            logo: "/img/logos/stacks/html5.svg"
          },
          {
            name: "CSS3",
            logo: "/img/logos/stacks/css3.svg"
          },
          {
            name: "Javascript",
            logo: "/img/logos/stacks/javascript.svg"
          }
        ],
        to: "#"
      },
      {
        id: 3,
        avatar: "/img/avatars/9.svg",
        badge: "/img/icons/flags/canada.svg",
        name: "\u0622\u0644\u06CC\u0646\u0627 \u06AF\u0644\u0631",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.",
        skills: [
          {
            name: "\u0627\u0646\u062F\u0631\u0648\u06CC\u062F",
            logo: "/img/logos/stacks/android.svg"
          },
          {
            name: "\u0633\u0648\u0626\u06CC\u0641\u062A",
            logo: "/img/logos/stacks/swift.svg"
          },
          {
            name: "\u0641\u0644\u0627\u062A\u0631",
            logo: "/img/logos/stacks/flutter.svg"
          }
        ],
        to: "#"
      },
      {
        id: 4,
        avatar: "/img/avatars/12.svg",
        badge: "/img/icons/flags/france.svg",
        name: "\u06A9\u0627\u0631\u06CC\u0646 \u0645\u0627\u0631\u0686\u0646\u062F",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.",
        skills: [
          {
            name: "Bulma",
            logo: "/img/logos/stacks/bulma.svg"
          },
          {
            name: "Tailwind CSS",
            logo: "/img/logos/stacks/tailwind.svg"
          },
          {
            name: "React.js",
            logo: "/img/logos/stacks/react.svg"
          }
        ],
        to: "#"
      },
      {
        id: 5,
        avatar: "/img/avatars/14.svg",
        badge: "/img/icons/flags/spain.svg",
        name: "\u0631\u0627\u06CC\u0645\u0648\u0646\u062F\u0648 \u067E\u0631\u0632",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        text: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0627\u0633\u062A.",
        skills: [
          {
            name: "Vue.js",
            logo: "/img/logos/stacks/vue.svg"
          },
          {
            name: "React.js",
            logo: "/img/logos/stacks/react.svg"
          },
          {
            name: "\u062A\u0627\u06CC\u067E\u200C\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A",
            logo: "/img/logos/stacks/typescript.svg"
          }
        ],
        to: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonCarouselTeam = __nuxt_component_0;
      _push(ssrRenderComponent(_component_AddonCarouselTeam, mergeProps({ slides: team }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/carousel/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
