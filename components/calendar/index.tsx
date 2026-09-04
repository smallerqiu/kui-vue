import { ChevronLeft, ChevronRight } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type StyleValue,
} from "vue";
import { Button, ButtonGroup } from "../button";
import zhCN from "../locale/zh-CN";

export interface CalendarEventData {
  key: string | number;
  date: string;
  title: string;
  time?: string;
  color?: string;
  [key: string]: unknown;
}

export interface CalendarDateCell {
  date: string;
  day: number;
  currentMonth: boolean;
  events: CalendarEventData[];
}

const calendarProps = {
  modelValue: String,
  events: { type: Array as PropType<CalendarEventData[]>, default: () => [] },
  firstDayOfWeek: Number,
  maxEvents: { type: Number, default: 3 },
  showToolbar: { type: Boolean, default: true },
  todayText: String,
  weekdays: Array as PropType<string[]>,
  onChange: Function as PropType<(date: string, cell: CalendarDateCell) => void>,
  onMonthChange: Function as PropType<(value: { year: number; month: number }) => void>,
  onEventClick: Function as PropType<(event: CalendarEventData, cell: CalendarDateCell) => void>,
};

export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
const pad = (value: number) => String(value).padStart(2, "0");
const dateKey = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const parseDate = (value?: string) => {
  if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day)
      return date;
  }
  return undefined;
};
const toRenderKey = (value: unknown) => `${typeof value}:${String(value)}`;

const Calendar = defineComponent({
  name: "Calendar",
  props: calendarProps,
  emits: ["update:modelValue", "change", "monthChange", "eventClick"],
  setup(props, { attrs, emit, slots }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed(() => (isRef(injectedLocale) ? injectedLocale.value : injectedLocale));
    const localeName = computed(() => locale.value.name || "zh-cn");
    const resolvedFirstDay = computed(() => {
      if (props.firstDayOfWeek !== undefined)
        return Number.isFinite(props.firstDayOfWeek)
          ? Math.min(6, Math.max(0, Math.floor(props.firstDayOfWeek)))
          : 1;
      try {
        const firstDay = (
          new Intl.Locale(localeName.value) as Intl.Locale & {
            weekInfo?: { firstDay: number };
          }
        ).weekInfo?.firstDay;
        if (firstDay) return firstDay % 7;
      } catch {
        // Fall back for runtimes without Intl.Locale week information.
      }
      return /^en(?:-|$)/i.test(localeName.value) ? 0 : 1;
    });
    const localizedWeekdays = computed(() =>
      Array.from({ length: 7 }, (_, index) =>
        new Intl.DateTimeFormat(localeName.value, { weekday: "short" }).format(
          new Date(2021, 7, 1 + index),
        ),
      ),
    );
    const weekdayLabels = computed(() =>
      props.weekdays?.length === 7 ? props.weekdays : localizedWeekdays.value,
    );
    const resolvedTodayText = computed(
      () => props.todayText ?? locale.value.k.datePicker.today ?? "Today",
    );
    const visibleEventCount = computed(() =>
      Number.isFinite(props.maxEvents) ? Math.max(0, Math.floor(props.maxEvents)) : 0,
    );
    const monthTitle = computed(() =>
      new Intl.DateTimeFormat(localeName.value, { year: "numeric", month: "long" }).format(
        new Date(viewYear.value, viewMonth.value, 1),
      ),
    );
    const initial = parseDate(props.modelValue) || new Date();
    const viewYear = ref(initial.getFullYear());
    const viewMonth = ref(initial.getMonth());
    const today = dateKey(new Date());
    watch(
      () => props.modelValue,
      (value) => {
        if (!value) return;
        const date = parseDate(value);
        if (!date) return;
        viewYear.value = date.getFullYear();
        viewMonth.value = date.getMonth();
      },
    );
    const orderedWeekdays = computed(() =>
      Array.from(
        { length: 7 },
        (_, index) => weekdayLabels.value[(resolvedFirstDay.value + index) % 7],
      ),
    );
    const cells = computed<CalendarDateCell[]>(() => {
      const first = new Date(viewYear.value, viewMonth.value, 1);
      const offset = (first.getDay() - resolvedFirstDay.value + 7) % 7;
      const start = new Date(viewYear.value, viewMonth.value, 1 - offset);
      const eventsByDate = new Map<string, CalendarEventData[]>();
      props.events.forEach((event) => {
        const list = eventsByDate.get(event.date);
        if (list) list.push(event);
        else eventsByDate.set(event.date, [event]);
      });
      return Array.from({ length: 42 }, (_, index) => {
        const date = new Date(start);
        date.setDate(start.getDate() + index);
        const key = dateKey(date);
        return {
          date: key,
          day: date.getDate(),
          currentMonth: date.getMonth() === viewMonth.value,
          events: eventsByDate.get(key) || [],
        };
      });
    });
    const select = (cell: CalendarDateCell) => {
      if (!cell.currentMonth) {
        const date = parseDate(cell.date);
        if (date) {
          viewYear.value = date.getFullYear();
          viewMonth.value = date.getMonth();
          emit("monthChange", { year: viewYear.value, month: viewMonth.value + 1 });
        }
      }
      emit("update:modelValue", cell.date);
      emit("change", cell.date, cell);
    };
    const changeMonth = (offset: number) => {
      const date = new Date(viewYear.value, viewMonth.value + offset, 1);
      viewYear.value = date.getFullYear();
      viewMonth.value = date.getMonth();
      emit("monthChange", { year: viewYear.value, month: viewMonth.value + 1 });
    };
    const goToday = () => {
      const date = new Date();
      viewYear.value = date.getFullYear();
      viewMonth.value = date.getMonth();
      const cell: CalendarDateCell = {
        date: today,
        day: date.getDate(),
        currentMonth: true,
        events: props.events.filter((event) => event.date === today),
      };
      emit("update:modelValue", today);
      emit("change", today, cell);
      emit("monthChange", { year: viewYear.value, month: viewMonth.value + 1 });
    };
    const moveFocus = (event: KeyboardEvent) => {
      const offsets: Record<string, number> = {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -7,
        ArrowDown: 7,
      };
      let offset = offsets[event.key];
      const current = event.currentTarget as HTMLElement;
      const grid = current.closest(".k-calendar-grid");
      if (!grid) return false;
      const items = Array.from(grid.querySelectorAll<HTMLElement>(".k-calendar-cell"));
      const index = items.indexOf(current);
      if (event.key === "Home") offset = -(index % 7);
      if (event.key === "End") offset = 6 - (index % 7);
      if (offset === undefined) return false;
      const target = items[index + offset];
      if (!target) return false;
      event.preventDefault();
      current.tabIndex = -1;
      target.tabIndex = 0;
      target.focus();
      return true;
    };
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      const focusDate =
        cells.value.find((cell) => cell.date === props.modelValue)?.date ||
        cells.value.find((cell) => cell.date === today)?.date ||
        cells.value.find((cell) => cell.currentMonth)?.date;
      return (
        <div {...restAttrs} class={["k-calendar", customClass]}>
          {props.showToolbar && (
            <div class="k-calendar-toolbar">
              <ButtonGroup>
                <Button icon={ChevronLeft} onClick={() => changeMonth(-1)} />
                <Button onClick={goToday}>{resolvedTodayText.value}</Button>
                <Button icon={ChevronRight} onClick={() => changeMonth(1)} />
              </ButtonGroup>
              <div class="k-calendar-title">
                {slots.title?.({ year: viewYear.value, month: viewMonth.value + 1 }) ||
                  monthTitle.value}
              </div>
              <div class="k-calendar-extra">{slots.extra?.()}</div>
            </div>
          )}
          <div class="k-calendar-weekdays">
            {orderedWeekdays.value.map((day, index) => (
              <span key={index} role="columnheader">
                {day}
              </span>
            ))}
          </div>
          <div class="k-calendar-grid" role="grid" aria-rowcount={6} aria-colcount={7}>
            {Array.from({ length: 6 }, (_, rowIndex) => (
              <div key={rowIndex} class="k-calendar-row" role="row">
                {cells.value.slice(rowIndex * 7, rowIndex * 7 + 7).map((cell) => (
                  <div
                    key={cell.date}
                    data-date={cell.date}
                    class={[
                      "k-calendar-cell",
                      {
                        "k-calendar-cell-outside": !cell.currentMonth,
                        "k-calendar-cell-today": cell.date === today,
                        "k-calendar-cell-selected": cell.date === props.modelValue,
                      },
                    ]}
                    role="gridcell"
                    aria-selected={cell.date === props.modelValue}
                    aria-current={cell.date === today ? "date" : undefined}
                    tabindex={cell.date === focusDate ? 0 : -1}
                    onClick={() => select(cell)}
                    onKeydown={(event) => {
                      if (moveFocus(event)) return;
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        select(cell);
                      }
                    }}
                  >
                    {slots.dateCell?.(cell) || <span class="k-calendar-date">{cell.day}</span>}
                    <div class="k-calendar-events">
                      {cell.events.slice(0, visibleEventCount.value).map((event) => {
                        const custom = slots.event?.({ event, cell });
                        return custom ? (
                          <div
                            key={toRenderKey(event.key)}
                            class="k-calendar-event-custom"
                            onClick={(e) => {
                              e.stopPropagation();
                              emit("eventClick", event, cell);
                            }}
                          >
                            {custom}
                          </div>
                        ) : (
                          <button
                            key={toRenderKey(event.key)}
                            type="button"
                            class="k-calendar-event"
                            style={
                              { "--k-calendar-event-color": event.color } as unknown as StyleValue
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              emit("eventClick", event, cell);
                            }}
                          >
                            <i></i>
                            {event.time && <em>{event.time}</em>}
                            <span>{event.title}</span>
                          </button>
                        );
                      })}
                      {cell.events.length > visibleEventCount.value && (
                        <small>
                          {slots.more?.({
                            count: cell.events.length - visibleEventCount.value,
                            cell,
                          }) || `+${cell.events.length - visibleEventCount.value}`}
                        </small>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    };
  },
});

export default Calendar;
