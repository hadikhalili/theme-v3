import { _ as _sfc_main$1 } from './DemoWizardStepTitle-DDg6AMcY.mjs';
import { _ as _sfc_main$2 } from './BaseFullscreenDropfile-CgoQnI75.mjs';
import { _ as _sfc_main$3 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-B-NRPykg.mjs';
import { Q as useHead, a as __nuxt_component_2, A as _sfc_main$E, d as _sfc_main$D } from './server.mjs';
import { _ as _sfc_main$5 } from './BaseTextarea-BGdIJfqV.mjs';
import { defineComponent, ref, watch, unref, isRef, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { u as useNinjaFilePreview } from './file-preview-DSqAOr0Y.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-C8uLH2hK.mjs';
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
  __name: "step-2",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0698\u0647"
    });
    const { data: project, errors, checkPreviousSteps } = useMultiStepForm();
    const avatarPreview = useNinjaFilePreview(() => project.value.avatar);
    const inputFile = ref(null);
    watch(inputFile, (value) => {
      const file = value?.item(0) || null;
      project.value.avatar = file;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseFullscreenDropfile = _sfc_main$2;
      const _component_BaseInputFileHeadless = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInputHelpText = _sfc_main$E;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseTextarea = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto flex w-full max-w-5xl flex-col px-4"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_BaseFullscreenDropfile, {
        icon: "ph:image-duotone",
        "filter-file-dropped": (file) => file.type.startsWith("image"),
        onDrop: (value) => {
          inputFile.value = value;
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFileHeadless, {
        modelValue: unref(inputFile),
        "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null,
        accept: "image/*"
      }, {
        default: withCtx(({ open, remove, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-20"${_scopeId}>`);
            if (unref(avatarPreview)) {
              _push2(`<img${ssrRenderAttr("src", unref(avatarPreview))} alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC" class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC" class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"${_scopeId}>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                tooltip: "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
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
              _push2(`<div class="absolute bottom-0 end-0 z-20"${_scopeId}><div class="relative" tooltip="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0648\u06CC\u0631"${_scopeId}>`);
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
                unref(avatarPreview) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: unref(avatarPreview),
                  alt: "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                  class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: _imports_0,
                  alt: "\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",
                  class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                })),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-0 end-0 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    tooltip: "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
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
                    tooltip: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0635\u0648\u06CC\u0631"
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
      if (unref(errors).fields.avatar) {
        _push(ssrRenderComponent(_component_BaseInputHelpText, { color: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors).fields.avatar)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors).fields.avatar), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="my-4 text-center font-sans"><p class="text-muted-500 text-sm"> \u0622\u067E\u0644\u0648\u062F \u0644\u0648\u06AF\u0648\u06CC \u067E\u0631\u0648\u0698\u0647 </p><p class="text-muted-400 text-xs"> \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0627\u06CC\u0644 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0628\u06CC\u0634 \u0627\u0632 2MB \u0628\u0627\u0634\u062F </p></div><div class="mx-auto flex w-full max-w-sm flex-col gap-3">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(project).name,
        "onUpdate:modelValue": ($event) => unref(project).name = $event,
        error: unref(errors).fields.name,
        rounded: "lg",
        placeholder: "\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647",
        classes: {
          input: "h-12 text-base text-center"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseTextarea, {
        modelValue: unref(project).description,
        "onUpdate:modelValue": ($event) => unref(project).description = $event,
        error: unref(errors).fields.description,
        rounded: "lg",
        placeholder: "\u067E\u0631\u0648\u0698\u0647 \u062E\u0648\u062F \u0631\u0627 \u062A\u0648\u0635\u06CC\u0641 \u06A9\u0646\u06CC\u062F...",
        autogrow: "",
        class: "max-h-52"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
