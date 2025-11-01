import Vue, { VueConstructor } from "vue";

/** Descriptions component props */
export interface DescriptionsProps {
  bordered?: boolean;
  /** default: 3 */
  column?: number;
  /** default: horizontal */
  layout?: string;
  title?: string;
  extra?: string;
  /** default: default */
  size?: string;
}

/** Descriptions component instance */
export interface Descriptions extends Vue {
  $props: DescriptionsProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Descriptions Vue component type */
declare const Descriptions: VueConstructor<Descriptions>;

export default Descriptions;
