import { Triangle } from "kui-icons";
import type { CSSProperties, ExtractPropTypes, PropType, VNodeChild } from "vue";
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { Checkbox, type ChangeEvent } from "../checkbox";
import type { BooleanType, SizeType } from "../const/types";
import Empty from "../empty";
import Icon from "../icon";
import Spin from "../spin";
import type { Column, SortState, TableKey, TableRecord } from "./types";

const tableProps = {
  data: { type: Array as PropType<TableRecord[]>, default: () => [] },
  columns: { type: Array as PropType<Column[]>, default: () => [] },
  selectedKeys: { type: Array as PropType<TableKey[]>, default: () => [] },
  disabledKeys: { type: Array as PropType<TableKey[]>, default: () => [] },
  rowKey: { type: String, default: "key" },
  scroll: {
    type: Object as PropType<{ x?: number | string; y?: number | string }>,
    default: () => ({}),
  },
  size: {
    type: String as PropType<SizeType>,
  },
  striped: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: false },
  checkable: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  emptyText: String,
  onSort: { type: Function as PropType<(state: SortState) => void> },
  onRowClick: { type: Function as PropType<(record: TableRecord, index: number) => void> },
  onSelect: {
    type: Function as PropType<
      (record: TableRecord, selected: boolean, selectedKeys: TableKey[]) => void
    >,
  },
  onSelectAll: {
    type: Function as PropType<(selected: boolean, selectedKeys: TableKey[]) => void>,
  },
};

interface Matrix {
  rowSpan: number;
  colSpan: number;
  show: boolean;
}

export type TableProps = ExtractPropTypes<typeof tableProps>;

const Table = defineComponent({
  name: "Table",
  props: tableProps,
  setup(props, { emit, slots }) {
    const headerWrapperRef = ref<HTMLElement>();
    const bodyWrapperRef = ref<HTMLElement>();
    const scrollbarWidth = ref(0);
    const innerSelectedKeys = ref(new Set(props.selectedKeys));
    const isSplit = computed(() => !!props.scroll.y);
    const sortState = reactive<SortState>({ key: "", order: null });
    const pingLeft = ref(false);
    const pingRight = ref(false);

    watch(
      () => props.selectedKeys,
      (val) => {
        innerSelectedKeys.value = new Set(val);
      }
    );
    const getFlattedColumns = (cols: Column[]): Column[] => {
      const result: Column[] = [];
      cols.forEach((col) => {
        if (col.children && col.children.length > 0) {
          result.push(...getFlattedColumns(col.children));
        } else {
          result.push(col);
        }
      });
      return result;
    };
    const flattedColumns = computed(() => getFlattedColumns(props.columns));

    const headerRows = computed(() => {
      const rows: Column[][] = [];
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
      getDepth(props.columns);

      const traverse = (cols: Column[], depth: number) => {
        if (!rows[depth]) rows[depth] = [];
        cols.forEach((col) => {
          const cell: Column = { ...col };
          // 计算 colSpan (叶子节点总数)
          const getLeafCount = (c: Column): number => {
            if (c.children && c.children.length) {
              return c.children.reduce((acc, item) => acc + getLeafCount(item), 0);
            }
            return 1;
          };
          cell.colSpan = getLeafCount(col);

          // 计算 rowSpan
          if (col.children && col.children.length > 0) {
            cell.rowSpan = 1;
            traverse(col.children, depth + 1);
          } else {
            cell.rowSpan = maxDepth - depth;
          }
          rows[depth].push(cell);
        });
      };
      traverse(props.columns, 0);
      return { rows, maxDepth };
    });

    const isDisabled = (key: TableKey) => props.disabledKeys.includes(key);
    const getRowKey = (record: TableRecord): TableKey => {
      const key = record[props.rowKey];
      return typeof key === "string" || typeof key === "number" ? key : String(key ?? "");
    };

    const selectionState = computed(() => {
      const enableData = props.data.filter((item) => !isDisabled(getRowKey(item)));
      if (enableData.length === 0) return { all: false, indeterminate: false, disabled: true };

      const checkedCount = enableData.filter((item) =>
        innerSelectedKeys.value.has(getRowKey(item))
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
      let leftOffset = props.checkable ? 50 : 0;

      // 使用 flattedColumns
      flattedColumns.value.forEach((col) => {
        if (col.fixed === "left") {
          const style: CSSProperties = {
            position: "sticky",
            transform: "translateZ(0)",
            left: `${leftOffset}px`,
          };
          headerStyles[col.key] = style;
          bodyStyles[col.key] = style;
          leftOffset += col.width || 150;
        }
      });

      let rightOffset = 0; // + scrollbarWidth.value;
      for (let i = flattedColumns.value.length - 1; i >= 0; i--) {
        const col = flattedColumns.value[i];
        if (col.fixed === "right") {
          bodyStyles[col.key] = {
            position: "sticky",
            right: `${rightOffset}px`,
            transform: "translateZ(0)",
          };

          const headerRight = isSplit.value ? rightOffset + scrollbarWidth.value : rightOffset;

          headerStyles[col.key] = {
            position: "sticky",
            right: `${headerRight}px`,
            transform: "translateZ(0)",
          };

          rightOffset += col.width || 150;
        }
      }
      return { header: headerStyles, body: bodyStyles };
    });

    const getFixedClass = (col: Column, index: number) => {
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
      return cls;
    };

    let scrollRafId = 0;
    let resizeObserver: ResizeObserver | null = null;
    const handleBodyScroll = (target: HTMLElement) => {
      // const target = e?.target;
      if (!target) return;
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      scrollRafId = requestAnimationFrame(() => {
        const { scrollLeft, scrollWidth, clientWidth } = target;
        if (isSplit.value && headerWrapperRef.value) {
          headerWrapperRef.value.scrollLeft = scrollLeft;
        }

        // 优化边界检测，避免亚像素抖动
        const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
        const nextPingLeft = scrollLeft > 0.5;
        const nextPingRight = scrollLeft < maxScrollLeft - 0.5;

        if (pingLeft.value !== nextPingLeft) pingLeft.value = nextPingLeft;
        if (pingRight.value !== nextPingRight) pingRight.value = nextPingRight;
      });
    };

    const measureScrollbar = () => {
      if (bodyWrapperRef.value) {
        const width = Math.max(
          0,
          bodyWrapperRef.value.offsetWidth -
            bodyWrapperRef.value.clientWidth -
            (props.bordered ? 1 : 0)
        );
        if (scrollbarWidth.value !== width) scrollbarWidth.value = width;
      }
    };

    onMounted(() => {
      if (bodyWrapperRef.value) {
        measureScrollbar();
        handleBodyScroll(bodyWrapperRef.value);
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(() => {
            measureScrollbar();
            if (bodyWrapperRef.value) handleBodyScroll(bodyWrapperRef.value);
          });
          resizeObserver.observe(bodyWrapperRef.value);
        }
      }
    });

    watch(isSplit, async () => {
      await nextTick();
      measureScrollbar();
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

    const processedData = computed(() => {
      const list = [...props.data];
      if (sortState.key && sortState.order) {
        const col = flattedColumns.value.find((c) => c.key === sortState.key);
        if (col && col.sorter === true) {
          list.sort((a, b) => {
            const valA = a[sortState.key];
            const valB = b[sortState.key];
            if (valA === valB) return 0;
            const comparison = String(valA ?? "").localeCompare(String(valB ?? ""), undefined, {
              numeric: true,
            });
            return sortState.order === "asc" ? comparison : -comparison;
          });
        }
      }
      return list;
    });

    const toggleAll = ({ checked }: ChangeEvent) => {
      const newSet = new Set(innerSelectedKeys.value);
      props.data.forEach((item) => {
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

    const renderColGroup = (isHeader = false) => (
      <colgroup>
        {props.checkable && <col style={{ width: "50px", left: 0 }} />}
        {flattedColumns.value.map((col) => (
          <col
            key={col.key}
            style={{
              width: col.width ? `${col.width}px` : "auto",
              minWidth: col.width ? `${col.width}px` : "150px",
            }}
          />
        ))}
        {isHeader && isSplit.value && (
          <col
            style={{
              width: `${scrollbarWidth.value}px`,
              minWidth: `${scrollbarWidth.value}px`,
            }}
          />
        )}
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
                  class={["k-table-cell-fix-left", pingLeft.value && "k-table-cell-fix-left-last"]}
                  style={{ left: 0, zIndex: 3 }} // 提高层级
                >
                  <Checkbox
                    checked={selectionState.value.all}
                    indeterminate={selectionState.value.indeterminate}
                    onChange={toggleAll}
                    disabled={selectionState.value.disabled}
                  />
                </th>
              )}

              {row.map((col: Column, idx: number) => {
                const headerContent = slots[`header-${col.key}`]?.({
                  value: col.title,
                  col,
                  index: idx,
                });
                const leafIndex = flattedColumns.value.findIndex((item) => item.key === col.key);
                return (
                  <th
                    key={col.key || idx}
                    colspan={col.colSpan as number}
                    rowspan={col.rowSpan as number}
                    class={getFixedClass(col, leafIndex)}
                    style={fixedInfo.value.header[col.key]}
                    onClick={() => handleSort(col)}
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
              {isSplit.value && rowIndex === 0 && (
                <th
                  rowspan={maxDepth}
                  class="k-table-scrollbar-patch"
                  style={{
                    // padding: 0,
                    // border: 0,
                    width: `${scrollbarWidth.value}px`,
                  }}
                />
              )}
            </tr>
          ))}
        </thead>
      );
    };

    const mergeMatrix = computed(() => {
      const data = processedData.value;
      const cols = flattedColumns.value;

      // 结构: matrix[rowIndex][colIndex] = { rowSpan: 1, colSpan: 1, show: true }
      const matrix: Matrix[][] = [];

      if (!data.length) return matrix;

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

    const renderTbody = () => (
      <tbody>
        {processedData.value.map((record, rowIndex) => {
          const rowId = getRowKey(record);
          return (
            <tr
              key={rowId}
              onClick={(e) => {
                e.stopPropagation();
                emit("rowClick", record, rowIndex);
              }}
            >
              {props.checkable && (
                <td
                  class={["k-table-cell-fix-left", pingLeft.value && "k-table-cell-fix-left-last"]}
                  style={{ width: "50px", left: 0 }}
                >
                  <Checkbox
                    checked={innerSelectedKeys.value.has(rowId)}
                    disabled={isDisabled(rowId)}
                    onChange={(e) => toggleOne(e, record, rowId)}
                  />
                </td>
              )}
              {flattedColumns.value.map((col, colIndex) => {
                const cellState = mergeMatrix.value[rowIndex]?.[colIndex];

                if (!cellState || !cellState.show) return null;

                const attrs: Record<string, number> = {};
                if (cellState.rowSpan > 1) attrs.rowspan = cellState.rowSpan;
                if (cellState.colSpan > 1) attrs.colspan = cellState.colSpan;
                const slotContent = slots[col.key]?.({
                  record,
                  col,
                  colIndex,
                  rowIndex,
                  value: record[col.key],
                });
                const cellContent =
                  slotContent ??
                  col.render?.(h, record, colIndex, rowIndex, col) ??
                  (record[col.key] as VNodeChild);
                return (
                  <td
                    key={col.key}
                    {...attrs}
                    class={getFixedClass(col, colIndex)}
                    style={fixedInfo.value.body[col.key]}
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );

    const renderTable = (isHeader: boolean, isBody: boolean) => {
      const tableStyle: CSSProperties = {
        width:
          props.scroll.x && typeof props.scroll.x === "number"
            ? `${props.scroll.x}px`
            : props.scroll.x || undefined,
        minWidth: !props.scroll.x ? "100%" : undefined,
        tableLayout: "fixed",
      };
      return (
        <table style={tableStyle}>
          {renderColGroup(isHeader)}
          {isHeader && renderThead()}
          {isBody && renderTbody()}
        </table>
      );
    };

    return () => {
      const tableCls = [
        "k-table",
        {
          "k-table-striped": props.striped,
          "k-table-sm": props.size == "small",
          "k-table-lg": props.size == "large",
          "k-table-bordered": props.bordered,
          "k-table-ping-left": pingLeft.value,
          "k-table-ping-right": pingRight.value,
        },
      ];
      const isEmpty = !props.data || !props.data.length || !props.columns || !props.columns.length;

      // 拆分模式下的 Header
      const splitHeader = isSplit.value && (
        <div
          class="k-table-thead"
          ref={headerWrapperRef}
          style={{
            overflow: "hidden",
            // paddingRight: `${scrollbarWidth.value}px`,
          }}
        >
          {renderTable(true, false)}
        </div>
      );

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
          onScroll={(e) => handleBodyScroll(e.target as HTMLDivElement)}
        >
          {renderTable(!isSplit.value, true)}
          {isEmpty && <Empty description={props.emptyText} />}
        </div>
      );

      return (
        <div class={tableCls}>
          {slots.header && <div class="k-table-header">{slots.header()}</div>}

          {splitHeader}
          {bodyContent}

          {slots.footer && <div class="k-table-footer">{slots.footer()}</div>}
          {props.loading && <Spin />}
        </div>
      );
    };
  },
});

export default Table;

export type { Column, SortState, TableKey, TableRecord } from "./types";
