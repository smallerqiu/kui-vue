import type { Column, TableKey, TableRecord, TableTreeRow } from "./types";

export const flattenColumns = (columns: Column[]): Column[] =>
  columns.flatMap((column) => (column.children?.length ? flattenColumns(column.children) : column));

export const countColumnLeaves = (column: Column): number =>
  column.children?.length
    ? column.children.reduce((sum, child) => sum + countColumnLeaves(child), 0)
    : 1;

export const getTreeChildren = (record: TableRecord, childrenColumnName: string): TableRecord[] => {
  const children = record[childrenColumnName];
  return Array.isArray(children) ? (children as TableRecord[]) : [];
};

interface FlattenTreeOptions {
  data: TableRecord[];
  childrenColumnName: string;
  expandedKeys?: Set<TableKey>;
  getKey: (record: TableRecord) => TableKey;
  sortRecords?: (records: TableRecord[]) => TableRecord[];
}

export const flattenTreeData = ({
  data,
  childrenColumnName,
  expandedKeys,
  getKey,
  sortRecords = (records) => records,
}: FlattenTreeOptions): TableTreeRow[] => {
  const rows: TableTreeRow[] = [];
  const visit = (records: TableRecord[], depth: number) => {
    sortRecords(records).forEach((record) => {
      const children = getTreeChildren(record, childrenColumnName);
      rows.push({ record, depth, hasChildren: children.length > 0 });
      if (children.length && (!expandedKeys || expandedKeys.has(getKey(record)))) {
        visit(children, depth + 1);
      }
    });
  };
  visit(data, 0);
  return rows;
};
