import Vue from "vue";

/** InputGroup component props */
export interface InputGroupProps {
  block?: boolean;
  /** default: true */
  compact?: boolean;
  /** default: default */
  size?: string | number | any[];
}

declare class InputGroup extends Vue {
  $props: InputGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default InputGroup;
