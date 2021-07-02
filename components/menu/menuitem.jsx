import Icon from "../icon";
import Tooltip from '../tooltip'
import { isVnode, getChild } from '../_tool/utils'

export default {
  name: "MenuItem",
  props: {
    icon: String,
    title: String,
    disabled: Boolean,
    affixed: Boolean
  },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
    Dropdown: { default: null },
  },
  data() {
    return {
      active: false,
      currentAffixed: this.affixed,
    };
  },
  methods: {
    starClick(e) {
      if (!this.disabled) {
        e.stopPropagation();
        this.currentAffixed = !this.currentAffixed
        let item = this
        this.SubMenu.affixed(item, e)
      }
    }
  },

  mounted() {
    let { SubMenu, Menu } = this
    if (Menu && SubMenu) {
      let { selectedKeys } = Menu
      let key = this.$vnode.key || 'item_' + this._uid
      let selected = selectedKeys.indexOf(key) >= 0
      if (selected && selectedKeys.indexOf(SubMenu.$vnode.key) < 0) {
        Menu.selectedKeys.push(SubMenu.$vnode.key)
      }
    }
  },
  render() {

    let { icon, disabled, Menu, SubMenu, Dropdown, title } = this
    let key = this.$vnode.key || 'item_' + this._uid
    let selected = Menu.selectedKeys.indexOf(key) >= 0

    const item = this
    const preCls = Dropdown ? 'dropdown-menu' : 'menu';

    const props = {
      class: [`k-${preCls}-item`, {
        [`k-${preCls}-item-active`]: this.active,
        [`k-${preCls}-item-selected`]: selected && !Dropdown,
        [`k-${preCls}-item-disabled`]: disabled
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
            let key = this.$vnode.key || 'item_' + this._uid
            let options = {
              key,
              keyPath: [key],
              item,
              event: e
            }
            let parent = SubMenu || Menu
            if (parent) {
              parent.handleClick(options)
            }
          }
        },
      }
    }
    const showTooltip = !SubMenu && Menu.inlineCollapsed
    let child = title || getChild(this.$slots.default)
    let titleNode = child.length > 1 ? <span>{child}</span> : (isVnode(child[0]) ? child : <span>{child}</span>)
    return (
      <Tooltip placement="right">
        <li {...props}>
          {icon ? <Icon type={icon} class={`k-${preCls}-item-icon`} /> : null}
          {titleNode}
          {Menu.mode == 'vertical' && Menu.verticalAffixed && SubMenu ?
            <Icon onClick={this.starClick} class="k-menu-item-icon-affix" type={this.currentAffixed ? "star" : "star-outline"} /> : null}
        </li>
        {showTooltip ? <template slot="title">{this.$slots.default}</template> : null}
      </Tooltip>
    )
  },
};