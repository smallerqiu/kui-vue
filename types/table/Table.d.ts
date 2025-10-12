import Vue from "vue";

/** Table component props */
export interface TableProps {
  bordered?: boolean;
  /** default: default */
  size?: any;
  width?: number;
  height?: number | string;
  /** default: undefined */
  data?: any[];
  /** default: undefined */
  columns?: any[];
  loading?: boolean;
  sticky?: boolean | number;
  emptyText?: string;
}

declare class Table extends Vue {
  $props: TableProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Table;
