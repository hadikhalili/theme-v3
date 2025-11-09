import { _ as _sfc_main$1 } from './BaseAvatar-3aYTRoBN.mjs';
import { b as _sfc_main$w, c as _sfc_main$v } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoCommentListCompact",
  __ssrInlineRender: true,
  setup(__props) {
    const comments = [
      {
        id: 0,
        firstName: "\u06AF\u0631\u06CC",
        lastName: "\u0627\u0633\u067E\u0644\u06CC\u062A\u200C\u0645\u0646",
        image: "/img/avatars/18.svg",
        text: "GS",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0648 \u0686\u06CC\u0632 \u06CC\u06A9 \u0686\u06CC\u0632 \u0631\u0627 \u062A\u0634\u06A9\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F."
      },
      {
        id: 1,
        firstName: "\u0645\u0627\u0631\u06A9",
        lastName: "\u0648\u0627\u06CC\u0646\u0633\u062A\u06CC\u0646",
        image: "/img/avatars/14.svg",
        text: "MW",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A."
      },
      {
        id: 2,
        firstName: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627",
        lastName: "\u0645",
        image: "/img/avatars/5.svg",
        text: "CM",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0648 \u0686\u06CC\u0632 \u06CC\u06A9 \u0686\u06CC\u0632 \u0631\u0627 \u062A\u0634\u06A9\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F."
      },
      {
        id: 3,
        firstName: "\u0627\u062F\u06CC",
        lastName: "\u0641\u0644\u0627\u06CC\u0631",
        image: "/img/avatars/8.svg",
        text: "EF",
        content: "\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0627\u0633\u062A. \u0627\u0645\u0627 \u0628\u0631\u0627\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0634\u06A9\u0644 \u062F\u06CC\u06AF\u0631\u06CC \u0645\u0646\u0627\u0633\u0628 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0648 \u0686\u06CC\u0632 \u06CC\u06A9 \u0686\u06CC\u0632 \u0631\u0627 \u062A\u0634\u06A9\u06CC\u0644 \u0645\u06CC\u200C\u062F\u0647\u0646\u062F."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseAvatar = _sfc_main$1;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2 space-y-5" }, _attrs))}><!--[-->`);
      ssrRenderList(comments, (comment) => {
        _push(`<div class="flex gap-3">`);
        _push(ssrRenderComponent(_component_BaseAvatar, {
          src: comment.image,
          text: comment.text,
          size: "xs",
          rounded: "none",
          mask: "blob",
          class: "bg-primary-100 dark:bg-primary-500/20 text-primary-500 shrink-0"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          as: "h4",
          size: "sm",
          weight: "light",
          lead: "tight",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(comment.firstName)} ${ssrInterpolate(comment.lastName.slice(0, 1))}. </span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(comment.firstName) + " " + toDisplayString(comment.lastName.slice(0, 1)) + ". ", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, { size: "xs" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-400"${_scopeId}>${ssrInterpolate(comment.content)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-muted-400" }, toDisplayString(comment.content), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCommentListCompact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
