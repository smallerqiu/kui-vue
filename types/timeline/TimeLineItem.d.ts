import Vue, { VueConstructor } from "vue";

/** TimeLineItem component props */
export interface TimeLineItemProps {
  color?: string;
  icon?: string | any[];
  time?: string;
  extra?: string;
}

/** TimeLineItem component instance */
export interface TimeLineItem extends Vue {
  $props: TimeLineItemProps;
  $emit(event: string, ...args: any[]): void;
}

/** TimeLineItem Vue component type */
declare const TimeLineItem: VueConstructor<TimeLineItem>;

export default TimeLineItem;
