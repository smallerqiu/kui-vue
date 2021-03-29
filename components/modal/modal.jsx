import Icon from '../icon'
import Button from '../button'
import transfer from "../_tool/transfer";
import { measureScrollBar, getOffset } from '../_tool/utils'

let cacheBodyOverflow = {};


export default {
  directives: { transfer },
  props: {
    value: Boolean,
    title: String,
    okText: { type: String, default: '确定' },
    cancelText: { type: String, default: '取消' },
    top: Number,
    width: Number,
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    isMax: Boolean,
    isCenter: Boolean,
    canMove: Boolean,
    loading: Boolean,
    footer: String
    // mode: { type: String, default: 'modal' }
  },
  data() {
    return {
      init: false,
      show: this.value,
      showInner: this.value,
      left: '',
      currentTop: this.top,
      isMouseDown: false,
      mousedownIn: false,
      startPos: { x: 0, y: 0 },
      showPoint: { x: 0, y: 0 }
    }
  },
  watch: {
    value(value) {
      this.updateProp(value)
    }
  },
  updated() {
    if (this.show) {
      this.setPos()
    }
  },

  methods: {
    updateProp(visible) {
      if (visible) {
        this.init = true
        this.$nextTick(e => {
          this.show = visible
          this.showInner = visible
        })
      } else {
        this.show = false
        setTimeout(() => {
          this.showInner = false
        }, 300);
      }
      this.resetBodyStyle(visible)
    },
    resetBodyStyle(opened) {
      if (!this.show && !cacheBodyOverflow.hasOwnProperty('overflow')) {
        cacheBodyOverflow = {
          width: document.body.width,
          overflow: document.body.overflow,
          overflowX: document.body.overflowX,
          overflowY: document.body.overflowY,
        }
      }
      if (opened) {
        let barWidth = measureScrollBar(true)
        if (barWidth) {
          document.body.style.width = `calc(100% - ${barWidth}px)`
          document.body.style.overflow = `hidden`
        }
      } else {
        setTimeout(() => {
          Object.keys(cacheBodyOverflow).forEach(key => {
            document.body.style[key] = cacheBodyOverflow[key] || ''
            delete cacheBodyOverflow[key]
          })
        }, 300)
      }
    },
    setPos() {
      if (this.show) {
        let { showPoint: { x, y } } = this
        // let { x, y } = showPoint
        let { left, top } = getOffset(this.$refs.modal)
        this.$refs.modal.style['transform-origin'] = `${x - left}px ${y - top}px`
      }
    },
    ok() {
      this.$emit('ok')
    },
    cancel() {
      this.close()
      this.$emit('cancel')
    },
    close() {
      this.$emit('input', false)
      this.$emit('close')
    },
    clickMaskToClose(e) {
      // console.log(this.mousedownIn)
      if (!this.loading && this.maskClosable && !this.$refs.modal.contains(e.target) && !this.mousedownIn) {
        this.close()
      }
    },
    mousemove(e) {
      if (this.isMouseDown && this.canMove) {
        let { x, y } = this.startPos
        this.left += e.clientX - x
        this.currentTop = this.currentTop || 100
        this.currentTop += e.clientY - y
        this.startPos = { x: e.clientX, y: e.clientY }
        this.setPos()
      }
    },
    mouseup(e) {
      this.isMouseDown = false
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    mousedown(e) {
      if (!this.show) {
        this.showPoint = { x: e.clientX, y: e.clientY }
      }
      if (e.button == 0 && this.canMove === true) {
        this.isMouseDown = true
        this.startPos = { x: e.clientX, y: e.clientY }
        this.mousemove(e)
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }

      this.mousedownIn = this.show && this.$refs.modal && this.$refs.modal.contains(e.target)
    }
  },
  beforDestory() {
    document.removeEventListener('mousedown', this.mousedown)
    this.resetBodyStyle(false)
  },

  mounted() {
    document.addEventListener('mousedown', this.mousedown)
    if (this.value) this.init = true
  },
  render() {
    let { $slots, show, showInner, canMove } = this
    let node = []

    //mask
    let maskNode = null
    if (this.mask) {
      maskNode = <transition name="k-modal-fade"><div class="k-modal-mask" v-show={show} /></transition>
    }

    //content
    let contentNode = $slots.content
    if (!contentNode) {
      const contents = []
      contents.push(<span class="k-modal-close" onClick={this.close}><Icon type="close" /></span>)
      contents.push(<div class="k-modal-header"><div class="k-modal-header-inner">{this.title}</div></div>)
      contents.push(<div class="k-modal-body">{$slots.default}</div>)

      //footer
      let footer = $slots.footer
      if (!footer && this.footer !== null) {
        footer = [<Button onClick={this.cancel}>{this.cancelText}</Button>, <Button onClick={this.ok} type="primary" loading={this.loading}>{this.okText}</Button>]
      }
      const footerNode = footer ? <div class="k-modal-footer">{footer}</div> : null;

      contents.push(footerNode)
      contentNode = <div class="k-modal-content">{contents}</div>
    }

    node.push(contentNode)
    if (canMove) {
      this.left = this.left || (document.body.offsetWidth - (this.width || 520)) / 2
    }
    const style = {
      width: `${this.width}px`,
      top: `${this.currentTop}px`,
      left: `${this.left}px`,
    }
    const classes = [
      'k-modal', {
        'k-modal-can-move': canMove,
        'k-modal-max': this.isMax,
        'k-modal-center': this.isCenter,
      }
    ]
    return this.init ? (<div class={classes} v-transfer={true}>
      {maskNode}
      <div class="k-modal-wrap" v-show={showInner} onClick={this.clickMaskToClose}>
        <transition name="k-modal-zoom">
          <div class="k-modal-inner" ref="modal" v-show={show} style={style}>
            {node}
          </div>
        </transition>
      </div>
    </div>) : null
  }
}