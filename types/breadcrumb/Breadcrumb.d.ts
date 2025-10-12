import Vue from "vue";

/** Breadcrumb component props */
export interface BreadcrumbProps {}

declare class Breadcrumb extends Vue {
  $props: BreadcrumbProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Breadcrumb;
