import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, e as _sfc_main$e, _ as __nuxt_component_0$3, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$3 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4 } from './DemoFlexTableCell-5giP0-Gq.mjs';
import { _ as _sfc_main$5 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$6 } from './DemoSearchCompact-B3L12Nx7.mjs';
import { _ as _sfc_main$7 } from './BaseTabSlider-UvCrOZ1J.mjs';
import { _ as _sfc_main$8 } from './DemoTeamListCompact-DyRgatce.mjs';
import { _ as _sfc_main$9 } from './DemoTodoListCompact-zuvFev_H.mjs';
import { defineComponent, ref, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Calendar } from 'v-calendars';
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
import './BaseCheckboxAnimated-D-Y3gcBn.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "human-resources",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSetting = ref("candidates");
    const items = [
      {
        title: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627",
        subtitle: "\u0635\u0646\u062F\u0648\u0642 \u067E\u06CC\u0627\u0645\u200C\u0647\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A\u06CC",
        icon: "ph:envelope-duotone",
        count: 5,
        status: "\u062C\u062F\u06CC\u062F"
      },
      {
        title: "\u0648\u0638\u0627\u06CC\u0641",
        subtitle: "\u0648\u0638\u0627\u06CC\u0641 \u0645\u0646\u062A\u0638\u0631",
        icon: "ph:check-circle-duotone",
        count: 2,
        status: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_DemoFlexTableRow = _sfc_main$2$1;
      const _component_DemoFlexTableStart = _sfc_main$1$1;
      const _component_DemoFlexTableCell = _sfc_main$4;
      const _component_BaseTag = _sfc_main$5;
      const _component_BaseCard = _sfc_main$u;
      const _component_DemoSearchCompact = _sfc_main$6;
      const _component_BaseTabSlider = _sfc_main$7;
      const _component_DemoTeamListCompact = _sfc_main$8;
      const _component_DemoTodoListCompact = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="flex flex-col gap-6"><div class="bg-primary-700 rounded-xl px-6 py-12"><div class="flex w-full flex-col items-center gap-y-4 sm:flex-row"><div class="flex flex-1 flex-col px-4">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "lg",
        class: "border-primary-200/50 ring-primary-200/50 ring-offset-primary-600 mb-3 border ring-2 ring-offset-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "bold",
        lead: "none",
        class: "ltablet:!text-2xl text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062E\u0648\u0634 \u0628\u0631\u06AF\u0634\u062A\u06CC\u060C \u0645\u0627\u06CC\u0627.</span>`);
          } else {
            return [
              createVNode("span", null, "\u062E\u0648\u0634 \u0628\u0631\u06AF\u0634\u062A\u06CC\u060C \u0645\u0627\u06CC\u0627.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex h-full flex-1 flex-col px-4 sm:px-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "mb-1 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u0628\u062A\u062F\u06CC\u0627\u0646 \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u0628\u062A\u062F\u06CC\u0627\u0646 \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0645\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0634\u06A9\u0648\u0647. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0645\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0634\u06A9\u0648\u0647. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto flex gap-2">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        rounded: "none",
        src: "/img/avatars/3.svg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        rounded: "none",
        src: "/img/avatars/9.svg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "sm",
        rounded: "none",
        src: "/img/avatars/5.svg",
        class: "nui-mask nui-mask-blob"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseButtonIcon, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
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
      }, _parent));
      _push(`</div></div><div class="border-primary-300/60 flex h-full flex-1 flex-col px-4 sm:border-s sm:px-6">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "mb-1 text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0641\u06CC\u062F \u0634\u063A\u0644\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u0641\u06CC\u062F \u0634\u063A\u0644\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight",
        class: "mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0645\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0634\u06A9\u0648\u0647. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0645\u0631\u06AF\u200C\u0647\u0627\u06CC \u0628\u0627\u0634\u06A9\u0648\u0647. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto">`);
      _push(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u0634\u0627\u063A\u0644</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u0634\u0627\u063A\u0644")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="flex flex-col items-center justify-between gap-6 sm:flex-row"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0641\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0641\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        rounded: "lg",
        color: unref(activeSetting) === "all" ? "primary" : "default",
        onClick: ($event) => activeSetting.value = "all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0647\u0645\u0647 `);
          } else {
            return [
              createTextVNode(" \u0647\u0645\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        rounded: "lg",
        color: unref(activeSetting) === "candidates" ? "primary" : "default",
        onClick: ($event) => activeSetting.value = "candidates"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0646\u0627\u0645\u0632\u062F\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0646\u0627\u0645\u0632\u062F\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        rounded: "lg",
        color: unref(activeSetting) === "companies" ? "primary" : "default",
        onClick: ($event) => activeSetting.value = "companies"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 `);
          } else {
            return [
              createTextVNode(" \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-6 grid grid-cols-12 gap-x-6 gap-y-12"><div class="col-span-12 sm:col-span-5"><div class="flex h-full max-w-[240px] flex-col justify-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627</span>`);
          } else {
            return [
              createVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "xs",
        lead: "tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500 dark:text-muted-400"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647\u061B \u06AF\u0641\u062A\u0627\u0631 \u0627\u06CC\u0646 \u0641\u06CC\u0644\u0633\u0648\u0641 \u0645\u0631\u0627 \u0646\u0645\u06CC\u200C\u0631\u0646\u062C\u0627\u0646\u062F\u061B \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A. </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0627\u062F\u0627\u0645\u0647 \u0628\u062F\u0647\u061B \u06AF\u0641\u062A\u0627\u0631 \u0627\u06CC\u0646 \u0641\u06CC\u0644\u0633\u0648\u0641 \u0645\u0631\u0627 \u0646\u0645\u06CC\u200C\u0631\u0646\u062C\u0627\u0646\u062F\u061B \u062F\u0648 \u067E\u0627\u062F\u0634\u0627\u0647: \u0633\u0627\u062E\u062A \u0627\u06CC\u0646\u062A\u0631\u0646\u062A. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-primary-500 font-sans text-xs underline underline-offset-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-7"><div class="space-y-2"><!--[-->`);
      ssrRenderList(items, (item, index) => {
        _push(ssrRenderComponent(_component_DemoFlexTableRow, {
          key: index,
          rounded: "sm"
        }, {
          start: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableStart, {
                label: "\u0646\u0648\u0639",
                "hide-label": index > 0,
                title: item.title,
                subtitle: item.subtitle,
                icon: item.icon
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableStart, {
                  label: "\u0646\u0648\u0639",
                  "hide-label": index > 0,
                  title: item.title,
                  subtitle: item.subtitle,
                  icon: item.icon
                }, null, 8, ["hide-label", "title", "subtitle", "icon"])
              ];
            }
          }),
          end: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u062A\u0639\u062F\u0627\u062F",
                "hide-label": index > 0,
                class: "w-full sm:w-10"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(item.count)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.count), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u0648\u0636\u0639\u06CC\u062A",
                "hide-label": index > 0,
                class: "w-full sm:w-16"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseTag, {
                      color: item.status === "\u062C\u062F\u06CC\u062F" ? "success" : "muted",
                      rounded: "full",
                      variant: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseTag, {
                        color: item.status === "\u062C\u062F\u06CC\u062F" ? "success" : "muted",
                        rounded: "full",
                        variant: "pastel",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u0627\u0642\u062F\u0627\u0645",
                "hide-label": index > 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-primary-500 font-sans text-xs sm:pe-2"${_scopeId2}> \u0627\u0642\u062F\u0627\u0645 </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-primary-500 font-sans text-xs sm:pe-2" }, " \u0627\u0642\u062F\u0627\u0645 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u062A\u0639\u062F\u0627\u062F",
                  "hide-label": index > 0,
                  class: "w-full sm:w-10"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(item.count), 1)
                  ]),
                  _: 2
                }, 1032, ["hide-label"]),
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u0648\u0636\u0639\u06CC\u062A",
                  "hide-label": index > 0,
                  class: "w-full sm:w-16"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseTag, {
                      color: item.status === "\u062C\u062F\u06CC\u062F" ? "success" : "muted",
                      rounded: "full",
                      variant: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  _: 2
                }, 1032, ["hide-label"]),
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u0627\u0642\u062F\u0627\u0645",
                  "hide-label": index > 0
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-primary-500 font-sans text-xs sm:pe-2" }, " \u0627\u0642\u062F\u0627\u0645 ")
                  ]),
                  _: 2
                }, 1032, ["hide-label"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div><div class="mt-6 flex items-center justify-between gap-6 sm:mt-0"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "lg",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-muted-100 mb-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062A\u0627\u0632\u0647\u200C\u06A9\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u062A\u0627\u0632\u0647\u200C\u06A9\u0627\u0631\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg bg-white px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
          } else {
            return [
              createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid gap-6 sm:grid-cols-3"><div class="relative">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xl",
              src: "/img/avatars/5.svg",
              "badge-src": "/img/stacks/js.svg",
              alt: "Avatar",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              href: "/",
              rounded: "lg",
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_BaseAvatar, {
                  size: "xl",
                  src: "/img/avatars/5.svg",
                  "badge-src": "/img/stacks/js.svg",
                  alt: "Avatar",
                  class: "mx-auto mb-4"
                }),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_BaseButton, {
                      href: "/",
                      rounded: "lg",
                      color: "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
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
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xl",
              src: "/img/avatars/16.svg",
              "badge-src": "/img/stacks/vuejs.svg",
              alt: "Avatar",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062C\u0627\u0634\u0648\u0627 \u0627\u0633\u062A\u06CC\u0648\u0646\u0633</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062C\u0627\u0634\u0648\u0627 \u0627\u0633\u062A\u06CC\u0648\u0646\u0633")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              href: "/",
              rounded: "lg",
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_BaseAvatar, {
                  size: "xl",
                  src: "/img/avatars/16.svg",
                  "badge-src": "/img/stacks/vuejs.svg",
                  alt: "Avatar",
                  class: "mx-auto mb-4"
                }),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062C\u0627\u0634\u0648\u0627 \u0627\u0633\u062A\u06CC\u0648\u0646\u0633")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0648\u0644\u200C\u0627\u0633\u062A\u06A9")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_BaseButton, {
                      href: "/",
                      rounded: "lg",
                      color: "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
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
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xl",
              src: "/img/avatars/12.svg",
              "badge-src": "/img/stacks/reactjs.svg",
              alt: "Avatar",
              class: "mx-auto mb-4"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "md",
              weight: "medium",
              lead: "tight",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0627\u0631\u06AF\u0648 \u0631\u06CC\u0646\u06CC\u0647</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0627\u0631\u06AF\u0648 \u0631\u06CC\u0646\u06CC\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}>\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              href: "/",
              rounded: "lg",
              color: "default",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_BaseAvatar, {
                  size: "xl",
                  src: "/img/avatars/12.svg",
                  "badge-src": "/img/stacks/reactjs.svg",
                  alt: "Avatar",
                  class: "mx-auto mb-4"
                }),
                createVNode("div", { class: "text-center" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0645\u0627\u0631\u06AF\u0648 \u0631\u06CC\u0646\u06CC\u0647")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0648\u0628")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode(_component_BaseButton, {
                      href: "/",
                      rounded: "lg",
                      color: "default",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DemoSearchCompact, { rounded: "lg" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between" }, [
                createVNode(_component_DemoSearchCompact, { rounded: "lg" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTabSlider, {
              size: "sm",
              "model-value": "team",
              tabs: [
                { label: "\u062A\u06CC\u0645", value: "team" },
                { label: "\u0648\u0638\u0627\u06CC\u0641", value: "tasks" }
              ]
            }, {
              default: withCtx(({ activeValue }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (activeValue === "team") {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_DemoTeamListCompact, { actions: "" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (activeValue === "tasks") {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_DemoTodoListCompact, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    activeValue === "team" ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_DemoTeamListCompact, { actions: "" })
                    ])) : activeValue === "tasks" ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_DemoTodoListCompact)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseTabSlider, {
                size: "sm",
                "model-value": "team",
                tabs: [
                  { label: "\u062A\u06CC\u0645", value: "team" },
                  { label: "\u0648\u0638\u0627\u06CC\u0641", value: "tasks" }
                ]
              }, {
                default: withCtx(({ activeValue }) => [
                  activeValue === "team" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_DemoTeamListCompact, { actions: "" })
                  ])) : activeValue === "tasks" ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_DemoTodoListCompact)
                  ])) : createCommentVNode("", true)
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
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              attributes: [
                {
                  key: "today",
                  highlight: true,
                  order: 0,
                  dates: [/* @__PURE__ */ new Date()]
                }
              ],
              locale: "fa",
              "title-position": "right",
              expanded: "",
              borderless: "",
              transparent: "",
              "trim-weeks": "",
              class: "max-w-full rounded-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                attributes: [
                  {
                    key: "today",
                    highlight: true,
                    order: 0,
                    dates: [/* @__PURE__ */ new Date()]
                  }
                ],
                locale: "fa",
                "title-position": "right",
                expanded: "",
                borderless: "",
                transparent: "",
                "trim-weeks": "",
                class: "max-w-full rounded-xl"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/human-resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
