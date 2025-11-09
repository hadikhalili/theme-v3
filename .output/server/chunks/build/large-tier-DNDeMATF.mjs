import { e as _sfc_main$e, a as __nuxt_component_2, x as _sfc_main$I, k as _sfc_main$x } from './server.mjs';
import { defineComponent, ref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "large-tier",
  __ssrInlineRender: true,
  setup(__props) {
    const isModal2XlOpen = ref(false);
    const isModal3XlOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoModal = _sfc_main$I;
      const _component_BaseButtonClose = _sfc_main$x;
      _push(`<!--[--><div class="flex gap-x-2"><div class="flex items-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "gap-2",
        onClick: ($event) => isModal2XlOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:app-window",
              class: "w-4"
            }, null, _parent2, _scopeId));
            _push2(` 2XL dialog `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:app-window",
                class: "w-4"
              }),
              createTextVNode(" 2XL dialog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-end gap-4">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "gap-2",
        onClick: ($event) => isModal3XlOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:app-window",
              class: "w-4"
            }, null, _parent2, _scopeId));
            _push2(` \u062F\u06CC\u0627\u0644\u0648\u06AF \u06F3XL `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:app-window",
                class: "w-4"
              }),
              createTextVNode(" \u062F\u06CC\u0627\u0644\u0648\u06AF \u06F3XL ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoModal, {
        open: isModal2XlOpen.value,
        size: "2xl",
        onClose: ($event) => isModal2XlOpen.value = false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> 2\u062F\u06CC\u0627\u0644\u0648\u06AF XL </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, {
              onClick: ($event) => isModal2XlOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " 2\u062F\u06CC\u0627\u0644\u0648\u06AF XL "),
                createVNode(_component_BaseButtonClose, {
                  onClick: ($event) => isModal2XlOpen.value = false
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="flex gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              onClick: ($event) => isModal2XlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u062F \u06A9\u0631\u062F\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              variant: "solid",
              onClick: ($event) => isModal2XlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0642\u0628\u0648\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u0642\u0628\u0648\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "flex gap-x-2" }, [
                  createVNode(_component_BaseButton, {
                    onClick: ($event) => isModal2XlOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    variant: "solid",
                    onClick: ($event) => isModal2XlOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0642\u0628\u0648\u0644 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="mx-auto w-full max-w-xs text-center"${_scopeId}><div class="relative mx-auto mb-4 flex size-24"${_scopeId}><img src="https://media.cssninja.io/shuriken/avatars/13.svg" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"${_scopeId}> \u062F\u0639\u0648\u062A \u062C\u062F\u06CC\u062F </h3><p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "mx-auto w-full max-w-xs text-center" }, [
                  createVNode("div", { class: "relative mx-auto mb-4 flex size-24" }, [
                    createVNode("img", {
                      src: "https://media.cssninja.io/shuriken/avatars/13.svg",
                      class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                      alt: ""
                    })
                  ]),
                  createVNode("h3", { class: "font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white" }, " \u062F\u0639\u0648\u062A \u062C\u062F\u06CC\u062F "),
                  createVNode("p", { class: "font-alt text-muted-500 dark:text-muted-400 text-sm leading-5" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F. ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoModal, {
        open: isModal3XlOpen.value,
        size: "3xl",
        onClose: ($event) => isModal3XlOpen.value = false
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> \u062F\u06CC\u0627\u0644\u0648\u06AF \u06F3XL </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, {
              onClick: ($event) => isModal3XlOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " \u062F\u06CC\u0627\u0644\u0648\u06AF \u06F3XL "),
                createVNode(_component_BaseButtonClose, {
                  onClick: ($event) => isModal3XlOpen.value = false
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="flex gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              onClick: ($event) => isModal3XlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u062F \u06A9\u0631\u062F\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              variant: "solid",
              onClick: ($event) => isModal3XlOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0642\u0628\u0648\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u0642\u0628\u0648\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "flex gap-x-2" }, [
                  createVNode(_component_BaseButton, {
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u062F \u06A9\u0631\u062F\u0646 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_BaseButton, {
                    color: "primary",
                    variant: "solid",
                    onClick: ($event) => isModal3XlOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0642\u0628\u0648\u0644 ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 md:p-6"${_scopeId}><div class="mx-auto w-full max-w-xs text-center"${_scopeId}><div class="relative mx-auto mb-4 flex size-24"${_scopeId}><img src="https://media.cssninja.io/shuriken/avatars/17.svg" class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent" alt=""${_scopeId}></div><h3 class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"${_scopeId}> \u062F\u0639\u0648\u062A \u062C\u062F\u06CC\u062F </h3><p class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F. </p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 md:p-6" }, [
                createVNode("div", { class: "mx-auto w-full max-w-xs text-center" }, [
                  createVNode("div", { class: "relative mx-auto mb-4 flex size-24" }, [
                    createVNode("img", {
                      src: "https://media.cssninja.io/shuriken/avatars/17.svg",
                      class: "max-w-full rounded-full object-cover shadow-sm dark:border-transparent",
                      alt: ""
                    })
                  ]),
                  createVNode("h3", { class: "font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white" }, " \u062F\u0639\u0648\u062A \u062C\u062F\u06CC\u062F "),
                  createVNode("p", { class: "font-alt text-muted-500 dark:text-muted-400 text-sm leading-5" }, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u0650\u062A\u060C \u06A9\u0627\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A\u060C \u0633\u062F \u062F\u0648 \u0627\u06CC\u0648\u0633\u0645\u0648\u062F. ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/modal/large-tier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
