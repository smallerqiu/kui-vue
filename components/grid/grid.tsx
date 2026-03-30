import type { CSSProperties, ExtractPropTypes } from "vue";
import { computed, defineComponent, provide, ref } from "vue";
import { GRID_KEY, useBreakpoint } from "./useBreakpoint";

export const gridProps = {
  cols: { type: [Number, String, Object], default: 24 },
  rows: { type: [Number, String, Object], default: "auto" },
  autoRows: { type: String, default: "auto" },
  xGap: { type: [Number, String, Object], default: 0 },
  yGap: { type: [Number, String, Object], default: 0 },
  itemMinWidth: { type: Number },
  align: { type: String },
  justify: { type: String },
  debug: { type: Boolean },
};
export type GridProps = ExtractPropTypes<typeof gridProps>;

const Grid = defineComponent({
  name: "Grid",
  props: gridProps,
  setup(props, { slots }) {
    const gridRef = ref();
    const breakpoint = useBreakpoint(gridRef);

    const resolveResponsive = (val: any, fallback: any) => {
      if (val === undefined) return fallback;
      if (typeof val !== "object") return val;
      const order = ["xxl", "xl", "lg", "md", "sm", "xs"];
      const currentIndex = order.indexOf(breakpoint?.value || "md");

      for (let i = currentIndex; i < order.length; i++) {
        const key = order[i];
        if (val[key] !== undefined) return val[key];
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
      };
      if (props.debug && typeof activeCols === "number") {
        style.backgroundImage = `repeating-linear-gradient(to right, rgba(255,0,0,0.05) 0, rgba(255,0,0,0.05) ${100 / activeCols}%, transparent ${100 / activeCols}%, transparent ${200 / activeCols}%)`;
      }
      return style;
    });
    const gridProps = {
      class: "k-grid",
      style: gridStyle.value,
      ref: gridRef,
    };
    return () => {
      return <div {...gridProps}>{slots.default?.()}</div>;
    };
  },
});

export default Grid;
