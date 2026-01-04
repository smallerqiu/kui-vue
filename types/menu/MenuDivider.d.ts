import Vue, { VueConstructor } from "vue";

/** MenuDivider component props */
export interface MenuDividerProps {}

/** MenuDivider component instance */
export interface MenuDivider extends Vue {
  $props: MenuDividerProps;
  $emit(event: string, ...args: any[]): this;
}

/** MenuDivider Vue component type */
declare const MenuDivider: VueConstructor<MenuDivider>;

export default MenuDivider;
