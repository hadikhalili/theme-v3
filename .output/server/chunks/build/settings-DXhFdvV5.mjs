import { h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C, e as _sfc_main$e, d as _sfc_main$D } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseMessage-B_09c9Mc.mjs';
import { _ as _sfc_main$2 } from './TairoFormGroup-B2ka3Eid.mjs';
import { _ as _sfc_main$3 } from './BaseSwitchThin-DO5QSQNt.mjs';
import { _ as _sfc_main$4 } from './BaseSwitchBall-krBQpZlI.mjs';
import { _ as _sfc_main$5 } from './TairoFormSave-DUdgzCNp.mjs';
import { defineComponent, withAsyncContext, ref, computed, shallowRef, watch, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, withDirectives, vShow, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const VALIDATION_TEXT = {
      OLD_PASSWORD_REQUIRED: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0641\u0639\u0644\u06CC \u0634\u0645\u0627 \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0627\u0633\u062A",
      NEW_PASSWORD_LENGTH: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F8 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",
      NEW_PASSWORD_MATCH: "\u0631\u0645\u0632\u0647\u0627\u06CC \u0639\u0628\u0648\u0631 \u0645\u0637\u0627\u0628\u0642\u062A \u0646\u062F\u0627\u0631\u0646\u062F"
    };
    const zodSchema = z.object({
      currentPassword: z.string().min(1, VALIDATION_TEXT.OLD_PASSWORD_REQUIRED),
      newPassword: z.string(),
      confirmPassword: z.string(),
      twoFactor: z.object({
        enabled: z.boolean(),
        phoneNumber: z.string().optional()
      }),
      notifications: z.object({
        enabled: z.boolean(),
        flushLowPriority: z.boolean(),
        marketing: z.boolean(),
        partners: z.boolean()
      })
    }).superRefine((data2, ctx) => {
      if (data2.newPassword) {
        if (data2.newPassword.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.NEW_PASSWORD_LENGTH,
            path: ["newPassword"]
          });
        }
        if (data2.newPassword !== data2.confirmPassword) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.NEW_PASSWORD_MATCH,
            path: ["confirmPassword"]
          });
        }
      }
      if (data2.twoFactor.enabled && !data2.twoFactor.phoneNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "A phone number is required",
          path: ["twoFactor.phoneNumber"]
        });
      }
    });
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/profile", "$gyvVDpg0sV")), __temp = await __temp, __restore();
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      currentPassword: "password",
      newPassword: "",
      confirmPassword: "",
      twoFactor: {
        enabled: false,
        phoneNumber: ""
      },
      notifications: {
        enabled: true,
        flushLowPriority: true,
        marketing: false,
        partners: false
      }
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
    const fieldsWithErrors = computed(() => Object.keys(errors.value).length);
    const phoneInput = ref();
    shallowRef(void 0);
    watch(
      () => values.notifications?.enabled,
      (value) => {
        if (!value) {
          setFieldValue("notifications.flushLowPriority", false);
          setFieldValue("notifications.marketing", false);
          setFieldValue("notifications.partners", false);
        }
      }
    );
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("profile-settings-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.currentPassword === "password") {
              setTimeout(
                () => reject(new Error("\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F")),
                2e3
              );
            }
            setTimeout(resolve, 4e3);
          });
          toaster.clearAll();
          toaster.show({
            title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
            message: `\u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u0634\u0645\u0627 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error2) {
          if (error2.message === "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F") {
            setFieldError("currentPassword", "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0641\u0639\u0644\u06CC \u0634\u0645\u0627 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A");
            (void 0).documentElement.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            toaster.clearAll();
            toaster.show({
              title: "\u0627\u0648\u0647!",
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
      (error2) => {
        success.value = false;
        console.log("profile-settings-error", error2);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseMessage = _sfc_main$1;
      const _component_TairoFormGroup = _sfc_main$2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSwitchThin = _sfc_main$3;
      const _component_BaseSwitchBall = _sfc_main$4;
      const _component_TairoFormSave = _sfc_main$5;
      _push(`<form${ssrRenderAttrs(mergeProps({
        method: "POST",
        action: "",
        class: "w-full pb-16"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between p-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              tag: "h2",
              size: "sm",
              weight: "medium",
              lead: "normal",
              class: "uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A `);
                } else {
                  return [
                    createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0631\u062C\u06CC\u062D\u0627\u062A \u0648 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0631\u062C\u06CC\u062D\u0627\u062A \u0648 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              class: "w-24",
              to: "/layouts/profile"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0644\u063A\u0648 `);
                } else {
                  return [
                    createTextVNode(" \u0644\u063A\u0648 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "w-24",
              disabled: unref(isSubmitting),
              loading: unref(isSubmitting)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0630\u062E\u06CC\u0631\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="p-4"${_scopeId}><div class="mx-auto max-w-lg space-y-12 py-8"${_scopeId}>`);
            if (unref(success)) {
              _push2(ssrRenderComponent(_component_BaseMessage, {
                onClose: ($event) => success.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0634\u0645\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F! `);
                  } else {
                    return [
                      createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0634\u0645\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F! ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(fieldsWithErrors)) {
              _push2(ssrRenderComponent(_component_BaseMessage, {
                type: "danger",
                onClose: () => unref(setErrors)({})
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u06CC\u0646 \u0641\u0631\u0645 \u062F\u0627\u0631\u0627\u06CC ${ssrInterpolate(unref(fieldsWithErrors))} \u062E\u0637\u0627 \u0627\u0633\u062A\u060C \u0644\u0637\u0641\u0627\u064B \u0642\u0628\u0644 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u06CC\u0646 \u0641\u0631\u0645 \u062F\u0627\u0631\u0627\u06CC " + toDisplayString(unref(fieldsWithErrors)) + " \u062E\u0637\u0627 \u0627\u0633\u062A\u060C \u0644\u0637\u0641\u0627\u064B \u0642\u0628\u0644 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "\u062A\u063A\u06CC\u06CC\u0631 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
              sublabel: "\u0628\u0631\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A \u0628\u0647\u062A\u0631 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "currentPassword" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "password",
                          icon: "ph:lock-duotone",
                          placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0642\u062F\u06CC\u0645\u06CC",
                          autocomplete: "current-password",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "password",
                            icon: "ph:lock-duotone",
                            placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0642\u062F\u06CC\u0645\u06CC",
                            autocomplete: "current-password",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "newPassword" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "password",
                          icon: "ph:lock-duotone",
                          placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                          autocomplete: "new-password",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "password",
                            icon: "ph:lock-duotone",
                            placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                            autocomplete: "new-password",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "confirmPassword" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "password",
                          icon: "ph:lock-duotone",
                          placeholder: "\u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "password",
                            icon: "ph:lock-duotone",
                            placeholder: "\u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "currentPassword" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "password",
                              icon: "ph:lock-duotone",
                              placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0642\u062F\u06CC\u0645\u06CC",
                              autocomplete: "current-password",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "newPassword" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "password",
                              icon: "ph:lock-duotone",
                              placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                              autocomplete: "new-password",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "confirmPassword" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "password",
                              icon: "ph:lock-duotone",
                              placeholder: "\u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
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
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "\u062F\u0648 \u0639\u0627\u0645\u0644\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
              sublabel: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "twoFactor.enabled" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchThin, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                          sublabel: "\u0641\u0639\u0627\u0644/\u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchThin, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                            sublabel: "\u0641\u0639\u0627\u0644/\u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).twoFactor?.enabled ? null : { display: "none" })}" class="col-span-12" dir="ltr"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "twoFactor.phoneNumber" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          ref_key: "phoneInput",
                          ref: phoneInput,
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "tel",
                          icon: "ph:phone-duotone",
                          placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                          autocomplete: "tel",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            ref_key: "phoneInput",
                            ref: phoneInput,
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "tel",
                            icon: "ph:phone-duotone",
                            placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                            autocomplete: "tel",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "twoFactor.enabled" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchThin, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                              sublabel: "\u0641\u0639\u0627\u0644/\u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      withDirectives(createVNode("div", {
                        class: "col-span-12",
                        dir: "ltr"
                      }, [
                        createVNode(unref(Field), { name: "twoFactor.phoneNumber" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              ref_key: "phoneInput",
                              ref: phoneInput,
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "tel",
                              icon: "ph:phone-duotone",
                              placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                              autocomplete: "tel",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).twoFactor?.enabled]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627",
              sublabel: "\u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u0646\u062D\u0648\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.enabled" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                          sublabel: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                            sublabel: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).notifications?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.flushLowPriority" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "\u062A\u062E\u0644\u06CC\u0647",
                          sublabel: "\u062D\u0630\u0641 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u06A9\u0645\u200C\u0627\u0647\u0645\u06CC\u062A",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "\u062A\u062E\u0644\u06CC\u0647",
                            sublabel: "\u062D\u0630\u0641 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u06A9\u0645\u200C\u0627\u0647\u0645\u06CC\u062A",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).notifications?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.marketing" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
                          sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
                            sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div style="${ssrRenderStyle(unref(values).notifications?.enabled ? null : { display: "none" })}" class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "notifications.partners" }, {
                    default: withCtx(({ field, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSwitchBall, {
                          "model-value": field.value,
                          disabled: unref(isSubmitting),
                          label: "\u0634\u0631\u06A9\u0627",
                          sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC",
                          color: "primary",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSwitchBall, {
                            "model-value": field.value,
                            disabled: unref(isSubmitting),
                            label: "\u0634\u0631\u06A9\u0627",
                            sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC",
                            color: "primary",
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.enabled" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                              sublabel: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.flushLowPriority" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "\u062A\u062E\u0644\u06CC\u0647",
                              sublabel: "\u062D\u0630\u0641 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u06A9\u0645\u200C\u0627\u0647\u0645\u06CC\u062A",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).notifications?.enabled]
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.marketing" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
                              sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).notifications?.enabled]
                      ]),
                      withDirectives(createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "notifications.partners" }, {
                          default: withCtx(({ field, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSwitchBall, {
                              "model-value": field.value,
                              disabled: unref(isSubmitting),
                              label: "\u0634\u0631\u06A9\u0627",
                              sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC",
                              color: "primary",
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, unref(values).notifications?.enabled]
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between p-4" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    tag: "h2",
                    size: "sm",
                    weight: "medium",
                    lead: "normal",
                    class: "uppercase tracking-wider"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u062A\u0631\u062C\u06CC\u062D\u0627\u062A \u0648 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0634\u0645\u0627 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    class: "w-24",
                    to: "/layouts/profile"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0644\u063A\u0648 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseButton, {
                    type: "submit",
                    color: "primary",
                    class: "w-24",
                    disabled: unref(isSubmitting),
                    loading: unref(isSubmitting)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ])
              ]),
              createVNode("div", { class: "p-4" }, [
                createVNode("div", { class: "mx-auto max-w-lg space-y-12 py-8" }, [
                  unref(success) ? (openBlock(), createBlock(_component_BaseMessage, {
                    key: 0,
                    onClose: ($event) => success.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0634\u0645\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F! ")
                    ]),
                    _: 1
                  }, 8, ["onClose"])) : createCommentVNode("", true),
                  unref(fieldsWithErrors) ? (openBlock(), createBlock(_component_BaseMessage, {
                    key: 1,
                    type: "danger",
                    onClose: () => unref(setErrors)({})
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u06CC\u0646 \u0641\u0631\u0645 \u062F\u0627\u0631\u0627\u06CC " + toDisplayString(unref(fieldsWithErrors)) + " \u062E\u0637\u0627 \u0627\u0633\u062A\u060C \u0644\u0637\u0641\u0627\u064B \u0642\u0628\u0644 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F. ", 1)
                    ]),
                    _: 1
                  }, 8, ["onClose"])) : createCommentVNode("", true),
                  createVNode(_component_TairoFormGroup, {
                    label: "\u062A\u063A\u06CC\u06CC\u0631 \u06AF\u0630\u0631\u0648\u0627\u0698\u0647",
                    sublabel: "\u0628\u0631\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A \u0628\u0647\u062A\u0631 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "currentPassword" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "password",
                                icon: "ph:lock-duotone",
                                placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0642\u062F\u06CC\u0645\u06CC",
                                autocomplete: "current-password",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "newPassword" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "password",
                                icon: "ph:lock-duotone",
                                placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                                autocomplete: "new-password",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "confirmPassword" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "password",
                                icon: "ph:lock-duotone",
                                placeholder: "\u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062C\u062F\u06CC\u062F",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "\u062F\u0648 \u0639\u0627\u0645\u0644\u06CC \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
                    sublabel: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "twoFactor.enabled" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchThin, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                                sublabel: "\u0641\u0639\u0627\u0644/\u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u06A9\u0631\u062F\u0646 \u062A\u0623\u06CC\u06CC\u062F \u0647\u0648\u06CC\u062A \u062F\u0648 \u0645\u0631\u062D\u0644\u0647\u200C\u0627\u06CC",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        withDirectives(createVNode("div", {
                          class: "col-span-12",
                          dir: "ltr"
                        }, [
                          createVNode(unref(Field), { name: "twoFactor.phoneNumber" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                ref_key: "phoneInput",
                                ref: phoneInput,
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "tel",
                                icon: "ph:phone-duotone",
                                placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                                autocomplete: "tel",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).twoFactor?.enabled]
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627",
                    sublabel: "\u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u0646\u062D\u0648\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.enabled" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "\u0641\u0639\u0627\u0644 \u0634\u062F\u0647",
                                sublabel: "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.flushLowPriority" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "\u062A\u062E\u0644\u06CC\u0647",
                                sublabel: "\u062D\u0630\u0641 \u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627\u06CC \u06A9\u0645\u200C\u0627\u0647\u0645\u06CC\u062A",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).notifications?.enabled]
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.marketing" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
                                sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).notifications?.enabled]
                        ]),
                        withDirectives(createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "notifications.partners" }, {
                            default: withCtx(({ field, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSwitchBall, {
                                "model-value": field.value,
                                disabled: unref(isSubmitting),
                                label: "\u0634\u0631\u06A9\u0627",
                                sublabel: "\u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u0627\u06CC \u062A\u062C\u0627\u0631\u06CC",
                                color: "primary",
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ], 512), [
                          [vShow, unref(values).notifications?.enabled]
                        ])
                      ])
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
      _push(ssrRenderComponent(_component_TairoFormSave, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        onReset: unref(resetForm)
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
