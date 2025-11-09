import { _ as _sfc_main$1 } from './DemoNavigationTop-ObEBtUkj.mjs';
import { Q as useHead, X as __nuxt_component_4 } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useToaster } from './toaster-C48C19qj.mjs';
import { p as provideMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "send",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: (title) => `${title} | \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 - \u0645\u0631\u062D\u0644\u0647 ${currentStepId.value + 1}`
    });
    const initialState = ref({
      recipient: {
        name: "",
        picture: "",
        address: {
          lineOne: "",
          lineTwo: "",
          city: "",
          state: "",
          postalCode: "",
          country: "\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647"
        }
      },
      amount: 0,
      account: null,
      routingNumber: "",
      prefix: "",
      method: null
    });
    const toaster = useToaster();
    const { handleSubmit, currentStepId, progress, complete, steps, errors, goToStep } = provideMultiStepForm({
      initialState,
      steps: [
        {
          to: "/layouts/send",
          meta: {
            name: "\u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647",
            title: "\u0634\u0645\u0627 \u0628\u0647 \u0686\u0647 \u06A9\u0633\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F\u061F",
            subtitle: "\u0646\u0627\u0645 \u0634\u062E\u0635 \u06CC\u0627 \u0634\u0631\u06A9\u062A \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0628\u0631\u0627\u06CC \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError("recipient.name");
            if (!data.value.recipient?.name)
              setFieldError("recipient.name", "\u06CC\u06A9 \u0646\u0627\u0645 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
          }
        },
        {
          to: "/layouts/send/method",
          meta: {
            name: "\u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A",
            title: "\u0686\u06AF\u0648\u0646\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0646\u06CC\u062F\u061F",
            subtitle: "\u06CC\u06A9\u06CC \u0627\u0632 \u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0648\u062C\u0648\u062F \u0631\u0627 \u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError(["method"]);
            if (!data.value?.method) {
              setFieldError("method", "\u0644\u0637\u0641\u0627 \u06CC\u06A9 \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F");
            }
          }
        },
        {
          to: "/layouts/send/recipient",
          meta: {
            name: "\u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647",
            title: "\u062C\u0632\u0626\u06CC\u0627\u062A \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647",
            subtitle: "\u062C\u0632\u0626\u06CC\u0627\u062A \u0645\u0633\u06CC\u0631\u06CC\u0627\u0628\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u062A\u0627 \u067E\u0648\u0644 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0622\u0646\u200C\u0647\u0627 \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062F"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError(["routingNumber"]);
            if (!data.value.routingNumber)
              setFieldError("routingNumber", "\u06CC\u06A9 \u0646\u0627\u0645 \u0645\u0639\u062A\u0628\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
          }
        },
        {
          to: "/layouts/send/address",
          meta: {
            name: "\u0622\u062F\u0631\u0633 \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647",
            title: "\u0622\u062F\u0631\u0633 \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647",
            subtitle: "\u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 \u0634\u0645\u0627 \u0628\u0627\u06CC\u062F \u0622\u062F\u0631\u0633 \u0642\u0627\u0646\u0648\u0646\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F \u062A\u0627 \u0628\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0631\u0627\u06CC \u0627\u0648 \u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError([
              "recipient.address.lineOne",
              "recipient.address.city",
              "recipient.address.postalCode"
            ]);
            if (!data.value.recipient?.address?.lineOne)
              setFieldError("recipient.address.lineOne", "\u0622\u062F\u0631\u0633\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
            if (!data.value.recipient?.address?.city)
              setFieldError("recipient.address.city", "\u06CC\u06A9 \u0634\u0647\u0631 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
            if (!data.value.recipient?.address?.postalCode)
              setFieldError("recipient.address.postalCode", "\u06CC\u06A9 \u06A9\u062F \u067E\u0633\u062A\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
          }
        },
        {
          to: "/layouts/send/amount",
          meta: {
            name: "\u0645\u0642\u062F\u0627\u0631",
            title: "\u06CC\u06A9 \u0645\u0642\u062F\u0627\u0631 \u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u0642\u0627\u0644 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0646\u06CC\u062F",
            subtitle: "\u0645\u0628\u0644\u063A\u06CC \u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. \u0627\u06CC\u0646 \u0645\u0628\u0644\u063A \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u0627\u0632 \u0645\u0648\u062C\u0648\u062F\u06CC \u062D\u0633\u0627\u0628 \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 \u0628\u06CC\u0634\u062A\u0631 \u0628\u0627\u0634\u062F"
          },
          validate({ data, setFieldError, resetFieldError }) {
            resetFieldError([
              "amount",
              "account"
            ]);
            if (!data.value.account)
              setFieldError("account", "\u06CC\u06A9 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F");
            if (data.value.amount <= 0)
              setFieldError("amount", "\u06CC\u06A9 \u0645\u0642\u062F\u0627\u0631 \u0645\u062B\u0628\u062A \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
            else if (data.value.account && data.value.amount > data.value.account.balance)
              setFieldError("amount", "\u0645\u0642\u062F\u0627\u0631 \u0628\u0627\u06CC\u062F \u06A9\u0645\u062A\u0631 \u0627\u0632 \u0645\u0648\u062C\u0648\u062F\u06CC \u0628\u0627\u0634\u062F");
          }
        },
        {
          to: "/layouts/send/review",
          meta: {
            name: "\u0628\u0627\u0632\u0628\u06CC\u0646\u06CC",
            title: "\u0628\u0631\u0631\u0633\u06CC \u0648 \u0627\u0631\u0633\u0627\u0644",
            subtitle: "\u0642\u0628\u0644 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644\u060C \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u06A9\u0647 \u0647\u0645\u0647 \u0686\u06CC\u0632 \u062F\u0631 \u0641\u0631\u0622\u06CC\u0646\u062F \u062F\u0631\u0633\u062A \u0627\u0633\u062A"
          }
        }
      ],
      onSubmit: async (state, ctx) => {
        await new Promise((resolve) => setTimeout(resolve, 4e3));
        toaster.clearAll();
        toaster.show({
          title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
          message: `\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F!`,
          color: "success",
          icon: "ph:check",
          closable: true
        });
      },
      onError: (error) => {
        toaster.clearAll();
        toaster.show({
          title: "\u062E\u0637\u0627",
          message: error.message,
          color: "danger",
          icon: "lucide:alert-triangle",
          closable: true
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoNavigationTop = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 bg-muted-50 min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_DemoNavigationTop, {
        title: "\u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644",
        "close-to": "/layouts/payments"
      }, null, _parent));
      _push(`<div class="w-full pb-20 pt-32"><div class="mx-auto w-full max-w-6xl px-4"><div class="grid w-full gap-10 md:grid-cols-12"><div class="${ssrRenderClass(unref(complete) ? "hidden" : "md:col-span-3 lg:col-span-4")}"><div class="xs:w-full xs:max-w-xs xs:mx-auto flex flex-col gap-4 md:flex-row"><div class="xs:max-w-xs xs:mx-auto relative flex justify-between gap-7 md:flex-col"><div class="xs:top-1.5 xs:inset-x-0 bg-muted-200 dark:bg-muted-700 absolute start-2 top-2 z-0 mx-auto h-1 w-[calc(100%_-_1rem)] md:h-[calc(100%_-_1rem)] md:w-1 ltr:md:-translate-x-1/2 rtl:md:translate-x-1/2"></div><div class="bg-primary-500 absolute start-2 top-0 z-10 mx-auto hidden w-0.5 rounded-full transition-all duration-300 md:block ltr:-translate-x-1/2 rtl:translate-x-1/2" style="${ssrRenderStyle(`height: ${unref(progress)}%;`)}"></div><div class="bg-primary-500 absolute start-1.5 top-[7px] z-10 h-0.5 rounded-full transition-all duration-300 md:hidden" style="${ssrRenderStyle(`width: calc(${unref(progress)}% - 0.5rem);`)}"></div><!--[-->`);
      ssrRenderList(unref(steps), (step, index) => {
        _push(`<div class="bg-muted-200 dark:bg-muted-700 relative z-20 flex size-4 items-center justify-center rounded-full"><span class="${ssrRenderClass([unref(currentStepId) >= index ? "scale-1" : "scale-0", "bg-primary-500 block size-2 rounded-full transition-transform duration-300"])}"></span></div>`);
      });
      _push(`<!--]--></div><div class="relative flex justify-center gap-7 md:flex-col md:justify-between"><!--[-->`);
      ssrRenderList(unref(steps), (step, index) => {
        _push(`<a role="button"${ssrRenderAttr("tabindex", 0)} class="${ssrRenderClass([[unref(currentStepId) === index ? "" : "xs:hidden", unref(currentStepId) > step.id ? "nui-link" : "cursor-default"], "h-4 leading-none"])}"><span class="${ssrRenderClass([
          unref(currentStepId) === index ? "text-muted-800 dark:text-muted-100" : "text-muted-400 dark:text-muted-500",
          "font-heading block text-xs"
        ])}">${ssrInterpolate(step.meta.name)}</span></a>`);
      });
      _push(`<!--]--></div></div></div><div class="${ssrRenderClass(unref(complete) ? "col-span-12" : "md:col-span-9 lg:col-span-8")}"><form action="" method="POST" novalidate>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</form></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/send.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
