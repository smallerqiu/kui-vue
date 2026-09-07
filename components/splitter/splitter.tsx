import {
  defineComponent,
  Fragment,
  onMounted,
  onUnmounted,
  ref,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
import type { DirectionType } from "../const/types";

const splitterProps = {
  direction: { type: String as PropType<DirectionType>, default: "horizontal" },
};
export type SplitterProps = ExtractPropTypes<typeof splitterProps>;

export const Splitter = defineComponent({
  name: "Splitter",
  inheritAttrs: false,
  props: splitterProps,
  emits: {
    resize: (sizes: number[]) => Array.isArray(sizes),
    resizeStart: (sizes: number[]) => Array.isArray(sizes),
    resizeEnd: (sizes: number[]) => Array.isArray(sizes),
  },
  setup(props, { attrs, slots, emit }) {
    const containerRef = ref<HTMLElement | null>(null);
    const isDragging = ref(false);
    const activeResizerIndex = ref<number | null>(null);

    const panelSizes = ref<number[]>([]);
    const minSizes = ref<number[]>([]);
    const maxSizes = ref<number[]>([]);
    let previousBodyCursor = "";

    const parseToPx = (val: string | number | undefined, total: number): number | null => {
      if (val === undefined || val === null || val === "") return null;
      if (typeof val === "number") return val;
      const s = String(val).trim();
      if (s.endsWith("%")) return (parseFloat(s) / 100) * total;
      if (s.endsWith("px")) return parseFloat(s);
      if (!isNaN(Number(s))) return parseFloat(s);
      return null;
    };

    // 动态初始化和重置尺寸
    const initSizes = () => {
      if (!containerRef.value) return;
      const rect = containerRef.value.getBoundingClientRect();
      const children = (slots.default?.() || []) as VNode[];
      const resizerWidth = 4;

      // 有效可用空间[cite: 2]
      const totalSize =
        (props.direction === "horizontal" ? rect.width : rect.height) -
        (children.length - 1) * resizerWidth;

      minSizes.value = children.map((c) => parseToPx(c.props?.min, totalSize) ?? 0);
      maxSizes.value = children.map((c) => parseToPx(c.props?.max, totalSize) ?? totalSize);

      const rawSizes = children.map((c) => parseToPx(c.props?.size, totalSize));
      const definedSum = rawSizes.reduce((acc, s) => (acc ?? 0) + (s ?? 0), 0) || 0;
      const undefinedCount = rawSizes.filter((s) => s === null).length;

      const spare = Math.max(0, totalSize - definedSum);
      const autoSize = undefinedCount > 0 ? spare / undefinedCount : 0;

      panelSizes.value = rawSizes.map((s) => s ?? autoSize);
    };

    const onMouseDown = (index: number, event: MouseEvent) => {
      if (event.button !== 0) return;
      event.preventDefault();
      isDragging.value = true;
      activeResizerIndex.value = index;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      previousBodyCursor = document.body.style.cursor;
      document.body.style.cursor = props.direction === "horizontal" ? "col-resize" : "row-resize";
      document.body.classList.add("k-splitter-dragging"); // 增加全局拖拽样式
      emitSize("resizeStart");
    };

    const emitSize = (type: "resize" | "resizeStart" | "resizeEnd") => {
      const sizes = panelSizes.value.map((x) => parseFloat(x.toFixed(3)));
      if (type === "resize") emit("resize", sizes);
      else if (type === "resizeStart") emit("resizeStart", sizes);
      else emit("resizeEnd", sizes);
    };

    const resizePair = (index: number, requestedSize: number) => {
      const pairTotal = panelSizes.value[index] + panelSizes.value[index + 1];
      const lower = Math.max(minSizes.value[index], pairTotal - maxSizes.value[index + 1]);
      const upper = Math.min(maxSizes.value[index], pairTotal - minSizes.value[index + 1]);
      const nextSize = Math.max(lower, Math.min(upper, requestedSize));
      panelSizes.value = panelSizes.value.map((size, panelIndex) => {
        if (panelIndex === index) return nextSize;
        if (panelIndex === index + 1) return pairTotal - nextSize;
        return size;
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.value || activeResizerIndex.value === null || !containerRef.value) return;

      const rect = containerRef.value.getBoundingClientRect();
      const idx = activeResizerIndex.value;
      const children = (slots.default?.() || []) as VNode[];
      const resizerWidth = 4; // 对应 CSS 中的宽度
      const totalResizersWidth = (children.length - 1) * resizerWidth;

      // 容器总宽度扣除所有分隔条占据的死空间
      const totalAvailableSize =
        (props.direction === "horizontal" ? rect.width : rect.height) - totalResizersWidth;

      // 计算鼠标相对于“有效空间”的坐标
      // 需要减去当前 Resizer 之前所有 Resizer 占用的宽度
      const resizersBefore = idx * resizerWidth;
      let currentPos =
        (props.direction === "horizontal" ? e.clientX - rect.left : e.clientY - rect.top) -
        resizersBefore;

      // 物理边界钳制：确保不超出有效空间
      currentPos = Math.max(0, Math.min(totalAvailableSize, currentPos));

      const offset = panelSizes.value.slice(0, idx).reduce((a, b) => a + b, 0);
      resizePair(idx, currentPos - offset);
      emitSize("resize");
    };

    const finishDragging = (emitEnd = true) => {
      if (!isDragging.value) return;
      isDragging.value = false;
      activeResizerIndex.value = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.body.style.cursor = previousBodyCursor;
      document.body.classList.remove("k-splitter-dragging");
      if (emitEnd) emitSize("resizeEnd");
    };
    const onMouseUp = () => finishDragging();

    const onResizerKeydown = (index: number, event: KeyboardEvent) => {
      const previousKey = props.direction === "horizontal" ? "ArrowLeft" : "ArrowUp";
      const nextKey = props.direction === "horizontal" ? "ArrowRight" : "ArrowDown";
      if (![previousKey, nextKey, "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const pairTotal = panelSizes.value[index] + panelSizes.value[index + 1];
      const lower = Math.max(minSizes.value[index], pairTotal - maxSizes.value[index + 1]);
      const upper = Math.min(maxSizes.value[index], pairTotal - minSizes.value[index + 1]);
      const step = event.shiftKey ? 1 : 10;
      const current = panelSizes.value[index];
      const requested =
        event.key === "Home"
          ? lower
          : event.key === "End"
            ? upper
            : current + (event.key === previousKey ? -step : step);
      emitSize("resizeStart");
      resizePair(index, requested);
      emitSize("resize");
      emitSize("resizeEnd");
    };

    // 使用监听器防止容器大小改变时布局错乱
    let ob: ResizeObserver | null = null;
    onMounted(() => {
      initSizes();
      ob = new ResizeObserver(() => initSizes());
      if (containerRef.value) ob.observe(containerRef.value);
    });
    onUnmounted(() => {
      ob?.disconnect();
      finishDragging(false);
    });

    return () => {
      const children = (slots.default?.() || []) as VNode[];
      return (
        <div
          {...attrs}
          ref={containerRef}
          class={["k-splitter", `is-${props.direction}`, attrs.class]}
        >
          {children.map((child, index) => {
            const isLast = index === children.length - 1;
            const sizeStyle = {
              flexBasis: `${panelSizes.value[index]}px`,
              flexGrow: 0,
              flexShrink: 0, // 必须为0，防止由于内容挤压导致的缩在一起
            };
            return (
              <Fragment key={child.key ?? index}>
                <div class="k-splitter-item" style={sizeStyle}>
                  {child}
                </div>
                {!isLast && (
                  <div
                    class="k-splitter-resizer"
                    role="separator"
                    tabindex={0}
                    aria-orientation={props.direction === "horizontal" ? "vertical" : "horizontal"}
                    aria-valuemin={Math.round(minSizes.value[index] || 0)}
                    aria-valuemax={Math.round(maxSizes.value[index] || 0)}
                    aria-valuenow={Math.round(panelSizes.value[index] || 0)}
                    onMousedown={(event) => onMouseDown(index, event)}
                    onKeydown={(event) => onResizerKeydown(index, event)}
                  />
                )}
              </Fragment>
            );
          })}
        </div>
      );
    };
  },
});
