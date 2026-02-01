import Vue, { VueConstructor } from "vue";

/** Table component props */
export interface TableProps {
  /** default: undefined */
  data?: any[];
  /** default: undefined */
  columns?: any[];
  /** default: undefined */
  selectedKeys?: any[];
  /** default: undefined */
  disabledKeys?: any[];
  /** default: key */
  rowKey?: string;
  /** default: undefined */
  scroll?: Record<string, any>;
  /** default: default */
  size?: any;
  /** default: false */
  bordered?: boolean;
  checkable?: boolean;
  loading?: boolean;
  emptyText?: string;
}

/** Table component instance */
export interface Table extends Vue {
  $props: TableProps;
  $emit(event: string, ...args: any[]): this;
}

/** Table Vue component type */
declare const Table: VueConstructor<Table>;

export default Table;
