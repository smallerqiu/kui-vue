import Vue from "vue";

/** Menu component props */
export interface MenuProps {
  theme?: string;
  /** default: vertical */
  mode?: string;
  /** default: undefined */
  value?: any[];
  accordion?: boolean;
  inlineCollapsed?: boolean;
  /** default: undefined */
  openKeys?: any[];
}

declare class Menu extends Vue {
  $props: MenuProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Menu;
