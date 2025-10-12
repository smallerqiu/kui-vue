import Vue from "vue";

/** SubMenu component props */
export interface SubMenuProps {
  disabled?: boolean;
  title?: string;
  icon?: string | any[];
}

declare class SubMenu extends Vue {
  $props: SubMenuProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default SubMenu;
