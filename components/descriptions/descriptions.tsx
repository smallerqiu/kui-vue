import { defineComponent, type ExtractPropTypes, type PropType, type VNode } from "vue";
import type { BooleanType, DirectionType, SizeType } from "../const/types";
import { getChildren } from "../utils/vnode";
import DescriptionsItem from "./descriptions-item";

export const descriptionsProps = {
  bordered: Boolean as BooleanType,
  column: { type: Number, default: 3 },
  layout: { type: String as PropType<DirectionType>, default: "horizontal" },
  title: String,
  extra: String,
  size: { type: String as PropType<SizeType> },
};

export type DescriptionsProps = ExtractPropTypes<typeof descriptionsProps>;

const Descriptions = defineComponent({
  name: "Descriptions",
  props: descriptionsProps,
  setup(props, { slots }) {
    return () => {
      const { column, bordered, layout, size, title, extra } = props;
      const children = getChildren(slots.default?.()) as VNode[];
      const isVertical = layout === "vertical";

      const rows: VNode[][] = [];
      let currentRow: VNode[] = [];
      let currentContentRow: VNode[] = []; // Used for vertical layout
      let currentSpanSum = 0;

      children.forEach((child, index) => {
        const isLast = index === children.length - 1;
        const childProps = child.props || {};
        let span = Number(childProps.span || 1);
        const label = childProps.label;
        const childNodes = child.children;

        // Fix logic: if it's the last item, it should fill the remaining spans
        const remaining = column - currentSpanSum;
        if (isLast) {
          span = remaining;
        }

        if (isVertical) {
          currentRow.push(
            <DescriptionsItem
              key={`l-${index}`}
              label={label}
              span={span}
              type="label"
              layout={layout}
              bordered={bordered}
            />
          );
          currentContentRow.push(
            <DescriptionsItem key={`c-${index}`} span={span} layout={layout} bordered={bordered}>
              {childNodes}
            </DescriptionsItem>
          );
          currentSpanSum += span;

          if (currentSpanSum >= column || isLast) {
            rows.push(currentRow);
            rows.push(currentContentRow);
            currentRow = [];
            currentContentRow = [];
            currentSpanSum = 0;
          }
        } else {
          if (bordered) {
            currentRow.push(
              <DescriptionsItem
                key={`l-${index}`}
                label={label}
                bordered={bordered}
                span={1}
                type="label"
              />,
              <DescriptionsItem key={`c-${index}`} span={span * 2 - 1} bordered={bordered}>
                {childNodes}
              </DescriptionsItem>
            );
          } else {
            currentRow.push(
              <DescriptionsItem key={`i-${index}`} label={label} span={span}>
                {childNodes}
              </DescriptionsItem>
            );
          }
          currentSpanSum += span;

          if (currentSpanSum >= column || isLast) {
            rows.push(currentRow);
            currentRow = [];
            currentSpanSum = 0;
          }
        }
      });

      const trs = rows.map((row, idx) => (
        <tr key={idx} class="k-descriptions-row">
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
          },
        ],
      };

      const extraNode = extra || slots.extra?.();

      return (
        <div {...wrapperProps}>
          <div class="k-descriptions-header">
            <div class="k-descriptions-title">{title || slots.title?.()}</div>
            {extraNode && <div class="k-descriptions-extra">{extraNode}</div>}
          </div>
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
