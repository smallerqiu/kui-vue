import Vue from "vue";

/** ExtendTable component props */
export interface ExtendTableProps {
  body?: any[];
  columns?: any[];
  columns2?: any[];
  height?: any;
  width?: number;
  hasExpand?: boolean;
  indeterminate?: boolean;
  sticky?: any;
  checkAll?: boolean;
}

declare class ExtendTable extends Vue {
  $props: ExtendTableProps;
  $emit(event: string, ...args: any[]): this;
}

export default ExtendTable;
