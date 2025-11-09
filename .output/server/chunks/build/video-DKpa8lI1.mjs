import { b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, _ as __nuxt_component_0$3, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$3 } from './BaseTag-CQSmGSbm.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "video",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredVideos = [
      {
        id: 1,
        title: "\u0635\u0641\u062D\u0647 \u0641\u0631\u0648\u062F \u0648\u0627\u06A9\u0646\u0634\u200C\u06AF\u0631\u0627 \u0631\u0627 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062A\u06CC\u0644\u0648\u06CC\u0646\u062F \u0633\u06CC\u200C\u0627\u0633\u200C\u0627\u0633 \u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC \u06A9\u0646\u06CC\u062F",
        slug: "",
        cover: "/img/illustrations/dashboards/video/1.png",
        uploaded: "\u06F2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
        category: "\u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        author: {
          name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
          avatar: "/img/avatars/16.svg"
        }
      },
      {
        id: 2,
        title: "\u0637\u0631\u0627\u062D\u06CC \u06CC\u06A9 \u0686\u0627\u0631\u0686\u0648\u0628 UI \u0645\u0646\u0633\u062C\u0645 \u0628\u0631\u0627\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0634\u0645\u0627",
        slug: "",
        cover: "/img/illustrations/dashboards/video/2.jpg",
        uploaded: "\u06F6 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
        category: "UI/UX",
        author: {
          name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
          avatar: "/img/avatars/10.svg"
        }
      },
      {
        id: 3,
        title: "\u0637\u0631\u0627\u062D\u06CC \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u0648\u06CC\u062C\u062A\u200C\u0647\u0627\u06CC \u0646\u0645\u0648\u062F\u0627\u0631 \u0628\u0631\u0627\u06CC \u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0628\u0639\u062F\u06CC \u0645\u0646",
        slug: "",
        cover: "/img/illustrations/dashboards/video/3.png",
        uploaded: "\u062F\u06CC\u0631\u0648\u0632",
        category: "\u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        author: {
          name: "\u0622\u0646\u0627 \u0644\u0648\u067E\u0632",
          avatar: "/img/avatars/12.svg"
        }
      },
      {
        id: 4,
        title: "\u0627\u062F\u063A\u0627\u0645 \u0645\u06CC\u0646\u06CC\u0645\u0627\u0644\u06CC\u0633\u0645 \u0648 \u0641\u0636\u0627\u06CC \u0645\u0646\u0641\u06CC \u062F\u0631 \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u0634\u0645\u0627",
        slug: "",
        cover: "/img/illustrations/dashboards/video/4.png",
        uploaded: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        category: "\u0637\u0631\u0627\u062D\u06CC",
        author: {
          name: "\u062C\u0627\u0646 \u067E\u0648\u0644\u0627\u06A9",
          avatar: "/img/avatars/17.svg"
        }
      },
      {
        id: 5,
        title: "\u0627\u06CC\u062C\u0627\u062F \u0628\u062E\u0634\u200C\u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u062C\u062F\u062F \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062A\u06CC\u0644\u0648\u06CC\u0646\u062F \u0633\u06CC\u200C\u0627\u0633\u200C\u0627\u0633",
        slug: "",
        cover: "/img/illustrations/dashboards/video/5.png",
        uploaded: "\u0647\u0641\u062A\u0647 \u06AF\u0630\u0634\u062A\u0647",
        category: "UI/UX",
        author: {
          name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
          avatar: "/img/avatars/2.svg"
        }
      }
    ];
    const videos = [
      {
        id: 6,
        title: "\u0686\u06AF\u0648\u0646\u0647 \u0637\u0631\u0627\u062D\u06CC \u0635\u0641\u062D\u0647 \u0641\u0631\u0648\u062F \u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0631\u0627 \u062F\u0631 \u0646\u0638\u0631 \u0628\u06AF\u06CC\u0631\u06CC\u0645",
        slug: "",
        cover: "/img/illustrations/dashboards/video/6.png",
        uploaded: "\u06F7 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
        category: "\u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F",
        author: {
          name: "\u0622\u0644\u0627\u0646 \u0627\u0633\u06A9\u0644\u06CC",
          avatar: "/img/avatars/11.svg"
        }
      },
      {
        id: 6,
        title: "\u06F8 \u0646\u06A9\u062A\u0647 \u0628\u0631\u0627\u06CC \u0631\u0633\u0627\u0646\u062F\u0646 \u067E\u06CC\u0627\u0645 \u062F\u0631\u0633\u062A \u062F\u0631 \u0635\u062D\u0628\u062A \u0628\u0627 \u067E\u0631\u0633\u0648\u0646\u0627\u0647\u0627",
        slug: "",
        cover: "/img/illustrations/dashboards/video/7.jpg",
        uploaded: "\u062F\u06CC\u0631\u0648\u0632",
        category: "UI/UX",
        author: {
          name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646",
          avatar: "/img/avatars/10.svg"
        }
      },
      {
        id: 7,
        title: "\u06F5 \u062A\u0641\u0627\u0648\u062A \u0628\u06CC\u0646 \u062A\u0628\u0644\u06CC\u063A \u062E\u062F\u0645\u0627\u062A \u0634\u0645\u0627 \u0648 \u06CC\u06A9 \u0645\u062D\u0635\u0648\u0644",
        slug: "",
        cover: "/img/illustrations/dashboards/video/8.jpg",
        uploaded: "\u062F\u06CC\u0631\u0648\u0632",
        category: "Branding",
        author: {
          name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631",
          avatar: "/img/avatars/5.svg"
        }
      },
      {
        id: 8,
        title: "\u0633\u0631\u0639\u062A \u062A\u0648\u0633\u0639\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0641\u0644\u0627\u062A\u0631 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u06CC\u062F",
        slug: "",
        cover: "/img/illustrations/dashboards/video/9.png",
        uploaded: "\u06F2 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        category: "Mobile",
        author: {
          name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
          avatar: "/img/avatars/16.svg"
        }
      },
      {
        id: 9,
        title: "\u0686\u06AF\u0648\u0646\u0647 \u06CC\u06A9 \u0633\u06CC\u0633\u062A\u0645 \u0637\u0631\u0627\u062D\u06CC \u06A9\u0627\u0645\u0644 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 \u0622\u062E\u0631\u0645 \u0633\u0627\u062E\u062A\u0645",
        slug: "",
        cover: "/img/illustrations/dashboards/video/10.png",
        uploaded: "\u062F\u06CC\u0631\u0648\u0632",
        category: "UI/UX",
        author: {
          name: "\u0622\u0646\u0627 \u0644\u0648\u067E\u0632",
          avatar: "/img/avatars/12.svg"
        }
      },
      {
        id: 9,
        title: "\u0628\u062D\u062B \u0628\u06CC\u200C\u067E\u0627\u06CC\u0627\u0646 \u0628\u06CC\u0646 \u062A\u0648\u0633\u0639\u0647 \u0648 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u06A9\u062F \u067E\u0627\u06CC\u06CC\u0646",
        slug: "",
        cover: "/img/illustrations/dashboards/video/11.png",
        uploaded: "\u06F5 \u0631\u0648\u0632 \u067E\u06CC\u0634",
        category: "\u0645\u0647\u0646\u062F\u0633\u06CC",
        author: {
          name: "\u0631\u0648\u0646 \u0627\u06CC\u0645\u0633\u062B",
          avatar: "/img/avatars/14.svg"
        }
      },
      {
        id: 10,
        title: "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u062C\u0627\u0648\u0627\u0627\u0633\u06A9\u0631\u06CC\u067E\u062A \u0628\u0631\u0627\u06CC \u062A\u0636\u0645\u06CC\u0646 \u0642\u0627\u0628\u0644\u06CC\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u062C\u062F\u062F \u0627\u0632 \u06A9\u062F \u062F\u0631 \u067E\u0631\u0648\u0698\u0647 \u0634\u0645\u0627",
        slug: "",
        cover: "/img/illustrations/dashboards/video/12.png",
        uploaded: "\u06F2 \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634",
        category: "\u0645\u0647\u0646\u062F\u0633\u06CC",
        author: {
          name: "\u067E\u06CC\u062A\u0631 \u0648\u06CC\u0644\u0646\u062F",
          avatar: "/img/avatars/15.svg"
        }
      },
      {
        id: 11,
        title: "\u0686\u06AF\u0648\u0646\u0647 \u0627\u0632 \u0645\u06CC\u0646\u06CC\u0645\u0627\u0644\u06CC\u0633\u0645 \u0628\u0631\u0627\u06CC \u062A\u0623\u06A9\u06CC\u062F \u0628\u0631 \u067E\u06CC\u0627\u0645 \u0635\u062D\u06CC\u062D \u062F\u0631 \u0637\u0631\u0627\u062D\u06CC\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u0645",
        slug: "",
        cover: "/img/illustrations/dashboards/video/13.png",
        uploaded: "\u06F1\u0645\u0627\u0647 \u067E\u06CC\u0634",
        category: "UI/UX",
        author: {
          name: "\u06A9\u0644\u0627\u0631\u06A9 \u0647\u0645\u06CC\u0644\u062A\u0648\u0646",
          avatar: "/img/avatars/3.svg"
        }
      },
      {
        id: 12,
        title: "\u06F1\u06F0 \u0686\u0627\u0644\u0634\u06CC \u06A9\u0647 \u0637\u0631\u0627\u062D\u0627\u0646 UX \u0628\u0627\u06CC\u062F \u0628\u062A\u0648\u0627\u0646\u0646\u062F \u062F\u0631 \u0637\u0648\u0644 \u062D\u0631\u0641\u0647\u200C\u0634\u0627\u0646 \u0628\u0627 \u0622\u0646\u0647\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u0648\u0646\u062F",
        slug: "",
        cover: "/img/illustrations/dashboards/video/14.png",
        uploaded: "\u06F1\u0645\u0627\u0647 \u067E\u06CC\u0634",
        category: "UI/UX",
        author: {
          name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
          avatar: "/img/avatars/2.svg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseTag = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-8 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631</span>`);
          } else {
            return [
              createVNode("span", null, "\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 \u06A9\u0647 \u0627\u0645\u0631\u0648\u0632 \u0632\u0648\u062F\u062A\u0631 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647\u200C\u0627\u0646\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0627\u062E\u06CC\u0631 \u06A9\u0647 \u0627\u0645\u0631\u0648\u0632 \u0632\u0648\u062F\u062A\u0631 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647\u200C\u0627\u0646\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="xs:text-center xs:mt-2 space-y-2"><span class="text-muted-400 font-sans text-xs font-medium uppercase"> \u062A\u06CC\u0645 \u0645\u0646 </span><div class="flex items-center justify-center gap-2 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButtonIcon, { small: "" }, {
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
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        rounded: "none",
        mask: "blob",
        src: "/img/avatars/10.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        rounded: "none",
        mask: "blob",
        src: "/img/avatars/8.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        rounded: "none",
        mask: "blob",
        src: "/img/avatars/5.svg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseAvatar, {
        size: "xs",
        rounded: "none",
        mask: "blob",
        src: "/img/avatars/16.svg"
      }, null, _parent));
      _push(`</div></div></div><div class="relative"><div class="grid min-h-[440px] grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(featuredVideos.slice(0, 1), (video) => {
        _push(`<div class="ltablet:col-span-6 col-span-12 lg:col-span-6"><div class="flex h-full flex-col"><div class="bg-muted-200 dark:bg-muted-800 group relative size-full overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", video.cover)}${ssrRenderAttr("alt", video.title)} class="w-full object-cover object-center"><div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div><div class="absolute inset-0 z-20 flex size-full flex-col justify-between"><div class="ptablet:p-10 p-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex size-14 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-play-arrow",
                class: "size-7"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-play-arrow",
                  class: "size-7"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ptablet:p-10 p-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "3xl",
                weight: "bold",
                lead: "tight",
                class: "xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "3xl",
                  weight: "bold",
                  lead: "tight",
                  class: "xs:text-xl hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: video.author.avatar,
          text: video.author.name.slice(0, 1),
          size: "xs",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "xs",
                weight: "light",
                lead: "tight",
                class: "hover:text-primary-500 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.author.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.author.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "light",
                  lead: "tight",
                  class: "hover:text-primary-500 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.author.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(video.uploaded)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(video.uploaded), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto">`);
        _push(ssrRenderComponent(_component_BaseTag, {
          color: "primary",
          rounded: "full",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(video.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(video.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"><div class="flex h-full flex-col"><div class="grid h-full grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(featuredVideos.slice(1), (video) => {
        _push(`<div class="col-span-12 sm:col-span-6"><div class="group flex h-full flex-col"><div class="bg-muted-200 dark:bg-muted-800 relative size-full overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", video.cover)}${ssrRenderAttr("alt", video.title)} class="w-full object-cover object-center"><div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div><div class="absolute inset-0 z-20 flex size-full flex-col justify-between"><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-play-arrow",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-play-arrow",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "md",
                weight: "medium",
                lead: "tight",
                class: "xs:text-xl ptablet:text-xl ptablet:font-bold xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "medium",
                  lead: "tight",
                  class: "xs:text-xl ptablet:text-xl ptablet:font-bold xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: video.author.avatar,
          text: video.author.name.slice(0, 1),
          size: "xs",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "xs",
                weight: "light",
                lead: "tight",
                class: "hover:text-primary-500 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.author.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.author.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "light",
                  lead: "tight",
                  class: "hover:text-primary-500 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.author.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(video.uploaded)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(video.uploaded), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto">`);
        _push(ssrRenderComponent(_component_BaseTag, {
          color: "primary",
          rounded: "full",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(video.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(video.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div><div class="mb-8 mt-12 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628</span>`);
          } else {
            return [
              createVNode("span", null, "\u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0627\u062E\u06CC\u0631\u0627\u064B \u062A\u0648\u0633\u0637 \u0628\u0633\u06CC\u0627\u0631\u06CC \u0627\u0632 \u0627\u0641\u0631\u0627\u062F \u0645\u0634\u0627\u0647\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0648\u06CC\u062F\u06CC\u0648\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0627\u062E\u06CC\u0631\u0627\u064B \u062A\u0648\u0633\u0637 \u0628\u0633\u06CC\u0627\u0631\u06CC \u0627\u0632 \u0627\u0641\u0631\u0627\u062F \u0645\u0634\u0627\u0647\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><div class="xs:mt-2 flex items-center justify-center gap-2 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        small: "",
        rounded: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:video",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:video",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-12 gap-6"><!--[-->`);
      ssrRenderList(videos, (video) => {
        _push(`<div class="ptablet:col-span-6 col-span-12 sm:col-span-4"><div class="group flex flex-col"><div class="bg-muted-200 dark:bg-muted-800 relative w-full overflow-hidden rounded-2xl"><img${ssrRenderAttr("src", video.cover)}${ssrRenderAttr("alt", video.title)} class="w-full object-cover object-center"><div class="absolute inset-x-0 bottom-0 z-10 h-3/5 w-full bg-gradient-to-t from-black transition-all duration-500 ease-in-out group-hover:h-full"></div><div class="absolute inset-0 z-20 flex w-full flex-col justify-between"><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "#",
          class: "group-hover:border-primary-500 text-muted-300 group-hover:text-primary-500 shadow-muted-300/30 dark:shadow-muted-900/20 flex size-10 items-center justify-center rounded-full border-2 border-transparent bg-white shadow-2xl transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-play-arrow",
                class: "size-5"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-play-arrow",
                  class: "size-5"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="p-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h3",
                size: "xl",
                weight: "medium",
                lead: "tight",
                class: "xs:text-xl xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "xl",
                  weight: "medium",
                  lead: "tight",
                  class: "xs:text-xl xs:font-bold hover:text-primary-300 mb-4 line-clamp-2 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: video.author.avatar,
          text: video.author.name.slice(0, 1),
          size: "xs",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "xs",
                weight: "light",
                lead: "tight",
                class: "hover:text-primary-500 text-white transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(video.author.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(video.author.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseHeading, {
                  as: "h4",
                  size: "xs",
                  weight: "light",
                  lead: "tight",
                  class: "hover:text-primary-500 text-white transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(video.author.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(video.uploaded)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(video.uploaded), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="ms-auto">`);
        _push(ssrRenderComponent(_component_BaseTag, {
          color: "primary",
          rounded: "full",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(video.category)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(video.category), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div><div class="my-16 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "full",
        color: "default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:dots-nine-bold",
              class: "size-4 me-2"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0628\u06CC\u0634\u062A\u0631</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:dots-nine-bold",
                class: "size-4 me-2"
              }),
              createVNode("span", null, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0628\u06CC\u0634\u062A\u0631")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/video.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
