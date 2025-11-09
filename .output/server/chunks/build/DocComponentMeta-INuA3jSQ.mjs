import { i as _export_sfc, b as _sfc_main$w, a as __nuxt_component_2$1, J as useAsyncData } from './server.mjs';
import _sfc_main$1 from './TairoTocAnchor-DaJFWAih.mjs';
import __nuxt_component_2 from './CodeGroup-BCSaQyMR.mjs';
import { _ as __nuxt_component_0 } from './AddonMarkdownRemark-DRrl86xF.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$3 } from './BaseMessage-B_09c9Mc.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toRef, computed, reactive } from 'vue';
import { U as kebabCase, V as upperFirst } from '../runtime.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
import './BaseButtonIcon-B-NRPykg.mjs';
import './BaseProse-BoVg3KNx.mjs';

async function useComponentMeta(componentName) {
  const _componentName = unref(componentName);
  {
    const { data } = await useAsyncData(
      `nuxt-component-meta${_componentName ? `-${_componentName}` : ""}`,
      () => {
        return $fetch(`/api/component-meta${_componentName ? `/${_componentName}` : ""}`);
      }
    );
    return computed(() => data.value);
  }
}
const excludedProps = ["modelValue", "modelModifiers"];
async function useDocumentationMeta(_name) {
  const name = toRef(_name);
  const meta = await useComponentMeta(name);
  const model = computed(
    () => meta.value?.meta?.props?.find((prop) => prop.name === "modelValue")
  );
  const modelModifiers = computed(
    () => {
      const prop = meta.value?.meta?.props?.find((prop2) => prop2.name === "modelModifiers");
      const modifierRe = /"([^"]+)"/gm;
      return prop?.type.match(modifierRe)?.map((m) => m.replace(/"/g, "")) ?? [];
    }
  );
  const props = computed(
    () => {
      const props2 = meta.value?.meta?.props?.filter(
        (prop) => !excludedProps.includes(prop.name) && !prop.tags.some((tag) => tag.name === "default")
      );
      props2.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      props2.sort((a, b) => {
        return a.required === b.required ? 0 : a.required ? -1 : 1;
      });
      return props2;
    }
  );
  const configurableProps = computed(
    () => meta.value?.meta?.props?.filter(
      (prop) => !excludedProps.includes(prop.name) && prop.tags.some((tag) => tag.name === "default")
    )
  );
  const events = computed(
    () => meta.value?.meta?.events?.filter(
      (prop) => prop.name !== "update:modelValue"
    )
  );
  const slots = computed(() => meta.value?.meta?.slots);
  const exposed = computed(
    () => meta.value?.meta?.exposed?.filter((item) => {
      const isProps = props.value?.findIndex((prop) => prop.name === item.name) >= 0;
      const isEvent = meta.value?.meta?.events?.findIndex(
        (event) => `on${event.name}`.toLowerCase() === item.name?.toLowerCase()
      ) >= 0;
      const isExcluded = item.name?.startsWith("$");
      const isModel = item.name === "modelValue" || item.name === "modelModifiers";
      return !(isProps || isEvent || isExcluded || isModel);
    })
  );
  const noOptions = computed(() => {
    return !(props.value?.length || events.value?.length || slots.value?.length || exposed.value?.length) && model.value === void 0;
  });
  function formatPropType(type) {
    const bracketsRe = /^{ (.*) }$/gm;
    const parenthesisRe = /^\((.*)\)/gm;
    return type.replaceAll("{ ", "{\n  ").replaceAll("; ", ";\n  ").replaceAll("\n  }", "\n}").replaceAll('" | ', '"\n  | ').replaceAll("unknown", "T").replace(bracketsRe, "(\n  $1\n)").replace(parenthesisRe, "(\n  $1\n)");
  }
  function renderNoOptions() {
    const code = ["```vue"];
    code.push(`<template>`);
    const oneline = [`  <${name.value} `, `/>`].join("");
    code.push(oneline);
    code.push(`</template>`);
    return code.join("\n");
  }
  function renderModel(prop) {
    const code = ["```vue"];
    const type = prop.type.replaceAll("unknown", "T");
    code.push(`<script setup lang="ts">`);
    if (type.length > 45) {
      code.push(
        [
          `// this type is generated to show you all possible values`,
          `type ${upperFirst(prop.name)}Data = ${type.replace(/{ /g, "{\n ").replace(/; ([a-z])/g, ";\n $1").replace(/; /g, ";\n")}

const ${prop.name} = ref<${upperFirst(
            prop.name
          )}Data>(${prop.default || ""})`
        ].join("\n")
      );
    } else {
      code.push(
        [`const value = ref<${type}>(${prop.default || ""})`].join("\n")
      );
    }
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [`  <${name.value} `, `v-model="value" `, `/>`].join("");
    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          "```"
        ].join("\n")
      );
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    return code.join("\n");
  }
  function renderProperty(prop) {
    const code = ["```vue"];
    const defaultValue = !prop.default || prop.default === "undefined" ? "" : prop.default;
    code.push(`<script setup lang="ts">`);
    if (prop.type.length > 45) {
      code.push(
        [
          `// this type is generated to show you all possible values`,
          `type ${upperFirst(prop.name)}Data = ${prop.type.replace(/{ /g, "{\n ").replace(/; ([a-z])/g, ";\n $1").replace(/; /g, ";\n")}

const ${prop.name} = ref<${upperFirst(
            prop.name
          )}Data>(${defaultValue})`
        ].join("\n")
      );
    } else {
      code.push(
        [`const ${prop.name} = ref<${prop.type}>(${defaultValue})`].join("\n")
      );
    }
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [
      `  <${name.value} `,
      `:${kebabCase(prop.name)}="${prop.name}" `,
      `/>`
    ].join("");
    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          "```"
        ].join("\n")
      );
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    return code.join("\n");
  }
  function renderSlot(slot) {
    const code = [];
    code.push("```vue");
    code.push(`<template>`);
    if (slot.type !== "{}" && slot.type !== "Record<string, never>") {
      code.push(`  <${name.value}>`);
      code.push(`    <template #${slot.name}="value">`);
      code.push(`      <!-- Your content -->`);
      code.push(`      <pre>{{ value }}</pre>`);
      code.push(`    </template>`);
    } else {
      code.push(`  <${name.value}>`);
      if (slot.name === "default") {
        code.push(`    <!-- Your content -->`);
      } else {
        code.push(`    <template #${slot.name}>`);
        code.push(`      <!-- Your content -->`);
        code.push(`    </template>`);
      }
    }
    code.push(`  </${name.value}>`);
    code.push(`</template>`);
    code.push("```");
    return code.join("\n");
  }
  function renderEvents(event) {
    const code = [];
    const handlerName = upperFirst(event.name).replace(
      /:([a-z])/g,
      (v) => v.replace(":", "").toUpperCase()
    );
    const handlerProps = event.type.startsWith("[") ? event.type.slice(1, -1) : event.type;
    code.push("```vue");
    code.push(`<script setup lang="ts">`);
    code.push(`function on${handlerName} (${handlerProps}) {`);
    code.push(`  // ...`);
    code.push(`}`);
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [
      `  <${name.value} `,
      `@${event.name}="on${handlerName}" `,
      `/>`
    ].join("");
    if (oneline.length > 55) {
      code.push(`  <${name.value}`);
      code.push(`    @${event.name}="on${handlerName}"`);
      code.push(`  />`);
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    code.push("```");
    return code.join("\n");
  }
  function renderExposed(prop) {
    const code = ["```vue"];
    code.push(`<script setup lang="ts">`);
    code.push(
      [
        `// this hold a ref to the component instance`,
        `const comp = ref()`,
        "",
        "watchEffect(() => {",
        `  // you can access all exposed properties with comp.value`,
        `  // like this: comp.value.${prop.name}`,
        `  console.log(comp.value.${prop.name})`,
        "})"
      ].join("\n")
    );
    code.push(`<\/script>`);
    code.push(``);
    code.push(`<template>`);
    const oneline = [`  <${name.value} `, `ref="comp" `, `/>`].join("");
    if (oneline.length > 55) {
      code.push(
        [
          ``,
          `<template>`,
          `  <${name.value}`,
          `    :${kebabCase(prop.name)}="${prop.name}"`,
          `  />`,
          `</template>`,
          "```"
        ].join("\n")
      );
    } else {
      code.push(oneline);
    }
    code.push(`</template>`);
    return code.join("\n");
  }
  return reactive({
    meta,
    model,
    modelModifiers,
    props,
    configurableProps,
    events,
    slots,
    exposed,
    noOptions,
    formatPropType,
    renderModel,
    renderProperty,
    renderSlot,
    renderEvents,
    renderExposed,
    renderNoOptions
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocComponentMeta",
  __ssrInlineRender: true,
  props: {
    name: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const docs = ([__temp, __restore] = withAsyncContext(() => useDocumentationMeta(() => props.name)), __temp = await __temp, __restore(), __temp);
    function wrapExternalLinks(string) {
      return string.replace(
        /https?:\/\/[^\s)]+/g,
        (url) => `<a class="text-primary-600 dark:text-primary-400 hover:underline" href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      const _component_TairoTocAnchor = _sfc_main$1;
      const _component_CodeGroup = __nuxt_component_2;
      const _component_AddonMarkdownRemark = __nuxt_component_0;
      const _component_BaseTag = _sfc_main$2;
      const _component_Icon = __nuxt_component_2$1;
      const _component_BaseMessage = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-muted-200 dark:border-muted-800 mb-10 border-b py-6" }, _attrs))} data-v-25c586d1><div class="mb-4 flex items-center" data-v-25c586d1>`);
      if (unref(docs).meta?.pascalName) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h2",
          size: "xl",
          anchor: "",
          weight: "medium",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                label: `<${unref(docs).meta?.pascalName}>`
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  label: `<${unref(docs).meta?.pascalName}>`
                }, null, 8, ["label"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="doc-markdown border-muted-200 divansition-shadow dark:border-muted-700 dark:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/20 rounded-lg border bg-white duration-300 hover:shadow-lg" data-v-25c586d1>`);
      if (unref(docs).noOptions) {
        _push(`<div class="mx-auto w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-usage`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0648\u0644\u06CC\u0647"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-usage`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0648\u0644\u06CC\u0647"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="p-6" data-v-25c586d1><div class="font-alt w-full" data-v-25c586d1><div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-4" data-v-25c586d1><div class="flex" data-v-25c586d1><div class="text-muted-600 dark:text-muted-300 font-mono text-xs font-medium" data-v-25c586d1><span data-v-25c586d1>\u0627\u06CC\u0646 \u06A9\u0627\u0645\u067E\u0648\u0646\u0646\u062A \u0647\u06CC\u0686 \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0627\u06CC \u0646\u062F\u0627\u0631\u062F</span></div></div></div><div class="col-span-1 lg:col-span-8" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                lines: false,
                class: "max-w-none",
                source: unref(docs).renderNoOptions()
              }, null, _parent2, _scopeId));
              _push2(`</code>`);
            } else {
              return [
                createVNode("code", {
                  filename: "<app>/components/MyComponent.vue",
                  language: "vue"
                }, [
                  createVNode(_component_AddonMarkdownRemark, {
                    lines: false,
                    class: "max-w-none",
                    source: unref(docs).renderNoOptions()
                  }, null, 8, ["source"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).model) {
        _push(`<div class="mx-auto w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-model`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "Model"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-model`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "Model"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-25c586d1><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0627\u0645 </div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0648\u0639 </div></div></div></div></div></div><div class="p-6" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="divide-muted-100 dark:divide-muted-700 space-y-12 divide-y text-sm" data-v-25c586d1><div class="grid grid-cols-1 gap-6 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="flex" data-v-25c586d1><div class="text-muted-800 dark:text-muted-100 font-medium" data-v-25c586d1><span class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-25c586d1><code data-v-25c586d1>v-model</code></span></div></div>`);
        if (unref(docs).model.description) {
          _push(`<div class="text-muted-400 whitespace-pre-wrap break-words text-start italic" data-v-25c586d1>${ssrInterpolate(unref(docs).model.description)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(docs).modelModifiers?.length > 0) {
          _push(`<div class="mt-4 space-y-2 break-words" data-v-25c586d1><div class="text-muted-400 text-xs font-semibold" data-v-25c586d1> modifiers </div><!--[-->`);
          ssrRenderList(unref(docs).modelModifiers, (modifier) => {
            _push(`<div class="text-muted-400 text-xs" data-v-25c586d1><p data-v-25c586d1><code data-v-25c586d1>v-model.${ssrInterpolate(modifier)}</code></p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(docs).model.tags?.length > 0) {
          _push(`<div class="mt-3 space-y-2 break-words" data-v-25c586d1><!--[-->`);
          ssrRenderList(unref(docs).model.tags, (tag) => {
            _push(`<div class="text-muted-400 text-xs" data-v-25c586d1><p class="font-semibold" data-v-25c586d1> @${ssrInterpolate(tag.name)}</p>`);
            if (tag.text) {
              _push(`<p class="block" data-v-25c586d1>${wrapExternalLinks(tag.text)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(docs).model.required) {
          _push(ssrRenderComponent(_component_BaseTag, {
            color: "danger",
            size: "sm",
            variant: "pastel",
            class: "my-2 font-mono"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u0636\u0631\u0648\u0631\u06CC `);
              } else {
                return [
                  createTextVNode(" \u0636\u0631\u0648\u0631\u06CC ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-span-1 lg:col-span-9" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
          class: "inline-sample",
          lines: false,
          source: `\`\`\`ts
${unref(docs).model.type.replaceAll("unknown", "T")}
\`\`\``
        }, null, _parent));
        _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-25c586d1><details class="group" data-v-25c586d1><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-25c586d1><span class="inline group-open:hidden" data-v-25c586d1>\u0646\u0645\u0627\u06CC\u0634 \u0645\u062B\u0627\u0644</span><span class="hidden group-open:inline" data-v-25c586d1>\u0645\u062E\u0641\u06CC \u06A9\u0631\u062F\u0646 \u0645\u062B\u0627\u0644</span>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:chevron-down",
          class: "text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
        }, null, _parent));
        _push(`</summary>`);
        _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                lines: false,
                class: "max-w-none",
                source: unref(docs).renderModel(unref(docs).model)
              }, null, _parent2, _scopeId));
              _push2(`</code>`);
            } else {
              return [
                createVNode("code", {
                  filename: "<app>/components/MyComponent.vue",
                  language: "vue"
                }, [
                  createVNode(_component_AddonMarkdownRemark, {
                    lines: false,
                    class: "max-w-none",
                    source: unref(docs).renderModel(unref(docs).model)
                  }, null, 8, ["source"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</details></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).props?.length > 0) {
        _push(`<div class="mx-auto w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-properties`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "\u062E\u0635\u0648\u0635\u06CC\u0627\u062A"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-properties`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "\u062E\u0635\u0648\u0635\u06CC\u0627\u062A"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-25c586d1><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0627\u0645 </div></div><div class="col-span-2 lg:col-span-9" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0648\u0639 </div></div></div></div></div></div><div class="p-6" data-v-25c586d1><div class="font-alt w-full" data-v-25c586d1><!--[-->`);
        ssrRenderList(unref(docs).props, (prop) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="flex" data-v-25c586d1><div class="text-muted-800 dark:text-muted-100 font-medium" data-v-25c586d1><span class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-25c586d1><code data-v-25c586d1>${ssrInterpolate(unref(kebabCase)(prop.name))}</code></span></div></div>`);
          if (prop.description) {
            _push(`<div class="text-muted-400 whitespace-pre-wrap break-words text-start italic" data-v-25c586d1>${ssrInterpolate(prop.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (prop.tags?.length > 0) {
            _push(`<div class="mt-3 space-y-2 break-words" data-v-25c586d1><!--[-->`);
            ssrRenderList(prop.tags, (tag) => {
              _push(`<div class="text-muted-400 text-xs" data-v-25c586d1><p class="font-semibold" data-v-25c586d1> @${ssrInterpolate(tag.name)}</p>`);
              if (tag.text) {
                _push(`<p class="block" data-v-25c586d1>${wrapExternalLinks(tag.text)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (prop.required) {
            _push(ssrRenderComponent(_component_BaseTag, {
              color: "danger",
              size: "sm",
              variant: "pastel",
              class: "my-2 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u0636\u0631\u0648\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0636\u0631\u0648\u0631\u06CC ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="col-span-2 lg:col-span-9" data-v-25c586d1>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample",
            lines: false,
            source: `\`\`\`ts
/* default: ${prop.default} */
${unref(docs).formatPropType(prop.type)}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-25c586d1><details class="group" data-v-25c586d1><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-25c586d1><span class="inline group-open:hidden" data-v-25c586d1>\u0646\u0645\u0627\u06CC\u0634 \u0645\u062B\u0627\u0644</span><span class="hidden group-open:inline" data-v-25c586d1>\u0645\u062E\u0641\u06CC \u06A9\u0631\u062F\u0646 \u0645\u062B\u0627\u0644</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                  lines: false,
                  class: "max-w-none",
                  source: unref(docs).renderProperty(prop)
                }, null, _parent2, _scopeId));
                _push2(`</code>`);
              } else {
                return [
                  createVNode("code", {
                    filename: "<app>/components/MyComponent.vue",
                    language: "vue"
                  }, [
                    createVNode(_component_AddonMarkdownRemark, {
                      lines: false,
                      class: "max-w-none",
                      source: unref(docs).renderProperty(prop)
                    }, null, 8, ["source"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).configurableProps?.length > 0) {
        _push(`<div class="mx-auto w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-properties-app-config`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "\u062E\u0635\u0648\u0635\u06CC\u0627\u062A (\u0628\u0627 app.config)"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-properties-app-config`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "\u062E\u0635\u0648\u0635\u06CC\u0627\u062A (\u0628\u0627 app.config)"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-25c586d1><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0627\u0645 </div></div><div class="col-span-2 lg:col-span-9" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0648\u0639 </div></div></div></div></div></div><div class="p-6" data-v-25c586d1><div class="font-alt w-full" data-v-25c586d1><!--[-->`);
        ssrRenderList(unref(docs).configurableProps, (prop) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="flex" data-v-25c586d1><div class="text-muted-800 dark:text-muted-100 font-medium" data-v-25c586d1><span class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-25c586d1><code data-v-25c586d1>${ssrInterpolate(unref(kebabCase)(prop.name))}</code></span></div></div>`);
          if (prop.description) {
            _push(`<div class="text-muted-400 whitespace-pre-wrap break-words text-start italic" data-v-25c586d1>${ssrInterpolate(prop.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (prop.tags.filter((tag) => tag.name !== "default")?.length > 0) {
            _push(`<div class="mt-3 space-y-2 break-words" data-v-25c586d1><!--[-->`);
            ssrRenderList(prop.tags.filter((tag) => tag.name !== "default"), (tag) => {
              _push(`<div class="text-muted-400 text-xs" data-v-25c586d1><p class="font-semibold" data-v-25c586d1> @${ssrInterpolate(tag.name)}</p>`);
              if (tag.text) {
                _push(`<p class="block" data-v-25c586d1>${wrapExternalLinks(tag.text)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (prop.required) {
            _push(ssrRenderComponent(_component_BaseTag, {
              color: "danger",
              size: "sm",
              variant: "pastel",
              class: "my-2 font-mono"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u0636\u0631\u0648\u0631\u06CC `);
                } else {
                  return [
                    createTextVNode(" \u0636\u0631\u0648\u0631\u06CC ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="col-span-2 lg:col-span-9" data-v-25c586d1>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample",
            lines: false,
            source: `\`\`\`ts
/* app.config.ts

defineAppConfig(${JSON.stringify({
              nui: {
                [unref(docs).meta?.pascalName]: {
                  [prop.name]: prop.tags.find((tag) => tag.name === "default")?.text?.replaceAll("'", "")
                }
              }
            }, null, 2)}) */

${unref(docs).formatPropType(prop.type)}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-25c586d1><details class="group" data-v-25c586d1><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-25c586d1><span class="inline group-open:hidden" data-v-25c586d1>\u0646\u0645\u0627\u06CC\u0634 \u0645\u062B\u0627\u0644</span><span class="hidden group-open:inline" data-v-25c586d1>\u0645\u062E\u0641\u06CC \u06A9\u0631\u062F\u0646 \u0645\u062B\u0627\u0644</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                  lines: false,
                  class: "max-w-none",
                  source: unref(docs).renderProperty(prop)
                }, null, _parent2, _scopeId));
                _push2(`</code>`);
              } else {
                return [
                  createVNode("code", {
                    filename: "<app>/components/MyComponent.vue",
                    language: "vue"
                  }, [
                    createVNode(_component_AddonMarkdownRemark, {
                      lines: false,
                      class: "max-w-none",
                      source: unref(docs).renderProperty(prop)
                    }, null, 8, ["source"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).events?.length > 0) {
        _push(`<div class="mx-auto mt-10 w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-events`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "Events"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-events`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "Events"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-25c586d1><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0627\u0645 </div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0648\u0639 \u0645\u0642\u062F\u0627\u0631 \u0645\u0646\u062A\u0634\u0631 \u0634\u062F\u0647 </div></div></div></div></div></div><div class="p-6" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><!--[-->`);
        ssrRenderList(unref(docs).events, (event) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="flex items-center" data-v-25c586d1><div class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-25c586d1><code data-v-25c586d1>@${ssrInterpolate(event.name)}</code>`);
          if (event.description) {
            _push(`<div class="text-muted-400 whitespace-pre-wrap break-words text-start italic" data-v-25c586d1>${ssrInterpolate(event.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1>`);
          if (event.type === "[]") {
            _push(ssrRenderComponent(_component_BaseMessage, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` \u0627\u06CC\u0646 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627 \u0647\u06CC\u0686 \u0627\u0631\u0632\u0634\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0645\u06CC\u200C\u06A9\u0646\u0646\u062F `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u0646 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627 \u0647\u06CC\u0686 \u0627\u0631\u0632\u0634\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0645\u06CC\u200C\u06A9\u0646\u0646\u062F ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
              class: "inline-sample max-w-none",
              lines: false,
              source: `\`\`\`ts
${(event.type.startsWith("[") ? event.type.slice(1, -1) : event.type).replace("value?: ", "")}
\`\`\``
            }, null, _parent));
          }
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-25c586d1><details class="group" data-v-25c586d1><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-25c586d1><span class="inline group-open:hidden" data-v-25c586d1>\u0646\u0645\u0627\u06CC\u0634 \u0645\u062B\u0627\u0644</span><span class="hidden group-open:inline" data-v-25c586d1>\u0645\u062E\u0641\u06CC \u06A9\u0631\u062F\u0646 \u0645\u062B\u0627\u0644</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                  lines: false,
                  class: "max-w-none",
                  source: unref(docs).renderEvents(event)
                }, null, _parent2, _scopeId));
                _push2(`</code>`);
              } else {
                return [
                  createVNode("code", {
                    filename: "<app>/components/MyComponent.vue",
                    language: "vue"
                  }, [
                    createVNode(_component_AddonMarkdownRemark, {
                      lines: false,
                      class: "max-w-none",
                      source: unref(docs).renderEvents(event)
                    }, null, 8, ["source"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).slots?.length > 0) {
        _push(`<div class="mx-auto mt-10 w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-slots`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "Slots"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-slots`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "Slots"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-25c586d1><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0627\u0645 </div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0648\u0639 \u067E\u0631\u0627\u067E \u0627\u0633\u0644\u0627\u062A </div></div></div></div></div></div><div class="p-6" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><!--[-->`);
        ssrRenderList(unref(docs).slots, (slot) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="flex items-center" data-v-25c586d1><div class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-25c586d1><code data-v-25c586d1>#${ssrInterpolate(slot.name)}</code>`);
          if (slot.description) {
            _push(`<div class="text-muted-400 whitespace-pre-wrap break-words text-start italic" data-v-25c586d1>${ssrInterpolate(slot.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1>`);
          if (slot.type === "Record<string, never>" || slot.type === "{}") {
            _push(ssrRenderComponent(_component_BaseMessage, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` This slot has no inherted props `);
                } else {
                  return [
                    createTextVNode(" This slot has no inherted props ")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
              class: "inline-sample max-w-none",
              lines: false,
              source: `\`\`\`ts
${unref(docs).formatPropType(slot.type)}
\`\`\``
            }, null, _parent));
          }
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-25c586d1><details class="group" data-v-25c586d1><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-25c586d1><span class="inline group-open:hidden" data-v-25c586d1>\u0646\u0645\u0627\u06CC\u0634 \u0645\u062B\u0627\u0644</span><span class="hidden group-open:inline" data-v-25c586d1>\u0645\u062E\u0641\u06CC \u06A9\u0631\u062F\u0646 \u0645\u062B\u0627\u0644</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                  lines: false,
                  class: "max-w-none",
                  source: unref(docs).renderSlot(slot)
                }, null, _parent2, _scopeId));
                _push2(`</code>`);
              } else {
                return [
                  createVNode("code", {
                    filename: "<app>/components/MyComponent.vue",
                    language: "vue"
                  }, [
                    createVNode(_component_AddonMarkdownRemark, {
                      lines: false,
                      class: "max-w-none",
                      source: unref(docs).renderSlot(slot)
                    }, null, 8, ["source"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(docs).exposed?.length > 0) {
        _push(`<div class="mx-auto mt-10 w-full" data-v-25c586d1><div class="px-6 pb-2 pt-6" data-v-25c586d1>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h3",
          size: "md",
          weight: "semibold",
          class: "text-muted-800 dark:text-muted-200"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_TairoTocAnchor, {
                id: `${unref(docs)?.meta?.kebabName}-exposed`,
                level: 3,
                prefix: "\u2022",
                "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                label: "Exposed"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_TairoTocAnchor, {
                  id: `${unref(docs)?.meta?.kebabName}-exposed`,
                  level: 3,
                  prefix: "\u2022",
                  "prefix-classes": "opacity-30 group-hover/toc:opacity-100 group-focus/toc:opacity-100 group-visible/toc:opacity-100 text-primary-500 absolute -start-3 -top-0.5",
                  label: "Exposed"
                }, null, 8, ["id"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="hidden lg:block" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase" data-v-25c586d1><div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0627\u0645 </div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1><div class="text-start font-semibold" data-v-25c586d1> \u0646\u0648\u0639 </div></div></div></div></div></div><div class="p-6" data-v-25c586d1><div class="div-auto font-alt w-full" data-v-25c586d1><!--[-->`);
        ssrRenderList(unref(docs).exposed, (exposed) => {
          _push(`<div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12" data-v-25c586d1><div class="col-span-1 lg:col-span-3" data-v-25c586d1><div class="flex items-center" data-v-25c586d1><div class="text-muted-800 dark:text-muted-100 font-mono font-medium" data-v-25c586d1><code data-v-25c586d1>${ssrInterpolate(exposed.name)}</code></div></div><div class="text-muted-400 whitespace-pre-wrap break-words text-start italic" data-v-25c586d1>${ssrInterpolate(exposed.description)}</div></div><div class="col-span-1 lg:col-span-9" data-v-25c586d1>`);
          _push(ssrRenderComponent(_component_AddonMarkdownRemark, {
            class: "inline-sample max-w-none",
            lines: false,
            source: `\`\`\`ts
${exposed.type.replaceAll(" | ", "\n  | ")}
\`\`\``
          }, null, _parent));
          _push(`</div><div class="col-span-1 lg:col-span-9 lg:col-start-4" data-v-25c586d1><details class="group" data-v-25c586d1><summary class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100" data-v-25c586d1><span class="inline group-open:hidden" data-v-25c586d1>\u0646\u0645\u0627\u06CC\u0634 \u0645\u062B\u0627\u0644</span><span class="hidden group-open:inline" data-v-25c586d1>\u0645\u062E\u0641\u06CC \u06A9\u0631\u062F\u0646 \u0645\u062B\u0627\u0644</span>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-down",
            class: "text-muted-400 size-4 transition-transform duration-200 group-open:rotate-180"
          }, null, _parent));
          _push(`</summary>`);
          _push(ssrRenderComponent(_component_CodeGroup, { class: "[&_.shiki]:my-4" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<code filename="&lt;app&gt;/components/MyComponent.vue" language="vue" data-v-25c586d1${_scopeId}>`);
                _push2(ssrRenderComponent(_component_AddonMarkdownRemark, {
                  lines: false,
                  class: "max-w-none",
                  source: unref(docs).renderExposed(exposed)
                }, null, _parent2, _scopeId));
                _push2(`</code>`);
              } else {
                return [
                  createVNode("code", {
                    filename: "<app>/components/MyComponent.vue",
                    language: "vue"
                  }, [
                    createVNode(_component_AddonMarkdownRemark, {
                      lines: false,
                      class: "max-w-none",
                      source: unref(docs).renderExposed(exposed)
                    }, null, 8, ["source"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</details></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/components/content/DocComponentMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DocComponentMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25c586d1"]]);

export { DocComponentMeta as default };
