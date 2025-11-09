import { g as useTailwindColors, h as _sfc_main$u, a as __nuxt_component_2$1, b as _sfc_main$w, c as _sfc_main$v, e as _sfc_main$e, i as _export_sfc } from './server.mjs';
import { _ as _sfc_main$7 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$a } from './BaseButtonIcon-B-NRPykg.mjs';
import { useSSRContext, defineComponent, reactive, shallowRef, ref, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, isRef, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$9 } from './AddonApexcharts-cnqu1j3S.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$6 } from './TairoTableCell-C_FebgVa.mjs';
import { _ as _sfc_main$5 } from './BaseCheckbox-CfxLaouc.mjs';
import { _ as _sfc_main$8 } from './BaseTag-CQSmGSbm.mjs';
import { Calendar } from 'v-calendars';
import { f as fa } from './fa-DpcB1dqS.mjs';
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
import './IconCheck--xcA1MPZ.mjs';

const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseAvatar = _sfc_main$7;
  const _component_BaseButtonIcon = _sfc_main$a;
  const _component_Icon = __nuxt_component_2$1;
  const _component_BaseHeading = _sfc_main$w;
  const _component_BaseParagraph = _sfc_main$v;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="relative mx-auto mb-4 size-20">`);
  _push(ssrRenderComponent(_component_BaseAvatar, {
    size: "xl",
    src: "/img/icons/logos/slicer.svg"
  }, null, _parent));
  _push(`<div class="absolute bottom-0 end-0">`);
  _push(ssrRenderComponent(_component_BaseButtonIcon, {
    rounded: "full",
    small: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, { name: "ph:camera-duotone" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, { name: "ph:camera-duotone" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="text-center">`);
  _push(ssrRenderComponent(_component_BaseHeading, {
    size: "md",
    weight: "medium",
    class: "text-muted-800 dark:text-muted-100"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0627\u0633\u0644\u0627\u06CC\u0633\u0631</span>`);
      } else {
        return [
          createVNode("span", null, "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0627\u0633\u0644\u0627\u06CC\u0633\u0631")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseParagraph, {
    size: "xs",
    class: "text-muted-400 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>\u062F\u0648\u0631\u0647\u200C\u0647\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646</span>`);
      } else {
        return [
          createVNode("span", null, "\u062F\u0648\u0631\u0647\u200C\u0647\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseParagraph, {
    size: "sm",
    class: "text-muted-500 dark:text-muted-400 mx-auto max-w-[320px]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}> \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0633\u062F \u0641\u0627\u06A9 \u0627\u0633\u062A\u0627 \u0627\u0633\u0647 \u0646\u0648\u0646 \u0627\u06CC\u0646\u067E\u0648\u0631\u062A\u0648\u0646\u0627. </span>`);
      } else {
        return [
          createVNode("span", null, " \u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u062F\u0648\u0644\u0648\u0631 \u0633\u06CC\u062A \u0622\u0645\u06CC\u062A\u060C \u06A9\u0646\u0633\u06A9\u062A\u062A\u0648\u0631 \u0622\u062F\u06CC\u067E\u06CC\u0633\u06CC\u0646\u06AF \u0627\u0644\u06CC\u062A. \u0633\u062F \u0641\u0627\u06A9 \u0627\u0633\u062A\u0627 \u0627\u0633\u0647 \u0646\u0648\u0646 \u0627\u06CC\u0646\u067E\u0648\u0631\u062A\u0648\u0646\u0627. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="border-muted-200 dark:border-muted-700 mt-auto border-t pt-6 text-center"><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x rtl:divide-x-reverse"><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 864 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> \u067E\u0633\u062A\u200C\u0647\u0627 </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 247 </h4><p class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"> \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 19k </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> \u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 </p></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCompanyOverview.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartAreaStats",
  __ssrInlineRender: true,
  setup(__props) {
    const areaSubscriptions = reactive(useAreaSubscriptions());
    function useAreaSubscriptions() {
      const { primary, info, success } = useTailwindColors();
      const type = "area";
      const height = 180;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        colors: [primary.value, success.value, info.value],
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2],
          curve: "smooth"
        },
        xaxis: {
          type: "numeric",
          lines: {
            show: false
          },
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          }
        },
        yaxis: [
          {
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
              show: false
            },
            padding: {
              left: 0,
              right: 0
            }
          }
        ],
        tooltip: {
          x: {
            show: false,
            format: "dd/MM/yy HH:mm"
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "\u062A\u0645\u062F\u06CC\u062F\u0647\u0627",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "\u0627\u0633\u062A\u0639\u0641\u0627",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ]);
      return { type, height, options, series };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonApexcharts = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="border-muted-200 dark:border-muted-700 mb-6 border-b p-6 text-center"><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x rtl:divide-x-reverse"><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 314 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> \u062C\u062F\u06CC\u062F </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 611 </h4><p class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"> \u062A\u0645\u062F\u06CC\u062F\u0647\u0627 </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 49 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> \u0627\u0633\u062A\u0639\u0641\u0627 </p></div></div></div></div><div class="mt-auto w-full">`);
      _push(ssrRenderComponent(_component_AddonApexcharts, unref(areaSubscriptions), null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartAreaStats.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoChartBarSocialChannels",
  __ssrInlineRender: true,
  setup(__props) {
    const barSocialChannels = reactive(useBarSocialChannels());
    function useBarSocialChannels() {
      const { primary, subtitle, success } = useTailwindColors();
      const type = "bar";
      const height = 235;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            borderRadiusApplication: "end",
            columnWidth: "60%",
            colors: {
              backgroundBarOpacity: 0.75
            }
          }
        },
        colors: [success.value, primary.value, subtitle.value],
        dataLabels: {
          enabled: false
        },
        noData: {
          text: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC..."
        },
        xaxis: {
          type: "category",
          tickPlacement: "on",
          labels: {
            rotate: -45,
            rotateAlways: true
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "\u062A\u0645\u062F\u06CC\u062F\u0647\u0627",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
      ]);
      return { type, height, options, series };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AddonApexcharts = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-full flex-col" }, _attrs))}><div class="border-muted-200 dark:border-muted-700 mb-6 border-b p-6 text-center"><div class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x rtl:divide-x-reverse"><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 314 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> \u0641\u06CC\u0633\u0628\u0648\u06A9 </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 611 </h4><p class="text-muted-400 font-sans text-[0.65rem] font-semibold uppercase"> \u062A\u0648\u06CC\u06CC\u062A\u0631 </p></div></div><div class="flex-1"><div class="flex flex-col px-4 text-center"><h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"> 49 </h4><p class="font-sansfont-semibold text-muted-400 text-[0.65rem] uppercase"> \u0644\u06CC\u0646\u06A9\u062F\u06CC\u0646 </p></div></div></div></div><div class="mt-auto w-full">`);
      _push(ssrRenderComponent(_component_AddonApexcharts, unref(barSocialChannels), null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/demo-chart/DemoChartBarSocialChannels.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoPendingTickets",
  __ssrInlineRender: true,
  setup(__props) {
    const tickets = [
      {
        id: 45651,
        title: "\u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062F\u0631 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0631\u062F",
        content: '\u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A\u06CC \u06A9\u0647 \u062F\u0631 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0627\u06CC\u062C\u0627\u062F \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u0645. \u0648\u0642\u062A\u06CC \u0631\u0648\u06CC \u062F\u06A9\u0645\u0647 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0644\u06CC\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u0645\u060C \u0641\u0642\u0637 \u0645\u06CC\u200C\u06AF\u0648\u06CC\u062F "\u0646\u0627\u0645\u0648\u0641\u0642".',
        updated: "\u06F5 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
        user: {
          name: "\u0622\u0646\u0627 \u0648\u0631\u06CC\u0646\u06A9\u0648\u0641",
          src: "/img/avatars/22.svg"
        }
      },
      {
        id: 45783,
        title: "\u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0641\u0631\u0635\u062A \u062C\u062F\u06CC\u062F\u06CC \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F",
        content: "\u0648\u0642\u062A\u06CC \u0633\u0639\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645 \u06CC\u06A9 \u0641\u0631\u0635\u062A \u062C\u062F\u06CC\u062F \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u0645\u060C \u067E\u0633 \u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u062F\u06A9\u0645\u0647 \u0627\u0642\u062F\u0627\u0645\u060C \u0628\u0647 \u0635\u0641\u062D\u0647 404 \u0647\u062F\u0627\u06CC\u062A \u0645\u06CC\u200C\u0634\u0648\u0645.",
        updated: "\u06F2 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
        user: {
          name: "\u062C\u0627\u0646 \u06A9\u0645\u067E\u0628\u0644",
          src: "/img/avatars/3.svg"
        }
      },
      {
        id: 45723,
        title: "\u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627\u06CC \u067E\u06CC\u200C\u067E\u0627\u0644 \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F",
        content: "\u0648\u0642\u062A\u06CC \u0633\u0639\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0627\u0632 PayPal \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u0645\u060C \u0635\u0641\u062D\u0647 \u0628\u0647\u200C\u0637\u0648\u0631 \u0645\u062F\u0627\u0648\u0645 \u0644\u0648\u062F \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u062F\u0631 \u0646\u0647\u0627\u06CC\u062A \u067E\u06CC\u0627\u0645 \u062E\u0637\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0645\u06CC\u200C\u06A9\u0646\u0645.",
        updated: "\u06F3\u06F0 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634",
        user: {
          name: "\u0647\u0627\u0648\u0627\u0631\u062F \u0631\u0627\u06CC\u0633",
          src: "/img/avatars/16.svg"
        }
      },
      {
        id: 45862,
        title: "\u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u062F\u0627\u0631\u0627\u06CC\u06CC\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u067E\u0648\u0634\u0647 \u062A\u0645 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u0645",
        content: "\u0645\u0646 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644\u200C\u0647\u0627 \u0631\u0627 \u062F\u0646\u0628\u0627\u0644 \u06A9\u0631\u062F\u0645 \u0627\u0645\u0627 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u062F\u0627\u0631\u0627\u06CC\u06CC\u200C\u0647\u0627 \u0631\u0627 \u062F\u0631 \u067E\u0648\u0634\u0647 \u0627\u0635\u0644\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0646\u0645. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u06A9\u0645\u06A9\u06CC \u0628\u06AF\u06CC\u0631\u0645\u061F",
        updated: "\u06F6 \u0633\u0627\u0639\u062A \u067E\u06CC\u0634",
        user: {
          name: "\u0686\u0627\u0631\u0644\u0632 \u0647\u0627\u06CC\u0646\u0632",
          src: "/img/avatars/8.svg"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$7;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "divide-muted-200 dark:divide-muted-700 space-y-6 divide-y" }, _attrs))}><!--[-->`);
      ssrRenderList(tickets, (ticket, index) => {
        _push(`<div class="${ssrRenderClass([index > 0 ? "pt-6" : "", "flex flex-col gap-4 sm:flex-row"])}">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          size: "lg",
          src: ticket.user.src,
          text: ticket.user.name,
          "data-nui-tooltip": ticket.user.name
        }, null, _parent));
        _push(`<div class="max-w-md">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "medium",
          class: "text-muted-800 dark:text-muted-100 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>[#${ssrInterpolate(ticket.id)}] ${ssrInterpolate(ticket.title)}</span>`);
            } else {
              return [
                createVNode("span", null, "[#" + toDisplayString(ticket.id) + "] " + toDisplayString(ticket.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400 mb-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(ticket.content)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(ticket.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "xs",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F\u0647 ${ssrInterpolate(ticket.updated)}</span>`);
            } else {
              return [
                createVNode("span", null, "\u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0634\u062F\u0647 " + toDisplayString(ticket.updated), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-full sm:ms-auto sm:w-auto">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          color: "default",
          class: "w-full sm:w-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0645\u062F\u06CC\u0631\u06CC\u062A</span>`);
            } else {
              return [
                createVNode("span", null, "\u0645\u062F\u06CC\u0631\u06CC\u062A")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoPendingTickets.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    const gaugePersonal = reactive(useGaugePersonal());
    const barSalesProfit = reactive(useBarSalesProfit());
    function useGaugePersonal() {
      const { primary } = useTailwindColors();
      const type = "radialBar";
      const height = 220;
      const options = {
        title: {
          text: void 0
        },
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        colors: [primary.value],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5,
              // margin is in pixels
              dropShadow: {
                enabled: false,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2
              }
            },
            hollow: {
              margin: 0,
              size: "35%"
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: "22px"
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          }
        },
        labels: ["\u0646\u062A\u0627\u06CC\u062C \u0645\u062A\u0648\u0633\u0637"]
      };
      const series = shallowRef([76]);
      return {
        type,
        height,
        options,
        series
      };
    }
    function useBarSalesProfit() {
      const { primary, info, success } = useTailwindColors();
      const type = "bar";
      const height = 250;
      const options = {
        chart: {
          fontFamily: "Vazirmatn FD, sans-serif",
          toolbar: {
            show: false
          },
          defaultLocale: "fa",
          locales: [fa]
        },
        colors: [primary.value, info.value, success.value],
        legend: {
          position: "top"
        },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: "rounded",
            columnWidth: "55%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "\u0627\u0633\u0641\u0646\u062F",
            "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",
            "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
            "\u062E\u0631\u062F\u0627\u062F",
            "\u062A\u06CC\u0631",
            "\u0645\u0631\u062F\u0627\u062F",
            "\u0634\u0647\u0631\u06CC\u0648\u0631",
            "\u0645\u0647\u0631",
            "\u0622\u0628\u0627\u0646"
          ]
        },
        yaxis: {
          labels: {
            formatter: function(val) {
              return val + 70;
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val + 70;
            }
          }
        }
      };
      const series = shallowRef([
        {
          name: "\u0633\u0648\u062F \u062E\u0627\u0644\u0635",
          data: [-26, -15, -13, -14, -9, -12, -7, -10, -4]
        },
        {
          name: "\u062F\u0631\u0622\u0645\u062F",
          data: [6, 15, 31, 28, 17, 35, 21, 44, 24]
        },
        {
          name: "\u062C\u0631\u06CC\u0627\u0646 \u0646\u0642\u062F\u06CC \u0622\u0632\u0627\u062F",
          data: [-35, -29, -34, -44, -25, -22, -18, -17, -29]
        }
      ]);
      return {
        type,
        height,
        options,
        series
      };
    }
    const team = shallowRef([
      {
        id: "0",
        src: "/img/avatars/22.svg",
        name: "\u0622\u0646\u0627 \u0648\u0631\u06CC\u0646\u06A9\u0648\u0641",
        role: "\u0637\u0631\u0627\u062D \u0631\u0627\u0628\u0637 \u06A9\u0627\u0631\u0628\u0631\u06CC / \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        expertise: "\u0637\u0631\u0627\u062D \u062A\u062C\u0631\u0628\u0647 \u06A9\u0627\u0631\u0628\u0631\u06CC",
        rate: 49,
        status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633"
      },
      {
        id: "1",
        src: "/img/avatars/3.svg",
        name: "\u062C\u0627\u0646 \u06A9\u0645\u067E\u0628\u0644",
        role: "\u0645\u062F\u06CC\u0631 \u0641\u0631\u0648\u0634",
        expertise: "\u0645\u062F\u06CC\u0631\u06CC\u062A",
        rate: 74,
        status: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647"
      },
      {
        id: "2",
        src: "/img/avatars/9.svg",
        name: "\u0628\u062B \u062F\u0644\u0627\u0646\u0648",
        role: "\u0637\u0631\u0627\u062D \u0645\u062D\u0635\u0648\u0644",
        expertise: "\u0645\u062D\u0635\u0648\u0644",
        rate: 43,
        status: "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633"
      },
      {
        id: "3",
        src: "/img/avatars/14.svg",
        name: "\u0622\u0646\u062F\u0631\u0648 \u0647\u06CC\u06AF\u0632",
        role: "\u0645\u062F\u06CC\u0631 \u067E\u0631\u0648\u0698\u0647",
        expertise: "\u067E\u0631\u0648\u0698\u0647",
        rate: 69,
        status: "\u062C\u062F\u06CC\u062F"
      }
    ]);
    const selected = ref([]);
    const isAllVisibleSelected = computed(() => {
      return selected.value.length === team.value?.length;
    });
    function toggleAllVisibleSelection() {
      if (isAllVisibleSelected.value) {
        selected.value = [];
      } else {
        selected.value = team.value?.map((item) => item.id) ?? [];
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseCard = _sfc_main$u;
      const _component_Icon = __nuxt_component_2$1;
      const _component_DemoCompanyOverview = __nuxt_component_2;
      const _component_DemoChartAreaStats = _sfc_main$3;
      const _component_DemoChartBarSocialChannels = _sfc_main$2;
      const _component_TairoTable = _sfc_main$3$1;
      const _component_TairoTableHeading = _sfc_main$2$1;
      const _component_BaseCheckbox = _sfc_main$5;
      const _component_TairoTableRow = _sfc_main$1$1;
      const _component_TairoTableCell = _sfc_main$6;
      const _component_BaseAvatar = _sfc_main$7;
      const _component_BaseTag = _sfc_main$8;
      const _component_BaseHeading = _sfc_main$w;
      const _component_AddonApexcharts = _sfc_main$9;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseButton = _sfc_main$e;
      const _component_DemoPendingTickets = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="xs:divide-y divide-muted-200 dark:divide-muted-700 flex w-full flex-col items-center sm:flex-row sm:divide-x rtl:divide-x-reverse"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:users-duotone",
              class: "text-primary-500 mx-auto size-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 162 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}> \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F </p></div></div><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:coins-duotone",
              class: "text-primary-500 mx-auto size-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> \u06F8,\u06F5\u06F7\u06F9 \u062A\u0648\u0645\u0627\u0646 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}> \u062F\u0631\u0622\u0645\u062F \u0631\u0648\u0632\u0627\u0646\u0647 </p></div></div><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:briefcase-duotone",
              class: "text-primary-500 mx-auto size-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 192 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}> \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647 </p></div></div><div class="flex-1"${_scopeId}><div class="flex flex-col p-4 text-center sm:py-0"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:ticket-duotone",
              class: "text-primary-500 mx-auto size-8"
            }, null, _parent2, _scopeId));
            _push2(`<h4 class="text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold"${_scopeId}> 32 </h4><p class="text-muted-400 font-sans text-sm"${_scopeId}> \u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0641\u0639\u0627\u0644 </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "xs:divide-y divide-muted-200 dark:divide-muted-700 flex w-full flex-col items-center sm:flex-row sm:divide-x rtl:divide-x-reverse" }, [
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:users-duotone",
                      class: "text-primary-500 mx-auto size-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 162 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062C\u062F\u06CC\u062F ")
                  ])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:coins-duotone",
                      class: "text-primary-500 mx-auto size-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " \u06F8,\u06F5\u06F7\u06F9 \u062A\u0648\u0645\u0627\u0646 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u062F\u0631\u0622\u0645\u062F \u0631\u0648\u0632\u0627\u0646\u0647 ")
                  ])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:briefcase-duotone",
                      class: "text-primary-500 mx-auto size-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 192 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062A\u06A9\u0645\u06CC\u0644\u200C\u0634\u062F\u0647 ")
                  ])
                ]),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "flex flex-col p-4 text-center sm:py-0" }, [
                    createVNode(_component_Icon, {
                      name: "ph:ticket-duotone",
                      class: "text-primary-500 mx-auto size-8"
                    }),
                    createVNode("h4", { class: "text-muted-800 dark:text-muted-100 font-sans text-xl font-semibold" }, " 32 "),
                    createVNode("p", { class: "text-muted-400 font-sans text-sm" }, " \u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0641\u0639\u0627\u0644 ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-12 gap-6"><div class="ptablet:col-span-6 col-span-12 sm:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "h-full p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoCompanyOverview, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoCompanyOverview)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoChartAreaStats, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoChartAreaStats)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-12 col-span-12 sm:col-span-4">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative h-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DemoChartBarSocialChannels, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DemoChartBarSocialChannels)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_TairoTable, { rounded: "sm" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoTableHeading, {
              uppercase: "",
              class: "px-4 py-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseCheckbox, {
                    "model-value": unref(isAllVisibleSelected),
                    indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                    name: "table-1-main",
                    rounded: "sm",
                    color: "primary",
                    onClick: toggleAllVisibleSelection
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_BaseCheckbox, {
                        "model-value": unref(isAllVisibleSelected),
                        indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                        name: "table-1-main",
                        rounded: "sm",
                        color: "primary",
                        onClick: toggleAllVisibleSelection
                      }, null, 8, ["model-value", "indeterminate"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0647\u0645\u06A9\u0627\u0631 `);
                } else {
                  return [
                    createTextVNode(" \u0647\u0645\u06A9\u0627\u0631 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u062A\u062E\u0635\u0635 `);
                } else {
                  return [
                    createTextVNode(" \u062A\u062E\u0635\u0635 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0646\u0631\u062E `);
                } else {
                  return [
                    createTextVNode(" \u0646\u0631\u062E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, { uppercase: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u0636\u0639\u06CC\u062A `);
                } else {
                  return [
                    createTextVNode(" \u0648\u0636\u0639\u06CC\u062A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoTableHeading, {
              uppercase: "",
              class: "px-4 py-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="sr-only"${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647</span>`);
                } else {
                  return [
                    createVNode("span", { class: "sr-only" }, "\u0645\u0634\u0627\u0647\u062F\u0647")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoTableHeading, {
                uppercase: "",
                class: "px-4 py-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_BaseCheckbox, {
                      "model-value": unref(isAllVisibleSelected),
                      indeterminate: unref(selected).length > 0 && !unref(isAllVisibleSelected),
                      name: "table-1-main",
                      rounded: "sm",
                      color: "primary",
                      onClick: toggleAllVisibleSelection
                    }, null, 8, ["model-value", "indeterminate"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0647\u0645\u06A9\u0627\u0631 ")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode(" \u062A\u062E\u0635\u0635 ")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0646\u0631\u062E ")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, { uppercase: "" }, {
                default: withCtx(() => [
                  createTextVNode(" \u0648\u0636\u0639\u06CC\u062A ")
                ]),
                _: 1
              }),
              createVNode(_component_TairoTableHeading, {
                uppercase: "",
                class: "px-4 py-6"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "sr-only" }, "\u0645\u0634\u0627\u0647\u062F\u0647")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(team), (member) => {
              _push2(ssrRenderComponent(_component_TairoTableRow, {
                key: member.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TairoTableCell, { class: "p-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: member.id,
                            name: member.id,
                            rounded: "sm",
                            color: "primary"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseCheckbox, {
                                modelValue: unref(selected),
                                "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                                value: member.id,
                                name: member.id,
                                rounded: "sm",
                                color: "primary"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_BaseAvatar, {
                            src: member.src,
                            size: "sm"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="ms-3 leading-none"${_scopeId3}><h4 class="font-heading text-sm font-semibold"${_scopeId3}>${ssrInterpolate(member.name)}</h4><p class="text-muted-400 font-sans text-xs"${_scopeId3}>${ssrInterpolate(member.role)}</p></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_BaseAvatar, {
                                src: member.src,
                                size: "sm"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "ms-3 leading-none" }, [
                                createVNode("h4", { class: "font-heading text-sm font-semibold" }, toDisplayString(member.name), 1),
                                createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, { light: "" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(member.expertise)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(member.expertise), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(member.rate)} \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(member.rate) + " \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (member.status === "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "success",
                              variant: "pastel",
                              rounded: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (member.status === "\u062C\u062F\u06CC\u062F") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "info",
                              variant: "pastel",
                              rounded: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else if (member.status === "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647") {
                            _push4(ssrRenderComponent(_component_BaseTag, {
                              color: "warning",
                              variant: "pastel",
                              rounded: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(member.status)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(member.status), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            member.status === "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 0,
                              color: "success",
                              variant: "pastel",
                              rounded: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : member.status === "\u062C\u062F\u06CC\u062F" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 1,
                              color: "info",
                              variant: "pastel",
                              rounded: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : member.status === "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647" ? (openBlock(), createBlock(_component_BaseTag, {
                              key: 2,
                              color: "warning",
                              variant: "pastel",
                              rounded: "full",
                              class: "font-medium"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(member.status), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_TairoTableCell, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="#" class="text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"${_scopeId3}> \u0645\u0634\u0627\u0647\u062F\u0647 </a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: "text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"
                            }, " \u0645\u0634\u0627\u0647\u062F\u0647 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_TairoTableCell, { class: "p-4" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseCheckbox, {
                              modelValue: unref(selected),
                              "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                              value: member.id,
                              name: member.id,
                              rounded: "sm",
                              color: "primary"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_BaseAvatar, {
                              src: member.src,
                              size: "sm"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "ms-3 leading-none" }, [
                              createVNode("h4", { class: "font-heading text-sm font-semibold" }, toDisplayString(member.name), 1),
                              createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, { light: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(member.expertise), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(member.rate) + " \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC", 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          member.status === "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 0,
                            color: "success",
                            variant: "pastel",
                            rounded: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : member.status === "\u062C\u062F\u06CC\u062F" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 1,
                            color: "info",
                            variant: "pastel",
                            rounded: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : member.status === "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647" ? (openBlock(), createBlock(_component_BaseTag, {
                            key: 2,
                            color: "warning",
                            variant: "pastel",
                            rounded: "full",
                            class: "font-medium"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(member.status), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_TairoTableCell, null, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "#",
                            class: "text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"
                          }, " \u0645\u0634\u0627\u0647\u062F\u0647 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(team), (member) => {
                return openBlock(), createBlock(_component_TairoTableRow, {
                  key: member.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_TairoTableCell, { class: "p-4" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseCheckbox, {
                            modelValue: unref(selected),
                            "onUpdate:modelValue": ($event) => isRef(selected) ? selected.value = $event : null,
                            value: member.id,
                            name: member.id,
                            rounded: "sm",
                            color: "primary"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "name"])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_BaseAvatar, {
                            src: member.src,
                            size: "sm"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "ms-3 leading-none" }, [
                            createVNode("h4", { class: "font-heading text-sm font-semibold" }, toDisplayString(member.name), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(member.role), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, { light: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(member.expertise), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(member.rate) + " \u062A\u0648\u0645\u0627\u0646 / \u0633\u0627\u0639\u062A\u06CC", 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        member.status === "\u062F\u0631 \u062F\u0633\u062A\u0631\u0633" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 0,
                          color: "success",
                          variant: "pastel",
                          rounded: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : member.status === "\u062C\u062F\u06CC\u062F" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 1,
                          color: "info",
                          variant: "pastel",
                          rounded: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : member.status === "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0634\u062F\u0647" ? (openBlock(), createBlock(_component_BaseTag, {
                          key: 2,
                          color: "warning",
                          variant: "pastel",
                          rounded: "full",
                          class: "font-medium"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(member.status), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_TairoTableCell, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "#",
                          class: "text-violet-500 transition-opacity duration-300 hover:opacity-75 dark:text-violet-400"
                        }, " \u0645\u0634\u0627\u0647\u062F\u0647 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="py-16"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, _parent2, _scopeId));
            _push2(`</div><div class="mt-auto text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-muted-400"${_scopeId2}> \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. </span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-muted-400" }, " \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u062E\u0635\u06CC")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "py-16" }, [
                createVNode(_component_AddonApexcharts, mergeProps(unref(gaugePersonal), { class: "-mt-14" }), null, 16)
              ]),
              createVNode("div", { class: "mt-auto text-center" }, [
                createVNode(_component_BaseParagraph, { size: "sm" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-400" }, " \u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u0639\u06CC\u0627\u0631\u0647\u0627 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:col-span-6 col-span-12 sm:col-span-6">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "relative p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0633\u0648\u062F</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0633\u0648\u062F")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AddonApexcharts, mergeProps(unref(barSalesProfit), { class: "ltr:-ms-4 rtl:-me-4" }), null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-6" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0633\u0648\u062F")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_AddonApexcharts, mergeProps(unref(barSalesProfit), { class: "ltr:-ms-4 rtl:-me-4" }), null, 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ptablet:hidden col-span-12 sm:col-span-3">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "flex h-full flex-col p-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Calendar), {
              attributes: [
                {
                  key: "today",
                  highlight: true,
                  order: 0,
                  dates: [/* @__PURE__ */ new Date()]
                }
              ],
              locale: "fa",
              "title-position": "right",
              expanded: "",
              borderless: "",
              transparent: "",
              "trim-weeks": "",
              class: "max-w-full rounded-md"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Calendar), {
                attributes: [
                  {
                    key: "today",
                    highlight: true,
                    order: 0,
                    dates: [/* @__PURE__ */ new Date()]
                  }
                ],
                locale: "fa",
                "title-position": "right",
                expanded: "",
                borderless: "",
                transparent: "",
                "trim-weeks": "",
                class: "max-w-full rounded-md"
              }, null, 8, ["attributes"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12">`);
      _push(ssrRenderComponent(_component_BaseCard, { class: "p-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-10 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h3",
              size: "md",
              weight: "semibold",
              lead: "tight",
              class: "text-muted-800 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u0639\u0644\u0642</span>`);
                } else {
                  return [
                    createVNode("span", null, "\u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u0639\u0644\u0642")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              size: "sm",
              variant: "pastel",
              rounded: "md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DemoPendingTickets, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-10 flex items-center justify-between" }, [
                createVNode(_component_BaseHeading, {
                  as: "h3",
                  size: "md",
                  weight: "semibold",
                  lead: "tight",
                  class: "text-muted-800 dark:text-white"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u0628\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u0639\u0644\u0642")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  size: "sm",
                  variant: "pastel",
                  rounded: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DemoPendingTickets)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
