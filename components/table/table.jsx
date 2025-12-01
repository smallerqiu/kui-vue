import {
  defineComponent,
  ref,
  computed,
  reactive,
  onMounted,
  onUpdated,
  watch,
  nextTick,
} from "vue";
import { Checkbox } from "../checkbox";
import { CaretUp, CaretDown } from "kui-icons";
import Empty from "../empty";
import Spin from "../spin";
// import './Table.css'
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
  setup(props, { emit }) {
    const headerWrapperRef = ref(null);
    const bodyWrapperRef = ref(null);
    const scrollbarWidth = ref(0);

    const innerSelectedKeys = ref(new Set(props.selectedKeys));

    watch(
      () => props.selectedKeys,
      (val) => {
        innerSelectedKeys.value = new Set(val);
      }
    );
    const isDisabled = (key) => {
      return props.disabledKeys && props.disabledKeys.includes(key);
    };

    const selectionState = computed(() => {
      const totalData = props.data;
      const enableData = totalData.filter(
        (item) => !isDisabled(item[props.rowKey])
      );

      if (enableData.length === 0) {
        return { all: false, indeterminate: false };
      }

      // 在可操作行中，有多少是被选中的
      const checkedCount = enableData.filter((item) =>
        innerSelectedKeys.value.has(item[props.rowKey])
      ).length;

      return {
        all: checkedCount > 0 && checkedCount === enableData.length,
        indeterminate: checkedCount > 0 && checkedCount < enableData.length,
      };
    });

    const sortState = reactive({ key: null, order: null });

    const pingLeft = ref(false);
    const pingRight = ref(false);

    const fixedInfo = computed(() => {
      const styles = {};
      const cols = props.columns;
      let leftOffset = 0;
      leftOffset += 50;

      cols.forEach((col) => {
        if (col.fixed === "left") {
          styles[col.key] = { position: "sticky", left: `${leftOffset}px` };
          leftOffset += col.width || 100;
        }
      });

      let rightOffset = 0;
      for (let i = cols.length - 1; i >= 0; i--) {
        const col = cols[i];
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
      if (col.sorter) {
        cls.push("k-table-cell-sorter");
      }
      return cls;
    };

    const handleBodyScroll = (e) => {
      const target = e.target;
      const { scrollLeft, scrollWidth, clientWidth } = target;

      // 1. 同步 Header 的横向滚动
      if (headerWrapperRef.value) {
        headerWrapperRef.value.scrollLeft = scrollLeft;
      }

      // 2. 阴影显示逻辑
      pingLeft.value = scrollLeft > 0;
      pingRight.value = scrollLeft < scrollWidth - clientWidth - 1;
    };

    const measureScrollbar = () => {
      const body = bodyWrapperRef.value;
      if (body) {
        const width = body.offsetWidth - body.clientWidth;
        if (scrollbarWidth.value !== width) {
          scrollbarWidth.value = width;
        }
      }
    };

    onMounted(() => {
      measureScrollbar();
      if (bodyWrapperRef.value)
        handleBodyScroll({ target: bodyWrapperRef.value });
    });

    onUpdated(() => {
      measureScrollbar();
    });

    const handleSort = (col) => {
      if (!col.sorter) return;
      if (sortState.key !== col.key) {
        sortState.key = col.key;
        sortState.order = "asc";
      } else {
        if (sortState.order === "asc") sortState.order = "desc";
        else if (sortState.order === "desc") sortState.order = null;
        else sortState.order = "asc";
      }
      if (typeof col.sorter === "function") col.sorter(sortState.order);
    };

    const processedData = computed(() => {
      let list = [...props.data];
      if (sortState.key && sortState.order) {
        list.sort((a, b) => {
          const valA = a[sortState.key];
          const valB = b[sortState.key];
          if (valA === valB) return 0;
          const result = valA > valB ? 1 : -1;
          return sortState.order === "asc" ? result : -result;
        });
      }
      return list;
    });

    const toggleAll = (e) => {
      const checked = e.target.checked;
      const newSet = new Set(innerSelectedKeys.value);

      props.data.forEach((item) => {
        const key = item[props.rowKey];
        if (!isDisabled(key)) {
          if (checked) {
            newSet.add(key);
          } else {
            newSet.delete(key);
          }
        }
      });

      innerSelectedKeys.value = newSet;
      emit("update:selectedKeys", Array.from(newSet));
    };
    const toggleOne = (key) => {
      if (isDisabled(key)) return;

      const newSet = new Set(innerSelectedKeys.value);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }

      innerSelectedKeys.value = newSet;
      emit("update:selectedKeys", Array.from(newSet));
    };

    const renderColGroup = () => (
      <colgroup>
        <col style={{ width: "50px" }} />
        {props.columns.map((col) => (
          <col
            key={col.key}
            style={{ width: col.width ? `${col.width}px` : "100px" }}
          />
        ))}
      </colgroup>
    );

    return () => {
      // 如果 scroll.x 是数字，使用 scroll.x，否则如果没有 scroll.x 则 auto (但可能有对齐问题)
      const tableStyle = {
        width: props.scroll.x
          ? typeof props.scroll.x === "number"
            ? `${props.scroll.x}px`
            : props.scroll.x
          : "100%",
        tableLayout: "fixed",
      };

      return (
        <div
          class={[
            "k-table",
            {
              "k-table-sm": props.size == "small",
              "k-table-lg": props.size == "large",
              "k-table-bordered": props.bordered,
              "k-table-ping-left": pingLeft.value,
              "k-table-ping-right": pingRight.value,
            },
          ]}
          style={{ overflow: "hidden" }}
        >
          <div
            class="k-table-thead"
            ref={headerWrapperRef}
            style={{
              overflow: "hidden",
              marginBottom: "-1px",
              paddingRight: `${scrollbarWidth.value}px`,
            }}
          >
            <table style={tableStyle}>
              {renderColGroup()}
              <thead>
                <tr>
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
                        props.data.every((item) =>
                          isDisabled(item[props.rowKey])
                        )
                      }
                    />
                  </th>
                  {props.columns.map((col, idx) => (
                    <th
                      key={col.key}
                      class={getFixedClass(col, idx)}
                      style={fixedInfo.value[col.key]}
                      onClick={() => handleSort(col)}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          cursor: col.sorter ? "pointer" : "default",
                        }}
                      >
                        {col.title}
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
            </table>
          </div>
          {!props.data ||
          !props.data.length ||
          !props.columns ||
          !props.columns.length ? (
            <Empty description={props.emptyText} />
          ) : (
            <div
              class="k-table-body"
              ref={bodyWrapperRef}
              onScroll={handleBodyScroll}
              style={{
                overflowY: props.scroll.y ? "scroll" : "auto",
                overflowX: props.scroll.x ? "auto" : "hidden",
                maxHeight: props.scroll.y
                  ? typeof props.scroll.y === "number"
                    ? `${props.scroll.y}px`
                    : props.scroll.y
                  : "auto",
              }}
            >
              <table style={tableStyle}>
                {renderColGroup()}
                <tbody>
                  {processedData.value.map((record, rowIndex) => {
                    const rowId = record[props.rowKey];
                    const rowDisabled = isDisabled(rowId);
                    return (
                      <tr key={rowId}>
                        <td
                          class={[
                            "k-table-cell-fix-left",
                            pingLeft.value && "k-table-cell-fix-left-last",
                          ]}
                        >
                          <Checkbox
                            checked={innerSelectedKeys.value.has(rowId)}
                            disabled={rowDisabled}
                            onChange={() => toggleOne(rowId)}
                          />
                        </td>
                        {props.columns.map((col, colIndex) => {
                          let spanProps = { rowSpan: 1, colSpan: 1 };
                          if (col.rowSpan) {
                            if (rowIndex % col.rowSpan === 0)
                              spanProps.rowSpan = col.rowSpan;
                            else return null;
                          }
                          if (col.colSpan) spanProps.colSpan = col.colSpan;

                          return (
                            <td
                              key={col.key}
                              {...spanProps}
                              class={getFixedClass(col, colIndex)}
                              style={fixedInfo.value[col.key]}
                            >
                              {record[col.key]}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {props.loading && <Spin />}
        </div>
      );
    };
  },
});
