import { getPosition } from '../_tool/utils'

import transfer from "../_tool/transfer";
import Resize from "../_tool/resize";
import outsideclick from "../_tool/outsiteclick";

export default {
  name: 'Drop',
  directives: { transfer, Resize, outsideclick },
  props: {
    transfer: Boolean,
    show: Boolean,
    className: [String, Array],
    width: Number,
    placement: String,
    trigger: { type: String, default: "click" },
    transitionName: { type: String, default: 'dropdown' }
  },

  watch: {
    show(value) {
      if (value) {
        this.$nextTick(e => this.setPosition())
      }
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      mousedownIn: false,
      transformOrigin: '',
      _placement: this.placement,
      selection: null
    }
  },
  created() {
    this.selection = this.$parent.$el
  },
  mounted() {
    this.$nextTick(e => this.setPosition())
    document.addEventListener('mousedown', this.onMouseDown)
  },
  beforeDestory() {
    document.removeEventListener('mousedown', this.onMouseDown)
  },
  render() {
    const props = {
      class: this.className,
      // ref: 'overlay',
      style: {
        left: `${this.left}px`,
        top: `${this.top}px`,
        width: `${this.width}px`,
        // transformOrigin: this.placement == 'top' ? 'center bottom' : ''
        transformOrigin: this.transformOrigin
      },
      attrs: {
        'k-placement': this._placement
        // ...this.$props.attrs
      },
      on: {
        // ...this.$props.on,
        ...this.$listeners
      }
    }
    return <transition name={this.transitionName}>
      <div {...props} v-show={this.show} v-transfer={this.transfer} v-outsideclick={this.hide} v-resize={this.resize}>{this.$slots.default}</div>
    </transition>
  },
  methods: {
    baseContextmenu(e) {
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
      if (this.show) {
        this.$el.style.left = left + 'px'
        this.$el.style.top = top + 'px'
      }
      this.left = left
      this.top = top
      this.transformOrigin = transformOrigin
    },
    onMouseDown({ target }) {
      this.mousedownIn = this.show && this.$el.contains(target)
    },
    setPosition(e) {
      if (this.trigger == 'contextmenu') {
        return;
      }
      let { selection, transfer } = this
      getPosition(selection, this.$el, transfer, this.placement, (top, left, origin, placement) => {
        this.top = top
        this.left = left
        this.transformOrigin = origin
        this._placement = placement
      })
    },
    hide(e) {
      let { target } = e
      e.stopPropagation()
      // console.log(this._show, this.selection.contains(target), this.$el.contains(target))
      if (this.show &&
        !this.selection.contains(target) &&
        !this.$el.contains(target) &&
        !this.mousedownIn
      ) {
        this.$emit('hide')
        this.$emit('input', false)
      }
    },
    resize() {
      if (this.show) {
        this.$emit('resize')
        this.setPosition()
      }
    }
  }
}