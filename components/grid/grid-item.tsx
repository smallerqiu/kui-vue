import type {
  CSSProperties,
  DefineComponent,
  ExtractPropTypes,
  HTMLAttributes,
  PropType,
} from "vue";
import { computed, defineComponent, inject } from "vue";
import type { GridResponsive } from "./useBreakpoint";
import { GRID_KEY } from "./useBreakpoint";

const responsiveNumberProp = [Number, Object] as PropType<GridResponsive<number>>;

const gridItemProps = {
  span: { type: responsiveNumberProp, default: 1 },
  rowSpan: { type: responsiveNumberProp, default: 1 },
  columnStart: { type: responsiveNumberProp },
  rowStart: { type: responsiveNumberProp },
  suffix: { type: Boolean, default: false },
};

export type GridItemProps = Partial<ExtractPropTypes<typeof gridItemProps>> & HTMLAttributes;

const GridItem = defineComponent({
  name: "GridItem",
  inheritAttrs: false,
  props: gridItemProps,
  setup(props, { attrs, slots }) {
    const context = inject(GRID_KEY);
    const itemStyle = computed(() => {
      if (!context) return {};

      const s = context.resolveResponsive(props.span, 1);
      const rs = context.resolveResponsive(props.rowSpan, 1);
      const columnStart = context.resolveResponsive(props.columnStart, 0);
      const rowStart = context.resolveResponsive(props.rowStart, 0);
      if (s === 0) return { display: "none" };
      const span = Math.max(1, Math.floor(s));
      const rowSpan = Math.max(1, Math.floor(rs));
      const styles: CSSProperties = {};

      if (props.suffix) {
        styles.gridColumn = `${-span - 1} / -1`;
      } else if (columnStart > 0) {
        styles.gridColumn = `${Math.floor(columnStart)} / span ${span}`;
      } else if (span !== 1) {
        styles.gridColumn = `span ${span}`;
      }

      if (rowStart > 0) {
        styles.gridRow = `${Math.floor(rowStart)} / span ${rowSpan}`;
      } else if (rowSpan !== 1) {
        styles.gridRow = `span ${rowSpan}`;
      }

      return styles;
    });

    return () => {
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      return (
        <div
          {...restAttrs}
          class={["k-grid-item", customClass]}
          style={[itemStyle.value, customStyle]}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default GridItem as DefineComponent<GridItemProps>;
