import {
  defineComponent,
  Fragment,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  ref,
  shallowRef,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
import { getChildren } from "../utils/vnode";
import { useInitialValue } from "../utils/model-value";
import { SplitterPanel } from "./splitter-panel";
import { createSplitterController, emptyState, type PanelOptions } from "./controller";
const splitterProps = {
  direction: { type: String as PropType<"horizontal" | "vertical">, default: "horizontal" },
  modelValue: Array as PropType<number[]>,
  value: Array as PropType<number[]>,
  disabled: Boolean,
  lazy: Boolean,
};
export type SplitterProps = ExtractPropTypes<typeof splitterProps>;
export const Splitter = defineComponent({
  name: "Splitter",
  inheritAttrs: false,
  props: splitterProps,
  emits: {
    "update:modelValue": (sizes: number[]) => Array.isArray(sizes),
    change: (sizes: number[]) => Array.isArray(sizes),
    resize: (sizes: number[]) => Array.isArray(sizes),
    resizeStart: (sizes: number[]) => Array.isArray(sizes),
    resizeEnd: (sizes: number[]) => Array.isArray(sizes),
    collapse: (index: number, collapsed: boolean) =>
      typeof index === "number" && typeof collapsed === "boolean",
  },
  setup(props, { attrs, slots, emit }) {
    const containerRef = ref<HTMLElement>();
    const state = shallowRef(emptyState());
    const value = useInitialValue(props);
    const controller = createSplitterController();
    let nodes: VNode[] = [];
    const panelOptions = (): PanelOptions[] =>
      nodes.map((node, i) => {
        const p = node.props ?? {};
        return {
          key: String(node.key ?? i),
          size: p.size,
          min: p.min,
          max: p.max,
          resizable: p.resizable !== false,
          collapsible: p.collapsible === "" || p.collapsible === true,
          collapsed: p.collapsed === undefined ? undefined : p.collapsed !== false,
        };
      });
    const configure = () =>
      controller.configure({
        panels: panelOptions(),
        direction: props.direction,
        disabled: props.disabled,
        lazy: props.lazy,
        value: value.value,
        onState: (next) => {
          state.value = next;
        },
        onChange: (sizes) => {
          value.value = sizes;
          emit("update:modelValue", sizes);
          emit("change", sizes);
        },
        onResize: (sizes) => emit("resize", sizes),
        onResizeStart: (sizes) => emit("resizeStart", sizes),
        onResizeEnd: (sizes) => emit("resizeEnd", sizes),
        onCollapse: (index, collapsed) => {
        nodes[index]?.component?.emit("update:collapsed", collapsed);
          emit("collapse", index, collapsed);
        },
      });
    onMounted(() => {
      configure();
      if (containerRef.value) controller.mount(containerRef.value);
    });
    onUpdated(configure);
    onBeforeUnmount(() => controller.dispose());
    const collapseButton = (index: number, neighbor: number, before: boolean) => {
      if (!panelOptions()[index]?.collapsible) return null;
      const collapsed = state.value.collapsed[index];
      const arrow =
        props.direction === "horizontal"
          ? before !== collapsed
            ? "‹"
            : "›"
          : before !== collapsed
            ? "↑"
            : "↓";
      return (
        <button
          type="button"
          class="k-splitter-collapse"
          disabled={!controller.canCollapse(index, neighbor)}
          aria-label={`${collapsed ? "Expand" : "Collapse"} panel ${index + 1}`}
          aria-expanded={!collapsed}
          onPointerdown={(event) => event.stopPropagation()}
          onClick={() => controller.toggle(index, neighbor)}
        >
          {arrow}
        </button>
      );
    };
    return () => {
      nodes = getChildren(slots.default?.()).filter((node) => node.type === SplitterPanel);
      const current = state.value;
      return (
        <div
          {...attrs}
          ref={containerRef}
          class={[
            "k-splitter",
            `is-${props.direction}`,
            { "is-disabled": props.disabled },
            attrs.class,
          ]}
        >
          {nodes.map((node, index) => {
            const draggable = controller.canResize(index);
            const limits = controller.range(index);
            const dragging = current.dragging === index;
            return (
              <Fragment key={node.key ?? index}>
                <div
                  class={["k-splitter-item", { "is-collapsed": current.collapsed[index] }]}
                  aria-hidden={current.collapsed[index] || undefined}
                  inert={current.collapsed[index] || undefined}
                  style={{
                    flexBasis:
                      current.sizes[index] === undefined ? undefined : `${current.sizes[index]}px`,
                    flexGrow: current.sizes[index] === undefined ? 1 : 0,
                    flexShrink: 0,
                  }}
                >
                  {node}
                </div>
                {index < nodes.length - 1 && (
                  <div
                    class={[
                      "k-splitter-resizer",
                      {
                        "is-active": dragging,
                        "is-after-collapsed": current.collapsed[index + 1],
                        "is-restorable": current.collapsed[index] || current.collapsed[index + 1],
                      },
                    ]}
                  >
                    <div
                      class="k-splitter-handle"
                      role="separator"
                      tabindex={draggable ? 0 : -1}
                      aria-label={`Resize panels ${index + 1} and ${index + 2}`}
                      aria-orientation={
                        props.direction === "horizontal" ? "vertical" : "horizontal"
                      }
                      aria-disabled={!draggable || undefined}
                      aria-valuemin={Math.round(limits.min)}
                      aria-valuemax={Math.round(limits.max)}
                      aria-valuenow={Math.round(current.sizes[index] ?? 0)}
                      onPointerdown={(event) => controller.start(index, event)}
                      onKeydown={(event) => controller.keydown(index, event)}
                    />
                    <div class="k-splitter-actions">
                      {collapseButton(index, index + 1, true)}
                      {collapseButton(index + 1, index, false)}
                    </div>
                    {dragging && props.lazy && current.preview !== null && (
                      <div
                        class="k-splitter-preview"
                        style={{
                          transform:
                            props.direction === "horizontal"
                              ? `translateX(${current.preview}px)`
                              : `translateY(${current.preview}px)`,
                        }}
                      />
                    )}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      );
    };
  },
});
