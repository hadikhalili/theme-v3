import { h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C, d as _sfc_main$D, _ as __nuxt_component_0$3, e as _sfc_main$e, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$2 } from './TairoFormGroup-B2ka3Eid.mjs';
import { _ as _sfc_main$3 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$4 } from './BaseTextarea-BGdIJfqV.mjs';
import { _ as _sfc_main$5 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$6 } from './BaseLink-7rxwK4C0.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { _ as _sfc_main$1 } from './AddonInputPhone-C3Hh-ZkB.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useFieldError, Field } from 'vee-validate';
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
import './IconChevronDown-B9AzKHTY.mjs';
import './BaseDropdownItem-vorQzQkQ.mjs';
import '@headlessui-float/vue';

const ONE_MB = 1e6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-2",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      FIRSTNAME_REQUIRED: "\u0646\u0627\u0645 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      LASTNAME_REQUIRED: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      EMAIL_REQUIRED: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      OPTION_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      ADDRESS_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0622\u062F\u0631\u0633 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      CITY_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0647\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      STATE_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0627\u0633\u062A\u0627\u0646 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      ZIPCODE_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06A9\u062F \u067E\u0633\u062A\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      STATUS_REQUIRED: "\u0648\u0636\u0639\u06CC\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      AVATAR_TOO_BIG: `\u0627\u0646\u062F\u0627\u0632\u0647 \u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627\u06CC\u062F \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F1 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A \u0628\u0627\u0634\u062F`
    };
    const inputPhoneRef = ref();
    function phoneErrorMessage(code) {
      switch (code) {
        case "INVALID_COUNTRY":
          return "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06A9\u0634\u0648\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F";
        case "NO_POSSIBLE_COUNTRIES":
          return "\u06A9\u0634\u0648\u0631\u0647\u0627\u06CC \u0645\u0645\u06A9\u0646 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A\u0646\u062F";
        case "PHONE_NUMBER_NOT_POSSIBLE":
          return "\u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0628\u0631\u0627\u06CC \u06A9\u0634\u0648\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A";
        case "NOT_A_NUMBER":
        case "TOO_SHORT":
        case "TOO_LONG":
        default:
          return "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F";
      }
    }
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      doctor: z.object({
        firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
        lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
        email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
        comments: z.string().optional(),
        phone: z.string().optional(),
        status: z.union([
          z.literal("\u0627\u06CC\u0646\u062A\u0631\u0646"),
          z.literal("\u0631\u0632\u06CC\u062F\u0646\u062A"),
          z.literal("\u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646")
        ]).nullable(),
        speciality: z.union([
          z.literal("\u062C\u0631\u0627\u062D\u06CC"),
          z.literal("\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC"),
          z.literal("\u067E\u062F\u06CC\u0627\u062A\u0631\u06CC"),
          z.literal("\u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC"),
          z.literal("\u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC")
        ]).nullable(),
        experience: z.union([
          z.literal("0-5"),
          z.literal("5-10"),
          z.literal("10-15"),
          z.literal("15+")
        ]).nullable(),
        rating: z.union([
          z.literal("1"),
          z.literal("2"),
          z.literal("3"),
          z.literal("4"),
          z.literal("5")
        ]).nullable(),
        address: z.string().min(1, VALIDATION_TEXT.ADDRESS_REQUIRED),
        city: z.string().min(1, VALIDATION_TEXT.CITY_REQUIRED),
        state: z.string().min(1, VALIDATION_TEXT.STATE_REQUIRED),
        zipcode: z.string().min(5, VALIDATION_TEXT.ZIPCODE_REQUIRED),
        country: z.string()
      })
    }).superRefine((data, ctx) => {
      if (data.avatar && data.avatar.size > ONE_MB) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.AVATAR_TOO_BIG,
          path: ["avatar"]
        });
      }
      if (!data.doctor.status) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.status"]
        });
      }
      if (!data.doctor.speciality) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.speciality"]
        });
      }
      if (!data.doctor.experience) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.experience"]
        });
      }
      if (!data.doctor.rating) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.rating"]
        });
      }
      if (!inputPhoneRef.value?.validation?.valid) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: phoneErrorMessage(inputPhoneRef.value?.validation?.error) || VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["doctor.phone"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      avatar: null,
      doctor: {
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        status: null,
        speciality: null,
        experience: null,
        rating: null,
        address: "",
        city: "",
        state: "",
        zipcode: "",
        country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"
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
    computed(() => Object.keys(errors.value).length);
    const inputFile = ref();
    useFieldError("avatar");
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
        console.log("doctor-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.doctor.speciality === "\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC") {
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
            message: `\u067E\u0632\u0634\u06A9 \u0627\u0641\u0632\u0648\u062F\u0647 \u0634\u062F!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F") {
            setFieldError("doctor.speciality", "\u0645\u0627 \u06A9\u0627\u0631\u062F\u06CC\u0648\u0644\u0648\u0698\u06CC\u0633\u062A\u200C\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0627\u0631\u06CC\u0645");
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
        console.log("doctor-create-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    const currentRating = computed(() => {
      if (values.doctor?.rating === void 0 || values.doctor?.rating === null)
        return 0;
      return parseInt(values.doctor?.rating);
    });
    const currentRatingText = computed(() => {
      switch (currentRating.value) {
        case 1:
          return "\u0627\u0633\u062A\u0627\u0646\u062F\u0627\u0631\u062F";
        case 2:
          return "\u062E\u0648\u0628";
        case 3:
          return "\u062D\u0631\u0641\u0647\u200C\u0627\u06CC";
        case 4:
          return "\u0645\u062A\u062E\u0635\u0635";
        case 5:
          return "\u06F3 \u062F\u0631\u0635\u062F \u0646\u062E\u0628\u0647";
        default:
          return "\u0646\u0627\u0645\u0634\u062E\u0635";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_TairoFormGroup = _sfc_main$2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$3;
      const _component_BaseTextarea = _sfc_main$4;
      const _component_BaseAvatar = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseLink = _sfc_main$6;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "grid grid-cols-12 gap-6"
      }, _attrs))}><div class="ltablet:col-span-8 col-span-12 lg:col-span-8">`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "sm",
        class: "p-4 md:p-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12"${_scopeId}><div class="col-span-12 mb-10 text-gray-600 sm:col-span-3 sm:mb-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h2",
              size: "lg",
              weight: "medium",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u0632\u0634\u06A9 \u062C\u062F\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u067E\u0632\u0634\u06A9 \u062C\u062F\u06CC\u062F ")
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
                  _push3(` \u0641\u06CC\u0644\u062F\u0647\u0627\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0641\u06CC\u0644\u062F\u0647\u0627\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-9 col-span-12 space-y-10 lg:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0639\u0645\u0648\u0645\u06CC",
              sublabel: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0639\u0645\u0648\u0645\u06CC"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.firstName" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "\u0646\u0627\u0645",
                          icon: "ph:user-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "\u0646\u0627\u0645",
                            icon: "ph:user-duotone",
                            placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.lastName" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                          icon: "ph:user-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645\u06CC",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                            icon: "ph:user-duotone",
                            placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645\u06CC",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.email" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                          icon: "ph:envelope-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: ghasem@eltheme.ir",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "email",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                            icon: "ph:envelope-duotone",
                            placeholder: "\u0645\u062B\u0627\u0644: ghasem@eltheme.ir",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.speciality" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "\u062A\u062E\u0635\u0635",
                          icon: "ph:first-aid-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="\u062C\u0631\u0627\u062D\u06CC"${_scopeId4}> \u062C\u0631\u0627\u062D\u06CC </option><option value="\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC"${_scopeId4}> \u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC </option><option value="\u067E\u062F\u06CC\u0627\u062A\u0631\u06CC"${_scopeId4}> \u067E\u062F\u06CC\u0627\u062A\u0631\u06CC </option><option value="\u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC"${_scopeId4}> \u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC </option><option value="\u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC"${_scopeId4}> \u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC </option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "\u062C\u0631\u0627\u062D\u06CC" }, " \u062C\u0631\u0627\u062D\u06CC "),
                                createVNode("option", { value: "\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC "),
                                createVNode("option", { value: "\u067E\u062F\u06CC\u0627\u062A\u0631\u06CC" }, " \u067E\u062F\u06CC\u0627\u062A\u0631\u06CC "),
                                createVNode("option", { value: "\u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC "),
                                createVNode("option", { value: "\u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC" }, " \u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "\u062A\u062E\u0635\u0635",
                            icon: "ph:first-aid-duotone",
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
                              createVNode("option", { value: "\u062C\u0631\u0627\u062D\u06CC" }, " \u062C\u0631\u0627\u062D\u06CC "),
                              createVNode("option", { value: "\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC "),
                              createVNode("option", { value: "\u067E\u062F\u06CC\u0627\u062A\u0631\u06CC" }, " \u067E\u062F\u06CC\u0627\u062A\u0631\u06CC "),
                              createVNode("option", { value: "\u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC "),
                              createVNode("option", { value: "\u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC" }, " \u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC ")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.phone" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$1), {
                          ref_key: "inputPhoneRef",
                          ref: inputPhoneRef,
                          label: "\u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC",
                          placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
                          icon: "lucide:phone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$1), {
                            ref_key: "inputPhoneRef",
                            ref: inputPhoneRef,
                            label: "\u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC",
                            placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
                            icon: "lucide:phone",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.comments" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseTextarea, {
                          label: "\u0646\u0638\u0631\u0627\u062A",
                          placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0631\u0627\u062D\u06CC \u0627\u0631\u062A\u0648\u067E\u062F\u06CC \u0639\u0645\u0648\u0645\u06CC\u060C \u062C\u0631\u0627\u062D\u06CC \u067E\u0627 \u0648 \u0645\u0686 \u067E\u0627",
                          rows: "3",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseTextarea, {
                            label: "\u0646\u0638\u0631\u0627\u062A",
                            placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0631\u0627\u062D\u06CC \u0627\u0631\u062A\u0648\u067E\u062F\u06CC \u0639\u0645\u0648\u0645\u06CC\u060C \u062C\u0631\u0627\u062D\u06CC \u067E\u0627 \u0648 \u0645\u0686 \u067E\u0627",
                            rows: "3",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.status" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "\u0648\u0636\u0639\u06CC\u062A",
                          icon: "ph:heartbeat-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="\u0627\u06CC\u0646\u062A\u0631\u0646"${_scopeId4}> \u0627\u06CC\u0646\u062A\u0631\u0646 </option><option value="\u0631\u0632\u06CC\u062F\u0646\u062A"${_scopeId4}> \u0631\u0632\u06CC\u062F\u0646\u062A </option><option value="\u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646"${_scopeId4}> \u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646 </option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "\u0627\u06CC\u0646\u062A\u0631\u0646" }, " \u0627\u06CC\u0646\u062A\u0631\u0646 "),
                                createVNode("option", { value: "\u0631\u0632\u06CC\u062F\u0646\u062A" }, " \u0631\u0632\u06CC\u062F\u0646\u062A "),
                                createVNode("option", { value: "\u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646" }, " \u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "\u0648\u0636\u0639\u06CC\u062A",
                            icon: "ph:heartbeat-duotone",
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
                              createVNode("option", { value: "\u0627\u06CC\u0646\u062A\u0631\u0646" }, " \u0627\u06CC\u0646\u062A\u0631\u0646 "),
                              createVNode("option", { value: "\u0631\u0632\u06CC\u062F\u0646\u062A" }, " \u0631\u0632\u06CC\u062F\u0646\u062A "),
                              createVNode("option", { value: "\u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646" }, " \u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646 ")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.experience" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "\u062A\u062C\u0631\u0628\u0647",
                          icon: "ph:trophy-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="0-5"${_scopeId4}> 0-5 </option><option value="5-10"${_scopeId4}> 5-10 </option><option value="10-15"${_scopeId4}> 10-15 </option><option value="15+"${_scopeId4}> 15+ </option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "0-5" }, " 0-5 "),
                                createVNode("option", { value: "5-10" }, " 5-10 "),
                                createVNode("option", { value: "10-15" }, " 10-15 "),
                                createVNode("option", { value: "15+" }, " 15+ ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "\u062A\u062C\u0631\u0628\u0647",
                            icon: "ph:trophy-duotone",
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
                              createVNode("option", { value: "0-5" }, " 0-5 "),
                              createVNode("option", { value: "5-10" }, " 5-10 "),
                              createVNode("option", { value: "10-15" }, " 10-15 "),
                              createVNode("option", { value: "15+" }, " 15+ ")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 md:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.rating" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseSelect, {
                          label: "\u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC",
                          icon: "ph:star-duotone",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<option value="" hidden${_scopeId4}></option><option value="1"${_scopeId4}> B+ </option><option value="2"${_scopeId4}> A </option><option value="3"${_scopeId4}> A+ </option><option value="4"${_scopeId4}> S </option><option value="5"${_scopeId4}> S+ </option>`);
                            } else {
                              return [
                                createVNode("option", {
                                  value: "",
                                  hidden: ""
                                }),
                                createVNode("option", { value: "1" }, " B+ "),
                                createVNode("option", { value: "2" }, " A "),
                                createVNode("option", { value: "3" }, " A+ "),
                                createVNode("option", { value: "4" }, " S "),
                                createVNode("option", { value: "5" }, " S+ ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseSelect, {
                            label: "\u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC",
                            icon: "ph:star-duotone",
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
                              createVNode("option", { value: "1" }, " B+ "),
                              createVNode("option", { value: "2" }, " A "),
                              createVNode("option", { value: "3" }, " A+ "),
                              createVNode("option", { value: "4" }, " S "),
                              createVNode("option", { value: "5" }, " S+ ")
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.firstName" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "\u0646\u0627\u0645",
                              icon: "ph:user-duotone",
                              placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645",
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
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.lastName" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                              icon: "ph:user-duotone",
                              placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645\u06CC",
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
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.email" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                              icon: "ph:envelope-duotone",
                              placeholder: "\u0645\u062B\u0627\u0644: ghasem@eltheme.ir",
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
                      createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                        createVNode(unref(Field), { name: "doctor.speciality" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "\u062A\u062E\u0635\u0635",
                              icon: "ph:first-aid-duotone",
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
                                createVNode("option", { value: "\u062C\u0631\u0627\u062D\u06CC" }, " \u062C\u0631\u0627\u062D\u06CC "),
                                createVNode("option", { value: "\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC "),
                                createVNode("option", { value: "\u067E\u062F\u06CC\u0627\u062A\u0631\u06CC" }, " \u067E\u062F\u06CC\u0627\u062A\u0631\u06CC "),
                                createVNode("option", { value: "\u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC "),
                                createVNode("option", { value: "\u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC" }, " \u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "doctor.phone" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(unref(_sfc_main$1), {
                              ref_key: "inputPhoneRef",
                              ref: inputPhoneRef,
                              label: "\u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC",
                              placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
                              icon: "lucide:phone",
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
                        createVNode(unref(Field), { name: "doctor.comments" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseTextarea, {
                              label: "\u0646\u0638\u0631\u0627\u062A",
                              placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0631\u0627\u062D\u06CC \u0627\u0631\u062A\u0648\u067E\u062F\u06CC \u0639\u0645\u0648\u0645\u06CC\u060C \u062C\u0631\u0627\u062D\u06CC \u067E\u0627 \u0648 \u0645\u0686 \u067E\u0627",
                              rows: "3",
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
                      createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.status" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "\u0648\u0636\u0639\u06CC\u062A",
                              icon: "ph:heartbeat-duotone",
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
                                createVNode("option", { value: "\u0627\u06CC\u0646\u062A\u0631\u0646" }, " \u0627\u06CC\u0646\u062A\u0631\u0646 "),
                                createVNode("option", { value: "\u0631\u0632\u06CC\u062F\u0646\u062A" }, " \u0631\u0632\u06CC\u062F\u0646\u062A "),
                                createVNode("option", { value: "\u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646" }, " \u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646 ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.experience" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "\u062A\u062C\u0631\u0628\u0647",
                              icon: "ph:trophy-duotone",
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
                                createVNode("option", { value: "0-5" }, " 0-5 "),
                                createVNode("option", { value: "5-10" }, " 5-10 "),
                                createVNode("option", { value: "10-15" }, " 10-15 "),
                                createVNode("option", { value: "15+" }, " 15+ ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                        createVNode(unref(Field), { name: "doctor.rating" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              label: "\u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC",
                              icon: "ph:star-duotone",
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
                                createVNode("option", { value: "1" }, " B+ "),
                                createVNode("option", { value: "2" }, " A "),
                                createVNode("option", { value: "3" }, " A+ "),
                                createVNode("option", { value: "4" }, " S "),
                                createVNode("option", { value: "5" }, " S+ ")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoFormGroup, {
              label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC",
              sublabel: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-12 gap-4"${_scopeId2}><div class="col-span-12"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.address" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "\u0622\u062F\u0631\u0633 / \u062E\u06CC\u0627\u0628\u0627\u0646",
                          icon: "ph:map-pin-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u06F2\u060C \u0633\u0648\u0626\u06CC\u062A G3\u060C \u0633\u0627\u0646\u062A\u0627 \u0645\u0648\u0646\u06CC\u06A9\u0627",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, {
                            label: "\u0622\u062F\u0631\u0633 / \u062E\u06CC\u0627\u0628\u0627\u0646",
                            icon: "ph:map-pin-duotone",
                            placeholder: "\u0645\u062B\u0627\u0644: \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u06F2\u060C \u0633\u0648\u0626\u06CC\u062A G3\u060C \u0633\u0627\u0646\u062A\u0627 \u0645\u0648\u0646\u06CC\u06A9\u0627",
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.city" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "\u0634\u0647\u0631",
                          icon: "ph:buildings-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: \u0644\u0633 \u0622\u0646\u062C\u0644\u0633",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.state" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          label: "\u0627\u0633\u062A\u0627\u0646/\u0627\u06CC\u0627\u0644\u062A",
                          icon: "ph:globe-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: CA",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text",
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12 sm:col-span-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "doctor.zipcode" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, {
                          type: "text",
                          label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                          icon: "ph:paper-plane-tilt-duotone",
                          placeholder: "\u0645\u062B\u0627\u0644: \u06F9\u06F1\u06F2\u06F6\u06F5\u06F6",
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-12"${_scopeId2}><div class="bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseAvatar, {
                    size: "xs",
                    src: "/img/icons/flags/united-states-of-america.svg"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="ms-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "#",
                    class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u062A\u063A\u06CC\u06CC\u0631 `);
                      } else {
                        return [
                          createTextVNode(" \u062A\u063A\u06CC\u06CC\u0631 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "doctor.address" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, {
                              label: "\u0622\u062F\u0631\u0633 / \u062E\u06CC\u0627\u0628\u0627\u0646",
                              icon: "ph:map-pin-duotone",
                              placeholder: "\u0645\u062B\u0627\u0644: \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u06F2\u060C \u0633\u0648\u0626\u06CC\u062A G3\u060C \u0633\u0627\u0646\u062A\u0627 \u0645\u0648\u0646\u06CC\u06A9\u0627",
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
                        createVNode(unref(Field), { name: "doctor.city" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
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
                        createVNode(unref(Field), { name: "doctor.state" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
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
                        createVNode(unref(Field), { name: "doctor.zipcode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
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
                        createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4" }, [
                          createVNode(_component_BaseAvatar, {
                            size: "xs",
                            src: "/img/icons/flags/united-states-of-america.svg"
                          }),
                          createVNode(_component_BaseText, {
                            size: "sm",
                            class: "text-muted-500 dark:text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "ms-auto" }, [
                            createVNode(_component_NuxtLink, {
                              to: "#",
                              class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u062A\u063A\u06CC\u06CC\u0631 ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-right md:col-span-5"${_scopeId}><div class="-mt-4 inline-flex w-full items-center justify-end gap-2 sm:w-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, { class: "!h-12 w-full sm:w-40" }, {
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
              class: "!h-12 w-full sm:w-40"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0631\u0633\u0627\u0644 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0631\u0633\u0627\u0644 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4 gap-y-2 text-sm lg:grid-cols-12" }, [
                createVNode("div", { class: "col-span-12 mb-10 text-gray-600 sm:col-span-3 sm:mb-0" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h2",
                    size: "lg",
                    weight: "medium",
                    class: "text-muted-800 dark:text-white"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u067E\u0632\u0634\u06A9 \u062C\u062F\u06CC\u062F ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0641\u06CC\u0644\u062F\u0647\u0627\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ltablet:col-span-9 col-span-12 space-y-10 lg:col-span-9" }, [
                  createVNode(_component_TairoFormGroup, {
                    label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0639\u0645\u0648\u0645\u06CC",
                    sublabel: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0639\u0645\u0648\u0645\u06CC"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.firstName" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "\u0646\u0627\u0645",
                                icon: "ph:user-duotone",
                                placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645",
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
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.lastName" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                                icon: "ph:user-duotone",
                                placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645\u06CC",
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
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.email" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                                icon: "ph:envelope-duotone",
                                placeholder: "\u0645\u062B\u0627\u0644: ghasem@eltheme.ir",
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
                        createVNode("div", { class: "col-span-12 md:col-span-6" }, [
                          createVNode(unref(Field), { name: "doctor.speciality" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "\u062A\u062E\u0635\u0635",
                                icon: "ph:first-aid-duotone",
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
                                  createVNode("option", { value: "\u062C\u0631\u0627\u062D\u06CC" }, " \u062C\u0631\u0627\u062D\u06CC "),
                                  createVNode("option", { value: "\u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u0642\u0644\u0628\u200C\u0634\u0646\u0627\u0633\u06CC "),
                                  createVNode("option", { value: "\u067E\u062F\u06CC\u0627\u062A\u0631\u06CC" }, " \u067E\u062F\u06CC\u0627\u062A\u0631\u06CC "),
                                  createVNode("option", { value: "\u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC" }, " \u067E\u0648\u0633\u062A\u200C\u0634\u0646\u0627\u0633\u06CC "),
                                  createVNode("option", { value: "\u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC" }, " \u062A\u0631\u0648\u0645\u0627\u062A\u0648\u0644\u0648\u0698\u06CC ")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "doctor.phone" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(unref(_sfc_main$1), {
                                ref_key: "inputPhoneRef",
                                ref: inputPhoneRef,
                                label: "\u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC",
                                placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
                                icon: "lucide:phone",
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
                          createVNode(unref(Field), { name: "doctor.comments" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseTextarea, {
                                label: "\u0646\u0638\u0631\u0627\u062A",
                                placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0631\u0627\u062D\u06CC \u0627\u0631\u062A\u0648\u067E\u062F\u06CC \u0639\u0645\u0648\u0645\u06CC\u060C \u062C\u0631\u0627\u062D\u06CC \u067E\u0627 \u0648 \u0645\u0686 \u067E\u0627",
                                rows: "3",
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
                        createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.status" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "\u0648\u0636\u0639\u06CC\u062A",
                                icon: "ph:heartbeat-duotone",
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
                                  createVNode("option", { value: "\u0627\u06CC\u0646\u062A\u0631\u0646" }, " \u0627\u06CC\u0646\u062A\u0631\u0646 "),
                                  createVNode("option", { value: "\u0631\u0632\u06CC\u062F\u0646\u062A" }, " \u0631\u0632\u06CC\u062F\u0646\u062A "),
                                  createVNode("option", { value: "\u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646" }, " \u0635\u0627\u062D\u0628 \u0639\u0646\u0648\u0627\u0646 ")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.experience" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "\u062A\u062C\u0631\u0628\u0647",
                                icon: "ph:trophy-duotone",
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
                                  createVNode("option", { value: "0-5" }, " 0-5 "),
                                  createVNode("option", { value: "5-10" }, " 5-10 "),
                                  createVNode("option", { value: "10-15" }, " 10-15 "),
                                  createVNode("option", { value: "15+" }, " 15+ ")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "col-span-12 md:col-span-4" }, [
                          createVNode(unref(Field), { name: "doctor.rating" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseSelect, {
                                label: "\u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC",
                                icon: "ph:star-duotone",
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
                                  createVNode("option", { value: "1" }, " B+ "),
                                  createVNode("option", { value: "2" }, " A "),
                                  createVNode("option", { value: "3" }, " A+ "),
                                  createVNode("option", { value: "4" }, " S "),
                                  createVNode("option", { value: "5" }, " S+ ")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoFormGroup, {
                    label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC",
                    sublabel: "\u0628\u0631\u062E\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "doctor.address" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "\u0622\u062F\u0631\u0633 / \u062E\u06CC\u0627\u0628\u0627\u0646",
                                icon: "ph:map-pin-duotone",
                                placeholder: "\u0645\u062B\u0627\u0644: \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u06F2\u060C \u0633\u0648\u0626\u06CC\u062A G3\u060C \u0633\u0627\u0646\u062A\u0627 \u0645\u0648\u0646\u06CC\u06A9\u0627",
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
                          createVNode(unref(Field), { name: "doctor.city" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
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
                          createVNode(unref(Field), { name: "doctor.state" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
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
                          createVNode(unref(Field), { name: "doctor.zipcode" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
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
                          createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/70 flex items-center gap-2 rounded-lg p-4" }, [
                            createVNode(_component_BaseAvatar, {
                              size: "xs",
                              src: "/img/icons/flags/united-states-of-america.svg"
                            }),
                            createVNode(_component_BaseText, {
                              size: "sm",
                              class: "text-muted-500 dark:text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647 ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "ms-auto" }, [
                              createVNode(_component_NuxtLink, {
                                to: "#",
                                class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u062A\u063A\u06CC\u06CC\u0631 ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "text-right md:col-span-5" }, [
                    createVNode("div", { class: "-mt-4 inline-flex w-full items-center justify-end gap-2 sm:w-auto" }, [
                      createVNode(_component_BaseButton, { class: "!h-12 w-full sm:w-40" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0644\u063A\u0648 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseButton, {
                        type: "submit",
                        color: "primary",
                        class: "!h-12 w-full sm:w-40"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u0631\u0633\u0627\u0644 ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "ptablet:p-8 p-6 lg:p-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400 mb-6 block uppercase tracking-wider"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0631\u06A9\u0648\u0631\u062F `);
                } else {
                  return [
                    createTextVNode(" \u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0631\u06A9\u0648\u0631\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mb-4 flex"${_scopeId}><div class="grow"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062F\u06A9\u062A\u0631 ${ssrInterpolate(unref(values).doctor?.firstName)} ${ssrInterpolate(unref(values).doctor?.lastName)}`);
                } else {
                  return [
                    createTextVNode(" \u062F\u06A9\u062A\u0631 " + toDisplayString(unref(values).doctor?.firstName) + " " + toDisplayString(unref(values).doctor?.lastName), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.city === "" ? "\u0634\u0647\u0631" : unref(values).doctor?.city)}, ${ssrInterpolate(unref(values).doctor?.state === "" ? "\u0627\u0633\u062A\u0627\u0646" : unref(values).doctor?.state)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.city === "" ? "\u0634\u0647\u0631" : unref(values).doctor?.city) + ", " + toDisplayString(unref(values).doctor?.state === "" ? "\u0627\u0633\u062A\u0627\u0646" : unref(values).doctor?.state), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="shrink-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              size: "lg",
              src: "/img/avatars/20.svg"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.speciality === null ? "\u062A\u062E\u0635\u0635 \u0627\u0635\u0644\u06CC" : unref(values).doctor?.speciality)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.speciality === null ? "\u062A\u062E\u0635\u0635 \u0627\u0635\u0644\u06CC" : unref(values).doctor?.speciality), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.comments === "" ? "\u0645\u0634\u0627\u0647\u062F\u0627\u062A \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F" : unref(values).doctor?.comments)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.comments === "" ? "\u0645\u0634\u0627\u0647\u062F\u0627\u062A \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F" : unref(values).doctor?.comments), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x py-6 rtl:divide-x-reverse"${_scopeId}><div class="xxl:pe-6 flex flex-1 flex-col gap-1 pe-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.status === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.status === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.status), 1)
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
                  _push3(` \u0648\u0636\u0639\u06CC\u062A \u0646\u0642\u0634 `);
                } else {
                  return [
                    createTextVNode(" \u0648\u0636\u0639\u06CC\u062A \u0646\u0642\u0634 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="xxl:px-6 flex flex-1 flex-col gap-1 px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(values).doctor?.experience === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.experience)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(values).doctor?.experience === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.experience), 1)
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
                  _push3(` \u0633\u0627\u0644\u200C\u0647\u0627\u06CC \u062A\u062C\u0631\u0628\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0633\u0627\u0644\u200C\u0647\u0627\u06CC \u062A\u062C\u0631\u0628\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="xxl:ps-6 flex flex-1 flex-col gap-1 ps-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "sm",
              weight: "medium",
              lead: "none"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0633\u0637\u062D ${ssrInterpolate(unref(values).doctor?.rating === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.rating)}`);
                } else {
                  return [
                    createTextVNode(" \u0633\u0637\u062D " + toDisplayString(unref(values).doctor?.rating === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.rating), 1)
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
                  _push3(` \u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC \u062C\u0647\u0627\u0646\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC \u062C\u0647\u0627\u0646\u06CC ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div class="flex items-end justify-between"${_scopeId}><div class="w-24 text-xs uppercase leading-tight"${_scopeId}> \u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC </div><div class="text-success-600 font-sans text-xs font-semibold"${_scopeId}>${ssrInterpolate(unref(currentRatingText))}</div></div><div class="mt-1 flex"${_scopeId}><div class="${ssrRenderClass([
              unref(currentRating) > 0 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) >= 2 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) >= 3 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) >= 4 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div><div class="${ssrRenderClass([
              unref(currentRating) === 5 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700",
              "dark:border-muted-800 h-3 grow border-x border-white"
            ])}"${_scopeId}></div></div></div><div class="text-muted-400 mt-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:mail",
              class: "size-4"
            }, null, _parent2, _scopeId));
            if (unref(values).doctor?.email) {
              _push2(ssrRenderComponent(_component_BaseLink, {
                class: "block",
                href: `mailto:${unref(values).doctor?.email}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(values).doctor?.email)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(values).doctor?.email), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseText, { size: "xs" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(values).doctor?.email), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "xs",
                class: "dark:text-muted-200 opacity-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div><div class="text-muted-400 mt-6 flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:phone",
              class: "size-4"
            }, null, _parent2, _scopeId));
            if (unref(values).doctor?.phone) {
              _push2(ssrRenderComponent(_component_BaseLink, {
                class: "block",
                href: `tel:${unref(values).doctor?.phone}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_BaseText, { size: "xs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(values).doctor?.phone)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(values).doctor?.phone), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_BaseText, { size: "xs" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(values).doctor?.phone), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "xs",
                class: "dark:text-muted-200 opacity-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F `);
                  } else {
                    return [
                      createTextVNode(" \u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_BaseText, {
                size: "xs",
                weight: "medium",
                class: "text-muted-400 mb-6 block uppercase tracking-wider"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634 \u0631\u06A9\u0648\u0631\u062F ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "mb-4 flex" }, [
                createVNode("div", { class: "grow" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062F\u06A9\u062A\u0631 " + toDisplayString(unref(values).doctor?.firstName) + " " + toDisplayString(unref(values).doctor?.lastName), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(values).doctor?.city === "" ? "\u0634\u0647\u0631" : unref(values).doctor?.city) + ", " + toDisplayString(unref(values).doctor?.state === "" ? "\u0627\u0633\u062A\u0627\u0646" : unref(values).doctor?.state), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "shrink-0" }, [
                  createVNode(_component_BaseAvatar, {
                    size: "lg",
                    src: "/img/avatars/20.svg"
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(values).doctor?.speciality === null ? "\u062A\u062E\u0635\u0635 \u0627\u0635\u0644\u06CC" : unref(values).doctor?.speciality), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseText, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(values).doctor?.comments === "" ? "\u0645\u0634\u0627\u0647\u062F\u0627\u062A \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F" : unref(values).doctor?.comments), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x py-6 rtl:divide-x-reverse" }, [
                createVNode("div", { class: "xxl:pe-6 flex flex-1 flex-col gap-1 pe-4" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(values).doctor?.status === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.status), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u0636\u0639\u06CC\u062A \u0646\u0642\u0634 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "xxl:px-6 flex flex-1 flex-col gap-1 px-4" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(values).doctor?.experience === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.experience), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0633\u0627\u0644\u200C\u0647\u0627\u06CC \u062A\u062C\u0631\u0628\u0647 ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "xxl:ps-6 flex flex-1 flex-col gap-1 ps-4" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "sm",
                    weight: "medium",
                    lead: "none"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0633\u0637\u062D " + toDisplayString(unref(values).doctor?.rating === null ? "\u0646\u0627\u0645\u0634\u062E\u0635" : unref(values).doctor?.rating), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC \u062C\u0647\u0627\u0646\u06CC ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "flex items-end justify-between" }, [
                  createVNode("div", { class: "w-24 text-xs uppercase leading-tight" }, " \u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC "),
                  createVNode("div", { class: "text-success-600 font-sans text-xs font-semibold" }, toDisplayString(unref(currentRatingText)), 1)
                ]),
                createVNode("div", { class: "mt-1 flex" }, [
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) > 0 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) >= 2 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) >= 3 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) >= 4 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2),
                  createVNode("div", {
                    class: [
                      "dark:border-muted-800 h-3 grow border-x border-white",
                      unref(currentRating) === 5 ? "bg-success-600" : "bg-muted-200 dark:bg-muted-700"
                    ]
                  }, null, 2)
                ])
              ]),
              createVNode("div", { class: "text-muted-400 mt-6 flex items-center gap-2" }, [
                createVNode(_component_Icon, {
                  name: "lucide:mail",
                  class: "size-4"
                }),
                unref(values).doctor?.email ? (openBlock(), createBlock(_component_BaseLink, {
                  key: 0,
                  class: "block",
                  href: `mailto:${unref(values).doctor?.email}`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseText, { size: "xs" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(values).doctor?.email), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["href"])) : (openBlock(), createBlock(_component_BaseText, {
                  key: 1,
                  size: "xs",
                  class: "dark:text-muted-200 opacity-50"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F ")
                  ]),
                  _: 1
                }))
              ]),
              createVNode("div", { class: "text-muted-400 mt-6 flex items-center gap-2" }, [
                createVNode(_component_Icon, {
                  name: "lucide:phone",
                  class: "size-4"
                }),
                unref(values).doctor?.phone ? (openBlock(), createBlock(_component_BaseLink, {
                  key: 0,
                  class: "block",
                  href: `tel:${unref(values).doctor?.phone}`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_BaseText, { size: "xs" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(values).doctor?.phone), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["href"])) : (openBlock(), createBlock(_component_BaseText, {
                  key: 1,
                  size: "xs",
                  class: "dark:text-muted-200 opacity-50"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u062A\u0644\u0641\u0646 \u0627\u0636\u0637\u0631\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u067E\u0631 \u06A9\u0646\u06CC\u062F ")
                  ]),
                  _: 1
                }))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
