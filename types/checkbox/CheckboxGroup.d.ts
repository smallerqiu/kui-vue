import Vue, { VueConstructor } from "vue";

/** CheckboxGroup component props */
export interface CheckboxGroupProps {
  disabled?: boolean;
  options?: any[];
  /** default: horizontal */
  direction?: string;
  /** default: undefined */
  value?: any[];
  /** default: default */
  size?: any;
}

/** CheckboxGroup component instance */
export interface CheckboxGroup extends Vue {
  $props: CheckboxGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** CheckboxGroup Vue component type */
declare const CheckboxGroup: VueConstructor<CheckboxGroup>;

export default CheckboxGroup;
