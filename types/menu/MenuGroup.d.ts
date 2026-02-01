import Vue, { VueConstructor } from "vue";

/** MenuGroup component props */
export interface MenuGroupProps {
  title?: string;
}

/** MenuGroup component instance */
export interface MenuGroup extends Vue {
  $props: MenuGroupProps;
  $emit(event: string, ...args: any[]): this;
}

/** MenuGroup Vue component type */
declare const MenuGroup: VueConstructor<MenuGroup>;

export default MenuGroup;
