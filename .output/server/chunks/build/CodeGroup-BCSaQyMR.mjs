import { useSSRContext, defineComponent, ref, provide, h, mergeModels, useModel, computed, mergeProps, unref, withCtx, openBlock, createBlock } from 'vue';
import { _ as _sfc_main$2 } from './BaseButtonIcon-B-NRPykg.mjs';
import { i as _export_sfc, V as useClipboard, a as __nuxt_component_2$1 } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CodeGroupHeader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    hasPreview: { type: Boolean },
    tabs: {}
  }, {
    "activeTabIndex": {},
    "activeTabIndexModifiers": {}
  }),
  emits: ["update:activeTabIndex"],
  setup(__props) {
    const props = __props;
    const activeTabIndex = useModel(__props, "activeTabIndex");
    const { copy, copied, isSupported } = useClipboard({
      source: () => activeTab.value?.code ?? ""
    });
    const activeTab = computed(() => activeTabIndex.value !== void 0 ? props.tabs[activeTabIndex.value] : null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonIcon = _sfc_main$2;
      const _component_Icon = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-300 dark:border-muted-800 dark:bg-muted-950 flex gap-2 border-b bg-white" }, _attrs))}><!--[-->`);
      ssrRenderList(props.tabs, (tab, index) => {
        _push(`<button type="button" tabindex="0" class="${ssrRenderClass([[
          _ctx.tabs.length > 1 ? "border-b-2" : "cursor-default",
          _ctx.tabs.length > 1 && index === activeTabIndex.value ? "border-muted-800 dark:border-muted-100" : "border-transparent",
          index === activeTabIndex.value ? "text-muted-800 dark:text-muted-100 font-medium" : "text-muted-400 hover:text-muted-500 dark:hover:text-muted-300"
        ], "group/button text-sm"])}"><span class="${ssrRenderClass([[_ctx.tabs.length > 1 ? "group-hover/button:bg-muted-100 dark:group-hover/button:bg-muted-900" : ""], "m-1 block rounded-md px-3 py-1"])}">${ssrInterpolate(tab.filename?.replaceAll("(", "[")?.replaceAll(")", "]") || "\xA0")}</span></button>`);
      });
      _push(`<!--]-->`);
      if (unref(isSupported)) {
        _push(`<div class="${ssrRenderClass([_ctx.hasPreview ? "end-4" : "end-2", "pointer-events-none absolute z-[2] mt-12 opacity-0 transition-opacity duration-300 group-hover/code:pointer-events-auto group-hover/code:opacity-100"])}">`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          size: "sm",
          rounded: "md",
          "data-nui-tooltip": unref(copied) ? "Copied!" : "Copy",
          "data-nui-tooltip-position": "start",
          "aria-label": unref(copied) ? "Copied!" : "Copy",
          onClick: () => unref(copy)()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!unref(copied)) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:copy",
                  class: "size-4"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "lucide:check",
                  class: "text-success-500 size-4"
                }, null, _parent2, _scopeId));
              }
            } else {
              return [
                !unref(copied) ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: "lucide:copy",
                  class: "size-4"
                })) : (openBlock(), createBlock(_component_Icon, {
                  key: 1,
                  name: "lucide:check",
                  class: "text-success-500 size-4"
                }))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([_ctx.hasPreview ? "end-5" : "end-3", "absolute z-[2] mt-1.5"])}">`);
      if (unref(activeTab)?.language) {
        _push(`<span class="text-muted-500 text-xs font-medium">${ssrInterpolate(unref(activeTab).language)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/CodeGroupHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  props: {
    expandable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const expanded = ref(false);
    const wrapperEl = ref(null);
    const activeTabIndex = ref(0);
    provide("code-group-context", true);
    const isTag = (slot, tag) => {
      return slot.type && slot.type.tag && slot.type.tag === tag;
    };
    return () => {
      const previewSlot = context.slots?.preview?.();
      const slots = context.slots?.default?.() || [];
      const tabs = slots?.map?.((slot, index) => {
        return {
          filename: slot?.props?.filename,
          language: slot?.props?.language,
          code: slot?.props?.code,
          active: slot?.props?.active || false,
          component: slot
        };
      });
      return h(
        "div",
        {
          class: "py-6 nui-code-group",
          ref: wrapperEl
        },
        [
          h(
            "div",
            {
              class: "relative group/code w-full bg-white dark:bg-muted-950 rounded-lg overflow-hidden border !border-muted-300 dark:!border-muted-800",
              dir: "ltr"
            },
            [
              h(
                "div",
                {
                  class: {
                    "flex flex-col": true,
                    "first-tab": activeTabIndex.value === 0
                  }
                },
                [
                  previewSlot,
                  h(_sfc_main$1, {
                    "ref": "tabs-header",
                    "activeTabIndex": activeTabIndex.value,
                    tabs,
                    "hasPreview": !!previewSlot,
                    "onUpdate:activeTabIndex": (value) => activeTabIndex.value = value
                  }),
                  h(
                    "div",
                    {
                      class: [
                        "relative flex gap-2 bg-muted-50 dark:bg-muted-950 overflow-y-hidden",
                        !props.expandable ? "overflow-x-auto" : "",
                        props.expandable && !expanded.value ? "max-h-[220px] overflow-x-hidden" : "",
                        props.expandable && expanded.value ? "max-h-full overflow-x-auto" : ""
                      ],
                      text: activeTabIndex.value
                    },
                    [
                      h(
                        "div",
                        {
                          class: ["absolute -bottom-4 start-0 end-0 z-[2] w-full h-20 flex items-center justify-center ", props.expandable ? "" : "hidden"]
                        },
                        [
                          h("div", {
                            class: ["relative z-[2] h-full w-full bg-muted-50 dark:bg-muted-950 blur-xl"]
                          }),
                          h(
                            "button",
                            {
                              type: "button",
                              class: [
                                "absolute bottom-8 start-0 end-0 mx-auto w-36 z-[3] py-1 px-4 flex items-center justify-center text-sm text-muted-500 hover:text-muted-800 dark:text-muted-400 dark:hover:text-muted-100 rounded-full border border-muted-300 dark:border-muted-700 hover:border-muted-200 dark:hover:border-muted-600 bg-white dark:bg-muted-800 transition-colors duration-300"
                              ],
                              onClick: () => {
                                expanded.value = !expanded.value;
                                if (!expanded.value) {
                                  wrapperEl.value?.scrollIntoView({
                                    behavior: "instant",
                                    block: "start"
                                  });
                                }
                              }
                            },
                            [
                              h(
                                "span",
                                expanded.value ? "Collapse code" : "Expand code"
                              )
                            ]
                          )
                        ]
                      ),
                      h(
                        "div",
                        {
                          class: [
                            " text-sm",
                            previewSlot ? "px-4" : "px-3",
                            props.expandable ? "pb-16" : ""
                          ]
                        },
                        // Map slots to content children
                        slots.map(
                          (slot, index) => h(
                            "div",
                            {
                              // Current slot is displayed, others are hidden
                              style: {
                                display: index === activeTabIndex.value ? "block" : "none"
                              }
                            },
                            // Display direct children if not a ```code``` block
                            [
                              isTag(slot, "code") || isTag(slot, "pre") ? slot : h(
                                "div",
                                {
                                  class: {
                                    "preview-canvas": true
                                  }
                                },
                                [slot.children?.default?.() || slot.children]
                              )
                            ]
                          )
                        )
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      );
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61a71f86"]]);

export { __nuxt_component_2 as default };
