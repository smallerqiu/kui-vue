import {
  defineComponent,
  ref,
  computed,
  reactive,
  onMounted,
  onUpdated,
  watch,
  h,
} from "vue";
import { Checkbox } from "../checkbox";
import { CaretUp, CaretDown } from "kui-icons";
import Empty from "../empty";
import Spin from "../spin";
import { withInstall } from "../utils/vue";
import Icon from "../icon";
const Table = defineComponent({
  name: "Table",
  props: {
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    selectedKeys: { type: Array, default: () => [] },
    disabledKeys: { type: Array, default: () => [] },
    rowKey: { type: String, default: "key" },
    scroll: { type: Object, default: () => ({}) },
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    bordered: Boolean,
    checkable: Boolean,
    loading: Boolean,
    emptyText: String,
  },
  emits: ["update:selectedKeys", "rowClick", "sort"],
  setup(props, { emit, slots }) {
    const headerWrapperRef = ref(null);
    const bodyWrapperRef = ref(null);
    const scrollbarWidth = ref(0);
    const innerSelectedKeys = ref(new Set(props.selectedKeys));
    const isSplit = computed(() => !!props.scroll.y);
    const sortState = reactive({ key: null, order: null });
    const pingLeft = ref(false);
    const pingRight = ref(false);

    watch(
      () => props.selectedKeys,
      (val) => {
        innerSelectedKeys.value = new Set(val);
      }
    );
    const getFlattedColumns = (cols) => {
      const result = [];
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
      const rows = [];
      let maxDepth = 0;

      const getDepth = (cols, depth = 0) => {
        cols.forEach((col) => {
          if (col.children && col.children.length > 0) {
            getDepth(col.children, depth + 1);
          } else {
            maxDepth = Math.max(maxDepth, depth + 1);
          }
        });
      };
      getDepth(props.columns);

      const traverse = (cols, depth) => {
        if (!rows[depth]) rows[depth] = [];
        cols.forEach((col) => {
          const cell = { ...col };
          // 计算 colSpan (叶子节点总数)
          const getLeafCount = (c) => {
            if (c.children && c.children.length) {
              return c.children.reduce(
                (acc, item) => acc + getLeafCount(item),
                0
              );
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

    const isDisabled = (key) =>
      props.disabledKeys && props.disabledKeys.includes(key);

    const selectionState = computed(() => {
      const enableData = props.data.filter(
        (item) => !isDisabled(item[props.rowKey])
      );
      if (enableData.length === 0) return { all: false, indeterminate: false };

      const checkedCount = enableData.filter((item) =>
        innerSelectedKeys.value.has(item[props.rowKey])
      ).length;

      return {
        all: checkedCount > 0 && checkedCount === enableData.length,
        indeterminate: checkedCount > 0 && checkedCount < enableData.length,
      };
    });

    const fixedInfo = computed(() => {
      const headerStyles = {};
      const bodyStyles = {};
      let leftOffset = props.checkable ? 50 : 0;

      // 使用 flattedColumns
      flattedColumns.value.forEach((col) => {
        if (col.fixed === "left") {
          const style = {
            position: "sticky",
            transform: "translateZ(0)",
            left: `${leftOffset}px`,
          };
          headerStyles[col.key] = style;
          bodyStyles[col.key] = style;
          leftOffset += col.width || 100;
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

          const headerRight = isSplit.value
            ? rightOffset + scrollbarWidth.value
            : rightOffset;

          headerStyles[col.key] = {
            position: "sticky",
            right: `${headerRight}px`,
            transform: "translateZ(0)",
          };

          rightOffset += col.width || 100;
        }
      }
      return { header: headerStyles, body: bodyStyles };
    });

    const getFixedClass = (col, index, isHeader = false) => {
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
    const handleBodyScroll = (e) => {
      const target = e?.target;
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
        const width =
          bodyWrapperRef.value.offsetWidth -
          bodyWrapperRef.value.clientWidth -
          (props.bordered ? 1 : 0);
        if (scrollbarWidth.value !== width) scrollbarWidth.value = width;
      }
    };

    onMounted(() => {
      if (isSplit.value) {
        measureScrollbar();
        if (bodyWrapperRef.value)
          handleBodyScroll({ target: bodyWrapperRef.value });
      } else if (bodyWrapperRef.value) {
        handleBodyScroll({ target: bodyWrapperRef.value });
      }
    });

    onUpdated(() => {
      if (isSplit.value) measureScrollbar();
    });

    const handleSort = (col) => {
      if (!col.sorter) return;
      if (sortState.key !== col.key) {
        sortState.key = col.key;
        sortState.order = "asc";
      } else {
        sortState.order =
          sortState.order === "asc"
            ? "desc"
            : sortState.order === "desc"
              ? null
              : "asc";
      }
      if (typeof col.sorter === "function") col.sorter(sortState);
      emit("sort", sortState);
    };

    const processedData = computed(() => {
      let list = [...props.data];
      if (sortState.key && sortState.order) {
        const col = flattedColumns.value.find((c) => c.key === sortState.key);
        if (col && col.sorter === true) {
          list.sort((a, b) => {
            const valA = a[sortState.key];
            const valB = b[sortState.key];
            if (valA === valB) return 0;
            return sortState.order === "asc"
              ? valA > valB
                ? 1
                : -1
              : valA > valB
                ? -1
                : 1;
          });
        }
      }
      return list;
    });

    const toggleAll = ({ checked }) => {
      const newSet = new Set(innerSelectedKeys.value);
      props.data.forEach((item) => {
        const key = item[props.rowKey];
        if (!isDisabled(key)) {
          checked ? newSet.add(key) : newSet.delete(key);
        }
      });
      innerSelectedKeys.value = newSet;
      emit("update:selectedKeys", Array.from(newSet));
    };

    const toggleOne = (key) => {
      if (isDisabled(key)) return;
      const newSet = new Set(innerSelectedKeys.value);
      newSet.has(key) ? newSet.delete(key) : newSet.add(key);
      innerSelectedKeys.value = newSet;
      emit("update:selectedKeys", Array.from(newSet));
    };

    const renderColGroup = (isHeader = false) => (
      <colgroup>
        {props.checkable && <col style={{ width: "50px" }} />}
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
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* Checkbox 只在第一行渲染，并根据最大深度设置 rowSpan */}
              {props.checkable && rowIndex === 0 && (
                <th
                  rowSpan={maxDepth}
                  class={[
                    "k-table-cell-fix-left",
                    pingLeft.value && "k-table-cell-fix-left-last",
                  ]}
                  style={{ left: 0, zIndex: 3 }} // 提高层级
                >
                  <Checkbox
                    checked={selectionState.value.all}
                    indeterminate={selectionState.value.indeterminate}
                    onChange={toggleAll}
                    disabled={
                      props.data.length > 0 &&
                      props.data.every((item) => isDisabled(item[props.rowKey]))
                    }
                  />
                </th>
              )}

              {row.map((col, idx) => (
                <th
                  key={col.key || idx}
                  colSpan={col.colSpan}
                  rowSpan={col.rowSpan}
                  class={getFixedClass(col, idx, true)}
                  style={fixedInfo.value.header[col.key]}
                  onClick={() => handleSort(col)}
                >
                  <div class="k-table-header-col">
                    {slots[`header-${col.key}`]?.({
                      value: col.title,
                      col,
                      index: idx,
                    }) || col.title}
                    {col.sorter && (
                      <span class="k-table-sorter">
                        <Icon
                          type={CaretUp}
                          class={[
                            "k-table-sorter-up",
                            sortState.key === col.key &&
                              sortState.order === "asc" &&
                              "k-table-sorter-active",
                          ]}
                        />
                        <Icon
                          type={CaretDown}
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
              ))}
              {isSplit.value && rowIndex === 0 && (
                <th
                  rowSpan={maxDepth}
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
      const matrix = [];

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
          const col = cols[j];

          let rowspan = 1;
          let colspan = 1;

          if (col.rowSpan) {
            rowspan =
              typeof col.rowSpan === "function"
                ? col.rowSpan(record, i)
                : col.rowSpan;
          }
          if (col.colSpan) {
            colspan =
              typeof col.colSpan === "function"
                ? col.colSpan(record, i)
                : col.colSpan;
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
          const rowId = record[props.rowKey];
          return (
            <tr
              key={rowId}
              onClick={(e) => {
                e.stopPropagation();
                emit("rowClick", record);
              }}
            >
              {props.checkable && (
                <td
                  class={[
                    "k-table-cell-fix-left",
                    pingLeft.value && "k-table-cell-fix-left-last",
                  ]}
                  style={{ width: "50px" }}
                >
                  <Checkbox
                    checked={innerSelectedKeys.value.has(rowId)}
                    disabled={isDisabled(rowId)}
                    onChange={() => toggleOne(rowId)}
                  />
                </td>
              )}
              {flattedColumns.value.map((col, colIndex) => {
                const cellState = mergeMatrix.value[rowIndex]?.[colIndex];

                if (!cellState || !cellState.show) return null;

                const attrs = {};
                if (cellState.rowSpan > 1) attrs.rowspan = cellState.rowSpan;
                if (cellState.colSpan > 1) attrs.colspan = cellState.colSpan;
                return (
                  <td
                    key={col.key}
                    attrs={attrs}
                    class={getFixedClass(col, colIndex)}
                    style={fixedInfo.value.body[col.key]}
                  >
                    {slots[col.key]?.({
                      record,
                      col,
                      value: record[col.key],
                    }) ||
                      col.render?.(h, record, colIndex) ||
                      record[col.key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );

    const renderTable = (isHeader, isBody) => {
      const tableStyle = {
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
          "k-table-sm": props.size == "small",
          "k-table-lg": props.size == "large",
          "k-table-bordered": props.bordered,
          "k-table-ping-left": pingLeft.value,
          "k-table-ping-right": pingRight.value,
        },
      ];
      const isEmpty =
        !props.data ||
        !props.data.length ||
        !props.columns ||
        !props.columns.length;

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
          onScroll={handleBodyScroll}
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

export default withInstall(Table);
