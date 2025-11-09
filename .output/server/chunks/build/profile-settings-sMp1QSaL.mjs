import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { a as __nuxt_component_2, b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C, _ as __nuxt_component_0$3, h as _sfc_main$u } from './server.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import '@headlessui/vue';
import '@headlessui-float/vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile-settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$RPxpPd6TEy")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseText = _sfc_main$C;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseCard = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl" }, _attrs))}>`);
      if (!unref(data)) {
        _push(`<div></div>`);
      } else {
        _push(`<div class="relative w-full"><div class="absolute end-0 top-2 z-20">`);
        _push(ssrRenderComponent(_component_BaseDropdown, {
          variant: "context",
          label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
          placement: "bottom-end",
          size: "md",
          class: "z-20",
          rounded: "lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "/layouts/profile-edit",
                title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                text: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:pencil-duotone",
                      class: "me-2 block size-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:pencil-duotone",
                        class: "me-2 block size-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "#",
                title: "\u0627\u0645\u0646\u06CC\u062A",
                text: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:lock-duotone",
                      class: "me-2 block size-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:lock-duotone",
                        class: "me-2 block size-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "#",
                title: "\u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628",
                text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "me-2 block size-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:bank-duotone",
                        class: "me-2 block size-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseDropdownItem, {
                to: "#",
                title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
              }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:link-duotone",
                      class: "me-2 block size-5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "ph:link-duotone",
                        class: "me-2 block size-5"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseDropdownItem, {
                  to: "/layouts/profile-edit",
                  title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                  text: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:pencil-duotone",
                      class: "me-2 block size-5"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownDivider),
                createVNode(_component_BaseDropdownItem, {
                  to: "#",
                  title: "\u0627\u0645\u0646\u06CC\u062A",
                  text: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:lock-duotone",
                      class: "me-2 block size-5"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownDivider),
                createVNode(_component_BaseDropdownItem, {
                  to: "#",
                  title: "\u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628",
                  text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:bank-duotone",
                      class: "me-2 block size-5"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseDropdownDivider),
                createVNode(_component_BaseDropdownItem, {
                  to: "#",
                  title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                  text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
                }, {
                  start: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "ph:link-duotone",
                      class: "me-2 block size-5"
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex w-full flex-col">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: unref(data)?.personalInfo.picture,
          "badge-src": unref(data)?.personalInfo.badge,
          size: "2xl",
          class: "mx-auto"
        }, null, _parent));
        _push(`<div class="mx-auto w-full max-w-md text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h2",
          size: "xl",
          weight: "medium",
          class: "mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.firstName)} ${ssrInterpolate(unref(data)?.personalInfo.lastName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.firstName) + " " + toDisplayString(unref(data)?.personalInfo.lastName), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400 mb-3 mt-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.shortBio)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.shortBio), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x rtl:divide-x-reverse"><div class="text-muted-400 flex h-8 items-center gap-1 px-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:circles-three-duotone",
          class: "size-5"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.relations)}+ \u0631\u0648\u0627\u0628\u0637 `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.relations) + "+ \u0631\u0648\u0627\u0628\u0637 ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:check-circle-duotone",
          class: "size-5"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(data)?.personalInfo.projects)} \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(data)?.personalInfo.projects) + " \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex h-8 items-center gap-2 px-4"><!--[-->`);
        ssrRenderList(unref(data)?.personalInfo.socials, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.name,
            to: link.url,
            target: "_blank",
            rel: "noopener noreferrer",
            class: "border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex size-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: link.icon,
                  class: "size-3"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: link.icon,
                    class: "size-3"
                  }, null, 8, ["name"]),
                  createVNode("span", { class: "sr-only" }, toDisplayString(link.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div></div><div class="ltablet:grid-cols-5 mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:buildings-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0634\u0631\u06A9\u062A `);
                        } else {
                          return [
                            createTextVNode(" \u0634\u0631\u06A9\u062A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0631\u06A9\u062A `);
                        } else {
                          return [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0631\u06A9\u062A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:buildings-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0634\u0631\u06A9\u062A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0631\u06A9\u062A ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:buildings-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0634\u0631\u06A9\u062A ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0634\u0631\u06A9\u062A ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:users-four-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u06CC\u0645 `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u06CC\u0645 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 `);
                        } else {
                          return [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:users-four-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u06CC\u0645 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:users-four-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u06CC\u0645 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u062A\u06CC\u0645 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:briefcase-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 `);
                        } else {
                          return [
                            createTextVNode(" \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u0631\u0648\u0698\u0647 `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u0631\u0648\u0698\u0647 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:briefcase-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u0631\u0648\u0698\u0647 ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:briefcase-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u0631\u0648\u0698\u0647 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:lock-open-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0645\u062C\u0648\u0632\u0647\u0627 `);
                        } else {
                          return [
                            createTextVNode(" \u0645\u062C\u0648\u0632\u0647\u0627 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627 `);
                        } else {
                          return [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:lock-open-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062C\u0648\u0632\u0647\u0627 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627 ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:lock-open-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062C\u0648\u0632\u0647\u0627 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:note-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0645\u062F\u0627\u0631\u06A9 `);
                        } else {
                          return [
                            createTextVNode(" \u0645\u062F\u0627\u0631\u06A9 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627 `);
                        } else {
                          return [
                            createTextVNode(" \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:note-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0645\u062F\u0627\u0631\u06A9 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627 ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:note-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u062F\u0627\u0631\u06A9 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC \u062F\u0627\u062F\u0647\u200C\u0647\u0627 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:upload-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC `);
                        } else {
                          return [
                            createTextVNode(" \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0622\u067E\u0644\u0648\u062F `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0622\u067E\u0644\u0648\u062F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:upload-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0622\u067E\u0644\u0648\u062F ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:upload-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0622\u067E\u0644\u0648\u062F ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:credit-card-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 `);
                        } else {
                          return [
                            createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0648 \u0637\u0631\u062D\u200C\u0647\u0627 `);
                        } else {
                          return [
                            createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0648 \u0637\u0631\u062D\u200C\u0647\u0627 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:credit-card-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0648 \u0637\u0631\u062D\u200C\u0647\u0627 ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:credit-card-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628 \u0648 \u0637\u0631\u062D\u200C\u0647\u0627 ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chat-circle-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC `);
                        } else {
                          return [
                            createTextVNode(" \u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0686\u062A `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0686\u062A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:chat-circle-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0686\u062A ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0686\u062A ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:shield-check-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0627\u0645\u0646\u06CC\u062A `);
                        } else {
                          return [
                            createTextVNode(" \u0627\u0645\u0646\u06CC\u062A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:shield-check-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0627\u0645\u0646\u06CC\u062A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:shield-check-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0645\u0646\u06CC\u062A ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u0645\u0646\u06CC\u062A\u06CC ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          "elevated-hover": "",
          class: "hover:!border-primary-500 group border-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "block p-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:gear-six-duotone",
                      class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "semibold",
                      class: "mt-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0639\u0645\u0648\u0645\u06CC `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0639\u0645\u0648\u0645\u06CC ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:gear-six-duotone",
                          class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                        }),
                        createVNode(_component_BaseHeading, {
                          tag: "h3",
                          size: "xs",
                          weight: "semibold",
                          class: "mt-2 !text-[0.65rem] uppercase"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0639\u0645\u0648\u0645\u06CC ")
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "block p-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode(_component_Icon, {
                        name: "ph:gear-six-duotone",
                        class: "group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
                      }),
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "semibold",
                        class: "mt-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0639\u0645\u0648\u0645\u06CC ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
