import { hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, toRef as toRef$1, isRef, shallowRef, onServerPrefetch, defineComponent, provide, createElementBlock, computed, h, resolveComponent, defineAsyncComponent, nextTick, withDirectives, Suspense, vShow, Transition, unref, mergeProps, withCtx, createVNode, resolveDynamicComponent, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext, onUpdated, toValue as toValue$1, readonly, mergeModels, useModel, createTextVNode, toDisplayString, Fragment, renderList, shallowReactive, getCurrentScope, onScopeDispose, withAsyncContext, resolveDirective, createApp, effectScope, reactive, isReactive, toRaw, customRef, render, onErrorCaptured, isReadonly, toRefs, markRaw, isShallow } from 'vue';
import { $ as $fetch$1, p as withQuery, q as hasProtocol, t as parseURL, v as isScriptProtocol, x as joinURL, y as klona, z as parseQuery, A as defu, B as withBase, C as withLeadingSlash, D as withoutTrailingSlash, E as sanitizeStatusCode, F as defuFn, G as hash, H as createHooks, c as createError$1, I as parse, J as getRequestHeader, K as withTrailingSlash, L as destr, M as isEqual, s as setCookie, a as getCookie, N as deleteCookie, O as isSamePath, P as toRouteMatcher, Q as createRouter$1 } from '../runtime.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { CapoPlugin, getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderTeleport, ssrRenderSlotInner, ssrRenderSuspense, ssrRenderList, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { pastelTheme, outlinedIcons, Notivue, Notification, NotificationProgress } from 'notivue';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel } from '@headlessui/vue';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { addAPIProvider, loadIcon } from '@iconify/vue';
import { escapeHtml } from '@vue/shared';
import chroma from 'chroma-js';
import colors from 'tailwindcss/colors.js';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}

const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig ;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    const unresolvedPluginsForThisPlugin = plugin.dependsOn?.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.includes(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins) {
    if (nuxtApp.ssrContext?.islandContext && plugin.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  const isExternal = options?.external || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};

const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef$1(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const clearError = async (options = {}) => {
  const nuxtApp = useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await useRouter().replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};

version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}

const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});

[CapoPlugin({ track: true })] ;

const unhead_W1jz8Xx8Qy = defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head ;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef$1(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}

const cfg0 = defineAppConfig({
  dir: "rtl",
  nuxtIcon: {},
  tairo: {
    title: "تایرو",
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              disableTransitions: true
            }
          },
          {
            component: "DemoToolbarLanguage"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoToolbarActivity"
          },
          {
            component: "DemoToolbarAccountMenu"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      navigation: {
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10" }
        },
        items: [
          {
            title: "داشبوردها",
            icon: { name: "ph:sidebar-duotone", class: "w-5 h-5" },
            subsidebar: { component: "DemoSubsidebarDashboards" },
            activePath: "/dashboards"
          },
          {
            title: "چیدمان‌ها",
            icon: { name: "ph:app-window-duotone", class: "w-5 h-5" },
            subsidebar: { component: "DemoSubsidebarLayouts" },
            activePath: "/layouts"
          },
          {
            title: "چت",
            icon: { name: "ph:chat-circle-duotone", class: "w-5 h-5" },
            to: "/dashboards/messaging"
          },
          {
            title: "سفارشی‌سازی",
            icon: { name: "ph:drop-half-bottom-duotone", class: "w-5 h-5" },
            click: () => {
              const isOpen = useState("switcher-open", () => false);
              isOpen.value = true;
            },
            position: "end"
          },
          {
            title: "جستجو",
            icon: { name: "ph:magnifying-glass-duotone", class: "w-5 h-5" },
            click: () => {
              const isOpen = useState("search-open", () => false);
              isOpen.value = true;
            },
            position: "end"
          },
          {
            title: "تنظیمات",
            icon: { name: "ph:gear-six-duotone", class: "w-5 h-5" },
            to: "/layouts/settings",
            position: "end"
          },
          {
            title: "حساب کاربری من",
            component: "DemoAccountMenu",
            position: "end"
          }
        ]
      }
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: "DemoThemeToggle"
          },
          {
            component: "DemoToolbarLanguage"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoToolbarActivity"
          },
          {
            component: "DemoToolbarAccountMenu"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      navigation: {
        enabled: true,
        header: {
          component: "DemoCollapseNavigationHeader"
        },
        footer: {
          component: "DemoCollapseNavigationFooter"
        },
        items: [
          {
            name: "داشبوردها",
            icon: { name: "ph:sidebar-duotone", class: "w-5 h-5" },
            activePath: "/dashboards",
            children: [
              {
                name: "شخصی v1",
                to: "/dashboards",
                icon: { name: "ph:coffee-duotone", class: "w-4 h-4" }
              },
              {
                name: "شخصی v2",
                to: "/dashboards/personal-2",
                icon: { name: "ph:chart-pie-slice-duotone", class: "w-4 h-4" }
              },
              {
                name: "شخصی v3",
                to: "/dashboards/personal-3",
                icon: { name: "ph:cactus-duotone", class: "w-4 h-4" }
              },
              {
                name: "تحلیلی",
                to: "/dashboards/analytics",
                icon: { name: "ph:gauge-duotone", class: "w-4 h-4" }
              },
              {
                name: "سهام",
                to: "/dashboards/stocks",
                icon: { name: "ph:coin-duotone", class: "w-4 h-4" }
              },
              {
                name: "فروش",
                to: "/dashboards/sales",
                icon: { name: "ph:shopping-cart-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "چیدمان‌ها",
            icon: { name: "ph:app-window-duotone", class: "w-5 h-5" },
            activePath: "/layouts",
            children: [
              {
                name: "نمایش لیستی v1",
                to: "/layouts",
                icon: { name: "ph:list-bullets-duotone", class: "w-4 h-4" }
              },
              {
                name: "لیست فلکسی v1",
                to: "/layouts/flex-list-1",
                icon: { name: "ph:list-checks-duotone", class: "w-4 h-4" }
              },
              {
                name: "لیست جدولی v1",
                to: "/layouts/table-list-1",
                icon: { name: "ph:table-duotone", class: "w-4 h-4" }
              },
              {
                name: "شبکه کارت v1",
                to: "/layouts/card-grid-1",
                icon: { name: "ph:circles-four-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "پروژه‌ها",
            icon: { name: "ph:suitcase-duotone", class: "w-5 h-5" },
            activePath: "/layouts/projects/",
            children: [
              {
                name: "پروژه‌ها",
                to: "/layouts/projects/project-list-3",
                icon: { name: "ph:leaf-duotone", class: "w-4 h-4" }
              },
              {
                name: "جزئیات پروژه",
                to: "/layouts/projects/details",
                icon: {
                  name: "ph:note-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "بورد کان بان",
                to: "/layouts/projects/board",
                icon: { name: "ph:circles-four-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "احراز هویت",
            icon: { name: "ph:lock-duotone", class: "w-5 h-5" },
            activePath: "/layouts/projects/",
            children: [
              {
                name: "ورود",
                to: "/auth",
                icon: { name: "ph:fingerprint-duotone", class: "w-4 h-4" }
              },
              {
                name: "ثبت نام",
                to: "/auth/signup-1",
                icon: {
                  name: "ph:plus-circle-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "بازیابی",
                to: "/auth",
                icon: { name: "ph:lightning-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "ویجت‌ها",
            icon: { name: "ph:nut-duotone", class: "w-5 h-5" },
            activePath: "/dashboards/widgets",
            children: [
              {
                name: "ویجت‌های رابط کاربری",
                to: "/dashboards/widgets",
                icon: { name: "ph:square-half-duotone", class: "w-4 h-4" }
              },
              {
                name: "ابزارک‌های خلاقانه",
                to: "/dashboards/widgets/creative",
                icon: {
                  name: "ph:square-half-bottom-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "ابزارک‌های لیست",
                to: "/dashboards/widgets/list",
                icon: { name: "ph:square-half-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "جدا کننده",
            divider: true
          },
          {
            name: "نمودارها",
            icon: { name: "ph:chart-pie-slice-duotone", class: "w-5 h-5" },
            to: "/dashboards/charts"
          },
          {
            name: "ویزارد",
            icon: { name: "ph:magic-wand-duotone", class: "w-5 h-5" },
            to: "/wizard"
          },
          {
            name: "پیام‌رسانی",
            icon: { name: "ph:chats-circle-duotone", class: "w-5 h-5" },
            to: "/dashboards/messaging"
          },
          {
            name: "سفارشی‌سازی",
            icon: { name: "ph:drop-half-bottom-duotone", class: "w-5 h-5" },
            click: () => {
              const isSwitcherOpen = useState("switcher-open", () => false);
              isSwitcherOpen.value = true;
            },
            position: "end"
          }
        ]
      }
    },
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10 w-10" }
        },
        header: {
          component: "DemoTopnavWorkspaceDropdown",
          props: {}
        },
        items: [
          {
            name: "داشبورد",
            icon: { name: "ph:gauge-duotone", class: "w-6 h-6" },
            activePath: "/dashboards/sales",
            to: "/dashboards/sales"
          },
          {
            name: "پروژه‌ها",
            icon: { name: "ph:suitcase-duotone", class: "w-6 h-6" },
            activePath: "/layouts/projects/project-list-3",
            to: "/layouts/projects/project-list-3"
          },
          {
            name: "فریلنسرها",
            icon: { name: "ph:users-duotone", class: "w-6 h-6" },
            activePath: "/layouts/flex-list-1",
            to: "/layouts/flex-list-1"
          },
          {
            name: "فایل‌ها",
            icon: { name: "ph:note-duotone", class: "w-6 h-6" },
            activePath: "/layouts/table-list-3",
            to: "/layouts/table-list-3"
          },
          {
            name: "مشتریان",
            icon: { name: "ph:users-three-duotone", class: "w-6 h-6" },
            activePath: "/layouts/user-grid-3",
            to: "/layouts/user-grid-3"
          },
          {
            name: "صورتحساب",
            icon: { name: "ph:credit-card-duotone", class: "w-6 h-6" },
            activePath: "/layouts/utility-billing",
            to: "/layouts/utility-billing"
          },
          {
            name: "تنظیمات",
            icon: { name: "ph:gear-six-duotone", class: "w-6 h-6" },
            activePath: "/layouts/profile-settings",
            to: "/layouts/profile-settings"
          },
          {
            name: "وضعیت",
            icon: { name: "ph:notification-duotone", class: "w-6 h-6" },
            activePath: "/layouts/utility-status",
            to: "/layouts/utility-status"
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              disableTransitions: true
            }
          },
          {
            component: "DemoToolbarSearch"
          },
          {
            component: "DemoToolbarCustomize"
          },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoAccountMenu",
            props: {
              horizontal: true
            }
          }
        ]
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "ال تم",
          to: "https://cssninja.io",
          since: "2018"
        },
        links: [
          {
            name: "صفحات دمو",
            to: "/demos"
          },
          {
            name: "مستندات",
            to: "https://tairo.cssninja.io/documentation"
          },
          {
            name: "رابط کاربری شوریکن",
            to: "https://github.com/shuriken-ui",
            rel: "noopener",
            target: "_blank"
          },
          {
            name: "پشتیبانی",
            to: "https://cssninja.io/faq/support",
            rel: "noopener",
            target: "_blank"
          }
        ]
      }
    },
    iconnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10 w-10" }
        },
        items: [
          {
            name: "داشبوردها",
            icon: { name: "ph:gauge-duotone", class: "w-6 h-6" },
            activePath: "/dashboards",
            children: [
              {
                name: "صفحه اصلی",
                to: "/dashboards",
                icon: { name: "ph:house-duotone", class: "w-4 h-4" }
              },
              {
                name: "موجودی",
                to: "/dashboards/balance",
                icon: { name: "ph:chart-pie-slice-duotone", class: "w-4 h-4" }
              },
              {
                name: "نمای کلی",
                to: "/dashboards/overview",
                icon: { name: "ph:circles-three-duotone", class: "w-4 h-4" }
              },
              {
                name: "نمایش سریع",
                to: "/dashboards/quickview",
                icon: { name: "ph:bank-duotone", class: "w-4 h-4" }
              },
              {
                name: "ترید",
                to: "/dashboards/trading",
                icon: { name: "ph:subtract-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "بانکداری",
            icon: { name: "ph:bank-duotone", class: "w-6 h-6" },
            activePath: "/layouts/",
            children: [
              {
                name: "موجودی",
                to: "/layouts/accounts",
                icon: { name: "ph:bank-duotone", class: "w-4 h-4" }
              },
              {
                name: "تراکنش‌ها",
                to: "/layouts/transactions",
                icon: {
                  name: "ph:arrows-left-right-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "پرداخت‌ها",
                to: "/layouts/payments",
                icon: {
                  name: "ph:coins-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "کارت‌ها",
                to: "/layouts/cards",
                icon: {
                  name: "ph:credit-card-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "اعتبار",
                to: "/layouts/credit",
                icon: { name: "ph:rocket-duotone", class: "w-4 h-4" }
              },
              {
                name: "سرمایه‌گذاری",
                to: "/layouts/invest",
                icon: { name: "ph:globe-hemisphere-west-duotone", class: "w-4 h-4" }
              }
            ]
          },
          {
            name: "پروژه‌ها",
            icon: { name: "ph:suitcase-duotone", class: "w-6 h-6" },
            activePath: "/layouts/projects",
            children: [
              {
                name: "پروژه‌ها",
                to: "/layouts/projects",
                icon: { name: "ph:suitcase-duotone", class: "w-4 h-4" }
              },
              {
                name: "بوردها",
                to: "/layouts/projects/board",
                icon: {
                  name: "ph:squares-four-duotone",
                  class: "w-4 h-4"
                }
              },
              {
                name: "جزئیات",
                to: "/layouts/projects/details",
                icon: {
                  name: "ph:square-half-duotone",
                  class: "w-4 h-4"
                }
              }
            ]
          },
          {
            name: "تنظیمات",
            icon: { name: "ph:gear-six-duotone", class: "w-6 h-6" },
            to: "/layouts/settings"
          },
          {
            name: "سفارشی‌سازی",
            icon: { name: "ph:drop-half-bottom-duotone", class: "w-6 h-6" },
            click: () => {
              const isSwitcherOpen = useState("switcher-open", () => false);
              isSwitcherOpen.value = true;
            }
          }
        ]
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: "DemoThemeToggle",
            props: {
              class: "ms-auto",
              disableTransitions: true,
              inverted: true
            }
          },
          {
            component: "DemoCircularMenuLanguage"
          },
          {
            component: "DemoCircularMenuNotifications"
          },
          {
            component: "DemoCircularMenuActivity"
          }
        ]
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        tools: [
          {
            component: "DemoThemeToggle"
          },
          // {
          //   component: 'DemoToolbarDropdown',
          // },
          {
            component: "DemoToolbarNotifications"
          },
          {
            component: "DemoAccountMenu",
            props: {
              horizontal: true,
              orientation: "start"
            }
          }
        ]
      },
      footer: {
        enabled: true,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "ال تم",
          to: "https://cssninja.io",
          since: "2018"
        },
        links: [
          {
            name: "صفحات دمو",
            to: "/demos"
          },
          {
            name: "مستندات",
            to: "https://tairo.cssninja.io/documentation"
          },
          {
            name: "رابط کاربری شوریکن",
            to: "https://github.com/shuriken-ui",
            rel: "noopener",
            target: "_blank"
          },
          {
            name: "پشتیبانی",
            to: "https://cssninja.io/faq/support",
            rel: "noopener",
            target: "_blank"
          }
        ]
      }
    },
    panels: [
      {
        name: "language",
        position: "right",
        component: "DemoPanelLanguage"
      },
      {
        name: "activity",
        position: "right",
        component: "DemoPanelActivity"
      },
      {
        name: "search",
        position: "left",
        component: "DemoPanelSearch"
      },
      {
        name: "task",
        position: "right",
        component: "DemoPanelTask"
      },
      {
        name: "account",
        position: "right",
        component: "DemoPanelAccount",
        size: "md"
      },
      {
        name: "card",
        position: "right",
        component: "DemoPanelCard"
      },
      {
        name: "invest",
        position: "right",
        component: "DemoPanelInvest",
        size: "md"
      }
    ],
    error: {
      logo: {
        component: "img",
        props: {
          src: "/img/illustrations/system/404-1.svg",
          class: "relative z-20 w-full max-w-lg mx-auto"
        }
      }
    }
  }
});

const cfg1 = {
  tairo: {
    sidebar: {
      navigation: {
        items: [
          {
            title: "مستندات",
            icon: { name: "ph:grid-four-duotone", class: "w-5 h-5" },
            subsidebar: { component: "DocSubsidebarDocumentation" },
            // activePath: '/documentation',
            to: "https://tairo.cssninja.io/documentation"
          }
        ]
      }
    }
  }
};

const cfg2 = {
  tairo: {
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: false,
        tools: []
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-600 h-10" }
        },
        items: []
      }
    }
  }
};

const cfg3 = {
  tairo: {
    collapse: {
      navigation: {
        enabled: true,
        header: {
          component: ""
        },
        footer: {
          component: ""
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        showNavBurger: false,
        tools: []
      }
    }
  }
};

const cfg4 = {
  tairo: {
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-10 w-10" }
        },
        header: {
          component: void 0
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: []
      },
      footer: {
        enabled: false,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "",
          to: "",
          since: ""
        },
        links: []
      }
    }
  }
};

const cfg5 = {
  tairo: {
    iconnav: {
      navigation: {
        enabled: true,
        logo: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-10 w-10" }
        },
        items: []
      },
      circularMenu: {
        enabled: true,
        tools: []
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: []
      },
      footer: {
        enabled: false,
        logoSeparator: {
          component: "TairoLogo",
          props: { class: "text-primary-500 h-7 w-7" }
        },
        logo: {
          component: "TairoLogoText",
          props: {
            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
          }
        },
        copyright: {
          name: "",
          to: "",
          since: ""
        },
        links: []
      }
    }
  }
};

const cfg6 = {
  tairo: {
    title: "Tairo",
    error: {
      logo: {
        component: "TairoLogo",
        props: { class: "text-primary-500 mx-auto h-40 p-6" }
      }
    },
    panels: []
  },
  toaster: {
    duration: 6e3,
    dismissible: false,
    theme: {
      maxToasts: 1,
      containerClass: [
        "fixed",
        "inset-0",
        "pointer-events-none",
        "p-4",
        "flex",
        "flex-col",
        "overflow-hidden",
        "z-[200]",
        "items-start",
        "gap-2",
        "space-y-3"
      ],
      wrapperClass: [
        "pointer-events-auto",
        "focus:outline-none",
        "rounded",
        "outline-slate-300",
        "outline-offset-2",
        "focus:outline",
        "focus:outline-2",
        "focus-within:outline",
        "focus-within:outline-2"
      ],
      transition: {
        enterActiveClass: "transition duration-300 ease-out",
        enterFromClass: "transform translate-y-full opacity-0",
        enterToClass: "transform translate-y-0 opacity-100",
        leaveActiveClass: "transition duration-200 ease-in",
        leaveFromClass: "transform translate-y-0 opacity-100",
        leaveToClass: "transform translate-y-full opacity-0"
      }
    }
  }
};

const cfg7 = {
  nui: {
    // #region base
    BaseAccordion: {
      action: "dot",
      color: "default",
      dotColor: "primary",
      rounded: "sm"
    },
    BaseAvatar: {
      color: "muted",
      rounded: "full",
      size: "sm"
    },
    BaseAvatarGroup: {
      limit: 4,
      size: "sm"
    },
    BaseBreadcrumb: {
      color: "primary"
    },
    BaseButton: {
      color: "default",
      rounded: "sm",
      size: "md",
      variant: "solid"
    },
    BaseButtonAction: {
      color: "default",
      rounded: "sm"
    },
    BaseButtonClose: {
      color: "default",
      rounded: "full",
      size: "sm"
    },
    BaseButtonGroup: {},
    BaseButtonIcon: {
      color: "default",
      rounded: "sm",
      size: "md"
    },
    BaseCard: {
      color: "default",
      rounded: "sm"
    },
    BaseDropdown: {
      buttonColor: "default",
      color: "default",
      placement: "bottom-start",
      rounded: "sm",
      size: "md",
      variant: "button"
    },
    BaseDropdownDivider: {},
    BaseDropdownItem: {
      color: "primary",
      contrast: "default",
      rounded: "sm"
    },
    BaseHeading: {
      as: "p",
      lead: "normal",
      size: "xl",
      weight: "semibold"
    },
    BaseIconBox: {
      color: "default",
      rounded: "sm",
      size: "xs",
      variant: "solid"
    },
    BaseKbd: {
      color: "default",
      rounded: "sm",
      size: "sm"
    },
    BaseLink: {},
    BaseList: {},
    BaseListItem: {},
    BaseMessage: {
      color: "default",
      rounded: "sm",
      defaultIcons: {
        muted: "akar-icons:info-fill",
        "muted-contrast": "akar-icons:info-fill",
        default: "akar-icons:info-fill",
        "default-contrast": "akar-icons:info-fill",
        info: "akar-icons:info-fill",
        success: "carbon:checkmark-filled",
        warning: "ci:warning",
        danger: "ph:warning-octagon-fill",
        primary: "akar-icons:info-fill"
      }
    },
    BasePagination: {
      color: "primary",
      rounded: "sm"
    },
    BaseParagraph: {
      as: "p",
      lead: "normal",
      size: "md",
      weight: "normal"
    },
    BasePlaceholderPage: {
      imageSize: "xs"
    },
    BasePlaceload: {},
    BaseProgress: {
      color: "primary",
      contrast: "default",
      rounded: "full",
      size: "sm"
    },
    BaseProgressCircle: {
      color: "primary"
    },
    BaseProse: {
      rounded: "none"
    },
    BaseSnack: {
      color: "default",
      size: "md"
    },
    BaseTabs: {
      color: "primary",
      justify: "start",
      type: "tabs"
    },
    BaseTabSlider: {
      color: "default",
      justify: "start",
      rounded: "lg",
      size: "md"
    },
    BaseTag: {
      color: "default",
      rounded: "lg",
      size: "md",
      variant: "solid"
    },
    BaseText: {
      lead: "normal",
      size: "md",
      weight: "normal"
    },
    BaseThemeSwitch: {
      disableTransitions: false
    },
    BaseThemeToggle: {
      disableTransitions: false
    },
    // #endregion
    // #region form
    BaseAutocomplete: {
      contrast: "default",
      i18n: {
        empty: "Nothing found.",
        pending: "Loading ..."
      },
      rounded: "sm",
      size: "md"
    },
    BaseAutocompleteItem: {
      rounded: "sm"
    },
    BaseCheckbox: {
      color: "default",
      rounded: "sm"
    },
    BaseCheckboxAnimated: {
      color: "primary"
    },
    BaseCheckboxHeadless: {},
    BaseFullscreenDropfile: {
      color: "primary"
    },
    BaseInput: {
      contrast: "default",
      rounded: "sm",
      size: "md"
    },
    BaseInputFile: {
      contrast: "default",
      rounded: "sm",
      size: "md",
      i18n: {
        empty: "No file chosen",
        invalid: "Invalid file selected",
        multiple: "{count} files selected"
      }
    },
    BaseInputFileHeadless: {},
    BaseInputNumber: {
      contrast: "default",
      rounded: "sm",
      size: "md"
    },
    BaseInputHelpText: {
      color: "default"
    },
    BaseListbox: {
      contrast: "default",
      placement: "bottom-start",
      rounded: "sm",
      size: "md"
    },
    BaseListboxItem: {},
    BaseRadio: {
      color: "default"
    },
    BaseRadioHeadless: {},
    BaseSelect: {
      contrast: "default",
      rounded: "sm",
      size: "md"
    },
    BaseSwitchBall: {
      color: "primary"
    },
    BaseSwitchThin: {
      color: "primary"
    },
    BaseTextarea: {
      contrast: "default",
      rounded: "sm",
      size: "md"
    },
    BaseTreeSelect: {},
    BaseTreeSelectItem: {
      rounded: "sm"
    }
    // #endregion
  }
};

const inlineConfig = {
  "nuxt": {
    "buildId": "f668ade0-a352-44b5-a6ac-434bc4bb2979"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, cfg1, cfg2, cfg3, cfg4, cfg5, cfg6, cfg7, inlineConfig);

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig) ;
  }
  return nuxtApp._appConfig;
}

const appLayoutTransition = false;

const appPageTransition = false;

const appKeepalive = false;

const nuxtLinkDefaults = {"componentName":"NuxtLink"};

const asyncDataDefaults = {"deep":false};

const fetchDefaults = {};

async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: useRuntimeConfig().nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}

const __nuxt_page_meta$2A = {
      layout: "empty",
      title: "ورود",
      preview: {
        title: "ورود ۱",
        description: "برای احراز هویت و ورود",
        categories: ["چیدمان‌ها", "احراز هویت"],
        src: "/img/screens/auth-login-1.png",
        srcDark: "/img/screens/auth-login-1-dark.png",
        order: 151
      }
    };

const __nuxt_page_meta$2z = {
      layout: "empty",
      title: "بازیابی رمز عبور",
      preview: {
        title: "بازیابی",
        description: "برای بازیابی رمز عبور",
        categories: ["چیدمان‌ها", "احراز هویت"],
        src: "/img/screens/auth-recover.png",
        srcDark: "/img/screens/auth-recover-dark.png",
        order: 156
      }
    };

const __nuxt_page_meta$2y = {
      layout: "empty",
      title: "ثبت‌نام",
      preview: {
        title: "ثبت‌نام 1",
        description: "برای احراز هویت و ثبت‌نام",
        categories: ["چیدمان‌ها", "احراز هویت"],
        src: "/img/screens/auth-signup-1.png",
        srcDark: "/img/screens/auth-signup-1-dark.png",
        order: 157
      }
    };

const __nuxt_page_meta$2x = {
      title: "تحلیل‌ها",
      preview: {
        title: "داشبورد تحلیلی",
        description: "برای آمار و KPI های سنگین",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-analytics.png",
        srcDark: "/img/screens/dashboards-analytics-dark.png",
        order: 4
      }
    };

const __nuxt_page_meta$2w = {
      title: "داشبورد",
      preview: {
        title: "داشبورد موجودی",
        description: "برای مرور حساب بانکی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-balance.png",
        srcDark: "/img/screens/dashboards-balance-dark.png",
        order: 5,
        new: true
      }
    };

const __nuxt_page_meta$2v = {
      title: "مرور کلی",
      preview: {
        title: "داشبورد بانکی نسخه ۱",
        description: "برای بانکداری و حساب‌ها",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-banking-1.png",
        srcDark: "/img/screens/dashboards-banking-1-dark.png",
        order: 7
      }
    };

const __nuxt_page_meta$2u = {
      title: "کارت‌های اعتباری",
      preview: {
        title: "داشبورد بانکی نسخه ۲",
        description: "برای بانکداری و حساب‌ها",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-banking-2.png",
        srcDark: "/img/screens/dashboards-banking-2-dark.png",
        order: 8
      }
    };

const __nuxt_page_meta$2t = {
      title: "ارز دیجیتال",
      preview: {
        title: "داشبورد بانکی نسخه ۳",
        description: "برای بانکداری و حساب‌ها",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-banking-3.png",
        srcDark: "/img/screens/dashboards-banking-3-dark.png",
        order: 9
      }
    };

const __nuxt_page_meta$2s = {
      title: "رصد",
      preview: {
        title: "داشبورد بانکی نسخه ۴",
        description: "برای ردیابی حساب شخصی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-banking-4.png",
        srcDark: "/img/screens/dashboards-banking-4-dark.png",
        order: 10,
        new: true
      }
    };

const __nuxt_page_meta$2r = {
      title: "حساب‌های کاربری",
      preview: {
        title: "داشبورد بانکی نسخه ۵",
        description: "برای مدیریت حساب‌های بانکی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-banking-5.png",
        srcDark: "/img/screens/dashboards-banking-5-dark.png",
        order: 10,
        new: true
      }
    };

const __nuxt_page_meta$2q = {
      title: "تقویم",
      layout: "empty",
      preview: {
        title: "اپ تقویم",
        description: "برای اپ‌های چت و ایمیل",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-calendar.png",
        srcDark: "/img/screens/dashboards-calendar-dark.png",
        order: 25
      }
    };

const __nuxt_page_meta$2p = {
      title: "نمودارهای اپکس (Apex)",
      preview: {
        title: "نمودارهای نمونه",
        description: "برای مصورسازی داده‌ها",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-charts.png",
        srcDark: "/img/screens/dashboards-charts-dark.png",
        order: 26
      }
    };

const __nuxt_page_meta$2o = {
      title: "شرکت",
      preview: {
        title: "داشبورد شرکت",
        description: "برای کسب‌وکار شرکتی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-company.png",
        srcDark: "/img/screens/dashboards-company-dark.png",
        order: 11
      }
    };

const __nuxt_page_meta$2n = {
      title: "آموزش الکترونیکی",
      preview: {
        title: "داشبورد دوره",
        description: "برای مدرسه و تحصیلات",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-course.png",
        srcDark: "/img/screens/dashboards-course-dark.png",
        order: 13
      }
    };

const __nuxt_page_meta$2m = {
      title: "دلیوری",
      preview: {
        title: "داشبورد تحویل",
        description: "برای خدمات تحویل غذا",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-delivery.png",
        srcDark: "/img/screens/dashboards-delivery-dark.png",
        order: 22
      }
    };

const __nuxt_page_meta$2l = {
      title: "تجارت الکترونیک",
      preview: {
        title: "داشبورد تجارت الکترونیک",
        description: "برای فروش و فروشگاه‌های آنلاین",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-ecommerce.png",
        srcDark: "/img/screens/dashboards-ecommerce-dark.png",
        order: 21
      }
    };

const __nuxt_page_meta$2k = {
      title: "پروازها",
      preview: {
        title: "داشبورد پروازها",
        description: "برای سفر و رزور",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-flights.png",
        srcDark: "/img/screens/dashboards-flights-dark.png",
        order: 10
      }
    };

const __nuxt_page_meta$2j = {
      title: "سلامتی",
      preview: {
        title: "داشبورد سلامتی",
        description: "برای سلامتی و ورزش",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-health.png",
        srcDark: "/img/screens/dashboards-health-dark.png",
        order: 17
      }
    };

const __nuxt_page_meta$2i = {
      title: "سرگرمی‌ها",
      preview: {
        title: "داشبورد سرگرمی‌ها",
        description: "برای سرگرمی‌ها و علایق",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-hobbies.png",
        srcDark: "/img/screens/dashboards-hobbies-dark.png",
        order: 16
      }
    };

const __nuxt_page_meta$2h = {
      title: "منابع انسانی",
      preview: {
        title: "داشبورد منابع انسانی",
        description: "برای مدیریت منابع انسانی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-human-resources.png",
        srcDark: "/img/screens/dashboards-human-resources-dark.png",
        order: 12
      }
    };

const __nuxt_page_meta$2g = {
      title: "صندوق ورودی",
      layout: "empty",
      preview: {
        title: "اپلیکیشن صندوق ورودی ",
        description: "برای اپ‌های چت و ایمیل",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-inbox.png",
        srcDark: "/img/screens/dashboards-inbox-dark.png",
        order: 25
      }
    };

const __nuxt_page_meta$2f = {
      title: "فعالیت",
      preview: {
        title: "داشبورد شخصی نسخه ۱",
        description: "برای استفاده و گزارش‌های شخصی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-personal-1.png",
        srcDark: "/img/screens/dashboards-personal-1-dark.png",
        order: 1
      }
    };

const __nuxt_page_meta$2e = {
      title: "اینفلوئنسر",
      preview: {
        title: "داشبورد اینفلوئنسر",
        description: "برای اینفلوئنسرهای شبکه‌های اجتماعی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-influencer.png",
        srcDark: "/img/screens/dashboards-influencer-dark.png",
        order: 15
      }
    };

const __nuxt_page_meta$2d = {
      title: "مشاغل",
      preview: {
        title: "داشبورد مشاغل",
        description: "برای استخدام و جستجوی شغل",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-jobs.png",
        srcDark: "/img/screens/dashboards-jobs-dark.png",
        order: 14
      }
    };

const __nuxt_page_meta$2c = {
      title: "نقشه",
      layout: "empty",
      preview: {
        title: "پنل نقشه در راست",
        description: "برای اپ‌های بر پایه لوکیشن",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-map-left.png",
        srcDark: "/img/screens/dashboards-map-left-dark.png",
        order: 23
      }
    };

const __nuxt_page_meta$2b = {
      title: "نقشه",
      layout: "empty",
      preview: {
        title: "پنل نقشه در چپ",
        description: "برای اپ‌های بر پایه لوکیشن",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-map-right.png",
        srcDark: "/img/screens/dashboards-map-right-dark.png",
        order: 24
      }
    };

const __nuxt_page_meta$2a = {
      title: "پیام‌رسانی",
      layout: "empty",
      preview: {
        title: "برنامه پیام‌رسان",
        description: "برای گفتگوها و چت‌ها",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-messaging-2.png",
        srcDark: "/img/screens/dashboards-messaging-2-dark.png",
        order: 26,
        new: true
      }
    };

const __nuxt_page_meta$29 = {
      title: "پیام‌رسانی",
      layout: "empty",
      preview: {
        title: "برنامه پیام‌رسان",
        description: "برای اپلیکیشن‌های چت و پیام‌رسانی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-messaging.png",
        srcDark: "/img/screens/dashboards-messaging-dark.png",
        order: 26
      }
    };

const __nuxt_page_meta$28 = {
      title: "نمای کلی",
      preview: {
        title: "نمای کلی",
        description: "برای رصد و اقدام سریع",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-overview.png",
        srcDark: "/img/screens/dashboards-overview-dark.png",
        order: 5,
        new: true
      }
    };

const __nuxt_page_meta$27 = {
      title: "پروژه‌های من",
      preview: {
        title: "داشبورد شخصی نسخه ۲",
        description: "برای استفاده و گزارش‌های شخصی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-personal-2.png",
        srcDark: "/img/screens/dashboards-personal-2-dark.png",
        order: 2
      }
    };

const __nuxt_page_meta$26 = {
      title: "مصاحبه‌ها",
      preview: {
        title: "داشبورد شخصی نسخه ۳",
        description: "برای استفاده و گزارش‌های شخصی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-personal-3.png",
        srcDark: "/img/screens/dashboards-personal-3-dark.png",
        order: 3
      }
    };

const __nuxt_page_meta$25 = {
      title: "نمایش سریع",
      preview: {
        title: "نمایش سریع",
        description: "برای استفاده و ردیابی شخصی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-quickviews.png",
        srcDark: "/img/screens/dashboards-quickviews-dark.png",
        order: 5,
        new: true
      }
    };

const __nuxt_page_meta$24 = {
      title: "فروش",
      preview: {
        title: "داشبورد فروش",
        description: "برای فروش و بازاریابی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-sales.png",
        srcDark: "/img/screens/dashboards-sales-dark.png",
        order: 6
      }
    };

const __nuxt_page_meta$23 = {
      title: "فوتبال",
      preview: {
        title: "داشبورد فوتبال",
        description: "برای طرفداران فوتبال",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-soccer.png",
        srcDark: "/img/screens/dashboards-soccer-dark.png",
        order: 20
      }
    };

const __nuxt_page_meta$22 = {
      title: "سهام",
      preview: {
        title: "داشبورد سهام",
        description: "برای تحلیل بازار سهام",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-stocks.png",
        srcDark: "/img/screens/dashboards-stocks-dark.png",
        order: 5
      }
    };

const __nuxt_page_meta$21 = {
      title: "تجارت",
      preview: {
        title: "تجارت",
        description: "برای امور مالی و سرمایه‌گذاری",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-trading.png",
        srcDark: "/img/screens/dashboards-trading-dark.png",
        order: 5,
        new: true
      }
    };

const __nuxt_page_meta$20 = {
      title: "ویدئو",
      preview: {
        title: "داشبورد ویدیو",
        description: "برای سازندگان محتوای ویدیویی",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-video.png",
        srcDark: "/img/screens/dashboards-video-dark.png",
        order: 19
      }
    };

const __nuxt_page_meta$1$ = {
      title: "ویجت‌های خلاقانه",
      preview: {
        title: "ویجت‌های خلاقانه",
        description: "برای ترکیب صفحات",
        categories: ["داشبوردها", "ویجت‌ها"],
        src: "/img/screens/dashboards-widgets-creative.png",
        srcDark: "/img/screens/dashboards-widgets-creative-dark.png",
        order: 28
      }
    };

const __nuxt_page_meta$1_ = {
      title: "ویجت‌های UI",
      preview: {
        title: "ویجت‌های UI",
        description: "برای ترکیب صفحات",
        categories: ["داشبوردها", "ویجت‌ها"],
        src: "/img/screens/dashboards-widgets-ui.png",
        srcDark: "/img/screens/dashboards-widgets-ui-dark.png",
        order: 27
      }
    };

const __nuxt_page_meta$1Z = {
      title: "لیست ویجت‌ها",
      preview: {
        title: "لیست ویجت‌ها",
        description: "برای ترکیب صفحات",
        categories: ["داشبوردها", "ویجت‌ها"],
        src: "/img/screens/dashboards-widgets-lists.png",
        srcDark: "/img/screens/dashboards-widgets-lists-dark.png",
        order: 29
      }
    };

const __nuxt_page_meta$1Y = {
      title: "نویسنده",
      preview: {
        title: "داشبورد نویسنده",
        description: "برای نویسندگان و بلاگرها",
        categories: ["داشبوردها"],
        src: "/img/screens/dashboards-writer.png",
        srcDark: "/img/screens/dashboards-writer-dark.png",
        order: 18
      }
    };

const __nuxt_page_meta$1X = {
      title: "صفحات داشبورد از پیش ساخته‌شده",
      description: "بیش از ۱۰۰ صفحه از پیش ساخته‌شده را کاوش کنید، از جمله داشبوردها و نمونه‌های اپلیکیشن. پروژه خود را با Nuxt و تیلویند سی‌اس‌اس آغاز کنید.",
      layout: "landing"
    };

const __nuxt_page_meta$1W = {
      pageTransition: false,
      layoutTransition: false
    };

const __nuxt_page_meta$1V = {
      title: "سیستم داشبورد Nuxt و تیلویند سی‌اس‌اس",
      description: "قالب سیستم داشبورد Nuxt و تیلویند سی‌اس‌اس که با بیش از ۱۰۰ صفحه از پیش ساخته‌شده و بیش از ۴۰ مؤلفه رابط کاربری سفارشی همراه است.",
      breadcrumb: {
        label: "تایرو"
      },
      layout: "landing"
    };

const __nuxt_page_meta$1U = {
      title: "حساب‌های کاربری",
      preview: {
        title: "حساب‌های کاربری",
        description: "برای مدیریت حساب",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-accounts.png",
        srcDark: "/img/screens/layouts-accounts-dark.png",
        order: 75,
        new: true
      }
    };

const __nuxt_page_meta$1T = {
      title: "حساب‌های متصل",
      preview: {
        title: "حساب‌های متصل",
        description: "برای مدیریت حساب",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-accounts-linked.png",
        srcDark: "/img/screens/layouts-accounts-linked-dark.png",
        order: 76,
        new: true
      }
    };

const __nuxt_page_meta$1S = {
      title: "قوانین انتقال",
      preview: {
        title: "قوانین انتقال",
        description: "برای مدیریت حساب",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-accounts-rules.png",
        srcDark: "/img/screens/layouts-accounts-rules-dark.png",
        order: 77,
        new: true
      }
    };

const __nuxt_page_meta$1R = null;

const __nuxt_page_meta$1Q = {
      title: "کارت شبکه",
      preview: {
        title: "شبکه کارت‌ها 1",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-card-grid-1.png",
        srcDark: "/img/screens/layouts-card-grid-1-dark.png",
        order: 57
      }
    };

const __nuxt_page_meta$1P = {
      title: "کارت شبکه",
      preview: {
        title: "شبکه کارت‌ها 2",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-card-grid-2.png",
        srcDark: "/img/screens/layouts-card-grid-2-dark.png",
        order: 58
      }
    };

const __nuxt_page_meta$1O = {
      title: "کارت شبکه",
      preview: {
        title: "شبکه کارت‌ها 3",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-card-grid-3.png",
        srcDark: "/img/screens/layouts-card-grid-3-dark.png",
        order: 59
      }
    };

const __nuxt_page_meta$1N = {
      title: "کارت شبکه",
      preview: {
        title: "شبکه کارت‌ها 4",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-card-grid-4.png",
        srcDark: "/img/screens/layouts-card-grid-4-dark.png",
        order: 60
      }
    };

const __nuxt_page_meta$1M = {
      title: "کارت جدید",
      layout: "empty",
      preview: {
        title: "ویزارد کارت",
        description: "برای ایجاد کارت جدید",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-card-new.png",
        srcDark: "/img/screens/layouts-card-new-dark.png",
        order: 14,
        new: true
      }
    };

const __nuxt_page_meta$1L = {
      title: "کارت‌های اعتباری",
      preview: {
        title: "کارت‌های اعتباری",
        description: "برای مدیریت کارت",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-cards.png",
        srcDark: "/img/screens/layouts-cards-dark.png",
        order: 13,
        new: true
      }
    };

const __nuxt_page_meta$1K = {
      title: "ویرایش شرکت",
      preview: {
        title: "ویرایش شرکت",
        description: "برای ویرایش اطلاعات شرکت",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-company-edit.png",
        srcDark: "/img/screens/layouts-company-edit-dark.png",
        order: 33,
        new: true
      }
    };

const __nuxt_page_meta$1J = {
      title: "شرکت",
      preview: {
        title: "شرکت",
        description: "برای جزئیات شرکت",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-company.png",
        srcDark: "/img/screens/layouts-company-dark.png",
        order: 32,
        new: true
      }
    };

const __nuxt_page_meta$1I = {
      title: "تماس جدید",
      preview: {
        title: "تماس جدید",
        description: "برای ایجاد مخاطب تماس",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-contacts-create.png",
        srcDark: "/img/screens/layouts-contacts-create-dark.png",
        order: 47,
        new: true
      }
    };

const __nuxt_page_meta$1H = {
      title: "اعتبار",
      preview: {
        title: "فرم اعتبار",
        description: "برای درخواست اعتبار",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-credit.png",
        srcDark: "/img/screens/layouts-credit-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1G = {
      title: "مدارک",
      preview: {
        title: "مدارک",
        description: "برای مدیریت مستندات",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-documents.png",
        srcDark: "/img/screens/layouts-documents-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1F = {
      title: "دانلود",
      preview: {
        title: "دانلودها",
        description: "برای خروجی گرفتن و دانلود داده‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-downloads.png",
        srcDark: "/img/screens/layouts-downloads-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1E = null;

const __nuxt_page_meta$1D = null;

const __nuxt_page_meta$1C = {
      title: "لیست فلکس",
      preview: {
        title: "لیست فلکسی 1",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-flex-1.png",
        srcDark: "/img/screens/layouts-list-flex-1-dark.png",
        order: 41
      }
    };

const __nuxt_page_meta$1B = {
      title: "لیست فلکس",
      preview: {
        title: "لیست فلکسی 2",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-flex-2.png",
        srcDark: "/img/screens/layouts-list-flex-2-dark.png",
        order: 42
      }
    };

const __nuxt_page_meta$1A = {
      title: "لیست فلکس",
      preview: {
        title: "لیست فلکسی 3",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-flex-3.png",
        srcDark: "/img/screens/layouts-list-flex-3-dark.png",
        order: 43
      }
    };

const __nuxt_page_meta$1z = {
      title: "طرح‌بندی فرم ۱",
      preview: {
        title: "طرح‌بندی فرم ۱",
        description: "برای فرم‌ها و فیلدهای ورودی",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-form-1.png",
        srcDark: "/img/screens/layouts-form-1-dark.png",
        order: 47
      }
    };

const __nuxt_page_meta$1y = {
      title: "پزشک جدید",
      preview: {
        title: "چیدمان فرم ۲",
        description: "برای فرم‌ها و فیلدهای ورودی",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-form-2.png",
        srcDark: "/img/screens/layouts-form-2-dark.png",
        order: 48
      }
    };

const __nuxt_page_meta$1x = {
      title: "تسویه حساب",
      preview: {
        title: "چیدمان فرم ۳",
        description: "برای فرم‌ها و فیلدهای ورودی",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-form-3.png",
        srcDark: "/img/screens/layouts-form-3-dark.png",
        order: 49
      }
    };

const __nuxt_page_meta$1w = {
      title: "رویداد جدید",
      preview: {
        title: "چیدمان فرم ۴",
        description: "برای فرم‌ها و فیلدهای ورودی",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-form-4.png",
        srcDark: "/img/screens/layouts-form-4-dark.png",
        order: 50
      }
    };

const __nuxt_page_meta$1v = {
      title: "رمز عبور",
      preview: {
        title: "چیدمان فرم ۵",
        description: "برای فرم‌ها و فیلدهای ورودی",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-form-5.png",
        srcDark: "/img/screens/layouts-form-5-dark.png",
        order: 51
      }
    };

const __nuxt_page_meta$1u = {
      title: "جلسه",
      preview: {
        title: "چیدمان فرم 6",
        description: "برای فرم‌ها و فیلدهای ورودی",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-form-6.png",
        srcDark: "/img/screens/layouts-form-6-dark.png",
        order: 52
      }
    };

const __nuxt_page_meta$1t = {
      title: "لیست مشاهده",
      preview: {
        title: "نمای لیست ۱",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-view-1.png",
        srcDark: "/img/screens/layouts-list-view-1-dark.png",
        order: 37
      }
    };

const __nuxt_page_meta$1s = {
      title: "یکپارچگی‌ها",
      preview: {
        title: "یکپارچگی‌ها",
        description: "برای یکپارچه‌سازی نرم‌افزارها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-integrations.png",
        srcDark: "/img/screens/layouts-integrations-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1r = {
      title: "سرمایه‌گذاری‌ها",
      preview: {
        title: "سرمایه‌گذاری‌ها",
        description: "برای گزینه‌های تأمین مالی و سرمایه‌گذاری",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-invest.png",
        srcDark: "/img/screens/layouts-invest-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1q = {
      preview: {
        title: "دعوت - مرحله ۱",
        description: "برای دعوت افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-invite.png",
        srcDark: "/img/screens/layouts-invite-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1p = {
      preview: {
        title: "دعوت - مرحله ۲",
        description: "برای دعوت افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-invite-permissions.png",
        srcDark: "/img/screens/layouts-invite-permissions-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1o = {
      preview: {
        title: "دعوت - مرحله ۳",
        description: "برای دعوت افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-invite-review.png",
        srcDark: "/img/screens/layouts-invite-review-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1n = {
      layout: "empty"
    };

const __nuxt_page_meta$1m = {
      title: "لیست مشاهده",
      preview: {
        title: "نمای لیست ۲",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-view-2.png",
        srcDark: "/img/screens/layouts-list-view-2-dark.png",
        order: 38
      }
    };

const __nuxt_page_meta$1l = {
      title: "لیست مشاهده",
      preview: {
        title: "نمای لیست ۳",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-view-3.png",
        srcDark: "/img/screens/layouts-list-view-3-dark.png",
        order: 39
      }
    };

const __nuxt_page_meta$1k = {
      title: "لیست مشاهده",
      preview: {
        title: "نمای لیست ۴",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-list-view-4.png",
        srcDark: "/img/screens/layouts-list-view-4-dark.png",
        order: 40
      }
    };

const __nuxt_page_meta$1j = {
      title: "اعضا",
      preview: [
        {
          title: "جزئیات عضو",
          description: "برای مشاهده جزئیات مایا",
          categories: ["چیدمان‌ها", "لیست‌ها", "جزئیات"],
          src: "/img/screens/layouts-members-maya-rosselini.png",
          srcDark: "/img/screens/layouts-members-maya-rosselini-dark.png",
          order: 37,
          params: {
            slug: "maya-rosselini"
          },
          new: true
        },
        {
          title: "جزئیات عضو",
          description: "برای مشاهده جزئیات جان",
          categories: ["چیدمان‌ها", "لیست‌ها", "جزئیات"],
          src: "/img/screens/layouts-members-john-baxter.png",
          srcDark: "/img/screens/layouts-members-john-baxter-dark.png",
          order: 37,
          params: {
            slug: "john-baxter"
          },
          new: true
        }
      ]
    };

const __nuxt_page_meta$1i = null;

const __nuxt_page_meta$1h = {
      title: "پیشنهادات",
      preview: {
        title: "پیشنهادات",
        description: "برای پیشنهادات شریک",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-offers.png",
        srcDark: "/img/screens/layouts-offers-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$1g = {
      title: "مقدمات ورود",
      layout: "empty",
      preview: {
        title: "مقدمات ورود 1",
        description: "برای ورود کاربران جدید",
        categories: ["چیدمان‌ها", "مقدمات ورود"],
        src: "/img/screens/layouts-onboarding-1.png",
        srcDark: "/img/screens/layouts-onboarding-1-dark.png",
        order: 93
      }
    };

const __nuxt_page_meta$1f = {
      title: "مقدمات ورود",
      layout: "empty",
      preview: {
        title: "مقدمات ورود ۲",
        description: "برای ورود کاربران جدید",
        categories: ["چیدمان‌ها", "مقدمات ورود"],
        src: "/img/screens/layouts-onboarding-2.png",
        srcDark: "/img/screens/layouts-onboarding-2-dark.png",
        order: 94
      }
    };

const __nuxt_page_meta$1e = {
      title: "مقدمات ورود",
      layout: "empty",
      preview: {
        title: "مقدمات ورود 3",
        description: "برای ورود کاربران جدید",
        categories: ["چیدمان‌ها", "مقدمات ورود"],
        src: "/img/screens/layouts-onboarding-3.png",
        srcDark: "/img/screens/layouts-onboarding-3-dark.png",
        order: 95
      }
    };

const __nuxt_page_meta$1d = {
      title: "پرداخت‌ها",
      preview: {
        title: "پرداخت‌های دریافتی",
        description: "برای مدیریت پرداخت‌ها و دریافت‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها", "پرداخت‌ها"],
        src: "/img/screens/layouts-payments-incoming.png",
        srcDark: "/img/screens/layouts-payments-incoming-dark.png",
        order: 80,
        new: true
      }
    };

const __nuxt_page_meta$1c = {
      title: "پرداخت‌ها",
      preview: {
        title: "پرداخت‌های ارسالی",
        description: "برای مدیریت پرداخت‌ها و دریافت‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها", "پرداخت‌ها"],
        src: "/img/screens/layouts-payments.png",
        srcDark: "/img/screens/layouts-payments-dark.png",
        order: 80,
        new: true
      }
    };

const __nuxt_page_meta$1b = {
      title: "گیرندگان",
      preview: {
        title: "گیرندگان",
        description: "برای مدیریت مخاطبین",
        categories: ["چیدمان‌ها", "لیست‌ها", "پرداخت‌ها"],
        src: "/img/screens/layouts-payments-recipients.png",
        srcDark: "/img/screens/layouts-payments-recipients-dark.png",
        order: 80,
        new: true
      }
    };

const __nuxt_page_meta$1a = null;

const __nuxt_page_meta$19 = {
      title: "بارگذاری مکانی",
      preview: {
        title: "بارگذاری مکانی 1",
        description: "برای وضعیت‌های بارگذاری",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-placeload-1.png",
        srcDark: "/img/screens/layouts-placeload-1-dark.png",
        order: 53
      }
    };

const __nuxt_page_meta$18 = {
      title: "بارگذاری مکانی",
      preview: {
        title: "بارگذاری مکانی 2",
        description: "برای وضعیت‌های بارگذاری",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-placeload-2.png",
        srcDark: "/img/screens/layouts-placeload-2-dark.png",
        order: 54
      }
    };

const __nuxt_page_meta$17 = {
      title: "بارگذاری مکانی",
      preview: {
        title: "بارگذاری مکانی 3",
        description: "برای وضعیت‌های بارگذاری",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-placeload-3.png",
        srcDark: "/img/screens/layouts-placeload-3-dark.png",
        order: 55
      }
    };

const __nuxt_page_meta$16 = {
      title: "بارگذاری مکانی",
      preview: {
        title: "بارگذاری مکانی 4",
        description: "برای وضعیت‌های بارگذاری",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-placeload-4.png",
        srcDark: "/img/screens/layouts-placeload-4-dark.png",
        order: 56
      }
    };

const __nuxt_page_meta$15 = {
      title: "تجربه",
      preview: {
        title: "ویرایش پروفایل 2",
        description: "برای ویرایش پروفایل کاربر",
        categories: ["چیدمان‌ها", "پروفایل", "فرم‌ها"],
        src: "/img/screens/layouts-subpages-profile-edit-2.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-2-dark.png",
        order: 77
      },
      pageTransition: {
        enterActiveClass: "transition-all duration-500 ease-out",
        enterFromClass: "translate-y-20 opacity-0",
        enterToClass: "translate-y-0 opacity-100",
        leaveActiveClass: "transition-all duration-200 ease-in",
        leaveFromClass: "translate-y-0 opacity-100",
        leaveToClass: "translate-y-20 opacity-0"
      }
    };

const __nuxt_page_meta$14 = null;

const __nuxt_page_meta$13 = {
      title: "تنظیمات",
      preview: {
        title: "ویرایش پروفایل 4",
        description: "برای ویرایش پروفایل کاربر",
        categories: ["چیدمان‌ها", "پروفایل", "فرم‌ها"],
        src: "/img/screens/layouts-subpages-profile-edit-4.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-4-dark.png",
        order: 79
      },
      pageTransition: {
        enterActiveClass: "transition-all duration-500 ease-out",
        enterFromClass: "translate-y-20 opacity-0",
        enterToClass: "translate-y-0 opacity-100",
        leaveActiveClass: "transition-all duration-200 ease-in",
        leaveFromClass: "translate-y-0 opacity-100",
        leaveToClass: "translate-y-20 opacity-0"
      }
    };

const __nuxt_page_meta$12 = {
      title: "مهارت‌ها",
      preview: {
        title: "ویرایش پروفایل 3",
        description: "برای ویرایش پروفایل کاربر",
        categories: ["چیدمان‌ها", "پروفایل", "فرم‌ها"],
        src: "/img/screens/layouts-subpages-profile-edit-3.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-3-dark.png",
        order: 78
      },
      pageTransition: {
        enterActiveClass: "transition-all duration-500 ease-out",
        enterFromClass: "translate-y-20 opacity-0",
        enterToClass: "translate-y-0 opacity-100",
        leaveActiveClass: "transition-all duration-200 ease-in",
        leaveFromClass: "translate-y-0 opacity-100",
        leaveToClass: "translate-y-20 opacity-0"
      }
    };

const __nuxt_page_meta$11 = {
      title: "ویرایش پروفایل",
      preview: {
        title: "ویرایش پروفایل 1",
        description: "برای ویرایش پروفایل کاربر",
        categories: ["چیدمان‌ها", "پروفایل", "فرم‌ها"],
        src: "/img/screens/layouts-subpages-profile-edit-1.png",
        srcDark: "/img/screens/layouts-subpages-profile-edit-1-dark.png",
        order: 76
      }
    };

const __nuxt_page_meta$10 = {
      title: "اطلاعیه‌ها",
      preview: {
        title: "اطلاعیه‌ها",
        description: "برای نمایش اعلان‌های حساب",
        categories: ["چیدمان‌ها", "پروفایل"],
        src: "/img/screens/layouts-subpages-notifications.png",
        srcDark: "/img/screens/layouts-subpages-notifications-dark.png",
        order: 80
      }
    };

const __nuxt_page_meta$$ = {
      title: "تنظیمات",
      preview: {
        title: "تنظیمات",
        description: "برای نمایش تنظیمات حساب کاربری",
        categories: ["چیدمان‌ها", "پروفایل"],
        src: "/img/screens/layouts-subpages-settings.png",
        srcDark: "/img/screens/layouts-subpages-settings-dark.png",
        order: 81
      }
    };

const __nuxt_page_meta$_ = {
      title: "پروفایل",
      preview: {
        title: "پروفایل",
        description: "برای نمایش پروفایل کاربر",
        categories: ["چیدمان‌ها", "پروفایل"],
        src: "/img/screens/layouts-subpages-profile.png",
        srcDark: "/img/screens/layouts-subpages-profile-dark.png",
        order: 75
      }
    };

const __nuxt_page_meta$Z = {
      title: "بورد پروژه",
      layout: "empty",
      preview: [
        {
          title: "بورد پروژه",
          description: "برای یک پروژه فیتنس در کانبان برد",
          categories: ["چیدمان‌ها", "پروژه‌ها", "کان بان"],
          src: "/img/screens/layouts-projects-board.png",
          srcDark: "/img/screens/layouts-projects-board-dark.png",
          order: 74,
          params: {
            slug: "health-and-fitness-dashboard"
          }
        },
        {
          title: "بورد پروژه",
          description: "برای یک پروژه بانکی در کانبان برد",
          categories: ["چیدمان‌ها", "پروژه‌ها", "کان بان"],
          src: "/img/screens/layouts-projects-board.png",
          srcDark: "/img/screens/layouts-projects-board-dark.png",
          order: 74,
          params: {
            slug: "banking-and-finance-dashboard"
          }
        }
      ]
    };

const __nuxt_page_meta$Y = {
      title: "لیست بورد",
      preview: {
        title: "هاب بورد پروژه",
        description: "برای نمایش پروژه‌های اخیر",
        categories: ["چیدمان‌ها", "پروژه‌ها"],
        src: "/img/screens/layouts-projects-board-hub.png",
        srcDark: "/img/screens/layouts-projects-board-hub-dark.png",
        order: 73
      }
    };

const __nuxt_page_meta$X = {
      title: "جزئیات پروژه",
      preview: [
        {
          title: "جزئیات پروژه",
          description: "برای نمایش جزئیات پروژه فیتنس",
          categories: ["چیدمان‌ها", "پروژه‌ها"],
          src: "/img/screens/layouts-projects-details.png",
          srcDark: "/img/screens/layouts-projects-details-dark.png",
          order: 72,
          params: {
            slug: "health-and-fitness-dashboard"
          }
        },
        {
          title: "جزئیات پروژه",
          description: "برای نمایش جزئیات پروژه بانکی",
          categories: ["چیدمان‌ها", "پروژه‌ها"],
          src: "/img/screens/layouts-projects-details.png",
          srcDark: "/img/screens/layouts-projects-details-dark.png",
          order: 72,
          params: {
            slug: "banking-and-finance-dashboard"
          }
        }
      ]
    };

const __nuxt_page_meta$W = {
      title: "لیست پروژه",
      preview: {
        title: "هاب جزئیات پروژه",
        description: "برای نمایش پروژه‌های اخیر",
        categories: ["چیدمان‌ها", "پروژه‌ها"],
        src: "/img/screens/layouts-projects-details-hub.png",
        srcDark: "/img/screens/layouts-projects-details-hub-dark.png",
        order: 71
      }
    };

const __nuxt_page_meta$V = {
      title: "لیست پروژه",
      preview: {
        title: "لیست پروژه 1",
        description: "برای نمایش لیست پروژه‌ها",
        categories: ["چیدمان‌ها", "پروژه‌ها"],
        src: "/img/screens/layouts-projects-1.png",
        srcDark: "/img/screens/layouts-projects-1-dark.png",
        order: 68
      }
    };

const __nuxt_page_meta$U = {
      title: "لیست پروژه",
      preview: {
        title: "لیست پروژه 2",
        description: "برای نمایش لیست پروژه‌ها",
        categories: ["چیدمان‌ها", "پروژه‌ها"],
        src: "/img/screens/layouts-projects-2.png",
        srcDark: "/img/screens/layouts-projects-2-dark.png",
        order: 69
      }
    };

const __nuxt_page_meta$T = {
      title: "لیست پروژه",
      preview: {
        title: "لیست پروژه 3",
        description: "برای نمایش لیست پروژه‌ها",
        categories: ["چیدمان‌ها", "پروژه‌ها"],
        src: "/img/screens/layouts-projects-3.png",
        srcDark: "/img/screens/layouts-projects-3-dark.png",
        order: 70
      }
    };

const __nuxt_page_meta$S = {
      preview: {
        title: "دریافت - مرحله ۱",
        description: "برای دریافت پرداخت‌ها",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-receive.png",
        srcDark: "/img/screens/layouts-receive-dark.png",
        order: 15,
        new: true
      }
    };

const __nuxt_page_meta$R = {
      preview: {
        title: "دریافت - مرحله ۳",
        description: "برای دریافت پرداخت‌ها",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-receive-review.png",
        srcDark: "/img/screens/layouts-receive-review-dark.png",
        order: 17,
        new: true
      }
    };

const __nuxt_page_meta$Q = {
      preview: {
        title: "دریافت - مرحله ۲",
        description: "برای دریافت پرداخت‌ها",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-receive-transfer.png",
        srcDark: "/img/screens/layouts-receive-transfer-dark.png",
        order: 16,
        new: true
      }
    };

const __nuxt_page_meta$P = {
      layout: "empty"
    };

const __nuxt_page_meta$O = {
      title: "دریافت‌کننده",
      preview: [
        {
          title: "شرکت دریافت‌کننده",
          description: "برای جزئیات شرکت",
          categories: ["چیدمان‌ها", "لیست‌ها", "جزئیات"],
          src: "/img/screens/layouts-recipient-airbnb.png",
          srcDark: "/img/screens/layouts-recipient-airbnb-dark.png",
          order: 37,
          params: {
            slug: "airbnb"
          },
          new: true
        },
        {
          title: "تماس دریافت‌کننده",
          description: "برای جزئیات کاربر",
          categories: ["چیدمان‌ها", "لیست‌ها", "جزئیات"],
          src: "/img/screens/layouts-recipient-jackie-strauss.png",
          srcDark: "/img/screens/layouts-recipient-jackie-strauss-dark.png",
          order: 37,
          params: {
            slug: "jackie-strauss"
          },
          new: true
        }
      ]
    };

const __nuxt_page_meta$N = {
      title: "جستجوی خالی",
      preview: {
        title: "جستجوی خالی",
        description: "برای نمایش نتایج جستجو",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-subpages-search-empty.png",
        srcDark: "/img/screens/layouts-subpages-search-empty-dark.png",
        order: 83
      }
    };

const __nuxt_page_meta$M = {
      title: "جستجو نتایج",
      preview: {
        title: "نتایج جستجو",
        description: "برای نمایش نتایج جستجو",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-subpages-search-results.png",
        srcDark: "/img/screens/layouts-subpages-search-results-dark.png",
        order: 82
      }
    };

const __nuxt_page_meta$L = {
      preview: {
        title: "ارسال - مرحله ۴",
        description: "برای ارسال پرداخت‌ها به افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-send-address.png",
        srcDark: "/img/screens/layouts-send-address-dark.png",
        order: 21,
        new: true
      }
    };

const __nuxt_page_meta$K = {
      preview: {
        title: "ارسال - مرحله 5",
        description: "برای ارسال پرداخت‌ها به افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-send-amount.png",
        srcDark: "/img/screens/layouts-send-amount-dark.png",
        order: 22,
        new: true
      }
    };

const __nuxt_page_meta$J = {
      preview: {
        title: "ارسال - مرحله ۱",
        description: "برای ارسال پرداخت‌ها به افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-send.png",
        srcDark: "/img/screens/layouts-send-dark.png",
        order: 18,
        new: true
      }
    };

const __nuxt_page_meta$I = {
      preview: {
        title: "ارسال - مرحله ۲",
        description: "برای ارسال پرداخت‌ها به افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-send-method.png",
        srcDark: "/img/screens/layouts-send-method-dark.png",
        order: 19,
        new: true
      }
    };

const __nuxt_page_meta$H = {
      preview: {
        title: "ارسال - مرحله ۳",
        description: "برای ارسال پرداخت‌ها به افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-send-recipient.png",
        srcDark: "/img/screens/layouts-send-recipient-dark.png",
        order: 20,
        new: true
      }
    };

const __nuxt_page_meta$G = {
      preview: {
        title: "ارسال - مرحله 6",
        description: "برای ارسال پرداخت‌ها به افراد",
        categories: ["چیدمان‌ها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/layouts-send-review.png",
        srcDark: "/img/screens/layouts-send-review-dark.png",
        order: 23,
        new: true
      }
    };

const __nuxt_page_meta$F = {
      layout: "empty"
    };

const __nuxt_page_meta$E = {
      title: "تنظیمات",
      preview: {
        title: "تنظیمات",
        description: "برای مدیریت تنظیمات",
        categories: ["چیدمان‌ها", "تنظیمات"],
        src: "/img/screens/layouts-settings.png",
        srcDark: "/img/screens/layouts-settings-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$D = {
      title: "اطلاعیه‌ها",
      preview: {
        title: "اطلاعیه‌ها",
        description: "برای مدیریت تنظیمات",
        categories: ["چیدمان‌ها", "تنظیمات"],
        src: "/img/screens/layouts-settings-notifications.png",
        srcDark: "/img/screens/layouts-settings-notifications-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$C = {
      title: "امنیت",
      preview: {
        title: "امنیت",
        description: "برای مدیریت تنظیمات",
        categories: ["چیدمان‌ها", "تنظیمات"],
        src: "/img/screens/layouts-settings-security.png",
        srcDark: "/img/screens/layouts-settings-security-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$B = {
      title: "توکن‌های API",
      preview: {
        title: "توکن‌های API",
        description: "برای مدیریت تنظیمات",
        categories: ["چیدمان‌ها", "تنظیمات"],
        src: "/img/screens/layouts-settings-tokens.png",
        srcDark: "/img/screens/layouts-settings-tokens-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$A = {
      layout: "empty"
    };

const __nuxt_page_meta$z = {
      title: "جدول لیست",
      preview: {
        title: "لیست جدول ۱",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-table-list-1.png",
        srcDark: "/img/screens/layouts-table-list-1-dark.png",
        order: 44
      }
    };

const __nuxt_page_meta$y = {
      title: "جدول لیست",
      preview: {
        title: "لیست جدولی 2",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-table-list-2.png",
        srcDark: "/img/screens/layouts-table-list-2-dark.png",
        order: 45
      }
    };

const __nuxt_page_meta$x = {
      title: "جدول لیست",
      preview: {
        title: "لیست جدولی 3",
        description: "برای نمای لیست‌ها و مجموعه‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-table-list-3.png",
        srcDark: "/img/screens/layouts-table-list-3-dark.png",
        order: 46
      }
    };

const __nuxt_page_meta$w = {
      title: "شبکه کاشی‌وار",
      preview: {
        title: "شبکه کاشی 1",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-tile-grid-1.png",
        srcDark: "/img/screens/layouts-tile-grid-1-dark.png",
        order: 61
      }
    };

const __nuxt_page_meta$v = {
      title: "شبکه کاشی‌وار",
      preview: {
        title: "شبکه کاشی 2",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-tile-grid-2.png",
        srcDark: "/img/screens/layouts-tile-grid-2-dark.png",
        order: 62
      }
    };

const __nuxt_page_meta$u = {
      title: "شبکه کاشی‌وار",
      preview: {
        title: "شبکه کاشی 3",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-tile-grid-3.png",
        srcDark: "/img/screens/layouts-tile-grid-3-dark.png",
        order: 63
      }
    };

const __nuxt_page_meta$t = {
      title: "تراکنش‌ها",
      preview: {
        title: "تراکنش‌ها",
        description: "برای سابقه تراکنش‌ها",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-transactions.png",
        srcDark: "/img/screens/layouts-transactions-dark.png",
        order: 69,
        new: true
      }
    };

const __nuxt_page_meta$s = {
      title: "ویرایش کاربر",
      preview: {
        title: "ویرایش کاربر",
        description: "برای ویرایش اطلاعات کاربر",
        categories: ["چیدمان‌ها", "فرم‌ها"],
        src: "/img/screens/layouts-user-edit.png",
        srcDark: "/img/screens/layouts-user-edit-dark.png",
        order: 31,
        new: true
      }
    };

const __nuxt_page_meta$r = {
      title: "کاربران",
      preview: {
        title: "شبکه کاربر 1",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-user-grid-1.png",
        srcDark: "/img/screens/layouts-user-grid-1-dark.png",
        order: 64
      }
    };

const __nuxt_page_meta$q = {
      title: "کاربران",
      preview: {
        title: "شبکه کاربر 2",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-user-grid-2.png",
        srcDark: "/img/screens/layouts-user-grid-2-dark.png",
        order: 65
      }
    };

const __nuxt_page_meta$p = {
      title: "کاربران",
      preview: {
        title: "شبکه کاربر 3",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-user-grid-3.png",
        srcDark: "/img/screens/layouts-user-grid-3-dark.png",
        order: 66
      }
    };

const __nuxt_page_meta$o = {
      title: "کاربران",
      preview: {
        title: "شبکه کاربر 4",
        description: "برای شبکه‌بندی اقلام و مجموعه‌ها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-user-grid-4.png",
        srcDark: "/img/screens/layouts-user-grid-4-dark.png",
        order: 67
      }
    };

const __nuxt_page_meta$n = {
      title: "کاربر",
      preview: {
        title: "کاربر",
        description: "برای نمایش اطلاعات کاربر",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-user.png",
        srcDark: "/img/screens/layouts-user-dark.png",
        order: 30,
        new: true
      }
    };

const __nuxt_page_meta$m = {
      title: "اقدام",
      preview: {
        title: "اقدام 1",
        description: "برای اقدامات و وظایف",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-subpages-action-1.png",
        srcDark: "/img/screens/layouts-subpages-action-1-dark.png",
        order: 85
      }
    };

const __nuxt_page_meta$l = {
      title: "اقدام",
      preview: {
        title: "اقدام 2",
        description: "برای اقدامات و وظایف",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-subpages-action-2.png",
        srcDark: "/img/screens/layouts-subpages-action-2-dark.png",
        order: 86
      }
    };

const __nuxt_page_meta$k = {
      title: "SaaS صورتحساب",
      preview: {
        title: "صورت‌حساب SaaS",
        description: "برای طرح‌های صورت‌حساب SaaS",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-subpages-billing.png",
        srcDark: "/img/screens/layouts-subpages-billing-dark.png",
        order: 84
      }
    };

const __nuxt_page_meta$j = {
      title: "تایید",
      preview: {
        title: "تایید حساب کاربری",
        description: "برای تائید حساب کاربری",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-utility-confirm.png",
        srcDark: "/img/screens/layouts-utility-confirm-dark.png",
        order: 87
      }
    };

const __nuxt_page_meta$i = {
      title: "خطا",
      layout: "empty",
      preview: {
        title: "خطا",
        description: "برای خطاهای سیستمی",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-utility-error.png",
        srcDark: "/img/screens/layouts-utility-error-dark.png",
        order: 92
      }
    };

const __nuxt_page_meta$h = {
      title: "فاکتور",
      preview: {
        title: "فاکتور",
        description: "برای خدمات و حسابداری",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-utility-invoice-2.png",
        srcDark: "/img/screens/layouts-utility-invoice-2-dark.png",
        order: 8,
        new: true
      }
    };

const __nuxt_page_meta$g = {
      title: "فاکتور",
      preview: {
        title: "فاکتور",
        description: "برای حسابداری و فاکتورها",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-utility-invoice.png",
        srcDark: "/img/screens/layouts-utility-invoice-dark.png",
        order: 90
      }
    };

const __nuxt_page_meta$f = {
      title: "ارتقاء",
      preview: {
        title: "ارتقاء",
        description: "برای آفرهای ارتقاء",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-utility-promotion.png",
        srcDark: "/img/screens/layouts-utility-promotion-dark.png",
        order: 88
      }
    };

const __nuxt_page_meta$e = {
      title: "وضعیت",
      layout: "empty",
      preview: {
        title: "وضعیت خدمت",
        description: "برای وضعیت خدمات شرکت",
        categories: ["چیدمان‌ها"],
        src: "/img/screens/layouts-utility-status.png",
        srcDark: "/img/screens/layouts-utility-status-dark.png",
        order: 91
      }
    };

const __nuxt_page_meta$d = {
      title: "گنبد",
      preview: {
        title: "گنبد",
        description: "برای امنیت در سطح گنبد آهنین",
        categories: ["چیدمان‌ها", "لیست‌ها"],
        src: "/img/screens/layouts-vault.png",
        srcDark: "/img/screens/layouts-vault-dark.png",
        order: 37,
        new: true
      }
    };

const __nuxt_page_meta$c = null;

const __nuxt_page_meta$b = {};

const __nuxt_page_meta$a = {
      title: "فشرده‌سازی چیدمان",
      layout: "empty"
    };

const __nuxt_page_meta$9 = {
      title: "چیدمان سایدبار",
      layout: "empty"
    };

const __nuxt_page_meta$8 = null;

const __nuxt_page_meta$7 = {
      title: "ویزارد — گام ۱",
      preview: {
        title: "ویزارد — گام ۱",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-1.png",
        srcDark: "/img/screens/wizard-1-dark.png",
        order: 30
      }
    };

const __nuxt_page_meta$6 = {
      title: "ویزارد — گام ۲",
      preview: {
        title: "ویزارد — گام ۲",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-2.png",
        srcDark: "/img/screens/wizard-2-dark.png",
        order: 31
      }
    };

const __nuxt_page_meta$5 = {
      title: "ویزارد — گام ۳",
      preview: {
        title: "ویزارد — گام ۳",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-3.png",
        srcDark: "/img/screens/wizard-3-dark.png",
        order: 32
      }
    };

const __nuxt_page_meta$4 = {
      title: "ویزارد — گام ۴",
      preview: {
        title: "ویزارد — گام ۴",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-4.png",
        srcDark: "/img/screens/wizard-4-dark.png",
        order: 33
      }
    };

const __nuxt_page_meta$3 = {
      title: "ویزارد — گام ۵",
      preview: {
        title: "ویزارد — گام ۵",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-5.png",
        srcDark: "/img/screens/wizard-5-dark.png",
        order: 34
      }
    };

const __nuxt_page_meta$2 = {
      title: "ویزارد — گام ۶",
      preview: {
        title: "ویزارد — گام ۶",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-6.png",
        srcDark: "/img/screens/wizard-6-dark.png",
        order: 35
      }
    };

const __nuxt_page_meta$1 = {
      title: "ویزارد — گام ۷",
      preview: {
        title: "ویزارد — گام ۷",
        description: "برای مراحل راه‌اندازی و فرم‌های مرحله‌ای",
        categories: ["داشبوردها", "ویزاردها", "فرم‌ها"],
        src: "/img/screens/wizard-7.png",
        srcDark: "/img/screens/wizard-7-dark.png",
        order: 36
      }
    };

const __nuxt_page_meta = {
      layout: "empty"
    };

const _routes = [
  {
    name: __nuxt_page_meta$2A?.name ?? "auth",
    path: __nuxt_page_meta$2A?.path ?? "/auth",
    meta: __nuxt_page_meta$2A || {},
    alias: __nuxt_page_meta$2A?.alias || [],
    redirect: __nuxt_page_meta$2A?.redirect,
    component: () => import('./index-DPiJv5MK.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2z?.name ?? "auth-recover",
    path: __nuxt_page_meta$2z?.path ?? "/auth/recover",
    meta: __nuxt_page_meta$2z || {},
    alias: __nuxt_page_meta$2z?.alias || [],
    redirect: __nuxt_page_meta$2z?.redirect,
    component: () => import('./recover-DW4EiOq6.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2y?.name ?? "auth-signup-1",
    path: __nuxt_page_meta$2y?.path ?? "/auth/signup-1",
    meta: __nuxt_page_meta$2y || {},
    alias: __nuxt_page_meta$2y?.alias || [],
    redirect: __nuxt_page_meta$2y?.redirect,
    component: () => import('./signup-1-C3N3lT8T.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2x?.name ?? "dashboards-analytics",
    path: __nuxt_page_meta$2x?.path ?? "/dashboards/analytics",
    meta: __nuxt_page_meta$2x || {},
    alias: __nuxt_page_meta$2x?.alias || [],
    redirect: __nuxt_page_meta$2x?.redirect,
    component: () => import('./analytics-kehVAuyR.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2w?.name ?? "dashboards-balance",
    path: __nuxt_page_meta$2w?.path ?? "/dashboards/balance",
    meta: __nuxt_page_meta$2w || {},
    alias: __nuxt_page_meta$2w?.alias || [],
    redirect: __nuxt_page_meta$2w?.redirect,
    component: () => import('./balance-Z3mVkhSW.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2v?.name ?? "dashboards-banking-1",
    path: __nuxt_page_meta$2v?.path ?? "/dashboards/banking-1",
    meta: __nuxt_page_meta$2v || {},
    alias: __nuxt_page_meta$2v?.alias || [],
    redirect: __nuxt_page_meta$2v?.redirect,
    component: () => import('./banking-1-BaMXKI-Y.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2u?.name ?? "dashboards-banking-2",
    path: __nuxt_page_meta$2u?.path ?? "/dashboards/banking-2",
    meta: __nuxt_page_meta$2u || {},
    alias: __nuxt_page_meta$2u?.alias || [],
    redirect: __nuxt_page_meta$2u?.redirect,
    component: () => import('./banking-2-BLx3AcOL.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2t?.name ?? "dashboards-banking-3",
    path: __nuxt_page_meta$2t?.path ?? "/dashboards/banking-3",
    meta: __nuxt_page_meta$2t || {},
    alias: __nuxt_page_meta$2t?.alias || [],
    redirect: __nuxt_page_meta$2t?.redirect,
    component: () => import('./banking-3-CdJw9RG_.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2s?.name ?? "dashboards-banking-4",
    path: __nuxt_page_meta$2s?.path ?? "/dashboards/banking-4",
    meta: __nuxt_page_meta$2s || {},
    alias: __nuxt_page_meta$2s?.alias || [],
    redirect: __nuxt_page_meta$2s?.redirect,
    component: () => import('./banking-4-BueiNroT.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2r?.name ?? "dashboards-banking-5",
    path: __nuxt_page_meta$2r?.path ?? "/dashboards/banking-5",
    meta: __nuxt_page_meta$2r || {},
    alias: __nuxt_page_meta$2r?.alias || [],
    redirect: __nuxt_page_meta$2r?.redirect,
    component: () => import('./banking-5-DEqXEr5s.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2q?.name ?? "dashboards-calendar",
    path: __nuxt_page_meta$2q?.path ?? "/dashboards/calendar",
    meta: __nuxt_page_meta$2q || {},
    alias: __nuxt_page_meta$2q?.alias || [],
    redirect: __nuxt_page_meta$2q?.redirect,
    component: () => import('./calendar-CZ_t0M2I.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2p?.name ?? "dashboards-charts",
    path: __nuxt_page_meta$2p?.path ?? "/dashboards/charts",
    meta: __nuxt_page_meta$2p || {},
    alias: __nuxt_page_meta$2p?.alias || [],
    redirect: __nuxt_page_meta$2p?.redirect,
    component: () => import('./charts-Cqb-gYPM.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2o?.name ?? "dashboards-company",
    path: __nuxt_page_meta$2o?.path ?? "/dashboards/company",
    meta: __nuxt_page_meta$2o || {},
    alias: __nuxt_page_meta$2o?.alias || [],
    redirect: __nuxt_page_meta$2o?.redirect,
    component: () => import('./company-Co-ITg5y.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2n?.name ?? "dashboards-course",
    path: __nuxt_page_meta$2n?.path ?? "/dashboards/course",
    meta: __nuxt_page_meta$2n || {},
    alias: __nuxt_page_meta$2n?.alias || [],
    redirect: __nuxt_page_meta$2n?.redirect,
    component: () => import('./course-CQ6JauaG.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2m?.name ?? "dashboards-delivery",
    path: __nuxt_page_meta$2m?.path ?? "/dashboards/delivery",
    meta: __nuxt_page_meta$2m || {},
    alias: __nuxt_page_meta$2m?.alias || [],
    redirect: __nuxt_page_meta$2m?.redirect,
    component: () => import('./delivery-8iEOh5NU.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2l?.name ?? "dashboards-ecommerce",
    path: __nuxt_page_meta$2l?.path ?? "/dashboards/ecommerce",
    meta: __nuxt_page_meta$2l || {},
    alias: __nuxt_page_meta$2l?.alias || [],
    redirect: __nuxt_page_meta$2l?.redirect,
    component: () => import('./ecommerce-CuOEHrQH.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2k?.name ?? "dashboards-flights",
    path: __nuxt_page_meta$2k?.path ?? "/dashboards/flights",
    meta: __nuxt_page_meta$2k || {},
    alias: __nuxt_page_meta$2k?.alias || [],
    redirect: __nuxt_page_meta$2k?.redirect,
    component: () => import('./flights-BXpsvKyx.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2j?.name ?? "dashboards-health",
    path: __nuxt_page_meta$2j?.path ?? "/dashboards/health",
    meta: __nuxt_page_meta$2j || {},
    alias: __nuxt_page_meta$2j?.alias || [],
    redirect: __nuxt_page_meta$2j?.redirect,
    component: () => import('./health-DCP_OGmL.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2i?.name ?? "dashboards-hobbies",
    path: __nuxt_page_meta$2i?.path ?? "/dashboards/hobbies",
    meta: __nuxt_page_meta$2i || {},
    alias: __nuxt_page_meta$2i?.alias || [],
    redirect: __nuxt_page_meta$2i?.redirect,
    component: () => import('./hobbies-BX_U1gES.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2h?.name ?? "dashboards-human-resources",
    path: __nuxt_page_meta$2h?.path ?? "/dashboards/human-resources",
    meta: __nuxt_page_meta$2h || {},
    alias: __nuxt_page_meta$2h?.alias || [],
    redirect: __nuxt_page_meta$2h?.redirect,
    component: () => import('./human-resources-Co0Ewgj6.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2g?.name ?? "dashboards-inbox",
    path: __nuxt_page_meta$2g?.path ?? "/dashboards/inbox",
    meta: __nuxt_page_meta$2g || {},
    alias: __nuxt_page_meta$2g?.alias || [],
    redirect: __nuxt_page_meta$2g?.redirect,
    component: () => import('./inbox-B5X9bqUO.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2f?.name ?? "dashboards",
    path: __nuxt_page_meta$2f?.path ?? "/dashboards",
    meta: __nuxt_page_meta$2f || {},
    alias: __nuxt_page_meta$2f?.alias || [],
    redirect: __nuxt_page_meta$2f?.redirect,
    component: () => import('./index-i_e2VOnk.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2e?.name ?? "dashboards-influencer",
    path: __nuxt_page_meta$2e?.path ?? "/dashboards/influencer",
    meta: __nuxt_page_meta$2e || {},
    alias: __nuxt_page_meta$2e?.alias || [],
    redirect: __nuxt_page_meta$2e?.redirect,
    component: () => import('./influencer-CK8cHVVs.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2d?.name ?? "dashboards-jobs",
    path: __nuxt_page_meta$2d?.path ?? "/dashboards/jobs",
    meta: __nuxt_page_meta$2d || {},
    alias: __nuxt_page_meta$2d?.alias || [],
    redirect: __nuxt_page_meta$2d?.redirect,
    component: () => import('./jobs-Mj60jXGL.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2c?.name ?? "dashboards-map-left",
    path: __nuxt_page_meta$2c?.path ?? "/dashboards/map-left",
    meta: __nuxt_page_meta$2c || {},
    alias: __nuxt_page_meta$2c?.alias || [],
    redirect: __nuxt_page_meta$2c?.redirect,
    component: () => import('./map-left-BOMfosJl.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2b?.name ?? "dashboards-map-right",
    path: __nuxt_page_meta$2b?.path ?? "/dashboards/map-right",
    meta: __nuxt_page_meta$2b || {},
    alias: __nuxt_page_meta$2b?.alias || [],
    redirect: __nuxt_page_meta$2b?.redirect,
    component: () => import('./map-right-CsbmBe0z.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$2a?.name ?? "dashboards-messaging-2",
    path: __nuxt_page_meta$2a?.path ?? "/dashboards/messaging-2",
    meta: __nuxt_page_meta$2a || {},
    alias: __nuxt_page_meta$2a?.alias || [],
    redirect: __nuxt_page_meta$2a?.redirect,
    component: () => import('./messaging-2-BQKkrbvL.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$29?.name ?? "dashboards-messaging",
    path: __nuxt_page_meta$29?.path ?? "/dashboards/messaging",
    meta: __nuxt_page_meta$29 || {},
    alias: __nuxt_page_meta$29?.alias || [],
    redirect: __nuxt_page_meta$29?.redirect,
    component: () => import('./messaging-BNdcVNwP.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$28?.name ?? "dashboards-overview",
    path: __nuxt_page_meta$28?.path ?? "/dashboards/overview",
    meta: __nuxt_page_meta$28 || {},
    alias: __nuxt_page_meta$28?.alias || [],
    redirect: __nuxt_page_meta$28?.redirect,
    component: () => import('./overview-CsmgzACS.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$27?.name ?? "dashboards-personal-2",
    path: __nuxt_page_meta$27?.path ?? "/dashboards/personal-2",
    meta: __nuxt_page_meta$27 || {},
    alias: __nuxt_page_meta$27?.alias || [],
    redirect: __nuxt_page_meta$27?.redirect,
    component: () => import('./personal-2-CZ2eCSrP.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$26?.name ?? "dashboards-personal-3",
    path: __nuxt_page_meta$26?.path ?? "/dashboards/personal-3",
    meta: __nuxt_page_meta$26 || {},
    alias: __nuxt_page_meta$26?.alias || [],
    redirect: __nuxt_page_meta$26?.redirect,
    component: () => import('./personal-3-DSQakZ3z.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$25?.name ?? "dashboards-quickview",
    path: __nuxt_page_meta$25?.path ?? "/dashboards/quickview",
    meta: __nuxt_page_meta$25 || {},
    alias: __nuxt_page_meta$25?.alias || [],
    redirect: __nuxt_page_meta$25?.redirect,
    component: () => import('./quickview-Dj4d02Go.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$24?.name ?? "dashboards-sales",
    path: __nuxt_page_meta$24?.path ?? "/dashboards/sales",
    meta: __nuxt_page_meta$24 || {},
    alias: __nuxt_page_meta$24?.alias || [],
    redirect: __nuxt_page_meta$24?.redirect,
    component: () => import('./sales-CNXs3MxK.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$23?.name ?? "dashboards-soccer",
    path: __nuxt_page_meta$23?.path ?? "/dashboards/soccer",
    meta: __nuxt_page_meta$23 || {},
    alias: __nuxt_page_meta$23?.alias || [],
    redirect: __nuxt_page_meta$23?.redirect,
    component: () => import('./soccer-CBNTDwYX.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$22?.name ?? "dashboards-stocks",
    path: __nuxt_page_meta$22?.path ?? "/dashboards/stocks",
    meta: __nuxt_page_meta$22 || {},
    alias: __nuxt_page_meta$22?.alias || [],
    redirect: __nuxt_page_meta$22?.redirect,
    component: () => import('./stocks-B0DDckRS.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$21?.name ?? "dashboards-trading",
    path: __nuxt_page_meta$21?.path ?? "/dashboards/trading",
    meta: __nuxt_page_meta$21 || {},
    alias: __nuxt_page_meta$21?.alias || [],
    redirect: __nuxt_page_meta$21?.redirect,
    component: () => import('./trading-Cpzb3Cb1.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$20?.name ?? "dashboards-video",
    path: __nuxt_page_meta$20?.path ?? "/dashboards/video",
    meta: __nuxt_page_meta$20 || {},
    alias: __nuxt_page_meta$20?.alias || [],
    redirect: __nuxt_page_meta$20?.redirect,
    component: () => import('./video-DKpa8lI1.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1$?.name ?? "dashboards-widgets-creative",
    path: __nuxt_page_meta$1$?.path ?? "/dashboards/widgets/creative",
    meta: __nuxt_page_meta$1$ || {},
    alias: __nuxt_page_meta$1$?.alias || [],
    redirect: __nuxt_page_meta$1$?.redirect,
    component: () => import('./creative-CTWpWB1w.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1_?.name ?? "dashboards-widgets",
    path: __nuxt_page_meta$1_?.path ?? "/dashboards/widgets",
    meta: __nuxt_page_meta$1_ || {},
    alias: __nuxt_page_meta$1_?.alias || [],
    redirect: __nuxt_page_meta$1_?.redirect,
    component: () => import('./index-Bz5wV8bR.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1Z?.name ?? "dashboards-widgets-list",
    path: __nuxt_page_meta$1Z?.path ?? "/dashboards/widgets/list",
    meta: __nuxt_page_meta$1Z || {},
    alias: __nuxt_page_meta$1Z?.alias || [],
    redirect: __nuxt_page_meta$1Z?.redirect,
    component: () => import('./list-D5O-HKTq.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1Y?.name ?? "dashboards-writer",
    path: __nuxt_page_meta$1Y?.path ?? "/dashboards/writer",
    meta: __nuxt_page_meta$1Y || {},
    alias: __nuxt_page_meta$1Y?.alias || [],
    redirect: __nuxt_page_meta$1Y?.redirect,
    component: () => import('./writer-Dnwozu0i.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1X?.name ?? "demos",
    path: __nuxt_page_meta$1X?.path ?? "/demos",
    meta: __nuxt_page_meta$1X || {},
    alias: __nuxt_page_meta$1X?.alias || [],
    redirect: __nuxt_page_meta$1X?.redirect,
    component: () => import('./demos-DYY4Qxk7.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1W?.name ?? "documentation-slug",
    path: __nuxt_page_meta$1W?.path ?? "/documentation/:slug(.*)*",
    meta: __nuxt_page_meta$1W || {},
    alias: __nuxt_page_meta$1W?.alias || [],
    redirect: __nuxt_page_meta$1W?.redirect,
    component: () => import('./index-DLqIvdHA.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$1V?.name ?? "index",
    path: __nuxt_page_meta$1V?.path ?? "/",
    meta: __nuxt_page_meta$1V || {},
    alias: __nuxt_page_meta$1V?.alias || [],
    redirect: __nuxt_page_meta$1V?.redirect,
    component: () => import('./index-BapwURN2.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$b?.name ?? void 0,
    path: __nuxt_page_meta$b?.path ?? "/layouts",
    meta: __nuxt_page_meta$b || {},
    alias: __nuxt_page_meta$b?.alias || [],
    redirect: __nuxt_page_meta$b?.redirect,
    component: () => import('./layouts-BsJyfrEE.mjs').then((m) => m.default || m),
    children: [
      {
        name: void 0,
        path: "accounts",
        meta: {},
        alias: [],
        redirect: __nuxt_page_meta$1R?.redirect,
        component: () => import('./accounts-BqQ4FWjd.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$1U?.name ?? "layouts-accounts",
            path: __nuxt_page_meta$1U?.path ?? "",
            meta: __nuxt_page_meta$1U || {},
            alias: __nuxt_page_meta$1U?.alias || [],
            redirect: __nuxt_page_meta$1U?.redirect,
            component: () => import('./index-3myocTrN.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$1T?.name ?? "layouts-accounts-linked",
            path: __nuxt_page_meta$1T?.path ?? "linked",
            meta: __nuxt_page_meta$1T || {},
            alias: __nuxt_page_meta$1T?.alias || [],
            redirect: __nuxt_page_meta$1T?.redirect,
            component: () => import('./linked-D2WLBaDh.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$1S?.name ?? "layouts-accounts-rules",
            path: __nuxt_page_meta$1S?.path ?? "rules",
            meta: __nuxt_page_meta$1S || {},
            alias: __nuxt_page_meta$1S?.alias || [],
            redirect: __nuxt_page_meta$1S?.redirect,
            component: () => import('./rules-BCJn0zUh.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$1Q?.name ?? "layouts-card-grid-1",
        path: __nuxt_page_meta$1Q?.path ?? "card-grid-1",
        meta: __nuxt_page_meta$1Q || {},
        alias: __nuxt_page_meta$1Q?.alias || [],
        redirect: __nuxt_page_meta$1Q?.redirect,
        component: () => import('./card-grid-1-BuH5GYdj.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1P?.name ?? "layouts-card-grid-2",
        path: __nuxt_page_meta$1P?.path ?? "card-grid-2",
        meta: __nuxt_page_meta$1P || {},
        alias: __nuxt_page_meta$1P?.alias || [],
        redirect: __nuxt_page_meta$1P?.redirect,
        component: () => import('./card-grid-2-BlWOVW8D.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1O?.name ?? "layouts-card-grid-3",
        path: __nuxt_page_meta$1O?.path ?? "card-grid-3",
        meta: __nuxt_page_meta$1O || {},
        alias: __nuxt_page_meta$1O?.alias || [],
        redirect: __nuxt_page_meta$1O?.redirect,
        component: () => import('./card-grid-3-CQyj8JIZ.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1N?.name ?? "layouts-card-grid-4",
        path: __nuxt_page_meta$1N?.path ?? "card-grid-4",
        meta: __nuxt_page_meta$1N || {},
        alias: __nuxt_page_meta$1N?.alias || [],
        redirect: __nuxt_page_meta$1N?.redirect,
        component: () => import('./card-grid-4-DtnVCgcH.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1M?.name ?? "layouts-card-new",
        path: __nuxt_page_meta$1M?.path ?? "card/new",
        meta: __nuxt_page_meta$1M || {},
        alias: __nuxt_page_meta$1M?.alias || [],
        redirect: __nuxt_page_meta$1M?.redirect,
        component: () => import('./new-5szapo5R.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1L?.name ?? "layouts-cards",
        path: __nuxt_page_meta$1L?.path ?? "cards",
        meta: __nuxt_page_meta$1L || {},
        alias: __nuxt_page_meta$1L?.alias || [],
        redirect: __nuxt_page_meta$1L?.redirect,
        component: () => import('./cards-C6UXOvNJ.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1K?.name ?? "layouts-company-edit",
        path: __nuxt_page_meta$1K?.path ?? "company-edit",
        meta: __nuxt_page_meta$1K || {},
        alias: __nuxt_page_meta$1K?.alias || [],
        redirect: __nuxt_page_meta$1K?.redirect,
        component: () => import('./company-edit-DjrMVWp3.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1J?.name ?? "layouts-company",
        path: __nuxt_page_meta$1J?.path ?? "company",
        meta: __nuxt_page_meta$1J || {},
        alias: __nuxt_page_meta$1J?.alias || [],
        redirect: __nuxt_page_meta$1J?.redirect,
        component: () => import('./company-Dccs28Xa.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1I?.name ?? "layouts-contacts-create",
        path: __nuxt_page_meta$1I?.path ?? "contacts/create",
        meta: __nuxt_page_meta$1I || {},
        alias: __nuxt_page_meta$1I?.alias || [],
        redirect: __nuxt_page_meta$1I?.redirect,
        component: () => import('./create-C5uM5g4L.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1H?.name ?? "layouts-credit",
        path: __nuxt_page_meta$1H?.path ?? "credit",
        meta: __nuxt_page_meta$1H || {},
        alias: __nuxt_page_meta$1H?.alias || [],
        redirect: __nuxt_page_meta$1H?.redirect,
        component: () => import('./credit-vcIJn_24.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1G?.name ?? "layouts-documents",
        path: __nuxt_page_meta$1G?.path ?? "documents",
        meta: __nuxt_page_meta$1G || {},
        alias: __nuxt_page_meta$1G?.alias || [],
        redirect: __nuxt_page_meta$1G?.redirect,
        component: () => import('./documents-B5TkyN4t.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1F?.name ?? "layouts-downloads",
        path: __nuxt_page_meta$1F?.path ?? "downloads",
        meta: __nuxt_page_meta$1F || {},
        alias: __nuxt_page_meta$1F?.alias || [],
        redirect: __nuxt_page_meta$1F?.redirect,
        component: () => import('./downloads-33vdaQUR.mjs').then((m) => m.default || m)
      },
      {
        name: "layouts-ertegha-2",
        path: "ertegha-2",
        meta: {},
        alias: [],
        redirect: __nuxt_page_meta$1E?.redirect,
        component: () => import('./ertegha-2-WirofC7z.mjs').then((m) => m.default || m)
      },
      {
        name: "layouts-ertegha",
        path: "ertegha",
        meta: {},
        alias: [],
        redirect: __nuxt_page_meta$1D?.redirect,
        component: () => import('./ertegha-C0AZz_oX.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1C?.name ?? "layouts-flex-list-1",
        path: __nuxt_page_meta$1C?.path ?? "flex-list-1",
        meta: __nuxt_page_meta$1C || {},
        alias: __nuxt_page_meta$1C?.alias || [],
        redirect: __nuxt_page_meta$1C?.redirect,
        component: () => import('./flex-list-1-9n8HNXGr.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1B?.name ?? "layouts-flex-list-2",
        path: __nuxt_page_meta$1B?.path ?? "flex-list-2",
        meta: __nuxt_page_meta$1B || {},
        alias: __nuxt_page_meta$1B?.alias || [],
        redirect: __nuxt_page_meta$1B?.redirect,
        component: () => import('./flex-list-2-EROKQj5B.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1A?.name ?? "layouts-flex-list-3",
        path: __nuxt_page_meta$1A?.path ?? "flex-list-3",
        meta: __nuxt_page_meta$1A || {},
        alias: __nuxt_page_meta$1A?.alias || [],
        redirect: __nuxt_page_meta$1A?.redirect,
        component: () => import('./flex-list-3-CJwlSeQb.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1z?.name ?? "layouts-form-1",
        path: __nuxt_page_meta$1z?.path ?? "form-1",
        meta: __nuxt_page_meta$1z || {},
        alias: __nuxt_page_meta$1z?.alias || [],
        redirect: __nuxt_page_meta$1z?.redirect,
        component: () => import('./form-1-C5Krdw4j.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1y?.name ?? "layouts-form-2",
        path: __nuxt_page_meta$1y?.path ?? "form-2",
        meta: __nuxt_page_meta$1y || {},
        alias: __nuxt_page_meta$1y?.alias || [],
        redirect: __nuxt_page_meta$1y?.redirect,
        component: () => import('./form-2-DR0U_5gv.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1x?.name ?? "layouts-form-3",
        path: __nuxt_page_meta$1x?.path ?? "form-3",
        meta: __nuxt_page_meta$1x || {},
        alias: __nuxt_page_meta$1x?.alias || [],
        redirect: __nuxt_page_meta$1x?.redirect,
        component: () => import('./form-3-D0RtC0qZ.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1w?.name ?? "layouts-form-4",
        path: __nuxt_page_meta$1w?.path ?? "form-4",
        meta: __nuxt_page_meta$1w || {},
        alias: __nuxt_page_meta$1w?.alias || [],
        redirect: __nuxt_page_meta$1w?.redirect,
        component: () => import('./form-4-BB1DgLoa.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1v?.name ?? "layouts-form-5",
        path: __nuxt_page_meta$1v?.path ?? "form-5",
        meta: __nuxt_page_meta$1v || {},
        alias: __nuxt_page_meta$1v?.alias || [],
        redirect: __nuxt_page_meta$1v?.redirect,
        component: () => import('./form-5-s7H9nY-u.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1u?.name ?? "layouts-form-6",
        path: __nuxt_page_meta$1u?.path ?? "form-6",
        meta: __nuxt_page_meta$1u || {},
        alias: __nuxt_page_meta$1u?.alias || [],
        redirect: __nuxt_page_meta$1u?.redirect,
        component: () => import('./form-6-BZAqqmEN.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1t?.name ?? "layouts",
        path: __nuxt_page_meta$1t?.path ?? "",
        meta: __nuxt_page_meta$1t || {},
        alias: __nuxt_page_meta$1t?.alias || [],
        redirect: __nuxt_page_meta$1t?.redirect,
        component: () => import('./index-Bu9DtOvF.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1s?.name ?? "layouts-integrations",
        path: __nuxt_page_meta$1s?.path ?? "integrations",
        meta: __nuxt_page_meta$1s || {},
        alias: __nuxt_page_meta$1s?.alias || [],
        redirect: __nuxt_page_meta$1s?.redirect,
        component: () => import('./integrations-BLeFG6vR.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1r?.name ?? "layouts-invest",
        path: __nuxt_page_meta$1r?.path ?? "invest",
        meta: __nuxt_page_meta$1r || {},
        alias: __nuxt_page_meta$1r?.alias || [],
        redirect: __nuxt_page_meta$1r?.redirect,
        component: () => import('./invest-BWC01i75.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1n?.name ?? void 0,
        path: __nuxt_page_meta$1n?.path ?? "invite",
        meta: __nuxt_page_meta$1n || {},
        alias: __nuxt_page_meta$1n?.alias || [],
        redirect: __nuxt_page_meta$1n?.redirect,
        component: () => import('./invite-BcPKU9dI.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$1q?.name ?? "layouts-invite",
            path: __nuxt_page_meta$1q?.path ?? "",
            meta: __nuxt_page_meta$1q || {},
            alias: __nuxt_page_meta$1q?.alias || [],
            redirect: __nuxt_page_meta$1q?.redirect,
            component: () => import('./index-CiKAdPoj.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$1p?.name ?? "layouts-invite-permissions",
            path: __nuxt_page_meta$1p?.path ?? "permissions",
            meta: __nuxt_page_meta$1p || {},
            alias: __nuxt_page_meta$1p?.alias || [],
            redirect: __nuxt_page_meta$1p?.redirect,
            component: () => import('./permissions-DHB8-cvs.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$1o?.name ?? "layouts-invite-review",
            path: __nuxt_page_meta$1o?.path ?? "review",
            meta: __nuxt_page_meta$1o || {},
            alias: __nuxt_page_meta$1o?.alias || [],
            redirect: __nuxt_page_meta$1o?.redirect,
            component: () => import('./review-CEns6j9o.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$1m?.name ?? "layouts-list-view-2",
        path: __nuxt_page_meta$1m?.path ?? "list-view-2",
        meta: __nuxt_page_meta$1m || {},
        alias: __nuxt_page_meta$1m?.alias || [],
        redirect: __nuxt_page_meta$1m?.redirect,
        component: () => import('./list-view-2-Bl-HkVFa.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1l?.name ?? "layouts-list-view-3",
        path: __nuxt_page_meta$1l?.path ?? "list-view-3",
        meta: __nuxt_page_meta$1l || {},
        alias: __nuxt_page_meta$1l?.alias || [],
        redirect: __nuxt_page_meta$1l?.redirect,
        component: () => import('./list-view-3-C4yRXhRs.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1k?.name ?? "layouts-list-view-4",
        path: __nuxt_page_meta$1k?.path ?? "list-view-4",
        meta: __nuxt_page_meta$1k || {},
        alias: __nuxt_page_meta$1k?.alias || [],
        redirect: __nuxt_page_meta$1k?.redirect,
        component: () => import('./list-view-4-DqZ7y2V5.mjs').then((m) => m.default || m)
      },
      {
        name: "layouts-members",
        path: "members",
        meta: {},
        alias: [],
        redirect: __nuxt_page_meta$1i?.redirect,
        component: () => import('./members-DLXQzwoF.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$1j?.name ?? "layouts-members-slug",
            path: __nuxt_page_meta$1j?.path ?? ":slug()",
            meta: __nuxt_page_meta$1j || {},
            alias: __nuxt_page_meta$1j?.alias || [],
            redirect: __nuxt_page_meta$1j?.redirect,
            component: () => import('./_slug_-B9ovKf9e.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$1h?.name ?? "layouts-offers",
        path: __nuxt_page_meta$1h?.path ?? "offers",
        meta: __nuxt_page_meta$1h || {},
        alias: __nuxt_page_meta$1h?.alias || [],
        redirect: __nuxt_page_meta$1h?.redirect,
        component: () => import('./offers-C9TGypUr.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1g?.name ?? "layouts-onboarding-1",
        path: __nuxt_page_meta$1g?.path ?? "onboarding-1",
        meta: __nuxt_page_meta$1g || {},
        alias: __nuxt_page_meta$1g?.alias || [],
        redirect: __nuxt_page_meta$1g?.redirect,
        component: () => import('./onboarding-1-B16JVdbG.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1f?.name ?? "layouts-onboarding-2",
        path: __nuxt_page_meta$1f?.path ?? "onboarding-2",
        meta: __nuxt_page_meta$1f || {},
        alias: __nuxt_page_meta$1f?.alias || [],
        redirect: __nuxt_page_meta$1f?.redirect,
        component: () => import('./onboarding-2-BAYnM1EG.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1e?.name ?? "layouts-onboarding-3",
        path: __nuxt_page_meta$1e?.path ?? "onboarding-3",
        meta: __nuxt_page_meta$1e || {},
        alias: __nuxt_page_meta$1e?.alias || [],
        redirect: __nuxt_page_meta$1e?.redirect,
        component: () => import('./onboarding-3-PKawg1Ce.mjs').then((m) => m.default || m)
      },
      {
        name: void 0,
        path: "payments",
        meta: {},
        alias: [],
        redirect: __nuxt_page_meta$1a?.redirect,
        component: () => import('./payments-CqU2KwZs.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$1d?.name ?? "layouts-payments-incoming",
            path: __nuxt_page_meta$1d?.path ?? "incoming",
            meta: __nuxt_page_meta$1d || {},
            alias: __nuxt_page_meta$1d?.alias || [],
            redirect: __nuxt_page_meta$1d?.redirect,
            component: () => import('./incoming-Dcvh5fW-.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$1c?.name ?? "layouts-payments",
            path: __nuxt_page_meta$1c?.path ?? "",
            meta: __nuxt_page_meta$1c || {},
            alias: __nuxt_page_meta$1c?.alias || [],
            redirect: __nuxt_page_meta$1c?.redirect,
            component: () => import('./index-DnFCXWAo.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$1b?.name ?? "layouts-payments-recipients",
            path: __nuxt_page_meta$1b?.path ?? "recipients",
            meta: __nuxt_page_meta$1b || {},
            alias: __nuxt_page_meta$1b?.alias || [],
            redirect: __nuxt_page_meta$1b?.redirect,
            component: () => import('./recipients-D8Gp21tf.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$19?.name ?? "layouts-placeload-1",
        path: __nuxt_page_meta$19?.path ?? "placeload-1",
        meta: __nuxt_page_meta$19 || {},
        alias: __nuxt_page_meta$19?.alias || [],
        redirect: __nuxt_page_meta$19?.redirect,
        component: () => import('./placeload-1-C6wRTgBv.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$18?.name ?? "layouts-placeload-2",
        path: __nuxt_page_meta$18?.path ?? "placeload-2",
        meta: __nuxt_page_meta$18 || {},
        alias: __nuxt_page_meta$18?.alias || [],
        redirect: __nuxt_page_meta$18?.redirect,
        component: () => import('./placeload-2-DQhqAq72.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$17?.name ?? "layouts-placeload-3",
        path: __nuxt_page_meta$17?.path ?? "placeload-3",
        meta: __nuxt_page_meta$17 || {},
        alias: __nuxt_page_meta$17?.alias || [],
        redirect: __nuxt_page_meta$17?.redirect,
        component: () => import('./placeload-3-BuT33Ei_.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$16?.name ?? "layouts-placeload-4",
        path: __nuxt_page_meta$16?.path ?? "placeload-4",
        meta: __nuxt_page_meta$16 || {},
        alias: __nuxt_page_meta$16?.alias || [],
        redirect: __nuxt_page_meta$16?.redirect,
        component: () => import('./placeload-4-BHz1qXBI.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$11?.name ?? void 0,
        path: __nuxt_page_meta$11?.path ?? "profile-edit",
        meta: __nuxt_page_meta$11 || {},
        alias: __nuxt_page_meta$11?.alias || [],
        redirect: __nuxt_page_meta$11?.redirect,
        component: () => import('./profile-edit-BzpgS8lP.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$15?.name ?? "layouts-profile-edit-experience",
            path: __nuxt_page_meta$15?.path ?? "experience",
            meta: __nuxt_page_meta$15 || {},
            alias: __nuxt_page_meta$15?.alias || [],
            redirect: __nuxt_page_meta$15?.redirect,
            component: () => import('./experience-Cm1aRfDB.mjs').then((m) => m.default || m)
          },
          {
            name: "layouts-profile-edit",
            path: "",
            meta: {},
            alias: [],
            redirect: __nuxt_page_meta$14?.redirect,
            component: () => import('./index-eVSL_hp_.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$13?.name ?? "layouts-profile-edit-settings",
            path: __nuxt_page_meta$13?.path ?? "settings",
            meta: __nuxt_page_meta$13 || {},
            alias: __nuxt_page_meta$13?.alias || [],
            redirect: __nuxt_page_meta$13?.redirect,
            component: () => import('./settings-DXhFdvV5.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$12?.name ?? "layouts-profile-edit-skills",
            path: __nuxt_page_meta$12?.path ?? "skills",
            meta: __nuxt_page_meta$12 || {},
            alias: __nuxt_page_meta$12?.alias || [],
            redirect: __nuxt_page_meta$12?.redirect,
            component: () => import('./skills-DoiRIf6h.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$10?.name ?? "layouts-profile-notifications",
        path: __nuxt_page_meta$10?.path ?? "profile-notifications",
        meta: __nuxt_page_meta$10 || {},
        alias: __nuxt_page_meta$10?.alias || [],
        redirect: __nuxt_page_meta$10?.redirect,
        component: () => import('./profile-notifications-BN619Rti.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$$?.name ?? "layouts-profile-settings",
        path: __nuxt_page_meta$$?.path ?? "profile-settings",
        meta: __nuxt_page_meta$$ || {},
        alias: __nuxt_page_meta$$?.alias || [],
        redirect: __nuxt_page_meta$$?.redirect,
        component: () => import('./profile-settings-sMp1QSaL.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$_?.name ?? "layouts-profile",
        path: __nuxt_page_meta$_?.path ?? "profile",
        meta: __nuxt_page_meta$_ || {},
        alias: __nuxt_page_meta$_?.alias || [],
        redirect: __nuxt_page_meta$_?.redirect,
        component: () => import('./profile-DH-24cSS.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$Z?.name ?? "layouts-projects-board-slug",
        path: __nuxt_page_meta$Z?.path ?? "projects/board/:slug()",
        meta: __nuxt_page_meta$Z || {},
        alias: __nuxt_page_meta$Z?.alias || [],
        redirect: __nuxt_page_meta$Z?.redirect,
        component: () => import('./_slug_-eWd9FtVv.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$Y?.name ?? "layouts-projects-board",
        path: __nuxt_page_meta$Y?.path ?? "projects/board",
        meta: __nuxt_page_meta$Y || {},
        alias: __nuxt_page_meta$Y?.alias || [],
        redirect: __nuxt_page_meta$Y?.redirect,
        component: () => import('./index-BlnCtcUv.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$X?.name ?? "layouts-projects-details-slug",
        path: __nuxt_page_meta$X?.path ?? "projects/details/:slug()",
        meta: __nuxt_page_meta$X || {},
        alias: __nuxt_page_meta$X?.alias || [],
        redirect: __nuxt_page_meta$X?.redirect,
        component: () => import('./_slug_-B1QgI_TA.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$W?.name ?? "layouts-projects-details",
        path: __nuxt_page_meta$W?.path ?? "projects/details",
        meta: __nuxt_page_meta$W || {},
        alias: __nuxt_page_meta$W?.alias || [],
        redirect: __nuxt_page_meta$W?.redirect,
        component: () => import('./index-CGJCk4_C.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$V?.name ?? "layouts-projects",
        path: __nuxt_page_meta$V?.path ?? "projects",
        meta: __nuxt_page_meta$V || {},
        alias: __nuxt_page_meta$V?.alias || [],
        redirect: __nuxt_page_meta$V?.redirect,
        component: () => import('./index-Clzy7Uxs.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$U?.name ?? "layouts-projects-project-list-2",
        path: __nuxt_page_meta$U?.path ?? "projects/project-list-2",
        meta: __nuxt_page_meta$U || {},
        alias: __nuxt_page_meta$U?.alias || [],
        redirect: __nuxt_page_meta$U?.redirect,
        component: () => import('./project-list-2-SDO3s1gD.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$T?.name ?? "layouts-projects-project-list-3",
        path: __nuxt_page_meta$T?.path ?? "projects/project-list-3",
        meta: __nuxt_page_meta$T || {},
        alias: __nuxt_page_meta$T?.alias || [],
        redirect: __nuxt_page_meta$T?.redirect,
        component: () => import('./project-list-3-C9zTpuZT.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$P?.name ?? void 0,
        path: __nuxt_page_meta$P?.path ?? "receive",
        meta: __nuxt_page_meta$P || {},
        alias: __nuxt_page_meta$P?.alias || [],
        redirect: __nuxt_page_meta$P?.redirect,
        component: () => import('./receive-Cqmp-rzs.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$S?.name ?? "layouts-receive",
            path: __nuxt_page_meta$S?.path ?? "",
            meta: __nuxt_page_meta$S || {},
            alias: __nuxt_page_meta$S?.alias || [],
            redirect: __nuxt_page_meta$S?.redirect,
            component: () => import('./index-CHYrHE6C.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$R?.name ?? "layouts-receive-review",
            path: __nuxt_page_meta$R?.path ?? "review",
            meta: __nuxt_page_meta$R || {},
            alias: __nuxt_page_meta$R?.alias || [],
            redirect: __nuxt_page_meta$R?.redirect,
            component: () => import('./review-C37L8MXd.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$Q?.name ?? "layouts-receive-transfer",
            path: __nuxt_page_meta$Q?.path ?? "transfer",
            meta: __nuxt_page_meta$Q || {},
            alias: __nuxt_page_meta$Q?.alias || [],
            redirect: __nuxt_page_meta$Q?.redirect,
            component: () => import('./transfer-BIglBlL6.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$O?.name ?? "layouts-recipient-slug",
        path: __nuxt_page_meta$O?.path ?? "recipient/:slug()",
        meta: __nuxt_page_meta$O || {},
        alias: __nuxt_page_meta$O?.alias || [],
        redirect: __nuxt_page_meta$O?.redirect,
        component: () => import('./_slug_-BYN8PJ_Q.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$N?.name ?? "layouts-search-empty",
        path: __nuxt_page_meta$N?.path ?? "search-empty",
        meta: __nuxt_page_meta$N || {},
        alias: __nuxt_page_meta$N?.alias || [],
        redirect: __nuxt_page_meta$N?.redirect,
        component: () => import('./search-empty-CYR4WKPa.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$M?.name ?? "layouts-search-results",
        path: __nuxt_page_meta$M?.path ?? "search-results",
        meta: __nuxt_page_meta$M || {},
        alias: __nuxt_page_meta$M?.alias || [],
        redirect: __nuxt_page_meta$M?.redirect,
        component: () => import('./search-results-DIpG_Xkj.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$F?.name ?? void 0,
        path: __nuxt_page_meta$F?.path ?? "send",
        meta: __nuxt_page_meta$F || {},
        alias: __nuxt_page_meta$F?.alias || [],
        redirect: __nuxt_page_meta$F?.redirect,
        component: () => import('./send-CevgJ4xJ.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$L?.name ?? "layouts-send-address",
            path: __nuxt_page_meta$L?.path ?? "address",
            meta: __nuxt_page_meta$L || {},
            alias: __nuxt_page_meta$L?.alias || [],
            redirect: __nuxt_page_meta$L?.redirect,
            component: () => import('./address-BuPry1bp.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$K?.name ?? "layouts-send-amount",
            path: __nuxt_page_meta$K?.path ?? "amount",
            meta: __nuxt_page_meta$K || {},
            alias: __nuxt_page_meta$K?.alias || [],
            redirect: __nuxt_page_meta$K?.redirect,
            component: () => import('./amount-Qle5TUKc.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$J?.name ?? "layouts-send",
            path: __nuxt_page_meta$J?.path ?? "",
            meta: __nuxt_page_meta$J || {},
            alias: __nuxt_page_meta$J?.alias || [],
            redirect: __nuxt_page_meta$J?.redirect,
            component: () => import('./index-lpTdygdR.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$I?.name ?? "layouts-send-method",
            path: __nuxt_page_meta$I?.path ?? "method",
            meta: __nuxt_page_meta$I || {},
            alias: __nuxt_page_meta$I?.alias || [],
            redirect: __nuxt_page_meta$I?.redirect,
            component: () => import('./method-_X3pn_AE.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$H?.name ?? "layouts-send-recipient",
            path: __nuxt_page_meta$H?.path ?? "recipient",
            meta: __nuxt_page_meta$H || {},
            alias: __nuxt_page_meta$H?.alias || [],
            redirect: __nuxt_page_meta$H?.redirect,
            component: () => import('./recipient-BlMRKsRe.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$G?.name ?? "layouts-send-review",
            path: __nuxt_page_meta$G?.path ?? "review",
            meta: __nuxt_page_meta$G || {},
            alias: __nuxt_page_meta$G?.alias || [],
            redirect: __nuxt_page_meta$G?.redirect,
            component: () => import('./review-2pyzoaGL.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$A?.name ?? void 0,
        path: __nuxt_page_meta$A?.path ?? "settings",
        meta: __nuxt_page_meta$A || {},
        alias: __nuxt_page_meta$A?.alias || [],
        redirect: __nuxt_page_meta$A?.redirect,
        component: () => import('./settings-CLs4P9fZ.mjs').then((m) => m.default || m),
        children: [
          {
            name: __nuxt_page_meta$E?.name ?? "layouts-settings",
            path: __nuxt_page_meta$E?.path ?? "",
            meta: __nuxt_page_meta$E || {},
            alias: __nuxt_page_meta$E?.alias || [],
            redirect: __nuxt_page_meta$E?.redirect,
            component: () => import('./index-BObaJ0NG.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$D?.name ?? "layouts-settings-notifications",
            path: __nuxt_page_meta$D?.path ?? "notifications",
            meta: __nuxt_page_meta$D || {},
            alias: __nuxt_page_meta$D?.alias || [],
            redirect: __nuxt_page_meta$D?.redirect,
            component: () => import('./notifications-Cox268cm.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$C?.name ?? "layouts-settings-security",
            path: __nuxt_page_meta$C?.path ?? "security",
            meta: __nuxt_page_meta$C || {},
            alias: __nuxt_page_meta$C?.alias || [],
            redirect: __nuxt_page_meta$C?.redirect,
            component: () => import('./security-D9PwHAuy.mjs').then((m) => m.default || m)
          },
          {
            name: __nuxt_page_meta$B?.name ?? "layouts-settings-tokens",
            path: __nuxt_page_meta$B?.path ?? "tokens",
            meta: __nuxt_page_meta$B || {},
            alias: __nuxt_page_meta$B?.alias || [],
            redirect: __nuxt_page_meta$B?.redirect,
            component: () => import('./tokens-f1rvsg5m.mjs').then((m) => m.default || m)
          }
        ]
      },
      {
        name: __nuxt_page_meta$z?.name ?? "layouts-table-list-1",
        path: __nuxt_page_meta$z?.path ?? "table-list-1",
        meta: __nuxt_page_meta$z || {},
        alias: __nuxt_page_meta$z?.alias || [],
        redirect: __nuxt_page_meta$z?.redirect,
        component: () => import('./table-list-1-BPOpv7aV.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$y?.name ?? "layouts-table-list-2",
        path: __nuxt_page_meta$y?.path ?? "table-list-2",
        meta: __nuxt_page_meta$y || {},
        alias: __nuxt_page_meta$y?.alias || [],
        redirect: __nuxt_page_meta$y?.redirect,
        component: () => import('./table-list-2-CRZoz0bk.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$x?.name ?? "layouts-table-list-3",
        path: __nuxt_page_meta$x?.path ?? "table-list-3",
        meta: __nuxt_page_meta$x || {},
        alias: __nuxt_page_meta$x?.alias || [],
        redirect: __nuxt_page_meta$x?.redirect,
        component: () => import('./table-list-3-bAY8gCP6.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$w?.name ?? "layouts-tile-grid-1",
        path: __nuxt_page_meta$w?.path ?? "tile-grid-1",
        meta: __nuxt_page_meta$w || {},
        alias: __nuxt_page_meta$w?.alias || [],
        redirect: __nuxt_page_meta$w?.redirect,
        component: () => import('./tile-grid-1-d_mMFu4o.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$v?.name ?? "layouts-tile-grid-2",
        path: __nuxt_page_meta$v?.path ?? "tile-grid-2",
        meta: __nuxt_page_meta$v || {},
        alias: __nuxt_page_meta$v?.alias || [],
        redirect: __nuxt_page_meta$v?.redirect,
        component: () => import('./tile-grid-2-DyPJ7pnC.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$u?.name ?? "layouts-tile-grid-3",
        path: __nuxt_page_meta$u?.path ?? "tile-grid-3",
        meta: __nuxt_page_meta$u || {},
        alias: __nuxt_page_meta$u?.alias || [],
        redirect: __nuxt_page_meta$u?.redirect,
        component: () => import('./tile-grid-3-B-HMvTFU.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$t?.name ?? "layouts-transactions",
        path: __nuxt_page_meta$t?.path ?? "transactions",
        meta: __nuxt_page_meta$t || {},
        alias: __nuxt_page_meta$t?.alias || [],
        redirect: __nuxt_page_meta$t?.redirect,
        component: () => import('./transactions-BZbdtckz.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$s?.name ?? "layouts-user-edit",
        path: __nuxt_page_meta$s?.path ?? "user-edit",
        meta: __nuxt_page_meta$s || {},
        alias: __nuxt_page_meta$s?.alias || [],
        redirect: __nuxt_page_meta$s?.redirect,
        component: () => import('./user-edit-D24nMEzh.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$r?.name ?? "layouts-user-grid-1",
        path: __nuxt_page_meta$r?.path ?? "user-grid-1",
        meta: __nuxt_page_meta$r || {},
        alias: __nuxt_page_meta$r?.alias || [],
        redirect: __nuxt_page_meta$r?.redirect,
        component: () => import('./user-grid-1-Cp_XcbxE.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$q?.name ?? "layouts-user-grid-2",
        path: __nuxt_page_meta$q?.path ?? "user-grid-2",
        meta: __nuxt_page_meta$q || {},
        alias: __nuxt_page_meta$q?.alias || [],
        redirect: __nuxt_page_meta$q?.redirect,
        component: () => import('./user-grid-2-CtEexhod.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$p?.name ?? "layouts-user-grid-3",
        path: __nuxt_page_meta$p?.path ?? "user-grid-3",
        meta: __nuxt_page_meta$p || {},
        alias: __nuxt_page_meta$p?.alias || [],
        redirect: __nuxt_page_meta$p?.redirect,
        component: () => import('./user-grid-3-SjDrIkO4.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$o?.name ?? "layouts-user-grid-4",
        path: __nuxt_page_meta$o?.path ?? "user-grid-4",
        meta: __nuxt_page_meta$o || {},
        alias: __nuxt_page_meta$o?.alias || [],
        redirect: __nuxt_page_meta$o?.redirect,
        component: () => import('./user-grid-4-Dtn07N4E.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$n?.name ?? "layouts-user",
        path: __nuxt_page_meta$n?.path ?? "user",
        meta: __nuxt_page_meta$n || {},
        alias: __nuxt_page_meta$n?.alias || [],
        redirect: __nuxt_page_meta$n?.redirect,
        component: () => import('./user-162pQT5n.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$m?.name ?? "layouts-utility-action-1",
        path: __nuxt_page_meta$m?.path ?? "utility-action-1",
        meta: __nuxt_page_meta$m || {},
        alias: __nuxt_page_meta$m?.alias || [],
        redirect: __nuxt_page_meta$m?.redirect,
        component: () => import('./utility-action-1-DOVlWWsM.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$l?.name ?? "layouts-utility-action-2",
        path: __nuxt_page_meta$l?.path ?? "utility-action-2",
        meta: __nuxt_page_meta$l || {},
        alias: __nuxt_page_meta$l?.alias || [],
        redirect: __nuxt_page_meta$l?.redirect,
        component: () => import('./utility-action-2-CGds81o3.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$k?.name ?? "layouts-utility-billing",
        path: __nuxt_page_meta$k?.path ?? "utility-billing",
        meta: __nuxt_page_meta$k || {},
        alias: __nuxt_page_meta$k?.alias || [],
        redirect: __nuxt_page_meta$k?.redirect,
        component: () => import('./utility-billing-BgJ4M7Yd.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$j?.name ?? "layouts-utility-confirm",
        path: __nuxt_page_meta$j?.path ?? "utility-confirm",
        meta: __nuxt_page_meta$j || {},
        alias: __nuxt_page_meta$j?.alias || [],
        redirect: __nuxt_page_meta$j?.redirect,
        component: () => import('./utility-confirm-Ds30YkJB.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$i?.name ?? "layouts-utility-error",
        path: __nuxt_page_meta$i?.path ?? "utility-error",
        meta: __nuxt_page_meta$i || {},
        alias: __nuxt_page_meta$i?.alias || [],
        redirect: __nuxt_page_meta$i?.redirect,
        component: () => import('./utility-error-D1ySaFBs.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$h?.name ?? "layouts-utility-invoice-2",
        path: __nuxt_page_meta$h?.path ?? "utility-invoice-2",
        meta: __nuxt_page_meta$h || {},
        alias: __nuxt_page_meta$h?.alias || [],
        redirect: __nuxt_page_meta$h?.redirect,
        component: () => import('./utility-invoice-2-D5PkgGJ0.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$g?.name ?? "layouts-utility-invoice",
        path: __nuxt_page_meta$g?.path ?? "utility-invoice",
        meta: __nuxt_page_meta$g || {},
        alias: __nuxt_page_meta$g?.alias || [],
        redirect: __nuxt_page_meta$g?.redirect,
        component: () => import('./utility-invoice-DHscDVrw.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$f?.name ?? "layouts-utility-promotion",
        path: __nuxt_page_meta$f?.path ?? "utility-promotion",
        meta: __nuxt_page_meta$f || {},
        alias: __nuxt_page_meta$f?.alias || [],
        redirect: __nuxt_page_meta$f?.redirect,
        component: () => import('./utility-promotion-BuAcSO1H.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$e?.name ?? "layouts-utility-status",
        path: __nuxt_page_meta$e?.path ?? "utility-status",
        meta: __nuxt_page_meta$e || {},
        alias: __nuxt_page_meta$e?.alias || [],
        redirect: __nuxt_page_meta$e?.redirect,
        component: () => import('./utility-status-CZX2zZm3.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$d?.name ?? "layouts-vault",
        path: __nuxt_page_meta$d?.path ?? "vault",
        meta: __nuxt_page_meta$d || {},
        alias: __nuxt_page_meta$d?.alias || [],
        redirect: __nuxt_page_meta$d?.redirect,
        component: () => import('./vault-C7tQerAt.mjs').then((m) => m.default || m)
      },
      {
        name: "layouts-vaziat-pardakht",
        path: "vaziat-pardakht",
        meta: {},
        alias: [],
        redirect: __nuxt_page_meta$c?.redirect,
        component: () => import('./vaziat-pardakht-rKAtTIbi.mjs').then((m) => m.default || m)
      }
    ]
  },
  {
    name: __nuxt_page_meta$a?.name ?? "starter-collapse",
    path: __nuxt_page_meta$a?.path ?? "/starter-collapse",
    meta: __nuxt_page_meta$a || {},
    alias: __nuxt_page_meta$a?.alias || [],
    redirect: __nuxt_page_meta$a?.redirect,
    component: () => import('./starter-collapse-lvRfwS9Z.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta$9?.name ?? "starter-sidebar",
    path: __nuxt_page_meta$9?.path ?? "/starter-sidebar",
    meta: __nuxt_page_meta$9 || {},
    alias: __nuxt_page_meta$9?.alias || [],
    redirect: __nuxt_page_meta$9?.redirect,
    component: () => import('./starter-sidebar-BUxk2Gm7.mjs').then((m) => m.default || m)
  },
  {
    name: "test-error",
    path: "/test-error",
    meta: {},
    alias: [],
    redirect: __nuxt_page_meta$8?.redirect,
    component: () => import('./test-error-DOpEs6V-.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta?.name ?? void 0,
    path: __nuxt_page_meta?.path ?? "/wizard",
    meta: __nuxt_page_meta || {},
    alias: __nuxt_page_meta?.alias || [],
    redirect: __nuxt_page_meta?.redirect,
    component: () => import('./wizard-CDmerDqe.mjs').then((m) => m.default || m),
    children: [
      {
        name: __nuxt_page_meta$7?.name ?? "wizard",
        path: __nuxt_page_meta$7?.path ?? "",
        meta: __nuxt_page_meta$7 || {},
        alias: __nuxt_page_meta$7?.alias || [],
        redirect: __nuxt_page_meta$7?.redirect,
        component: () => import('./index-DknZ-slx.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$6?.name ?? "wizard-step-2",
        path: __nuxt_page_meta$6?.path ?? "step-2",
        meta: __nuxt_page_meta$6 || {},
        alias: __nuxt_page_meta$6?.alias || [],
        redirect: __nuxt_page_meta$6?.redirect,
        component: () => import('./step-2-FzGIha07.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$5?.name ?? "wizard-step-3",
        path: __nuxt_page_meta$5?.path ?? "step-3",
        meta: __nuxt_page_meta$5 || {},
        alias: __nuxt_page_meta$5?.alias || [],
        redirect: __nuxt_page_meta$5?.redirect,
        component: () => import('./step-3-AppSRD1Y.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$4?.name ?? "wizard-step-4",
        path: __nuxt_page_meta$4?.path ?? "step-4",
        meta: __nuxt_page_meta$4 || {},
        alias: __nuxt_page_meta$4?.alias || [],
        redirect: __nuxt_page_meta$4?.redirect,
        component: () => import('./step-4-CcO9g9ou.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$3?.name ?? "wizard-step-5",
        path: __nuxt_page_meta$3?.path ?? "step-5",
        meta: __nuxt_page_meta$3 || {},
        alias: __nuxt_page_meta$3?.alias || [],
        redirect: __nuxt_page_meta$3?.redirect,
        component: () => import('./step-5-JFuY17ur.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$2?.name ?? "wizard-step-6",
        path: __nuxt_page_meta$2?.path ?? "step-6",
        meta: __nuxt_page_meta$2 || {},
        alias: __nuxt_page_meta$2?.alias || [],
        redirect: __nuxt_page_meta$2?.redirect,
        component: () => import('./step-6-B2PvZXCq.mjs').then((m) => m.default || m)
      },
      {
        name: __nuxt_page_meta$1?.name ?? "wizard-step-7",
        path: __nuxt_page_meta$1?.path ?? "step-7",
        meta: __nuxt_page_meta$1 || {},
        alias: __nuxt_page_meta$1?.alias || [],
        redirect: __nuxt_page_meta$1?.redirect,
        component: () => import('./step-7-Df9SVFIg.mjs').then((m) => m.default || m)
      }
    ]
  }
];

const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => props ? h(component, props, slots) : slots.default?.() };
};
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const behavior = useRouter().options?.scrollBehaviorType ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}

const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
...configRouterOptions,
...routerOptions0,
};

/* _processed_nuxt_unctx_transform */
const validate = defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  useRouter();
  const result = (([__temp,__restore]=executeAsync(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});

/* _processed_nuxt_unctx_transform */
const manifest_45route_45rule = defineNuxtRouteMiddleware(async (to) => {  {
    return;
  }
});

const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};

/* _processed_nuxt_unctx_transform */
const plugin$1 = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = routerOptions.history?.(routerBase) ?? (createMemoryHistory(routerBase));
    const routes = routerOptions.routes?.(_routes) ?? _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url ;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    try {
      if (true) {
        ;(([__temp,__restore]=executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
      }
      ;(([__temp,__restore]=executeAsync(()=>router.isReady())),await __temp,__restore());;
    } catch (error2) {
(([__temp,__restore]=executeAsync(()=>nuxtApp.runWithContext(() => showError(error2)))),await __temp,__restore());    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry of toArray(componentMiddleware)) {
            middlewareEntries.add(entry);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    useError();
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if (failure?.type === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.fullPath !== initialURL && (to.redirectedFrom || !isSamePath(to.fullPath, initialURL))) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

const isVue2 = false;

/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop$1 = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop$1
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    nuxtApp.payload._errors[key] ??= null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(options.getCachedData(key, nuxtApp) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef$1(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

function useRequestEvent(nuxtApp = useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? opts.default?.());
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_4$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      if (mounted.value) {
        return slots.default?.();
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const config = useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isAbsoluteUrl = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const hasTarget = computed(() => props.target && props.target !== "_self");
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (hasTarget.value) {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isAbsoluteUrl.value;
      });
      const prefetched = ref(false);
      const el = void 0 ;
      const elRef = void 0 ;
      return () => {
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value && !props.external && !isAbsoluteUrl.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          const navigate = () => navigateTo(href, { replace: props.replace, external: props.external });
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$3 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}

const plugin = defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = pinia.state.value;
    }
    return {
      provide: {
        pinia
      }
    };
  }
});

const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_utOpPuzpEY = defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});

const LazyCodeGroup = defineAsyncComponent(() => import('./CodeGroup-BCSaQyMR.mjs').then((r) => r["default"] || r.default || r));

const LazyCodeTimeline = defineAsyncComponent(() => import('./CodeTimeline-DCqJKhAl.mjs').then((r) => r["default"] || r.default || r));

const LazyCodeTimelineItem = defineAsyncComponent(() => import('./CodeTimelineItem-C4E9TB13.mjs').then((r) => r["default"] || r.default || r));

const LazyDocComponentDemo = defineAsyncComponent(() => import('./DocComponentDemo-CFHBshJt.mjs').then((r) => r["default"] || r.default || r));

const LazyDocComponentList = defineAsyncComponent(() => import('./DocComponentList-BZWiTrFD.mjs').then((r) => r["default"] || r.default || r));

const LazyDocComponentMeta = defineAsyncComponent(() => import('./DocComponentMeta-INuA3jSQ.mjs').then((r) => r["default"] || r.default || r));

const LazyDocCustomizerButton = defineAsyncComponent(() => import('./DocCustomizerButton-D9fr-J1D.mjs').then((r) => r["default"] || r.default || r));

const LazyDocGridIcon = defineAsyncComponent(() => import('./DocGridIcon-BZKlLpWJ.mjs').then((r) => r["default"] || r.default || r));

const LazyDocHeading = defineAsyncComponent(() => import('./DocHeading-D6dRp9FD.mjs').then((r) => r["default"] || r.default || r));

const LazyDocImage = defineAsyncComponent(() => import('./DocImage-Buh92yQY.mjs').then((r) => r["default"] || r.default || r));

const LazyDocLinkExternal = defineAsyncComponent(() => import('./DocLinkExternal-C3U6J8ce.mjs').then((r) => r["default"] || r.default || r));

const LazyDocLinker = defineAsyncComponent(() => import('./DocLinker-NV-DpFde.mjs').then((r) => r["default"] || r.default || r));

const LazyDocMessage = defineAsyncComponent(() => import('./DocMessage-BXl7UhjT.mjs').then((r) => r["default"] || r.default || r));

const LazyDocNav = defineAsyncComponent(() => import('./DocNav-B60sLKGS.mjs').then((r) => r["default"] || r.default || r));

const LazyDocOverview = defineAsyncComponent(() => import('./DocOverview-DF330P1D.mjs').then((r) => r["default"] || r.default || r));

const LazyDocOverviewLayers = defineAsyncComponent(() => import('./DocOverviewLayers-mdsA3xqO.mjs').then((r) => r["default"] || r.default || r));

const LazyProseA = defineAsyncComponent(() => import('./ProseA-9ar5b1tx.mjs').then((r) => r["default"] || r.default || r));

const LazyProseCode = defineAsyncComponent(() => import('./ProseCode-Dm2_-uM8.mjs').then((r) => r["default"] || r.default || r));

const LazyProseHr = defineAsyncComponent(() => import('./ProseHr-D-irV337.mjs').then((r) => r["default"] || r.default || r));

const LazyProseLi = defineAsyncComponent(() => import('./ProseLi-DTgEzlFT.mjs').then((r) => r["default"] || r.default || r));

const LazyProsePre = defineAsyncComponent(() => import('./ProsePre-ydSZEBBH.mjs').then((r) => r["default"] || r.default || r));

const LazyProseUl = defineAsyncComponent(() => import('./ProseUl-BiUhHhSG.mjs').then((r) => r["default"] || r.default || r));

const LazyDemoAccountMenu = defineAsyncComponent(() => import('./DemoAccountMenu-C3x7udSm.mjs').then(r => r["default"] || r.default || r));

const LazyDemoCircularMenuActivity = defineAsyncComponent(() => import('./DemoCircularMenuActivity-qB_0AvDR.mjs').then(r => r["default"] || r.default || r));

const LazyDemoCircularMenuLanguage = defineAsyncComponent(() => import('./DemoCircularMenuLanguage-Dn9IMFjF.mjs').then(r => r["default"] || r.default || r));

const LazyDemoCircularMenuNotifications = defineAsyncComponent(() => import('./DemoCircularMenuNotifications-2prEr7mA.mjs').then(r => r["default"] || r.default || r));

const LazyDemoCollapseNavigationFooter = defineAsyncComponent(() => import('./DemoCollapseNavigationFooter-DUyprhQ0.mjs').then(r => r["default"] || r.default || r));

const LazyDemoCollapseNavigationHeader = defineAsyncComponent(() => import('./DemoCollapseNavigationHeader-cuRfUWNo.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelAccount = defineAsyncComponent(() => import('./DemoPanelAccount-DES6vkQI.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelActivity = defineAsyncComponent(() => import('./DemoPanelActivity-KNZkD3GN.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelCard = defineAsyncComponent(() => import('./DemoPanelCard-CX2jOXvl.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelInvest = defineAsyncComponent(() => import('./DemoPanelInvest-CT-HHcE8.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelLanguage = defineAsyncComponent(() => import('./DemoPanelLanguage-CyOo4FQu.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelSearch = defineAsyncComponent(() => import('./DemoPanelSearch-CM-1pyEj.mjs').then(r => r["default"] || r.default || r));

const LazyDemoPanelTask = defineAsyncComponent(() => import('./DemoPanelTask-CaTkB1aT.mjs').then(r => r["default"] || r.default || r));

const LazyDemoSubsidebarDashboards = defineAsyncComponent(() => import('./DemoSubsidebarDashboards-DPW7zunA.mjs').then(r => r["default"] || r.default || r));

const LazyDemoSubsidebarLayouts = defineAsyncComponent(() => import('./DemoSubsidebarLayouts-DxnfS7FZ.mjs').then(r => r["default"] || r.default || r));

const LazyDemoThemeToggle = defineAsyncComponent(() => import('./DemoThemeToggle-B3mH9HjE.mjs').then(r => r["default"] || r.default || r));

const LazyDemoToolbarAccountMenu = defineAsyncComponent(() => import('./DemoToolbarAccountMenu-BlrMXdz4.mjs').then(r => r["default"] || r.default || r));

const LazyDemoToolbarActivity = defineAsyncComponent(() => import('./DemoToolbarActivity-DvUWPnk8.mjs').then(r => r["default"] || r.default || r));

const LazyDemoToolbarCustomize = defineAsyncComponent(() => import('./DemoToolbarCustomize-DnZRUDJ8.mjs').then(r => r["default"] || r.default || r));

const LazyDemoToolbarLanguage = defineAsyncComponent(() => import('./DemoToolbarLanguage-DU2LkYMZ.mjs').then(r => r["default"] || r.default || r));

const LazyDemoToolbarNotifications = defineAsyncComponent(() => import('./DemoToolbarNotifications-BmFccSBo.mjs').then(r => r["default"] || r.default || r));

const LazyDemoToolbarSearch = defineAsyncComponent(() => import('./DemoToolbarSearch-DC0GNB4o.mjs').then(r => r["default"] || r.default || r));

const LazyDemoTopnavWorkspaceDropdown = defineAsyncComponent(() => import('./DemoTopnavWorkspaceDropdown-DxtLk0EG.mjs').then(r => r["default"] || r.default || r));

const LazyDocLayoutSection = defineAsyncComponent(() => import('./DocLayoutSection-2LuTbz-y.mjs').then((r) => r["default"] || r.default || r));

const LazyDocSubsidebarCollapseLink = defineAsyncComponent(() => import('./DocSubsidebarCollapseLink-BvaZKfvJ.mjs').then((r) => r["default"] || r.default || r));

const LazyDocSubsidebarDocumentation = defineAsyncComponent(() => import('./DocSubsidebarDocumentation-BSLIsQ_X.mjs').then((r) => r["default"] || r.default || r));

const LazyTairoLogo = defineAsyncComponent(() => import('./TairoLogo-BETVEPG8.mjs').then(r => r["default"] || r.default || r));

const LazyTairoLogoText = defineAsyncComponent(() => Promise.resolve().then(function () { return TairoLogoText; }).then(r => r["default"] || r.default || r));

const LazyTairoToaster = defineAsyncComponent(() => import('./TairoToaster-BMP2Hr39.mjs').then(r => r["default"] || r.default || r));

const LazyTairoTocAnchor = defineAsyncComponent(() => import('./TairoTocAnchor-DaJFWAih.mjs').then(r => r["default"] || r.default || r));

const LazyContentDoc = defineAsyncComponent(() => import('./ContentDoc-CYSGoQxQ.mjs').then(r => r["default"] || r.default || r));

const LazyContentList = defineAsyncComponent(() => import('./ContentList-BTHgBxfB.mjs').then(r => r["default"] || r.default || r));

const LazyContentNavigation = defineAsyncComponent(() => import('./ContentNavigation-AkRV9pcX.mjs').then(r => r["default"] || r.default || r));

const LazyContentQuery = defineAsyncComponent(() => import('./ContentQuery-BpzR5rnR.mjs').then(r => r["default"] || r.default || r));

const LazyContentRenderer = defineAsyncComponent(() => import('./ContentRenderer-2lPf50Vs.mjs').then(r => r["default"] || r.default || r));

const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./ContentRendererMarkdown-BE6ndGIt.mjs').then(r => r["default"] || r.default || r));

const LazyContentSlot = defineAsyncComponent(() => import('./ContentSlot-CptsUBvR.mjs').then(r => r["default"] || r.default || r));

const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./DocumentDrivenEmpty-ByCi8b8D.mjs').then(r => r["default"] || r.default || r));

const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./DocumentDrivenNotFound-Dtr25yg-.mjs').then(r => r["default"] || r.default || r));

const LazyMarkdown = defineAsyncComponent(() => import('./Markdown-B7go0Jjl.mjs').then(r => r["default"] || r.default || r));

const LazyProseCodeInline = defineAsyncComponent(() => import('./ProseCodeInline-DxeS1T9B.mjs').then(r => r["default"] || r.default || r));

const LazyProseBlockquote = defineAsyncComponent(() => import('./ProseBlockquote-Dva_ck-P.mjs').then(r => r["default"] || r.default || r));

const LazyProseEm = defineAsyncComponent(() => import('./ProseEm-hyB4ZFR1.mjs').then(r => r["default"] || r.default || r));

const LazyProseH1 = defineAsyncComponent(() => import('./ProseH1-BoVXIdC0.mjs').then(r => r["default"] || r.default || r));

const LazyProseH2 = defineAsyncComponent(() => import('./ProseH2-DAt5hY46.mjs').then(r => r["default"] || r.default || r));

const LazyProseH3 = defineAsyncComponent(() => import('./ProseH3-B1coF8pv.mjs').then(r => r["default"] || r.default || r));

const LazyProseH4 = defineAsyncComponent(() => import('./ProseH4-DqkCZdam.mjs').then(r => r["default"] || r.default || r));

const LazyProseH5 = defineAsyncComponent(() => import('./ProseH5-BjWhSMps.mjs').then(r => r["default"] || r.default || r));

const LazyProseH6 = defineAsyncComponent(() => import('./ProseH6-CRp3wwso.mjs').then(r => r["default"] || r.default || r));

const LazyProseImg = defineAsyncComponent(() => import('./ProseImg-DVTxeZIS.mjs').then(r => r["default"] || r.default || r));

const LazyProseOl = defineAsyncComponent(() => import('./ProseOl-ClJtR3Ca.mjs').then(r => r["default"] || r.default || r));

const LazyProseP = defineAsyncComponent(() => import('./ProseP-B0dWVC8v.mjs').then(r => r["default"] || r.default || r));

const LazyProseScript = defineAsyncComponent(() => import('./ProseScript-ElMhJER-.mjs').then(r => r["default"] || r.default || r));

const LazyProseStrong = defineAsyncComponent(() => import('./ProseStrong-BLRKWAEZ.mjs').then(r => r["default"] || r.default || r));

const LazyProseTable = defineAsyncComponent(() => import('./ProseTable-BdWQePSN.mjs').then(r => r["default"] || r.default || r));

const LazyProseTbody = defineAsyncComponent(() => import('./ProseTbody-BW3U4ajM.mjs').then(r => r["default"] || r.default || r));

const LazyProseTd = defineAsyncComponent(() => import('./ProseTd-CwZZb4Yn.mjs').then(r => r["default"] || r.default || r));

const LazyProseTh = defineAsyncComponent(() => import('./ProseTh-CB8CoDCW.mjs').then(r => r["default"] || r.default || r));

const LazyProseThead = defineAsyncComponent(() => import('./ProseThead-DgVRjAQO.mjs').then(r => r["default"] || r.default || r));

const LazyProseTr = defineAsyncComponent(() => import('./ProseTr-Dn83RC1C.mjs').then(r => r["default"] || r.default || r));

const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function () { return Icon; }).then(r => r["default"] || r.default || r));

const LazyIconCSS = defineAsyncComponent(() => import('./IconCSS-BF6ym2__.mjs').then(r => r["default"] || r.default || r));

const lazyGlobalComponents = [
  ["CodeGroup", LazyCodeGroup],
  ["CodeTimeline", LazyCodeTimeline],
  ["CodeTimelineItem", LazyCodeTimelineItem],
  ["DocComponentDemo", LazyDocComponentDemo],
  ["DocComponentList", LazyDocComponentList],
  ["DocComponentMeta", LazyDocComponentMeta],
  ["DocCustomizerButton", LazyDocCustomizerButton],
  ["DocGridIcon", LazyDocGridIcon],
  ["DocHeading", LazyDocHeading],
  ["DocImage", LazyDocImage],
  ["DocLinkExternal", LazyDocLinkExternal],
  ["DocLinker", LazyDocLinker],
  ["DocMessage", LazyDocMessage],
  ["DocNav", LazyDocNav],
  ["DocOverview", LazyDocOverview],
  ["DocOverviewLayers", LazyDocOverviewLayers],
  ["ProseA", LazyProseA],
  ["ProseCode", LazyProseCode],
  ["ProseHr", LazyProseHr],
  ["ProseLi", LazyProseLi],
  ["ProsePre", LazyProsePre],
  ["ProseUl", LazyProseUl],
  ["DemoAccountMenu", LazyDemoAccountMenu],
  ["DemoCircularMenuActivity", LazyDemoCircularMenuActivity],
  ["DemoCircularMenuLanguage", LazyDemoCircularMenuLanguage],
  ["DemoCircularMenuNotifications", LazyDemoCircularMenuNotifications],
  ["DemoCollapseNavigationFooter", LazyDemoCollapseNavigationFooter],
  ["DemoCollapseNavigationHeader", LazyDemoCollapseNavigationHeader],
  ["DemoPanelAccount", LazyDemoPanelAccount],
  ["DemoPanelActivity", LazyDemoPanelActivity],
  ["DemoPanelCard", LazyDemoPanelCard],
  ["DemoPanelInvest", LazyDemoPanelInvest],
  ["DemoPanelLanguage", LazyDemoPanelLanguage],
  ["DemoPanelSearch", LazyDemoPanelSearch],
  ["DemoPanelTask", LazyDemoPanelTask],
  ["DemoSubsidebarDashboards", LazyDemoSubsidebarDashboards],
  ["DemoSubsidebarLayouts", LazyDemoSubsidebarLayouts],
  ["DemoThemeToggle", LazyDemoThemeToggle],
  ["DemoToolbarAccountMenu", LazyDemoToolbarAccountMenu],
  ["DemoToolbarActivity", LazyDemoToolbarActivity],
  ["DemoToolbarCustomize", LazyDemoToolbarCustomize],
  ["DemoToolbarLanguage", LazyDemoToolbarLanguage],
  ["DemoToolbarNotifications", LazyDemoToolbarNotifications],
  ["DemoToolbarSearch", LazyDemoToolbarSearch],
  ["DemoTopnavWorkspaceDropdown", LazyDemoTopnavWorkspaceDropdown],
  ["DocLayoutSection", LazyDocLayoutSection],
  ["DocSubsidebarCollapseLink", LazyDocSubsidebarCollapseLink],
  ["DocSubsidebarDocumentation", LazyDocSubsidebarDocumentation],
  ["TairoLogo", LazyTairoLogo],
  ["TairoLogoText", LazyTairoLogoText],
  ["TairoToaster", LazyTairoToaster],
  ["TairoTocAnchor", LazyTairoTocAnchor],
  ["ContentDoc", LazyContentDoc],
  ["ContentList", LazyContentList],
  ["ContentNavigation", LazyContentNavigation],
  ["ContentQuery", LazyContentQuery],
  ["ContentRenderer", LazyContentRenderer],
  ["ContentRendererMarkdown", LazyContentRendererMarkdown],
  ["MDCSlot", LazyContentSlot],
  ["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
  ["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
  ["Markdown", LazyMarkdown],
  ["ProseCodeInline", LazyProseCodeInline],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseEm", LazyProseEm],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseImg", LazyProseImg],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProseScript", LazyProseScript],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const components_plugin_KR1HBZs4kY = defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});

const preference = "system";

const plugin_server_VKCMYhKKy0 = defineNuxtPlugin((nuxtApp) => {
  const colorMode = nuxtApp.ssrContext?.islandContext ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});

function createEventBus() {
  const queue = {};
  function on(name, callback) {
    queue[name] = queue[name] || [];
    queue[name].push(callback);
  }
  function off(name, callback) {
    if (queue[name]) {
      for (let i = 0; i < queue[name].length; i++) {
        if (queue[name][i] === callback) {
          queue[name].splice(i, 1);
          break;
        }
      }
    }
  }
  function emit(name, ...args) {
    if (queue[name]) {
      queue[name].forEach((callback) => {
        callback(...args);
      });
    }
  }
  return {
    queue,
    on,
    off,
    emit
  };
}

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = false;
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const isDef = (val) => typeof val !== "undefined";
const notNullish = (val) => val != null;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke2) => {
  return invoke2();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function getLifeCycleTarget(target) {
  return target || getCurrentInstance();
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}
function watchWithFilter(source, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function tryOnBeforeMount(fn, sync = true, target) {
  const instance = getLifeCycleTarget(target);
  if (instance)
     ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function tryOnBeforeUnmount(fn, target) {
  getLifeCycleTarget(target);
}
function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
     ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval) || typeof interval === "function") {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function watchDebounced(source, cb, options = {}) {
  const {
    debounce = 0,
    maxWait = void 0,
    ...watchOptions
  } = options;
  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: debounceFilter(debounce, { maxWait })
    }
  );
}

function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
const defaultNavigator = void 0;
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return noop;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
          handler(event);
      }, 0);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function createKeyPredicate(keyFilter) {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  return () => true;
}
function onKeyStroke(...args) {
  let key;
  let handler;
  let options = {};
  if (args.length === 3) {
    key = args[0];
    handler = args[1];
    options = args[2];
  } else if (args.length === 2) {
    if (typeof args[1] === "object") {
      key = true;
      handler = args[0];
      options = args[1];
    } else {
      key = args[0];
      handler = args[1];
    }
  } else {
    key = true;
    handler = args[0];
  }
  const {
    target = defaultWindow,
    eventName = "keydown",
    passive = false,
    dedupe = false
  } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (e.repeat && toValue(dedupe))
      return;
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window: window2 = defaultWindow
  } = options;
  const isActive = ref(false);
  const intervalLimit = fpsLimit ? 1e3 / fpsLimit : null;
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp2;
    const delta = timestamp2 - previousFrameTimestamp;
    if (intervalLimit && delta < intervalLimit) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp2;
    fn({ delta, timestamp: timestamp2 });
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}
function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value && isAllowed(permissionWrite.value))
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = (void 0).createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    (void 0).body.appendChild(ta);
    ta.select();
    (void 0).execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = void 0 ) == null ? void 0 : _a.call(void 0)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => Array.isArray(target) ? target.map((el) => unrefElement(el)) : [unrefElement(target)]);
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els)
          _el && observer.observe(_el, observerOptions);
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a, _b;
    return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window2 && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const styles = window2.getComputedStyle($elem);
          width.value = Number.parseFloat(styles.width);
          height.value = Number.parseFloat(styles.height);
        }
      } else {
        if (boxSize) {
          const formatBoxSize = Array.isArray(boxSize) ? boxSize : [boxSize];
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(/* @__PURE__ */ new Date());
  const update = () => now.value = /* @__PURE__ */ new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return {
      now,
      ...controls
    };
  } else {
    return now;
  }
}
function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue,
    shouldEmit
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON(val);
  const getValue2 = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  const triggerEmit = (value) => {
    if (shouldEmit) {
      if (shouldEmit(value))
        _emit(event, value);
    } else {
      _emit(event, value);
    }
  };
  if (passive) {
    const initialValue = getValue2();
    const proxy = ref(initialValue);
    let isUpdating = false;
    watch(
      () => props[key],
      (v) => {
        if (!isUpdating) {
          isUpdating = true;
          proxy.value = cloneFn(v);
          nextTick(() => isUpdating = false);
        }
      }
    );
    watch(
      proxy,
      (v) => {
        if (!isUpdating && (v !== props[key] || deep))
          triggerEmit(v);
      },
      { deep }
    );
    return proxy;
  } else {
    return computed({
      get() {
        return getValue2();
      },
      set(value) {
        triggerEmit(value);
      }
    });
  }
}
function useVirtualList(list, options) {
  const { containerStyle, wrapperProps, scrollTo: scrollTo2, calculateRange, currentList, containerRef } = "itemHeight" in options ? useVerticalVirtualList(options, list) : useHorizontalVirtualList(options, list);
  return {
    list: currentList,
    scrollTo: scrollTo2,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}
function useVirtualListResources(list) {
  const containerRef = ref(null);
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  return { state, source, currentList, size, containerRef };
}
function createGetViewCapacity(state, source, itemSize) {
  return (containerSize) => {
    if (typeof itemSize === "number")
      return Math.ceil(containerSize / itemSize);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      capacity = i;
      if (sum > containerSize)
        break;
    }
    return capacity - start;
  };
}
function createGetOffset(source, itemSize) {
  return (scrollDirection) => {
    if (typeof itemSize === "number")
      return Math.floor(scrollDirection / itemSize) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const size = itemSize(i);
      sum += size;
      if (sum >= scrollDirection) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
}
function createCalculateRange(type, overscan, getOffset, getViewCapacity, { containerRef, state, currentList, source }) {
  return () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(type === "vertical" ? element.scrollTop : element.scrollLeft);
      const viewCapacity = getViewCapacity(type === "vertical" ? element.clientHeight : element.clientWidth);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
}
function createGetDistance(itemSize, source) {
  return (index) => {
    if (typeof itemSize === "number") {
      const size2 = index * itemSize;
      return size2;
    }
    const size = source.value.slice(0, index).reduce((sum, _, i) => sum + itemSize(i), 0);
    return size;
  };
}
function useWatchForSizes(size, list, calculateRange) {
  watch([size.width, size.height, list], () => {
    calculateRange();
  });
}
function createComputedTotalSize(itemSize, source) {
  return computed(() => {
    if (typeof itemSize === "number")
      return source.value.length * itemSize;
    return source.value.reduce((sum, _, index) => sum + itemSize(index), 0);
  });
}
const scrollToDictionaryForElementScrollKey = {
  horizontal: "scrollLeft",
  vertical: "scrollTop"
};
function createScrollTo(type, calculateRange, getDistance, containerRef) {
  return (index) => {
    if (containerRef.value) {
      containerRef.value[scrollToDictionaryForElementScrollKey[type]] = getDistance(index);
      calculateRange();
    }
  };
}
function useHorizontalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowX: "auto" };
  const { itemWidth, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemWidth);
  const getOffset = createGetOffset(source, itemWidth);
  const calculateRange = createCalculateRange("horizontal", overscan, getOffset, getViewCapacity, resources);
  const getDistanceLeft = createGetDistance(itemWidth, source);
  const offsetLeft = computed(() => getDistanceLeft(state.value.start));
  const totalWidth = createComputedTotalSize(itemWidth, source);
  useWatchForSizes(size, list, calculateRange);
  const scrollTo2 = createScrollTo("horizontal", calculateRange, getDistanceLeft, containerRef);
  const wrapperProps = computed(() => {
    return {
      style: {
        height: "100%",
        width: `${totalWidth.value - offsetLeft.value}px`,
        marginLeft: `${offsetLeft.value}px`,
        display: "flex"
      }
    };
  });
  return {
    scrollTo: scrollTo2,
    calculateRange,
    wrapperProps,
    containerStyle,
    currentList,
    containerRef
  };
}
function useVerticalVirtualList(options, list) {
  const resources = useVirtualListResources(list);
  const { state, source, currentList, size, containerRef } = resources;
  const containerStyle = { overflowY: "auto" };
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = createGetViewCapacity(state, source, itemHeight);
  const getOffset = createGetOffset(source, itemHeight);
  const calculateRange = createCalculateRange("vertical", overscan, getOffset, getViewCapacity, resources);
  const getDistanceTop = createGetDistance(itemHeight, source);
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const totalHeight = createComputedTotalSize(itemHeight, source);
  useWatchForSizes(size, list, calculateRange);
  const scrollTo2 = createScrollTo("vertical", calculateRange, getDistanceTop, containerRef);
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  return {
    calculateRange,
    scrollTo: scrollTo2,
    containerStyle,
    wrapperProps,
    currentList,
    containerRef
  };
}

function useNinjaPausableTimeout(callback, timeout) {
  const pausedAt = ref(0);
  const startedAt = ref(0);
  const remaining = ref(0);
  let timer;
  function stop() {
    if (!timer) {
      return;
    }
    clearTimeout(timer);
    timer = void 0;
  }
  function start() {
    pausedAt.value = 0;
    startedAt.value = Date.now();
    remaining.value = timeout ?? 0;
    stop();
    timer = setTimeout(callback, remaining.value);
  }
  function pause() {
    if (!startedAt.value || pausedAt.value) {
      return;
    }
    stop();
    pausedAt.value = Date.now();
  }
  function resume() {
    if (!pausedAt.value) {
      return;
    }
    stop();
    remaining.value -= pausedAt.value - startedAt.value;
    startedAt.value = Date.now();
    pausedAt.value = 0;
    timer = setTimeout(callback, remaining.value);
  }
  tryOnBeforeUnmount();
  return {
    pausedAt,
    startedAt,
    remaining,
    start,
    stop,
    pause,
    resume
  };
}

function useNinjaToasterContainer(_theme) {
  const theme = toRef(_theme);
  const container = ref(null);
  const containerId = computed(() => theme.value?.containerId ?? "nt-container");
  tryOnBeforeMount(() => {
    container.value = (void 0).getElementById(containerId.value);
    if (!container.value) {
      container.value = (void 0).createElement("div");
      container.value.id = containerId.value;
      (void 0).body.appendChild(container.value);
    }
    if (theme.value?.containerClass) {
      container.value.className = Array.isArray(theme.value.containerClass) ? theme.value.containerClass.join(" ") : theme.value.containerClass;
    }
  });
  return {
    container,
    containerId
  };
}

const NinjaToasterStateKey = Symbol.for(
  "NinjaToasterState"
);
function createNinjaToasterState(state) {
  provide(NinjaToasterStateKey, state);
}
function useNinjaToasterState() {
  const state = inject(NinjaToasterStateKey);
  if (!state) {
    throw new Error("NinjaToasterState is not provided");
  }
  return state;
}
function useNinjaToasterProgress() {
  const state = useNinjaToasterState();
  const now = ref(Date.now());
  const endAt = computed(() => {
    return state.timer.startedAt.value + state.timer.remaining.value;
  });
  const closeIn = computed(() => {
    return now.value - endAt.value;
  });
  const percent = computed(() => {
    if (!state.duration) {
      return 0;
    }
    const ratio = 1 - Math.max(0, Math.abs(closeIn.value)) / state.duration;
    return Math.round(ratio * 1e3) / 1e3;
  });
  tryOnMounted(() => {
    setInterval(() => {
      if (!state.isHovered.value) {
        now.value = Date.now();
      }
    }, 16);
  });
  tryOnBeforeUnmount();
  return {
    percent,
    endAt,
    closeIn
  };
}

function createRenderQueue() {
  const queue = [];
  let timer;
  function add(item) {
    queue.push(item);
    if (!timer) {
      timer = setTimeout(next, 100);
    }
    return () => {
      remove(item);
    };
  }
  function remove(item) {
    const index = queue.indexOf(item);
    if (index !== -1) {
      queue.splice(index, 1);
    }
  }
  function clear() {
    queue.length = 0;
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function next() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
    const firstElement = queue[0];
    if (!firstElement) {
      return;
    }
    if (!firstElement.until()) {
      timer = setTimeout(next, 100);
      return;
    }
    queue.shift();
    firstElement.callback();
    if (queue.length > 0) {
      timer = setTimeout(next, 100);
    }
  }
  return {
    add,
    remove,
    clear
  };
}

const NinjaToaster = defineComponent({
  name: "NinjaToaster",
  props: {
    content: {
      type: [String, Number, Object, Function],
      required: true
    },
    duration: {
      type: Number,
      default: 5e3
    },
    theme: {
      type: Object,
      default: () => ({})
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    queues: {
      type: Map,
      default: () => /* @__PURE__ */ new Map()
    },
    events: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["close", "click", "show"],
  setup(props, { emit }) {
    const theme = computed(() => {
      return defu(props.theme ?? {}, {
        containerClass: [],
        wrapperClass: [],
        containerId: "nt-container",
        maxToasts: Infinity,
        transition: void 0
      });
    });
    const { container, containerId } = useNinjaToasterContainer(theme);
    const timer = useNinjaPausableTimeout(() => {
      close();
    }, props.duration);
    const isHovered = ref(false);
    const isActive = ref(false);
    const unqueue = ref();
    const rootElement = ref();
    let queue;
    if (props.queues.has(containerId.value)) {
      queue = props.queues.get(containerId.value);
    } else {
      queue = createRenderQueue();
      props.queues.set(containerId.value, queue);
    }
    const content = computed(() => {
      return typeof props.content === "function" ? props.content() : props.content;
    });
    function toggleTimer(pause) {
      if (!props.pauseOnHover) {
        return;
      }
      if (pause) {
        timer.pause();
        return;
      }
      timer.resume();
    }
    function stopTimer() {
      timer.stop();
      unqueue.value?.();
    }
    function close() {
      stopTimer();
      isActive.value = false;
    }
    function onMouseover() {
      isHovered.value = true;
      toggleTimer(true);
    }
    function onMouseleave() {
      isHovered.value = false;
      toggleTimer(false);
    }
    function onFocus() {
      isHovered.value = true;
      toggleTimer(true);
    }
    function onBlur() {
      isHovered.value = false;
      toggleTimer(false);
    }
    function onClick(event) {
      emit("click", event);
      if (props.dismissible) {
        close();
      }
    }
    function onKeydown(event) {
      if (event.target !== event.currentTarget) {
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }
      event.preventDefault();
      onClick(event);
    }
    function onAfterLeave(el) {
      emit("close");
      if (typeof theme.value?.transition?.onAfterLeave === "function") {
        theme.value?.transition.onAfterLeave(el);
      }
      if (typeof rootElement.value?.remove !== "undefined") {
        rootElement.value?.remove();
      } else {
        rootElement.value?.parentNode?.removeChild(rootElement.value);
      }
    }
    createNinjaToasterState({
      timer,
      duration: props.duration,
      isHovered,
      isActive,
      click: onClick,
      close
    });
    return () => {
      const wrapper = withDirectives(
        h(
          "div",
          {
            role: "alert",
            tabindex: 0,
            class: theme.value && Array.isArray(theme.value?.wrapperClass) ? theme.value.wrapperClass.join(" ") : theme.value?.wrapperClass,
            onMouseover,
            onMouseleave,
            onFocus,
            onBlur,
            onKeydown,
            onClick
          },
          h(Suspense, null, content.value)
        ),
        [[vShow, isActive.value]]
      );
      return h(
        Transition,
        {
          ref: rootElement,
          ...theme.value?.transition || {},
          onAfterLeave
        },
        () => wrapper
      );
    };
  }
});

function createElement() {
  {
    return null;
  }
}
function mountWithContext(app, component, props) {
  const el = createElement();
  if (el) {
    const vNode = h(component, props);
    if (app && app._context) {
      vNode.appContext = app._context;
    }
    render(vNode, el);
  }
}
function ensureClassesArray(theme) {
  if (theme?.containerClass && !Array.isArray(theme.containerClass)) {
    theme.containerClass = [theme.containerClass];
  }
  if (theme?.wrapperClass && !Array.isArray(theme.wrapperClass)) {
    theme.wrapperClass = [theme.wrapperClass];
  }
}
function createNinjaToaster(createProps = {}) {
  const events = createEventBus();
  const queues = /* @__PURE__ */ new Map();
  function showComponent(name, {
    props,
    children,
    options
  }) {
    const content = () => h(resolveComponent(name), props, children);
    return show({
      ...options,
      content
    });
  }
  function show(options) {
    const appConfigProps = useAppConfig()?.toaster;
    const app = useNuxtApp().vueApp;
    const userProps = typeof options === "string" || typeof options === "number" || typeof options === "function" ? { content: options } : options;
    ensureClassesArray(userProps?.theme);
    ensureClassesArray(createProps?.theme);
    ensureClassesArray(appConfigProps?.theme);
    const props = defu(
      userProps,
      createProps,
      appConfigProps
    );
    return new Promise((resolve) => {
      mountWithContext(app, NinjaToaster, {
        ...props,
        events,
        queues,
        onShow: (toast) => {
          resolve(toast);
          if (props.onShow) {
            props.onShow(toast);
          }
        }
      });
      {
        resolve({
          el: null,
          close: () => {
          }
        });
      }
    });
  }
  function clearAll() {
    events.emit("clear");
    queues.forEach((queue) => {
      queue.clear();
    });
    queues.clear();
  }
  function clear(theme) {
    const containerId = typeof theme === "string" ? theme : theme.containerId ?? "nt-container";
    events.emit(`clear-${containerId}`);
    if (queues.has(containerId)) {
      queues.get(containerId)?.clear();
    }
  }
  return {
    show,
    showComponent,
    clearAll,
    clear
  };
}

const plugin_8ZQh7hY0br = defineNuxtPlugin(() => {
  return {
    provide: {
      nt: createNinjaToaster()
    }
  };
});

/* _processed_nuxt_unctx_transform */
const plugin_BC2EEW61If = defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  const { googleSignIn } = useRuntimeConfig().public;
  if (googleSignIn) {
    const plugin = (([__temp,__restore]=executeAsync(()=>import('vue3-google-signin'))),__temp=await __temp,__restore(),__temp);
    if (!googleSignIn.clientId) {
      console.warn("[vue3-google-signin] googleSignIn.clientId is not provided in appConfig");
      return;
    }
    nuxtApp.vueApp.use(plugin.default, { clientId: googleSignIn.clientId });
  }
});

function get$1(obj, path) {
  if (obj == null)
    return void 0;
  let value = obj;
  for (let i = 0; i < path.length; i++) {
    if (value === void 0 || value[path[i]] === void 0)
      return void 0;
    if (value === null || value[path[i]] === null)
      return null;
    value = value[path[i]];
  }
  return value;
}
function set(obj, value, path) {
  if (path.length === 0)
    return value;
  const idx = path[0];
  if (path.length > 1) {
    value = set(
      typeof obj !== "object" || obj === null || !Object.prototype.hasOwnProperty.call(obj, idx) ? Number.isInteger(Number(path[1])) ? [] : {} : obj[idx],
      value,
      Array.prototype.slice.call(path, 1)
    );
  }
  if (Number.isInteger(Number(idx)) && Array.isArray(obj))
    return obj.slice()[idx];
  return Object.assign({}, obj, { [idx]: value });
}
function unset(obj, path) {
  if (obj == null || path.length === 0)
    return obj;
  if (path.length === 1) {
    if (obj == null)
      return obj;
    if (Number.isInteger(path[0]) && Array.isArray(obj))
      return Array.prototype.slice.call(obj, 0).splice(path[0], 1);
    const result = {};
    for (const p in obj)
      result[p] = obj[p];
    delete result[path[0]];
    return result;
  }
  if (obj[path[0]] == null) {
    if (Number.isInteger(path[0]) && Array.isArray(obj))
      return Array.prototype.concat.call([], obj);
    const result = {};
    for (const p in obj)
      result[p] = obj[p];
    return result;
  }
  return set(
    obj,
    unset(
      obj[path[0]],
      Array.prototype.slice.call(path, 1)
    ),
    [path[0]]
  );
}
function deepPick(obj, paths) {
  return paths.map((p) => p.split(".")).map((p) => [p, get$1(obj, p)]).filter((t) => t[1] !== void 0).reduce((acc, cur) => set(acc, cur[1], cur[0]), {});
}
function deepOmit(obj, paths) {
  return paths.map((p) => p.split(".")).reduce((acc, cur) => unset(acc, cur), obj);
}

function hydrateStore(store, {
  storage,
  serializer,
  key,
  debug,
  pick,
  omit,
  beforeHydrate,
  afterHydrate
}, context, runHooks = true) {
  try {
    if (runHooks)
      beforeHydrate?.(context);
    const fromStorage = storage.getItem(key);
    if (fromStorage) {
      const deserialized = serializer.deserialize(fromStorage);
      const picked = pick ? deepPick(deserialized, pick) : deserialized;
      const omitted = omit ? deepOmit(picked, omit) : picked;
      store.$patch(omitted);
    }
    if (runHooks)
      afterHydrate?.(context);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function persistState(state, {
  storage,
  serializer,
  key,
  debug,
  pick,
  omit
}) {
  try {
    const picked = pick ? deepPick(state, pick) : state;
    const omitted = omit ? deepOmit(picked, omit) : picked;
    const toStorage = serializer.serialize(omitted);
    storage.setItem(key, toStorage);
  } catch (error) {
    if (debug)
      console.error("[pinia-plugin-persistedstate]", error);
  }
}
function parsePersistKey(key, storeId) {
  return typeof key === "function" ? key(storeId) : typeof key === "string" ? key : storeId;
}
function createPersistence(context, optionsParser, auto) {
  const { pinia, store, options: { persist = auto } } = context;
  if (!persist)
    return;
  // v8 ignore if -- @preserve
  if (!(store.$id in pinia.state.value)) {
    const originalStore = pinia._s.get(store.$id.replace("__hot:", ""));
    if (originalStore)
      void Promise.resolve().then(() => originalStore.$persist());
    return;
  }
  const persistenceOptions = Array.isArray(persist) ? persist : persist === true ? [{}] : [persist];
  const persistences = persistenceOptions.map(optionsParser);
  store.$hydrate = ({ runHooks = true } = {}) => {
    persistences.forEach((p) => {
      hydrateStore(store, p, context, runHooks);
    });
  };
  store.$persist = () => {
    persistences.forEach((p) => {
      persistState(store.$state, p);
    });
  };
  persistences.forEach((p) => {
    hydrateStore(store, p, context);
    store.$subscribe(
      (_mutation, state) => persistState(state, p),
      { detached: true }
    );
  });
}

function cookies(options) {
  return {
    getItem: (key) => useCookie(
      key,
      {
        ...options ?? useRuntimeConfig().public.piniaPluginPersistedstate.cookieOptions ?? {},
        decode: options?.decode ?? decodeURIComponent,
        readonly: true
      }
    ).value,
    setItem: (key, value) => useCookie(
      key,
      {
        ...options ?? useRuntimeConfig().public.piniaPluginPersistedstate.cookieOptions ?? {},
        encode: options?.encode ?? encodeURIComponent
      }
    ).value = value
  };
}
function localStorage() {
  return {
    getItem: (key) => null,
    setItem: (key, value) => null
  };
}
function sessionStorage() {
  return {
    getItem: (key) => null,
    setItem: (key, value) => null
  };
}
const storages = {
  cookies,
  localStorage,
  sessionStorage
};

function piniaPlugin(context) {
  const config = useRuntimeConfig();
  const options = config.public.piniaPluginPersistedstate;
  createPersistence(
    context,
    (p) => {
      const persistKey = parsePersistKey(p.key, context.store.$id);
      return {
        key: options.key ? options.key.replace(/%id/g, persistKey) : persistKey,
        debug: p.debug ?? options.debug ?? false,
        serializer: p.serializer ?? {
          serialize: (data) => JSON.stringify(data),
          deserialize: (data) => JSON.parse(data)
        },
        storage: p.storage ?? (options.storage ? options.storage === "cookies" ? storages.cookies(options.cookieOptions) : storages[options.storage]() : storages.cookies()),
        beforeHydrate: p.beforeHydrate,
        afterHydrate: p.afterHydrate,
        pick: p.pick,
        omit: p.omit
      };
    },
    options.auto ?? false
  );
}
const plugin_PN4Ky5nxCP = defineNuxtPlugin({
  name: "pinia-plugin-persistedstate",
  setup({ $pinia }) {
    $pinia.use(piniaPlugin);
  }
});

const directives_yBPzJQtdia = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el, { value }) {
      console.log("v-focus?", value);
      if (value === false) {
        return;
      }
      if (el && el.tabIndex === -1) {
        const focusable = el.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable) {
          focusable.focus();
        }
        return;
      }
      el.focus();
    }
  });
});

/* _processed_nuxt_unctx_transform */
const vue_axe_RbYD3MO140 = defineNuxtPlugin(async (nuxtApp) => {  const VueAxePopup = defineComponent({
    // @ts-ignore
    render: (_, { slots }) => slots ? slots.default() : null
  });
  nuxtApp.vueApp.component("VueAxePopup", VueAxePopup);
});

const plugins = [
  unhead_W1jz8Xx8Qy,
  plugin$1,
  plugin,
  revive_payload_server_utOpPuzpEY,
  components_plugin_KR1HBZs4kY,
  plugin_server_VKCMYhKKy0,
  plugin_8ZQh7hY0br,
  plugin_BC2EEW61If,
  plugin_PN4Ky5nxCP,
  directives_yBPzJQtdia,
  vue_axe_RbYD3MO140
];

const _sfc_main$I = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TairoModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    as: { default: "div" },
    size: { default: "md" },
    rounded: { default: "sm" },
    footerAlign: { default: "end" },
    classes: { default: () => ({
      wrapper: "",
      dialog: ""
    }) }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialogClasses = computed(() => {
      const classes = [];
      if (props.classes.dialog) {
        if (Array.isArray(props.classes.dialog)) {
          classes.push(...props.classes.dialog);
        } else {
          classes.push(props.classes.dialog);
        }
      }
      switch (props.rounded) {
        case "none":
          classes.push("rounded-none");
          break;
        case "sm":
          classes.push("rounded-md");
          break;
        case "md":
          classes.push("rounded-lg");
          break;
        case "lg":
          classes.push("rounded-xl");
          break;
      }
      switch (props.size) {
        case "sm":
          classes.push("max-w-sm");
          break;
        case "md":
          classes.push("max-w-md");
          break;
        case "lg":
          classes.push("max-w-xl");
          break;
        case "xl":
          classes.push("max-w-2xl");
          break;
        case "2xl":
          classes.push("max-w-3xl");
          break;
        case "3xl":
          classes.push("max-w-5xl");
          break;
      }
      return classes;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TransitionRoot), mergeProps({
        appear: "",
        show: props.open,
        as: "template"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-[9999]",
              as: "div",
              onClose: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0"${_scopeId2}>`);
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(props.as ? props.as : _ctx.as), {
                    class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TransitionChild), {
                          as: "template",
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DialogPanel), {
                                class: ["dark:bg-muted-800 w-full bg-white text-start align-middle shadow-xl transition-all", unref(dialogClasses)]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push6, _parent6, _scopeId5);
                                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push6, _parent6, _scopeId5);
                                    if ("footer" in _ctx.$slots) {
                                      _push6(`<div class="${ssrRenderClass([[
                                        props.footerAlign === "center" && "justify-center",
                                        props.footerAlign === "end" && "justify-end",
                                        props.footerAlign === "between" && "justify-between"
                                      ], "flex w-full items-center gap-x-2"])}"${_scopeId5}>`);
                                      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push6, _parent6, _scopeId5);
                                      _push6(`</div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "header"),
                                      renderSlot(_ctx.$slots, "default"),
                                      "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: ["flex w-full items-center gap-x-2", [
                                          props.footerAlign === "center" && "justify-center",
                                          props.footerAlign === "end" && "justify-end",
                                          props.footerAlign === "between" && "justify-between"
                                        ]]
                                      }, [
                                        renderSlot(_ctx.$slots, "footer")
                                      ], 2)) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 3
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(DialogPanel), {
                                  class: ["dark:bg-muted-800 w-full bg-white text-start align-middle shadow-xl transition-all", unref(dialogClasses)]
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "header"),
                                    renderSlot(_ctx.$slots, "default"),
                                    "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: ["flex w-full items-center gap-x-2", [
                                        props.footerAlign === "center" && "justify-center",
                                        props.footerAlign === "end" && "justify-end",
                                        props.footerAlign === "between" && "justify-between"
                                      ]]
                                    }, [
                                      renderSlot(_ctx.$slots, "footer")
                                    ], 2)) : createCommentVNode("", true)
                                  ]),
                                  _: 3
                                }, 8, ["class"])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), {
                                class: ["dark:bg-muted-800 w-full bg-white text-start align-middle shadow-xl transition-all", unref(dialogClasses)]
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "header"),
                                  renderSlot(_ctx.$slots, "default"),
                                  "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: ["flex w-full items-center gap-x-2", [
                                      props.footerAlign === "center" && "justify-center",
                                      props.footerAlign === "end" && "justify-end",
                                      props.footerAlign === "between" && "justify-between"
                                    ]]
                                  }, [
                                    renderSlot(_ctx.$slots, "footer")
                                  ], 2)) : createCommentVNode("", true)
                                ]),
                                _: 3
                              }, 8, ["class"])
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }), _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(props.as ? props.as : _ctx.as), {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), {
                                class: ["dark:bg-muted-800 w-full bg-white text-start align-middle shadow-xl transition-all", unref(dialogClasses)]
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "header"),
                                  renderSlot(_ctx.$slots, "default"),
                                  "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: ["flex w-full items-center gap-x-2", [
                                      props.footerAlign === "center" && "justify-center",
                                      props.footerAlign === "end" && "justify-end",
                                      props.footerAlign === "between" && "justify-between"
                                    ]]
                                  }, [
                                    renderSlot(_ctx.$slots, "footer")
                                  ], 2)) : createCommentVNode("", true)
                                ]),
                                _: 3
                              }, 8, ["class"])
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      }, 8, ["class"]))
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "fixed inset-0 z-[9999] flex items-center justify-center" }, [
                createVNode(unref(Dialog), {
                  class: "relative z-[9999]",
                  as: "div",
                  onClose: ($event) => emit("close")
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0" }, [
                      (openBlock(), createBlock(resolveDynamicComponent(props.as ? props.as : _ctx.as), {
                        class: ["flex min-h-full items-center justify-center p-4 text-center", props.classes.wrapper]
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TransitionChild), {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(DialogPanel), {
                                class: ["dark:bg-muted-800 w-full bg-white text-start align-middle shadow-xl transition-all", unref(dialogClasses)]
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "header"),
                                  renderSlot(_ctx.$slots, "default"),
                                  "footer" in _ctx.$slots ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: ["flex w-full items-center gap-x-2", [
                                      props.footerAlign === "center" && "justify-center",
                                      props.footerAlign === "end" && "justify-end",
                                      props.footerAlign === "between" && "justify-between"
                                    ]]
                                  }, [
                                    renderSlot(_ctx.$slots, "footer")
                                  ], 2)) : createCommentVNode("", true)
                                ]),
                                _: 3
                              }, 8, ["class"])
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      }, 8, ["class"]))
                    ])
                  ]),
                  _: 3
                }, 8, ["onClose"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoModal.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};

const _sfc_main$H = defineComponent({
  props: {
    /**
     * The HTML tag to use for the wrapper
     *
     * @default div
     */
    as: {
      type: String,
      default: "div"
    },
    /**
     * Keys to trigger the next focusable element
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
     */
    nextKeys: {
      type: [Array, String],
      default: "PageDown"
    },
    /**
     * Keys to trigger the previous focusable element
     */
    prevKeys: {
      type: [Array, String],
      default: "PageUp"
    },
    /**
     * Prevent the default behavior of the keys
     */
    prevent: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const wrapper = ref();
    function checkFocusables() {
    }
    onUpdated(checkFocusables);
    onKeyStroke(props.nextKeys, (event) => {
    });
    onKeyStroke(props.prevKeys, (event) => {
    });
    return () => h(props.as, { ref: wrapper }, slots?.default?.());
  }
});

const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseFocusLoop.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$G = {};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "nui-placeload animate-nui-placeload" }, _attrs))}></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BasePlaceload.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : undefined
};
const __nuxt_component_0$2 = /*#__PURE__*/_export_sfc(_sfc_main$G, [['ssrRender',_sfc_ssrRender$2]]);

const iconCollections = ["fluent-emoji-high-contrast","material-symbols-light","cryptocurrency-color","icon-park-outline","icon-park-twotone","fluent-emoji-flat","emojione-monotone","streamline-emojis","heroicons-outline","simple-line-icons","material-symbols","flat-color-icons","icon-park-solid","pepicons-pencil","heroicons-solid","pepicons-print","cryptocurrency","pixelarticons","system-uicons","bitcoin-icons","devicon-plain","entypo-social","token-branded","grommet-icons","vscode-icons","pepicons-pop","svg-spinners","fluent-emoji","simple-icons","circle-flags","medical-icon","icomoon-free","majesticons","radix-icons","humbleicons","fa6-regular","emojione-v1","skill-icons","academicons","healthicons","fluent-mdl2","teenyicons","ant-design","gravity-ui","akar-icons","lets-icons","streamline","fa6-brands","file-icons","game-icons","foundation","fa-regular","mono-icons","iconamoon","zondicons","mdi-light","eos-icons","gridicons","icon-park","heroicons","fa6-solid","meteocons","arcticons","dashicons","fa-brands","websymbol","fontelico","mingcute","flowbite","marketeq","bytesize","guidance","openmoji","emojione","nonicons","brandico","flagpack","fa-solid","fontisto","si-glyph","pepicons","iconoir","tdesign","clarity","octicon","codicon","pajamas","formkit","line-md","twemoji","noto-v1","fxemoji","devicon","raphael","flat-ui","topcoat","feather","tabler","carbon","lucide","memory","mynaui","circum","fluent","nimbus","entypo","icons8","subway","vaadin","solar","basil","typcn","charm","prime","quill","logos","token","covid","maki","gala","mage","ooui","noto","unjs","flag","iwwa","zmdi","bpmn","mdi","ion","uil","bxs","cil","uiw","uim","uit","uis","jam","oui","bxl","cib","cbi","cif","gis","map","geo","fad","eva","wpf","whh","ic","ph","ri","bi","bx","gg","ci","ep","fe","mi","f7","ei","wi","la","fa","oi","et","el","ls","vs","il","ps"];

function resolveIconName(name = "") {
  let prefix;
  let provider = "";
  if (name[0] === "@" && name.includes(":")) {
    provider = name.split(":")[0].slice(1);
    name = name.split(":").slice(1).join(":");
  }
  if (name.startsWith("i-")) {
    name = name.replace(/^i-/, "");
    for (const collectionName of iconCollections) {
      if (name.startsWith(collectionName)) {
        prefix = collectionName;
        name = name.slice(collectionName.length + 1);
        break;
      }
    }
  } else if (name.includes(":")) {
    const [_prefix, _name] = name.split(":");
    prefix = _prefix;
    name = _name;
  }
  return {
    provider,
    prefix: prefix || "",
    name: name || ""
  };
}

const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const nuxtApp = useNuxtApp();
    const appConfig = useAppConfig();
    const props = __props;
    watch(() => appConfig.nuxtIcon?.iconifyApiOptions, () => {
      if (!appConfig.nuxtIcon?.iconifyApiOptions?.url)
        return;
      try {
        new URL(appConfig.nuxtIcon.iconifyApiOptions.url);
      } catch (e) {
        console.warn("Nuxt Icon: Invalid custom Iconify API URL");
        return;
      }
      if (appConfig.nuxtIcon?.iconifyApiOptions?.publicApiFallback) {
        addAPIProvider("custom", {
          resources: [appConfig.nuxtIcon?.iconifyApiOptions.url],
          index: 0
        });
        return;
      }
      addAPIProvider("", {
        resources: [appConfig.nuxtIcon?.iconifyApiOptions.url]
      });
    }, { immediate: true });
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      if (appConfig.nuxtIcon?.aliases?.[props.name]) {
        return appConfig.nuxtIcon.aliases[props.name];
      }
      return props.name;
    });
    const resolvedIcon = computed(() => resolveIconName(iconName.value));
    const iconKey = computed(() => [resolvedIcon.value.provider, resolvedIcon.value.prefix, resolvedIcon.value.name].filter(Boolean).join(":"));
    const icon = computed(() => state.value?.[iconKey.value]);
    const component = computed(() => nuxtApp.vueApp?.component(iconName.value));
    const sSize = computed(() => {
      if (!props.size && typeof appConfig.nuxtIcon?.size === "boolean" && !appConfig.nuxtIcon?.size) {
        return void 0;
      }
      const size = props.size || appConfig.nuxtIcon?.size || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => appConfig?.nuxtIcon?.class ?? "icon");
    async function loadIconComponent() {
      if (component.value) {
        return;
      }
      if (!state.value?.[iconKey.value]) {
        isFetching.value = true;
        state.value[iconKey.value] = await loadIcon(resolvedIcon.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(iconName, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (isFetching.value) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-ca9947e1></span>`);
      } else if (icon.value) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: icon.value,
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null, _parent));
      } else if (component.value) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
          class: className.value,
          width: sSize.value,
          height: sSize.value
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: className.value,
          style: { fontSize: sSize.value, lineHeight: sSize.value, width: sSize.value, height: sSize.value }
        }, _attrs))} data-v-ca9947e1>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.name)}`);
        }, _push, _parent);
        _push(`</span>`);
      }
    };
  }
});

const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt-icon@0.6.10_nuxt@3.11.2_vue@3.4.21/node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-ca9947e1"]]);

const Icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});

function useNuiDefaultProperty(properties, component, property) {
  const config = useAppConfig().nui;
  return computed(() => {
    return properties?.[property] ?? config?.[component]?.[property];
  });
}

const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "BaseInputHelpText",
  __ssrInlineRender: true,
  props: {
    color: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseInputHelpText", "color");
    const colors = {
      default: "text-inherit",
      "default-contrast": "text-inherit",
      muted: "text-muted-500 dark:text-muted-400",
      "muted-contrast": "text-muted-500 dark:text-muted-400",
      primary: "text-primary-500",
      info: "text-info-500",
      success: "text-success-500",
      warning: "text-warning-500",
      danger: "text-danger-500",
      light: "text-muted-100",
      dark: "text-muted-900 dark:text-muted-100",
      black: "text-black dark:text-white",
      none: ""
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-help-text", unref(color) && colors[unref(color)]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseInputHelpText.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};

function useNinjaId(id) {
  const internal = ref(toValue$1(id));
  watch(
    () => toValue$1(id),
    (value) => {
      internal.value = value || `nui-input-${crypto.randomUUID()}`;
    }
  );
  return readonly(internal);
}

const _sfc_main$D = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "BaseInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { default: void 0 },
    type: { default: "text" },
    label: { default: void 0 },
    labelFloat: { type: Boolean },
    icon: { default: void 0 },
    placeholder: { default: void 0 },
    error: { type: [String, Boolean], default: false },
    colorFocus: { type: Boolean },
    loading: { type: Boolean },
    contrast: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    classes: { default: () => ({}) }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    function looseToNumber(val) {
      const n = Number.parseFloat(val);
      return Number.isNaN(n) ? val : n;
    }
    const [modelValue, modelModifiers] = useModel(__props, "modelValue", {
      set(value) {
        if (modelModifiers.number) {
          return looseToNumber(value);
        } else if (modelModifiers.trim && typeof value === "string") {
          return value.trim();
        }
        return value;
      }
    });
    const contrast = useNuiDefaultProperty(props, "BaseInput", "contrast");
    const rounded = useNuiDefaultProperty(props, "BaseInput", "rounded");
    const size = useNuiDefaultProperty(props, "BaseInput", "size");
    const inputRef = ref();
    const id = useNinjaId(() => props.id);
    const radiuses = {
      none: "",
      sm: "nui-input-rounded-sm",
      md: "nui-input-rounded-md",
      lg: "nui-input-rounded-lg",
      full: "nui-input-rounded-full"
    };
    const sizes = {
      sm: "nui-input-sm",
      md: "nui-input-md",
      lg: "nui-input-lg"
    };
    const contrasts = {
      default: "nui-input-default",
      "default-contrast": "nui-input-default-contrast",
      muted: "nui-input-muted",
      "muted-contrast": "nui-input-muted-contrast"
    };
    __expose({
      /**
       * The underlying HTMLInputElement element.
       */
      el: inputRef,
      /**
       * The internal id of the radio input.
       */
      id
    });
    const placeholder = computed(() => {
      if (props.loading) {
        return;
      }
      if (props.labelFloat) {
        return props.label;
      }
      return props.placeholder;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseInputHelpText = _sfc_main$E;
      let _temp0, _temp1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-input-wrapper", [
          unref(contrast) && contrasts[unref(contrast)],
          unref(size) && sizes[unref(size)],
          unref(rounded) && radiuses[unref(rounded)],
          props.error && !props.loading && "nui-input-error",
          props.loading && "nui-input-loading",
          props.labelFloat && "nui-input-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-input-focus",
          props.classes?.wrapper
        ]]
      }, _attrs))}>`);
      if ("label" in _ctx.$slots && !props.labelFloat || props.label && !props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-input-label"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.outer, "nui-input-outer"])}"><div>`);
      if (unref(modelModifiers).lazy) {
        _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
          id: unref(id),
          ref_key: "inputRef",
          ref: inputRef,
          type: props.type
        }, _ctx.$attrs, {
          class: ["nui-input", props.classes?.input],
          placeholder: unref(placeholder)
        }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(modelValue)))))}>`);
      } else {
        _push(`<input${ssrRenderAttrs((_temp1 = mergeProps({
          id: unref(id),
          ref_key: "inputRef",
          ref: inputRef,
          type: props.type
        }, _ctx.$attrs, {
          class: ["nui-input", props.classes?.input],
          placeholder: unref(placeholder)
        }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, unref(modelValue)))))}>`);
      }
      if ("label" in _ctx.$slots && props.labelFloat || props.label && props.labelFloat) {
        _push(`<label${ssrRenderAttr("for", unref(id))} class="${ssrRenderClass([props.classes?.label, "nui-label-float"])}">`);
        ssrRenderSlot(_ctx.$slots, "label", {}, () => {
          _push(`${ssrInterpolate(props.label)}`);
        }, _push, _parent);
        _push(`</label>`);
      } else {
        _push(`<!---->`);
      }
      if (props.loading) {
        _push(`<div class="nui-input-placeload">`);
        _push(ssrRenderComponent(_component_BasePlaceload, { class: "nui-placeload" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (props.icon) {
        _push(`<div class="${ssrRenderClass([props.classes?.icon, "nui-input-icon"])}">`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: "nui-input-icon-inner"
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
      _push(`</div>`);
      if (props.error && typeof props.error === "string") {
        _push(ssrRenderComponent(_component_BaseInputHelpText, {
          color: "danger",
          class: props.classes?.error
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(props.error)}`);
            } else {
              return [
                createTextVNode(toDisplayString(props.error), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/form/BaseInput.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};

const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "BaseText",
  __ssrInlineRender: true,
  props: {
    lead: { default: void 0 },
    size: { default: void 0 },
    weight: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const lead = useNuiDefaultProperty(props, "BaseText", "lead");
    const size = useNuiDefaultProperty(props, "BaseText", "size");
    const weight = useNuiDefaultProperty(props, "BaseText", "weight");
    const sizes = {
      xs: "nui-content-xs",
      sm: "nui-content-sm",
      md: "nui-content-md",
      lg: "nui-content-lg",
      xl: "nui-content-xl",
      "2xl": "nui-content-2xl",
      "3xl": "nui-content-3xl",
      "4xl": "nui-content-4xl",
      "5xl": "nui-content-5xl",
      "6xl": "nui-content-6xl",
      "7xl": "nui-content-7xl",
      "8xl": "nui-content-8xl",
      "9xl": "nui-content-9xl"
    };
    const weights = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leads = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-text",
      size.value && sizes[size.value],
      weight.value && weights[weight.value],
      lead.value && leads[lead.value]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});

const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseText.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};

function useNinjaMark(_text, _search, _classes) {
  const text = toRef$1(_text);
  const classes = toRef$1(_classes);
  const search = toRef$1(_search);
  return computed(() => {
    const txt = unref(text);
    const srch = unref(search);
    if (!txt) {
      return "";
    }
    if (!srch) {
      return escapeHtml(txt);
    }
    const regex = new RegExp(srch, "gi");
    return txt.replace(regex, (part) => {
      return `<mark class="${classes.value}">${escapeHtml(part)}</mark>`;
    });
  });
}

const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "DemoAppSearchResult",
  __ssrInlineRender: true,
  props: {
    to: {},
    title: {},
    subtitle: {},
    icon: {},
    search: {}
  },
  setup(__props) {
    const props = __props;
    const markedTitle = useNinjaMark(
      () => props.title,
      () => props.search,
      "nui-text-800 group-focus:text-primary-500 underline decoration-muted-500/40 group-focus:decoration-primary-500/40 group-hover:decoration-primary-500/40 group-hover:text-primary-500 dark:group-focus:text-primary-400 dark:group-hover:text-primary-400 bg-transparent"
    );
    const markedSubtitle = useNinjaMark(
      () => props.subtitle,
      () => props.search,
      "nui-text-500 bg-transparent underline decoration-muted-500/30"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "nui-focus hover:bg-muted-50 focus:bg-muted-50 dark:hover:bg-muted-900 dark:focus:bg-muted-900 group flex items-center rounded p-3",
        to: props.to
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex grow flex-col"${_scopeId}>`);
            if (props.title) {
              _push2(`<span class="nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm"${_scopeId}>${unref(markedTitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.subtitle) {
              _push2(`<span class="nui-text-400 line-clamp-1 text-sm"${_scopeId}>${unref(markedSubtitle)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (props.icon) {
              _push2(`<div class="shrink-0"${_scopeId}><img${ssrRenderAttr("src", props.icon)} class="size-8" alt=""${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "flex grow flex-col" }, [
                props.title ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm",
                  innerHTML: unref(markedTitle)
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                props.subtitle ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "nui-text-400 line-clamp-1 text-sm",
                  innerHTML: unref(markedSubtitle)
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ]),
              props.icon ? (openBlock(), createBlock("div", {
                key: 0,
                class: "shrink-0"
              }, [
                createVNode("img", {
                  src: props.icon,
                  class: "size-8",
                  alt: ""
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppSearchResult.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};

const _sfc_main$A = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${
    ssrRenderAttrs(mergeProps({
      width: "100%",
      height: "100%",
      viewBox: "0 0 584 173",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xml:space": "preserve",
      "xmlns:serif": "http://www.serif.com/",
      style: {"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}
    }, _attrs))
  }><g transform="matrix(1,0,0,1,-2594.83,753.964)"><g id="a" transform="matrix(0.299581,-7.33761e-17,7.33761e-17,0.299581,2277.45,-753.941)"><path d="M1172.57,475.985C1105.31,440.708 1059.4,370.198 1059.4,289C1059.4,172.5 1153.9,78 1270.4,78C1283.2,78 1295.7,79.2 1307.8,81.3C1322.9,84 1334.5,93.8 1339.7,108.3C1354.8,150.5 1391.7,182.3 1436.8,190.2C1451.9,192.9 1463.6,202.7 1468.8,217.1C1477,239.5 1481.4,263.8 1481.4,289L1481.4,289.11C1481.39,323.52 1477.92,336.114 1477,341.132C1449.76,491.107 1198.95,576.297 1198.95,576.297L1148.92,489.639L1172.57,475.985ZM1270.4,181.2C1210.8,181.2 1162.5,229.5 1162.6,289C1162.6,348.5 1210.8,396.8 1270.4,396.8C1329.9,396.8 1378.2,348.6 1378.2,289C1378.2,229.5 1330,181.2 1270.4,181.2ZM1393,65.8C1393,29.5 1422.4,0 1458.8,0C1495.1,0 1524.6,29.5 1524.6,65.8C1524.6,102.1 1495.1,131.6 1458.8,131.6C1422.5,131.6 1393,102.1 1393,65.8ZM1690.73,283.946C1690.73,283.946 1690.85,283.906 1690.84,283.946C1688.05,438.568 1611.63,552.225 1527.57,577.066L1463.17,490.683C1565.04,416.491 1565.44,325.357 1565.44,280.048C1565.44,145.165 1649.89,75.172 1784.78,74.929L1855.41,74.929L1855.41,194.865L1784.78,194.865C1720.71,197.766 1691.04,216.537 1690.73,283.946ZM2164.66,576.108L2147.81,576.108C2012.93,575.865 1928.48,515.836 1928.48,370.989L1928.48,74.929L2053.76,74.929L2053.76,366.007C2053.76,434.299 2083.41,453.255 2147.81,456.172L2164.66,456.172C2229.07,453.255 2258.72,434.299 2258.72,366.007L2258.72,237.613L2384,237.613L2384,370.989C2384,515.836 2299.55,575.865 2164.66,576.108ZM2219.32,200.212L2094.03,200.212L2094.03,74.929L2219.32,74.929L2219.32,200.212ZM1729.65,362.073L1729.65,292.107C1729.65,261.557 1754.42,236.79 1784.97,236.79L1854.93,236.79L1854.93,362.073L1729.65,362.073ZM1729.65,526.758L1729.65,401.476L1854.93,401.476L1854.93,526.758L1729.65,526.758ZM2384,200.212L2258.72,200.212L2258.72,74.929L2384,74.929L2384,200.212ZM2854.35,75.878C2854.35,33.977 2888.4,-0.074 2930.3,-0.074C2972.2,-0.074 3006.26,33.977 3006.26,75.878C3006.26,117.778 2972.2,151.829 2930.3,151.829C2888.4,151.829 2854.35,117.778 2854.35,75.878ZM2712.84,89.96C2727.61,89.96 2742.04,91.345 2756.01,93.769C2773.44,96.886 2786.83,108.198 2792.83,124.935C2810.26,173.645 2852.85,210.351 2904.91,219.47C2922.34,222.587 2935.85,233.899 2941.85,250.52C2951.31,276.376 2956.39,304.425 2956.39,333.513C2956.39,467.987 2847.31,577.066 2712.84,577.066C2578.37,577.066 2469.28,467.987 2469.28,333.513C2469.28,199.04 2578.37,89.96 2712.84,89.96ZM2712.84,209.082C2644.04,209.082 2588.41,264.833 2588.41,333.513C2588.41,402.193 2644.04,457.945 2712.84,457.945C2781.52,457.945 2837.27,402.308 2837.27,333.513C2837.27,264.833 2781.63,209.082 2712.84,209.082Z" style="${
    ssrRenderStyle({"fill":"rgb(139,92,246)"})
  }"></path></g></g></svg>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../layers/tairo/components/global/TairoLogoText.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : undefined
};
const __nuxt_component_0$1 = /*#__PURE__*/_export_sfc(_sfc_main$A, [['ssrRender',_sfc_ssrRender$1]]);

const TairoLogoText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$1
});

const macLikeRE = /Mac|iP/;
function useIsMacLike() {
  const isMac = ref(false);
  tryOnBeforeMount(() => {
    if (macLikeRE.test((void 0).platform)) {
      isMac.value = true;
    }
  });
  return readonly(isMac);
}
function useMetaKey() {
  const isMac = useIsMacLike();
  return computed(() => {
    return isMac.value ? "⌘" : "ctrl";
  });
}

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}

const encodeQueryParams = (params) => {
  let encoded = jsonStringify(params);
  encoded = typeof Buffer !== "undefined" ? Buffer.from(encoded).toString("base64") : btoa(encoded);
  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  const chunks = encoded.match(/.{1,100}/g) || [];
  return chunks.join("/");
};

const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie("previewToken").value || false || void 0;
  };
  const setPreviewToken = (token) => {
    useCookie("previewToken").value = token;
    useRoute().query.preview = token || "";
  };
  const isEnabled = () => {
    const query = useRoute().query;
    if (Object.prototype.hasOwnProperty.call(query, "preview") && !query.preview) {
      return false;
    }
    if (query.preview || useCookie("previewToken").value) {
      return true;
    }
    return false;
  };
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  };
};

const withContentBase = (url) => withBase(url, useRuntimeConfig().public.content.api.baseURL);
const useContentDisabled = () => {
  console.warn("useContent is only accessible when you are using `documentDriven` mode.");
  console.warn("Learn more by visiting: https://content.nuxt.com/document-driven");
  throw new Error("useContent is only accessible when you are using `documentDriven` mode.");
};
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.node.res.setHeader(
    "x-nitro-prerender",
    [
      event.node.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const shouldUseClientDB = () => {
  useRuntimeConfig().public.content;
  {
    return false;
  }
};

const createQueryFetch = () => async (query) => {
  const { content } = useRuntimeConfig().public;
  const params = query.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/query/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/query/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./client-db-fRaG3qC5.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  const { content } = useRuntimeConfig().public;
  const queryBuilder = createQuery(createQueryFetch(), {
    initialParams: typeof query !== "string" ? query : {},
    legacy: true
  });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (content.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: content.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "DemoAppSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const isMacLike = useIsMacLike();
    const isOpen = useState("search-open", () => false);
    const search = ref("");
    onKeyStroke("k", (event) => {
      const modifier = isMacLike.value ? event.metaKey : event.ctrlKey;
      if (modifier) {
        event.preventDefault();
        isOpen.value = !isOpen.value;
      }
    });
    const { data: contentDocs } = useAsyncData(
      () => {
        if (!search.value)
          return Promise.resolve([]);
        return queryContent().where({
          $and: [
            {
              _type: "markdown",
              _draft: false,
              _partial: false
            },
            {
              $or: [
                {
                  components: { $icontains: search.value }
                },
                {
                  title: { $regex: `/${search.value.replaceAll(" ", ".*")}/i` }
                },
                {
                  _path: { $regex: `/${search.value.replaceAll(" ", ".*")}/i` }
                }
              ]
            }
          ]
        }).limit(6).find().catch(() => []);
      },
      {
        watch: [search]
      }
    , '$KyeTl6nybl');
    const router = useRouter();
    const demoPages = computed(() => {
      if (!search.value)
        return [];
      const match = [];
      const searchRe = new RegExp(search.value, "i");
      function traverseRoutes(routes) {
        for (const route of routes) {
          if (route.children) {
            traverseRoutes(route.children);
          } else if (route.path.includes(":")) {
            continue;
          } else if (route.meta?.preview?.title && searchRe.test(route.meta?.preview?.title)) {
            match.push(route);
          } else if (route.meta?.preview?.description && searchRe.test(route.meta?.preview?.description)) {
            match.push(route);
          }
        }
      }
      traverseRoutes(router.options.routes);
      return match.slice(0, 6);
    });
    const contentDocsResults = computed(() => {
      const max = 6 - Math.min(demoPages.value.length, 3);
      return contentDocs.value?.slice(0, max);
    });
    const demoPagesResults = computed(() => {
      const max = 6 - Math.min(contentDocs.value?.length || 0, 3);
      return demoPages.value?.slice(0, max);
    });
    const hasResult = computed(
      () => Boolean(contentDocsResults.value?.length || demoPagesResults.value?.length)
    );
    function onClick() {
      isOpen.value = false;
    }
    const metaKey = useMetaKey();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$I;
      const _component_BaseFocusLoop = _sfc_main$H;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseText = _sfc_main$C;
      const _component_DemoAppSearchResult = _sfc_main$B;
      const _component_TairoLogoText = __nuxt_component_0$1;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_TairoModal, {
        classes: {
          wrapper: "!items-start pt-20",
          dialog: "p-3 rounded-xl"
        },
        open: unref(isOpen),
        size: "md",
        onClose: ($event) => isOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseFocusLoop, {
              "next-keys": "ArrowDown",
              "prev-keys": "ArrowUp"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-2 pb-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseInput, mergeProps({
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    type: "search",
                    rounded: "lg",
                    icon: "lucide:search",
                    placeholder: "مثال: دکمه یا تحلیل‌ها...",
                    "color-focus": "",
                    classes: {
                      label: "w-full"
                    }
                  }, ssrGetDirectiveProps(_ctx, _directive_focus)), {
                    label: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="flex w-full justify-between"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_BaseText, {
                          weight: "medium",
                          size: "sm"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`جستجو`);
                            } else {
                              return [
                                createTextVNode("جستجو")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(hasResult)) {
                          _push4(ssrRenderComponent(_component_BaseText, {
                            size: "xs",
                            class: "block opacity-60"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` برای جابجایی با <kbd${_scopeId4}>↑</kbd> و <kbd${_scopeId4}>↓</kbd> استفاده کنید `);
                              } else {
                                return [
                                  createTextVNode(" برای جابجایی با "),
                                  createVNode("kbd", null, "↑"),
                                  createTextVNode(" و "),
                                  createVNode("kbd", null, "↓"),
                                  createTextVNode(" استفاده کنید ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else if (!unref(search)) {
                          _push4(ssrRenderComponent(_component_BaseText, {
                            size: "xs",
                            class: "block opacity-60"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` فشار دهید <kbd${_scopeId4}>${ssrInterpolate(unref(metaKey))}</kbd> + <kbd${_scopeId4}>k</kbd> برای باز کردن `);
                              } else {
                                return [
                                  createTextVNode(" فشار دهید "),
                                  createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                                  createTextVNode(" + "),
                                  createVNode("kbd", null, "k"),
                                  createTextVNode(" برای باز کردن ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "flex w-full justify-between" }, [
                            createVNode(_component_BaseText, {
                              weight: "medium",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("جستجو")
                              ]),
                              _: 1
                            }),
                            unref(hasResult) ? (openBlock(), createBlock(_component_BaseText, {
                              key: 0,
                              size: "xs",
                              class: "block opacity-60"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" برای جابجایی با "),
                                createVNode("kbd", null, "↑"),
                                createTextVNode(" و "),
                                createVNode("kbd", null, "↓"),
                                createTextVNode(" استفاده کنید ")
                              ]),
                              _: 1
                            })) : !unref(search) ? (openBlock(), createBlock(_component_BaseText, {
                              key: 1,
                              size: "xs",
                              class: "block opacity-60"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" فشار دهید "),
                                createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                                createTextVNode(" + "),
                                createVNode("kbd", null, "k"),
                                createTextVNode(" برای باز کردن ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(contentDocsResults)?.length) {
                    _push3(`<div${_scopeId2}><div class="px-3 pt-2"${_scopeId2}><span class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"${_scopeId2}> مرکز مستندات </span></div><ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(contentDocsResults), (page) => {
                      _push3(`<li class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_DemoAppSearchResult, {
                        to: page?._path,
                        search: unref(search),
                        title: page?.title,
                        subtitle: page?._path,
                        icon: page?.icon?.src,
                        onClick
                      }, null, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(demoPagesResults)?.length) {
                    _push3(`<div${_scopeId2}><div class="px-3 pt-2"${_scopeId2}><span class="nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"${_scopeId2}> صفحات نمایشی </span></div><ul${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(demoPagesResults), (page) => {
                      _push3(`<li class=""${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_DemoAppSearchResult, {
                        to: {
                          name: page?.name
                        },
                        search: unref(search),
                        title: page?.meta?.preview?.title,
                        subtitle: page?.meta?.preview?.description,
                        onClick
                      }, null, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "px-2 pb-2" }, [
                      withDirectives((openBlock(), createBlock(_component_BaseInput, {
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        type: "search",
                        rounded: "lg",
                        icon: "lucide:search",
                        placeholder: "مثال: دکمه یا تحلیل‌ها...",
                        "color-focus": "",
                        classes: {
                          label: "w-full"
                        }
                      }, {
                        label: withCtx(() => [
                          createVNode("span", { class: "flex w-full justify-between" }, [
                            createVNode(_component_BaseText, {
                              weight: "medium",
                              size: "sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("جستجو")
                              ]),
                              _: 1
                            }),
                            unref(hasResult) ? (openBlock(), createBlock(_component_BaseText, {
                              key: 0,
                              size: "xs",
                              class: "block opacity-60"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" برای جابجایی با "),
                                createVNode("kbd", null, "↑"),
                                createTextVNode(" و "),
                                createVNode("kbd", null, "↓"),
                                createTextVNode(" استفاده کنید ")
                              ]),
                              _: 1
                            })) : !unref(search) ? (openBlock(), createBlock(_component_BaseText, {
                              key: 1,
                              size: "xs",
                              class: "block opacity-60"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" فشار دهید "),
                                createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                                createTextVNode(" + "),
                                createVNode("kbd", null, "k"),
                                createTextVNode(" برای باز کردن ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])), [
                        [_directive_focus]
                      ])
                    ]),
                    unref(contentDocsResults)?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "px-3 pt-2" }, [
                        createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " مرکز مستندات ")
                      ]),
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(contentDocsResults), (page) => {
                          return openBlock(), createBlock("li", {
                            key: page?._path,
                            class: ""
                          }, [
                            createVNode(_component_DemoAppSearchResult, {
                              to: page?._path,
                              search: unref(search),
                              title: page?.title,
                              subtitle: page?._path,
                              icon: page?.icon?.src,
                              onClickPassive: onClick
                            }, null, 8, ["to", "search", "title", "subtitle", "icon"])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    unref(demoPagesResults)?.length ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode("div", { class: "px-3 pt-2" }, [
                        createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " صفحات نمایشی ")
                      ]),
                      createVNode("ul", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(demoPagesResults), (page) => {
                          return openBlock(), createBlock("li", {
                            key: page?.name,
                            class: ""
                          }, [
                            createVNode(_component_DemoAppSearchResult, {
                              to: {
                                name: page?.name
                              },
                              search: unref(search),
                              title: page?.meta?.preview?.title,
                              subtitle: page?.meta?.preview?.description,
                              onClickPassive: onClick
                            }, null, 8, ["to", "search", "title", "subtitle"])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center py-3 text-center"${_scopeId}><div class="scale-[0.8]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              weight: "medium",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` جستجو با `);
                } else {
                  return [
                    createTextVNode(" جستجو با ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TairoLogoText, { class: "text-muted-400 mx-auto w-20" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_BaseFocusLoop, {
                "next-keys": "ArrowDown",
                "prev-keys": "ArrowUp"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-2 pb-2" }, [
                    withDirectives((openBlock(), createBlock(_component_BaseInput, {
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      type: "search",
                      rounded: "lg",
                      icon: "lucide:search",
                      placeholder: "مثال: دکمه یا تحلیل‌ها...",
                      "color-focus": "",
                      classes: {
                        label: "w-full"
                      }
                    }, {
                      label: withCtx(() => [
                        createVNode("span", { class: "flex w-full justify-between" }, [
                          createVNode(_component_BaseText, {
                            weight: "medium",
                            size: "sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("جستجو")
                            ]),
                            _: 1
                          }),
                          unref(hasResult) ? (openBlock(), createBlock(_component_BaseText, {
                            key: 0,
                            size: "xs",
                            class: "block opacity-60"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" برای جابجایی با "),
                              createVNode("kbd", null, "↑"),
                              createTextVNode(" و "),
                              createVNode("kbd", null, "↓"),
                              createTextVNode(" استفاده کنید ")
                            ]),
                            _: 1
                          })) : !unref(search) ? (openBlock(), createBlock(_component_BaseText, {
                            key: 1,
                            size: "xs",
                            class: "block opacity-60"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" فشار دهید "),
                              createVNode("kbd", null, toDisplayString(unref(metaKey)), 1),
                              createTextVNode(" + "),
                              createVNode("kbd", null, "k"),
                              createTextVNode(" برای باز کردن ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])), [
                      [_directive_focus]
                    ])
                  ]),
                  unref(contentDocsResults)?.length ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "px-3 pt-2" }, [
                      createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " مرکز مستندات ")
                    ]),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(contentDocsResults), (page) => {
                        return openBlock(), createBlock("li", {
                          key: page?._path,
                          class: ""
                        }, [
                          createVNode(_component_DemoAppSearchResult, {
                            to: page?._path,
                            search: unref(search),
                            title: page?.title,
                            subtitle: page?._path,
                            icon: page?.icon?.src,
                            onClickPassive: onClick
                          }, null, 8, ["to", "search", "title", "subtitle", "icon"])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  unref(demoPagesResults)?.length ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "px-3 pt-2" }, [
                      createVNode("span", { class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider" }, " صفحات نمایشی ")
                    ]),
                    createVNode("ul", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(demoPagesResults), (page) => {
                        return openBlock(), createBlock("li", {
                          key: page?.name,
                          class: ""
                        }, [
                          createVNode(_component_DemoAppSearchResult, {
                            to: {
                              name: page?.name
                            },
                            search: unref(search),
                            title: page?.meta?.preview?.title,
                            subtitle: page?.meta?.preview?.description,
                            onClickPassive: onClick
                          }, null, 8, ["to", "search", "title", "subtitle"])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col items-center py-3 text-center" }, [
                createVNode("div", { class: "scale-[0.8]" }, [
                  createVNode(_component_BaseText, {
                    size: "xs",
                    weight: "medium",
                    class: "text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" جستجو با ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TairoLogoText, { class: "text-muted-400 mx-auto w-20" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppSearch.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};

const _sfc_main$y = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6 6 18M6 6l12 12"></path></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/icon/IconClose.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : undefined
};
const __nuxt_component_0 = /*#__PURE__*/_export_sfc(_sfc_main$y, [['ssrRender',_sfc_ssrRender]]);

const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "BaseButtonClose",
  __ssrInlineRender: true,
  props: {
    color: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseButtonClose", "color");
    const rounded = useNuiDefaultProperty(props, "BaseButtonClose", "rounded");
    const size = useNuiDefaultProperty(props, "BaseButtonClose", "size");
    const sizes = {
      xs: "nui-button-xs",
      sm: "nui-button-sm",
      md: "nui-button-md",
      lg: "nui-button-lg"
    };
    const radiuses = {
      none: "",
      sm: "nui-button-rounded-sm",
      md: "nui-button-rounded-md",
      lg: "nui-button-rounded-lg",
      full: "nui-button-rounded-full"
    };
    const colors = {
      default: "nui-button-default",
      "default-contrast": "nui-button-default-contrast",
      muted: "nui-button-muted",
      "muted-contrast": "nui-button-muted-contrast",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      none: ""
    };
    const classes = computed(() => [
      "nui-button-close",
      size.value && sizes[size.value],
      rounded.value && radiuses[rounded.value],
      color.value && colors[color.value]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconClose = __nuxt_component_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: unref(classes)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(_component_IconClose, { class: "nui-button-icon" }, null, _parent));
      }, _push, _parent);
      _push(`</button>`);
    };
  }
});

const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseButtonClose.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};

const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "BaseHeading",
  __ssrInlineRender: true,
  props: {
    as: { default: void 0 },
    size: { default: void 0 },
    lead: { default: void 0 },
    weight: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const as = useNuiDefaultProperty(props, "BaseHeading", "as");
    const lead = useNuiDefaultProperty(props, "BaseHeading", "lead");
    const size = useNuiDefaultProperty(props, "BaseHeading", "size");
    const weight = useNuiDefaultProperty(props, "BaseHeading", "weight");
    const sizes = {
      xs: "nui-heading-xs",
      sm: "nui-heading-sm",
      md: "nui-heading-md",
      lg: "nui-heading-lg",
      xl: "nui-heading-xl",
      "2xl": "nui-heading-2xl",
      "3xl": "nui-heading-3xl",
      "4xl": "nui-heading-4xl",
      "5xl": "nui-heading-5xl",
      "6xl": "nui-heading-6xl",
      "7xl": "nui-heading-7xl",
      "8xl": "nui-heading-8xl",
      "9xl": "nui-heading-9xl"
    };
    const weights = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leads = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-heading",
      size.value && sizes[size.value],
      weight.value && weights[weight.value],
      lead.value && leads[lead.value]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as ? props.as : unref(as)), mergeProps({ class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseHeading.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};

const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "BaseParagraph",
  __ssrInlineRender: true,
  props: {
    as: { default: void 0 },
    lead: { default: void 0 },
    size: { default: void 0 },
    weight: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const as = useNuiDefaultProperty(props, "BaseParagraph", "as");
    const lead = useNuiDefaultProperty(props, "BaseParagraph", "lead");
    const size = useNuiDefaultProperty(props, "BaseParagraph", "size");
    const weight = useNuiDefaultProperty(props, "BaseParagraph", "weight");
    const sizes = {
      xs: "nui-paragraph-xs",
      sm: "nui-paragraph-sm",
      md: "nui-paragraph-md",
      lg: "nui-paragraph-lg",
      xl: "nui-paragraph-xl",
      "2xl": "nui-paragraph-2xl",
      "3xl": "nui-paragraph-3xl",
      "4xl": "nui-paragraph-4xl",
      "5xl": "nui-paragraph-5xl",
      "6xl": "nui-paragraph-6xl",
      "7xl": "nui-paragraph-7xl",
      "8xl": "nui-paragraph-8xl",
      "9xl": "nui-paragraph-9xl"
    };
    const weights = {
      light: "nui-weight-light",
      normal: "nui-weight-normal",
      medium: "nui-weight-medium",
      semibold: "nui-weight-semibold",
      bold: "nui-weight-bold",
      extrabold: "nui-weight-extrabold"
    };
    const leads = {
      none: "nui-lead-none",
      tight: "nui-lead-tight",
      snug: "nui-lead-snug",
      normal: "nui-lead-normal",
      relaxed: "nui-lead-relaxed",
      loose: "nui-lead-loose"
    };
    const classes = computed(() => [
      "nui-paragraph",
      size.value && sizes[size.value],
      weight.value && weights[weight.value],
      lead.value && leads[lead.value]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as ? props.as : unref(as)), mergeProps({ class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseParagraph.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};

const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "BaseCard",
  __ssrInlineRender: true,
  props: {
    shadow: { default: void 0 },
    color: { default: void 0 },
    rounded: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseCard", "color");
    const rounded = useNuiDefaultProperty(props, "BaseCard", "rounded");
    const radiuses = {
      none: "",
      sm: "nui-card-rounded-sm",
      md: "nui-card-rounded-md",
      lg: "nui-card-rounded-lg"
    };
    const colors = {
      default: "nui-card-default",
      "default-contrast": "nui-card-default-contrast",
      muted: "nui-card-muted",
      "muted-contrast": "nui-card-muted-contrast",
      dark: "nui-card-dark",
      black: "nui-card-black",
      primary: "nui-card-primary",
      info: "nui-card-info",
      success: "nui-card-success",
      warning: "nui-card-warning",
      danger: "nui-card-danger",
      none: ""
    };
    const shadows = {
      flat: "nui-card-shadow",
      hover: "nui-card-shadow-hover"
    };
    const classes = computed(() => [
      "nui-card",
      rounded.value && radiuses[rounded.value],
      color.value && colors[color.value],
      props.shadow && shadows[props.shadow]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: unref(classes) }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseCard.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};

const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseNavigationCollapseLinks",
  __ssrInlineRender: true,
  props: {
    item: {},
    expanded: { type: Boolean }
  },
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const route = useRoute();
    const isActive = computed(() => {
      if (!props.item?.activePath) {
        return false;
      }
      return route.path.startsWith(props.item.activePath);
    });
    ref();
    const isOpen = ref(isActive.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group" }, _attrs))}><button class="${ssrRenderClass([props.expanded ? "gap-4 px-4" : "px-2 justify-center", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center rounded-lg py-3 transition-colors duration-300"])}"${ssrRenderAttr("data-nui-tooltip", props.expanded ? void 0 : _ctx.item.name)} data-nui-tooltip-position="end">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: _ctx.item.icon.name,
        class: [[_ctx.item.icon.class, unref(isActive) && "text-primary-500"], "shrink-0"]
      }, null, _parent));
      _push(`<span class="${ssrRenderClass([[
        unref(isActive) && "text-primary-500",
        !props.expanded ? "hidden" : "block"
      ], "block whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(_ctx.item.name)}</span><span class="${ssrRenderClass([!props.expanded ? "hidden" : "flex", "ms-auto items-center justify-center"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-up",
        class: ["size-4 transition-transform duration-200", !unref(isOpen) ? "rotate-180" : ""]
      }, null, _parent));
      _push(`</span></button>`);
      if (props.expanded) {
        _push(`<ul class="${ssrRenderClass([{
          "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !unref(isOpen),
          "after:border-muted-200 max-h-max opacity-100": unref(isOpen)
        }, "border-muted-200 relative block ps-4"])}"><!--[-->`);
        ssrRenderList(props.item.children, (child) => {
          _push(`<li class="border-muted-300 dark:border-muted-700 ms-2 border-s-2 first:mt-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: child.to,
            "exact-active-class": "!border-primary-500 !text-primary-500 dark:!text-primary-500",
            class: "nui-focus text-muted-500 hover:text-muted-600 dark:text-muted-400/80 dark:hover:text-muted-200 relative -start-0.5 flex cursor-pointer items-center gap-2 border-s-2 border-transparent py-2 ps-4 transition-colors duration-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: child.icon.name,
                  class: [child.icon.class, "shrink-0"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass([[!props.expanded ? "hidden" : "block"], "whitespace-nowrap font-sans text-[0.85rem]"])}"${_scopeId}>${ssrInterpolate(child.name)}</span>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: child.icon.name,
                    class: [child.icon.class, "shrink-0"]
                  }, null, 8, ["name", "class"]),
                  createVNode("span", {
                    class: ["whitespace-nowrap font-sans text-[0.85rem]", [!props.expanded ? "hidden" : "block"]]
                  }, toDisplayString(child.name), 3)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseNavigationCollapseLinks.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};

const nativeComponent = ["img", "div"];
function resolveComponentOrNative(component) {
  if (nativeComponent.includes(component))
    return component;
  return resolveComponent(component);
}

function useCssVarWithRGB(name) {
  {
    return computed(() => "transparent");
  }
}
function useTailwindColors() {
  const primary = useCssVarWithRGB();
  const success = useCssVarWithRGB();
  const info = useCssVarWithRGB();
  const warning = useCssVarWithRGB();
  const danger = useCssVarWithRGB();
  const yellow = useCssVarWithRGB();
  const title = useCssVarWithRGB();
  const subtitle = useCssVarWithRGB();
  return {
    primary,
    info,
    success,
    warning,
    danger,
    yellow,
    title,
    subtitle
  };
}
function useTailwindBreakpoints() {
  const xs = useMediaQuery("(max-width: 639px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1025px)");
  const ptablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"
  );
  const ltablet = useMediaQuery(
    "(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"
  );
  const xl = useMediaQuery("(min-width: 1280px)");
  const doublexl = useMediaQuery("(min-width: 1536px)");
  return {
    xs,
    sm,
    md,
    lg,
    ptablet,
    ltablet,
    xl,
    doublexl
  };
}

function useCollapse() {
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo?.collapse?.navigation?.enabled === false || app.tairo?.collapse?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo?.collapse?.navigation?.items?.map(
      (navigation) => ({
        ...navigation,
        position: navigation.position ?? "start"
      })
    );
  });
  const isOpen = useState("collapse-open", () => true);
  const isMobileOpen = useState("collapse-mobile-open", () => false);
  const header = computed(() => {
    return app.tairo?.collapse?.navigation?.header;
  });
  const footer = computed(() => {
    return app.tairo?.collapse?.navigation?.footer;
  });
  function toggle() {
    const { lg } = useTailwindBreakpoints();
    if (lg.value) {
      isOpen.value = !isOpen.value;
    } else {
      isMobileOpen.value = !isMobileOpen.value;
    }
  }
  return {
    toggle,
    menuItems,
    isOpen,
    isMobileOpen,
    header,
    footer
  };
}

const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, isMobileOpen, menuItems } = useCollapse();
    const app = useAppConfig();
    const startMenuItems = computed(
      () => menuItems.value?.filter(
        (sidebar) => !sidebar.position || sidebar.position === "start"
      )
    );
    const endMenuItems = computed(
      () => menuItems.value?.filter((sidebar) => sidebar.position === "end")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseNavigationCollapseLinks = _sfc_main$t;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed start-0 top-0 z-[60] flex h-full flex-col border-e bg-white transition-all duration-300", [
          !unref(isOpen) ? "w-[80px]" : "w-[280px]",
          unref(isMobileOpen) ? "translate-x-0 lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        ]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
        if (unref(app).tairo?.collapse?.navigation?.header?.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(
            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
              unref(app).tairo?.collapse?.navigation?.header?.component
            )
          ), null, null), _parent);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass([!unref(isOpen) ? "px-4" : "px-6 nui-slimscroll overflow-y-auto", "relative flex w-full grow flex-col py-6"])}">`);
      if (unref(startMenuItems)?.length) {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(startMenuItems), (item, index) => {
          _push(`<li>`);
          if (item?.component?.name) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(item?.component?.name)), item?.component?.props, null), _parent);
          } else if (item.children) {
            _push(ssrRenderComponent(_component_TairoCollapseNavigationCollapseLinks, {
              item,
              expanded: unref(isOpen),
              onClicked: ($event) => isOpen.value = true
            }, null, _parent));
          } else if (item.to) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              "data-nui-tooltip": unref(isOpen) ? void 0 : item.name,
              "data-nui-tooltip-position": "end",
              "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
              class: ["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", !unref(isOpen) ? "px-1 justify-center" : "px-4"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon.name,
                    class: item.icon.class
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"]),
                    createVNode("span", {
                      class: ["whitespace-nowrap font-sans text-sm", !unref(isOpen) ? "hidden" : "block"]
                    }, toDisplayString(item.name), 3)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.divider) {
            _push(`<div class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"></div>`);
          } else {
            _push(`<button class="${ssrRenderClass([!unref(isOpen) ? "px-1 justify-center" : "px-4", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: item.icon.name,
              class: item.icon.class
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(item.name)}</span></button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-2 grow"></div>`);
      if (unref(endMenuItems)?.length) {
        _push(`<ul class="space-y-2"><!--[-->`);
        ssrRenderList(unref(endMenuItems), (item, index) => {
          _push(`<li>`);
          if (item?.component?.name) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(item?.component?.name)), item?.component?.props, null), _parent);
          } else if (item.children) {
            _push(ssrRenderComponent(_component_TairoCollapseNavigationCollapseLinks, {
              item,
              expanded: unref(isOpen),
              onClicked: ($event) => isOpen.value = true
            }, null, _parent));
          } else if (item.to) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to,
              "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
              class: ["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", !unref(isOpen) ? "px-1 justify-center" : "px-4"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: item.icon.name,
                    class: item.icon.class
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"]),
                    createVNode("span", {
                      class: ["whitespace-nowrap font-sans text-sm", !unref(isOpen) ? "hidden" : "block"]
                    }, toDisplayString(item.name), 3)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (item.divider) {
            _push(`<div class="border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"></div>`);
          } else {
            _push(`<button class="${ssrRenderClass([!unref(isOpen) ? "px-1 justify-center" : "px-4", "nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300"])}">`);
            _push(ssrRenderComponent(_component_Icon, {
              name: item.icon.name,
              class: item.icon.class
            }, null, _parent));
            _push(`<span class="${ssrRenderClass([!unref(isOpen) ? "hidden" : "block", "whitespace-nowrap font-sans text-sm"])}">${ssrInterpolate(item.name)}</span></button>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
        if (unref(app).tairo?.collapse?.navigation?.footer?.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(
            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
              unref(app).tairo?.collapse?.navigation?.footer?.component
            )
          ), null, null), _parent);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseNavigation.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};

const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, isMobileOpen, toggle } = useCollapse();
    useTailwindBreakpoints();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_4$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        "aria-label": unref(isOpen) ? "Close navigation" : "Open navigation",
        class: "flex size-10 items-center justify-center"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        
              }, _parent));
      _push(`</button>`);
    };
  }
});

const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseBurger.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};

const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseToolbar",
  __ssrInlineRender: true,
  props: {
    collapse: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const route = useRoute();
    const showNavBurger = computed(() => {
      return props.collapse && app.tairo?.collapse?.toolbar?.showNavBurger;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseBurger = _sfc_main$r;
      const _component_BaseHeading = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if (unref(showNavBurger)) {
        _push(ssrRenderComponent(_component_TairoCollapseBurger, { class: "-ms-3" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(app).tairo?.collapse?.toolbar?.showTitle) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h1",
          size: "2xl",
          weight: "light",
          class: "text-muted-800 hidden md:block dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(unref(route).meta.title)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(unref(route).meta.title), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto"></div><!--[-->`);
      ssrRenderList(unref(app).tairo?.collapse?.toolbar?.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component
          }, tool.props), null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseToolbar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};

function usePanels() {
  const app = useAppConfig();
  const panels = computed(
    () => app.tairo?.panels?.map((panel) => ({
      ...panel,
      size: panel.size ?? "sm",
      position: panel.position ?? "left",
      overlay: panel.overlay ?? true
    })) ?? []
  );
  const currentName = useState("panels-current-name", () => "");
  const transitionFrom = useState("panels-transition-from", () => "left");
  const showOverlay = useState("panels-overlay", () => true);
  const currentProps = useState("panels-current-props", () => ({}));
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return panels.value.find((panel) => panel.name === currentName.value);
  });
  function open(name, props) {
    const panel = panels.value.find(({ name: panelName }) => panelName === name);
    if (panel) {
      transitionFrom.value = panel.position ?? "left";
      currentName.value = panel.name;
      showOverlay.value = !!panel.overlay;
      currentProps.value = defu(props ?? {}, panel.props ?? {});
    }
  }
  function close() {
    currentName.value = "";
  }
  return {
    panels,
    current,
    transitionFrom,
    currentProps,
    showOverlay,
    open,
    close
  };
}

const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "TairoPanels",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      panels,
      current,
      transitionFrom,
      currentProps,
      showOverlay,
      open,
      close
    } = usePanels();
    watch(
      [current, showOverlay],
      ([panel, value]) => {
        if (panel?.component && value) {
          (void 0).documentElement.style.overflow = "hidden";
        } else {
          (void 0).documentElement.style.overflow = "";
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        ssrRenderSlotInner(_ctx.$slots, "default", {
          panels: unref(panels),
          current: unref(current),
          transitionFrom: unref(transitionFrom),
          currentProps: unref(currentProps),
          showOverlay: unref(showOverlay),
          open: unref(open),
          close: unref(close)
        }, () => {
          ssrRenderSuspense(_push2, {
            default: () => {
              if (unref(current)?.component) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).component)), mergeProps(unref(currentProps), {
                  class: ["xs:max-w-full fixed top-0 z-[100] h-full", [
                    unref(current).position === "left" ? "start-0" : "end-0",
                    unref(current).size === "sm" && "w-96",
                    unref(current).size === "md" && "w-[460px]"
                  ]]
                }), null), _parent);
              } else {
                _push2(`<!---->`);
              }
            },
            _: 1
          });
        }, _push2, _parent, null, true);
        _push2(`<div role="button" tabindex="0" class="${ssrRenderClass([
          unref(current) && unref(showOverlay) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "bg-muted-800/60 fixed start-0 top-0 z-[99] size-full cursor-pointer transition-opacity duration-300"
        ])}"></div>`);
      }, "body", false, _parent);
    };
  }
});

const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoPanels.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};

function useNinjaWindowScroll() {
  const x = ref(0);
  const y = ref(0);
  return { x, y };
}

const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo?.collapse?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:size-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "-translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex size-12 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block size-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseCircularMenu.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "TairoCollapseLayout",
  __ssrInlineRender: true,
  props: {
    collapse: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    condensed: { type: Boolean },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { isOpen, isMobileOpen, toggle } = useCollapse();
    const collapseEnabled = computed(() => {
      return app.tairo?.collapse?.navigation?.enabled !== false && props.collapse !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo?.collapse?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return app.tairo?.collapse?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.condensed) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!collapseEnabled.value) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (isOpen.value) {
        list.push("lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]");
      } else {
        list.push("lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]");
      }
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoCollapseNavigation = _sfc_main$s;
      const _component_TairoCollapseToolbar = _sfc_main$q;
      const _component_TairoPanels = _sfc_main$p;
      const _component_TairoCollapseCircularMenu = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(collapseEnabled)) {
          _push(ssrRenderComponent(_component_TairoCollapseNavigation, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div role="button" tabindex="0" class="${ssrRenderClass([
          unref(isMobileOpen) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none",
          "bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
        ])}"></div>`);
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([
        props.condensed && !props.horizontalScroll && "w-full",
        !props.condensed && props.horizontalScroll && "mx-auto w-full",
        !props.condensed && !props.horizontalScroll && "mx-auto w-full max-w-7xl"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        if (unref(toolbarEnabled)) {
          _push(ssrRenderComponent(_component_TairoCollapseToolbar, {
            collapse: props.collapse,
            "horizontal-scroll": props.horizontalScroll
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "toolbar-title", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "toolbar-title")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoCollapseCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-collapse/components/TairoCollapseLayout.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};

function useSidebar() {
  const app = useAppConfig();
  const route = useRoute();
  const sidebars = computed(() => {
    if (app.tairo?.sidebar?.navigation?.enabled === false || app.tairo?.sidebar?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo?.sidebar?.navigation?.items;
  });
  const currentName = useState("sidebar-name", () => "");
  const isOpen = useState("sidebar-open", () => void 0);
  const hasSubsidebar = computed(() => {
    return sidebars.value?.some((sidebar) => sidebar.subsidebar?.component);
  });
  const current = computed(() => {
    if (!currentName.value) {
      return void 0;
    }
    return sidebars.value?.find(({ title }) => title === currentName.value);
  });
  function toggle() {
    if (!currentName.value && !isOpen.value) {
      if (!sidebars.value?.[0]?.title) {
        return;
      }
      currentName.value = sidebars.value[0].title;
    }
    isOpen.value = !isOpen.value;
  }
  function close(unselect = false) {
    isOpen.value = false;
    if (unselect) {
      currentName.value = "";
    }
  }
  function open(name) {
    currentName.value = name;
    isOpen.value = true;
  }
  function detect() {
    if (!app.tairo?.sidebar?.navigation?.startOpen) {
      isOpen.value = false;
      return;
    }
    const item = sidebars.value?.find(
      (bar) => bar?.activePath && route.fullPath.startsWith(bar.activePath)
    );
    if (item) {
      currentName.value = item.title;
      {
        isOpen.value = Boolean(currentName.value);
      }
    }
  }
  function setup() {
    {
      detect();
      return;
    }
  }
  return {
    sidebars,
    hasSubsidebar,
    current,
    currentName,
    isOpen,
    toggle,
    close,
    open,
    detect,
    setup
  };
}

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigationItem",
  __ssrInlineRender: true,
  props: {
    sidebar: {}
  },
  setup(__props) {
    const props = __props;
    const { currentName, isOpen } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-16 w-full items-center justify-center" }, _attrs))}><span>${ssrInterpolate(props.sidebar.order)}</span>`);
      if (props.sidebar.component) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(props.sidebar.component)), props.sidebar.props, null), _parent);
      } else if (props.sidebar.to && props.sidebar.icon) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: props.sidebar.to,
          class: "text-muted-400 flex size-12 items-center justify-center rounded-2xl transition-colors duration-300",
          "data-nui-tooltip-position": "right",
          "data-nui-tooltip": props.sidebar.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, props.sidebar.icon, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, props.sidebar.icon, null, 16)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (props.sidebar.icon) {
        _push(`<button type="button" class="${ssrRenderClass([
          unref(currentName) === props.sidebar.title ? "bg-primary-100 text-primary-500 dark:bg-primary-500/10" : "text-muted-400",
          "flex size-12 items-center justify-center rounded-2xl transition-colors duration-300"
        ])}" data-nui-tooltip-position="right"${ssrRenderAttr("data-nui-tooltip", props.sidebar.title)}>`);
        _push(ssrRenderComponent(_component_Icon, props.sidebar.icon, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarNavigationItem.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigationPanel",
  __ssrInlineRender: true,
  props: {
    subsidebar: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const { isOpen, current } = useSidebar();
    const subsidebarEnabled = computed(() => {
      return Boolean(
        props.subsidebar !== false && current.value?.subsidebar?.component
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(subsidebarEnabled)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [
            "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-e bg-white transition-all duration-300",
            unref(isOpen) ? "" : "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]"
          ]
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (unref(current)?.subsidebar?.component) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(current).subsidebar?.component)), {
              key: unref(current)?.subsidebar?.component
            }, null), _parent);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarNavigationPanel.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarNavigation",
  __ssrInlineRender: true,
  props: {
    subsidebar: { type: Boolean, default: true },
    expanded: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { isOpen, sidebars } = useSidebar();
    const startSidebars = computed(
      () => sidebars.value?.filter(
        (sidebar) => !sidebar.position || sidebar.position === "start"
      )
    );
    const endSidebars = computed(
      () => sidebars.value?.filter((sidebar) => sidebar.position === "end")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarNavigationItem = _sfc_main$m;
      const _component_TairoSidebarNavigationPanel = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10" }, _attrs))}><div class="${ssrRenderClass([
        unref(isOpen) ? "" : "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0",
        "border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-e bg-white transition-all duration-300"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<!--[-->`);
      ssrRenderList(unref(startSidebars), (item) => {
        _push(ssrRenderComponent(_component_TairoSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-auto"><!--[-->`);
      ssrRenderList(unref(endSidebars), (item) => {
        _push(ssrRenderComponent(_component_TairoSidebarNavigationItem, {
          key: item.title,
          sidebar: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "end", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoSidebarNavigationPanel, {
        subsidebar: props.subsidebar
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarNavigation.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarBurger",
  __ssrInlineRender: true,
  setup(__props) {
    const { isOpen, toggle } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "flex size-10 items-center justify-center"
      }, _attrs))}><div class="${ssrRenderClass([unref(isOpen) ? "scale-90" : "", "relative size-5"])}"><span class="${ssrRenderClass([
        unref(isOpen) ? "-rotate-45 rtl:rotate-45 max-w-[75%] top-1" : "top-0.5",
        "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
      ])}"></span><span class="${ssrRenderClass([unref(isOpen) ? "opacity-0 translate-x-4 rtl:-translate-x-4" : "", "bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300"])}"></span><span class="${ssrRenderClass([
        unref(isOpen) ? "rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1" : "bottom-0",
        "bg-primary-500 absolute block h-0.5 w-full transition-all duration-300"
      ])}"></span></div></button>`);
    };
  }
});

const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarBurger.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarTools",
  __ssrInlineRender: true,
  setup(__props) {
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(app).tairo?.sidebar?.toolbar?.tools, (tool) => {
        _push(`<!--[-->`);
        if (tool.component) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
            key: tool.component
          }, tool.props), null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});

const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarTools.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarToolbar",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { hasSubsidebar } = useSidebar();
    const route = useRoute();
    const showNavBurger = computed(() => {
      return props.sidebar && app.tairo?.sidebar?.toolbar?.showNavBurger && hasSubsidebar.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarBurger = _sfc_main$j;
      const _component_BaseHeading = _sfc_main$w;
      const _component_TairoSidebarTools = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative z-[1] mb-5 flex h-16 items-center gap-2", props.horizontalScroll && "pe-4 xl:pe-10"]
      }, _attrs))}>`);
      if (unref(showNavBurger)) {
        _push(ssrRenderComponent(_component_TairoSidebarBurger, { class: "-ms-3" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(app).tairo?.sidebar?.toolbar?.showTitle) {
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h1",
          size: "2xl",
          weight: "light",
          class: "text-muted-800 hidden md:block dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(unref(route).meta.title)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(unref(route).meta.title), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ms-auto"></div>`);
      _push(ssrRenderComponent(_component_TairoSidebarTools, { class: "h-16" }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarToolbar.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo?.sidebar?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:size-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "-translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex size-12 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block size-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarCircularMenu.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "TairoSidebarLayout",
  __ssrInlineRender: true,
  props: {
    sidebar: { type: Boolean, default: true },
    subsidebar: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    horizontalScroll: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    const { setup, currentName, isOpen, toggle } = useSidebar();
    setup();
    const sidebarEnabled = computed(() => {
      return app.tairo?.sidebar?.navigation?.enabled !== false && props.sidebar !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo?.sidebar?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return app.tairo?.sidebar?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const wrapperClass = computed(() => {
      if (!sidebarEnabled.value) {
        return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (isOpen.value) {
        list.push("xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]");
      } else {
        list.push("xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]");
      }
      if (props.horizontalScroll) {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarNavigation = _sfc_main$k;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoSidebarToolbar = _sfc_main$h;
      const _component_TairoPanels = _sfc_main$p;
      const _component_TairoSidebarCircularMenu = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-muted-100 dark:bg-muted-900 pb-20" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        if (unref(sidebarEnabled)) {
          _push(ssrRenderComponent(_component_TairoSidebarNavigation, {
            subsidebar: props.subsidebar
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(app).tairo?.sidebar?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center justify-center"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "logo", {}, () => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(app).tairo?.sidebar?.navigation.logo.component
                            )
                          ), unref(app).tairo?.sidebar?.navigation.logo.props, null), _parent3, _scopeId2);
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(
                              ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                                unref(app).tairo?.sidebar?.navigation.logo.component
                              )
                            ), unref(app).tairo?.sidebar?.navigation.logo.props, null, 16))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(app).tairo?.sidebar?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center justify-center"
                  }, [
                    renderSlot(_ctx.$slots, "logo", {}, () => [
                      createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "flex items-center justify-center"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(
                              unref(app).tairo?.sidebar?.navigation.logo.component
                            )
                          ), unref(app).tairo?.sidebar?.navigation.logo.props, null, 16))
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div role="button" tabindex="0" class="${ssrRenderClass([
          unref(isOpen) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none",
          "bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block size-full transition-opacity duration-300 lg:hidden"
        ])}"></div>`);
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(wrapperClass))}"><div class="${ssrRenderClass([
        props.horizontalScroll && "mx-auto w-full",
        !props.horizontalScroll && "mx-auto w-full max-w-7xl"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        if (unref(toolbarEnabled)) {
          _push(ssrRenderComponent(_component_TairoSidebarToolbar, {
            sidebar: props.sidebar,
            "horizontal-scroll": props.horizontalScroll
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "toolbar-title", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "toolbar-title")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoSidebarCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/components/TairoSidebarLayout.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};

const useNinjaButton = (properties, {
  // @todo: make this configurable (design tokens)
  externalDefaultRelationship = "noopener noreferrer",
  externalDefaultTarget = "_blank"
} = {}) => {
  const NuxtLink = defineNuxtLink({});
  const is = computed(
    () => properties.to ? NuxtLink : properties.href ? "a" : "button"
  );
  const type = computed(() => {
    if (is.value === "button") {
      return properties.type || "button";
    }
    return;
  });
  const external = computed(() => {
    if (typeof properties.to === "string" && properties.to.startsWith("http")) {
      return true;
    } else if (typeof properties.to === "object" && "path" in properties.to && properties.to.path?.startsWith("http")) {
      return true;
    }
    return false;
  });
  const relationship = computed(() => {
    if (!external.value) {
      return properties.rel;
    }
    return properties.rel ?? externalDefaultRelationship;
  });
  const target = computed(() => {
    if (!external.value) {
      return properties.target;
    }
    return properties.target ?? externalDefaultTarget;
  });
  const attributes = computed(() => ({
    to: properties.disabled ? void 0 : properties.to,
    href: properties.disabled ? void 0 : properties.href,
    disabled: properties.disabled,
    type: type.value,
    rel: relationship.value,
    target: target.value
  }));
  return {
    attributes,
    is
  };
};

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    to: { default: void 0 },
    href: { default: void 0 },
    rel: { default: "" },
    target: { default: "" },
    type: { default: void 0 },
    shadow: { default: void 0 },
    badge: { type: Boolean },
    badgePulse: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    color: { default: void 0 },
    rounded: { default: void 0 },
    size: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(__props) {
    const props = __props;
    const color = useNuiDefaultProperty(props, "BaseButton", "color");
    const rounded = useNuiDefaultProperty(props, "BaseButton", "rounded");
    const size = useNuiDefaultProperty(props, "BaseButton", "size");
    const variant = useNuiDefaultProperty(props, "BaseButton", "variant");
    const badgeColors = {
      primary: "nui-badge-primary",
      info: "nui-badge-info",
      success: "nui-badge-success",
      warning: "nui-badge-warning",
      danger: "nui-badge-danger",
      none: "",
      default: "",
      "default-contrast": "",
      light: "",
      dark: "",
      black: "",
      muted: "",
      "muted-contrast": ""
    };
    const sizes = {
      sm: "nui-button-sm",
      md: "nui-button-md",
      lg: "nui-button-lg",
      xl: "nui-button-xl"
    };
    const radiuses = {
      none: "",
      sm: "nui-button-rounded-sm",
      md: "nui-button-rounded-md",
      lg: "nui-button-rounded-lg",
      full: "nui-button-rounded-full"
    };
    const variants = {
      solid: "nui-button-solid",
      pastel: "nui-button-pastel",
      outline: "nui-button-outline"
    };
    const colors = {
      none: "",
      default: "nui-button-default",
      "default-contrast": "nui-button-default-contrast",
      primary: "nui-button-primary",
      info: "nui-button-info",
      success: "nui-button-success",
      warning: "nui-button-warning",
      danger: "nui-button-danger",
      muted: "nui-button-muted",
      "muted-contrast": "nui-button-muted-contrast",
      light: "nui-button-light",
      dark: "nui-button-dark",
      black: "nui-button-black"
    };
    const shadows = {
      flat: "nui-button-shadow",
      hover: "nui-button-shadow-hover"
    };
    const classes = computed(() => [
      "nui-button",
      props.loading && "nui-button-loading",
      size.value && sizes[size.value],
      rounded.value && radiuses[rounded.value],
      variant.value && variants[variant.value],
      color.value && colors[color.value],
      props.shadow && shadows[props.shadow]
    ]);
    const { attributes, is } = useNinjaButton(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(is)), mergeProps(unref(attributes), { class: unref(classes) }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!props.loading) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(ssrRenderComponent(_component_BasePlaceload, { class: "h-4 w-12 rounded" }, null, _parent2, _scopeId));
            }
            if (props.badge) {
              _push2(`<span class="${ssrRenderClass([badgeColors[unref(color)], "nui-button-badge"])}"${_scopeId}>`);
              if (props.badgePulse) {
                _push2(`<span class="nui-button-badge-pulse"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="nui-button-badge-inner"${_scopeId}></span></span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !props.loading ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_BasePlaceload, {
                key: 1,
                class: "h-4 w-12 rounded"
              })),
              props.badge ? (openBlock(), createBlock("span", {
                key: 2,
                class: ["nui-button-badge", badgeColors[unref(color)]]
              }, [
                props.badgePulse ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "nui-button-badge-pulse"
                })) : createCommentVNode("", true),
                createVNode("span", { class: "nui-button-badge-inner" })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});

const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BaseButton.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};

function useTopnav() {
  const route = useRoute();
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo?.topnav?.navigation?.enabled === false || app.tairo?.topnav?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo?.topnav?.navigation?.items?.map(
      (navigation) => ({
        ...navigation
      })
    );
  });
  const isMobileOpen = useState("collapse-open", () => false);
  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item) => {
      if (item.activePath) {
        return route.path.startsWith(item.activePath);
      }
      if (item.to) {
        return route.path.startsWith(item.to.toString());
      }
      return false;
    });
  });
  const selectedMenuItem = useState(
    "topnav-selected-menu-item",
    () => activeMenuItem.value
  );
  watch(activeMenuItem, (item) => {
    selectedMenuItem.value = item;
  });
  return {
    menuItems,
    activeMenuItem,
    selectedMenuItem,
    isMobileOpen
  };
}

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavNavigation",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-md" },
    position: { default: "absolute" }
  },
  setup(__props) {
    const props = __props;
    const { menuItems, isMobileOpen } = useTopnav();
    useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_BaseButton = _sfc_main$e;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-800 border-muted-200 dark:border-muted-700 start-0 top-0 z-40 w-full border-b bg-white transition-all duration-300", [
          props.position === "fixed" && "fixed",
          props.position === "absolute" && "absolute"
        ]]
      }, _attrs))}><nav class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full pe-4",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl px-4 lg:px-0",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl px-4 lg:px-0",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl px-4 lg:px-0",
        props.display === "expanded-xl" && "mx-auto w-full px-4 lg:px-0"
      ], "relative"])}"><div class="flex w-full flex-col items-center justify-between md:h-16 md:flex-row"><div class="w-full grow md:w-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="${ssrRenderClass([unref(isMobileOpen) ? "flex" : "hidden", "dark:bg-muted-800 fixed start-0 top-0 z-20 w-full grow items-center bg-white p-3 md:static md:z-0 md:block md:w-auto md:bg-transparent md:p-0"])}"><div class="me-auto block md:hidden">`);
      _push(ssrRenderComponent(_component_BaseButtonClose, {
        color: "muted",
        rounded: "full",
        onClick: ($event) => isMobileOpen.value = false
      }, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "#",
          color: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` شروع کنید `);
            } else {
              return [
                createTextVNode(" شروع کنید ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div></div></nav><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "flex items-center"])}"><div class="flex overflow-x-auto lg:overflow-x-hidden"><!--[-->`);
      ssrRenderList(unref(menuItems), (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.to,
          class: "text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300",
          "exact-active-class": "!border-primary-500 !text-muted-800 dark:!text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});

const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavNavigation.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo?.collapse?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed bottom-[0.6em] end-[1em] z-[90] rotate-90 transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:size-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex size-12 -rotate-90 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block size-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex -rotate-90 items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavCircularMenu.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavFooter",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const config = useAppConfig().tairo.topnav?.footer;
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t" }, _attrs))}>`);
      if (unref(config)?.logoSeparator?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "رفتن به خانه",
          class: "dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logoSeparator.component)), unref(config).logoSeparator.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logoSeparator.component)), unref(config).logoSeparator.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row"])}">`);
      if (unref(config)?.logo?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "رفتن به خانه",
          class: "ltablet:w-1/5 block w-full lg:w-1/5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logo.component)), unref(config).logo.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logo.component)), unref(config).logo.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="ltablet:w-1/5 block w-full lg:w-1/5"></div>`);
      }
      _push(`<div class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(config)?.links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          rel: link.rel,
          target: link.target,
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end">`);
      if (unref(config)?.copyright?.name && unref(config)?.copyright?.to) {
        _push(`<span class="inline-flex gap-1"><span>©</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(config).copyright.to,
          target: "_blank",
          rel: "noopener",
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(config).copyright.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(config).copyright.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(config)?.copyright?.since) {
          _push(`<span>${ssrInterpolate(unref(config).copyright.since)}-${ssrInterpolate(unref(year))}.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavFooter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TairoTopnavLayout",
  __ssrInlineRender: true,
  props: {
    topnav: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const config = useAppConfig().tairo?.topnav;
    const { isMobileOpen } = useTopnav();
    const topnavEnabled = computed(() => {
      return config?.navigation?.enabled !== false && props.topnav !== false;
    });
    const toolbarEnabled = computed(() => {
      return config?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return config?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.display === "condensed") {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!topnavEnabled.value) {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (props.display === "horizontal-scroll") {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoTopnavNavigation = _sfc_main$d;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseHeading = _sfc_main$w;
      const _component_Icon = __nuxt_component_2;
      const _component_TairoPanels = _sfc_main$p;
      const _component_TairoTopnavCircularMenu = _sfc_main$c;
      const _component_TairoTopnavFooter = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="dark:bg-muted-900 bg-muted-50 pb-20">`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(topnavEnabled)) {
          _push(ssrRenderComponent(_component_TairoTopnavNavigation, {
            display: props.display,
            position: "fixed"
          }, {
            toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(toolbarEnabled)) {
                  _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-4 md:gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(config)?.toolbar?.tools, (tool) => {
                    _push2(`<!--[-->`);
                    if (tool.component) {
                      ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                        key: tool.component
                      }, tool.props), null), _parent2, _scopeId);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(toolbarEnabled) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "flex items-center justify-end gap-4 md:gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(config)?.toolbar?.tools, (tool) => {
                        return openBlock(), createBlock(Fragment, null, [
                          tool.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                            key: tool.component
                          }, tool.props), null, 16)) : createCommentVNode("", true)
                        ], 64);
                      }), 256))
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(config)?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center gap-x-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "flex items-center justify-center"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation.logo.component)
                        ), unref(config)?.navigation.logo.props, null), _parent3, _scopeId2);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation.logo.component)
                          ), unref(config)?.navigation.logo.props, null, 16))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  if (unref(config)?.toolbar?.showTitle) {
                    _push2(ssrRenderComponent(_component_BaseHeading, {
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden md:block dark:text-white"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(unref(route).meta.title)}`);
                          }, _push3, _parent3, _scopeId2);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(unref(route).meta.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (unref(config)?.navigation?.header?.component) {
                    ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(
                      ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation?.header?.component)
                    ), unref(config)?.navigation?.header?.props, null), _parent2, _scopeId);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div class="flex items-center justify-center md:hidden"${_scopeId}><button type="button"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "lucide:menu",
                    class: "text-muted-400 size-6"
                  }, null, _parent2, _scopeId));
                  _push2(`</button></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(config)?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center gap-x-4"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation.logo.component)
                        ), unref(config)?.navigation.logo.props, null, 16))
                      ]),
                      _: 1
                    }),
                    unref(config)?.toolbar?.showTitle ? (openBlock(), createBlock(_component_BaseHeading, {
                      key: 0,
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden md:block dark:text-white"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(unref(route).meta.title), 1)
                        ])
                      ]),
                      _: 3
                    })) : createCommentVNode("", true),
                    unref(config)?.navigation?.header?.component ? (openBlock(), createBlock(resolveDynamicComponent(
                      ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation?.header?.component)
                    ), mergeProps({ key: 1 }, unref(config)?.navigation?.header?.props), null, 16)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex items-center justify-center md:hidden" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => isMobileOpen.value = true
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:menu",
                          class: "text-muted-400 size-6"
                        })
                      ], 8, ["onClick"])
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "pt-40 md:pt-36"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoTopnavCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(config)?.footer?.enabled) {
        _push(ssrRenderComponent(_component_TairoTopnavFooter, {
          display: props.display
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-topnav/components/TairoTopnavLayout.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

function useIconnav() {
  const route = useRoute();
  const app = useAppConfig();
  const menuItems = computed(() => {
    if (app.tairo.iconnav?.navigation?.enabled === false || app.tairo.iconnav?.navigation?.items?.length === 0) {
      return [];
    }
    return app.tairo.iconnav?.navigation?.items?.map(
      (navigation) => ({
        ...navigation
      })
    );
  });
  const activeMenuItem = computed(() => {
    return menuItems.value?.find((item) => {
      if (item.activePath) {
        return route.path.startsWith(item.activePath);
      }
      if (item.to) {
        return route.path.startsWith(item.to.toString());
      }
      return false;
    });
  });
  const selectedMenuItem = useState(
    "iconnav-selected-menu-item",
    () => activeMenuItem.value
  );
  watch(activeMenuItem, (item) => {
    selectedMenuItem.value = item;
  });
  return {
    menuItems,
    activeMenuItem,
    selectedMenuItem
  };
}

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TairoIconnavNavigation",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-lg" },
    position: { default: "absolute" }
  },
  setup(__props) {
    const props = __props;
    useState("search-open", () => false);
    const metaKey = useMetaKey();
    const { menuItems, selectedMenuItem } = useIconnav();
    useAppConfig();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_BaseText = _sfc_main$C;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["dark:bg-muted-950 border-muted-200 dark:border-muted-800 start-0 top-0 z-40 w-full border-b bg-white transition-all duration-300", [
          props.position === "fixed" && "fixed",
          props.position === "absolute" && "absolute"
        ]]
      }, _attrs))}><nav class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full pe-4",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl px-4 xl:px-0",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl px-4 xl:px-0",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl px-4 xl:px-0",
        props.display === "expanded-xl" && "mx-auto w-full px-4 xl:px-0"
      ], "relative"])}"><div class="flex h-20 w-full items-center justify-between"><div class="w-1/5 md:w-1/4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="ltablet:flex hidden grow justify-center gap-x-6 lg:flex"><!--[-->`);
      ssrRenderList(unref(menuItems), (item, index) => {
        _push(`<div class="text-center">`);
        if (item.children) {
          _push(`<button type="button" class="${ssrRenderClass([
            unref(selectedMenuItem)?.activePath === item.activePath && "[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 dark:[&>div]:!bg-primary-500/20 [&>p]:!text-primary-500",
            "group flex flex-col"
          ])}"><div class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: item.icon.name,
            class: item.icon.class
          }, null, _parent));
          _push(`</div><p class="text-muted-400 w-full text-center font-sans text-xs">${ssrInterpolate(item.name)}</p></button>`);
        } else if (item.to) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "group flex flex-col",
            to: item.to,
            "exact-active-class": "[&>div]:!bg-primary-500/10 dark:[&>div]:!bg-primary-500/20 [&>div]:!text-primary-500 [&>p]:!text-primary-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon.name,
                  class: item.icon.class
                }, null, _parent2, _scopeId));
                _push2(`</div><p class="text-muted-400 w-full text-center font-sans text-xs"${_scopeId}>${ssrInterpolate(item.name)}</p>`);
              } else {
                return [
                  createVNode("div", { class: "text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300" }, [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"])
                  ]),
                  createVNode("p", { class: "text-muted-400 w-full text-center font-sans text-xs" }, toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<button type="button" class="group flex flex-col"><div class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-800 dark:group-hover:text-muted-300 relative mx-auto flex size-11 items-center justify-center rounded-xl transition-colors duration-300">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: item.icon.name,
            class: item.icon.class
          }, null, _parent));
          _push(`</div><p class="text-muted-400 w-full text-center font-sans text-xs">${ssrInterpolate(item.name)}</p></button>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="w-4/5 md:w-1/4">`);
      ssrRenderSlot(_ctx.$slots, "toolbar", {}, () => {
        _push(ssrRenderComponent(_component_BaseButton, {
          to: "#",
          color: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` شروع کنید `);
            } else {
              return [
                createTextVNode(" شروع کنید ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }, _push, _parent);
      _push(`</div></div></nav><div class="ltablet:hidden flex grow justify-center gap-x-6 pb-4 lg:hidden"><!--[-->`);
      ssrRenderList(unref(menuItems), (item, index) => {
        _push(`<div class="text-center">`);
        if (item.children) {
          _push(`<button type="button" class="${ssrRenderClass([
            unref(selectedMenuItem)?.activePath === item.activePath && "[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 [&>p]:!text-primary-500",
            "group flex flex-col"
          ])}"><div class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: item.icon.name,
            class: item.icon.class
          }, null, _parent));
          _push(`</div></button>`);
        } else if (item.to) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "group flex flex-col",
            to: item.to,
            "exact-active-class": "[&>div]:!bg-primary-500/10 [&>div]:!text-primary-500 [&>p]:!text-primary-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon.name,
                  class: item.icon.class
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300" }, [
                    createVNode(_component_Icon, {
                      name: item.icon.name,
                      class: item.icon.class
                    }, null, 8, ["name", "class"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<button type="button" class="group flex flex-col"><div class="text-muted-400 group-hover:bg-muted-100 group-hover:text-muted-600 dark:group-hover:bg-muted-700 dark:group-hover:text-muted-300 relative mx-auto flex size-12 items-center justify-center rounded-xl transition-colors duration-300">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: item.icon.name,
            class: item.icon.class
          }, null, _parent));
          _push(`</div></button>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([[
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "flex items-center"])}"><div class="flex overflow-x-auto lg:overflow-x-hidden"><!--[-->`);
      ssrRenderList(unref(selectedMenuItem)?.children, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: item.to,
          class: "text-muted-400 hover:text-muted-500 dark:text-muted-600 dark:hover:text-muted-400 ltablet:pt-5 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300 lg:pt-5",
          "exact-active-class": "!border-primary-500 !text-muted-800 dark:!text-muted-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseText, { size: "sm" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.name), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(selectedMenuItem)?.children) {
        _push(`<div class="ltablet:block ms-auto hidden pe-4 lg:block xl:pe-0"><button type="button" class="bg-muted-100 dark:bg-muted-900 border-muted-100 dark:border-muted-800 text-muted-400 dark:text-muted-500 hover:text-primary-500 dark:hover:text-primary-500 group flex items-center gap-2 rounded-xl border py-1 pe-1 ps-3" aria-label="Open search">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:search",
          class: "size-4 motion-safe:transition-colors motion-safe:duration-300"
        }, null, _parent));
        _push(`<span class="dark:bg-muted-800 border-muted-200 dark:border-muted-700 group-hover:text-muted-600 dark:group-hover:text-muted-100 rounded-lg border bg-white px-2 py-0.5 shadow motion-safe:transition-colors motion-safe:duration-300"><kbd class="font-sans text-sm tracking-wide">${ssrInterpolate(unref(metaKey))} + k </kbd></span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-iconnav/components/TairoIconnavNavigation.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TairoIconnavCircularMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { y } = useNinjaWindowScroll();
    const app = useAppConfig();
    const isOpened = ref(false);
    const isScrolled = computed(() => {
      if (y.value < 60) {
        isOpened.value = false;
      }
      return y.value > 60;
    });
    const toolOffsets = [
      "translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]",
      "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]",
      "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]",
      "translate-x-[0em] translate-y-[6.5em]"
    ];
    const tools = computed(() => {
      return app.tairo.iconnav?.circularMenu?.tools?.slice(0, 4) || [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed bottom-[0.6em] end-[1em] z-[90] rotate-90 transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:size-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [
          unref(isOpened) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "",
          unref(isScrolled) ? "" : "translate-y-24"
        ]]
      }, _attrs))}><button type="button" class="bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex size-12 -rotate-90 items-center justify-center rounded-full text-white shadow-lg"><span class="${ssrRenderClass([unref(isOpened) ? "scale-90 top-0" : "-top-0.5", "relative block size-3 transition-all duration-300"])}"><span class="${ssrRenderClass([unref(isOpened) ? "-rotate-45 top-1" : "top-0.5", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "opacity-0 translate-x-4" : "", "bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300"])}"></span><span class="${ssrRenderClass([unref(isOpened) ? "rotate-45 bottom-1.5" : "bottom-0", "bg-muted-50 absolute block h-0.5 w-full transition-all duration-300"])}"></span></span></button><div><!--[-->`);
      ssrRenderList(unref(tools), (tool, idx) => {
        _push(`<!--[-->`);
        if (tool.component) {
          _push(`<div class="${ssrRenderClass([unref(isOpened) ? toolOffsets[idx] : "translate-x-0 translate-y-0", "absolute end-[0.2em] top-[0.2em] z-20 flex -rotate-90 items-center justify-center transition-all duration-300"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), tool.props, null), _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-iconnav/components/TairoIconnavCircularMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TairoIconnavFooter",
  __ssrInlineRender: true,
  props: {
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const config = useAppConfig().tairo.iconnav?.footer;
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t" }, _attrs))}>`);
      if (unref(config)?.logoSeparator?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logoSeparator.component)), unref(config).logoSeparator.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logoSeparator.component)), unref(config).logoSeparator.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([[
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full"
      ], "ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row"])}">`);
      if (unref(config)?.logo?.component) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "aria-label": "Go to homepage",
          class: "ltablet:w-1/5 block w-full lg:w-1/5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logo.component)), unref(config).logo.props, null), _parent2, _scopeId);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config).logo.component)), unref(config).logo.props, null, 16))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="ltablet:w-1/5 block w-full lg:w-1/5"></div>`);
      }
      _push(`<div class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(config)?.links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          rel: link.rel,
          target: link.target,
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end">`);
      if (unref(config)?.copyright?.name && unref(config)?.copyright?.to) {
        _push(`<span class="inline-flex gap-1"><span>©</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(config).copyright.to,
          target: "_blank",
          rel: "noopener",
          class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(config).copyright.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(config).copyright.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(config)?.copyright?.since) {
          _push(`<span>${ssrInterpolate(unref(config).copyright.since)}-${ssrInterpolate(unref(year))}.</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-iconnav/components/TairoIconnavFooter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TairoIconnavLayout",
  __ssrInlineRender: true,
  props: {
    topnav: { type: Boolean, default: true },
    toolbar: { type: Boolean, default: true },
    circularMenu: { type: Boolean, default: true },
    display: { default: "expanded-lg" }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const app = useAppConfig();
    const config = useAppConfig().tairo.iconnav;
    const { selectedMenuItem } = useIconnav();
    const iconnavEnabled = computed(() => {
      return config?.navigation?.enabled !== false;
    });
    const toolbarEnabled = computed(() => {
      return app.tairo.collapse?.toolbar?.enabled !== false && props.toolbar !== false;
    });
    const circularMenuEnabled = computed(() => {
      return config?.circularMenu?.enabled !== false && props.circularMenu !== false;
    });
    const mainClass = computed(() => {
      if (props.display === "condensed") {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
      }
      if (!iconnavEnabled.value) {
        return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
      }
      const list = [
        "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"
      ];
      if (props.display === "horizontal-scroll") {
        list.push("!pe-0 xl:!pe-0");
      }
      return list;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoIconnavNavigation = _sfc_main$9;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_BaseHeading = _sfc_main$w;
      const _component_TairoPanels = _sfc_main$p;
      const _component_TairoIconnavCircularMenu = _sfc_main$8;
      const _component_TairoIconnavFooter = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="dark:bg-muted-900 bg-muted-50 pb-20">`);
      ssrRenderSlot(_ctx.$slots, "navigation", {}, () => {
        if (unref(iconnavEnabled)) {
          _push(ssrRenderComponent(_component_TairoIconnavNavigation, {
            display: props.display,
            position: "fixed"
          }, {
            toolbar: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(toolbarEnabled)) {
                  _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(config)?.toolbar?.tools, (tool) => {
                    _push2(`<!--[-->`);
                    if (tool.component) {
                      ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                        key: tool.component
                      }, tool.props), null), _parent2, _scopeId);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`<!--]-->`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(toolbarEnabled) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(config)?.toolbar?.tools, (tool) => {
                        return openBlock(), createBlock(Fragment, null, [
                          tool.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(tool.component)), mergeProps({
                            key: tool.component
                          }, tool.props), null, 16)) : createCommentVNode("", true)
                        ], 64);
                      }), 256))
                    ])
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(config)?.navigation?.logo?.component) {
                  _push2(`<div class="flex h-16 w-full items-center gap-x-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "flex items-center justify-center"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation.logo.component)
                        ), unref(config)?.navigation.logo.props, null), _parent3, _scopeId2);
                      } else {
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(
                            ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation.logo.component)
                          ), unref(config)?.navigation.logo.props, null, 16))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  if (unref(config)?.toolbar?.showTitle) {
                    _push2(ssrRenderComponent(_component_BaseHeading, {
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden md:block dark:text-white"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                            _push3(`${ssrInterpolate(unref(route).meta.title)}`);
                          }, _push3, _parent3, _scopeId2);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", {}, () => [
                              createTextVNode(toDisplayString(unref(route).meta.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 3
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(config)?.navigation?.logo?.component ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex h-16 w-full items-center gap-x-4"
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "flex items-center justify-center"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(
                          ("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(config)?.navigation.logo.component)
                        ), unref(config)?.navigation.logo.props, null, 16))
                      ]),
                      _: 1
                    }),
                    unref(config)?.toolbar?.showTitle ? (openBlock(), createBlock(_component_BaseHeading, {
                      key: 0,
                      as: "h1",
                      size: "lg",
                      weight: "light",
                      class: "text-muted-800 hidden md:block dark:text-white"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "title", {}, () => [
                          createTextVNode(toDisplayString(unref(route).meta.title), 1)
                        ])
                      ]),
                      _: 3
                    })) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="${ssrRenderClass(unref(mainClass))}"><div class="${ssrRenderClass([
        props.display === "condensed" && "w-full",
        props.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto",
        props.display === "expanded-sm" && "mx-auto w-full max-w-5xl",
        props.display === "expanded-md" && "mx-auto w-full max-w-6xl",
        props.display === "expanded-lg" && "mx-auto w-full max-w-7xl",
        props.display === "expanded-xl" && "mx-auto w-full",
        unref(selectedMenuItem)?.children ? "ltablet:pt-36 pt-60 lg:pt-44" : "pt-24"
      ])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_TairoPanels, null, null, _parent));
      if (unref(circularMenuEnabled)) {
        _push(ssrRenderComponent(_component_TairoIconnavCircularMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(config)?.footer?.enabled) {
        _push(ssrRenderComponent(_component_TairoIconnavFooter, {
          display: props.display
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-iconnav/components/TairoIconnavLayout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

function useLayoutSwitcher() {
  const layouts = [
    {
      name: "sidebar",
      label: "سایدبار",
      component: _sfc_main$f
    },
    {
      name: "collapse",
      label: "جمع‌شونده",
      component: _sfc_main$n
    },
    {
      name: "topnav",
      label: "نوار ابزار بالا",
      component: _sfc_main$a
    },
    {
      name: "iconnav",
      label: "ناوبری آیکون",
      component: _sfc_main$6
    }
  ];
  const activeLayoutName = useState("layout-switcher-active", () => "sidebar");
  const activeLayout = computed(() => {
    return layouts.find((layout) => layout.name === activeLayoutName.value);
  });
  const activeLayoutComponent = computed(() => {
    return activeLayout.value?.component || _sfc_main$f;
  });
  return {
    layouts,
    activeLayout,
    activeLayoutName,
    activeLayoutComponent
  };
}

const EMPTY_COLOR = "0 0 0";
const colorToRgb = (color) => {
  if (!color) {
    return EMPTY_COLOR;
  }
  return chroma(color).rgb().map((v) => {
    if (Number.isNaN(v)) {
      return 0;
    }
    return Math.round(v);
  }).slice(0, 3).join(" ");
};
function switchColorShades(name, shades2) {
  Object.entries(shades2).forEach(([shade, color]) => {
    switchColor(name, shade, color);
  });
}
function switchColor(name, shade, color) {
  const rgb = colorToRgb(color);
  (void 0).document.documentElement.style.setProperty(
    `--color-${name}-${shade}`,
    rgb
  );
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DemoAppLayoutSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { layouts, activeLayoutName } = useLayoutSwitcher();
    const route = useRoute();
    const isSwitcherOpen = useState("switcher-open", () => false);
    const currentPrimary = ref("violet");
    const currentMuted = ref("slate");
    watch([currentPrimary, currentMuted], closeModal);
    const canChangeLayout = computed(
      () => !route.meta.layout || route.meta.layout === "default"
    );
    const primaryPresets = [
      {
        name: "indigo",
        label: "نیلی",
        shades: colors.indigo,
        class: "bg-indigo-500"
      },
      {
        name: "sky",
        label: "آسمانی",
        shades: colors.sky,
        class: "bg-sky-500"
      },
      {
        name: "purple",
        label: "بنفش",
        shades: colors.purple,
        class: "bg-purple-500"
      },
      {
        name: "violet",
        label: "ارغوانی",
        shades: colors.violet,
        class: "bg-violet-500"
      },
      {
        name: "lime",
        label: "لیمویی",
        shades: colors.lime,
        class: "bg-lime-500"
      },
      {
        name: "teal",
        label: "سبز آبی",
        shades: colors.teal,
        class: "bg-teal-500"
      },
      {
        name: "emerald",
        label: "زمردی",
        shades: colors.emerald,
        class: "bg-emerald-500"
      },
      {
        name: "rose",
        label: "رز",
        shades: colors.rose,
        class: "bg-rose-500"
      },
      {
        name: "pink",
        label: "صورتی",
        shades: colors.pink,
        class: "bg-pink-500"
      },
      {
        name: "yellow",
        label: "زرد",
        shades: colors.yellow,
        class: "bg-yellow-500"
      },
      {
        name: "orange",
        label: "نارنجی",
        shades: colors.orange,
        class: "bg-orange-500"
      },
      {
        name: "mauve",
        label: "سفارشی",
        shades: {
          50: "#EEECF9",
          100: "#DCD8F3",
          200: "#B6AEE5",
          300: "#9488D8",
          400: "#6E5DCB",
          500: "#4E3CB9",
          600: "#3E2F92",
          700: "#302470",
          800: "#1F1849",
          900: "#100C27",
          950: "#080613"
        },
        class: "bg-mauve-500"
      }
    ];
    const mutedPresets = [
      {
        name: "gray",
        label: "Gray",
        shades: colors.gray,
        class: "bg-gray-300 dark:bg-gray-900"
      },
      {
        name: "slate",
        label: "Slate",
        shades: colors.slate,
        class: "bg-slate-300 dark:bg-slate-900"
      },
      {
        name: "stone",
        label: "Stone",
        shades: colors.stone,
        class: "bg-stone-300 dark:bg-stone-900"
      },
      {
        name: "zinc",
        label: "Zinc",
        shades: colors.zinc,
        class: "bg-zinc-300 dark:bg-zinc-900"
      },
      {
        name: "neutral",
        label: "Neutral",
        shades: colors.neutral,
        class: "bg-neutral-300 dark:bg-neutral-900"
      }
    ];
    function closeModal() {
      isSwitcherOpen.value = false;
    }
    function switchLayout(layout) {
      activeLayoutName.value = layout;
      closeModal();
    }
    function switchPrimary(color) {
      currentPrimary.value = color.name;
      switchColorShades("primary", color.shades);
    }
    function switchMuted(color) {
      currentMuted.value = color.name;
      switchColorShades("muted", color.shades);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoModal = _sfc_main$I;
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseText = _sfc_main$C;
      const _component_Icon = __nuxt_component_2;
      _push(ssrRenderComponent(_component_TairoModal, mergeProps({
        open: unref(isSwitcherOpen),
        size: unref(canChangeLayout) ? "2xl" : "sm",
        onClose: ($event) => isSwitcherOpen.value = false
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex w-full items-center justify-between p-4 md:p-6"${_scopeId}><h3 class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"${_scopeId}> پیکربندی تم </h3>`);
            _push2(ssrRenderComponent(_component_BaseButtonClose, { onClick: closeModal }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex w-full items-center justify-between p-4 md:p-6" }, [
                createVNode("h3", { class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white" }, " پیکربندی تم "),
                createVNode(_component_BaseButtonClose, { onClick: closeModal })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nui-slimscroll max-h-[550px] overflow-y-auto px-4 pb-4 md:px-6 md:pb-6"${_scopeId}><div class="grid grid-cols-12 gap-6"${_scopeId}>`);
            if (unref(canChangeLayout)) {
              _push2(`<div class="col-span-12 flex flex-col gap-4 sm:col-span-7"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                as: "h4",
                size: "sm",
                weight: "medium",
                class: "text-muted-900 dark:text-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` انتخاب چیدمان `);
                  } else {
                    return [
                      createTextVNode(" انتخاب چیدمان ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseParagraph, {
                size: "sm",
                class: "text-muted-400"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` چیدمانی را که می‌خواهید برای برنامه خود استفاده کنید انتخاب کنید `);
                  } else {
                    return [
                      createTextVNode(" چیدمانی را که می‌خواهید برای برنامه خود استفاده کنید انتخاب کنید ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="bg-muted-100 dark:bg-muted-700/40 grid grid-cols-1 gap-4 rounded-xl p-4 sm:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(layouts), (layout) => {
                _push2(ssrRenderComponent(_component_BaseCard, {
                  key: layout.name,
                  role: "button",
                  rounded: "lg",
                  class: ["p-2", unref(activeLayoutName) === layout.name && "!border-primary-500"],
                  onClick: ($event) => switchLayout(layout.name)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3"${_scopeId2}><img${ssrRenderAttr("src", `/img/illustrations/switcher/layout-${layout.name}-default.svg`)} class="${ssrRenderClass([
                        unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60",
                        "mx-auto block max-w-[110px] transition-opacity duration-200 rtl:-scale-x-100 dark:hidden"
                      ])}"${ssrRenderAttr("alt", `طرح ${layout.label}`)}${_scopeId2}><img${ssrRenderAttr("src", `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`)} class="${ssrRenderClass([
                        unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60",
                        "mx-auto hidden max-w-[110px] transition-opacity duration-200 rtl:-scale-x-100 dark:block"
                      ])}"${ssrRenderAttr("alt", `طرح ${layout.label}`)}${_scopeId2}></div><div class="flex items-center justify-between py-2"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_BaseText, {
                        size: "xs",
                        class: [
                          "capitalize",
                          unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                        ]
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` طرح ${ssrInterpolate(layout.label)}`);
                          } else {
                            return [
                              createTextVNode(" طرح " + toDisplayString(layout.label), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:check-circle-duotone",
                        class: [
                          "text-success-500 size-5 transition-opacity duration-200",
                          unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                        ]
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3" }, [
                          createVNode("img", {
                            src: `/img/illustrations/switcher/layout-${layout.name}-default.svg`,
                            class: [
                              "mx-auto block max-w-[110px] transition-opacity duration-200 rtl:-scale-x-100 dark:hidden",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                            ],
                            alt: `طرح ${layout.label}`
                          }, null, 10, ["src", "alt"]),
                          createVNode("img", {
                            src: `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`,
                            class: [
                              "mx-auto hidden max-w-[110px] transition-opacity duration-200 rtl:-scale-x-100 dark:block",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                            ],
                            alt: `طرح ${layout.label}`
                          }, null, 10, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between py-2" }, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: [
                              "capitalize",
                              unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                            ]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" طرح " + toDisplayString(layout.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_Icon, {
                            name: "ph:check-circle-duotone",
                            class: [
                              "text-success-500 size-5 transition-opacity duration-200",
                              unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                            ]
                          }, null, 8, ["class"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([[unref(canChangeLayout) ? "sm:col-span-5" : ""], "col-span-12 flex flex-col gap-4"])}"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseHeading, {
              as: "h4",
              size: "sm",
              weight: "medium",
              class: "text-muted-900 dark:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` انتخاب رنگ `);
                } else {
                  return [
                    createTextVNode(" انتخاب رنگ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BaseParagraph, {
              size: "sm",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` تغییراتی در پالت رنگ ایجاد کنید `);
                } else {
                  return [
                    createTextVNode(" تغییراتی در پالت رنگ ایجاد کنید ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-1"${_scopeId}><div class="grid grid-cols-1 gap-x-4 sm:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(primaryPresets, (color) => {
              _push2(`<div${_scopeId}><button type="button" class="${ssrRenderClass([[
                unref(currentPrimary) === color.name ? "ring-primary-500 relative z-10 ring-1" : "ring-0"
              ], "hover:bg-muted-100 dark:hover:bg-muted-700/70 group flex w-full items-center gap-3 rounded-lg p-2 transition-colors duration-200"])}"${_scopeId}><span class="${ssrRenderClass([color.class, "block size-6 shrink-0 rounded-lg"])}"${_scopeId}></span>`);
              _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</button></div>`);
            });
            _push2(`<!--]--></div><hr class="border-muted-200 dark:border-muted-700"${_scopeId}><div${_scopeId}><button type="button" class="group flex w-full items-center gap-3 rounded-lg p-2"${_scopeId}><span class="bg-muted-200 dark:bg-muted-900 block size-6 rounded-lg"${_scopeId}></span>`);
            _push2(ssrRenderComponent(_component_BaseText, { size: "sm" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` سایه پس‌زمینه `);
                } else {
                  return [
                    createTextVNode(" سایه پس‌زمینه ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</button><div class="flex items-center px-2 pt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseText, {
              size: "xs",
              class: "text-muted-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` یک سایه انتخاب کنید `);
                } else {
                  return [
                    createTextVNode(" یک سایه انتخاب کنید ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ms-auto flex items-center justify-end gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(mutedPresets, (color) => {
              _push2(`<button type="button" class="${ssrRenderClass([[
                color.class,
                unref(currentMuted) === color.name ? "ring-primary-500 ring-1" : "ring-0"
              ], "block size-6 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", color.label)}${_scopeId}></button>`);
            });
            _push2(`<!--]--></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "nui-slimscroll max-h-[550px] overflow-y-auto px-4 pb-4 md:px-6 md:pb-6" }, [
                createVNode("div", { class: "grid grid-cols-12 gap-6" }, [
                  unref(canChangeLayout) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "col-span-12 flex flex-col gap-4 sm:col-span-7"
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" انتخاب چیدمان ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" چیدمانی را که می‌خواهید برای برنامه خود استفاده کنید انتخاب کنید ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/40 grid grid-cols-1 gap-4 rounded-xl p-4 sm:grid-cols-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(layouts), (layout) => {
                        return openBlock(), createBlock(_component_BaseCard, {
                          key: layout.name,
                          role: "button",
                          rounded: "lg",
                          class: ["p-2", unref(activeLayoutName) === layout.name && "!border-primary-500"],
                          onClick: ($event) => switchLayout(layout.name)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3" }, [
                              createVNode("img", {
                                src: `/img/illustrations/switcher/layout-${layout.name}-default.svg`,
                                class: [
                                  "mx-auto block max-w-[110px] transition-opacity duration-200 rtl:-scale-x-100 dark:hidden",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                                ],
                                alt: `طرح ${layout.label}`
                              }, null, 10, ["src", "alt"]),
                              createVNode("img", {
                                src: `/img/illustrations/switcher/layout-${layout.name}-default-dark.svg`,
                                class: [
                                  "mx-auto hidden max-w-[110px] transition-opacity duration-200 rtl:-scale-x-100 dark:block",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-60"
                                ],
                                alt: `طرح ${layout.label}`
                              }, null, 10, ["src", "alt"])
                            ]),
                            createVNode("div", { class: "flex items-center justify-between py-2" }, [
                              createVNode(_component_BaseText, {
                                size: "xs",
                                class: [
                                  "capitalize",
                                  unref(activeLayoutName) === layout.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"
                                ]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" طرح " + toDisplayString(layout.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]),
                              createVNode(_component_Icon, {
                                name: "ph:check-circle-duotone",
                                class: [
                                  "text-success-500 size-5 transition-opacity duration-200",
                                  unref(activeLayoutName) === layout.name ? "opacity-100" : "opacity-0"
                                ]
                              }, null, 8, ["class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["col-span-12 flex flex-col gap-4", [unref(canChangeLayout) ? "sm:col-span-5" : ""]]
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" انتخاب رنگ ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "sm",
                        class: "text-muted-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" تغییراتی در پالت رنگ ایجاد کنید ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "space-y-1" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-x-4 sm:grid-cols-2" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(primaryPresets, (color) => {
                          return createVNode("div", {
                            key: color.name
                          }, [
                            createVNode("button", {
                              type: "button",
                              class: ["hover:bg-muted-100 dark:hover:bg-muted-700/70 group flex w-full items-center gap-3 rounded-lg p-2 transition-colors duration-200", [
                                unref(currentPrimary) === color.name ? "ring-primary-500 relative z-10 ring-1" : "ring-0"
                              ]],
                              onClick: () => switchPrimary(color)
                            }, [
                              createVNode("span", {
                                class: ["block size-6 shrink-0 rounded-lg", color.class]
                              }, null, 2),
                              createVNode(_component_BaseText, { size: "sm" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(color.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ["onClick"])
                          ]);
                        }), 64))
                      ]),
                      createVNode("hr", { class: "border-muted-200 dark:border-muted-700" }),
                      createVNode("div", null, [
                        createVNode("button", {
                          type: "button",
                          class: "group flex w-full items-center gap-3 rounded-lg p-2"
                        }, [
                          createVNode("span", { class: "bg-muted-200 dark:bg-muted-900 block size-6 rounded-lg" }),
                          createVNode(_component_BaseText, { size: "sm" }, {
                            default: withCtx(() => [
                              createTextVNode(" سایه پس‌زمینه ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex items-center px-2 pt-2" }, [
                          createVNode(_component_BaseText, {
                            size: "xs",
                            class: "text-muted-400"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" یک سایه انتخاب کنید ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "ms-auto flex items-center justify-end gap-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(mutedPresets, (color) => {
                              return createVNode("button", {
                                key: color.name,
                                type: "button",
                                class: ["block size-6 rounded-full", [
                                  color.class,
                                  unref(currentMuted) === color.name ? "ring-primary-500 ring-1" : "ring-0"
                                ]],
                                "data-nui-tooltip": color.label,
                                onClick: () => switchMuted(color)
                              }, null, 10, ["data-nui-tooltip", "onClick"]);
                            }), 64))
                          ])
                        ])
                      ])
                    ])
                  ], 2)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoAppLayoutSwitcher.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const layouts = {
  default: () => import('./default-BKPICVnx.mjs').then(m => m.default || m),
  landing: () => import('./landing-CVlB62h2.mjs').then(m => m.default || m),
  sidebar: () => import('./sidebar-Ddzk4JZj.mjs').then(m => m.default || m),
  collapse: () => import('./collapse-DluDT4qw.mjs').then(m => m.default || m),
  topnav: () => import('./topnav-Br0PgalF.mjs').then(m => m.default || m),
  iconnav: () => import('./iconnav-D1wzA5l7.mjs').then(m => m.default || m),
  empty: () => import('./empty-CW_wTakh.mjs').then(m => m.default || m)
};

const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_5 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});

function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const start = () => set(0);
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}

const __nuxt_component_6 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});

const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});

const __nuxt_component_4 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => m.components?.default === Component?.type);
  return index < newRoute.matched.length - 1;
}

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const app = useAppConfig();
    useHead({
      title: () => route.meta?.title ?? "",
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${app.tairo?.title}` : `${app.tairo?.title}`;
      },
      htmlAttrs: {
        lang: "fa",
        dir: "rtl"
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon.png"
        }
      ],
      meta: [
        {
          name: "description",
          content: () => route.meta.description ?? "پیشرفته‌ترین قالب داشبورد ناکست و تیلویند سی‌اس‌اس"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "@eltheme"
        },
        {
          name: "og:image:type",
          content: "image/png"
        },
        {
          name: "og:image:width",
          content: "1200"
        },
        {
          name: "og:image:height",
          content: "630"
        },
        {
          name: "og:image",
          content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
            route.meta.description || (route.meta.preview ? `${route.meta.preview?.title} - ${route.meta.preview?.description}` : "سیستم داشبورد ناکست و تیلویند سی‌اس‌اس")
          )}&url=${encodeURIComponent(
            "https://media.cssninja.io/content/products/logos/tairo-text-white.svg"
          )}&previewUrl=${encodeURIComponent(
            `https://tairo.cssninja.io${route.meta.preview?.src || "/img/screens/documentation-hub.png"}`
          )}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Notivue = Notivue;
      const _component_Notification = Notification;
      const _component_NotificationProgress = NotificationProgress;
      const _component_DemoAppSearch = _sfc_main$z;
      const _component_DemoAppLayoutSwitcher = _sfc_main$5;
      const _component_VueAxePopup = resolveComponent("VueAxePopup");
      const _component_NuxtLayout = __nuxt_component_5;
      const _component_NuxtLoadingIndicator = __nuxt_component_6;
      const _component_NuxtPage = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Notivue, null, {
        default: withCtx((item, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Notification, {
              item,
              theme: ("pastelTheme" in _ctx ? _ctx.pastelTheme : unref(pastelTheme)),
              icons: ("outlinedIcons" in _ctx ? _ctx.outlinedIcons : unref(outlinedIcons))
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NotificationProgress, { item }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NotificationProgress, { item }, null, 8, ["item"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Notification, {
                item,
                theme: ("pastelTheme" in _ctx ? _ctx.pastelTheme : unref(pastelTheme)),
                icons: ("outlinedIcons" in _ctx ? _ctx.outlinedIcons : unref(outlinedIcons))
              }, {
                default: withCtx(() => [
                  createVNode(_component_NotificationProgress, { item }, null, 8, ["item"])
                ]),
                _: 2
              }, 1032, ["item", "theme", "icons"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DemoAppSearch, null, null, _parent));
      _push(ssrRenderComponent(_component_DemoAppLayoutSwitcher, null, null, _parent));
      _push(ssrRenderComponent(_component_VueAxePopup, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "rgb(var(--color-primary-500))" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLoadingIndicator, { color: "rgb(var(--color-primary-500))" }),
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BasePlaceholderPage",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: { default: void 0 },
    imageSize: { default: void 0 },
    classes: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const imageSize = useNuiDefaultProperty(
      props,
      "BasePlaceholderPage",
      "imageSize"
    );
    const sizes = {
      xs: "nui-placeholder-xs",
      sm: "nui-placeholder-sm",
      md: "nui-placeholder-md",
      lg: "nui-placeholder-lg",
      xl: "nui-placeholder-xl"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseHeading = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nui-placeholder-page", [unref(imageSize) && sizes[unref(imageSize)], props.classes?.wrapper]]
      }, _attrs))}><div class="${ssrRenderClass([props.classes?.inner, "nui-placeholder-page-inner"])}">`);
      if ("image" in _ctx.$slots) {
        _push(`<div class="${ssrRenderClass([props.classes?.img, "nui-placeholder-page-img"])}">`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([props.classes?.content, "nui-placeholder-page-content"])}">`);
      _push(ssrRenderComponent(_component_BaseHeading, {
        as: "h4",
        weight: "medium",
        size: "xl",
        class: ["nui-placeholder-page-title", props.classes?.title]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (props.subtitle) {
        _push(`<p class="${ssrRenderClass([props.classes?.subtitle, "nui-placeholder-page-subtitle"])}">${ssrInterpolate(props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@shuriken-ui+nuxt@3.1.5_nuxt@3.11.2_vue@3.4.21/node_modules/@shuriken-ui/nuxt/components/base/BasePlaceholderPage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TairoError",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      if (props.error?.statusCode === 401) {
        return "مجوز ندارد";
      }
      if (props.error?.statusCode === 404) {
        return "صفحه پیدا نشد";
      }
      return "اوه... چیزی اشتباه پیش رفت";
    });
    const description = computed(() => {
      if (props.error?.statusCode === 401) {
        return "شما مجاز به دسترسی به این صفحه نیستید.";
      }
      if (props.error?.statusCode === 404) {
        return "نتوانستیم صفحه‌ای که به دنبال آن بودید پیدا کنیم، لطفاً با یک مدیر سیستم تماس بگیرید یا بعداً دوباره تلاش کنید.";
      }
      return "یک خطا رخ داده است. اگر مشکل ادامه پیدا کرد، لطفاً با مدیر سیستم تماس بگیرید یا بعداً دوباره تلاش کنید.";
    });
    const app = useAppConfig();
    const handleError = () => clearError({ redirect: "/" });
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceholderPage = _sfc_main$3;
      const _component_BaseButton = _sfc_main$e;
      const _component_Icon = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BasePlaceholderPage, {
        title: unref(title),
        subtitle: unref(description),
        "image-size": "md",
        class: "relative !items-end"
      }, {
        image: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(app).tairo?.error?.logo?.component) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo?.error.logo.component)), unref(app).tairo?.error.logo.props, null), _parent2, _scopeId);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(app).tairo?.error?.logo?.component ? (openBlock(), createBlock(resolveDynamicComponent(("resolveComponentOrNative" in _ctx ? _ctx.resolveComponentOrNative : unref(resolveComponentOrNative))(unref(app).tairo?.error.logo.component)), mergeProps({ key: 0 }, unref(app).tairo?.error.logo.props), null, 16)) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-4"${_scopeId}><div class="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"${_scopeId}><span${_scopeId}>${ssrInterpolate(props.error?.statusCode)}</span></div><div class="mx-auto flex w-full max-w-xs items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              rounded: "lg",
              class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
              onClick: handleError
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "feather:arrow-left",
                    class: "rtl:rotate-180"
                  }, null, _parent3, _scopeId2));
                  _push3(` بازگشت به خانه `);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "feather:arrow-left",
                      class: "rtl:rotate-180"
                    }),
                    createTextVNode(" بازگشت به خانه ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mt-4" }, [
                createVNode("div", { class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]" }, [
                  createVNode("span", null, toDisplayString(props.error?.statusCode), 1)
                ]),
                createVNode("div", { class: "mx-auto flex w-full max-w-xs items-center justify-center gap-2" }, [
                  createVNode(_component_BaseButton, {
                    rounded: "lg",
                    class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
                    onClick: handleError
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "feather:arrow-left",
                        class: "rtl:rotate-180"
                      }),
                      createTextVNode(" بازگشت به خانه ")
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
      _push(`</div>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoError.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: {}
  },
  setup(__props) {
    const props = __props;
    const app = useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TairoSidebarLayout = _sfc_main$f;
      const _component_TairoError = _sfc_main$2;
      _push(ssrRenderComponent(_component_TairoSidebarLayout, mergeProps({ sidebar: false }, _attrs), {
        "toolbar-title": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(app).tairo?.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(app).tairo?.title), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TairoError, {
              error: props.error
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TairoError, {
                error: props.error
              }, null, 8, ["error"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo-layout-sidebar/error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url ;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/nuxt@3.11.2_@types+node@20.12.7_@unocss+reset@0.59.1_eslint@8.57.0_floating-vue@5.2.2_typescr_pzxkciwux5nduxubnw3x55hnr4/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext?._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { useVirtualList as $, _sfc_main$E as A, defineStore as B, storages as C, useState as D, useNuxtApp as E, useVModel as F, watchDebounced as G, useIntersectionObserver as H, fetchDefaults as I, useAsyncData as J, useRequestFetch as K, useNinjaButton as L, useNinjaMark as M, refDebounced as N, useRequestEvent as O, useRuntimeConfig as P, useHead as Q, queryContent as R, navigateTo as S, useMetaKey as T, useContentPreview as U, useClipboard as V, useNinjaWindowScroll as W, __nuxt_component_4 as X, _sfc_main$H as Y, useAppConfig as Z, __nuxt_component_0$3 as _, __nuxt_component_2 as a, defineNuxtLink as a0, _sfc_main$f as a1, resolveComponentOrNative as a2, clearError as a3, _sfc_main$n as a4, useCollapse as a5, useSidebar as a6, withContentBase as a7, encodeQueryParams as a8, addPrerenderPath as a9, shouldUseClientDB as aa, jsonStringify as ab, useNinjaToasterState as ac, useNinjaToasterProgress as ad, useContentDisabled as ae, resolveIconName as af, useLayoutSwitcher as ag, _sfc_main$p as ah, _sfc_main$a as ai, _sfc_main$6 as aj, get as ak, assertArray as al, ensureArray as am, omit as an, sortList as ao, apply as ap, withoutKeys as aq, withKeys as ar, createQuery as as, _sfc_main$2 as at, createNinjaToaster as au, _sfc_main$w as b, _sfc_main$v as c, _sfc_main$D as d, entry$1 as default, _sfc_main$e as e, _sfc_main$C as f, useTailwindColors as g, _sfc_main$u as h, _export_sfc as i, useRoute as j, _sfc_main$x as k, _sfc_main$3 as l, useNow as m, useEventListener as n, onClickOutside as o, onKeyStroke as p, _sfc_main$i as q, useTailwindBreakpoints as r, __nuxt_component_4$1 as s, usePanels as t, useRouter as u, __nuxt_component_0$1 as v, __nuxt_component_0$2 as w, _sfc_main$I as x, useNinjaId as y, useNuiDefaultProperty as z };
