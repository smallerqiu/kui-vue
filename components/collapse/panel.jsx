import Icon from "../icon";
import { getTransitionProp } from '../base/transition'
import { ChevronUp } from 'kui-icons'
import { withInstall } from '../utils/vue'

const Panel = {
  name: 'Panel',
  props: {
    title: String,
    active: Boolean
  },
  inject: {
    Collapse: { default: null }
  },
  watch: {
    active(value) {
      this.rendered = true
      this.$nextTick(() => this.visible = value)
    }
  },
  data() {
    return {
      visible: this.active,
      rendered: this.active == true
    }
  },
  methods: {
    handelClick() {
      if (this.Collapse) {
        this.Collapse.change(this.$vnode.key)
      }
    },
    renderPanel() {
      const props = getTransitionProp('k-collapse-slide')
      return this.rendered ? <transition {...props}>
        <div class="k-collapse-content" v-show={this.visible}>
          <div class="k-collapse-content-box">
            {this.$slots.default}
          </div>
        </div>
      </transition> : null
    }
  },
  render() {
    let { active, $slots } = this
    const classes = ['k-collapse-item', {
      ['k-collapse-item-active']: active
    }]
    return (
      <div class={classes}>
        <div class="k-collapse-header" onClick={this.handelClick}>
          <Icon type={ChevronUp} class="k-collapse-arrow" />
          <span class="k-collapse-title">{this.title}</span>
          {$slots.extra ? <span class="k-collapse-extra">{$slots.extra}</span> : null}
        </div>
        {this.renderPanel()}
      </div>
    )
  }
}

export default withInstall(Panel)