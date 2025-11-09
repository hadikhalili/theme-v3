import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { CheckIcon } from '@heroicons/vue/24/solid';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ertegha",
  __ssrInlineRender: true,
  setup(__props) {
    const tabs = [
      { id: "monthly", label: "\u0645\u0627\u0647\u0627\u0646\u0647" },
      { id: "quarterly", label: "\u06F9\u06F0 \u0631\u0648\u0632\u0647" },
      { id: "yearly", label: "\u0633\u0627\u0644\u0627\u0646\u0647" }
    ];
    const activeTab = ref("monthly");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white" }, _attrs))}><div class="w-full max-w-4xl space-y-8"><div class="text-center"><h1 class="text-4xl font-bold text-purple-400">\u062E\u0648\u0631\u062F \u0648 \u0627\u0631\u062A\u0642\u0627 \u0628\u0647 \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645</h1><p class="mt-2 text-gray-400">\u0627\u0646\u062A\u062E\u0627\u0628 \u067E\u0644\u0646 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647</p></div><div class="flex justify-center space-x-4 rtl:space-x-reverse"><!--[-->`);
      ssrRenderList(tabs, (tab, index) => {
        _push(`<button class="${ssrRenderClass([
          "rounded-full px-6 py-3 font-semibold transition-colors duration-300",
          activeTab.value === tab.id ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        ])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><div class="rounded-2xl border border-purple-600/30 bg-gray-800 p-6 shadow-lg">`);
      if (activeTab.value === "monthly") {
        _push(`<div><div class="mb-6 text-center"><h2 class="text-2xl font-semibold text-purple-300">\u0645\u0627\u0647\u0627\u0646\u0647</h2><p class="mt-2 text-3xl font-bold">\u06F4\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646</p><p class="text-sm text-gray-500">/ \u0645\u0627\u0647</p></div><ul class="mb-8 space-y-4"><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u062A\u0635\u0648\u06CC\u0631\u06CC \u0648 \u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0648\u06CC\u0631 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062A\u062D\u0642\u06CC\u0642 \u0639\u0645\u06CC\u0642 (Deep Research) </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC ChatGPT 5 Plus, GPT-5, Grok 4, Gemini 2.5, Claude 4, o4-mini g Sonnet </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0627\u0648\u06CC\u0631 \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0628\u0627 Flux Pro, Imagen 4, Midjourney </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u0648\u06CC\u062F\u06CC\u0648 \u0648 \u0635\u062F\u0627 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0627\u0648\u0644\u0648\u06CC\u062A \u062F\u0631 \u0635\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 </li></ul><button class="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700"> \u0627\u0631\u062A\u0642\u0627 \u0628\u0647 \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "quarterly") {
        _push(`<div><div class="mb-6 text-center"><h2 class="text-2xl font-semibold text-purple-300">\u06F9\u06F0 \u0631\u0648\u0632\u0647</h2><p class="mt-2 text-3xl font-bold">\u06F1,\u06F2\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646</p><p class="text-sm text-gray-500">/ \u06F9\u06F0 \u0631\u0648\u0632</p></div><ul class="mb-8 space-y-4"><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0647\u0645\u0647 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u067E\u0644\u0646 \u0645\u0627\u0647\u0627\u0646\u0647 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0635\u0631\u0641\u0647\u200C\u062C\u0648\u06CC\u06CC \u06F2\u06F0% \u0646\u0633\u0628\u062A \u0628\u0647 \u0645\u0627\u0647\u0627\u0646\u0647 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u062A\u0635\u0648\u06CC\u0631\u06CC \u0648 \u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0648\u06CC\u0631 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062A\u062D\u0642\u06CC\u0642 \u0639\u0645\u06CC\u0642 (Deep Research) </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC ChatGPT 5 Plus, GPT-5, Grok 4, Gemini 2.5, Claude 4, o4-mini g Sonnet </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0627\u0648\u06CC\u0631 \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0628\u0627 Flux Pro, Imagen 4, Midjourney </li></ul><button class="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700"> \u0627\u0631\u062A\u0642\u0627 \u0628\u0647 \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "yearly") {
        _push(`<div><div class="mb-6 text-center"><h2 class="text-2xl font-semibold text-purple-300">\u0633\u0627\u0644\u0627\u0646\u0647</h2><p class="mt-2 text-3xl font-bold">\u06F4,\u06F9\u06F9\u06F9 \u062A\u0648\u0645\u0627\u0646</p><p class="text-sm text-gray-500">/ \u0633\u0627\u0644</p></div><ul class="mb-8 space-y-4"><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0647\u0645\u0647 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u067E\u0644\u0646 \u06F9\u06F0 \u0631\u0648\u0632\u0647 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0635\u0631\u0641\u0647\u200C\u062C\u0648\u06CC\u06CC \u06F3\u06F0% \u0646\u0633\u0628\u062A \u0628\u0647 \u0645\u0627\u0647\u0627\u0646\u0647 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC \u062A\u0635\u0648\u06CC\u0631\u06CC \u0648 \u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0648\u06CC\u0631 </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u062A\u062D\u0642\u06CC\u0642 \u0639\u0645\u06CC\u0642 (Deep Research) </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u0645\u062F\u0644\u200C\u0647\u0627\u06CC ChatGPT 5 Plus, GPT-5, Grok 4, Gemini 2.5, Claude 4, o4-mini g Sonnet </li><li class="flex items-center text-gray-300">`);
        _push(ssrRenderComponent(unref(CheckIcon), { class: "mr-2 size-5 text-purple-400" }, null, _parent));
        _push(` \u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0627\u0648\u06CC\u0631 \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0628\u0627 Flux Pro, Imagen 4, Midjourney </li></ul><button class="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition-colors duration-300 hover:bg-purple-700"> \u0627\u0631\u062A\u0642\u0627 \u0628\u0647 \u067E\u0631\u06CC\u0645\u06CC\u0648\u0645 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/ertegha.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
