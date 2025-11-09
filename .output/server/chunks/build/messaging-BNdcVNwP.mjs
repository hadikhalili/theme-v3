import { t as usePanels, j as useRoute, u as useRouter, _ as __nuxt_component_0$3, a as __nuxt_component_2, x as _sfc_main$I, k as _sfc_main$x, d as _sfc_main$D, e as _sfc_main$e, f as _sfc_main$C, q as _sfc_main$i, w as __nuxt_component_0$2 } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import { _ as _sfc_main$1 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, isRef, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { push } from 'notivue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useUserStore } from './user-DDZJ47NJ.mjs';
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
import '@headlessui/vue';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';
import './IconChevronDown-B9AzKHTY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "messaging",
  __ssrInlineRender: true,
  setup(__props) {
    usePanels();
    const route = useRoute();
    const router = useRouter();
    const llmProvider = ref(route.query.llm || "");
    const userStore = useUserStore();
    const userId = computed(() => userStore.user?.id || 0);
    let authRedirectTimeout = null;
    const notifyAuthRequirement = () => {
      if (authRedirectTimeout)
        return;
      push.error({
        title: "\u0646\u06CC\u0627\u0632 \u0628\u0647 \u0648\u0631\u0648\u062F",
        message: "\u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u067E\u06CC\u0627\u0645\u200C\u0631\u0633\u0627\u0646 \u0628\u0627\u06CC\u062F \u0648\u0627\u0631\u062F \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0634\u0648\u06CC\u062F."
      });
      authRedirectTimeout = setTimeout(() => {
        router.push("/auth");
        authRedirectTimeout = null;
      }, 3e3);
    };
    const ensureAuthenticated = () => {
      if (userId.value)
        return true;
      notifyAuthRequirement();
      return false;
    };
    const emptyConversation = ref([
      {
        id: 1,
        title: "\u0628\u062F\u0648\u0646 \u0639\u0646\u0648\u0627\u0646",
        provider: null,
        user: {
          name: "\u06A9\u0627\u0631\u0628\u0631 \u0646\u0627\u0634\u0646\u0627\u0633",
          profilePicture: "/img/avatars/default-other.jpg"
        },
        messages: [
          {
            type: "received",
            text: "\u067E\u06CC\u0627\u0645\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",
            time: "\u0647\u0645 \u0627\u06A9\u0646\u0648\u0646",
            attachments: []
          }
        ]
      }
    ]);
    const conversations = ref([...emptyConversation.value]);
    const chatEl = ref();
    const expanded = ref(true);
    const loading = ref(false);
    const message = ref("");
    const messageLoading = ref(false);
    const botTyping = ref(false);
    const activeConversation = ref(1);
    const selectedFiles = ref([]);
    ref(null);
    const filePreviews = ref([]);
    const creatingConversation = ref(false);
    const providerOptions = [
      { value: "gpt-3.5-turbo", label: "OpenAI GPT-3.5 Turbo" },
      { value: "gpt-4o-mini", label: "OpenAI GPT-4o Mini" },
      { value: "claude-3-sonnet", label: "Anthropic Claude 3 Sonnet" }
    ];
    const showCreateModal = ref(false);
    const newConversationTitle = ref("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F");
    const newConversationProvider = ref(providerOptions[0].value);
    const deletingConversation = ref(null);
    const cancelCreateConversation = () => {
      showCreateModal.value = false;
      creatingConversation.value = false;
      newConversationTitle.value = "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F";
      newConversationProvider.value = providerOptions[0].value;
    };
    const getConversationTitle = (conversation) => {
      return conversation.title || "\u0628\u062F\u0648\u0646 \u0639\u0646\u0648\u0627\u0646";
    };
    const selectedConversation = computed(() => {
      return conversations.value.find(
        (conversation) => conversation.id === activeConversation.value
      ) || emptyConversation.value[0];
    });
    const providerLabelMap = computed(() => {
      return providerOptions.reduce((acc, option) => {
        acc[option.value] = option.label;
        return acc;
      }, {});
    });
    const resolveProviderLabel = (value) => {
      if (!value)
        return null;
      return providerLabelMap.value[value] ?? value;
    };
    const selectedProviderLabel = computed(() => {
      const conversationProvider = resolveProviderLabel(selectedConversation.value.provider);
      if (conversationProvider)
        return conversationProvider;
      const activeProvider = llmProvider.value ? resolveProviderLabel(llmProvider.value) : null;
      return activeProvider ?? "\u0646\u0627\u0645\u0634\u062E\u0635";
    });
    const submitCreateConversation = async () => {
      if (creatingConversation.value || messageLoading.value || !ensureAuthenticated())
        return;
      creatingConversation.value = true;
      try {
        const sanitizedTitle = newConversationTitle.value.trim() || "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F";
        const selectedProvider = newConversationProvider.value;
        const newConversation = await $fetch("/api/chat/conversations", {
          method: "POST",
          body: {
            userId: userId.value,
            title: sanitizedTitle,
            provider: selectedProvider
          }
        });
        newConversation.provider = selectedProvider || null;
        const query = {
          userId: userId.value.toString()
        };
        if (selectedProvider) {
          query.provider = selectedProvider;
          llmProvider.value = selectedProvider;
          router.replace({
            query: {
              ...route.query,
              llm: selectedProvider
            }
          });
        }
        const updatedConversations = await $fetch("/api/chat/conversations", { query });
        if (updatedConversations.length) {
          const freshlyCreated = updatedConversations.find((conversation) => conversation.id === newConversation.id) ?? newConversation;
          const remaining = updatedConversations.filter((conversation) => conversation.id !== newConversation.id);
          conversations.value = [freshlyCreated, ...remaining];
        } else {
          conversations.value = [newConversation];
        }
        showCreateModal.value = false;
        newConversationTitle.value = "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F";
        selectConversation(newConversation.id);
      } catch (error) {
        console.error("\u062E\u0637\u0627 \u062F\u0631 \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647:", error);
        push.error({
          title: "\u062E\u0637\u0627 \u062F\u0631 \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647",
          message: error?.data?.statusMessage || error?.message || "\u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F \u0628\u0627 \u0645\u0634\u06A9\u0644 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F"
        });
      } finally {
        creatingConversation.value = false;
      }
    };
    function selectConversation(id) {
      if (messageLoading.value)
        return;
      loading.value = true;
      message.value = "";
      selectedFiles.value = [];
      filePreviews.value.forEach((url) => URL.revokeObjectURL(url));
      filePreviews.value = [];
      const conversation = conversations.value.find((conversation2) => conversation2.id === id);
      if (conversation?.provider) {
        llmProvider.value = conversation.provider;
      }
      activeConversation.value = id;
      setTimeout(() => {
        loading.value = false;
        setTimeout(() => {
          if (chatEl.value) {
            chatEl.value.scrollTo({
              top: chatEl.value.scrollHeight,
              behavior: "smooth"
            });
          }
        }, 300);
      }, 1e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoModal = _sfc_main$I;
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseSelect = _sfc_main$1;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseText = _sfc_main$C;
      const _component_TairoSidebarTools = _sfc_main$i;
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseAvatar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-muted-100 dark:bg-muted-900 flex min-h-screen"><div class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-10 hidden h-screen w-20 border-e bg-white sm:block"><div class="flex h-full flex-col justify-between"><div class="flex flex-col"><div class="ltablet:w-full flex size-16 shrink-0 items-center justify-center lg:w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoLogo, { class: "text-primary-600 h-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoLogo, { class: "text-primary-600 h-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ltablet:w-full flex size-16 shrink-0 items-center justify-center lg:w-full"><a href="#" class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300" title="\u0628\u0627\u0632\u06AF\u0634\u062A">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-left",
        class: "size-5 rtl:rotate-180"
      }, null, _parent));
      _push(`</a></div></div><div class="flex flex-col"><div class="flex h-16 w-full items-center justify-center"><button type="button" class="text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300" title="\u062C\u0633\u062A\u062C\u0648">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:magnifying-glass-duotone",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div><div class="flex h-16 w-full items-center justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#",
        class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
        title: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:gear-six-duotone",
                class: "size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex h-16 w-full items-center justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/layouts/ertegha-2",
        class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
        title: "\u0627\u0631\u062A\u0642\u0627 \u062D\u0633\u0627\u0628"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:rocket-launch-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ph:rocket-launch-duotone",
                class: "size-5"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="ltablet:border-e border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative z-[9] h-screen w-28 bg-white sm:w-48 lg:border-e"><div class="flex h-full flex-col"><button type="button" class="flex size-16 shrink-0 items-center justify-center sm:w-36"${ssrIncludeBooleanAttr(unref(creatingConversation) || unref(showCreateModal)) ? " disabled" : ""}><span class="${ssrRenderClass([unref(creatingConversation) ? "opacity-60 cursor-not-allowed" : "", "bg-primary-500 mr-4 flex h-10 w-full items-center justify-center rounded-lg text-white"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "size-4"
      }, null, _parent));
      _push(`</span></button>`);
      _push(ssrRenderComponent(_component_TairoModal, {
        open: unref(showCreateModal),
        size: "sm",
        onClose: cancelCreateConversation
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, { onClick: cancelCreateConversation }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F "),
                createVNode(_component_BaseButtonClose, { onClick: cancelCreateConversation })
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end gap-x-2 p-4 md:p-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "default",
              onClick: cancelCreateConversation
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u0646\u0635\u0631\u0627\u0641 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u0646\u0635\u0631\u0627\u0641 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseButton, {
              color: "primary",
              variant: "solid",
              disabled: unref(creatingConversation) || !unref(newConversationTitle).trim(),
              onClick: submitCreateConversation
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 `);
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end gap-x-2 p-4 md:p-6" }, [
                createVNode(_component_BaseButton, {
                  color: "default",
                  onClick: cancelCreateConversation
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u0646\u0635\u0631\u0627\u0641 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_BaseButton, {
                  color: "primary",
                  variant: "solid",
                  disabled: unref(creatingConversation) || !unref(newConversationTitle).trim(),
                  onClick: submitCreateConversation
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F \u0645\u06A9\u0627\u0644\u0645\u0647 ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-4 md:p-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseInput, {
              modelValue: unref(newConversationTitle),
              "onUpdate:modelValue": ($event) => isRef(newConversationTitle) ? newConversationTitle.value = $event : null,
              label: "\u0639\u0646\u0648\u0627\u0646",
              placeholder: "\u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseSelect, {
              modelValue: unref(newConversationProvider),
              "onUpdate:modelValue": ($event) => isRef(newConversationProvider) ? newConversationProvider.value = $event : null,
              label: "\u0645\u062F\u0644 \u0632\u0628\u0627\u0646\u06CC"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(providerOptions, (option) => {
                    _push3(`<option${ssrRenderAttr("value", option.value)}${_scopeId2}>${ssrInterpolate(option.label)}</option>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(providerOptions, (option) => {
                      return createVNode("option", {
                        key: option.value,
                        value: option.value
                      }, toDisplayString(option.label), 9, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-4 md:p-6" }, [
                createVNode(_component_BaseInput, {
                  modelValue: unref(newConversationTitle),
                  "onUpdate:modelValue": ($event) => isRef(newConversationTitle) ? newConversationTitle.value = $event : null,
                  label: "\u0639\u0646\u0648\u0627\u0646",
                  placeholder: "\u0645\u06A9\u0627\u0644\u0645\u0647 \u062C\u062F\u06CC\u062F"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_BaseSelect, {
                  modelValue: unref(newConversationProvider),
                  "onUpdate:modelValue": ($event) => isRef(newConversationProvider) ? newConversationProvider.value = $event : null,
                  label: "\u0645\u062F\u0644 \u0632\u0628\u0627\u0646\u06CC"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(providerOptions, (option) => {
                      return createVNode("option", {
                        key: option.value,
                        value: option.value
                      }, toDisplayString(option.label), 9, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(conversations), (conversation) => {
        _push(`<a href="#" class="${ssrRenderClass([
          unref(activeConversation) === conversation.id ? "border-primary-500 bg-primary-100" : "border-transparent",
          "group relative flex size-16 shrink-0 items-center justify-center border-s-2 pr-1 sm:w-full"
        ])}"><button type="button" class="${ssrRenderClass([unref(deletingConversation) === conversation.id ? "flex" : "hidden group-hover:flex", "absolute -end-2 -top-2 size-6 items-center justify-center rounded-full bg-red-500 text-white transition duration-200"])}"${ssrIncludeBooleanAttr(unref(deletingConversation) === conversation.id) ? " disabled" : ""}>`);
        if (unref(deletingConversation) !== conversation.id) {
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "size-3"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:loader-2",
            class: "size-3 animate-spin"
          }, null, _parent));
        }
        _push(`</button>`);
        _push(ssrRenderComponent(_component_BaseText, {
          size: "xs",
          class: "text-muted-500 dark:text-muted-400 max-w-xs"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(getConversationTitle(conversation))}`);
            } else {
              return [
                createTextVNode(toDisplayString(getConversationTitle(conversation)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([
        unref(expanded) ? "ltablet:max-w-[calc(100%_-_160px)] lg:max-w-[calc(100%_-_160px)]" : "ltablet:max-w-[calc(100%_-_470px)] lg:max-w-[calc(100%_-_550px)]",
        "relative w-full transition-all duration-300"
      ])}"><div class="flex w-full flex-col"><div class="flex h-16 w-full items-center justify-between px-4 sm:px-8"><div class="flex w-80 items-center gap-2">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        class: "w-auto",
        "model-value": unref(selectedProviderLabel),
        label: "\u0646\u0648\u0639 \u0645\u062F\u0644 \u0632\u0628\u0627\u0646\u06CC:",
        rounded: "lg",
        disabled: ""
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TairoSidebarTools, { class: "relative -end-4 z-20 flex h-16 w-[90%] scale-90 items-center justify-end gap-2 sm:end-0 sm:scale-100" }, null, _parent));
      _push(`</div><div class="${ssrRenderClass([
        unref(loading) ? "overflow-hidden" : "overflow-y-auto nui-slimscroll",
        "relative h-[calc(100vh_-_128px)] w-full p-4 sm:p-8"
      ])}"><div class="${ssrRenderClass([unref(loading) ? "opacity-100" : "opacity-0 pointer-events-none", "bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"])}"><div class="mt-12 space-y-12"><div class="flex w-full max-w-md gap-4">`);
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
                src: "/img/icons/logos/ai-logo.jpg",
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
              item.type === "received" ? "rounded-ss-none" : "",
              item.type === "sent" ? "rounded-se-none" : ""
            ], "bg-muted-200 dark:bg-muted-800 rounded-xl p-4"])}"><p class="font-sans text-sm">${ssrInterpolate(item.text)}</p></div><div class="${ssrRenderClass([item.type === "received" ? "text-right" : "", "text-muted-400 mt-1 font-sans text-xs"])}">${ssrInterpolate(item.time)}</div>`);
            if (item.attachments?.length) {
              _push(`<div class="mt-2 space-y-2"><!--[-->`);
              ssrRenderList(item.attachments, (attachment, idx) => {
                _push(`<!--[-->`);
                if (attachment.type === "image") {
                  _push(`<div class="${ssrRenderClass([item.type === "sent" ? "ms-auto" : "", "dark:bg-muted-800 max-w-xs rounded-2xl bg-white p-2"])}"><img${ssrRenderAttr("src", attachment.url || attachment.image || "/img/placeholder.png")}${ssrRenderAttr("alt", attachment.text || "\u062A\u0635\u0648\u06CC\u0631")} class="rounded-xl"></div>`);
                } else if (attachment.type === "file") {
                  _push(ssrRenderComponent(_component_NuxtLink, {
                    to: attachment.url,
                    class: ["dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2", item.type === "sent" ? "ms-auto" : ""]
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
                        _push2(ssrRenderComponent(_component_Icon, {
                          name: "lucide:file",
                          class: "size-5"
                        }, null, _parent2, _scopeId));
                        _push2(`<p class="text-muted-800 dark:text-muted-100 font-sans text-sm"${_scopeId}>${ssrInterpolate(attachment.name || attachment.text || "\u0641\u0627\u06CC\u0644")}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:file",
                              class: "size-5"
                            }),
                            createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm" }, toDisplayString(attachment.name || attachment.text || "\u0641\u0627\u06CC\u0644"), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent));
                } else if (attachment.type === "link") {
                  _push(ssrRenderComponent(_component_NuxtLink, {
                    to: attachment.url,
                    class: ["dark:bg-muted-800 block max-w-xs rounded-2xl bg-white p-2", item.type === "sent" ? "ms-auto" : ""]
                  }, {
                    default: withCtx((_, _push2, _parent2, _scopeId) => {
                      if (_push2) {
                        _push2(`<img${ssrRenderAttr("src", attachment.image || "/img/placeholder.png")}${ssrRenderAttr("alt", attachment.text || "\u0644\u06CC\u0646\u06A9")} class="rounded-xl"${_scopeId}><div class="px-1 py-2"${_scopeId}><p class="text-muted-800 dark:text-muted-100 font-sans"${_scopeId}>${ssrInterpolate(attachment.url?.replace(/(^\w+:|^)\/\//, ""))}</p><p class="text-muted-400 font-sans text-xs"${_scopeId}>${ssrInterpolate(attachment.text || "\u0644\u06CC\u0646\u06A9")}</p></div>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: attachment.image || "/img/placeholder.png",
                            alt: attachment.text || "\u0644\u06CC\u0646\u06A9",
                            class: "rounded-xl"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "px-1 py-2" }, [
                            createVNode("p", { class: "text-muted-800 dark:text-muted-100 font-sans" }, toDisplayString(attachment.url?.replace(/(^\w+:|^)\/\//, "")), 1),
                            createVNode("p", { class: "text-muted-400 font-sans text-xs" }, toDisplayString(attachment.text || "\u0644\u06CC\u0646\u06A9"), 1)
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
      if (unref(botTyping)) {
        _push(`<div class="relative flex w-full gap-4"><div class="shrink-0">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: "/img/icons/logos/ai-logo.jpg",
          size: "xs"
        }, null, _parent));
        _push(`</div><div class="flex max-w-md flex-col"><div class="bg-muted-200 dark:bg-muted-800 rounded-xl rounded-ss-none p-4"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:loader-2",
          class: "size-4 animate-spin"
        }, null, _parent));
        _push(`<p class="font-sans text-sm">\u062F\u0631 \u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u0627\u0633\u062E...</p></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><form method="POST" action="" class="bg-muted-100 dark:bg-muted-900 flex h-16 w-full items-center px-4 sm:px-8"><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_BaseInput, {
        modelValue: unref(message),
        "onUpdate:modelValue": ($event) => isRef(message) ? message.value = $event : null,
        disabled: unref(messageLoading),
        rounded: "full",
        classes: {
          input: "h-12 ps-6 pe-24"
        },
        placeholder: "\u0646\u0648\u0634\u062A\u0646 \u067E\u06CC\u0627\u0645..."
      }, null, _parent));
      _push(`<div class="absolute end-2 top-0 flex h-10 items-center gap-1"><button type="button" class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"${ssrIncludeBooleanAttr(unref(messageLoading)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:paperclip",
        class: "size-5"
      }, null, _parent));
      _push(`</button><input type="file" multiple accept="image/jpeg,image/png,image/gif,application/pdf" class="hidden"><button type="button" class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"${ssrIncludeBooleanAttr(unref(messageLoading)) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:smile",
        class: "size-5"
      }, null, _parent));
      _push(`</button><button type="submit" class="text-muted-400 hover:text-primary-500 flex h-12 w-10 items-center justify-center transition-colors duration-300"${ssrIncludeBooleanAttr(unref(messageLoading) || !unref(message).trim() && !unref(selectedFiles).length) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:send",
        class: "size-5"
      }, null, _parent));
      _push(`</button></div></div></form>`);
      if (unref(filePreviews).length || unref(selectedFiles).length) {
        _push(`<div class="bg-muted-100 dark:bg-muted-900 flex flex-wrap gap-2 px-4 pb-4 sm:px-8"><!--[-->`);
        ssrRenderList(unref(filePreviews), (preview, index) => {
          _push(`<div class="relative"><img${ssrRenderAttr("src", preview)} alt="\u067E\u06CC\u0634\u200C\u0646\u0645\u0627\u06CC\u0634" class="size-16 rounded-lg object-cover"><button type="button" class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 text-white">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "size-3"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(unref(selectedFiles).filter((f) => !f.type.startsWith("image/")), (file, index) => {
          _push(`<div class="dark:bg-muted-800 relative flex items-center rounded-lg bg-white px-2 py-1">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:file",
            class: "mr-2 size-5"
          }, null, _parent));
          _push(`<span class="text-sm">${ssrInterpolate(file.name)}</span><button type="button" class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 text-white">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "size-3"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/messaging.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
