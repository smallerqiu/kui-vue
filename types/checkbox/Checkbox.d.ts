import Vue, { VueConstructor } from "vue";

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

/** Checkbox component instance */
export interface Checkbox extends Vue {
  $props: CheckboxProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Checkbox Vue component type */
declare const Checkbox: VueConstructor<Checkbox>;

export default Checkbox;
