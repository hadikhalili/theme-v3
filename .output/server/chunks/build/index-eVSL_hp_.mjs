import { u as useRouter, J as useAsyncData, w as __nuxt_component_0$2, d as _sfc_main$D, a as __nuxt_component_2 } from './server.mjs';
import { _ as _sfc_main$1 } from './BaseTextarea-BGdIJfqV.mjs';
import { _ as _sfc_main$2 } from './BaseSelect-7ut6RcTc.mjs';
import { defineComponent, computed, ref, withAsyncContext, watch, watchEffect, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { push } from 'notivue';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const userStore = useUserStore();
    const userId = computed(() => userStore.user?.id ?? null);
    const loading = ref(false);
    const success = ref(false);
    const error = ref(null);
    const filePreview = ref(null);
    ref(null);
    const selectedFile = ref(null);
    const formKey = ref(0);
    const formValues = ref({
      firstName: "",
      lastName: "",
      role: "",
      location: "",
      bio: "",
      referralCode: "",
      experience: "",
      firstJob: null,
      flexible: null,
      remote: null,
      facebook: "",
      twitter: "",
      dribbble: "",
      instagram: "",
      github: "",
      gitlab: "",
      profilePicture: "/img/avatars/default-other.jpg"
    });
    const inviteCode = ref("");
    const isReferralLocked = ref(false);
    const hasHydratedForm = ref(false);
    const emptyProfile = {
      personalInfo: {
        firstName: "",
        lastName: "",
        role: "",
        picture: "/img/avatars/default-other.jpg",
        referralCode: null,
        credit: 0
      },
      profile: {
        firstName: "",
        lastName: "",
        role: "",
        location: null,
        bio: null,
        referralCode: null,
        credit: 0
      },
      info: {
        experience: null,
        firstJob: null,
        flexible: null,
        remote: null
      },
      social: {
        facebook: null,
        twitter: null,
        dribbble: null,
        instagram: null,
        github: null,
        gitlab: null
      },
      settings: {
        twoFactor: {
          enabled: false,
          phoneNumber: null
        },
        notifications: {
          enabled: true,
          flushLowPriority: true,
          marketing: false,
          partners: false
        }
      }
    };
    const fileName = computed(() => selectedFile.value?.name || "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0635\u0648\u06CC\u0631");
    const hasFilePreview = computed(() => !!filePreview.value);
    const profilePicture = computed(() => filePreview.value || data.value?.personalInfo?.picture || "/img/placeholder.png");
    let cachedProfile = null;
    const { data, error: fetchError, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "profile",
      async () => {
        if (!userId.value) {
          return cachedProfile ?? emptyProfile;
        }
        const profile = await $fetch("/api/profile", {
          method: "GET",
          query: { userId: userId.value.toString() },
          credentials: "include"
        });
        cachedProfile = profile;
        return profile;
      },
      {
        default: () => ({}),
        watch: [userId],
        server: false
      }
    )), __temp = await __temp, __restore(), __temp);
    watch(
      () => userStore.user,
      () => {
      },
      { immediate: true, deep: true }
    );
    watch(
      userId,
      async (id) => {
        if (id) {
          await refresh({ dedupe: false });
        }
      },
      { immediate: true }
    );
    watchEffect(() => {
      if (fetchError.value) {
        error.value = fetchError.value?.message || "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644";
        push.error({
          title: "\u062E\u0637\u0627",
          message: error.value
        });
      } else if (data.value && Object.keys(data.value).length > 0) {
        const referredByCode = data.value.profile?.referredByCode ?? data.value.personalInfo?.referredByCode ?? "";
        Object.assign(formValues.value, {
          firstName: data.value.profile?.firstName ?? "",
          lastName: data.value.profile?.lastName ?? "",
          role: data.value.profile?.role ?? "",
          location: data.value.profile?.location ?? "",
          bio: data.value.profile?.bio ?? "",
          referralCode: referredByCode,
          experience: data.value.info?.experience ?? "",
          firstJob: data.value.info?.firstJob ?? null,
          flexible: data.value.info?.flexible ?? null,
          remote: data.value.info?.remote ?? null,
          facebook: data.value.social?.facebook ?? "",
          twitter: data.value.social?.twitter ?? "",
          dribbble: data.value.social?.dribbble ?? "",
          instagram: data.value.social?.instagram ?? "",
          github: data.value.social?.github ?? "",
          gitlab: data.value.social?.gitlab ?? "",
          profilePicture: data.value.personalInfo?.picture ?? "/img/avatars/default-other.jpg"
        });
        inviteCode.value = data.value.personalInfo?.referralCode ?? data.value.profile?.referralCode ?? inviteCode.value;
        isReferralLocked.value = referredByCode.trim().length > 0;
        if (!hasHydratedForm.value) {
          hasHydratedForm.value = true;
          formKey.value += 1;
        }
      }
    });
    watch(
      () => formValues.value.referralCode,
      (newValue) => {
        if (isReferralLocked.value || typeof newValue !== "string") {
          return;
        }
        const sanitized = newValue.toUpperCase().replace(/[^A-Z0-9]/g, "");
        if (sanitized !== newValue) {
          formValues.value.referralCode = sanitized;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseInput = _sfc_main$D;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseTextarea = _sfc_main$1;
      const _component_BaseSelect = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="bg-muted-100 dark:bg-muted-900 flex min-h-screen"><div class="relative w-full p-4 sm:p-8"><div class="flex w-full flex-col"><div class="flex h-16 w-full items-center justify-between px-4 sm:px-8"><h1 class="text-2xl font-bold"> \u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 </h1></div><div class="nui-slimscroll relative h-[calc(100vh_-_128px)] w-full overflow-y-auto p-4 sm:p-8"><div class="${ssrRenderClass([loading.value ? "opacity-100" : "opacity-0 pointer-events-none", "bg-muted-100 dark:bg-muted-900 pointer-events-none absolute inset-0 z-10 size-full p-8 transition-opacity duration-300"])}"><div class="mt-12 space-y-4">`);
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-10 w-full max-w-md rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-10 w-full max-w-md rounded" }, null, _parent));
      _push(ssrRenderComponent(_component_BasePlaceload, { class: "h-10 w-full max-w-md rounded" }, null, _parent));
      _push(`</div></div>`);
      if (!loading.value) {
        _push(`<form><div class="mb-6"><h2 class="mb-2 text-xl font-semibold"> \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u062E\u0635\u06CC </h2><div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><label for="firstName" class="block text-sm font-medium">\u0646\u0627\u0645</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "firstName",
          modelValue: formValues.value.firstName,
          "onUpdate:modelValue": ($event) => formValues.value.firstName = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" },
          class: { "border-red-500": error.value && !formValues.value.firstName.trim() }
        }, null, _parent));
        if (error.value && !formValues.value.firstName.trim()) {
          _push(`<span class="text-sm text-red-500">\u0646\u0627\u0645 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label for="lastName" class="block text-sm font-medium">\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "lastName",
          modelValue: formValues.value.lastName,
          "onUpdate:modelValue": ($event) => formValues.value.lastName = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" },
          class: { "border-red-500": error.value && !formValues.value.lastName.trim() }
        }, null, _parent));
        if (error.value && !formValues.value.lastName.trim()) {
          _push(`<span class="text-sm text-red-500">\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label for="role" class="block text-sm font-medium">\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "role",
          modelValue: formValues.value.role,
          "onUpdate:modelValue": ($event) => formValues.value.role = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" },
          class: { "border-red-500": error.value && !formValues.value.role.trim() }
        }, null, _parent));
        if (error.value && !formValues.value.role.trim()) {
          _push(`<span class="text-sm text-red-500">\u0639\u0646\u0648\u0627\u0646 \u0634\u063A\u0644\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label for="referralCode" class="block text-sm font-medium">\u06A9\u062F \u0645\u0639\u0631\u0641</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "referralCode",
          modelValue: formValues.value.referralCode,
          "onUpdate:modelValue": ($event) => formValues.value.referralCode = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          maxlength: "32",
          autocomplete: "off",
          disabled: loading.value || isReferralLocked.value,
          classes: { wrapper: "h-10" }
        }, null, _parent));
        if (!isReferralLocked.value) {
          _push(`<p class="text-muted-500 mt-1 text-xs"> \u0644\u0637\u0641\u0627\u064B \u0641\u0642\u0637 \u0627\u0632 \u062D\u0631\u0648\u0641 \u0648 \u0627\u0639\u062F\u0627\u062F \u0627\u0646\u06AF\u0644\u06CC\u0633\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. </p>`);
        } else {
          _push(`<p class="text-muted-500 mt-1 text-xs"> \u06A9\u062F \u0645\u0639\u0631\u0641 \u0634\u0645\u0627 \u062B\u0628\u062A \u0634\u062F\u0647 \u0648 \u0627\u0645\u06A9\u0627\u0646 \u062A\u063A\u06CC\u06CC\u0631 \u0622\u0646 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F. </p>`);
        }
        _push(`</div><div><label for="inviteCode" class="block text-sm font-medium">\u062F\u06CC\u06AF\u0631\u0627\u0646 \u0631\u0627 \u062F\u0639\u0648\u062A \u06A9\u0646\u06CC\u062F</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "inviteCode",
          modelValue: inviteCode.value,
          "onUpdate:modelValue": ($event) => inviteCode.value = $event,
          type: "text",
          rounded: "lg",
          readonly: "",
          autocomplete: "off",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`<p class="text-muted-500 mt-1 text-xs"> \u0627\u06CC\u0646 \u06A9\u062F \u0631\u0627 \u0628\u0627 \u062F\u0648\u0633\u062A\u0627\u0646 \u062E\u0648\u062F \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F \u062A\u0627 \u0627\u0639\u062A\u0628\u0627\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F. </p></div><div><label for="avatar" class="block text-sm font-medium">\u062A\u0635\u0648\u06CC\u0631 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</label><input id="avatar" type="file" class="hidden" accept="image/jpeg,image/png,image/gif"><button type="button" class="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 bg-white text-sm">${ssrInterpolate(fileName.value)}</button>`);
        if (hasFilePreview.value) {
          _push(`<div class="relative mt-2"><img${ssrRenderAttr("src", profilePicture.value)} alt="Profile Picture" class="size-24 rounded-full object-cover"><button type="button" class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-red-500 text-white">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:x",
            class: "size-3"
          }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="mb-6"><h2 class="mb-2 text-xl font-semibold"> \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u0645\u0627\u0633 \u0648 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A </h2><div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><label for="location" class="block text-sm font-medium">\u0645\u062D\u0644 \u0633\u06A9\u0648\u0646\u062A</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "location",
          modelValue: formValues.value.location,
          "onUpdate:modelValue": ($event) => formValues.value.location = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="bio" class="block text-sm font-medium">\u0628\u06CC\u0648\u06AF\u0631\u0627\u0641\u06CC</label>`);
        _push(ssrRenderComponent(_component_BaseTextarea, {
          id: "bio",
          modelValue: formValues.value.bio,
          "onUpdate:modelValue": ($event) => formValues.value.bio = $event,
          modelModifiers: { trim: true },
          rounded: "lg",
          classes: { textarea: "h-24" }
        }, null, _parent));
        _push(`</div></div></div><div class="mb-6"><h2 class="mb-2 text-xl font-semibold"> \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u063A\u0644\u06CC \u0648 \u062A\u0631\u062C\u06CC\u062D\u0627\u062A </h2><div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><label for="experience" class="block text-sm font-medium">\u0633\u0627\u0628\u0642\u0647 \u06A9\u0627\u0631\u06CC</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "experience",
          modelValue: formValues.value.experience,
          "onUpdate:modelValue": ($event) => formValues.value.experience = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="firstJob" class="block text-sm font-medium">\u0622\u06CC\u0627 \u0627\u06CC\u0646 \u0627\u0648\u0644\u06CC\u0646 \u0634\u063A\u0644 \u0634\u0645\u0627\u0633\u062A\u061F</label>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          id: "firstJob",
          modelValue: formValues.value.firstJob,
          "onUpdate:modelValue": ($event) => formValues.value.firstJob = $event,
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}> \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </option><option${ssrRenderAttr("value", true)}${_scopeId}> \u0628\u0644\u0647 </option><option${ssrRenderAttr("value", false)}${_scopeId}> \u062E\u06CC\u0631 </option>`);
            } else {
              return [
                createVNode("option", { value: null }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                createVNode("option", { value: true }, " \u0628\u0644\u0647 "),
                createVNode("option", { value: false }, " \u062E\u06CC\u0631 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div><label for="flexible" class="block text-sm font-medium">\u0627\u0646\u0639\u0637\u0627\u0641\u200C\u067E\u0630\u06CC\u0631\u06CC \u062F\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u06A9\u0627\u0631\u06CC</label>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          id: "flexible",
          modelValue: formValues.value.flexible,
          "onUpdate:modelValue": ($event) => formValues.value.flexible = $event,
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}> \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </option><option${ssrRenderAttr("value", true)}${_scopeId}> \u0628\u0644\u0647 </option><option${ssrRenderAttr("value", false)}${_scopeId}> \u062E\u06CC\u0631 </option>`);
            } else {
              return [
                createVNode("option", { value: null }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                createVNode("option", { value: true }, " \u0628\u0644\u0647 "),
                createVNode("option", { value: false }, " \u062E\u06CC\u0631 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div><label for="remote" class="block text-sm font-medium">\u0645\u0627\u06CC\u0644 \u0628\u0647 \u062F\u0648\u0631\u06A9\u0627\u0631\u06CC \u0647\u0633\u062A\u06CC\u062F\u061F</label>`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          id: "remote",
          modelValue: formValues.value.remote,
          "onUpdate:modelValue": ($event) => formValues.value.remote = $event,
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}> \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F </option><option${ssrRenderAttr("value", true)}${_scopeId}> \u0628\u0644\u0647 </option><option${ssrRenderAttr("value", false)}${_scopeId}> \u062E\u06CC\u0631 </option>`);
            } else {
              return [
                createVNode("option", { value: null }, " \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F "),
                createVNode("option", { value: true }, " \u0628\u0644\u0647 "),
                createVNode("option", { value: false }, " \u062E\u06CC\u0631 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="mb-6"><h2 class="mb-2 text-xl font-semibold"> \u0634\u0628\u06A9\u0647\u200C\u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC </h2><div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><label for="facebook" class="block text-sm font-medium">\u0641\u06CC\u0633\u0628\u0648\u06A9</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "facebook",
          modelValue: formValues.value.facebook,
          "onUpdate:modelValue": ($event) => formValues.value.facebook = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="twitter" class="block text-sm font-medium">\u062A\u0648\u0626\u06CC\u062A\u0631</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "twitter",
          modelValue: formValues.value.twitter,
          "onUpdate:modelValue": ($event) => formValues.value.twitter = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="dribbble" class="block text-sm font-medium">\u062F\u0631\u06CC\u0628\u0644</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "dribbble",
          modelValue: formValues.value.dribbble,
          "onUpdate:modelValue": ($event) => formValues.value.dribbble = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="instagram" class="block text-sm font-medium">\u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "instagram",
          modelValue: formValues.value.instagram,
          "onUpdate:modelValue": ($event) => formValues.value.instagram = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="github" class="block text-sm font-medium">\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "github",
          modelValue: formValues.value.github,
          "onUpdate:modelValue": ($event) => formValues.value.github = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div><div><label for="gitlab" class="block text-sm font-medium">\u06AF\u06CC\u062A\u200C\u0644\u0628</label>`);
        _push(ssrRenderComponent(_component_BaseInput, {
          id: "gitlab",
          modelValue: formValues.value.gitlab,
          "onUpdate:modelValue": ($event) => formValues.value.gitlab = $event,
          modelModifiers: { trim: true },
          type: "text",
          rounded: "lg",
          classes: { wrapper: "h-10" }
        }, null, _parent));
        _push(`</div></div></div><div class="flex justify-end"><button type="submit" class="bg-primary-500 hover:bg-primary-600 flex h-10 items-center justify-center rounded-lg px-4 text-white transition-colors duration-300"${ssrIncludeBooleanAttr(loading.value || success.value) ? " disabled" : ""}>`);
        if (success.value) {
          _push(`<span>\u0630\u062E\u06CC\u0631\u0647 \u0634\u062F!</span>`);
        } else {
          _push(`<span>\u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A</span>`);
        }
        _push(`</button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/layouts/profile-edit/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
