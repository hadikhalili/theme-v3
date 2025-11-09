import { _ as __nuxt_component_0$3, v as __nuxt_component_0$1, d as _sfc_main$D, k as _sfc_main$x, e as _sfc_main$e, a as __nuxt_component_2, f as _sfc_main$C, w as __nuxt_component_0$2, b as _sfc_main$w, c as _sfc_main$v } from './server.mjs';
import _sfc_main$1 from './DemoAccountMenu-C3x7udSm.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, isRef, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './virtual_public-CbxAoqtm.mjs';
import './user-DDZJ47NJ.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "messaging-2",
  __ssrInlineRender: true,
  setup(__props) {
    const conversations = ref([
      {
        id: 1,
        user: {
          name: "\u06A9\u0627\u0644\u0628 \u0648\u06CC\u0644\u0633\u0648\u0646",
          photo: "/img/avatars/3.svg",
          role: "\u062A\u0645\u0627\u0633 \u0634\u062E\u0635\u06CC",
          bio: "\u06A9\u0627\u0644\u06CC\u0628 \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062A\u062D\u062A \u0647\u0645\u0627\u0646 \u062D\u0633\u0627\u0628 \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A.",
          age: 32,
          location: "\u0646\u06CC\u0648\u06CC\u0648\u0631\u06A9"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u0645\u0627\u0645\u0627\u0646\u060C \u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A\u0645 \u0628\u062F\u0627\u0646\u0645 \u0622\u06CC\u0627 \u0647\u0646\u0648\u0632 \u0622\u0646 \u0639\u06A9\u0633\u06CC \u06A9\u0647 \u0686\u0646\u062F \u0631\u0648\u0632 \u067E\u06CC\u0634 \u0628\u0631\u0627\u06CC\u0645 \u0641\u0631\u0633\u062A\u0627\u062F\u06CC \u0631\u0627 \u062F\u0627\u0631\u06CC\u061F \u0645\u0646 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0631\u062F\u0645 \u0627\u0632 \u0622\u0646 \u0628\u0631\u0627\u06CC \u067E\u0631\u0648\u0698\u0647\u200C\u0627\u06CC \u06A9\u0647 \u0631\u0648\u06CC \u0622\u0646 \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u0645.",
            time: "\u06F1\u06F0:\u06F0\u06F4 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0633\u0644\u0627\u0645 \u06A9\u0627\u0644\u06CC\u0628\u060C \u062D\u062A\u0645\u0627\u064B. \u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0645. \u0627\u06AF\u0631 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u06CC\u062F \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u0644\u06CC\u0646\u06A9 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0627 \u0646\u06CC\u0632 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u0645.",
            time: "\u06F1\u06F0:\u06F0\u06F9 \u0642.\u0638",
            attachments: [
              {
                type: "link",
                image: "/img/apps/5.png",
                url: "https://mizzle.eltheme.ir",
                text: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u0627\u0648\u0631\u062A\u0648"
              }
            ]
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0645\u0645\u0646\u0648\u0646 \u0627\u0632 \u0622\u0646. \u0627\u06CC\u0646 \u06A9\u0627\u0645\u0644\u0627\u064B \u0634\u06AF\u0641\u062A\u200C\u0627\u0646\u06AF\u06CC\u0632 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0627\u06AF\u0631 \u0628\u0647 \u0686\u06CC\u0632 \u062F\u06CC\u06AF\u0631\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0634\u062A\u0645\u060C \u0628\u0647 \u0634\u0645\u0627 \u0627\u0637\u0644\u0627\u0639 \u062E\u0648\u0627\u0647\u0645 \u062F\u0627\u062F.",
            time: "\u06F1:\u06F3\u06F9 \u0628.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u062A\u0642\u0631\u06CC\u0628\u0627\u064B \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0645\u060C \u0622\u0646 \u0634\u0631\u06A9\u062A \u062D\u0633\u0627\u0628\u062F\u0627\u0631\u06CC \u06A9\u0647 \u0631\u0648\u0632 \u062F\u06CC\u06AF\u0631 \u0627\u0634\u0627\u0631\u0647 \u06A9\u0631\u062F\u06CC\u062F \u0686\u0647 \u0628\u0648\u062F\u061F \u0645\u0646 \u0628\u0647 \u0637\u0631\u0627\u062D\u06CC \u0622\u0646\u200C\u0647\u0627 \u0639\u0644\u0627\u0642\u0647\u200C\u0645\u0646\u062F \u0634\u062F\u0645.",
            time: "\u06F1:\u06F4\u06F8 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0622\u0647 \u0628\u0644\u0647\u060C \u0622\u0646 \u0628\u0627\u0646\u06A9 Qonto \u0628\u0648\u062F. \u0622\u0646\u200C\u0647\u0627 \u0634\u0631\u06A9\u062A \u0639\u0627\u0644\u06CC \u0647\u0633\u062A\u0646\u062F. \u0645\u062F\u062A\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0628\u0627 \u0622\u0646\u200C\u0647\u0627 \u06A9\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645.",
            time: "\u06F2:\u06F0\u06F6 \u0628.\u0638",
            attachments: [
              {
                type: "link",
                image: "/img/apps/2.png",
                url: "https://nephos.ir",
                text: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0628\u0627\u0646\u06A9\u06CC"
              }
            ]
          },
          {
            type: "received",
            text: "\u0628\u0644\u0647\u060C \u0622\u0646\u200C\u0647\u0627 \u0647\u0633\u062A\u0646\u062F. \u0648\u0627\u0642\u0639\u0627\u064B \u0628\u0631\u0646\u062F\u06CC\u0646\u06AF \u0632\u06CC\u0628\u0627\u06CC\u06CC \u062F\u0627\u0631\u0646\u062F. \u0645\u0646 \u0628\u0631\u0631\u0633\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645. \u0645\u0645\u0646\u0648\u0646 \u0627\u0632\u0631\u0627\u0647\u0646\u0645\u0627\u06CC\u06CC!",
            time: "\u06F2:\u06F1\u06F6 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0647\u0645\u06CC\u0634\u0647 \u062E\u0648\u0634\u062D\u0627\u0644 \u0628\u0647 \u06A9\u0645\u06A9! \u0627\u06AF\u0631 \u0628\u0647 \u0686\u06CC\u0632 \u062F\u06CC\u06AF\u0631\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0634\u062A\u06CC\u062F\u060C \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F.",
            time: "\u06F2:\u06F2\u06F6 \u0628.\u0638",
            attachments: []
          }
        ]
      },
      {
        id: 2,
        user: {
          name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631",
          photo: "/img/avatars/16.svg",
          role: "\u0645\u0634\u0627\u0648\u0631 \u0628\u0627\u0646\u06A9\u06CC",
          bio: "\u0647\u0631\u0645\u0627\u0646 \u06CC\u06A9\u06CC \u0627\u0632 \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0628\u0627\u0646\u06A9\u06CC \u0645\u0627 \u0627\u0633\u062A. \u0647\u0631 \u0633\u0648\u0627\u0644\u06CC \u062F\u0627\u0631\u06CC\u062F \u0628\u067E\u0631\u0633\u06CC\u062F.",
          age: 28,
          location: "\u0628\u0631\u0644\u06CC\u0646"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u0648\u06CC\u0644\u0633\u0648\u0646\u060C \u0622\u06CC\u0627 \u0622\u0646 \u06AF\u0632\u0627\u0631\u0634 \u062D\u0633\u0627\u0628\u06CC \u06A9\u0647 \u0635\u0627\u062F\u0631 \u06A9\u0631\u062F\u06CC\u0645 \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F\u06CC\u062F\u061F \u0645\u0646 \u062A\u0627\u0632\u0647 \u0622\u0646 \u0631\u0627 \u062A\u0623\u06CC\u06CC\u062F \u06A9\u0631\u062F\u0645 \u0648\u0644\u06CC \u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A\u0645 \u0622\u0646 \u0631\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0646\u0634\u0627\u0646 \u062F\u0647\u0645\u060C \u0634\u0627\u06CC\u062F \u0646\u0638\u0631\u0627\u062A\u06CC \u0628\u0631\u0627\u06CC \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0634\u062A\u0646 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F.",
            time: "\u06F1\u06F1:\u06F0\u06F4 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0628\u0644\u0647\u060C \u06CC\u06A9 \u0646\u0633\u062E\u0647 \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0648\u0631\u0648\u062F\u06CC\u200C\u0627\u0645 \u062F\u0627\u0631\u0645 \u0627\u0645\u0627 \u0647\u0646\u0648\u0632 \u0646\u062A\u0648\u0627\u0646\u0633\u062A\u0647\u200C\u0627\u0645 \u0622\u0646 \u0631\u0627 \u0628\u062E\u0648\u0627\u0646\u0645 \u0648 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627\u06CC\u06CC \u0628\u0631\u062F\u0627\u0631\u0645.",
            time: "\u06F1\u06F1:\u06F0\u06F9 \u0642.\u0638",
            attachments: []
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0622\u06CC\u0627 \u0648\u0642\u062A \u062F\u0627\u0634\u062A\u06CC\u062F \u0622\u0646 \u0631\u0627 \u0628\u062E\u0648\u0627\u0646\u06CC\u062F\u061F \u0645\u062F\u06CC\u0631\u0645 \u0627\u0632 \u0645\u0646 \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u0646\u0647\u0627\u06CC\u06CC \u0631\u0627 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\u060C \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0628\u0647 \u0628\u0627\u0632\u062E\u0648\u0631\u062F\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u0645.",
            time: "\u06F3:\u06F3\u06F9 \u0628.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u0628\u0628\u062E\u0634\u06CC\u062F \u0627\u06AF\u0631 \u0645\u0632\u0627\u062D\u0645\u062A\u0627\u0646 \u0634\u062F\u0645. \u{1FAE1}",
            time: "\u06F3:\u06F4\u06F8 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0646\u0647\u060C \u0627\u06CC\u0646\u0637\u0648\u0631 \u0646\u0628\u0627\u0634\u06CC\u062F! \u0634\u0645\u0627 \u0627\u0635\u0644\u0627\u064B \u0645\u0646 \u0631\u0627 \u0622\u0632\u0627\u0631 \u0646\u0645\u06CC\u200C\u062F\u0647\u06CC\u062F. \u0645\u0646 \u0641\u0642\u0637 \u0627\u0644\u0627\u0646 \u06A9\u0645\u06CC \u0645\u0634\u063A\u0648\u0644 \u0647\u0633\u062A\u0645. \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0645\u060C \u0627\u0645\u0627 \u0628\u0644\u0647\u060C \u0686\u06CC\u0632\u06CC \u0646\u0645\u06CC\u200C\u0628\u06CC\u0646\u0645 \u06A9\u0647 \u0645\u0627\u0646\u0639 \u0627\u0632 \u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0622\u0646 \u0628\u0647 \u0645\u062F\u06CC\u0631\u062A\u0627\u0646 \u0634\u0648\u062F.",
            time: "\u06F4:\u06F0\u06F6 \u0628.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "A\u0639\u0627\u0644\u06CC! \u062E\u06CC\u0644\u06CC \u0645\u0645\u0646\u0648\u0646 \u062E\u0627\u0646\u0645 \u0648\u06CC\u0644\u0633\u0648\u0646! \u0648\u0627\u0642\u0639\u0627\u064B \u0627\u0632 \u0634\u0645\u0627 \u0645\u062A\u0634\u06A9\u0631\u0645. \u{1F64F}",
            time: "\u06F4:\u06F1\u06F6 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u062E\u0648\u0627\u0647\u0634 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0647\u0631\u0645\u0627\u0646! \u0627\u06AF\u0631 \u0628\u0647 \u0686\u06CC\u0632 \u062F\u06CC\u06AF\u0631\u06CC \u0646\u06CC\u0627\u0632 \u062F\u0627\u0634\u062A\u06CC\u062F\u060C \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F.",
            time: "\u06F4:\u06F2\u06F6 \u0628.\u0638",
            attachments: []
          }
        ]
      },
      {
        id: 3,
        user: {
          name: "\u0627\u062F\u0648\u0627\u0631\u062F \u0641\u0644\u06CC\u0646",
          photo: "/img/avatars/14.svg",
          role: "\u0647\u0645\u06A9\u0627\u0631 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC",
          bio: "\u0627\u062F\u0648\u0627\u0631\u062F \u06CC\u06A9\u06CC \u0627\u0632 \u0647\u0645\u06A9\u0627\u0631\u0627\u0646 \u0628\u0627\u0632\u0627\u0631\u06CC\u0627\u0628\u06CC \u0645\u0627 \u0627\u0633\u062A. \u0647\u0631 \u0633\u0648\u0627\u0644\u06CC \u062F\u0631 \u0645\u0648\u0631\u062F \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0627\u062A \u0645\u0627 \u062F\u0627\u0631\u06CC\u062F \u0627\u0632 \u0627\u0648 \u0628\u067E\u0631\u0633\u06CC\u062F.",
          age: 31,
          location: "\u0633\u06CC\u0627\u062A\u0644"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u0648\u06CC\u0644\u0633\u0648\u0646\u060C \u0645\u062F\u06CC\u0631\u06CC\u062A \u0645\u0646 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0647 \u0645\u0646 \u0641\u0634\u0627\u0631 \u0645\u06CC\u200C\u0622\u0648\u0631\u062F. \u0622\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F \u0628\u062F\u0627\u0646\u0646\u062F \u0622\u06CC\u0627 \u062A\u0635\u0645\u06CC\u0645 \u0646\u0647\u0627\u06CC\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u0634\u062A\u0631\u0627\u06A9 \u0634\u0645\u0627 \u062F\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u0627\u0644\u06CC \u062C\u062F\u06CC\u062F \u0645\u0627 \u06AF\u0631\u0641\u062A\u0647\u200C\u0627\u06CC\u062F \u06CC\u0627 \u062E\u06CC\u0631.",
            time: "\u06F1\u06F1:\u06F0\u06F4 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0633\u0644\u0627\u0645 \u0622\u0642\u0627\u06CC \u0641\u0644\u06CC\u0646! \u062D\u062A\u0645\u0627\u064B. \u0645\u0646 \u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC \u0622\u0646 \u0647\u0633\u062A\u0645. \u0642\u0631\u0627\u0631 \u0646\u0628\u0648\u062F \u062F\u06CC\u0631\u0648\u0632 \u0646\u0627\u0647\u0627\u0631 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u0645\u061F \u0627\u0645\u0631\u0648\u0632 \u0622\u0632\u0627\u062F \u0647\u0633\u062A\u0645 \u0627\u06AF\u0631 \u0628\u062E\u0648\u0627\u0647\u06CC\u062F \u063A\u0630\u0627\u06CC\u06CC \u0628\u062E\u0648\u0631\u06CC\u0645.",
            time: "\u06F1\u06F1:\u06F0\u06F9 \u0642.\u0638",
            attachments: []
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0628\u0627\u0628\u062A \u062F\u06CC\u0631\u0648\u0632 \u0645\u0639\u0630\u0631\u062A \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645\u060C \u06A9\u0627\u0645\u0644\u0627\u064B \u063A\u0631\u0642 \u062F\u0631 \u06A9\u0627\u0631 \u0628\u0648\u062F\u0645. \u0627\u0645\u0631\u0648\u0632 \u0647\u0645 \u0622\u0632\u0627\u062F \u0647\u0633\u062A\u0645. \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0633\u0627\u0639\u062A \u06F2 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u063A\u0630\u0627\u06CC\u06CC \u0628\u062E\u0648\u0631\u06CC\u0645. \u0622\u062F\u0631\u0633 \u0631\u0627 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0645.",
            time: "\u06F1:\u06F0\u06F9 \u0628.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645 \u0622\u0646 \u0631\u0633\u062A\u0648\u0631\u0627\u0646 \u06A9\u0648\u0686\u06A9 \u0633\u0648\u0634\u06CC \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627 \u06AF\u0641\u062A\u0645 \u0631\u0627 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u0645. \u06AF\u0631\u0633\u0646\u0647\u200C\u0627\u0645!",
            time: "\u06F1:\u06F0\u06F9 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0622\u0647 \u0628\u0644\u0647! \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0633\u0648\u0634\u06CC \u0628\u062E\u0648\u0631\u06CC\u0645! \u0645\u0646 \u0647\u0645 \u06AF\u0631\u0633\u0646\u0647\u200C\u0627\u0645. \u0633\u0627\u0639\u062A \u06F2 \u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631 \u0645\u06CC\u200C\u0628\u06CC\u0646\u0645\u062A.",
            time: "\u06F1:\u06F1\u06F2 \u0628.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u062E\u06CC\u0644\u06CC \u0645\u0645\u0646\u0648\u0646 \u0648 \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0628\u062A \u062F\u06CC\u0631\u0648\u0632 \u0645\u0639\u0630\u0631\u062A \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645. \u{1F64F}",
            time: "1:16 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0646\u06AF\u0631\u0627\u0646 \u0646\u0628\u0627\u0634\u06CC\u062F \u{1F609}. \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0627\u06CC\u0646 \u0645\u0639\u0627\u0645\u0644\u0647 \u0631\u0627 \u062A\u0645\u0627\u0645 \u06A9\u0646\u06CC\u0645 \u062A\u0627 \u0628\u0647 \u06A9\u0627\u0631\u0647\u0627\u06CC \u062F\u06CC\u06AF\u0631 \u0628\u067E\u0631\u062F\u0627\u0632\u06CC\u0645. ",
            time: "\u06F4:\u06F2\u06F6 \u0628.\u0638",
            attachments: []
          }
        ]
      },
      {
        id: 4,
        user: {
          name: "\u062C\u0627\u0634\u0648\u0627 \u0627\u0633\u062A\u06CC\u0648\u0646\u0633",
          photo: "/img/avatars/11.svg",
          role: "\u0645\u0634\u0627\u0648\u0631 \u0628\u0627\u0646\u06A9\u06CC",
          bio: "\u06CC\u0648\u0634\u0648\u0627 \u06CC\u06A9\u06CC \u0627\u0632 \u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0628\u0627\u0646\u06A9\u06CC \u0645\u0627 \u0627\u0633\u062A. \u0647\u0631 \u0633\u0648\u0627\u0644\u06CC \u062F\u0631 \u0645\u0648\u0631\u062F \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u062F\u0627\u0631\u06CC\u062F \u0627\u0632 \u0627\u0648 \u0628\u067E\u0631\u0633\u06CC\u062F.",
          age: 43,
          location: "\u0644\u0646\u062F\u0646"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u062E\u0627\u0646\u0645 \u0648\u06CC\u0644\u0633\u0648\u0646\u060C \u0645\u0634\u062A\u0631\u06CC \u062F\u0648\u0628\u0627\u0631\u0647 \u0628\u0647 \u0645\u0646 \u0645\u0634\u06A9\u0644 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A. \u0627\u0648 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u062F \u06A9\u0647 \u0645\u0646 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0631\u0627 \u06A9\u0647 \u0634\u0645\u0627 \u0647\u0641\u062A\u0647 \u06AF\u0630\u0634\u062A\u0647 \u0631\u0648\u06CC \u0622\u0646 \u06A9\u0627\u0631 \u06A9\u0631\u062F\u06CC\u062F \u0627\u0631\u0627\u0626\u0647 \u062F\u0647\u0645. \u0622\u06CC\u0627 \u0647\u0646\u0648\u0632 \u0622\u0646 \u0627\u0631\u0627\u0626\u0647 \u0631\u0627 \u062F\u0627\u0631\u06CC\u062F\u061F \u0645\u0646 \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0631\u062F\u0645 \u0627\u0632 \u0622\u0646 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u062C\u062F\u06CC\u062F \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u0645.",
            time: "\u06F9:\u06F0\u06F4 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0633\u0644\u0627\u0645 \u06CC\u0648\u0634\u0648\u0627\u060C \u0645\u0634\u06A9\u0644\u06CC \u0646\u06CC\u0633\u062A. \u0647\u0646\u0648\u0632 \u0622\u0646 \u0631\u0627 \u062F\u0627\u0631\u0645. \u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0645. \u0686\u0637\u0648\u0631 \u0627\u0633\u062A \u0627\u0645\u0631\u0648\u0632 \u0646\u0627\u0647\u0627\u0631 \u0628\u062E\u0648\u0631\u06CC\u0645\u061F \u0645\u0646 \u062D\u062F\u0648\u062F \u0638\u0647\u0631 \u0622\u0632\u0627\u062F \u0647\u0633\u062A\u0645.",
            time: "\u06F9:\u06F0\u06F9 \u0642.\u0638",
            attachments: []
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0628\u0627\u0628\u062A \u062F\u06CC\u0631\u0648\u0632 \u0645\u0639\u0630\u0631\u062A \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0645\u060C \u0628\u0627 \u06A9\u0627\u0631 \u063A\u0631\u0642 \u0634\u062F\u0647 \u0628\u0648\u062F\u0645. \u0627\u0645\u0631\u0648\u0632 \u0647\u0645 \u0622\u0632\u0627\u062F \u0647\u0633\u062A\u0645. \u0628\u06CC\u0627\u06CC\u06CC\u062F \u0633\u0627\u0639\u062A \u06F1\u06F2 \u0646\u0627\u0647\u0627\u0631 \u0628\u062E\u0648\u0631\u06CC\u0645. \u062F\u0631 \u0645\u0631\u06A9\u0632 \u063A\u0630\u0627 \u062F\u06CC\u062F\u0627\u0631 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645\u061F",
            time: "\u06F1\u06F1:\u06F0\u06F9 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u062E\u0648\u0628 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F. \u0633\u0627\u0639\u062A \u06F1\u06F2 \u062F\u0631 \u0645\u0631\u06A9\u0632 \u063A\u0630\u0627 \u0645\u06CC\u200C\u0628\u06CC\u0646\u0645\u062A.",
            time: "\u06F1\u06F1:\u06F1\u06F2 \u0642.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u0645\u0645\u0646\u0648\u0646 \u0627\u0632 \u062F\u0631\u06A9\u062A\u0627\u0646. \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0627\u0632 \u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u0628\u0647 \u0645\u0646 \u0645\u062A\u0634\u06A9\u0631\u0645. \u{1F64F}",
            time: "11:16 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0645\u0634\u06A9\u0644\u06CC \u0646\u06CC\u0633\u062A. \u0628\u06CC\u0627\u06CC\u06CC\u062F \u062F\u0631 \u0646\u0627\u0647\u0627\u0631 \u0628\u06CC\u0634\u062A\u0631 \u0635\u062D\u0628\u062A \u06A9\u0646\u06CC\u0645. \u{1F609} ",
            time: "\u06F1\u06F2:\u06F0\u06F1 \u0628.\u0638",
            attachments: []
          }
        ]
      },
      {
        id: 5,
        user: {
          name: "\u062C\u0646\u06CC\u0641\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
          photo: "/img/avatars/12.svg",
          role: "\u062A\u0645\u0627\u0633 \u0634\u062E\u0635\u06CC",
          bio: "\u062C\u0646\u06CC\u0641\u0631 \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062A\u062D\u062A \u0647\u0645\u0627\u0646 \u062D\u0633\u0627\u0628 \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A.",
          age: 26,
          location: "\u062A\u0648\u0631\u0646\u062A\u0648"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u06A9\u0646\u062F\u0631\u0627\u060C \u0645\u06CC\u200C\u062E\u0648\u0627\u0633\u062A\u0645 \u062F\u0631 \u0645\u0648\u0631\u062F \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC\u0645 \u0645\u0634\u0627\u0648\u0631\u0647 \u0628\u06AF\u06CC\u0631\u0645. \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC\u200C\u0647\u0627\u06CC\u06CC \u0631\u0627 \u062F\u0631 \u062D\u0633\u0627\u0628\u0645 \u062F\u06CC\u062F\u0647\u200C\u0627\u0645 \u06A9\u0647 \u062E\u06CC\u0644\u06CC \u0645\u0631\u0627 \u062E\u0648\u0634\u062D\u0627\u0644 \u0646\u06A9\u0631\u062F\u0647 \u0627\u0633\u062A.",
            time: "\u06F4:\u06F0\u06F4 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u062D\u062A\u0645\u0627\u064B\u060C \u0627\u0644\u0627\u0646 \u0628\u0647 \u0622\u0646 \u0646\u06AF\u0627\u0647\u06CC \u0645\u06CC\u200C\u0627\u0646\u062F\u0627\u0632\u0645. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0644\u0627\u06AF \u0628\u0647\u200C\u0631\u0648\u0632 \u0634\u062F\u0647 \u0631\u0627 \u0628\u0631\u0627\u06CC\u0645 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F\u061F",
            time: "4:09 \u0628.\u0638",
            attachments: []
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0645\u0646 \u0644\u0627\u06AF \u0628\u0647\u200C\u0631\u0648\u0632 \u0634\u062F\u0647 \u0631\u0627 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u0645. \u0647\u0645\u0686\u0646\u06CC\u0646 \u0628\u0631\u062E\u06CC \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627 \u0648 \u0641\u0627\u06A9\u062A\u0648\u0631\u0647\u0627 \u0631\u0627 \u06A9\u0647 \u062F\u0627\u0634\u062A\u0645\u060C \u0636\u0645\u06CC\u0645\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u0645.",
            time: "\u06F9:\u06F0\u06F0 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0645\u0645\u0646\u0648\u0646\u060C \u0627\u0644\u0627\u0646 \u0628\u0647 \u0622\u0646 \u0646\u06AF\u0627\u0647\u06CC \u0645\u06CC\u200C\u0627\u0646\u062F\u0627\u0632\u0645.",
            time: "\u06F9:\u06F0\u06F1 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0634\u0645\u0627 \u0628\u06CC\u0634 \u0627\u0632 \u062D\u062F \u0628\u0631\u0627\u06CC \u067E\u0648\u0634\u0627\u06A9 \u0648 \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627 \u062E\u0631\u062C \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F. \u062D\u062A\u0645\u0627\u064B \u0628\u0627\u06CC\u062F \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0648\u0627\u0631\u062F \u06A9\u0627\u0647\u0634 \u062F\u0647\u06CC\u062F.",
            time: "9:15 \u0642.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u0645\u0645\u0646\u0648\u0646 \u0628\u0627\u0628\u062A \u0628\u0627\u0632\u062E\u0648\u0631\u062F\u060C \u0628\u0644\u0647 \u0645\u06CC\u200C\u062F\u0627\u0646\u0645 \u06A9\u0647 \u0632\u06CC\u0627\u062F \u062E\u0631\u062C \u06A9\u0631\u062F\u0647\u200C\u0627\u0645. \u0633\u0639\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645 \u06A9\u0645\u06CC \u06A9\u0627\u0647\u0634 \u062F\u0647\u0645.",
            time: "9:20 \u0642.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u062D\u062A\u0645\u0627\u064B\u060C \u0645\u06CC\u200C\u062F\u0627\u0646\u0645 \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F.",
            time: "9:22 \u0642.\u0638",
            attachments: []
          }
        ]
      },
      {
        id: 6,
        user: {
          name: "\u0627\u0645\u0628\u0631 \u0648\u06CC\u0644\u0633\u0648\u0646",
          photo: "/img/avatars/24.svg",
          role: "\u062A\u0645\u0627\u0633 \u0634\u062E\u0635\u06CC",
          bio: "\u0622\u0645\u0628\u0631 \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062A\u062D\u062A \u0647\u0645\u0627\u0646 \u062D\u0633\u0627\u0628 \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A.",
          age: 25,
          location: "\u067E\u0627\u0631\u06CC\u0633"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u0645\u0627\u0645\u0627\u0646\u060C \u0627\u0644\u0627\u0646 \u0648\u0627\u0642\u0639\u0627\u064B \u062F\u0631 \u0645\u0634\u06A9\u0644 \u0647\u0633\u062A\u0645\u060C \u0628\u0647 \u06A9\u0645\u06A9 \u0634\u0645\u0627 \u0646\u06CC\u0627\u0632 \u062F\u0627\u0631\u0645.",
            time: "\u06F4:\u06F0\u06F4 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0686\u0647 \u062E\u0628\u0631 \u0627\u0633\u062A\u061F \u0622\u06CC\u0627 \u0645\u0634\u06A9\u0644\u06CC \u0628\u0627 \u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC\u200C\u062A\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F\u061F",
            time: "4:09 \u0628.\u0638",
            attachments: []
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0646\u0647 \u0627\u06CC\u0646\u06A9\u0647 \u0627\u062E\u06CC\u0631\u0627\u064B \u067E\u0648\u0644\u06CC \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0646\u0641\u0631\u0633\u062A\u0627\u062F\u0647 \u0628\u0627\u0634\u06CC\u0645. \u0686\u0647 \u062E\u0628\u0631 \u0627\u0633\u062A\u061F",
            time: "\u06F9:\u06F0\u06F0 \u0642.\u0638",
            attachments: []
          },
          {
            type: "received",
            text: "\u0628\u0644\u0647\u060C \u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u06A9\u0645\u06CC \u0628\u06CC\u0634 \u0627\u0632 \u062D\u062F \u062E\u0631\u062C \u06A9\u0631\u062F\u0647\u200C\u0627\u0645\u060C \u0627\u0645\u0627 \u0641\u0642\u0637 \u06A9\u0645\u06CC.",
            time: "\u06F9:\u06F0\u06F1 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "received",
            text: "\u0628\u0647 \u062D\u0633\u0627\u0628\u0645 \u0646\u06AF\u0627\u0647 \u06A9\u0631\u062F\u0645 \u0648 \u06A9\u0645\u06CC \u0634\u0648\u06A9\u0647 \u0634\u062F\u0645.",
            time: "9:05 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "sent",
            text: "\u062E\u062F\u0627 \u0631\u0627 \u0634\u06A9\u0631\u060C \u067E\u062F\u0631\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u0639\u0635\u0628\u0627\u0646\u06CC \u062E\u0648\u0627\u0647\u062F \u0634\u062F.",
            time: "9:06 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0645\u0646 \u062E\u0648\u062F\u0645 \u0628\u0647 \u0627\u06CC\u0646 \u0645\u0648\u0636\u0648\u0639 \u0631\u0633\u06CC\u062F\u06AF\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0648 \u06CC\u06A9 \u0627\u0646\u062A\u0642\u0627\u0644 \u0646\u0642\u062F\u06CC \u0633\u0631\u06CC\u0639 \u0628\u0631\u0627\u06CC\u062A\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06A9\u0646\u0645.",
            time: "4:22 \u0628.\u0638",
            attachments: []
          }
        ]
      },
      {
        id: 7,
        user: {
          name: "\u062C\u0627\u0646 \u0628\u0627\u06A9\u0633\u062A\u0631",
          photo: "/img/avatars/8.svg",
          role: "\u062A\u0645\u0627\u0633 \u0634\u062E\u0635\u06CC",
          bio: "\u062C\u0627\u0646 \u06CC\u06A9\u06CC \u0627\u0632 \u0627\u0639\u0636\u0627\u06CC \u062E\u0627\u0646\u0648\u0627\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062A\u062D\u062A \u0647\u0645\u0627\u0646 \u062D\u0633\u0627\u0628 \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A.",
          age: 41,
          location: "\u0645\u06CC\u0627\u0645\u06CC"
        },
        messages: [
          {
            type: "separator",
            text: "",
            time: "\u062F\u06CC\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "received",
            text: "\u0633\u0644\u0627\u0645 \u0639\u0632\u06CC\u0632\u060C \u0622\u06CC\u0627 \u0627\u062E\u06CC\u0631\u0627\u064B \u0647\u0646\u06AF\u0627\u0645 \u0635\u062D\u0628\u062A \u0628\u0627 \u0622\u0645\u0628\u0631 \u0631\u0641\u062A\u0627\u0631 \u0639\u062C\u06CC\u0628\u06CC \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u061F",
            time: "2:04 \u0628.\u0638",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0628\u0644\u0647\u060C \u0628\u0627 \u0627\u0648 \u0635\u062D\u0628\u062A \u06A9\u0631\u062F\u0647\u200C\u0627\u0645 \u0648 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u06A9\u0647 \u06A9\u0645\u06CC \u0628\u0627 \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u062F\u0686\u0627\u0631 \u0645\u0634\u06A9\u0644 \u0634\u062F\u0647 \u0627\u0633\u062A.",
            time: "2:09 \u0628.\u0638",
            attachments: []
          },
          {
            type: "separator",
            text: "",
            time: "\u0627\u0645\u0631\u0648\u0632",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0641\u06A9\u0631 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u06A9\u0645\u06CC \u0632\u06CC\u0627\u062F \u062E\u0631\u062C \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\u060C \u0645\u06CC\u200C\u062F\u0627\u0646\u06CC\u062F \u06A9\u0647 \u062F\u062E\u062A\u0631\u062A\u0627\u0646 \u0686\u06AF\u0648\u0646\u0647 \u0627\u0633\u062A.",
            time: "\u06F9:\u06F0\u06F0 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "received",
            text: "\u062F\u0648\u0628\u0627\u0631\u0647\u061F \u0622\u0646 \u062F\u062E\u062A\u0631 \u0648\u0627\u0642\u0639\u0627\u064B \u0628\u0627\u06CC\u062F \u06CC\u0627\u062F \u0628\u06AF\u06CC\u0631\u062F \u0686\u06AF\u0648\u0646\u0647 \u067E\u0648\u0644 \u062E\u0648\u062F \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u062F. \u0628\u0627 \u0627\u0648 \u0635\u062D\u0628\u062A \u0645\u06CC\u200C\u06A9\u0646\u0645.",
            time: "\u06F9:\u06F0\u06F1 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "received",
            text: "\u0622\u06CC\u0627 \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0648 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u0645\u061F",
            time: "9:05 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0646\u0647\u060C \u0645\u0646 \u0642\u0628\u0644\u0627\u064B \u0628\u0647 \u0622\u0646 \u0631\u0633\u06CC\u062F\u06AF\u06CC \u06A9\u0631\u062F\u0647\u200C\u0627\u0645. \u0633\u0639\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0646\u06AF\u0630\u0627\u0631\u0645 \u0628\u0627 \u0627\u0645\u062A\u062D\u0627\u0646\u0627\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC\u200C\u0627\u0634 \u0628\u0647 \u0647\u0645 \u0628\u0631\u06CC\u0632\u062F.",
            time: "9:06 \u0635\u0628\u062D",
            attachments: []
          },
          {
            type: "sent",
            text: "\u0686\u0646\u062F \u0635\u062F \u062A\u0648\u0645\u0627\u0646 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u0645 \u062A\u0627 \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0645\u0627\u0647 \u062C\u0628\u0631\u0627\u0646 \u06A9\u0646\u062F.",
            time: "2:22 \u0628.\u0638",
            attachments: []
          }
        ]
      }
    ]);
    const searchMessages = ref("");
    const selectedOption = ref("chat");
    const mobileOpen = ref(false);
    ref();
    ref(false);
    const loading = ref(false);
    ref("");
    const message = ref("");
    const messageLoading = ref(false);
    const activeConversation = ref(1);
    const selectedConversation = computed(() => {
      mobileOpen.value = false;
      return conversations.value.find(
        (conversation) => conversation.id === activeConversation.value
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _component_BaseInput = _sfc_main$D;
      const _component_DemoThemeSwitch = resolveComponent("DemoThemeSwitch");
      const _component_DemoAccountMenu = _sfc_main$1;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseText = _sfc_main$C;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-muted-800 h-screen antialiased" }, _attrs))}><div class="${ssrRenderClass([unref(mobileOpen) ? "z-20" : "z-30", "ltablet:z-30 border-muted-200 dark:border-muted-800 dark:bg-muted-950 relative flex h-16 w-full items-center justify-between border-b bg-white px-4 lg:z-30"])}"><div class="flex w-1/2 items-center gap-2 sm:w-1/5"><button class="ltablet:hidden relative flex size-10 items-center justify-center lg:hidden"><div class="start-6 top-1/2 block w-4 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2"><span class="${ssrRenderClass([unref(mobileOpen) ? "rotate-45" : "-translate-y-2", "text-primary-500 absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out"])}"></span><span class="${ssrRenderClass([unref(mobileOpen) ? "opacity-0" : "", "text-primary-500 absolute block h-0.5 w-5 bg-current transition duration-500 ease-in-out"])}"></span><span class="${ssrRenderClass([unref(mobileOpen) ? "-rotate-45" : "translate-y-2", "text-primary-500 absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out"])}"></span></div></button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "ltablet:flex hidden items-center gap-2 lg:flex",
        "aria-label": "\u0631\u0641\u062A\u0646 \u0628\u0647 \u0635\u0641\u062D\u0647 \u0627\u0648\u0644 \u062A\u0627\u06CC\u0631\u0648"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-primary-500 h-6 dark:text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogoText, { class: "text-primary-500 h-6 dark:text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:max-w-sm mx-auto hidden max-w-xs grow sm:block lg:max-w-xl">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(searchMessages),
        "onUpdate:modelValue": ($event) => isRef(searchMessages) ? searchMessages.value = $event : null,
        rounded: "lg",
        icon: "lucide:search",
        placeholder: "\u067E\u06CC\u0627\u0645\u200C\u0647\u0627 \u0631\u0627 \u062C\u0633\u062A\u062C\u0648 \u06A9\u0646\u06CC\u062F...",
        classes: {
          input: "!h-11 !ps-11",
          icon: "!h-11 !w-11"
        }
      }, null, _parent));
      _push(`</div><div class="flex w-1/2 items-center justify-end gap-4 sm:w-1/5">`);
      _push(ssrRenderComponent(_component_DemoThemeSwitch, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoAccountMenu, { horizontal: "" }, null, _parent));
      _push(`</div></div><div class="relative z-20 flex h-[calc(100dvh_-_64px)] w-full flex-row overflow-x-hidden"><div class="${ssrRenderClass([
        unref(mobileOpen) ? "translate-x-0" : "-translate-x-full ltablet:translate-x-0 lg:translate-x-0",
        "ltablet:static ltablet:py-4 dark:bg-muted-900 ltablet:dark:bg-muted-950 lg:dark:bg-muted-950 fixed start-0 top-0 z-30 flex h-full w-72 shrink-0 flex-col bg-white ps-4 transition-transform duration-300 lg:static lg:py-4"
      ])}"><div class="ltablet:hidden flex h-16 items-center justify-between pe-4 lg:hidden">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2",
        "aria-label": "Go to Tairo homepage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-muted-800 h-9 dark:text-white" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-muted-800 h-3 dark:text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-muted-800 h-9 dark:text-white" }),
              createVNode(_component_TairoLogoText, { class: "text-muted-800 h-3 dark:text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        color: "muted",
        rounded: "lg",
        onClick: ($event) => mobileOpen.value = false
      }, null, _parent));
      _push(`</div><div class="ltablet:pe-0 flex h-full flex-col pe-2 lg:pe-0"><div class="flex h-20 items-center justify-center pe-2">`);
      _push(ssrRenderComponent(_component_BaseButton, {
        rounded: "full",
        color: "primary",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus",
              class: "size-4"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u06AF\u0641\u062A\u06AF\u0648\u06CC \u062C\u062F\u06CC\u062F</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus",
                class: "size-4"
              }),
              createVNode("span", null, "\u06AF\u0641\u062A\u06AF\u0648\u06CC \u062C\u062F\u06CC\u062F")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nui-slimscroll flex h-[calc(100dvh_-_160px)] flex-col space-y-1 overflow-y-auto pe-2"><!--[-->`);
      ssrRenderList(unref(conversations), (conversation) => {
        _push(`<button class="${ssrRenderClass([
          unref(activeConversation) === conversation.id ? "bg-primary-500/10" : "hover:bg-muted-100 dark:hover:bg-muted-900",
          "flex items-center gap-2 rounded-xl p-2 transition-colors duration-200 ease-in-out"
        ])}">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: conversation.user.photo
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseText, {
          size: "sm",
          class: unref(activeConversation) === conversation.id ? "text-primary-500" : "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(conversation.user.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(conversation.user.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span class="${ssrRenderClass([
          unref(activeConversation) === conversation.id ? "opacity-100" : "opacity-0",
          "bg-primary-500 me-3 ms-auto block size-2 rounded-full transition-opacity duration-300"
        ])}"></span></button>`);
      });
      _push(`<!--]--></div><div class="flex h-20 items-center justify-between gap-3 pe-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "text-muted-500 dark:text-muted-400 hover:text-primary-500 border-muted-200 dark:border-muted-800 hover:border-primary-500 flex size-12 items-center justify-center rounded-xl border transition-colors duration-200 dark:hover:border-purple-500 dark:hover:text-purple-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ion:arrow-back-outline",
              class: "size-4 rtl:rotate-180"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ion:arrow-back-outline",
                class: "size-4 rtl:rotate-180"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="${ssrRenderClass([
        unref(selectedOption) === "chat" ? "bg-primary-500/10 text-primary-500" : "bg-muted-50 hover:bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-800 text-muted-500",
        "flex size-12 items-center justify-center rounded-xl transition-colors duration-200"
      ])}" data-nui-tooltip="\u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646\u06CC">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:chatbubble-outline",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="${ssrRenderClass([
        unref(selectedOption) === "calendar" ? "bg-primary-500/10 text-primary-500" : "bg-muted-50 hover:bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-800 text-muted-500",
        "flex size-12 items-center justify-center rounded-xl transition-colors duration-200"
      ])}" data-nui-tooltip="\u062A\u0642\u0648\u06CC\u0645">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:calendar-outline",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button class="${ssrRenderClass([
        unref(selectedOption) === "settings" ? "bg-primary-500/10 text-primary-500" : "bg-muted-50 hover:bg-muted-100 dark:bg-muted-900 dark:hover:bg-muted-800 text-muted-500",
        "flex size-12 items-center justify-center rounded-xl transition-colors duration-200"
      ])}" data-nui-tooltip="\u062A\u0646\u0638\u06CC\u0645\u0627\u062A">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:options-outline",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div></div></div><div class="dark:bg-muted-950 flex h-full flex-auto flex-col bg-white p-4"><div class="bg-muted-100 dark:bg-muted-900 flex h-full flex-auto shrink-0 flex-col overflow-hidden rounded-2xl"><div class="relative flex h-full flex-col"><div class="${ssrRenderClass([
        unref(loading) ? "overflow-hidden" : "overflow-y-auto nui-slimscroll",
        "relative flex h-full flex-col px-4 pb-24 pt-12"
      ])}"><div class="${ssrRenderClass([
        unref(loading) ? "opacity-100" : "opacity-0 pointer-events-none",
        "bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"
      ])}"><div class="mt-12 space-y-12"><div class="flex w-full max-w-md gap-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, {
        class: "size-8 shrink-0 rounded-full",
        width: 32,
        height: 32
      }, null, _parent));
      _push(`<div class="grow space-y-2">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-56 rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-32 rounded" }, null, _parent));
      _push(`</div></div><div class="flex w-full max-w-md gap-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, {
        class: "size-8 shrink-0 rounded-full",
        width: 32,
        height: 32
      }, null, _parent));
      _push(`<div class="grow space-y-2">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-64 rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-48 rounded" }, null, _parent));
      _push(`</div></div><div class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, {
        class: "size-8 shrink-0 rounded-full",
        width: 32,
        height: 32
      }, null, _parent));
      _push(`<div class="grow space-y-2">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "ms-auto h-3 w-full max-w-64 rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "ms-auto h-3 w-full max-w-48 rounded" }, null, _parent));
      _push(`</div></div><div class="ms-auto flex w-full max-w-md flex-row-reverse justify-end gap-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, {
        class: "size-8 shrink-0 rounded-full",
        width: 32,
        height: 32
      }, null, _parent));
      _push(`<div class="grow space-y-2">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "ms-auto h-3 w-full max-w-56 rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "ms-auto h-3 w-full max-w-32 rounded" }, null, _parent));
      _push(`</div></div><div class="flex w-full max-w-md gap-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, {
        class: "size-8 shrink-0 rounded-full",
        width: 32,
        height: 32
      }, null, _parent));
      _push(`<div class="grow space-y-2">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-56 rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-32 rounded" }, null, _parent));
      _push(`</div></div><div class="flex w-full max-w-md gap-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, {
        class: "size-8 shrink-0 rounded-full",
        width: 32,
        height: 32
      }, null, _parent));
      _push(`<div class="grow space-y-2">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-64 rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-full max-w-48 rounded" }, null, _parent));
      _push(`</div></div></div></div>`);
      if (!unref(loading)) {
        _push(`<div class="space-y-12"><!--[-->`);
        ssrRenderList(unref(selectedConversation)?.messages, (item, index) => {
          _push(`<div class="${ssrRenderClass([[
            item.type === "received" ? "flex-row" : "flex-row-reverse",
            item.type === "separator" ? "justify-center" : ""
          ], "relative flex w-full gap-4"])}">`);
          if (item.type !== "separator") {
            _push(`<!--[--><div class="shrink-0">`);
            if (item.type === "received") {
              _push(ssrRenderComponent(_component_BaseAvatar, {
                src: unref(selectedConversation)?.user.photo,
                size: "xs"
              }, null, _parent));
            } else if (item.type === "sent") {
              _push(ssrRenderComponent(_component_BaseAvatar, {
                src: "/img/avatars/2.svg",
                size: "xs"
              }, null, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="flex max-w-md flex-col"><div class="${ssrRenderClass([[
              item.type === "received" ? "bg-muted-200 dark:bg-muted-950 rounded-ss-none" : "",
              item.type === "sent" ? "bg-primary-500/20 rounded-se-none" : ""
            ], "text-muted-800 dark:text-muted-200 rounded-xl p-4"])}"><p class="font-sans text-sm">${ssrInterpolate(item.text)}</p></div><div class="${ssrRenderClass([item.type === "received" ? "text-end" : "", "text-muted-400 mt-1 font-sans text-xs"])}">${ssrInterpolate(item.time)}</div>`);
            if (item.attachments.length > 0) {
              _push(`<div class="mt-2 space-y-2"><!--[-->`);
              ssrRenderList(item.attachments, (attachment, idx) => {
                _push(`<!--[-->`);
                if (attachment.type === "image") {
                  _push(`<div class="${ssrRenderClass([item.type === "sent" ? "ms-auto" : "", "dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"])}"><img${ssrRenderAttr("src", attachment.image)}${ssrRenderAttr("alt", attachment.text)} class="rounded-xl"></div>`);
                } else if (attachment.type === "link") {
                  _push(ssrRenderComponent(_component_NuxtLink, {
                    to: attachment.url,
                    class: ["dark:bg-muted-950 block max-w-xs rounded-2xl bg-white p-2", item.type === "sent" ? "ms-auto" : ""]
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`<img${ssrRenderAttr("src", attachment.image)}${ssrRenderAttr("alt", attachment.text)} class="rounded-xl"${_scopeId}><div class="px-1 py-2"${_scopeId}><p class="text-muted-800 dark:text-muted-100 font-sans"${_scopeId}>${ssrInterpolate(attachment.url?.replace(/(^\w+:|^)\/\//, ""))}</p><p class="text-muted-400 font-sans text-xs"${_scopeId}>${ssrInterpolate(attachment.text)}</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: attachment.image,
                            alt: attachment.text,
                            class: "rounded-xl"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "px-1 py-2" }, [
                            createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans" }, toDisplayString(attachment.url?.replace(/(^\w+:|^)\/\//, "")), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(attachment.text), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent));
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><!--]-->`);
          } else {
            _push(`<div><div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="border-muted-300/50 dark:border-muted-800 w-full border-t"></div></div><div class="relative flex justify-center"><span class="bg-muted-100 dark:bg-muted-900 text-muted-400 px-3 font-sans text-xs uppercase">${ssrInterpolate(item.time)}</span></div></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="absolute inset-x-0 bottom-4 w-full px-4"><form method="POST" action="" class="dark:bg-muted-950 flex h-16 flex-row items-center gap-2 rounded-xl bg-white px-3"><div class="hidden sm:block"><button class="hover:bg-muted-100 dark:hover:bg-muted-900 text-muted-400 hover:text-muted-600 dark:hover:text-muted-200 hidden size-10 items-center justify-center rounded-xl transition-colors duration-200 focus:outline-none sm:flex">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:paperclip",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><div class="grow"><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(message),
        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
        modelModifiers: { trim: true },
        disabled: unref(messageLoading),
        rounded: "lg",
        classes: {
          input: "pe-10"
        },
        placeholder: "\u0646\u0648\u0634\u062A\u0646 \u067E\u06CC\u0627\u0645..."
      }, null, _parent));
      _push(`<button class="text-muted-400 hover:text-muted-600 absolute end-0 top-0 flex h-full w-12 items-center justify-center"><svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button></div></div><div>`);
      _push(ssrRenderComponent(_component_BaseButton, {
        type: "submit",
        color: "primary",
        rounded: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>\u0627\u0631\u0633\u0627\u0644</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:paper-plane-right-duotone",
              class: "!hidden size-5 sm:!block rtl:rotate-180"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "\u0627\u0631\u0633\u0627\u0644"),
              createVNode(_component_Icon, {
                name: "ph:paper-plane-right-duotone",
                class: "!hidden size-5 sm:!block rtl:rotate-180"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div></div><div class="dark:bg-muted-950 hidden w-80 shrink-0 flex-col bg-white py-4 pe-8 ps-4 lg:flex"><div class="relative flex w-full flex-col">`);
      if (unref(loading)) {
        _push(`<div class="mt-4"><div class="mb-3 flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_BasePlaceload, {
          class: "size-24 shrink-0 rounded-full",
          width: 96,
          height: 96
        }, null, _parent));
        _push(`</div><div class="flex flex-col items-center">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "mb-2 h-3 w-full max-w-40 rounded" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "mb-2 h-3 w-full max-w-24 rounded" }, null, _parent));
        _push(`<div class="my-4 flex w-full flex-col items-center">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "mb-2 h-2 w-full max-w-60 rounded" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "mb-2 h-2 w-full max-w-52 rounded" }, null, _parent));
        _push(`</div><div class="mb-6 flex w-full items-center justify-center"><div class="px-4">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-14 rounded" }, null, _parent));
        _push(`</div><div class="px-4">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-3 w-14 rounded" }, null, _parent));
        _push(`</div></div><div class="w-full">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-10 w-full rounded-xl" }, null, _parent));
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "mx-auto mt-3 h-3 w-[7.5rem] rounded" }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<div class="mt-4"><div class="flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: unref(selectedConversation)?.user.photo,
          size: "2xl"
        }, null, _parent));
        _push(`</div><div class="text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h3",
          size: "lg",
          class: "text-muted-800 dark:text-muted-100 mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(selectedConversation)?.user.name)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(selectedConversation)?.user.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(selectedConversation)?.user.role)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(selectedConversation)?.user.role), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="my-4">`);
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(unref(selectedConversation)?.user.bio)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(selectedConversation)?.user.bio), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x rtl:divide-x-reverse"><div class="flex items-center justify-center gap-2 px-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:timer-duotone",
          class: "text-muted-400 size-4"
        }, null, _parent));
        _push(`<span class="text-muted-400 font-sans text-xs"> \u0633\u0646: ${ssrInterpolate(unref(selectedConversation)?.user.age)}</span></div><div class="flex items-center justify-center gap-2 px-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:map-pin-duotone",
          class: "text-muted-400 size-4"
        }, null, _parent));
        _push(`<span class="text-muted-400 font-sans text-xs">${ssrInterpolate(unref(selectedConversation)?.user.location)}</span></div></div><div class="mt-6">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          rounded: "lg",
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}> \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 ${ssrInterpolate(unref(selectedConversation)?.user.name)} \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F </span>`);
            } else {
              return [
                createVNode("span", null, " \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 " + toDisplayString(unref(selectedConversation)?.user.name) + " \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0646\u06CC\u062F ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/layouts/members",
          class: "text-primary-500 mt-3 block font-sans text-sm underline-offset-4 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0639\u0636\u0627 `);
            } else {
              return [
                createTextVNode(" \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0639\u0636\u0627 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/messaging-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
