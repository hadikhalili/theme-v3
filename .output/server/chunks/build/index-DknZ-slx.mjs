import { _ as _sfc_main$1 } from './DemoWizardStepTitle-DDg6AMcY.mjs';
import { Q as useHead, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, _ as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-router';
import 'notivue';
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/img/illustrations/wizard/design.svg");
const _imports_1 = publicAssetsURL("/img/illustrations/wizard/development.svg");
const _imports_2 = publicAssetsURL("/img/illustrations/wizard/marketing.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647"
    });
    const {
      getNextStep,
      data: project,
      handleSubmit,
      goToStep
    } = useMultiStepForm();
    function onSelectType(type) {
      project.value.type = type;
      handleSubmit();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto w-full max-w-6xl px-4 text-center"><div class="ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><div class="${ssrRenderClass([[
        unref(project).type === "design" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""
      ], "dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"])}"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_0)} alt="\u0637\u0631\u0627\u062D\u06CC UI/UX"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        weight: "medium",
        size: "xl",
        class: "text-muted-800 dark:text-muted-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0637\u0631\u0627\u062D\u06CC UI/UX</span>`);
          } else {
            return [
              createVNode("span", null, "\u0637\u0631\u0627\u062D\u06CC UI/UX")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u0637\u0631\u0627\u062D\u06CC UI/UX \u0628\u0631\u0627\u06CC \u0628\u0647\u0628\u0648\u062F \u062A\u0639\u0627\u0645\u0644 \u0628\u06CC\u0646 \u06A9\u0627\u0631\u0628\u0631 \u0648 \u0645\u062D\u0635\u0648\u0644 \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F. </span>`);
          } else {
            return [
              createVNode("span", null, " \u0637\u0631\u0627\u062D\u06CC UI/UX \u0628\u0631\u0627\u06CC \u0628\u0647\u0628\u0648\u062F \u062A\u0639\u0627\u0645\u0644 \u0628\u06CC\u0646 \u06A9\u0627\u0631\u0628\u0631 \u0648 \u0645\u062D\u0635\u0648\u0644 \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: unref(getNextStep)()?.to,
        color: "primary",
        rounded: "lg",
        class: "w-36",
        onClick: () => onSelectType("design")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(project).type === "design" ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647" : "\u0627\u062F\u0627\u0645\u0647")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(project).type === "design" ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647" : "\u0627\u062F\u0627\u0645\u0647"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/wizard",
        class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([[
        unref(project).type === "development" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""
      ], "dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"])}"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_1)} alt="\u062A\u0648\u0633\u0639\u0647 \u0648\u0628"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        weight: "medium",
        size: "xl",
        class: "text-muted-800 dark:text-muted-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u062A\u0648\u0633\u0639\u0647 \u0648\u0628</span>`);
          } else {
            return [
              createVNode("span", null, "\u062A\u0648\u0633\u0639\u0647 \u0648\u0628")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u06CC\u06A9 \u0631\u0634\u062A\u0647 \u06A9\u0647 \u0634\u0627\u0645\u0644 \u0627\u06CC\u062C\u0627\u062F \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u200C\u0647\u0627 \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u0648\u0628 \u0627\u0633\u062A </span>`);
          } else {
            return [
              createVNode("span", null, " \u06CC\u06A9 \u0631\u0634\u062A\u0647 \u06A9\u0647 \u0634\u0627\u0645\u0644 \u0627\u06CC\u062C\u0627\u062F \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u200C\u0647\u0627 \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u0648\u0628 \u0627\u0633\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: unref(getNextStep)()?.to,
        color: "primary",
        rounded: "lg",
        class: "w-36",
        onClick: () => onSelectType("development")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(project).type === "development" ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647" : "\u0627\u062F\u0627\u0645\u0647")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(project).type === "development" ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647" : "\u0627\u062F\u0627\u0645\u0647"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/wizard",
        class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([[
        unref(project).type === "marketing" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""
      ], "dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl"])}"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_2)} alt="\u062A\u0648\u0633\u0639\u0647 \u0648\u0628"><div class="my-4">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        tag: "h3",
        weight: "medium",
        size: "xl",
        class: "text-muted-800 dark:text-muted-100 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC</span>`);
          } else {
            return [
              createVNode("span", null, "\u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseParagraph, { class: "text-muted-400" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}> \u06CC\u06A9 \u0631\u0634\u062A\u0647 \u06A9\u0647 \u0634\u0627\u0645\u0644 \u0627\u06CC\u062C\u0627\u062F \u0645\u062D\u062A\u0648\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC \u0627\u0633\u062A </span>`);
          } else {
            return [
              createVNode("span", null, " \u06CC\u06A9 \u0631\u0634\u062A\u0647 \u06A9\u0647 \u0634\u0627\u0645\u0644 \u0627\u06CC\u062C\u0627\u062F \u0645\u062D\u062A\u0648\u0627\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A\u06CC \u0627\u0633\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-5 flex flex-col items-center">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        to: unref(getNextStep)()?.to,
        color: "primary",
        rounded: "lg",
        class: "w-36",
        onClick: () => onSelectType("marketing")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(unref(project).type === "marketing" ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647" : "\u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u062F\u0646")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(unref(project).type === "marketing" ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647" : "\u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u062F\u0646"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-4 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/wizard",
        class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F</span>`);
          } else {
            return [
              createVNode("span", null, "\u0628\u06CC\u0634\u062A\u0631 \u0628\u06CC\u0627\u0645\u0648\u0632\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
