import Vue from "vue";

/** extend component props */
export interface extendProps {
  body?: any[];
  columns?: any[];
  columns2?: any[];
  height?: number | string;
  width?: number;
  hasExpand?: boolean;
  indeterminate?: boolean;
  sticky?: boolean | number;
  checkAll?: boolean;
}

declare class extend extends Vue {
  $props: extendProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default extend;
