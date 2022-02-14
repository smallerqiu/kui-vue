import Icon from '../icon'
import Button from '../button'
import transfer from "../_tool/transfer";
import { measureScrollBar, getOffset } from '../_tool/utils'
import { t } from '../locale'
let cacheBodyOverflow = {};


export default {
  directives: { transfer },
  props: {
    value: Boolean,
    title: String,
    okText: String,
    cancelText: String,
    top: Number,
    width: Number,
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    maximized: Boolean,
    centered: Boolean,
    draggable: Boolean,
    showClose: { type: Boolean, default: true },
    loading: Boolean,
    footer: String,
    transfer: { type: Boolean, default: true },
    // mode: { type: String, default: 'modal' }
  },
  data() {
    return {
      rendered: false,
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
        this.rendered = true
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
      if (!this.$isServer) {
        let target = document.body;
        if (!this.show && !cacheBodyOverflow.hasOwnProperty('overflow')) {
          cacheBodyOverflow = {
            width: target.style.width,
            overflow: target.style.overflow,
            overflowX: target.style.overflowX,
            overflowY: target.style.overflowY,
          }
        }
        if (opened) {
          let barWidth = measureScrollBar(true)
          let hasBar = target.scrollHeight > window.innerHeight || target.offsetHeight > window.innerHeight
          if (barWidth && hasBar) {
            target.style.width = `calc(100% - ${barWidth}px)`
            target.style.overflow = `hidden`
          }
        } else {
          setTimeout(() => {
            let task = (this.tasks && this.tasks.length == 0) || !this.tasks
            task && Object.keys(cacheBodyOverflow).forEach(key => {
              target.style[key] = cacheBodyOverflow[key] || ''
              delete cacheBodyOverflow[key]
            })
          }, 300)
        }
      }
    },
    setPos() {
      if (this.show && this.$refs.modal) {
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
      this.$emit('cancel')
      this.$emit('close')
    },
    clickMaskToClose(e) {
      // console.log(this.mousedownIn)
      if (!this.loading && this.maskClosable && !this.$refs.modal.contains(e.target) && !this.mousedownIn) {
        this.close()
      }
    },
    mousemove(e) {
      if (this.isMouseDown && this.draggable) {
        let { x, y } = this.startPos
        this.left += e.clientX - x
        this.currentTop = this.currentTop || 100
        this.currentTop += e.clientY - y
        this.startPos = { x: e.clientX, y: e.clientY }
        this.setPos()
        e.preventDefault()
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
      if (e.button == 0 && this.draggable === true && this.$refs.hRef && this.$refs.hRef.contains(e.target)) {
        this.isMouseDown = true
        this.startPos = { x: e.clientX, y: e.clientY }
        this.mousemove(e)
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }

      this.mousedownIn = this.show && this.$refs.modal && this.$refs.modal.contains(e.target)
    }
  },
  beforeDestroy() {
    !this.$isServer && document.removeEventListener('mousedown', this.mousedown);
    this.resetBodyStyle(false)
  },

  mounted() {
    if (!this.$isServer) {
      document.addEventListener('mousedown', this.mousedown)

      if (this.draggable) {
        this.left = (document.body.offsetWidth - (this.width || 520)) / 2
      }
      // console.log(this.value)
      if (this.value) {
        this.$nextTick(() => {
          this.updateProp(true)
        })
      }
    }
  },
  render() {
    let { $slots, show, showInner, draggable, transfer } = this

    //mask
    let maskNode = null
    if (this.mask) {
      maskNode = <transition name="k-modal-fade"><div class="k-modal-mask" v-show={show} /></transition>
    }
    let okText = this.okText || t('k.modal.ok')
    let cancelText = this.cancelText || t('k.modal.cancel')
    //content
    let contentNode = $slots.content
    if (!contentNode) {
      const contents = []
      this.showClose && contents.push(<span class="k-modal-close" onClick={this.close}><Icon type="close" /></span>)
      this.title !== null && contents.push(<div class="k-modal-header" ref="hRef"><div class="k-modal-header-inner">{this.title}</div></div>)
      contents.push(<div class="k-modal-body">{$slots.default}</div>)

      //footer
      if (this.footer !== null) {
        let footer = $slots.footer
        if (!footer) {
          footer = [<Button onClick={this.cancel}>{cancelText}</Button>, <Button onClick={this.ok} type="primary" loading={this.loading}>{okText}</Button>]
        }
        const footerNode = footer ? <div class="k-modal-footer">{footer}</div> : null;

        contents.push(footerNode)
      }
      contentNode = <div class="k-modal-content">{contents}</div>
    }

    const style = {
      width: `${this.width}px`,
      top: `${this.currentTop}px`,
      left: `${this.left}px`,
    }
    const classes = [
      'k-modal', {
        'k-modal-draggable': draggable,
        'k-modal-maximized': this.maximized,
        'k-modal-centered': this.centered,
        'k-modal-has-footer': this.footer !== null,
      }
    ]
    return this.rendered ? (<div class={classes} v-transfer={transfer}>
      {maskNode}
      <div class="k-modal-wrap" v-show={showInner} onClick={this.clickMaskToClose}>
        <transition name="k-modal-zoom">
          <div class="k-modal-inner" ref="modal" v-show={show} style={style}>
            {contentNode}
          </div>
        </transition>
      </div>
    </div>) : null
  }
}