import Vue, { VueConstructor } from "vue";

/** BreadcrumbItem component props */
export interface BreadcrumbItemProps {
  /** default: / */
  separator?: string;
  to?: string;
  replace?: boolean;
  icon?: string | any[];
}

/** BreadcrumbItem component instance */
export interface BreadcrumbItem extends Vue {
  $props: BreadcrumbItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** BreadcrumbItem Vue component type */
declare const BreadcrumbItem: VueConstructor<BreadcrumbItem>;

export default BreadcrumbItem;
