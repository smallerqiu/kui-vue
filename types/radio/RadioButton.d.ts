import Vue, { VueConstructor } from "vue";

/** RadioButton component props */
export interface RadioButtonProps {
  /** default: false */
  checked?: boolean;
  value?: string | number | boolean;
  label?: string | number;
  theme?: string;
  disabled?: boolean;
  /** default: default */
  size?: any;
}

/** RadioButton component instance */
export interface RadioButton extends Vue {
  $props: RadioButtonProps;
  $emit(event: string, ...args: any[]): void;
}

/** RadioButton Vue component type */
declare const RadioButton: VueConstructor<RadioButton>;

export default RadioButton;
