import Vue from "vue";

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

declare class Radio extends Vue {
  $props: RadioProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Radio;
