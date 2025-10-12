import Vue from "vue";

/** TimeLineItem component props */
export interface TimeLineItemProps {
  color?: string;
  icon?: string | any[];
  time?: string;
  extra?: string;
}

declare class TimeLineItem extends Vue {
  $props: TimeLineItemProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default TimeLineItem;
