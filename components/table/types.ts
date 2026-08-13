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
  render?: (
    h: typeof import("vue").h,
    record: TableRecord,
    colIndex: number,
    rowIndex: number,
    col: Column
  ) => VNodeChild;
  colSpan?: number | ((record: TableRecord, index: number) => number);
  rowSpan?: number | ((record: TableRecord, index: number) => number);
  children?: Column[];
}
