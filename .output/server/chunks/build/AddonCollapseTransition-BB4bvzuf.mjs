import { defineComponent, ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderSlotInner } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddonCollapseTransition",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: false,
      default: "collapse"
    },
    dimension: {
      type: String,
      required: false,
      default: "height",
      validator: (value) => {
        return ["height", "width"].includes(value);
      }
    },
    duration: {
      type: Number,
      required: false,
      default: 300
    },
    easing: {
      type: String,
      required: false,
      default: "ease-in-out"
    }
  },
  emits: [
    "before-appear",
    "appear",
    "after-appear",
    "appear-cancelled",
    "before-enter",
    "enter",
    "after-enter",
    "enter-cancelled",
    "before-leave",
    "leave",
    "after-leave",
    "leave-cancelled"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const cachedStyles = ref(null);
    computed(() => {
      const transitions = [];
      if (!cachedStyles.value) {
        return "";
      }
      Object.keys(cachedStyles.value).forEach((key) => {
        transitions.push(
          `${convertToCssProperty(key)} ${props.duration}ms ${props.easing}`
        );
      });
      return transitions.join(", ");
    });
    watch(() => props.dimension, () => clearCachedDimensions());
    function clearCachedDimensions() {
      cachedStyles.value = null;
    }
    function convertToCssProperty(style) {
      const upperChars = style.match(/([A-Z])/g);
      if (!upperChars) {
        return style;
      }
      for (let i = 0, n = upperChars.length; i < n; i++) {
        style = style.replace(
          new RegExp(upperChars[i]),
          "-" + upperChars[i].toLowerCase()
        );
      }
      if (style.slice(0, 1) === "-") {
        style = style.slice(1);
      }
      return style;
    }
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonCollapseTransition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
