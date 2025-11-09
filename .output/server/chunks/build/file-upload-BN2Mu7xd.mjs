import { _ as _sfc_main$1 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './BaseProgress-Bi06w8MA.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, withModifiers, openBlock, createBlock, withKeys, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { f as formatFileSize } from './format-files-DjupgqMN.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-C8uLH2hK.mjs';
import './file-preview-DSqAOr0Y.mjs';
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
  __name: "file-upload",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadedFiles = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInputFileHeadless = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseProgress = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-xl" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(uploadedFiles),
        "onUpdate:modelValue": ($event) => isRef(uploadedFiles) ? uploadedFiles.value = $event : null,
        multiple: ""
      }, {
        default: withCtx(({ open, remove, preview, drop, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 flex items-center gap-2"${_scopeId}><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627</span></button><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-up",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F</span></button></div><div role="button" tabindex="-1" class=""${_scopeId}>`);
            if (!files?.length) {
              _push2(`<div class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300" tabindex="0" role="button"${_scopeId}><div class="p-5 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi-light:cloud-upload",
                class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
              }, null, _parent2, _scopeId));
              _push2(`<h4 class="text-muted-400 font-sans text-sm"${_scopeId}> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F </h4><div${_scopeId}><span class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"${_scopeId}> \u06CC\u0627 </span></div><label for="file" class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"${_scopeId}> \u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 </label></div></div>`);
            } else {
              _push2(`<ul class="mt-6 space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(files, (file) => {
                _push2(`<li${_scopeId}><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><div class="shrink-0"${_scopeId}>`);
                if (file.type.startsWith("image")) {
                  _push2(`<img class="size-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", preview(file).value)} alt="Image preview"${_scopeId}>`);
                } else {
                  _push2(`<img class="size-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="Image preview"${_scopeId}>`);
                }
                _push2(`</div><div class="font-sans"${_scopeId}><span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"${_scopeId}>${ssrInterpolate(file.name)}</span><span class="text-muted-400 block text-xs"${_scopeId}>${ssrInterpolate(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size))}</span></div></div><div class="${ssrRenderClass(["opacity-100", "ms-auto w-32 px-4 transition-opacity duration-300"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseProgress, {
                  value: 0,
                  size: "xs",
                  color: "success"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex gap-2"${_scopeId}><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60" disabled type="button" tooltip="\u0644\u063A\u0648"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:slash",
                  class: "size-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>\u0644\u063A\u0648</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:arrow-up",
                  class: "size-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>Upload</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="\u062D\u0630\u0641"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:x",
                  class: "size-4"
                }, null, _parent2, _scopeId));
                _push2(`<span class="sr-only"${_scopeId}>\u062D\u0630\u0641</span></button></div></div></li>`);
              });
              _push2(`<!--]--></ul>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                createVNode("button", {
                  type: "button",
                  class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                  tooltip: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
                  onClick: open
                }, [
                  createVNode(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-4"
                  }),
                  createVNode("span", { class: "sr-only" }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627")
                ], 8, ["onClick"]),
                createVNode("button", {
                  type: "button",
                  class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                  tooltip: "\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F"
                }, [
                  createVNode(_component_Icon, {
                    name: "lucide:arrow-up",
                    class: "size-4"
                  }),
                  createVNode("span", { class: "sr-only" }, "\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F")
                ])
              ]),
              createVNode("div", {
                role: "button",
                tabindex: "-1",
                class: "",
                onDragenter: withModifiers(() => {
                }, ["stop", "prevent"]),
                onDragover: withModifiers(() => {
                }, ["stop", "prevent"]),
                onDrop: drop
              }, [
                !files?.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",
                  tabindex: "0",
                  role: "button",
                  onClick: open,
                  onKeydown: withKeys(withModifiers(open, ["prevent"]), ["enter"])
                }, [
                  createVNode("div", { class: "p-5 text-center" }, [
                    createVNode(_component_Icon, {
                      name: "mdi-light:cloud-upload",
                      class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
                    }),
                    createVNode("h4", { class: "text-muted-400 font-sans text-sm" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F "),
                    createVNode("div", null, [
                      createVNode("span", { class: "text-muted-400 font-sans text-[0.7rem] font-semibold uppercase" }, " \u06CC\u0627 ")
                    ]),
                    createVNode("label", {
                      for: "file",
                      class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                    }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 ")
                  ])
                ], 40, ["onClick", "onKeydown"])) : (openBlock(), createBlock("ul", {
                  key: 1,
                  class: "mt-6 space-y-2"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(files, (file) => {
                    return openBlock(), createBlock("li", {
                      key: file.name
                    }, [
                      createVNode("div", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode("div", { class: "shrink-0" }, [
                            file.type.startsWith("image") ? (openBlock(), createBlock("img", {
                              key: 0,
                              class: "size-14 rounded-xl object-cover object-center",
                              src: preview(file).value,
                              alt: "Image preview"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                              key: 1,
                              class: "size-14 rounded-xl object-cover object-center",
                              src: _imports_0,
                              alt: "Image preview"
                            }))
                          ]),
                          createVNode("div", { class: "font-sans" }, [
                            createVNode("span", { class: "text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm" }, toDisplayString(file.name), 1),
                            createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size)), 1)
                          ])
                        ]),
                        createVNode("div", {
                          class: ["ms-auto w-32 px-4 transition-opacity duration-300", "opacity-100"]
                        }, [
                          createVNode(_component_BaseProgress, {
                            value: 0,
                            size: "xs",
                            color: "success"
                          })
                        ]),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode("button", {
                            class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
                            disabled: "",
                            type: "button",
                            tooltip: "\u0644\u063A\u0648"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:slash",
                              class: "size-4"
                            }),
                            createVNode("span", { class: "sr-only" }, "\u0644\u063A\u0648")
                          ]),
                          createVNode("button", {
                            class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                            type: "button",
                            tooltip: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-up",
                              class: "size-4"
                            }),
                            createVNode("span", { class: "sr-only" }, "Upload")
                          ]),
                          createVNode("button", {
                            class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                            type: "button",
                            tooltip: "\u062D\u0630\u0641",
                            onClick: withModifiers(($event) => remove(file), ["prevent"])
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:x",
                              class: "size-4"
                            }),
                            createVNode("span", { class: "sr-only" }, "\u062D\u0630\u0641")
                          ], 8, ["onClick"])
                        ])
                      ])
                    ]);
                  }), 128))
                ]))
              ], 40, ["onDragenter", "onDragover", "onDrop"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-file-headless/file-upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
