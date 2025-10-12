import Vue from "vue";

/** MenuGroup component props */
export interface MenuGroupProps {
  title?: string;
}

declare class MenuGroup extends Vue {
  $props: MenuGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default MenuGroup;
