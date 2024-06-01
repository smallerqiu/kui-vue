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
    updateKey(o, v) {
      if (o != v) {
        this.$nextTick(e => {
          // this.setPosition()
        })
      }
    },
    rendered(value) {
      this.$emit('render')
    },
    value(value) {
      this.rendered = true
      this.visible = value
      if (value) {
        this.left = 0
        this.top = 0
        this.$nextTick(e => {
          this.setPosition()
        })
        // setTimeout(() => {
        //   this.setPosition()
        // }, 1000);
      }
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
    setPosition() {
      if (this.trigger == 'contextmenu' || !this.rendered || !this.value) {
        return;
      }
      let { selection, placement = 'bottom', offsetLeft } = this
      let picker = this.$el

      let top = 0, left = 0, offset = 3;

      let origin = [,]

      if (picker && selection) {

        let selectionRect = selection.getBoundingClientRect();
        let pickerHeight = picker.offsetHeight
        let pickerWidth = picker.offsetWidth
        let clientHeight = document.documentElement.clientHeight
        let clientWidth = document.documentElement.clientWidth
        let scrollTop = document.documentElement.scrollTop
        let scrollLeft = document.documentElement.scrollLeft

        //是否有足够的空间
        //底部
        let enoughBottom = clientHeight - selectionRect.bottom > pickerHeight
        let enoughBottomC = clientHeight - selectionRect.top > pickerHeight
        //上面
        let enoughTop = selectionRect.top > pickerHeight
        let enoughTopC = selectionRect.bottom > pickerHeight
        //左边
        let enoughLeft = selectionRect.left > pickerWidth
        let enoughLeftC = clientWidth - selectionRect.left > pickerWidth
        //右边
        let enoughRight = clientWidth - selectionRect.right > pickerWidth
        let enoughRightC = selectionRect.right > pickerWidth

        // console.log(showInRight, selectionRect.left > pickerWidth, selectionRect.right, pickerWidth)
        console.log(selectionRect.right, pickerWidth, placement, ', bottom:', enoughBottom, 'top:', enoughTop, 'left:', enoughLeft, 'leftC:', enoughLeftC, 'right:', enoughRight, 'rightC:', enoughRightC)
        // console.log(placement, 'showInTop:', showInTop, 'showInBottom:', showInBottom, clientHeight, scrollTop, selectionRect.top, pickerHeight)

        //reset placement
        if (placement.startsWith('top')) {
          if (!enoughTop) {
            placement = placement.replace('top', 'bottom')
          }

        }
        if (placement.startsWith('right')) {
          if (!enoughRight) {
            placement = placement.replace('right', 'left')
          }
        }
        if (placement.startsWith('bottom')) {
          if (!enoughBottom) {
            placement = placement.replace('bottom', 'top')
          }

        }
        if (placement.startsWith('left')) {
          if (!enoughLeft) {
            placement = placement.replace('left', 'right')
          }
        }
        if (!enoughLeft) {
          if (placement == 'bottom') {
            placement = "bottom-left"
          }
          if (placement == 'top') {
            placement = "top-left"
          }

        }
        if (!enoughRight) {
          if (placement == 'bottom') {
            placement = "bottom-right"
          }
        }


        // if (placement.includes('-')) {

        // if (placement.endsWith('top') && !enoughBottomC) {
        //   placement = placement.replace('top', 'bottom')
        // } else if (placement.endsWith('right') && !enoughRightC) {
        //   placement = placement.replace('right', 'left')
        // } else if (placement.endsWith('bottom') && !enoughTopC) {
        //   placement = placement.replace('bottom', 'top')
        // } else if (placement.endsWith('left') && !enoughLeftC) {
        //   placement = placement.replace('left', 'right')
        // }
        // }


        // set postion
        if (!placement.includes('-')) {
          //equal
          if (placement == 'top') {
            top = selectionRect.top - pickerHeight - offset + scrollTop
            left = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft
            origin = ['center', 'bottom']
          }
          if (placement == 'bottom') {
            top = selectionRect.bottom + offset + scrollTop
            left = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft
            origin = ['center', 'top']
          }
          if (placement == 'left') {
            left = selectionRect.left - pickerWidth - offset + scrollLeft
            top = selectionRect.top + (selectionRect.height - pickerHeight) / 2 + scrollTop
            origin = ['right', 'center']
          }
          if (placement == 'right') {
            left = selectionRect.right + offset + scrollLeft
            top = selectionRect.top + (selectionRect.height - pickerHeight) / 2 + scrollTop
            origin = ['left', 'center']
          }
        } else {
          //start
          if (placement.startsWith('bottom')) {
            top = selectionRect.bottom + offset + scrollTop
            origin.splice(1, 'top')
          }
          if (placement.startsWith('right')) {
            left = selectionRect.right + offset + scrollLeft
            origin.splice(0, 'left')
          }
          if (placement.startsWith('top')) {
            top = selectionRect.top - pickerHeight - offset + scrollTop
            origin.splice(1, 'bottom')
          }
          if (placement.startsWith('left')) {
            left = selectionRect.left - pickerWidth - offset + scrollLeft
            origin.splice(0, 'right')
          }
          //end 
          if (placement.endsWith('left')) {
            left = selectionRect.left + scrollLeft
            origin.splice(0, 'left')
          }
          if (placement.endsWith('right')) {
            left = selectionRect.right - pickerWidth + scrollLeft
            origin.splice(0, 'right')
          }

          if (placement.endsWith('bottom')) {
            top = selectionRect.bottom - pickerHeight + scrollTop
            origin.splice(1, 'bottom')
          }
          if (placement.endsWith('top')) {
            top = selectionRect.top + scrollTop
            origin.splice(1, 'top')
          }
        }
      }

      this.top = top
      this.left = left + (placement.includes('right') ? offsetLeft : -offsetLeft)

      this.transformOrigin = origin.join(' ')
      this.currentPlacement = placement

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
        // this.setPosition()
      }
    }
  }
}