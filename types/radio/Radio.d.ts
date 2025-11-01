import Vue, { VueConstructor } from "vue";

/** Radio component props */
export interface RadioProps {
  /** default: false */
  value?: string | number | boolean;
  disabled?: boolean;
  checked?: boolean | number;
  label?: string | number;
  /** default: default */
  size?: any;
}

/** Radio component instance */
export interface Radio extends Vue {
  $props: RadioProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Radio Vue component type */
declare const Radio: VueConstructor<Radio>;

export default Radio;
