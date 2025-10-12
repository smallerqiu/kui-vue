import Vue from "vue";

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

declare class Dropdown extends Vue {
  $props: DropdownProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Dropdown;
