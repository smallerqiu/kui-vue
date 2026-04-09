import { defineComponent, provide, type ExtractPropTypes, type PropType } from "vue";

const breadcrumbProps = {
  separator: { type: [String, Object] as PropType<string | any>, default: "/" },
};

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
const Breadcrumb = defineComponent({
  name: "Breadcrumb",
  props: breadcrumbProps,
  setup(props, { slots }) {
    // 提供分隔符给子组件 BreadcrumbItem
    provide("separator", slots.separator?.() || props.separator);

    return () => {
      const rootProps = {
        class: "k-breadcrumb",
      };

      return (
        <nav {...rootProps}>
          <ol>{slots.default?.()}</ol>
        </nav>
      );
    };
  },
});
export default Breadcrumb;
