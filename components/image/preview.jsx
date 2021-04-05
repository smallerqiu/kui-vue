import Icon from '../icon'
import transfer from "../_tool/transfer";

let cacheBodyOverflow = {};

export default {
  name: 'Preview',
  directives: { transfer },
  props: {
    origin: String,
    hasControl: Boolean,
    value: Boolean,
    transfer: { type: Boolean, default: false },
    data: { type: Array, default: () => [] },
    showSwitch: Boolean
  },
  data() {
    return {
      scale: 1,
      rotate: 0,
      startPos: { x: 0, y: 0 },
      left: 0,
      top: 0,
      ismousedown: false,
      visible: this.value,
      src: this.origin,
      loading: false,
    }
  },
  watch: {
    origin(src) {
      this.src = src
    },
    value(show) {
      this.visible = show
    },
    src(src) {
      // if (src != this.src) {
      let img = new Image()
      this.loading = true
      img.onload = () => {
        this.loading = false
        img = null
      }
      img.onerror = () => {
        this.loading = false
        img = null
      }
      img.src = src
      // }
    }
  },
  methods: {
    setRotate(left) {
      let { rotate } = this
      rotate = left ? (rotate - 90) : (rotate + 90);
      this.rotate = rotate
    },
    setScale(zoom) {
      let { scale } = this
      scale = zoom ? (scale + 1) : (scale - 1);
      // console.log(scale)
      scale = zoom ? Math.min(scale, 5) : Math.max(1, scale)
      this.scale = scale
    },
    close() {
      this.visible = false
      this.scale = 1
      this.rotate = 0
      this.$emit('input', false)
      this.$emit('close')
    },
    mousedown(e) {
      if (e.button == 0 && this.$refs.imgRef && this.$refs.imgRef.contains(e.target)) {
        this.ismousedown = true
        this.startPos = { x: e.clientX, y: e.clientY }
        this.mousemove(e)
        document.addEventListener('mousemove', this.mousemove)
        document.addEventListener('mouseup', this.mouseup)
      }
    },
    mouseup(e) {
      this.ismousedown = false
      this.left = 0
      this.top = 0;
      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    mousemove(e) {
      if (this.ismousedown) {
        let { x, y } = this.startPos
        this.left += e.clientX - x
        this.top += e.clientY - y
        this.startPos = { x: e.clientX, y: e.clientY }
        e.preventDefault()
      }
    },
    switchImage(left) {
      let { data = [], src } = this
      let index = data.indexOf(src)
      index = left ? (index - 1) : (index + 1)
      index = Math.max(0, index)
      index = Math.min(index, data.length - 1)
      this.src = data[index]
    },
    download() {
      window.open(this.src)
    }
  },
  mounted() {
    document.addEventListener('mousedown', this.mousedown)
  },
  render() {
    const { scale, rotate, visible, src, left, top, transfer, showSwitch, data, loading } = this
    const imgStyle = {
      transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`
    }
    const moveStyle = {
      transform: `translate3d(${left}px, ${top}px, 0px)`,
      transition: this.ismousedown ? '0s' : null
    }
    const imgPorps = {
      attrs: { src },
      style: imgStyle,
      ref: "imgRef",
    }
    return <div class="k-image-preview-root" v-transfer={transfer}>
      <transition name="k-image-zoom">
        <div class="k-image-preview" v-show={visible} >
          <div class="k-image-preview-mask" onClick={this.close}></div>
          <div class="k-image-preview-wrap">
            <ul class="k-image-preview-control">
              <li class="k-image-preview-action" onClick={this.close}><Icon type="close" /></li>
              <li class="k-image-preview-action" onClick={this.download}><Icon type="arrow-down-outline" /></li>
              <li class={["k-image-preview-action", { 'k-image-preview-action-disabled': scale >= 5 }]} onClick={() => this.setScale(1)}><Icon type="add-circle-outline" /></li>
              <li class={["k-image-preview-action", { 'k-image-preview-action-disabled': scale <= 1 }]} onClick={() => this.setScale(0)}><Icon type="remove-circle-outline" /></li>
              <li
                class="k-image-preview-action k-image-preview-action-rotate-right"
                onClick={() => this.setRotate(0)}
              ><Icon type="refresh-outline" /></li>
              <li
                class="k-image-preview-action k-image-preview-action-rotate-left"
                onClick={() => this.setRotate(1)}
              ><Icon type="refresh-outline" /></li>
            </ul>
            <div class="k-image-preview-img-wrap" style={moveStyle}>
              <img class="k-image-preview-img" {...imgPorps} />
            </div>
            {showSwitch ?
              [<div class={["k-image-preview-switch-left", { 'k-image-preview-switch-disabled': data.indexOf(src) == 0 }]}
                onClick={() => this.switchImage(1)}><Icon type="chevron-back-outline" /></div>,
              <div class={["k-image-preview-switch-right", { 'k-image-preview-switch-disabled': data.indexOf(src) == (data.length - 1) }]}
                onClick={() => this.switchImage()}><Icon type="chevron-forward-outline" /></div>]
              : null}
            {loading ? <div class="k-image-preview-loading"><Icon type="sync" spin /></div> : null}
          </div>
        </div>
      </transition>
    </div>
  }
}