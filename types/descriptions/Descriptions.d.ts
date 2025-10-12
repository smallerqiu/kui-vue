import Vue from "vue";

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

declare class Descriptions extends Vue {
  $props: DescriptionsProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Descriptions;
