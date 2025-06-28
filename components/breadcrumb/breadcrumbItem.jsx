import { defineComponent, inject } from "vue";
import Icon from "../icon";
import { withInstall } from '../utils/vue';
const BreadcrumbItem = defineComponent({
  name: "BreadcrumbItem",
  props: {
    href: String,
    icon: [String, Array, Object],
  },
  setup(ps, { slots, emit }) {
    const separator = inject("separator", null);
    return () => {
      const iconNode = slots.icon ? (
        slots.icon()
      ) : ps.icon ? (
        <Icon type={ps.icon} />
      ) : null;
      return (
        <li class="k-breadcrumb-item" onClick={(e) => emit("click", e)}>
          {ps.href ? (
            <a class="k-breadcrumb-link" href={ps.href}>
              {iconNode}
              {slots.default?.()}
            </a>
          ) : (
            <span class="k-breadcrumb-link">
              {iconNode}
              {slots.default?.()}
            </span>
          )}
          <span class="k-breadcrumb-separator">{separator}</span>
        </li>
      );
    };
  },
});
export default withInstall(BreadcrumbItem);
