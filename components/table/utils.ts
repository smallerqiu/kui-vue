import { assert } from "../utils/share";
import type { Column, TableKey, TableRecord, TableTreeRow } from "./types";

export const flattenColumns = (columns: Column[]): Column[] =>
  columns.flatMap((column) => (column.children?.length ? flattenColumns(column.children) : column));

export const countColumnLeaves = (column: Column): number =>
  column.children?.length
    ? column.children.reduce((sum, child) => sum + countColumnLeaves(child), 0)
    : 1;

/**
 * 按列 `key` 从记录里取单元格值，`rowKey` 与 `childrenColumnName` 的字段名也走这同一个读取器。
 * kui-react 与 kui-vue 的 `components/table/utils.ts` 里是逐字节相同的副本，改一边必须同步另一边，
 * 否则同一份数据在两个框架里会渲染出不同内容、排出不同顺序。
 *
 * 取值规则：
 * - 整名优先：`key` 本身就是记录上的属性时直接取它，所以字段名自带点号（`{ "a.b": 1 }`）不会被误当成路径；
 * - 整名没命中且 `key` 含点号时按 `.` 逐段下钻，任意一段走到非对象（含 `null`）就返回 `undefined`，
 *   所以 `{ user: null }` 配 `key="user.name"` 渲染成空而不是抛错；数字段天然能取数组元素（`"tags.0"`）；
 * - `__proto__`/`constructor`/`prototype` 这三段一律取不到值，避免列名顺着原型链摸到全局对象。
 */
export const getRecordValue = <T extends object>(record: T, key: string): unknown => {
  if (key in record) return (record as Record<string, unknown>)[key];
  if (!key.includes(".")) return undefined;
  let current: unknown = record;
  for (const segment of key.split(".")) {
    if (segment === "__proto__" || segment === "constructor" || segment === "prototype") {
      return undefined;
    }
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
};

export const getTreeChildren = (record: TableRecord, childrenColumnName: string): TableRecord[] => {
  const children = getRecordValue(record, childrenColumnName);
  return Array.isArray(children) ? (children as TableRecord[]) : [];
};

/**
 * 分组表头父列上的 `fixed` 向下继承给整棵子树。kui-react 与 kui-vue 的
 * `components/table/utils.ts` 里是逐字节相同的副本，改一边必须同步另一边，
 * 否则同一份列配置在两个框架里会固定出不同的列。
 *
 * `colgroup` 与 sticky 偏移都只按叶子列累加，所以父列上写的 `fixed` 必须落到它的每个叶子列上，
 * 「固定整组」这种配置才不会整体失效。叶子自己显式写的 `fixed` 优先，只在没写时补继承值；
 * 一个方向都没继承到的列返回原来的对象引用，整棵子树都没变时连数组都复用同一个引用，
 * 免得每次渲染都给列树新建对象，把 `visibleColumns → leaves → headerInfo` 的 memo 打回原形。
 */
export const inheritColumnFixed = <C extends { fixed?: "left" | "right"; children?: C[] }>(
  columns: C[],
  inherited?: "left" | "right",
): C[] => {
  const next = columns.map((column) => {
    const fixed = column.fixed ?? inherited;
    const children = column.children?.length
      ? inheritColumnFixed(column.children, fixed)
      : column.children;
    if (fixed === column.fixed && children === column.children) return column;
    const copy = { ...column } as C;
    if (fixed) copy.fixed = fixed;
    if (children) copy.children = children;
    return copy;
  });
  return next.every((column, index) => column === columns[index]) ? columns : next;
};

/**
 * 表头排序的共享比较器。kui-react 与 kui-vue 的 `components/table/utils.ts` 里是逐字节相同的副本，
 * 改一边必须同步另一边，否则同一份数据在两个框架下会排出不同顺序。
 *
 * 规则：
 * - 两侧都是 number（含 `Date` 之外的数值）时按数值比较，`NaN` 排在最前；
 * - 其余情况（字符串、数字与字符串混排、布尔、`null`/`undefined`）统一转成字符串，
 *   用带数字感知的字典序比较，所以 `"9"` 排在 `"10"` 前面，`null`/`undefined` 视作空串。
 */
export const compareSortValues = (first: unknown, second: unknown): number => {
  if (typeof first === "number" && typeof second === "number") {
    const firstIsNaN = Number.isNaN(first);
    const secondIsNaN = Number.isNaN(second);
    if (firstIsNaN || secondIsNaN) return firstIsNaN && secondIsNaN ? 0 : firstIsNaN ? -1 : 1;
    return first === second ? 0 : first < second ? -1 : 1;
  }
  const toText = (value: unknown) => (value === null || value === undefined ? "" : String(value));
  const firstText = toText(first);
  const secondText = toText(second);
  if (firstText === secondText) return 0;
  return firstText.localeCompare(secondText, undefined, { numeric: true });
};

/**
 * `rowKey` 取不到 `string`/`number` 时的兜底 key：按记录对象本身分配一个稳定且互不相同的 key。
 *
 * 直接返回 `""` 会让所有缺 key 的行撞到同一个 React key / 勾选 key 上，勾选一行等于勾选全部。
 * 这里用 `WeakMap` 缓存，同一个记录对象在多次渲染之间拿到的 key 不变，勾选与展开状态因此不会漂移。
 * 只在第一次兜底时告警一次，避免大表格刷屏。
 */
const syntheticRowKeys = new WeakMap<object, string>();
let syntheticRowKeyCount = 0;
let warnedMissingRowKey = false;

export const getSyntheticRowKey = (record: object): string => {
  const existing = syntheticRowKeys.get(record);
  if (existing) return existing;
  const created = `kui-row-${(syntheticRowKeyCount += 1)}`;
  syntheticRowKeys.set(record, created);
  if (!warnedMissingRowKey) {
    warnedMissingRowKey = true;
    assert(
      false,
      "[kui-table] rowKey 没有取到 string/number，已按记录生成兜底 key，请为每行设置 rowKey（字段名或取值函数）。",
    );
  }
  return created;
};

/**
 * 解析一行的 key，kui-react 与 kui-vue 行为一致：`rowKey` 可以是字段名，也可以是取值函数；
 * 两者都拿不到 `string`/`number` 时回退到 `getSyntheticRowKey` 生成的兜底 key。
 *
 * 字段名走 `getRecordValue`，所以和列 `key` 一样支持 `"user.uid"` 这种点路径。
 * 本函数与上面的 `getSyntheticRowKey` 在两个仓库里是逐字节相同的副本，改一边必须同步另一边。
 */
export const resolveRowKey = <T extends object>(
  record: T,
  rowKey: string | ((record: T) => TableKey),
): TableKey => {
  if (typeof rowKey === "function") return rowKey(record);
  const value = getRecordValue(record, rowKey);
  return typeof value === "string" || typeof value === "number"
    ? value
    : getSyntheticRowKey(record);
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

/**
 * `expandAllRows` 期间 `data` 异步变化时，把“数据里新出现的父行”补进展开集合，
 * 已经在数据里的行保持用户手动展开或折叠的结果。kui-react 与 kui-vue 的
 * `components/table/utils.ts` 里是逐字节相同的副本，改一边必须同步另一边。
 *
 * `knownParentKeys` 是上一次看到的数据里的父行 key 集合，`nextParentKeys` 是本次的，
 * 所以从数据里消失又回来的父行算“新出现”、会被重新展开，两仓都不记住它曾被折叠。
 * `changed` 只回答“展开集合要不要加新 key”：调用方每轮都要把 `nextParentKeys` 记回去，
 * 但不能无条件写回展开状态，否则 `data` 每轮都是新数组，渲染期同步状态会直接死循环。
 */
export const mergeExpandAllRows = (
  knownParentKeys: Set<TableKey>,
  nextParentKeys: Set<TableKey>,
  expandedKeys: Set<TableKey>,
): { keys: Set<TableKey>; changed: boolean } => {
  const keys = new Set(expandedKeys);
  let changed = false;
  nextParentKeys.forEach((key) => {
    if (knownParentKeys.has(key) || keys.has(key)) return;
    keys.add(key);
    changed = true;
  });
  return { keys, changed };
};
