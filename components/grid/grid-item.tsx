import type { CSSProperties, DefineComponent, ExtractPropTypes, HTMLAttributes } from "vue";
import { computed, defineComponent, inject } from "vue";
import { GRID_KEY } from "./useBreakpoint";

const gridItemProps = {
  span: { type: [Number, String, Object], default: 1 }, // 跨越几列
  rowSpan: { type: [Number, String, Object], default: 1 }, // 跨越几行
  offset: { type: [Number, Object], default: 0 }, // 左侧偏移（通过 grid-column-start 实现）
  suffix: { type: Boolean, default: false }, // 是否作为末尾填充
};

export type GridItemProps = Partial<ExtractPropTypes<typeof gridItemProps>> & HTMLAttributes;

interface GridContext {
  resolveResponsive: (span: GridItemProps["span"], defaultValue: number) => number;
}

const GridItem = defineComponent({
  name: "GridItem",
  props: gridItemProps,
  setup(props, { slots }) {
    const context: GridContext | undefined = inject(GRID_KEY);
    const itemStyle = computed(() => {
      if (!context) return {};

      const s = context.resolveResponsive(props.span, 1);
      const rs = context.resolveResponsive(props.rowSpan, 1);
      const o = context.resolveResponsive(props.offset, 0);
      if (s === 0) return { display: "none" };
      const styles: CSSProperties = {};
      if (s !== 1) {
        styles.gridColumn = `span ${s} / span ${s}`;
      }

      if (o > 0) {
        styles.gridColumnStart = `span ${s + o}`;
        if (s === 1) {
          styles.gridColumnEnd = `span 1`;
        }
      }
      if (rs !== 1) {
        styles.gridRow = `span ${rs} / span ${rs}`;
      }

      if (props.suffix) {
        styles.gridColumnStart = "-1";
        styles.justifySelf = "end";
      }

      return styles;
    });

    const itemProps = {
      class: "k-grid-item",
      style: itemStyle.value,
    };

    return () => {
      return <div {...itemProps}>{slots.default?.()}</div>;
    };
  },
});

export default GridItem as DefineComponent<GridItemProps>;
