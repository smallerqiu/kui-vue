import Vue from "vue";

/** MenuItem component props */
export interface MenuItemProps {
  icon?: string | any[];
  title?: string;
  disabled?: boolean;
}

declare class MenuItem extends Vue {
  $props: MenuItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default MenuItem;
