import type {
  CSSProperties,
  DefineComponent,
  ExtractPropTypes,
  HTMLAttributes,
  PropType,
} from "vue";
import { computed, defineComponent, provide, ref } from "vue";
import type { BooleanType } from "../const/types";
import { GRID_KEY, useBreakpoint } from "./useBreakpoint";

const gridProps = {
  cols: { type: [Number, String, Object], default: 24 },
  rows: { type: [Number, String, Object], default: "auto" },
  autoRows: { type: String, default: "auto" },
  xGap: { type: [Number, String, Object], default: 0 },
  yGap: { type: [Number, String, Object], default: 0 },
  itemMinWidth: { type: Number },
  align: { type: String },
  justify: { type: String },
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

    const resolveResponsive = <T,>(val: T | Record<string, T> | undefined, fallback: T): T => {
      if (val === undefined) return fallback;
      if (typeof val !== "object" || val === null) return val;
      const responsive = val as Record<string, T>;
      const order = ["xxl", "xl", "lg", "md", "sm", "xs"];
      const currentIndex = order.indexOf(breakpoint?.value || "md");

      for (let i = currentIndex; i < order.length; i++) {
        const key = order[i];
        if (responsive[key] !== undefined) return responsive[key];
      }
      return fallback;
    };

    provide(GRID_KEY, { breakpoint, resolveResponsive });

    const gridStyle = computed(() => {
      const activeCols = resolveResponsive(props.cols, 24);
      const activeRows = resolveResponsive(props.rows, "auto");
      const activeXGap = resolveResponsive(props.xGap, 0);
      const activeYGap = resolveResponsive(props.yGap, 0);
      const parseGap = (val: number | string) => (typeof val === "number" ? `${val}px` : val);

      const style: CSSProperties = {
        gridTemplateColumns: props.itemMinWidth
          ? `repeat(auto-fill, minmax(${props.itemMinWidth}px, 1fr))`
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
