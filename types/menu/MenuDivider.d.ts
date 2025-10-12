import Vue from "vue";

/** MenuDivider component props */
export interface MenuDividerProps {}

declare class MenuDivider extends Vue {
  $props: MenuDividerProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default MenuDivider;
