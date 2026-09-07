import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { getVirtualRange, normalizeItemHeight } from "./range";

export type VirtualListKey = string | number;

const virtualListProps = {
  data: { type: Array as PropType<unknown[]>, default: () => [] },
  height: { type: [Number, String] as PropType<number | string>, default: 300 },
  itemHeight: { type: Number, default: 32 },
  overscan: { type: Number, default: 5 },
  itemKey: {
    type: [String, Function] as PropType<
      string | ((item: unknown, index: number) => VirtualListKey)
    >,
  },
};

export type VirtualListProps = ExtractPropTypes<typeof virtualListProps>;

const VirtualList = defineComponent({
  name: "VirtualList",
  inheritAttrs: false,
  props: virtualListProps,
  emits: {
    scroll: (event: Event) => Boolean(event),
  },
  setup(props, { attrs, emit, expose, slots }) {
    const containerRef = ref<HTMLElement>();
    const scrollTop = ref(0);
    const viewportHeight = ref(0);
    let resizeObserver: ResizeObserver | null = null;
    const safeItemHeight = computed(() => normalizeItemHeight(props.itemHeight));
    const range = computed(() =>
      getVirtualRange({
        count: props.data.length,
        scrollTop: scrollTop.value,
        viewportHeight: viewportHeight.value,
        itemHeight: safeItemHeight.value,
        overscan: props.overscan,
      }),
    );
    const visibleItems = computed(() =>
      props.data.slice(range.value.start, range.value.end).map((item, localIndex) => ({
        item,
        index: range.value.start + localIndex,
      })),
    );
    const updateViewport = () => {
      viewportHeight.value = containerRef.value?.clientHeight ?? 0;
    };
    onMounted(() => {
      updateViewport();
      if (typeof ResizeObserver !== "undefined" && containerRef.value) {
        resizeObserver = new ResizeObserver(updateViewport);
        resizeObserver.observe(containerRef.value);
      }
    });
    onBeforeUnmount(() => resizeObserver?.disconnect());

    watch(
      () => [props.data.length, safeItemHeight.value],
      () => {
        nextTick(() => {
          const container = containerRef.value;
          if (!container) return;
          const maxScrollTop = Math.max(
            0,
            props.data.length * safeItemHeight.value - container.clientHeight,
          );
          if (container.scrollTop > maxScrollTop) {
            container.scrollTop = maxScrollTop;
            scrollTop.value = maxScrollTop;
          }
        });
      },
    );

    const scrollToIndex = (index: number, align: "auto" | "start" | "center" | "end" = "auto") => {
      const container = containerRef.value;
      if (!container || !props.data.length) return;
      const normalizedIndex = Number.isFinite(index) ? Math.floor(index) : 0;
      const target = Math.max(0, Math.min(normalizedIndex, props.data.length - 1));
      const itemHeight = safeItemHeight.value;
      const top = target * itemHeight;
      const bottom = top + itemHeight;
      const maxScrollTop = Math.max(0, props.data.length * itemHeight - container.clientHeight);
      let nextScrollTop = container.scrollTop;
      if (align === "start") nextScrollTop = top;
      else if (align === "center")
        nextScrollTop = top - container.clientHeight / 2 + itemHeight / 2;
      else if (align === "end") nextScrollTop = bottom - container.clientHeight;
      else if (top < container.scrollTop) nextScrollTop = top;
      else if (bottom > container.scrollTop + container.clientHeight) {
        nextScrollTop = bottom - container.clientHeight;
      }
      container.scrollTop = Math.max(0, Math.min(nextScrollTop, maxScrollTop));
      scrollTop.value = container.scrollTop;
    };
    expose({ scrollToIndex, container: containerRef });

    const getKey = (item: unknown, index: number): VirtualListKey => {
      if (typeof props.itemKey === "function") return props.itemKey(item, index);
      if (typeof props.itemKey === "string" && item && typeof item === "object") {
        const value = (item as Record<string, unknown>)[props.itemKey];
        if (typeof value === "string" || typeof value === "number") return value;
      }
      return index;
    };
    return () => {
      const height = typeof props.height === "number" ? `${props.height}px` : props.height;
      return (
        <div
          {...attrs}
          ref={containerRef}
          class={["k-virtual-list", "k-scroll", attrs.class]}
          style={[{ height }, attrs.style as CSSProperties]}
          onScroll={(event) => {
            scrollTop.value = (event.currentTarget as HTMLElement).scrollTop;
            emit("scroll", event);
          }}
        >
          <div class="k-virtual-list-spacer" style={{ height: `${range.value.total}px` }}>
            <div
              class="k-virtual-list-items"
              style={{ transform: `translateY(${range.value.offset}px)` }}
            >
              {visibleItems.value.map(({ item, index }) => (
                <div
                  key={getKey(item, index)}
                  class="k-virtual-list-item"
                  style={{ height: `${safeItemHeight.value}px` }}
                  data-index={index}
                >
                  {slots.default?.({ item, index })}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
  },
});

export { getVirtualRange } from "./range";
export default VirtualList;
