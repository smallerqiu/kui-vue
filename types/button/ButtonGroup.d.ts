import Vue, { VueConstructor } from "vue";

/** ButtonGroup component props */
export interface ButtonGroupProps {
  /** default: default */
  size?: any;
  shape?: string;
}

/** ButtonGroup component instance */
export interface ButtonGroup extends Vue {
  $props: ButtonGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** ButtonGroup Vue component type */
declare const ButtonGroup: VueConstructor<ButtonGroup>;

export default ButtonGroup;
