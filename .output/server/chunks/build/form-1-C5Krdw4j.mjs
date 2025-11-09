import { b as _sfc_main$w, c as _sfc_main$v, a as __nuxt_component_2, h as _sfc_main$u, d as _sfc_main$D, f as _sfc_main$C, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$2 } from './BaseFullscreenDropfile-CgoQnI75.mjs';
import { _ as _sfc_main$3 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$5 } from './AddonInputPhone-C3Hh-ZkB.mjs';
import { _ as _sfc_main$6 } from './BaseRadioHeadless-BL03emlX.mjs';
import { _ as _sfc_main$7 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as __nuxt_component_0 } from './BaseListbox-CK7ULECq.mjs';
import { _ as _sfc_main$8 } from './BaseTextarea-BGdIJfqV.mjs';
import { _ as _sfc_main$9 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, computed, ref, watch, withCtx, createVNode, unref, isRef, openBlock, createBlock, createTextVNode, withModifiers, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './file-preview-DSqAOr0Y.mjs';
import './BaseDropdownItem-vorQzQkQ.mjs';
import '@headlessui-float/vue';
import './IconChevronDown-B9AzKHTY.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';
import './BaseAvatar-3aYTRoBN.mjs';
import './IconCheck--xcA1MPZ.mjs';

const ONE_MB = 1e6;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-1",
  __ssrInlineRender: true,
  setup(__props) {
    const people = [
      {
        id: 1,
        name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632",
        text: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
        media: "/img/avatars/19.svg"
      },
      {
        id: 2,
        name: "\u0622\u0631\u0648\u0646 \u0627\u0633\u067E\u0644\u0627\u062A\u0631",
        text: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        media: "/img/avatars/16.svg"
      },
      {
        id: 3,
        name: "\u0645\u0627\u06CC\u06A9 \u0645\u06CC\u0644\u0631",
        text: "\u0637\u0631\u0627\u062D UI/UX",
        media: "/img/avatars/3.svg"
      },
      {
        id: 4,
        name: "\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631",
        text: "\u062A\u0648\u0633\u0639\u0647\u200C\u062F\u0647\u0646\u062F\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
        media: "/img/avatars/22.svg"
      },
      {
        id: 5,
        name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
        text: "\u0645\u062F\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644",
        media: "/img/avatars/2.svg"
      }
    ];
    const VALIDATION_TEXT = {
      NAME_REQUIRED: "\u0646\u0627\u0645 \u0634\u0631\u06A9\u062A \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      EMAIL_REQUIRED: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      OPTION_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      MANAGER_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      STATUS_REQUIRED: "\u0648\u0636\u0639\u06CC\u062A \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",
      AVATAR_TOO_BIG: `\u0627\u0646\u062F\u0627\u0632\u0647 \u0622\u0648\u0627\u062A\u0627\u0631 \u0628\u0627\u06CC\u062F \u06A9\u0645\u062A\u0631 \u0627\u0632 \u06F1 \u0645\u06AF\u0627\u0628\u0627\u06CC\u062A \u0628\u0627\u0634\u062F`
    };
    const zodSchema = z.object({
      avatar: z.custom((v) => v instanceof File).nullable(),
      company: z.object({
        name: z.string().min(1, VALIDATION_TEXT.NAME_REQUIRED),
        email: z.string().min(1, VALIDATION_TEXT.EMAIL_REQUIRED),
        type: z.string().optional(),
        website: z.string().optional(),
        phone: z.string().optional(),
        status: z.union([z.literal("active"), z.literal("inactive")]).nullable(),
        employees: z.union([
          z.literal("\u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"),
          z.literal("\u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"),
          z.literal("\u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"),
          z.literal("\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F")
        ]).nullable(),
        manager: z.object({
          id: z.number(),
          name: z.string(),
          text: z.string(),
          media: z.string()
        }).nullable(),
        income: z.union([
          z.literal("\u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646"),
          z.literal("\u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631"),
          z.literal("\u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646"),
          z.literal("\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646"),
          z.literal("\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646")
        ]).nullable(),
        notes: z.string().optional(),
        privateRecord: z.boolean()
      })
    }).superRefine((data, ctx) => {
      if (data.avatar && data.avatar.size > ONE_MB) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.AVATAR_TOO_BIG,
          path: ["avatar"]
        });
      }
      if (!data.company.income) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["company.income"]
        });
      }
      if (!data.company.employees) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["company.employees"]
        });
      }
      if (!data.company.status) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.STATUS_REQUIRED,
          path: ["company.status"]
        });
      }
      if (!data.company.manager) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.MANAGER_REQUIRED,
          path: ["company.manager"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      avatar: null,
      company: {
        name: "",
        email: "",
        website: "",
        type: "",
        phone: "",
        income: null,
        employees: null,
        manager: null,
        status: null,
        notes: "",
        privateRecord: false
      }
    };
    const currentAvatar = computed(() => "/img/avatars/company.svg");
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
    const onSubmit = handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("company-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.company.name === "\u0627\u06CC\u0631\u200C\u0628\u06CC\u200C\u0627\u0646\u200C\u0628\u06CC") {
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
            message: `Record has been created!`,
            color: "success",
            icon: "ph:check",
            closable: true
          });
        } catch (error) {
          if (error.message === "\u062E\u0637\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u062C\u0639\u0644\u06CC \u062F\u0631 \u0628\u06A9\u200C\u0627\u0646\u062F") {
            setFieldError("company.name", "\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A");
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
        console.log("company-create-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseFullscreenDropfile = _sfc_main$2;
      const _component_BaseInputFileHeadless = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_BaseInput = _sfc_main$D;
      const _component_AddonInputPhone = _sfc_main$5;
      const _component_BaseRadioHeadless = _sfc_main$6;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseSelect = _sfc_main$7;
      const _component_BaseListbox = __nuxt_component_0;
      const _component_BaseTextarea = _sfc_main$8;
      const _component_BaseCheckbox = _sfc_main$9;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4 flex flex-col justify-between md:flex-row md:items-center"><div class="ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-start lg:max-w-full"><div>`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h2",
        size: "xl",
        weight: "light",
        lead: "tight",
        class: "text-muted-800 dark:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0634\u0631\u06A9\u062A \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0634\u0631\u06A9\u062A \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-muted-500"${_scopeId}> \u06CC\u06A9 \u0631\u06A9\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F </span>`);
          } else {
            return [
              createVNode("span", { class: "text-muted-500" }, " \u06CC\u06A9 \u0631\u06A9\u0648\u0631\u062F \u062C\u062F\u06CC\u062F \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start">`);
      _push(ssrRenderComponent(_component_BaseButtonAction, {
        onClick: ($event) => _ctx.$router.back()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "size-3"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0644\u063A\u0648</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "size-3"
              }),
              createVNode("span", null, "\u0644\u063A\u0648")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form method="POST" action="" class="divide-muted-200 dark:divide-muted-700 grid divide-x rtl:divide-x-reverse sm:grid-cols-2"${_scopeId}><div rounded="lg" class="bg-muted-50 dark:bg-muted-800/60 space-y-8 p-10"${_scopeId}><div class="mx-auto flex w-full max-w-[410px] flex-col"${_scopeId}><div${_scopeId}><div class="relative mb-5 flex flex-col items-center justify-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseFullscreenDropfile, {
              icon: "ph:image-duotone",
              "filter-file-dropped": (file) => file.type.startsWith("image"),
              onDrop: (value) => {
                inputFile.value = value;
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseInputFileHeadless, {
              modelValue: unref(inputFile),
              "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null,
              accept: "image/*"
            }, {
              default: withCtx(({ open, remove, preview, files }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative size-20"${_scopeId2}>`);
                  if (files?.length && files.item(0)) {
                    _push3(`<img${ssrRenderAttr("src", preview(files.item(0)).value)} alt="\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F" class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"${_scopeId2}>`);
                  } else {
                    _push3(`<img${ssrRenderAttr("src", unref(currentAvatar))} alt="\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F" class="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center dark:invert"${_scopeId2}>`);
                  }
                  if (files?.length && files.item(0)) {
                    _push3(`<div class="absolute bottom-0 end-0 z-20"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                      size: "sm",
                      rounded: "full",
                      "data-nui-tooltip": "\u062D\u0630\u0641 \u062A\u0635\u0648\u06CC\u0631",
                      class: "scale-90",
                      onClick: ($event) => remove(files.item(0))
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:x",
                            class: "size-4"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="absolute bottom-0 end-0 z-20"${_scopeId2}><div class="relative" data-nui-tooltip="\u062A\u0635\u0648\u06CC\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_BaseButtonIcon, {
                      size: "sm",
                      rounded: "full",
                      onClick: open
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:plus",
                            class: "size-4"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative size-20" }, [
                      files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: preview(files.item(0)).value,
                        alt: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F",
                        class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                      }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: unref(currentAvatar),
                        alt: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F",
                        class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center dark:invert"
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
                          "data-nui-tooltip": "\u062A\u0635\u0648\u06CC\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
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
            }, _parent2, _scopeId));
            if (unref(fileError)) {
              _push2(`<div class="text-danger-600 inline-block font-sans text-[.8rem]"${_scopeId}>${ssrInterpolate(unref(fileError))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.name" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0634\u0631\u06A9\u062A \u0646\u0627\u0645",
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
                      label: "\u0634\u0631\u06A9\u062A \u0646\u0627\u0645",
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
            _push2(ssrRenderComponent(unref(Field), { name: "company.email" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0634\u0631\u06A9\u062A \u0627\u06CC\u0645\u06CC\u0644",
                    placeholder: "\u0645\u062B\u0627\u0644: hello@eltheme.ir",
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
                      label: "\u0634\u0631\u06A9\u062A \u0627\u06CC\u0645\u06CC\u0644",
                      placeholder: "\u0645\u062B\u0627\u0644: hello@eltheme.ir",
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
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.website" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    icon: "lucide:globe",
                    label: "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0634\u0631\u06A9\u062A",
                    placeholder: "\u0645\u062B\u0627\u0644: https://eltheme.ir",
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
                      icon: "lucide:globe",
                      label: "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0634\u0631\u06A9\u062A",
                      placeholder: "\u0645\u062B\u0627\u0644: https://eltheme.ir",
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
            _push2(ssrRenderComponent(unref(Field), { name: "company.phone" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AddonInputPhone, {
                    label: "\u0634\u0631\u06A9\u062A \u062A\u0644\u0641\u0646",
                    placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AddonInputPhone, {
                      label: "\u0634\u0631\u06A9\u062A \u062A\u0644\u0641\u0646",
                      placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
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
            _push2(`</div></div><div class="mb-6 mt-4"${_scopeId}><label class="nui-label pb-2 text-[0.825rem]"${_scopeId}>\u0646\u0648\u0639 \u0634\u0631\u06A9\u062A</label><div class="ptablet:grid-cols-2 ltablet:grid-cols-3 grid gap-4 lg:grid-cols-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.type" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "team_member_1",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          rounded: "sm",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                          color: "none"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:house-simple-duotone",
                                class: "child mx-auto size-5"
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
                                    _push6(` \u062A\u06A9 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u062A\u06A9 ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0634\u0631\u06A9\u062A \u06A9\u0648\u0686\u06A9 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A \u06A9\u0648\u0686\u06A9 ")
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
                                    name: "ph:house-simple-duotone",
                                    class: "child mx-auto size-5"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u062A\u06A9 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseText, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0634\u0631\u06A9\u062A \u06A9\u0648\u0686\u06A9 ")
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
                            rounded: "sm",
                            class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                            color: "none"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:house-simple-duotone",
                                  class: "child mx-auto size-5"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u062A\u06A9 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A \u06A9\u0648\u0686\u06A9 ")
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
                      value: "team_member_1",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "sm",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                          color: "none"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:house-simple-duotone",
                                class: "child mx-auto size-5"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u062A\u06A9 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0634\u0631\u06A9\u062A \u06A9\u0648\u0686\u06A9 ")
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
            _push2(ssrRenderComponent(unref(Field), { name: "company.type" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "team_member_2",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          rounded: "sm",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                          color: "none"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:storefront-duotone",
                                class: "child mx-auto size-5"
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
                                    _push6(` \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0634\u0631\u06A9\u062A \u0645\u062A\u0648\u0633\u0637 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A \u0645\u062A\u0648\u0633\u0637 ")
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
                                    name: "ph:storefront-duotone",
                                    class: "child mx-auto size-5"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseText, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0634\u0631\u06A9\u062A \u0645\u062A\u0648\u0633\u0637 ")
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
                            rounded: "sm",
                            class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                            color: "none"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:storefront-duotone",
                                  class: "child mx-auto size-5"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A \u0645\u062A\u0648\u0633\u0637 ")
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
                      value: "team_member_2",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "sm",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                          color: "none"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:storefront-duotone",
                                class: "child mx-auto size-5"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0634\u0631\u06A9\u062A \u0645\u062A\u0648\u0633\u0637 ")
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
            _push2(ssrRenderComponent(unref(Field), { name: "company.type" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    value: "team_member_3",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseCard, {
                          rounded: "sm",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                          color: "none"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex w-full flex-col items-center gap-2 text-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "ph:buildings-duotone",
                                class: "child mx-auto size-5"
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
                                    _push6(` \u0634\u0631\u06A9\u062A `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_BaseText, {
                                size: "xs",
                                class: "text-muted-400"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0634\u0631\u06A9\u062A \u0628\u0632\u0631\u06AF\u200C\u062A\u0631 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A \u0628\u0632\u0631\u06AF\u200C\u062A\u0631 ")
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
                                    name: "ph:buildings-duotone",
                                    class: "child mx-auto size-5"
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_BaseHeading, {
                                      as: "h4",
                                      size: "sm",
                                      weight: "medium",
                                      lead: "none"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0634\u0631\u06A9\u062A ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseText, {
                                      size: "xs",
                                      class: "text-muted-400"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0634\u0631\u06A9\u062A \u0628\u0632\u0631\u06AF\u200C\u062A\u0631 ")
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
                            rounded: "sm",
                            class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                            color: "none"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "ph:buildings-duotone",
                                  class: "child mx-auto size-5"
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_BaseHeading, {
                                    as: "h4",
                                    size: "sm",
                                    weight: "medium",
                                    lead: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseText, {
                                    size: "xs",
                                    class: "text-muted-400"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0634\u0631\u06A9\u062A \u0628\u0632\u0631\u06AF\u200C\u062A\u0631 ")
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
                      value: "team_member_3",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BaseCard, {
                          rounded: "sm",
                          class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                          color: "none"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                              createVNode(_component_Icon, {
                                name: "ph:buildings-duotone",
                                class: "child mx-auto size-5"
                              }),
                              createVNode("div", null, [
                                createVNode(_component_BaseHeading, {
                                  as: "h4",
                                  size: "sm",
                                  weight: "medium",
                                  lead: "none"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0634\u0631\u06A9\u062A ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseText, {
                                  size: "xs",
                                  class: "text-muted-400"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0634\u0631\u06A9\u062A \u0628\u0632\u0631\u06AF\u200C\u062A\u0631 ")
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
            _push2(`</div></div></div></div></div><div rounded="lg" class="w-full space-y-8 p-10"${_scopeId}><div class="mx-auto w-full max-w-[410px] sm:pt-28"${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.income" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "sm",
                    label: "\u062F\u0631\u0622\u0645\u062F",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="\u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646"${_scopeId3}> \u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 </option><option value="\u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631"${_scopeId3}> \u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 </option><option value="\u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646"${_scopeId3}> \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 </option><option value="\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646"${_scopeId3}> \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 </option><option value="\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646"${_scopeId3}> \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "\u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646" }, " \u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631" }, " \u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 "),
                          createVNode("option", { value: "\u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646" }, " \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646" }, " \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 "),
                          createVNode("option", { value: "\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "sm",
                      label: "\u062F\u0631\u0622\u0645\u062F",
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
                        createVNode("option", { value: "\u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646" }, " \u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                        createVNode("option", { value: "\u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631" }, " \u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 "),
                        createVNode("option", { value: "\u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646" }, " \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 "),
                        createVNode("option", { value: "\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646" }, " \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 "),
                        createVNode("option", { value: "\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-6 col-span-12 lg:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.employees" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "sm",
                    label: "\u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="\u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"${_scopeId3}> \u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F </option><option value="\u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"${_scopeId3}> \u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F </option><option value="\u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"${_scopeId3}> \u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F </option><option value="\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F"${_scopeId3}> \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "\u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                          createVNode("option", { value: "\u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                          createVNode("option", { value: "\u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                          createVNode("option", { value: "\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "sm",
                      label: "\u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646",
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
                        createVNode("option", { value: "\u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                        createVNode("option", { value: "\u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                        createVNode("option", { value: "\u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                        createVNode("option", { value: "\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.manager" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseListbox, {
                    label: "\u0645\u062F\u06CC\u0631",
                    items: people,
                    properties: {
                      value: "id",
                      label: "name",
                      sublabel: "text",
                      media: "media"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseListbox, {
                      label: "\u0645\u062F\u06CC\u0631",
                      items: people,
                      properties: {
                        value: "id",
                        label: "name",
                        sublabel: "text",
                        media: "media"
                      },
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
            _push2(`</div><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.status" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseSelect, {
                    rounded: "sm",
                    label: "\u0648\u0636\u0639\u06CC\u062A",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option value="" hidden${_scopeId3}></option><option value="active"${_scopeId3}> \u0641\u0639\u0627\u0644 </option><option value="inactive"${_scopeId3}> \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 </option>`);
                      } else {
                        return [
                          createVNode("option", {
                            value: "",
                            hidden: ""
                          }),
                          createVNode("option", { value: "active" }, " \u0641\u0639\u0627\u0644 "),
                          createVNode("option", { value: "inactive" }, " \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseSelect, {
                      rounded: "sm",
                      label: "\u0648\u0636\u0639\u06CC\u062A",
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
                        createVNode("option", { value: "active" }, " \u0641\u0639\u0627\u0644 "),
                        createVNode("option", { value: "inactive" }, " \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 ")
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "company.notes" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    label: "\u0646\u0648\u062A\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u062A",
                    placeholder: "\u0646\u0648\u0634\u062A\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627\u06CC\u06CC...",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      label: "\u0646\u0648\u062A\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u062A",
                      placeholder: "\u0646\u0648\u0634\u062A\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627\u06CC\u06CC...",
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
            _push2(ssrRenderComponent(unref(Field), { name: "company.privateRecord" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    label: "\u0627\u06CC\u0646 \u0631\u06A9\u0648\u0631\u062F \u062E\u0635\u0648\u0635\u06CC \u0627\u0633\u062A",
                    rounded: "sm",
                    color: "primary",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      label: "\u0627\u06CC\u0646 \u0631\u06A9\u0648\u0631\u062F \u062E\u0635\u0648\u0635\u06CC \u0627\u0633\u062A",
                      rounded: "sm",
                      color: "primary",
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
            _push2(`</div></div><div class="mt-5 flex flex-col-reverse text-right md:block md:space-x-3 md:space-x-reverse"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              type: "submit",
              color: "primary",
              class: "!h-12 w-full sm:w-40"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u062C\u0627\u062F \u0634\u0631\u06A9\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0634\u0631\u06A9\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                method: "POST",
                action: "",
                class: "divide-muted-200 dark:divide-muted-700 grid divide-x rtl:divide-x-reverse sm:grid-cols-2",
                onSubmit: withModifiers(unref(onSubmit), ["prevent"])
              }, [
                createVNode("div", {
                  rounded: "lg",
                  class: "bg-muted-50 dark:bg-muted-800/60 space-y-8 p-10"
                }, [
                  createVNode("div", { class: "mx-auto flex w-full max-w-[410px] flex-col" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "relative mb-5 flex flex-col items-center justify-center gap-4" }, [
                        createVNode(_component_BaseFullscreenDropfile, {
                          icon: "ph:image-duotone",
                          "filter-file-dropped": (file) => file.type.startsWith("image"),
                          onDrop: (value) => {
                            inputFile.value = value;
                          }
                        }, null, 8, ["filter-file-dropped", "onDrop"]),
                        createVNode(_component_BaseInputFileHeadless, {
                          modelValue: unref(inputFile),
                          "onUpdate:modelValue": ($event) => isRef(inputFile) ? inputFile.value = $event : null,
                          accept: "image/*"
                        }, {
                          default: withCtx(({ open, remove, preview, files }) => [
                            createVNode("div", { class: "relative size-20" }, [
                              files?.length && files.item(0) ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: preview(files.item(0)).value,
                                alt: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F",
                                class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                              }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: unref(currentAvatar),
                                alt: "\u067E\u06CC\u0634\u0646\u0645\u0627\u06CC\u0634 \u0622\u067E\u0644\u0648\u062F",
                                class: "bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center dark:invert"
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
                                  "data-nui-tooltip": "\u062A\u0635\u0648\u06CC\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
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
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(fileError) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-danger-600 inline-block font-sans text-[.8rem]"
                        }, toDisplayString(unref(fileError)), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                        createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                          createVNode(unref(Field), { name: "company.name" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "\u0634\u0631\u06A9\u062A \u0646\u0627\u0645",
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
                          createVNode(unref(Field), { name: "company.email" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                label: "\u0634\u0631\u06A9\u062A \u0627\u06CC\u0645\u06CC\u0644",
                                placeholder: "\u0645\u062B\u0627\u0644: hello@eltheme.ir",
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
                        createVNode("div", { class: "col-span-12" }, [
                          createVNode(unref(Field), { name: "company.website" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseInput, {
                                icon: "lucide:globe",
                                label: "\u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0634\u0631\u06A9\u062A",
                                placeholder: "\u0645\u062B\u0627\u0644: https://eltheme.ir",
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
                          createVNode(unref(Field), { name: "company.phone" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_AddonInputPhone, {
                                label: "\u0634\u0631\u06A9\u062A \u062A\u0644\u0641\u0646",
                                placeholder: "\u0645\u062B\u0627\u0644: +\u06F1 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5 \u06F5\u06F5\u06F5\u06F5",
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "mb-6 mt-4" }, [
                        createVNode("label", { class: "nui-label pb-2 text-[0.825rem]" }, "\u0646\u0648\u0639 \u0634\u0631\u06A9\u062A"),
                        createVNode("div", { class: "ptablet:grid-cols-2 ltablet:grid-cols-3 grid gap-4 lg:grid-cols-3" }, [
                          createVNode(unref(Field), { name: "company.type" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseRadioHeadless, {
                                value: "team_member_1",
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseCard, {
                                    rounded: "sm",
                                    class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                                    color: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                        createVNode(_component_Icon, {
                                          name: "ph:house-simple-duotone",
                                          class: "child mx-auto size-5"
                                        }),
                                        createVNode("div", null, [
                                          createVNode(_component_BaseHeading, {
                                            as: "h4",
                                            size: "sm",
                                            weight: "medium",
                                            lead: "none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u062A\u06A9 ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_BaseText, {
                                            size: "xs",
                                            class: "text-muted-400"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0634\u0631\u06A9\u062A \u06A9\u0648\u0686\u06A9 ")
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
                          createVNode(unref(Field), { name: "company.type" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseRadioHeadless, {
                                value: "team_member_2",
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseCard, {
                                    rounded: "sm",
                                    class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                                    color: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                        createVNode(_component_Icon, {
                                          name: "ph:storefront-duotone",
                                          class: "child mx-auto size-5"
                                        }),
                                        createVNode("div", null, [
                                          createVNode(_component_BaseHeading, {
                                            as: "h4",
                                            size: "sm",
                                            weight: "medium",
                                            lead: "none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062F\u0648\u062F ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_BaseText, {
                                            size: "xs",
                                            class: "text-muted-400"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0634\u0631\u06A9\u062A \u0645\u062A\u0648\u0633\u0637 ")
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
                          createVNode(unref(Field), { name: "company.type" }, {
                            default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                              createVNode(_component_BaseRadioHeadless, {
                                value: "team_member_3",
                                "model-value": field.value,
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                "onUpdate:modelValue": handleChange,
                                onBlur: handleBlur
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseCard, {
                                    rounded: "sm",
                                    class: "text-muted-400 nui-card-muted peer-checked:nui-card-primary peer-checked:[&_.child]:!text-primary-500 relative border px-2 py-4",
                                    color: "none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex w-full flex-col items-center gap-2 text-center" }, [
                                        createVNode(_component_Icon, {
                                          name: "ph:buildings-duotone",
                                          class: "child mx-auto size-5"
                                        }),
                                        createVNode("div", null, [
                                          createVNode(_component_BaseHeading, {
                                            as: "h4",
                                            size: "sm",
                                            weight: "medium",
                                            lead: "none"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0634\u0631\u06A9\u062A ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_BaseText, {
                                            size: "xs",
                                            class: "text-muted-400"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0634\u0631\u06A9\u062A \u0628\u0632\u0631\u06AF\u200C\u062A\u0631 ")
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
                ]),
                createVNode("div", {
                  rounded: "lg",
                  class: "w-full space-y-8 p-10"
                }, [
                  createVNode("div", { class: "mx-auto w-full max-w-[410px] sm:pt-28" }, [
                    createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                      createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                        createVNode(unref(Field), { name: "company.income" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              rounded: "sm",
                              label: "\u062F\u0631\u0622\u0645\u062F",
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
                                createVNode("option", { value: "\u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646" }, " \u06F0 - \u06F2\u06F5\u06F0 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646 "),
                                createVNode("option", { value: "\u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631" }, " \u06F2\u06F5\u06F0 \u062A\u0627 \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 "),
                                createVNode("option", { value: "\u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646" }, " \u06F5\u06F0\u06F0 \u0647\u0632\u0627\u0631 - \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 "),
                                createVNode("option", { value: "\u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646" }, " \u06F1 \u0645\u06CC\u0644\u06CC\u0648\u0646 - \u06F5 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 "),
                                createVNode("option", { value: "\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "ltablet:col-span-6 col-span-12 lg:col-span-6" }, [
                        createVNode(unref(Field), { name: "company.employees" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              rounded: "sm",
                              label: "\u06A9\u0627\u0631\u0645\u0646\u062F\u0627\u0646",
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
                                createVNode("option", { value: "\u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F1-\u06F1\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                                createVNode("option", { value: "\u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F1\u06F0-\u06F5\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                                createVNode("option", { value: "\u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u06F5\u06F0-\u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F "),
                                createVNode("option", { value: "\u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F" }, " \u0628\u06CC\u0634 \u0627\u0632 \u06F1\u06F0\u06F0 \u06A9\u0627\u0631\u0645\u0646\u062F ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "ltablet:col-span-8 col-span-12 lg:col-span-8" }, [
                        createVNode(unref(Field), { name: "company.manager" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseListbox, {
                              label: "\u0645\u062F\u06CC\u0631",
                              items: people,
                              properties: {
                                value: "id",
                                label: "name",
                                sublabel: "text",
                                media: "media"
                              },
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
                      createVNode("div", { class: "ltablet:col-span-4 col-span-12 lg:col-span-4" }, [
                        createVNode(unref(Field), { name: "company.status" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseSelect, {
                              rounded: "sm",
                              label: "\u0648\u0636\u0639\u06CC\u062A",
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
                                createVNode("option", { value: "active" }, " \u0641\u0639\u0627\u0644 "),
                                createVNode("option", { value: "inactive" }, " \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "col-span-12" }, [
                        createVNode(unref(Field), { name: "company.notes" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseTextarea, {
                              label: "\u0646\u0648\u062A\u200C\u0647\u0627\u06CC \u0634\u0631\u06A9\u062A",
                              placeholder: "\u0646\u0648\u0634\u062A\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627\u06CC\u06CC...",
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
                        createVNode(unref(Field), { name: "company.privateRecord" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              label: "\u0627\u06CC\u0646 \u0631\u06A9\u0648\u0631\u062F \u062E\u0635\u0648\u0635\u06CC \u0627\u0633\u062A",
                              rounded: "sm",
                              color: "primary",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "mt-5 flex flex-col-reverse text-right md:block md:space-x-3 md:space-x-reverse" }, [
                      createVNode(_component_BaseButton, {
                        type: "submit",
                        color: "primary",
                        class: "!h-12 w-full sm:w-40"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0634\u0631\u06A9\u062A ")
                        ]),
                        _: 1
                      })
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
