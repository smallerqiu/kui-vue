import Vue, { VueConstructor } from "vue";

/** Dropdown component props */
export interface DropdownProps {
  dark?: boolean;
  /** default: hover */
  trigger?: string;
  /** default: true */
  transfer?: boolean;
  disabled?: boolean;
  /** default: false */
  arrow?: boolean;
  show?: boolean;
  /** default: bottom-left */
  placement?: any;
  target?: Record<string, any>;
}

/** Dropdown component instance */
export interface Dropdown extends Vue {
  $props: DropdownProps;
  $emit(event: string, ...args: any[]): this;
}

/** Dropdown Vue component type */
declare const Dropdown: VueConstructor<Dropdown>;

export default Dropdown;
