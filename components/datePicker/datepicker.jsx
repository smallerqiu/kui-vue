import {
  defineComponent,
  ref,
  watch,
  inject,
  computed,
  onUnmounted,
  nextTick,
} from "vue";
import dayjs from "dayjs";
import zhCN from "../locale/zh-CN";
import isBetween from "dayjs/plugin/isBetween";
import localeData from "dayjs/plugin/localeData";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  CloseCircle,
  CalendarOutline,
  TimeOutline,
  ChevronDoubleBack,
  ChevronBack,
  ChevronForward,
  ChevronDoubleForward,
  ArrowForward,
} from "kui-icons";
import { setPlacement } from "../utils/placement";
import transfer from "../directives/transfer";
import resize from "../directives/resize";
import { Button } from "../button";
import "dayjs/locale/zh-cn";
import { withInstall } from "../utils/vue";
// 启用插件
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
// dayjs.locale("en-gb");
dayjs.locale("zh-cn");

const DatePicker = defineComponent({
  name: "DatePicker",
  directives: {
    transfer,
    resize,
  },
  props: {
    value: { type: [Date, Object, Array, String, Number], default: null },
    startDate: { type: [Date, Object, String, Number], default: null },
    endDate: { type: [Date, Object, String, Number], default: null },
    valueType: {
      type: String,
      default: "string",
      validator: (v) => ["date", "timestamp", "unix", "string"].includes(v),
    },
    mode: {
      type: String,
      default: "date",
      validator: (v) =>
        [
          "year",
          "month",
          "date",
          "time",
          "dateTime",
          "dateRange",
          "dateTimeRange",
        ].includes(v),
    },
    presets: Array,
    disabled: { type: Boolean },
    clearable: { type: Boolean, default: true },
    editable: { type: Boolean, default: true },
    placeholder: { type: [String, Array], default: "" },
    format: { type: [String, Array], default: null },
    disabledDate: { type: Function, default: () => false },
    disabledTime: { type: Function, default: () => false },
    size: { type: String, default: "default" },
    pickerSize: { type: String, default: "default" },
    dateIcon: { type: [Array, Object] },
    theme: { type: String, default: "light" },
    shape: String,
    bordered: { type: Boolean, default: true },
    placement: {
      validator(value) {
        return [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-left",
          "bottom-right",
        ].includes(value);
      },
      default: "bottom-left",
    },
  },
  emits: ["change"],

  setup(props, { emit, slots }) {
    const injectedLocale = inject("locale", zhCN);
    const locale = computed(() => {
      return (
        (injectedLocale instanceof Object && "value" in injectedLocale
          ? injectedLocale.value
          : injectedLocale) || zhCN
      );
    });
    const local = () => {
      return dayjs().locale(localeName.value).localeData();
    };

    const localeName = computed(() => {
      return locale.value.name || "zh-cn";
    });

    const isVisible = ref(false);
    const isFocus = ref(false);
    const rendered = ref(false);
    const currentPlacement = ref(props.placement);
    const left = ref(0);
    const top = ref(0);
    const transOrigin = ref("bottom");
    const refPopper = ref(null);
    const refSelection = ref(null);

    const timeColRefs = ref({});

    // 面板显示的基准日期
    const panelDate = ref(dayjs());
    // 内部存储值 (Dayjs Object 或 Array<Dayjs>)
    const innerValue = ref(null);
    // 输入框显示文本
    const textValue = ref("");
    const textValueStart = ref(""); // 范围模式-开始
    const textValueEnd = ref(""); // 范围模式-结束
    // 范围选择时的悬停日期
    const hoverDate = ref(null);

    // 视图模式: 'date' | 'month' | 'year' | 'time'
    const currentView = ref("date");

    // Range 模式下，当前时间面板编辑的是哪一端: 'start' | 'end'
    const timeEditSide = ref("start");
    const isRange = computed(() => props.mode.includes("Range"));

    watch(localeName, () => {
      syncTextFromValue();
    });

    // CJK 语系习惯 "年-月" 顺序
    const isYearFirst = computed(() => {
      const name = localeName.value.toLowerCase();
      return ["zh", "ja", "ko"].some((k) => name.includes(k));
    });
    const formatOutputValue = (dayjsVal) => {
      if (!dayjsVal) return null;
      const d = dayjsVal.locale(localeName.value);
      switch (props.valueType) {
        case "timestamp": // Long (毫秒)
          return d.valueOf();
        case "unix": // Unix (秒)
          return d.unix();
        case "string": // String (基于 format)
          return d.format(getFormat());
        case "date": // Native Date
        default:
          return d.toDate();
      }
    };
    const getFormat = () => {
      if (props.format)
        return Array.isArray(props.format) ? props.format[0] : props.format;
      const map = {
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

    const scrollToCurrentTime = () => {
      nextTick(() => {
        let activeDate = dayjs();
        if (props.mode === "dateTimeRange") {
          const idx = timeEditSide.value === "start" ? 0 : 1;
          if (innerValue.value && innerValue.value[idx])
            activeDate = innerValue.value[idx];
        } else {
          if (innerValue.value && !Array.isArray(innerValue.value))
            activeDate = innerValue.value;
        }

        const targets = {
          hour: activeDate.hour(),
          minute: activeDate.minute(),
          second: activeDate.second(),
        };

        ["hour", "minute", "second"].forEach((type) => {
          const el = timeColRefs.value[type];
          if (el) {
            el.scrollTop = targets[type] * 32 + 16;
          }
        });
      });
    };

    watch([currentView, timeEditSide], ([v]) => {
      if (v === "time") scrollToCurrentTime();
    });

    const syncTextFromValue = () => {
      const fmt = getFormat();
      //  空值
      if (!innerValue.value) {
        textValue.value = "";
        textValueStart.value = "";
        textValueEnd.value = "";
        return;
      }

      const fmtDate = (d) => (d ? d.locale(localeName.value).format(fmt) : "");
      //  Range 模式
      if (Array.isArray(innerValue.value)) {
        const [start, end] = innerValue.value;
        textValueStart.value = start ? start.format(fmt) : "";
        textValueEnd.value = end ? end.format(fmt) : "";
      } else {
        textValue.value = fmtDate(innerValue.value);
      }
    };

    const parsePropValue = (val) => {
      if (val === null || val === undefined || val === "") return null;
      let d;
      if (props.valueType === "unix") {
        d = dayjs.unix(Number(val));
      } else {
        const fmt = getFormat();
        d = dayjs(val, fmt, localeName.value);
        if (!d.isValid()) {
          d = dayjs(val);
        }
      }

      return d.isValid() ? d.locale(localeName.value) : null;
    };

    watch(
      () => props.value,
      (val) => {
        if (!val) {
          innerValue.value = null;
          syncTextFromValue();
          return;
        }
        if (isRange.value && Array.isArray(val)) {
          innerValue.value = val.map((d) => {
            const parsed = parsePropValue(d);
            return parsed?.isValid() ? parsed : null;
          });
          if (!isFocus.value) syncTextFromValue();
          // 设置面板基准时间
          if (innerValue.value[0]) panelDate.value = innerValue.value[0];
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
        emit("input", null);
        // emit("update:value", null);
        emit("change", null, "");
        return;
      }
      const fmt = getFormat();
      const getStr = (d) => d.locale(localeName.value).format(fmt);

      if (Array.isArray(innerValue.value)) {
        const [start, end] = innerValue.value;
        if (start && end) {
          // 自动排序，防止开始时间晚于结束时间
          const dates = [start, end].sort((a, b) => a.valueOf() - b.valueOf());
          const out = dates.map((d) => formatOutputValue(d));
          emit("input", out);
          emit("update:startDate", out[0]);
          emit("update:endDate", out[1]);
          // emit(
          //   "update:value",
          //   dates.map((d) => d.toDate())
          // );
          emit(
            "change",
            dates,
            dates.map((d) => getStr(d))
          );

          innerValue.value = dates;
          syncTextFromValue();

          if (closePanel) isVisible.value = false;
        }
      } else {
        emit("input", formatOutputValue(innerValue.value));
        // emit("update:value", innerValue.value.toDate());
        emit("change", innerValue.value, getStr(innerValue.value));
        syncTextFromValue();
        if (closePanel) isVisible.value = false;
      }
    };

    const handleInput = (e, index = 0) => {
      const val = e.target.value;
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
          const newArr = Array.isArray(innerValue.value)
            ? [...innerValue.value]
            : [null, null];

          newArr[index] = d;
          innerValue.value = newArr;
          panelDate.value = d;

          if (newArr[0] && newArr[1]) {
            emitValue(false);
          }
        } else {
          innerValue.value = d;
          panelDate.value = d;
          emitValue(false);
        }
      } else if (val === "") {
        if (isRange.value) {
          const newArr = Array.isArray(innerValue.value)
            ? [...innerValue.value]
            : [null, null];
          newArr[index] = null;
          innerValue.value = newArr;
        } else {
          innerValue.value = null;
          emitValue(false);
        }
      }
    };

    const updatePanelState = () => {
      if (isVisible.value) return;

      isVisible.value = true;
      isFocus.value = true;

      if (props.mode === "year") currentView.value = "year";
      else if (props.mode === "month") currentView.value = "month";
      else if (props.mode === "time") currentView.value = "time";
      else currentView.value = "date";

      // 打开时，如果没有值，面板显示当前时间；如果有值，显示选中值的时间
      let base = dayjs().locale(localeName.value);
      if (!innerValue.value) {
        panelDate.value = base;
      } else if (!Array.isArray(innerValue.value)) {
        panelDate.value = innerValue.value;
      } else if (innerValue.value[0]) {
        panelDate.value = innerValue.value[0];
      } else {
        panelDate.value = base;
      }
    };

    // 切换面板
    const togglePanel = () => {
      if (props.disabled || isVisible.value) return;
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", handleClickOutside);
        nextTick(() => {
          updatePanelState();
          updatePosition();
        });
      } else {
        updatePanelState();
        updatePosition();
      }
    };

    const handleClickOutside = (e) => {
      const ctx = refSelection.value;
      const popper = refPopper.value;
      if (
        popper &&
        !popper.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        syncTextFromValue();
        isVisible.value = false;
        isFocus.value = false;
      }
    };
    const timeLabelClick = (e, direction) => {
      e.preventDefault();
      if (timeEditSide.value == direction && currentView.value == "time") {
        currentView.value = "date";
        return;
      }
      timeEditSide.value = direction; //"start";
      currentView.value = "time";
    };

    const pickDate = (date) => {
      if (isRange.value) {
        let newVal = Array.isArray(innerValue.value)
          ? [...innerValue.value]
          : [];
        // 清理一下可能的 null
        newVal = newVal.filter((x) => x);

        if (newVal.length === 2 || newVal.length === 0) {
          newVal = [date.startOf("day")];
        } else {
          const first = newVal[0];
          const second = date;

          let start, end;
          if (second.isBefore(first)) {
            start = second;
            end = first;
          } else {
            start = first;
            end = second;
          }
          start = start.startOf("day");
          end = end.endOf("day");
          newVal = [start, end];
        }
        innerValue.value = newVal;

        if (newVal.length === 2) {
          if (props.mode === "dateTimeRange") emitValue(false);
          else emitValue(true);
        }
      } else {
        if (props.mode === "dateTime") {
          const old = innerValue.value || dayjs();
          innerValue.value = date
            .hour(old.hour())
            .minute(old.minute())
            .second(old.second());
          emitValue(false);
        } else {
          innerValue.value = date;
          emitValue(true);
        }
      }
    };

    const pickYear = (y) => {
      panelDate.value = panelDate.value.year(y);
      if (props.mode === "year") {
        innerValue.value = panelDate.value;
        emitValue(true);
      } else {
        setTimeout(() => {
          currentView.value = "month";
        }, 0);
      }
    };

    const pickMonth = (m) => {
      panelDate.value = panelDate.value.month(m);
      if (props.mode === "month") {
        innerValue.value = panelDate.value;
        emitValue(true);
      } else {
        setTimeout(() => {
          currentView.value = "date";
        }, 0);
      }
    };
    const checkTimeDisabled = (d) => {
      if (!props.disabledTime || !d) return false;
      // 传入原生 Date 对象给用户校验
      return props.disabledTime(d.toDate());
    };
    const handleTimeScrollPick = (type, val) => {
      let activeDate = dayjs();
      let idx = 0;

      if (props.mode === "dateTimeRange") {
        idx = timeEditSide.value === "start" ? 0 : 1;
        if (innerValue.value && innerValue.value[idx]) {
          activeDate = innerValue.value[idx];
        } else if (
          Array.isArray(innerValue.value) &&
          innerValue.value[idx] === null
        ) {
          return;
        }
      } else {
        if (innerValue.value && !Array.isArray(innerValue.value)) {
          activeDate = innerValue.value;
        }
      }
      const nextDate = activeDate.set(type, val);

      if (checkTimeDisabled(nextDate)) {
        // 如果禁用，直接拦截，不更新值
        return;
      }

      if (props.mode === "dateTimeRange") {
        const newArr = [...(innerValue.value || [null, null])];
        newArr[idx] = nextDate;
        innerValue.value = newArr;
        emitValue(false);
      } else {
        innerValue.value = nextDate;
        emitValue(false);
      }

      const el = timeColRefs.value[type];
      if (el) el.scrollTo({ top: val * 32 + 16, behavior: "smooth" });
    };

    const renderHeader = () => {
      if (props.mode === "time") return null;

      const pDate = panelDate.value.locale(localeName.value);
      const year = pDate.year();
      const monthName = pDate.format("MMM");
      // const month = pDate.month() + 1;

      const yearSuffix = locale.value.k.datePicker.year || "";
      const yearLabel = `${year}${yearSuffix}`;

      const yearNode = (
        <span onClick={() => (currentView.value = "year")}>{yearLabel}</span>
      );

      const monthNode =
        props.mode !== "year" ? (
          <span
            class="k-picker-header-month-btn"
            onClick={() => (currentView.value = "month")}
          >
            {monthName}
          </span>
        ) : null;

      return (
        <div class="k-picker-header">
          <Button
            icon={ChevronDoubleBack}
            type="text"
            onClick={() =>
              (panelDate.value = panelDate.value.subtract(10, "year"))
            }
          />

          {props.mode !== "year" ? (
            <Button
              icon={ChevronBack}
              type="text"
              onClick={() =>
                (panelDate.value = panelDate.value.subtract(1, "month"))
              }
            />
          ) : null}
          <span class="k-picker-header-label">
            {isYearFirst.value ? [yearNode, monthNode] : [monthNode, yearNode]}
          </span>

          {props.mode !== "year" ? (
            <Button
              icon={ChevronForward}
              type="text"
              onClick={() =>
                (panelDate.value = panelDate.value.add(1, "month"))
              }
            />
          ) : null}
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
                  y === panelDate.value.year() ? "k-picker-year-selected" : "",
                ]}
                onClick={() => pickYear(y)}
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
                  i === panelDate.value.month()
                    ? "k-picker-month-selected"
                    : "",
                ]}
                onClick={() => pickMonth(i)}
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
      const startDay = startOfMonth.day(); // 当前月第一天是周几 (0-6, 0总是周日)

      const days = [];

      const diff = (startDay - firstDayOfWeek + 7) % 7;

      for (let i = diff; i > 0; i--) {
        days.push({ d: startOfMonth.subtract(i, "day"), type: "prev" });
      }

      for (let i = 0; i < startOfMonth.daysInMonth(); i++) {
        days.push({ d: startOfMonth.add(i, "day"), type: "curr" });
      }

      const rem = 42 - days.length;
      for (let i = 1; i <= rem; i++) {
        days.push({
          d: startOfMonth.endOf("month").add(i, "day"),
          type: "next",
        });
      }

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

              let isSelected = false;
              let inRange = false;
              let isRangeStart = false;
              let isRangeEnd = false;

              if (
                props.mode.includes("Range") &&
                Array.isArray(innerValue.value)
              ) {
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
                // 悬停预览
                if (s && !e && hoverDate.value) {
                  const min = s.isBefore(hoverDate.value) ? s : hoverDate.value;
                  const max = s.isBefore(hoverDate.value) ? hoverDate.value : s;
                  if (date.isBetween(min, max, "day", "[]")) inRange = true;
                }
              } else if (innerValue.value && !Array.isArray(innerValue.value)) {
                if (date.isSame(innerValue.value, "day")) isSelected = true;
              }

              return (
                <div
                  key={idx}
                  class={[
                    "k-picker-day",
                    item.type !== "curr" ? "k-picker-day-out" : "",
                    date.isSame(dayjs(), "day") ? "k-picker-is-today" : "",
                    isSelected ? "k-picker-day-selected" : "",
                    inRange && !isSelected ? "k-picker-day-in" : "",
                    isRangeStart ? "k-picker-range-start" : "",
                    isRangeEnd ? "k-picker-range-end" : "",
                    isDisabled ? "k-picker-day-disabled" : "",
                  ]}
                  onMouseenter={() => {
                    if (props.mode.includes("Range")) hoverDate.value = date;
                  }}
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
        const idx = timeEditSide.value === "start" ? 0 : 1;
        if (innerValue.value && innerValue.value[idx])
          activeDate = innerValue.value[idx];
      } else if (innerValue.value && !Array.isArray(innerValue.value)) {
        activeDate = innerValue.value;
      }

      const renderCol = (type, max) => {
        const curr =
          type === "hour"
            ? activeDate.hour()
            : type === "minute"
              ? activeDate.minute()
              : activeDate.second();
        return (
          <ul
            class="k-picker-time-col"
            ref={(el) => (timeColRefs.value[type] = el)}
          >
            {Array.from({ length: max }).map((_, i) => {
              const tempDate = activeDate.set(type, i);
              const isDisabled = checkTimeDisabled(tempDate);
              return (
                <li
                  key={i}
                  class={[
                    "k-picker-time-item",
                    i === curr ? "active" : "",
                    isDisabled ? "k-picker-time-disabled" : "",
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
        const s =
          innerValue.value && innerValue.value[0]
            ? innerValue.value[0].format("HH:mm:ss")
            : "--:--:--";
        const e =
          innerValue.value && innerValue.value[1]
            ? innerValue.value[1].format("HH:mm:ss")
            : "--:--:--";
        return (
          <div class="k-picker-footer">
            <div
              class={[
                "k-picker-footer-time",
                currentView.value === "time" && timeEditSide.value === "start"
                  ? "active"
                  : "",
              ]}
              onClick={(e) => timeLabelClick(e, "start")}
            >
              {s}
            </div>
            <span class="k-picker-footer-time-split">
              <Icon type={ArrowForward} />
            </span>
            <div
              class={[
                "k-picker-footer-time",
                currentView.value === "time" && timeEditSide.value === "end"
                  ? "active"
                  : "",
              ]}
              onClick={(e) => timeLabelClick(e, "end")}
            >
              {e}
            </div>
          </div>
        );
      } else {
        const t = (innerValue.value || dayjs()).format("HH:mm:ss");
        return (
          <div class="k-picker-footer">
            <div
              class={[
                "k-picker-footer-time",
                currentView.value === "time" ? "active" : "",
              ]}
              onClick={() =>
                (currentView.value =
                  currentView.value === "time" ? "date" : "time")
              }
            >
              {t}
            </div>
          </div>
        );
      }
    };
    const updatePosition = () => {
      nextTick(() => {
        setPlacement({
          refSelection,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
      });
    };
    onUnmounted(() =>
      document.removeEventListener("click", handleClickOutside)
    );

    return () => {
      const localPlaceholders = {
        year: locale?.value.k.datePicker.selectYear,
        month: locale?.value.k.datePicker.selectMonth,
        date: locale?.value.k.datePicker.selectDate,
        dateTime: locale?.value.k.datePicker.selectDate,
        time: locale?.value.k.datePicker.selectTime,
        startDate: locale?.value.k.datePicker.startDate,
        endDate: locale?.value.k.datePicker.endDate,
      };
      const classes = [
        "k-datepicker",
        { "k-datepicker-opened": isFocus.value },
        //   { 'k-datepicker-range': isRange },
        { "k-datepicker-borderless": props.bordered === false },
        { "k-datepicker-sm": props.size == "small" },
        { "k-datepicker-lg": props.size == "large" },
        //   { 'k-datepicker-with-time': withTime },
        { "k-datepicker-disabled": props.disabled },
        { "k-datepicker-light": props.theme == "light" },
        { "k-datepicker-circle": props.shape == "circle" },
      ];
      const showClear =
        props.clearable &&
        (textValue.value || (textValueStart.value && textValueStart.value)) &&
        !props.disabled;
      const selectCls = [
        "k-datepicker-selection",
        {
          "k-datepicker-has-clear": showClear,
        },
      ];
      const dateIcon =
        props.mode == "time" ? TimeOutline : props.dateIcon || CalendarOutline;
      const overlayProps = {
        class: "k-datepicker-overlay",
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
      };

      const renderInput = () => {
        const fmt = getFormat();
        const len = fmt ? fmt.length : 10;
        const size = Math.max(10, len);
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
              readonly={props.editable ? false : true}
              onClick={() => {
                timeEditSide.value = "start";
              }} // 聚焦开始
            />,
            <span class="k-datepicker-separator">
              <Icon type={ArrowForward} />
            </span>,
            <input
              size={size}
              tabindex={-1}
              readonly={props.editable ? false : true}
              autocomplete="off"
              class="k-datepicker-input"
              value={textValueEnd.value}
              onInput={(e) => handleInput(e, 1)}
              placeholder={placeholders[1] || localPlaceholders.endDate}
              disabled={props.disabled}
              onClick={() => {
                timeEditSide.value = "end";
              }} // 聚焦结束
            />,
          ];
        } else {
          return (
            <input
              tabindex={-1}
              autocomplete="off"
              readonly={props.editable ? false : true}
              size={size}
              class="k-datepicker-input"
              value={textValue.value}
              onInput={(e) => handleInput(e)}
              placeholder={props.placeholder || localPlaceholders[props.mode]}
              disabled={props.disabled}
            />
          );
        }
      };
      const presetEmit = ({ value }) => {
        if (typeof value === "function") {
          let date = value();
          if (isRange.value && Array.isArray(date)) {
            date = [dayjs(date[0]), dayjs(date[1])];
            innerValue.value = date;
            emitValue(true);
          } else {
            innerValue.value = dayjs(date);
            emitValue(true);
          }
        }
      };
      const renderPresets = () => {
        if (props.presets && props.presets.length > 0) {
          return (
            <div class="k-picker-presets">
              {props.presets.map((x) => {
                return (
                  <Button size="small" onClick={() => presetEmit(x)}>
                    {x.label}
                  </Button>
                );
              })}
            </div>
          );
        }
      };
      const extraEmit = (date) => {
        if (isRange.value && Array.isArray(date)) {
          date = [dayjs(date[0]), dayjs(date[1])];
          innerValue.value = date;
          emitValue(true);
        } else {
          innerValue.value = dayjs(date);
          emitValue(true);
        }
      };

      const renderExtraHeader = () => {
        return slots.header ? (
          <div class="k-picker-extra-header">
            {slots.header({ emit: extraEmit })}
          </div>
        ) : null;
      };
      const renderExtraFooter = () => {
        return slots.footer ? (
          <div class="k-picker-extra-footer">
            {slots.footer({ emit: extraEmit })}
          </div>
        ) : null;
      };
      const overlay = rendered.value ? (
        <transition name="k-date-picker">
          <div
            v-transfer={true}
            ref={refPopper}
            v-show={isVisible.value}
            {...overlayProps}
            mode={props.mode}
          >
            {renderPresets()}
            <div class="k-picker-container">
              {renderExtraHeader()}
              {renderHeader()}
              {currentView.value === "year" && renderYearTable()}
              {currentView.value === "month" && renderMonthTable()}
              {currentView.value === "date" && renderDateTable()}
              {currentView.value === "time" && renderTimePicker()}
              {renderFooter()}
              {renderExtraFooter()}
            </div>
          </div>
        </transition>
      ) : null;

      return (
        <div
          class={classes}
          ref={refSelection}
          tabindex={props.disabled ? null : 0}
        >
          <div class={selectCls} onClick={togglePanel}>
            {renderInput()}
            <Icon type={dateIcon} class="k-icon-calendar" />
            {showClear && (
              <Icon
                type={CloseCircle}
                class="k-icon-clean"
                onClick={(e) => {
                  e.stopPropagation();
                  innerValue.value = null;
                  syncTextFromValue();
                  emit("input", null); //for 2
                  emit("update:startDate", null);
                  emit("update:endDate", null);
                  //   emit("update:value", null); //for 3
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

export default withInstall(DatePicker);
