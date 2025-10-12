import Vue from "vue";

/** DescriptionsItem component props */
export interface DescriptionsItemProps {
  label?: string;
  /** default: 1 */
  span?: number;
  type?: string;
  bordered?: boolean;
  layout?: string;
}

declare class DescriptionsItem extends Vue {
  $props: DescriptionsItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default DescriptionsItem;
