import Vue, { VueConstructor } from "vue";

/** input component props */
export interface inputProps {
  clearable?: boolean;
  visiblePassword?: boolean;
  visiblePasswordIcon?: boolean;
  id?: string;
  /** default: default */
  size?: any;
  /** default: input */
  inputType?: string;
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
  placeholder?: string;
}

/** input component instance */
export interface input extends Vue {
  $props: inputProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** input Vue component type */
declare const input: VueConstructor<input>;

export default input;
