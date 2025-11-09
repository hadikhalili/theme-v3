import { j as useRoute, S as navigateTo, e as _sfc_main$e, a as __nuxt_component_2, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, f as _sfc_main$C, l as _sfc_main$3$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$2 } from './BaseTag-CQSmGSbm.mjs';
import { _ as _sfc_main$3 } from './BaseSwitchBall-krBQpZlI.mjs';
import { defineComponent, ref, computed, withAsyncContext, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, createCommentVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-XcIq5F0m.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const notifications = ref(true);
    const route = useRoute();
    const slug = computed(() => route.params.slug);
    const query = computed(() => {
      return {
        slug: slug.value
      };
    });
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/payments/recipients",
      {
        query
      },
      "$3a44IE5Lyk"
    )), __temp = await __temp, __restore(), __temp);
    if (!data.value?.recipient) {
      [__temp, __restore] = withAsyncContext(() => navigateTo("/layouts/payments/recipients")), await __temp, __restore();
    }
    const totalSent = computed(() => {
      return data.value?.recipient?.transactions.reduce(
        (acc, item) => {
          if (item.type === "out") {
            return acc + item.amount;
          }
          return acc;
        },
        0
      );
    });
    const totalReceived = computed(() => {
      return data.value?.recipient?.transactions.reduce(
        (acc, item) => {
          if (item.type === "in") {
            return acc + item.amount;
          }
          return acc;
        },
        0
      );
    });
    function statusColor(itemStatus) {
      switch (itemStatus) {
        case "\u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647":
          return "muted";
        case "\u062F\u0631 \u062D\u0627\u0644 \u062A\u06A9\u0645\u06CC\u0644":
          return "primary";
        case "\u062F\u0631 \u062D\u0627\u0644 \u067E\u0631\u062F\u0627\u0632\u0634":
          return "info";
        case "\u0631\u062F \u0634\u062F\u0647":
          return "warning";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseTag = _sfc_main$2;
      const _component_BaseText = _sfc_main$C;
      const _component_BaseSwitchBall = _sfc_main$3;
      const _component_BasePlaceholderPage = _sfc_main$3$1;
      if (unref(data)?.recipient) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20" }, _attrs))}><div class="flex items-center justify-end py-6"><div class="hidden items-center gap-2 md:flex">`);
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/layouts/payments/recipients",
          rounded: "full",
          color: "default",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-left",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u0628\u0627\u0632\u06AF\u0634\u062A</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:arrow-left",
                  class: "size-4"
                }),
                createVNode("span", null, "\u0628\u0627\u0632\u06AF\u0634\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "/layouts/contacts/create",
          rounded: "full",
          color: "default",
          size: "sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:plus",
                class: "size-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>\u062A\u0645\u0627\u0633 \u062C\u062F\u06CC\u062F</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:plus",
                  class: "size-4"
                }),
                createVNode("span", null, "\u062A\u0645\u0627\u0633 \u062C\u062F\u06CC\u062F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="grid grid-cols-12 gap-6"><div class="ltablet:col-span-4 col-span-12 lg:col-span-4"><div class="flex flex-col gap-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          shadow: "hover",
          class: "p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="border-muted-200 dark:border-muted-800 mb-6 flex items-center gap-4 border-b pb-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseAvatar, {
                src: unref(data).recipient.picture,
                alt: unref(data).recipient.name,
                size: "lg",
                rounded: "none",
                mask: "blob",
                class: "bg-muted-100 dark:bg-muted-900"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "medium",
                size: "lg",
                lead: "none",
                class: "line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.category)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.category), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="mb-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "medium",
                size: "md",
                lead: "none",
                class: "mb-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0622\u062F\u0631\u0633 `);
                  } else {
                    return [
                      createTextVNode(" \u0622\u062F\u0631\u0633 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(unref(data).recipient.address, (item) => {
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  key: item,
                  size: "xs",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-500 dark:text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.country)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.country), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                variant: "pastel",
                rounded: "md",
                color: "primary",
                class: "w-full"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u062E\u0627\u0637\u0628 `);
                  } else {
                    return [
                      createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u062E\u0627\u0637\u0628 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "border-muted-200 dark:border-muted-800 mb-6 flex items-center gap-4 border-b pb-8" }, [
                  createVNode(_component_BaseAvatar, {
                    src: unref(data).recipient.picture,
                    alt: unref(data).recipient.name,
                    size: "lg",
                    rounded: "none",
                    mask: "blob",
                    class: "bg-muted-100 dark:bg-muted-900"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      weight: "medium",
                      size: "lg",
                      lead: "none",
                      class: "line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.category), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mb-6" }, [
                  createVNode(_component_BaseHeading, {
                    weight: "medium",
                    size: "md",
                    lead: "none",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0622\u062F\u0631\u0633 ")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).recipient.address, (item) => {
                    return openBlock(), createBlock(_component_BaseParagraph, {
                      key: item,
                      size: "xs",
                      class: "text-muted-500 dark:text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_BaseParagraph, {
                    size: "xs",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(data).recipient.country), 1)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", null, [
                  createVNode(_component_BaseButton, {
                    variant: "pastel",
                    rounded: "md",
                    color: "primary",
                    class: "w-full"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u062E\u0627\u0637\u0628 ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          shadow: "hover",
          class: "p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-6"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "medium",
                size: "lg",
                lead: "none",
                class: "line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0636\u0627\u0641\u06CC `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0636\u0627\u0641\u06CC ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0646 \u062A\u0645\u0627\u0633 `);
                  } else {
                    return [
                      createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0646 \u062A\u0645\u0627\u0633 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="mb-6 space-y-4"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:circle-dashed-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
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
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseTag, {
                rounded: "full",
                variant: "pastel",
                color: unref(data).recipient.status === "\u0641\u0639\u0627\u0644" ? "success" : "muted",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.status), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:envelope-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u06CC\u0645\u06CC\u0644 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u06CC\u0645\u06CC\u0644 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.email)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.email), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:phone-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 `);
                  } else {
                    return [
                      createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.phoneNumber)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.phoneNumber), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:bank-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0634\u0646\u0627\u0633\u0647 \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC `);
                  } else {
                    return [
                      createTextVNode(" \u0634\u0646\u0627\u0633\u0647 \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.taxId)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.taxId), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between"${_scopeId}><div class="text-muted-400 flex items-center gap-1"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ph:chats-circle-duotone",
                class: "size-5"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0632\u0628\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(" \u0632\u0628\u0627\u0646 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                weight: "medium",
                class: "text-muted-800 dark:text-muted-100 line-clamp-1 capitalize"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.language)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.language), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="border-muted-200 dark:border-muted-800 flex items-center justify-between border-t pt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseText, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseSwitchBall, {
                modelValue: unref(notifications),
                "onUpdate:modelValue": ($event) => isRef(notifications) ? notifications.value = $event : null,
                color: "primary"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "mb-6" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      weight: "medium",
                      size: "lg",
                      lead: "none",
                      class: "line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0636\u0627\u0641\u06CC ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062C\u0632\u0626\u06CC\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u0627\u06CC\u0646 \u062A\u0645\u0627\u0633 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mb-6 space-y-4" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:circle-dashed-duotone",
                        class: "size-5"
                      }),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0648\u0636\u0639\u06CC\u062A ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseTag, {
                      rounded: "full",
                      variant: "pastel",
                      color: unref(data).recipient.status === "\u0641\u0639\u0627\u0644" ? "success" : "muted",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.status), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:envelope-duotone",
                        class: "size-5"
                      }),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0627\u06CC\u0645\u06CC\u0644 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.email), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:phone-duotone",
                        class: "size-5"
                      }),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.phoneNumber), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:bank-duotone",
                        class: "size-5"
                      }),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0634\u0646\u0627\u0633\u0647 \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.taxId), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-muted-400 flex items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chats-circle-duotone",
                        class: "size-5"
                      }),
                      createVNode(_component_BaseParagraph, { size: "sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0632\u0628\u0627\u0646 ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      weight: "medium",
                      class: "text-muted-800 dark:text-muted-100 line-clamp-1 capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.language), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "border-muted-200 dark:border-muted-800 flex items-center justify-between border-t pt-4" }, [
                  createVNode(_component_BaseText, {
                    size: "sm",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627 ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseSwitchBall, {
                      modelValue: unref(notifications),
                      "onUpdate:modelValue": ($event) => isRef(notifications) ? notifications.value = $event : null,
                      color: "primary"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="ltablet:col-span-8 col-span-12 lg:col-span-8"><div class="grid grid-cols-12 gap-6"><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          shadow: "hover",
          class: "flex h-full flex-col items-center justify-center p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}>`);
              if (unref(data).recipient.paymentMethod.name === "paypal") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "logos:paypal",
                  class: "mb-4 text-4xl"
                }, null, _parent2, _scopeId));
              } else if (unref(data).recipient.paymentMethod.name === "stripe") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "bi:stripe",
                  class: "mb-4 text-4xl text-indigo-600"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "medium",
                size: "sm",
                lead: "none",
                class: "line-clamp-1 capitalize"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(data).recipient.paymentMethod.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(data).recipient.paymentMethod.name), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A `);
                  } else {
                    return [
                      createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  unref(data).recipient.paymentMethod.name === "paypal" ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: "logos:paypal",
                    class: "mb-4 text-4xl"
                  })) : unref(data).recipient.paymentMethod.name === "stripe" ? (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    name: "bi:stripe",
                    class: "mb-4 text-4xl text-indigo-600"
                  })) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      weight: "medium",
                      size: "sm",
                      lead: "none",
                      class: "line-clamp-1 capitalize"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(data).recipient.paymentMethod.name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0631\u0648\u0634 \u067E\u0631\u062F\u0627\u062E\u062A ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          shadow: "hover",
          class: "flex h-full flex-col items-center justify-center p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "semibold",
                size: "2xl",
                lead: "none",
                class: "mb-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(totalSent)?.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(totalSent)?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0645\u0642\u062F\u0627\u0631 \u0627\u0631\u0633\u0627\u0644\u200C\u0634\u062F\u0647 \u062F\u0631 \u0637\u0648\u0644 \u0639\u0645\u0631 `);
                  } else {
                    return [
                      createTextVNode(" \u0645\u0642\u062F\u0627\u0631 \u0627\u0631\u0633\u0627\u0644\u200C\u0634\u062F\u0647 \u062F\u0631 \u0637\u0648\u0644 \u0639\u0645\u0631 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      weight: "semibold",
                      size: "2xl",
                      lead: "none",
                      class: "mb-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(totalSent)?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0645\u0642\u062F\u0627\u0631 \u0627\u0631\u0633\u0627\u0644\u200C\u0634\u062F\u0647 \u062F\u0631 \u0637\u0648\u0644 \u0639\u0645\u0631 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          shadow: "hover",
          class: "flex h-full flex-col items-center justify-center p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                weight: "semibold",
                size: "2xl",
                lead: "none",
                class: "mb-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(totalReceived)?.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(totalReceived)?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "xs",
                class: "text-muted-400 line-clamp-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062F\u0631\u06CC\u0627\u0641\u062A \u0637\u0648\u0644 \u0639\u0645\u0631 `);
                  } else {
                    return [
                      createTextVNode(" \u062F\u0631\u06CC\u0627\u0641\u062A \u0637\u0648\u0644 \u0639\u0645\u0631 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, [
                  createVNode("div", null, [
                    createVNode(_component_BaseHeading, {
                      weight: "semibold",
                      size: "2xl",
                      lead: "none",
                      class: "mb-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(totalReceived)?.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseParagraph, {
                      size: "xs",
                      class: "text-muted-400 line-clamp-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062F\u0631\u06CC\u0627\u0641\u062A \u0637\u0648\u0644 \u0639\u0645\u0631 ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "md",
          shadow: "hover",
          class: "p-8"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-8 flex items-center justify-between"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                lead: "none",
                class: "text-muted-400 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 `);
                  } else {
                    return [
                      createTextVNode(" \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                to: "/layouts/send",
                rounded: "md",
                size: "sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 `);
                  } else {
                    return [
                      createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-7 overflow-x-auto"${_scopeId}>`);
              if (unref(data).recipient.transactions.length === 0) {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BasePlaceholderPage, {
                  title: "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A",
                  subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u06CC\u0686 \u062A\u0631\u0627\u06A9\u0646\u0634\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647 \u0628\u0647 \u0627\u06CC\u0646 \u06AF\u06CC\u0631\u0646\u062F\u0647 \u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644 \u06CC\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F\u06CC\u062F\u060C \u0628\u0627\u0632\u06AF\u0631\u062F\u06CC\u062F."
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<table class="w-full whitespace-nowrap"${_scopeId}><thead${_scopeId}><th class="w-1/5"${_scopeId}></th><th class="w-2/5"${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th><th${_scopeId}></th></thead><tbody${_scopeId}><!--[-->`);
                ssrRenderList(unref(data)?.recipient?.transactions, (item) => {
                  _push2(`<tr tabindex="0"${_scopeId}><td class="py-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseText, {
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.date)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.date), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</td><td class="py-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseText, {
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "text-muted-600 dark:text-muted-300"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.type === "in" ? "\u067E\u0648\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u0634\u062F\u0647" : "\u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644\u200C\u0634\u062F\u0647")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.type === "in" ? "\u067E\u0648\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u0634\u062F\u0647" : "\u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644\u200C\u0634\u062F\u0647"), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</td><td class="px-4 py-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseText, {
                    size: "sm",
                    weight: "semibold",
                    lead: "none",
                    class: "text-muted-800 dark:text-muted-100"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.amount.toFixed(2))} \u062A\u0648\u0645\u0627\u0646 `);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</td><td class="px-4 py-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseTag, {
                    variant: "pastel",
                    rounded: "full",
                    color: statusColor(item.status),
                    size: "sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.status)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.status), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</td><td class="px-4 py-2"${_scopeId}><div class="text-muted-400 flex items-center gap-2"${_scopeId}>`);
                  if (item.method === "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC") {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "ph:credit-card-duotone",
                      class: "size-5"
                    }, null, _parent2, _scopeId));
                  } else if (item.method === "\u0686\u06A9") {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "ph:pen-nib-duotone",
                      class: "size-5"
                    }, null, _parent2, _scopeId));
                  } else if (item.method === "\u0627\u0646\u062A\u0642\u0627\u0644") {
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: "ph:arrows-left-right-duotone",
                      class: "size-5"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(ssrRenderComponent(_component_BaseText, {
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "text-muted-400"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(item.method)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.method), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></td></tr>`);
                });
                _push2(`<!--]--></tbody></table>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mb-8 flex items-center justify-between" }, [
                  createVNode(_component_BaseHeading, {
                    as: "h4",
                    size: "sm",
                    weight: "medium",
                    lead: "none",
                    class: "text-muted-400 uppercase"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode(_component_BaseButton, {
                      to: "/layouts/send",
                      rounded: "md",
                      size: "sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0631\u0633\u0627\u0644 \u067E\u0648\u0644 ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-7 overflow-x-auto" }, [
                  unref(data).recipient.transactions.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_BasePlaceholderPage, {
                      title: "\u0686\u06CC\u0632\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A",
                      subtitle: "\u0628\u0647 \u0646\u0638\u0631 \u0645\u06CC\u200C\u0631\u0633\u062F \u0647\u06CC\u0686 \u062A\u0631\u0627\u06A9\u0646\u0634\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647 \u0628\u0647 \u0627\u06CC\u0646 \u06AF\u06CC\u0631\u0646\u062F\u0647 \u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644 \u06CC\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F\u06CC\u062F\u060C \u0628\u0627\u0632\u06AF\u0631\u062F\u06CC\u062F."
                    })
                  ])) : (openBlock(), createBlock("table", {
                    key: 1,
                    class: "w-full whitespace-nowrap"
                  }, [
                    createVNode("thead", null, [
                      createVNode("th", { class: "w-1/5" }),
                      createVNode("th", { class: "w-2/5" }),
                      createVNode("th"),
                      createVNode("th"),
                      createVNode("th"),
                      createVNode("th")
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data)?.recipient?.transactions, (item) => {
                        return openBlock(), createBlock("tr", {
                          key: item.id,
                          tabindex: "0"
                        }, [
                          createVNode("td", { class: "py-2" }, [
                            createVNode(_component_BaseText, {
                              size: "sm",
                              weight: "medium",
                              lead: "none",
                              class: "text-muted-400"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("td", { class: "py-2" }, [
                            createVNode(_component_BaseText, {
                              size: "sm",
                              weight: "medium",
                              lead: "none",
                              class: "text-muted-600 dark:text-muted-300"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.type === "in" ? "\u067E\u0648\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A\u200C\u0634\u062F\u0647" : "\u067E\u0648\u0644 \u0627\u0631\u0633\u0627\u0644\u200C\u0634\u062F\u0647"), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("td", { class: "px-4 py-2" }, [
                            createVNode(_component_BaseText, {
                              size: "sm",
                              weight: "semibold",
                              lead: "none",
                              class: "text-muted-800 dark:text-muted-100"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.amount.toFixed(2)) + " \u062A\u0648\u0645\u0627\u0646 ", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createVNode("td", { class: "px-4 py-2" }, [
                            createVNode(_component_BaseTag, {
                              variant: "pastel",
                              rounded: "full",
                              color: statusColor(item.status),
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("td", { class: "px-4 py-2" }, [
                            createVNode("div", { class: "text-muted-400 flex items-center gap-2" }, [
                              item.method === "\u06A9\u0627\u0631\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC" ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: "ph:credit-card-duotone",
                                class: "size-5"
                              })) : item.method === "\u0686\u06A9" ? (openBlock(), createBlock(_component_Icon, {
                                key: 1,
                                name: "ph:pen-nib-duotone",
                                class: "size-5"
                              })) : item.method === "\u0627\u0646\u062A\u0642\u0627\u0644" ? (openBlock(), createBlock(_component_Icon, {
                                key: 2,
                                name: "ph:arrows-left-right-duotone",
                                class: "size-5"
                              })) : createCommentVNode("", true),
                              createVNode(_component_BaseText, {
                                size: "sm",
                                weight: "medium",
                                lead: "none",
                                class: "text-muted-400"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.method), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]))
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/recipient/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
