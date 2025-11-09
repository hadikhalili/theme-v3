import { _ as _sfc_main$1 } from './BaseFullscreenDropfile-CgoQnI75.mjs';
import { _ as _sfc_main$2 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { _ as _sfc_main$3 } from './BaseButtonIcon-B-NRPykg.mjs';
import { a as __nuxt_component_2, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$4 } from './TairoFormGroup-B2ka3Eid.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-7ut6RcTc.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useFieldError, Field } from 'vee-validate';
import { z } from 'zod';
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
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './IconChevronDown-B9AzKHTY.mjs';

const ONE_MB = 1e6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company-edit",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      input: "YYYY-MM-DD"
    });
    const VALIDATION_TEXT = {
      COMPANY_NAME_REQUIRED: "\u0646\u0627\u0645 \u0634\u0631\u06A9\u062A \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      LEGAL_NAME_REQUIRED: "\u0646\u0627\u0645 \u0642\u0627\u0646\u0648\u0646\u06CC \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      PREFERRED_NAME_REQUIRED: "\u0646\u0627\u0645 \u062A\u0631\u062C\u06CC\u062D\u06CC \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F3 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",
      EMAIL_REQUIRED: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      PHONE_REQUIRED: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      TWITTER_REQUIRED: "\u062F\u0633\u062A\u0647 \u062A\u0648\u06CC\u06CC\u062A\u0631 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      ADDRESS_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0622\u062F\u0631\u0633 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      CITY_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0647\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      STATE_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0627\u0633\u062A\u0627\u0646 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      ZIPCODE_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06A9\u062F \u067E\u0633\u062A\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      AVATAR_TOO_BIG: `\u0627\u0646\u062F\u0627\u0632\u0647 \u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627\u06CC\u062F \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F1 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A \u0628\u0627\u0634\u062F`
    };
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      profile: z.object({
        companyName: z.string().min(1, VALIDATION_TEXT.COMPANY_NAME_REQUIRED),
        dba: z.string().min(1, VALIDATION_TEXT.LEGAL_NAME_REQUIRED),
        commonName: z.string().optional(),
        email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
        phone: z.string().min(1, VALIDATION_TEXT.PHONE_REQUIRED),
        twitterHandle: z.string().min(3, VALIDATION_TEXT.TWITTER_REQUIRED),
        mailingAddress: z.object({
          address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
          suite: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED).optional(),
          city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
          state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
          zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
          country: z.string()
        }),
        legalAddress: z.object({
          address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
          suite: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED).optional(),
          city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
          state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
          zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
          country: z.string()
        })
      })
    }).superRefine((data, ctx) => {
      if (data.avatar && data.avatar.size > ONE_MB) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.AVATAR_TOO_BIG,
          path: ["avatar"]
        });
      }
      if (data.profile.companyName === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.COMPANY_NAME_REQUIRED,
          path: ["profile.companyName"]
        });
      }
      if (data.profile.dba === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.LEGAL_NAME_REQUIRED,
          path: ["profile.dba"]
        });
      }
      if (data.profile.commonName && data.profile.commonName !== "" && data.profile.commonName.length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PREFERRED_NAME_REQUIRED,
          path: ["profile.commonName"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      avatar: null,
      profile: {
        companyName: "",
        dba: "",
        commonName: "",
        email: "",
        phone: "",
        twitterHandle: "",
        mailingAddress: {
          address: "",
          suite: "",
          city: "",
          state: "",
          zipcode: "",
          country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"
        },
        legalAddress: {
          address: "",
          suite: "",
          city: "",
          state: "",
          zipcode: "",
          country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"
        }
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
    const currentAvatar = computed(() => `/img/avatars/company.svg`);
    const success = ref(false);
    computed(() => Object.keys(errors.value).length);
    const inputFile = ref(null);
    const fileError = useFieldError("avatar");
    watch(inputFile, (value) => {
      const file = value?.item(0) || null;
      setFieldValue("avatar", file);
    });
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("company-edit-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.profile.companyName === "Acme") {
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
            message: `Changes have been saved!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F") {
            setFieldError("profile.companyName", "\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A");
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
      (error) => {
        success.value = false;
        console.log("company-edit-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseFullscreenDropfile = _sfc_main$1;
      const _component_BaseInputFileHeadless = _sfc_main$2;
      const _component_BaseButtonIcon = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoFormGroup = _sfc_main$4;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$5;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div><form method="POST" action="" class=""><div class="space-y-8"><div class="mx-auto flex w-full max-w-2xl flex-col"><div><div><div class="relative mb-5 flex flex-col items-center justify-center gap-4">`);
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
        default: withCtx(({ open, remove, preview, files }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative size-28"${_scopeId}>`);
            if (files?.length && files.item(0)) {
              _push2(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F" class="bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center"${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", unref(currentAvatar))} alt="\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F" class="bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center dark:invert"${_scopeId}>`);
            }
            if (files?.length && files.item(0)) {
              _push2(`<div class="absolute bottom-1 end-1 z-20"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                size: "sm",
                rounded: "full",
                "data-tooltip": "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
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
              _push2(`<div class="absolute bottom-1 end-1 z-20"${_scopeId}><div class="relative" data-tooltip="\u062A\u0635\u0648\u06CC\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"${_scopeId}>`);
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
              createVNode("div", { class: "relative size-28" }, [
                files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: preview(files.item(0)).value,
                  alt: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F",
                  class: "bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center"
                }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: unref(currentAvatar),
                  alt: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F",
                  class: "bg-muted-200 dark:bg-muted-700/60 size-28 rounded-full object-cover object-center dark:invert"
                }, null, 8, ["src"])),
                files?.length && files.item(0) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "absolute bottom-1 end-1 z-20"
                }, [
                  createVNode(_component_BaseButtonIcon, {
                    size: "sm",
                    rounded: "full",
                    "data-tooltip": "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
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
                  class: "absolute bottom-1 end-1 z-20"
                }, [
                  createVNode("div", {
                    class: "relative",
                    "data-tooltip": "\u062A\u0635\u0648\u06CC\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
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
      if (unref(fileError)) {
        _push(`<div class="text-danger-600 inline-block font-sans text-[.8rem]">${ssrInterpolate(unref(fileError))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="space-y-12">`);
      _push(ssrRenderComponent(_component_TairoFormGroup, {
        label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0631\u06A9\u062A",
        sublabel: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0627\u06CC\u0647 \u062F\u0631\u0628\u0627\u0631\u0647 \u0634\u0631\u06A9\u062A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4"${_scopeId}><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.companyName" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0642\u0627\u0646\u0648\u0646\u06CC \u0646\u0627\u0645",
                    icon: "ph:buildings-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0634\u0631\u06A9\u062A \u0627\u0644 \u062A\u0645",
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
                      label: "\u0642\u0627\u0646\u0648\u0646\u06CC \u0646\u0627\u0645",
                      icon: "ph:buildings-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0634\u0631\u06A9\u062A \u0627\u0644 \u062A\u0645",
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
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.dba" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0627\u0646\u062C\u0627\u0645 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u062A\u062D\u062A \u0646\u0627\u0645 DBA",
                    icon: "ph:buildings-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0627\u0644 \u062A\u0645",
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
                      label: "\u0627\u0646\u062C\u0627\u0645 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u062A\u062D\u062A \u0646\u0627\u0645 DBA",
                      icon: "ph:buildings-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0627\u0644 \u062A\u0645",
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
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.commonName" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0646\u0627\u0645 \u0645\u062A\u062F\u0627\u0648\u0644",
                    icon: "ph:buildings-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0627\u0644 \u062A\u0645",
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
                      label: "\u0646\u0627\u0645 \u0645\u062A\u062F\u0627\u0648\u0644",
                      icon: "ph:buildings-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0627\u0644 \u062A\u0645",
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
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.email" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                    icon: "ph:envelope-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: contact@eltheme.ir",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "email",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                      icon: "ph:envelope-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: contact@eltheme.ir",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "email",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.phone" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    icon: "lucide:phone",
                    label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                    placeholder: "\u0645\u062B\u0627\u0644: +1 555 123 4567",
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
                      icon: "lucide:phone",
                      label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                      placeholder: "\u0645\u062B\u0627\u0644: +1 555 123 4567",
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
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.twitterHandle" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    icon: "lucide:twitter",
                    label: "\u0634\u0646\u0627\u0633\u0647 \u062A\u0648\u0626\u06CC\u062A\u0631",
                    placeholder: "\u0645\u062B\u0627\u0644: @eltheme",
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
                      icon: "lucide:twitter",
                      label: "\u0634\u0646\u0627\u0633\u0647 \u062A\u0648\u0626\u06CC\u062A\u0631",
                      placeholder: "\u0645\u062B\u0627\u0644: @eltheme",
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.companyName" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0642\u0627\u0646\u0648\u0646\u06CC \u0646\u0627\u0645",
                        icon: "ph:buildings-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0634\u0631\u06A9\u062A \u0627\u0644 \u062A\u0645",
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
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.dba" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0627\u0646\u062C\u0627\u0645 \u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631 \u062A\u062D\u062A \u0646\u0627\u0645 DBA",
                        icon: "ph:buildings-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0627\u0644 \u062A\u0645",
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
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.commonName" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0646\u0627\u0645 \u0645\u062A\u062F\u0627\u0648\u0644",
                        icon: "ph:buildings-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0633\u06CC\u0633\u062A\u0645\u200C\u0647\u0627\u06CC \u0627\u0644 \u062A\u0645",
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
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.email" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                        icon: "ph:envelope-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: contact@eltheme.ir",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        type: "email",
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.phone" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        icon: "lucide:phone",
                        label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
                        placeholder: "\u0645\u062B\u0627\u0644: +1 555 123 4567",
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
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.twitterHandle" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        icon: "lucide:twitter",
                        label: "\u0634\u0646\u0627\u0633\u0647 \u062A\u0648\u0626\u06CC\u062A\u0631",
                        placeholder: "\u0645\u062B\u0627\u0644: @eltheme",
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
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoFormGroup, {
        label: "\u0622\u062F\u0631\u0633 \u067E\u0633\u062A\u06CC",
        sublabel: "\u0622\u062F\u0631\u0633 \u0634\u0631\u06A9\u062A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.mailingAddress.address" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0622\u062F\u0631\u0633",
                    icon: "ph:map-pin-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F8\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0628\u0627\u0631\u0628\u0627\u0631\u0627",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u0622\u062F\u0631\u0633",
                      icon: "ph:map-pin-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F8\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0628\u0627\u0631\u0628\u0627\u0631\u0627",
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
            _push2(ssrRenderComponent(unref(Field), { name: "profile.mailingAddress.suite" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u062E\u06CC\u0627\u0628\u0627\u0646 / \u0633\u0648\u0626\u06CC\u062A",
                    icon: "ph:map-pin-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0633\u0648\u0626\u06CC\u062A G4",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u062E\u06CC\u0627\u0628\u0627\u0646 / \u0633\u0648\u0626\u06CC\u062A",
                      icon: "ph:map-pin-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0633\u0648\u0626\u06CC\u062A G4",
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
            _push2(`</div><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.mailingAddress.city" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0634\u0647\u0631",
                    icon: "ph:buildings-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
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
                      label: "\u0634\u0647\u0631",
                      icon: "ph:buildings-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
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
            _push2(`</div><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.mailingAddress.state" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                    icon: "ph:globe-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: CA",
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
                      label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                      icon: "ph:globe-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: CA",
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
            _push2(`</div><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.mailingAddress.zipcode" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "text",
                    label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                    icon: "ph:paper-plane-tilt-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "text",
                      label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                      icon: "ph:paper-plane-tilt-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
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
            _push2(ssrRenderComponent(unref(Field), { name: "profile.mailingAddress.country" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "md",
                    label: "\u06A9\u0634\u0648\u0631",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"${_scopeId3}> \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 </option><option value="\u06A9\u0627\u0646\u0627\u062F\u0627"${_scopeId3}> \u06A9\u0627\u0646\u0627\u062F\u0627 </option><option value="\u0641\u0631\u0627\u0646\u0633\u0647"${_scopeId3}> \u0641\u0631\u0627\u0646\u0633\u0647 </option><option value="\u0622\u0644\u0645\u0627\u0646"${_scopeId3}> \u0622\u0644\u0645\u0627\u0646 </option><option value="\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"${_scopeId3}> \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 </option><option value="\u0686\u06CC\u0646"${_scopeId3}> \u0686\u06CC\u0646 </option><option value="\u0698\u0627\u067E\u0646"${_scopeId3}> \u0698\u0627\u067E\u0646 </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
                          createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
                          createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
                          createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627" }, " \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 "),
                          createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
                          createVNode("option", { value: "\u0698\u0627\u067E\u0646" }, " \u0698\u0627\u067E\u0646 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "md",
                      label: "\u06A9\u0634\u0648\u0631",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("option", {
                          value: "",
                          hidden: ""
                        }),
                        createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
                        createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
                        createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
                        createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 "),
                        createVNode("option", { value: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627" }, " \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 "),
                        createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
                        createVNode("option", { value: "\u0698\u0627\u067E\u0646" }, " \u0698\u0627\u067E\u0646 ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("div", { class: "col-span-12" }, [
                  createVNode(unref(Field), { name: "profile.mailingAddress.address" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0622\u062F\u0631\u0633",
                        icon: "ph:map-pin-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F8\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0628\u0627\u0631\u0628\u0627\u0631\u0627",
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
                  createVNode(unref(Field), { name: "profile.mailingAddress.suite" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u062E\u06CC\u0627\u0628\u0627\u0646 / \u0633\u0648\u0626\u06CC\u062A",
                        icon: "ph:map-pin-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0633\u0648\u0626\u06CC\u062A G4",
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
                createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.mailingAddress.city" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0634\u0647\u0631",
                        icon: "ph:buildings-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
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
                createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.mailingAddress.state" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                        icon: "ph:globe-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: CA",
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
                createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.mailingAddress.zipcode" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        type: "text",
                        label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                        icon: "ph:paper-plane-tilt-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
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
                  createVNode(unref(Field), { name: "profile.mailingAddress.country" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseSelect, {
                        rounded: "md",
                        label: "\u06A9\u0634\u0648\u0631",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, {
                        default: withCtx(() => [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
                          createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
                          createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
                          createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627" }, " \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 "),
                          createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
                          createVNode("option", { value: "\u0698\u0627\u067E\u0646" }, " \u0698\u0627\u067E\u0646 ")
                        ]),
                        _: 2
                      }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
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
      _push(ssrRenderComponent(_component_TairoFormGroup, {
        label: "\u0622\u062F\u0631\u0633 \u0642\u0627\u0646\u0648\u0646\u06CC",
        sublabel: "\u0622\u062F\u0631\u0633 \u0642\u0627\u0646\u0648\u0646\u06CC \u0634\u0631\u06A9\u062A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.legalAddress.address" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0622\u062F\u0631\u0633",
                    icon: "ph:map-pin-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F8\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0628\u0627\u0631\u0628\u0627\u0631\u0627",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u0622\u062F\u0631\u0633",
                      icon: "ph:map-pin-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F8\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0628\u0627\u0631\u0628\u0627\u0631\u0627",
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
            _push2(ssrRenderComponent(unref(Field), { name: "profile.legalAddress.suite" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u062E\u06CC\u0627\u0628\u0627\u0646 / \u0633\u0648\u0626\u06CC\u062A",
                    icon: "ph:map-pin-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0633\u0648\u0626\u06CC\u062A G4",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u062E\u06CC\u0627\u0628\u0627\u0646 / \u0633\u0648\u0626\u06CC\u062A",
                      icon: "ph:map-pin-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0633\u0648\u0626\u06CC\u062A G4",
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
            _push2(`</div><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.legalAddress.city" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0634\u0647\u0631",
                    icon: "ph:buildings-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
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
                      label: "\u0634\u0647\u0631",
                      icon: "ph:buildings-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
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
            _push2(`</div><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.legalAddress.state" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                    icon: "ph:globe-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: CA",
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
                      label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                      icon: "ph:globe-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: CA",
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
            _push2(`</div><div class="col-span-12 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.legalAddress.zipcode" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "text",
                    label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                    icon: "ph:paper-plane-tilt-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "text",
                      label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                      icon: "ph:paper-plane-tilt-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
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
            _push2(ssrRenderComponent(unref(Field), { name: "profile.legalAddress.country" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "md",
                    label: "\u06A9\u0634\u0648\u0631",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"${_scopeId3}> \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 </option><option value="\u06A9\u0627\u0646\u0627\u062F\u0627"${_scopeId3}> \u06A9\u0627\u0646\u0627\u062F\u0627 </option><option value="\u0641\u0631\u0627\u0646\u0633\u0647"${_scopeId3}> \u0641\u0631\u0627\u0646\u0633\u0647 </option><option value="\u0622\u0644\u0645\u0627\u0646"${_scopeId3}> \u0622\u0644\u0645\u0627\u0646 </option><option value="\u0627\u0633\u067E\u0627\u0646\u06CC\u0627"${_scopeId3}> \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 </option><option value="\u0686\u06CC\u0646"${_scopeId3}> \u0686\u06CC\u0646 </option><option value="\u0698\u0627\u067E\u0646"${_scopeId3}> \u0698\u0627\u067E\u0646 </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
                          createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
                          createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
                          createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627" }, " \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 "),
                          createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
                          createVNode("option", { value: "\u0698\u0627\u067E\u0646" }, " \u0698\u0627\u067E\u0646 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "md",
                      label: "\u06A9\u0634\u0648\u0631",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("option", {
                          value: "",
                          hidden: ""
                        }),
                        createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
                        createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
                        createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
                        createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 "),
                        createVNode("option", { value: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627" }, " \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 "),
                        createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
                        createVNode("option", { value: "\u0698\u0627\u067E\u0646" }, " \u0698\u0627\u067E\u0646 ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("div", { class: "col-span-12" }, [
                  createVNode(unref(Field), { name: "profile.legalAddress.address" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0622\u062F\u0631\u0633",
                        icon: "ph:map-pin-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u06F4\u06F8\u060C \u0631\u0627\u0647\u200C\u0622\u0647\u0646 \u0633\u0627\u0646\u062A\u0627 \u0628\u0627\u0631\u0628\u0627\u0631\u0627",
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
                  createVNode(unref(Field), { name: "profile.legalAddress.suite" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u062E\u06CC\u0627\u0628\u0627\u0646 / \u0633\u0648\u0626\u06CC\u062A",
                        icon: "ph:map-pin-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0622\u067E\u0627\u0631\u062A\u0645\u0627\u0646 12\u060C \u0633\u0648\u0626\u06CC\u062A G4",
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
                createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.legalAddress.city" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0634\u0647\u0631",
                        icon: "ph:buildings-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
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
                createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.legalAddress.state" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                        icon: "ph:globe-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: CA",
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
                createVNode("div", { class: "col-span-12 sm:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.legalAddress.zipcode" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        type: "text",
                        label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                        icon: "ph:paper-plane-tilt-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
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
                  createVNode(unref(Field), { name: "profile.legalAddress.country" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseSelect, {
                        rounded: "md",
                        label: "\u06A9\u0634\u0648\u0631",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, {
                        default: withCtx(() => [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647" }, " \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 "),
                          createVNode("option", { value: "\u06A9\u0627\u0646\u0627\u062F\u0627" }, " \u06A9\u0627\u0646\u0627\u062F\u0627 "),
                          createVNode("option", { value: "\u0641\u0631\u0627\u0646\u0633\u0647" }, " \u0641\u0631\u0627\u0646\u0633\u0647 "),
                          createVNode("option", { value: "\u0622\u0644\u0645\u0627\u0646" }, " \u0622\u0644\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u0627\u0633\u067E\u0627\u0646\u06CC\u0627" }, " \u0627\u0633\u067E\u0627\u0646\u06CC\u0627 "),
                          createVNode("option", { value: "\u0686\u06CC\u0646" }, " \u0686\u06CC\u0646 "),
                          createVNode("option", { value: "\u0698\u0627\u067E\u0646" }, " \u0698\u0627\u067E\u0646 ")
                        ]),
                        _: 2
                      }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
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
      _push(`<div class="mt-5 flex flex-col-reverse gap-y-4 text-end md:block md:space-x-3 md:space-x-reverse">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/layouts/company",
        type: "button",
        color: "muted",
        class: "w-full sm:w-40",
        rounded: "md",
        size: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0644\u063A\u0648 `);
          } else {
            return [
              createTextVNode(" \u0644\u063A\u0648 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        color: "primary",
        class: "w-full sm:w-40",
        rounded: "md",
        size: "lg",
        loading: unref(isSubmitting)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A `);
          } else {
            return [
              createTextVNode(" \u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/company-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
