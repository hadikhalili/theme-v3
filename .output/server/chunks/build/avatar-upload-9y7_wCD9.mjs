import { _ as _sfc_main$1 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { _ as _sfc_main$2 } from './BaseButtonIcon-B-NRPykg.mjs';
import { a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, computed, ref, unref, isRef, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "avatar-upload",
  __ssrInlineRender: true,
  setup(__props) {
    const currentAvatar = computed(() => "/img/avatars/10.svg");
    const inputFile = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInputFileHeadless = _sfc_main$1;
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><form action="" method="POST">`);
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile),
        "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC" class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", unref(currentAvatar))} alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC" class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"${_scopeId}>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-nui-tooltip": "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
                class: "scale-90",
                onClick: ($event) => remove(files.item(0))
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" data-nui-tooltip="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0648\u06CC\u0631"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                onClick: open
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-4"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative size-20" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                  class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: unref(currentAvatar),
                  alt: "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                  class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                }, null, 8, ["src"])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-nui-tooltip": "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
                    class: "scale-90",
                    onClick: ($event) => remove(files.item(0))
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-nui-tooltip": "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0648\u06CC\u0631"
                  }, [
                    createVNode(_component_BaseButtonIcon, {
                      size: "sm",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-4"
                        })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-file-headless/avatar-upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
