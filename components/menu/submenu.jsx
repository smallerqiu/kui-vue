import Collapse from '../base/collapse'
import BasePop from '../base/pop'
import CMenu from './menu.jsx'
import { getChild, isVnode } from '../_tool/utils'
import Icon from '../icon'
import cloneVNode from '../_tool/clone'

export default {
  name: "SubMenu",
  props: {
    disabled: Boolean,
    title: String,
    icon: String,
  },
  provide() {
    return {
      SubMenu: this,
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
      rendered: false,
      affixedKeys: []
    };
  },
  mounted() {
    let { SubMenu, Menu } = this
    if (Menu) {
      let { selectedKeys, defaultOpenKeys, inlineCollapsed, verticalAffixed } = Menu
      let key = this.$vnode.key || 'sub_' + this._uid
      const opened = defaultOpenKeys.indexOf(key) >= 0

      if (opened) {
        this.rendered = true
      }
      if (SubMenu) {
        let selected = selectedKeys.indexOf(key) >= 0
        if (selected && selectedKeys.indexOf(SubMenu.$vnode.key) < 0) {
          Menu.selectedKeys.push(SubMenu.$vnode.key)
        }
      }
      if (!inlineCollapsed) {
        this.opened = opened
      }
      if (verticalAffixed) {
        this.affixedKeys = getChild(this.$slots.default)
          .map(child => cloneVNode(child))
          .filter(({ data }) => data.props.affixed !== false && data.props.affixed !== undefined)
          .map(c => c.key)
      }
    }
  },
  render() {
    let { $slots, disabled, Dropdown, opened, Menu, SubMenu, icon, rendered } = this
    let key = this.$vnode.key || 'sub_' + this._uid
    const { currentMode, theme, selectedKeys, verticalAffixed, inlineCollapsed,
      mode, defaultOpenKeys } = Menu
    let selected = selectedKeys.indexOf(key) >= 0

    const showInline = currentMode == 'inline'

    if (showInline) {
      opened = defaultOpenKeys.indexOf(key) >= 0
      if (opened) rendered = true
    }
    let types = currentMode == 'horizontal' || inlineCollapsed ? 'vertical' : currentMode

    const preCls = Dropdown ? 'dropdown-menu-submenu' : 'menu-submenu';

    let titleProps = {
      class: `k-${preCls}-title`,
      on: {
        click: () => this.openChange(),
        mouseenter: () => this.showPopupMenu(),
        mouseleave: () => this.hidePopupMenu()
      }
    }

    let title = this.title || $slots.title
    const titleNode = <div {...titleProps}>
      <span class={`k-${preCls}-inner`}>
        {icon ? <Icon type={icon} /> : null}
        {isVnode(title) ? title : <span>{title}</span>}
      </span>
      <Icon type={(showInline && !inlineCollapsed) || (currentMode == 'horizontal' && SubMenu == null) ?
        "chevron-down" : 'chevron-forward'} class={`k-${preCls}-arrow`} />
    </div>

    const hasRenderAffix = !SubMenu && mode == 'vertical' && verticalAffixed

    const popupProps = {
      slot: 'content',
      class: [`k-${preCls}-popup`, { [`k-${preCls}-affix-popup`]: hasRenderAffix }],
      style: {
        'min-width': `${this.minWidth}px`,
        'margin-left': theme == 'dark' && !SubMenu && mode == "horizontal" ? '-16px' : null
      },
      on: {
        mouseenter: () => {
          clearTimeout(this.timer);
          this.active = true;
          if (!showInline)
            this.opened = true
        },
        mouseleave: () => {
          this.hidePopupMenu()
        },
      }
    }

    if ((showInline && !inlineCollapsed) ||
      (!showInline && SubMenu) ||
      (showInline && inlineCollapsed && SubMenu)
      || Dropdown) {
      popupProps.directives = [{ name: 'show', value: opened }]
    } else {
      // popupProps.style.minWidth = this.minWidth + 'px'
    }
    const childNode = <div {...popupProps}><CMenu mode={types} theme={theme}>{$slots.default}</CMenu></div>

    let popMenuNode = null
    if (((!showInline || inlineCollapsed) && !SubMenu && !Dropdown)) {
      const popProps = {
        props: {
          showPlacementArrow: false,
          preCls: preCls + '-popup',
          transfer: !SubMenu,
          placement: currentMode == 'horizontal' ? 'bottom-left' : 'right-top',
          value: opened,
        },
        on: {
          input: (opened) => {
            if (currentMode == 'horizontal')
              this.minWidth = this.$el.offsetWidth
          }
        }
      }
      popMenuNode = <BasePop {...popProps}>{[titleNode, childNode]}</BasePop>
    } else {
      popMenuNode = [titleNode, rendered ? <Collapse collapse={showInline && !inlineCollapsed}
        name={'k-' + preCls + (showInline && !inlineCollapsed && !Dropdown ? '-slide' : '-fade')}>{childNode}</Collapse> : null]
    }
    const classes = [`k-${preCls}`, {
      [`k-${preCls}-active`]: this.active,
      [`k-${preCls}-selected`]: selected && !Dropdown,
      [`k-${preCls}-opened`]: opened,
      [`k-${preCls}-disabled`]: disabled
    }]

    const affixNode = hasRenderAffix ? this.renderAffix() : null

    return (<li class={classes}>{popMenuNode}{affixNode}</li>)
  },
  methods: {
    hidePopupMenu() {
      if (this.disabled) return;
      this.active = false
      let { Menu } = this
      let { currentMode, inlineCollapsed } = Menu
      if (currentMode != 'inline' || inlineCollapsed) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.opened = false

          let openKeys = [].concat(Menu.defaultOpenKeys)
          let key = this.$vnode.key || 'sub_' + this._uid,
            index = openKeys.indexOf(key)
          index > -1 && openKeys.splice(index, 1)
          Menu.openChange(openKeys)
        }, 300);
      }
    },
    showPopupMenu() {
      if (this.disabled) return;
      clearTimeout(this.timer)
      this.active = true
      let { Menu } = this
      let { currentMode, inlineCollapsed } = Menu
      if (currentMode != 'inline' || inlineCollapsed) {
        this.rendered = true
        this.$nextTick(() => {
          //展开子集
          this.opened = true
          let openKeys = [].concat(Menu.defaultOpenKeys)
          let key = this.$vnode.key || 'sub_' + this._uid
          openKeys.indexOf(key) < 0 && openKeys.push(key)
          Menu.openChange(openKeys)
        })
      }
    },
    affixed(item, e) {
      let parent = this.Menu

      let key = item.$vnode.key
      if (parent) {
        let options = {
          key,
          keyPath: [key],
          item,
          event: e
        }
        parent.$emit('affixed', options)

        if (item.currentAffixed) {
          this.affixedKeys.push(key)
        } else {
          let index = this.affixedKeys.indexOf(key)
          this.affixedKeys.splice(index, 1)
        }
      }
    },
    affixItemClick(item, e) {
      let disabled = item.data.props.disabled
      if (disabled !== false) {
        let parent = this.SubMenu || this.Menu
        if (parent) {
          let key = item.data.key
          let options = {
            key,
            keyPath: [key],
            item,
            event: e
          }
          parent.handleClick(options)
        }
      }
    },
    renderAffix() {
      let { selectedKeys } = this.Menu
      const childs = getChild(this.$slots.default)
        .map(child => cloneVNode(child))
        .filter(child => this.affixedKeys.indexOf(child.key) > -1)
      const childNode = childs.map(item => {
        return <li class={["k-menu-submenu-affix-item", { 'k-menu-submenu-affix-item-active': selectedKeys.indexOf(item.key) >= 0 }]} key={item.key}>
          <span class="k-menu-submenu-affix-item-text" onClick={e => this.affixItemClick(item, e)}>{item.componentOptions.children}</span>
        </li>
      })
      return <ul class="k-menu-submenu-affix">{childNode}</ul>
    },
    openChange() {
      if (this.Menu) {
        let { currentMode, defaultOpenKeys, accordion, inlineCollapsed } = this.Menu
        if (currentMode != 'inline' || inlineCollapsed) return;
        let openKeys = [].concat(defaultOpenKeys)
        let key = this.$vnode.key || 'sub_' + this._uid
        let index = openKeys.indexOf(key)

        //accordion
        if (accordion && !this.SubMenu) {
          openKeys = index >= 0 ? [] : [key]
        } else {
          if (index >= 0) {
            openKeys.splice(index, 1)
          } else {
            openKeys.push(key)
          }
        }
        this.rendered = true
        this.$nextTick(() => {
          this.opened = openKeys.indexOf(key) > -1
          this.Menu.openChange(openKeys)
        })
      }
    },
    handleClick(options) { //item click event
      let key = this.$vnode.key || 'sub_' + this._uid
      options.keyPath.unshift(key)
      let parent = this.SubMenu || this.Menu
      if (parent) {
        parent.handleClick(options)
      }
      let { currentMode, inlineCollapsed } = this.Menu
      if (currentMode != 'inline' || inlineCollapsed) {
        this.opened = false
        this.Menu.openChange([])
      }
    }
  }
};