import { _ as _sfc_main$1 } from './DemoWizardStepTitle-DDg6AMcY.mjs';
import { _ as _sfc_main$2 } from './BaseAvatar-3aYTRoBN.mjs';
import { _ as _sfc_main$3 } from './BaseButtonIcon-B-NRPykg.mjs';
import { Q as useHead, a as __nuxt_component_2, h as _sfc_main$u, b as _sfc_main$w, c as _sfc_main$v, l as _sfc_main$3$1, e as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$4 } from './BaseIconBox-Cgm-LP3M.mjs';
import { defineComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { u as useMultiStepForm } from './multi-step-form-jDzhLNh-.mjs';
import { u as useNinjaFilePreview } from './file-preview-DSqAOr0Y.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const DateFormats = {
  Short: { year: "numeric", month: "short", day: "numeric" },
  // 'MMM do, yyyy'
  Long: { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true }
  // 'cccc, LLLL do, yyyy h:mm aa'
};
function getOrdinalSuffix(day) {
  const suffixes = ["th", "st", "nd", "rd"];
  const value = day % 100;
  return day + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}
function formatDate(date, pattern = "Short", locale = "en-US") {
  if (!date)
    return "";
  const validDate = typeof date === "string" ? new Date(date) : date;
  if (isNaN(validDate.getTime()))
    return "";
  const formatter = new Intl.DateTimeFormat(locale, DateFormats[pattern]);
  const formattedDate = formatter.format(validDate);
  const day = validDate.getDate();
  return formattedDate.replace(day.toString(), getOrdinalSuffix(day));
}
const _imports_0 = publicAssetsURL("/img/illustrations/wizard/finish.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "step-7",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0627\u0631\u0633\u0627\u0644 \u067E\u0631\u0648\u0698\u0647"
    });
    const {
      data: project,
      complete,
      getStep,
      checkPreviousSteps
    } = useMultiStepForm();
    const avatarPreview = useNinjaFilePreview(() => project.value.avatar);
    const convertProjectType = (type, lang) => {
      if (lang === "fa") {
        switch (type) {
          case "design":
            return "\u0637\u0631\u0627\u062D\u06CC";
          case "development":
            return "\u062A\u0648\u0633\u0639\u0647";
          case "marketing":
            return "\u0645\u0627\u0631\u06A9\u062A\u06CC\u0646\u06AF";
        }
      }
      if (lang === "tr") {
        switch (type) {
          case "design":
            return "tasar\u0131m";
          case "development":
            return "geli\u015Ftirme";
          case "marketing":
            return "pazarlama";
        }
      }
      if (lang === "ar") {
        switch (type) {
          case "design":
            return "\u0627\u0644\u062A\u0635\u0645\u064A\u0645";
          case "development":
            return "\u0627\u0644\u062A\u0637\u0648\u064A\u0631";
          case "marketing":
            return "\u0627\u0644\u062A\u0633\u0648\u064A\u0642";
        }
      }
      return type;
    };
    const convertMemberRole = (role, lang) => {
      if (lang === "fa") {
        switch (role) {
          case "manager":
            return "\u0645\u062F\u06CC\u0631";
          case "collaborator":
            return "\u0645\u0634\u0627\u0631\u06A9\u062A\u200C\u06A9\u0646\u0646\u062F\u0647";
          case "reader":
            return "\u0645\u0644\u0627\u062D\u0638\u0647\u200C\u06A9\u0646\u0646\u062F\u0647";
          case "owner":
            return "\u0645\u0627\u0644\u06A9 \u0645\u062D\u0635\u0648\u0644";
        }
      }
      if (lang === "tr") {
        switch (role) {
          case "manager":
            return "y\xF6netici";
          case "collaborator":
            return "i\u015Fbirlik\xE7i";
          case "reader":
            return "okuyucu";
          case "owner":
            return "sahip";
        }
      }
      if (lang === "ar") {
        switch (role) {
          case "manager":
            return "\u0645\u062F\u064A\u0631";
          case "collaborator":
            return "\u0645\u062A\u0639\u0627\u0648\u0646";
          case "reader":
            return "\u0642\u0627\u0631\u0626";
          case "owner":
            return "\u0645\u0627\u0644\u0643";
        }
      }
      return role;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DemoWizardStepTitle = _sfc_main$1;
      const _component_BaseAvatar = _sfc_main$2;
      const _component_BaseButtonIcon = _sfc_main$3;
      const _component_Icon = __nuxt_component_2;
      const _component_BaseCard = _sfc_main$u;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseParagraph = _sfc_main$v;
      const _component_BaseIconBox = _sfc_main$4;
      const _component_BasePlaceholderPage = _sfc_main$3$1;
      const _component_BaseButton = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(complete)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_DemoWizardStepTitle, null, null, _parent));
        _push(`<div class="flex flex-col px-4"><div class="group relative mx-auto mb-2 flex w-16 items-center justify-center">`);
        if (unref(avatarPreview)) {
          _push(ssrRenderComponent(_component_BaseAvatar, {
            size: "lg",
            src: unref(avatarPreview),
            class: "dark:bg-muted-700/60 bg-white"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_BaseAvatar, {
            size: "lg",
            text: "P",
            class: "bg-pink-500/10 text-pink-600"
          }, null, _parent));
        }
        _push(`<div class="absolute bottom-0 end-0 z-10">`);
        _push(ssrRenderComponent(_component_BaseButtonIcon, {
          small: "",
          rounded: "full",
          class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
          to: unref(getStep)(1)?.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:edit-2",
                class: "pointer-events-none size-3"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:edit-2",
                  class: "pointer-events-none size-3"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mx-auto flex w-full max-w-xl flex-col gap-4"><h3 class="text-muted-800 dark:text-muted-100 text-center font-sans text-xl font-medium">${ssrInterpolate(unref(project).name === "" ? "\u0639\u0646\u0648\u0627\u0646 \u067E\u0631\u0648\u0698\u0647 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u062F" : unref(project).name)}</h3><div class="grid grid-cols-12 gap-4"><div class="col-span-12">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(1)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u067E\u0631\u0648\u0698\u0647 </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u067E\u0631\u0648\u0698\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(project).description !== "") {
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-500 dark:text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(project).description)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(project).description), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u062A\u0648\u0635\u06CC\u0641\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A `);
                    } else {
                      return [
                        createTextVNode(" \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u062A\u0648\u0635\u06CC\u0641\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(1)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode(_component_BaseHeading, {
                  size: "xs",
                  class: "mb-4 uppercase"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u067E\u0631\u0648\u0698\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  unref(project).description !== "" ? (openBlock(), createBlock(_component_BaseParagraph, {
                    key: 0,
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(project).description), 1)
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u062A\u0648\u0635\u06CC\u0641\u06CC \u0627\u0631\u0627\u0626\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(0)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex w-full items-center gap-2"${_scopeId}>`);
              if (unref(project).type === void 0) {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-primary-500/10 text-primary-600",
                  color: "none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:briefcase-duotone",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:briefcase-duotone",
                          class: "size-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(project).type === "design") {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-orange-500/10 text-orange-600",
                  color: "none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:bounding-box-duotone",
                          class: "size-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(project).type === "development") {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-emerald-500/10 text-emerald-600",
                  color: "none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:bounding-box-duotone",
                          class: "size-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (unref(project).type === "marketing") {
                _push2(ssrRenderComponent(_component_BaseIconBox, {
                  size: "sm",
                  class: "bg-yellow-500/10 text-yellow-500",
                  color: "none"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "size-5"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "ph:bounding-box-duotone",
                          class: "size-5"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div${_scopeId}><div class="text-muted-400 text-xs"${_scopeId}><span${_scopeId}>\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647</span></div><div class="text-muted-800 dark:text-muted-100 text-sm font-medium capitalize"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(project).type === void 0 ? "\u0647\u06CC\u0686 \u0646\u0648\u0639\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A" : convertProjectType(unref(project).type, "fa"))}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(0)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex w-full items-center gap-2" }, [
                  unref(project).type === void 0 ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 0,
                    size: "sm",
                    class: "bg-primary-500/10 text-primary-600",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:briefcase-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  })) : unref(project).type === "design" ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 1,
                    size: "sm",
                    class: "bg-orange-500/10 text-orange-600",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  })) : unref(project).type === "development" ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 2,
                    size: "sm",
                    class: "bg-emerald-500/10 text-emerald-600",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  })) : unref(project).type === "marketing" ? (openBlock(), createBlock(_component_BaseIconBox, {
                    key: 3,
                    size: "sm",
                    class: "bg-yellow-500/10 text-yellow-500",
                    color: "none"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "ph:bounding-box-duotone",
                        class: "size-5"
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-muted-400 text-xs" }, [
                      createVNode("span", null, "\u0646\u0648\u0639 \u067E\u0631\u0648\u0698\u0647")
                    ]),
                    createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium capitalize" }, [
                      createVNode("span", null, toDisplayString(unref(project).type === void 0 ? "\u0647\u06CC\u0686 \u0646\u0648\u0639\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A" : convertProjectType(unref(project).type, "fa")), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(2)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex w-full items-center gap-2"${_scopeId}>`);
              if (unref(project).customer?.logo === void 0) {
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: "/img/avatars/placeholder-file.png",
                  size: "sm"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_BaseAvatar, {
                  src: unref(project).customer?.logo,
                  size: "sm",
                  class: "bg-muted-100 dark:bg-muted-700"
                }, null, _parent2, _scopeId));
              }
              _push2(`<div${_scopeId}><div class="text-muted-400 text-xs"${_scopeId}><span${_scopeId}>\u0645\u0634\u062A\u0631\u06CC</span></div><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(project).customer?.name === void 0 ? "\u0647\u06CC\u0686 \u0645\u0634\u062A\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A" : unref(project).customer?.name)}</span></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(2)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex w-full items-center gap-2" }, [
                  unref(project).customer?.logo === void 0 ? (openBlock(), createBlock(_component_BaseAvatar, {
                    key: 0,
                    src: "/img/avatars/placeholder-file.png",
                    size: "sm"
                  })) : (openBlock(), createBlock(_component_BaseAvatar, {
                    key: 1,
                    src: unref(project).customer?.logo,
                    size: "sm",
                    class: "bg-muted-100 dark:bg-muted-700"
                  }, null, 8, ["src"])),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-muted-400 text-xs" }, [
                      createVNode("span", null, "\u0645\u0634\u062A\u0631\u06CC")
                    ]),
                    createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, [
                      createVNode("span", null, toDisplayString(unref(project).customer?.name === void 0 ? "\u0647\u06CC\u0686 \u0645\u0634\u062A\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A" : unref(project).customer?.name), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-4">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(2)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col items-center justify-center text-center"${_scopeId}><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(project).budget)}</span>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 scale-90 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u0628\u0648\u062F\u062C\u0647 \u062A\u062E\u0645\u06CC\u0646\u06CC </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0628\u0648\u062F\u062C\u0647 \u062A\u062E\u0645\u06CC\u0646\u06CC ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(2)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold" }, toDisplayString(unref(project).budget), 1),
                    createVNode(_component_BaseHeading, {
                      size: "xs",
                      class: "mb-4 scale-90 uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0628\u0648\u062F\u062C\u0647 \u062A\u062E\u0645\u06CC\u0646\u06CC ")
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
          rounded: "lg",
          class: "group relative h-full p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(2)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex h-full flex-col items-center justify-center text-center"${_scopeId}><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 mb-3 block font-sans text-sm font-medium"${_scopeId}>${ssrInterpolate(unref(project).endDate === void 0 ? "--" : ("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(project).endDate, "short", "fa"))}</span>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 scale-90 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(2)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex h-full flex-col items-center justify-center text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 mb-3 block font-sans text-sm font-medium" }, toDisplayString(unref(project).endDate === void 0 ? "--" : ("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(project).endDate, "short", "fa")), 1),
                    createVNode(_component_BaseHeading, {
                      size: "xs",
                      class: "mb-4 scale-90 uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F ")
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
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(3)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col items-center justify-center text-center"${_scopeId}><div${_scopeId}><span class="text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold"${_scopeId}>${ssrInterpolate(unref(project).files?.length || 0)}</span>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 scale-90 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(3)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode("div", { class: "flex flex-col items-center justify-center text-center" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "text-muted-800 dark:text-muted-100 mb-2 block font-sans text-2xl font-semibold" }, toDisplayString(unref(project).files?.length || 0), 1),
                    createVNode(_component_BaseHeading, {
                      size: "xs",
                      class: "mb-4 scale-90 uppercase"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0641\u0627\u06CC\u0644\u200C\u0647\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A ")
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
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(4)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647 </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(project).team && unref(project).team.length > 0) {
                _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
                ssrRenderList(unref(project).team, (member) => {
                  _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_BaseAvatar, {
                    size: "xs",
                    src: member.picture
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="flex flex-col"${_scopeId}><h3 class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium"${_scopeId}>${ssrInterpolate(member.name)}</h3><p class="text-muted-500 dark:text-muted-400 font-sans text-xs"${_scopeId}>${ssrInterpolate(convertMemberRole(member.role, "fa"))}</p></div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0647\u06CC\u0686 \u0639\u0636\u0648\u06CC \u0627\u0632 \u062A\u06CC\u0645 \u062F\u0639\u0648\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A `);
                    } else {
                      return [
                        createTextVNode(" \u0647\u06CC\u0686 \u0639\u0636\u0648\u06CC \u0627\u0632 \u062A\u06CC\u0645 \u062F\u0639\u0648\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(4)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode(_component_BaseHeading, {
                  size: "xs",
                  class: "mb-4 uppercase"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u062A\u06CC\u0645 \u067E\u0631\u0648\u0698\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  unref(project).team && unref(project).team.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project).team, (member) => {
                      return openBlock(), createBlock("div", {
                        key: member.name,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_BaseAvatar, {
                          size: "xs",
                          src: member.picture
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("h3", { class: "text-muted-800 dark:text-muted-100 font-sans text-sm font-medium" }, toDisplayString(member.name), 1),
                          createVNode("p", { class: "text-muted-500 dark:text-muted-400 font-sans text-xs" }, toDisplayString(convertMemberRole(member.role, "fa")), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0647\u06CC\u0686 \u0639\u0636\u0648\u06CC \u0627\u0632 \u062A\u06CC\u0645 \u062F\u0639\u0648\u062A \u0646\u0634\u062F\u0647 \u0627\u0633\u062A ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="col-span-12 sm:col-span-6">`);
        _push(ssrRenderComponent(_component_BaseCard, {
          rounded: "lg",
          class: "group relative p-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="absolute end-3 top-3 z-10"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButtonIcon, {
                small: "",
                rounded: "full",
                class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                to: unref(getStep)(5)?.to
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:edit-2",
                      class: "pointer-events-none size-3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseHeading, {
                size: "xs",
                class: "mb-4 uppercase"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-muted-500 dark:text-muted-400"${_scopeId2}> \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 </span>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              if (unref(project).tools && unref(project).tools.length > 0) {
                _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
                ssrRenderList(unref(project).tools, (tool) => {
                  _push2(`<div class="flex items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", tool.logo)} class="size-8" alt=""${_scopeId}><div${_scopeId}><div class="text-muted-800 dark:text-muted-100 text-sm font-medium"${_scopeId}>${ssrInterpolate(tool.name)}</div><div class="text-muted-400 text-xs"${_scopeId}>${ssrInterpolate(tool.description)}</div></div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "sm",
                  class: "text-muted-400"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0647\u06CC\u0686 \u0627\u0628\u0632\u0627\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 `);
                    } else {
                      return [
                        createTextVNode(" \u0647\u06CC\u0686 \u0627\u0628\u0632\u0627\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "absolute end-3 top-3 z-10" }, [
                  createVNode(_component_BaseButtonIcon, {
                    small: "",
                    rounded: "full",
                    class: "hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 dark:hover:text-primary-500 pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
                    to: unref(getStep)(5)?.to
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:edit-2",
                        class: "pointer-events-none size-3"
                      })
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                createVNode(_component_BaseHeading, {
                  size: "xs",
                  class: "mb-4 uppercase"
                }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-muted-500 dark:text-muted-400" }, " \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u067E\u0631\u0648\u0698\u0647 ")
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  unref(project).tools && unref(project).tools.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project).tools, (tool) => {
                      return openBlock(), createBlock("div", {
                        key: tool.name,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode("img", {
                          src: tool.logo,
                          class: "size-8",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "text-muted-800 dark:text-muted-100 text-sm font-medium" }, toDisplayString(tool.name), 1),
                          createVNode("div", { class: "text-muted-400 text-xs" }, toDisplayString(tool.description), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_BaseParagraph, {
                      size: "sm",
                      class: "text-muted-400"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0647\u06CC\u0686 \u0627\u0628\u0632\u0627\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 ")
                      ]),
                      _: 1
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<div><div class="mx-auto max-w-2xl px-4"><div class="mb-10 text-center">`);
        _push(ssrRenderComponent(_component_BaseHeading, {
          tag: "h1",
          size: "2xl",
          class: "text-muted-800 dark:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u062A\u0628\u0631\u06CC\u06A9! \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0622\u0645\u0627\u062F\u0647 \u0627\u0633\u062A</span>`);
            } else {
              return [
                createVNode("span", null, "\u062A\u0628\u0631\u06CC\u06A9! \u0647\u0645\u0647 \u0686\u06CC\u0632 \u0622\u0645\u0627\u062F\u0647 \u0627\u0633\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseParagraph, {
          size: "sm",
          class: "text-muted-500 dark:text-muted-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0639\u0627\u0644\u06CC \u0627\u0633\u062A\u060C \u0634\u0645\u0627 \u0628\u0647\u200C\u062A\u0627\u0632\u06AF\u06CC \u0627\u06CC\u062C\u0627\u062F \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0627\u0646\u062F\u0647\u200C\u0627\u06CC\u062F.</span>`);
            } else {
              return [
                createVNode("span", null, "\u0639\u0627\u0644\u06CC \u0627\u0633\u062A\u060C \u0634\u0645\u0627 \u0628\u0647\u200C\u062A\u0627\u0632\u06AF\u06CC \u0627\u06CC\u062C\u0627\u062F \u0627\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647 \u0631\u0627 \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0627\u0646\u062F\u0647\u200C\u0627\u06CC\u062F.")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_BasePlaceholderPage, {
          title: "\u0628\u0631\u0627\u06CC \u0645\u0631\u0627\u062D\u0644 \u0628\u0639\u062F\u06CC \u0622\u0645\u0627\u062F\u0647 \u0634\u0648\u06CC\u062F",
          subtitle: "\u0634\u0645\u0627 \u0648 \u0627\u0639\u0636\u0627\u06CC \u062A\u06CC\u0645\u06CC \u06A9\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0634\u0631\u0648\u0639 \u0628\u0647 \u06A9\u0627\u0631 \u0648 \u0627\u06CC\u062C\u0627\u062F \u0648\u0638\u0627\u06CC\u0641 \u06A9\u0646\u06CC\u062F."
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} class="mx-auto max-w-[210px] rounded-full" alt="\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  class: "mx-auto max-w-[210px] rounded-full",
                  alt: "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0627\u06CC\u0644\u200C\u0647\u0627"
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mt-2 text-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_BaseButton, {
                to: "/dashboards",
                rounded: "lg",
                color: "primary",
                class: "w-48"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647</span>`);
                  } else {
                    return [
                      createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "mt-2 text-center" }, [
                  createVNode(_component_BaseButton, {
                    to: "/dashboards",
                    rounded: "lg",
                    color: "primary",
                    class: "w-48"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wizard/step-7.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
