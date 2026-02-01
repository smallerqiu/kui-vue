import RecursiveSubMenu from "./recursiveMenu.jsx";
import SubMenu from "./submenu.jsx";
import MenuItem from "./menuitem.jsx";
import { defineComponent } from "vue";
const RecursiveMenu = defineComponent({
  name: "RecursiveMenu",
  props: {
    item: Object,
    isPopup: Boolean,
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
