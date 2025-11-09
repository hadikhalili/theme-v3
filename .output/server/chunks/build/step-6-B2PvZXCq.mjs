import { _ as _sfc_main$1 } from './DemoWizardStepTitle-DDg6AMcY.mjs';
import { _ as _sfc_main$2 } from './BaseCheckboxHeadless-CATHSw1E.mjs';
import { Q as useHead, h as _sfc_main$u } from './server.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "step-6",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647"
    });
    const { data: project, checkPreviousSteps } = useMultiStepForm();
    const tools = [
      {
        name: "\u0627\u06CC\u0644\u0627\u0633\u062A\u0631\u06CC\u062A\u0648\u0631",
        description: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0637\u0631\u0627\u062D\u06CC",
        logo: "/img/logos/tools/illustrator.svg"
      },
      {
        name: "\u0641\u062A\u0648\u0634\u0627\u067E",
        description: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0637\u0631\u0627\u062D\u06CC",
        logo: "/img/logos/tools/photoshop.svg"
      },
      {
        name: "\u0627\u062F\u0648\u0628\u06CC XD",
        description: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0637\u0631\u0627\u062D\u06CC",
        logo: "/img/logos/tools/xd.svg"
      },
      {
        name: "\u0641\u06CC\u06AF\u0645\u0627",
        description: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0637\u0631\u0627\u062D\u06CC",
        logo: "/img/logos/tools/xd.svg"
      },
      {
        name: "\u0627\u06CC\u0646\u0648\u0698\u0646",
        description: "\u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631 \u0637\u0631\u0627\u062D\u06CC",
        logo: "/img/logos/tools/invision.svg"
      },
      {
        name: "\u062C\u06CC\u0631\u0627",
        description: "\u0631\u062F\u06CC\u0627\u0628 \u0645\u0634\u06A9\u0644\u0627\u062A",
        logo: "/img/logos/tools/jira.svg"
      },
      {
        name: "\u062A\u0627\u06CC\u06AF\u0627",
        description: "\u062A\u062E\u062A\u0647 \u0627\u0633\u06A9\u0631\u0627\u0645",
        logo: "/img/logos/tools/taiga.svg"
      },
      {
        name: "\u0627\u0633\u0644\u06A9",
        description: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646",
        logo: "/img/logos/tools/slack.svg"
      },
      {
        name: "\u0622\u0633\u0627\u0646\u0627",
        description: "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0648\u0638\u0627\u06CC\u0641",
        logo: "/img/logos/tools/asana.svg"
      },
      {
        name: "\u062A\u06CC\u0645\u200C\u0648\u0631\u06A9",
        description: "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0647\u0645\u06A9\u0627\u0631\u06CC",
        logo: "/img/logos/tools/teamwork.svg"
      },
      {
        name: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
        description: "\u0645\u062E\u0632\u0646 \u06A9\u062F",
        logo: "/img/logos/tools/github.svg"
      },
      {
        name: "\u06AF\u06CC\u062A\u200C\u0644\u0628",
        description: "\u0645\u062E\u0632\u0646 \u06A9\u062F",
        logo: "/img/logos/tools/gitlab.svg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseCheckboxHeadless = _sfc_main$2;
      const _component_BaseCard = _sfc_main$u;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
      _push(`<div class="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-3"><!--[-->`);
      ssrRenderList(tools, (tool) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(project).tools,
          "onUpdate:modelValue": ($event) => unref(project).tools = $event,
          value: tool,
          name: tool.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}><img${ssrRenderAttr("src", tool.logo)} class="size-8" alt=""${_scopeId2}><div${_scopeId2}><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId2}>${ssrInterpolate(tool.name)}</div><div class="text-muted-400 text-xs"${_scopeId2}>${ssrInterpolate(tool.description)}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("img", {
                          src: tool.logo,
                          class: "size-8",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                          createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "peer-checked:border-primary-500 peer-checked:shadow-muted-300/30 dark:peer-checked:shadow-muted-900/30 p-4 peer-checked:shadow-xl"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("img", {
                        src: tool.logo,
                        class: "size-8",
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                        createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
