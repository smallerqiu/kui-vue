import Icon from '../icon'
import transfer from "../_tool/transfer";
import { getChild, measureScrollBar } from '../_tool/utils'
let cacheBodyOverflow = {};
import { Refresh, Close, ArrowDown, IconImage, ChevronUp, Sync, AddCircleOutline, RemoveCircleOutline } from 'kui-icons'
export default {
  name: 'Preview',
  directives: { transfer },
  props: {
    type: String,
    origin: String,
    hasControl: Boolean,
    value: Boolean,
    transfer: { type: Boolean, default: false },
    data: { type: Array, default: () => [] },
    showSwitch: Boolean,
    showPanel: Boolean,
    globle: { type: Boolean, default: true },
  },
  data() {
    return {
      scale: 1,
      rotate: 0,
      startPos: { x: 0, y: 0 },
      initPos: { x: 0, y: 0 },
      left: 0,
      top: 0,
      ismousedown: false,
      visible: this.value,
      src: this.origin,
      loading: false,
      error: false,
      vertical: true,
      isShowPanel: this.showPanel,
      panelRight: 0,
      touch: false,
    }
  },
  watch: {
    origin(src) {
      this.src = src
    },
    value(show) {
      this.visible = show
      this.resetBodyStyle(show)
      if (show) {
        this.$nextTick(() => {
          this.updatePanelRight()
        })
      }
    },
    src(src) {
      if (this.type == 'media') return
      let img = new Image()
      this.loading = true
      this.error = false
      img.onload = () => {
        this.loading = false
        img = null
      }
      img.onerror = () => {
        this.loading = false
        img = null
        this.error = true
      }
      img.src = src
      // }
    },
    showPanel(value) {
      this.isShowPanel = value
      this.updatePanelRight()
    }
  },
  methods: {
    updatePanelRight() {
      let panel = this.$refs.panelRef
      this.panelRight = panel && this.isShowPanel ? panel.offsetWidth : 0
    },
    setRotate(left) {
      let { rotate } = this
      rotate = left ? (rotate - 90) : (rotate + 90);
      this.vertical = !this.vertical
      this.rotate = rotate
      this.resetPosition()
    },
    setScale(zoom) {
      let { scale } = this
      scale = zoom ? (scale + 1) : (scale - 1);
      scale = zoom ? Math.min(scale, 5) : Math.max(1, scale)
      this.scale = scale
      this.resetPosition()
    },
    close() {
      this.visible = false
      this.scale = 1
      this.rotate = 0
      this.$emit('input', false)
      this.$emit('close')
    },
    touchstart(e) {
      if (e.touches.length == 1 && this.$refs.imgRef && this.$refs.imgRef.contains(e.target)) {

      }
    },
    mousedown(e) {
      if (this.$refs.imgRef && this.$refs.imgRef.contains(e.target)) {
        if (e.button && e.button != 0) return;
        let clientX, clientY;
        if (e.touches && e.touches.length == 1) {
          clientX = e.touches[0].clientX
          clientY = e.touches[0].clientY
        } else {
          clientX = e.clientX
          clientY = e.clientY
        }
        this.ismousedown = true
        this.startPos = { x: clientX, y: clientY }
        this.initPos = { x: clientX, y: clientY }
        this.mousemove(e)
        let [e1, e2] = this.touch ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']
        document.addEventListener(e1, this.mousemove, { passive: false })
        document.addEventListener(e2, this.mouseup, { passive: false })
      }
    },
    resetPosition() {
      if (this.error) return;
      let { innerHeight, innerWidth } = window
      let { $refs, scale, top, left, vertical } = this
      let { offsetWidth, offsetHeight } = $refs.imgRef
      let panelWidth = $refs.panelRef && this.isShowPanel ? $refs.panelRef.offsetWidth : 0
      let newWidth = offsetWidth + ''
      let newHeight = offsetHeight + ''
      if (!vertical) {
        newWidth = offsetHeight + ''
        newHeight = offsetWidth + ''
      }

      if (newWidth * scale >= (innerWidth - panelWidth)) {
        let maxLeft = (newWidth * scale - (innerWidth - panelWidth)) / 2
        if (left >= maxLeft) {
          this.left = maxLeft
        } else if (this.left < -maxLeft) {
          this.left = -maxLeft
        }
      } else {
        this.left = 0
      }
      if (newHeight * scale >= innerHeight) {
        let maxTop = (newHeight * scale - innerHeight) / 2

        if (top >= maxTop) {
          this.top = maxTop
        } else if (top < -maxTop) {
          this.top = -maxTop
        }
      } else {
        this.top = 0
      }
    },
    mouseup(e) {
      this.ismousedown = false
      this.resetPosition()
      let [e1, e2] = this.touch ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']
      document.removeEventListener(e1, this.mousemove)
      document.removeEventListener(e2, this.mouseup)
    },
    mousemove(e) {
      if (this.ismousedown) {
        e.preventDefault()
        let clientX, clientY;
        if (e.touches && e.touches.length == 1) {
          clientX = e.touches[0].clientX
          clientY = e.touches[0].clientY
        } else {
          clientX = e.clientX
          clientY = e.clientY
        }
        let { x, y } = this.startPos
        this.left += clientX - x
        this.top += clientY - y
        this.startPos = { x: clientX, y: clientY }
      }
    },
    switchImage(left) {
      this.scale = 1
      let { data = [], src } = this
      let index = data.indexOf(src), i = index + 0;
      index = left ? (index - 1) : (index + 1)
      index = Math.max(0, index)
      index = Math.min(index, data.length - 1)
      if (this.globle && !this.$slots.panel) {
        this.src = data[index]
      }
      if ((left && i == 0) || (!left && i == data.length - 1)) return;
      this.$emit('switch', index)
    },
    download() {
      if (!this.error) {
        window.open(this.src)
      }
    },
    resetBodyStyle(opened) {
      let target = document.body
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
        let hasBar = target.scrollHeight > target.clientHeight || target.offsetHeight > target.clientHeight
        if (barWidth && hasBar) {
          target.style.width = `calc(100% - ${barWidth}px)`
          target.style.overflow = `hidden`
        }
      } else {
        setTimeout(() => {
          Object.keys(cacheBodyOverflow).forEach(key => {
            target.style[key] = cacheBodyOverflow[key] || ''
            delete cacheBodyOverflow[key]
          })
        }, 300)
      }
    },
    togglePanel() {
      this.isShowPanel = !this.isShowPanel
      this.$emit('toggle-panel', this.isShowPanel)
      this.$nextTick(() => this.resetPosition())
      this.updatePanelRight()
    },
    getPanel() {
      let panel = getChild(this.$slots.panel)
      if (panel.length) {
        return <div class={["k-image-preview-panel", { 'k-image-preview-panel-hidden': !this.isShowPanel }]} ref="panelRef">
          <span class="k-image-preview-panel-action" onClick={() => this.togglePanel()}><Icon type={ChevronUp} /></span>
          {panel}
        </div>
      }
      return null
    }
  },
  mounted() {
    if (!this.$isServer) {
      let touch = !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch)
      this.touch = touch
      let even = touch ? 'touchstart' : 'mousedown'
      document.addEventListener(even, this.mousedown, { passive: false })
    }
  },
  render(h) {
    const { scale, rotate, visible, src, left, top, transfer, showSwitch, data, loading, panelRight, type } = this
    const imgStyle = {
      transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`
    }
    const moveStyle = {
      transform: `translate3d(${left}px, ${top}px, 0px)`,
      transition: this.ismousedown ? '0s' : null
    }
    const imgPorps = {
      class: 'k-image-preview-img',
      attrs: { src },
      style: imgStyle,
      ref: "imgRef",
    }
    let tools = getChild(this.$slots.tool)
    return <div class="k-image-preview-root" v-transfer={transfer}>
      <transition name="k-image-zoom">
        <div class="k-image-preview" v-show={visible} >
          <div class="k-image-preview-mask" onClick={this.close}></div>
          <div class="k-image-preview-wrap" style={{ right: panelRight + 'px' }}>
            <ul class="k-image-preview-control">

              <li class="k-image-preview-action" onClick={this.close}><Icon type={Close} /></li>
              <li class="k-image-preview-action-divider" />
              {
                tools.map(tool => {
                  return <li class="k-image-preview-action">{tool}</li>
                })
              }
              <li class="k-image-preview-action" onClick={this.download}><Icon type={ArrowDown} /></li>
              <li class={["k-image-preview-action", { 'k-image-preview-action-disabled': scale >= 5 }]} onClick={() => this.setScale(1)}><Icon type={AddCircleOutline} /></li>
              <li class={["k-image-preview-action", { 'k-image-preview-action-disabled': scale <= 1 }]} onClick={() => this.setScale(0)}><Icon type={RemoveCircleOutline} /></li>
              <li
                class="k-image-preview-action k-image-preview-action-rotate-right"
                onClick={() => this.setRotate(0)}
              ><Icon type={Refresh} /></li>
              <li
                class="k-image-preview-action k-image-preview-action-rotate-left"
                onClick={() => this.setRotate(1)}
              ><Icon type={Refresh} /></li>
            </ul>
            <div class="k-image-preview-img-wrap" style={moveStyle}>
              {type == 'media' ?
                <video controls {...imgPorps} />
                :
                !this.error ? <img {...imgPorps} /> :
                  <div class="k-image-preview-img-error"><Icon type={IconImage} /></div>
              }
            </div>
            {showSwitch ?
              [<div class={["k-image-preview-switch-left", { 'k-image-preview-switch-disabled': data.indexOf(src) == 0 }]}
                onClick={() => this.switchImage(1)}><Icon type={ChevronUp} /></div>,
              <div class={["k-image-preview-switch-right", { 'k-image-preview-switch-disabled': data.indexOf(src) == (data.length - 1) }]}
                onClick={() => this.switchImage()}><Icon type={ChevronUp} /></div>]
              : null}
            {loading ? <div class="k-image-preview-loading"><Icon type={Sync} spin /></div> : null}
          </div>
          {this.getPanel()}
        </div>
      </transition>
    </div>
  }
}