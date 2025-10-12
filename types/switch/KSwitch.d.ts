import Vue from "vue";

/** KSwitch component props */
export interface KSwitchProps {
  checked?: any;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  /** default: default */
  size?: any;
  trueText?: string;
  falseText?: string;
}

declare class KSwitch extends Vue {
  $props: KSwitchProps;
  $emit(event: string, ...args: any[]): this;
}

export default KSwitch;
