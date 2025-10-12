import Vue from "vue";

/** ButtonGroup component props */
export interface ButtonGroupProps {
  /** default: default */
  size?: any;
  shape?: string;
}

declare class ButtonGroup extends Vue {
  $props: ButtonGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default ButtonGroup;
