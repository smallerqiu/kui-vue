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

export default defineComponent({
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
      const styles = {};
      let leftOffset = props.checkable ? 50 : 0;

      props.columns.forEach((col) => {
        if (col.fixed === "left") {
          styles[col.key] = { position: "sticky", left: `${leftOffset}px` };
          leftOffset += col.width || 100;
        }
      });

      let rightOffset = 0;
      for (let i = props.columns.length - 1; i >= 0; i--) {
        const col = props.columns[i];
        if (col.fixed === "right") {
          styles[col.key] = { position: "sticky", right: `${rightOffset}px` };
          rightOffset += col.width || 100;
        }
      }
      return styles;
    });

    const getFixedClass = (col, index) => {
      const cls = [];
      if (col.fixed === "left") {
        cls.push("k-table-cell-fix-left");
        if (props.columns[index + 1]?.fixed !== "left")
          cls.push("k-table-cell-fix-left-last");
      }
      if (col.fixed === "right") {
        cls.push("k-table-cell-fix-right");
        if (props.columns[index - 1]?.fixed !== "right")
          cls.push("k-table-cell-fix-right-first");
      }
      if (col.sorter) cls.push("k-table-cell-sorter");
      return cls;
    };

    const handleBodyScroll = (e) => {
      const { scrollLeft, scrollWidth, clientWidth } = e.target;
      if (isSplit.value && headerWrapperRef.value) {
        headerWrapperRef.value.scrollLeft = scrollLeft;
      }
      pingLeft.value = scrollLeft > 0;
      pingRight.value = scrollLeft < scrollWidth - clientWidth - 1;
    };

    const measureScrollbar = () => {
      if (bodyWrapperRef.value) {
        const width =
          bodyWrapperRef.value.offsetWidth - bodyWrapperRef.value.clientWidth;
        if (scrollbarWidth.value !== width) scrollbarWidth.value = width;
      }
    };

    onMounted(() => {
      if (isSplit.value) {
        measureScrollbar();
        // 初始化时触发一次滚动检测，确保阴影状态正确
        if (bodyWrapperRef.value)
          handleBodyScroll({ target: bodyWrapperRef.value });
      } else if (bodyWrapperRef.value) {
        // 非 split 模式下也要初始化阴影
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
        const col = props.columns.find((c) => c.key === sortState.key);
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

    const toggleAll = (e) => {
      const newSet = new Set(innerSelectedKeys.value);
      const checked = e.target.checked;
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

    // --- Render Functions ---

    const renderColGroup = () => (
      <colgroup>
        {props.checkable && <col style={{ width: "50px" }} />}
        {props.columns.map((col) => (
          <col
            key={col.key}
            style={{ width: col.width ? `${col.width}px` : "100px" }}
          />
        ))}
      </colgroup>
    );

    const renderThead = () => (
      <thead>
        <tr>
          {props.checkable && (
            <th
              class={[
                "k-table-cell-fix-left",
                pingLeft.value && "k-table-cell-fix-left-last",
              ]}
              style={{ left: 0 }}
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
          {props.columns.map((col, idx) => (
            <th
              key={col.key}
              class={getFixedClass(col, idx)}
              style={fixedInfo.value[col.key]}
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
                        "k-sorter-up",
                        sortState.key === col.key &&
                          sortState.order === "asc" &&
                          "active",
                      ]}
                    />
                    <Icon
                      type={CaretDown}
                      class={[
                        "k-sorter-down",
                        sortState.key === col.key &&
                          sortState.order === "desc" &&
                          "active",
                      ]}
                    />
                  </span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );

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
                  style={{ left: 0 }}
                >
                  <Checkbox
                    checked={innerSelectedKeys.value.has(rowId)}
                    disabled={isDisabled(rowId)}
                    onChange={() => toggleOne(rowId)}
                  />
                </td>
              )}
              {props.columns.map((col, colIndex) => {
                let spanProps = { rowSpan: 1, colSpan: 1 };
                if (col.rowSpan && rowIndex % col.rowSpan === 0)
                  spanProps.rowSpan = col.rowSpan;
                else if (col.rowSpan) return null;
                if (col.colSpan) spanProps.colSpan = col.colSpan;
                if (spanProps.rowSpan === 1) spanProps.rowSpan = null;
                if (spanProps.colSpan === 1) spanProps.colSpan = null;

                for (let prevI = 0; prevI < colIndex; prevI++) {
                  const prevCol = props.columns[prevI];
                  if (prevCol.colSpan && prevI + prevCol.colSpan > colIndex)
                    return null;
                }

                return (
                  <td
                    key={col.key}
                    {...{ attrs: spanProps }}
                    class={getFixedClass(col, colIndex)}
                    style={fixedInfo.value[col.key]}
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

    // 通用的 Table 渲染器，接收 showHeader 和 showBody 参数
    const renderTable = (showHeader, showBody) => {
      // 修复核心：如果 scroll.x 没传，使用 minWidth: 100%，允许表格自动撑开
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
          {renderColGroup()}
          {showHeader && renderThead()}
          {showBody && renderTbody()}
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
            paddingRight: `${scrollbarWidth.value}px`,
          }}
        >
          {renderTable(true, false)}
        </div>
      );

      // Body 容器
      const bodyContent = (
        <div
          class="k-table-body"
          ref={bodyWrapperRef}
          // 修复核心：始终允许横向滚动 (auto)，这样即使没传 scroll.x，内容溢出时也能滚
          style={{
            overflowY: props.scroll.y ? "scroll" : "auto",
            overflowX: "auto", 
            maxHeight: props.scroll.y
              ? typeof props.scroll.y === "number"
                ? `${props.scroll.y}px`
                : props.scroll.y
              : undefined,
          }}
          onScroll={handleBodyScroll}
        >
          {isEmpty ? (
            <Empty description={props.emptyText} />
          ) : (
            // 如果是拆分模式，只渲染 body；否则渲染 header + body
            renderTable(!isSplit.value, true)
          )}
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