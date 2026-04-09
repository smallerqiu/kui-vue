import { defineComponent, inject, type ExtractPropTypes, type PropType } from "vue";
import Icon, { type IconType } from "../icon";

const breadcrumbItemProps = {
  href: String,
  icon: [Array] as PropType<IconType[]>,
};

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;

const BreadcrumbItem = defineComponent({
  name: "BreadcrumbItem",
  props: breadcrumbItemProps,
  emits: ["click"],
  setup(props, { slots, emit }) {
    const separator = inject("separator", null);

    return () => {
      const iconNode = slots.icon ? slots.icon() : props.icon ? <Icon type={props.icon} /> : null;

      const itemProps = {
        class: "k-breadcrumb-item",
        onClick: (e: MouseEvent) => emit("click", e),
      };

      const linkProps = {
        class: "k-breadcrumb-link",
        href: props.href,
      };

      const content = (
        <>
          {iconNode}
          {slots.default?.()}
        </>
      );

      return (
        <li {...itemProps}>
          {props.href ? (
            <a {...linkProps}>{content}</a>
          ) : (
            <span class="k-breadcrumb-link">{content}</span>
          )}
          <span class="k-breadcrumb-separator">{separator}</span>
        </li>
      );
    };
  },
});
export default BreadcrumbItem;
