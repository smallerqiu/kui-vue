import {
  defineComponent,
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
  onResize: Function as PropType<(sizes: number[]) => void>,
  onResizeEnd: Function as PropType<(sizes: number[]) => void>,
  onResizeStart: Function as PropType<(sizes: number[]) => void>,
};
export type SplitterProps = ExtractPropTypes<typeof splitterProps>;

export const Splitter = defineComponent({
  name: "Splitter",
  props: splitterProps,
  setup(props, { slots, emit }) {
    const containerRef = ref<HTMLElement | null>(null);
    const isDragging = ref(false);
    const activeResizerIndex = ref<number | null>(null);

    const panelSizes = ref<number[]>([]);
    const minSizes = ref<number[]>([]);
    const maxSizes = ref<number[]>([]);

    const parseToPx = (val: string | number | undefined, total: number): number | null => {
      if (val === undefined || val === null || val === "") return null;
      const s = String(val).trim();
      if (s.endsWith("%")) return (parseFloat(s) / 100) * total;
      if (s.endsWith("px")) return parseFloat(s);
      if (!isNaN(Number(s))) return (parseFloat(s) / 100) * total; // 数字默认按百分比
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

    const onMouseDown = (index: number) => {
      isDragging.value = true;
      activeResizerIndex.value = index;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.body.style.cursor = props.direction === "horizontal" ? "col-resize" : "row-resize";
      document.body.classList.add("k-splitter-dragging"); // 增加全局拖拽样式
      emitSize("resizeStart");
    };

    const emitSize = (type: string) => {
      const sizes = panelSizes.value.map((x) => parseFloat(x.toFixed(3)));
      emit(type, sizes);
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

      const pairTotal = panelSizes.value[idx] + panelSizes.value[idx + 1];
      const offset = panelSizes.value.slice(0, idx).reduce((a, b) => a + b, 0);

      let newSizeIdx = currentPos - offset;

      // 边界约束 (min/max)
      newSizeIdx = Math.max(minSizes.value[idx], Math.min(maxSizes.value[idx], newSizeIdx));
      const maxAllowed = pairTotal - minSizes.value[idx + 1];
      newSizeIdx = Math.min(newSizeIdx, maxAllowed);

      // 更新状态
      panelSizes.value[idx] = newSizeIdx;
      panelSizes.value[idx + 1] = pairTotal - newSizeIdx;
      emitSize("resize");
    };

    const onMouseUp = () => {
      isDragging.value = false;
      activeResizerIndex.value = null;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.body.style.cursor = "";
      document.body.classList.remove("k-splitter-dragging");
      emitSize("resizeEnd");
    };

    // 使用监听器防止容器大小改变时布局错乱
    let ob: ResizeObserver | null = null;
    onMounted(() => {
      initSizes();
      ob = new ResizeObserver(() => initSizes());
      if (containerRef.value) ob.observe(containerRef.value);
    });
    onUnmounted(() => ob?.disconnect());

    return () => {
      const children = (slots.default?.() || []) as VNode[];
      return (
        <div ref={containerRef} class={["k-splitter", `is-${props.direction}`]}>
          {children.map((child, index) => {
            const isLast = index === children.length - 1;
            const sizeStyle = {
              flexBasis: `${panelSizes.value[index]}px`,
              flexGrow: 0,
              flexShrink: 0, // 必须为0，防止由于内容挤压导致的缩在一起
            };
            return (
              <>
                <div class="k-splitter-item" style={sizeStyle}>
                  {child}
                </div>
                {!isLast && (
                  <div class="k-splitter-resizer" onMousedown={() => onMouseDown(index)} />
                )}
              </>
            );
          })}
        </div>
      );
    };
  },
});
