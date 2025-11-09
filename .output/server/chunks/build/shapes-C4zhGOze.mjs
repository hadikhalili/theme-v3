import { z as useNuiDefaultProperty, y as useNinjaId, a as __nuxt_component_2, w as __nuxt_component_0$2, A as _sfc_main$E } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, mergeModels, useModel, computed, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInputFile",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    label: { default: void 0 },
    icon: { default: void 0 },
    placeholder: { default: void 0 },
    error: { type: [String, Boolean], default: false },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
    textValue: { type: Function, default: void 0 },
    contrast: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    i18n: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const contrast = useNuiDefaultProperty(props, "BaseInputFile", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseInputFile", "rounded");
    const size = useNuiDefaultProperty(props, "BaseInputFile", "size");
    const i18n = useNuiDefaultProperty(props, "BaseInputFile", "i18n");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const defaultTextValue = (fileList) => {
      if (!fileList?.item?.length) {
        return i18n.value.empty;
      }
      return fileList?.item.length === 1 ? fileList.item(0)?.name ?? i18n.value.invalid : i18n.value.multiple.replaceAll(
        "{count}",
        String(fileList?.item?.length ?? 0)
      );
    };
    const radiuses = {
      none: "",
      sm: "nui-input-rounded-sm",
      md: "nui-input-rounded-md",
      lg: "nui-input-rounded-lg",
      full: "nui-input-rounded-full"
    };
    const sizes = {
      sm: "nui-input-sm",
      md: "nui-input-md",
      lg: "nui-input-lg"
    };
    const contrasts = {
      default: "nui-input-default",
      "default-contrast": "nui-input-default-contrast"
    };
    const textValue = computed(() => {
      if (props.textValue) {
        return props.textValue(modelValue.value);
      }
      return defaultTextValue(modelValue.value);
    });
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The internal id of the radio input.
       */
      id
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseInputHelpText = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-file-regular", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-input-file-error",
          props.loading && "nui-input-file-loading",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-input-file-color-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots || props.label) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-input-file-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-input-file-outer"><label tabindex="0"${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([[props.classes?.input], "nui-input-file-inner"])}">`);
      if (props.placeholder || props.icon || "icon" in _ctx.$slots) {
        _push(`<div class="${ssrRenderClass([props.classes?.text, "nui-input-file-addon"])}">`);
        if (props.placeholder) {
          _push(`<span class="text-xs">${ssrInterpolate(props.placeholder)}</span>`);
        } else {
          _push(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          if (props.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: props.icon,
              class: props.classes?.icon
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="nui-input-file-text">${ssrInterpolate(unref(textValue))}</div><input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "file"
      }, _ctx.$attrs, { class: "hidden" }))}></label>`);
      if (props.loading) {
        _push(`<div class="nui-input-file-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.error && typeof props.error === "string") {
        _push(ssrRenderComponent(_component_BaseInputHelpText, {
          color: "danger",
          class: props.classes?.error
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.error)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.error), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseInputFile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shapes",
  __ssrInlineRender: true,
  setup(__props) {
    const first = ref(null);
    const second = ref(null);
    const third = ref(null);
    const fourth = ref(null);
    const fifth = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseInputFile = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6 md:max-w-4xl md:grid-cols-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(first),
        "onUpdate:modelValue": ($event) => isRef(first) ? first.value = $event : null,
        rounded: "none",
        label: "Rounded: none"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(second),
        "onUpdate:modelValue": ($event) => isRef(second) ? second.value = $event : null,
        rounded: "sm",
        label: "Rounded: sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(third),
        "onUpdate:modelValue": ($event) => isRef(third) ? third.value = $event : null,
        rounded: "md",
        label: "Rounded: md"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(fourth),
        "onUpdate:modelValue": ($event) => isRef(fourth) ? fourth.value = $event : null,
        rounded: "lg",
        label: "Rounded: lg"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseInputFile, {
        modelValue: unref(fifth),
        "onUpdate:modelValue": ($event) => isRef(fifth) ? fifth.value = $event : null,
        rounded: "full",
        label: "Rounded: full"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/input-file/shapes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
