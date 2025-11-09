import { defineComponent, mergeModels, useModel, ref, provide, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { y as useNinjaId } from './server.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { u as useNinjaFilePreview } from './file-preview-DSqAOr0Y.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInputFileHeadless",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    multiple: { type: Boolean, default: false },
    filterFileDropped: { type: Function, default: () => true }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const [modelValue] = useModel(__props, "modelValue");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const previewMap = /* @__PURE__ */ new WeakMap();
    function open() {
      inputRef.value?.click();
    }
    function drop(event) {
      event.stopPropagation();
      event.preventDefault();
      const dt = event.dataTransfer;
      const filtered = new DataTransfer();
      if (inputRef.value && dt) {
        for (const file of dt.files) {
          if (props.filterFileDropped(file)) {
            filtered.items.add(file);
          }
        }
        inputRef.value.files = filtered.files;
        modelValue.value = inputRef.value.files;
      }
    }
    function remove(file) {
      if (!file)
        return;
      if (!modelValue.value)
        return;
      if (!inputRef.value)
        return;
      const filtered = new DataTransfer();
      if (previewMap.has(file)) {
        previewMap.delete(file);
      }
      for (const f of modelValue.value) {
        if (f !== file) {
          filtered.items.add(f);
        }
      }
      inputRef.value.files = filtered.files;
      modelValue.value = inputRef.value.files;
    }
    provide(
      "BaseInputFileHeadlessContext",
      reactive({
        el: inputRef,
        id,
        files: modelValue,
        open,
        remove,
        preview: useNinjaFilePreview,
        drop
      })
    );
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The form input identifier.
       */
      id,
      /**
       * The model value of the file input.
       */
      files: modelValue,
      /**
       * Opens the native file input selector.
       */
      open,
      /**
       * Removes a file from the input.
       */
      remove,
      /**
       * Returns the preview DataURL of a file.
       */
      preview: useNinjaFilePreview,
      /**
       * Handles the drop event.
       */
      drop
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/nui-file-headless relative" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        id: unref(id),
        el: unref(inputRef),
        files: unref(modelValue),
        open,
        remove,
        preview: unref(useNinjaFilePreview),
        drop
      }, null, _push, _parent);
      _push(`<input${ssrRenderAttrs(mergeProps({
        id: unref(id),
        ref_key: "inputRef",
        ref: inputRef,
        type: "file"
      }, _ctx.$attrs, {
        class: "hidden",
        multiple: props.multiple
      }))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseInputFileHeadless.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
