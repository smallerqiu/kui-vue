import {
  computed,
  defineComponent,
  ref,
  type ExtractPropTypes,
  type PropType,
  type StyleValue,
} from "vue";
import Empty from "../empty";

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
const toRenderKey = (value: unknown) => `${typeof value}:${String(value)}`;

const kanbanProps = {
  columns: { type: Array as PropType<KanbanColumnData[]>, default: () => [] },
  data: { type: Array as PropType<KanbanItemData[]>, default: () => [] },
  rowKey: { type: String, default: "id" },
  statusKey: { type: String, default: "status" },
  draggable: { type: Boolean, default: true },
  emptyText: String,
  minColumnWidth: { type: [Number, String], default: 250 },
  theme: { type: String as PropType<"fill" | "outline">, default: "fill" },
  onMove: Function as PropType<(event: KanbanMoveEvent) => void>,
  onItemClick: Function as PropType<(item: KanbanItemData, column: KanbanColumnData) => void>,
};
export type KanbanProps = ExtractPropTypes<typeof kanbanProps>;

const Kanban = defineComponent({
  name: "Kanban",
  props: kanbanProps,
  emits: ["move", "itemClick"],
  setup(props, { attrs, emit, slots }) {
    const draggingKey = ref<unknown>();
    const dragOverKey = ref<string | number>();
    const grouped = computed(() => {
      const groups = new Map<string | number, KanbanItemData[]>();
      props.columns.forEach((column) => groups.set(column.key, []));
      props.data.forEach((item) => {
        const status = item[props.statusKey];
        if (typeof status !== "string" && typeof status !== "number") return;
        groups.get(status)?.push(item);
      });
      return groups;
    });
    const clear = () => {
      draggingKey.value = undefined;
      dragOverKey.value = undefined;
    };
    const move = (item: KanbanItemData | undefined, column: KanbanColumnData) => {
      if (!item || item[props.statusKey] === column.key) return;
      const from = item[props.statusKey];
      if (typeof from !== "string" && typeof from !== "number") return;
      emit("move", { item, from, to: column.key } satisfies KanbanMoveEvent);
    };
    const drop = (column: KanbanColumnData) => {
      move(
        props.data.find((entry) => entry[props.rowKey] === draggingKey.value),
        column,
      );
      clear();
    };
    const moveByKeyboard = (event: KeyboardEvent, item: KanbanItemData, columnIndex: number) => {
      if (!props.draggable || !event.altKey) return;
      const step = event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
      if (!step) return;
      const target = props.columns[columnIndex + step];
      if (!target) return;
      event.preventDefault();
      move(item, target);
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
            const items = grouped.value.get(column.key) || [];
            return (
              <section
                key={toRenderKey(column.key)}
                class={[
                  "k-kanban-column",
                  { "k-kanban-column-drag-over": dragOverKey.value === column.key },
                ]}
                onDragover={(event) => {
                  if (!props.draggable) return;
                  event.preventDefault();
                  if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
                  dragOverKey.value = column.key;
                }}
                onDragleave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                    dragOverKey.value = undefined;
                }}
                onDrop={(event) => {
                  event.preventDefault();
                  drop(column);
                }}
                aria-label={column.title}
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
                <div class="k-kanban-column-content" role="list">
                  {items.map((item, index) => (
                    <div
                      key={toRenderKey(item[props.rowKey])}
                      class={[
                        "k-kanban-item",
                        { "k-kanban-item-dragging": draggingKey.value === item[props.rowKey] },
                      ]}
                      draggable={props.draggable}
                      tabindex={props.draggable || props.onItemClick ? 0 : undefined}
                      role="listitem"
                      aria-keyshortcuts={
                        props.draggable ? "Alt+ArrowLeft Alt+ArrowRight" : undefined
                      }
                      onDragstart={(event) => {
                        draggingKey.value = item[props.rowKey];
                        event.dataTransfer?.setData("text/plain", String(item[props.rowKey]));
                        if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
                      }}
                      onDragend={clear}
                      onClick={() => emit("itemClick", item, column)}
                      onKeydown={(event) => {
                        moveByKeyboard(event, item, props.columns.indexOf(column));
                        if (props.onItemClick && (event.key === "Enter" || event.key === " ")) {
                          event.preventDefault();
                          emit("itemClick", item, column);
                        }
                      }}
                    >
                      {slots.item?.({ item, column, index }) ||
                        String(item.title ?? item[props.rowKey] ?? "")}
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
