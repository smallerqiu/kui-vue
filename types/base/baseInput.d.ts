import Vue from "vue";

/** baseInput component props */
export interface baseInputProps {
  clearable?: boolean;
  visiblePassword?: boolean;
  visiblePasswordIcon?: boolean;
  id?: string;
  /** default: default */
  size?: any;
  /** default: input */
  inputType?: string;
  value?: any;
  disabled?: boolean;
  /** default: text */
  type?: any;
  icon?: any;
  suffix?: string;
  prefix?: string;
  theme?: string;
  shape?: string;
  formatter?: (...args: any[]) => any;
  parser?: (...args: any[]) => any;
  placeholder?: string;
}

declare class baseInput extends Vue {
  $props: baseInputProps;
  $emit(event: string, ...args: any[]): this;
}

export default baseInput;
