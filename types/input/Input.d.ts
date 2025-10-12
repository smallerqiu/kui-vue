import Vue from "vue";

/** Input component props */
export interface InputProps {
  /** default: false */
  clearable?: boolean;
  id?: string;
  /** default: default */
  size?: any;
  value?: string | number | any[] | Record<string, any>;
  /** default: text */
  type?: any;
  icon?: string | any[];
  suffix?: string;
  prefix?: string;
  disabled?: boolean;
  readonly?: boolean;
  visiblePassword?: boolean;
  /** default: true */
  visiblePasswordIcon?: boolean;
  /** default: solid */
  theme?: string;
  shape?: string;
}

declare class Input extends Vue {
  $props: InputProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Input;
