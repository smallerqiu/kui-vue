import Vue from "vue";

/** star component props */
export interface starProps {
  value?: number;
  character?: string | ((...args: any[]) => any);
  tooltips?: string;
  percent?: number;
  full?: boolean;
  half?: boolean;
  allowHalf?: boolean;
  disabled?: boolean;
  icon?: string | ((...args: any[]) => any) | any[];
  size?: number;
}

declare class star extends Vue {
  $props: starProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default star;
