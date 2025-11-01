import Vue, { VueConstructor } from "vue";

/** DateCalendar component props */
export interface DateCalendarProps {
  v1?: string | any | number | Record<string, any>;
  v2?: string | any | number | Record<string, any>;
  value?: string | any | number | Record<string, any>;
  /** default: undefined */
  disabledDate?: (...args: any[]) => any;
  /** default: undefined */
  disabledTime?: (...args: any[]) => any;
  /** default: date */
  mode?: string;
  format?: string;
  isRight?: boolean;
  date?: Record<string, any>;
  h2?: Record<string, any>;
  pickerSize?: string;
  opened?: boolean;
}

/** DateCalendar component instance */
export interface DateCalendar extends Vue {
  $props: DateCalendarProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** DateCalendar Vue component type */
declare const DateCalendar: VueConstructor<DateCalendar>;

export default DateCalendar;
