import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import localeData from "dayjs/plugin/localeData";
import {
  ArrowForward,
  CalendarOutline,
  ChevronBack,
  ChevronDoubleBack,
  ChevronDoubleForward,
  ChevronForward,
  CloseCircle,
  TimeOutline,
} from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onUnmounted,
  ref,
  Transition,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { Button } from "../button";
import type { BooleanType, DropPlacementsType, SizeType } from "../const/types";
import resize from "../directives/resize";
import { transfer } from "../directives/transfer";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
import { setPlacement } from "../utils/placement";
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.locale("zh-cn");

export const datePickerProps = {
  modelValue: { type: [Date, Object, Array, String, Number] as PropType<any>, default: null },
  startDate: { type: [Date, Object, String, Number] as PropType<any>, default: null },
  endDate: { type: [Date, Object, String, Number] as PropType<any>, default: null },
  valueType: {
    type: String as PropType<"date" | "timestamp" | "unix" | "string">,
    default: "string",
  },
  mode: {
    type: String as PropType<
      "year" | "month" | "date" | "time" | "dateTime" | "dateRange" | "dateTimeRange"
    >,
    default: "date",
  },
  presets: Array as PropType<{ label: string; value: any }[]>,
  disabled: Boolean as BooleanType,
  clearable: { type: Boolean as BooleanType, default: true },
  editable: { type: Boolean as BooleanType, default: true },
  placeholder: { type: [String, Array] as PropType<string | string[]>, default: "" },
  format: { type: [String, Array] as PropType<string | string[]>, default: null },
  disabledDate: { type: Function as PropType<(date: Date) => boolean>, default: () => false },
  disabledTime: { type: Function as PropType<(date: Date) => boolean>, default: () => false },
  size: { type: String as PropType<SizeType>, default: "default" },
  pickerSize: { type: String as PropType<SizeType>, default: "default" },
  dateIcon: [Array, Object] as PropType<any>,
  theme: { type: String as PropType<string>, default: "light" },
  shape: String,
  bordered: { type: Boolean as BooleanType, default: true },
  placement: {
    type: String as PropType<DropPlacementsType>,
    default: "bottom-left",
  },
};

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;

export default defineComponent({
  name: "DatePicker",
  directives: { transfer, resize },
  props: datePickerProps,
  emits: ["change", "update:modelValue", "update:startDate", "update:endDate"],

  setup(props, { emit, slots }) {
    const injectedLocale = inject<any>("locale", zhCN);
    const locale = computed(() => injectedLocale?.value || injectedLocale || zhCN);
    const localeName = computed(() => locale.value?.name || "zh-cn");
    const local = () => dayjs().locale(localeName.value).localeData();

    const isVisible = ref(false);
    const isFocus = ref(false);
    const rendered = ref(false);
    const currentPlacement = ref(props.placement);
    const left = ref(0);
    const top = ref(0);
    const transOrigin = ref("bottom");
    const refPopper = ref<HTMLElement | null>(null);
    const refSelection = ref<HTMLElement | null>(null);
    const timeColRefs = ref<Record<string, HTMLElement | null>>({});

    const panelDate = ref(dayjs());
    const innerValue = ref<Dayjs | (Dayjs | null)[] | null>(null);
    const textValue = ref("");
    const textValueStart = ref("");
    const textValueEnd = ref("");
    const hoverDate = ref<Dayjs | null>(null);
    const currentView = ref<"date" | "month" | "year" | "time">("date");
    const timeEditSide = ref<"start" | "end">("start");

    const isRange = computed(() => props.mode.includes("Range"));
    const isYearFirst = computed(() =>
      ["zh", "ja", "ko"].some((k) => localeName.value.toLowerCase().includes(k))
    );

    const getFormat = () => {
      if (props.format) return Array.isArray(props.format) ? props.format[0] : props.format;
      const map: Record<string, string> = {
        date: "YYYY-MM-DD",
        dateTime: "YYYY-MM-DD HH:mm:ss",
        dateRange: "YYYY-MM-DD",
        dateTimeRange: "YYYY-MM-DD HH:mm:ss",
        month: "YYYY-MM",
        time: "HH:mm:ss",
        year: "YYYY",
      };
      return map[props.mode] || "YYYY-MM-DD";
    };

    const formatOutputValue = (dayjsVal: Dayjs | null) => {
      if (!dayjsVal) return null;
      const d = dayjsVal.locale(localeName.value);
      switch (props.valueType) {
        case "timestamp":
          return d.valueOf();
        case "unix":
          return d.unix();
        case "string":
          return d.format(getFormat());
        default:
          return d.toDate();
      }
    };

    const syncTextFromValue = () => {
      const fmt = getFormat();
      if (!innerValue.value) {
        textValue.value = textValueStart.value = textValueEnd.value = "";
        return;
      }
      if (Array.isArray(innerValue.value)) {
        const [start, end] = innerValue.value;
        textValueStart.value = start ? start.format(fmt) : "";
        textValueEnd.value = end ? end.format(fmt) : "";
      } else {
        textValue.value = innerValue.value.locale(localeName.value).format(fmt);
      }
    };

    const parsePropValue = (val: any): Dayjs | null => {
      if (!val) return null;
      let d =
        props.valueType === "unix"
          ? dayjs.unix(Number(val))
          : dayjs(val, getFormat(), localeName.value);
      if (!d.isValid()) d = dayjs(val);
      return d.isValid() ? d.locale(localeName.value) : null;
    };

    watch(
      () => props.modelValue,
      (val) => {
        if (!val) {
          innerValue.value = null;
          syncTextFromValue();
          return;
        }
        if (isRange.value && Array.isArray(val)) {
          innerValue.value = val.map((d) => parsePropValue(d));
          if (!isFocus.value) syncTextFromValue();
          if ((innerValue.value as any[])[0]) panelDate.value = (innerValue.value as any[])[0];
        } else {
          const d = parsePropValue(val);
          innerValue.value = d;
          if (!isFocus.value) syncTextFromValue();
          if (d?.isValid()) panelDate.value = d;
        }
      },
      { immediate: true }
    );

    const emitValue = (closePanel = true) => {
      if (!innerValue.value) {
        emit("update:modelValue", null);
        emit("change", null, "");
        return;
      }
      const fmt = getFormat();
      if (Array.isArray(innerValue.value)) {
        const [start, end] = innerValue.value;
        if (start && end) {
          const dates = [start, end].sort((a, b) => a.valueOf() - b.valueOf());
          const out = dates.map((d) => formatOutputValue(d));
          emit("update:modelValue", out);
          emit("update:startDate", out[0]);
          emit("update:endDate", out[1]);
          emit(
            "change",
            dates,
            dates.map((d) => d.locale(localeName.value).format(fmt))
          );
          innerValue.value = dates;
          syncTextFromValue();
          if (closePanel) isVisible.value = false;
        }
      } else {
        const val = innerValue.value as Dayjs;
        emit("update:modelValue", formatOutputValue(val));
        emit("change", val, val.locale(localeName.value).format(fmt));
        syncTextFromValue();
        if (closePanel) isVisible.value = false;
      }
    };

    const handleInput = (e: Event, index = 0) => {
      const val = (e.target as HTMLInputElement).value;
      const fmt = getFormat();
      if (isRange.value) {
        if (index === 0) textValueStart.value = val;
        else textValueEnd.value = val;
      } else {
        textValue.value = val;
      }
      const d = dayjs(val, fmt, localeName.value, true);
      if (d.isValid()) {
        if (isRange.value) {
          const newArr = Array.isArray(innerValue.value) ? [...innerValue.value] : [null, null];
          newArr[index] = d;
          innerValue.value = newArr;
          panelDate.value = d;
          if (newArr[0] && newArr[1]) emitValue(false);
        } else {
          innerValue.value = d;
          panelDate.value = d;
          emitValue(false);
        }
      } else if (val === "") {
        if (isRange.value) {
          const newArr = Array.isArray(innerValue.value) ? [...innerValue.value] : [null, null];
          newArr[index] = null;
          innerValue.value = newArr;
        } else {
          innerValue.value = null;
          emitValue(false);
        }
      }
    };

    const updatePosition = () => {
      nextTick(() =>
        setPlacement({ refSelection, refPopper, currentPlacement, transOrigin, top, left })
      );
    };

    const togglePanel = () => {
      if (props.disabled || isVisible.value) return;
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", handleClickOutside);
      }
      isVisible.value = true;
      isFocus.value = true;
      const map: Record<string, typeof currentView.value> = {
        year: "year",
        month: "month",
        time: "time",
      };
      currentView.value = map[props.mode] || "date";

      let base = dayjs().locale(localeName.value);
      if (!innerValue.value) panelDate.value = base;
      else if (!Array.isArray(innerValue.value)) panelDate.value = innerValue.value;
      else panelDate.value = (innerValue.value as any[])[0] || base;

      updatePosition();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target as Node) &&
        refSelection.value &&
        !refSelection.value.contains(e.target as Node)
      ) {
        syncTextFromValue();
        isVisible.value = false;
        isFocus.value = false;
      }
    };

    const pickDate = (date: Dayjs) => {
      if (isRange.value) {
        let newVal = Array.isArray(innerValue.value) ? [...innerValue.value].filter((x) => x) : [];
        if (newVal.length === 2 || newVal.length === 0) {
          newVal = [date.startOf("day")];
        } else {
          const first = newVal[0] as Dayjs;
          const sorted = [first, date].sort((a, b) => a.valueOf() - b.valueOf());
          newVal = [sorted[0].startOf("day"), sorted[1].endOf("day")];
        }
        innerValue.value = newVal;
        if (newVal.length === 2) emitValue(props.mode !== "dateTimeRange");
      } else {
        if (props.mode === "dateTime") {
          const old = (innerValue.value as Dayjs) || dayjs();
          innerValue.value = date.hour(old.hour()).minute(old.minute()).second(old.second());
          emitValue(false);
        } else {
          innerValue.value = date;
          emitValue(true);
        }
      }
    };

    const handleTimeScrollPick = (type: string, val: number) => {
      let activeDate = dayjs();
      let idx = 0;
      if (props.mode === "dateTimeRange") {
        idx = timeEditSide.value === "start" ? 0 : 1;
        const currentSide = (innerValue.value as any[])?.[idx];
        if (currentSide) activeDate = currentSide;
        else return;
      } else {
        if (innerValue.value && !Array.isArray(innerValue.value)) activeDate = innerValue.value;
      }

      const nextDate = activeDate.set(type as any, val);
      if (props.disabledTime(nextDate.toDate())) return;

      if (props.mode === "dateTimeRange") {
        const newArr = [...((innerValue.value as any[]) || [null, null])];
        newArr[idx] = nextDate;
        innerValue.value = newArr;
      } else {
        innerValue.value = nextDate;
      }
      emitValue(false);
      timeColRefs.value[type]?.scrollTo({ top: val * 32 + 16, behavior: "smooth" });
    };

    onUnmounted(() => document.removeEventListener("click", handleClickOutside));

    // --- Helper Renders ---
    const renderHeader = () => {
      if (props.mode === "time") return null;
      const pDate = panelDate.value.locale(localeName.value);
      const yearLabel = `${pDate.year()}${locale.value?.k.datePicker.year || ""}`;
      const monthName = pDate.format("MMM");

      const yearNode = <span onClick={() => (currentView.value = "year")}>{yearLabel}</span>;
      const monthNode =
        props.mode !== "year" ? (
          <span class="k-picker-header-month-btn" onClick={() => (currentView.value = "month")}>
            {monthName}
          </span>
        ) : null;

      return (
        <div class="k-picker-header">
          <Button
            icon={ChevronDoubleBack}
            type="text"
            onClick={() => (panelDate.value = panelDate.value.subtract(10, "year"))}
          />
          {props.mode !== "year" && (
            <Button
              icon={ChevronBack}
              type="text"
              onClick={() => (panelDate.value = panelDate.value.subtract(1, "month"))}
            />
          )}
          <span class="k-picker-header-label">
            {isYearFirst.value ? [yearNode, monthNode] : [monthNode, yearNode]}
          </span>
          {props.mode !== "year" && (
            <Button
              icon={ChevronForward}
              type="text"
              onClick={() => (panelDate.value = panelDate.value.add(1, "month"))}
            />
          )}
          <Button
            type="text"
            icon={ChevronDoubleForward}
            onClick={() => (panelDate.value = panelDate.value.add(10, "year"))}
          />
        </div>
      );
    };

    const renderYearTable = () => {
      const startY = Math.floor(panelDate.value.year() / 10) * 10;
      const years = Array.from({ length: 12 }, (_, i) => startY - 1 + i);
      return (
        <div class="k-picker-body">
          <div class="k-picker-year-body">
            {years.map((y) => (
              <div
                key={y}
                class={[
                  "k-picker-year-item",
                  { "k-picker-year-selected": y === panelDate.value.year() },
                ]}
                onClick={() => {
                  panelDate.value = panelDate.value.year(y);
                  if (props.mode === "year") {
                    innerValue.value = panelDate.value;
                    emitValue(true);
                  } else currentView.value = "month";
                }}
              >
                {y}
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderMonthTable = () => {
      const months = local().monthsShort();
      return (
        <div class="k-picker-body">
          <div class="k-picker-month-body">
            {months.map((m, i) => (
              <div
                key={i}
                class={[
                  "k-picker-month-item",
                  { "k-picker-month-selected": i === panelDate.value.month() },
                ]}
                onClick={() => {
                  panelDate.value = panelDate.value.month(i);
                  if (props.mode === "month") {
                    innerValue.value = panelDate.value;
                    emitValue(true);
                  } else currentView.value = "date";
                }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      );
    };

    const renderDateTable = () => {
      const currentLocaleData = local();
      const firstDayOfWeek = currentLocaleData.firstDayOfWeek();
      const startOfMonth = panelDate.value.startOf("month");
      const diff = (startOfMonth.day() - firstDayOfWeek + 7) % 7;
      const days: { d: Dayjs; type: string }[] = [];

      for (let i = diff; i > 0; i--)
        days.push({ d: startOfMonth.subtract(i, "day"), type: "prev" });
      for (let i = 0; i < startOfMonth.daysInMonth(); i++)
        days.push({ d: startOfMonth.add(i, "day"), type: "curr" });
      const rem = 42 - days.length;
      for (let i = 1; i <= rem; i++)
        days.push({ d: startOfMonth.endOf("month").add(i, "day"), type: "next" });

      const weekDaysRaw = currentLocaleData.weekdaysMin();
      const weekDays = [
        ...weekDaysRaw.slice(firstDayOfWeek),
        ...weekDaysRaw.slice(0, firstDayOfWeek),
      ];

      return (
        <div class="k-picker-body">
          <div class="k-picker-weekdays">
            {weekDays.map((w) => (
              <span class="k-picker-weekday" key={w}>
                {w}
              </span>
            ))}
          </div>
          <div class="v-dp-table" onMouseleave={() => (hoverDate.value = null)}>
            {days.map((item, idx) => {
              const date = item.d;
              const isDisabled = props.disabledDate(date.toDate());
              let isSelected = false,
                inRange = false,
                isRangeStart = false,
                isRangeEnd = false;

              if (isRange.value && Array.isArray(innerValue.value)) {
                const [s, e] = innerValue.value;
                if (s && date.isSame(s, "day")) {
                  isSelected = true;
                  isRangeStart = true;
                }
                if (e && date.isSame(e, "day")) {
                  isSelected = true;
                  isRangeEnd = true;
                }
                if (s && e && date.isBetween(s, e, "day", "[]")) inRange = true;
                if (s && !e && hoverDate.value) {
                  const [min, max] = [s, hoverDate.value].sort((a, b) => a.valueOf() - b.valueOf());
                  if (date.isBetween(min, max, "day", "[]")) inRange = true;
                }
              } else if (innerValue.value && !Array.isArray(innerValue.value)) {
                if (date.isSame(innerValue.value as Dayjs, "day")) isSelected = true;
              }

              return (
                <div
                  key={idx}
                  class={[
                    "k-picker-day",
                    {
                      "k-picker-day-out": item.type !== "curr",
                      "k-picker-is-today": date.isSame(dayjs(), "day"),
                      "k-picker-day-selected": isSelected,
                      "k-picker-day-in": inRange && !isSelected,
                      "k-picker-range-start": isRangeStart,
                      "k-picker-range-end": isRangeEnd,
                      "k-picker-day-disabled": isDisabled,
                    },
                  ]}
                  onMouseenter={() => isRange.value && (hoverDate.value = date)}
                  onClick={() => !isDisabled && pickDate(date)}
                >
                  {date.date()}
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const renderTimePicker = () => {
      let activeDate = dayjs();
      if (props.mode === "dateTimeRange") {
        activeDate =
          (innerValue.value as any[])?.[timeEditSide.value === "start" ? 0 : 1] || dayjs();
      } else if (innerValue.value && !Array.isArray(innerValue.value)) {
        activeDate = innerValue.value as Dayjs;
      }

      const renderCol = (type: string, max: number) => {
        const curr = activeDate.get(type as any);
        return (
          <ul class="k-picker-time-col" ref={(el) => (timeColRefs.value[type] = el as HTMLElement)}>
            {Array.from({ length: max }).map((_, i) => {
              const isDisabled = props.disabledTime(activeDate.set(type as any, i).toDate());
              return (
                <li
                  key={i}
                  class={[
                    "k-picker-time-item",
                    { active: i === curr, "k-picker-time-disabled": isDisabled },
                  ]}
                  onClick={(e) => {
                    e.stopPropagation();
                    !isDisabled && handleTimeScrollPick(type, i);
                  }}
                >
                  {String(i).padStart(2, "0")}
                </li>
              );
            })}
          </ul>
        );
      };

      return (
        <div class="k-picker-time-picker">
          {renderCol("hour", 24)}
          {renderCol("minute", 60)}
          {renderCol("second", 60)}
        </div>
      );
    };

    const renderFooter = () => {
      if (!props.mode.includes("Time")) return null;
      if (props.mode === "dateTimeRange") {
        const [s, e] = ((innerValue.value as any[]) || [null, null]).map((d) =>
          d ? d.format("HH:mm:ss") : "--:--:--"
        );
        return (
          <div class="k-picker-footer">
            <div
              class={[
                "k-picker-footer-time",
                { active: currentView.value === "time" && timeEditSide.value === "start" },
              ]}
              onClick={(e) => {
                e.preventDefault();
                timeEditSide.value = "start";
                currentView.value = "time";
              }}
            >
              {s}
            </div>
            <span class="k-picker-footer-time-split">
              <Icon type={ArrowForward} />
            </span>
            <div
              class={[
                "k-picker-footer-time",
                { active: currentView.value === "time" && timeEditSide.value === "end" },
              ]}
              onClick={(e) => {
                e.preventDefault();
                timeEditSide.value = "end";
                currentView.value = "time";
              }}
            >
              {e}
            </div>
          </div>
        );
      }
      const t = ((innerValue.value as Dayjs) || dayjs()).format("HH:mm:ss");
      return (
        <div class="k-picker-footer">
          <div
            class={["k-picker-footer-time", { active: currentView.value === "time" }]}
            onClick={() => (currentView.value = currentView.value === "time" ? "date" : "time")}
          >
            {t}
          </div>
        </div>
      );
    };

    return () => {
      const localPlaceholders = {
        year: locale.value?.k.datePicker.selectYear,
        month: locale.value?.k.datePicker.selectMonth,
        date: locale.value?.k.datePicker.selectDate,
        dateTime: locale.value?.k.datePicker.selectDate,
        time: locale.value?.k.datePicker.selectTime,
        startDate: locale.value?.k.datePicker.startDate,
        endDate: locale.value?.k.datePicker.endDate,
      };

      const rootProps = {
        class: [
          "k-datepicker",
          {
            "k-datepicker-opened": isFocus.value,
            "k-datepicker-borderless": props.bordered === false,
            "k-datepicker-sm": props.size === "small",
            "k-datepicker-lg": props.size === "large",
            "k-datepicker-disabled": props.disabled,
            "k-datepicker-light": props.theme === "light",
            "k-datepicker-circle": props.shape === "circle",
          },
        ],
        ref: refSelection,
        tabindex: props.disabled ? undefined : 0,
      };

      const showClear =
        props.clearable && (textValue.value || textValueStart.value) && !props.disabled;
      const selectionProps = {
        class: ["k-datepicker-selection", { "k-datepicker-has-clear": showClear }],
        onClick: togglePanel,
      };

      const overlayProps = {
        class: "k-datepicker-overlay",
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        } as CSSProperties,
      };

      const renderInput = () => {
        const size = Math.max(10, getFormat().length);
        if (isRange.value) {
          const placeholders = Array.isArray(props.placeholder)
            ? props.placeholder
            : [props.placeholder, props.placeholder];
          return [
            <input
              autocomplete="off"
              size={size}
              tabindex={-1}
              class="k-datepicker-input"
              value={textValueStart.value}
              onInput={(e) => handleInput(e, 0)}
              placeholder={placeholders[0] || localPlaceholders.startDate}
              disabled={props.disabled}
              readonly={!props.editable}
              onClick={() => (timeEditSide.value = "start")}
            />,
            <span class="k-datepicker-separator">
              <Icon type={ArrowForward} />
            </span>,
            <input
              autocomplete="off"
              size={size}
              tabindex={-1}
              class="k-datepicker-input"
              value={textValueEnd.value}
              onInput={(e) => handleInput(e, 1)}
              placeholder={placeholders[1] || localPlaceholders.endDate}
              disabled={props.disabled}
              readonly={!props.editable}
              onClick={() => (timeEditSide.value = "end")}
            />,
          ];
        }
        return (
          <input
            autocomplete="off"
            size={size}
            tabindex={-1}
            class="k-datepicker-input"
            value={textValue.value}
            onInput={handleInput}
            placeholder={(props.placeholder as string) || (localPlaceholders as any)[props.mode]}
            disabled={props.disabled}
            readonly={!props.editable}
          />
        );
      };

      const extraEmit = (date: any) => {
        if (isRange.value && Array.isArray(date)) {
          innerValue.value = [dayjs(date[0]), dayjs(date[1])];
        } else {
          innerValue.value = dayjs(date);
        }
        emitValue(true);
      };

      const renderPresets = () =>
        props.presets?.length ? (
          <div class="k-picker-presets">
            {props.presets.map((x) => (
              <Button
                size="small"
                onClick={() => (typeof x.value === "function" ? extraEmit(x.value()) : null)}
              >
                {x.label}
              </Button>
            ))}
          </div>
        ) : null;

      const overlay = rendered.value ? (
        <Transition name="k-date-picker">
          <div
            v-transfer={true}
            v-show={isVisible.value}
            {...overlayProps}
            {...{ mode: props.mode }}
          >
            {renderPresets()}
            <div class="k-picker-container">
              {slots.header && (
                <div class="k-picker-extra-header">{slots.header({ emit: extraEmit })}</div>
              )}
              {renderHeader()}
              {currentView.value === "year" && renderYearTable()}
              {currentView.value === "month" && renderMonthTable()}
              {currentView.value === "date" && renderDateTable()}
              {currentView.value === "time" && renderTimePicker()}
              {renderFooter()}
              {slots.footer && (
                <div class="k-picker-extra-footer">{slots.footer({ emit: extraEmit })}</div>
              )}
            </div>
          </div>
        </Transition>
      ) : null;

      return (
        <div {...rootProps} v-resize={updatePosition}>
          <div {...selectionProps}>
            {renderInput()}
            <Icon
              type={props.mode === "time" ? TimeOutline : props.dateIcon || CalendarOutline}
              class="k-icon-calendar"
            />
            {showClear && (
              <Icon
                type={CloseCircle}
                class="k-icon-clean"
                onClick={(e) => {
                  e.stopPropagation();
                  innerValue.value = null;
                  syncTextFromValue();
                  emit("update:startDate", null);
                  emit("update:endDate", null);
                  emit("update:modelValue", null);
                  emit("change", null, "");
                }}
              />
            )}
          </div>
          {overlay}
        </div>
      );
    };
  },
});
