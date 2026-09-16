import type {
  CSSProperties,
  DefineComponent,
  ExtractPropTypes,
  HTMLAttributes,
  PropType,
} from "vue";
import { computed, defineComponent, provide, ref } from "vue";
import type { BooleanType } from "../const/types";
import type { GridResponsive } from "./useBreakpoint";
import { GRID_KEY, useBreakpoint } from "./useBreakpoint";

const responsiveProp = [Number, String, Object] as PropType<GridResponsive<number | string>>;

const gridProps = {
  cols: { type: responsiveProp, default: 24 },
  rows: { type: responsiveProp, default: "auto" },
  autoRows: { type: String, default: "auto" },
  xGap: { type: responsiveProp, default: 0 },
  yGap: { type: responsiveProp, default: 0 },
  itemMinWidth: { type: [Number, String] as PropType<number | string> },
  align: { type: String as PropType<CSSProperties["alignItems"]> },
  justify: { type: String as PropType<CSSProperties["justifyItems"]> },
  flow: { type: String as PropType<CSSProperties["gridAutoFlow"]>, default: "row" },
  debug: { type: Boolean as BooleanType },
};
export type GridProps = Partial<ExtractPropTypes<typeof gridProps>> & HTMLAttributes;

const Grid = defineComponent({
  name: "Grid",
  inheritAttrs: false,
  props: gridProps,
  setup(props, { attrs, slots }) {
    const gridRef = ref<HTMLElement | null>(null);
    const breakpoint = useBreakpoint(gridRef);

    const resolveResponsive = <T extends string | number>(
      val: GridResponsive<T> | undefined,
      fallback: T,
    ): T => {
      if (val === undefined) return fallback;
      if (typeof val !== "object" || val === null) return val as T;
      const responsive = val as Record<string, T>;
      const order = ["xxl", "xl", "lg", "md", "sm", "xs"];
      const currentIndex = order.indexOf(breakpoint.value);

      for (let i = currentIndex; i < order.length; i++) {
        const key = order[i];
        if (responsive[key] !== undefined) return responsive[key];
      }
      return fallback;
    };

    provide(GRID_KEY, { breakpoint, resolveResponsive });

    const gridStyle = computed(() => {
      const activeCols = resolveResponsive<number | string>(props.cols, 24);
      const activeRows = resolveResponsive<number | string>(props.rows, "auto");
      const activeXGap = resolveResponsive<number | string>(props.xGap, 0);
      const activeYGap = resolveResponsive<number | string>(props.yGap, 0);
      const parseGap = (val: number | string) => (typeof val === "number" ? `${val}px` : val);
      const itemMinWidth =
        typeof props.itemMinWidth === "number" ? `${props.itemMinWidth}px` : props.itemMinWidth;

      const style: CSSProperties = {
        gridTemplateColumns: props.itemMinWidth
          ? `repeat(auto-fill, minmax(min(100%, ${itemMinWidth}), 1fr))`
          : typeof activeCols === "number"
            ? `repeat(${activeCols}, minmax(0, 1fr))`
            : activeCols,
        gridTemplateRows:
          typeof activeRows === "number" ? `repeat(${activeRows}, minmax(0, 1fr))` : activeRows,
        columnGap: parseGap(activeXGap),
        rowGap: parseGap(activeYGap),
        gridAutoRows: props.autoRows,
        alignItems: props.align,
        justifyItems: props.justify,
        gridAutoFlow: props.flow,
      };
      if (props.debug && typeof activeCols === "number") {
        style.backgroundImage = `repeating-linear-gradient(to right, rgba(255,0,0,0.05) 0, rgba(255,0,0,0.05) ${100 / activeCols}%, transparent ${100 / activeCols}%, transparent ${200 / activeCols}%)`;
      }
      return style;
    });
    return () => {
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      return (
        <div
          {...restAttrs}
          class={["k-grid", customClass]}
          style={[gridStyle.value, customStyle]}
          ref={gridRef}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default Grid as DefineComponent<GridProps>;
