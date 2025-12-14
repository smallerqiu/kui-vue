import Vue, { VueConstructor } from "vue";

/** ButtonGroup component props */
export interface ButtonGroupProps {
  size?: any;
  shape?: string;
}

/** ButtonGroup component instance */
export interface ButtonGroup extends Vue {
  $props: ButtonGroupProps;
  $emit(event: string, ...args: any[]): void;
}

/** ButtonGroup Vue component type */
declare const ButtonGroup: VueConstructor<ButtonGroup>;

export default ButtonGroup;
