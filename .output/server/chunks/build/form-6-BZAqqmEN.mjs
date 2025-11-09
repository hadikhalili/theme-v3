import { h as _sfc_main$u, b as _sfc_main$w, f as _sfc_main$C, a as __nuxt_component_2, d as _sfc_main$D } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$2 } from './BaseRadio-DxLVFvJR.mjs';
import { _ as _sfc_main$3 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as __nuxt_component_0 } from './BaseListbox-CK7ULECq.mjs';
import { _ as _sfc_main$4 } from './BaseTextarea-BGdIJfqV.mjs';
import { _ as _sfc_main$5 } from './BaseInputFileHeadless-D97W07CE.mjs';
import { _ as _sfc_main$6 } from './BaseProgress-Bi06w8MA.mjs';
import { _ as _sfc_main$7 } from './BaseRadioHeadless-BL03emlX.mjs';
import { _ as _sfc_main$8 } from './BaseCheckbox-CfxLaouc.mjs';
import { _ as _sfc_main$9 } from './TairoFormSave-DUdgzCNp.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toHandlers, withModifiers, openBlock, createBlock, withKeys, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { f as formatFileSize } from './format-files-DjupgqMN.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-C8uLH2hK.mjs';
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
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';
import './file-preview-DSqAOr0Y.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form-6",
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
    const zodSchema = z.object({
      meeting: z.object({
        title: z.string().min(5, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
        startDate: z.date().nullable(),
        endDate: z.date().nullable(),
        startTime: z.date().nullable(),
        endTime: z.date().nullable(),
        frequency: z.string(),
        participants: z.array(
          z.object({
            id: z.string(),
            name: z.string(),
            avatar: z.string().optional()
          })
        ),
        location: z.string(),
        url: z.string().optional(),
        calendar: z.string(),
        description: z.string().min(40, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
        colorCode: z.string(),
        notifications: z.object({
          general: z.boolean(),
          team: z.boolean(),
          reminders: z.boolean(),
          modifications: z.boolean()
        })
      })
    });
    const validationSchema = toTypedSchema(zodSchema);
    const initialValues = {
      meeting: {
        title: "",
        startDate: null,
        endDate: null,
        startTime: null,
        endTime: null,
        frequency: "day",
        participants: [],
        location: "",
        url: "",
        calendar: "",
        description: "",
        colorCode: "",
        notifications: {
          general: false,
          team: false,
          reminders: false,
          modifications: false
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
        console.log("meeting-create-success", values2);
        try {
          await new Promise((resolve, reject) => {
            if (values2.meeting.title === "\u062C\u0644\u0633\u0647 \u0622\u0632\u0645\u0627\u06CC\u0634\u06CC") {
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
            setFieldError("meeting.title", "\u0627\u06CC\u0646 \u0646\u0627\u0645 \u0645\u062C\u0627\u0632 \u0646\u06CC\u0633\u062A");
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
        console.log("meeting-create-error", error);
        (void 0).documentElement.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
    const calendars = [
      {
        id: "1",
        name: "\u062A\u0642\u0648\u06CC\u0645 \u0645\u0646",
        text: "\u062A\u0642\u0648\u06CC\u0645 \u0634\u062E\u0635\u06CC \u0634\u0645\u0627",
        icon: "ph:user-duotone"
      },
      {
        id: "2",
        name: "\u062A\u0642\u0648\u06CC\u0645 \u062A\u06CC\u0645",
        text: "\u062A\u0642\u0648\u06CC\u0645 \u062A\u06CC\u0645 \u0634\u0645\u0627",
        icon: "ph:users-duotone"
      },
      {
        id: "3",
        name: "\u062A\u0642\u0648\u06CC\u0645 \u0634\u0631\u06A9\u062A",
        text: "\u062A\u0642\u0648\u06CC\u0645 \u0634\u0631\u06A9\u062A \u0634\u0645\u0627",
        icon: "ph:buildings-duotone"
      }
    ];
    const dates = ref({
      start: /* @__PURE__ */ new Date(),
      end: /* @__PURE__ */ new Date()
    });
    const masks = ref({
      input: "YYYY-MM-DD"
    });
    ref("day");
    ref({
      id: 1,
      name: "\u062A\u0642\u0648\u06CC\u0645 \u0645\u0646",
      text: "\u062A\u0642\u0648\u06CC\u0645 \u0634\u062E\u0635\u06CC \u0634\u0645\u0627",
      icon: "ph:user-duotone"
    });
    const uploadedFiles = ref(null);
    ref("color_code_1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseButtonAction = _sfc_main$1;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseRadio = _sfc_main$2;
      const _component_BaseAvatar = _sfc_main$3;
      const _component_BaseListbox = __nuxt_component_0;
      const _component_BaseTextarea = _sfc_main$4;
      const _component_BaseInputFileHeadless = _sfc_main$5;
      const _component_BaseProgress = _sfc_main$6;
      const _component_BaseRadioHeadless = _sfc_main$7;
      const _component_BaseCheckbox = _sfc_main$8;
      const _component_TairoFormSave = _sfc_main$9;
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "",
        method: "POST",
        class: "mx-auto w-full max-w-3xl"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F ")
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
                  _push3(` \u0632\u0645\u0627\u0646\u200C\u0628\u0646\u062F\u06CC \u06CC\u06A9 \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0632\u0645\u0627\u0646\u200C\u0628\u0646\u062F\u06CC \u06CC\u06A9 \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="ms-auto flex items-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              onClick: ($event) => _ctx.$router.back()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-left",
                    class: "size-3 me-2 rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0644\u063A\u0648</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:arrow-left",
                      class: "size-3 me-2 rtl:rotate-180"
                    }),
                    createVNode("span", null, "\u0644\u063A\u0648")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButtonAction, {
              type: "submit",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:check",
                    class: "size-3 me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0630\u062E\u06CC\u0631\u0647</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:check",
                      class: "size-3 me-2"
                    }),
                    createVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="px-10 py-5"${_scopeId}><div class="grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.title" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    label: "\u0627\u06CC\u0646 \u062C\u0644\u0633\u0647 \u062F\u0631 \u0645\u0648\u0631\u062F \u0686\u06CC\u0633\u062A\u061F",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC",
                    icon: "lucide:slack",
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
                      label: "\u0627\u06CC\u0646 \u062C\u0644\u0633\u0647 \u062F\u0631 \u0645\u0648\u0631\u062F \u0686\u06CC\u0633\u062A\u061F",
                      placeholder: "\u0645\u062B\u0627\u0644: \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC",
                      icon: "lucide:slack",
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
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: unref(dates),
              "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
              modelModifiers: { range: true },
              masks: unref(masks),
              "min-date": /* @__PURE__ */ new Date(),
              locale: "fa",
              mode: "date",
              "hide-time-header": "",
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId2}><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.startDate" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.start,
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text"
                        }, toHandlers(inputEvents.start), {
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.start,
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text"
                          }, toHandlers(inputEvents.start), {
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.endDate" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.end,
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text"
                        }, toHandlers(inputEvents.end), {
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.end,
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text"
                          }, toHandlers(inputEvents.end), {
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.startDate" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.start,
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text"
                            }, toHandlers(inputEvents.start), {
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.endDate" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.end,
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text"
                            }, toHandlers(inputEvents.end), {
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 sm:col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DatePicker), {
              modelValue: unref(dates),
              "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
              modelModifiers: { range: true },
              masks: unref(masks),
              "min-date": /* @__PURE__ */ new Date(),
              locale: "fa",
              mode: "time",
              "hide-time-header": "",
              "trim-weeks": ""
            }, {
              default: withCtx(({ inputValue, inputEvents }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full flex-col gap-4 sm:flex-row"${_scopeId2}><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.startTime" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "\u0633\u0627\u0639\u062A \u0634\u0631\u0648\u0639",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.start,
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text"
                        }, toHandlers(inputEvents.start), {
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "\u0633\u0627\u0639\u062A \u0634\u0631\u0648\u0639",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.start,
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text"
                          }, toHandlers(inputEvents.start), {
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative grow"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), { name: "meeting.endTime" }, {
                    default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BaseInput, mergeProps({
                          label: "\u0633\u0627\u0639\u062A \u067E\u0627\u06CC\u0627\u0646",
                          icon: "ph:calendar-blank-duotone",
                          value: inputValue.end,
                          "model-value": field.value,
                          error: errorMessage,
                          disabled: unref(isSubmitting),
                          type: "text"
                        }, toHandlers(inputEvents.end), {
                          "onUpdate:modelValue": handleChange,
                          onBlur: handleBlur
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BaseInput, mergeProps({
                            label: "\u0633\u0627\u0639\u062A \u067E\u0627\u06CC\u0627\u0646",
                            icon: "ph:calendar-blank-duotone",
                            value: inputValue.end,
                            "model-value": field.value,
                            error: errorMessage,
                            disabled: unref(isSubmitting),
                            type: "text"
                          }, toHandlers(inputEvents.end), {
                            "onUpdate:modelValue": handleChange,
                            onBlur: handleBlur
                          }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.startTime" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "\u0633\u0627\u0639\u062A \u0634\u0631\u0648\u0639",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.start,
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text"
                            }, toHandlers(inputEvents.start), {
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("div", { class: "relative grow" }, [
                        createVNode(unref(Field), { name: "meeting.endTime" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseInput, mergeProps({
                              label: "\u0633\u0627\u0639\u062A \u067E\u0627\u06CC\u0627\u0646",
                              icon: "ph:calendar-blank-duotone",
                              value: inputValue.end,
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              type: "text"
                            }, toHandlers(inputEvents.end), {
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12"${_scopeId}><div class="my-4"${_scopeId}><label class="nui-label pb-4 text-[0.825rem]"${_scopeId}>\u0641\u0631\u0627\u0648\u0627\u0646\u06CC \u062C\u0644\u0633\u0627\u062A</label><div class="flex items-center gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.frequency" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    id: "frequency-1",
                    name: "unique_frequency",
                    label: "\u062A\u0645\u0627\u0645 \u0631\u0648\u0632",
                    value: "day",
                    color: "primary",
                    classes: {
                      label: "relative top-0.5 text-xs"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadio, {
                      id: "frequency-1",
                      name: "unique_frequency",
                      label: "\u062A\u0645\u0627\u0645 \u0631\u0648\u0632",
                      value: "day",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.frequency" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadio, {
                    id: "frequency-2",
                    name: "weekly_frequency",
                    label: "\u0647\u0631 \u0647\u0641\u062A\u0647 \u062A\u06A9\u0631\u0627\u0631 \u06A9\u0646",
                    value: "week",
                    color: "primary",
                    classes: {
                      label: "relative top-0.5 text-xs"
                    },
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadio, {
                      id: "frequency-2",
                      name: "weekly_frequency",
                      label: "\u0647\u0631 \u0647\u0641\u062A\u0647 \u062A\u06A9\u0631\u0627\u0631 \u06A9\u0646",
                      value: "week",
                      color: "primary",
                      classes: {
                        label: "relative top-0.5 text-xs"
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
            _push2(`</div></div></div></div></div><div class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u062C\u0644\u0633\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u062C\u0644\u0633\u0647 ")
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
                  _push3(` \u0628\u0631\u062E\u06CC \u062C\u0632\u0626\u06CC\u0627\u062A \u062C\u0644\u0633\u0647 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0628\u0631\u062E\u06CC \u062C\u0632\u0626\u06CC\u0627\u062A \u062C\u0644\u0633\u0647 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButtonAction, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "size-3 me-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span${_scopeId2}>\u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0641\u0631\u0627\u062F</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:plus",
                      class: "size-3 me-2"
                    }),
                    createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0641\u0631\u0627\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-10 grid grid-cols-12 gap-4"${_scopeId}><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/24.svg",
              "data-nui-tooltip": "\u0622\u0646\u0627 \u0628\u06CC."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/10.svg",
              "data-nui-tooltip": "\u06A9\u0646\u062F\u0631\u0627 \u0648."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/8.svg",
              "data-nui-tooltip": "\u062C\u0627\u0646 \u0627\u0686."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseAvatar, {
              src: "/img/avatars/25.svg",
              "data-nui-tooltip": "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644."
            }, null, _parent2, _scopeId));
            _push2(`<div class="ms-auto"${_scopeId}><button type="button" class="text-primary-500 font-sans text-sm underline underline-offset-4"${_scopeId}> \u0645\u062F\u06CC\u0631\u06CC\u062A </button></div></div></div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u0645\u06A9\u0627\u0646 \u062C\u0644\u0633\u0647</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.location" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "text",
                    placeholder: "\u0645\u062B\u0627\u0644: \u0627\u062A\u0627\u0642 \u062C\u0644\u0633\u0647 A",
                    icon: "lucide:map-pin",
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
                      placeholder: "\u0645\u062B\u0627\u0644: \u0627\u062A\u0627\u0642 \u062C\u0644\u0633\u0647 A",
                      icon: "lucide:map-pin",
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u0644\u06CC\u0646\u06A9 \u0645\u0644\u0627\u0642\u0627\u062A</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.url" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseInput, {
                    type: "text",
                    placeholder: "https://zoom.us/m/123456789",
                    icon: "lucide:video",
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
                      placeholder: "https://zoom.us/m/123456789",
                      icon: "lucide:video",
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u062A\u0642\u0648\u06CC\u0645</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.calendar" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseListbox, {
                    items: calendars,
                    properties: {
                      value: "id",
                      label: "name",
                      sublabel: "text",
                      icon: "icon"
                    },
                    "model-value": field.value,
                    "model-modifiers": { prop: true },
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseListbox, {
                      items: calendars,
                      properties: {
                        value: "id",
                        label: "name",
                        sublabel: "text",
                        icon: "icon"
                      },
                      "model-value": field.value,
                      "model-modifiers": { prop: true },
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-start pt-2 sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u062A\u0648\u0636\u06CC\u062D\u0627\u062A</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.description" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseTextarea, {
                    placeholder: "\u0628\u0631\u062E\u06CC \u062C\u0632\u0626\u06CC\u0627\u062A \u0627\u0636\u0627\u0641\u06CC \u062F\u0631\u0628\u0627\u0631\u0647 \u062C\u0644\u0633\u0647 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseTextarea, {
                      placeholder: "\u0628\u0631\u062E\u06CC \u062C\u0632\u0626\u06CC\u0627\u062A \u0627\u0636\u0627\u0641\u06CC \u062F\u0631\u0628\u0627\u0631\u0647 \u062C\u0644\u0633\u0647 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
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
            _push2(`</div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-start pt-4 sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u067E\u06CC\u0648\u0633\u062A\u200C\u0647\u0627</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInputFileHeadless, {
              modelValue: unref(uploadedFiles),
              "onUpdate:modelValue": ($event) => isRef(uploadedFiles) ? uploadedFiles.value = $event : null,
              multiple: ""
            }, {
              default: withCtx(({ open, remove, preview, drop, files }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 flex items-center gap-2"${_scopeId2}><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:plus",
                    class: "absolute start-1/2 top-1/2 size-4 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="sr-only"${_scopeId2}>\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627</span></button><button type="button" class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" tooltip="\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:arrow-up",
                    class: "size-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="sr-only"${_scopeId2}>\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F</span></button></div><div role="button" tabindex="-1" class=""${_scopeId2}>`);
                  if (!files?.length) {
                    _push3(`<div class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300" tabindex="0" role="button"${_scopeId2}><div class="p-5 text-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi-light:cloud-upload",
                      class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`<h4 class="text-muted-400 font-sans text-sm"${_scopeId2}> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F </h4><div${_scopeId2}><span class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"${_scopeId2}> \u06CC\u0627 </span></div><label for="file" class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"${_scopeId2}> \u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 </label></div></div>`);
                  } else {
                    _push3(`<ul class="mt-6 space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(files, (file) => {
                      _push3(`<li${_scopeId2}><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><div class="shrink-0"${_scopeId2}>`);
                      if (file.type.startsWith("image")) {
                        _push3(`<img class="size-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", preview(file).value)} alt="Image preview"${_scopeId2}>`);
                      } else {
                        _push3(`<img class="size-14 rounded-xl object-cover object-center"${ssrRenderAttr("src", _imports_0)} alt="Image preview"${_scopeId2}>`);
                      }
                      _push3(`</div><div class="font-sans"${_scopeId2}><span class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"${_scopeId2}>${ssrInterpolate(file.name)}</span><span class="text-muted-400 block text-xs"${_scopeId2}>${ssrInterpolate(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size))}</span></div></div><div class="${ssrRenderClass(["opacity-100", "ms-auto w-32 px-4 transition-opacity duration-300"])}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseProgress, {
                        value: 0,
                        size: "xs",
                        color: "success"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div><div class="flex gap-2"${_scopeId2}><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60" disabled type="button" tooltip="\u0644\u063A\u0648"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:slash",
                        class: "size-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>\u0644\u063A\u0648</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:arrow-up",
                        class: "size-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC</span></button><button class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300" type="button" tooltip="\u062D\u0630\u0641"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:x",
                        class: "size-4"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="sr-only"${_scopeId2}>\u062D\u0630\u0641</span></button></div></div></li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                      createVNode("button", {
                        type: "button",
                        class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                        tooltip: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
                        onClick: open
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "absolute start-1/2 top-1/2 size-4 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                        }),
                        createVNode("span", { class: "sr-only" }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627")
                      ], 8, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                        tooltip: "\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:arrow-up",
                          class: "size-4"
                        }),
                        createVNode("span", { class: "sr-only" }, "\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F")
                      ])
                    ]),
                    createVNode("div", {
                      role: "button",
                      tabindex: "-1",
                      class: "",
                      onDragenter: withModifiers(() => {
                      }, ["stop", "prevent"]),
                      onDragover: withModifiers(() => {
                      }, ["stop", "prevent"]),
                      onDrop: drop
                    }, [
                      !files?.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",
                        tabindex: "0",
                        role: "button",
                        onClick: open,
                        onKeydown: withKeys(withModifiers(open, ["prevent"]), ["enter"])
                      }, [
                        createVNode("div", { class: "p-5 text-center" }, [
                          createVNode(_component_Icon, {
                            name: "mdi-light:cloud-upload",
                            class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
                          }),
                          createVNode("h4", { class: "text-muted-400 font-sans text-sm" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F "),
                          createVNode("div", null, [
                            createVNode("span", { class: "text-muted-400 font-sans text-[0.7rem] font-semibold uppercase" }, " \u06CC\u0627 ")
                          ]),
                          createVNode("label", {
                            for: "file",
                            class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                          }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 ")
                        ])
                      ], 40, ["onClick", "onKeydown"])) : (openBlock(), createBlock("ul", {
                        key: 1,
                        class: "mt-6 space-y-2"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(files, (file) => {
                          return openBlock(), createBlock("li", {
                            key: file.name
                          }, [
                            createVNode("div", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", { class: "shrink-0" }, [
                                  file.type.startsWith("image") ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    class: "size-14 rounded-xl object-cover object-center",
                                    src: preview(file).value,
                                    alt: "Image preview"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                    key: 1,
                                    class: "size-14 rounded-xl object-cover object-center",
                                    src: _imports_0,
                                    alt: "Image preview"
                                  }))
                                ]),
                                createVNode("div", { class: "font-sans" }, [
                                  createVNode("span", { class: "text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm" }, toDisplayString(file.name), 1),
                                  createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size)), 1)
                                ])
                              ]),
                              createVNode("div", {
                                class: ["ms-auto w-32 px-4 transition-opacity duration-300", "opacity-100"]
                              }, [
                                createVNode(_component_BaseProgress, {
                                  value: 0,
                                  size: "xs",
                                  color: "success"
                                })
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("button", {
                                  class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
                                  disabled: "",
                                  type: "button",
                                  tooltip: "\u0644\u063A\u0648"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:slash",
                                    class: "size-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "\u0644\u063A\u0648")
                                ]),
                                createVNode("button", {
                                  class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                  type: "button",
                                  tooltip: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:arrow-up",
                                    class: "size-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC")
                                ]),
                                createVNode("button", {
                                  class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                  type: "button",
                                  tooltip: "\u062D\u0630\u0641",
                                  onClick: withModifiers(($event) => remove(file), ["prevent"])
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:x",
                                    class: "size-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "\u062D\u0630\u0641")
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]))
                    ], 40, ["onDragenter", "onDragover", "onDrop"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"${_scopeId}><div class="grid grid-cols-12 gap-8 pb-6"${_scopeId}><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-center sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u06A9\u062F \u0631\u0646\u06AF</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}><div class="flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_1",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-primary-500 peer-checked:bg-primary-500 size-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-primary-500 peer-checked:bg-primary-500 size-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_1",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-primary-500 peer-checked:bg-primary-500 size-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_2",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-info-500 peer-checked:bg-info-500 size-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-info-500 peer-checked:bg-info-500 size-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_2",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-info-500 peer-checked:bg-info-500 size-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_3",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-success-500 peer-checked:bg-success-500 size-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-success-500 peer-checked:bg-success-500 size-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_3",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-success-500 peer-checked:bg-success-500 size-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_4",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="border-danger-500 peer-checked:bg-danger-500 size-4 rounded-full border-2 transition-colors duration-300"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-danger-500 peer-checked:bg-danger-500 size-4 rounded-full border-2 transition-colors duration-300" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_4",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-danger-500 peer-checked:bg-danger-500 size-4 rounded-full border-2 transition-colors duration-300" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_5",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="size-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "size-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_5",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "size-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.colorCode" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseRadioHeadless, {
                    name: "color_code",
                    value: "color_code_6",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="size-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "size-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseRadioHeadless, {
                      name: "color_code",
                      value: "color_code_6",
                      "model-value": field.value,
                      error: errorMessage,
                      disabled: unref(isSubmitting),
                      "onUpdate:modelValue": handleChange,
                      onBlur: handleBlur
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "size-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500" })
                      ]),
                      _: 2
                    }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-span-12 grid grid-cols-12"${_scopeId}><div class="col-span-12 flex flex-col justify-start pt-1 sm:col-span-3"${_scopeId}><label class="nui-label text-[0.825rem]"${_scopeId}>\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627</label></div><div class="col-span-12 sm:col-span-9"${_scopeId}><div class="flex flex-col gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.general" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0648\u0645\u06CC",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0648\u0645\u06CC",
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.team" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u062A\u06CC\u0645",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u062A\u06CC\u0645",
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.reminders" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "\u06CC\u0627\u062F\u0622\u0648\u0631\u06CC\u200C\u0647\u0627\u06CC \u062E\u0648\u062F\u06A9\u0627\u0631",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "\u06CC\u0627\u062F\u0622\u0648\u0631\u06CC\u200C\u0647\u0627\u06CC \u062E\u0648\u062F\u06A9\u0627\u0631",
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
            _push2(ssrRenderComponent(unref(Field), { name: "meeting.notifications.modifications" }, {
              default: withCtx(({ field, errorMessage, handleChange, handleBlur }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    color: "primary",
                    label: "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A",
                    "model-value": field.value,
                    error: errorMessage,
                    disabled: unref(isSubmitting),
                    "onUpdate:modelValue": handleChange,
                    onBlur: handleBlur
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BaseCheckbox, {
                      color: "primary",
                      label: "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A",
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
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5" }, [
                createVNode("div", null, [
                  createVNode(_component_BaseHeading, {
                    as: "h3",
                    size: "md",
                    weight: "medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BaseText, {
                    size: "xs",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0632\u0645\u0627\u0646\u200C\u0628\u0646\u062F\u06CC \u06CC\u06A9 \u062C\u0644\u0633\u0647 \u062C\u062F\u06CC\u062F ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "ms-auto flex items-center gap-2" }, [
                  createVNode(_component_BaseButtonAction, {
                    onClick: withModifiers(($event) => _ctx.$router.back(), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:arrow-left",
                        class: "size-3 me-2 rtl:rotate-180"
                      }),
                      createVNode("span", null, "\u0644\u063A\u0648")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_BaseButtonAction, {
                    type: "submit",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:check",
                        class: "size-3 me-2"
                      }),
                      createVNode("span", null, "\u0630\u062E\u06CC\u0631\u0647")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "px-10 py-5" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-4" }, [
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode(unref(Field), { name: "meeting.title" }, {
                      default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                        createVNode(_component_BaseInput, {
                          label: "\u0627\u06CC\u0646 \u062C\u0644\u0633\u0647 \u062F\u0631 \u0645\u0648\u0631\u062F \u0686\u06CC\u0633\u062A\u061F",
                          placeholder: "\u0645\u062B\u0627\u0644: \u0628\u0631\u0631\u0633\u06CC \u067E\u0631\u0648\u0698\u0647 \u0628\u0627 \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC",
                          icon: "lucide:slack",
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
                    createVNode(unref(DatePicker), {
                      modelValue: unref(dates),
                      "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
                      modelModifiers: { range: true },
                      masks: unref(masks),
                      "min-date": /* @__PURE__ */ new Date(),
                      locale: "fa",
                      mode: "date",
                      "hide-time-header": "",
                      "trim-weeks": ""
                    }, {
                      default: withCtx(({ inputValue, inputEvents }) => [
                        createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.startDate" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "\u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.start,
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text"
                                }, toHandlers(inputEvents.start), {
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.endDate" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "\u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.end,
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text"
                                }, toHandlers(inputEvents.end), {
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "masks", "min-date"])
                  ]),
                  createVNode("div", { class: "col-span-12 sm:col-span-6" }, [
                    createVNode(unref(DatePicker), {
                      modelValue: unref(dates),
                      "onUpdate:modelValue": ($event) => isRef(dates) ? dates.value = $event : null,
                      modelModifiers: { range: true },
                      masks: unref(masks),
                      "min-date": /* @__PURE__ */ new Date(),
                      locale: "fa",
                      mode: "time",
                      "hide-time-header": "",
                      "trim-weeks": ""
                    }, {
                      default: withCtx(({ inputValue, inputEvents }) => [
                        createVNode("div", { class: "flex w-full flex-col gap-4 sm:flex-row" }, [
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.startTime" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "\u0633\u0627\u0639\u062A \u0634\u0631\u0648\u0639",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.start,
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text"
                                }, toHandlers(inputEvents.start), {
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(unref(Field), { name: "meeting.endTime" }, {
                              default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                                createVNode(_component_BaseInput, mergeProps({
                                  label: "\u0633\u0627\u0639\u062A \u067E\u0627\u06CC\u0627\u0646",
                                  icon: "ph:calendar-blank-duotone",
                                  value: inputValue.end,
                                  "model-value": field.value,
                                  error: errorMessage,
                                  disabled: unref(isSubmitting),
                                  type: "text"
                                }, toHandlers(inputEvents.end), {
                                  "onUpdate:modelValue": handleChange,
                                  onBlur: handleBlur
                                }), null, 16, ["value", "model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "masks", "min-date"])
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode("div", { class: "my-4" }, [
                      createVNode("label", { class: "nui-label pb-4 text-[0.825rem]" }, "\u0641\u0631\u0627\u0648\u0627\u0646\u06CC \u062C\u0644\u0633\u0627\u062A"),
                      createVNode("div", { class: "flex items-center gap-6" }, [
                        createVNode(unref(Field), { name: "meeting.frequency" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadio, {
                              id: "frequency-1",
                              name: "unique_frequency",
                              label: "\u062A\u0645\u0627\u0645 \u0631\u0648\u0632",
                              value: "day",
                              color: "primary",
                              classes: {
                                label: "relative top-0.5 text-xs"
                              },
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.frequency" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadio, {
                              id: "frequency-2",
                              name: "weekly_frequency",
                              label: "\u0647\u0631 \u0647\u0641\u062A\u0647 \u062A\u06A9\u0631\u0627\u0631 \u06A9\u0646",
                              value: "week",
                              color: "primary",
                              classes: {
                                label: "relative top-0.5 text-xs"
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
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10" }, [
                createVNode("div", { class: "flex items-center justify-between" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      as: "h3",
                      size: "md",
                      weight: "medium"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u062C\u0644\u0633\u0647 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseText, {
                      size: "xs",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u0631\u062E\u06CC \u062C\u0632\u0626\u06CC\u0627\u062A \u062C\u0644\u0633\u0647 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_BaseButtonAction, null, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-3 me-2"
                        }),
                        createVNode("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0641\u0631\u0627\u062F")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-10 grid grid-cols-12 gap-4" }, [
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u0634\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/24.svg",
                          "data-nui-tooltip": "\u0622\u0646\u0627 \u0628\u06CC."
                        }),
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/10.svg",
                          "data-nui-tooltip": "\u06A9\u0646\u062F\u0631\u0627 \u0648."
                        }),
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/8.svg",
                          "data-nui-tooltip": "\u062C\u0627\u0646 \u0627\u0686."
                        }),
                        createVNode(_component_BaseAvatar, {
                          src: "/img/avatars/25.svg",
                          "data-nui-tooltip": "\u0645\u0644\u0627\u0646\u06CC \u0627\u0644."
                        }),
                        createVNode("div", { class: "ms-auto" }, [
                          createVNode("button", {
                            type: "button",
                            class: "text-primary-500 font-sans text-sm underline underline-offset-4"
                          }, " \u0645\u062F\u06CC\u0631\u06CC\u062A ")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u0645\u06A9\u0627\u0646 \u062C\u0644\u0633\u0647")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.location" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "text",
                            placeholder: "\u0645\u062B\u0627\u0644: \u0627\u062A\u0627\u0642 \u062C\u0644\u0633\u0647 A",
                            icon: "lucide:map-pin",
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u0644\u06CC\u0646\u06A9 \u0645\u0644\u0627\u0642\u0627\u062A")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.url" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseInput, {
                            type: "text",
                            placeholder: "https://zoom.us/m/123456789",
                            icon: "lucide:video",
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u062A\u0642\u0648\u06CC\u0645")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.calendar" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseListbox, {
                            items: calendars,
                            properties: {
                              value: "id",
                              label: "name",
                              sublabel: "text",
                              icon: "icon"
                            },
                            "model-value": field.value,
                            "model-modifiers": { prop: true },
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-start pt-2 sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(unref(Field), { name: "meeting.description" }, {
                        default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                          createVNode(_component_BaseTextarea, {
                            placeholder: "\u0628\u0631\u062E\u06CC \u062C\u0632\u0626\u06CC\u0627\u062A \u0627\u0636\u0627\u0641\u06CC \u062F\u0631\u0628\u0627\u0631\u0647 \u062C\u0644\u0633\u0647 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F...",
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
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-start pt-4 sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u067E\u06CC\u0648\u0633\u062A\u200C\u0647\u0627")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode(_component_BaseInputFileHeadless, {
                        modelValue: unref(uploadedFiles),
                        "onUpdate:modelValue": ($event) => isRef(uploadedFiles) ? uploadedFiles.value = $event : null,
                        multiple: ""
                      }, {
                        default: withCtx(({ open, remove, preview, drop, files }) => [
                          createVNode("div", { class: "mb-4 flex items-center gap-2" }, [
                            createVNode("button", {
                              type: "button",
                              class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                              tooltip: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627",
                              onClick: open
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:plus",
                                class: "absolute start-1/2 top-1/2 size-4 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"
                              }),
                              createVNode("span", { class: "sr-only" }, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627")
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: "nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                              tooltip: "\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:arrow-up",
                                class: "size-4"
                              }),
                              createVNode("span", { class: "sr-only" }, "\u0634\u0631\u0648\u0639 \u0622\u067E\u0644\u0648\u062F")
                            ])
                          ]),
                          createVNode("div", {
                            role: "button",
                            tabindex: "-1",
                            class: "",
                            onDragenter: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            onDragover: withModifiers(() => {
                            }, ["stop", "prevent"]),
                            onDrop: drop
                          }, [
                            !files?.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300",
                              tabindex: "0",
                              role: "button",
                              onClick: open,
                              onKeydown: withKeys(withModifiers(open, ["prevent"]), ["enter"])
                            }, [
                              createVNode("div", { class: "p-5 text-center" }, [
                                createVNode(_component_Icon, {
                                  name: "mdi-light:cloud-upload",
                                  class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 size-10 transition-colors duration-300"
                                }),
                                createVNode("h4", { class: "text-muted-400 font-sans text-sm" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0647\u0627 \u06A9\u0646\u06CC\u062F "),
                                createVNode("div", null, [
                                  createVNode("span", { class: "text-muted-400 font-sans text-[0.7rem] font-semibold uppercase" }, " \u06CC\u0627 ")
                                ]),
                                createVNode("label", {
                                  for: "file",
                                  class: "text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                                }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0641\u0627\u06CC\u0644\u200C\u0647\u0627 ")
                              ])
                            ], 40, ["onClick", "onKeydown"])) : (openBlock(), createBlock("ul", {
                              key: 1,
                              class: "mt-6 space-y-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(files, (file) => {
                                return openBlock(), createBlock("li", {
                                  key: file.name
                                }, [
                                  createVNode("div", { class: "border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3" }, [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("div", { class: "shrink-0" }, [
                                        file.type.startsWith("image") ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          class: "size-14 rounded-xl object-cover object-center",
                                          src: preview(file).value,
                                          alt: "Image preview"
                                        }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                                          key: 1,
                                          class: "size-14 rounded-xl object-cover object-center",
                                          src: _imports_0,
                                          alt: "Image preview"
                                        }))
                                      ]),
                                      createVNode("div", { class: "font-sans" }, [
                                        createVNode("span", { class: "text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm" }, toDisplayString(file.name), 1),
                                        createVNode("span", { class: "text-muted-400 block text-xs" }, toDisplayString(("formatFileSize" in _ctx ? _ctx.formatFileSize : unref(formatFileSize))(file.size)), 1)
                                      ])
                                    ]),
                                    createVNode("div", {
                                      class: ["ms-auto w-32 px-4 transition-opacity duration-300", "opacity-100"]
                                    }, [
                                      createVNode(_component_BaseProgress, {
                                        value: 0,
                                        size: "xs",
                                        color: "success"
                                      })
                                    ]),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode("button", {
                                        class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
                                        disabled: "",
                                        type: "button",
                                        tooltip: "\u0644\u063A\u0648"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:slash",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "\u0644\u063A\u0648")
                                      ]),
                                      createVNode("button", {
                                        class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                        type: "button",
                                        tooltip: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC"
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:arrow-up",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC")
                                      ]),
                                      createVNode("button", {
                                        class: "border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex size-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300",
                                        type: "button",
                                        tooltip: "\u062D\u0630\u0641",
                                        onClick: withModifiers(($event) => remove(file), ["prevent"])
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:x",
                                          class: "size-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "\u062D\u0630\u0641")
                                      ], 8, ["onClick"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ]))
                          ], 40, ["onDragenter", "onDragover", "onDrop"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-8 pb-6" }, [
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-center sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u06A9\u062F \u0631\u0646\u06AF")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_1",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-primary-500 peer-checked:bg-primary-500 size-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_2",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-info-500 peer-checked:bg-info-500 size-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_3",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-success-500 peer-checked:bg-success-500 size-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_4",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "border-danger-500 peer-checked:bg-danger-500 size-4 rounded-full border-2 transition-colors duration-300" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_5",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "size-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.colorCode" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseRadioHeadless, {
                              name: "color_code",
                              value: "color_code_6",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "size-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500" })
                              ]),
                              _: 2
                            }, 1032, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 grid grid-cols-12" }, [
                    createVNode("div", { class: "col-span-12 flex flex-col justify-start pt-1 sm:col-span-3" }, [
                      createVNode("label", { class: "nui-label text-[0.825rem]" }, "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627")
                    ]),
                    createVNode("div", { class: "col-span-12 sm:col-span-9" }, [
                      createVNode("div", { class: "flex flex-col gap-6" }, [
                        createVNode(unref(Field), { name: "meeting.notifications.general" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0648\u0645\u06CC",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.notifications.team" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u062A\u06CC\u0645",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.notifications.reminders" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "\u06CC\u0627\u062F\u0622\u0648\u0631\u06CC\u200C\u0647\u0627\u06CC \u062E\u0648\u062F\u06A9\u0627\u0631",
                              "model-value": field.value,
                              error: errorMessage,
                              disabled: unref(isSubmitting),
                              "onUpdate:modelValue": handleChange,
                              onBlur: handleBlur
                            }, null, 8, ["model-value", "error", "disabled", "onUpdate:modelValue", "onBlur"])
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Field), { name: "meeting.notifications.modifications" }, {
                          default: withCtx(({ field, errorMessage, handleChange, handleBlur }) => [
                            createVNode(_component_BaseCheckbox, {
                              color: "primary",
                              label: "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A",
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
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_TairoFormSave, null, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/form-6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
