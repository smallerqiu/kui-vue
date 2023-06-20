import Icon from "../icon";
import { getTranstionProp } from '../base/transition'
import { ChevronUp } from 'kui-icons'
export default {
  name: 'Panel',
  props: {
    title: String,
    actived: Boolean
  },
  inject: {
    Collapse: { default: null }
  },
  watch: {
    actived(value) {
      this.rendered = true
      this.$nextTick(() => this.visible = value)
    }
  },
  data() {
    return {
      visible: this.actived,
      rendered: this.actived == true
    }
  },
  methods: {
    handelClick() {
      if (this.Collapse) {
        this.Collapse.change(this.$vnode.key)
      }
    },
    renderPanel() {
      const aniprop = getTranstionProp('k-collaplse-slide')
      return this.rendered ? <transition {...aniprop}>
        <div class="k-collapse-content" v-show={this.visible}>
          <div class="k-collapse-content-box">
            {this.$slots.default}
          </div>
        </div>
      </transition> : null
    }
  },
  render() {
    // console.log(this.actived)
    // let actived = false
    let { Collapse, actived, $vnode, $slots } = this
    // if (Collapse) {
    //   actived = Collapse.currentValue.indexOf($vnode.key) >= 0
    // }
    const classes = ['k-collapse-item', {
      ['k-collapse-item-active']: actived
    }]
    return (
      <div class={classes}>
        <div class="k-collapse-header" onClick={this.handelClick}>
          <Icon type={ChevronUp} class="k-collapse-arrow" />
          <span class="k-collapse-title">{this.title}</span>
          {$slots.extra ? <span class="k-collapse-extra">{$slots.extra}</span> : null}
        </div>
        {this.renderPanel()}
      </div >
    )
  }
}