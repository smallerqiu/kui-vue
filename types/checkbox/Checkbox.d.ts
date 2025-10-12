import Vue from "vue";

/** Checkbox component props */
export interface CheckboxProps {
  value?: string | number | boolean;
  disabled?: boolean;
  label?: string | number;
  indeterminate?: boolean;
  checked?: boolean | number;
  /** default: default */
  size?: any;
}

declare class Checkbox extends Vue {
  $props: CheckboxProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Checkbox;
