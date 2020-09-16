import Collapse from '../_tool/collapse'
import Menu from './menu.jsx'
import { getParent } from './utils.js'
import Icon from '../icon'
const animateNames = {
  horizontal: 'dropdown',
  inline: 'k-collaplse-slide',
  vertical: 'k-menu-submenu-fade'
}

export default {
  name: "SubMenu",
  props: {
    disabled: Boolean
  },
  provide() {
    return {
      SubMenu: this,
      collectAffixItem: (context, type) => {
        const childs = this.affixChilds
        type === 'delete' ? childs.splice(childs.indexOf(context), 1) : childs.push(context)
      }
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
      left: null,
      minWidth: null,
      currentMode: null,
      affixChilds: []
    };
  },
  render() {
    const { $slots, disabled } = this

    let selected, root = getParent(this.Menu, 'Menu'), opened = this.opened;
    const { currentMode, theme, selectedKeys } = root
    if (selectedKeys) {
      // console.log(this.Menu.selectedKeys, 'submenu')
      selected = selectedKeys.indexOf(this.$vnode.key) >= 0
    }
    if (currentMode == 'inline') {
      opened = root.defaultOpenKeys.indexOf(this.$vnode.key) >= 0
    }
    // opened = true
    let mode = currentMode
    if (currentMode == 'horizontal') {
      this.currentMode = 'vertical'
      // this.left = null
    } else {
      this.currentMode = mode
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
          this.showPopupMenu(currentMode)
        },
        mouseleave: () => this.hidePopupMenu(currentMode)
      }
    }
    let groupProps = {
      class: "k-menu-submenu-title",
      on: {
        mouseenter: () => { this.showPopupMenu(currentMode) },
        click: e => this.openChange()
      }
    }
    // console.log(subProps)
    let aniName = currentMode == 'horizontal' && !this.SubMenu ? 'dropdown' : animateNames[this.currentMode]
    const hasRenderAffix = this.$parent == root && root.mode == 'vertical' && root.verticalAffixed
    return (
      <li {...props}>
        <div {...groupProps}>
          <span class="k-menu-submenu-inner">{$slots.title || this.title}</span>
          <Icon type={currentMode == 'vertical' ? 'ios-arrow-forward' : "ios-arrow-down"} class="k-menu-submenu-arrow" />
        </div>
        <Collapse name={aniName}>
          <div class="k-menu-popup" v-show={opened} style={{ left: `${this.left}px`, 'min-width': `${this.minWidth}px` }}>
            <Menu mode={this.currentMode} theme={theme}>{$slots.default}</Menu>
          </div>
        </Collapse>
        {this.renderAffix(hasRenderAffix, root, currentMode)}
      </li>
    )
  },
  methods: {
    hidePopupMenu(currentMode) {
      this.active = false
      if (currentMode == 'inline') return;
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.opened = false
      }, 300);
    },
    showPopupMenu(currentMode) {
      if (this.disabled) return;
      this.active = true
      if (currentMode == 'inline') return;
      let width = this.$el.offsetWidth
      this.minWidth = null
      this.left = null
      if (currentMode == 'vertical') {
        this.left = width
      } else if (this.currentMode == 'vertical') {
        this.left = !this.SubMenu ? null : width
        if (!this.SubMenu) {
          this.minWidth = width
        }
      }
      this.opened = true;
      clearTimeout(this.timer)
    },
    renderAffix(isRender, root, currentMode) {
      const itemClick = (item, e) => {
        if (!item.disabled) {
          // this.selected = true
          let key = item.$vnode.key

          let options = {
            key,
            keyPath: [key],
            item,
            event: e
          }
          let parent = this.SubMenu || this.Menu
          if (parent) {
            parent.handleClick(options)
          }
        }
      }
      const child = this.affixChilds.map(item => {
        return <li class={["k-menu-submenu-affix-item", { 'k-menu-submenu-affix-item-active': root.selectedKeys.indexOf(item.$vnode.key) >= 0 }]} key={item.$vnode.key}>
          <span class="k-menu-submenu-affix-item-text" onClick={e => itemClick(item, e)}>{item.$slots.default}</span>
        </li>
      })
      if (isRender) {
        const props = {
          class: "k-menu-submenu-affix",
          on: {
            mouseenter: e => {
              e.stopPropagation()
              this.hidePopupMenu(currentMode)
            }
          }
        }
        return <div {...props}>{child}</div>
      }
      return null
    },
    openChange() {
      if (this.Menu) {
        let root = getParent(this.Menu, 'Menu')
        if (root.currentMode != 'inline') return;
        let openKeys = root.defaultOpenKeys
        let key = this.$vnode.key
        let index = openKeys.indexOf(key)
        //accordion
        if (root.accordion) {
          let rootSub = getParent(this.SubMenu, 'SubMenu')
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
    closeSub() {
      this.opened = false
      if (this.SubMenu) this.SubMenu.closeSub()
    },
    handleClick(options) { //item click event

      options.keyPath.unshift(this.$vnode.key)
      let parent = this.SubMenu || this.Menu
      if (parent) {
        parent.handleClick(options)
      }

      let root = getParent(this.Menu, 'Menu')
      if (root.currentMode == 'horizontal' || root.currentMode == 'vertical') {
        this.closeSub()
      }
    }
  }
};