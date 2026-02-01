import Vue, { VueConstructor } from "vue";

/** Radio component props */
export interface RadioProps {
  /** default: false */
  checked?: boolean | number;
  value?: string | number | boolean;
  label?: string | number;
  disabled?: boolean;
  theme?: string;
  /** default: default */
  size?: any;
}

/** Radio component instance */
export interface Radio extends Vue {
  $props: RadioProps;
  $emit(event: string, ...args: any[]): this;
}

/** Radio Vue component type */
declare const Radio: VueConstructor<Radio>;

export default Radio;
