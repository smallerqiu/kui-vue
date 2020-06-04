import Icon from '../icon'
import Button from '../button'
import transfer from "../_tool/transfer";

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
    loading: Boolean
    // mode: { type: String, default: 'modal' }
  },
  data() {
    return {
      show: this.value,
      showInner: this.value,
      left: '',
      currentTop: this.top,
      isMouseDown: false,
      startPos: { x: 0, y: 0 },
      showPos: { x: 0, y: 0 }
    }
  },
  watch: {
    // loading(l) {
    //   this.loading = l
    // },
    value(v) {
      if (v) {
        this.show = v
        this.showInner = v
      } else {
        this.show = false
        setTimeout(() => {
          this.showInner = false
        }, 300);
      }
    }
  },
  methods: {
    ok() {
      this.$emit('ok')
      this.$nextTick(e => {
        if (!this.loading) {
          this.$emit('input', false)
          this.$emit('close', false)
        }
      })
    },
    cancel() {
      this.$emit('input', false)
      this.$emit('cancel')
      this.$emit('close')
    },
    close() {
      this.$emit('input', false)
      this.$emit('close')
    },
    closeMaskToClose(e) {
      if (!this.loading && this.maskClosable && !this.$refs.modal.contains(e.target)) {
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
      }
    },
    mouseup(e) {
      this.isMouseDown = false
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    mousedown(e) {
      if (e.button == 0) {
        this.isMouseDown = true
        this.startPos = { x: e.clientX, y: e.clientY }
        this.mousemove(e)
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    }
  },
  beforDestory() {
    document.removeEventListener('mousedown', this.mousedown())
  },
  mounted() {
    document.addEventListener('mousedown', this.mousedown)
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
      contents.push(<span class="k-modal-close" onClick={this.close}><Icon type="md-close" /></span>)
      contents.push(<div class="k-modal-header"><div class="k-modal-header-inner">{this.title}</div></div>)
      contents.push(<div class="k-modal-body">{$slots.default}</div>)

      //footer
      let footer = $slots.footer
      if (!footer) {
        footer = [<Button onClick={this.cancel}>{this.cancelText}</Button>, <Button onClick={this.ok} type="primary" loading={this.loading}>{this.okText}</Button>]
      }
      const footerNode = <div class="k-modal-footer">{footer}</div>

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
      left: `${this.left}px`
    }
    const classes = [
      'k-modal', {
        'k-modal-can-move': canMove,
        'k-modal-max': this.isMax,
        'k-modal-center': this.isCenter,
      }
    ]
    return (<div class={classes} v-transfer={true}>
      {maskNode}
      <div class="k-modal-wrap" v-show={showInner} onClick={this.closeMaskToClose}>
        <transition name="k-modal-zoom">
          <div class="k-modal-inner" ref="modal" v-show={show} style={style}>
            {node}
          </div>
        </transition>
      </div>
    </div>)
  }
}