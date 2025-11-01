import Vue, { VueConstructor } from "vue";

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

/** extend component instance */
export interface extend extends Vue {
  $props: extendProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** extend Vue component type */
declare const extend: VueConstructor<extend>;

export default extend;
