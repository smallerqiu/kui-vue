import {
  computed,
  defineComponent,
  ref,
  type ExtractPropTypes,
  type PropType,
  type StyleValue,
} from "vue";
import Empty from "../empty";
import type { ThemeType } from "../const/types";

export interface KanbanColumnData {
  key: string | number;
  title: string;
  color?: string;
  [key: string]: unknown;
}
export interface KanbanItemData {
  [key: string]: unknown;
}
export interface KanbanMoveEvent {
  item: KanbanItemData;
  from: string | number;
  to: string | number;
}

const kanbanProps = {
  columns: { type: Array as PropType<KanbanColumnData[]>, default: () => [] },
  data: { type: Array as PropType<KanbanItemData[]>, default: () => [] },
  rowKey: { type: String, default: "id" },
  statusKey: { type: String, default: "status" },
  draggable: { type: Boolean, default: true },
  emptyText: { type: String, default: "暂无数据" },
  minColumnWidth: { type: [Number, String], default: 250 },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  onMove: Function as PropType<(event: KanbanMoveEvent) => void>,
  onItemClick: Function as PropType<
    (item: KanbanItemData, column: KanbanColumnData) => void
  >,
};
export type KanbanProps = ExtractPropTypes<typeof kanbanProps>;

const Kanban = defineComponent({
  name: "Kanban",
  props: kanbanProps,
  emits: ["move", "itemClick"],
  setup(props, { attrs, emit, slots }) {
    const draggingKey = ref<unknown>();
    const dragOverKey = ref<string | number>();
    const grouped = computed(() =>
      Object.fromEntries(
        props.columns.map((column) => [
          column.key,
          props.data.filter((item) => item[props.statusKey] === column.key),
        ])
      )
    );
    const clear = () => {
      draggingKey.value = undefined;
      dragOverKey.value = undefined;
    };
    const drop = (column: KanbanColumnData) => {
      const item = props.data.find((entry) => entry[props.rowKey] === draggingKey.value);
      if (item && item[props.statusKey] !== column.key)
        emit("move", { item, from: item[props.statusKey], to: column.key } as KanbanMoveEvent);
      clear();
    };
    return () => {
      const width =
        typeof props.minColumnWidth === "number"
          ? `${props.minColumnWidth}px`
          : props.minColumnWidth;
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      return (
        <div
          {...restAttrs}
          class={["k-kanban", `k-kanban-${props.theme}`, customClass]}
          style={[
            {
              "--k-kanban-column-width": width,
              "--k-kanban-columns": props.columns.length,
            } as unknown as StyleValue,
            customStyle,
          ]}
        >
          {props.columns.map((column) => {
            const items = grouped.value[column.key] || [];
            return (
              <section
                class={[
                  "k-kanban-column",
                  { "k-kanban-column-drag-over": dragOverKey.value === column.key },
                ]}
                onDragover={(event) => {
                  if (!props.draggable) return;
                  event.preventDefault();
                  dragOverKey.value = column.key;
                }}
                onDragleave={() => (dragOverKey.value = undefined)}
                onDrop={() => drop(column)}
              >
                <header class="k-kanban-column-header">
                  {slots.columnTitle?.({ column, items }) || (
                    <>
                      <i style={{ background: column.color }}></i>
                      <strong>{column.title}</strong>
                      <em>{items.length}</em>
                    </>
                  )}
                </header>
                <div class="k-kanban-column-content">
                  {items.map((item, index) => (
                    <div
                      class="k-kanban-item"
                      draggable={props.draggable}
                      onDragstart={() => (draggingKey.value = item[props.rowKey])}
                      onDragend={clear}
                      onClick={() => emit("itemClick", item, column)}
                    >
                      {slots.item?.({ item, column, index })}
                    </div>
                  ))}
                  {!items.length &&
                    (slots.empty?.({ column }) || <Empty description={props.emptyText} />)}
                </div>
                {slots.footer && (
                  <footer class="k-kanban-column-footer">{slots.footer({ column, items })}</footer>
                )}
              </section>
            );
          })}
        </div>
      );
    };
  },
});

export default Kanban;
