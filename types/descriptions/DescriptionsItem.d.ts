import Vue, { VueConstructor } from "vue";

/** DescriptionsItem component props */
export interface DescriptionsItemProps {
  label?: string;
  /** default: 1 */
  span?: number;
  type?: string;
  bordered?: boolean;
  layout?: string;
}

/** DescriptionsItem component instance */
export interface DescriptionsItem extends Vue {
  $props: DescriptionsItemProps;
  $emit(event: string, ...args: any[]): this;
}

/** DescriptionsItem Vue component type */
declare const DescriptionsItem: VueConstructor<DescriptionsItem>;

export default DescriptionsItem;
