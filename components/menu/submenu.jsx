import Collapse from '../_tool/collapse'
import Menu from './menu.jsx'
import { getParent } from './utils.js'
import Icon from '../icon'
export default {
  name: "SubMenu",
  props: {
    disabled: Boolean
  },
  provide() {
    return {
      SubMenu: this
    }
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
  },
  data() {
    return {
      active: false,
      opened: false,
    };
  },
  render() {
    const { $slots, disabled } = this

    let selected, root = getParent(this.Menu, 'Menu'), opened = this.opened

    if (root.selectedKeys) {
      // console.log(this.Menu.selectedKeys, 'submenu')
      selected = root.selectedKeys.indexOf(this.$vnode.key) >= 0
    }

    if (root.mode == 'inline') {
      opened = root.defaultOpenKeys.indexOf(this.$vnode.key) >= 0
    }

    const props = {
      class: [
        "k-menu-submenu",
        {
          ["k-menu-submenu-active"]: this.active,
          ["k-menu-submenu-selected"]: selected,
          ["k-menu-submenu-opened"]: opened,
          ["k-menu-submenu-disabled"]: disabled
        }
      ],
      on: {
        mouseenter: () => {
          if (disabled) return;
          this.active = true
          if (root.mode == 'inline') return;
          this.opened = true;
          clearTimeout(this.timer)
        },
        mouseleave: () => {
          this.active = false
          if (root.mode == 'inline') return;
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.opened = false
          }, 300);
        }
      }
    }
    return (
      <li {...props}>
        <div class="k-menu-title" onClick={this.openChange}>{$slots.title}<Icon type="ios-arrow-down" class="k-menu-submenu-arrow" /></div>
        <Collapse name={root.mode == 'horizontal' ? 'dropdown' : 'k-collaplse-slide'} >
          <div class="k-menu-popup" v-show={opened}>
            <Menu>{$slots.default}</Menu>
          </div>
        </Collapse>
      </li>
    )
  },
  methods: {
    openChange() {

      if (this.Menu) {
        let root = getParent(this.Menu, 'Menu')
        let openKeys = root.defaultOpenKeys
        let key = this.$vnode.key
        let index = openKeys.indexOf(key)
        //accordion
        if (root.accordion) {
          let rootSub = getParent(this.SubMenu, 'SubMenu')
          console.log(rootSub)
          if (!rootSub._uid) {
            root.openChange(index >= 0 ? [] : [key])
            return;
          }
        }

        // console.log(openKeys, index)
        if (index >= 0) {
          openKeys.splice(index, 1)
        } else {
          openKeys.push(key)
        }
        root.openChange(openKeys)
      }
    },
    handleClick(options) {
      // console.log(this.Menu.defaultSelectedKeys)
      options.keyPath.unshift(this.$vnode.key)

      if (this.SubMenu) {
        this.SubMenu.handleClick(options)
        return;
      }
      if (this.Menu) {
        this.Menu.handleClick(options)
      }
    }
  }
};