import { d as _sfc_main$D, f as _sfc_main$C, l as _sfc_main$3, h as _sfc_main$u, b as _sfc_main$w, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseCheckbox-CfxLaouc.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$4 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-B-NRPykg.mjs';
import { defineComponent, withAsyncContext, ref, reactive, computed, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-BzXbqdKu.mjs';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search-results",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/search", "$bK0uU6p3Xy")), __temp = await __temp, __restore(), __temp);
    const searchTerms = ref("\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC");
    const results = ref();
    const filters = reactive({
      publication: {
        new: false,
        updated: false,
        upvoted: false
      },
      topics: {
        engineering: false,
        software: false,
        business: false,
        management: false,
        hr: false
      },
      type: {
        members: false,
        projects: false,
        files: false
      }
    });
    if (data.value) {
      results.value = data.value;
    }
    const activeFilter = ref("all");
    const filteredResults = computed(() => {
      if (activeFilter.value === "all") {
        return results.value;
      }
      return results.value.filter(
        (result) => result.type === activeFilter.value
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseText = _sfc_main$C;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseCheckbox = _sfc_main$1;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseAvatar = _sfc_main$4;
      const _component_BaseButtonIcon = _sfc_main$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full max-w-5xl" }, _attrs))}><div class="mx-auto mt-6 flex w-full max-w-sm items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(searchTerms),
        "onUpdate:modelValue": ($event) => isRef(searchTerms) ? searchTerms.value = $event : null,
        icon: "lucide:search",
        placeholder: "\u062C\u0633\u062A\u062C\u0648...",
        rounded: "full",
        classes: {
          wrapper: "w-full",
          input: "h-12 !ps-12",
          icon: "h-12 w-12 [& > svg]:!w-7 [& > svg]:!h-7"
        }
      }, null, _parent));
      _push(`</div><div class="mb-12 mt-2 text-center">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06F7\u06F8 \u0646\u062A\u06CC\u062C\u0647 \u0628\u0631\u0627\u06CC &quot;\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC&quot; `);
          } else {
            return [
              createTextVNode(' \u06F7\u06F8 \u0646\u062A\u06CC\u062C\u0647 \u0628\u0631\u0627\u06CC "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062F\u0627\u062E\u0644\u06CC" ')
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(results) === null) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "\u0646\u062A\u06CC\u062C\u0647\u200C\u06CC \u0645\u0646\u0637\u0628\u0642\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",
          subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u06CC\u0645 \u0646\u062A\u0627\u06CC\u062C \u0645\u0637\u0627\u0628\u0642\u06CC \u0628\u0631\u0627\u06CC \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u0634\u0645\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u0645. \u0639\u0628\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u062C\u0633\u062A\u062C\u0648\u06CC \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F."
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="block dark:hidden"${ssrRenderAttr("src", _imports_0)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId}><img class="hidden dark:block"${ssrRenderAttr("src", _imports_1)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0645\u06A9\u0627\u0646 \u0646\u06AF\u0647\u062F\u0627\u0631"${_scopeId}>`);
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
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-4"><div class="flex flex-col gap-6">`);
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                weight: "medium",
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u0646\u062A\u0634\u0627\u0631 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u0646\u062A\u0634\u0627\u0631 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-4"${_scopeId}><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).publication.new,
                "onUpdate:modelValue": ($event) => unref(filters).publication.new = $event,
                color: "primary",
                rounded: "full",
                label: "\u0628\u0647\u200C\u062A\u0627\u0632\u06AF\u06CC \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 24 `);
                  } else {
                    return [
                      createTextVNode(" 24 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).publication.updated,
                "onUpdate:modelValue": ($event) => unref(filters).publication.updated = $event,
                color: "primary",
                rounded: "full",
                label: "\u0628\u0647\u200C\u062A\u0627\u0632\u06AF\u06CC \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F\u0647",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 39 `);
                  } else {
                    return [
                      createTextVNode(" 39 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).publication.upvoted,
                "onUpdate:modelValue": ($event) => unref(filters).publication.upvoted = $event,
                color: "primary",
                rounded: "full",
                label: "\u0631\u0623\u06CC \u0645\u062B\u0628\u062A",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 17 `);
                  } else {
                    return [
                      createTextVNode(" 17 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "md",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u0646\u062A\u0634\u0627\u0631 ")
                  ]),
                  _: 1
                }),
                createVNode("ul", { class: "space-y-4" }, [
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).publication.new,
                      "onUpdate:modelValue": ($event) => unref(filters).publication.new = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0628\u0647\u200C\u062A\u0627\u0632\u06AF\u06CC \u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0647",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 24 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).publication.updated,
                      "onUpdate:modelValue": ($event) => unref(filters).publication.updated = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0628\u0647\u200C\u062A\u0627\u0632\u06AF\u06CC \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F\u0647",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 39 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).publication.upvoted,
                      "onUpdate:modelValue": ($event) => unref(filters).publication.upvoted = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0631\u0623\u06CC \u0645\u062B\u0628\u062A",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 17 ")
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
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                weight: "medium",
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u0648\u0636\u0648\u0639\u0627\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u0648\u0636\u0648\u0639\u0627\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-4"${_scopeId}><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.engineering,
                "onUpdate:modelValue": ($event) => unref(filters).topics.engineering = $event,
                color: "primary",
                rounded: "full",
                label: "\u0645\u0647\u0646\u062F\u0633\u06CC",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 62 `);
                  } else {
                    return [
                      createTextVNode(" 62 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.software,
                "onUpdate:modelValue": ($event) => unref(filters).topics.software = $event,
                color: "primary",
                rounded: "full",
                label: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 148 `);
                  } else {
                    return [
                      createTextVNode(" 148 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.business,
                "onUpdate:modelValue": ($event) => unref(filters).topics.business = $event,
                color: "primary",
                rounded: "full",
                label: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 23 `);
                  } else {
                    return [
                      createTextVNode(" 23 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.management,
                "onUpdate:modelValue": ($event) => unref(filters).topics.management = $event,
                color: "primary",
                rounded: "full",
                label: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 8 `);
                  } else {
                    return [
                      createTextVNode(" 8 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).topics.hr,
                "onUpdate:modelValue": ($event) => unref(filters).topics.hr = $event,
                color: "primary",
                rounded: "full",
                label: "\u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 43 `);
                  } else {
                    return [
                      createTextVNode(" 43 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "md",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0648\u0636\u0648\u0639\u0627\u062A ")
                  ]),
                  _: 1
                }),
                createVNode("ul", { class: "space-y-4" }, [
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.engineering,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.engineering = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0645\u0647\u0646\u062F\u0633\u06CC",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 62 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.software,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.software = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 148 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.business,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.business = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 23 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.management,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.management = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 8 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).topics.hr,
                      "onUpdate:modelValue": ($event) => unref(filters).topics.hr = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 43 ")
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
        _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                weight: "medium",
                size: "md",
                class: "mb-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0646\u0648\u0639 \u0646\u062A\u06CC\u062C\u0647 `);
                  } else {
                    return [
                      createTextVNode(" \u0646\u0648\u0639 \u0646\u062A\u06CC\u062C\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<ul class="space-y-4"${_scopeId}><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).type.members,
                "onUpdate:modelValue": ($event) => unref(filters).type.members = $event,
                color: "primary",
                rounded: "full",
                label: "\u0627\u0639\u0636\u0627",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 12 `);
                  } else {
                    return [
                      createTextVNode(" 12 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).type.projects,
                "onUpdate:modelValue": ($event) => unref(filters).type.projects = $event,
                color: "primary",
                rounded: "full",
                label: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 54 `);
                  } else {
                    return [
                      createTextVNode(" 54 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li class="flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckbox, {
                modelValue: unref(filters).type.files,
                "onUpdate:modelValue": ($event) => unref(filters).type.files = $event,
                color: "primary",
                rounded: "full",
                label: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
                classes: {
                  label: "text-xs"
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 31 `);
                  } else {
                    return [
                      createTextVNode(" 31 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul>`);
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  weight: "medium",
                  size: "md",
                  class: "mb-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0646\u0648\u0639 \u0646\u062A\u06CC\u062C\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("ul", { class: "space-y-4" }, [
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).type.members,
                      "onUpdate:modelValue": ($event) => unref(filters).type.members = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0627\u0639\u0636\u0627",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 12 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).type.projects,
                      "onUpdate:modelValue": ($event) => unref(filters).type.projects = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 54 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("li", { class: "flex items-center justify-between" }, [
                    createVNode(_component_BaseCheckbox, {
                      modelValue: unref(filters).type.files,
                      "onUpdate:modelValue": ($event) => unref(filters).type.files = $event,
                      color: "primary",
                      rounded: "full",
                      label: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
                      classes: {
                        label: "text-xs"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 31 ")
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
        _push(`</div></div><div class="col-span-12 sm:col-span-8"><div class="border-muted-200 dark:border-muted-800 flex items-center gap-4 border-b font-sans"><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "all" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> \u0647\u0645\u0647 </button><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "people" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> \u0627\u0641\u0631\u0627\u062F </button><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "project" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 </button><button type="button" class="${ssrRenderClass([
          unref(activeFilter) === "file" ? "text-muted-700 dark:text-muted-100 border-primary-500" : "border-transparent text-muted-400",
          "border-b-2 px-3 py-4 text-sm"
        ])}"> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 </button></div><div>`);
        if (unref(results).length === 0) {
          _push(`<div></div>`);
        } else {
          _push(`<div class="space-y-4 py-4"><!--[-->`);
          ssrRenderList(unref(filteredResults), (result) => {
            _push(ssrRenderComponent(_component_BaseCard, {
              key: result.name,
              class: "p-5"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex w-full items-center gap-4"${_scopeId}>`);
                  if (result.type === "people") {
                    _push2(ssrRenderComponent(_component_BaseAvatar, {
                      src: result.src
                    }, null, _parent2, _scopeId));
                  } else if (result.type === "project") {
                    _push2(`<img class="size-10 shrink-0 rounded-full object-cover object-center"${ssrRenderAttr("src", result.src)}${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else if (result.type === "file") {
                    _push2(`<img class="size-10 shrink-0"${ssrRenderAttr("src", result.src)}${ssrRenderAttr("alt", result.name)}${_scopeId}>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseHeading, {
                    as: "h3",
                    weight: "medium",
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(result.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(result.name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(result.subtext)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(result.subtext), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div><div class="ms-auto"${_scopeId}>`);
                  if (result.type === "people") {
                    _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                      to: result.url,
                      rounded: "full",
                      size: "sm",
                      "data-nui-tooltip": "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "rtl:rotate-180"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "rtl:rotate-180"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else if (result.type === "project") {
                    _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                      to: result.url,
                      rounded: "full",
                      size: "sm",
                      "data-nui-tooltip": "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "rtl:rotate-180"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "rtl:rotate-180"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else if (result.type === "file") {
                    _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                      to: result.url,
                      rounded: "full",
                      size: "sm",
                      "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-down" }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            createVNode(_component_Icon, { name: "lucide:arrow-down" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full items-center gap-4" }, [
                      result.type === "people" ? (openBlock(), createBlock(_component_BaseAvatar, {
                        key: 0,
                        src: result.src
                      }, null, 8, ["src"])) : result.type === "project" ? (openBlock(), createBlock("img", {
                        key: 1,
                        class: "size-10 shrink-0 rounded-full object-cover object-center",
                        src: result.src,
                        alt: result.name
                      }, null, 8, ["src", "alt"])) : result.type === "file" ? (openBlock(), createBlock("img", {
                        key: 2,
                        class: "size-10 shrink-0",
                        src: result.src,
                        alt: result.name
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h3",
                          weight: "medium",
                          size: "sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(result.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(result.subtext), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "ms-auto" }, [
                        result.type === "people" ? (openBlock(), createBlock(_component_BaseButtonIcon, {
                          key: 0,
                          to: result.url,
                          rounded: "full",
                          size: "sm",
                          "data-nui-tooltip": "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "rtl:rotate-180"
                            })
                          ]),
                          _: 2
                        }, 1032, ["to"])) : result.type === "project" ? (openBlock(), createBlock(_component_BaseButtonIcon, {
                          key: 1,
                          to: result.url,
                          rounded: "full",
                          size: "sm",
                          "data-nui-tooltip": "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-right",
                              class: "rtl:rotate-180"
                            })
                          ]),
                          _: 2
                        }, 1032, ["to"])) : result.type === "file" ? (openBlock(), createBlock(_component_BaseButtonIcon, {
                          key: 2,
                          to: result.url,
                          rounded: "full",
                          size: "sm",
                          "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, { name: "lucide:arrow-down" })
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/search-results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
