import Vue, { VueConstructor } from "vue";

/** CheckboxGroup component props */
export interface CheckboxGroupProps {
  /** default: undefined */
  value?: any[];
  disabled?: boolean;
  options?: any[];
  /** default: horizontal */
  direction?: string;
  /** default: default */
  size?: any;
}

/** CheckboxGroup component instance */
export interface CheckboxGroup extends Vue {
  $props: CheckboxGroupProps;
  $emit(event: string, ...args: any[]): void;
}

/** CheckboxGroup Vue component type */
declare const CheckboxGroup: VueConstructor<CheckboxGroup>;

export default CheckboxGroup;
