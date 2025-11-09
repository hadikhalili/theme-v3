import { _ as _sfc_main$1 } from './BaseBreadcrumb-1ZihDLwr.mjs';
import { j as useRoute, u as useRouter, J as useAsyncData, R as queryContent, S as navigateTo, D as useState, T as useMetaKey, a as __nuxt_component_2, e as _sfc_main$e } from './server.mjs';
import _sfc_main$2 from './ContentRenderer-2lPf50Vs.mjs';
import _sfc_main$3 from './DocComponentDemo-CFHBshJt.mjs';
import { _ as _sfc_main$4 } from './TairoToc-CLxKdbp5.mjs';
import { defineComponent, computed, withAsyncContext, watchEffect, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useContentHead } from './head-LEtz63Jh.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './BaseDropdownItem-vorQzQkQ.mjs';
import '@headlessui/vue';
import '@headlessui-float/vue';
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
import './ContentRendererMarkdown-BE6ndGIt.mjs';
import 'property-information';
import './TairoTocAnchor-DaJFWAih.mjs';
import './BaseCheckbox-CfxLaouc.mjs';
import './IconCheck--xcA1MPZ.mjs';
import './CodeGroup-BCSaQyMR.mjs';
import './BaseButtonIcon-B-NRPykg.mjs';
import './AddonMarkdownRemark-DRrl86xF.mjs';
import './BaseProse-BoVg3KNx.mjs';
import './ssrSlot-BTqzHIxV.mjs';
import './MDCSlot-Bm6IuY7a.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const contentPath = computed(() => {
      const slug = route.params?.slug;
      if (!slug || slug.length === 0) {
        return "/documentation";
      }
      return `/documentation/${slug.join("/")}`;
    });
    const [{ data, pending }, { data: tree }] = ([__temp, __restore] = withAsyncContext(() => Promise.all([
      useAsyncData(
        "page-data",
        () => queryContent().where({
          _path: contentPath.value
        }).findOne(),
        {
          watch: [contentPath]
        }
      ),
      useAsyncData(
        "page-tree",
        () => {
          const path = contentPath.value.split("/");
          path.shift();
          path.pop();
          const paths = [];
          for (let i = 0; i < path.length; i++) {
            const parentPath = `/${path.slice(0, i + 1).join("/")}`;
            paths.push(parentPath);
            paths.push(`${parentPath}/_dir`);
          }
          paths.push(`${contentPath.value}/_dir`);
          return queryContent().where({
            _path: { $in: paths }
          }).without(["body"]).find();
        },
        {
          watch: [contentPath]
        }
      )
    ])), __temp = await __temp, __restore(), __temp);
    if (!data.value) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/documentation")), await __temp, __restore();
    } else if (data.value.redirect) {
      [__temp, __restore] = withAsyncContext(() => navigateTo(data.value?.redirect)), await __temp, __restore();
    }
    watchEffect(() => {
      const title = data.value?.title;
      if (pending.value)
        return;
      route.meta.title = title || "\u0635\u0641\u062D\u0647 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F";
    });
    useContentHead(data);
    const breadcrumb = computed(() => {
      const items = [];
      const indexRoute = router.resolve("/");
      if (indexRoute.meta.breadcrumb === false)
        ;
      else if (indexRoute.meta.breadcrumb) {
        const breadcrumbItem = indexRoute.meta.breadcrumb;
        items.push({
          to: indexRoute.path,
          ...breadcrumbItem
        });
      } else if (indexRoute.meta.title) {
        items.push({
          label: indexRoute.meta.title,
          to: indexRoute.path
        });
      }
      for (const item of tree.value || []) {
        if (items.find((i) => i.to === item._path)) {
          continue;
        }
        items.push({
          label: item.title,
          to: item._path.endsWith("_dir") ? item._path.replace("/_dir", "") : item._path
        });
      }
      if (data.value?.title) {
        items.push({
          label: data.value?.title
        });
      }
      return items;
    });
    useState("search-open", () => false);
    const metaKey = useMetaKey();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseBreadcrumb = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_ContentRenderer = _sfc_main$2;
      const _component_DocComponentDemo = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_TairoToc = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_BaseBreadcrumb, { items: unref(breadcrumb) }, null, _parent));
      _push(`<button type="button" class="dark:bg-muted-800 border-muted-200 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500 group mb-6 flex items-center gap-2 rounded-xl border bg-white py-1 pe-1 ps-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:search",
        class: "size-4 transition-colors duration-300"
      }, null, _parent));
      _push(`<span class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 group-hover:text-muted-600 dark:group-hover:text-muted-100 rounded-lg border bg-white px-2 py-0.5 shadow transition-colors duration-300"><kbd class="font-sans text-sm tracking-wide">${ssrInterpolate(unref(metaKey))} + k</kbd></span></button></div><div class="flex"><div class="w-full lg:w-3/4">`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: unref(data)
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DocComponentDemo, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><p${_scopeId2}>\u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u0622\u0646 \u0647\u0633\u062A\u06CC\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.</p><div class="flex flex-row gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButton, { to: "https://tairo.cssninja.io/documentation" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u0631\u06A9\u0632 `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u0631\u06A9\u0632 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseButton, {
                    color: "none",
                    to: "/"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", null, "\u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u0622\u0646 \u0647\u0633\u062A\u06CC\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F."),
                      createVNode("div", { class: "flex flex-row gap-6" }, [
                        createVNode(_component_BaseButton, { to: "https://tairo.cssninja.io/documentation" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u0631\u06A9\u0632 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_BaseButton, {
                          color: "none",
                          to: "/"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647 ")
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
              createVNode(_component_DocComponentDemo, null, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", null, "\u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0628\u0647 \u062F\u0646\u0628\u0627\u0644 \u0622\u0646 \u0647\u0633\u062A\u06CC\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F."),
                    createVNode("div", { class: "flex flex-row gap-6" }, [
                      createVNode(_component_BaseButton, { to: "https://tairo.cssninja.io/documentation" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u0631\u06A9\u0632 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        color: "none",
                        to: "/"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647 ")
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
      _push(`</div>`);
      if (!unref(pending) && unref(data) && unref(data).toc !== false) {
        _push(`<div class="relative hidden lg:me-6 lg:block lg:w-1/4 xl:me-0">`);
        _push(ssrRenderComponent(_component_TairoToc, {
          key: `toc-${unref(data)._path}`,
          class: "fixed pb-20 pe-1 ps-20 pt-2"
        }, {
          "nav-end": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="dark:bg-muted-900 bg-muted-100 pointer-events-none fixed bottom-0 z-10 h-20 w-[212px] blur-xl"${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "dark:bg-muted-900 bg-muted-100 pointer-events-none fixed bottom-0 z-10 h-20 w-[212px] blur-xl" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/pages/documentation/[...slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
