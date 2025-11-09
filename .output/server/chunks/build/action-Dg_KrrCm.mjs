import { d as _sfc_main$D, a as __nuxt_component_2 } from './server.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "action",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = reactive({
      first: "",
      second: "",
      third: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInput = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-3xl flex-col flex-wrap gap-3 md:flex-row md:items-end" }, _attrs))}><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).first,
        "onUpdate:modelValue": ($event) => unref(fields).first = $event,
        size: "sm",
        rounded: "md",
        label: "Size: sm",
        placeholder: "\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" data-nui-tooltip="\u0630\u062E\u06CC\u0631\u0647" class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-8 items-center justify-center transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:save",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                "data-nui-tooltip": "\u0630\u062E\u06CC\u0631\u0647",
                class: "text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-8 items-center justify-center transition-colors duration-300"
              }, [
                createVNode(_component_Icon, {
                  name: "lucide:save",
                  class: "size-4"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).second,
        "onUpdate:modelValue": ($event) => unref(fields).second = $event,
        size: "md",
        rounded: "md",
        label: "\u0627\u0646\u062F\u0627\u0632\u0647: md",
        placeholder: "\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" data-nui-tooltip="\u0630\u062E\u06CC\u0631\u0647" class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-10 items-center justify-center transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:save",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                "data-nui-tooltip": "\u0630\u062E\u06CC\u0631\u0647",
                class: "text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-10 items-center justify-center transition-colors duration-300"
              }, [
                createVNode(_component_Icon, {
                  name: "lucide:save",
                  class: "size-4"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(fields).third,
        "onUpdate:modelValue": ($event) => unref(fields).third = $event,
        size: "lg",
        rounded: "md",
        label: "Size: lg",
        placeholder: "\u0645\u062B\u0627\u0644: \u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"
      }, {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" data-nui-tooltip="\u0630\u062E\u06CC\u0631\u0647" class="text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-12 items-center justify-center transition-colors duration-300"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:save",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                "data-nui-tooltip": "\u0630\u062E\u06CC\u0631\u0647",
                class: "text-muted-400 hover:text-primary-500 absolute end-0 top-0 z-[1] flex size-12 items-center justify-center transition-colors duration-300"
              }, [
                createVNode(_component_Icon, {
                  name: "lucide:save",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input/action.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
