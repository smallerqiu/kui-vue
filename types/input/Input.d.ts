import Vue, { VueConstructor } from "vue";

/** Input component props */
export interface InputProps {
  /** default: true */
  clearable?: boolean;
  /** default: true */
  visiblePasswordIcon?: boolean;
  size?: string;
  value?: string | number | any[] | Record<string, any>;
  disabled?: boolean;
  /** default: text */
  type?: any;
  icon?: string | any[];
  suffix?: string;
  prefix?: string;
  theme?: string;
  shape?: string;
  formatter?: (...args: any[]) => any;
  parser?: (...args: any[]) => any;
  /** default: input */
  inputType?: string;
}

/** Input component instance */
export interface Input extends Vue {
  $props: InputProps;
  $emit(event: string, ...args: any[]): this;
}

/** Input Vue component type */
declare const Input: VueConstructor<Input>;

export default Input;
