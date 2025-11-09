import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { CheckIcon } from '@heroicons/vue/24/solid';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ertegha-2",
  __ssrInlineRender: true,
  setup(__props) {
    const ui = {
      headerPill: "\u0627\u0631\u062A\u0642\u0627\u06CC \u0633\u0631\u06CC\u0639",
      pageTitle: "\u062E\u0631\u06CC\u062F \u0648 \u0627\u0631\u062A\u0642\u0627\u06CC \u0628\u0633\u062A\u0647",
      subtitle: "\u0633\u0647 \u067E\u0644\u0646 \u0645\u062A\u0641\u0627\u0648\u062A \u0628\u0631\u0627\u06CC \u062A\u06CC\u0645 \u0647\u0627 \u0648 \u062D\u0631\u0641\u0647 \u0627\u06CC \u0647\u0627. \u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F \u0648 \u0628\u0644\u0627\u0641\u0627\u0635\u0644\u0647 \u0628\u0647 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F.",
      popularBadge: "\u067E\u0631\u0637\u0631\u0641\u062F\u0627\u0631",
      footerNote: "\u062A\u062E\u0641\u06CC\u0641 \u0647\u0627 \u0647\u0646\u06AF\u0627\u0645 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u062E\u0648\u062F\u06A9\u0627\u0631 \u0627\u0639\u0645\u0627\u0644 \u0645\u06CC \u0634\u0648\u062F \u0648 \u0646\u06CC\u0627\u0632\u06CC \u0628\u0647 \u062A\u0645\u0627\u0633 \u0646\u06CC\u0633\u062A.",
      footerPromo: "\u06A9\u062F \u062A\u062E\u0641\u06CC\u0641 \u062F\u0627\u0631\u06CC\u062F\u061F \u0622\u0646 \u0631\u0627 \u062F\u0631 \u0645\u0631\u062D\u0644\u0647 \u067E\u0631\u062F\u0627\u062E\u062A \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."
    };
    const sharedFeatures = {
      plus: [
        "\u0627\u06A9\u0627\u0646\u062A \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u0628\u0627 \u0641\u0639\u0627\u0644 \u0633\u0627\u0632\u06CC \u0641\u0648\u0631\u06CC",
        "\u062F\u0633\u062A\u0631\u0633\u06CC \u0631\u0648\u0632\u0627\u0646\u0647 \u0628\u0647 ChatGPT Plus \u0648 Claude",
        "\u06AF\u0641\u062A\u06AF\u0648\u0647\u0627\u06CC \u0645\u062A\u0646\u06CC \u0648 \u0635\u0648\u062A\u06CC \u0628\u062F\u0648\u0646 \u0645\u062D\u062F\u0648\u062F\u06CC\u062A",
        "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0633\u0631\u06CC\u0639 \u062F\u0627\u062E\u0644 \u0628\u0631\u0646\u0627\u0645\u0647",
        "\u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06CC \u062A\u0648\u0644\u06CC\u062F\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u0645\u062D\u062A\u0648\u0627"
      ],
      pro: [
        "\u0645\u062F\u0644 \u0647\u0627\u06CC GPT-5 Pro \u0648 Claude 3 \u062F\u0631 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0634\u0645\u0627",
        "\u062A\u0648\u0644\u06CC\u062F \u062A\u0635\u0648\u06CC\u0631 \u0628\u0627 Flux Pro \u0648 Midjourney",
        "\u062A\u062D\u0644\u06CC\u0644 \u062F\u0627\u062F\u0647 \u067E\u06CC\u0634\u0631\u0641\u062A\u0647 \u0648 \u062E\u0631\u0648\u062C\u06CC \u0633\u0627\u062E\u062A\u0627\u0631\u06CC\u0627\u0641\u062A\u0647",
        "\u0633\u0627\u062E\u062A \u0648\u0631\u06A9 \u0641\u0644\u0648 \u0647\u0627\u06CC \u062E\u0648\u062F\u06A9\u0627\u0631 \u0646\u0627\u0645\u062D\u062F\u0648\u062F",
        "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0648\u0698\u0647 \u0628\u0627 \u067E\u0627\u0633\u062E \u062F\u0647\u06CC \u0633\u0631\u06CC\u0639"
      ],
      team: [
        "\u06A9\u0646\u0633\u0648\u0644 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0639\u0636\u0627 \u0648 \u0633\u0637\u062D \u062F\u0633\u062A\u0631\u0633\u06CC",
        "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0641\u0627\u06CC\u0644 \u0648 \u062D\u0627\u0641\u0638\u0647 \u0645\u0634\u062A\u0631\u06A9 \u062A\u0627 5 \u062A\u0631\u0627\u0628\u0627\u06CC\u062A",
        "\u0647\u0645\u0627\u0647\u0646\u06AF\u06CC \u0628\u0627 Slack \u0648 Notion",
        "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u062F\u06CC\u0631 \u062D\u0633\u0627\u0628 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC",
        "\u06AF\u0632\u0627\u0631\u0634 \u0647\u0627\u06CC \u062F\u0648\u0631\u0647 \u0627\u06CC \u0639\u0645\u0644\u06A9\u0631\u062F \u062A\u06CC\u0645"
      ]
    };
    const tabs = [
      {
        id: "monthly",
        label: "\u0628\u0633\u062A\u0647 \u0645\u0627\u0647\u0627\u0646\u0647",
        description: "\u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0627\u0647\u0627\u0646\u0647 \u0628\u0631\u0627\u06CC \u0627\u0646\u0639\u0637\u0627\u0641 \u0628\u06CC\u0634\u062A\u0631 \u0648 \u0634\u0631\u0648\u0639 \u0633\u0631\u06CC\u0639."
      },
      {
        id: "quarterly",
        label: "\u0628\u0633\u062A\u0647 90 \u0631\u0648\u0632\u0647",
        description: "\u0633\u0647 \u0645\u0627\u0647 \u062F\u0633\u062A\u0631\u0633\u06CC \u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0627 \u062A\u062E\u0641\u06CC\u0641 \u0648\u06CC\u0698\u0647 \u0628\u0631\u0627\u06CC \u062A\u06CC\u0645 \u0647\u0627\u06CC \u0645\u062A\u0645\u0631\u06A9\u0632."
      },
      {
        id: "yearly",
        label: "\u0628\u0633\u062A\u0647 \u0633\u0627\u0644\u0627\u0646\u0647",
        description: "\u0635\u0631\u0641\u0647 \u062C\u0648\u06CC\u06CC \u062D\u062F\u0627\u06A9\u062B\u0631\u06CC \u0628\u0627 \u062A\u0633\u0648\u06CC\u0647 \u0633\u0627\u0644\u0627\u0646\u0647 \u0648 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0633\u0627\u0632\u0645\u0627\u0646\u06CC \u06A9\u0627\u0645\u0644."
      }
    ];
    const plansByTab = {
      monthly: [
        {
          id: "plus",
          name: "\u067E\u0644\u0627\u0633",
          description: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0633\u0631\u06CC\u0639 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u0647\u0648\u0634\u0645\u0646\u062F",
          price: "299 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0627\u0647\u0627\u0646\u0647",
          features: [...sharedFeatures.plus],
          cta: "\u062E\u0631\u06CC\u062F \u0628\u0633\u062A\u0647 \u067E\u0644\u0627\u0633"
        },
        {
          id: "pro",
          name: "\u067E\u0631\u0648",
          description: "\u0628\u0631\u0627\u06CC \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0648 \u062A\u06CC\u0645 \u0647\u0627\u06CC \u0645\u062D\u0635\u0648\u0644",
          price: "649 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0627\u0647\u0627\u0646\u0647 \u0628\u0627 30 \u062F\u0631\u0635\u062F \u062A\u062E\u0641\u06CC\u0641",
          badge: "\u062F\u0633\u062A\u0631\u0633\u06CC \u06A9\u0627\u0645\u0644 \u0628\u0647 \u0645\u062F\u0644 \u0647\u0627\u06CC \u0648\u0698\u0647",
          features: [...sharedFeatures.pro],
          cta: "\u062E\u0631\u06CC\u062F \u0628\u0633\u062A\u0647 \u067E\u0631\u0648",
          highlight: true
        },
        {
          id: "team",
          name: "\u062A\u06CC\u0645",
          description: "\u0645\u0646\u0627\u0633\u0628 \u0633\u0627\u0632\u0645\u0627\u0646 \u0647\u0627\u06CC \u0631\u0648 \u0628\u0647 \u0631\u0634\u062F",
          price: "899 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0647\u0631 \u0646\u0641\u0631 \u062F\u0631 \u0645\u0627\u0647",
          total: "\u062D\u062F\u0627\u0642\u0644 3 \u06A9\u0627\u0631\u0628\u0631 \u0641\u0639\u0627\u0644",
          features: [...sharedFeatures.team],
          cta: "\u0645\u0634\u0627\u0647\u062F\u0647 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u062A\u06CC\u0645"
        }
      ],
      quarterly: [
        {
          id: "plus",
          name: "\u067E\u0644\u0627\u0633",
          description: "\u067E\u0627\u06CC\u062F\u0627\u0631\u06CC \u0633\u0647 \u0645\u0627\u0647\u0647 \u0628\u0627 \u0647\u0632\u06CC\u0646\u0647 \u06A9\u0645\u062A\u0631",
          price: "239 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0645\u0627\u0647\u0627\u0646\u0647 \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A 90 \u0631\u0648\u0632\u0647",
          total: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0647 \u0645\u0627\u0647: 717 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          badge: "20 \u062F\u0631\u0635\u062F \u062A\u062E\u0641\u06CC\u0641 \u0646\u0633\u0628\u062A \u0628\u0647 \u0645\u0627\u0647\u0627\u0646\u0647",
          features: [...sharedFeatures.plus],
          cta: "\u062E\u0631\u06CC\u062F \u0628\u0633\u062A\u0647 \u067E\u0644\u0627\u0633"
        },
        {
          id: "pro",
          name: "\u067E\u0631\u0648",
          description: "\u062A\u0631\u06A9\u06CC\u0628 \u062A\u062E\u0635\u0635 \u0648 \u062A\u062E\u0641\u06CC\u0641 \u062F\u0631 \u0633\u0647 \u0645\u0627\u0647",
          price: "499 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0645\u0627\u0647\u0627\u0646\u0647 \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A 90 \u0631\u0648\u0632\u0647",
          total: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0647 \u0645\u0627\u0647: 1497 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          badge: "35 \u062F\u0631\u0635\u062F \u062A\u062E\u0641\u06CC\u0641 \u0646\u0633\u0628\u062A \u0628\u0647 \u0645\u0627\u0647\u0627\u0646\u0647",
          features: [...sharedFeatures.pro],
          cta: "\u062E\u0631\u06CC\u062F \u0628\u0633\u062A\u0647 \u067E\u0631\u0648",
          highlight: true
        },
        {
          id: "team",
          name: "\u062A\u06CC\u0645",
          description: "\u0647\u0645\u0627\u0647\u0646\u06AF\u06CC \u06A9\u0627\u0645\u0644 \u0628\u0631\u0627\u06CC \u0627\u0633\u067E\u0631\u06CC\u0646\u062A \u0647\u0627",
          price: "699 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0647\u0631 \u0646\u0641\u0631 \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A 90 \u0631\u0648\u0632\u0647",
          total: "\u067E\u0631\u062F\u0627\u062E\u062A \u06A9\u0644\u06CC: 2097 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          features: [...sharedFeatures.team],
          cta: "\u0645\u0634\u0627\u0647\u062F\u0647 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u062A\u06CC\u0645"
        }
      ],
      yearly: [
        {
          id: "plus",
          name: "\u067E\u0644\u0627\u0633",
          description: "\u0635\u0631\u0641\u0647 \u062C\u0648\u06CC\u06CC \u0628\u0631\u0627\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u062F\u0631\u0627\u0632\u0645\u062F\u062A",
          price: "199 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0645\u0627\u0647\u0627\u0646\u0647 \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0633\u0627\u0644\u0627\u0646\u0647",
          total: "\u0645\u062C\u0645\u0648\u0639 \u06A9\u0644\u06CC: 2388 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          badge: "40 \u062F\u0631\u0635\u062F \u0635\u0631\u0641\u0647 \u062C\u0648\u06CC\u06CC \u0633\u0627\u0644\u0627\u0646\u0647",
          features: [...sharedFeatures.plus],
          cta: "\u062E\u0631\u06CC\u062F \u0628\u0633\u062A\u0647 \u067E\u0644\u0627\u0633"
        },
        {
          id: "pro",
          name: "\u067E\u0631\u0648",
          description: "\u0628\u0631\u062A\u0631\u06CC\u0646 \u0627\u0646\u062A\u062E\u0627\u0628 \u0628\u0631\u0627\u06CC \u0645\u062A\u062E\u0635\u0635\u0627\u0646",
          price: "449 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0645\u0627\u0647\u0627\u0646\u0647 \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0633\u0627\u0644\u0627\u0646\u0647",
          total: "\u0645\u062C\u0645\u0648\u0639 \u06A9\u0644\u06CC: 5388 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          badge: "\u0628\u0647\u062A\u0631\u06CC\u0646 \u0645\u0628\u0644\u063A \u0628\u0631\u0627\u06CC \u0631\u0634\u062F \u067E\u06CC\u0634\u0631\u0641\u062A\u0647",
          features: [...sharedFeatures.pro],
          cta: "\u062E\u0631\u06CC\u062F \u0628\u0633\u062A\u0647 \u067E\u0631\u0648",
          highlight: true
        },
        {
          id: "team",
          name: "\u062A\u06CC\u0645",
          description: "\u067E\u0648\u0634\u0634 \u06A9\u0627\u0645\u0644 \u0633\u0627\u0632\u0645\u0627\u0646\u06CC \u0628\u0627 \u0647\u0632\u06CC\u0646\u0647 \u06A9\u0645\u062A\u0631",
          price: "599 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          period: "\u0647\u0631 \u0646\u0641\u0631 \u0628\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0633\u0627\u0644\u0627\u0646\u0647",
          total: "\u0645\u062C\u0645\u0648\u0639 \u0633\u0627\u0644\u0627\u0646\u0647: 7188 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0627\u0646",
          badge: "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0633\u0627\u0632\u0645\u0627\u0646\u06CC \u0628\u0627 SLA",
          features: [...sharedFeatures.team],
          cta: "\u0645\u0634\u0627\u0647\u062F\u0647 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u062A\u06CC\u0645"
        }
      ]
    };
    const activeTab = ref("monthly");
    const activeTabData = computed(() => tabs.find((tab) => tab.id === activeTab.value) ?? tabs[0]);
    const displayedPlans = computed(() => plansByTab[activeTab.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100" }, _attrs))}><section class="mx-auto max-w-6xl px-4 py-16" dir="rtl"><header class="space-y-3 text-center"><p class="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-300">${ssrInterpolate(ui.headerPill)}</p><h1 class="text-4xl font-bold tracking-tight sm:text-5xl">${ssrInterpolate(ui.pageTitle)}</h1><p class="mx-auto max-w-2xl text-base text-slate-400">${ssrInterpolate(ui.subtitle)}</p></header><div class="mx-auto mt-12 flex w-full max-w-xl items-center rounded-full bg-white/5 p-1 text-sm font-medium text-slate-400 shadow-lg shadow-slate-900/60 backdrop-blur"><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([
          "flex-1 rounded-full px-6 py-3 transition-all duration-300",
          activeTab.value === tab.id ? "bg-white text-slate-900 shadow-sm shadow-emerald-500/40" : "hover:text-white"
        ])}">${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div><p class="mt-6 text-center text-sm text-slate-400">${ssrInterpolate(activeTabData.value.description)}</p><div class="mt-10 grid gap-6 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(displayedPlans.value, (plan) => {
        _push(`<article class="${ssrRenderClass([
          "flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-slate-900/70 p-8 shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-emerald-500/10",
          plan.highlight ? "border-emerald-400/70 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/80 ring-2 ring-emerald-400/40" : ""
        ])}"><div class="flex flex-col gap-6"><div class="flex items-start justify-between gap-6"><div><div class="flex items-center gap-3"><h3 class="text-2xl font-bold text-white">${ssrInterpolate(plan.name)}</h3>`);
        if (plan.highlight) {
          _push(`<span class="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">${ssrInterpolate(ui.popularBadge)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="mt-2 text-sm text-slate-400">${ssrInterpolate(plan.description)}</p></div><div class="text-left"><p class="text-3xl font-bold text-emerald-300">${ssrInterpolate(plan.price)}</p><p class="mt-1 text-xs text-slate-400">${ssrInterpolate(plan.period)}</p>`);
        if (plan.total) {
          _push(`<p class="mt-1 text-xs text-slate-500">${ssrInterpolate(plan.total)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (plan.badge) {
          _push(`<span class="inline-flex w-fit items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">${ssrInterpolate(plan.badge)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="space-y-4"><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<li class="flex items-start gap-3 text-sm text-slate-300"><span class="mt-0.5 flex size-8 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">`);
          _push(ssrRenderComponent(unref(CheckIcon), { class: "size-4" }, null, _parent));
          _push(`</span><span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></div><button class="mt-10 w-full rounded-2xl bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-emerald-300">${ssrInterpolate(plan.cta)}</button></article>`);
      });
      _push(`<!--]--></div><div class="mt-12 text-center text-xs text-slate-500"><p>${ssrInterpolate(ui.footerNote)}</p><p class="mt-2 text-emerald-200">${ssrInterpolate(ui.footerPromo)}</p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/ertegha-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
