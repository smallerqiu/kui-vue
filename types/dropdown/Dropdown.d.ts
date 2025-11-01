import Vue, { VueConstructor } from "vue";

/** Dropdown component props */
export interface DropdownProps {
  dark?: boolean;
  /** default: hover */
  trigger?: string;
  /** default: true */
  transfer?: boolean;
  showPlacementArrow?: boolean;
  value?: boolean;
  /** default: bottom-left */
  placement?: any;
}

/** Dropdown component instance */
export interface Dropdown extends Vue {
  $props: DropdownProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Dropdown Vue component type */
declare const Dropdown: VueConstructor<Dropdown>;

export default Dropdown;
