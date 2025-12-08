import Vue, { VueConstructor } from "vue";

/** RadioButton component props */
export interface RadioButtonProps {
  /** default: false */
  value?: string | number | boolean;
  disabled?: boolean;
  label?: string | number;
  theme?: string;
  shape?: string;
}

/** RadioButton component instance */
export interface RadioButton extends Vue {
  $props: RadioButtonProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** RadioButton Vue component type */
declare const RadioButton: VueConstructor<RadioButton>;

export default RadioButton;
