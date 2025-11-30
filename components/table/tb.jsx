import { defineComponent, ref, computed, reactive } from "vue";
import "./Table.css"; // 引入上面的 CSS

export default defineComponent({
  name: "Table",
  props: {
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    rowKey: { type: String, default: "key" }, // 指定唯一键字段
  },
  setup(props) {
    // --- 状态 ---
    const selectedKeys = ref(new Set()); // 选中的行 Key
    const sortState = reactive({ key: null, order: null }); // 'asc' | 'desc' | null

    // --- 1. 固定列样式计算 ---
    // 预计算每列的 sticky left/right 偏移值
    const fixedInfo = computed(() => {
      const styles = {};
      const cols = props.columns;

      // 计算左侧固定
      let leftOffset = 0;
      // 加上选择框列的宽度 (假设选择框列宽 50px)
      leftOffset += 50;

      cols.forEach((col, index) => {
        if (col.fixed === "left") {
          styles[col.key] = { position: "sticky", left: `${leftOffset}px` };
          leftOffset += col.width || 150; // 如果没有宽，默认给个宽防止挤压
        }
      });

      // 计算右侧固定
      let rightOffset = 0;
      for (let i = cols.length - 1; i >= 0; i--) {
        const col = cols[i];
        if (col.fixed === "right") {
          styles[col.key] = {
            position: "sticky",
            right: `${rightOffset}px`,
          };
          rightOffset += col.width || 150;
        }
      }
      return styles;
    });

    // 辅助类名：给最左/最右的固定列加阴影
    const getFixedClass = (col, index) => {
      const cls = [];
      if (col.fixed === "left") {
        cls.push("k-table-cell-fix-left");
        // 简单判断：如果下一列不是左固定，那我是最后一个左固定
        if (props.columns[index + 1]?.fixed !== "left")
          cls.push("k-table-cell-fix-left-last");
      }
      if (col.fixed === "right") {
        cls.push("k-table-cell-fix-right");
        // 简单判断：如果前一列不是右固定，那我是第一个右固定
        if (props.columns[index - 1]?.fixed !== "right")
          cls.push("k-table-cell-fix-right-first");
      }
      return cls;
    };

    // --- 2. 排序逻辑 ---
    const handleSort = (col) => {
      if (!col.sorter) return;

      // 切换顺序: asc -> desc -> null
      if (sortState.key !== col.key) {
        sortState.key = col.key;
        sortState.order = "asc";
      } else {
        if (sortState.order === "asc") sortState.order = "desc";
        else if (sortState.order === "desc") sortState.order = null;
        else sortState.order = "asc";
      }

      // 如果提供了回调，这里可以触发 emit，或者前端排序
      if (typeof col.sorter === "function") {
        // 传入当前排序状态
        col.sorter(sortState.order);
      }
    };

    // 处理后的数据（前端排序）
    const processedData = computed(() => {
      let list = [...props.data];
      if (sortState.key && sortState.order) {
        // 这里做一个通用的简单排序，实际业务可能依赖后端或 col.sorter 的具体实现
        // 如果 sorter 是函数且返回 compare 结果更好，这里简化处理
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

    // --- 3. 选择逻辑 ---
    const allSelected = computed(() => {
      return (
        props.data.length > 0 && selectedKeys.value.size === props.data.length
      );
    });

    const indeterminate = computed(() => {
      return (
        selectedKeys.value.size > 0 &&
        selectedKeys.value.size < props.data.length
      );
    });

    const toggleAll = (e) => {
      if (e.target.checked) {
        props.data.forEach((item) =>
          selectedKeys.value.add(item[props.rowKey])
        );
      } else {
        selectedKeys.value.clear();
      }
    };

    const toggleOne = (key) => {
      if (selectedKeys.value.has(key)) selectedKeys.value.delete(key);
      else selectedKeys.value.add(key);
    };

    return () => (
      <div class="k-table-wrapper">
        <table class="k-table">
          <colgroup>
            {/* 选择列定宽 */}
            <col style={{ width: "50px" }} />
            {props.columns.map((col) => (
              <col
                key={col.key}
                style={{ width: col.width ? `${col.width}px` : "auto" }}
              />
            ))}
          </colgroup>

          <thead>
            <tr>
              {/* 选择列表头 (固定在最左) */}
              <th class="k-table-cell-fix-left" style={{ left: 0 }}>
                <input
                  type="checkbox"
                  checked={allSelected.value}
                  indeterminate={indeterminate.value}
                  onChange={toggleAll}
                />
              </th>

              {/* 数据列表头 */}
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
                      <span class="k-sorter">
                        <span
                          class={[
                            "k-sorter-up",
                            sortState.key === col.key &&
                              sortState.order === "asc" &&
                              "active",
                          ]}
                        >
                          ▲
                        </span>
                        <span
                          class={[
                            "k-sorter-down",
                            sortState.key === col.key &&
                              sortState.order === "desc" &&
                              "active",
                          ]}
                        >
                          ▼
                        </span>
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {processedData.value.map((record, rowIndex) => {
              const rowId = record[props.rowKey];
              return (
                <tr key={rowId}>
                  {/* 选择列 (固定在最左) */}
                  <td class="k-table-cell-fix-left" style={{ left: 0 }}>
                    <input
                      type="checkbox"
                      checked={selectedKeys.value.has(rowId)}
                      onChange={() => toggleOne(rowId)}
                    />
                  </td>

                  {/* 数据列 */}
                  {props.columns.map((col, colIndex) => {
                    // --- 4. 行合并 (RowSpan) 逻辑 ---
                    // 规则：如果设置 rowSpan: 3
                    // rowIndex % 3 === 0 -> 渲染 td, rowspan=3
                    // 其他 -> 不渲染
                    let spanProps = { rowSpan: 1, colSpan: 1 };

                    if (col.rowSpan) {
                      if (rowIndex % col.rowSpan === 0) {
                        spanProps.rowSpan = col.rowSpan;
                      } else {
                        // 被合并的行不渲染 TD
                        return null;
                      }
                    }

                    if (col.colSpan) {
                      // 简单的列合并逻辑示例
                      spanProps.colSpan = col.colSpan;
                    }

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
    );
  },
});
