import { defineComponent } from "vue";
export default defineComponent({
  name: "DescriptionsItem",
  props: {
    label: String,
    span: { type: Number, default: 1 },
    type: String,
    bordered: Boolean,
    layout: String,
  },

  setup(props, { slots }) {
    let childs = slots.default?.();
    let { bordered, label, span, type, layout } = props;

    if (bordered && layout != "vertical") {
      if (type == "label") {
        return () => (
          <th class="k-descriptions-item-label" colSpan={span}>
            {label}
          </th>
        );
      }
      return () => (
        <td class="k-descriptions-item-content" colSpan={span}>
          {childs}
        </td>
      );
    }
    if (layout == "vertical") {
      if (bordered) {
        if (type == "label") {
          return () => (
            <th class="k-descriptions-item-label" colSpan={span}>
              {label}
            </th>
          );
        }
        return () => (
          <td class="k-descriptions-item-content" colSpan={span}>
            {childs}
          </td>
        );
      }
      if (type == "label") {
        return () => (
          <td class="k-descripts-item" colSpan={span}>
            <div class="k-descriptions-item-inner">
              <div class="k-descriptions-item-label">{label}</div>
            </div>
          </td>
        );
      }
      return () => (
        <td class="k-descripts-item" colSpan={span}>
          <div class="k-descriptions-item-inner">
            <div class="k-descriptions-item-content">{childs}</div>
          </div>
        </td>
      );
    }
    return () => (
      <td class="k-descripts-item" colSpan={span}>
        <div class="k-descriptions-item-inner">
          <div class="k-descriptions-item-label">{label}</div>
          <div class="k-descriptions-item-content">{childs}</div>
        </div>
      </td>
    );
  },
});
