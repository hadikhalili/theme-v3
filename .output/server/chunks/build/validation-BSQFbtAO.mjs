import { h as _sfc_main$u, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseTextarea-BGdIJfqV.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
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
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "validation",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      FIRSTNAME_REQUIRED: "\u0646\u0627\u0645 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      LASTNAME_REQUIRED: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      EMAIL_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      MESSAGE_REQUIRED: "\u067E\u06CC\u0627\u0645 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F"
    };
    const zodSchema = z.object({
      firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
      lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      message: z.string().min(1, VALIDATION_TEXT.MESSAGE_REQUIRED)
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    };
    const {
      handleSubmit,
      isSubmitting,
      setFieldError,
      meta,
      values,
      errors,
      resetForm,
      setFieldValue,
      setErrors
    } = useForm({
      validationSchema,
      initialValues
    });
    const success = ref(false);
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F");
      }
    });
    const toaster = useToaster();
    const onSubmit = handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("message-send-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.firstName === "Hanzo") {
              setTimeout(() => reject(new Error("\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F")), 2e3);
            }
            setTimeout(resolve, 4e3);
          });
          toaster.clearAll();
          toaster.show({
            title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
            message: `\u067E\u06CC\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F") {
            setFieldError("firstName", "\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A");
            (void 0).documentElement.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            toaster.clearAll();
            toaster.show({
              title: "Oops!",
              message: "\u0644\u0637\u0641\u0627\u064B \u062E\u0637\u0627\u0647\u0627\u06CC \u0641\u0631\u0645 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F",
              color: "danger",
              icon: "lucide:alert-triangle",
              closable: true
            });
          }
          return;
        }
        resetForm();
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        success.value = true;
        setTimeout(() => {
          success.value = false;
        }, 3e3);
      },
      (error) => {
        success.value = false;
        console.log("message-send-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseTextarea = _sfc_main$1;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form action="" method="POST" novalidate${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "firstName" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0646\u0627\u0645",
                    placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0627\u0646",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "text",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u0646\u0627\u0645",
                      placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0627\u0646",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "text",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "lastName" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                    placeholder: "ex: Doe",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "text",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                      placeholder: "ex: Doe",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "text",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "email" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "email",
                    label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                    placeholder: "ex: ghasem@eltheme.ir",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "email",
                      label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                      placeholder: "ex: ghasem@eltheme.ir",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "message" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    label: "\u067E\u06CC\u0627\u0645",
                    placeholder: "\u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      label: "\u067E\u06CC\u0627\u0645",
                      placeholder: "\u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              class: "w-full",
              color: "primary",
              disabled: unref(isSubmitting),
              loading: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("form", {
                action: "",
                method: "POST",
                novalidate: "",
                onSubmit: withModifiers(unref(onSubmit), ["prevent"])
              }, [
                createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                  createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                    createVNode(unref(Field), { name: "firstName" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          label: "\u0646\u0627\u0645",
                          placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0627\u0646",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                    createVNode(unref(Field), { name: "lastName" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                          placeholder: "ex: Doe",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(unref(Field), { name: "email" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          type: "email",
                          label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                          placeholder: "ex: ghasem@eltheme.ir",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(unref(Field), { name: "message" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseTextarea, {
                          label: "\u067E\u06CC\u0627\u0645",
                          placeholder: "\u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(_component_BaseButton, {
                      type: "submit",
                      class: "w-full",
                      color: "primary",
                      disabled: unref(isSubmitting),
                      loading: unref(isSubmitting)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 ")
                      ]),
                      _: 1
                    }, 8, ["disabled", "loading"])
                  ])
                ])
              ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
