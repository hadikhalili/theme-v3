import { _ as _sfc_main$1 } from './BaseFullscreenDropfile-CgoQnI75.mjs';
import { _ as _sfc_main$2 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { _ as _sfc_main$3 } from './BaseButtonIcon-B-NRPykg.mjs';
import { a as __nuxt_component_2, d as _sfc_main$D, h as _sfc_main$u, b as _sfc_main$w, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$4 } from './TairoFormGroup-B2ka3Eid.mjs';
import { _ as _sfc_main$5 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$6 } from './BaseRadioHeadless-BL03emlX.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "user-edit",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      input: "YYYY-MM-DD"
    });
    const VALIDATION_TEXT = {
      FIRST_NAME_REQUIRED: "\u0646\u0627\u0645 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      LAST_NAME_REQUIRED: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      PREFERRED_NAME_REQUIRED: "\u0646\u0627\u0645 \u062A\u0631\u062C\u06CC\u062D\u06CC \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F3 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",
      BIRTHDAY_REQUIRED: "\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      BIRTHMONTH_REQUIRED: "\u0645\u0627\u0647 \u062A\u0648\u0644\u062F \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      BIRTHYEAR_REQUIRED: "\u0633\u0627\u0644 \u062A\u0648\u0644\u062F \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      EMAIL_REQUIRED: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      PHONE_REQUIRED: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      STATUS_REQUIRED: "\u0648\u0636\u0639\u06CC\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      ADDRESS_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0622\u062F\u0631\u0633 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      CITY_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0634\u0647\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      STATE_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0627\u0633\u062A\u0627\u0646 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      ZIPCODE_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06A9\u062F \u067E\u0633\u062A\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
      AVATAR_TOO_BIG: `\u0627\u0646\u062F\u0627\u0632\u0647 \u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627\u06CC\u062F \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F1 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A \u0628\u0627\u0634\u062F`
    };
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      profile: z.object({
        firstName: z.string().min(1, VALIDATION_TEXT.FIRST_NAME_REQUIRED),
        lastName: z.string().min(1, VALIDATION_TEXT.LAST_NAME_REQUIRED),
        preferredName: z.string().optional(),
        email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
        phone: z.string().min(1, VALIDATION_TEXT.PHONE_REQUIRED),
        birthday: z.object({
          year: z.number().nullable(),
          month: z.string().nullable(),
          day: z.string().nullable()
        }),
        status: z.union([
          z.literal("single"),
          z.literal("married"),
          z.literal("divorced"),
          z.literal("widower")
        ]).nullable(),
        gender: z.union([z.literal("male"), z.literal("female"), z.literal("other")]).optional(),
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
      if (data.profile.firstName === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.FIRST_NAME_REQUIRED,
          path: ["profile.firstName"]
        });
      }
      if (data.profile.lastName === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.LAST_NAME_REQUIRED,
          path: ["profile.lastName"]
        });
      }
      if (data.profile.preferredName && data.profile.preferredName !== "" && data.profile.preferredName.length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PREFERRED_NAME_REQUIRED,
          path: ["profile.preferredName"]
        });
      }
      if (data.profile.birthday.day === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.BIRTHDAY_REQUIRED,
          path: ["profile.birthday.day"]
        });
      }
      if (data.profile.birthday.month === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.BIRTHMONTH_REQUIRED,
          path: ["profile.birthday.month"]
        });
      }
      if (data.profile.birthday.year === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.BIRTHYEAR_REQUIRED,
          path: ["profile.birthday.year"]
        });
      }
      if (!data.profile.status) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.STATUS_REQUIRED,
          path: ["profile.status"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      avatar: null,
      profile: {
        firstName: "",
        lastName: "",
        preferredName: "",
        email: "",
        phone: "",
        birthday: {
          year: null,
          month: null,
          day: null
        },
        gender: "male",
        status: "single",
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
    const currentAvatar = computed(
      () => `/img/avatars/default-${values.profile?.gender}.jpg`
    );
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
        console.log("profile-edit-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.profile.firstName === "Edgar") {
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
            setFieldError("profile.firstName", "\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A");
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
        console.log("profile-edit-error", error);
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
      const _component_BaseRadioHeadless = _sfc_main$6;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
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
        label: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC",
        sublabel: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0627\u06CC\u0647 \u062F\u0631 \u0645\u0648\u0631\u062F \u0634\u0645\u0627"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-12 gap-4"${_scopeId}><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.firstName" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0646\u0627\u0645",
                    icon: "ph:user-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645",
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
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.lastName" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
                    icon: "ph:user-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645\u06CC",
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
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.preferredName" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0646\u0627\u0645 \u062A\u0631\u062C\u06CC\u062D\u06CC",
                    icon: "ph:mask-happy-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645 \u0642\u0627\u0633\u0645\u06CC",
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
                      label: "\u0646\u0627\u0645 \u062A\u0631\u062C\u06CC\u062D\u06CC",
                      icon: "ph:mask-happy-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645 \u0642\u0627\u0633\u0645\u06CC",
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
                    placeholder: "\u0645\u062B\u0627\u0644: ghasem@eltheme.ir",
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
            _push2(ssrRenderComponent(unref(Field), { name: "profile.status" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "md",
                    label: "\u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0648\u0636\u0639\u06CC\u062A",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="single"${_scopeId3}> \u062A\u06A9 </option><option value="married"${_scopeId3}> \u0645\u062A\u0627\u0647\u0644 </option><option value="divorced"${_scopeId3}> \u0637\u0644\u0627\u0642 \u06AF\u0631\u0641\u062A\u0647 </option><option value="widower"${_scopeId3}> Widow/Widower </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "single" }, " \u062A\u06A9 "),
                          createVNode("option", { value: "married" }, " \u0645\u062A\u0627\u0647\u0644 "),
                          createVNode("option", { value: "divorced" }, " \u0637\u0644\u0627\u0642 \u06AF\u0631\u0641\u062A\u0647 "),
                          createVNode("option", { value: "widower" }, " Widow/Widower ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "md",
                      label: "\u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0648\u0636\u0639\u06CC\u062A",
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
                        createVNode("option", { value: "single" }, " \u062A\u06A9 "),
                        createVNode("option", { value: "married" }, " \u0645\u062A\u0627\u0647\u0644 "),
                        createVNode("option", { value: "divorced" }, " \u0637\u0644\u0627\u0642 \u06AF\u0631\u0641\u062A\u0647 "),
                        createVNode("option", { value: "widower" }, " Widow/Widower ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.birthday.day" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "md",
                    label: "\u0631\u0648\u0632 \u062A\u0648\u0644\u062F",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><!--[-->`);
                        ssrRenderList(31, (index) => {
                          _push4(`<option${ssrRenderAttr("value", index)}${_scopeId3}>${ssrInterpolate(index)}</option>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(31, (index) => {
                            return createVNode("option", {
                              key: index,
                              value: index
                            }, toDisplayString(index), 9, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "md",
                      label: "\u0631\u0648\u0632 \u062A\u0648\u0644\u062F",
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
                        (openBlock(), createBlock(Fragment, null, renderList(31, (index) => {
                          return createVNode("option", {
                            key: index,
                            value: index
                          }, toDisplayString(index), 9, ["value"]);
                        }), 64))
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.birthday.month" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "md",
                    label: "\u0645\u0627\u0647 \u062A\u0648\u0644\u062F",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="january"${_scopeId3}> \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 </option><option value="february"${_scopeId3}> \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A </option><option value="march"${_scopeId3}> \u062E\u0631\u062F\u0627\u062F </option><option value="april"${_scopeId3}> \u062A\u06CC\u0631 </option><option value="may"${_scopeId3}> \u0645\u0631\u062F\u0627\u062F </option><option value="june"${_scopeId3}> \u0634\u0647\u0631\u06CC\u0648\u0631 </option><option value="july"${_scopeId3}> \u0645\u0647\u0631 </option><option value="august"${_scopeId3}> \u0622\u0628\u0627\u0646 </option><option value="september"${_scopeId3}> \u0622\u0630\u0631 </option><option value="october"${_scopeId3}> \u062F\u06CC </option><option value="november"${_scopeId3}> \u0628\u0647\u0645\u0646 </option><option value="december"${_scopeId3}> \u0627\u0633\u0641\u0646\u062F </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "january" }, " \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 "),
                          createVNode("option", { value: "february" }, " \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A "),
                          createVNode("option", { value: "march" }, " \u062E\u0631\u062F\u0627\u062F "),
                          createVNode("option", { value: "april" }, " \u062A\u06CC\u0631 "),
                          createVNode("option", { value: "may" }, " \u0645\u0631\u062F\u0627\u062F "),
                          createVNode("option", { value: "june" }, " \u0634\u0647\u0631\u06CC\u0648\u0631 "),
                          createVNode("option", { value: "july" }, " \u0645\u0647\u0631 "),
                          createVNode("option", { value: "august" }, " \u0622\u0628\u0627\u0646 "),
                          createVNode("option", { value: "september" }, " \u0622\u0630\u0631 "),
                          createVNode("option", { value: "october" }, " \u062F\u06CC "),
                          createVNode("option", { value: "november" }, " \u0628\u0647\u0645\u0646 "),
                          createVNode("option", { value: "december" }, " \u0627\u0633\u0641\u0646\u062F ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "md",
                      label: "\u0645\u0627\u0647 \u062A\u0648\u0644\u062F",
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
                        createVNode("option", { value: "january" }, " \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 "),
                        createVNode("option", { value: "february" }, " \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A "),
                        createVNode("option", { value: "march" }, " \u062E\u0631\u062F\u0627\u062F "),
                        createVNode("option", { value: "april" }, " \u062A\u06CC\u0631 "),
                        createVNode("option", { value: "may" }, " \u0645\u0631\u062F\u0627\u062F "),
                        createVNode("option", { value: "june" }, " \u0634\u0647\u0631\u06CC\u0648\u0631 "),
                        createVNode("option", { value: "july" }, " \u0645\u0647\u0631 "),
                        createVNode("option", { value: "august" }, " \u0622\u0628\u0627\u0646 "),
                        createVNode("option", { value: "september" }, " \u0622\u0630\u0631 "),
                        createVNode("option", { value: "october" }, " \u062F\u06CC "),
                        createVNode("option", { value: "november" }, " \u0628\u0647\u0645\u0646 "),
                        createVNode("option", { value: "december" }, " \u0627\u0633\u0641\u0646\u062F ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.birthday.year" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0633\u0627\u0644 \u062A\u0648\u0644\u062F",
                    placeholder: "\u0645\u062B\u0627\u0644: \u06F1\u06F3\u06F6\u06F6",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    type: "number",
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      label: "\u0633\u0627\u0644 \u062A\u0648\u0644\u062F",
                      placeholder: "\u0645\u062B\u0627\u0644: \u06F1\u06F3\u06F6\u06F6",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      type: "number",
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}><div class=""${_scopeId}><label class="nui-label pb-2 text-[0.825rem]"${_scopeId}>\u062C\u0646\u0633\u06CC\u062A</label><div class="grid gap-4 sm:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "profile.gender" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "male",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          rounded: "md",
                          color: "none",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:gender-male-duotone",
                                class: "child mx-auto size-6"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0645\u0631\u062F `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0645\u0631\u062F ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="child text-muted-300 absolute end-2 top-2 ms-auto"${_scopeId4}><div class="size-2 rounded-full bg-current"${_scopeId4}></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:gender-male-duotone",
                                    class: "child mx-auto size-6"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0645\u0631\u062F ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                    createVNode("div", { class: "size-2 rounded-full bg-current" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCard, {
                            rounded: "md",
                            color: "none",
                            class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:gender-male-duotone",
                                  class: "child mx-auto size-6"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0645\u0631\u062F ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                  createVNode("div", { class: "size-2 rounded-full bg-current" })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      value: "male",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "md",
                          color: "none",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:gender-male-duotone",
                                class: "child mx-auto size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0645\u0631\u062F ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                createVNode("div", { class: "size-2 rounded-full bg-current" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "profile.gender" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "female",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          rounded: "md",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:gender-female-duotone",
                                class: "child mx-auto size-6"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0632\u0646 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0632\u0646 ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="child text-muted-300 absolute end-2 top-2 ms-auto"${_scopeId4}><div class="size-2 rounded-full bg-current"${_scopeId4}></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:gender-female-duotone",
                                    class: "child mx-auto size-6"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0632\u0646 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                    createVNode("div", { class: "size-2 rounded-full bg-current" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCard, {
                            rounded: "md",
                            class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:gender-female-duotone",
                                  class: "child mx-auto size-6"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0632\u0646 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                  createVNode("div", { class: "size-2 rounded-full bg-current" })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      value: "female",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "md",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:gender-female-duotone",
                                class: "child mx-auto size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0632\u0646 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                createVNode("div", { class: "size-2 rounded-full bg-current" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "profile.gender" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange,
                handleBlur
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "other",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          rounded: "md",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:gender-neuter-duotone",
                                class: "child mx-auto size-6"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_BaseHeading, {
                                as: "h4",
                                size: "sm",
                                weight: "medium",
                                lead: "none"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u062F\u06CC\u06AF\u0631 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u062F\u06CC\u06AF\u0631 ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="child text-muted-300 absolute end-2 top-2 ms-auto"${_scopeId4}><div class="size-2 rounded-full bg-current"${_scopeId4}></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                  createVNode(_component_Icon, {
                                    name: "ph:gender-neuter-duotone",
                                    class: "child mx-auto size-6"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u062F\u06CC\u06AF\u0631 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                    createVNode("div", { class: "size-2 rounded-full bg-current" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseCard, {
                            rounded: "md",
                            class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:gender-neuter-duotone",
                                  class: "child mx-auto size-6"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u062F\u06CC\u06AF\u0631 ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                  createVNode("div", { class: "size-2 rounded-full bg-current" })
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      value: "other",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "md",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:gender-neuter-duotone",
                                class: "child mx-auto size-6"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u062F\u06CC\u06AF\u0631 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                createVNode("div", { class: "size-2 rounded-full bg-current" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.firstName" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
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
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.lastName" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
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
                createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                  createVNode(unref(Field), { name: "profile.preferredName" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0646\u0627\u0645 \u062A\u0631\u062C\u06CC\u062D\u06CC",
                        icon: "ph:mask-happy-duotone",
                        placeholder: "\u0645\u062B\u0627\u0644: \u0642\u0627\u0633\u0645 \u0642\u0627\u0633\u0645\u06CC",
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
                  createVNode(unref(Field), { name: "profile.status" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseSelect, {
                        rounded: "md",
                        label: "\u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0648\u0636\u0639\u06CC\u062A",
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
                          createVNode("option", { value: "single" }, " \u062A\u06A9 "),
                          createVNode("option", { value: "married" }, " \u0645\u062A\u0627\u0647\u0644 "),
                          createVNode("option", { value: "divorced" }, " \u0637\u0644\u0627\u0642 \u06AF\u0631\u0641\u062A\u0647 "),
                          createVNode("option", { value: "widower" }, " Widow/Widower ")
                        ]),
                        _: 2
                      }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ltablet:col-span-4 col-span-12 lg:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.birthday.day" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseSelect, {
                        rounded: "md",
                        label: "\u0631\u0648\u0632 \u062A\u0648\u0644\u062F",
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
                          (openBlock(), createBlock(Fragment, null, renderList(31, (index) => {
                            return createVNode("option", {
                              key: index,
                              value: index
                            }, toDisplayString(index), 9, ["value"]);
                          }), 64))
                        ]),
                        _: 2
                      }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ltablet:col-span-4 col-span-12 lg:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.birthday.month" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseSelect, {
                        rounded: "md",
                        label: "\u0645\u0627\u0647 \u062A\u0648\u0644\u062F",
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
                          createVNode("option", { value: "january" }, " \u0641\u0631\u0648\u0631\u062F\u06CC\u0646 "),
                          createVNode("option", { value: "february" }, " \u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A "),
                          createVNode("option", { value: "march" }, " \u062E\u0631\u062F\u0627\u062F "),
                          createVNode("option", { value: "april" }, " \u062A\u06CC\u0631 "),
                          createVNode("option", { value: "may" }, " \u0645\u0631\u062F\u0627\u062F "),
                          createVNode("option", { value: "june" }, " \u0634\u0647\u0631\u06CC\u0648\u0631 "),
                          createVNode("option", { value: "july" }, " \u0645\u0647\u0631 "),
                          createVNode("option", { value: "august" }, " \u0622\u0628\u0627\u0646 "),
                          createVNode("option", { value: "september" }, " \u0622\u0630\u0631 "),
                          createVNode("option", { value: "october" }, " \u062F\u06CC "),
                          createVNode("option", { value: "november" }, " \u0628\u0647\u0645\u0646 "),
                          createVNode("option", { value: "december" }, " \u0627\u0633\u0641\u0646\u062F ")
                        ]),
                        _: 2
                      }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ltablet:col-span-4 col-span-12 lg:col-span-4" }, [
                  createVNode(unref(Field), { name: "profile.birthday.year" }, {
                    default: withCtx(({
                      field,
                      errorMessage,
                      handleChange,
                      handleBlur
                    }) => [
                      createVNode(_component_BaseInput, {
                        label: "\u0633\u0627\u0644 \u062A\u0648\u0644\u062F",
                        placeholder: "\u0645\u062B\u0627\u0644: \u06F1\u06F3\u06F6\u06F6",
                        "model-value": field.value,
                        error: errorMessage,
                        disabled: unref(isSubmitting),
                        type: "number",
                        "onUpdate:modelValue": handleChange,
                        onBlur: handleBlur
                      }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-12" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("label", { class: "nui-label pb-2 text-[0.825rem]" }, "\u062C\u0646\u0633\u06CC\u062A"),
                    createVNode("div", { class: "grid gap-4 sm:grid-cols-3" }, [
                      createVNode(unref(Field), { name: "profile.gender" }, {
                        default: withCtx(({
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur
                        }) => [
                          createVNode(_component_BaseRadioHeadless, {
                            value: "male",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseCard, {
                                rounded: "md",
                                color: "none",
                                class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:gender-male-duotone",
                                      class: "child mx-auto size-6"
                                    }),
                                    createVNode("div", null, [
                                      createVNode(_component_BaseHeading, {
                                        as: "h4",
                                        size: "sm",
                                        weight: "medium",
                                        lead: "none"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0645\u0631\u062F ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                      createVNode("div", { class: "size-2 rounded-full bg-current" })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "profile.gender" }, {
                        default: withCtx(({
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur
                        }) => [
                          createVNode(_component_BaseRadioHeadless, {
                            value: "female",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseCard, {
                                rounded: "md",
                                class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:gender-female-duotone",
                                      class: "child mx-auto size-6"
                                    }),
                                    createVNode("div", null, [
                                      createVNode(_component_BaseHeading, {
                                        as: "h4",
                                        size: "sm",
                                        weight: "medium",
                                        lead: "none"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0632\u0646 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                      createVNode("div", { class: "size-2 rounded-full bg-current" })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Field), { name: "profile.gender" }, {
                        default: withCtx(({
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur
                        }) => [
                          createVNode(_component_BaseRadioHeadless, {
                            value: "other",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_BaseCard, {
                                rounded: "md",
                                class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                    createVNode(_component_Icon, {
                                      name: "ph:gender-neuter-duotone",
                                      class: "child mx-auto size-6"
                                    }),
                                    createVNode("div", null, [
                                      createVNode(_component_BaseHeading, {
                                        as: "h4",
                                        size: "sm",
                                        weight: "medium",
                                        lead: "none"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u062F\u06CC\u06AF\u0631 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "child text-muted-300 absolute end-2 top-2 ms-auto" }, [
                                      createVNode("div", { class: "size-2 rounded-full bg-current" })
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
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
      _push(ssrRenderComponent(_component_TairoFormGroup, {
        label: "\u0622\u062F\u0631\u0633 \u067E\u0633\u062A\u06CC",
        sublabel: "\u0622\u062F\u0631\u0633\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC \u0627\u0631\u0633\u0627\u0644 \u0646\u0627\u0645\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F"
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
        sublabel: "\u0622\u062F\u0631\u0633 \u0642\u0627\u0646\u0648\u0646\u06CC \u0634\u0645\u0627 \u0628\u0631\u0627\u06CC \u0627\u0645\u0648\u0631 \u0635\u0648\u0631\u062A\u062D\u0633\u0627\u0628"
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
        to: "/layouts/profile",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/user-edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
