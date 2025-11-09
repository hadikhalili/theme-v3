import { m as useNow, n as useEventListener, p as onKeyStroke, _ as __nuxt_component_0$3, a as __nuxt_component_2, q as _sfc_main$i, b as _sfc_main$w, k as _sfc_main$x, d as _sfc_main$D, h as _sfc_main$u, c as _sfc_main$v } from './server.mjs';
import __nuxt_component_0 from './TairoLogo-BETVEPG8.mjs';
import _sfc_main$3 from './DemoAccountMenu-C3x7udSm.mjs';
import { _ as _sfc_main$4 } from './BaseButtonIcon-B-NRPykg.mjs';
import { _ as _sfc_main$b } from './BaseAvatarGroup-BdQMrb3Z.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, resolveDirective, mergeProps, withCtx, createVNode, unref, withKeys, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, isRef, createTextVNode, toValue, watch, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { isPast, endOfDay, isToday, isSameDay, differenceInMinutes, setMinutes, setHours, startOfWeek, startOfDay, endOfWeek, addDays, format, addMinutes, roundToNearestMinutes, addHours, isBefore, setYear, setMonth, setDay } from 'date-fns';
import { _ as _sfc_main$5 } from './BaseInputNumber-BvjqvKuw.mjs';
import { _ as _sfc_main$6 } from './BaseSelect-7ut6RcTc.mjs';
import { _ as __nuxt_component_0$1 } from './BaseButtonGroup-B2JzkKgM.mjs';
import { _ as _sfc_main$7 } from './BaseButtonAction-B_Qxgxxp.mjs';
import { _ as _sfc_main$8 } from './BaseSwitchThin-DO5QSQNt.mjs';
import { _ as __nuxt_component_0$2 } from './BaseListbox-CK7ULECq.mjs';
import { _ as _sfc_main$9 } from './BaseAutocomplete-ChFUcoaJ.mjs';
import { _ as _sfc_main$a } from './BaseCheckboxHeadless-CATHSw1E.mjs';
import { c as capitalize } from './format-strings-CL2J231F.mjs';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-B1UMj9z7.mjs';
import { Calendar } from 'v-calendars';
import { Container, Draggable } from 'vue3-smooth-dnd';
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
import './virtual_public-CbxAoqtm.mjs';
import './user-DDZJ47NJ.mjs';
import './BaseAvatar-3aYTRoBN.mjs';
import './IconChevronDown-B9AzKHTY.mjs';
import './BaseIconBox-Cgm-LP3M.mjs';
import '@headlessui-float/vue';

function dateToTop(settings, date, currentDay = /* @__PURE__ */ new Date()) {
  if (!isSameDay(currentDay, date)) {
    return settings.dayOffsetY;
  }
  const hour = Math.max(date.getHours() - (settings.hourOpen || 0), 0);
  const minutes = date.getMinutes();
  return hour * settings.hourHeight + settings.hourHeight / 60 * minutes + settings.dayOffsetY;
}
function topToDate(settings, top = 0, currentDay = /* @__PURE__ */ new Date()) {
  const hour = Math.floor((top - settings.dayOffsetY) / settings.hourHeight) + (settings.hourOpen || 0);
  const minutes = Math.floor(
    (top - settings.dayOffsetY) % settings.hourHeight / (settings.hourHeight / 60)
  );
  if (hour < (settings.hourOpen || 0) || minutes < 0) {
    return null;
  }
  const date = setMinutes(setHours(currentDay, hour), minutes);
  date.setMilliseconds(0);
  date.setSeconds(0);
  return date;
}
function minutesToHeight(settings, minutes) {
  return settings.hourHeight / 60 * minutes;
}
function datesToHeight(settings, start, end, currentDay = /* @__PURE__ */ new Date()) {
  if (isSameDay(start, end)) {
    return Math.min(
      minutesToHeight(settings, differenceInMinutes(end, start)),
      minutesToHeight(
        settings,
        differenceInMinutes(
          setMinutes(setHours(end, settings.hourClose || 0), 0),
          start
        )
      )
    );
  }
  if (isSameDay(currentDay, start)) {
    return minutesToHeight(
      settings,
      differenceInMinutes(
        setMinutes(setHours(start, settings.hourClose || 0), 0),
        start
      )
    );
  }
  if (isSameDay(currentDay, end)) {
    return minutesToHeight(
      settings,
      differenceInMinutes(
        end,
        setMinutes(setHours(end, settings.hourOpen || 0), 0)
      )
    );
  }
  console.error("Unexpected dates");
  return 0;
}
function useNowMarker(container, settings) {
  const now = useNow({
    interval: 6e4
    // 1 minute
  });
  const showNow = computed(() => {
    const hour = now.value.getHours();
    return hour > (settings.hourOpen || 0) && hour < (settings.hourClose || 0);
  });
  return {
    now,
    showNow
  };
}
function useViewPan(container, canPan = true) {
  const isViewPaning = ref(false);
  const isViewMoved = ref(false);
  const viewPanStart = ref(0);
  useEventListener(container, "mousedown", (e) => {
    if (!container.value) {
      return;
    }
    if (!toValue(canPan) || isViewPaning.value) {
      return;
    }
    isViewPaning.value = true;
    isViewMoved.value = false;
    viewPanStart.value = container.value.scrollTop + e.clientY;
  });
  useEventListener(container, "mousemove", (e) => {
    if (!isViewPaning.value) {
      return;
    }
    if (!isViewMoved.value) {
      isViewMoved.value = true;
    }
    container.value?.scrollTo({
      top: viewPanStart.value - e.clientY
    });
  });
  useEventListener(container, "mouseup", (e) => {
    if (!isViewPaning.value) {
      return;
    }
    isViewPaning.value = false;
    isViewMoved.value = false;
    viewPanStart.value = 0;
  });
  useEventListener(container, "mouseleave", (e) => {
    if (!isViewPaning.value) {
      return;
    }
    isViewPaning.value = false;
    isViewMoved.value = false;
    viewPanStart.value = 0;
  });
  return {
    isViewPaning,
    isViewMoved
    // viewPanStart,
  };
}
function useCreateEvent(settings, calendarEvents, eventFactory, canCreate = true, onCreate = () => {
}) {
  onKeyStroke("Escape", clearNew);
  const hasNew = computed(() => {
    return toValue(calendarEvents).some((attr) => attr.key === "\u062C\u062F\u06CC\u062F");
  });
  function clearNew() {
    const calendarEventsValue = toValue(calendarEvents);
    const idx = calendarEventsValue.findIndex((attr) => attr.key === "\u062C\u062F\u06CC\u062F");
    if (idx !== -1) {
      calendarEventsValue.splice(idx, 1);
    }
  }
  async function onCalendarClick(event, currentDay = /* @__PURE__ */ new Date()) {
    if (!toValue(canCreate)) {
      return;
    }
    clearNew();
    const y = event.offsetY;
    const dateClick = topToDate(settings, y, currentDay);
    if (!dateClick) {
      return;
    }
    const date = roundToNearestMinutes(addMinutes(dateClick, -5), {
      nearestTo: settings.hourPrecision
    });
    const newEventData = await eventFactory(date);
    const newEvent = {
      key: "\u062C\u062F\u06CC\u062F",
      customData: {
        id: "\u062C\u062F\u06CC\u062F",
        ...newEventData
      },
      dates: [newEventData.startDate, newEventData.endDate]
    };
    await onCreate(newEvent);
  }
  return {
    hasNew,
    clearNew,
    onCalendarClick
  };
}
function useDragEvent(settings, calendarEvents, onDragEnd = () => {
}) {
  const isHeightDragging = ref(false);
  function onHeightDragStart(attr, e) {
    if (isHeightDragging.value) {
      return;
    }
    isHeightDragging.value = true;
    (void 0).documentElement.classList.add("cursor-n-resize");
    const onPointerMove = (e2) => {
      const targetDay = e2.target?.dataset?.day;
      if (!targetDay) {
        return;
      }
      const y = e2.offsetY;
      const dateClick = topToDate(settings, y, attr.customData.endDate);
      if (!dateClick) {
        return;
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision
      });
      if (!attr.customData.endDate) {
        return;
      }
      if (date === attr.customData.endDate) {
        return;
      }
      if (isBefore(date, attr.customData.startDate)) {
        return;
      }
      attr.customData.endDate = date;
    };
    const onPointerUp = async (e2) => {
      (void 0).documentElement.removeEventListener("pointerup", onPointerUp);
      (void 0).documentElement.removeEventListener("pointermove", onPointerMove);
      (void 0).documentElement.classList.remove("cursor-n-resize");
      await onDragEnd(attr);
      setTimeout(() => {
        isHeightDragging.value = false;
      }, 100);
    };
    (void 0).documentElement.addEventListener("pointerup", onPointerUp, false);
    (void 0).documentElement.addEventListener(
      "pointermove",
      onPointerMove,
      false
    );
  }
  const isPositionDragging = ref(false);
  function onPositionDragStart(attr, e) {
    if (isPositionDragging.value) {
      return;
    }
    isPositionDragging.value = true;
    (void 0).documentElement.classList.add("cursor-grabbing");
    const onPointerMove = (e2) => {
      const targetDay = e2.target?.dataset?.day;
      if (!targetDay) {
        return;
      }
      const targetDayDate = new Date(targetDay);
      const y = e2.offsetY - minutesToHeight(settings, 5);
      const dateClick = topToDate(settings, y, attr.customData.startDate);
      if (!dateClick) {
        return;
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision
      });
      if (!attr.customData.startDate) {
        return;
      }
      if (date !== attr.customData.startDate) {
        const diff = differenceInMinutes(
          attr.customData.endDate,
          attr.customData.startDate
        );
        const start = setYear(
          setMonth(
            setDay(date, targetDayDate.getDay()),
            targetDayDate.getMonth()
          ),
          targetDayDate.getFullYear()
        );
        const end = addMinutes(start, diff);
        const calendarEventsValue = toValue(calendarEvents);
        const idx = calendarEventsValue.findIndex(
          (item) => item.customData.id === attr.customData.id
        );
        calendarEventsValue[idx] = {
          ...calendarEventsValue[idx],
          customData: {
            ...calendarEventsValue[idx].customData,
            startDate: start,
            endDate: end
          },
          dates: [start, end]
        };
      }
    };
    const onPointerUp = async (e2) => {
      (void 0).documentElement.removeEventListener("pointerup", onPointerUp);
      (void 0).documentElement.removeEventListener("pointermove", onPointerMove);
      (void 0).documentElement.classList.remove("cursor-grabbing");
      const calendarEventsValue = toValue(calendarEvents);
      const idx = calendarEventsValue.findIndex(
        (item) => item.customData.id === attr.customData.id
      );
      if (idx !== -1) {
        await onDragEnd(attr);
      }
      setTimeout(() => {
        isPositionDragging.value = false;
      }, 100);
    };
    (void 0).documentElement.addEventListener("pointerup", onPointerUp, false);
    (void 0).documentElement.addEventListener(
      "pointermove",
      onPointerMove,
      false
    );
  }
  return {
    isHeightDragging,
    onHeightDragStart,
    isPositionDragging,
    onPositionDragStart
  };
}
function randomDate(start, end) {
  return roundToNearestMinutes(
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    { nearestTo: 15 }
  );
}
function useCalendarEvents(props) {
  const calendarEvents = ref([]);
  const pendingEvents = ref([]);
  async function refresh() {
    pendingEvents.value = [
      {
        id: "1",
        duration: 15,
        title: "\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u0627\u0633\u067E\u0631\u06CC\u0646\u062A",
        category: "team",
        features: {
          conversation: true,
          record: true,
          drive: true
        },
        participants: []
      },
      {
        id: "2",
        duration: 45,
        title: "\u062C\u0644\u0633\u0647 \u0647\u0641\u062A\u06AF\u06CC",
        category: "internal",
        features: {
          record: true,
          conversation: true
        },
        participants: [
          {
            photo: "/img/avatars/16.svg",
            name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631"
          },
          {
            photo: "/img/avatars/10.svg",
            name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646"
          }
        ]
      },
      {
        id: "3",
        duration: 90,
        title: "\u0628\u0627\u0632\u062E\u0648\u0631\u062F \u0645\u0634\u062A\u0631\u06CC",
        category: "customer",
        features: {
          record: true,
          external: true
        },
        participants: [
          {
            photo: "/img/avatars/5.svg",
            name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631"
          },
          {
            photo: "/img/avatars/8.svg",
            name: "\u0627\u062F\u06CC \u0628\u0631\u06CC\u06A9\u0633"
          },
          {
            photo: "/img/avatars/3.svg",
            name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A"
          }
        ]
      },
      {
        id: "4",
        duration: 30,
        title: "\u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0646\u0648\u06CC\u0633\u06CC \u062C\u0641\u062A\u06CC",
        category: "team",
        features: {
          conversation: true,
          drive: true
        },
        participants: []
      },
      {
        id: "5",
        duration: 60,
        title: "\u0628\u0631\u0631\u0633\u06CC \u06A9\u062F",
        category: "personal",
        features: {
          conversation: true
        },
        participants: []
      }
    ];
    for (let i = 0; i < 7; i++) {
      const date = addDays(toValue(props.fromDate), i);
      const events = [];
      const count = Math.floor(Math.random() * 3);
      for (let j = 0; j < count; j++) {
        const event = pendingEvents.value[Math.floor(Math.random() * pendingEvents.value.length)];
        const startDate = randomDate(addHours(date, 8), addHours(date, 18));
        const endDate = addMinutes(startDate, event.duration);
        events.push({
          key: `${i}-${j}`,
          customData: {
            ...event,
            id: `${i}-${j}`,
            startDate,
            endDate: addMinutes(startDate, event.duration)
          },
          dates: [startDate, endDate]
        });
      }
      calendarEvents.value.push(...events);
    }
  }
  watch([() => toValue(props.fromDate), () => toValue(props.toDate)], refresh, {
    immediate: true
  });
  return {
    calendarEvents,
    pendingEvents,
    refresh
  };
}
function useDragEventPending(settings, calendarEvents, onDragEnd = () => {
}) {
  const isPendingEventDragging = ref(false);
  const pendingEventDraggingId = ref("");
  function onPendingEventDragStart({ payload }) {
    if (isPendingEventDragging.value || !payload?.id) {
      return;
    }
    isPendingEventDragging.value = true;
    pendingEventDraggingId.value = payload.id;
    const ghostEvent = {
      key: payload.id,
      customData: payload,
      dates: [payload.startDate, payload.endDate]
    };
    const onPointerMove = (e) => {
      const targetDay = e.target?.dataset?.day;
      if (!targetDay) {
        clearPendingEventDragging();
        return;
      }
      const y = e.offsetY - minutesToHeight(settings, 5);
      const dateClick = topToDate(settings, y, new Date(targetDay));
      if (!dateClick) {
        return;
      }
      const date = roundToNearestMinutes(dateClick, {
        nearestTo: settings.hourPrecision
      });
      if (date !== ghostEvent.customData.startDate) {
        const start = date;
        const end = addMinutes(start, ghostEvent.customData.duration);
        const calendarEventsValue = toValue(calendarEvents);
        const idx = calendarEventsValue.findIndex(
          (item) => item.customData.id === ghostEvent.customData.id
        );
        if (idx === -1) {
          calendarEventsValue.push({
            ...ghostEvent,
            customData: {
              ...ghostEvent.customData,
              startDate: start,
              endDate: end
            },
            dates: [start, end]
          });
          return;
        }
        calendarEventsValue[idx] = {
          ...calendarEventsValue[idx],
          customData: {
            ...calendarEventsValue[idx].customData,
            startDate: start,
            endDate: end
          },
          dates: [start, end]
        };
      }
    };
    const onPointerUp = async (e) => {
      (void 0).documentElement.removeEventListener("pointerup", onPointerUp);
      (void 0).documentElement.removeEventListener("pointermove", onPointerMove);
      const calendarEventsValue = toValue(calendarEvents);
      const idx = calendarEventsValue.findIndex(
        (item) => item.customData.id === ghostEvent.customData.id
      );
      if (idx !== -1) {
        const event = calendarEventsValue[idx];
        calendarEventsValue.splice(idx, 1);
        await onDragEnd(event);
      }
      setTimeout(() => {
        isPendingEventDragging.value = false;
      }, 100);
    };
    (void 0).documentElement.addEventListener("pointerup", onPointerUp, false);
    (void 0).documentElement.addEventListener(
      "pointermove",
      onPointerMove,
      false
    );
  }
  function clearPendingEventDragging() {
    const calendarEventsValue = toValue(calendarEvents);
    const idx = calendarEventsValue.findIndex(
      (attr) => attr.customData.id === pendingEventDraggingId.value
    );
    if (idx !== -1) {
      calendarEventsValue.splice(idx, 1);
    }
  }
  return {
    isPendingEventDragging,
    pendingEventDraggingId,
    onPendingEventDragStart,
    clearPendingEventDragging
  };
}
function useDateRange(settings) {
  const fromDate = ref(
    startOfWeek(startOfDay(/* @__PURE__ */ new Date()), {
      weekStartsOn: settings.weekStartsOn
    })
  );
  const toDate = ref(
    endOfWeek(endOfDay(/* @__PURE__ */ new Date()), {
      weekStartsOn: settings.weekStartsOn
    })
  );
  function onPageChange(pages) {
    if (!pages[0]?.viewDays?.length) {
      return;
    }
    fromDate.value = pages[0].viewDays[0].startDate;
    toDate.value = pages[0].viewDays.at(-1).endDate;
  }
  const weekdays = computed(() => {
    const start = fromDate.value;
    const length = settings.hideWeekends ? 5 : 7;
    const dates = [];
    let i = 0;
    while (dates.length < length) {
      const date = addDays(start, i);
      const day = date.getDay();
      ++i;
      if (settings.hideWeekends && (day === 0 || day === 6)) {
        continue;
      }
      dates.push(date);
    }
    return dates;
  });
  return {
    fromDate,
    toDate,
    weekdays,
    onPageChange
  };
}
const categoryTheme = {
  none: {
    name: "\u0628\u062F\u0648\u0646 \u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC",
    color: "bg-muted-400 dark:bg-muted-600",
    outline: "outline-muted-500/30"
  },
  customer: {
    name: "\u0645\u0634\u062A\u0631\u06CC\u0627\u0646",
    color: "bg-lime-500",
    outline: "outline-lime-500/30"
  },
  internal: {
    name: "\u062F\u0627\u062E\u0644\u06CC",
    color: "bg-sky-500",
    outline: "outline-sky-500/30"
  },
  team: {
    name: "\u062A\u06CC\u0645",
    color: "bg-purple-500",
    outline: "outline-purple-500/30"
  },
  personal: {
    name: "\u0634\u062E\u0635\u06CC",
    color: "bg-rose-500",
    outline: "outline-rose-500/30"
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DemoCalendarEvent",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  emits: ["positiondrag"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex h-full gap-px p-1" }, _attrs))}><div role="button" class="dnd-drag-handler hover:bg-muted-100 dark:hover:bg-muted-900 m-px flex size-6 shrink-0 cursor-grab items-center justify-center rounded-full text-sm transition-colors duration-75">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:dots-six-vertical",
        class: "text-muted-500 dark:text-muted-200 size-4",
        onPointerdown: (e) => emits("positiondrag", e)
      }, null, _parent));
      _push(`</div><div class="w-full pe-1 [&amp;&gt;:not(:first-of-type):before]:mx-1"><div class="items-top flex w-full justify-between"><div><div class="text-muted-800 dark:text-muted-200 line-clamp-2"${ssrRenderAttr("title", _ctx.event.customData.title)}>${ssrInterpolate(_ctx.event.customData.title || "\u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F")}</div><div class="text-muted-400">${ssrInterpolate(unref(format)(_ctx.event.customData.startDate, "HH:mm"))} \u062A\u0627 ${ssrInterpolate(unref(format)(_ctx.event.customData.endDate, "HH:mm"))}</div></div>`);
      if (_ctx.event.customData.participants) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseAvatarGroup, {
          limit: 1,
          size: "xxs",
          avatars: _ctx.event.customData.participants.map((participant) => ({
            src: participant.photo,
            "data-nui-tooltip": participant.name,
            "data-nui-tooltip-position": "start"
          }))
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border-muted-200 dark:border-muted-700 mt-1 flex items-center justify-between border-t pt-2"><div class="flex flex-wrap gap-2">`);
      if (_ctx.event.customData.features?.record) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u0636\u0628\u0637 \u0634\u062F\u0647">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:monitor-play-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.customData.features?.drive) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0645\u062A\u0635\u0644">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:note-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.customData.features?.external) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u06CC\u0631\u0648\u0646\u06CC">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:lock-open-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.customData.features?.conversation) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u062F\u0627\u0631\u0627\u06CC \u062F\u06CC\u062F\u06AF\u0627\u0647">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:chats-circle-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><div class="${ssrRenderClass([[unref(categoryTheme)[_ctx.event.customData.category].color], "size-2 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", unref(categoryTheme)[_ctx.event.customData.category].name)} data-nui-tooltip-position="start"></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCalendarEvent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DemoCalendarEventPending",
  __ssrInlineRender: true,
  props: {
    event: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_2;
      const _component_BaseAvatarGroup = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-800 border-muted-200 dark:border-muted-700 group relative mb-4 flex h-full gap-px rounded-lg border bg-white p-4 transition duration-150 ease-out" }, _attrs))}><div role="button" class="dnd-drag-handler hover:bg-muted-100 dark:hover:bg-muted-900 m-px flex size-6 shrink-0 cursor-grab items-center justify-center rounded-full text-sm transition-colors duration-75">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:dots-six-vertical",
        class: "text-muted-500 dark:text-muted-200 size-4"
      }, null, _parent));
      _push(`</div><div class="w-full pe-1 [&amp;&gt;:not(:first-of-type):before]:mx-1"><div class="items-top flex w-full justify-between"><div><div class="text-muted-800 dark:text-muted-200 line-clamp-2 font-sans text-sm"${ssrRenderAttr("title", _ctx.event.title)}>${ssrInterpolate(_ctx.event.title)}</div><div class="text-muted-400 flex items-center gap-1 text-xs">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:clock",
        class: "text-muted-400 size-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.event.duration)} \u062F\u0642\u06CC\u0642\u0647</span></div></div>`);
      if (_ctx.event.participants) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_BaseAvatarGroup, {
          limit: 2,
          size: "xxs",
          avatars: _ctx.event.participants.map((participant) => ({
            src: participant.photo,
            "data-nui-tooltip": participant.name,
            "data-nui-tooltip-position": "start"
          }))
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border-muted-200 dark:border-muted-700 mt-1 flex items-center justify-between border-t pt-2"><div class="flex flex-wrap gap-2">`);
      if (_ctx.event.features?.record) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u0636\u0628\u0637 \u0634\u062F\u0647">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:monitor-play-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.features?.drive) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0645\u062A\u0635\u0644">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:note-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.features?.external) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u06CC\u0631\u0648\u0646\u06CC">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:lock-open-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.event.features?.conversation) {
        _push(`<span class="text-muted-400" data-nui-tooltip="\u062F\u0627\u0631\u0627\u06CC \u062F\u06CC\u062F\u06AF\u0627\u0647">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:chats-circle-duotone",
          class: "size-4"
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><div class="${ssrRenderClass([[unref(categoryTheme)[_ctx.event.category].color], "size-2 rounded-full"])}"${ssrRenderAttr("data-nui-tooltip", unref(categoryTheme)[_ctx.event.category].name)} data-nui-tooltip-position="start"></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DemoCalendarEventPending.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "calendar",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollCalendarRef = ref();
    const showSettings = ref(false);
    const settings = reactive({
      hideWeekends: false,
      hourOpen: 8,
      hourClose: 18,
      hourPrecision: 15,
      hourHeight: 160,
      dayOffsetY: 0,
      weekStartsOn: 0
    });
    function getChildPayload(index) {
      return pendingEvents.value?.[index - 1];
    }
    const { fromDate, toDate, weekdays, onPageChange } = useDateRange(settings);
    const { calendarEvents, pendingEvents } = useCalendarEvents({
      fromDate,
      toDate
    });
    const {
      isHeightDragging,
      isPositionDragging,
      onHeightDragStart,
      onPositionDragStart
    } = useDragEvent(
      settings,
      calendarEvents,
      // on drag end
      async (event) => {
      }
    );
    const { onCalendarClick, clearNew, hasNew } = useCreateEvent(
      settings,
      calendarEvents,
      // new event template
      (date) => ({
        startDate: date,
        endDate: addMinutes(date, 30),
        duration: 30,
        category: "none",
        title: "",
        participants: []
      }),
      // can create new event
      () => {
        return !(isHeightDragging.value || isPositionDragging.value || isViewPaning.value);
      },
      // on create
      async (event) => {
        calendarEvents.value.push(event);
        onSelectEvent(event.customData);
      }
    );
    const selectedEventId = ref();
    const selectedEvent = computed(() => {
      return calendarEvents.value.find(
        (event) => event?.customData?.id === selectedEventId.value
      )?.customData || pendingEvents.value.find((event) => event.id === selectedEventId.value);
    });
    function onSelectEvent(event) {
      if (event.id !== "\u062C\u062F\u06CC\u062F" && hasNew.value) {
        clearNew();
      }
      selectedEventId.value = event.id;
    }
    const { now, showNow } = useNowMarker(scrollCalendarRef, settings);
    const { isViewPaning, isViewMoved } = useViewPan(scrollCalendarRef, () => {
      return !(isHeightDragging.value || isPositionDragging.value);
    });
    const { isPendingEventDragging, onPendingEventDragStart } = useDragEventPending(
      settings,
      calendarEvents,
      // on drag end
      (event) => {
        onSelectEvent(event.customData);
        calendarEvents.value.push(event);
        const idx = pendingEvents.value.findIndex(
          (item) => item.id === event.customData.id
        );
        if (idx === -1) {
          return;
        }
        pendingEvents.value.splice(idx, 1);
      }
    );
    const isDragging = computed(
      () => isPendingEventDragging.value || isPositionDragging.value || isHeightDragging.value
    );
    function scrollCalendarToTop(top = 0, behavior = "smooth") {
      if (!scrollCalendarRef.value) {
        return;
      }
      scrollCalendarRef.value.scrollTo({
        top,
        behavior
      });
    }
    function updateHeight(height = 160) {
      if (!scrollCalendarRef.value) {
        return;
      }
      const top = scrollCalendarRef.value.scrollTop;
      const initialDate = topToDate(settings, top);
      settings.hourHeight = height;
      if (!initialDate) {
        return;
      }
      nextTick(() => {
        scrollCalendarToTop(dateToTop(settings, initialDate), "instant");
      });
    }
    const selectedEventFeatures = computed({
      get() {
        return selectedEvent.value?.features ? Object.keys(selectedEvent.value?.features) : [];
      },
      set(values) {
        if (!selectedEvent.value) {
          return;
        }
        selectedEvent.value.features = values.reduce(
          (acc, value) => {
            acc[value] = true;
            return acc;
          },
          {}
        );
      }
    });
    const formatter = (date) => {
      const dtf = new Intl.DateTimeFormat("fa-IR", {
        weekday: "long",
        day: "numeric",
        calendar: "Persian"
      });
      const parts = dtf.formatToParts(date);
      const dayName = parts.find((part) => part.type === "weekday")?.value;
      const dayNumber = parts.find((part) => part.type === "day")?.value;
      return `${dayName} ${dayNumber}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_TairoLogo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_DemoAccountMenu = _sfc_main$3;
      const _component_BaseButtonIcon = _sfc_main$4;
      const _component_DemoCalendarEvent = _sfc_main$2;
      const _component_TairoSidebarTools = _sfc_main$i;
      const _component_BaseInputNumber = _sfc_main$5;
      const _component_BaseSelect = _sfc_main$6;
      const _component_BaseButtonGroup = __nuxt_component_0$1;
      const _component_BaseButtonAction = _sfc_main$7;
      const _component_BaseSwitchThin = _sfc_main$8;
      const _component_BaseHeading = _sfc_main$w;
      const _component_BaseButtonClose = _sfc_main$x;
      const _component_BaseInput = _sfc_main$D;
      const _component_BaseListbox = __nuxt_component_0$2;
      const _component_BaseAutocomplete = _sfc_main$9;
      const _component_BaseCheckboxHeadless = _sfc_main$a;
      const _component_BaseCard = _sfc_main$u;
      const _component_DemoCalendarEventPending = _sfc_main$1;
      const _component_BaseParagraph = _sfc_main$v;
      const _directive_focus = resolveDirective("focus");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-muted-900 flex h-screen w-full select-none overflow-x-auto bg-white lg:overflow-hidden" }, _attrs))}><div class="border-muted-200 dark:border-muted-800/40 dark:bg-muted-800 fixed start-0 top-0 z-50 flex h-full w-20 flex-col items-center border-e bg-white lg:static">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards",
        class: "flex size-16 items-center justify-center"
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
      _push(`<nav class="relative flex h-full flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:tray-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="absolute -end-1 -top-1 flex size-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white"${_scopeId}> 3 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:tray-duotone",
                  class: "size-5"
                }),
                createVNode("span", { class: "absolute -end-1 -top-1 flex size-5 items-center justify-center rounded-full bg-pink-600 font-sans text-xs text-white" }, " 3 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:bookmark-simple-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:bookmark-simple-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/calendar",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-primary-500/10 text-primary-500 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:calendar-blank-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-primary-500/10 text-primary-500 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:calendar-blank-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:folder-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:folder-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:trash-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:trash-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dashboards/inbox",
        class: "relative flex size-16 items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ph:gear-six-duotone",
              class: "size-5"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl" }, [
                createVNode(_component_Icon, {
                  name: "ph:gear-six-duotone",
                  class: "size-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-auto flex flex-col items-center"><a href="#" class="relative flex size-16 items-center justify-center" title="\u0628\u0627\u0632\u06AF\u0634\u062A"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:arrow-left",
        class: "size-5 rtl:rotate-180"
      }, null, _parent));
      _push(`</div></a><button type="button" class="relative flex size-16 items-center justify-center"><div class="bg-muted-100 dark:bg-muted-700/60 text-muted-600 dark:text-muted-400 relative flex size-12 items-center justify-center rounded-xl">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "size-5"
      }, null, _parent));
      _push(`</div></button><div class="relative flex size-16 items-center justify-center">`);
      _push(ssrRenderComponent(_component_DemoAccountMenu, null, null, _parent));
      _push(`</div></div></nav></div><div class="border-muted-200 dark:border-muted-800 ms-20 flex w-[1500px] border-t lg:ms-0 lg:w-full"><div class="nui-slimscroll relative h-screen w-[1500px] grow space-y-14 overflow-auto lg:w-auto lg:overflow-x-hidden"><div role="button" tabindex="-1" class="dark:bg-muted-900 sticky top-0 z-20 flex bg-white"><div class="border-muted-200 dark:border-muted-800 w-10 border-b"></div><div class="${ssrRenderClass([[unref(settings).hideWeekends ? "grid-cols-5" : "grid-cols-7"], "border-muted-200 dark:border-muted-800 grid grow border-b"])}"><!--[-->`);
      ssrRenderList(unref(weekdays), (day) => {
        _push(`<span class="${ssrRenderClass([[unref(isPast)(unref(endOfDay)(day)) ? "opacity-50" : ""], "day-label text-muted-900 dark:text-muted-400 pointer-events-none flex h-[52px] items-center gap-2 p-3 text-sm"])}"><span>${ssrInterpolate(("capitalize" in _ctx ? _ctx.capitalize : unref(capitalize))(formatter(day)))}</span>`);
        if (unref(isToday)(day)) {
          _push(`<span class="text-primary-500 mb-[2px]">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ph:calendar-blank-duotone" }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      });
      _push(`<!--]--></div></div><div class="!mt-0 flex"><div class="w-10"><div class="h-16"></div><div><div class="border-muted-200 dark:border-muted-800 pointer-events-none grow border-t"><!--[-->`);
      ssrRenderList(unref(settings).hourClose - unref(settings).hourOpen, (i) => {
        _push(`<div class="border-muted-200 dark:border-muted-800 relative border-b" style="${ssrRenderStyle({
          height: `${unref(settings).hourHeight}px`
        })}"><span class="dark:bg-muted-900 text-muted-900 dark:text-muted-300 absolute -top-2 start-1 bg-white px-2 text-xs">${ssrInterpolate(i + (unref(settings).hourOpen - 1))}:00 </span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="grow">`);
      _push(ssrRenderComponent(unref(Calendar), {
        class: ["custom-calendar", {
          "hide-weekend": unref(settings).hideWeekends
        }],
        locale: "fa",
        view: "weekly",
        expanded: "",
        "trim-weeks": "",
        "disable-page-swipe": "",
        "title-position": "right",
        "first-day-of-week": unref(settings).weekStartsOn !== void 0 ? unref(settings).weekStartsOn + 1 : 1,
        attributes: unref(calendarEvents),
        "onUpdate:pages": unref(onPageChange)
      }, {
        "header-left-button": withCtx(({ movePrev }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "full",
              small: "",
              onClick: movePrev,
              onKeydown: movePrev
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-left",
                    class: "!top-auto !h-4 !w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-left",
                      class: "!top-auto !h-4 !w-4"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButtonIcon, {
                rounded: "full",
                small: "",
                onClick: movePrev,
                onKeydown: withKeys(movePrev, ["space", "enter"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:chevron-left",
                    class: "!top-auto !h-4 !w-4"
                  })
                ]),
                _: 2
              }, 1032, ["onClick", "onKeydown"])
            ];
          }
        }),
        "header-right-button": withCtx(({ moveNext }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BaseButtonIcon, {
              rounded: "full",
              small: "",
              onClick: moveNext,
              onKeydown: moveNext
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "!top-auto !h-4 !w-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-right",
                      class: "!top-auto !h-4 !w-4"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BaseButtonIcon, {
                rounded: "full",
                small: "",
                onClick: moveNext,
                onKeydown: withKeys(moveNext, ["space", "enter"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "lucide:chevron-right",
                    class: "!top-auto !h-4 !w-4"
                  })
                ]),
                _: 2
              }, 1032, ["onClick", "onKeydown"])
            ];
          }
        }),
        "day-content": withCtx(({
          day,
          attributes
        }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="button" tabindex="0"${ssrRenderAttr("data-day", day.date)} class="${ssrRenderClass([{
              "pointer-events-none": unref(isViewMoved)
            }, "group relative z-10 flex h-full flex-col p-0"])}"${_scopeId}>`);
            if (day.isToday && unref(showNow)) {
              _push2(`<div class="pointer-events-none absolute inset-x-0 z-50 h-px bg-red-500 before:block before:size-2 before:translate-y-[-3px] before:rounded-full before:bg-red-600 before:content-[&#39;&#39;] ltr:before:-translate-x-full rtl:before:translate-x-full" style="${ssrRenderStyle({
                top: `${unref(dateToTop)(unref(settings), unref(now), day.date)}px`
              })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-muted-200 dark:border-muted-800 pointer-events-none grow border-t"${_scopeId}><!--[-->`);
            ssrRenderList(unref(settings).hourClose - unref(settings)?.hourOpen, (i) => {
              _push2(`<div class="border-muted-200 dark:border-muted-800 relative border-b border-dashed" style="${ssrRenderStyle({
                height: `${unref(settings).hourHeight}px`
              })}"${_scopeId}><!--[-->`);
              ssrRenderList(4, (j) => {
                _push2(`<div class="border-muted-400 dark:border-muted-700 relative z-50 w-2 border-b" style="${ssrRenderStyle({
                  height: `${unref(settings).hourHeight / 4}px`
                })}"${_scopeId}><!--[-->`);
                ssrRenderList(2, (k) => {
                  _push2(`<div class="border-muted-300 dark:border-muted-800 relative z-50 w-1 border-b" style="${ssrRenderStyle({
                    height: `${unref(settings).hourHeight / 12}px`
                  })}"${_scopeId}></div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div><!--[-->`);
            ssrRenderList(attributes, (event) => {
              _push2(`<!--[--><div class="${ssrRenderClass([{
                "outline-dashed": event.customData.id === "\u062C\u062F\u06CC\u062F" && event.customData.id === unref(selectedEventId),
                outline: event.customData.id !== "\u062C\u062F\u06CC\u062F" && event.customData.id === unref(selectedEventId),
                [unref(categoryTheme)[event.customData.category].outline]: event.customData.id === unref(selectedEventId)
              }, "pointer-events-none absolute end-4 start-4 z-50 rounded-md outline-2 outline-offset-2"])}" style="${ssrRenderStyle({
                top: `${unref(dateToTop)(
                  unref(settings),
                  event.customData.startDate,
                  day.date
                )}px`,
                height: `${unref(datesToHeight)(
                  unref(settings),
                  event.customData.startDate,
                  event.customData.endDate,
                  day.date
                ) + 4}px`
              })}"${_scopeId}></div><div role="button" tabindex="0" class="${ssrRenderClass([{
                "opacity-50": unref(isPast)(unref(endOfDay)(day.date)),
                "pointer-events-none": unref(isDragging)
              }, "bg-muted-50 dark:bg-muted-800 border-muted-200 dark:border-muted-700 absolute end-4 start-4 z-10 cursor-pointer overflow-hidden rounded-t-md border border-b-0 text-xs"])}" style="${ssrRenderStyle({
                top: `${unref(dateToTop)(
                  unref(settings),
                  event.customData.startDate,
                  day.date
                )}px`,
                height: `${unref(datesToHeight)(
                  unref(settings),
                  event.customData.startDate,
                  event.customData.endDate,
                  day.date
                )}px`
              })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_DemoCalendarEvent, {
                event,
                onPositiondrag: (e) => unref(onPositionDragStart)(event, e)
              }, null, _parent2, _scopeId));
              _push2(`</div><div style="${ssrRenderStyle({
                top: `${unref(dateToTop)(
                  unref(settings),
                  event.customData.startDate,
                  day.date
                ) + unref(datesToHeight)(
                  unref(settings),
                  event.customData.startDate,
                  event.customData.endDate,
                  day.date
                )}px`
              })}" class="${ssrRenderClass([{
                "pointer-events-none": unref(isDragging)
              }, "dark:border-muted-800 dark:bg-muted-700/50 dark:hover:bg-muted-700/80 absolute bottom-0 end-4 start-4 h-[4px] cursor-n-resize rounded-b-md border border-t-0 bg-slate-50 hover:bg-slate-200"])}"${_scopeId}></div><!--]-->`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", {
                role: "button",
                tabindex: "0",
                class: ["group relative z-10 flex h-full flex-col p-0", {
                  "pointer-events-none": unref(isViewMoved)
                }],
                "data-day": day.date,
                onDblclick: (event) => unref(onCalendarClick)(event, day.date)
              }, [
                day.isToday && unref(showNow) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "pointer-events-none absolute inset-x-0 z-50 h-px bg-red-500 before:block before:size-2 before:translate-y-[-3px] before:rounded-full before:bg-red-600 before:content-[''] ltr:before:-translate-x-full rtl:before:translate-x-full",
                  style: {
                    top: `${unref(dateToTop)(unref(settings), unref(now), day.date)}px`
                  }
                }, null, 4)) : createCommentVNode("", true),
                createVNode("div", { class: "border-muted-200 dark:border-muted-800 pointer-events-none grow border-t" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(settings).hourClose - unref(settings)?.hourOpen, (i) => {
                    return openBlock(), createBlock("div", {
                      key: i,
                      class: "border-muted-200 dark:border-muted-800 relative border-b border-dashed",
                      style: {
                        height: `${unref(settings).hourHeight}px`
                      }
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (j) => {
                        return createVNode("div", {
                          key: j,
                          class: "border-muted-400 dark:border-muted-700 relative z-50 w-2 border-b",
                          style: {
                            height: `${unref(settings).hourHeight / 4}px`
                          }
                        }, [
                          (openBlock(), createBlock(Fragment, null, renderList(2, (k) => {
                            return createVNode("div", {
                              key: k,
                              class: "border-muted-300 dark:border-muted-800 relative z-50 w-1 border-b",
                              style: {
                                height: `${unref(settings).hourHeight / 12}px`
                              }
                            }, null, 4);
                          }), 64))
                        ], 4);
                      }), 64))
                    ], 4);
                  }), 128))
                ]),
                (openBlock(true), createBlock(Fragment, null, renderList(attributes, (event) => {
                  return openBlock(), createBlock(Fragment, {
                    key: event.key
                  }, [
                    createVNode("div", {
                      class: ["pointer-events-none absolute end-4 start-4 z-50 rounded-md outline-2 outline-offset-2", {
                        "outline-dashed": event.customData.id === "\u062C\u062F\u06CC\u062F" && event.customData.id === unref(selectedEventId),
                        outline: event.customData.id !== "\u062C\u062F\u06CC\u062F" && event.customData.id === unref(selectedEventId),
                        [unref(categoryTheme)[event.customData.category].outline]: event.customData.id === unref(selectedEventId)
                      }],
                      style: {
                        top: `${unref(dateToTop)(
                          unref(settings),
                          event.customData.startDate,
                          day.date
                        )}px`,
                        height: `${unref(datesToHeight)(
                          unref(settings),
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date
                        ) + 4}px`
                      }
                    }, null, 6),
                    createVNode("div", {
                      role: "button",
                      tabindex: "0",
                      class: ["bg-muted-50 dark:bg-muted-800 border-muted-200 dark:border-muted-700 absolute end-4 start-4 z-10 cursor-pointer overflow-hidden rounded-t-md border border-b-0 text-xs", {
                        "opacity-50": unref(isPast)(unref(endOfDay)(day.date)),
                        "pointer-events-none": unref(isDragging)
                      }],
                      style: {
                        top: `${unref(dateToTop)(
                          unref(settings),
                          event.customData.startDate,
                          day.date
                        )}px`,
                        height: `${unref(datesToHeight)(
                          unref(settings),
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date
                        )}px`
                      },
                      onClick: withModifiers(() => onSelectEvent(event.customData), ["stop"])
                    }, [
                      createVNode(_component_DemoCalendarEvent, {
                        event,
                        onPositiondrag: (e) => unref(onPositionDragStart)(event, e)
                      }, null, 8, ["event", "onPositiondrag"])
                    ], 14, ["onClick"]),
                    createVNode("div", {
                      class: ["dark:border-muted-800 dark:bg-muted-700/50 dark:hover:bg-muted-700/80 absolute bottom-0 end-4 start-4 h-[4px] cursor-n-resize rounded-b-md border border-t-0 bg-slate-50 hover:bg-slate-200", {
                        "pointer-events-none": unref(isDragging)
                      }],
                      style: {
                        top: `${unref(dateToTop)(
                          unref(settings),
                          event.customData.startDate,
                          day.date
                        ) + unref(datesToHeight)(
                          unref(settings),
                          event.customData.startDate,
                          event.customData.endDate,
                          day.date
                        )}px`
                      },
                      onPointerdown: (e) => unref(onHeightDragStart)(event, e)
                    }, null, 46, ["onPointerdown"])
                  ], 64);
                }), 128))
              ], 42, ["data-day", "onDblclick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="border-muted-200 dark:border-muted-800 hidden w-72 shrink-0 border-s sm:block"><div class="relative z-20 flex items-center justify-between p-2"><div><button type="button" class="border-muted-200 hover:ring-muted-200 dark:hover:ring-muted-700 dark:border-muted-800 dark:bg-muted-800 dark:ring-offset-muted-900 flex size-9 items-center justify-center rounded-full border bg-white ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:gear-six-duotone",
        class: "text-muted-400 size-5"
      }, null, _parent));
      _push(`</button></div>`);
      _push(ssrRenderComponent(_component_TairoSidebarTools, null, null, _parent));
      _push(`</div>`);
      if (unref(showSettings)) {
        _push(`<div class="dark:bg-muted-900 border-muted-300 dark:border-muted-800 border-y bg-white px-6 py-4"><div class="grid grid-cols-2 gap-x-2">`);
        _push(ssrRenderComponent(_component_BaseInputNumber, {
          modelValue: unref(settings).hourOpen,
          "onUpdate:modelValue": ($event) => unref(settings).hourOpen = $event,
          min: 0,
          max: unref(settings).hourClose - 1,
          label: "\u0628\u0627\u0632 \u0627\u0632",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInputNumber, {
          modelValue: unref(settings).hourClose,
          "onUpdate:modelValue": ($event) => unref(settings).hourClose = $event,
          min: unref(settings).hourOpen + 1,
          max: 24,
          label: "\u0628\u0633\u062A\u0646 \u062F\u0631",
          size: "sm"
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseInputNumber, {
          modelValue: unref(settings).hourPrecision,
          "onUpdate:modelValue": ($event) => unref(settings).hourPrecision = $event,
          min: 5,
          step: 5,
          max: 30,
          label: "\u062F\u0642\u062A",
          size: "sm",
          classes: { wrapper: "col-span-2" }
        }, null, _parent));
        _push(`</div><div class="grid grid-cols-3 items-end gap-x-2 gap-y-4">`);
        _push(ssrRenderComponent(_component_BaseSelect, {
          modelValue: unref(settings).weekStartsOn,
          "onUpdate:modelValue": ($event) => unref(settings).weekStartsOn = $event,
          modelModifiers: { number: true },
          label: "\u0634\u0631\u0648\u0639 \u0647\u0641\u062A\u0647 \u0628\u0627",
          size: "sm",
          classes: {
            wrapper: "col-span-2"
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<option${ssrRenderAttr("value", 0)}${_scopeId}> \u06CC\u06A9\u0634\u0646\u0628\u0647 </option><option${ssrRenderAttr("value", 1)}${_scopeId}> \u062F\u0648\u0634\u0646\u0628\u0647 </option><option${ssrRenderAttr("value", 2)}${_scopeId}> \u0633\u0647\u200C\u0634\u0646\u0628\u0647 </option><option${ssrRenderAttr("value", 3)}${_scopeId}> \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 </option><option${ssrRenderAttr("value", 4)}${_scopeId}> \u067E\u0646\u062C\u0634\u0646\u0628\u0647 </option><option${ssrRenderAttr("value", 5)}${_scopeId}> \u062C\u0645\u0639\u0647 </option><option${ssrRenderAttr("value", 6)}${_scopeId}> \u0634\u0646\u0628\u0647 </option>`);
            } else {
              return [
                createVNode("option", { value: 0 }, " \u06CC\u06A9\u0634\u0646\u0628\u0647 "),
                createVNode("option", { value: 1 }, " \u062F\u0648\u0634\u0646\u0628\u0647 "),
                createVNode("option", { value: 2 }, " \u0633\u0647\u200C\u0634\u0646\u0628\u0647 "),
                createVNode("option", { value: 3 }, " \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 "),
                createVNode("option", { value: 4 }, " \u067E\u0646\u062C\u0634\u0646\u0628\u0647 "),
                createVNode("option", { value: 5 }, " \u062C\u0645\u0639\u0647 "),
                createVNode("option", { value: 6 }, " \u0634\u0646\u0628\u0647 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_BaseButtonGroup, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseButtonAction, {
                rounded: "lg",
                color: unref(settings).hourHeight === 480 ? "muted" : "default",
                onClick: () => updateHeight(480)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, { name: "carbon:maximize" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, { name: "carbon:maximize" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_BaseButtonAction, {
                rounded: "lg",
                color: unref(settings).hourHeight === 160 ? "muted" : "default",
                onClick: () => updateHeight()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, { name: "carbon:minimize" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, { name: "carbon:minimize" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseButtonAction, {
                  rounded: "lg",
                  color: unref(settings).hourHeight === 480 ? "muted" : "default",
                  onClick: () => updateHeight(480)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, { name: "carbon:maximize" })
                  ]),
                  _: 1
                }, 8, ["color", "onClick"]),
                createVNode(_component_BaseButtonAction, {
                  rounded: "lg",
                  color: unref(settings).hourHeight === 160 ? "muted" : "default",
                  onClick: () => updateHeight()
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, { name: "carbon:minimize" })
                  ]),
                  _: 1
                }, 8, ["color", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-4">`);
        _push(ssrRenderComponent(_component_BaseSwitchThin, {
          modelValue: unref(settings).hideWeekends,
          "onUpdate:modelValue": ($event) => unref(settings).hideWeekends = $event,
          label: "\u0645\u062E\u0641\u06CC\u200C\u0633\u0627\u0632\u06CC \u0622\u062E\u0631 \u0647\u0641\u062A\u0647\u200C\u0647\u0627"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedEvent)) {
        _push(`<div class="${ssrRenderClass([{
          "overflow-y-auto overflow-x-hidden": !unref(showSettings),
          "overflow-hidden": unref(showSettings)
        }, "nui-slimscroll relative h-[calc(100vh_-_53px)] p-6 pt-4"])}">`);
        if (unref(showSettings)) {
          _push(`<div role="button" tabindex="0" class="absolute inset-0 z-50 cursor-pointer backdrop-blur-[2px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_BaseHeading, {
          size: "sm",
          weight: "medium",
          lead: "snug",
          class: "text-muted-400 dark:text-muted-500 mb-4 flex items-center justify-between uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0648\u06CC\u062F\u0627\u062F</span>`);
              _push2(ssrRenderComponent(_component_BaseButtonClose, {
                color: "default",
                class: "dark:bg-muted-800 bg-white",
                onClick: ($event) => selectedEventId.value = void 0
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0631\u0648\u06CC\u062F\u0627\u062F"),
                createVNode(_component_BaseButtonClose, {
                  color: "default",
                  class: "dark:bg-muted-800 bg-white",
                  onClick: ($event) => selectedEventId.value = void 0
                }, null, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="flex flex-col gap-2">`);
        _push(ssrRenderComponent(_component_BaseInput, mergeProps({
          modelValue: unref(selectedEvent).title,
          "onUpdate:modelValue": ($event) => unref(selectedEvent).title = $event,
          modelModifiers: { trim: true },
          label: "\u0639\u0646\u0648\u0627\u0646"
        }, ssrGetDirectiveProps(_ctx, _directive_focus)), null, _parent));
        _push(ssrRenderComponent(_component_BaseListbox, {
          modelValue: unref(selectedEvent).category,
          "onUpdate:modelValue": ($event) => unref(selectedEvent).category = $event,
          modelModifiers: { prop: true },
          label: "\u062F\u0633\u062A\u0647\u200C\u0628\u0646\u062F\u06CC",
          properties: {
            value: "value",
            label: "label"
          },
          items: Object.entries(unref(categoryTheme)).map(([key, item]) => ({
            value: key,
            label: item.name
          }))
        }, null, _parent));
        _push(ssrRenderComponent(_component_BaseAutocomplete, {
          modelValue: unref(selectedEvent).participants,
          "onUpdate:modelValue": ($event) => unref(selectedEvent).participants = $event,
          items: [
            {
              photo: "/img/avatars/16.svg",
              name: "\u0647\u0631\u0645\u0627\u0646 \u0645\u0627\u06CC\u0631"
            },
            {
              photo: "/img/avatars/10.svg",
              name: "\u06A9\u0646\u062F\u0631\u0627 \u0648\u06CC\u0644\u0633\u0648\u0646"
            },
            {
              photo: "/img/avatars/5.svg",
              name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u0645\u06CC\u0644\u0631"
            },
            {
              photo: "/img/avatars/8.svg",
              name: "\u0627\u062F\u06CC \u0628\u0631\u06CC\u06A9\u0633"
            },
            {
              photo: "/img/avatars/3.svg",
              name: "\u06A9\u0644\u0627\u0631\u06A9 \u0627\u0633\u0645\u06CC\u062A"
            },
            {
              name: "\u06A9\u0644\u0627\u0631\u06CC\u0633\u0627 \u067E\u0631\u0632",
              photo: "/img/avatars/19.svg"
            },
            {
              name: "\u0628\u0646\u062F\u06CC\u06A9\u062A \u06A9\u0633\u0644\u0631",
              photo: "/img/avatars/22.svg"
            },
            {
              name: "\u0645\u0627\u06CC\u0627 \u0631\u0648\u0633\u0644\u06CC\u0646\u06CC",
              photo: "/img/avatars/2.svg"
            }
          ],
          properties: {
            label: "name",
            media: "photo"
          },
          "display-value": (item) => item?.name || "",
          dropdown: "",
          multiple: "",
          "filter-items": (query, items) => {
            if (!query || !items) {
              return items ?? [];
            }
            return items.filter((item) => {
              const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase());
              const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase());
              return nameMatches || textMatches;
            });
          },
          icon: "ph:users-three",
          placeholder: "\u062C\u0633\u062A\u062C\u0648...",
          label: "\u0645\u0627\u0645\u0648\u0631",
          clearable: ""
        }, null, _parent));
        _push(`<div class="relative z-[5] grid grid-cols-4 gap-2 pt-4"><div data-nui-tooltip="\u0636\u0628\u0637">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "record",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:monitor-play-duotone",
                      class: "size-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:monitor-play-duotone",
                          class: "size-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:monitor-play-duotone",
                        class: "size-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div data-nui-tooltip="\u0634\u0627\u0645\u0644 \u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0648 \u0645\u062F\u0627\u0631\u06A9">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "drive",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:note-duotone",
                      class: "size-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:note-duotone",
                          class: "size-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:note-duotone",
                        class: "size-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div data-nui-tooltip="\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u06CC\u0631\u0648\u0646\u06CC">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "external",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:lock-open-duotone",
                      class: "size-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:lock-open-duotone",
                          class: "size-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:lock-open-duotone",
                        class: "size-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div data-nui-tooltip="\u0627\u062C\u0627\u0632\u0647 \u0627\u0631\u0633\u0627\u0644 \u062F\u06CC\u062F\u06AF\u0627\u0647">`);
        _push(ssrRenderComponent(_component_BaseCheckboxHeadless, {
          modelValue: unref(selectedEventFeatures),
          "onUpdate:modelValue": ($event) => isRef(selectedEventFeatures) ? selectedEventFeatures.value = $event : null,
          value: "conversation",
          name: "features"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_BaseCard, {
                rounded: "lg",
                class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col items-center gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ph:chats-circle-duotone",
                      class: "size-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                        createVNode(_component_Icon, {
                          name: "ph:chats-circle-duotone",
                          class: "size-5"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_BaseCard, {
                  rounded: "lg",
                  class: "text-muted-300 peer-checked:border-primary-500 peer-checked:text-primary-500 p-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex flex-col items-center gap-1" }, [
                      createVNode(_component_Icon, {
                        name: "ph:chats-circle-duotone",
                        class: "size-5"
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<div class="${ssrRenderClass([{
          "overflow-y-auto overflow-x-hidden": !unref(showSettings),
          "overflow-hidden": unref(showSettings)
        }, "nui-slimscroll relative h-[calc(100vh_-_53px)] p-6"])}">`);
        if (unref(showSettings)) {
          _push(`<div tabindex="0" role="button" class="absolute inset-0 z-50 cursor-pointer backdrop-blur-[2px]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(unref(Container), {
          class: "flex !min-h-[300px] flex-col",
          tag: "div",
          orientation: "vertical",
          "group-name": "unscheduled",
          "drag-class": "transform cursor-grabbing drop-shadow rotate-2 transform-gpu",
          "drag-handle-selector": ".dnd-drag-handler",
          "should-accept-drop": () => false,
          "get-child-payload": (idx) => getChildPayload(idx),
          "drop-placeholder": {
            className: "border-muted-200 border-dashed dark:border-muted-800 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white p-4 hover:bg-white"
          },
          onDragStart: (ctx) => {
            unref(clearNew)();
            unref(onPendingEventDragStart)(ctx);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(pendingEvents)?.length) {
                _push2(`<!--[-->`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  size: "sm",
                  weight: "medium",
                  lead: "snug",
                  class: "text-muted-400 dark:text-muted-500 mb-4 uppercase"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 `);
                    } else {
                      return [
                        createTextVNode(" \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<!--[-->`);
                ssrRenderList(unref(pendingEvents), (pendingEvent) => {
                  _push2(ssrRenderComponent(unref(Draggable), {
                    key: pendingEvent.id
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_DemoCalendarEventPending, {
                          event: pendingEvent,
                          role: "button",
                          onClick: () => onSelectEvent(pendingEvent)
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_DemoCalendarEventPending, {
                            event: pendingEvent,
                            role: "button",
                            onClick: () => onSelectEvent(pendingEvent)
                          }, null, 8, ["event", "onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<div${_scopeId}><div class="p-4"${_scopeId}><img class="mx-auto block max-w-[200px] dark:hidden"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}><img class="mx-auto hidden max-w-[200px] dark:block"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}><div class="mt-4 text-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_BaseHeading, {
                  as: "h4",
                  size: "lg",
                  weight: "light",
                  class: "mb-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u0647\u06CC\u0686 \u0631\u0648\u06CC\u062F\u0627\u062F \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F</span>`);
                    } else {
                      return [
                        createVNode("span", null, "\u0647\u06CC\u0686 \u0631\u0648\u06CC\u062F\u0627\u062F \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_BaseParagraph, {
                  size: "xs",
                  lead: "tight",
                  class: "text-muted-400 mx-auto max-w-[200px] !font-sans"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>\u062A\u0645\u0627\u0645 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F.</span>`);
                    } else {
                      return [
                        createVNode("span", null, "\u062A\u0645\u0627\u0645 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F.")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  href: "#",
                  class: "text-primary-500 nui-focus dark:text-sunny pointer-events-auto mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:plus",
                        class: "size-3"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span${_scopeId2}>\u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F</span>`);
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: "lucide:plus",
                          class: "size-3"
                        }),
                        createVNode("span", null, "\u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              }
            } else {
              return [
                unref(pendingEvents)?.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(_component_BaseHeading, {
                    size: "sm",
                    weight: "medium",
                    lead: "snug",
                    class: "text-muted-400 dark:text-muted-500 mb-4 uppercase"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 ")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(pendingEvents), (pendingEvent) => {
                    return openBlock(), createBlock(unref(Draggable), {
                      key: pendingEvent.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_DemoCalendarEventPending, {
                          event: pendingEvent,
                          role: "button",
                          onClick: () => onSelectEvent(pendingEvent)
                        }, null, 8, ["event", "onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ], 64)) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "p-4" }, [
                    createVNode("img", {
                      class: "mx-auto block max-w-[200px] dark:hidden",
                      src: _imports_0,
                      alt: ""
                    }),
                    createVNode("img", {
                      class: "mx-auto hidden max-w-[200px] dark:block",
                      src: _imports_1,
                      alt: ""
                    }),
                    createVNode("div", { class: "mt-4 text-center" }, [
                      createVNode(_component_BaseHeading, {
                        as: "h4",
                        size: "lg",
                        weight: "light",
                        class: "mb-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u0647\u06CC\u0686 \u0631\u0648\u06CC\u062F\u0627\u062F \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseParagraph, {
                        size: "xs",
                        lead: "tight",
                        class: "text-muted-400 mx-auto max-w-[200px] !font-sans"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "\u062A\u0645\u0627\u0645 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0647\u0641\u062A\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0631\u06CC\u0632\u06CC \u06A9\u0631\u062F\u0647\u200C\u0627\u06CC\u062F.")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        href: "#",
                        class: "text-primary-500 nui-focus dark:text-sunny pointer-events-auto mx-auto mt-2 flex items-center justify-center gap-1 font-sans text-xs underline-offset-4 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "lucide:plus",
                            class: "size-3"
                          }),
                          createVNode("span", null, "\u0631\u0648\u06CC\u062F\u0627\u062F \u062C\u062F\u06CC\u062F")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboards/calendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
