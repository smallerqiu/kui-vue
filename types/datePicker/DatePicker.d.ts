import Vue, { VueConstructor } from "vue";

/** DatePicker component props */
export interface DatePickerProps {
  value?: string | any | number | any[] | Record<string, any>;
  /** default: date */
  mode?: string;
  disabled?: boolean;
  /** default: true */
  transfer?: boolean;
  /** default: undefined */
  disabledDate?: (...args: any[]) => any;
  /** default: undefined */
  disabledTime?: (...args: any[]) => any;
  format?: string;
  /** default: true */
  clearable?: boolean;
  /** default: true */
  bordered?: boolean;
  pickerSize?: string;
  /** default: default */
  size?: any;
  placement?: string;
  theme?: string;
  shape?: string;
  placeholder?: string | any[];
  dateIcon?: string | any[];
  presets?: any[];
}

/** DatePicker component instance */
export interface DatePicker extends Vue {
  $props: DatePickerProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** DatePicker Vue component type */
declare const DatePicker: VueConstructor<DatePicker>;

export default DatePicker;
