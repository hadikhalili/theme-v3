import { F as useVModel, G as watchDebounced, a as __nuxt_component_2, d as _sfc_main$D } from './server.mjs';
import { defineComponent, ref, shallowRef, watch, computed, mergeProps, unref, withCtx, renderSlot, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "AddonInputPassword",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    userInputs: { default: () => [] },
    locale: { type: Function, default: void 0 },
    rounded: { default: "sm" },
    show: { type: Boolean },
    touched: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "validation", "visibility"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const vmodel = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: ""
    });
    const showPassword = ref(props.show ?? false);
    const inputRef = ref();
    const isTouched = ref(props.touched ?? false);
    const validation = shallowRef(null);
    __expose({
      touched: isTouched,
      validation,
      showPassword,
      toggleVisibility,
      inputRef
    });
    function handleInput(value, _touched = true) {
      vmodel.value = value;
      isTouched.value = _touched;
    }
    function toggleVisibility() {
      showPassword.value = !showPassword.value;
    }
    watch(showPassword, (value) => emits("visibility", value));
    async function checkPassword(value) {
      {
        return;
      }
    }
    watchDebounced(
      [vmodel, () => props.userInputs],
      ([value]) => checkPassword(),
      { debounce: 200, immediate: true }
    );
    const buttonBorder = computed(() => {
      switch (props.rounded) {
        case "sm":
          return "[&_.nui-text-button]:rounded-s";
        case "md":
          return "[&_.nui-text-button]:rounded-s-md";
        case "lg":
          return "[&_.nui-text-button]:rounded-s-xl";
        case "full":
          return "[&_.nui-text-button]:rounded-s-full";
        case "none":
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInput = _sfc_main$D;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group/password-strength relative" }, _attrs))}>`);
      if (unref(validation)?.feedback?.suggestions?.length || unref(validation)?.feedback?.warning) {
        _push(`<div class="border-muted-200 dark:border-muted-700 shadow-muted-300/30 dark:shadow-muted-800/20 dark:bg-muted-800 pointer-events-none absolute -bottom-1 start-0 z-20 translate-y-full rounded-lg border bg-white p-6 opacity-0 shadow-xl transition-opacity duration-300 group-focus-within/password-strength:pointer-events-auto group-focus-within/password-strength:opacity-100">`);
        ssrRenderSlot(_ctx.$slots, "help", {
          touched: unref(isTouched),
          validation: unref(validation),
          showPassword: unref(showPassword),
          toggleVisibility
        }, () => {
          _push(`<ul class="flex flex-col gap-4">`);
          if (unref(validation)?.feedback?.warning) {
            _push(`<li class="flex items-center justify-between gap-2">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:help-circle",
              class: "text-muted-400 dark:text-muted-500 size-4 shrink-0"
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([[
              "dark:text-slate-350 font-semibold"
            ], "grow text-xs dark:text-slate-400"])}">${ssrInterpolate(unref(validation)?.feedback?.warning)}</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(unref(validation)?.feedback?.suggestions, (suggestion) => {
            _push(`<li class="flex items-center justify-between gap-2">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:help-circle",
              class: "text-muted-400 dark:text-muted-500 size-4 shrink-0"
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([[
              "dark:text-slate-350 font-semibold"
            ], "grow text-xs dark:text-slate-400"])}">${ssrInterpolate(suggestion)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BaseInput, mergeProps({
        ref_key: "inputRef",
        ref: inputRef,
        "model-value": unref(vmodel),
        type: unref(showPassword) ? "text" : "password",
        disabled: props.disabled,
        rounded: props.rounded
      }, _ctx.$attrs, {
        classes: { input: `!pe-12` },
        "onUpdate:modelValue": (value) => {
          handleInput(String(value));
        }
      }), {
        action: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "action", {
              touched: unref(isTouched),
              validation: unref(validation),
              showPassword: unref(showPassword),
              toggleVisibility
            }, () => {
              _push2(`<button class="${ssrRenderClass([unref(buttonBorder), "leading-0 text-muted-400 peer-focus-within:text-primary-500 nui-focus absolute end-0 top-0 flex size-10 items-center justify-center text-center text-xl disabled:cursor-not-allowed"])}" type="button" tabindex="0"${ssrIncludeBooleanAttr(props.disabled) ? " disabled" : ""}${ssrRenderAttr("data-nui-tooltip", props.disabled ? "" : `${unref(showPassword) ? "\u0639\u062F\u0645 \u0646\u0645\u0627\u06CC\u0634" : "\u0646\u0645\u0627\u06CC\u0634"} \u06AF\u0630\u0631\u0648\u0627\u0698\u0647`)}${_scopeId}><div class="relative flex size-full items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: unref(showPassword) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(`</div></button>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "action", {
                touched: unref(isTouched),
                validation: unref(validation),
                showPassword: unref(showPassword),
                toggleVisibility
              }, () => [
                createVNode("button", {
                  class: ["leading-0 text-muted-400 peer-focus-within:text-primary-500 nui-focus absolute end-0 top-0 flex size-10 items-center justify-center text-center text-xl disabled:cursor-not-allowed", unref(buttonBorder)],
                  type: "button",
                  tabindex: "0",
                  disabled: props.disabled,
                  "data-nui-tooltip": props.disabled ? "" : `${unref(showPassword) ? "\u0639\u062F\u0645 \u0646\u0645\u0627\u06CC\u0634" : "\u0646\u0645\u0627\u06CC\u0634"} \u06AF\u0630\u0631\u0648\u0627\u0698\u0647`,
                  onClick: withModifiers(() => toggleVisibility(), ["prevent"])
                }, [
                  createVNode("div", { class: "relative flex size-full items-center justify-center" }, [
                    createVNode(_component_Icon, {
                      name: unref(showPassword) ? "mdi:eye-outline" : "mdi:eye-off-outline",
                      class: "size-5"
                    }, null, 8, ["name"])
                  ])
                ], 10, ["disabled", "data-nui-tooltip", "onClick"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {
        touched: unref(isTouched),
        validation: unref(validation),
        showPassword: unref(showPassword),
        toggleVisibility
      }, () => {
        _push(`<div class="-mx-1 mt-2 grid grid-cols-5"><!--[-->`);
        ssrRenderList(5, (x) => {
          _push(`<div class="px-1"><div class="${ssrRenderClass([
            !unref(isTouched) ? "bg-muted-200 dark:bg-muted-700" : (unref(validation)?.score ?? 0) >= x ? "bg-success-500" : "bg-danger-500",
            "h-1.5 rounded-xl transition-colors"
          ])}"></div></div>`);
        });
        _push(`<!--]--></div>`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonInputPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
