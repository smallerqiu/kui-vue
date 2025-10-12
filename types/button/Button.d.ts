import Vue from "vue";

/** Button component props */
export interface ButtonProps {
  /** default: button */
  htmlType?: "small" | "large" | "default";
  icon?: string | any[];
  block?: boolean;
  size?: string;
  color?: string;
  loading?: boolean;
  /** default: default */
  type?: "default" | "outline" | "solid" | "light" | "dashed" | "card";
  disabled?: boolean;
  /** default: default */
  theme?: string;
  shape?: string;
  href?: string;
  target?: string;
}

declare class Button extends Vue {
  $props: ButtonProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Button;
