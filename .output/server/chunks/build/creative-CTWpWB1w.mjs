import { h as _sfc_main$u, b as _sfc_main$w, e as _sfc_main$e, _ as __nuxt_component_0$3, c as _sfc_main$v, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$a } from './DemoProgressCircle-3IlBj56z.mjs';
import { _ as _sfc_main$7 } from './DemoVcardRight-DF9dRV6L.mjs';
import { _ as _sfc_main$9, a as _sfc_main$1$2 } from './DemoIconText-CbFxNoJW.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$8 } from './DemoTeamListCompact-DyRgatce.mjs';
import { _ as _sfc_main$b } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$c } from './TairoImageZoom-Do7uK3cY.mjs';
import { _ as _sfc_main$d } from './BaseIconBox-Cgm-LP3M.mjs';
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
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseButtonIcon-B-NRPykg.mjs';
import './BaseProgressCircle-CfqQZLPv.mjs';
import './BaseProgress-Bi06w8MA.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DemoInfoImage",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    image: {},
    imageDark: { default: void 0 },
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPicture = _sfc_main$1$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoPicture, {
        src: props.image,
        "image-dark": props.imageDark,
        height: 300,
        width: 300,
        rounded: props.rounded
      }, null, _parent));
      _push(`<div class="mt-3">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
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
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoInfoImage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "facebook",
        url: "#",
        icon: "fa6-brands:facebook-f"
      },
      {
        name: "twitter",
        url: "#",
        icon: "fa6-brands:twitter"
      },
      {
        name: "linkedin",
        url: "#",
        icon: "fa6-brands:linkedin-in"
      },
      {
        name: "github",
        url: "#",
        icon: "fa6-brands:github"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-between gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: link.url,
          class: ["text-muted-400 flex size-9 items-center justify-center rounded-xl transition-all duration-300 hover:text-white hover:shadow-xl", [
            link.name === "facebook" && "hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30",
            link.name === "twitter" && "hover:bg-sky-500 hover:shadow-sky-500/30 dark:hover:shadow-sky-800/30",
            link.name === "linkedin" && "hover:bg-indigo-800 hover:shadow-indigo-500/30 dark:hover:shadow-indigo-800/30",
            link.name === "github" && "hover:bg-muted-900 dark:hover:bg-muted-700 hover:shadow-muted-500/30 dark:hover:shadow-muted-800/30"
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "size-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "size-4"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoSocialLinks.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DemoShoppingCartCompact",
  __ssrInlineRender: true,
  props: {
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const products = [
      {
        id: 0,
        name: "\u0627\u067E\u0644 - \u0633\u0627\u0639\u062A \u0647\u0648\u0634\u0645\u0646\u062F \u0646\u0633\u0644 \u06F5\u060C \u06F2\u06F5\u06F6 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A",
        image: "/img/illustrations/widgets/watch-1.svg",
        price: 999,
        quantity: 1
      },
      {
        id: 1,
        name: "\u0627\u067E\u0644 - \u0633\u0627\u0639\u062A \u0647\u0648\u0634\u0645\u0646\u062F \u0646\u0633\u0644 \u06F5\u060C \u06F1\u06F2\u06F8 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A",
        image: "/img/illustrations/widgets/watch-2.svg",
        price: 899,
        quantity: 1
      },
      {
        id: 2,
        name: "\u0627\u067E\u0644 - \u0633\u0627\u0639\u062A \u0647\u0648\u0634\u0645\u0646\u062F \u0646\u0633\u0644 \u06F5\u060C \u06F6\u06F4 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A",
        image: "/img/illustrations/widgets/watch-3.svg",
        price: 799,
        quantity: 1
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseTag = _sfc_main$b;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "semibold",
        lead: "tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0633\u0628\u062F \u062E\u0631\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0633\u0628\u062F \u062E\u0631\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseTag, {
        color: "primary",
        size: "sm",
        rounded: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u06F3 \u0622\u06CC\u062A\u0645 `);
          } else {
            return [
              createTextVNode(" \u06F3 \u0622\u06CC\u062A\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(products, (product) => {
        _push(`<div class="flex gap-2"><div class="${ssrRenderClass([[
          props.rounded === "sm" ? "rounded" : "",
          props.rounded === "md" ? "rounded-lg" : "",
          props.rounded === "lg" ? "rounded-xl" : "",
          props.rounded === "full" ? "rounded-full" : ""
        ], "bg-muted-100 dark:bg-muted-700 flex size-16 shrink-0 items-center justify-center"])}"><img class="size-12 object-cover object-center"${ssrRenderAttr("src", product.image)} alt="\u062A\u0635\u0648\u06CC\u0631 \u0648\u06CC\u062C\u062A"></div><div><p class="text-muted-500 dark:text-muted-400 mt-1 font-sans text-xs">${ssrInterpolate(product.name)}</p><p class="font-sans font-semibold">${ssrInterpolate(product.price)} \u062A\u0648\u0645\u0627\u0646 </p></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        color: "primary",
        rounded: props.rounded,
        class: "!h-12 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062A\u0633\u0648\u06CC\u0647 \u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u062A\u0633\u0648\u06CC\u0647 \u062D\u0633\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoShoppingCartCompact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoImageLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        name: "\u06A9\u0646\u062F\u0631\u0627 \u0648.",
        url: "#",
        image: "/img/avatars/10.svg"
      },
      {
        name: "Jake H.",
        url: "#",
        image: "/img/avatars/8.svg"
      },
      {
        name: "\u0647\u0631\u0645\u0627\u0646 \u0645.",
        url: "#",
        image: "/img/avatars/16.svg"
      },
      {
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645.",
        url: "#",
        image: "/img/avatars/5.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoImageZoom = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-between gap-3" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(`<span class="group flex size-9 items-center justify-center transition-all duration-300"${ssrRenderAttr("data-nui-tooltip", link.name)}>`);
        _push(ssrRenderComponent(_component_TairoImageZoom, {
          class: "rounded-full opacity-60 grayscale transition-all duration-300 focus:grayscale-0 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-focus:grayscale-0",
          src: link.image
        }, null, _parent));
        _push(`</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoImageLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoProductCompact",
  __ssrInlineRender: true,
  props: {
    title: { default: void 0 },
    text: { default: void 0 },
    icon: { default: void 0 },
    image: {},
    value: { default: 0 },
    rounded: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative" }, _attrs))}>`);
      if (props.icon) {
        _push(`<div class="absolute -start-2 -top-2 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: props.icon,
          class: "text-muted-400 size-6"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="absolute -top-2 end-0 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        size: "lg",
        weight: "semibold",
        lead: "loose",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>799 \u062A\u0648\u0645\u0627\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "799 \u062A\u0648\u0645\u0627\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="py-6"><div class="relative"><img class="relative z-10 mx-auto max-w-[100px]"${ssrRenderAttr("src", props.image)}${ssrRenderAttr("alt", props.title)}><div class="bg-primary-500/10 absolute start-1/2 top-1/2 size-20 -translate-y-1/2 rounded-full transition-transform duration-300 group-hover:scale-150 ltr:-translate-x-1/2 rtl:translate-x-1/2"></div></div></div><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h3",
        size: "md",
        weight: "medium",
        lead: "tight",
        class: "text-muted-800 mb-1 dark:text-white"
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
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(props.text)}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-400" }, toDisplayString(props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full",
        color: "primary",
        icon: "lucide:shopping-cart",
        rounded: props.rounded
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoProductCompact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoIconsSquare",
  __ssrInlineRender: true,
  props: {
    shape: { default: "rounded" }
  },
  setup(__props) {
    const props = __props;
    const links = [
      {
        title: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
        icon: "ph:user-duotone",
        url: "#"
      },
      {
        title: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
        icon: "ph:gear-six-duotone",
        url: "#"
      },
      {
        title: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627",
        icon: "ph:chat-circle-duotone",
        url: "#"
      },
      {
        title: "\u0648\u0638\u0627\u06CC\u0641",
        icon: "ph:check-circle-duotone",
        url: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseIconBox = _sfc_main$d;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.title,
          to: link.url,
          class: ["dark:bg-muted-800 border-muted-200 hover:border-primary-500 dark:hover:border-primary-500 dark:border-muted-700 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/30 group flex flex-col border bg-white py-5 transition-all duration-300 hover:shadow-xl", [
            props.shape === "rounded" ? "rounded-md" : "",
            props.shape === "curved" ? "rounded-xl" : ""
          ]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><div class="mb-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseIconBox, {
                color: "none",
                class: "bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: link.icon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: link.icon
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><p class="text-muted-600 dark:text-muted-200 font-sans text-sm font-medium"${_scopeId}>${ssrInterpolate(link.title)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("div", { class: "mb-2" }, [
                    createVNode(_component_BaseIconBox, {
                      color: "none",
                      class: "bg-primary-500/20 text-primary-500 group-hover:bg-primary-500 transition-colors duration-300 group-hover:text-white"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: link.icon
                        }, null, 8, ["name"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode("p", { class: "text-muted-600 dark:text-muted-200 font-sans text-sm font-medium" }, toDisplayString(link.title), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoIconsSquare.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "creative",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_DemoInfoBadges = _sfc_main$2$1;
      const _component_DemoVcardRight = _sfc_main$7;
      const _component_DemoInfoImage = _sfc_main$6;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButton = _sfc_main$e;
      const _component_DemoTeamListCompact = _sfc_main$8;
      const _component_DemoSocialLinks = _sfc_main$5;
      const _component_DemoTeamSearchCompact = _sfc_main$1$1;
      const _component_DemoShoppingCartCompact = _sfc_main$4;
      const _component_DemoIconText = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_DemoImageLinks = _sfc_main$3;
      const _component_DemoProgressCircle = _sfc_main$a;
      const _component_DemoProductCompact = _sfc_main$2;
      const _component_DemoIconsSquare = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ptablet:grid-cols-2 grid gap-4 sm:grid-cols-4" }, _attrs))}><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoInfoBadges, {
              image: "/img/illustrations/widgets/1.svg",
              "badge-small": "/img/illustrations/widgets/3.svg",
              "badge-medium": "/img/illustrations/widgets/2.svg",
              title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
              text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoBadges, {
                image: "/img/illustrations/widgets/1.svg",
                "badge-small": "/img/illustrations/widgets/3.svg",
                "badge-medium": "/img/illustrations/widgets/2.svg",
                title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
                text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
              })
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
            _push2(ssrRenderComponent(_component_DemoVcardRight, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVcardRight)
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
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              rounded: "lg",
              image: "/img/illustrations/widgets/7.svg",
              title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
              text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                rounded: "lg",
                image: "/img/illustrations/widgets/7.svg",
                title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
                text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-5"
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
                  _push3(`<span${_scopeId2}>\u062A\u06CC\u0645 \u0645\u0646</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u062A\u06CC\u0645 \u0645\u0646")
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
            _push2(ssrRenderComponent(_component_DemoTeamListCompact, null, null, _parent2, _scopeId));
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
                    createVNode("span", null, "\u062A\u06CC\u0645 \u0645\u0646")
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
              createVNode(_component_DemoTeamListCompact)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              rounded: "lg",
              image: "/img/illustrations/widgets/4.svg",
              title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
              text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                rounded: "lg",
                image: "/img/illustrations/widgets/4.svg",
                title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
                text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
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
            _push2(ssrRenderComponent(_component_DemoSocialLinks, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoSocialLinks, { rounded: "lg" })
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
            _push2(ssrRenderComponent(_component_DemoTeamSearchCompact, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoTeamSearchCompact, { rounded: "lg" })
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
            _push2(ssrRenderComponent(_component_DemoShoppingCartCompact, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoShoppingCartCompact, { rounded: "lg" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoIconText, {
              title: "@eltheme",
              icon: "lucide:twitter",
              text: "\u062A\u0627\u06CC\u0631\u0648 \u0628\u0647 \u0632\u0648\u062F\u06CC \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u062F\u0631 \u062A\u0639\u0637\u06CC\u0644\u0627\u062A \u06A9\u0631\u06CC\u0633\u0645\u0633 \u06CC\u0627 \u067E\u0627\u06CC\u0627\u0646 \u0633\u0627\u0644.",
              indicator: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` #uikit `);
                      } else {
                        return [
                          createTextVNode(" #uikit ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` #\u062F\u0627\u0634\u0628\u0648\u0631\u062F\u0647\u0627 `);
                      } else {
                        return [
                          createTextVNode(" #\u062F\u0627\u0634\u0628\u0648\u0631\u062F\u0647\u0627 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` #\u062A\u06CC\u0644\u0648\u0627\u06CC\u0646\u062F `);
                      } else {
                        return [
                          createTextVNode(" #\u062A\u06CC\u0644\u0648\u0627\u06CC\u0646\u062F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium" }, [
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode(" #uikit ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode(" #\u062F\u0627\u0634\u0628\u0648\u0631\u062F\u0647\u0627 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode(" #\u062A\u06CC\u0644\u0648\u0627\u06CC\u0646\u062F ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconText, {
                title: "@eltheme",
                icon: "lucide:twitter",
                text: "\u062A\u0627\u06CC\u0631\u0648 \u0628\u0647 \u0632\u0648\u062F\u06CC \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u0627\u062D\u062A\u0645\u0627\u0644\u0627\u064B \u062F\u0631 \u062A\u0639\u0637\u06CC\u0644\u0627\u062A \u06A9\u0631\u06CC\u0633\u0645\u0633 \u06CC\u0627 \u067E\u0627\u06CC\u0627\u0646 \u0633\u0627\u0644.",
                indicator: ""
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-primary-500 mt-3 flex w-full gap-2 font-sans text-xs font-medium" }, [
                    createVNode(_component_NuxtLink, { to: "#" }, {
                      default: withCtx(() => [
                        createTextVNode(" #uikit ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "#" }, {
                      default: withCtx(() => [
                        createTextVNode(" #\u062F\u0627\u0634\u0628\u0648\u0631\u062F\u0647\u0627 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "#" }, {
                      default: withCtx(() => [
                        createTextVNode(" #\u062A\u06CC\u0644\u0648\u0627\u06CC\u0646\u062F ")
                      ]),
                      _: 1
                    })
                  ])
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
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              rounded: "lg",
              image: "/img/illustrations/widgets/5.svg",
              title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
              text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                rounded: "lg",
                image: "/img/illustrations/widgets/5.svg",
                title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
                text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
              })
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
            _push2(ssrRenderComponent(_component_DemoVcardRight, { centered: "" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoVcardRight, { centered: "" })
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
            _push2(ssrRenderComponent(_component_DemoImageLinks, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoImageLinks, { rounded: "lg" })
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
            _push2(ssrRenderComponent(_component_DemoProgressCircle, {
              image: "/img/avatars/6.svg",
              title: `${78}% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647!`,
              text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!",
              value: 78
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoProgressCircle, {
                image: "/img/avatars/6.svg",
                title: `${78}% \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647!`,
                text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!",
                value: 78
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "p-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoProductCompact, {
              image: "/img/illustrations/widgets/watch-3.svg",
              title: "\u0633\u0627\u0639\u062A \u0645\u062A\u0635\u0644",
              text: "\u0627\u067E\u0644 - \u0633\u0627\u0639\u062A \u0645\u062A\u0635\u0644 \u0646\u0633\u0644 \u06F5\u060C \u06F6\u06F4 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A\u060C \u0627\u0646\u062A\u0634\u0627\u0631 \u06F2\u06F0\u06F2\u06F3",
              icon: "fa6-brands:apple",
              rounded: "lg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoProductCompact, {
                image: "/img/illustrations/widgets/watch-3.svg",
                title: "\u0633\u0627\u0639\u062A \u0645\u062A\u0635\u0644",
                text: "\u0627\u067E\u0644 - \u0633\u0627\u0639\u062A \u0645\u062A\u0635\u0644 \u0646\u0633\u0644 \u06F5\u060C \u06F6\u06F4 \u06AF\u06CC\u06AF\u0627\u0628\u0627\u06CC\u062A\u060C \u0627\u0646\u062A\u0634\u0627\u0631 \u06F2\u06F0\u06F2\u06F3",
                icon: "fa6-brands:apple",
                rounded: "lg"
              })
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
            _push2(ssrRenderComponent(_component_DemoIconsSquare, { rounded: "lg" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoIconsSquare, { rounded: "lg" })
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
            _push2(ssrRenderComponent(_component_DemoInfoImage, {
              rounded: "lg",
              image: "/img/illustrations/widgets/8.svg",
              title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
              text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoInfoImage, {
                rounded: "lg",
                image: "/img/illustrations/widgets/8.svg",
                title: "\u062F\u0648 \u062F\u0633\u062A\u0627\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627\u0632 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F",
                text: "\u062A\u0628\u0631\u06CC\u06A9! \u062A\u0644\u0627\u0634\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u067E\u0627\u062F\u0627\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0634\u06A9\u0644!"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/widgets/creative.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
