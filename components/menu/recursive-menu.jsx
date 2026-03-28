import { defineComponent } from "vue";
import MenuItem from "./menu-item.jsx";
import RecursiveSubMenu from "./recursive-menu.jsx";
import SubMenu from "./sub-menu.jsx";
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
