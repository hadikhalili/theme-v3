import { j as useRoute, u as useRouter, t as usePanels, e as _sfc_main$e, a as __nuxt_component_2, _ as __nuxt_component_0$3, b as _sfc_main$w, c as _sfc_main$v, X as __nuxt_component_4, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "members",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(45);
    usePanels();
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
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/members", {
      query
    }, "$UvVqieDa6K")), __temp = await __temp, __restore(), __temp);
    const currentMember = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseTag = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_4;
      const _component_BaseCard = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full pb-24" }, _attrs))}><div class="flex items-center justify-end py-6"><div class="hidden items-center gap-2 md:flex">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/layouts/invite",
        rounded: "full",
        color: "default",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:user",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u062F\u0639\u0648\u062A \u0627\u0632 \u06CC\u06A9 \u0639\u0636\u0648</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:user",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u062F\u0639\u0648\u062A \u0627\u0632 \u06CC\u06A9 \u0639\u0636\u0648")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "full",
        color: "default",
        size: "sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:edit-3",
              class: "me-2 size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0639\u0636\u0648</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:edit-3",
                class: "me-2 size-4"
              }),
              createVNode("span", null, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0639\u0636\u0648")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-5 col-span-12 lg:col-span-5"><ul class="ltablet:flex-col ptablet:overflow-x-auto ltablet:overflow-x-hidden flex gap-1 overflow-x-auto lg:flex-col lg:overflow-x-hidden"><!--[-->`);
      ssrRenderList(unref(data)?.data, (member) => {
        _push(`<li role="button" tabindex="0">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/layouts/members/${member.slug}`,
          class: "hover:bg-muted-200 dark:hover:bg-muted-800/60 flex items-center gap-2 rounded-xl p-4",
          "active-class": "bg-muted-200 dark:bg-muted-800/60"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                src: member.picture,
                alt: member.name,
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "medium",
                size: "md",
                lead: "tight",
                class: "line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(member.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(member.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(member.email)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(member.email), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto hidden sm:block"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseTag, { rounded: "lg" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(member.role.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(member.role.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode(_component_BaseAvatar, {
                  src: member.picture,
                  alt: member.name,
                  size: "sm"
                }, null, 8, ["src", "alt"]),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    weight: "medium",
                    size: "md",
                    lead: "tight",
                    class: "line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(member.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-400 line-clamp-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(member.email), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "ms-auto hidden sm:block" }, [
                  createVNode(_component_BaseTag, { rounded: "lg" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(member.role.label), 1)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="ltablet:col-span-7 col-span-12 lg:col-span-7">`);
      if (unref(currentMember) !== void 0) {
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_BaseCard, { rounded: "md" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-6"${_scopeId}><div class="py-10 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "medium",
                size: "xl",
                lead: "none",
                class: "mb-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400 mx-auto max-w-xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0647\u06CC\u0686 \u0639\u0636\u0648\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A. \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u0633\u0627\u0632\u0645\u0627\u0646 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0628\u06CC\u0646\u06CC\u062F. `);
                  } else {
                    return [
                      createTextVNode(" \u0647\u06CC\u0686 \u0639\u0636\u0648\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A. \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u0633\u0627\u0632\u0645\u0627\u0646 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0628\u06CC\u0646\u06CC\u062F. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-6" }, [
                  createVNode("div", { class: "py-10 text-center" }, [
                    createVNode(_component_BaseHeading, {
                      weight: "medium",
                      size: "xl",
                      lead: "none",
                      class: "mb-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400 mx-auto max-w-xs"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0647\u06CC\u0686 \u0639\u0636\u0648\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A. \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u0633\u0627\u0632\u0645\u0627\u0646 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631\u06CC \u0628\u0628\u06CC\u0646\u06CC\u062F. ")
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
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/members.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
