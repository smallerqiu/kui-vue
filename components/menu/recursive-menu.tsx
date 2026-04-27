import { defineComponent, type PropType } from "vue";
import type { BooleanType } from "../const/types";
import type { MenuOptionsProps } from "./menu";
import MenuItem from "./menu-item";
import RecursiveSubMenu from "./recursive-menu";
import SubMenu from "./sub-menu";
const RecursiveMenu = defineComponent({
  name: "RecursiveMenu",
  props: {
    item: { type: Object as PropType<MenuOptionsProps>, required: true },
    isPopup: Boolean as BooleanType,
  },
  setup(props) {
    return () => {
      const { item } = props;
      return item.children && item.children.length > 0 ? (
        <SubMenu
          key={item.key}
          isPopup={props.isPopup}
          title={item.title}
          icon={item.icon}
          disabled={item.disabled}
        >
          {item.children.map((child) => {
            return <RecursiveSubMenu item={child} key={child.key} />;
          })}
        </SubMenu>
      ) : (
        <MenuItem key={item.key} isPopup={props.isPopup} icon={item.icon} disabled={item.disabled}>
          {item.title}
        </MenuItem>
      );
    };
  },
});

export default RecursiveMenu;
