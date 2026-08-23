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
  onEventClick: Function as PropType<
    (event: CalendarEventData, cell: CalendarDateCell) => void
  >,
};

export type CalendarProps = ExtractPropTypes<typeof calendarProps>;
const pad = (value: number) => String(value).padStart(2, "0");
const dateKey = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const parseDate = (value?: string) => {
  if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  return new Date();
};

const Calendar = defineComponent({
  name: "Calendar",
  props: calendarProps,
  emits: ["update:modelValue", "change", "monthChange", "eventClick"],
  setup(props, { attrs, emit, slots }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed(() =>
      isRef(injectedLocale) ? injectedLocale.value : injectedLocale
    );
    const localeName = computed(() => locale.value.name || "zh-cn");
    const resolvedFirstDay = computed(() => {
      if (props.firstDayOfWeek !== undefined)
        return Math.min(6, Math.max(0, props.firstDayOfWeek));
      try {
        const firstDay = (new Intl.Locale(localeName.value) as Intl.Locale & {
          weekInfo?: { firstDay: number };
        }).weekInfo?.firstDay;
        if (firstDay) return firstDay % 7;
      } catch {
        // Fall back for runtimes without Intl.Locale week information.
      }
      return /^en(?:-|$)/i.test(localeName.value) ? 0 : 1;
    });
    const localizedWeekdays = computed(() =>
      Array.from({ length: 7 }, (_, index) =>
        new Intl.DateTimeFormat(localeName.value, { weekday: "short" }).format(
          new Date(2021, 7, 1 + index)
        )
      )
    );
    const weekdayLabels = computed(() =>
      props.weekdays?.length === 7 ? props.weekdays : localizedWeekdays.value
    );
    const resolvedTodayText = computed(
      () => props.todayText || locale.value.k.datePicker.today || "Today"
    );
    const monthTitle = computed(() =>
      new Intl.DateTimeFormat(localeName.value, { year: "numeric", month: "long" }).format(
        new Date(viewYear.value, viewMonth.value, 1)
      )
    );
    const initial = parseDate(props.modelValue);
    const viewYear = ref(initial.getFullYear());
    const viewMonth = ref(initial.getMonth());
    const today = dateKey(new Date());
    watch(
      () => props.modelValue,
      (value) => {
        if (!value) return;
        const date = parseDate(value);
        viewYear.value = date.getFullYear();
        viewMonth.value = date.getMonth();
      }
    );
    const orderedWeekdays = computed(() =>
      Array.from(
        { length: 7 },
        (_, index) => weekdayLabels.value[(resolvedFirstDay.value + index) % 7]
      )
    );
    const cells = computed<CalendarDateCell[]>(() => {
      const first = new Date(viewYear.value, viewMonth.value, 1);
      const offset = (first.getDay() - resolvedFirstDay.value + 7) % 7;
      const start = new Date(viewYear.value, viewMonth.value, 1 - offset);
      return Array.from({ length: 42 }, (_, index) => {
        const date = new Date(start);
        date.setDate(start.getDate() + index);
        const key = dateKey(date);
        return {
          date: key,
          day: date.getDate(),
          currentMonth: date.getMonth() === viewMonth.value,
          events: props.events.filter((event) => event.date === key),
        };
      });
    });
    const select = (cell: CalendarDateCell) => {
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
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
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
            {orderedWeekdays.value.map((day) => (
              <span>{day}</span>
            ))}
          </div>
          <div class="k-calendar-grid">
            {cells.value.map((cell) => (
              <div
                data-date={cell.date}
                class={[
                  "k-calendar-cell",
                  {
                    "k-calendar-cell-outside": !cell.currentMonth,
                    "k-calendar-cell-today": cell.date === today,
                    "k-calendar-cell-selected": cell.date === props.modelValue,
                  },
                ]}
                role="button"
                tabindex={0}
                onClick={() => select(cell)}
                onKeydown={(event) => event.key === "Enter" && select(cell)}
              >
                {slots.dateCell?.(cell) || <span class="k-calendar-date">{cell.day}</span>}
                <div class="k-calendar-events">
                  {cell.events.slice(0, props.maxEvents).map(
                    (event) =>
                      slots.event?.({ event, cell }) || (
                        <button
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
                      )
                  )}
                  {cell.events.length > props.maxEvents && (
                    <small>
                      {slots.more?.({ count: cell.events.length - props.maxEvents, cell }) ||
                        `+${cell.events.length - props.maxEvents}`}
                    </small>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
  },
});

export default Calendar;
