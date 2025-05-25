import { defineComponent, inject } from "vue";
import Icon from "../icon";
export default defineComponent({
  name: "BreadcrumbItem",
  props: {
    href: String,
    icon: [String, Array, Object],
  },
  setup(ps, { slots, emit }) {
    const separator = inject("separator", null);
    return () => (
      <li class="k-breadcrumb-item" onClick={(e) => emit("click", e)}>
        {slots.icon ? slots.icon() : icon ? <Icon type={icon} /> : null}
        {ps.href ? (
          <a class="k-breadcrumb-link" href={ps.href}>
            {slots.default?.()}
          </a>
        ) : (
          <span class="k-breadcrumb-link">{slots.default?.()}</span>
        )}
        <span class="k-breadcrumb-separator">{separator}</span>
      </li>
    );
  },
});
