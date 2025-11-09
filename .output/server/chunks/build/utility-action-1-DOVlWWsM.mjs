import { h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { g as getRandomColor } from './colors-DmsKZ5uA.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "utility-action-1",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-8" }, _attrs))}><div class="mx-auto w-full max-w-md">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col py-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              class: "mx-auto",
              size: "xl",
              src: "/img/avatars/10.svg",
              "badge-src": "/img/stacks/reactjs.svg"
            }, null, _parent2, _scopeId));
            _push2(`<div class="mx-auto mb-4 max-w-xs text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "md",
              weight: "medium",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u06A9\u0646\u062F\u0631\u0627 \u062F\u0627\u0628\u0644\u06CC\u0648. \u0634\u0645\u0627 \u0631\u0627 \u062F\u0639\u0648\u062A \u06A9\u0631\u062F\u0647 \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 <span class="text-primary-500"${_scopeId2}>\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u200C\u062D\u0644 \u0628\u0627\u0646\u06A9\u06CC</span>`);
                } else {
                  return [
                    createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u062F\u0627\u0628\u0644\u06CC\u0648. \u0634\u0645\u0627 \u0631\u0627 \u062F\u0639\u0648\u062A \u06A9\u0631\u062F\u0647 \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 "),
                    createVNode("span", { class: "text-primary-500" }, "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u200C\u062D\u0644 \u0628\u0627\u0646\u06A9\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mx-auto max-w-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseCard, {
              elevated: "",
              class: "p-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseHeading, {
                    tag: "h3",
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-400 mb-2 !text-[0.65rem] uppercase"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u067E\u06CC\u0627\u0645 \u0627\u0632 \u06A9\u0646\u062F\u0631\u0627 `);
                      } else {
                        return [
                          createTextVNode(" \u067E\u06CC\u0627\u0645 \u0627\u0632 \u06A9\u0646\u062F\u0631\u0627 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C \u0648\u0627\u0642\u0639\u0627\u064B \u0639\u0627\u0644\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u0627\u06AF\u0631 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u062F. \u0647\u0631 \u0631\u0648\u0632 \u062A\u0639\u062F\u0627\u062F \u0632\u06CC\u0627\u062F\u06CC \u06A9\u0627\u0631 \u0638\u0627\u0647\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u062A\u06CC\u0645 \u06A9\u0645\u06CC \u062A\u062D\u062A \u0641\u0634\u0627\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u062E\u0648\u0634\u062D\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u06CC\u0645 \u06A9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062A\u06CC\u0645 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u0645. `);
                      } else {
                        return [
                          createTextVNode(" \u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C \u0648\u0627\u0642\u0639\u0627\u064B \u0639\u0627\u0644\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u0627\u06AF\u0631 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u062F. \u0647\u0631 \u0631\u0648\u0632 \u062A\u0639\u062F\u0627\u062F \u0632\u06CC\u0627\u062F\u06CC \u06A9\u0627\u0631 \u0638\u0627\u0647\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u062A\u06CC\u0645 \u06A9\u0645\u06CC \u062A\u062D\u062A \u0641\u0634\u0627\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u062E\u0648\u0634\u062D\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u06CC\u0645 \u06A9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062A\u06CC\u0645 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u0645. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseHeading, {
                      tag: "h3",
                      size: "xs",
                      weight: "medium",
                      class: "text-muted-400 mb-2 !text-[0.65rem] uppercase"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u067E\u06CC\u0627\u0645 \u0627\u0632 \u06A9\u0646\u062F\u0631\u0627 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C \u0648\u0627\u0642\u0639\u0627\u064B \u0639\u0627\u0644\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u0627\u06AF\u0631 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u062F. \u0647\u0631 \u0631\u0648\u0632 \u062A\u0639\u062F\u0627\u062F \u0632\u06CC\u0627\u062F\u06CC \u06A9\u0627\u0631 \u0638\u0627\u0647\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u062A\u06CC\u0645 \u06A9\u0645\u06CC \u062A\u062D\u062A \u0641\u0634\u0627\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u062E\u0648\u0634\u062D\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u06CC\u0645 \u06A9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062A\u06CC\u0645 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u0645. ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 flex items-center justify-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/25.svg",
              size: "xs",
              "data-nui-tooltip": "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "xs",
              text: "OD",
              "data-nui-tooltip": "Oliver D.",
              class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/16.svg",
              size: "xs",
              "data-nui-tooltip": "\u0647\u0631\u0645\u0627\u0646 \u0645."
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648 \u06F5 \u0646\u0641\u0631 \u062F\u06CC\u06AF\u0631 \u0639\u0636\u0648 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u0646\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0648 \u06F5 \u0646\u0641\u0631 \u062F\u06CC\u06AF\u0631 \u0639\u0636\u0648 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u0646\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex items-center justify-between gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0631\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0631\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u0630\u06CC\u0631\u0641\u062A\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u067E\u0630\u06CC\u0631\u0641\u062A\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col py-2" }, [
                createVNode(_component_BaseAvatar, {
                  class: "mx-auto",
                  size: "xl",
                  src: "/img/avatars/10.svg",
                  "badge-src": "/img/stacks/reactjs.svg"
                }),
                createVNode("div", { class: "mx-auto mb-4 max-w-xs text-center" }, [
                  createVNode(_component_BaseHeading, {
                    tag: "h2",
                    size: "md",
                    weight: "medium",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u06A9\u0646\u062F\u0631\u0627 \u062F\u0627\u0628\u0644\u06CC\u0648. \u0634\u0645\u0627 \u0631\u0627 \u062F\u0639\u0648\u062A \u06A9\u0631\u062F\u0647 \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 "),
                      createVNode("span", { class: "text-primary-500" }, "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627\u0647\u200C\u062D\u0644 \u0628\u0627\u0646\u06A9\u06CC")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mx-auto max-w-sm" }, [
                  createVNode(_component_BaseCard, {
                    elevated: "",
                    class: "p-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BaseHeading, {
                        tag: "h3",
                        size: "xs",
                        weight: "medium",
                        class: "text-muted-400 mb-2 !text-[0.65rem] uppercase"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u067E\u06CC\u0627\u0645 \u0627\u0632 \u06A9\u0646\u062F\u0631\u0627 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        class: "text-muted-500 dark:text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0633\u0644\u0627\u0645 \u0645\u0627\u06CC\u0627\u060C \u0648\u0627\u0642\u0639\u0627\u064B \u0639\u0627\u0644\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F \u0627\u06AF\u0631 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0628\u0647 \u0645\u0627 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u062F. \u0647\u0631 \u0631\u0648\u0632 \u062A\u0639\u062F\u0627\u062F \u0632\u06CC\u0627\u062F\u06CC \u06A9\u0627\u0631 \u0638\u0627\u0647\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u062A\u06CC\u0645 \u06A9\u0645\u06CC \u062A\u062D\u062A \u0641\u0634\u0627\u0631 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u062E\u0648\u0634\u062D\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u06CC\u0645 \u06A9\u0647 \u0634\u0645\u0627 \u0631\u0627 \u062F\u0631 \u062A\u06CC\u0645 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u0645. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-6 flex items-center justify-center gap-3" }, [
                    createVNode(_component_BaseAvatar, {
                      src: "/img/avatars/25.svg",
                      size: "xs",
                      "data-nui-tooltip": "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644."
                    }),
                    createVNode(_component_BaseAvatar, {
                      size: "xs",
                      text: "OD",
                      "data-nui-tooltip": "Oliver D.",
                      class: ("getRandomColor" in _ctx ? _ctx.getRandomColor : unref(getRandomColor))()
                    }, null, 8, ["class"]),
                    createVNode(_component_BaseAvatar, {
                      src: "/img/avatars/16.svg",
                      size: "xs",
                      "data-nui-tooltip": "\u0647\u0631\u0645\u0627\u0646 \u0645."
                    })
                  ]),
                  createVNode("div", { class: "mt-2 text-center" }, [
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0648 \u06F5 \u0646\u0641\u0631 \u062F\u06CC\u06AF\u0631 \u0639\u0636\u0648 \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0647\u0633\u062A\u0646\u062F ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "mt-6 flex items-center justify-between gap-2" }, [
                    createVNode(_component_BaseButton, { class: "w-full" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0631\u062F ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseButton, {
                      color: "primary",
                      class: "w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u067E\u0630\u06CC\u0631\u0641\u062A\u0646 ")
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/utility-action-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
