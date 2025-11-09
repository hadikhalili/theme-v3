import { j as useRoute, u as useRouter, D as useState } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, toRef, shallowRef, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const useNinjaScrollspy = (_options, _selectors) => {
  toRef(_options);
  toRef(_selectors);
  const observer = shallowRef();
  const intersectingIds = shallowRef([]);
  const activeIds = shallowRef([]);
  useRoute();
  const updateElements = (elements) => {
    observer.value?.disconnect();
    for (const element of elements) {
      observer.value?.observe(element);
    }
  };
  watch(intersectingIds, (value, oldValue) => {
    activeIds.value = value.length === 0 ? oldValue : value;
  });
  return {
    visibleIds: intersectingIds,
    activeIds,
    updateElements
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TairoToc",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const activeAnchor = ref("");
    const toc = useState("tairo-toc", () => []);
    const ids = computed(() => toc.value.map(({ id }) => `#${id}`));
    const { activeIds } = useNinjaScrollspy(
      {
        rootMargin: "0px 0px -90% 0px"
      },
      () => ids.value
    );
    function getTocItemClass(item) {
      const classes = ["pe-3"];
      if (item.level > 2) {
        classes.push("ms-3 text-xs");
      }
      if (activeAnchor.value === item.id) {
        classes.push("border-primary-500 text-primary-500");
      } else if (activeIds.value.includes(item.id)) {
        classes.push(
          "border-primary-400 dark:border-primary-600 text-muted-500 dark:text-muted-400 dark:hover:text-muted-300 hover:text-muted-400"
        );
      } else {
        classes.push(
          "border-muted-200 dark:border-muted-800 text-muted-500 dark:text-muted-400 dark:hover:text-muted-300 hover:text-muted-400"
        );
      }
      return classes;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between" }, _attrs))}>`);
      if (unref(toc).length) {
        _push(`<div class="w-52"><div class="font-heading text-muted-800 mb-6 text-xs font-semibold uppercase leading-tight dark:text-white"><span>\u062F\u0631 \u0627\u06CC\u0646 \u0635\u0641\u062D\u0647</span></div><nav class="nui-slimscroll-opaque relative max-h-[calc(100vh_-_220px)] overflow-y-auto overflow-x-hidden pb-10 font-sans text-[0.8rem] font-medium"><ul><!--[-->`);
        ssrRenderList(unref(toc), (item) => {
          _push(`<li><a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([getTocItemClass(item), "block border-e-2 py-1"])}">${ssrInterpolate(item.label)}</a></li>`);
        });
        _push(`<!--]--></ul>`);
        ssrRenderSlot(_ctx.$slots, "nav-end", {}, null, _push, _parent);
        _push(`</nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/tairo/components/TairoToc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
