import Vue, { VueConstructor } from "vue";

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

/** Menu component instance */
export interface Menu extends Vue {
  $props: MenuProps;
  $emit(event: string, ...args: any[]): this;
}

/** Menu Vue component type */
declare const Menu: VueConstructor<Menu>;

export default Menu;
