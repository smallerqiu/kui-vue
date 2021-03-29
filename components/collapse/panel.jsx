import Icon from "../icon";
import { getTranstionProp } from '../_tool/transition'
export default {
  name: 'Panel',
  props: {
    title: String,
  },
  inject: {
    Collapse: { default: null }
  },
  methods: {
    handelClick() {
      if (this.Collapse) {
        this.Collapse.change(this.$vnode.key)
      }
    }
  },
  render() {
    let active = false
    let { Collapse, $vnode ,$slots} = this
    if (Collapse) {
      active = Collapse.currentValue.indexOf($vnode.key) >= 0
    }
    const classes = ['k-collapse-item', {
      ['k-collapse-item-active']: active
    }]
    const aniprop = getTranstionProp('k-collaplse-slide')
    return (
      <div class={classes}>
        <div class="k-collapse-header" onClick={this.handelClick}>
          <Icon type="chevron-forward" class="k-collapse-arrow" />
          <span class="k-collapse-title">{this.title}</span>
          {$slots.extra ? <span class="k-collapse-extra">{$slots.extra}</span> : null}
        </div>
        <transition {...aniprop}>
          <div class="k-collapse-content" v-show={active}>
            <div class="k-collapse-content-box">
              {$slots.default}
            </div>
          </div>
        </transition>
      </div >
    )
  }
}