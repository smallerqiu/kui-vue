import { defineComponent, ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Icon from '../icon'
import transfer from '../directives/transfer'
import {
  Refresh, Close, ArrowDown, IconImage, ChevronUp,
  Loading, AddCircleOutline, RemoveCircleOutline
} from 'kui-icons'
import getScrollbarWidth from '../utils/elment'

export default defineComponent({
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
    globle: { type: Boolean, default: true }
  },
  emits: ['input', 'close', 'switch', 'toggle-panel'],
  setup(props, { emit, slots }) {
    const scale = ref(1)
    const rotate = ref(0)
    const startPos = ref({ x: 0, y: 0 })
    const left = ref(0)
    const top = ref(0)
    const isMousePressed = ref(false)
    const visible = ref(props.value)
    const src = ref(props.origin)
    const loading = ref(false)
    const error = ref(false)
    const vertical = ref(true)
    const isShowPanel = ref(props.showPanel)
    const panelRight = ref(0)
    const touch = ref(false)

    const imgRef = ref()
    const panelRef = ref()
    let cacheBodyOverflow = {}

    watch(() => props.origin, val => src.value = val)
    watch(() => props.value, show => {
      visible.value = show
      resetBodyStyle(show)
      if (show) nextTick(updatePanelRight)
    })
    watch(src, val => {
      if (props.type === 'media') return
      const img = new Image()
      loading.value = true
      error.value = false
      img.onload = () => { loading.value = false }
      img.onerror = () => { loading.value = false; error.value = true }
      img.src = val
    })
    watch(() => props.showPanel, v => {
      isShowPanel.value = v
      updatePanelRight()
    })

    function updatePanelRight() {
      panelRight.value = panelRef.value && isShowPanel.value ? panelRef.value.offsetWidth : 0
    }
    function setRotate(leftRotate) {
      rotate.value += leftRotate ? -90 : 90
      vertical.value = !vertical.value
      resetPosition()
    }
    function setScale(zoomIn) {
      scale.value = zoomIn ? Math.min(scale.value + 1, 5) : Math.max(scale.value - 1, 1)
      resetPosition()
    }
    function close() {
      visible.value = false
      emit('input', false)
      emit('close')
    }
    function mousewheel(e) {
      setScale(e.deltaY < 0)
      e.preventDefault()
    }
    function mousedown(e) {
      if (!imgRef.value || !imgRef.value.contains(e.target)) return
      if (e.button && e.button !== 0) return
      const clientX = e.touches?.[0]?.clientX ?? e.clientX
      const clientY = e.touches?.[0]?.clientY ?? e.clientY
      isMousePressed.value = true
      startPos.value = { x: clientX, y: clientY }
      mousemove(e)
      const [e1, e2] = touch.value ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']
      document.addEventListener(e1, mousemove, { passive: false })
      document.addEventListener(e2, mouseup, { passive: false })
    }
    function mousemove(e) {
      if (!isMousePressed.value) return
      e.preventDefault()
      const clientX = e.touches?.[0]?.clientX ?? e.clientX
      const clientY = e.touches?.[0]?.clientY ?? e.clientY
      left.value += clientX - startPos.value.x
      top.value += clientY - startPos.value.y
      startPos.value = { x: clientX, y: clientY }
    }
    function mouseup() {
      isMousePressed.value = false
      resetPosition()
      const [e1, e2] = touch.value ? ['touchmove', 'touchend'] : ['mousemove', 'mouseup']
      document.removeEventListener(e1, mousemove)
      document.removeEventListener(e2, mouseup)
    }
    function resetPosition() {
      if (error.value) return
      const iw = window.innerWidth, ih = window.innerHeight
      const el = imgRef.value
      if (!el) return
      const { offsetWidth: ow, offsetHeight: oh } = el
      const width = vertical.value ? ow : oh
      const height = vertical.value ? oh : ow
      const pw = panelRef.value?.offsetWidth || 0
      if (width * scale.value >= (iw - pw)) {
        const maxLeft = (width * scale.value - (iw - pw)) / 2
        if (left.value > maxLeft) left.value = maxLeft
        else if (left.value < -maxLeft) left.value = -maxLeft
      } else left.value = 0
      if (height * scale.value >= ih) {
        const maxTop = (height * scale.value - ih) / 2
        if (top.value > maxTop) top.value = maxTop
        else if (top.value < -maxTop) top.value = -maxTop
      } else top.value = 0
    }
    function switchImage(leftSwitch) {
      scale.value = 1
      const list = props.data || []
      let index = list.indexOf(src.value), i = index
      index = leftSwitch ? index - 1 : index + 1
      index = Math.max(0, Math.min(index, list.length - 1))
      if (props.globle && !slots.panel) src.value = list[index]
      if ((leftSwitch && i === 0) || (!leftSwitch && i === list.length - 1)) return
      emit('switch', index)
    }
    function download() {
      if (!error.value) {
        const x = new XMLHttpRequest()
        x.open("GET", src.value, true)
        x.responseType = 'blob'
        x.onload = () => {
          const url = window.URL.createObjectURL(x.response)
          const a = document.createElement('a')
          a.href = url
          a.download = ''
          a.click()
        }
        x.send()
      }
    }
    function resetBodyStyle(opened) {
      const body = document.body
      if (!props.show && !cacheBodyOverflow.overflow) {
        cacheBodyOverflow = {
          width: body.style.width,
          overflow: body.style.overflow,
          overflowX: body.style.overflowX,
          overflowY: body.style.overflowY
        }
      }
      if (opened) {
        const barWidth = getScrollbarWidth()
        const hasBar = body.scrollHeight > body.clientHeight || body.offsetHeight > body.clientHeight
        if (barWidth && hasBar) {
          body.style.width = `calc(100% - ${barWidth}px)`
          body.style.overflow = 'hidden'
        }
      } else {
        setTimeout(() => {
          for (const key in cacheBodyOverflow) {
            body.style[key] = cacheBodyOverflow[key] || ''
            delete cacheBodyOverflow[key]
          }
        }, 300)
      }
    }
    function togglePanel() {
      isShowPanel.value = !isShowPanel.value
      emit('toggle-panel', isShowPanel.value)
      nextTick(() => resetPosition())
      updatePanelRight()
    }

    onMounted(() => {
      const isTouch = 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)
      touch.value = isTouch
      document.addEventListener(isTouch ? 'touchstart' : 'mousedown', mousedown, { passive: false })
      document.addEventListener('mousewheel', mousewheel, { passive: false })
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousewheel', mousewheel)
    })

    return () => (
      <div class="k-image-preview-root" v-transfer={props.transfer}>
        {visible.value && (
          <div class="k-image-preview">
            <div class="k-image-preview-mask" onClick={close}></div>
            <div class="k-image-preview-wrap" style={{ right: panelRight.value + 'px' }}>
              <ul class="k-image-preview-control">
                <li class="k-image-preview-action" onClick={close}><Icon type={Close} /></li>
                <li class="k-image-preview-action-divider" />
                {slots.tool?.().map((tool, i) => <li class="k-image-preview-action" key={i}>{tool}</li>)}
                <li class="k-image-preview-action" onClick={download}><Icon type={ArrowDown} /></li>
                <li class={['k-image-preview-action', { 'k-image-preview-action-disabled': scale.value >= 5 }]} onClick={() => setScale(true)}><Icon type={AddCircleOutline} /></li>
                <li class={['k-image-preview-action', { 'k-image-preview-action-disabled': scale.value <= 1 }]} onClick={() => setScale(false)}><Icon type={RemoveCircleOutline} /></li>
                <li class="k-image-preview-action" onClick={() => setRotate(false)}><Icon type={Refresh} /></li>
                <li class="k-image-preview-action" onClick={() => setRotate(true)}><Icon type={Refresh} /></li>
              </ul>
              <div class="k-image-preview-img-wrap" style={{ transform: `translate3d(${left.value}px, ${top.value}px, 0px)`, transition: isMousePressed.value ? '0s' : null }}>
                {props.type === 'media'
                  ? <video controls ref={imgRef} class="k-image-preview-img" src={src.value} style={{ transform: `scale3d(${scale.value}, ${scale.value}, 1) rotate(${rotate.value}deg)` }} />
                  : !error.value
                    ? <img ref={imgRef} class="k-image-preview-img" src={src.value} style={{ transform: `scale3d(${scale.value}, ${scale.value}, 1) rotate(${rotate.value}deg)` }} />
                    : <div class="k-image-preview-img-error"><Icon type={IconImage} /></div>}
              </div>
              {props.showSwitch && [
                <div class={['k-image-preview-switch-left', { 'k-image-preview-switch-disabled': props.data.indexOf(src.value) === 0 }]} onClick={() => switchImage(true)}><Icon type={ChevronUp} /></div>,
                <div class={['k-image-preview-switch-right', { 'k-image-preview-switch-disabled': props.data.indexOf(src.value) === props.data.length - 1 }]} onClick={() => switchImage(false)}><Icon type={ChevronUp} /></div>
              ]}
              {loading.value && <div class="k-image-preview-loading"><Icon type={Loading} spin /></div>}
            </div>
            {slots.panel?.() && (
              <div class={['k-image-preview-panel', { 'k-image-preview-panel-hidden': !isShowPanel.value }]} ref={panelRef}>
                <span class="k-image-preview-panel-action" onClick={togglePanel}><Icon type={ChevronUp} /></span>
                {slots.panel?.()}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
})
