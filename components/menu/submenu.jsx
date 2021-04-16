import Collapse from '../_tool/collapse'
import BasePop from '../base/pop'
import Menu from './menu.jsx'
import { getParent } from './utils.js'
import { getChild } from '../_tool/utils'
import Icon from '../icon'
const animateNames = {
  horizontal: 'dropdown',
  inline: 'k-collaplse-slide',
  vertical: 'k-menu-submenu-fade'
}

export default {
  name: "SubMenu",
  props: {
    disabled: Boolean,
    title: String,
  },
  provide() {
    return {
      SubMenu: this,
      collectAffixItem: (context, affixed) => {
        context.$options.propsData.affixed = affixed
        let key = context.$vnode.key
        let options = {
          key,
          keyPath: [key],
          item: context
        }
        let root = getParent(this.Menu, 'Menu')
        if (root) {
          root.$emit('affixed', options, affixed)
        }
        this.$forceUpdate()
      }
    }
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
    Dropdown: { default: null },
  },
  data() {
    return {
      active: false,
      opened: false,
      left: null,
      minWidth: null,
      currentMode: null,
    };
  },
  mounted() {
    let { SubMenu, Menu } = this
    if (Menu && SubMenu) {
      let { selectedKeys } = Menu
      let selected = selectedKeys.indexOf(this.$vnode.key) >= 0
      if (selected && selectedKeys.indexOf(SubMenu.$vnode.key) < 0) {
        Menu.selectedKeys.push(SubMenu.$vnode.key)
      }
    }
  },
  render() {
    let { $slots, disabled, Dropdown, opened } = this

    let root = this.Menu;

    const { currentMode, theme, selectedKeys } = root

    let selected = selectedKeys.indexOf(this.$vnode.key) >= 0

    if (currentMode == 'inline') {
      opened = root.defaultOpenKeys.indexOf(this.$vnode.key) >= 0
    }
    // opened = true
    let mode = currentMode
    if (currentMode == 'horizontal') {
      this.currentMode = 'vertical'
    } else {
      this.currentMode = mode
    }

    const preCls = Dropdown ? 'dropdown-menu-submenu' : 'menu-submenu';

    let aniName = currentMode == 'horizontal' && !this.SubMenu ? 'dropdown' : animateNames[this.currentMode];

    const hasRenderAffix = this.$parent == root && root.mode == 'vertical' && root.verticalAffixed
    const popupProps = {
      slot: 'content',
      class: `k-${preCls}-popup`,
      style: { 'min-width': `${this.minWidth}px`, 'margin-left': root.theme == 'dark' && this.$parent == root && root.mode == "horizontal" ? '-16px' : null },
      on: {
        mouseenter: () => {
          clearTimeout(this.timer);
          this.opened = true
          this.active = true;
        },
        mouseleave: () => {
          this.hidePopupMenu(currentMode)
        }
      }
    }

    let titleProps = {
      class: `k-${preCls}-title`,
      on: {
        // mouseenter: () => { this.showPopupMenu(currentMode) },
        // mouseleave: () => this.hidePopupMenu(currentMode),
        click: e => this.openChange()
      }
    }
    if ((currentMode != 'inline' && this.SubMenu != null) || Dropdown) {
      titleProps.on.mouseenter = e => this.showPopupMenu(currentMode)
      titleProps.on.mouseleave = e => this.hidePopupMenu(currentMode)
    }
    const titleNode = <div {...titleProps}>
      <span class={`k-${preCls}-inner`}>{$slots.title || this.title}</span>
      <Icon type={currentMode == 'inline' || (currentMode == 'horizontal' && this.SubMenu == null) ? "chevron-down" : 'chevron-forward'} class={`k-${preCls}-arrow`} />
    </div>
    if (currentMode == 'inline' || this.SubMenu != null || Dropdown) {
      popupProps.directives = [{ name: 'show', value: opened }]
    } else {
      // popupProps.style.minWidth = this.minWidth + 'px'
    }
    const childNode = <div {...popupProps}>
      <Menu mode={this.currentMode} theme={theme}>{$slots.default}</Menu>
    </div>
    let vnodes = null
    if (currentMode != 'inline' && this.SubMenu == null && !Dropdown) {
      const popProps = {
        props: {
          showPlacementArrow: false,
          preCls: preCls + '-popup',
          transfer: true,
          placement: currentMode == 'horizontal' ? 'bottom-left' : 'right-top',
          value: opened,
        },
        on: {
          input: e => {
            if (currentMode == 'horizontal')
              this.minWidth = this.$el.offsetWidth
          }
        }
        // class: props.class
      }
      vnodes = <BasePop {...popProps}>{[titleNode, childNode]}</BasePop>
    } else {
      vnodes = [titleNode, <Collapse name={aniName}>{childNode}</Collapse>]
    }

    const classes = [
      `k-${preCls}`,
      {
        [`k-${preCls}-active`]: this.active,
        [`k-${preCls}-selected`]: selected && !Dropdown,
        [`k-${preCls}-opened`]: opened,
        [`k-${preCls}-disabled`]: disabled
      }
    ]
    const affixNode = hasRenderAffix ? this.renderAffix(root) : null
    return (
      <li class={classes}>
        {vnodes}
        {affixNode}
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
      clearTimeout(this.timer)
      if (this.disabled) return;
      this.active = true
      if (currentMode == 'inline') return;
      // let width = this.$el.offsetWidth
      // this.minWidth = null
      // this.left = null
      // if (currentMode == 'vertical') {
      //   this.left = width
      // } else if (this.currentMode == 'vertical') {
      //   this.left = !this.SubMenu ? null : width
      //   if (!this.SubMenu) {
      //     this.minWidth = width
      //   }
      // }
      this.opened = true;
    },

    renderAffix(root) {

      const childs = getChild(this.$slots.default)
      const itemClick = (item, e) => {
        let disabled = item.componentOptions.propsData.disabled
        if (disabled == undefined) {
          // this.selected = true
          let key = item.data.key

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
      const child = childs.map(item => {
        let affixed = item.componentOptions.propsData.affixed
        let vnode = item.componentOptions.children
        let key = item.data.key
        if (affixed !== undefined && affixed !== false) {
          return <li class={["k-menu-submenu-affix-item", { 'k-menu-submenu-affix-item-active': root.selectedKeys.indexOf(key) >= 0 }]} key={key}>
            <span class="k-menu-submenu-affix-item-text" onClick={e => itemClick(item, e)}>{vnode}</span>
          </li>
        }
      })
      // const child = this.affixChilds.map(item => {
      //   return <li class={["k-menu-submenu-affix-item", { 'k-menu-submenu-affix-item-active': root.selectedKeys.indexOf(item.$vnode.key) >= 0 }]} key={item.$vnode.key}>
      //     <span class="k-menu-submenu-affix-item-text" onClick={e => itemClick(item, e)}>{item.$slots.default}</span>
      //   </li>
      // })
      return <div class="k-menu-submenu-affix">{child}</div>
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