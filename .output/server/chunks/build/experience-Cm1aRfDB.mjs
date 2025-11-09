import { h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C, e as _sfc_main$e, l as _sfc_main$3, c as _sfc_main$v, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './TairoFormGroup-B2ka3Eid.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$2 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$5 } from './TairoFormSave-DUdgzCNp.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-1hSz1JCe.mjs';
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
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "experience",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$9D0DOn8fc9")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_TairoFormGroup = _sfc_main$1;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_TairoFormSave = _sfc_main$5;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "w-full pb-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between p-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "sm",
              weight: "medium",
              lead: "normal",
              class: "uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631\u06CC \u0634\u0645\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631\u06CC \u0634\u0645\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-24",
              to: "/layouts/profile"
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
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0630\u062E\u06CC\u0631\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="p-4"${_scopeId}>`);
            if (!unref(data)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                title: "\u0628\u062F\u0648\u0646 \u062A\u062C\u0631\u0628\u0647",
                subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u062C\u0631\u0628\u0647\u200C\u0627\u06CC \u0627\u0636\u0627\u0641\u0647 \u0646\u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u062A\u0627 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F.",
                class: "scale-90"
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId2}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseButton, { class: "mt-4 w-40" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u062C\u0631\u0628\u0647 `);
                        } else {
                          return [
                            createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u062C\u0631\u0628\u0647 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseButton, { class: "mt-4 w-40" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u062C\u0631\u0628\u0647 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="mx-auto max-w-lg space-y-12 py-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TairoFormGroup, {
                label: "\u0642\u0628\u0644\u06CC \u062A\u062C\u0631\u0628\u06CC\u0627\u062A",
                sublabel: "\u0627\u06CC\u0646 \u0628\u0647 \u062F\u06CC\u06AF\u0631\u0627\u0646 \u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u062F \u062A\u0627 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u0634\u0645\u0627 \u0631\u0627 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u0646\u0646\u062F"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-8"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(data).personalInfo.experiences, (item) => {
                      _push3(`<div class="flex w-full items-center gap-2"${_scopeId2}><img${ssrRenderAttr("src", item.logo)}${ssrRenderAttr("alt", item.company)} class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"${_scopeId2}><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.company)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.company), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.period)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.period), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-primary-500"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate(item.position)}</span>`);
                          } else {
                            return [
                              createVNode("span", null, toDisplayString(item.position), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div><div class="ms-auto"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseDropdown, {
                        variant: "context",
                        label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                        placement: "bottom-end",
                        size: "md",
                        class: "z-20",
                        rounded: "lg"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                              text: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:pencil-duotone",
                                    class: "me-2 block size-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:pencil-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_BaseDropdownItem, {
                              to: "#",
                              title: "\u062D\u0630\u0641",
                              text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
                            }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "ph:trash-duotone",
                                    class: "me-2 block size-5"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "ph:trash-duotone",
                                      class: "me-2 block size-5"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_BaseDropdownItem, {
                                to: "#",
                                title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                                text: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
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
                                title: "\u062D\u0630\u0641",
                                text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
                              }, {
                                start: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ph:trash-duotone",
                                    class: "me-2 block size-5"
                                  })
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]--></div><div class="border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8"${_scopeId2}><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:suitcase-duotone",
                      class: "size-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseHeading, {
                      tag: "h3",
                      size: "sm",
                      weight: "medium"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u062A\u062C\u0631\u0628\u0647 \u062C\u062F\u06CC\u062F `);
                        } else {
                          return [
                            createTextVNode(" \u062A\u062C\u0631\u0628\u0647 \u062C\u062F\u06CC\u062F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC \u062C\u062F\u06CC\u062F</span>`);
                        } else {
                          return [
                            createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC \u062C\u062F\u06CC\u062F")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="ms-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "size-4"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.experiences, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.company,
                            class: "flex w-full items-center gap-2"
                          }, [
                            createVNode("img", {
                              src: item.logo,
                              alt: item.company,
                              class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.company), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.period), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-primary-500"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.position), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_BaseDropdown, {
                                variant: "context",
                                label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                                placement: "bottom-end",
                                size: "md",
                                class: "z-20",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseDropdownItem, {
                                    to: "#",
                                    title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                                    text: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
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
                                    title: "\u062D\u0630\u0641",
                                    text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
                                  }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ph:trash-duotone",
                                        class: "me-2 block size-5"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8" }, [
                        createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full" }, [
                          createVNode(_component_Icon, {
                            name: "ph:suitcase-duotone",
                            class: "size-5"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u062A\u062C\u0631\u0628\u0647 \u062C\u062F\u06CC\u062F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC \u062C\u062F\u06CC\u062F")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode(_component_BaseButtonIcon, {
                            rounded: "full",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lucide:plus",
                                class: "size-4"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between p-4" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    tag: "h2",
                    size: "sm",
                    weight: "medium",
                    lead: "normal",
                    class: "uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631\u06CC \u0634\u0645\u0627 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    class: "w-24",
                    to: "/layouts/profile"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0644\u063A\u0648 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    class: "w-24"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "p-4" }, [
                !unref(data) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_BasePlaceholderPage, {
                    title: "\u0628\u062F\u0648\u0646 \u062A\u062C\u0631\u0628\u0647",
                    subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u062A\u062C\u0631\u0628\u0647\u200C\u0627\u06CC \u0627\u0636\u0627\u0641\u0647 \u0646\u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F. \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u062A\u0627 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u062F\u0647\u06CC\u062F.",
                    class: "scale-90"
                  }, {
                    image: withCtx(() => [
                      createVNode("img", {
                        class: "block dark:hidden",
                        src: _imports_0,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      }),
                      createVNode("img", {
                        class: "hidden dark:block",
                        src: _imports_1,
                        alt: "\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_BaseButton, { class: "mt-4 w-40" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0641\u0632\u0648\u062F\u0646 \u062A\u062C\u0631\u0628\u0647 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mx-auto max-w-lg space-y-12 py-8"
                }, [
                  createVNode(_component_TairoFormGroup, {
                    label: "\u0642\u0628\u0644\u06CC \u062A\u062C\u0631\u0628\u06CC\u0627\u062A",
                    sublabel: "\u0627\u06CC\u0646 \u0628\u0647 \u062F\u06CC\u06AF\u0631\u0627\u0646 \u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u062F \u062A\u0627 \u062A\u062C\u0631\u0628\u06CC\u0627\u062A \u0634\u0645\u0627 \u0631\u0627 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u0646\u0646\u062F"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).personalInfo.experiences, (item) => {
                          return openBlock(), createBlock("div", {
                            key: item.company,
                            class: "flex w-full items-center gap-2"
                          }, [
                            createVNode("img", {
                              src: item.logo,
                              alt: item.company,
                              class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 max-w-[50px] rounded-full border bg-white"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.company), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.period), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                class: "text-primary-500"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(item.position), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_BaseDropdown, {
                                variant: "context",
                                label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                                placement: "bottom-end",
                                size: "md",
                                class: "z-20",
                                rounded: "lg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseDropdownItem, {
                                    to: "#",
                                    title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                                    text: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
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
                                    title: "\u062D\u0630\u0641",
                                    text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u062A\u062C\u0631\u0628\u0647"
                                  }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ph:trash-duotone",
                                        class: "me-2 block size-5"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 mt-8 flex w-full items-center gap-2 border-t pt-8" }, [
                        createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-400 flex size-[50px] items-center justify-center rounded-full" }, [
                          createVNode(_component_Icon, {
                            name: "ph:suitcase-duotone",
                            class: "size-5"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h3",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u062A\u062C\u0631\u0628\u0647 \u062C\u062F\u06CC\u062F ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u06CC \u062C\u062F\u06CC\u062F")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode(_component_BaseButtonIcon, {
                            rounded: "full",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lucide:plus",
                                class: "size-4"
                              })
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoFormSave, null, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
