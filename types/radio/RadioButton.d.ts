import Vue from "vue";

/** RadioButton component props */
export interface RadioButtonProps {
  /** default: false */
  value?: string | number | boolean;
  disabled?: boolean;
  label?: string | number;
  theme?: string;
  shape?: string;
}

declare class RadioButton extends Vue {
  $props: RadioButtonProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default RadioButton;
