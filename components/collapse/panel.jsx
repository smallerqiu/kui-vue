import Icon from "../icon";
import { getTranstionProp } from '../_tool/transition'
export default {
  name: 'Panel',
  props: {
    title: String,
    name: { type: String, required: true },
  },
  inject: {
    Collapse: { default: null }
  },
  methods: {
    handelClick() {
      if (this.Collapse) {
        this.Collapse.change(this.name)
      }
    }
  },
  render() {
    let active = false
    let { Collapse, name } = this
    if (Collapse) {
      active = Collapse.currentValue.indexOf(name) >= 0
    }
    const classes = ['k-collapse-item', {
      ['k-collapse-item-active']: active
    }]
    const aniprop = getTranstionProp('k-collaplse-slide')
    return (
      <div class={classes}>
        <div class="k-collapse-header" onClick={this.handelClick}>
          <Icon type="ios-arrow-forward" />
          <span class="k-collapse-title">{this.title}</span>
        </div>
        <transition {...aniprop}>
          <div class="k-collapse-content" v-show={active}>
            <div class="k-collapse-content-box">
              {this.$slots.default}
            </div>
          </div>
        </transition>
      </div >
    )
  }
} 