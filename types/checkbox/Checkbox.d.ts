import Vue, { VueConstructor } from "vue";

/** Checkbox component props */
export interface CheckboxProps {
  /** default: false */
  checked?: boolean | number;
  value?: string | number | boolean;
  label?: string | number;
  /** default: light */
  theme?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  /** default: default */
  size?: any;
}

/** Checkbox component instance */
export interface Checkbox extends Vue {
  $props: CheckboxProps;
  $emit(event: string, ...args: any[]): this;
}

/** Checkbox Vue component type */
declare const Checkbox: VueConstructor<Checkbox>;

export default Checkbox;
