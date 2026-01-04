import Vue, { VueConstructor } from "vue";

/** SubMenu component props */
export interface SubMenuProps {
  disabled?: boolean;
  title?: string;
  isPopup?: boolean;
  icon?: string | any[];
}

/** SubMenu component instance */
export interface SubMenu extends Vue {
  $props: SubMenuProps;
  $emit(event: string, ...args: any[]): this;
}

/** SubMenu Vue component type */
declare const SubMenu: VueConstructor<SubMenu>;

export default SubMenu;
