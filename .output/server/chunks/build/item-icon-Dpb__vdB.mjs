import { _ as __nuxt_component_0 } from './BaseTreeSelect-CsxaJnr6.mjs';
import { _ as _sfc_main$1 } from './BaseTreeSelectItem-CSgbfULu.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './BaseCheckbox-CfxLaouc.mjs';
import './IconCheck--xcA1MPZ.mjs';
import './BaseAvatar-3aYTRoBN.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item-icon",
  __ssrInlineRender: true,
  setup(__props) {
    const tree = [
      {
        item: {
          media: void 0,
          name: "General",
          text: void 0
        },
        open: true,
        children: [
          {
            item: {
              icon: "ph:cards-duotone",
              name: "Company",
              text: "Everything about the company"
            }
          },
          {
            item: {
              icon: "ph:buildings-duotone",
              name: "Company",
              text: "Select filial"
            },
            children: [
              {
                item: {
                  icon: "ph:buildings-duotone",
                  name: "Sub-Company 1",
                  text: "Everything about the company"
                }
              },
              {
                item: {
                  icon: "ph:buildings-duotone",
                  name: "Sub-Company 2",
                  text: "Everything about the company"
                }
              },
              {
                item: {
                  icon: "ph:buildings-duotone",
                  name: "Sub-Company 3",
                  text: "Everything about the company"
                }
              }
            ]
          },
          {
            item: {
              icon: "ph:suitcase-duotone",
              name: "\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631",
              text: "\u0633\u0648\u0627\u0644\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631"
            },
            children: []
          }
        ]
      },
      {
        item: {
          icon: "ph:suitcase-duotone",
          name: "\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631",
          text: "\u0633\u0648\u0627\u0644\u0627\u062A \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631"
        }
      },
      {
        item: {
          media: void 0,
          name: "\u0645\u0648\u0636\u0648\u0639\u0627\u062A",
          text: void 0
        },
        children: [
          {
            item: {
              media: void 0,
              name: "\u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631",
              text: void 0
            },
            children: [
              {
                item: {
                  icon: "ph:rocket-duotone",
                  name: "\u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E\u200C\u0647\u0627",
                  text: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0633\u062A\u0627\u0631\u062A\u0627\u067E\u200C\u0647\u0627"
                }
              },
              {
                item: {
                  icon: "ph:robot-duotone",
                  name: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A",
                  text: "\u0686\u0631\u062E\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0631 \u0645\u062D\u0635\u0648\u0644"
                }
              }
            ]
          },
          {
            item: {
              media: void 0,
              name: "Web Content",
              text: void 0
            },
            children: [
              {
                item: {
                  icon: "ph:pencil-duotone",
                  name: "Blogging",
                  text: "Tips & tricks about blogging",
                  children: []
                }
              },
              {
                item: {
                  icon: "ph:circles-four-duotone",
                  name: "Social media",
                  text: "Managing social media content"
                }
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseTreeSelect = __nuxt_component_0;
      const _component_BaseTreeSelectItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:max-w-lg" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BaseTreeSelect, { children: tree }, {
        "item-label": withCtx(({ level, child, toggle }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseTreeSelectItem, {
              level,
              toggle,
              value: {
                name: child.item.name,
                text: child.item.text,
                icon: child.item.icon
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseTreeSelectItem, {
                level,
                toggle,
                value: {
                  name: child.item.name,
                  text: child.item.text,
                  icon: child.item.icon
                }
              }, null, 8, ["level", "toggle", "value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/treeselect/item-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
