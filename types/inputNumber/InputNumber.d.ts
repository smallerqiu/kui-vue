import Vue from "vue";

/** InputNumber component props */
export interface InputNumberProps {
  value?: any[] | number | string;
  min?: number;
  max?: number;
  disabled?: boolean;
  readonly?: boolean;
  formatter?: (...args: any[]) => any;
  parser?: (...args: any[]) => any;
  size?: string;
  precision?: number;
  suffix?: string;
  prefix?: string;
  /** default: true */
  controls?: boolean;
  /** default: true */
  keyboard?: boolean;
  /** default: 1 */
  step?: number;
  theme?: string;
  placeholder?: string;
  icon?: string | any[];
  id?: string;
}

declare class InputNumber extends Vue {
  $props: InputNumberProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default InputNumber;
