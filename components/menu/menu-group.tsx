import { defineComponent, type ExtractPropTypes } from "vue";

export const menuGroupProps = {
  title: { type: String, required: true },
};

export type MenuGroupProps = ExtractPropTypes<typeof menuGroupProps>;

const MenuGroup = defineComponent({
  name: "MenuGroup",
  props: menuGroupProps,
  setup(props, { slots }) {
    return () => {
      const titleNode = props.title || slots.title?.();
      return (
        <li class="k-menu-item-group">
          <div class="k-menu-item-group-title">{titleNode}</div>
          <ul class="k-menu-item-group-list">{slots.default?.()}</ul>
        </li>
      );
    };
  },
});
export default MenuGroup;
