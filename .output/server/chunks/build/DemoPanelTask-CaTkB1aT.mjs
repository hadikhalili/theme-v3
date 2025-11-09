import { t as usePanels, p as onKeyStroke, a as __nuxt_component_2, b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$4 } from './BaseProgress-Bi06w8MA.mjs';
import { _ as _sfc_main$5 } from './BaseCheckbox-CfxLaouc.mjs';
import { _ as _sfc_main$6 } from './BaseTextarea-BGdIJfqV.mjs';
import { _ as _sfc_main$7 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, isRef, toValue, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { FocusTrap } from '@headlessui/vue';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelTask",
  __ssrInlineRender: true,
  props: {
    task: { default: void 0 },
    project: { default: void 0 }
  },
  emits: ["message"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { close } = usePanels();
    onKeyStroke("Escape", close);
    const commentArea = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseProgress = _sfc_main$4;
      const _component_BaseCheckbox = _sfc_main$5;
      const _component_BaseTextarea = _sfc_main$6;
      const _component_BaseButtonAction = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FocusTrap), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-16 w-full items-center justify-between px-10"${_scopeId}><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"${_scopeId}> \u062C\u0632\u0626\u06CC\u0627\u062A \u0648\u0638\u06CC\u0641\u0647 </h2><button type="button" class="text-muted-400 nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:chevron-right",
              class: "size-6 rtl:rotate-180"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="nui-slimscroll relative h-[calc(100vh_-_64px)] w-full overflow-y-auto px-10 py-5"${_scopeId}><div${_scopeId}><div class="mb-4 flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "full",
              "data-nui-tooltip": "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0648\u0638\u06CC\u0641\u0647",
              "data-nui-tooltip-position": "end",
              size: "sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "lucide:edit-3" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "lucide:edit-3" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> \u0645\u0631\u0648\u0631 \u06A9\u0644\u06CC </h4></div>`);
            _push2(ssrRenderComponent(_component_BaseTag, {
              rounded: "full",
              variant: "pastel",
              color: "muted",
              class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center gap-1 py-0 text-xs font-semibold"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="${ssrRenderClass([[
                    props.task?.status === 0 && "bg-info-500",
                    props.task?.status === 1 && "bg-primary-500",
                    props.task?.status === 2 && "bg-danger-500",
                    props.task?.status === 3 && "bg-warning-500",
                    props.task?.status === 4 && "bg-yellow-400",
                    props.task?.status === 5 && "bg-success-500"
                  ], "block size-2 rounded-full"])}"${_scopeId2}></span><span${_scopeId2}>\u062A\u0633\u06A9 \u0634\u0645\u0627\u0631\u0647 ${ssrInterpolate(props.task?.id)}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: ["block size-2 rounded-full", [
                        props.task?.status === 0 && "bg-info-500",
                        props.task?.status === 1 && "bg-primary-500",
                        props.task?.status === 2 && "bg-danger-500",
                        props.task?.status === 3 && "bg-warning-500",
                        props.task?.status === 4 && "bg-yellow-400",
                        props.task?.status === 5 && "bg-success-500"
                      ]]
                    }, null, 2),
                    createVNode("span", null, "\u062A\u0633\u06A9 \u0634\u0645\u0627\u0631\u0647 " + toDisplayString(props.task?.id), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="border-muted-200 dark:border-muted-700 border-b pb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium",
              class: "mb-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.task?.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.task?.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              class: "text-muted-500 dark:text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.task?.description)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.task?.description), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-4 flex items-center justify-between"${_scopeId}><div class="flex shrink-0 items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: props.task?.assignee.src,
              size: "xs",
              class: "shrink-0"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u062E\u0635\u06CC\u0635 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0628\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u062E\u0635\u06CC\u0635 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0628\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.task?.assignee.tooltip)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.task?.assignee.tooltip), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="max-w-[120px] grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400 mb-2",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.task?.completion)}% \u062A\u06A9\u0645\u06CC\u0644 `);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.task?.completion) + "% \u062A\u06A9\u0645\u06CC\u0644 ", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseProgress, {
              value: props.task?.completion,
              size: "xs",
              color: props.task?.status === 5 ? "success" : "primary"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="border-muted-200 dark:border-muted-700 border-b py-6"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> \u0686\u06A9 \u0644\u06CC\u0633\u062A </h4>`);
            if (props.task?.checklist.length === 0) {
              _push2(`<div${_scopeId}><div class="text-muted-400 mt-10 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:file-thin",
                class: "size-10"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mb-6 mt-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "light",
                class: "mb-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0647\u06CC\u0686 \u0686\u06A9\u200C\u0644\u06CC\u0633\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0647\u06CC\u0686 \u0686\u06A9\u200C\u0644\u06CC\u0633\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="mt-6 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(props.task?.checklist, (item, index) => {
                _push2(`<div rounded="lg"${_scopeId}><div class="flex w-full items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseCheckbox, {
                  modelValue: item.done,
                  "onUpdate:modelValue": ($event) => item.done = $event,
                  class: "shrink-0",
                  color: "primary",
                  label: item.text,
                  classes: {
                    wrapper: "!items-start max-w-[240px]",
                    label: "text-[0.85rem] text-muted-500 dark:text-muted-300 leading-snug"
                  }
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div><div class="border-muted-200 dark:border-muted-700 border-b py-6"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A \u0634\u062F\u0647 (${ssrInterpolate(props.task?.files.length)}) </h4>`);
            if (props.task?.files.length === 0) {
              _push2(`<div${_scopeId}><div class="text-muted-400 mt-10 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:file-thin",
                class: "size-10"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mb-6 mt-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "light",
                class: "mb-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0641\u0627\u06CC\u0644\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u0648\u0633\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0641\u0627\u06CC\u0644\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u0648\u0633\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="mt-6 space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(props.task?.files, (file, index) => {
                _push2(`<div rounded="lg"${_scopeId}><div class="flex w-full items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", file.icon)}${ssrRenderAttr("alt", file.name)} class="max-w-[40px]"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  tag: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(file.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(file.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(file.size)}</span><span class="px-1 text-base leading-tight"${_scopeId2}> \xB7 </span><span${_scopeId2}>v${ssrInterpolate(file.version)}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(file.size), 1),
                        createVNode("span", { class: "px-1 text-base leading-tight" }, " \xB7 "),
                        createVNode("span", null, "v" + toDisplayString(file.version), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div><div class="ms-auto"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                  rounded: "full",
                  "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644",
                  size: "sm"
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
                _push2(`</div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div><div class="py-6"${_scopeId}><h4 class="text-muted-400 font-sans text-xs font-semibold uppercase"${_scopeId}> \u0646\u0638\u0631\u0627\u062A (${ssrInterpolate(props.task?.comments.length)}) </h4>`);
            if (props.task?.comments.length === 0) {
              _push2(`<div${_scopeId}><div class="text-muted-400 mt-10 flex items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:chat-circle-thin",
                class: "size-10"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="mb-6 mt-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "light",
                class: "mb-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                lead: "tight",
                class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0646\u0638\u0631\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0646\u0638\u0631\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="mt-6 flex flex-col gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(props.task?.comments, (comment, c) => {
                _push2(`<div class="flex gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: comment.author.picture,
                  size: "xs"
                }, null, _parent2, _scopeId));
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h3",
                  size: "sm",
                  weight: "medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(comment.author.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(comment.author.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseText, {
                  size: "xs",
                  class: "text-muted-400 mb-2",
                  lead: "none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 ${ssrInterpolate(comment.author.posted)}`);
                    } else {
                      return [
                        createTextVNode(" \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 " + toDisplayString(comment.author.posted), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(comment.text)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(comment.text), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseTextarea, {
              modelValue: unref(commentArea),
              "onUpdate:modelValue": ($event) => isRef(commentArea) ? commentArea.value = $event : null,
              rounded: "sm",
              placeholder: "\u0646\u0648\u0634\u062A\u0646 \u0646\u0638\u0631...",
              rows: 4,
              addon: ""
            }, {
              addon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/2.svg",
                    class: "me-1",
                    size: "xs"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "semibold",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0645\u0627\u06CC\u0627 `);
                      } else {
                        return [
                          createTextVNode(" \u0645\u0627\u06CC\u0627 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonAction, {
                    color: "primary",
                    onClick: ($event) => emits("message", { from: "maya", comment: ("toValue" in _ctx ? _ctx.toValue : unref(toValue))(unref(commentArea)) })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u0646\u062A\u0634\u0627\u0631 `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u0646\u062A\u0634\u0627\u0631 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/2.svg",
                        class: "me-1",
                        size: "xs"
                      }),
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "semibold",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0645\u0627\u06CC\u0627 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_BaseButtonAction, {
                        color: "primary",
                        onClick: ($event) => emits("message", { from: "maya", comment: ("toValue" in _ctx ? _ctx.toValue : unref(toValue))(unref(commentArea)) })
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0646\u062A\u0634\u0627\u0631 ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-16 w-full items-center justify-between px-10" }, [
                createVNode("h2", { class: "font-heading text-muted-700 text-lg font-semibold dark:text-white" }, " \u062C\u0632\u0626\u06CC\u0627\u062A \u0648\u0638\u06CC\u0641\u0647 "),
                createVNode("button", {
                  type: "button",
                  class: "text-muted-400 nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white",
                  onClick: unref(close)
                }, [
                  createVNode(_component_Icon, {
                    name: "feather:chevron-right",
                    class: "size-6 rtl:rotate-180"
                  })
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "nui-slimscroll relative h-[calc(100vh_-_64px)] w-full overflow-y-auto px-10 py-5" }, [
                createVNode("div", null, [
                  createVNode("div", { class: "mb-4 flex items-center justify-between" }, [
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "full",
                        "data-nui-tooltip": "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0648\u0638\u06CC\u0641\u0647",
                        "data-nui-tooltip-position": "end",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, { name: "lucide:edit-3" })
                        ]),
                        _: 1
                      }),
                      createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " \u0645\u0631\u0648\u0631 \u06A9\u0644\u06CC ")
                    ]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      variant: "pastel",
                      color: "muted",
                      class: "m-0 -ms-1 inline-flex h-6 scale-90 items-center gap-1 py-0 text-xs font-semibold"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: ["block size-2 rounded-full", [
                            props.task?.status === 0 && "bg-info-500",
                            props.task?.status === 1 && "bg-primary-500",
                            props.task?.status === 2 && "bg-danger-500",
                            props.task?.status === 3 && "bg-warning-500",
                            props.task?.status === 4 && "bg-yellow-400",
                            props.task?.status === 5 && "bg-success-500"
                          ]]
                        }, null, 2),
                        createVNode("span", null, "\u062A\u0633\u06A9 \u0634\u0645\u0627\u0631\u0647 " + toDisplayString(props.task?.id), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b pb-6" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "md",
                      weight: "medium",
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.task?.name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.task?.description), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                      createVNode("div", { class: "flex shrink-0 items-center gap-2" }, [
                        createVNode(_component_BaseAvatar, {
                          src: props.task?.assignee.src,
                          size: "xs",
                          class: "shrink-0"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: "text-muted-400",
                            lead: "none"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u062A\u062E\u0635\u06CC\u0635 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0628\u0647 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_BaseHeading, {
                            as: "h4",
                            size: "sm",
                            weight: "medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.task?.assignee.tooltip), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "max-w-[120px] grow" }, [
                        createVNode(_component_BaseText, {
                          size: "xs",
                          class: "text-muted-400 mb-2",
                          lead: "none"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.task?.completion) + "% \u062A\u06A9\u0645\u06CC\u0644 ", 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseProgress, {
                          value: props.task?.completion,
                          size: "xs",
                          color: props.task?.status === 5 ? "success" : "primary"
                        }, null, 8, ["value", "color"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b py-6" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " \u0686\u06A9 \u0644\u06CC\u0633\u062A "),
                    props.task?.checklist.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "text-muted-400 mt-10 flex items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:file-thin",
                          class: "size-10"
                        })
                      ]),
                      createVNode("div", { class: "mb-6 mt-2 text-center" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "md",
                          weight: "light",
                          class: "mb-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "tight",
                          class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u0647\u06CC\u0686 \u0686\u06A9\u200C\u0644\u06CC\u0633\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.")
                          ]),
                          _: 1
                        })
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-6 space-y-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.task?.checklist, (item, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          rounded: "lg"
                        }, [
                          createVNode("div", { class: "flex w-full items-center gap-2" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: item.done,
                              "onUpdate:modelValue": ($event) => item.done = $event,
                              class: "shrink-0",
                              color: "primary",
                              label: item.text,
                              classes: {
                                wrapper: "!items-start max-w-[240px]",
                                label: "text-[0.85rem] text-muted-500 dark:text-muted-300 leading-snug"
                              }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                          ])
                        ]);
                      }), 128))
                    ]))
                  ]),
                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 border-b py-6" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A \u0634\u062F\u0647 (" + toDisplayString(props.task?.files.length) + ") ", 1),
                    props.task?.files.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "text-muted-400 mt-10 flex items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:file-thin",
                          class: "size-10"
                        })
                      ]),
                      createVNode("div", { class: "mb-6 mt-2 text-center" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "md",
                          weight: "light",
                          class: "mb-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "tight",
                          class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0641\u0627\u06CC\u0644\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u067E\u06CC\u0648\u0633\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.")
                          ]),
                          _: 1
                        })
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-6 space-y-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.task?.files, (file, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          rounded: "lg"
                        }, [
                          createVNode("div", { class: "flex w-full items-center gap-2" }, [
                            createVNode("img", {
                              src: file.icon,
                              alt: file.name,
                              class: "max-w-[40px]"
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
                    ]))
                  ]),
                  createVNode("div", { class: "py-6" }, [
                    createVNode("h4", { class: "text-muted-400 font-sans text-xs font-semibold uppercase" }, " \u0646\u0638\u0631\u0627\u062A (" + toDisplayString(props.task?.comments.length) + ") ", 1),
                    props.task?.comments.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "text-muted-400 mt-10 flex items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "ph:chat-circle-thin",
                          class: "size-10"
                        })
                      ]),
                      createVNode("div", { class: "mb-6 mt-2 text-center" }, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "md",
                          weight: "light",
                          class: "mb-1"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, {
                          size: "xs",
                          lead: "tight",
                          class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u0646\u0638\u0631\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.")
                          ]),
                          _: 1
                        })
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-6 flex flex-col gap-8"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.task?.comments, (comment, c) => {
                        return openBlock(), createBlock("div", {
                          key: c,
                          class: "flex gap-3"
                        }, [
                          createVNode(_component_BaseAvatar, {
                            src: comment.author.picture,
                            size: "xs"
                          }, null, 8, ["src"]),
                          createVNode("div", null, [
                            createVNode(_component_BaseHeading, {
                              as: "h3",
                              size: "sm",
                              weight: "medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(comment.author.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseText, {
                              size: "xs",
                              class: "text-muted-400 mb-2",
                              lead: "none"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 \u062A\u0648\u0633\u0637 " + toDisplayString(comment.author.posted), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_BaseParagraph, {
                              size: "xs",
                              class: "text-muted-500 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(comment.text), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]);
                      }), 128))
                    ]))
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseTextarea, {
                      modelValue: unref(commentArea),
                      "onUpdate:modelValue": ($event) => isRef(commentArea) ? commentArea.value = $event : null,
                      rounded: "sm",
                      placeholder: "\u0646\u0648\u0634\u062A\u0646 \u0646\u0638\u0631...",
                      rows: 4,
                      addon: ""
                    }, {
                      addon: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseAvatar, {
                            src: "/img/avatars/2.svg",
                            class: "me-1",
                            size: "xs"
                          }),
                          createVNode(_component_BaseHeading, {
                            as: "h4",
                            size: "sm",
                            weight: "semibold",
                            class: "text-muted-800 dark:text-white"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0645\u0627\u06CC\u0627 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_BaseButtonAction, {
                            color: "primary",
                            onClick: ($event) => emits("message", { from: "maya", comment: ("toValue" in _ctx ? _ctx.toValue : unref(toValue))(unref(commentArea)) })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0627\u0646\u062A\u0634\u0627\u0631 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelTask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
