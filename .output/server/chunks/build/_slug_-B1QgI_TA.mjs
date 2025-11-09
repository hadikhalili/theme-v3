import { t as usePanels, j as useRoute, S as navigateTo, e as _sfc_main$e, a as __nuxt_component_2, l as _sfc_main$3, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as __nuxt_component_0, a as _sfc_main$1 } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { _ as _sfc_main$2 } from './BaseTabs-_jPxp9j_.mjs';
import { _ as _sfc_main$4 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$5 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { _ as _sfc_main$6 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$7 } from './BaseProgress-Bi06w8MA.mjs';
import { defineComponent, computed, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-B1UMj9z7.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { open } = usePanels();
    const route = useRoute();
    const slug = computed(() => route.params.slug);
    const query = computed(() => {
      return {
        slug: slug.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/company/projects",
      {
        query
      },
      "$XxyyrqxmZa"
    )), __temp = await __temp, __restore(), __temp);
    if (!data.value?.project) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/layouts/projects")), await __temp, __restore();
    }
    const currentTask = ref();
    function openTaskPanel(id, tasks) {
      currentTask.value = tasks.find((task) => task.id === id);
      open("task", { task: currentTask });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$1;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseTabs = _sfc_main$2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseAvatar = _sfc_main$4;
      const _component_BaseAvatarGroup = _sfc_main$5;
      const _component_BaseButtonIcon = _sfc_main$6;
      const _component_BaseProgress = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute end-12 top-2.5 z-20 hidden sm:block">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        size: "sm",
        rounded: "lg",
        to: `/layouts/projects/board/${unref(slug)}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:kanban-duotone",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0628\u0631\u062F \u0628\u0627\u0632</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:kanban-duotone",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u0628\u0631\u062F \u0628\u0627\u0632")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="absolute end-0 top-2 z-20">`);
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
              to: `/layouts/projects/board/${unref(slug)}`,
              title: "\u0646\u0645\u0627\u06CC \u062A\u062E\u062A\u0647",
              text: "\u062A\u063A\u06CC\u06CC\u0631 \u0628\u0647 \u0646\u0645\u0627\u06CC \u0628\u0631\u062F",
              class: "sm:hidden"
            }, {
              start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:kanban-duotone",
                    class: "me-2 block size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:kanban-duotone",
                      class: "me-2 block size-5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseDropdownItem, {
              to: "#",
              title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
              text: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F"
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
              title: "\u0645\u062C\u0648\u0632\u0647\u0627",
              text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627"
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
              title: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
              text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"
            }, {
              start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:file-duotone",
                    class: "me-2 block size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:file-duotone",
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
              title: "\u062D\u0630\u0641",
              text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647"
            }, {
              start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "ph:trash-duotone",
                    class: "me-2 block size-5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "ph:trash-duotone",
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
                to: `/layouts/projects/board/${unref(slug)}`,
                title: "\u0646\u0645\u0627\u06CC \u062A\u062E\u062A\u0647",
                text: "\u062A\u063A\u06CC\u06CC\u0631 \u0628\u0647 \u0646\u0645\u0627\u06CC \u0628\u0631\u062F",
                class: "sm:hidden"
              }, {
                start: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:kanban-duotone",
                    class: "me-2 block size-5"
                  })
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode(_component_BaseDropdownItem, {
                to: "#",
                title: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                text: "\u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F"
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
                title: "\u0645\u062C\u0648\u0632\u0647\u0627",
                text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627"
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
                title: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
                text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"
              }, {
                start: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "ph:file-duotone",
                    class: "me-2 block size-5"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_BaseDropdownDivider),
              createVNode(_component_BaseDropdownItem, {
                to: "#",
                title: "\u062D\u0630\u0641",
                text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647"
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
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(data)?.project === void 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "\u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F",
          subtitle: "We couldn't find a project matching this namespace."
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
        _push(`<div class="h-full">`);
        _push(ssrRenderComponent(_component_BaseTabs, {
          "model-value": "overview",
          tabs: [
            {
              label: "\u0645\u0631\u0648\u0631 \u06A9\u0644\u06CC",
              value: "overview"
            },
            {
              label: "\u062A\u06CC\u0645",
              value: "team"
            },
            {
              label: "\u0648\u0638\u0627\u06CC\u0641",
              value: "tasks"
            }
          ]
        }, {
          tab: withCtx(({ activeValue }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (activeValue === "overview") {
                _push2(`<div${_scopeId}><div class="grid grid-cols-12 gap-6"${_scopeId}><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseCard, { class: "space-y-12 p-10" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="border-muted-200 dark:border-muted-700 flex flex-col items-center justify-between gap-8 border-b pb-12 sm:flex-row"${_scopeId2}><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h2",
                        size: "2xl",
                        weight: "medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(data)?.project.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(data)?.project.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "lg",
                        class: "text-muted-600 dark:text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(data)?.project.category)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(data)?.project.category), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400 py-4"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(data)?.project.description)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(data)?.project.description), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: unref(data)?.project.owner.avatar,
                        "data-nui-tooltip": `${unref(data)?.project.owner.name} owns this project`
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(data)?.project.owner.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(data)?.project.owner.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 `);
                          } else {
                            return [
                              createTextVNode(" \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                      _push3(ssrRenderComponent(_component_BaseAvatarGroup, {
                        avatars: unref(data)?.project.team,
                        limit: 3
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div><div class="w-full shrink-0 sm:w-72"${_scopeId2}><img${ssrRenderAttr("src", unref(data)?.project.image)}${ssrRenderAttr("alt", unref(data)?.project.name)} class="rounded-lg"${_scopeId2}></div></div><div class="border-muted-200 dark:border-muted-700 grid gap-4 border-b pb-12 sm:grid-cols-4"${_scopeId2}><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:pen-nib-duotone",
                        class: "text-primary-500 mb-2 size-6"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0637\u0631\u0627\u062D\u06CC UI/UX `);
                          } else {
                            return [
                              createTextVNode(" \u0637\u0631\u0627\u062D\u06CC UI/UX ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0637\u0631\u0627\u062D\u06CC \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u06CC\u200C\u0646\u0642\u0635 \u062F\u0631 \u0645\u062D\u062F\u0648\u062F\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0633\u062A. `);
                          } else {
                            return [
                              createTextVNode(" \u0637\u0631\u0627\u062D\u06CC \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u06CC\u200C\u0646\u0642\u0635 \u062F\u0631 \u0645\u062D\u062F\u0648\u062F\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0633\u062A. ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:timer-duotone",
                        class: "text-primary-500 mb-2 size-6"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0627\u0633\u067E\u0631\u06CC\u0646\u062A\u200C\u0647\u0627\u06CC \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC `);
                          } else {
                            return [
                              createTextVNode(" \u0627\u0633\u067E\u0631\u06CC\u0646\u062A\u200C\u0647\u0627\u06CC \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u062A\u06A9\u0631\u0627\u0631\u0647\u0627\u06CC \u062A\u0648\u0633\u0639\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0632 \u06CC\u06A9 \u0627\u0644\u06AF\u0648\u06CC \u0627\u0633\u067E\u0631\u06CC\u0646\u062A \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC \u067E\u06CC\u0631\u0648\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. `);
                          } else {
                            return [
                              createTextVNode(" \u062A\u06A9\u0631\u0627\u0631\u0647\u0627\u06CC \u062A\u0648\u0633\u0639\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0632 \u06CC\u06A9 \u0627\u0644\u06AF\u0648\u06CC \u0627\u0633\u067E\u0631\u06CC\u0646\u062A \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC \u067E\u06CC\u0631\u0648\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:calendar-blank-duotone",
                        class: "text-primary-500 mb-2 size-6"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` 3 \u0645\u0627\u0647 `);
                          } else {
                            return [
                              createTextVNode(" 3 \u0645\u0627\u0647 ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0648 \u062A\u0645\u0627\u0645 \u0648\u0638\u0627\u06CC\u0641 \u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u06CC\u062F \u0637\u06CC \u06F3 \u0645\u0627\u0647 \u062A\u06A9\u0645\u06CC\u0644 \u0634\u0648\u062F. `);
                          } else {
                            return [
                              createTextVNode(" \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0648 \u062A\u0645\u0627\u0645 \u0648\u0638\u0627\u06CC\u0641 \u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u06CC\u062F \u0637\u06CC \u06F3 \u0645\u0627\u0647 \u062A\u06A9\u0645\u06CC\u0644 \u0634\u0648\u062F. ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:sketch-logo-duotone",
                        class: "text-primary-500 mb-2 size-6"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h3",
                        size: "sm",
                        weight: "medium"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u062B\u0627\u0628\u062A `);
                          } else {
                            return [
                              createTextVNode(" \u062B\u0627\u0628\u062A ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u0628\u0648\u062F\u062C\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u06CC\u06A9 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062B\u0627\u0628\u062A \u0648 \u062A\u063A\u06CC\u06CC\u0631\u0646\u0627\u067E\u0630\u06CC\u0631 \u0627\u0633\u062A. `);
                          } else {
                            return [
                              createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u0628\u0648\u062F\u062C\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u06CC\u06A9 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062B\u0627\u0628\u062A \u0648 \u062A\u063A\u06CC\u06CC\u0631\u0646\u0627\u067E\u0630\u06CC\u0631 \u0627\u0633\u062A. ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div></div><div${_scopeId2}><h4 class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"${_scopeId2}> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 </h4><div class="grid gap-8 pb-6 sm:grid-cols-2"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(data)?.project.files, (file, index) => {
                        _push3(`<div rounded="lg"${_scopeId2}><div class="flex w-full items-center gap-2"${_scopeId2}><img${ssrRenderAttr("src", file.icon)}${ssrRenderAttr("alt", file.name)} class="max-w-[46px]"${_scopeId2}><div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseHeading, {
                          tag: "h3",
                          size: "sm",
                          weight: "medium"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(file.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(file.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<span${_scopeId3}>${ssrInterpolate(file.size)}</span><span class="px-1 text-base leading-tight"${_scopeId3}> \xB7 </span><span${_scopeId3}>v${ssrInterpolate(file.version)}</span>`);
                            } else {
                              return [
                                createVNode("span", null, toDisplayString(file.size), 1),
                                createVNode("span", { class: "px-1 text-base leading-tight" }, " \xB7 "),
                                createVNode("span", null, "v" + toDisplayString(file.version), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div><div class="ms-auto"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                          rounded: "full",
                          "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644",
                          size: "sm"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_Icon, { name: "lucide:arrow-down" }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_Icon, { name: "lucide:arrow-down" })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div></div></div>`);
                      });
                      _push3(`<!--]--></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col items-center justify-between gap-8 border-b pb-12 sm:flex-row" }, [
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              tag: "h2",
                              size: "2xl",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data)?.project.name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "lg",
                              class: "text-muted-600 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data)?.project.category), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-400 py-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data)?.project.description), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: unref(data)?.project.owner.avatar,
                                  "data-nui-tooltip": `${unref(data)?.project.owner.name} owns this project`
                                }, null, 8, ["src", "data-nui-tooltip"]),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    tag: "h3",
                                    size: "sm",
                                    weight: "medium"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(data)?.project.owner.name), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseParagraph, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode(_component_BaseAvatarGroup, {
                                avatars: unref(data)?.project.team,
                                limit: 3
                              }, null, 8, ["avatars"])
                            ])
                          ]),
                          createVNode("div", { class: "w-full shrink-0 sm:w-72" }, [
                            createVNode("img", {
                              src: unref(data)?.project.image,
                              alt: unref(data)?.project.name,
                              class: "rounded-lg"
                            }, null, 8, ["src", "alt"])
                          ])
                        ]),
                        createVNode("div", { class: "border-muted-200 dark:border-muted-700 grid gap-4 border-b pb-12 sm:grid-cols-4" }, [
                          createVNode("div", null, [
                            createVNode(_component_Icon, {
                              name: "ph:pen-nib-duotone",
                              class: "text-primary-500 mb-2 size-6"
                            }),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0637\u0631\u0627\u062D\u06CC UI/UX ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                lead: "tight",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0637\u0631\u0627\u062D\u06CC \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u06CC\u200C\u0646\u0642\u0635 \u062F\u0631 \u0645\u062D\u062F\u0648\u062F\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0633\u062A. ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_Icon, {
                              name: "ph:timer-duotone",
                              class: "text-primary-500 mb-2 size-6"
                            }),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0627\u0633\u067E\u0631\u06CC\u0646\u062A\u200C\u0647\u0627\u06CC \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                lead: "tight",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u062A\u06A9\u0631\u0627\u0631\u0647\u0627\u06CC \u062A\u0648\u0633\u0639\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0632 \u06CC\u06A9 \u0627\u0644\u06AF\u0648\u06CC \u0627\u0633\u067E\u0631\u06CC\u0646\u062A \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC \u067E\u06CC\u0631\u0648\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_Icon, {
                              name: "ph:calendar-blank-duotone",
                              class: "text-primary-500 mb-2 size-6"
                            }),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 3 \u0645\u0627\u0647 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                lead: "tight",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0648 \u062A\u0645\u0627\u0645 \u0648\u0638\u0627\u06CC\u0641 \u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u06CC\u062F \u0637\u06CC \u06F3 \u0645\u0627\u0647 \u062A\u06A9\u0645\u06CC\u0644 \u0634\u0648\u062F. ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode(_component_Icon, {
                              name: "ph:sketch-logo-duotone",
                              class: "text-primary-500 mb-2 size-6"
                            }),
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h3",
                                size: "sm",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u062B\u0627\u0628\u062A ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "xs",
                                lead: "tight",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u0628\u0648\u062F\u062C\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u06CC\u06A9 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062B\u0627\u0628\u062A \u0648 \u062A\u063A\u06CC\u06CC\u0631\u0646\u0627\u067E\u0630\u06CC\u0631 \u0627\u0633\u062A. ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 "),
                          createVNode("div", { class: "grid gap-8 pb-6 sm:grid-cols-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.files, (file, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                rounded: "lg"
                              }, [
                                createVNode("div", { class: "flex w-full items-center gap-2" }, [
                                  createVNode("img", {
                                    src: file.icon,
                                    alt: file.name,
                                    class: "max-w-[46px]"
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      tag: "h3",
                                      size: "sm",
                                      weight: "medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(file.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_BaseParagraph, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(file.size), 1),
                                        createVNode("span", { class: "px-1 text-base leading-tight" }, " \xB7 "),
                                        createVNode("span", null, "v" + toDisplayString(file.version), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("div", { class: "ms-auto" }, [
                                    createVNode(_component_BaseButtonIcon, {
                                      rounded: "full",
                                      "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644",
                                      size: "sm"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, { name: "lucide:arrow-down" })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"${_scopeId}><div class="space-y-6"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h4 class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"${_scopeId2}> \u0645\u0634\u062A\u0631\u06CC </h4><div class="mb-4 flex items-center gap-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseAvatar, {
                        src: unref(data)?.project.customer.logo,
                        size: "md",
                        "data-nui-tooltip": unref(data)?.project.customer.name,
                        class: "bg-muted-100 dark:bg-muted-700"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseHeading, {
                        tag: "h5",
                        size: "lg",
                        weight: "medium",
                        lead: "none",
                        class: "line-clamp-1"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(data)?.project.customer.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(data)?.project.customer.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(data)?.project.customer.text)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(data)?.project.customer.text), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><div class="w-full space-y-1"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><h4 class="text-muted-700 dark:text-muted-100 font-sans text-sm font-medium"${_scopeId2}> \u067E\u06CC\u0634\u0631\u0641\u062A </h4><div${_scopeId2}><span class="text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(unref(data)?.project.completed)}% </span></div></div>`);
                      _push3(ssrRenderComponent(_component_BaseProgress, {
                        size: "xs",
                        color: "primary",
                        value: unref(data)?.project.completed
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0645\u0634\u062A\u0631\u06CC "),
                        createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            src: unref(data)?.project.customer.logo,
                            size: "md",
                            "data-nui-tooltip": unref(data)?.project.customer.name,
                            class: "bg-muted-100 dark:bg-muted-700"
                          }, null, 8, ["src", "data-nui-tooltip"]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              tag: "h5",
                              size: "lg",
                              weight: "medium",
                              lead: "none",
                              class: "line-clamp-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data)?.project.customer.name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_BaseParagraph, {
                              size: "sm",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(data)?.project.customer.text), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "w-full space-y-1" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("h4", { class: "text-muted-700 dark:text-muted-100 font-sans text-sm font-medium" }, " \u067E\u06CC\u0634\u0631\u0641\u062A "),
                            createVNode("div", null, [
                              createVNode("span", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(unref(data)?.project.completed) + "% ", 1)
                            ])
                          ]),
                          createVNode(_component_BaseProgress, {
                            size: "xs",
                            color: "primary",
                            value: unref(data)?.project.completed
                          }, null, 8, ["value"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h4 class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"${_scopeId2}> \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 </h4><div class="space-y-8"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(data)?.project.tools, (tool) => {
                        _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          src: tool.icon,
                          size: "xs",
                          "data-nui-tooltip": tool.name,
                          class: "bg-muted-100 dark:bg-muted-700"
                        }, null, _parent3, _scopeId2));
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseHeading, {
                          tag: "h5",
                          size: "sm",
                          weight: "medium",
                          lead: "none",
                          class: "line-clamp-1"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(tool.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(tool.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(tool.description)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(tool.description), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 "),
                        createVNode("div", { class: "space-y-8" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.tools, (tool) => {
                            return openBlock(), createBlock("div", {
                              key: tool.name,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_BaseAvatar, {
                                src: tool.icon,
                                size: "xs",
                                "data-nui-tooltip": tool.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h5",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none",
                                  class: "line-clamp-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tool.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(tool.description), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseCard, { class: "p-8" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h4 class="text-muted-400 mb-6 font-sans text-xs font-semibold uppercase"${_scopeId2}> \u0627\u0633\u062A\u06A9\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 </h4><div class="space-y-8"${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(data)?.project.stacks, (stack) => {
                        _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          src: stack.icon,
                          size: "xs",
                          "data-nui-tooltip": stack.name,
                          class: "bg-muted-100 dark:bg-muted-700"
                        }, null, _parent3, _scopeId2));
                        _push3(`<div${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseHeading, {
                          tag: "h5",
                          size: "sm",
                          weight: "medium",
                          lead: "none",
                          class: "line-clamp-1"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(stack.name)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(stack.name), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_BaseParagraph, {
                          size: "xs",
                          class: "text-muted-400"
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(stack.description)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(stack.description), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0627\u0633\u062A\u06A9\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 "),
                        createVNode("div", { class: "space-y-8" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.stacks, (stack) => {
                            return openBlock(), createBlock("div", {
                              key: stack.name,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_BaseAvatar, {
                                src: stack.icon,
                                size: "xs",
                                "data-nui-tooltip": stack.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h5",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none",
                                  class: "line-clamp-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(stack.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(stack.description), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div></div></div>`);
              } else if (activeValue === "team") {
                _push2(`<div${_scopeId}><div class="grid gap-6 sm:grid-cols-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseCard, {
                  "elevated-hover": "",
                  class: "hover:!border-primary-500 relative"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "uiw:star-on",
                              class: "text-primary-500 absolute end-6 top-6"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="flex flex-col items-center p-5 sm:flex-row"${_scopeId3}><div class="flex flex-col gap-3 sm:flex-row"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_BaseAvatar, {
                              src: unref(data)?.project.owner.avatar,
                              "badge-src": unref(data)?.project.owner.badge,
                              text: unref(data)?.project.owner.name,
                              size: "lg",
                              class: "bg-muted-500/20 text-muted-500"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="text-center leading-none sm:text-start"${_scopeId3}><h4 class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium"${_scopeId3}>${ssrInterpolate(unref(data)?.project.owner.name)}</h4><p class="text-muted-400 mb-2 font-sans text-xs"${_scopeId3}> \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 </p><p class="text-muted-500 dark:text-muted-400 font-sans text-xs"${_scopeId3}>${ssrInterpolate(unref(data)?.project.owner.bio)}</p></div></div></div>`);
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: "uiw:star-on",
                                class: "text-primary-500 absolute end-6 top-6"
                              }),
                              createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                                createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: unref(data)?.project.owner.avatar,
                                    "badge-src": unref(data)?.project.owner.badge,
                                    text: unref(data)?.project.owner.name,
                                    size: "lg",
                                    class: "bg-muted-500/20 text-muted-500"
                                  }, null, 8, ["src", "badge-src", "text"]),
                                  createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(unref(data)?.project.owner.name), 1),
                                    createVNode("p", { class: "text-muted-400 mb-2 font-sans text-xs" }, " \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 "),
                                    createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(unref(data)?.project.owner.bio), 1)
                                  ])
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, { to: "#" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "uiw:star-on",
                              class: "text-primary-500 absolute end-6 top-6"
                            }),
                            createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                              createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: unref(data)?.project.owner.avatar,
                                  "badge-src": unref(data)?.project.owner.badge,
                                  text: unref(data)?.project.owner.name,
                                  size: "lg",
                                  class: "bg-muted-500/20 text-muted-500"
                                }, null, 8, ["src", "badge-src", "text"]),
                                createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                  createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(unref(data)?.project.owner.name), 1),
                                  createVNode("p", { class: "text-muted-400 mb-2 font-sans text-xs" }, " \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 "),
                                  createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(unref(data)?.project.owner.bio), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<!--[-->`);
                ssrRenderList(unref(data)?.project.team, (item) => {
                  _push2(ssrRenderComponent(_component_BaseCard, {
                    key: item.id,
                    "elevated-hover": "",
                    class: "hover:!border-primary-500"
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex flex-col items-center p-5 sm:flex-row"${_scopeId3}><div class="flex flex-col gap-3 sm:flex-row"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_BaseAvatar, {
                                src: item.src,
                                "badge-src": item.badge,
                                text: item.text,
                                size: "lg",
                                class: "bg-muted-500/20 text-muted-500"
                              }, null, _parent4, _scopeId3));
                              _push4(`<div class="text-center leading-none sm:text-start"${_scopeId3}><h4 class="text-muted-800 dark:text-muted-100 font-sans text-base font-medium"${_scopeId3}>${ssrInterpolate(item.tooltip)}</h4><p class="text-muted-400 mb-2 font-sans text-xs"${_scopeId3}>${ssrInterpolate(item.role)}</p><p class="text-muted-500 dark:text-muted-400 font-sans text-xs"${_scopeId3}>${ssrInterpolate(item.bio)}</p></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                                  createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                                    createVNode(_component_BaseAvatar, {
                                      src: item.src,
                                      "badge-src": item.badge,
                                      text: item.text,
                                      size: "lg",
                                      class: "bg-muted-500/20 text-muted-500"
                                    }, null, 8, ["src", "badge-src", "text"]),
                                    createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                      createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(item.tooltip), 1),
                                      createVNode("p", { class: "text-muted-400 mb-2 font-sans text-xs" }, toDisplayString(item.role), 1),
                                      createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(item.bio), 1)
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, { to: "#" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                                createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.src,
                                    "badge-src": item.badge,
                                    text: item.text,
                                    size: "lg",
                                    class: "bg-muted-500/20 text-muted-500"
                                  }, null, 8, ["src", "badge-src", "text"]),
                                  createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(item.tooltip), 1),
                                    createVNode("p", { class: "text-muted-400 mb-2 font-sans text-xs" }, toDisplayString(item.role), 1),
                                    createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(item.bio), 1)
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
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--><div${_scopeId}><button type="button" class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"${_scopeId}><span class="block text-center font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"${_scopeId}> \u062F\u0639\u0648\u062A \u0627\u0632 \u06CC\u06A9 \u0639\u0636\u0648 \u062C\u062F\u06CC\u062F </span><span class="text-muted-400 block text-sm"${_scopeId}> \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647 \u0628\u0631\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A\u0646 \u0628\u0647 \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647 \u062E\u0648\u062F \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F </span></span></button></div></div></div>`);
              } else if (activeValue === "tasks") {
                _push2(`<div${_scopeId}><div class="grid gap-6 sm:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(unref(data)?.project.tasks, (item) => {
                  _push2(ssrRenderComponent(_component_BaseCard, {
                    key: item.id,
                    "elevated-hover": "",
                    class: "hover:!border-primary-500 flex cursor-pointer flex-col",
                    onClick: ($event) => openTaskPanel(item.id, unref(data)?.project?.tasks)
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex flex-col items-center p-5 sm:flex-row"${_scopeId2}><div class="flex flex-col gap-3 sm:flex-row"${_scopeId2}>`);
                        if (item.status === 0) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ph:plus-circle-duotone",
                            class: "text-muted-400 size-6 shrink-0"
                          }, null, _parent3, _scopeId2));
                        } else if (item.status === 5) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ph:check-circle-duotone",
                            class: "text-success-500 size-6 shrink-0"
                          }, null, _parent3, _scopeId2));
                        } else if (item.status === 1) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ph:timer-duotone",
                            class: "text-muted-400 size-6 shrink-0"
                          }, null, _parent3, _scopeId2));
                        } else if (item.status === 2 || item.status === 3) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ph:warning-duotone",
                            class: "text-warning-500 size-6 shrink-0"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div class="text-center leading-none sm:text-start"${_scopeId2}><h4 class="text-muted-800 dark:text-muted-100 mb-2 font-sans text-base font-medium leading-tight"${_scopeId2}>${ssrInterpolate(item.name)}</h4><p class="text-muted-400 line-clamp-2 font-sans text-xs"${_scopeId2}>${ssrInterpolate(item.description)}</p></div></div></div><div class="bg-muted-50 dark:bg-muted-700/50 mt-auto flex items-center justify-between rounded-b-lg px-5 py-3"${_scopeId2}><div class="flex max-w-[180px] grow items-center gap-2"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_BaseAvatar, {
                          size: "xxs",
                          src: item.assignee.src,
                          "data-nui-tooltip": item.assignee.tooltip
                        }, null, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_BaseProgress, {
                          value: item.completion,
                          size: "xs",
                          color: item.status === 5 ? "success" : "primary"
                        }, null, _parent3, _scopeId2));
                        _push3(`</div><div class="text-muted-400 flex items-center gap-4"${_scopeId2}><div class="flex items-center gap-1 text-sm"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:paperclip-duotone",
                          class: "size-4"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="font-sans"${_scopeId2}>${ssrInterpolate(item.files.length)}</span></div><div class="flex items-center gap-1 text-sm"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: "ph:chat-circle-duotone",
                          class: "size-4"
                        }, null, _parent3, _scopeId2));
                        _push3(`<span class="font-sans"${_scopeId2}>${ssrInterpolate(item.comments.length)}</span></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                            createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                              item.status === 0 ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "ph:plus-circle-duotone",
                                class: "text-muted-400 size-6 shrink-0"
                              })) : item.status === 5 ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "ph:check-circle-duotone",
                                class: "text-success-500 size-6 shrink-0"
                              })) : item.status === 1 ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "ph:timer-duotone",
                                class: "text-muted-400 size-6 shrink-0"
                              })) : item.status === 2 || item.status === 3 ? (openBlock(), createBlock(_component_Icon, {
                                key: 3,
                                name: "ph:warning-duotone",
                                class: "text-warning-500 size-6 shrink-0"
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                createVNode("h4", { class: "text-muted-800 dark:text-muted-100 mb-2 font-sans text-base font-medium leading-tight" }, toDisplayString(item.name), 1),
                                createVNode("p", { class: "text-muted-400 line-clamp-2 font-sans text-xs" }, toDisplayString(item.description), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/50 mt-auto flex items-center justify-between rounded-b-lg px-5 py-3" }, [
                            createVNode("div", { class: "flex max-w-[180px] grow items-center gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                size: "xxs",
                                src: item.assignee.src,
                                "data-nui-tooltip": item.assignee.tooltip
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode(_component_BaseProgress, {
                                value: item.completion,
                                size: "xs",
                                color: item.status === 5 ? "success" : "primary"
                              }, null, 8, ["value", "color"])
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
                                  name: "ph:chat-circle-duotone",
                                  class: "size-4"
                                }),
                                createVNode("span", { class: "font-sans" }, toDisplayString(item.comments.length), 1)
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--><div${_scopeId}><button type="button" class="border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"${_scopeId}><span class="block text-center font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300"${_scopeId}> \u0627\u06CC\u062C\u0627\u062F \u0648\u0638\u06CC\u0641\u0647 \u062C\u062F\u06CC\u062F </span><span class="text-muted-400 block text-sm"${_scopeId}> \u0627\u0641\u0632\u0648\u062F\u0646 \u0648\u0638\u06CC\u0641\u0647 \u062C\u062F\u06CC\u062F \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 \u0634\u0645\u0627 </span></span></button></div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                activeValue === "overview" ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "grid grid-cols-12 gap-6" }, [
                    createVNode("div", { class: "ltablet:col-span-8 col-span-12 lg:col-span-8" }, [
                      createVNode(_component_BaseCard, { class: "space-y-12 p-10" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex flex-col items-center justify-between gap-8 border-b pb-12 sm:flex-row" }, [
                            createVNode("div", null, [
                              createVNode(_component_BaseHeading, {
                                tag: "h2",
                                size: "2xl",
                                weight: "medium"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(data)?.project.name), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "lg",
                                class: "text-muted-600 dark:text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(data)?.project.category), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseParagraph, {
                                size: "sm",
                                class: "text-muted-400 py-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(data)?.project.description), 1)
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: unref(data)?.project.owner.avatar,
                                    "data-nui-tooltip": `${unref(data)?.project.owner.name} owns this project`
                                  }, null, 8, ["src", "data-nui-tooltip"]),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      tag: "h3",
                                      size: "sm",
                                      weight: "medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(data)?.project.owner.name), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseParagraph, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode(_component_BaseAvatarGroup, {
                                  avatars: unref(data)?.project.team,
                                  limit: 3
                                }, null, 8, ["avatars"])
                              ])
                            ]),
                            createVNode("div", { class: "w-full shrink-0 sm:w-72" }, [
                              createVNode("img", {
                                src: unref(data)?.project.image,
                                alt: unref(data)?.project.name,
                                class: "rounded-lg"
                              }, null, 8, ["src", "alt"])
                            ])
                          ]),
                          createVNode("div", { class: "border-muted-200 dark:border-muted-700 grid gap-4 border-b pb-12 sm:grid-cols-4" }, [
                            createVNode("div", null, [
                              createVNode(_component_Icon, {
                                name: "ph:pen-nib-duotone",
                                class: "text-primary-500 mb-2 size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h3",
                                  size: "sm",
                                  weight: "medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0637\u0631\u0627\u062D\u06CC UI/UX ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  lead: "tight",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0637\u0631\u0627\u062D\u06CC \u06CC\u06A9 \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u06CC\u200C\u0646\u0642\u0635 \u062F\u0631 \u0645\u062D\u062F\u0648\u062F\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0633\u062A. ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_Icon, {
                                name: "ph:timer-duotone",
                                class: "text-primary-500 mb-2 size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h3",
                                  size: "sm",
                                  weight: "medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0627\u0633\u067E\u0631\u06CC\u0646\u062A\u200C\u0647\u0627\u06CC \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  lead: "tight",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u062A\u06A9\u0631\u0627\u0631\u0647\u0627\u06CC \u062A\u0648\u0633\u0639\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0627\u0632 \u06CC\u06A9 \u0627\u0644\u06AF\u0648\u06CC \u0627\u0633\u067E\u0631\u06CC\u0646\u062A \u06F1 \u0647\u0641\u062A\u0647\u200C\u0627\u06CC \u067E\u06CC\u0631\u0648\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_Icon, {
                                name: "ph:calendar-blank-duotone",
                                class: "text-primary-500 mb-2 size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h3",
                                  size: "sm",
                                  weight: "medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 3 \u0645\u0627\u0647 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  lead: "tight",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0648 \u062A\u0645\u0627\u0645 \u0648\u0638\u0627\u06CC\u0641 \u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u06CC\u062F \u0637\u06CC \u06F3 \u0645\u0627\u0647 \u062A\u06A9\u0645\u06CC\u0644 \u0634\u0648\u062F. ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode(_component_Icon, {
                                name: "ph:sketch-logo-duotone",
                                class: "text-primary-500 mb-2 size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h3",
                                  size: "sm",
                                  weight: "medium"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u062B\u0627\u0628\u062A ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseParagraph, {
                                  size: "xs",
                                  lead: "tight",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u0628\u0648\u062F\u062C\u0647 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0631 \u0627\u0633\u0627\u0633 \u06CC\u06A9 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u062B\u0627\u0628\u062A \u0648 \u062A\u063A\u06CC\u06CC\u0631\u0646\u0627\u067E\u0630\u06CC\u0631 \u0627\u0633\u062A. ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 "),
                            createVNode("div", { class: "grid gap-8 pb-6 sm:grid-cols-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.files, (file, index) => {
                                return openBlock(), createBlock("div", {
                                  key: index,
                                  rounded: "lg"
                                }, [
                                  createVNode("div", { class: "flex w-full items-center gap-2" }, [
                                    createVNode("img", {
                                      src: file.icon,
                                      alt: file.name,
                                      class: "max-w-[46px]"
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", null, [
                                      createVNode(_component_BaseHeading, {
                                        tag: "h3",
                                        size: "sm",
                                        weight: "medium"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(file.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_BaseParagraph, {
                                        size: "xs",
                                        class: "text-muted-400"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(file.size), 1),
                                          createVNode("span", { class: "px-1 text-base leading-tight" }, " \xB7 "),
                                          createVNode("span", null, "v" + toDisplayString(file.version), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("div", { class: "ms-auto" }, [
                                      createVNode(_component_BaseButtonIcon, {
                                        rounded: "full",
                                        "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644",
                                        size: "sm"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, { name: "lucide:arrow-down" })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ltablet:col-span-4 col-span-12 lg:col-span-4" }, [
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode(_component_BaseCard, { class: "p-8" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0645\u0634\u062A\u0631\u06CC "),
                            createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                src: unref(data)?.project.customer.logo,
                                size: "md",
                                "data-nui-tooltip": unref(data)?.project.customer.name,
                                class: "bg-muted-100 dark:bg-muted-700"
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  tag: "h5",
                                  size: "lg",
                                  weight: "medium",
                                  lead: "none",
                                  class: "line-clamp-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(data)?.project.customer.name), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseParagraph, {
                                  size: "sm",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(data)?.project.customer.text), 1)
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "w-full space-y-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("h4", { class: "text-muted-700 dark:text-muted-100 font-sans text-sm font-medium" }, " \u067E\u06CC\u0634\u0631\u0641\u062A "),
                                createVNode("div", null, [
                                  createVNode("span", { class: "text-muted-400 font-sans text-sm" }, toDisplayString(unref(data)?.project.completed) + "% ", 1)
                                ])
                              ]),
                              createVNode(_component_BaseProgress, {
                                size: "xs",
                                color: "primary",
                                value: unref(data)?.project.completed
                              }, null, 8, ["value"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseCard, { class: "p-8" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 "),
                            createVNode("div", { class: "space-y-8" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.tools, (tool) => {
                                return openBlock(), createBlock("div", {
                                  key: tool.name,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: tool.icon,
                                    size: "xs",
                                    "data-nui-tooltip": tool.name,
                                    class: "bg-muted-100 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      tag: "h5",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none",
                                      class: "line-clamp-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tool.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_BaseParagraph, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(tool.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseCard, { class: "p-8" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-muted-400 mb-6 font-sans text-xs font-semibold uppercase" }, " \u0627\u0633\u062A\u06A9\u200C\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 "),
                            createVNode("div", { class: "space-y-8" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.stacks, (stack) => {
                                return openBlock(), createBlock("div", {
                                  key: stack.name,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: stack.icon,
                                    size: "xs",
                                    "data-nui-tooltip": stack.name,
                                    class: "bg-muted-100 dark:bg-muted-700"
                                  }, null, 8, ["src", "data-nui-tooltip"]),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      tag: "h5",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none",
                                      class: "line-clamp-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(stack.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_BaseParagraph, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(stack.description), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])) : activeValue === "team" ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "grid gap-6 sm:grid-cols-3" }, [
                    createVNode(_component_BaseCard, {
                      "elevated-hover": "",
                      class: "hover:!border-primary-500 relative"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, { to: "#" }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "uiw:star-on",
                              class: "text-primary-500 absolute end-6 top-6"
                            }),
                            createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                              createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                                createVNode(_component_BaseAvatar, {
                                  src: unref(data)?.project.owner.avatar,
                                  "badge-src": unref(data)?.project.owner.badge,
                                  text: unref(data)?.project.owner.name,
                                  size: "lg",
                                  class: "bg-muted-500/20 text-muted-500"
                                }, null, 8, ["src", "badge-src", "text"]),
                                createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                  createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(unref(data)?.project.owner.name), 1),
                                  createVNode("p", { class: "text-muted-400 mb-2 font-sans text-xs" }, " \u0645\u0627\u0644\u06A9 \u067E\u0631\u0648\u0698\u0647 "),
                                  createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(unref(data)?.project.owner.bio), 1)
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.team, (item) => {
                      return openBlock(), createBlock(_component_BaseCard, {
                        key: item.id,
                        "elevated-hover": "",
                        class: "hover:!border-primary-500"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, { to: "#" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                                createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                                  createVNode(_component_BaseAvatar, {
                                    src: item.src,
                                    "badge-src": item.badge,
                                    text: item.text,
                                    size: "lg",
                                    class: "bg-muted-500/20 text-muted-500"
                                  }, null, 8, ["src", "badge-src", "text"]),
                                  createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-base font-medium" }, toDisplayString(item.tooltip), 1),
                                    createVNode("p", { class: "text-muted-400 mb-2 font-sans text-xs" }, toDisplayString(item.role), 1),
                                    createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(item.bio), 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode("div", null, [
                      createVNode("button", {
                        type: "button",
                        class: "border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"
                      }, [
                        createVNode("span", { class: "block text-center font-sans" }, [
                          createVNode("span", { class: "text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300" }, " \u062F\u0639\u0648\u062A \u0627\u0632 \u06CC\u06A9 \u0639\u0636\u0648 \u062C\u062F\u06CC\u062F "),
                          createVNode("span", { class: "text-muted-400 block text-sm" }, " \u062F\u0639\u0648\u062A\u200C\u0646\u0627\u0645\u0647 \u0628\u0631\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A\u0646 \u0628\u0647 \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647 \u062E\u0648\u062F \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F ")
                        ])
                      ])
                    ])
                  ])
                ])) : activeValue === "tasks" ? (openBlock(), createBlock("div", { key: 2 }, [
                  createVNode("div", { class: "grid gap-6 sm:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.project.tasks, (item) => {
                      return openBlock(), createBlock(_component_BaseCard, {
                        key: item.id,
                        "elevated-hover": "",
                        class: "hover:!border-primary-500 flex cursor-pointer flex-col",
                        onClick: ($event) => openTaskPanel(item.id, unref(data)?.project?.tasks)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col items-center p-5 sm:flex-row" }, [
                            createVNode("div", { class: "flex flex-col gap-3 sm:flex-row" }, [
                              item.status === 0 ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "ph:plus-circle-duotone",
                                class: "text-muted-400 size-6 shrink-0"
                              })) : item.status === 5 ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "ph:check-circle-duotone",
                                class: "text-success-500 size-6 shrink-0"
                              })) : item.status === 1 ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "ph:timer-duotone",
                                class: "text-muted-400 size-6 shrink-0"
                              })) : item.status === 2 || item.status === 3 ? (openBlock(), createBlock(_component_Icon, {
                                key: 3,
                                name: "ph:warning-duotone",
                                class: "text-warning-500 size-6 shrink-0"
                              })) : createCommentVNode("", true),
                              createVNode("div", { class: "text-center leading-none sm:text-start" }, [
                                createVNode("h4", { class: "text-muted-800 dark:text-muted-100 mb-2 font-sans text-base font-medium leading-tight" }, toDisplayString(item.name), 1),
                                createVNode("p", { class: "text-muted-400 line-clamp-2 font-sans text-xs" }, toDisplayString(item.description), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/50 mt-auto flex items-center justify-between rounded-b-lg px-5 py-3" }, [
                            createVNode("div", { class: "flex max-w-[180px] grow items-center gap-2" }, [
                              createVNode(_component_BaseAvatar, {
                                size: "xxs",
                                src: item.assignee.src,
                                "data-nui-tooltip": item.assignee.tooltip
                              }, null, 8, ["src", "data-nui-tooltip"]),
                              createVNode(_component_BaseProgress, {
                                value: item.completion,
                                size: "xs",
                                color: item.status === 5 ? "success" : "primary"
                              }, null, 8, ["value", "color"])
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
                                  name: "ph:chat-circle-duotone",
                                  class: "size-4"
                                }),
                                createVNode("span", { class: "font-sans" }, toDisplayString(item.comments.length), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128)),
                    createVNode("div", null, [
                      createVNode("button", {
                        type: "button",
                        class: "border-muted-300 dark:border-muted-800 hover:border-primary-500 dark:hover:border-primary-500 group flex size-full items-center justify-center gap-2 rounded-lg border-2 border-dashed p-6 transition-colors duration-300"
                      }, [
                        createVNode("span", { class: "block text-center font-sans" }, [
                          createVNode("span", { class: "text-muted-800 dark:text-muted-100 group-hover:text-primary-500 dark:group-hover:text-primary-500 block transition-colors duration-300" }, " \u0627\u06CC\u062C\u0627\u062F \u0648\u0638\u06CC\u0641\u0647 \u062C\u062F\u06CC\u062F "),
                          createVNode("span", { class: "text-muted-400 block text-sm" }, " \u0627\u0641\u0632\u0648\u062F\u0646 \u0648\u0638\u06CC\u0641\u0647 \u062C\u062F\u06CC\u062F \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 \u0634\u0645\u0627 ")
                        ])
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/projects/details/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
