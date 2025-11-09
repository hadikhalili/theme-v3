import { t as usePanels, p as onKeyStroke, a as __nuxt_component_2, _ as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CbxAoqtm.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_2 } from './virtual_public-PZo6b2sL.mjs';
import { _ as _imports_1$1, a as _imports_3 } from './virtual_public-DG8qWxjv.mjs';
import { _ as _imports_2$1, a as _imports_1$2 } from './virtual_public-ClFUKM0N.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'notivue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_1 = publicAssetsURL("/img/avatars/16.svg");
const _imports_4 = publicAssetsURL("/img/icons/logos/slicer.svg");
const _imports_6 = publicAssetsURL("/img/icons/logos/metamovies.svg");
const _imports_7 = publicAssetsURL("/img/avatars/13.svg");
const _imports_8 = publicAssetsURL("/img/avatars/24.svg");
const _imports_9 = publicAssetsURL("/img/icons/logos/fastpizza.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoPanelActivity",
  __ssrInlineRender: true,
  setup(__props) {
    const { close } = usePanels();
    onKeyStroke("Escape", close);
    const activeTab = ref("tab-1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(FocusTrap), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-16 w-full items-center justify-between px-10"${_scopeId}><h2 class="font-heading text-muted-700 text-lg font-semibold dark:text-white"${_scopeId}> \u0641\u0639\u0627\u0644\u06CC\u062A </h2><button type="button" class="text-muted-400 nui-focus hover:bg-muted-100 focus:bg-muted-100 hover:text-muted-600 focus:text-muted-600 dark:hover:bg-muted-700 dark:focus:bg-muted-700 flex size-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white dark:focus:text-white"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "feather:chevron-right",
              class: "size-6 rtl:rotate-180"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><div class="flex h-16 items-center px-10"${_scopeId}><div class="bg-muted-100 dark:bg-muted-700 relative flex h-10 w-full items-center rounded-lg font-sans text-sm"${_scopeId}><button type="button" class="${ssrRenderClass([unref(activeTab) === "tab-1" ? "text-white" : "text-muted-400", "nui-focus relative z-20 flex h-full flex-1 items-center justify-center"])}"${_scopeId}><span${_scopeId}>\u062A\u06CC\u0645</span></button><button type="button" class="${ssrRenderClass([unref(activeTab) === "tab-2" ? "text-white" : "text-muted-400", "nui-focus relative z-20 flex h-full flex-1 items-center justify-center"])}"${_scopeId}><span${_scopeId}>\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627</span></button><button type="button" class="${ssrRenderClass([unref(activeTab) === "tab-3" ? "text-white" : "text-muted-400", "nui-focus relative z-20 flex h-full flex-1 items-center justify-center"])}"${_scopeId}><span${_scopeId}>\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC</span></button><div class="${ssrRenderClass([[
              unref(activeTab) === "tab-1" && "ms-0",
              unref(activeTab) === "tab-2" && "ms-[33.3%]",
              unref(activeTab) === "tab-3" && "ms-[66.6%]"
            ], "bg-primary-600 absolute start-0 top-0 z-10 h-full w-1/3 rounded-lg transition-all duration-300"])}"${_scopeId}></div></div></div><div class="nui-slimscroll relative h-[calc(100dvh_-_128px)] w-full overflow-y-auto px-10"${_scopeId}><div class="py-6"${_scopeId}>`);
            if (unref(activeTab) === "tab-1") {
              _push2(`<div class="space-y-4"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0634\u0645\u0627 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644 </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634 </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else if (unref(activeTab) === "tab-2") {
              _push2(`<div class="space-y-4"${_scopeId}><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4"${_scopeId}><div class="mb-4 flex items-center"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-xl"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0634 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> getslicer.io </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg"${_scopeId}><div class="bg-primary-500 absolute start-0 top-0 h-full w-[34%] rounded-lg transition duration-300"${_scopeId}></div></div><div class="flex items-center justify-between"${_scopeId}><span class="text-muted-400 font-sans"${_scopeId}>5/24</span><div class="flex items-end"${_scopeId}><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="bg-muted-200 dark:border-muted-700 dark:bg-muted-800 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><span class="font-alt text-muted-500 dark:text-muted-300 -ms-1 text-sm font-normal uppercase"${_scopeId}> +3 </span></div></div></div></div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4"${_scopeId}><div class="mb-4 flex items-center"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-xl"${_scopeId}><img${ssrRenderAttr("src", _imports_6)} class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0645\u062A\u0627\u0645\u0648\u0648\u06CC\u0632 \u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0634\u062F\u0646\u062F </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> metamovies.co </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg"${_scopeId}><div class="bg-primary-500 absolute start-0 top-0 h-full w-[88%] rounded-lg transition duration-300"${_scopeId}></div></div><div class="flex items-center justify-between"${_scopeId}><span class="text-muted-400 font-sans"${_scopeId}>28/31</span><div class="flex items-end"${_scopeId}><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_7)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_8)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div></div></div></div><div class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4"${_scopeId}><div class="mb-4 flex items-center"${_scopeId}><div class="relative inline-flex size-9 items-center justify-center rounded-xl"${_scopeId}><img${ssrRenderAttr("src", _imports_9)} class="max-w-full rounded-xl object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="ms-3"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u067E\u06CC\u062A\u0632\u0627\u06CC \u0633\u0631\u06CC\u0639 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> fastpizza.com </p></div>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "#",
                class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "feather:arrow-right",
                      class: "size-4 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-right",
                        class: "size-4 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg"${_scopeId}><div class="bg-primary-500 absolute start-0 top-0 h-full w-[62%] rounded-lg transition duration-300"${_scopeId}></div></div><div class="flex items-center justify-between"${_scopeId}><span class="text-muted-400 font-sans"${_scopeId}>25/39</span><div class="flex items-end"${_scopeId}><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><div class="dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div></div></div></div></div>`);
            } else if (unref(activeTab) === "tab-3") {
              _push2(`<div class="space-y-4"${_scopeId}><div${_scopeId}><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:phone-duotone",
                class: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0628\u0627 \u062F\u0646\u06CC \u062F\u0631 \u06A9\u0648\u0644\u0628\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F1:\u06F3\u06F0 \u0642.\u0638 </p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}><div class="relative inline-flex size-7 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div></div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u062C\u0644\u0633\u0647 \u0628\u0627 \u0645\u0627\u06CC\u06A9 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F3:\u06F0\u06F0 </p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:chat-circle-duotone",
                class: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0628\u0647 \u067E\u06CC\u0627\u0645 \u0622\u0646\u06CC \u067E\u0627\u0633\u062E \u062F\u0647\u06CC\u062F </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F3:\u06F4\u06F5 </p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}><div class="relative inline-flex size-7 items-center justify-center rounded-full"${_scopeId}><img${ssrRenderAttr("src", _imports_1$2)} class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div></div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u062C\u0644\u0633\u0647 \u0628\u0627 \u062C\u0627\u0646 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u06F3:\u06F0\u06F0 \u0628.\u0638 </p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:envelope-duotone",
                class: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0627\u0631\u0633\u0627\u0644 \u06A9\u0645\u067E\u06CC\u0646 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F5:\u06F3\u06F0 </p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:selection-all-duotone",
                class: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A \u06F1\u06F6:\u06F3\u06F0 </p></div></div><div class="after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-[&#39;&#39;]"${_scopeId}><div class="border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-[&#39;&#39;]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:note-duotone",
                class: ""
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="ms-10"${_scopeId}><h6 class="font-heading text-muted-800 text-sm font-semibold dark:text-white"${_scopeId}> \u0646\u0648\u0634\u062A\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0631\u0627\u06CC \u0627\u0646\u062F\u06CC </h6><p class="text-muted-400 font-sans text-xs"${_scopeId}> \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F8:\u06F3\u06F0 </p></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-16 w-full items-center justify-between px-10" }, [
                createVNode("h2", { class: "font-heading text-muted-700 text-lg font-semibold dark:text-white" }, " \u0641\u0639\u0627\u0644\u06CC\u062A "),
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
              createVNode("div", { class: "flex h-16 items-center px-10" }, [
                createVNode("div", { class: "bg-muted-100 dark:bg-muted-700 relative flex h-10 w-full items-center rounded-lg font-sans text-sm" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["nui-focus relative z-20 flex h-full flex-1 items-center justify-center", unref(activeTab) === "tab-1" ? "text-white" : "text-muted-400"],
                    onClick: ($event) => activeTab.value = "tab-1"
                  }, [
                    createVNode("span", null, "\u062A\u06CC\u0645")
                  ], 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["nui-focus relative z-20 flex h-full flex-1 items-center justify-center", unref(activeTab) === "tab-2" ? "text-white" : "text-muted-400"],
                    onClick: ($event) => activeTab.value = "tab-2"
                  }, [
                    createVNode("span", null, "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627")
                  ], 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["nui-focus relative z-20 flex h-full flex-1 items-center justify-center", unref(activeTab) === "tab-3" ? "text-white" : "text-muted-400"],
                    onClick: ($event) => activeTab.value = "tab-3"
                  }, [
                    createVNode("span", null, "\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC")
                  ], 10, ["onClick"]),
                  createVNode("div", {
                    class: ["bg-primary-600 absolute start-0 top-0 z-10 h-full w-1/3 rounded-lg transition-all duration-300", [
                      unref(activeTab) === "tab-1" && "ms-0",
                      unref(activeTab) === "tab-2" && "ms-[33.3%]",
                      unref(activeTab) === "tab-3" && "ms-[66.6%]"
                    ]]
                  }, null, 2)
                ])
              ]),
              createVNode("div", { class: "nui-slimscroll relative h-[calc(100dvh_-_128px)] w-full overflow-y-auto px-10" }, [
                createVNode("div", { class: "py-6" }, [
                  unref(activeTab) === "tab-1" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0634\u0645\u0627 "),
                        createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644 ")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "#",
                        class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "feather:arrow-right",
                            class: "size-4 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_1,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631 "),
                        createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 ")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "#",
                        class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "feather:arrow-right",
                            class: "size-4 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_2,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631 "),
                        createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0641\u0631\u0627\u0646\u062A\u200C\u0627\u0646\u062F ")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "#",
                        class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "feather:arrow-right",
                            class: "size-4 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-full" }, [
                        createVNode("img", {
                          src: _imports_1$1,
                          class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "ms-3" }, [
                        createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632 "),
                        createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634 ")
                      ]),
                      createVNode(_component_NuxtLink, {
                        to: "#",
                        class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "feather:arrow-right",
                            class: "size-4 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])) : unref(activeTab) === "tab-2" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "space-y-4"
                  }, [
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "mb-4 flex items-center" }, [
                        createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-xl" }, [
                          createVNode("img", {
                            src: _imports_4,
                            class: "max-w-full rounded-xl object-cover shadow-sm dark:border-transparent",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u067E\u0631\u0648\u0698\u0647 \u0628\u0631\u0634 "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " getslicer.io ")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "#",
                          class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "feather:arrow-right",
                              class: "size-4 rtl:rotate-180"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg" }, [
                        createVNode("div", { class: "bg-primary-500 absolute start-0 top-0 h-full w-[34%] rounded-lg transition duration-300" })
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-muted-400 font-sans" }, "5/24"),
                        createVNode("div", { class: "flex items-end" }, [
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_0,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_2,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_3,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "bg-muted-200 dark:border-muted-700 dark:bg-muted-800 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("span", { class: "font-alt text-muted-500 dark:text-muted-300 -ms-1 text-sm font-normal uppercase" }, " +3 ")
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "mb-4 flex items-center" }, [
                        createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-xl" }, [
                          createVNode("img", {
                            src: _imports_6,
                            class: "max-w-full rounded-xl object-cover shadow-sm dark:border-transparent",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0645\u062A\u0627\u0645\u0648\u0648\u06CC\u0632 \u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u0634\u062F\u0646\u062F "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " metamovies.co ")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "#",
                          class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "feather:arrow-right",
                              class: "size-4 rtl:rotate-180"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg" }, [
                        createVNode("div", { class: "bg-primary-500 absolute start-0 top-0 h-full w-[88%] rounded-lg transition duration-300" })
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-muted-400 font-sans" }, "28/31"),
                        createVNode("div", { class: "flex items-end" }, [
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_7,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_8,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "border-muted-200 dark:border-muted-600 dark:bg-muted-700 rounded-lg border bg-white p-4" }, [
                      createVNode("div", { class: "mb-4 flex items-center" }, [
                        createVNode("div", { class: "relative inline-flex size-9 items-center justify-center rounded-xl" }, [
                          createVNode("img", {
                            src: _imports_9,
                            class: "max-w-full rounded-xl object-cover shadow-sm dark:border-transparent",
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-3" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0628\u0627\u0632\u0637\u0631\u0627\u062D\u06CC \u067E\u06CC\u062A\u0632\u0627\u06CC \u0633\u0631\u06CC\u0639 "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " fastpizza.com ")
                        ]),
                        createVNode(_component_NuxtLink, {
                          to: "#",
                          class: "border-muted-200 nui-focus text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex size-9 items-center justify-center rounded-full border transition-colors duration-300"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "feather:arrow-right",
                              class: "size-4 rtl:rotate-180"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "bg-muted-200 dark:bg-muted-800 relative mb-4 h-1 w-full overflow-hidden rounded-lg" }, [
                        createVNode("div", { class: "bg-primary-500 absolute start-0 top-0 h-full w-[62%] rounded-lg transition duration-300" })
                      ]),
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("span", { class: "text-muted-400 font-sans" }, "25/39"),
                        createVNode("div", { class: "flex items-end" }, [
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_2$1,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "dark:border-muted-700 relative -ms-2 inline-flex size-8 items-center justify-center rounded-full border-2 border-white" }, [
                            createVNode("img", {
                              src: _imports_2,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ])
                        ])
                      ])
                    ])
                  ])) : unref(activeTab) === "tab-3" ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "space-y-4"
                  }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode(_component_Icon, {
                            name: "ph:phone-duotone",
                            class: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0628\u0627 \u062F\u0646\u06CC \u062F\u0631 \u06A9\u0648\u0644\u0628\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F1:\u06F3\u06F0 \u0642.\u0638 ")
                        ])
                      ]),
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode("div", { class: "relative inline-flex size-7 items-center justify-center rounded-full" }, [
                            createVNode("img", {
                              src: _imports_2,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u062C\u0644\u0633\u0647 \u0628\u0627 \u0645\u0627\u06CC\u06A9 "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F3:\u06F0\u06F0 ")
                        ])
                      ]),
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode(_component_Icon, {
                            name: "ph:chat-circle-duotone",
                            class: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0628\u0647 \u067E\u06CC\u0627\u0645 \u0622\u0646\u06CC \u067E\u0627\u0633\u062E \u062F\u0647\u06CC\u062F "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F3:\u06F4\u06F5 ")
                        ])
                      ]),
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode("div", { class: "relative inline-flex size-7 items-center justify-center rounded-full" }, [
                            createVNode("img", {
                              src: _imports_1$2,
                              class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u062C\u0644\u0633\u0647 \u0628\u0627 \u062C\u0627\u0646 "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u06F3:\u06F0\u06F0 \u0628.\u0638 ")
                        ])
                      ]),
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode(_component_Icon, {
                            name: "ph:envelope-duotone",
                            class: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0627\u0631\u0633\u0627\u0644 \u06A9\u0645\u067E\u06CC\u0646 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F5:\u06F3\u06F0 ")
                        ])
                      ]),
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode(_component_Icon, {
                            name: "ph:selection-all-duotone",
                            class: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u0633\u0627\u0639\u062A \u06F1\u06F6:\u06F3\u06F0 ")
                        ])
                      ]),
                      createVNode("div", { class: "after:border-muted-300 dark:after:border-muted-600 relative flex pb-8 after:absolute after:start-4 after:top-10 after:h-[calc(100dvh_-_36px)] after:w-px after:border-s after:content-['']" }, [
                        createVNode("div", { class: "border-muted-200 text-muted-400 after:border-muted-300 dark:border-muted-600 dark:bg-muted-700 dark:after:border-muted-600 relative flex size-9 items-center justify-center rounded-full border bg-white shadow-lg after:absolute after:-end-8 after:top-4 after:h-px after:w-5 after:border-t after:content-['']" }, [
                          createVNode(_component_Icon, {
                            name: "ph:note-duotone",
                            class: ""
                          })
                        ]),
                        createVNode("div", { class: "ms-10" }, [
                          createVNode("h6", { class: "font-heading text-muted-800 text-sm font-semibold dark:text-white" }, " \u0646\u0648\u0634\u062A\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0631\u0627\u06CC \u0627\u0646\u062F\u06CC "),
                          createVNode("p", { class: "text-muted-400 font-sans text-xs" }, " \u0627\u0645\u0631\u0648\u0632 - \u06F1\u06F8:\u06F3\u06F0 ")
                        ])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoPanelActivity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
