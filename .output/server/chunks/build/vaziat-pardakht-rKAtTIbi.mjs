import { defineComponent, ref, computed, watch, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { ClockIcon, InformationCircleIcon, ArrowsRightLeftIcon, ExclamationTriangleIcon, CheckBadgeIcon, XCircleIcon } from '@heroicons/vue/24/solid';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vaziat-pardakht",
  __ssrInlineRender: true,
  props: {
    initialStatus: {}
  },
  setup(__props) {
    const props = __props;
    const paymentStatus = ref(props.initialStatus ?? "pending");
    const countdown = ref(60);
    const statuses = {
      pending: {
        title: "\u0648\u0636\u0639\u06CC\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u0646\u0627\u0645\u0639\u0644\u0648\u0645",
        subtitle: "\u0648\u0636\u0639\u06CC\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u0647\u0646\u0648\u0632 \u0645\u0634\u062E\u0635 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A. \u0644\u0637\u0641\u0627\u064B \u0686\u0646\u062F \u062F\u0642\u06CC\u0642\u0647 \u062F\u06CC\u06AF\u0631 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F.",
        description: "\u062A\u0623\u06CC\u06CC\u062F \u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u062A\u0627 \u067E\u0646\u062C \u062F\u0642\u06CC\u0642\u0647 \u0632\u0645\u0627\u0646 \u0628\u0628\u0631\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0648\u0636\u0639\u06CC\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u0631\u0627 \u0627\u0632 \u0645\u0633\u06CC\u0631 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u2190 \u0648\u0636\u0639\u06CC\u062A \u0628\u0633\u062A\u0647 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F. \u062F\u0631 \u0635\u0648\u0631\u062A \u06A9\u0633\u0631 \u0645\u0628\u0644\u063A\u060C \u0637\u06CC \u06F7\u06F2 \u0633\u0627\u0639\u062A \u0645\u0628\u0644\u063A \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0628\u0627\u0632\u06AF\u0631\u062F\u0627\u0646\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F.",
        primaryCta: "\u0628\u0631\u0631\u0633\u06CC \u0645\u062C\u062F\u062F",
        secondaryCta: "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647\u200C\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC",
        pill: "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0623\u06CC\u06CC\u062F",
        icon: ExclamationTriangleIcon,
        iconBg: "bg-gradient-to-br from-yellow-500/90 to-amber-500/80 text-yellow-50"
      },
      success: {
        title: "\u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F",
        subtitle: "\u067E\u0631\u062F\u0627\u062E\u062A \u0634\u0645\u0627 \u062B\u0628\u062A \u0634\u062F \u0648 \u062F\u0633\u062A\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644 \u0641\u0639\u0627\u0644 \u06AF\u0631\u062F\u06CC\u062F. \u0627\u0632 \u0644\u062D\u0638\u0647\u200C\u06CC \u0641\u0639\u0644\u06CC \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0628\u0633\u062A\u0647 \u062C\u062F\u06CC\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F.",
        description: "\u062A\u0645\u0627\u0645 \u0642\u0627\u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0628\u0633\u062A\u0647 \u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0641\u0639\u0627\u0644 \u0627\u0633\u062A. \u0631\u0633\u06CC\u062F \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0647 \u0627\u06CC\u0645\u06CC\u0644 \u062B\u0628\u062A\u200C\u0634\u062F\u0647 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F. \u062F\u0631 \u0635\u0648\u0631\u062A \u0646\u06CC\u0627\u0632 \u0628\u0647 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0637\u0631\u06CC\u0642 \u062A\u06CC\u06A9\u062A \u062F\u0631\u0648\u0646\u200C\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0627\u06CC \u0628\u0627 \u0645\u0627 \u062F\u0631 \u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627\u0634\u06CC\u062F.",
        primaryCta: "\u0648\u0631\u0648\u062F \u0628\u0647 \u062F\u0627\u0634\u0628\u0648\u0631\u062F",
        secondaryCta: "\u062F\u0627\u0646\u0644\u0648\u062F \u0631\u0633\u06CC\u062F \u067E\u0631\u062F\u0627\u062E\u062A",
        pill: "\u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0648\u0641\u0642",
        icon: CheckBadgeIcon,
        iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500 text-white"
      },
      failed: {
        title: "\u067E\u0631\u062F\u0627\u062E\u062A \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F",
        subtitle: "\u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0646\u062C\u0627\u0645 \u0646\u0634\u062F. \u0644\u0637\u0641\u0627\u064B \u06A9\u0627\u0631\u062A \u0628\u0627\u0646\u06A9\u06CC \u06CC\u0627 \u0645\u0648\u062C\u0648\u062F\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0631\u062F\u0647 \u0648 \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F.",
        description: "\u0628\u0627\u0646\u06A9 \u0645\u0628\u0644\u063A\u06CC \u0631\u0627 \u06A9\u0633\u0631 \u0646\u06A9\u0631\u062F\u0647 \u06CC\u0627 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u062E\u0637\u0627\u06CC \u0627\u0645\u0646\u06CC\u062A\u06CC \u0631\u062F \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u06AF\u0631 \u0645\u0628\u0644\u063A\u06CC \u0627\u0632 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u06A9\u0645 \u0634\u062F\u0647 \u0628\u0627\u0634\u062F\u060C \u0637\u06CC \u06F7\u06F2 \u0633\u0627\u0639\u062A \u0622\u06CC\u0646\u062F\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u062E\u0648\u062F\u06A9\u0627\u0631 \u0628\u0627\u0632 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F.",
        primaryCta: "\u067E\u0631\u062F\u0627\u062E\u062A \u062F\u0648\u0628\u0627\u0631\u0647",
        secondaryCta: "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647 \u0631\u0648\u0634\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A",
        pill: "\u067E\u0631\u062F\u0627\u062E\u062A \u0646\u0627\u0645\u0648\u0641\u0642",
        icon: XCircleIcon,
        iconBg: "bg-gradient-to-br from-rose-500 to-pink-500 text-white"
      }
    };
    const statusTimeline = [
      { key: "pending", label: "\u0646\u0627\u0645\u0639\u0644\u0648\u0645", icon: ExclamationTriangleIcon, iconColor: "text-yellow-300" },
      { key: "success", label: "\u0645\u0648\u0641\u0642", icon: CheckBadgeIcon, iconColor: "text-emerald-300" },
      { key: "failed", label: "\u0646\u0627\u0645\u0648\u0641\u0642", icon: XCircleIcon, iconColor: "text-rose-300" }
    ];
    const statusMeta = computed(() => statuses[paymentStatus.value]);
    const primaryActionLabel = computed(() => {
      if (paymentStatus.value === "pending") {
        const seconds = countdown.value.toString().padStart(2, "0");
        return `\u0628\u0631\u0631\u0633\u06CC \u0645\u062C\u062F\u062F (\u062F\u0631 ${seconds} \u062B\u0627\u0646\u06CC\u0647 \u062F\u06CC\u06AF\u0631)`;
      }
      return statuses[paymentStatus.value].primaryCta;
    });
    const timelineItemClass = (key) => key === paymentStatus.value ? "flex items-center gap-2 rounded-full border-transparent bg-white text-slate-900 shadow shadow-white/30 px-4 py-2" : "flex items-center gap-2 rounded-full border border-slate-500/20 bg-transparent px-4 py-2 text-slate-300";
    watch(paymentStatus, (status) => {
      if (status !== "pending") {
        countdown.value = 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-950 text-slate-100" }, _attrs))}><section class="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16" dir="rtl"><div class="w-full max-w-3xl rounded-[3rem] border border-white/5 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.5)] backdrop-blur"><header class="flex flex-col items-center gap-3 px-10 pb-10 pt-14 text-center">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(statusMeta.value.icon), {
        class: ["size-20 rounded-full border border-white/10 p-5", statusMeta.value.iconBg]
      }, null), _parent);
      _push(`<span class="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">${ssrInterpolate(statusMeta.value.pill)}</span><h1 class="text-3xl font-bold text-white">${ssrInterpolate(statusMeta.value.title)}</h1><p class="max-w-xl text-sm text-slate-400">${ssrInterpolate(statusMeta.value.subtitle)}</p></header><div class="border-t border-white/10"></div><div class="space-y-6 p-10 text-sm text-slate-300"><p class="leading-7 tracking-wide">${ssrInterpolate(statusMeta.value.description)}</p><div class="flex flex-wrap items-center gap-4 rounded-2xl bg-slate-900/70 p-5 text-xs text-slate-300 shadow-inner shadow-black/40"><div class="flex items-start gap-3">`);
      _push(ssrRenderComponent(unref(ClockIcon), { class: "size-9 rounded-full bg-white/5 p-2 text-yellow-300" }, null, _parent));
      _push(`<div class="space-y-1 text-left text-slate-300"><p class="font-semibold text-white"> \u0632\u0645\u0627\u0646 \u0628\u0631\u0631\u0633\u06CC \u062F\u0648\u0628\u0627\u0631\u0647 </p><p>\u0627\u06AF\u0631 \u0648\u0636\u0639\u06CC\u062A \u0646\u0627\u0645\u0639\u0644\u0648\u0645 \u0628\u0648\u062F \u0686\u0646\u062F \u062F\u0642\u06CC\u0642\u0647 \u0635\u0628\u0631 \u06A9\u0646\u06CC\u062F \u0648 \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F.</p></div></div><div class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200">`);
      _push(ssrRenderComponent(unref(InformationCircleIcon), { class: "size-4 text-yellow-200" }, null, _parent));
      _push(`<span>\u062F\u0631 \u0635\u0648\u0631\u062A \u062A\u0623\u06CC\u06CC\u062F \u067E\u0631\u062F\u0627\u062E\u062A\u060C \u0648\u0636\u0639\u06CC\u062A \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0648\u062F\u06A9\u0627\u0631 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F.</span></div></div><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"><button class="flex-1 rounded-2xl bg-gradient-to-l from-slate-200 via-white to-slate-100 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow shadow-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"${ssrIncludeBooleanAttr(paymentStatus.value === "pending" && countdown.value > 0) ? " disabled" : ""}>${ssrInterpolate(primaryActionLabel.value)}</button><button class="flex-1 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40">${ssrInterpolate(statusMeta.value.secondaryCta)}</button></div></div><footer class="rounded-b-[3rem] border-t border-white/10 bg-black/40 px-10 py-6 text-xs text-slate-500"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2"><div class="flex items-center gap-2 text-slate-400">`);
      _push(ssrRenderComponent(unref(ArrowsRightLeftIcon), { class: "size-4" }, null, _parent));
      _push(`<span>\u0646\u0645\u0627\u06CC \u06A9\u0644\u06CC \u0648\u0636\u0639\u06CC\u062A \u067E\u0631\u062F\u0627\u062E\u062A</span></div><div class="flex flex-wrap items-center gap-2 text-xs"><!--[-->`);
      ssrRenderList(statusTimeline, (item) => {
        _push(`<div class="${ssrRenderClass(timelineItemClass(item.key))}" aria-hidden="true">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), {
          class: ["size-4", item.iconColor]
        }, null), _parent);
        _push(`<span>${ssrInterpolate(item.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></footer></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/vaziat-pardakht.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
