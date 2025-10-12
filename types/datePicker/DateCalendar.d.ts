import Vue from "vue";

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

declare class DateCalendar extends Vue {
  $props: DateCalendarProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default DateCalendar;
