import Vue, { VueConstructor } from "vue";

/** InputNumber component props */
export interface InputNumberProps {
  value?: any[] | number | string;
  /** default: undefined */
  min?: number;
  /** default: undefined */
  max?: number;
  disabled?: boolean;
  clearable?: boolean;
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
  icon?: string | any[];
  id?: string;
}

/** InputNumber component instance */
export interface InputNumber extends Vue {
  $props: InputNumberProps;
  $emit(event: string, ...args: any[]): void;
}

/** InputNumber Vue component type */
declare const InputNumber: VueConstructor<InputNumber>;

export default InputNumber;
