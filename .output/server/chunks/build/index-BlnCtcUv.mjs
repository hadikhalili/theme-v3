import { j as useRoute, u as useRouter, b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, w as __nuxt_component_0$2, _ as __nuxt_component_0$3, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$1$1 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, isRef, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
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
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(25);
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
      "/api/company/projects",
      {
        query
      },
      "$qdbzuIDHcS"
    )), __temp = await __temp, __restore(), __temp);
    const selectedProject = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAutocomplete = _sfc_main$1;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseAutocompleteItem = _sfc_main$1$1;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ltablet:mt-20 mx-auto max-w-4xl lg:mt-20" }, _attrs))}>`);
      if (!unref(pending) && unref(data)?.recent.length === 0) {
        _push(`<div><div class="bg-muted-200 dark:bg-muted-800/60 rounded-xl p-6">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h4",
          size: "lg",
          weight: "medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F `);
            } else {
              return [
                createTextVNode(" \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u062F\u0627\u0631\u06CC\u062F. `);
            } else {
              return [
                createTextVNode(" \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u062F\u0627\u0631\u06CC\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-5 col-span-12 mb-6 lg:col-span-5"><div class="ltablet:max-w-sm bg-muted-200 dark:bg-muted-800/60 rounded-xl p-8 lg:max-w-sm"><div class="mb-8 max-w-sm">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:kanban-duotone",
          class: "text-primary-500 mb-2 size-10"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h4",
          size: "xl",
          weight: "medium",
          class: "mb-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u062A\u0627\u0628\u0644\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 \u0634\u0645\u0627 `);
            } else {
              return [
                createTextVNode(" \u062A\u0627\u0628\u0644\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 \u0634\u0645\u0627 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0627\u06CC\u0646\u062C\u0627 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u062A\u06CC\u0645 \u0634\u0645\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F. \u0628\u0631\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0628\u06CC\u0634\u062A\u0631\u060C \u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u062F\u0631 \u0632\u06CC\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. `);
            } else {
              return [
                createTextVNode(" \u0627\u06CC\u0646\u062C\u0627 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062F\u0631 \u062A\u06CC\u0645 \u0634\u0645\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F. \u0628\u0631\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0628\u06CC\u0634\u062A\u0631\u060C \u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u062F\u0631 \u0632\u06CC\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (unref(data)?.data) {
          _push(ssrRenderComponent(_component_BaseAutocomplete, {
            modelValue: unref(selectedProject),
            "onUpdate:modelValue": ($event) => isRef(selectedProject) ? selectedProject.value = $event : null,
            items: unref(data).data,
            "display-value": (item) => item.name,
            rounded: "lg",
            icon: "lucide:search",
            placeholder: "\u062C\u0633\u062A\u062C\u0648...",
            label: "\u062C\u0633\u062A\u062C\u0648\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
            "label-float": "",
            clearable: ""
          }, {
            empty: withCtx(({
              pending: pendingAutocomplete,
              query: queryAutocomplete
            }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (pendingAutocomplete) {
                  _push2(ssrRenderComponent(_component_BasePlaceload, null, null, _parent2, _scopeId));
                } else if (!queryAutocomplete) {
                  _push2(`<span class="text-muted-700 dark:text-muted-400 cursor-default select-none"${_scopeId}> \u0645\u062B\u0627\u0644: \u067E\u0631\u0648\u0698\u0647 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644... </span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  pendingAutocomplete ? (openBlock(), createBlock(_component_BasePlaceload, { key: 0 })) : !queryAutocomplete ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-muted-700 dark:text-muted-400 cursor-default select-none"
                  }, " \u0645\u062B\u0627\u0644: \u067E\u0631\u0648\u0698\u0647 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u062A\u062D\u0648\u06CC\u0644... ")) : createCommentVNode("", true)
                ];
              }
            }),
            item: withCtx(({ item, selected }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/layouts/projects/board/${item.slug}`,
                  class: "block"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_BaseAutocompleteItem, {
                        item: {
                          name: item.name,
                          text: `${item.customer.name} | ${item.customer.text}`,
                          media: item.customer.logo
                        },
                        properties: {
                          label: "name",
                          sublabel: "text",
                          media: "media"
                        },
                        selected
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_BaseAutocompleteItem, {
                          item: {
                            name: item.name,
                            text: `${item.customer.name} | ${item.customer.text}`,
                            media: item.customer.logo
                          },
                          properties: {
                            label: "name",
                            sublabel: "text",
                            media: "media"
                          },
                          selected
                        }, null, 8, ["item", "selected"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, {
                    to: `/layouts/projects/board/${item.slug}`,
                    class: "block"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseAutocompleteItem, {
                        item: {
                          name: item.name,
                          text: `${item.customer.name} | ${item.customer.text}`,
                          media: item.customer.logo
                        },
                        properties: {
                          label: "name",
                          sublabel: "text",
                          media: "media"
                        },
                        selected
                      }, null, 8, ["item", "selected"])
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="ltablet:col-span-7 col-span-12 grid gap-4 sm:grid-cols-2 lg:col-span-7"><!--[-->`);
        ssrRenderList(unref(data)?.data.slice(0, 6), (item, r) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: r,
            class: "group block",
            to: `/layouts/projects/board/${item.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  rounded: "lg",
                  "elevated-hover": "",
                  class: "group-hover:!border-primary-500 p-5"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="mb-6 flex gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: item.customer.logo,
                        size: "sm",
                        rounded: "none",
                        mask: "blob",
                        "data-nui-tooltip": item.customer.name,
                        class: "bg-muted-100 dark:bg-muted-700"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h5",
                        size: "sm",
                        weight: "medium",
                        class: "line-clamp-1"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.name), 1)
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
                            _push4(`${ssrInterpolate(item.customer.name)} | ${ssrInterpolate(item.customer.text)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><!--[-->`);
                      ssrRenderList(item.stacks, (stack) => {
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          key: stack.name,
                          src: stack.icon,
                          size: "xxs",
                          rounded: "none",
                          mask: "blob",
                          "data-nui-tooltip": stack.name,
                          class: "bg-muted-100 dark:bg-muted-700"
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div><div class="text-muted-400 flex items-center gap-4"${_scopeId2}><div class="flex items-center gap-1 text-sm"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:paperclip-duotone",
                        class: "size-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="font-sans"${_scopeId2}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:users-duotone",
                        class: "size-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="font-sans"${_scopeId2}>${ssrInterpolate(item.team.length)}</span></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "mb-6 flex gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            src: item.customer.logo,
                            size: "sm",
                            rounded: "none",
                            mask: "blob",
                            "data-nui-tooltip": item.customer.name,
                            class: "bg-muted-100 dark:bg-muted-700"
                          }, null, 8, ["src", "data-nui-tooltip"]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              tag: "h5",
                              size: "sm",
                              weight: "medium",
                              class: "line-clamp-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                              return openBlock(), createBlock(_component_BaseAvatar, {
                                key: stack.name,
                                src: stack.icon,
                                size: "xxs",
                                rounded: "none",
                                mask: "blob",
                                "data-nui-tooltip": stack.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, 8, ["src", "data-nui-tooltip"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                            createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                              createVNode(_component_Icon, {
                                name: "ph:paperclip-duotone",
                                class: "size-4"
                              }),
                              createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                            ]),
                            createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                              createVNode(_component_Icon, {
                                name: "ph:users-duotone",
                                class: "size-4"
                              }),
                              createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
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
                    rounded: "lg",
                    "elevated-hover": "",
                    class: "group-hover:!border-primary-500 p-5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mb-6 flex gap-2" }, [
                        createVNode(_component_BaseAvatar, {
                          src: item.customer.logo,
                          size: "sm",
                          rounded: "none",
                          mask: "blob",
                          "data-nui-tooltip": item.customer.name,
                          class: "bg-muted-100 dark:bg-muted-700"
                        }, null, 8, ["src", "data-nui-tooltip"]),
                        createVNode("div", null, [
                          createVNode(_component_BaseHeading, {
                            tag: "h5",
                            size: "sm",
                            weight: "medium",
                            class: "line-clamp-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_BaseParagraph, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.customer.name) + " | " + toDisplayString(item.customer.text), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.stacks, (stack) => {
                            return openBlock(), createBlock(_component_BaseAvatar, {
                              key: stack.name,
                              src: stack.icon,
                              size: "xxs",
                              rounded: "none",
                              mask: "blob",
                              "data-nui-tooltip": stack.name,
                              class: "bg-muted-100 dark:bg-muted-700"
                            }, null, 8, ["src", "data-nui-tooltip"]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "text-muted-400 flex items-center gap-4" }, [
                          createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                            createVNode(_component_Icon, {
                              name: "ph:paperclip-duotone",
                              class: "size-4"
                            }),
                            createVNode("span", { class: "font-sans" }, toDisplayString(item.files.length), 1)
                          ]),
                          createVNode("div", { class: "flex items-center gap-1 text-sm" }, [
                            createVNode(_component_Icon, {
                              name: "ph:users-duotone",
                              class: "size-4"
                            }),
                            createVNode("span", { class: "font-sans" }, toDisplayString(item.team.length), 1)
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
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/projects/board/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
