import Icon from "../icon";
import { getParent } from './utils.js'
export default {
  name: "MenuItem",
  props: {
    icon: String,
    title: String,
    disabled: Boolean
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
  },
  data() {
    return {
      active: false,
      selected: false,
    };
  },

  render() {

    const { icon, disabled, Menu, SubMenu } = this
    let selected;
    if (Menu) {
      let root = getParent(Menu, 'Menu')
      // console.log(root.mode, root.selectedKeys, 'item')
      selected = root.selectedKeys.indexOf(this.$vnode.key) >= 0
    }
    const props = {
      class: ["k-menu-item", {
        ["k-menu-item-active"]: this.active,
        ["k-menu-item-selected"]: selected,
        ["k-menu-item-disabled"]: disabled
      }],
      on: {
        mouseenter: () => {
          if (disabled) return;
          this.active = true
        },
        mouseleave: () => {
          this.active = false
        },
        click: (e) => {
          if (!disabled) {
            this.selected = true
            let key = this.$vnode.key

            let options = {
              key,
              keyPath: [key],
              item: this,
              event: e
            }

            if (SubMenu) {
              SubMenu.handleClick(options)
              return;
            }

            if (Menu) {
              Menu.handleClick(options)
            }
          }
        },
      }
    }
    return (
      <li {...props}  >
        {icon ? <Icon type={icon} /> : null}
        {this.$slots.default}
      </li >
    )
  },
};