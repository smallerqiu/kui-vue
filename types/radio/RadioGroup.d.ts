import Vue from "vue";

/** RadioGroup component props */
export interface RadioGroupProps {
  /** default:  */
  value?: string | number;
  disabled?: boolean;
  /** default: horizontal */
  direction?: string;
  /** default: default */
  size?: any;
  theme?: string;
  shape?: string;
  options?: any[];
  type?: string;
}

declare class RadioGroup extends Vue {
  $props: RadioGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default RadioGroup;
