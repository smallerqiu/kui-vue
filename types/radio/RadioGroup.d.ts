import Vue, { VueConstructor } from "vue";

/** RadioGroup component props */
export interface RadioGroupProps {
  /** default:  */
  value?: string | number | boolean;
  disabled?: boolean;
  /** default: horizontal */
  direction?: string;
  size?: any;
  theme?: string;
  shape?: string;
  options?: any[];
  type?: string;
}

/** RadioGroup component instance */
export interface RadioGroup extends Vue {
  $props: RadioGroupProps;
  $emit(event: string, ...args: any[]): void;
}

/** RadioGroup Vue component type */
declare const RadioGroup: VueConstructor<RadioGroup>;

export default RadioGroup;
