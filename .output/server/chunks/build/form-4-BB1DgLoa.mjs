import { h as _sfc_main$u, a as __nuxt_component_2, b as _sfc_main$w, f as _sfc_main$C, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseTextarea-BGdIJfqV.mjs';
import { _ as _sfc_main$2 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toHandlers, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { DatePicker } from 'v-calendars';
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
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-4",
  __ssrInlineRender: true,
  setup(__props) {
    const VALIDATION_TEXT = {
      TITLE_REQUIRED: "\u0639\u0646\u0648\u0627\u0646 \u0631\u0648\u06CC\u062F\u0627\u062F \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A",
      SHORTDESC_REQUIRED: "\u062A\u0648\u0636\u06CC\u062D \u06A9\u0648\u062A\u0627\u0647 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      LONGDESC_REQUIRED: "\u062A\u0648\u0636\u06CC\u062D \u0628\u0644\u0646\u062F \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",
      OPTION_REQUIRED: "\u0644\u0637\u0641\u0627\u064B \u06CC\u06A9 \u06AF\u0632\u06CC\u0646\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
    };
    const zodSchema = z.object({
      event: z.object({
        title: z.string().min(5, VALIDATION_TEXT.TITLE_REQUIRED),
        shortDesc: z.string().min(10, VALIDATION_TEXT.SHORTDESC_REQUIRED),
        longDesc: z.string().min(40, VALIDATION_TEXT.LONGDESC_REQUIRED),
        participants: z.array(z.string()).optional(),
        color: z.string(),
        category: z.string(),
        dates: z.object({
          start: z.date().nullable(),
          end: z.date().nullable()
        })
      })
    }).superRefine((data, ctx) => {
      if (!data.event.participants) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: VALIDATION_TEXT.OPTION_REQUIRED,
          path: ["event.participants"]
        });
      }
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      event: {
        title: "",
        shortDesc: "",
        longDesc: "",
        dates: {
          start: /* @__PURE__ */ new Date(),
          end: /* @__PURE__ */ new Date()
        },
        participants: [],
        color: "",
        category: ""
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
    onBeforeRouteLeave(() => {
      if (meta.value.dirty) {
        return confirm("\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0630\u062E\u06CC\u0631\u0647 \u0646\u0634\u062F\u0647 \u062F\u0627\u0631\u06CC\u062F. \u0622\u06CC\u0627 \u0645\u0637\u0645\u0626\u0646\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u062A\u0631\u06A9 \u06A9\u0646\u06CC\u062F\u061F");
      }
    });
    const toaster = useToaster();
    handleSubmit(
      async (values2) => {
        success.value = false;
        console.log("event-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.event.title === "\u0631\u0648\u06CC\u062F\u0627\u062F \u062F\u0645\u0648") {
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
            setFieldError("event.title", "\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A");
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
        console.log("event-create-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    const masks = ref({
      input: "YYYY-MM-DD"
    });
    const people = ref([
      "\u062C\u0627\u0646 \u0628\u0631\u0627\u0648\u0646",
      "\u0622\u0646\u06CC\u062A\u0627 \u0627\u0633\u0645\u06CC\u062A",
      "\u0628\u0644\u0646 \u0631\u0648\u062F\u0631\u06CC\u06AF\u0632",
      "\u0633\u0645\u06CC \u0644\u06CC",
      "\u0647\u0631\u0645\u0627\u0646 \u0627\u0634\u0645\u06CC\u062A",
      "\u06A9\u0644\u0648\u06CC\u06CC \u0648\u0627\u0631\u0644\u06CC"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseTextarea = _sfc_main$1;
      const _component_BaseAutocomplete = _sfc_main$2;
      const _component_BaseButton = _sfc_main$e;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "relative py-3 sm:mx-auto sm:max-w-xl"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, {
        rounded: "lg",
        class: "relative px-4 py-10 sm:p-10 md:mx-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto max-w-md"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><div class="bg-primary-500/20 text-primary-500 flex size-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:calendar-blank-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block text-xl font-semibold text-gray-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "lg",
              weight: "medium",
              class: "text-muted-800 dark:text-muted-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u062C\u0627\u062F \u0631\u0648\u06CC\u062F\u0627\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0631\u0648\u06CC\u062F\u0627\u062F ")
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
                  _push3(` \u0627\u06CC\u062C\u0627\u062F \u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F \u0622\u06CC\u0646\u062F\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F \u0622\u06CC\u0646\u062F\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="divide-y divide-gray-200 dark:divide-gray-700"${_scopeId}><div class="grid grid-cols-12 gap-4 py-8"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.title" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0639\u0646\u0648\u0627\u0646 \u0631\u0648\u06CC\u062F\u0627\u062F",
                    rounded: "lg",
                    icon: "ph:ticket-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0647\u0645\u0627\u0646\u06CC \u0628\u0639\u062F\u06CC \u062A\u06CC\u0645\u200C\u0633\u0627\u0632\u06CC",
                    classes: {
                      input: "!h-11 !ps-11",
                      icon: "!h-11 !w-11"
                    },
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
                      label: "\u0639\u0646\u0648\u0627\u0646 \u0631\u0648\u06CC\u062F\u0627\u062F",
                      rounded: "lg",
                      icon: "ph:ticket-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0647\u0645\u0627\u0646\u06CC \u0628\u0639\u062F\u06CC \u062A\u06CC\u0645\u200C\u0633\u0627\u0632\u06CC",
                      classes: {
                        input: "!h-11 !ps-11",
                        icon: "!h-11 !w-11"
                      },
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
            _push2(ssrRenderComponent(unref(Field), { name: "event.shortDesc" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0648\u062A\u0627\u0647",
                    rounded: "lg",
                    icon: "ph:circles-four-duotone",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0627 \u0645\u0644\u0627\u0642\u0627\u062A \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u062A\u0627 \u0628\u0627 \u0647\u0645 \u062A\u0641\u0631\u06CC\u062D \u06A9\u0646\u06CC\u0645",
                    classes: {
                      input: "!h-11 !ps-11",
                      icon: "!h-11 !w-11"
                    },
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
                      label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0648\u062A\u0627\u0647",
                      rounded: "lg",
                      icon: "ph:circles-four-duotone",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0627 \u0645\u0644\u0627\u0642\u0627\u062A \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u062A\u0627 \u0628\u0627 \u0647\u0645 \u062A\u0641\u0631\u06CC\u062D \u06A9\u0646\u06CC\u0645",
                      classes: {
                        input: "!h-11 !ps-11",
                        icon: "!h-11 !w-11"
                      },
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
            _push2(`</div><div class="relative z-20 col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.dates" }, {
              default: withCtx(({
                field,
                errorMessage,
                handleChange
              }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DatePicker), {
                    "model-value": field.value,
                    "model-modifiers": { range: true },
                    masks: unref(masks),
                    "min-date": /* @__PURE__ */ new Date(),
                    locale: "fa",
                    "hide-time-header": "",
                    "trim-weeks": "",
                    "onUpdate:modelValue": handleChange
                  }, {
                    default: withCtx(({ inputValue, inputEvents }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId3}><div class="relative grow"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          rounded: "lg",
                          label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.start,
                          classes: {
                            input: "!h-11 !ps-11",
                            icon: "!h-11 !w-11"
                          },
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text"
                        }, toHandlers(inputEvents.start)), null, _parent4, _scopeId3));
                        _push4(`</div><div class="relative grow"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          rounded: "lg",
                          label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.end,
                          classes: {
                            input: "!h-11 !ps-11",
                            icon: "!h-11 !w-11"
                          },
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text"
                        }, toHandlers(inputEvents.end)), null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                            createVNode("div", { class: "relative grow" }, [
                              createVNode(_component_BaseInput, mergeProps({
                                rounded: "lg",
                                label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                                icon: "ph:calendar-blank-duotone",
                                value: inputValue.start,
                                classes: {
                                  input: "!h-11 !ps-11",
                                  icon: "!h-11 !w-11"
                                },
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text"
                              }, toHandlers(inputEvents.start)), null, 16, ["value", "error", "disabled"])
                            ]),
                            createVNode("div", { class: "relative grow" }, [
                              createVNode(_component_BaseInput, mergeProps({
                                rounded: "lg",
                                label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                                icon: "ph:calendar-blank-duotone",
                                value: inputValue.end,
                                classes: {
                                  input: "!h-11 !ps-11",
                                  icon: "!h-11 !w-11"
                                },
                                error: errorMessage,
                                disabled: unref(isSubmitting),
                                type: "text"
                              }, toHandlers(inputEvents.end)), null, 16, ["value", "error", "disabled"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DatePicker), {
                      "model-value": field.value,
                      "model-modifiers": { range: true },
                      masks: unref(masks),
                      "min-date": /* @__PURE__ */ new Date(),
                      locale: "fa",
                      "hide-time-header": "",
                      "trim-weeks": "",
                      "onUpdate:modelValue": handleChange
                    }, {
                      default: withCtx(({ inputValue, inputEvents }) => [
                        createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(_component_BaseInput, mergeProps({
                              rounded: "lg",
                              label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.start,
                              classes: {
                                input: "!h-11 !ps-11",
                                icon: "!h-11 !w-11"
                              },
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text"
                            }, toHandlers(inputEvents.start)), null, 16, ["value", "error", "disabled"])
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(_component_BaseInput, mergeProps({
                              rounded: "lg",
                              label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.end,
                              classes: {
                                input: "!h-11 !ps-11",
                                icon: "!h-11 !w-11"
                              },
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text"
                            }, toHandlers(inputEvents.end)), null, 16, ["value", "error", "disabled"])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["model-value", "masks", "min-date", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.longDesc" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0627\u0645\u0644",
                    rounded: "lg",
                    placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0632\u0626\u06CC\u0627\u062A \u0627\u0636\u0627\u0641\u06CC \u062F\u0631\u0628\u0627\u0631\u0647 \u0631\u0648\u06CC\u062F\u0627\u062F...",
                    rows: "5",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0627\u0645\u0644",
                      rounded: "lg",
                      placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0632\u0626\u06CC\u0627\u062A \u0627\u0636\u0627\u0641\u06CC \u062F\u0631\u0628\u0627\u0631\u0647 \u0631\u0648\u06CC\u062F\u0627\u062F...",
                      rows: "5",
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
            _push2(ssrRenderComponent(unref(Field), { name: "event.participants" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseAutocomplete, {
                    items: unref(people),
                    rounded: "lg",
                    icon: "ph:users-duotone",
                    placeholder: "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646...",
                    label: "\u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646",
                    multiple: "",
                    "allow-create": "",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseAutocomplete, {
                      items: unref(people),
                      rounded: "lg",
                      icon: "ph:users-duotone",
                      placeholder: "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646...",
                      label: "\u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646",
                      multiple: "",
                      "allow-create": "",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["items", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.color" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "color",
                    list: "eventColors",
                    label: "\u0631\u0646\u06AF \u0631\u0648\u06CC\u062F\u0627\u062F",
                    rounded: "lg",
                    icon: "ph:drop-half-duotone",
                    placeholder: "\u06CC\u06A9 \u0631\u0646\u06AF \u0631\u0648\u06CC\u062F\u0627\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F...",
                    classes: {
                      input: "!h-11 !ps-11 appearance-none",
                      icon: "!h-11 !w-11"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                  _push3(`<datalist id="eventColors"${_scopeId2}><option value="#84cc16"${_scopeId2}></option><option value="#22c55e"${_scopeId2}></option><option value="#0ea5e9"${_scopeId2}></option><option value="#6366f1"${_scopeId2}></option><option value="#8b5cf6"${_scopeId2}></option><option value="#d946ef"${_scopeId2}></option><option value="#f43f5e"${_scopeId2}></option><option value="#facc15"${_scopeId2}></option><option value="#fb923c"${_scopeId2}></option><option value="#9ca3af"${_scopeId2}></option></datalist>`);
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      type: "color",
                      list: "eventColors",
                      label: "\u0631\u0646\u06AF \u0631\u0648\u06CC\u062F\u0627\u062F",
                      rounded: "lg",
                      icon: "ph:drop-half-duotone",
                      placeholder: "\u06CC\u06A9 \u0631\u0646\u06AF \u0631\u0648\u06CC\u062F\u0627\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F...",
                      classes: {
                        input: "!h-11 !ps-11 appearance-none",
                        icon: "!h-11 !w-11"
                      },
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                    createVNode("datalist", { id: "eventColors" }, [
                      createVNode("option", { value: "#84cc16" }),
                      createVNode("option", { value: "#22c55e" }),
                      createVNode("option", { value: "#0ea5e9" }),
                      createVNode("option", { value: "#6366f1" }),
                      createVNode("option", { value: "#8b5cf6" }),
                      createVNode("option", { value: "#d946ef" }),
                      createVNode("option", { value: "#f43f5e" }),
                      createVNode("option", { value: "#facc15" }),
                      createVNode("option", { value: "#fb923c" }),
                      createVNode("option", { value: "#9ca3af" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "event.category" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    list: "eventCategories",
                    label: "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC \u0631\u0648\u06CC\u062F\u0627\u062F",
                    rounded: "lg",
                    icon: "ph:ticket-duotone",
                    placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC...",
                    classes: {
                      input: "!h-11 !ps-11",
                      icon: "!h-11 !w-11"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                  _push3(`<datalist id="eventCategories"${_scopeId2}><option value="Chrome"${_scopeId2}></option><option value="Firefox"${_scopeId2}></option><option value="Opera"${_scopeId2}></option><option value="Safari"${_scopeId2}></option><option value="\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0627\u062C"${_scopeId2}></option></datalist>`);
                } else {
                  return [
                    createVNode(_component_BaseInput, {
                      list: "eventCategories",
                      label: "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC \u0631\u0648\u06CC\u062F\u0627\u062F",
                      rounded: "lg",
                      icon: "ph:ticket-duotone",
                      placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC...",
                      classes: {
                        input: "!h-11 !ps-11",
                        icon: "!h-11 !w-11"
                      },
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                    createVNode("datalist", { id: "eventCategories" }, [
                      createVNode("option", { value: "Chrome" }),
                      createVNode("option", { value: "Firefox" }),
                      createVNode("option", { value: "Opera" }),
                      createVNode("option", { value: "Safari" }),
                      createVNode("option", { value: "\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0627\u062C" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center gap-4 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "lg",
              class: "!h-12 w-full"
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
              rounded: "lg",
              color: "primary",
              class: "!h-12 w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0646 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0646 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto max-w-md" }, [
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode("div", { class: "bg-primary-500/20 text-primary-500 flex size-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl" }, [
                    createVNode(_component_Icon, {
                      name: "ph:calendar-blank-duotone",
                      class: "size-5"
                    })
                  ]),
                  createVNode("div", { class: "block text-xl font-semibold text-gray-700" }, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "lg",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0631\u0648\u06CC\u062F\u0627\u062F ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F \u0622\u06CC\u0646\u062F\u0647 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                  createVNode("div", { class: "grid grid-cols-12 gap-4 py-8" }, [
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(unref(Field), { name: "event.title" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            label: "\u0639\u0646\u0648\u0627\u0646 \u0631\u0648\u06CC\u062F\u0627\u062F",
                            rounded: "lg",
                            icon: "ph:ticket-duotone",
                            placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0647\u0645\u0627\u0646\u06CC \u0628\u0639\u062F\u06CC \u062A\u06CC\u0645\u200C\u0633\u0627\u0632\u06CC",
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
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
                      createVNode(unref(Field), { name: "event.shortDesc" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0648\u062A\u0627\u0647",
                            rounded: "lg",
                            icon: "ph:circles-four-duotone",
                            placeholder: "\u0645\u062B\u0627\u0644: \u0645\u0627 \u0645\u0644\u0627\u0642\u0627\u062A \u062E\u0648\u0627\u0647\u06CC\u0645 \u06A9\u0631\u062F \u062A\u0627 \u0628\u0627 \u0647\u0645 \u062A\u0641\u0631\u06CC\u062D \u06A9\u0646\u06CC\u0645",
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
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
                    createVNode("div", { class: "relative z-20 col-span-12" }, [
                      createVNode(unref(Field), { name: "event.dates" }, {
                        default: withCtx(({
                          field,
                          errorMessage,
                          handleChange
                        }) => [
                          createVNode(unref(DatePicker), {
                            "model-value": field.value,
                            "model-modifiers": { range: true },
                            masks: unref(masks),
                            "min-date": /* @__PURE__ */ new Date(),
                            locale: "fa",
                            "hide-time-header": "",
                            "trim-weeks": "",
                            "onUpdate:modelValue": handleChange
                          }, {
                            default: withCtx(({ inputValue, inputEvents }) => [
                              createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                                createVNode("div", { class: "relative grow" }, [
                                  createVNode(_component_BaseInput, mergeProps({
                                    rounded: "lg",
                                    label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                                    icon: "ph:calendar-blank-duotone",
                                    value: inputValue.start,
                                    classes: {
                                      input: "!h-11 !ps-11",
                                      icon: "!h-11 !w-11"
                                    },
                                    error: errorMessage,
                                    disabled: unref(isSubmitting),
                                    type: "text"
                                  }, toHandlers(inputEvents.start)), null, 16, ["value", "error", "disabled"])
                                ]),
                                createVNode("div", { class: "relative grow" }, [
                                  createVNode(_component_BaseInput, mergeProps({
                                    rounded: "lg",
                                    label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                                    icon: "ph:calendar-blank-duotone",
                                    value: inputValue.end,
                                    classes: {
                                      input: "!h-11 !ps-11",
                                      icon: "!h-11 !w-11"
                                    },
                                    error: errorMessage,
                                    disabled: unref(isSubmitting),
                                    type: "text"
                                  }, toHandlers(inputEvents.end)), null, 16, ["value", "error", "disabled"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["model-value", "masks", "min-date", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12" }, [
                      createVNode(unref(Field), { name: "event.longDesc" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseTextarea, {
                            label: "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u06A9\u0627\u0645\u0644",
                            rounded: "lg",
                            placeholder: "\u0645\u062B\u0627\u0644: \u062C\u0632\u0626\u06CC\u0627\u062A \u0627\u0636\u0627\u0641\u06CC \u062F\u0631\u0628\u0627\u0631\u0647 \u0631\u0648\u06CC\u062F\u0627\u062F...",
                            rows: "5",
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
                      createVNode(unref(Field), { name: "event.participants" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseAutocomplete, {
                            items: unref(people),
                            rounded: "lg",
                            icon: "ph:users-duotone",
                            placeholder: "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646...",
                            label: "\u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646",
                            multiple: "",
                            "allow-create": "",
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["items", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                      createVNode(unref(Field), { name: "event.color" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "color",
                            list: "eventColors",
                            label: "\u0631\u0646\u06AF \u0631\u0648\u06CC\u062F\u0627\u062F",
                            rounded: "lg",
                            icon: "ph:drop-half-duotone",
                            placeholder: "\u06CC\u06A9 \u0631\u0646\u06AF \u0631\u0648\u06CC\u062F\u0627\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F...",
                            classes: {
                              input: "!h-11 !ps-11 appearance-none",
                              icon: "!h-11 !w-11"
                            },
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                          createVNode("datalist", { id: "eventColors" }, [
                            createVNode("option", { value: "#84cc16" }),
                            createVNode("option", { value: "#22c55e" }),
                            createVNode("option", { value: "#0ea5e9" }),
                            createVNode("option", { value: "#6366f1" }),
                            createVNode("option", { value: "#8b5cf6" }),
                            createVNode("option", { value: "#d946ef" }),
                            createVNode("option", { value: "#f43f5e" }),
                            createVNode("option", { value: "#facc15" }),
                            createVNode("option", { value: "#fb923c" }),
                            createVNode("option", { value: "#9ca3af" })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                      createVNode(unref(Field), { name: "event.category" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            list: "eventCategories",
                            label: "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC \u0631\u0648\u06CC\u062F\u0627\u062F",
                            rounded: "lg",
                            icon: "ph:ticket-duotone",
                            placeholder: "\u0627\u0646\u062A\u062E\u0627\u0628 \u06CC\u06A9 \u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC...",
                            classes: {
                              input: "!h-11 !ps-11",
                              icon: "!h-11 !w-11"
                            },
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"]),
                          createVNode("datalist", { id: "eventCategories" }, [
                            createVNode("option", { value: "Chrome" }),
                            createVNode("option", { value: "Firefox" }),
                            createVNode("option", { value: "Opera" }),
                            createVNode("option", { value: "Safari" }),
                            createVNode("option", { value: "\u0645\u0627\u06CC\u06A9\u0631\u0648\u0633\u0627\u0641\u062A \u0627\u062C" })
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-4 pt-4" }, [
                    createVNode(_component_BaseButton, {
                      rounded: "lg",
                      class: "!h-12 w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0644\u063A\u0648 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseButton, {
                      type: "submit",
                      rounded: "lg",
                      color: "primary",
                      class: "!h-12 w-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0646 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
