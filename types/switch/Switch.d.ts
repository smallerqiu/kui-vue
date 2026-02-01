import Vue, { VueConstructor } from "vue";

/** Switch component props */
export interface SwitchProps {
  /** default: false */
  checked?: boolean | number;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  /** default: default */
  size?: any;
  trueText?: string;
  falseText?: string;
}

/** Switch component instance */
export interface Switch extends Vue {
  $props: SwitchProps;
  $emit(event: string, ...args: any[]): this;
}

/** Switch Vue component type */
declare const Switch: VueConstructor<Switch>;

export default Switch;
