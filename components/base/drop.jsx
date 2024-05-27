import { getPosition } from '../_tool/utils'

import transfer from "../_tool/transfer";
import resize from "../_tool/resize";
import outsideclick from "../_tool/outsiteclick";

export default {
  name: 'Drop',
  directives: { transfer, resize, outsideclick },
  props: {
    transfer: Boolean,
    value: Boolean,
    className: [String, Array],
    width: Number,
    placement: String,
    trigger: { type: String, default: "click" },
    transitionName: { type: String, default: 'dropdown' },
    selection: { validator: v => true },
    updateKey: [String, Object, Array],
    offsetLeft: { type: Number, default: 0 }
  },

  watch: {
    updateKey() {
      this.$nextTick(e => {
        this.setPosition()
      })
    },
    rendered(value) {
      this.$emit('render')
    },
    value(value) {
      this.rendered = true
      this.visible = value
      this.$nextTick(e => {
        this.setPosition()
      })
    },
    placement(value) {
      this.currentPlacement = value
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      minWidth: 0,
      mousedownIn: false,
      transformOrigin: '',
      currentPlacement: this.placement,
      rendered: this.value === true,
      visible: this.value
    }
  },
  mounted() {
    this.$nextTick(() => this.setPosition())
    !this.$isServer && document.addEventListener('mousedown', this.onMouseDown)
  },
  beforeDestroy() {
    !this.$isServer && document.removeEventListener('mousedown', this.onMouseDown)
  },
  render() {
    const props = {
      key: this.$vnode.key,
      class: this.className,
      style: {
        left: `${this.left}px`,
        top: `${this.top}px`,
        width: `${this.width}px`,
        minWidth: `${this.minWidth}px`,
        transformOrigin: this.transformOrigin
      },
      attrs: {
        'k-placement': this.currentPlacement
      },
      on: {
        ...this.$listeners
      },
    }
    return this.rendered ? <transition name={this.transitionName}>
      <div {...props} v-show={this.visible}
        v-transfer={this.transfer}
        v-outsideclick={this.hide}
        v-resize={this.resize}>
        {this.$slots.default}
      </div>
    </transition> : null
  },
  methods: {
    showContextmenu(e) {
      let pickerHeight = this.$el.offsetHeight
      let pickerWidth = this.$el.offsetWidth
      let clientHeight = document.documentElement.clientHeight
      let clientWidth = document.documentElement.clientWidth

      let offsetTop = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      let offsetLeft = document.body.scrollLeft || document.documentElement.scrollLeft || window.scrollX;
      let left = e.clientX + offsetLeft;
      let top = e.clientY + offsetTop;
      let showInRight = clientWidth - e.clientX > pickerWidth
      let showInBottom = clientHeight - e.clientY > pickerHeight
      let transformOrigin = 'top center';

      if (!showInRight) {
        left -= pickerWidth
      }
      if (!showInBottom) {
        top -= pickerHeight
        transformOrigin = 'bottom center'
      }
      this.left = left
      this.top = top
      this.transformOrigin = transformOrigin
    },
    onMouseDown({ target }) {
      this.mousedownIn = this.visible && this.$el.contains(target)
    },
    setPosition(e) {
      if (this.trigger == 'contextmenu' || !this.rendered || !this.value) {
        return;
      }
      let { selection, transfer, placement } = this
      getPosition(selection, this.$el, transfer, placement, (top, left, origin, placement) => {
        this.top = top
        this.left = left + (placement.includes('right') ? this.offsetLeft : -this.offsetLeft)
        // this.minWidth = this.selection.offsetWidth
        this.transformOrigin = origin
        this.currentPlacement = placement
      })
    },
    hide(e) {
      let { target } = e
      e.stopPropagation()
      if (this.visible &&
        this.selection &&
        target.parentNode != null && target.parentNode.parentNode != null &&
        !this.selection.contains(target) &&
        !this.$el.contains(target) &&
        !this.mousedownIn
      ) {
        // this.visible = false
        this.$emit('hide', false)
      }
    },
    resize() {
      if (this.visible) {
        this.$emit('resize')
        this.setPosition()
      }
    }
  }
}