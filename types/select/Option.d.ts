import Vue from "vue";

/** Option component props */
export interface OptionProps {
  value?: string | number;
  label?: string | number;
  disabled?: boolean;
}

declare class Option extends Vue {
  $props: OptionProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Option;
