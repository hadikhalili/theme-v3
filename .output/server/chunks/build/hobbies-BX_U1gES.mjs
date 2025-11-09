import { b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, _ as __nuxt_component_0$3, a as __nuxt_component_2, h as _sfc_main$u } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$2 } from './DemoSearchCompact-B3L12Nx7.mjs';
import { defineComponent, withCtx, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { g as getRandomColor } from './colors-DmsKZ5uA.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/img/illustrations/dashboards/hobbies/hobby-1.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/dashboards/hobbies/hobby-2.svg");
const _imports_2 = publicAssetsURL("/img/illustrations/dashboards/hobbies/hobby-3.svg");
const _imports_3 = publicAssetsURL("/img/illustrations/dashboards/hobbies/hobby-4.svg");
const _imports_4 = publicAssetsURL("/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg");
const _imports_5 = publicAssetsURL("/img/illustrations/dashboards/hobbies/landscape-thumb-7.svg");
const _imports_6 = publicAssetsURL("/img/illustrations/dashboards/hobbies/landscape-thumb-4.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hobbies",
  __ssrInlineRender: true,
  setup(__props) {
    const trending = [
      {
        name: "\u067E\u06CC\u0627\u062F\u0647\u200C\u0631\u0648\u06CC \u0627\u0641\u0631\u0627\u0637\u06CC",
        date: "\u06F9 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "tabler:trekking"
      },
      {
        name: "\u0633\u0641\u0631 \u0631\u0641\u062A\u06CC\u0646\u06AF \u0634\u0631\u06A9\u062A\u06CC",
        date: "\u06F2\u06F3 \u0622\u0628\u0627\u0646 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:rafting"
      },
      {
        name: "\u06A9\u0648\u0647\u0646\u0648\u0631\u062F\u06CC \u062F\u0631 \u0622\u0644\u067E",
        date: "\u06F1\u06F2 \u0622\u0630\u0631 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:climbing"
      },
      {
        name: "\u062A\u0633\u0644\u0637 \u062A\u06CC\u0645 \u062F\u0648\u0686\u0631\u062E\u0647\u200C\u0633\u0648\u0627\u0631\u06CC",
        date: "\u06F2\u06F6 \u0622\u0630\u0631 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:bicycle-store"
      }
    ];
    const popular = [
      {
        name: "\u062A\u0631\u06CC\u0627\u062A\u0644\u0648\u0646 \u0627\u0641\u0631\u0627\u0637\u06CC",
        date: "\u06F1\u06F5 \u0628\u0647\u0645\u0646 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:kayaking"
      },
      {
        name: "\u06A9\u0648\u0647\u0646\u0648\u0631\u062F\u06CC \u062F\u0631 \u062C\u0646\u06AF\u0644",
        date: "\u06F2\u06F1 \u062F\u06CC \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:playground"
      },
      {
        name: "\u0686\u0627\u0644\u0634 \u062A\u06CC\u0631\u0627\u0646\u062F\u0627\u0632\u06CC \u0628\u0627 \u06A9\u0645\u0627\u0646",
        date: "\u06F1\u06F2 \u0622\u0630\u0631 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:archery"
      },
      {
        name: "\u0627\u0633\u06A9\u06CC \u0631\u0648\u06CC \u0622\u0628 \u0627\u0641\u0631\u0627\u0637\u06CC",
        date: "\u06F3\u06F0 \u0622\u0630\u0631 \u06F1\u06F4\u06F0\u06F1",
        image: "/img/illustrations/dashboards/hobbies/landscape-thumb-1.svg",
        icon: "map:waterskiing"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseButtonIcon = _sfc_main$1;
      const _component_DemoSearchCompact = _sfc_main$2;
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
            _push2(`<span${_scopeId}>\u06A9\u0627\u0648\u0634 \u062F\u0631 \u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627</span>`);
          } else {
            return [
              createVNode("span", null, "\u06A9\u0627\u0648\u0634 \u062F\u0631 \u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0628\u0631\u062E\u06CC \u0627\u0632 \u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0646\u0632\u062F\u06CC\u06A9 \u062F\u0631 \u0645\u0646\u0637\u0642\u0647 \u062E\u0648\u062F \u0631\u0627 \u06A9\u0627\u0648\u0634 \u06A9\u0646\u06CC\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0628\u0631\u062E\u06CC \u0627\u0632 \u0628\u0647\u062A\u0631\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0646\u0632\u062F\u06CC\u06A9 \u062F\u0631 \u0645\u0646\u0637\u0642\u0647 \u062E\u0648\u062F \u0631\u0627 \u06A9\u0627\u0648\u0634 \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        color: "primary",
        class: "w-32"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-12 gap-4"><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid grid-cols-12 gap-4"><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex size-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u06A9\u0648\u0647\u0646\u0648\u0631\u062F\u06CC </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "eos-icons:bootstrapping",
              class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_0,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex size-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u06A9\u0648\u0647\u0646\u0648\u0631\u062F\u06CC "),
                  createVNode(_component_Icon, {
                    name: "eos-icons:bootstrapping",
                    class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_1)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex size-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u062F\u0648\u0686\u0631\u062E\u0647\u200C\u0633\u0648\u0627\u0631\u06CC </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fluent-emoji-high-contrast:wheel",
              class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_1,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex size-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u062F\u0648\u0686\u0631\u062E\u0647\u200C\u0633\u0648\u0627\u0631\u06CC "),
                  createVNode(_component_Icon, {
                    name: "fluent-emoji-high-contrast:wheel",
                    class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_2)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex size-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u0627\u06A9\u062A\u0634\u0627\u0641 </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "fa6-solid:compass",
              class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_2,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex size-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u0627\u06A9\u062A\u0634\u0627\u0641 "),
                  createVNode(_component_Icon, {
                    name: "fa6-solid:compass",
                    class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-6 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "group relative flex w-full flex-col overflow-hidden rounded-2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-80 w-full object-cover object-center"${ssrRenderAttr("src", _imports_3)} alt="Hobby cover"${_scopeId}><div class="bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50"${_scopeId}></div><div class="absolute inset-0 z-20 flex size-full flex-col justify-between p-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><h3 class="-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u06A9\u0648\u0647\u0646\u0648\u0631\u062F\u06CC </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:pickaxe",
              class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-between"${_scopeId}><h3 class="translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100"${_scopeId}> \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 </h3>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-right",
              class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("img", {
                class: "h-80 w-full object-cover object-center",
                src: _imports_3,
                alt: "Hobby cover"
              }),
              createVNode("div", { class: "bg-muted-900 absolute inset-0 z-10 size-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" }),
              createVNode("div", { class: "absolute inset-0 z-20 flex size-full flex-col justify-between p-6" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "-translate-y-2 font-sans tracking-wider text-white opacity-0 transition-all delay-100 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u06A9\u0648\u0647\u0646\u0648\u0631\u062F\u06CC "),
                  createVNode(_component_Icon, {
                    name: "mdi:pickaxe",
                    class: "size-5 -translate-y-2 text-white opacity-0 transition-all delay-300 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("h3", { class: "translate-y-2 font-sans text-sm text-white underline underline-offset-4 opacity-0 transition-all delay-500 duration-300 group-hover:translate-y-0 group-hover:opacity-100" }, " \u0645\u0634\u0627\u0647\u062F\u0647 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 "),
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-right",
                    class: "size-4 translate-y-2 text-white opacity-0 transition-all delay-700 duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0645\u062D\u0628\u0648\u0628\u200C\u062A\u0631\u06CC\u0646\u200C\u0647\u0627 \u0627\u06A9\u0646\u0648\u0646</span>`);
          } else {
            return [
              createVNode("span", null, "\u0645\u062D\u0628\u0648\u0628\u200C\u062A\u0631\u06CC\u0646\u200C\u0647\u0627 \u0627\u06A9\u0646\u0648\u0646")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0622\u062E\u0631\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0622\u062E\u0631\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(trending, (item, i) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: i,
          rounded: "lg",
          class: "flex items-center gap-3 p-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(), "flex size-10 shrink-0 items-center justify-center rounded-full"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(item.date)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                rounded: "lg",
                muted: "",
                class: "scale-75"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "size-5 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "size-5 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex size-10 shrink-0 items-center justify-center rounded-full", ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()]
                }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "size-5"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "ms-auto flex items-center" }, [
                  createVNode(_component_BaseButtonIcon, {
                    rounded: "lg",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "size-5 rtl:rotate-180"
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="col-span-12 sm:col-span-6"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "lg",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628</span>`);
          } else {
            return [
              createVNode("span", null, "\u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u062D\u0628\u0648\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u0622\u062E\u0631\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u0622\u062E\u0631\u06CC\u0646 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(popular, (item, p) => {
        _push(ssrRenderComponent(_component_BaseCard, {
          key: p,
          rounded: "lg",
          class: "flex items-center gap-3 p-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))(), "flex size-10 shrink-0 items-center justify-center rounded-full"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: item.icon,
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                lead: "tight",
                class: "text-muted-800 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item.name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-400"${_scopeId2}>${ssrInterpolate(item.date)}</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="ms-auto flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                rounded: "lg",
                muted: "",
                class: "scale-75"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:arrow-right",
                      class: "size-5 rtl:rotate-180"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "size-5 rtl:rotate-180"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["flex size-10 shrink-0 items-center justify-center rounded-full", ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()]
                }, [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "size-5"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-muted-400" }, toDisplayString(item.date), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", { class: "ms-auto flex items-center" }, [
                  createVNode(_component_BaseButtonIcon, {
                    rounded: "lg",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-right",
                        class: "size-5 rtl:rotate-180"
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
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
      _push(ssrRenderComponent(_component_BaseCard, {
        class: "p-6",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_4)} alt="Hello" class="max-w-[48px]"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u06A9\u0648\u0647 \u0648\u06CC\u0644\u0628\u0648\u0631</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u06A9\u0648\u0647 \u0648\u06CC\u0644\u0628\u0648\u0631")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>\u0627\u0648\u0631\u06AF\u0646 \xB7 \u0633\u0637\u062D 3</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "\u0627\u0648\u0631\u06AF\u0646 \xB7 \u0633\u0637\u062D 3")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="ms-auto flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                    rounded: "lg",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "size-5 rtl:rotate-180"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u06A9\u0648\u0647 \u0648\u06CC\u0644\u0628\u0648\u0631")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0627\u0648\u0631\u06AF\u0646 \xB7 \u0633\u0637\u062D 3")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "lg",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_5)} alt="Hello" class="max-w-[48px]"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u063A\u0627\u0631 \u0634\u06CC\u0637\u0627\u0646</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u063A\u0627\u0631 \u0634\u06CC\u0637\u0627\u0646")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>\u0622\u0644\u0627\u0628\u0627\u0645\u0627 \xB7 \u0633\u0637\u062D \u06F7</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "\u0622\u0644\u0627\u0628\u0627\u0645\u0627 \xB7 \u0633\u0637\u062D \u06F7")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="ms-auto flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                    rounded: "lg",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "size-5 rtl:rotate-180"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u063A\u0627\u0631 \u0634\u06CC\u0637\u0627\u0646")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0622\u0644\u0627\u0628\u0627\u0645\u0627 \xB7 \u0633\u0637\u062D \u06F7")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "lg",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "#",
              class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img${ssrRenderAttr("src", _imports_6)} alt="Hello" class="max-w-[48px]"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>\u0622\u0634\u06CC\u0627\u0646\u0647 \u0627\u0698\u062F\u0647\u0627</span>`);
                      } else {
                        return [
                          createVNode("span", null, "\u0622\u0634\u06CC\u0627\u0646\u0647 \u0627\u0698\u062F\u0647\u0627")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-muted-400"${_scopeId3}>\u0645\u06CC\u0633\u0648\u0631\u06CC \xB7 \u0633\u0637\u062D \u06F4</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "text-muted-400" }, "\u0645\u06CC\u0633\u0648\u0631\u06CC \xB7 \u0633\u0637\u062D \u06F4")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="ms-auto flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                    rounded: "lg",
                    muted: "",
                    class: "scale-75"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:arrow-right",
                          class: "size-5 rtl:rotate-180"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u0622\u0634\u06CC\u0627\u0646\u0647 \u0627\u0698\u062F\u0647\u0627")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0645\u06CC\u0633\u0648\u0631\u06CC \xB7 \u0633\u0637\u062D \u06F4")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "lg",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "space-y-1" }, [
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u06A9\u0648\u0647 \u0648\u06CC\u0644\u0628\u0648\u0631")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0627\u0648\u0631\u06AF\u0646 \xB7 \u0633\u0637\u062D 3")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "lg",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_5,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u063A\u0627\u0631 \u0634\u06CC\u0637\u0627\u0646")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0622\u0644\u0627\u0628\u0627\u0645\u0627 \xB7 \u0633\u0637\u062D \u06F7")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "lg",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "#",
                  class: "hover:bg-muted-100 dark:hover:bg-muted-700/50 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-300"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _imports_6,
                      alt: "Hello",
                      class: "max-w-[48px]"
                    }),
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u0622\u0634\u06CC\u0627\u0646\u0647 \u0627\u0698\u062F\u0647\u0627")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, { size: "xs" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-muted-400" }, "\u0645\u06CC\u0633\u0648\u0631\u06CC \xB7 \u0633\u0637\u062D \u06F4")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ms-auto flex items-center" }, [
                      createVNode(_component_BaseButtonIcon, {
                        rounded: "lg",
                        muted: "",
                        class: "scale-75"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-right",
                            class: "size-5 rtl:rotate-180"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/hobbies.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
