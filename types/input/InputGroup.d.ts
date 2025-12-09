import Vue, { VueConstructor } from "vue";

/** InputGroup component props */
export interface InputGroupProps {
  block?: boolean;
  /** default: true */
  compact?: boolean;
  /** default: default */
  size?: string | number | any[];
}

/** InputGroup component instance */
export interface InputGroup extends Vue {
  $props: InputGroupProps;
  $emit(event: string, ...args: any[]): void;
}

/** InputGroup Vue component type */
declare const InputGroup: VueConstructor<InputGroup>;

export default InputGroup;
