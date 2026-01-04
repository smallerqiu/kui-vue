import Vue, { VueConstructor } from "vue";

/** Breadcrumb component props */
export interface BreadcrumbProps {
  /** default: / */
  separator?: string | Record<string, any>;
}

/** Breadcrumb component instance */
export interface Breadcrumb extends Vue {
  $props: BreadcrumbProps;
  $emit(event: string, ...args: any[]): this;
}

/** Breadcrumb Vue component type */
declare const Breadcrumb: VueConstructor<Breadcrumb>;

export default Breadcrumb;
