import Vue, { VueConstructor } from "vue";

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

/** Table component instance */
export interface Table extends Vue {
  $props: TableProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Table Vue component type */
declare const Table: VueConstructor<Table>;

export default Table;
