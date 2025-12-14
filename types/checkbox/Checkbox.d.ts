import Vue, { VueConstructor } from "vue";

/** Checkbox component props */
export interface CheckboxProps {
  /** default: false */
  checked?: boolean;
  value?: string | number | boolean;
  label?: string | number;
  theme?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  /** default: default */
  size?: any;
}

/** Checkbox component instance */
export interface Checkbox extends Vue {
  $props: CheckboxProps;
  $emit(event: string, ...args: any[]): void;
}

/** Checkbox Vue component type */
declare const Checkbox: VueConstructor<Checkbox>;

export default Checkbox;
