import type { VNodeChild } from "vue";

export type TableKey = string | number;
export type TableRecord = Record<string, unknown>;

export interface SortState {
  key: string;
  order: null | "desc" | "asc";
}

export interface Column {
  key: string;
  title: string;
  width?: number;
  fixed?: "left" | "right";
  sorter?: boolean | ((state: SortState) => void);
  /** 参数顺序与 kui-react 版 `Column.render` 一致：value, record, rowIndex, column。 */
  render?: (value: unknown, record: TableRecord, rowIndex: number, col: Column) => VNodeChild;
  colSpan?: number | ((record: TableRecord, index: number) => number);
  rowSpan?: number | ((record: TableRecord, index: number) => number);
  children?: Column[];
}

export interface TableTreeRow {
  record: TableRecord;
  depth: number;
  hasChildren: boolean;
}
