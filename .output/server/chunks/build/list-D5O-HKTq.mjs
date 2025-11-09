import { h as _sfc_main$u, b as _sfc_main$w, e as _sfc_main$e, f as _sfc_main$C, c as _sfc_main$v, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$9 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$a } from './BaseButtonIcon-B-NRPykg.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, ref, unref, openBlock, createBlock, Fragment, renderList, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0, a as _sfc_main$b } from './BaseDropdownItem-vorQzQkQ.mjs';
import { _ as __nuxt_component_3 } from './BaseDropdownDivider-BH82hV0a.mjs';
import { _ as _sfc_main$7 } from './DemoTodoListCompact-zuvFev_H.mjs';
import { _ as __nuxt_component_1 } from './BaseCheckboxAnimated-D-Y3gcBn.mjs';
import { _ as _sfc_main$8 } from './DemoCommentListCompact-BSBEvWQU.mjs';
import { _ as _sfc_main$c } from './BaseIconBox-Cgm-LP3M.mjs';
import { g as getRandomColor } from './colors-DmsKZ5uA.mjs';
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DemoUserList",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const users = [
      {
        id: 0,
        picture: "/img/avatars/16.svg",
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
        position: "\u062A\u062D\u0644\u06CC\u0644\u200C\u06AF\u0631 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
        progress: 18
      },
      {
        id: 1,
        picture: "/img/avatars/10.svg",
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
        position: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        progress: 22
      },
      {
        id: 2,
        picture: "/img/avatars/6.svg",
        name: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
        position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        progress: -12
      },
      {
        id: 3,
        picture: "/img/avatars/12.svg",
        name: "\u0622\u0645\u0644\u06CC\u0627 \u0634\u0641\u0631\u062F",
        position: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        progress: 32
      },
      {
        id: 4,
        picture: "/img/avatars/11.svg",
        name: "\u062F\u0627\u0631\u06CC\u0644 \u0632\u0627\u0646\u0648\u06A9",
        position: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
        progress: -4
      },
      {
        id: 5,
        picture: "/img/avatars/5.svg",
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
        position: "\u0637\u0631\u0627\u062D UI/UX",
        progress: 32
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$9;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$a;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><!--[-->`);
      ssrRenderList(users, (user) => {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: user.picture,
          size: "sm",
          rounded: props.rounded
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "sm",
          weight: "medium",
          lead: "tight",
          class: "text-muted-800 dark:text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(user.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(user.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(user.position)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(user.position), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center justify-end gap-4">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          weight: "semibold",
          class: user.progress > 0 ? "text-success-500" : "text-danger-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(user.progress)}%</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(user.progress) + "%", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          to: "#",
          muted: "",
          small: "",
          rounded: props.rounded
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:chevron-right",
                class: "rtl:rotate-180 size-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:chevron-right",
                  class: "rtl:rotate-180 size-4"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoUserList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoTabbedContent",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    rounded: { default: "sm" },
    labels: {}
  },
  setup(__props) {
    const props = __props;
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex items-center justify-between">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        if (props.title) {
          _push(ssrRenderComponent(_component_BaseHeading, {
            as: "h3",
            size: "md",
            weight: "semibold",
            lead: "tight",
            class: "text-muted-800 dark:text-white"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(props.title)}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(props.title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div><div class="${ssrRenderClass([[
        props.rounded === "sm" ? "rounded-md" : "",
        props.rounded === "md" ? "rounded-lg" : "",
        props.rounded === "lg" ? "rounded-xl" : "",
        props.rounded === "full" ? "rounded-full" : ""
      ], "bg-muted-100 dark:bg-muted-700 relative flex h-9 w-40"])}"><button type="button" class="${ssrRenderClass([[
        unref(activeTab) === "tab-1" ? "text-white" : "text-muted-400",
        props.rounded === "sm" ? "rounded-md" : "",
        props.rounded === "md" ? "rounded-lg" : "",
        props.rounded === "lg" ? "rounded-xl" : "",
        props.rounded === "full" ? "rounded-full" : ""
      ], "nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"])}">${ssrInterpolate(props.labels[0])}</button><button type="button" class="${ssrRenderClass([[
        unref(activeTab) === "tab-2" ? "text-white" : "text-muted-400",
        props.rounded === "sm" ? "rounded-md" : "",
        props.rounded === "md" ? "rounded-lg" : "",
        props.rounded === "lg" ? "rounded-xl" : "",
        props.rounded === "full" ? "rounded-full" : ""
      ], "nui-focus relative z-10 flex flex-1 cursor-pointer items-center justify-center font-sans text-sm transition-colors duration-300"])}">${ssrInterpolate(props.labels[1])}</button><div class="${ssrRenderClass([[
        unref(activeTab) === "tab-1" ? "ms-0" : "ms-[50%]",
        props.rounded === "sm" ? "rounded-md" : "",
        props.rounded === "md" ? "rounded-lg" : "",
        props.rounded === "lg" ? "rounded-xl" : "",
        props.rounded === "full" ? "rounded-full" : ""
      ], "bg-primary-500 absolute start-0 top-0 h-full w-1/2 transition-all duration-300 ease-in-out"])}"></div></div></div></div><div>`);
      if (unref(activeTab) === "tab-1") {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "tab-1", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(activeTab) === "tab-2") {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "tab-2", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTabbedContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoFileListTabbed",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const recentFiles = [
      {
        id: 0,
        icon: "/img/icons/files/zip-format.svg",
        name: "theme.zip",
        type: "\u067E\u0648\u0634\u0647 \u0641\u0634\u0631\u062F\u0647\u200C\u0634\u062F\u0647"
      },
      {
        id: 1,
        icon: "/img/icons/files/doc-2.svg",
        name: "project_outline.doc",
        type: "\u0641\u0627\u06CC\u0644 \u0648\u0631\u062F \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A"
      },
      {
        id: 2,
        icon: "/img/icons/files/pdf.svg",
        name: "requirements_v3.pdf",
        type: "\u0641\u0627\u06CC\u0644 PDF"
      },
      {
        id: 3,
        icon: "/img/icons/files/sheet.svg",
        name: "project_budget.xsls",
        type: "\u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644 \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A"
      },
      {
        id: 4,
        icon: "/img/icons/files/ai.svg",
        name: "wireframes.ai",
        type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
      },
      {
        id: 5,
        icon: "/img/icons/files/sheet.svg",
        name: "invoice_recap.xsls",
        type: "\u0641\u0627\u06CC\u0644 \u0627\u06A9\u0633\u0644 \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A"
      }
    ];
    const savedFiles = [
      {
        id: 6,
        icon: "/img/icons/files/ai.svg",
        name: "header.ai",
        type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
      },
      {
        id: 7,
        icon: "/img/icons/files/ai.svg",
        name: "section.ai",
        type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
      },
      {
        id: 8,
        icon: "/img/icons/files/ai.svg",
        name: "footer.ai",
        type: "\u0641\u0627\u06CC\u0644 \u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631"
      },
      {
        id: 9,
        icon: "/img/icons/files/zip-format.svg",
        name: "theme_assets.zip",
        type: "\u067E\u0648\u0634\u0647 \u0641\u0634\u0631\u062F\u0647\u200C\u0634\u062F\u0647"
      },
      {
        id: 10,
        icon: "/img/icons/files/doc-2.svg",
        name: "team_structure.doc",
        type: "\u0641\u0627\u06CC\u0644 \u0648\u0631\u062F \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A"
      },
      {
        id: 11,
        icon: "/img/icons/files/doc-2.svg",
        name: "meeting_notes.doc",
        type: "\u0641\u0627\u06CC\u0644 \u0648\u0631\u062F \u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoTabbedContent = _sfc_main$5;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseDropdown = __nuxt_component_0;
      const _component_BaseDropdownItem = _sfc_main$b;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseDropdownDivider = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoTabbedContent, {
        title: "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
        labels: ["\u0627\u062E\u06CC\u0631", "\u0630\u062E\u06CC\u0631\u0647 \u0634\u062F\u0647"],
        rounded: props.rounded
      }, {
        "tab-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(recentFiles, (file) => {
              _push2(`<div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", file.icon)} class="size-10"${ssrRenderAttr("alt", file.name)}${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.name), 1)
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
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.type)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseDropdown, {
                variant: "context",
                label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                placement: "bottom-end",
                size: "md",
                class: "z-20",
                rounded: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                      text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-down-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                      text: "\u0622\u067E\u0644\u0648\u062F \u0646\u0633\u062E\u0647 \u062C\u062F\u06CC\u062F"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-up-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0645\u062C\u0648\u0632\u0647\u0627",
                      text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:lock-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:lock-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                      text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:share-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062D\u0630\u0641",
                      text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:trash-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                        text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                        text: "\u0622\u067E\u0644\u0648\u062F \u0646\u0633\u062E\u0647 \u062C\u062F\u06CC\u062F"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
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
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                        text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062D\u0630\u0641",
                        text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
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
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(recentFiles, (file) => {
                  return createVNode("div", {
                    key: file.id,
                    class: "flex items-center gap-2"
                  }, [
                    createVNode("img", {
                      src: file.icon,
                      class: "size-10",
                      alt: file.name
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.type), 1)
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
                            title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                            text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-down-duotone",
                                class: "me-2 block size-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                            text: "\u0622\u067E\u0644\u0648\u062F \u0646\u0633\u062E\u0647 \u062C\u062F\u06CC\u062F"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-up-duotone",
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
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                            text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:share-duotone",
                                class: "me-2 block size-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownDivider),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u062D\u0630\u0641",
                            text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
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
                }), 64))
              ])
            ];
          }
        }),
        "tab-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(savedFiles, (file) => {
              _push2(`<div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", file.icon)} class="size-10"${ssrRenderAttr("alt", file.name)}${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.name), 1)
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
                    _push3(`<span${_scopeId2}>${ssrInterpolate(file.type)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(file.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseDropdown, {
                variant: "context",
                label: "\u0645\u0646\u0648\u06CC \u06A9\u0634\u0648\u06CC\u06CC",
                placement: "bottom-end",
                size: "md",
                rounded: "lg",
                class: "z-20"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                      text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-down-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                      text: "\u0622\u067E\u0644\u0648\u062F \u0646\u0633\u062E\u0647 \u062C\u062F\u06CC\u062F"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:cloud-arrow-up-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0645\u062C\u0648\u0632\u0647\u0627",
                      text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062C\u0648\u0632\u0647\u0627"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:lock-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:lock-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                      text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "ph:share-duotone",
                              class: "me-2 block size-5"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownDivider, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_BaseDropdownItem, {
                      to: "#",
                      title: "\u062D\u0630\u0641",
                      text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                    }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "ph:trash-duotone",
                            class: "me-2 block size-5"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                        text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-down-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                        text: "\u0622\u067E\u0644\u0648\u062F \u0646\u0633\u062E\u0647 \u062C\u062F\u06CC\u062F"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:cloud-arrow-up-duotone",
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
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                        text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                      }, {
                        start: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "ph:share-duotone",
                            class: "me-2 block size-5"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseDropdownDivider),
                      createVNode(_component_BaseDropdownItem, {
                        to: "#",
                        title: "\u062D\u0630\u0641",
                        text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
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
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(savedFiles, (file) => {
                  return createVNode("div", {
                    key: file.id,
                    class: "flex items-center gap-2"
                  }, [
                    createVNode("img", {
                      src: file.icon,
                      class: "size-10",
                      alt: file.name
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h3",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-muted-100"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseText, {
                        size: "xs",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(file.type), 1)
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
                        rounded: "lg",
                        class: "z-20"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u062F\u0627\u0646\u0644\u0648\u062F",
                            text: "\u062F\u0627\u0646\u0644\u0648\u062F \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-down-duotone",
                                class: "me-2 block size-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                            text: "\u0622\u067E\u0644\u0648\u062F \u0646\u0633\u062E\u0647 \u062C\u062F\u06CC\u062F"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:cloud-arrow-up-duotone",
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
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC",
                            text: "\u0627\u0634\u062A\u0631\u0627\u06A9\u200C\u06AF\u0630\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
                          }, {
                            start: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "ph:share-duotone",
                                class: "me-2 block size-5"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseDropdownDivider),
                          createVNode(_component_BaseDropdownItem, {
                            to: "#",
                            title: "\u062D\u0630\u0641",
                            text: "\u062D\u0630\u0641 \u0627\u06CC\u0646 \u0641\u0627\u06CC\u0644"
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
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoFileListTabbed.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoTodoListTabbed",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" },
    color: { default: "success" }
  },
  setup(__props) {
    const props = __props;
    const todos = [
      {
        id: 0,
        title: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0622\u0642\u0627\u06CC \u0645\u0627\u0631\u06A9\u0633\u062A\u0631\u0648\u0645",
        description: "\u0628\u0631\u0631\u0633\u06CC \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645\u200C\u0647\u0627\u06CC \u0627\u0648\u0644\u06CC\u0647 \u067E\u0631\u0648\u0698\u0647",
        completed: true
      },
      {
        id: 1,
        title: "\u067E\u0627\u06CC\u0627\u0646 \u0648\u0627\u06CC\u0631\u0641\u0631\u06CC\u0645\u200C\u0647\u0627",
        description: "\u0627\u0639\u0645\u0627\u0644 \u062A\u0645\u0627\u0645 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0634\u062F\u0647 \u0648 \u0627\u0646\u062A\u0634\u0627\u0631",
        completed: false
      },
      {
        id: 2,
        title: "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0628\u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u0632\u0645\u0627\u0646\u06CC",
        description: "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0628\u0631\u06AF\u0647\u200C\u0647\u0627\u06CC \u0632\u0645\u0627\u0646\u06CC \u062A\u0645\u0627\u0645 \u062A\u06CC\u0645",
        completed: false
      },
      {
        id: 3,
        title: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u067E\u0631\u062F\u0627\u062E\u062A",
        description: "\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06A9\u062A\u0648\u0631 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0634\u062A\u0631\u06CC",
        completed: false
      },
      {
        id: 4,
        title: "\u062A\u0627\u06CC\u06CC\u062F \u0645\u0624\u0644\u0641\u0647\u200C\u0647\u0627",
        description: "\u0628\u0631\u0631\u0633\u06CC \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u06A9\u0627\u0645\u0644",
        completed: true
      }
    ];
    const tasks = ref(["Option 0", "Option 1", "Option 2"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoTabbedContent = _sfc_main$5;
      const _component_BaseCheckboxAnimated = __nuxt_component_1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoTabbedContent, {
        title: "\u0648\u0638\u0627\u06CC\u0641",
        labels: ["\u0647\u0645\u0647", "\u0645\u0627\u0644 \u0645\u0646"],
        rounded: props.rounded
      }, {
        "tab-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(todos, (task) => {
              _push2(`<label class="text-muted-300 flex cursor-pointer items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
                modelValue: unref(tasks),
                "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                value: `Option ${task.id}`,
                color: "success"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(task.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(task.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(task.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></label>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(todos, (task) => {
                  return createVNode("label", {
                    key: task.id,
                    class: "text-muted-300 flex cursor-pointer items-center gap-3"
                  }, [
                    createVNode(_component_BaseCheckboxAnimated, {
                      modelValue: unref(tasks),
                      "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                      value: `Option ${task.id}`,
                      color: "success"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(task.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        "tab-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-2 space-y-6"${_scopeId}><!--[-->`);
            ssrRenderList(todos, (task) => {
              _push2(`<label class="text-muted-300 flex cursor-pointer items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseCheckboxAnimated, {
                modelValue: unref(tasks),
                "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                value: `Option ${task.id}`,
                classes: {
                  label: [
                    props.color === "success" && "text-success-500",
                    props.color === "info" && "text-info-500",
                    props.color === "warning" && "text-warning-500",
                    props.color === "danger" && "text-danger-500",
                    props.color === "primary" && "text-primary-500",
                    props.color === "lime" && "text-lime-500",
                    props.color === "sky" && "text-sky-500"
                  ].join("")
                }
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "light",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(task.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(task.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(task.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></label>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-2 space-y-6" }, [
                (openBlock(), createBlock(Fragment, null, renderList(todos, (task) => {
                  return createVNode("label", {
                    key: task.id,
                    class: "text-muted-300 flex cursor-pointer items-center gap-3"
                  }, [
                    createVNode(_component_BaseCheckboxAnimated, {
                      modelValue: unref(tasks),
                      "onUpdate:modelValue": ($event) => isRef(tasks) ? tasks.value = $event : null,
                      value: `Option ${task.id}`,
                      classes: {
                        label: [
                          props.color === "success" && "text-success-500",
                          props.color === "info" && "text-info-500",
                          props.color === "warning" && "text-warning-500",
                          props.color === "danger" && "text-danger-500",
                          props.color === "primary" && "text-primary-500",
                          props.color === "lime" && "text-lime-500",
                          props.color === "sky" && "text-sky-500"
                        ].join("")
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "classes"]),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(task.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, toDisplayString(task.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTodoListTabbed.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoTopicListCompact",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const topics = [
      {
        id: 0,
        title: "\u0627\u06A9\u0648\u0644\u0648\u0698\u06CC",
        icon: "ph:leaf-duotone",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0648 \u0686\u06CC\u0632 \u06CC\u06A9 \u0686\u06CC\u0632 \u0631\u0627 \u062A\u0634\u06A9\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F."
      },
      {
        id: 1,
        title: "\u0644\u062C\u0633\u062A\u06CC\u06A9",
        icon: "ph:boat-duotone",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A."
      },
      {
        id: 2,
        title: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
        icon: "ph:suitcase-duotone",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0648 \u0686\u06CC\u0632 \u06CC\u06A9 \u0686\u06CC\u0632 \u0631\u0627 \u062A\u0634\u06A9\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F."
      },
      {
        id: 3,
        title: "\u0641\u06CC\u0644\u0645\u200C\u0647\u0627",
        icon: "ph:popcorn-duotone",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0648 \u0686\u06CC\u0632 \u06CC\u06A9 \u0686\u06CC\u0632 \u0631\u0627 \u062A\u0634\u06A9\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseIconBox = _sfc_main$c;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(topics, (topic) => {
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseIconBox, {
          rounded: props.rounded,
          size: "sm",
          color: "none",
          class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: topic.icon,
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: topic.icon,
                  class: "size-5"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(topic.title)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(topic.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(topic.content)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(topic.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTopicListCompact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoTimelineCompact",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const items = [
      {
        icon: "ph:phone-duotone",
        image: void 0,
        title: "\u0628\u0647 \u062F\u0646\u06CC \u062F\u0631 \u06A9\u0644\u0628\u06CC \u0632\u0646\u06AF \u0628\u0632\u0646",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F1:\u06F3\u06F0 \u0642.\u0638"
      },
      {
        icon: void 0,
        image: "/img/avatars/3.svg",
        title: "\u062C\u0644\u0633\u0647 \u0628\u0627 \u0645\u0627\u06CC\u06A9",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F3:\u06F0\u06F0"
      },
      {
        icon: "ph:chat-circle-duotone",
        image: void 0,
        title: "\u067E\u0627\u0633\u062E \u0628\u0647 \u067E\u06CC\u0627\u0645\u200C\u0647\u0627\u06CC \u0622\u0646\u06CC",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F3:\u06F4\u06F5"
      },
      {
        icon: void 0,
        image: "/img/avatars/16.svg",
        title: "\u062C\u0644\u0633\u0647 \u0628\u0627 \u0647\u0631\u0645\u0627\u0646",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u06F3:\u06F0\u06F0 \u0628.\u0638"
      },
      {
        icon: "ph:envelope-duotone",
        image: void 0,
        title: "\u0627\u0631\u0633\u0627\u0644 \u06A9\u0645\u067E\u06CC\u0646 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F5:\u06F3\u06F0"
      },
      {
        icon: "ph:selection-all-duotone",
        image: void 0,
        title: "\u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A \u06F1\u06F6:\u06F3\u06F0"
      },
      {
        icon: "ph:note-duotone",
        image: void 0,
        title: "\u0646\u0648\u0634\u062A\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0631\u0627\u06CC \u0627\u0646\u062F\u06CC",
        description: "\u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F8:\u06F3\u06F0"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100%_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"><div class="${ssrRenderClass([[
          props.shape === "rounded" ? "rounded-md" : "",
          props.shape === "curved" ? "rounded-xl" : "",
          props.shape === "full" ? "rounded-full" : ""
        ], "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']"])}">`);
        if (item.icon) {
          _push(ssrRenderComponent(_component_Icon, {
            name: item.icon,
            class: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.image) {
          _push(`<img${ssrRenderAttr("src", item.image)} class="${ssrRenderClass([[
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : "",
            props.shape === "full" ? "rounded-full" : ""
          ], "max-w-full object-cover shadow-sm dark:border-transparent"])}"${ssrRenderAttr("alt", item.title)}>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="ms-10"><h6 class="font-heading text-muted-800 text-sm font-medium dark:text-white">${ssrInterpolate(item.title)}</h6><p class="text-muted-400 font-sans text-xs">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoTimelineCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButton = _sfc_main$e;
      const _component_DemoUserList = _sfc_main$6;
      const _component_DemoFileListTabbed = _sfc_main$4;
      const _component_DemoTodoListCompact = _sfc_main$7;
      const _component_DemoTodoListTabbed = _sfc_main$3;
      const _component_DemoCommentListCompact = _sfc_main$8;
      const _component_DemoTopicListCompact = _sfc_main$2;
      const _component_DemoTimelineCompact = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ptablet:grid-cols-2 grid gap-6 sm:grid-cols-3" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0639\u0636\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0639\u0636\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoUserList, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0639\u0636\u0627")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoUserList)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0639\u0636\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0639\u0636\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoUserList, { rounded: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0639\u0636\u0627")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoUserList, { rounded: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoFileListTabbed, { rounded: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoFileListTabbed, { rounded: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTodoListCompact, { color: "lime" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTodoListCompact, { color: "lime" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTodoListCompact, { color: "sky" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTodoListCompact, { color: "sky" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoTodoListTabbed, {
              rounded: "sm",
              color: "primary"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoTodoListTabbed, {
                rounded: "sm",
                color: "primary"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0622\u062E\u0631\u06CC\u0646 \u0646\u0638\u0631\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0622\u062E\u0631\u06CC\u0646 \u0646\u0638\u0631\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoCommentListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0622\u062E\u0631\u06CC\u0646 \u0646\u0638\u0631\u0627\u062A")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoCommentListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0648\u0636\u0648\u0639\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0648\u0636\u0648\u0639\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTopicListCompact, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0645\u0648\u0636\u0648\u0639\u0627\u062A")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTopicListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0648\u0636\u0648\u0639\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0648\u0636\u0648\u0639\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTopicListCompact, { rounded: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0645\u0648\u0636\u0648\u0639\u0627\u062A")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTopicListCompact, { rounded: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTimelineCompact, { rounded: "sm" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTimelineCompact, { rounded: "sm" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTimelineCompact, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTimelineCompact, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoTimelineCompact, { rounded: "full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u062C\u062F\u0648\u0644 \u0632\u0645\u0627\u0646\u06CC")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoTimelineCompact, { rounded: "full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/widgets/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
