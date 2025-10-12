import Vue from "vue";

/** Switch component props */
export interface SwitchProps {
  checked?: boolean | number;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  /** default: default */
  size?: any;
  trueText?: string;
  falseText?: string;
}

declare class Switch extends Vue {
  $props: SwitchProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Switch;
