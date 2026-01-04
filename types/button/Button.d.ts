import Vue, { VueConstructor } from "vue";

/** Button component props */
export interface ButtonProps {
  /** default: button */
  htmlType?: any;
  icon?: string | any[];
  block?: boolean;
  size?: any;
  color?: any;
  loading?: boolean;
  /** default: default */
  type?: "outline" | "solid" | "light" | "dashed" | "card";
  /** default: false */
  disabled?: boolean;
  theme?: string;
  shape?: string;
  href?: string;
  target?: string;
}

/** Button component instance */
export interface Button extends Vue {
  $props: ButtonProps;
  $emit(event: string, ...args: any[]): this;
}

/** Button Vue component type */
declare const Button: VueConstructor<Button>;

export default Button;
