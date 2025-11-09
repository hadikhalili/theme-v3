import { u as useRouter, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, _ as __nuxt_component_0$3, d as _sfc_main$D, f as _sfc_main$C } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$2 } from './BaseThemeToggle-xWG13Wev.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { _ as _sfc_main$1 } from './AddonInputPassword-DM0uhxUn.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import 'vue-router';
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './composables-DRJhNAUK.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "signup-1",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordRef = ref();
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "\u06CC\u06A9 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0639\u062A\u0628\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A",
      USERNAME_LENGTH: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F3 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",
      PASSWORD_LENGTH: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u06F8 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",
      PASSWORD_CONTAINS_EMAIL: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0634\u0627\u0645\u0644 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u0628\u0627\u0634\u062F",
      PASSWORD_MATCH: "\u0631\u0645\u0632\u0647\u0627\u06CC \u0639\u0628\u0648\u0631 \u0645\u0637\u0627\u0628\u0642\u062A \u0646\u062F\u0627\u0631\u0646\u062F"
    };
    const zodSchema = z.object({
      username: z.string().min(3, VALIDATION_TEXT.USERNAME_LENGTH),
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      referralCode: z.string().optional(),
      password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
      confirmPassword: z.string()
    }).superRefine((data, ctx) => {
      if (passwordRef.value?.validation?.feedback?.warning || passwordRef.value?.validation?.feedback?.suggestions?.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: passwordRef.value?.validation?.feedback?.warning || passwordRef.value.validation.feedback?.suggestions?.[0],
          path: ["password"]
        });
      }
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.PASSWORD_MATCH,
          path: ["confirmPassword"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      username: "",
      email: "",
      referralCode: "",
      password: "",
      confirmPassword: ""
    };
    const { values, handleSubmit, isSubmitting, setFieldError } = useForm({
      validationSchema,
      initialValues
    });
    const router = useRouter();
    const toaster = useToaster();
    handleSubmit(async (values2) => {
      try {
        const response = await $fetch("/api/auth/signup", {
          method: "POST",
          body: values2
        });
        toaster.clearAll();
        toaster.show({
          title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
          message: response.message,
          color: "success",
          icon: "ph:user-circle-fill",
          closable: true
        });
        router.push("/layouts/onboarding-1");
      } catch (error) {
        if (error.data?.errors) {
          error.data.errors.forEach((err) => {
            setFieldError(err.path, err.message);
          });
        } else {
          toaster.show({
            title: "\u062E\u0637\u0627",
            message: error.data?.message || "\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A\u200C\u0646\u0627\u0645",
            color: "danger",
            icon: "ph:warning-circle",
            closable: true
          });
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseThemeToggle = _sfc_main$2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen md:flex" }, _attrs))}><div class="from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex"><div class="mx-auto max-w-xs text-center">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium",
        class: "text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062D\u0633\u0627\u0628 \u062F\u0627\u0631\u06CC\u062F\u061F `);
          } else {
            return [
              createTextVNode(" \u062D\u0633\u0627\u0628 \u062F\u0627\u0631\u06CC\u062F\u061F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-200 mb-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0646\u06CC\u0627\u0632\u06CC \u0628\u0647 \u0647\u062F\u0631 \u062F\u0627\u062F\u0646 \u0632\u0645\u0627\u0646 \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0646\u06CC\u0633\u062A\u060C \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC\u200C\u062A\u0627\u0646 \u0628\u0631\u06AF\u0631\u062F\u0627\u0646\u06CC\u0645 `);
          } else {
            return [
              createTextVNode(" \u0646\u06CC\u0627\u0632\u06CC \u0628\u0647 \u0647\u062F\u0631 \u062F\u0627\u062F\u0646 \u0632\u0645\u0627\u0646 \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0646\u06CC\u0633\u062A\u060C \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC\u200C\u062A\u0627\u0646 \u0628\u0631\u06AF\u0631\u062F\u0627\u0646\u06CC\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButton, {
        to: "/auth/login-1",
        rounded: "lg",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u0627\u0631\u062F \u062D\u0633\u0627\u0628 \u0634\u0648\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0648\u0627\u0631\u062F \u062D\u0633\u0627\u0628 \u0634\u0648\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72 ltr:origin-top-left ltr:rotate-45 rtl:origin-top-right rtl:-rotate-45"></div><div class="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 rounded-full transition-all delay-75 duration-300 group-hover:w-48 ltr:origin-top-left ltr:rotate-45 rtl:origin-top-right rtl:-rotate-45"></div><div class="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 rounded-full transition-all delay-150 duration-300 group-hover:w-40 ltr:origin-top-left ltr:rotate-45 rtl:origin-top-right rtl:-rotate-45"></div><div class="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 rounded-full transition-all delay-150 duration-300 group-hover:w-72 ltr:origin-bottom-right ltr:rotate-45 rtl:origin-bottom-left rtl:-rotate-45"></div><div class="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 rounded-full transition-all delay-75 duration-300 group-hover:w-48 ltr:origin-bottom-right ltr:rotate-45 rtl:origin-bottom-left rtl:-rotate-45"></div><div class="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40 ltr:origin-bottom-right ltr:rotate-45 rtl:origin-bottom-left rtl:-rotate-45"></div></div><div class="dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2"><div class="mx-auto flex w-full max-w-xs items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "size-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "size-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div></div><form method="POST" action="" class="mx-auto w-full max-w-xs" novalidate>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        weight: "medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u0647 \u0631\u0627\u06CC\u06A9\u0627 \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0628\u0647 \u0631\u0627\u06CC\u06A9\u0627 \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, {
        size: "sm",
        class: "text-muted-400 mb-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0628\u0627 \u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u0645 `);
          } else {
            return [
              createTextVNode(" \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0628\u0627 \u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0634\u0631\u0648\u0639 \u06A9\u0646\u06CC\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-4 space-y-3">`);
      _push(ssrRenderComponent(unref(Field), { name: "username" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "text",
              rounded: "lg",
              placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC",
              icon: "ph:fingerprint-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "text",
                rounded: "lg",
                placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC",
                icon: "ph:fingerprint-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "email" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "email",
              rounded: "lg",
              placeholder: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              icon: "ph:at-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "email",
                rounded: "lg",
                placeholder: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                icon: "ph:at-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "referralCode" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "text",
              rounded: "lg",
              placeholder: "\u06A9\u062F \u0645\u0639\u0631\u0641 (\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)",
              icon: "ph:qr-code-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "text",
                rounded: "lg",
                placeholder: "\u06A9\u062F \u0645\u0639\u0631\u0641 (\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)",
                icon: "ph:qr-code-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "password" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              ref_key: "passwordRef",
              ref: passwordRef,
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              "user-inputs": [unref(values).username ?? "", unref(values).email ?? ""],
              rounded: "lg",
              placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
              icon: "ph:lock-duotone",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), {
                ref_key: "passwordRef",
                ref: passwordRef,
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                "user-inputs": [unref(values).username ?? "", unref(values).email ?? ""],
                rounded: "lg",
                placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
                icon: "ph:lock-duotone",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "user-inputs", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Field), { name: "confirmPassword" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting),
              type: "password",
              rounded: "lg",
              placeholder: "\u062A\u0623\u06CC\u06CC\u062F \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
              icon: "ph:check",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting),
                type: "password",
                rounded: "lg",
                placeholder: "\u062A\u0623\u06CC\u06CC\u062F \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
                icon: "ph:check",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting),
        loading: unref(isSubmitting),
        type: "submit",
        rounded: "lg",
        color: "primary",
        class: "!h-11 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 `);
          } else {
            return [
              createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u062D\u0633\u0627\u0628 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"><span>\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062F\u0627\u0631\u06CC\u062F\u061F</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login-1",
        class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline focus:underline focus:outline-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0627\u06CC\u0646\u062C\u0627 \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F `);
          } else {
            return [
              createTextVNode(" \u0627\u06CC\u0646\u062C\u0627 \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></form><div class="text-center">`);
      _push(ssrRenderComponent(_component_BaseText, {
        size: "sm",
        class: "text-muted-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} \u062A\u0627\u06CC\u0631\u0648. \u062A\u0645\u0627\u0645\u06CC \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A. `);
          } else {
            return [
              createTextVNode(" \xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " \u062A\u0627\u06CC\u0631\u0648. \u062A\u0645\u0627\u0645\u06CC \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A. ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/signup-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
