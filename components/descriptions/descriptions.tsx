import {
  defineComponent,
  type ExtractPropTypes,
  type PropType,
  ref,
  type Slots,
  type VNode,
  type VNodeChild,
} from "vue";
import type { BooleanType, DirectionType, ShapeType, SizeType } from "../const/types";
import { useBreakpoint } from "../grid/useBreakpoint";
import { getChildren } from "../utils/vnode";
import DescriptionsItem from "./descriptions-item";

const descriptionsProps = {
  bordered: Boolean as BooleanType,
  column: { type: [Number, Object] as PropType<DescriptionsColumn>, default: 3 },
  layout: { type: String as PropType<DirectionType>, default: "horizontal" },
  title: String,
  extra: String,
  size: { type: String as PropType<SizeType> },
  shape: { type: String as PropType<ShapeType>, default: "round" },
};

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>;
type DescriptionBreakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type DescriptionsColumn = number | Partial<Record<DescriptionBreakpoint, number>>;

const Descriptions = defineComponent({
  name: "Descriptions",
  props: descriptionsProps,
  setup(props, { slots }) {
    const rootRef = ref<HTMLElement | null>(null);
    const breakpoint = useBreakpoint(rootRef);
    return () => {
      const { column, bordered, layout, size, title, extra } = props;
      const children = getChildren(slots.default?.()) as VNode[];
      const isVertical = layout === "vertical";

      const order: DescriptionBreakpoint[] = ["xxl", "xl", "lg", "md", "sm", "xs"];
      let activeColumn = typeof column === "number" ? column : 3;
      if (typeof column === "object") {
        const current = order.indexOf((breakpoint?.value || "md") as DescriptionBreakpoint);
        for (let index = current; index < order.length; index++) {
          const candidate = column[order[index]];
          if (candidate !== undefined) {
            activeColumn = candidate;
            break;
          }
        }
      }
      const safeColumn = Math.max(1, Math.floor(Number(activeColumn) || 1));
      type LogicalItem = {
        content: VNodeChild;
        index: number;
        label: VNodeChild;
        span: number;
      };
      const logicalRows: LogicalItem[][] = [];
      let logicalRow: LogicalItem[] = [];
      let currentSpanSum = 0;

      const finishRow = () => {
        if (!logicalRow.length) return;
        logicalRow[logicalRow.length - 1].span += safeColumn - currentSpanSum;
        logicalRows.push(logicalRow);
        logicalRow = [];
        currentSpanSum = 0;
      };

      children.forEach((child, index) => {
        const childProps = child.props || {};
        const childSlots =
          child.children && typeof child.children === "object" && !Array.isArray(child.children)
            ? (child.children as Slots)
            : undefined;
        const parsedSpan = Math.floor(Number(childProps.span) || 1);
        const span = Math.min(safeColumn, Math.max(1, parsedSpan));
        if (currentSpanSum && currentSpanSum + span > safeColumn) finishRow();
        logicalRow.push({
          content: childSlots?.default?.() || child.children,
          index,
          label: (childProps.label as VNodeChild) || childSlots?.label?.(),
          span,
        });
        currentSpanSum += span;
        if (currentSpanSum === safeColumn) finishRow();
      });
      finishRow();

      const rows: VNode[][] = [];
      logicalRows.forEach((items) => {
        if (isVertical) {
          rows.push(
            items.map(({ index, label, span }) => (
              <DescriptionsItem
                key={`l-${index}`}
                label={label}
                span={span}
                type="label"
                layout={layout}
                bordered={bordered}
              />
            )),
            items.map(({ content, index, span }) => (
              <DescriptionsItem key={`c-${index}`} span={span} layout={layout} bordered={bordered}>
                {content}
              </DescriptionsItem>
            )),
          );
          return;
        }
        rows.push(
          items.flatMap(({ content, index, label, span }) =>
            bordered
              ? [
                  <DescriptionsItem
                    key={`l-${index}`}
                    label={label}
                    bordered
                    span={1}
                    type="label"
                  />,
                  <DescriptionsItem key={`c-${index}`} span={span * 2 - 1} bordered>
                    {content}
                  </DescriptionsItem>,
                ]
              : [
                  <DescriptionsItem key={`i-${index}`} label={label} span={span}>
                    {content}
                  </DescriptionsItem>,
                ],
          ),
        );
      });

      const trs = rows.map((row, index) => (
        <tr key={index} class="k-descriptions-row">
          {row}
        </tr>
      ));

      const wrapperProps = {
        class: [
          "k-descriptions",
          {
            "k-descriptions-vertical": isVertical,
            "k-descriptions-bordered": bordered,
            "k-descriptions-medium": size === "medium",
            "k-descriptions-sm": size === "small",
            [`k-descriptions-${props.shape}`]: props.shape,
          },
        ],
      };

      const extraNode = extra || slots.extra?.();
      const titleNode = title || slots.title?.();

      return (
        <div {...wrapperProps} ref={rootRef}>
          {titleNode || extraNode ? (
            <div class="k-descriptions-header">
              <div class="k-descriptions-title">{titleNode}</div>
              {extraNode && <div class="k-descriptions-extra">{extraNode}</div>}
            </div>
          ) : null}
          <div class="k-descriptions-view">
            <table>
              <tbody>{trs}</tbody>
            </table>
          </div>
        </div>
      );
    };
  },
});
export default Descriptions;
