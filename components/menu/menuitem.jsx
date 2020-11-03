import Icon from "../icon";
import { getParent } from './utils.js'
import Tooltip from '../tooltip'
// import PopBase from '../base/pop'
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
    collectAffixItem: { default: () => { } }
  },
  data() {
    return {
      active: false,
      selected: false,
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
  render() {

    const { icon, disabled, Menu, SubMenu } = this
    let selected, root = {}, isDropdown;
    if (Menu) {
      root = getParent(Menu, 'Menu')
      // console.log(root.mode, root.selectedKeys, 'item')
      selected = root.selectedKeys.indexOf(this.$vnode.key) >= 0
      this.selected = selected
      isDropdown = root.$options.propsData.parentName == 'dropdown'
    }
    const item = this
    const preCls = isDropdown ? 'dropdown-menu' : 'menu';

    const props = {
      class: [`k-${preCls}-item`, {
        [`k-${preCls}-item-active`]: this.active,
        [`k-${preCls}-item-selected`]: selected && !isDropdown,
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
    const showTooltip = this.$parent == root && root.inlineCollapsed
    return (
      <Tooltip placement="right">
        <li {...props}>
          {icon ? <Icon type={icon} class={`k-${preCls}-item-icon`} /> : null}
          {this.$slots.default}
          {root.mode == 'vertical' && root.verticalAffixed && SubMenu ? <Icon onClick={this.starClick} class="k-menu-item-icon-affix" type={this.currentAffixed ? "ios-star" : "ios-star-outline"} /> : null}
        </li>
        {showTooltip ? <template slot="title">{this.$slots.default}</template> : null}
      </Tooltip>
    )
  },
};