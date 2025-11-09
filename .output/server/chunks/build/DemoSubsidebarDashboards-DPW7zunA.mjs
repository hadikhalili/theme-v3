import { _ as __nuxt_component_0, a as _sfc_main$1 } from './TairoSubsidebarHeader-Vu6gC199.mjs';
import { _ as _sfc_main$2 } from './TairoSubsidebarMenu-dqGjyJpT.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
  __name: "DemoSubsidebarDashboards",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      {
        name: "\u0634\u062E\u0635\u06CC",
        children: [
          {
            name: "\u0634\u062E\u0635\u06CC V1",
            icon: "ph:coffee-duotone",
            to: "/dashboards",
            exact: true
          },
          {
            name: "\u0634\u062E\u0635\u06CC V2",
            icon: "ph:chart-pie-slice-duotone",
            to: "/dashboards/personal-2"
          },
          {
            name: "\u0634\u062E\u0635\u06CC V3",
            icon: "ph:cactus-duotone",
            to: "/dashboards/personal-3"
          },
          {
            name: "\u0645\u0648\u062C\u0648\u062F\u06CC \u0634\u062E\u0635\u06CC",
            icon: "ph:money-duotone",
            to: "/dashboards/balance"
          }
        ]
      },
      {
        name: "\u0645\u0627\u0644\u06CC",
        children: [
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062A\u062D\u0644\u06CC\u0644\u06CC",
            icon: "ph:gauge-duotone",
            to: "/dashboards/analytics"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u06A9\u0644\u06CC",
            icon: "ph:projector-screen-chart-duotone",
            to: "/dashboards/overview"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0645\u0634\u0627\u0647\u062F\u0647 \u0633\u0631\u06CC\u0639",
            icon: "ph:app-window-duotone",
            to: "/dashboards/quickview"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0633\u0647\u0627\u0645",
            icon: "ph:coin-duotone",
            to: "/dashboards/stocks"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC",
            icon: "ph:read-cv-logo-duotone",
            to: "/dashboards/trading"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0641\u0631\u0648\u0634",
            icon: "ph:shopping-cart-duotone",
            to: "/dashboards/sales"
          }
        ]
      },
      {
        name: "\u0628\u0627\u0646\u06A9\u062F\u0627\u0631\u06CC",
        children: [
          {
            name: "\u0628\u0627\u0646\u06A9\u06CC \u0646\u0633\u062E\u0647 \u06F1",
            icon: "ph:bank-duotone",
            to: "/dashboards/banking-1"
          },
          {
            name: "\u0628\u0627\u0646\u06A9\u06CC \u0646\u0633\u062E\u0647 \u06F2",
            icon: "ph:bank-duotone",
            to: "/dashboards/banking-2"
          },
          {
            name: "\u0628\u0627\u0646\u06A9\u06CC \u0646\u0633\u062E\u0647 \u06F3",
            icon: "ph:bank-duotone",
            to: "/dashboards/banking-3"
          },
          {
            name: "\u0628\u0627\u0646\u06A9\u06CC \u0646\u0633\u062E\u0647 \u06F4",
            icon: "ph:bank-duotone",
            to: "/dashboards/banking-4"
          },
          {
            name: "\u0628\u0627\u0646\u06A9\u06CC \u0646\u0633\u062E\u0647 \u06F5",
            icon: "ph:bank-duotone",
            to: "/dashboards/banking-5"
          }
        ]
      },
      {
        name: "\u06A9\u0633\u0628\u200C\u0648\u06A9\u0627\u0631",
        children: [
          {
            name: "\u0631\u0632\u0631\u0648 \u067E\u0631\u0648\u0627\u0632",
            icon: "ph:airplane-duotone",
            to: "/dashboards/flights"
          },
          {
            name: "\u0647\u06CC\u0626\u062A \u0634\u0631\u06A9\u062A",
            icon: "ph:buildings-duotone",
            to: "/dashboards/company"
          },
          {
            name: "\u0647\u06CC\u0626\u062A \u0645\u0646\u0627\u0628\u0639 \u0627\u0646\u0633\u0627\u0646\u06CC",
            icon: "ph:users-four-duotone",
            to: "/dashboards/human-resources"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u062F\u0648\u0631\u0647",
            icon: "ph:graduation-cap-duotone",
            to: "/dashboards/course"
          },
          {
            name: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F \u0645\u0634\u0627\u063A\u0644",
            icon: "ph:briefcase-duotone",
            to: "/dashboards/jobs"
          }
        ]
      },
      {
        name: "\u0633\u0628\u06A9 \u0632\u0646\u062F\u06AF\u06CC",
        children: [
          {
            name: "\u0627\u06CC\u0646\u0641\u0644\u0648\u0626\u0646\u0633\u0631",
            icon: "ph:crown-duotone",
            to: "/dashboards/influencer"
          },
          {
            name: "\u0633\u0631\u06AF\u0631\u0645\u06CC\u200C\u0647\u0627",
            icon: "ph:confetti-duotone",
            to: "/dashboards/hobbies"
          },
          {
            name: "\u0633\u0644\u0627\u0645\u062A\u06CC",
            icon: "ph:pill-duotone",
            to: "/dashboards/health"
          },
          {
            name: "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647",
            icon: "ph:pen-nib-duotone",
            to: "/dashboards/writer"
          },
          {
            name: "\u0648\u06CC\u062F\u0626\u0648",
            icon: "ph:video-camera-duotone",
            to: "/dashboards/video"
          },
          {
            name: "\u0641\u0648\u062A\u0628\u0627\u0644",
            icon: "ph:soccer-ball-duotone",
            to: "/dashboards/soccer"
          }
        ]
      },
      {
        name: "\u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9",
        children: [
          {
            name: "\u062A\u062C\u0627\u0631\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9",
            icon: "ph:storefront-duotone",
            to: "/dashboards/ecommerce"
          }
        ]
      },
      {
        name: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u200C\u0647\u0627",
        children: [
          {
            name: "\u062A\u0642\u0648\u06CC\u0645",
            icon: "ph:calendar-blank-duotone",
            to: "/dashboards/calendar"
          },
          {
            name: "\u062A\u062D\u0648\u06CC\u0644 \u063A\u0630\u0627",
            icon: "ph:cookie-duotone",
            to: "/dashboards/delivery"
          },
          {
            name: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647 \u06F1",
            icon: "ph:map-pin-duotone",
            to: "/dashboards/map-left"
          },
          {
            name: "\u0646\u0642\u0634\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647 \u06F2",
            icon: "ph:map-pin-duotone",
            to: "/dashboards/map-right"
          },
          {
            name: "\u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC",
            icon: "ph:envelope-duotone",
            to: "/dashboards/inbox"
          },
          {
            name: "\u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC \u0646\u0633\u062E\u0647 \u06F1",
            icon: "ph:chat-circle-duotone",
            to: "/dashboards/messaging"
          },
          {
            name: "\u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC \u0646\u0633\u062E\u0647 \u06F2",
            icon: "ph:chat-teardrop-duotone",
            to: "/dashboards/messaging-2"
          }
        ]
      },
      {
        divider: true
      },
      {
        name: "\u0648\u06CC\u0632\u0627\u0631\u062F",
        to: "/wizard"
      },
      {
        divider: true
      },
      {
        name: "\u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627",
        children: [
          {
            name: "\u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627\u06CC Apex",
            icon: "ph:chart-pie-slice-duotone",
            to: "/dashboards/charts"
          }
        ]
      },
      {
        name: "\u0648\u06CC\u062C\u062A\u200C\u0647\u0627",
        children: [
          {
            name: "\u0648\u06CC\u062C\u062A\u200C\u0647\u0627\u06CC UI",
            icon: "ph:square-half-duotone",
            to: "/dashboards/widgets",
            exact: true
          },
          {
            name: "\u0648\u06CC\u062C\u062A\u200C\u0647\u0627\u06CC \u062E\u0644\u0627\u0642\u0627\u0646\u0647",
            icon: "ph:square-half-bottom-duotone",
            to: "/dashboards/widgets/creative"
          },
          {
            name: "\u0644\u06CC\u0633\u062A \u0648\u06CC\u062C\u062A\u200C\u0647\u0627",
            icon: "ph:square-half-duotone",
            to: "/dashboards/widgets/list"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSubsidebar = __nuxt_component_0;
      const _component_TairoSubsidebarHeader = _sfc_main$1;
      const _component_TairoSubsidebarMenu = _sfc_main$2;
      _push(ssrRenderComponent(_component_TairoSubsidebar, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoSubsidebarHeader, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoSubsidebarHeader)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoSubsidebarMenu, { navigation }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoSubsidebarMenu, { navigation })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoSubsidebarDashboards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
