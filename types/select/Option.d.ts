import Vue, { VueConstructor } from "vue";

/** Option component props */
export interface OptionProps {
  value?: string | number;
  label?: string | number;
  disabled?: boolean;
  checked?: boolean;
  active?: boolean;
  multiple?: boolean;
}

/** Option component instance */
export interface Option extends Vue {
  $props: OptionProps;
  $emit(event: string, ...args: any[]): this;
}

/** Option Vue component type */
declare const Option: VueConstructor<Option>;

export default Option;
