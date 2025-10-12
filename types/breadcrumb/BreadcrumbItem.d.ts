import Vue from "vue";

/** BreadcrumbItem component props */
export interface BreadcrumbItemProps {
  /** default: / */
  separator?: string;
  to?: string;
  replace?: boolean;
  icon?: string | any[];
}

declare class BreadcrumbItem extends Vue {
  $props: BreadcrumbItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default BreadcrumbItem;
