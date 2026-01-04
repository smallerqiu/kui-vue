import Vue, { VueConstructor } from "vue";

/** MenuItem component props */
export interface MenuItemProps {
  icon?: string | any[];
  title?: string;
  label?: string;
  disabled?: boolean;
  isPopup?: boolean;
}

/** MenuItem component instance */
export interface MenuItem extends Vue {
  $props: MenuItemProps;
  $emit(event: string, ...args: any[]): this;
}

/** MenuItem Vue component type */
declare const MenuItem: VueConstructor<MenuItem>;

export default MenuItem;
