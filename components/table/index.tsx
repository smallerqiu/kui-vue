import { ChevronDown, ChevronRight, Triangle } from "kui-icons";
import type { CSSProperties, ExtractPropTypes, PropType, Ref, VNodeChild } from "vue";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  shallowRef,
  watch,
} from "vue";
import { Checkbox, type ChangeEvent } from "../checkbox";
import { useConfigAppearance } from "../config/context";
import type { BooleanType, SizeType, SurfaceShapeType } from "../const/types";
import Empty from "../empty";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
import { DEFAULT_LOCALE } from "../config/context";
import Spin from "../spin";
import Tooltip from "../tooltip";
import { getVirtualRange } from "../virtual-list";
import type { Column, SortState, TableEllipsisOptions, TableKey, TableRecord } from "./types";
import {
  compareSortValues,
  countColumnLeaves,
  flattenColumns,
  flattenTreeData,
  getRecordValue,
  inheritColumnFixed,
  mergeExpandAllRows,
  resolveCellEllipsis,
  resolveRowKey,
} from "./utils";

/**
 * 列宽基准，与 kui-react `components/table/index.tsx` 的同名常量保持一致。
 *
 * 规矩只有一条：**`<col>` 落地的宽度、算 sticky 偏移的宽度、表格内容的最小宽度，三处都从同一个
 * `width ?? 150` 出发**。写了 `width` 的列（固定与否都一样）照原值写进 colgroup，偏移也按原值累加；
 * 没写 `width` 的固定列按 150 落地；没写 `width` 的普通列在 colgroup 上留 `auto` 去吸收容器撑出来的
 * 多余宽度，但在最小宽度里按 150 计——容器比这份下限还窄时先出横向滚动条，而不是把 `auto` 列一路压到
 * 表头一个字一行。反过来把带宽度的普通列也写成 `auto` 是不行的——`table-layout: fixed`
 * 下它们会被固定列的确切宽度挤到 0 宽，横向能滚的距离也一并消失，固定列就"看着没生效"。
 */
const DEFAULT_COLUMN_WIDTH = 150;
/** 勾选列宽度：colgroup、行内单元格样式和固定列的左偏移三处共用 */
const SELECTION_COLUMN_WIDTH = 50;
/** 一列的宽度基准：写了 `width` 照原值，没写按 150。sticky 偏移和表格最小宽度都走它。 */
const widthBasisOf = (column: Column) => column.width ?? DEFAULT_COLUMN_WIDTH;
/** colgroup 落地的宽度：有 `width` 照写，缺宽度的固定列按 150，缺宽度的普通列交给 `auto`。 */
const colgroupWidthOf = (column: Column): string => {
  const width = column.width ?? (column.fixed ? DEFAULT_COLUMN_WIDTH : undefined);
  return width === undefined ? "auto" : `${width}px`;
};

/**
 * 分栏表头要按真实滚动条宽度给表头容器让出一条槽位（见 `styles/index.less` 的 `k-table-split-header`），
 * 这个值只能量、不能写死：新内核走 `.k-scroll` 的 `::-webkit-scrollbar { width }` 拿到 8px，
 * Firefox 走 `scrollbar-width`（不认长度值的旧版退回 `thin` 的约 11px），更老的 Safari/Windows 是 15/17px。
 * 探针必须带 `k-scroll` 类——量裸 `div` 得到的是浏览器默认滚动条宽度，不是库自己那套。
 * 顺带一提 `overflow: scroll` 让两条轴都出滚动条，`offsetWidth - clientWidth` 才是纵向那一条的宽度。
 *
 * kui-react 与 kui-vue 的 `components/table/index.tsx` 里是逐字节相同的副本，改一边必须同步另一边。
 */
const measureScrollbarWidth = (): number => {
  if (typeof document === "undefined") return 0;
  const probe = document.createElement("div");
  probe.className = "k-scroll";
  probe.style.cssText =
    "position:absolute;top:-9999px;left:-9999px;width:100px;height:100px;overflow:scroll";
  document.body.appendChild(probe);
  const width = probe.offsetWidth - probe.clientWidth;
  probe.remove();
  return width;
};

/**
 * 单元格省略号（`ellipsis`，写在列上或表格级），与 kui-react `components/table/index.tsx` 里的
 * `EllipsisCell` 同一套语义：`rows` 是截断行数，`tooltip` 决定悬停提示——省略或 `true` 用被截断的
 * 那段文本，传内容则换成指定的提示，`false` 关掉。
 *
 * 提示只在**真的被截断**时才弹——判定放在 hover 那一刻量 `scrollWidth` / `scrollHeight`，
 * 于是既不用给每格挂观察器，也不会给没截断的格子凭空多出一个气泡。
 * `Tooltip` 在关闭时不产出任何 DOM，所以整表开启时每格挂一份也不吃亏。
 */
const EllipsisCell = defineComponent({
  name: "TableEllipsisCell",
  props: {
    rows: { type: Number, required: true },
    tooltip: {
      type: [Boolean, String, Number, Object, Array] as PropType<VNodeChild | false>,
      default: undefined,
    },
    /** 树形首列要保住自己的 `k-table-tree-content`，所以把额外的类名递进来一起挂 */
    extraClass: String,
  },
  setup(props, { slots }) {
    const innerRef = ref<HTMLElement | null>(null);
    // `VNodeChild` 是递归联合类型，`ref` 的深层 `UnwrapRef` 会在这里爆掉，改用 `shallowRef`。
    const tip = shallowRef<VNodeChild | null>(null);
    const multiRows = computed(() => props.rows > 1);
    const enter = () => {
      const element = innerRef.value;
      if (!element || props.tooltip === false) return;
      // 留 1px 余量：浏览器把小数宽度取整后，没截断的格子也可能差出 1。
      const clipped = multiRows.value
        ? element.scrollHeight > element.clientHeight + 1
        : element.scrollWidth > element.clientWidth + 1;
      if (!clipped) return;
      if (props.tooltip === undefined || props.tooltip === true) {
        tip.value = element.textContent?.replace(/\s+/g, " ").trim() || null;
        return;
      }
      tip.value = props.tooltip;
    };
    // Vue 的 style 绑定不会给数字补单位，行数一律写成字符串。
    return () => {
      const node = (
        <span
          ref={innerRef}
          class={[
            "k-table-cell-ellipsis",
            multiRows.value && "k-table-cell-ellipsis-rows",
            props.extraClass,
          ]}
          style={multiRows.value ? { WebkitLineClamp: `${props.rows}` } : undefined}
          onMouseenter={enter}
          onMouseleave={() => {
            tip.value = null;
          }}
        >
          {slots.default?.()}
        </span>
      );
      if (props.tooltip === false) return node;
      return (
        <Tooltip trigger="manual" show={Boolean(tip.value)} title={tip.value}>
          {node}
        </Tooltip>
      );
    };
  },
});

const tableProps = {
  data: { type: Array as PropType<TableRecord[]>, default: () => [] },
  columns: { type: Array as PropType<Column[]>, default: () => [] },
  /** 一次给所有列打开省略号；列上的 `ellipsis` 优先，写 `false` 可以把这一列单独关掉 */
  ellipsis: {
    type: [Boolean, Number, Object] as PropType<boolean | number | TableEllipsisOptions>,
    default: undefined,
  },
  hiddenColumnKeys: { type: Array as PropType<string[]>, default: () => [] },
  selectedKeys: { type: Array as PropType<TableKey[]>, default: () => [] },
  disabledKeys: { type: Array as PropType<TableKey[]>, default: () => [] },
  rowKey: {
    type: [String, Function] as PropType<string | ((record: TableRecord) => TableKey)>,
    default: "key",
  },
  childrenColumnName: { type: String, default: "children" },
  expandedKeys: Array as PropType<TableKey[]>,
  expandAllRows: Boolean as BooleanType,
  expandRowByClick: Boolean as BooleanType,
  indentSize: { type: Number, default: 20 },
  scroll: {
    type: Object as PropType<{ x?: number | string; y?: number | string }>,
    default: () => ({}),
  },
  size: {
    type: String as PropType<SizeType>,
  },
  striped: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: false },
  shape: { type: String as PropType<SurfaceShapeType>, default: "round" },
  checkable: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  emptyText: String,
  virtual: Boolean as BooleanType,
  itemHeight: { type: Number, default: 44 },
  overscan: { type: Number, default: 5 },
};

interface Matrix {
  rowSpan: number;
  colSpan: number;
  show: boolean;
}

/**
 * 表头单元格 = 列配置 + 这一格在表头网格里占的位置。
 * `leafCount` 与渲染用的 `colSpan` 是同一个数，配合 `leafStart` 得到区间
 * `[leafStart, leafStart + leafCount)`，sticky 偏移和固定类都由这个区间算出。
 */
interface HeaderCell extends Column {
  leafStart: number;
  leafCount: number;
  /** 区间内叶子列方向不一致时为 `undefined`，这一格就不参与 sticky */
  headerFixed?: "left" | "right";
}

export type TableProps = ExtractPropTypes<typeof tableProps>;

const Table = defineComponent({
  name: "Table",
  props: tableProps,
  emits: {
    "update:selectedKeys": (keys: TableKey[]) => Array.isArray(keys),
    "update:expandedKeys": (keys: TableKey[]) => Array.isArray(keys),
    sort: (state: SortState) => typeof state === "object" && state !== null,
    rowClick: (record: TableRecord, index: number) =>
      typeof record === "object" && record !== null && Number.isInteger(index),
    select: (record: TableRecord, selected: boolean, keys: TableKey[]) =>
      typeof record === "object" &&
      record !== null &&
      typeof selected === "boolean" &&
      Array.isArray(keys),
    selectAll: (selected: boolean, keys: TableKey[]) =>
      typeof selected === "boolean" && Array.isArray(keys),
    expand: (expanded: boolean, record: TableRecord) =>
      typeof expanded === "boolean" && typeof record === "object" && record !== null,
    expandedKeysChange: (keys: TableKey[]) => Array.isArray(keys),
  },
  setup(props, { emit, slots }) {
    const appearance = useConfigAppearance(props);
    // 与 table/column-setting.tsx 同一套取法：ConfigProvider 提供的是 ref，
    // 直接读会把 ref 当成语言包对象。
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", DEFAULT_LOCALE);
    const tableLocale = computed(() => {
      const resolved =
        injectedLocale && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
      return resolved?.k?.table;
    });
    const bodyWrapperRef = ref<HTMLElement>();
    const rootRef = ref<HTMLElement>();
    const headerWrapperRef = ref<HTMLElement>();
    /** 分栏表头里真正承担裁剪与横向同步的是内层（见 `styles/index.less` 的 `.k-table-thead-inner`）。 */
    const headerScrollRef = ref<HTMLElement>();
    const innerSelectedKeys = ref(new Set(props.selectedKeys));
    const innerExpandedKeys = ref(new Set<TableKey>(props.expandedKeys ?? []));
    // `scroll.y` 一旦给出就把表头拆成另一张 table：表体自己纵向滚，表头靠同步 `scrollLeft` 横向跟。
    // 两仓同名，react 侧是 `splitHeader`。
    const splitHeader = computed(() => props.scroll.y != null);
    const sortState = reactive<SortState>({ key: "", order: null });
    const pingLeft = ref(false);
    const pingRight = ref(false);
    const bodyScrollTop = ref(0);
    const bodyViewportHeight = ref(0);

    watch(
      () => props.selectedKeys,
      (val) => {
        innerSelectedKeys.value = new Set(val);
      },
    );
    const visibleColumns = computed(() => {
      const filter = (columns: Column[]): Column[] =>
        columns.flatMap((column) => {
          if (props.hiddenColumnKeys.includes(column.key)) return [];
          if (!column.children?.length) return [column];
          const children = filter(column.children);
          return children.length ? [{ ...column, children }] : [];
        });
      return filter(props.columns);
    });
    // 分组父列上的 `fixed` 先向下继承，之后 `flattedColumns` 与 `headerRows` 只需认叶子列上的方向。
    const inheritedColumns = computed(() => inheritColumnFixed(visibleColumns.value));
    const flattedColumns = computed(() => flattenColumns(inheritedColumns.value));

    // 表格内容的最小宽度：每列的宽度基准之和（没写 `width` 的普通列按 150 计），再加勾选列的 50。
    // `<col>` 上它们仍是 `auto`，宽容器里照旧平摊多余空间；这一份只是下限，容器比它还窄就出横向
    // 滚动条。`scroll.x` 显式给了则照旧以 `scroll.x` 为准。
    const contentMinWidth = computed(
      () =>
        flattedColumns.value.reduce((sum, column) => sum + widthBasisOf(column), 0) +
        (props.checkable ? SELECTION_COLUMN_WIDTH : 0),
    );

    // 省略号按叶子列归一一次：列上写了 `ellipsis` 就以列为准，否则跟着表格级 `ellipsis` 走，
    // 所以表格级全开时某一列还能用 `ellipsis: false` 单独关掉。
    // 归一放在这里而不是单元格里面，免得每渲染一格就归一一次、再新建一个对象。
    const cellEllipsis = computed(() => {
      const map = new Map<TableKey, { rows: number; tooltip?: VNodeChild | false } | null>();
      flattedColumns.value.forEach((column) =>
        map.set(column.key, resolveCellEllipsis(column.ellipsis, props.ellipsis)),
      );
      return map;
    });

    // 分栏后表头和表体是两张 table，表体单元格与表头之间不再有任何结构关系可读，
    // 屏幕阅读器只会念"单元格 张三"。这里给每个表头格生成 id，表体格用 `aria-labelledby` 指回去，
    // 把列名还给单元格。只在分栏时生成：单 table 的 DOM 本来就带这层关系，多发 id 只是加噪音。
    // 前缀用实例 uid（react 侧是洗过字符的 `useId()`），后缀用遍历序号而不是列 key，
    // key 里可能有 `.`、`:` 这类要被替换的字符，洗完两列可能撞成同一个 id。
    const instance = getCurrentInstance();
    const headCellIds = computed(() => {
      const ids = new Map<TableKey, string>();
      if (!splitHeader.value) return ids;
      const prefix = `k-table-${instance?.uid ?? 0}-`;
      const visit = (items: Column[]) =>
        items.forEach((item) => {
          ids.set(item.key, `${prefix}${ids.size}`);
          if (item.children?.length) visit(item.children);
        });
      visit(inheritedColumns.value);
      return ids;
    });

    const headerRows = computed(() => {
      const rows: HeaderCell[][] = [];
      let maxDepth = 0;

      const getDepth = (cols: Column[], depth = 0) => {
        cols.forEach((col) => {
          if (col.children && col.children.length > 0) {
            getDepth(col.children, depth + 1);
          } else {
            maxDepth = Math.max(maxDepth, depth + 1);
          }
        });
      };
      getDepth(inheritedColumns.value);

      // 一个表头格覆盖 `leafCount` 个叶子列，`leafStart` 记下它从哪个叶子列开始。
      // 只有整段区间固定方向一致，这一格才跟着 sticky：偏移是按叶子列累加的，
      // 跨了非固定列的分组格一浮动就会盖住本该滚走的内容。
      const fixedDirectionOf = (leafStart: number, leafCount: number) => {
        const direction = flattedColumns.value[leafStart]?.fixed;
        if (!direction) return undefined;
        for (let index = leafStart + 1; index < leafStart + leafCount; index += 1) {
          if (flattedColumns.value[index]?.fixed !== direction) return undefined;
        }
        return direction;
      };

      const traverse = (cols: Column[], depth: number, startAt: number) => {
        if (!rows[depth]) rows[depth] = [];
        let cursor = startAt;
        cols.forEach((col) => {
          const leafCount = countColumnLeaves(col);
          const cell: HeaderCell = { ...col, leafStart: cursor, leafCount };
          // colSpan（渲染用的那一格宽度跨度）就是它覆盖的叶子列总数
          cell.colSpan = leafCount;

          // 计算 rowSpan
          if (col.children && col.children.length > 0) {
            cell.rowSpan = 1;
            traverse(col.children, depth + 1, cursor);
          } else {
            cell.rowSpan = maxDepth - depth;
          }
          cell.headerFixed = fixedDirectionOf(cursor, leafCount);
          rows[depth].push(cell);
          cursor += leafCount;
        });
      };
      traverse(inheritedColumns.value, 0, 0);
      return { rows, maxDepth };
    });

    const isDisabled = (key: TableKey) => props.disabledKeys.includes(key);
    const getRowKey = (record: TableRecord): TableKey => resolveRowKey(record, props.rowKey);
    const parentKeysOf = (records: TableRecord[]) =>
      new Set(
        flattenTreeData({
          data: records,
          childrenColumnName: props.childrenColumnName,
          getKey: getRowKey,
        })
          .filter((row) => row.hasChildren)
          .map((row) => getRowKey(row.record)),
      );
    // 上一次数据里的父行 key，用来区分“异步新到达的父行”和“用户已手动处理过的行”
    let knownParentKeys = new Set<TableKey>();
    watch(
      [() => props.expandedKeys, () => props.expandAllRows],
      ([keys, expandAll]) => {
        // 受控值或 expandAllRows 本身变化：整份替换，关掉 expandAllRows 仍然会全部折叠
        // 父行 key 只在「非受控 + expandAllRows」时才用得上（数据增量合并），
        // 其它情况没必要为一次展开点击把整棵树再走一遍。
        const needParentKeys = expandAll && keys === undefined;
        const nextParentKeys = needParentKeys ? parentKeysOf(props.data) : new Set<TableKey>();
        innerExpandedKeys.value = new Set(keys ?? (needParentKeys ? nextParentKeys : []));
        knownParentKeys = nextParentKeys;
      },
      { immediate: true },
    );
    watch(
      () => props.data,
      () => {
        // 与 kui-react 一致：只有数据在变时补上新增的父行，其余保持用户的选择
        if (props.expandedKeys !== undefined || !props.expandAllRows) return;
        const nextParentKeys = parentKeysOf(props.data);
        const merged = mergeExpandAllRows(knownParentKeys, nextParentKeys, innerExpandedKeys.value);
        knownParentKeys = nextParentKeys;
        if (merged.changed) innerExpandedKeys.value = merged.keys;
      },
    );
    const currentExpandedKeys = computed(() => innerExpandedKeys.value);
    const sortRecords = (records: TableRecord[]) => {
      const list = [...records];
      if (sortState.key && sortState.order) {
        const col = flattedColumns.value.find((item) => item.key === sortState.key);
        if (col?.sorter === true) {
          list.sort((first, second) => {
            const comparison = compareSortValues(
              getRecordValue(first, sortState.key),
              getRecordValue(second, sortState.key),
            );
            return sortState.order === "asc" ? comparison : -comparison;
          });
        }
      }
      return list;
    };
    const allTreeRows = computed(() =>
      flattenTreeData({
        data: props.data,
        childrenColumnName: props.childrenColumnName,
        getKey: getRowKey,
      }),
    );
    const visibleTreeRows = computed(() =>
      flattenTreeData({
        data: props.data,
        childrenColumnName: props.childrenColumnName,
        expandedKeys: currentExpandedKeys.value,
        getKey: getRowKey,
        sortRecords,
      }),
    );
    const treeEnabled = computed(() => allTreeRows.value.some((row) => row.hasChildren));
    const virtualEnabled = computed(() => props.virtual && splitHeader.value);
    const virtualRange = computed(() =>
      getVirtualRange({
        count: visibleTreeRows.value.length,
        scrollTop: bodyScrollTop.value,
        viewportHeight: bodyViewportHeight.value,
        itemHeight: props.itemHeight,
        overscan: props.overscan,
      }),
    );
    const renderedTreeRows = computed(() => {
      const start = virtualEnabled.value ? virtualRange.value.start : 0;
      const end = virtualEnabled.value ? virtualRange.value.end : visibleTreeRows.value.length;
      return visibleTreeRows.value.slice(start, end).map((row, index) => ({
        ...row,
        rowIndex: start + index,
      }));
    });

    const selectionState = computed(() => {
      const enableData = allTreeRows.value
        .map((row) => row.record)
        .filter((item) => !isDisabled(getRowKey(item)));
      if (enableData.length === 0) return { all: false, indeterminate: false, disabled: true };

      const checkedCount = enableData.filter((item) =>
        innerSelectedKeys.value.has(getRowKey(item)),
      ).length;

      return {
        all: checkedCount > 0 && checkedCount === enableData.length,
        indeterminate: checkedCount > 0 && checkedCount < enableData.length,
        disabled: false,
      };
    });

    const fixedInfo = computed(() => {
      const headerStyles: Record<string, CSSProperties> = {};
      const bodyStyles: Record<string, CSSProperties> = {};
      // 每个叶子列左右两侧已经排开的固定宽度。叶子格按自己那一格取，
      // 分组表头格按它覆盖的区间端点取，两处共用同一份基准才不会露缝。
      const leftBefore: number[] = [];
      const rightAfter: number[] = [];
      let leftOffset = props.checkable ? SELECTION_COLUMN_WIDTH : 0;

      flattedColumns.value.forEach((col, index) => {
        leftBefore[index] = leftOffset;
        if (col.fixed === "left") {
          bodyStyles[col.key] = {
            position: "sticky",
            left: `${leftOffset}px`,
          };
          leftOffset += widthBasisOf(col);
        }
      });

      let rightOffset = 0;
      for (let i = flattedColumns.value.length - 1; i >= 0; i--) {
        rightAfter[i] = rightOffset;
        const col = flattedColumns.value[i];
        if (col.fixed === "right") {
          bodyStyles[col.key] = {
            position: "sticky",
            right: `${rightOffset}px`,
          };
          rightOffset += widthBasisOf(col);
        }
      }

      headerRows.value.rows.forEach((row) => {
        row.forEach((cell) => {
          const lastLeaf = cell.leafStart + cell.leafCount - 1;
          if (cell.headerFixed === "left") {
            headerStyles[cell.key] = {
              position: "sticky",
              left: `${leftBefore[cell.leafStart] ?? 0}px`,
            };
          } else if (cell.headerFixed === "right") {
            headerStyles[cell.key] = {
              position: "sticky",
              right: `${rightAfter[lastLeaf] ?? 0}px`,
            };
          }
        });
      });
      return { header: headerStyles, body: bodyStyles };
    });

    // `colSpan` 是合并单元格的横向跨度，末列判定要按区间末尾算，不然合并行的行末格会被当成中间格。
    const getFixedClass = (col: Column, index: number, colSpan = 1) => {
      const cls = [];
      if (col.fixed === "left") {
        cls.push("k-table-cell-fix-left");
        if (flattedColumns.value[index + 1]?.fixed !== "left")
          cls.push("k-table-cell-fix-left-last");
      }
      if (col.fixed === "right") {
        cls.push("k-table-cell-fix-right");
        if (flattedColumns.value[index - 1]?.fixed !== "right")
          cls.push("k-table-cell-fix-right-first");
      }
      if (col.sorter) cls.push("k-table-cell-sorter");
      if (index + colSpan === flattedColumns.value.length) cls.push("k-table-cell-last-column");
      return cls;
    };

    /**
     * 表头格的固定类按它覆盖的叶子区间判断。`*-last`/`*-first` 决定横向滚动时 ping 阴影画在哪一格的
     * 边沿上，分组表头若改用叶子下标去查会拿到 `-1`，把不该画阴影的父格标成最后一列固定格。
     *
     * `k-table-cell-last-column` 同理必须按区间末尾算：bordered 时只有真的盖到最后一列的格子才让出
     * 右边框。表头每一行的格数不一样（分组格占 `colSpan`），行末那一格往往并不是最后一列。
     */
    const getHeaderFixedClass = (cell: HeaderCell) => {
      const cls = [];
      if (cell.headerFixed === "left") {
        cls.push("k-table-cell-fix-left");
        if (flattedColumns.value[cell.leafStart + cell.leafCount]?.fixed !== "left")
          cls.push("k-table-cell-fix-left-last");
      }
      if (cell.headerFixed === "right") {
        cls.push("k-table-cell-fix-right");
        if (flattedColumns.value[cell.leafStart - 1]?.fixed !== "right")
          cls.push("k-table-cell-fix-right-first");
      }
      if (cell.sorter) cls.push("k-table-cell-sorter");
      if (cell.leafStart + cell.leafCount === flattedColumns.value.length)
        cls.push("k-table-cell-last-column");
      return cls;
    };

    let scrollRafId = 0;
    let resizeObserver: ResizeObserver | null = null;
    const handleBodyScroll = (target: HTMLElement) => {
      // const target = e?.target;
      if (!target) return;
      // 只有虚拟滚动才读 scrollTop。非虚拟表格每个滚动事件都写一次，等于把 virtualRange
      // 白白弄脏一轮；与 kui-react 里 `if (virtualEnabled) setScrollTop(...)` 同一口径。
      if (virtualEnabled.value) bodyScrollTop.value = target.scrollTop;
      // 表头是另一张 table，横向必须跟着表体走。同步要放在下面的 rAF 节流**之前**：
      // 节流一帧半帧的，表头就会比表体慢一拍，拖动滚动条时肉眼能看到错位。
      // 同步的是内层那一圈裁剪盒（`.k-table-thead-inner`），外层只负责边框、圆角和让出槽位。
      if (splitHeader.value && headerScrollRef.value) {
        headerScrollRef.value.scrollLeft = target.scrollLeft;
      }
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      scrollRafId = requestAnimationFrame(() => {
        const { scrollLeft, scrollWidth, clientWidth } = target;

        // 优化边界检测，避免亚像素抖动
        const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
        const nextPingLeft = scrollLeft > 0.5;
        const nextPingRight = scrollLeft < maxScrollLeft - 0.5;

        if (pingLeft.value !== nextPingLeft) pingLeft.value = nextPingLeft;
        if (pingRight.value !== nextPingRight) pingRight.value = nextPingRight;
      });
    };

    const measureBody = () => {
      if (bodyWrapperRef.value) {
        bodyViewportHeight.value = bodyWrapperRef.value.clientHeight;
      }
    };

    // 分栏表头要按真实滚动条宽度给表头容器让出一条槽位，这个值只能实测（见 `measureScrollbarWidth`）。
    // 直接写 CSS 变量而不是 ref：它只影响一条样式，用响应式状态会把整张表（含上千行）重新渲染一遍。
    // `scroll.y` 撤掉时把变量清空，免得表头容器还白让一条槽位。
    const applyScrollbarWidth = () => {
      const root = rootRef.value;
      if (!root) return;
      root.style.setProperty(
        "--k-table-scrollbar-width",
        splitHeader.value ? `${measureScrollbarWidth()}px` : "",
      );
    };

    // 滚轮停在表头上时不该什么都不动：表头外层压根不是滚动口（内层 `overflow: hidden`，也滚不动），
    // 得把滚动量转交给表体。react 侧那边必须用原生监听器（根上的 `onWheel` 是 passive 的），
    // 这里 Vue 是直接给元素 `addEventListener`，默认就不是 passive，所以照常写在模板上。
    const forwardWheelToBody = (event: WheelEvent) => {
      const body = bodyWrapperRef.value;
      if (!body) return;
      // `deltaMode` 1 = 行、2 = 页，直接当像素用会滚得只剩一点点或一下翻一页。
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? body.clientHeight : 1;
      const maxTop = Math.max(0, body.scrollHeight - body.clientHeight);
      const maxLeft = Math.max(0, body.scrollWidth - body.clientWidth);
      const nextTop = Math.min(maxTop, Math.max(0, body.scrollTop + event.deltaY * unit));
      const nextLeft = Math.min(maxLeft, Math.max(0, body.scrollLeft + event.deltaX * unit));
      // 一点都滚不动（已经到底）时别吃掉浏览器自己的滚动
      if (nextTop === body.scrollTop && nextLeft === body.scrollLeft) return;
      event.preventDefault();
      body.scrollTo({ top: nextTop, left: nextLeft });
      // 表体的 scroll 事件会照常触发 `handleBodyScroll`，表头的横向偏移由那里同步。
    };

    onMounted(() => {
      applyScrollbarWidth();
      if (bodyWrapperRef.value) {
        measureBody();
        handleBodyScroll(bodyWrapperRef.value);
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(() => {
            measureBody();
            if (bodyWrapperRef.value) handleBodyScroll(bodyWrapperRef.value);
          });
          // 观察滚动容器自己：容器宽度变化会改列宽、换行和表头高度，虚拟窗口和 ping 状态都按它算。
          // 顺带记一笔坑：`thead`/`tr`/`th` 是 table 内部盒（`display: table-header-group` 等），
          // Chrome 的 ResizeObserver 对它们不上报尺寸变化——实测 observe(thead) 在表头长高 56px
          // 之后一次都没触发，挂在表头上等于没挂。
          resizeObserver.observe(bodyWrapperRef.value);
        }
      }
    });

    watch(splitHeader, async () => {
      applyScrollbarWidth();
      await nextTick();
      measureBody();
      if (bodyWrapperRef.value) handleBodyScroll(bodyWrapperRef.value);
    });

    onBeforeUnmount(() => {
      resizeObserver?.disconnect();
      resizeObserver = null;
      cancelAnimationFrame(scrollRafId);
    });

    const handleSort = (col: Column) => {
      if (!col.sorter) return;
      if (sortState.key !== col.key) {
        sortState.key = col.key;
        sortState.order = "asc";
      } else {
        sortState.order =
          sortState.order === "asc" ? "desc" : sortState.order === "desc" ? null : "asc";
      }
      const nextState = { ...sortState };
      if (typeof col.sorter === "function") col.sorter(nextState);
      emit("sort", nextState);
    };

    const toggleAll = ({ checked }: ChangeEvent) => {
      const newSet = new Set(innerSelectedKeys.value);
      allTreeRows.value.forEach(({ record: item }) => {
        const key = getRowKey(item);
        if (!isDisabled(key)) {
          if (checked) {
            newSet.add(key);
          } else {
            newSet.delete(key);
          }
        }
      });
      innerSelectedKeys.value = newSet;
      const rows = Array.from(newSet);
      emit("update:selectedKeys", rows);
      emit("selectAll", checked, rows);
    };

    const toggleOne = (e: ChangeEvent, record: TableRecord, key: TableKey) => {
      if (isDisabled(key)) return;
      const newSet = new Set(innerSelectedKeys.value);
      if (e.checked) {
        newSet.add(key);
      } else {
        newSet.delete(key);
      }
      innerSelectedKeys.value = newSet;
      const rows = Array.from(newSet);
      emit("update:selectedKeys", rows);
      emit("select", record, e.checked, rows);
    };

    const toggleExpand = (record: TableRecord) => {
      const key = getRowKey(record);
      const next = new Set(currentExpandedKeys.value);
      const expanded = !next.has(key);
      if (expanded) next.add(key);
      else next.delete(key);
      innerExpandedKeys.value = next;
      const keys = [...next];
      emit("update:expandedKeys", keys);
      emit("expandedKeysChange", keys);
      emit("expand", expanded, record);
    };

    const renderColGroup = () => (
      <colgroup>
        {props.checkable && <col style={{ width: `${SELECTION_COLUMN_WIDTH}px` }} />}
        {flattedColumns.value.map((col) => (
          // 宽度基准与 sticky 偏移共用同一个函数：写了 width 就照写，别用 auto 挤掉它。
          <col key={col.key} style={{ width: colgroupWidthOf(col) }} />
        ))}
      </colgroup>
    );

    const renderThead = () => {
      const { rows, maxDepth } = headerRows.value;

      return (
        <thead>
          {rows.map((row, rowIndex: number) => (
            <tr key={rowIndex}>
              {/* Checkbox 只在第一行渲染，并根据最大深度设置 rowSpan */}
              {props.checkable && rowIndex === 0 && (
                <th
                  rowspan={maxDepth}
                  class={[
                    "k-table-cell-fix-left",
                    pingLeft.value && "k-table-cell-fix-left-last",
                    // 叶子列全被隐藏时，勾选格就是这一行的最后一格，边框口径要跟着走
                    !flattedColumns.value.length && "k-table-cell-last-column",
                  ]}
                  style={{ left: 0 }}
                >
                  <Checkbox
                    checked={selectionState.value.all}
                    indeterminate={selectionState.value.indeterminate}
                    onChange={toggleAll}
                    disabled={selectionState.value.disabled}
                    // 表头全选格没有文字，可访问名必须走 locale（与 kui-react 同一份 key）
                    aria-label={tableLocale.value?.selectAllRows || "Select all"}
                  />
                </th>
              )}

              {row.map((col, idx: number) => {
                const headerContent = slots[`header-${col.key}`]?.({
                  value: col.title,
                  col,
                  index: idx,
                });
                return (
                  <th
                    key={col.key || idx}
                    id={splitHeader.value ? headCellIds.value.get(col.key) : undefined}
                    colspan={col.colSpan as number}
                    rowspan={col.rowSpan as number}
                    class={getHeaderFixedClass(col)}
                    style={fixedInfo.value.header[col.key]}
                    tabindex={col.sorter ? 0 : undefined}
                    aria-sort={
                      !col.sorter
                        ? undefined
                        : sortState.key !== col.key || !sortState.order
                          ? "none"
                          : sortState.order === "asc"
                            ? "ascending"
                            : "descending"
                    }
                    onClick={() => handleSort(col)}
                    onKeydown={(event: KeyboardEvent) => {
                      if (!col.sorter || (event.key !== "Enter" && event.key !== " ")) return;
                      event.preventDefault();
                      handleSort(col);
                    }}
                  >
                    <div class="k-table-header-col">
                      {headerContent ?? col.title}
                      {col.sorter && (
                        <span class="k-table-sorter">
                          <Icon
                            type={Triangle}
                            reverseFill={true}
                            class={[
                              "k-table-sorter-up",
                              sortState.key === col.key &&
                                sortState.order === "asc" &&
                                "k-table-sorter-active",
                            ]}
                          />
                          <Icon
                            type={Triangle}
                            reverseFill={true}
                            class={[
                              "k-table-sorter-down",
                              sortState.key === col.key &&
                                sortState.order === "desc" &&
                                "k-table-sorter-active",
                            ]}
                          />
                        </span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
      );
    };

    const mergeMatrix = computed(() => {
      const data = visibleTreeRows.value.map((row) => row.record);
      const cols = flattedColumns.value;

      // 结构: matrix[rowIndex][colIndex] = { rowSpan: 1, colSpan: 1, show: true }
      const matrix: Matrix[][] = [];

      if (!data.length) return matrix;
      const hasMergedCells = cols.some(
        (col) => col.rowSpan !== undefined || col.colSpan !== undefined,
      );
      if (!hasMergedCells) return matrix;

      for (let i = 0; i < data.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols.length; j++) {
          matrix[i][j] = { rowSpan: 1, colSpan: 1, show: true };
        }
      }

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < cols.length; j++) {
          if (!matrix[i][j].show) continue;

          const record = data[i];
          const col: Column = cols[j];

          let rowspan = 1;
          let colspan = 1;

          if (col.rowSpan !== undefined) {
            rowspan = typeof col.rowSpan === "function" ? col.rowSpan(record, i) : col.rowSpan;
          }
          if (col.colSpan !== undefined) {
            colspan = typeof col.colSpan === "function" ? col.colSpan(record, i) : col.colSpan;
          }

          rowspan = Number.isFinite(rowspan) ? Math.max(0, Math.floor(rowspan)) : 1;
          colspan = Number.isFinite(colspan) ? Math.max(0, Math.floor(colspan)) : 1;

          if (rowspan === 0 || colspan === 0) {
            matrix[i][j].show = false;
            continue;
          }

          if (rowspan === 1 && colspan === 1) continue;

          matrix[i][j].rowSpan = rowspan;
          matrix[i][j].colSpan = colspan;

          for (let r = 0; r < rowspan; r++) {
            for (let c = 0; c < colspan; c++) {
              if (r === 0 && c === 0) continue; // 跳过自己

              const targetRow = i + r;
              const targetCol = j + c;

              if (matrix[targetRow] && matrix[targetRow][targetCol]) {
                matrix[targetRow][targetCol].show = false;
              }
            }
          }
        }
      }

      return matrix;
    });

    const renderVirtualSpacer = (height: number, position: "top" | "bottom") =>
      height > 0 ? (
        <tr
          class={["k-table-virtual-spacer", `k-table-virtual-spacer-${position}`]}
          aria-hidden="true"
        >
          <td
            class="k-table-cell-last-column"
            colspan={flattedColumns.value.length + (props.checkable ? 1 : 0)}
            style={{ height: `${height}px` }}
          />
        </tr>
      ) : null;

    const renderTbody = () => (
      <tbody>
        {virtualEnabled.value && renderVirtualSpacer(virtualRange.value.offset, "top")}
        {renderedTreeRows.value.map(({ record, depth, hasChildren, rowIndex }) => {
          const rowId = getRowKey(record);
          return (
            <tr
              key={rowId}
              class={virtualEnabled.value && rowIndex % 2 === 1 ? "k-table-row-even" : undefined}
              style={virtualEnabled.value ? { height: `${props.itemHeight}px` } : undefined}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest(".k-checkbox, .k-table-tree-toggle")) return;
                if (props.expandRowByClick && hasChildren) toggleExpand(record);
                emit("rowClick", record, rowIndex);
              }}
            >
              {props.checkable && (
                <td
                  class={[
                    "k-table-cell-fix-left",
                    pingLeft.value && "k-table-cell-fix-left-last",
                    !flattedColumns.value.length && "k-table-cell-last-column",
                  ]}
                  style={{ width: `${SELECTION_COLUMN_WIDTH}px`, left: 0 }}
                >
                  <Checkbox
                    checked={innerSelectedKeys.value.has(rowId)}
                    disabled={isDisabled(rowId)}
                    onChange={(e) => toggleOne(e, record, rowId)}
                    // 行首选择框同样只有控件本身能被读，名字得由 locale 提供
                    aria-label={tableLocale.value?.selectRow || "Select row"}
                  />
                </td>
              )}
              {flattedColumns.value.map((col, colIndex) => {
                const cellState = mergeMatrix.value[rowIndex]?.[colIndex] ?? {
                  rowSpan: 1,
                  colSpan: 1,
                  show: true,
                };

                if (!cellState || !cellState.show) return null;

                const attrs: Record<string, number> = {};
                if (cellState.rowSpan > 1) attrs.rowspan = cellState.rowSpan;
                if (cellState.colSpan > 1) attrs.colspan = cellState.colSpan;
                const value = getRecordValue(record, col.key);
                const slotContent = slots[col.key]?.({
                  record,
                  col,
                  colIndex,
                  rowIndex,
                  value,
                });
                const cellContent =
                  slotContent ??
                  col.render?.(value, record, rowIndex, col) ??
                  (value as VNodeChild);
                const ellipsis = cellEllipsis.value.get(col.key);
                return (
                  <td
                    key={col.key}
                    {...attrs}
                    // 分栏后这一格和表头不在同一张 table 里，列名只能靠 id 关联回去（见 `headCellIds`）
                    aria-labelledby={splitHeader.value ? headCellIds.value.get(col.key) : undefined}
                    class={getFixedClass(col, colIndex, cellState.colSpan)}
                    style={fixedInfo.value.body[col.key]}
                  >
                    {treeEnabled.value && colIndex === 0 ? (
                      <div
                        class="k-table-tree-cell"
                        style={{ paddingLeft: `${depth * props.indentSize}px` }}
                      >
                        {hasChildren ? (
                          <button
                            type="button"
                            class="k-table-tree-toggle"
                            aria-label={
                              currentExpandedKeys.value.has(rowId)
                                ? tableLocale.value?.collapseRow || "Collapse row"
                                : tableLocale.value?.expandRow || "Expand row"
                            }
                            aria-expanded={currentExpandedKeys.value.has(rowId)}
                            onClick={() => toggleExpand(record)}
                          >
                            <Icon
                              type={
                                currentExpandedKeys.value.has(rowId) ? ChevronDown : ChevronRight
                              }
                            />
                          </button>
                        ) : (
                          <span class="k-table-tree-indent" />
                        )}
                        {ellipsis ? (
                          <EllipsisCell
                            rows={ellipsis.rows}
                            tooltip={ellipsis.tooltip}
                            extraClass="k-table-tree-content"
                          >
                            {cellContent}
                          </EllipsisCell>
                        ) : (
                          <span class="k-table-tree-content">{cellContent}</span>
                        )}
                      </div>
                    ) : ellipsis ? (
                      <EllipsisCell rows={ellipsis.rows} tooltip={ellipsis.tooltip}>
                        {cellContent}
                      </EllipsisCell>
                    ) : (
                      cellContent
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
        {virtualEnabled.value &&
          renderVirtualSpacer(
            virtualRange.value.total -
              virtualRange.value.offset -
              renderedTreeRows.value.length * props.itemHeight,
            "bottom",
          )}
      </tbody>
    );

    // 宽度基准两仓一致：`scroll.x` 给数字时按 px 落地，`table-layout: fixed` 让 colgroup 说话算数。
    const tableStyle = computed<CSSProperties>(() => {
      const scrollX = typeof props.scroll.x === "number" ? `${props.scroll.x}px` : props.scroll.x;
      return {
        width: "100%",
        // `scroll.x` 是调用方显式给的内容最小宽度，优先；没写时用上面那份下限，
        // 于是窄容器是"横向滚动"而不是"把列压瘪到表头竖排换行"。
        minWidth: scrollX || (contentMinWidth.value ? `${contentMinWidth.value}px` : "100%"),
        tableLayout: "fixed",
      };
    });

    const renderTable = () => (
      <table style={tableStyle.value}>
        {renderColGroup()}
        {!splitHeader.value && renderThead()}
        {renderTbody()}
      </table>
    );

    /**
     * 分栏表头：表头单独一张 table，和表体共用同一份 `colgroup`，列宽与固定列偏移天然对齐；
     * 横向滚动靠 `handleBodyScroll` 同步 `scrollLeft`，纵向靠右边那条槽位让开表体的滚动条
     * （见 `styles/index.less` 的 `k-table-split-header`）。
     *
     * 槽位由外层 `padding-inline-end` 让出，裁剪和同步放在内层 `.k-table-thead-inner`：
     * `overflow: hidden` 只裁到 padding box，裁不出外层那条槽位，表头内容会一路画进去（见 LESS 注释）。
     *
     * 滚轮要转交回表体：这里写在元素上就够，Vue 给元素 `addEventListener` 默认不是 passive，
     * `preventDefault()` 有效；react 那边根节点上的 `onWheel` 是 passive 委托，只能改用原生监听器。
     */
    const renderHeaderTable = () => (
      <div class="k-table-thead" ref={headerWrapperRef} onWheel={forwardWheelToBody}>
        <div class="k-table-thead-inner" ref={headerScrollRef}>
          <table style={tableStyle.value}>
            {renderColGroup()}
            {renderThead()}
          </table>
        </div>
      </div>
    );

    return () => {
      const tableCls = [
        "k-table",
        {
          "k-table-striped": props.striped,
          "k-table-sm": appearance.size.value == "small",
          "k-table-lg": appearance.size.value == "large",
          [`k-table-${appearance.surfaceShape.value}`]: appearance.surfaceShape.value,
          "k-table-bordered": props.bordered,
          "k-table-has-footer": !!slots.footer,
          "k-table-split-header": splitHeader.value,
          "k-table-ping-left": pingLeft.value,
          "k-table-ping-right": pingRight.value,
          "k-table-virtual": virtualEnabled.value,
        },
      ];
      const isEmpty = !visibleTreeRows.value.length || !visibleColumns.value.length;

      // Body 容器
      const bodyContent = (
        <div
          class="k-table-body k-scroll"
          ref={bodyWrapperRef}
          style={{
            overflowY: props.scroll.y ? "scroll" : "auto",
            overflowX: props.data?.length ? "auto" : "hidden",
            maxHeight: props.scroll.y
              ? typeof props.scroll.y === "number"
                ? `${props.scroll.y}px`
                : props.scroll.y
              : undefined,
          }}
          // 必须用 currentTarget：单元格里可滚动的内容（代码块、下拉面板）也会把 scroll 事件冒泡上来，
          // 用 e.target 会把那些元素的滚动量当成表格自身的，从而挪错虚拟窗口和 ping 状态。
          onScroll={(e) => handleBodyScroll(e.currentTarget as HTMLDivElement)}
        >
          {renderTable()}
          {isEmpty && props.loading && (
            <div class="k-table-loading-placeholder" aria-hidden="true" />
          )}
          {isEmpty && !props.loading && (
            <Empty description={props.emptyText || tableLocale.value?.emptyText} />
          )}
        </div>
      );

      return (
        <div class={tableCls} ref={rootRef}>
          {slots.header && <div class="k-table-header">{slots.header()}</div>}

          {splitHeader.value && renderHeaderTable()}

          {bodyContent}

          {slots.footer && <div class="k-table-footer">{slots.footer()}</div>}
          {props.loading && <Spin />}
        </div>
      );
    };
  },
});

export default Table;

export type { Column, SortState, TableKey, TableRecord, TableTreeRow } from "./types";
export { default as TableColumnSetting } from "./column-setting";
export type { TableColumnSettingProps } from "./column-setting";
