import Vue, { VueConstructor } from "vue";

/** DatePicker component props */
export interface DatePickerProps {
  /** default: undefined */
  value?: any | Record<string, any> | any[] | string | number;
  /** default: undefined */
  startDate?: any | Record<string, any> | string | number;
  /** default: undefined */
  endDate?: any | Record<string, any> | string | number;
  /** default: string */
  valueType?: string;
  /** default: date */
  mode?: string;
  presets?: any[];
  disabled?: boolean;
  /** default: true */
  clearable?: boolean;
  /** default: true */
  editable?: boolean;
  /** default:  */
  placeholder?: string | any[];
  /** default: undefined */
  format?: string | any[];
  /** default: undefined */
  disabledDate?: (...args: any[]) => any;
  /** default: undefined */
  disabledTime?: (...args: any[]) => any;
  /** default: default */
  size?: string;
  /** default: default */
  pickerSize?: string;
  dateIcon?: any[] | Record<string, any>;
  /** default: light */
  theme?: string;
  shape?: string;
  /** default: true */
  bordered?: boolean;
  /** default: bottom-left */
  placement?: any;
}

/** DatePicker component instance */
export interface DatePicker extends Vue {
  $props: DatePickerProps;
  $emit(event: string, ...args: any[]): this;
}

/** DatePicker Vue component type */
declare const DatePicker: VueConstructor<DatePicker>;

export default DatePicker;
