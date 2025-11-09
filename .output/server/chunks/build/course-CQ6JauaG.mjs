import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, h as _sfc_main$u, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$3 } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { _ as _sfc_main$4 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$6 } from './DemoFlexTableCell-5giP0-Gq.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = [
      {
        title: "ANA118 - \u0622\u0646\u0627\u062A\u0648\u0645\u06CC \u0648 \u0641\u06CC\u0632\u06CC\u0648\u0644\u0648\u0698\u06CC \u0627\u0641\u0631\u0627\u062F \u062C\u0648\u0627\u0646",
        description: "\u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0628\u0647 \u0628\u0631\u0631\u0633\u06CC \u0639\u0645\u06CC\u0642\u200C\u062A\u0631 \u0622\u0646\u0627\u062A\u0648\u0645\u06CC \u0627\u0641\u0631\u0627\u062F \u062C\u0648\u0627\u0646 \u0648 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u0641\u06CC\u0632\u06CC\u0648\u0644\u0648\u0698\u06CC\u06A9\u06CC \u067E\u0627\u06CC\u0647 \u0645\u06CC\u200C\u067E\u0631\u062F\u0627\u0632\u062F \u0648 \u0628\u0631 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0642\u0627\u0644\u0627\u062A \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 \u062A\u0645\u0631\u06A9\u0632 \u062F\u0627\u0631\u062F.",
        category: "\u06A9\u0627\u0644\u0628\u062F\u0634\u0646\u0627\u0633\u06CC",
        week: 6,
        duration: 120,
        comments: 25,
        time: "\u06F1\u06F0:\u06F0\u06F0 - \u06F1\u06F2:\u06F0\u06F0",
        date: "\u06F1\u06F4 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
        students: [
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
            src: "/img/avatars/3.svg"
          },
          {
            tooltip: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
            src: "/img/avatars/2.svg"
          },
          {
            tooltip: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
            src: "/img/avatars/5.svg"
          },
          {
            tooltip: "\u062C\u06CC\u0646 \u062F\u0648",
            src: "/img/avatars/4.svg"
          }
        ]
      },
      {
        title: "IMM107 - \u0627\u06CC\u0645\u0646\u06CC\u200C\u0634\u0646\u0627\u0633\u06CC \u0648 \u062F\u0631\u0645\u0627\u0646 \u0628\u06CC\u0645\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0627\u0646\u0633\u0627\u0646\u06CC",
        description: "\u0627\u06CC\u0646 \u0648\u0627\u062D\u062F \u062A\u0645\u0631\u06A9\u0632 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631 \u0645\u0634\u06A9\u0644\u0627\u062A \u0628\u0627\u0644\u06CC\u0646\u06CC \u0645\u0647\u0645 \u062F\u0631 \u0627\u06CC\u0645\u0646\u06CC\u200C\u0634\u0646\u0627\u0633\u06CC \u0648 \u0632\u0645\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0639\u0644\u0645\u06CC \u0622\u0646\u200C\u0647\u0627 \u062F\u0627\u0631\u062F.",
        category: "\u0627\u06CC\u0645\u0646\u06CC\u200C\u0634\u0646\u0627\u0633\u06CC",
        week: 6,
        duration: 90,
        comments: 12,
        time: "\u06F9:\u06F0\u06F0 - \u06F1\u06F0:\u06F3\u06F0",
        date: "\u06F1\u06F8 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
        students: [
          {
            tooltip: "\u0622\u0646\u0627 \u0648\u0631\u0633\u06A9\u06CC",
            src: "/img/avatars/12.svg"
          },
          {
            tooltip: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
            src: "/img/avatars/16.svg"
          },
          {
            tooltip: "\u0627\u062F\u06CC \u062C\u0627\u0646\u0633\u0648\u0646",
            src: "/img/avatars/8.svg"
          },
          {
            tooltip: "\u062C\u06CC\u0646 \u062F\u0648",
            src: "/img/avatars/14.svg"
          }
        ]
      },
      {
        title: "CAR112 - \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u062A\u0627\u0628\u0648\u0644\u06CC\u06A9 \u0642\u0644\u0628\u06CC \u0639\u0631\u0648\u0642\u06CC",
        description: "\u0627\u06CC\u0646 \u0648\u0627\u062D\u062F \u062A\u0645\u0631\u06A9\u0632 \u0632\u06CC\u0627\u062F\u06CC \u0628\u0631 \u0645\u0634\u06A9\u0644\u0627\u062A \u0628\u0627\u0644\u06CC\u0646\u06CC \u0645\u0647\u0645 \u062F\u0631 \u0627\u06CC\u0645\u0646\u06CC\u200C\u0634\u0646\u0627\u0633\u06CC \u0648 \u0632\u0645\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0639\u0644\u0645\u06CC \u0622\u0646\u200C\u0647\u0627 \u062F\u0627\u0631\u062F.",
        category: "\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC",
        week: 6,
        duration: 120,
        comments: 7,
        time: "\u06F1\u06F4:\u06F0\u06F0 - \u06F1\u06F6:\u06F0\u06F0",
        date: "\u06F1\u06F8 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
        students: [
          {
            tooltip: "\u062A\u0631\u0648\u06CC \u0628\u06CC\u06A9\u0631",
            src: "/img/avatars/15.svg"
          },
          {
            tooltip: "\u0622\u0644\u0646 \u0628\u06A9\u0633\u062A\u0631",
            src: "/img/avatars/11.svg"
          },
          {
            tooltip: "\u0627\u0631\u06CC\u06A9 \u06A9\u0644\u0627\u0648\u0633",
            src: "/img/avatars/7.svg"
          },
          {
            tooltip: "\u062C\u06CC\u0646 \u062F\u0648",
            src: "/img/avatars/17.svg"
          }
        ]
      }
    ];
    const files = [
      {
        name: "\u0647\u0648\u0644\u062A\u0632 - \u0622\u0646\u0627\u062A\u0648\u0645\u06CC \u06A9\u0627\u0645\u0644",
        size: "94.7 MB",
        uploaded: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        icon: "/img/icons/files/pdf.svg"
      },
      {
        name: "\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u062F\u0648\u0632\u0647\u0627 \u0628\u062E\u0634 \u06F2",
        size: "79 KB",
        uploaded: "\u06F1 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
        icon: "/img/icons/files/sheet.svg"
      },
      {
        name: "\u0642\u0627\u0644\u0628 \u0622\u0632\u0645\u0648\u0646 \u06A9\u062A\u0628\u06CC",
        size: "42 KB",
        uploaded: "\u06F2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
        icon: "/img/icons/files/doc-2.svg"
      }
    ];
    const students = [
      {
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        avatar: "/img/avatars/2.svg",
        completion: "78% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647",
        location: "\u0644\u0633\u200C\u0622\u0646\u062C\u0644\u0633\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
        status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
        presence: "\u0628\u0647\u200C\u0645\u0648\u0642\u0639"
      },
      {
        name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A",
        avatar: "/img/avatars/3.svg",
        completion: "64% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647",
        location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
        status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
        presence: "\u062A\u0627\u062E\u06CC\u0631 (\u06F1\u06F0 \u062F\u0642\u06CC\u0642\u0647)"
      },
      {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
        avatar: "/img/avatars/16.svg",
        completion: "37% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647",
        location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9\u060C \u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9",
        status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
        presence: "\u062A\u0627\u062E\u06CC\u0631 (\u06F5 \u062F\u0642\u06CC\u0642\u0647)"
      },
      {
        name: "\u0627\u0646\u062F\u0631\u0648 \u0628\u0631\u06CC\u06A9\u0645\u0646",
        avatar: "/img/avatars/8.svg",
        completion: "89% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647",
        location: "\u0633\u0646\u200C\u062F\u06CC\u06AF\u0648\u060C CA",
        status: "\u0622\u0646\u0644\u0627\u06CC\u0646",
        presence: "\u0628\u0647\u200C\u0645\u0648\u0642\u0639"
      },
      {
        name: "\u062C\u0646 \u06A9\u0627\u0646\u0644\u0644\u06CC",
        avatar: "/img/avatars/10.svg",
        completion: "54% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647",
        location: "\u0633\u0627\u0646 \u0641\u0631\u0627\u0646\u0633\u06CC\u0633\u06A9\u0648\u060C \u06A9\u0627\u0644\u06CC\u0641\u0631\u0646\u06CC\u0627",
        status: "\u0622\u0641\u0644\u0627\u06CC\u0646",
        presence: "\u0628\u0647\u200C\u0645\u0648\u0642\u0639"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseAvatarGroup = _sfc_main$3;
      const _component_BaseButtonAction = _sfc_main$4;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseButtonIcon = _sfc_main$5;
      const _component_DemoFlexTableRow = _sfc_main$2$1;
      const _component_DemoFlexTableStart = _sfc_main$1$1;
      const _component_DemoFlexTableCell = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full">`);
      _push(ssrRenderComponent(_component_BaseAvatar, {
        src: "/img/avatars/2.svg",
        size: "lg"
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "2xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u06A9\u0644\u0627\u0633\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 \u06F6</span>`);
          } else {
            return [
              createVNode("span", null, "\u06A9\u0644\u0627\u0633\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 \u06F6")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}>\u06A9\u0644\u0627\u0633\u200C\u0647\u0627 \u0627\u0632 \u06F6 \u062A\u0627 \u06F1\u06F0 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, "\u06A9\u0644\u0627\u0633\u200C\u0647\u0627 \u0627\u0632 \u06F6 \u062A\u0627 \u06F1\u06F0 \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>`);
          } else {
            return [
              createVNode("span", null, "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, { color: "primary" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ltablet:gap-4 grid grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(courses, (course, index) => {
        _push(`<div class="ltablet:col-span-4 relative col-span-12 sm:col-span-6 lg:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "flex h-full flex-col p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseTag, { color: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(course.category)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(course.category), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "lg",
                weight: "medium",
                lead: "tight",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-800 dark:text-muted-100"${_scopeId2}>${ssrInterpolate(course.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, toDisplayString(course.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(course.description)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(course.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="mb-8 mt-auto flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatarGroup, {
                avatars: course.students,
                limit: 3,
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonAction, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0628\u062D\u062B</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0628\u062D\u062B")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="mb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100 mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0636\u0628\u0637 \u0633\u062E\u0646\u0631\u0627\u0646\u06CC \u0647\u0641\u062A\u0647 ${ssrInterpolate(course.week)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0636\u0628\u0637 \u0633\u062E\u0646\u0631\u0627\u0646\u06CC \u0647\u0641\u062A\u0647 " + toDisplayString(course.week), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex gap-6"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:timer-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(course.duration)} \u062F\u0642\u06CC\u0642\u0647</span></div><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:chat-circle-dots-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(course.comments)} \u0646\u0638\u0631\u0647\u0627 </span></div></div></div><div class="mb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-muted-100 mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0627\u0645\u062A\u062D\u0627\u0646 \u0647\u0641\u062A\u0647 ${ssrInterpolate(course.week)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0627\u0645\u062A\u062D\u0627\u0646 \u0647\u0641\u062A\u0647 " + toDisplayString(course.week), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="flex gap-6"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:calendar-check-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-sans text-sm"${_scopeId}>${ssrInterpolate(course.date)} \u2014 ${ssrInterpolate(course.time)}</span></div></div></div><div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                color: "primary",
                rounded: "lg",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0644\u0627\u0633</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0644\u0627\u0633")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_BaseTag, { color: "primary" }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(course.category), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "lg",
                    weight: "medium",
                    lead: "tight",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-800 dark:text-muted-100" }, toDisplayString(course.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(course.description), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "mb-8 mt-auto flex items-center justify-between" }, [
                  createVNode(_component_BaseAvatarGroup, {
                    avatars: course.students,
                    limit: 3,
                    size: "sm"
                  }, null, 8, ["avatars"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseButtonAction, null, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u0628\u062D\u062B")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mb-8" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0636\u0628\u0637 \u0633\u062E\u0646\u0631\u0627\u0646\u06CC \u0647\u0641\u062A\u0647 " + toDisplayString(course.week), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "flex gap-6" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:timer-duotone",
                        class: "size-5"
                      }),
                      createVNode("span", { class: "font-sans text-sm" }, toDisplayString(course.duration) + " \u062F\u0642\u06CC\u0642\u0647", 1)
                    ]),
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chat-circle-dots-duotone",
                        class: "size-5"
                      }),
                      createVNode("span", { class: "font-sans text-sm" }, toDisplayString(course.comments) + " \u0646\u0638\u0631\u0647\u0627 ", 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mb-8" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0627\u0645\u062A\u062D\u0627\u0646 \u0647\u0641\u062A\u0647 " + toDisplayString(course.week), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("div", { class: "flex gap-6" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:calendar-check-duotone",
                        class: "size-5"
                      }),
                      createVNode("span", { class: "font-sans text-sm" }, toDisplayString(course.date) + " \u2014 " + toDisplayString(course.time), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    rounded: "lg",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u062C\u0632\u0626\u06CC\u0627\u062A \u06A9\u0644\u0627\u0633")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="ltablet:gap-x-4 mt-10 grid grid-cols-12 gap-x-6 gap-y-12"><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 \u06F6</span>`);
          } else {
            return [
              createVNode("span", null, "\u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u0647\u0641\u062A\u0647 \u06F6")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(files, (file, fileIndex) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: fileIndex,
          rounded: "lg",
          class: "p-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex w-full items-center gap-3"${_scopeId}><img${ssrRenderAttr("src", file.icon)}${ssrRenderAttr("alt", file.name)} class="size-10 shrink-0"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h2",
                size: "md",
                weight: "light",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
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
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(file.size)} \xB7 \u0622\u067E\u0644\u0648\u062F \u0634\u062F\u0647 \u062F\u0631 ${ssrInterpolate(file.uploaded)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(file.size) + " \xB7 \u0622\u067E\u0644\u0648\u062F \u0634\u062F\u0647 \u062F\u0631 " + toDisplayString(file.uploaded), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-down",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-down",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex w-full items-center gap-3" }, [
                  createVNode("img", {
                    src: file.icon,
                    alt: file.name,
                    class: "size-10 shrink-0"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h2",
                      size: "md",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(file.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, toDisplayString(file.size) + " \xB7 \u0622\u067E\u0644\u0648\u062F \u0634\u062F\u0647 \u062F\u0631 " + toDisplayString(file.uploaded), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("div", { class: "ms-auto" }, [
                    createVNode(_component_BaseButtonIcon, {
                      small: "",
                      "data-nui-tooltip": "\u062F\u0627\u0646\u0644\u0648\u062F \u0641\u0627\u06CC\u0644"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-down",
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
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u0627\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u062F\u0627\u0646\u0634\u062C\u0648\u06CC\u0627\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}>\u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u062F\u0627\u0646\u0634\u200C\u0622\u0645\u0648\u0632\u0627\u0646 \u062D\u0627\u0636\u0631</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, "\u062E\u0644\u0627\u0635\u0647\u200C\u0627\u06CC \u0627\u0632 \u062F\u0627\u0646\u0634\u200C\u0622\u0645\u0648\u0632\u0627\u0646 \u062D\u0627\u0636\u0631")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(students, (student, studentIndex) => {
        _push(ssrRenderComponent(_component_DemoFlexTableRow, {
          key: studentIndex,
          rounded: "lg",
          spaced: ""
        }, {
          start: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableStart, {
                label: "Student",
                "hide-label": "",
                title: student.name,
                subtitle: student.completion,
                avatar: student.avatar
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableStart, {
                  label: "Student",
                  "hide-label": "",
                  title: student.name,
                  subtitle: student.completion,
                  avatar: student.avatar
                }, null, 8, ["title", "subtitle", "avatar"])
              ];
            }
          }),
          end: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                "hide-label": "",
                class: "w-full sm:w-32"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm"${_scopeId2}>${ssrInterpolate(student.location)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm" }, toDisplayString(student.location), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u0648\u0636\u0639\u06CC\u062A",
                "hide-label": "",
                class: "w-full sm:w-16"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseTag, {
                      color: student.status === "\u0622\u0646\u0644\u0627\u06CC\u0646" ? "success" : "muted",
                      rounded: "full",
                      variant: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(student.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(student.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseTag, {
                        color: student.status === "\u0622\u0646\u0644\u0627\u06CC\u0646" ? "success" : "muted",
                        rounded: "full",
                        variant: "pastel",
                        size: "sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(student.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                "hide-label": "",
                class: "w-full sm:w-28"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400 font-sans text-sm"${_scopeId2}>${ssrInterpolate(student.presence)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(student.presence), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DemoFlexTableCell, {
                label: "\u0627\u0642\u062F\u0627\u0645",
                "hide-label": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseButtonAction, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0686\u062A`);
                        } else {
                          return [
                            createTextVNode("\u0686\u062A")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseButtonAction, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0686\u062A")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                  "hide-label": "",
                  class: "w-full sm:w-32"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 line-clamp-1 font-sans text-sm" }, toDisplayString(student.location), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u0648\u0636\u0639\u06CC\u062A",
                  "hide-label": "",
                  class: "w-full sm:w-16"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseTag, {
                      color: student.status === "\u0622\u0646\u0644\u0627\u06CC\u0646" ? "success" : "muted",
                      rounded: "full",
                      variant: "pastel",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(student.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u0645\u0648\u0642\u0639\u06CC\u062A",
                  "hide-label": "",
                  class: "w-full sm:w-28"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400 font-sans text-sm" }, toDisplayString(student.presence), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_DemoFlexTableCell, {
                  label: "\u0627\u0642\u062F\u0627\u0645",
                  "hide-label": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseButtonAction, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0686\u062A")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
