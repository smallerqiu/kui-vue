import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";

const menuGroupProps = {
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
};

export type MenuGroupProps = ExtractPropTypes<typeof menuGroupProps>;

const MenuGroup = defineComponent({
  name: "MenuGroup",
  props: menuGroupProps,
  setup(props, { slots }) {
    return () => {
      const titleNode = props.title ?? slots.title?.();
      return (
        <li class="k-menu-item-group" role="group">
          <div class="k-menu-item-group-title">{titleNode}</div>
          <ul class="k-menu-item-group-list" role="menu">
            {slots.default?.()}
          </ul>
        </li>
      );
    };
  },
});
export default MenuGroup;
