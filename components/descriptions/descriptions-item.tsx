import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import type { TypeBoolean } from "../const/var";

export const descriptionsItemProps = {
  label: String,
  span: { type: Number, default: 1 },
  type: String as PropType<"label" | "content">,
  bordered: Boolean as TypeBoolean,
  layout: String as PropType<"horizontal" | "vertical">,
};

export type DescriptionsItemProps = ExtractPropTypes<typeof descriptionsItemProps>;

export default defineComponent({
  name: "DescriptionsItem",
  props: descriptionsItemProps,
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.();
      const { bordered, label, span, type, layout } = props;

      // Bordered + Horizontal
      if (bordered && layout !== "vertical") {
        if (type === "label") {
          return (
            <th class="k-descriptions-item-label" colspan={span}>
              {label}
            </th>
          );
        }
        return (
          <td class="k-descriptions-item-content" colspan={span}>
            {children}
          </td>
        );
      }

      // Vertical Layout
      if (layout === "vertical") {
        if (bordered) {
          if (type === "label") {
            return (
              <th class="k-descriptions-item-label" colspan={span}>
                {label}
              </th>
            );
          }
          return (
            <td class="k-descriptions-item-content" colspan={span}>
              {children}
            </td>
          );
        }

        // Vertical + Non-Bordered
        if (type === "label") {
          return (
            <td class="k-descriptions-item" colspan={span}>
              <div class="k-descriptions-item-inner">
                <div class="k-descriptions-item-label">{label}</div>
              </div>
            </td>
          );
        }
        return (
          <td class="k-descriptions-item" colspan={span}>
            <div class="k-descriptions-item-inner">
              <div class="k-descriptions-item-content">{children}</div>
            </div>
          </td>
        );
      }

      // Default Horizontal + Non-Bordered
      return (
        <td class="k-descriptions-item" colspan={span}>
          <div class="k-descriptions-item-inner">
            {label && (
              <div class="k-descriptions-item-label">{label}</div>
            )}
            <div class="k-descriptions-item-content">
              {children}
            </div>
          </div>
        </td>
      );
    };
  },
});