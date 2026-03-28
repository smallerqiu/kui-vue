import { defineComponent } from "vue";
import { withInstall } from "../utils/vue";
const DescriptionsItem = defineComponent({
  name: "DescriptionsItem",
  props: {
    label: String,
    span: { type: Number, default: 1 },
    type: String,
    bordered: Boolean,
    layout: String,
  },
  setup(ps, { slots }) {
    return () => {
      let children = slots.default?.();
      let { bordered, label, span, type, layout } = ps;

      if (bordered && layout != "vertical") {
        if (type == "label") {
          return (
            <th class="k-descriptions-item-label" colSpan={span}>
              {label}
            </th>
          );
        }
        return (
          <td class="k-descriptions-item-content" colSpan={span}>
            {children}
          </td>
        );
      }
      if (layout == "vertical") {
        if (bordered) {
          if (type == "label") {
            return (
              <th class="k-descriptions-item-label" colSpan={span}>
                {label}
              </th>
            );
          } else {
            return (
              <td class="k-descriptions-item-content" colSpan={span}>
                {children}
              </td>
            );
          }
        }
        if (type == "label") {
          return (
            <td class="k-descriptions-item" colSpan={span}>
              <div class="k-descriptions-item-inner">
                <div class="k-descriptions-item-label">{label}</div>
              </div>
            </td>
          );
        }
        return (
          <td class="k-descriptions-item" colSpan={span}>
            <div class="k-descriptions-item-inner">
              <div class="k-descriptions-item-content">{children}</div>
            </div>
          </td>
        );
      }
      return (
        <td class="k-descriptions-item" colSpan={span}>
          <div class="k-descriptions-item-inner">
            <div class="k-descriptions-item-label">{label}</div>
            <div class="k-descriptions-item-content">{children}</div>
          </div>
        </td>
      );
    };
  },
});
export default withInstall(DescriptionsItem);
