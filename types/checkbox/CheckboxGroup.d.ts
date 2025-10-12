import Vue from "vue";

/** CheckboxGroup component props */
export interface CheckboxGroupProps {
  disabled?: boolean;
  options?: any[];
  /** default: horizontal */
  direction?: string;
  /** default: undefined */
  value?: any[];
  /** default: default */
  size?: any;
}

declare class CheckboxGroup extends Vue {
  $props: CheckboxGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default CheckboxGroup;
