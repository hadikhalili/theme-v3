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
  __name: "DemoSubsidebarLayouts",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      {
        name: "\u0644\u06CC\u0633\u062A\u200C\u0647\u0627",
        children: [
          {
            name: "\u0646\u0645\u0627\u06CC \u0644\u06CC\u0633\u062A V1",
            icon: "ph:list-bullets",
            to: "/layouts",
            exact: true
          },
          {
            name: "\u0646\u0645\u0627\u06CC \u0644\u06CC\u0633\u062A V2",
            icon: "ph:list-bullets",
            to: "/layouts/list-view-2"
          },
          {
            name: "\u0646\u0645\u0627\u06CC \u0644\u06CC\u0633\u062A V3",
            icon: "ph:list-bullets",
            to: "/layouts/list-view-3"
          },
          {
            name: "\u0646\u0645\u0627\u06CC \u0644\u06CC\u0633\u062A V4",
            icon: "ph:list-bullets",
            to: "/layouts/list-view-4"
          }
        ]
      },
      {
        name: "\u0644\u06CC\u0633\u062A\u200C\u0647\u0627\u06CC \u0641\u0644\u06A9\u0633\u06CC",
        children: [
          {
            name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633\u06CC V1",
            icon: "ph:list-checks",
            to: "/layouts/flex-list-1"
          },
          {
            name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633\u06CC V2",
            icon: "ph:list-checks",
            to: "/layouts/flex-list-2"
          },
          {
            name: "\u0644\u06CC\u0633\u062A \u0641\u0644\u06A9\u0633\u06CC V3",
            icon: "ph:list-checks",
            to: "/layouts/flex-list-3"
          }
        ]
      },
      {
        name: "\u0644\u06CC\u0633\u062A\u200C\u0647\u0627\u06CC \u062C\u062F\u0648\u0644",
        children: [
          {
            name: "\u0644\u06CC\u0633\u062A \u062C\u062F\u0648\u0644\u06CC V1",
            icon: "ph:table-duotone",
            to: "/layouts/table-list-1"
          },
          {
            name: "\u0644\u06CC\u0633\u062A \u062C\u062F\u0648\u0644\u06CC V2",
            icon: "ph:table-duotone",
            to: "/layouts/table-list-2"
          },
          {
            name: "\u0644\u06CC\u0633\u062A \u062C\u062F\u0648\u0644\u06CC V3",
            icon: "ph:table-duotone",
            to: "/layouts/table-list-3"
          }
        ]
      },
      {
        name: "\u0686\u06CC\u062F\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0641\u0631\u0645",
        children: [
          {
            name: "\u0634\u0631\u06A9\u062A",
            icon: "ph:article-duotone",
            to: "/layouts/form-1"
          },
          {
            name: "\u062F\u06A9\u062A\u0631",
            icon: "ph:article-duotone",
            to: "/layouts/form-2"
          },
          {
            name: "\u062A\u0633\u0648\u06CC\u0647 \u062D\u0633\u0627\u0628",
            icon: "ph:article-duotone",
            to: "/layouts/form-3"
          },
          {
            name: "\u0631\u0648\u06CC\u062F\u0627\u062F",
            icon: "ph:article-duotone",
            to: "/layouts/form-4"
          },
          {
            name: "\u062A\u0648\u0644\u06CC\u062F\u06A9\u0646\u0646\u062F\u0647 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
            icon: "ph:article-duotone",
            to: "/layouts/form-5"
          },
          {
            name: "\u062C\u0644\u0633\u0647",
            icon: "ph:article-duotone",
            to: "/layouts/form-6"
          },
          {
            name: "\u062A\u0645\u0627\u0633",
            icon: "ph:article-duotone",
            to: "/layouts/contacts/create"
          },
          {
            name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0627\u0631\u0628\u0631",
            icon: "ph:article-duotone",
            to: "/layouts/user-edit"
          },
          {
            name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0634\u0631\u06A9\u062A",
            icon: "ph:article-duotone",
            to: "/layouts/company-edit"
          }
        ]
      },
      {
        name: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u0645\u06A9\u0627\u0646\u06CC",
        children: [
          {
            name: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u06A9\u0627\u0646\u06CC V1",
            icon: "ph:timer-duotone",
            to: "/layouts/placeload-1"
          },
          {
            name: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u06A9\u0627\u0646\u06CC V2",
            icon: "ph:timer-duotone",
            to: "/layouts/placeload-2"
          },
          {
            name: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u06A9\u0627\u0646\u06CC V3",
            icon: "ph:timer-duotone",
            to: "/layouts/placeload-3"
          },
          {
            name: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u06A9\u0627\u0646\u06CC V4",
            icon: "ph:timer-duotone",
            to: "/layouts/placeload-4"
          }
        ]
      },
      {
        name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627",
        children: [
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 V1",
            icon: "ph:circles-four-duotone",
            to: "/layouts/card-grid-1"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 V2",
            icon: "ph:circles-four-duotone",
            to: "/layouts/card-grid-2"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 V3",
            icon: "ph:circles-four-duotone",
            to: "/layouts/card-grid-3"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627 V4",
            icon: "ph:circles-four-duotone",
            to: "/layouts/card-grid-4"
          }
        ]
      },
      {
        name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0634\u06CC\u200C\u0647\u0627",
        children: [
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0634\u06CC V1",
            icon: "ph:selection-foreground-duotone",
            to: "/layouts/tile-grid-1"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0634\u06CC V2",
            icon: "ph:selection-foreground-duotone",
            to: "/layouts/tile-grid-2"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0634\u06CC V3",
            icon: "ph:selection-foreground-duotone",
            to: "/layouts/tile-grid-3"
          }
        ]
      },
      {
        name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646",
        children: [
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 V1",
            icon: "ph:users-three-duotone",
            to: "/layouts/user-grid-1"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 V2",
            icon: "ph:users-three-duotone",
            to: "/layouts/user-grid-2"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 V3",
            icon: "ph:users-three-duotone",
            to: "/layouts/user-grid-3"
          },
          {
            name: "\u0634\u0628\u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 V4",
            icon: "ph:users-three-duotone",
            to: "/layouts/user-grid-4"
          }
        ]
      },
      {
        divider: true
      },
      {
        name: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u06CC",
        children: [
          {
            name: "\u0644\u06CC\u0633\u062A \u062D\u0633\u0627\u0628\u200C\u0647\u0627",
            icon: "ph:gradient-duotone",
            to: "/layouts/accounts",
            exact: true
          },
          {
            name: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0644\u06CC\u0646\u06A9\u200C\u0634\u062F\u0647",
            icon: "ph:link-simple-horizontal-duotone",
            to: "/layouts/accounts/linked",
            exact: true
          },
          {
            name: "\u0642\u0648\u0627\u0646\u06CC\u0646 \u062D\u0633\u0627\u0628",
            icon: "ph:gavel-duotone",
            to: "/layouts/accounts/rules",
            exact: true
          },
          {
            name: "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627",
            icon: "ph:diamonds-four-duotone",
            to: "/layouts/transactions",
            exact: true
          },
          {
            name: "\u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u06CC",
            icon: "ph:credit-card-duotone",
            to: "/layouts/cards",
            exact: true
          },
          {
            name: "\u0627\u06CC\u062C\u0627\u062F \u06A9\u0627\u0631\u062A",
            icon: "ph:credit-card-duotone",
            to: "/layouts/card/new",
            exact: true
          },
          {
            name: "\u0627\u0639\u0636\u0627",
            icon: "ph:users-duotone",
            to: "/layouts/members",
            exact: false
          },
          {
            name: "\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC\u200C\u0647\u0627",
            icon: "ph:recycle-duotone",
            to: "/layouts/invest",
            exact: true
          },
          {
            name: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0639\u062A\u0628\u0627\u0631",
            icon: "ph:folder-simple-dashed-duotone",
            to: "/layouts/credit",
            exact: true
          },
          {
            name: "\u0627\u0645\u0646\u06CC\u062A \u0645\u062E\u0632\u0646",
            icon: "ph:shield-check-duotone",
            to: "/layouts/vault",
            exact: true
          }
        ]
      },
      {
        name: "\u067E\u0631\u062F\u0627\u062E\u062A\u200C\u0647\u0627",
        children: [
          {
            name: "\u062E\u0631\u0648\u062C\u06CC",
            icon: "ph:arrow-right",
            to: "/layouts/payments",
            exact: true
          },
          {
            name: "\u0648\u0631\u0648\u062F\u06CC",
            icon: "ph:arrow-left",
            to: "/layouts/payments/incoming",
            exact: true
          },
          {
            name: "\u06AF\u06CC\u0631\u0646\u062F\u06AF\u0627\u0646",
            icon: "ph:users-duotone",
            to: "/layouts/payments/recipients",
            exact: true
          },
          {
            name: "\u0627\u0631\u0633\u0627\u0644 \u067E\u0631\u062F\u0627\u062E\u062A",
            icon: "ph:paper-plane-right-duotone",
            to: "/layouts/send",
            exact: true
          },
          {
            name: "\u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u0631\u062F\u0627\u062E\u062A",
            icon: "ph:receipt-duotone",
            to: "/layouts/receive",
            exact: true
          }
        ]
      },
      {
        name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627",
        children: [
          {
            name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647 \u06F1",
            icon: "ph:leaf-duotone",
            to: "/layouts/projects",
            exact: true
          },
          {
            name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647 \u06F2",
            icon: "ph:leaf-duotone",
            to: "/layouts/projects/project-list-2"
          },
          {
            name: "\u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627 \u0646\u0633\u062E\u0647 \u06F3",
            icon: "ph:leaf-duotone",
            to: "/layouts/projects/project-list-3"
          },
          {
            name: "\u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u0648\u0698\u0647",
            icon: "ph:note-duotone",
            to: "/layouts/projects/details"
          },
          {
            name: "\u062A\u062E\u062A\u0647 \u06A9\u0627\u0646\u0628\u0627\u0646",
            icon: "ph:squares-four-duotone",
            to: "/layouts/projects/board"
          },
          {
            name: "\u062F\u0639\u0648\u062A",
            icon: "ph:user-plus-duotone",
            to: "/layouts/invite"
          }
        ]
      },
      {
        name: "\u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A",
        children: [
          {
            name: "\u0648\u0631\u0648\u062F",
            icon: "ph:lock-duotone",
            to: "/auth",
            exact: true
          },
          {
            name: "\u0648\u0631\u0648\u062F \u0646\u0633\u062E\u0647 \u06F1",
            icon: "ph:lock-duotone",
            to: "/auth/login-1"
          },
          {
            name: "\u0648\u0631\u0648\u062F \u0646\u0633\u062E\u0647 \u06F2",
            icon: "ph:lock-duotone",
            to: "/auth/login-2"
          },
          {
            name: "\u0648\u0631\u0648\u062F \u0646\u0633\u062E\u0647 \u06F3",
            icon: "ph:lock-duotone",
            to: "/auth/login-3"
          },
          {
            name: "\u062B\u0628\u062A\u200C\u0646\u0627\u0645 V1",
            icon: "ph:magic-wand-duotone",
            to: "/auth/signup-1"
          },
          {
            name: "\u062B\u0628\u062A\u200C\u0646\u0627\u0645 V2",
            icon: "ph:magic-wand-duotone",
            to: "/auth/signup-2"
          },
          {
            name: "\u062B\u0628\u062A\u200C\u0646\u0627\u0645 V3",
            icon: "ph:magic-wand-duotone",
            to: "/auth/signup-3"
          },
          {
            name: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u061F",
            icon: "ph:fingerprint-duotone",
            to: "/auth/recover"
          }
        ]
      },
      {
        name: "\u0632\u06CC\u0631\u0635\u0641\u062D\u0627\u062A",
        children: [
          {
            name: "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
            icon: "ph:lock-duotone",
            to: "/layouts/profile",
            exact: true
          },
          {
            name: "\u0645\u0646\u0648\u0647\u0627\u06CC \u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
            icon: "ph:subtract-square-duotone",
            to: "/layouts/profile-settings"
          },
          {
            name: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
            icon: "ph:pencil-duotone",
            to: "/layouts/profile-edit"
          },
          {
            name: "\u06A9\u0627\u0631\u0628\u0631",
            icon: "ph:user-duotone",
            to: "/layouts/user"
          },
          {
            name: "\u0634\u0631\u06A9\u062A",
            icon: "ph:buildings-duotone",
            to: "/layouts/company"
          },
          {
            name: "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627",
            icon: "ph:notification-duotone",
            to: "/layouts/profile-notifications"
          },
          {
            name: "\u0646\u062A\u0627\u06CC\u062C \u062C\u0633\u062A\u062C\u0648",
            icon: "ph:magnifying-glass-duotone",
            to: "/layouts/search-results"
          },
          {
            name: "\u062C\u0633\u062A\u062C\u0648\u06CC \u062E\u0627\u0644\u06CC",
            icon: "ph:magnifying-glass-duotone",
            to: "/layouts/search-empty"
          },
          {
            name: "\u0635\u0648\u0631\u062A\u200C\u062D\u0633\u0627\u0628 SaaS",
            icon: "ph:credit-card-duotone",
            to: "/layouts/utility-billing"
          },
          {
            name: "\u0635\u0641\u062D\u0647 \u0627\u0642\u062F\u0627\u0645 \u0646\u0633\u062E\u0647 \u06F1",
            icon: "ph:lightning-duotone",
            to: "/layouts/utility-action-1"
          },
          {
            name: "\u0635\u0641\u062D\u0647 \u0627\u0642\u062F\u0627\u0645 \u0646\u0633\u062E\u0647 \u06F2",
            icon: "ph:lightning-duotone",
            to: "/layouts/utility-action-2"
          },
          {
            name: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A",
            icon: "ph:gear-six-duotone",
            to: "/layouts/settings"
          }
        ]
      },
      {
        name: "\u06A9\u0627\u0631\u0628\u0631\u062F\u06CC",
        children: [
          {
            name: "\u0645\u062F\u0627\u0631\u06A9",
            icon: "ph:sticker-duotone",
            to: "/layouts/documents"
          },
          {
            name: "\u062F\u0627\u0646\u0644\u0648\u062F\u0647\u0627",
            icon: "ph:download-duotone",
            to: "/layouts/downloads"
          },
          {
            name: "\u06CC\u06A9\u067E\u0627\u0631\u0686\u06AF\u06CC\u200C\u0647\u0627",
            icon: "ph:rocket-duotone",
            to: "/layouts/integrations"
          },
          {
            name: "\u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A",
            icon: "ph:gift-duotone",
            to: "/layouts/offers"
          },
          {
            name: "\u062A\u0627\u06CC\u06CC\u062F \u062D\u0633\u0627\u0628",
            icon: "ph:square-logo-duotone",
            to: "/layouts/utility-confirm"
          },
          {
            name: "\u0627\u0631\u062A\u0642\u0627\u0621",
            icon: "ph:circle-wavy-check-duotone",
            to: "/layouts/utility-promotion"
          },
          {
            name: "\u0641\u0627\u06A9\u062A\u0648\u0631 v1",
            icon: "ph:note-duotone",
            to: "/layouts/utility-invoice",
            exact: true
          },
          {
            name: "\u0641\u0627\u06A9\u062A\u0648\u0631 v2",
            icon: "ph:note-duotone",
            to: "/layouts/utility-invoice-2",
            exact: true
          },
          {
            name: "\u0648\u0636\u0639\u06CC\u062A \u0633\u0631\u0648\u06CC\u0633",
            icon: "ph:notification-duotone",
            to: "/layouts/utility-status"
          },
          {
            name: "\u062E\u0637\u0627\u06CC \u0633\u06CC\u0633\u062A\u0645",
            icon: "ph:skull-duotone",
            to: "/layouts/utility-error"
          }
        ]
      },
      {
        name: "\u0645\u0642\u062F\u0645\u0627\u062A \u0648\u0631\u0648\u062F",
        children: [
          {
            name: "\u062F\u0648 \u0639\u0627\u0645\u0644\u06CC",
            icon: "ph:fingerprint-duotone",
            to: "/layouts/onboarding-1"
          },
          {
            name: "\u0628\u0631\u062F\u06CC\u0646\u06AF \u0628\u0631\u0646\u0627\u0645\u0647",
            icon: "ph:coins-duotone",
            to: "/layouts/onboarding-2"
          },
          {
            name: "\u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0642\u0634",
            icon: "ph:suitcase-duotone",
            to: "/layouts/onboarding-3"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/DemoSubsidebarLayouts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
