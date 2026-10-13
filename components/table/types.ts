import type { VNodeChild } from "vue";

export type TableKey = string | number;
export type TableRecord = Record<string, unknown>;

export interface SortState {
  key: string;
  order: null | "desc" | "asc";
}

/** 单元格省略号的细节配置，与 kui-react 的 `TableEllipsisOptions` 同一套语义。 */
export interface TableEllipsisOptions {
  /** 截断到第几行，默认 `1`（单行不换行） */
  rows?: number;
  /**
   * 悬停提示。默认用被截断的那段文本；传内容换成指定的提示；`false` 关掉提示。
   * 只有真的被截断才会弹，没截断的格子不会多出气泡。
   */
  tooltip?: boolean | VNodeChild;
}

export interface Column {
  key: string;
  title: string;
  width?: number;
  fixed?: "left" | "right";
  sorter?: boolean | ((state: SortState) => void);
  /**
   * 内容超出列宽时显示省略号。`true` 单行、数字或 `rows` 是多行，`tooltip` 定制悬停提示。
   * 表格级 `ellipsis` 打开时，这一列写 `false` 可以单独关掉。
   */
  ellipsis?: boolean | number | TableEllipsisOptions;
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
