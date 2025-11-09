import { au as createNinjaToaster, d as _sfc_main$D, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$2 } from './BaseCheckbox-CfxLaouc.mjs';
import { defineComponent, reactive, ref, unref, withCtx, createVNode, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './IconChevronDown-B9AzKHTY.mjs';
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toaster",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = reactive({
      title: "\u0645\u0648\u0641\u0642\u06CC\u062A",
      message: `\u067E\u06CC\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F!`,
      color: "success",
      icon: "lucide:check",
      closable: true
    });
    const position = ref("bottom-center");
    const themes = {
      "top-start": {
        maxToasts: 1,
        containerId: "top-start",
        containerClass: [
          "fixed",
          "inset-0",
          "pointer-events-none",
          "p-4",
          "flex",
          "flex-col",
          // top
          "overflow-hidden",
          "z-[200]",
          "items-start",
          // start
          "gap-2",
          "space-y-3"
        ],
        wrapperClass: [
          "pointer-events-auto",
          "focus:outline-none",
          "rounded",
          "outline-slate-300",
          "outline-offset-2",
          "focus:outline",
          "focus:outline-2",
          "focus-within:outline",
          "focus-within:outline-2"
        ],
        transition: {
          enterActiveClass: "transition duration-300 ease-out",
          enterFromClass: "transform -translate-x-full opacity-0",
          enterToClass: "transform translate-x-0 opacity-100",
          leaveActiveClass: "transition duration-200 ease-in",
          leaveFromClass: "transform translate-x-0 opacity-100",
          leaveToClass: "transform -translate-x-full opacity-0"
        }
      },
      "top-center": {
        maxToasts: 1,
        containerId: "top-center",
        containerClass: [
          "fixed",
          "inset-0",
          "pointer-events-none",
          "p-4",
          "flex",
          "flex-col",
          // top
          "overflow-hidden",
          "z-[200]",
          "items-center",
          // center
          "gap-2",
          "space-y-3"
        ],
        wrapperClass: [
          "pointer-events-auto",
          "focus:outline-none",
          "rounded",
          "outline-slate-300",
          "outline-offset-2",
          "focus:outline",
          "focus:outline-2",
          "focus-within:outline",
          "focus-within:outline-2"
        ],
        transition: {
          enterActiveClass: "transition duration-300 ease-out",
          enterFromClass: "transform -translate-y-full opacity-0",
          enterToClass: "transform translate-y-0 opacity-100",
          leaveActiveClass: "transition duration-200 ease-in",
          leaveFromClass: "transform translate-y-0 opacity-100",
          leaveToClass: "transform -translate-y-full opacity-0"
        }
      },
      "top-end": {
        maxToasts: 1,
        containerId: "top-end",
        containerClass: [
          "fixed",
          "inset-0",
          "pointer-events-none",
          "p-4",
          "flex",
          "flex-col",
          // top
          "overflow-hidden",
          "z-[200]",
          "items-end",
          // end
          "gap-2",
          "space-y-3"
        ],
        wrapperClass: [
          "pointer-events-auto",
          "focus:outline-none",
          "rounded",
          "outline-slate-300",
          "outline-offset-2",
          "focus:outline",
          "focus:outline-2",
          "focus-within:outline",
          "focus-within:outline-2"
        ],
        transition: {
          enterActiveClass: "transition duration-300 ease-out",
          enterFromClass: "transform translate-x-full opacity-0",
          enterToClass: "transform translate-x-0 opacity-100",
          leaveActiveClass: "transition duration-200 ease-in",
          leaveFromClass: "transform translate-x-0 opacity-100",
          leaveToClass: "transform translate-x-full opacity-0"
        }
      },
      "bottom-start": {
        maxToasts: 1,
        containerId: "bottom-start",
        containerClass: [
          "fixed",
          "inset-0",
          "pointer-events-none",
          "p-4",
          "flex",
          "flex-col-reverse",
          // bottom
          "overflow-hidden",
          "z-[200]",
          "items-start",
          // start
          "gap-2",
          "space-y-3"
        ],
        wrapperClass: [
          "pointer-events-auto",
          "focus:outline-none",
          "rounded",
          "outline-slate-300",
          "outline-offset-2",
          "focus:outline",
          "focus:outline-2",
          "focus-within:outline",
          "focus-within:outline-2"
        ],
        transition: {
          enterActiveClass: "transition duration-300 ease-out",
          enterFromClass: "transform -translate-x-full opacity-0",
          enterToClass: "transform translate-x-0 opacity-100",
          leaveActiveClass: "transition duration-200 ease-in",
          leaveFromClass: "transform translate-x-0 opacity-100",
          leaveToClass: "transform -translate-x-full opacity-0"
        }
      },
      "bottom-center": {
        maxToasts: 1,
        containerId: "bottom-center",
        containerClass: [
          "fixed",
          "inset-0",
          "pointer-events-none",
          "p-4",
          "flex",
          "flex-col-reverse",
          // bottom
          "overflow-hidden",
          "z-[200]",
          "items-center",
          // center
          "gap-2",
          "space-y-3"
        ],
        wrapperClass: [
          "pointer-events-auto",
          "focus:outline-none",
          "rounded",
          "outline-slate-300",
          "outline-offset-2",
          "focus:outline",
          "focus:outline-2",
          "focus-within:outline",
          "focus-within:outline-2"
        ],
        transition: {
          enterActiveClass: "transition duration-300 ease-out",
          enterFromClass: "transform translate-y-full opacity-0",
          enterToClass: "transform translate-y-0 opacity-100",
          leaveActiveClass: "transition duration-200 ease-in",
          leaveFromClass: "transform translate-y-0 opacity-100",
          leaveToClass: "transform translate-y-full opacity-0"
        }
      },
      "bottom-end": {
        maxToasts: 1,
        containerId: "bottom-end",
        containerClass: [
          "fixed",
          "inset-0",
          "pointer-events-none",
          "p-4",
          "flex",
          "flex-col-reverse",
          // bottom
          "overflow-hidden",
          "z-[200]",
          "items-end",
          // end
          "gap-2",
          "space-y-3"
        ],
        wrapperClass: [
          "pointer-events-auto",
          "focus:outline-none",
          "rounded",
          "outline-slate-300",
          "outline-offset-2",
          "focus:outline",
          "focus:outline-2",
          "focus-within:outline",
          "focus-within:outline-2"
        ],
        transition: {
          enterActiveClass: "transition duration-300 ease-out",
          enterFromClass: "transform translate-x-full opacity-0",
          enterToClass: "transform translate-x-0 opacity-100",
          leaveActiveClass: "transition duration-200 ease-in",
          leaveFromClass: "transform translate-x-0 opacity-100",
          leaveToClass: "transform translate-x-full opacity-0"
        }
      }
    };
    let toaster;
    const showToast = () => {
      toaster?.clearAll();
      toaster = createNinjaToaster({
        theme: themes[position.value]
      });
      toaster.showComponent("TairoToaster", {
        props: {
          title: toast.title,
          message: toast.message,
          color: toast.color,
          icon: toast.icon,
          closable: toast.closable
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$1;
      const _component_BaseCheckbox = _sfc_main$2;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="max-w-md"><div class="grid grid-cols-12 gap-4"><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(toast).title,
        "onUpdate:modelValue": ($event) => unref(toast).title = $event,
        label: "\u0639\u0646\u0648\u0627\u0646"
      }, null, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(toast).message,
        "onUpdate:modelValue": ($event) => unref(toast).message = $event,
        label: "\u067E\u06CC\u0627\u0645"
      }, null, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(toast).color,
        "onUpdate:modelValue": ($event) => unref(toast).color = $event,
        label: "\u0631\u0646\u06AF"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="primary"${_scopeId}> Primary </option><option value="success"${_scopeId}> \u0645\u0648\u0641\u0642\u06CC\u062A </option><option value="info"${_scopeId}> Info </option><option value="warning"${_scopeId}> Warning </option><option value="danger"${_scopeId}> Danger </option><option value="muted"${_scopeId}> Muted </option>`);
          } else {
            return [
              createVNode("option", { value: "primary" }, " Primary "),
              createVNode("option", { value: "success" }, " \u0645\u0648\u0641\u0642\u06CC\u062A "),
              createVNode("option", { value: "info" }, " Info "),
              createVNode("option", { value: "warning" }, " Warning "),
              createVNode("option", { value: "danger" }, " Danger "),
              createVNode("option", { value: "muted" }, " Muted ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(toast).icon,
        "onUpdate:modelValue": ($event) => unref(toast).icon = $event,
        label: "\u0622\u06CC\u06A9\u0648\u0646"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="lucide:check"${_scopeId}> \u0622\u06CC\u06A9\u0648\u0646 \u0628\u0631\u0631\u0633\u06CC </option><option value="lucide:x"${_scopeId}> \u0622\u06CC\u06A9\u0648\u0646 \u0628\u0633\u062A\u0646 </option><option value="lucide:alert-triangle"${_scopeId}> \u0622\u06CC\u06A9\u0648\u0646 \u0647\u0634\u062F\u0627\u0631 </option><option value="lucide:alert-octagon"${_scopeId}> \u0622\u06CC\u06A9\u0648\u0646 \u062E\u0637\u0631 </option><option value="lucide:info"${_scopeId}> \u0622\u06CC\u06A9\u0648\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A </option>`);
          } else {
            return [
              createVNode("option", { value: "lucide:check" }, " \u0622\u06CC\u06A9\u0648\u0646 \u0628\u0631\u0631\u0633\u06CC "),
              createVNode("option", { value: "lucide:x" }, " \u0622\u06CC\u06A9\u0648\u0646 \u0628\u0633\u062A\u0646 "),
              createVNode("option", { value: "lucide:alert-triangle" }, " \u0622\u06CC\u06A9\u0648\u0646 \u0647\u0634\u062F\u0627\u0631 "),
              createVNode("option", { value: "lucide:alert-octagon" }, " \u0622\u06CC\u06A9\u0648\u0646 \u062E\u0637\u0631 "),
              createVNode("option", { value: "lucide:info" }, " \u0622\u06CC\u06A9\u0648\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseSelect, {
        modelValue: unref(position),
        "onUpdate:modelValue": ($event) => isRef(position) ? position.value = $event : null,
        label: "Position"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="top-start"${_scopeId}> top-start </option><option value="top-center"${_scopeId}> top-center </option><option value="top-end"${_scopeId}> top-end </option><option value="bottom-start"${_scopeId}> bottom-start </option><option value="bottom-center"${_scopeId}> bottom-center </option><option value="bottom-end"${_scopeId}> bottom-end </option>`);
          } else {
            return [
              createVNode("option", { value: "top-start" }, " top-start "),
              createVNode("option", { value: "top-center" }, " top-center "),
              createVNode("option", { value: "top-end" }, " top-end "),
              createVNode("option", { value: "bottom-start" }, " bottom-start "),
              createVNode("option", { value: "bottom-center" }, " bottom-center "),
              createVNode("option", { value: "bottom-end" }, " bottom-end ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseCheckbox, {
        modelValue: unref(toast).closable,
        "onUpdate:modelValue": ($event) => unref(toast).closable = $event,
        label: "\u062A\u0648\u0633\u062A \u0642\u0627\u0628\u0644 \u0628\u0633\u062A\u0646\u061F",
        color: "primary"
      }, null, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        class: "w-full",
        color: "primary",
        onClick: showToast
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0633\u062A\u0631 `);
          } else {
            return [
              createTextVNode(" \u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0633\u062A\u0631 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/tairo/toaster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
