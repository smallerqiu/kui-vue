import Icon from "../icon";
import Tooltip from '../tooltip'

export default {
  name: "MenuItem",
  props: {
    icon: String,
    disabled: Boolean,
    affixed: Boolean
  },
  // model: {
  //   prop: 'affixed',
  // },
  inject: {
    Menu: { default: null },
    SubMenu: { default: null },
    Dropdown: { default: null },
    collectAffixItem: { default: () => { } }
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
        this.collectAffixItem(this, this.currentAffixed)
      }
    }
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

    let { icon, disabled, Menu, SubMenu, Dropdown } = this
    let selected = Menu.selectedKeys.indexOf(this.$vnode.key) >= 0

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
            this.selected = true
            let key = this.$vnode.key

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
    const showTooltip = this.$parent == Menu && Menu.inlineCollapsed
    return (
      <Tooltip placement="right">
        <li {...props}>
          {icon ? <Icon type={icon} class={`k-${preCls}-item-icon`} /> : null}
          {this.$slots.default}
          {Menu.mode == 'vertical' && Menu.verticalAffixed && SubMenu ? <Icon onClick={this.starClick} class="k-menu-item-icon-affix" type={this.currentAffixed ? "star" : "star-outline"} /> : null}
        </li>
        {showTooltip ? <template slot="title">{this.$slots.default}</template> : null}
      </Tooltip>
    )
  },
};