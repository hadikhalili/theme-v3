import { b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, a as __nuxt_component_2, h as _sfc_main$u, _ as __nuxt_component_0$3 } from './server.mjs';
import { _ as _sfc_main$4 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$5 } from './BaseButtonIcon-B-NRPykg.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './DemoCommentListCompact-BSBEvWQU.mjs';
import { _ as _sfc_main$3 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoAuthorsListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const authors = [
      {
        id: 0,
        firstName: "\u0647\u0631\u0645\u0627\u0646",
        lastName: "\u0645\u0627\u06CC\u0631",
        image: "/img/avatars/16.svg",
        text: "HM",
        role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        articles: 39
      },
      {
        id: 1,
        firstName: "\u0633\u0627\u0631\u0627",
        lastName: "\u06A9\u0648\u0646\u0648\u0631",
        image: "/img/avatars/12.svg",
        text: "SC",
        role: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        articles: 24
      },
      {
        id: 2,
        firstName: "\u06A9\u0646\u062F\u0631\u0627",
        lastName: "\u0648\u06CC\u0644\u0633\u0648\u0646",
        image: "/img/avatars/10.svg",
        text: "KW",
        role: "\u0645\u062F\u06CC\u0631 \u0646\u06CC\u0631\u0648\u06CC \u0627\u0646\u0633\u0627\u0646\u06CC",
        articles: 17
      },
      {
        id: 3,
        firstName: "\u062C\u0627\u0646",
        lastName: "\u0628\u06A9\u0633\u062A\u0631",
        image: "/img/avatars/13.svg",
        text: "NL",
        role: "\u062A\u062D\u0644\u06CC\u0644\u06AF\u0631 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631",
        articles: 11
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$4;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$5;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(authors, (author) => {
        _push(`<div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: author.image,
          text: author.text,
          rounded: "none",
          mask: "blob",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
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
              _push2(`<span${_scopeId}>${ssrInterpolate(author.firstName)} ${ssrInterpolate(author.lastName.slice(0, 1))}.</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(author.firstName) + " " + toDisplayString(author.lastName.slice(0, 1)) + ".", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(author.role)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(author.role), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto flex items-center gap-1"><span class="text-muted-400 font-sans text-xs">${ssrInterpolate(author.articles)} \u0645\u0642\u0627\u0644\u0647 </span>`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          rounded: "lg",
          muted: "",
          class: "scale-75"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-right",
                class: "rtl:rotate-180 size-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-right",
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAuthorsListCompact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/img/illustrations/dashboards/writer/readers.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/dashboards/writer/post-1.svg");
const _imports_2 = publicAssetsURL("/img/illustrations/dashboards/writer/post-2.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "writer",
  __ssrInlineRender: true,
  setup(__props) {
    const activePosts = ref("recent");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_DemoAuthorsListCompact = _sfc_main$1;
      const _component_DemoCommentListCompact = _sfc_main$2;
      const _component_BaseButtonAction = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseAvatar = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid grid-cols-12 gap-6"><div class="col-span-12"><div class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"><div class="relative h-[150px] w-[320px] shrink-0 sm:h-[175px]"><img class="pointer-events-none absolute start-6 top-0 sm:-start-10"${ssrRenderAttr("src", _imports_0)} alt="\u062A\u0635\u0648\u06CC\u0631 \u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646"></div><div class="mt-6 grow sm:mt-0"><div class="pb-4 text-center sm:pb-0 sm:text-start">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h1",
        class: "text-white opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0633\u0644\u0627\u0645\u060C \u0645\u0627\u06CC\u0627</span>`);
          } else {
            return [
              createVNode("span", null, "\u0633\u0644\u0627\u0645\u060C \u0645\u0627\u06CC\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "max-w-xs text-white opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0622\u06CC\u0627 \u0627\u06CC\u062F\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u062C\u062F\u06CC\u062F \u062F\u0627\u0631\u06CC\u062F\u061F \u0627\u06AF\u0631 \u0646\u0647\u060C \u062D\u062A\u0645\u0627\u064B \u0628\u0627\u06CC\u062F \u0628\u0631\u0627\u06CC \u0627\u0644\u0647\u0627\u0645 \u06AF\u0631\u0641\u062A\u0646 \u0641\u06CC\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0622\u06CC\u0627 \u0627\u06CC\u062F\u0647\u200C\u0627\u06CC \u0628\u0631\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u062C\u062F\u06CC\u062F \u062F\u0627\u0631\u06CC\u062F\u061F \u0627\u06AF\u0631 \u0646\u0647\u060C \u062D\u062A\u0645\u0627\u064B \u0628\u0627\u06CC\u062F \u0628\u0631\u0627\u06CC \u0627\u0644\u0647\u0627\u0645 \u06AF\u0631\u0641\u062A\u0646 \u0641\u06CC\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        size: "sm",
        color: "light",
        variant: "outline",
        class: "w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0645\u0642\u0627\u0644\u0647 \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "size-4"
              }),
              createVNode("span", null, "\u0645\u0642\u0627\u0644\u0647 \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div class="col-span-12"><div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-6"><div class="flex flex-col gap-6"><div class="grid grid-cols-12 gap-4"><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0642\u0627\u0644\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0642\u0627\u0644\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"${_scopeId}> 138 </span>`);
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u0645\u0642\u0627\u0644\u0627\u062A")
                ]),
                _: 1
              }),
              createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold" }, " 138 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"${_scopeId}> 921 </span>`);
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646")
                ]),
                _: 1
              }),
              createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold" }, " 921 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 uppercase"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0646\u0638\u0631\u0627\u062A</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0646\u0638\u0631\u0627\u062A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold"${_scopeId}> 279 </span>`);
          } else {
            return [
              createVNode(_component_BaseParagraph, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "\u0646\u0638\u0631\u0627\u062A")
                ]),
                _: 1
              }),
              createVNode("span", { class: "text-muted-800 dark:text-muted-100 block font-sans text-2xl font-bold" }, " 279 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
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
                  _push3(`<span${_scopeId2}>\u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u0645\u062D\u0628\u0648\u0628</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u0645\u062D\u0628\u0648\u0628")
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
            _push2(ssrRenderComponent(_component_DemoAuthorsListCompact, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u0645\u062D\u0628\u0648\u0628")
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
              createVNode(_component_DemoAuthorsListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-span-12 sm:col-span-6">`);
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
      _push(`</div></div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="bg-muted-200 dark:bg-muted-800/70 rounded-2xl p-6"><div class="mb-8 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "semibold",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u0642\u0627\u0644\u0627\u062A \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u0642\u0627\u0644\u0627\u062A \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex scale-90 gap-2 sm:justify-end">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        small: "",
        color: unref(activePosts) === "recent" ? "primary" : "default",
        onClick: ($event) => activePosts.value = "recent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u062E\u06CC\u0631 `);
          } else {
            return [
              createTextVNode(" \u0627\u062E\u06CC\u0631 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        small: "",
        color: unref(activePosts) === "popular" ? "primary" : "default",
        onClick: ($event) => activePosts.value = "popular"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0645\u062D\u0628\u0648\u0628 `);
          } else {
            return [
              createTextVNode(" \u0645\u062D\u0628\u0648\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="ptablet:grid ptablet:grid-cols-2 flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex flex-col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="Post image" class="bg-muted-200 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0631\u0645\u0627\u0646 \u0645\u062F\u0631\u0646</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0631\u0645\u0627\u0646 \u0645\u062F\u0631\u0646")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}> \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, " \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/6.svg",
                    text: "BT",
                    size: "xs",
                    class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "xs",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u0645\u0627\u06CC\u06A9 \u06CC\u0627\u0646\u0648\u0641\u0633\u06A9\u06CC</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u0645\u0627\u06CC\u06A9 \u06CC\u0627\u0646\u0648\u0641\u0633\u06A9\u06CC")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 mb-1 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0631\u0645\u0627\u0646 \u0645\u062F\u0631\u0646")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, " \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/6.svg",
                        text: "BT",
                        size: "xs",
                        class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "xs",
                          weight: "light",
                          lead: "tight",
                          class: "text-muted-800 dark:text-white"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u0645\u0627\u06CC\u06A9 \u06CC\u0627\u0646\u0648\u0641\u0633\u06A9\u06CC")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, { size: "xs" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-400" }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646")
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
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "Post image",
                class: "bg-muted-200 rounded-xl"
              }),
              createVNode(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 mb-1 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0631\u0645\u0627\u0646 \u0645\u062F\u0631\u0646")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, " \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_BaseAvatar, {
                      src: "/img/avatars/6.svg",
                      text: "BT",
                      size: "xs",
                      class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "xs",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u0645\u0627\u06CC\u06A9 \u06CC\u0627\u0646\u0648\u0641\u0633\u06A9\u06CC")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex flex-col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt="Post image" class="bg-muted-200 rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "md",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 mb-1 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u06F5 \u0646\u06A9\u062A\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u06CC \u0645\u062E\u0635\u0648\u0635 \u0634\u0645\u0627</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u06F5 \u0646\u06A9\u062A\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u06CC \u0645\u062E\u0635\u0648\u0635 \u0634\u0645\u0627")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}> \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 </span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, " \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    src: "/img/avatars/5.svg",
                    text: "BT",
                    size: "xs",
                    class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "xs",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "md",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 mb-1 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u06F5 \u0646\u06A9\u062A\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u06CC \u0645\u062E\u0635\u0648\u0635 \u0634\u0645\u0627")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, " \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "flex gap-3" }, [
                      createVNode(_component_BaseAvatar, {
                        src: "/img/avatars/5.svg",
                        text: "BT",
                        size: "xs",
                        class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                      }),
                      createVNode("div", null, [
                        createVNode(_component_BaseHeading, {
                          as: "h4",
                          size: "xs",
                          weight: "light",
                          lead: "tight",
                          class: "text-muted-800 dark:text-white"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseParagraph, { size: "xs" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-muted-400" }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646")
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
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: "Post image",
                class: "bg-muted-200 rounded-xl"
              }),
              createVNode(_component_BaseCard, { class: "shadow-muted-300/30 dark:shadow-muted-900/20 -mt-8 !rounded-2xl p-6 shadow-xl" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h4",
                      size: "md",
                      weight: "light",
                      lead: "tight",
                      class: "text-muted-800 mb-1 dark:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "\u06F5 \u0646\u06A9\u062A\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u06CC \u0645\u062E\u0635\u0648\u0635 \u0634\u0645\u0627")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, { size: "xs" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-400" }, " \u0628\u0631\u062E\u06CC \u0645\u062D\u062A\u0648\u0627\u06CC \u0645\u0642\u0627\u0644\u0647 \u0648 \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0644\u0648\u0631 \u0633\u06CC\u062A \u0627\u0645\u062A \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0632\u06CC\u0631\u0639\u0646\u0648\u0627\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0632\u06CC\u0628\u0627 ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode(_component_BaseAvatar, {
                      src: "/img/avatars/5.svg",
                      text: "BT",
                      size: "xs",
                      class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "xs",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0631\u0645\u0627\u0646")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/writer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
