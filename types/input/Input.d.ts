import Vue, { VueConstructor } from "vue";

/** Input component props */
export interface InputProps {
  clearable?: boolean;
  /** default: true */
  visiblePasswordIcon?: boolean;
  size?: any;
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
  $emit(event: string, ...args: any[]): void;
}

/** Input Vue component type */
declare const Input: VueConstructor<Input>;

export default Input;
