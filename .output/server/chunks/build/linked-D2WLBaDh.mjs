import { _ as _sfc_main$1 } from './DemoPlaceholderMinimal-0TDRe2Dy.mjs';
import { j as useRoute, u as useRouter, t as usePanels, e as _sfc_main$e } from './server.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "linked",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const page = computed(() => parseInt(route.query.page ?? "1"));
    const filter = ref("");
    const perPage = ref(45);
    usePanels();
    watch([filter, perPage], () => {
      router.push({
        query: {
          page: void 0
        }
      });
    });
    const query = computed(() => {
      return {
        filter: filter.value,
        perPage: perPage.value,
        page: page.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/accounts/linked",
      {
        query
      },
      "$lm7PfDgajH"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoPlaceholderMinimal = _sfc_main$1;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(data)?.data?.length === 0) {
        _push(ssrRenderComponent(_component_DemoPlaceholderMinimal, {
          title: "\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u06CC\u0686 \u062D\u0633\u0627\u0628 \u0645\u062A\u0635\u0644 \u0646\u062F\u0627\u0631\u06CC\u062F",
          description: "\u062D\u0633\u0627\u0628\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC \u062E\u0627\u0631\u062C\u06CC \u0631\u0627 \u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u0642\u0627\u0644 \u0648\u062C\u0647 \u0645\u062A\u0635\u0644 \u06A9\u0646\u06CC\u062F. \u067E\u0633 \u0627\u0632 \u0627\u0641\u0632\u0648\u062F\u0646 \u062D\u0633\u0627\u0628\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0627\u06CC\u0646\u062C\u0627 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0646\u06CC\u062F."
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-3 flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                rounded: "md",
                color: "primary",
                class: "w-40"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u062A\u0635\u0627\u0644 \u06CC\u06A9 \u062D\u0633\u0627\u0628 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u062A\u0635\u0627\u0644 \u06CC\u06A9 \u062D\u0633\u0627\u0628 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mt-3 flex justify-center" }, [
                  createVNode(_component_BaseButton, {
                    rounded: "md",
                    color: "primary",
                    class: "w-40"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u062A\u0635\u0627\u0644 \u06CC\u06A9 \u062D\u0633\u0627\u0628 ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/accounts/linked.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
