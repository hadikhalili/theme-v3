import { _ as __nuxt_component_0$3, a as __nuxt_component_2, b as _sfc_main$w, c as _sfc_main$v, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseThemeToggle-xWG13Wev.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { push } from 'notivue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field } from 'vee-validate';
import { z } from 'zod';
import { useTokenClient } from 'vue3-google-signin';
import { u as useUserStore, a as useCustomFetch } from './user-DDZJ47NJ.mjs';
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
import 'unhead';
import '@unhead/shared';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './composables-DRJhNAUK.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _imports_0 = publicAssetsURL("/img/illustrations/magician.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    useRoute();
    const loading = ref(false);
    const VALIDATION_TEXT = {
      EMAIL_REQUIRED: "\u06CC\u06A9 \u0627\u06CC\u0645\u06CC\u0644 \u0645\u0639\u062A\u0628\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A",
      PASSWORD_REQUIRED: "\u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A"
    };
    const zodSchema = z.object({
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
      trustDevice: z.boolean()
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      email: "",
      password: "",
      trustDevice: false
    };
    const {
      handleSubmit,
      handleReset,
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
    handleSubmit(async (values2) => {
      loading.value = true;
      try {
        await userStore.login(values2.email, values2.password);
        push.success({
          title: "\u0648\u0631\u0648\u062F \u0645\u0648\u0641\u0642",
          message: "\u0648\u0631\u0648\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F"
        });
        await router.push("/dashboards");
      } catch (error) {
        console.error("Login error:", error);
        setFieldError("password", "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u06CC\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A");
        push.error({
          title: "\u062E\u0637\u0627 \u062F\u0631 \u0648\u0631\u0648\u062F",
          message: error.message || "\u0648\u0631\u0648\u062F \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F"
        });
        resetForm();
      } finally {
        loading.value = false;
      }
    });
    const handleOnSuccess = async (response) => {
      loading.value = true;
      const { customFetch } = useCustomFetch();
      try {
        if (!response.access_token || typeof response.access_token !== "string") {
          throw new Error("No valid access token provided");
        }
        const userInfo = await customFetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        });
        await userStore.googleLogin(userInfo.sub, userInfo.email, userInfo.name);
        push.success({
          title: "\u0648\u0631\u0648\u062F \u0645\u0648\u0641\u0642",
          message: "\u0648\u0631\u0648\u062F \u0628\u0627 \u06AF\u0648\u06AF\u0644 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F"
        });
        router.push("/dashboards");
      } catch (error) {
        console.error("Error handling Google Sign-In:", error);
        push.error({
          title: "\u062E\u0637\u0627 \u062F\u0631 \u0648\u0631\u0648\u062F \u0628\u0627 \u06AF\u0648\u06AF\u0644",
          message: error.message || "\u0648\u0631\u0648\u062F \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F"
        });
      } finally {
        loading.value = false;
      }
    };
    const handleOnError = (errorResponse) => {
      console.log("Error: ", errorResponse);
      push.error({
        title: "\u062E\u0637\u0627 \u062F\u0631 \u0648\u0631\u0648\u062F \u0628\u0627 \u06AF\u0648\u06AF\u0644",
        message: "\u0648\u0631\u0648\u062F \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F"
      });
    };
    const { isReady, login } = useTokenClient({
      onSuccess: handleOnSuccess,
      onError: handleOnError
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseThemeToggle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-800 flex min-h-screen bg-white" }, _attrs))}><div class="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none"><div class="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white"><div class="flex w-full items-center justify-between"><button class="btn btn-active btn-accent">Accent</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "gg:arrow-long-left",
              class: "size-5 rtl:rotate-180"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "gg:arrow-long-left",
                class: "size-5 rtl:rotate-180"
              }),
              createVNode("span", null, "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseThemeToggle, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "3xl",
        lead: "relaxed",
        weight: "medium",
        class: "mt-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u062E\u0648\u0634 \u0622\u0645\u062F\u06CC\u062F. ")
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
            _push2(` \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062D\u0633\u0627\u0628 \u06AF\u0648\u06AF\u0644 \u06CC\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648\u0631\u0648\u062F \u062E\u0648\u062F \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F. `);
          } else {
            return [
              createTextVNode(" \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062D\u0633\u0627\u0628 \u06AF\u0648\u06AF\u0644 \u06CC\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648\u0631\u0648\u062F \u062E\u0648\u062F \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap justify-between gap-4"><button class="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white"${ssrIncludeBooleanAttr(!unref(isReady) || unref(loading)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "logos:google-icon",
        class: "size-5"
      }, null, _parent));
      _push(`<div>\u0628\u0627 \u06AF\u0648\u06AF\u0644 \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F</div></button></div><div class="flex-100 mt-8 flex items-center"><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"><span class="text-muted-600 dark:text-muted-300 px-4 font-sans font-light"> \u06CC\u0627 </span><hr class="border-muted-200 dark:border-muted-700 flex-auto border-t-2"></div></div><form method="POST" action="" class="mt-6" novalidate><div class="mt-5"><div><div class="space-y-4">`);
      _push(ssrRenderComponent(unref(Field), { name: "email" }, {
        default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting) || unref(loading),
              type: "email",
              label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              placeholder: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              autocomplete: "email",
              classes: {
                input: "h-12"
              },
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting) || unref(loading),
                type: "email",
                label: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                placeholder: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
                autocomplete: "email",
                classes: {
                  input: "h-12"
                },
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
            _push2(ssrRenderComponent(_component_BaseInput, {
              "model-value": field.value,
              error: errorMessage,
              disabled: unref(isSubmitting) || unref(loading),
              type: "password",
              label: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
              placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
              autocomplete: "current-password",
              classes: {
                input: "h-12"
              },
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseInput, {
                "model-value": field.value,
                error: errorMessage,
                disabled: unref(isSubmitting) || unref(loading),
                type: "password",
                label: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
                placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
                autocomplete: "current-password",
                classes: {
                  input: "h-12"
                },
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 flex items-center justify-between">`);
      _push(ssrRenderComponent(unref(Field), { name: "trustDevice" }, {
        default: withCtx(({ field, handleChange, handleBlur }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseCheckbox, {
              "model-value": field.value,
              disabled: unref(isSubmitting) || unref(loading),
              rounded: "sm",
              label: "\u0627\u0639\u062A\u0645\u0627\u062F \u0628\u0631\u0627\u06CC \u06F6\u06F0 \u0631\u0648\u0632",
              color: "primary",
              "onUpdate:modelValue": handleChange,
              onBlur: handleBlur
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseCheckbox, {
                "model-value": field.value,
                disabled: unref(isSubmitting) || unref(loading),
                rounded: "sm",
                label: "\u0627\u0639\u062A\u0645\u0627\u062F \u0628\u0631\u0627\u06CC \u06F6\u06F0 \u0631\u0648\u0632",
                color: "primary",
                "onUpdate:modelValue": handleChange,
                onBlur: handleBlur
              }, null, 8, ["model-value", "disabled", "onUpdate:modelValue", "onBlur"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-xs leading-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/recover",
        class: "text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u061F `);
          } else {
            return [
              createTextVNode(" \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u061F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-6"><div class="block w-full rounded-md shadow-sm">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        disabled: unref(isSubmitting) || unref(loading),
        loading: unref(isSubmitting) || unref(loading),
        type: "submit",
        color: "primary",
        class: "!h-11 w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0648\u0631\u0648\u062F `);
          } else {
            return [
              createTextVNode(" \u0648\u0631\u0648\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><p class="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5"><span>\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F\u061F</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/signup-1",
        class: "text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u062B\u0628\u062A \u0646\u0627\u0645 `);
          } else {
            return [
              createTextVNode(" \u062B\u0628\u062A \u0646\u0627\u0645 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div></div><div class="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5"><div class="mx-auto w-full max-w-4xl"><img class="mx-auto max-w-md"${ssrRenderAttr("src", _imports_0)} alt="" width="500" height="500"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
