import { canvasHelper, limit, hslToRgb, rgbToHsl, parseColor, rgbToHex } from './canvasHelper'
import Input from '../input'
import Button from '../button'
import Icon from '../icon'

import { getElementPos } from '../_tool/utils'

import transfer from "../_tool/transfer";
import Resize from "../_tool/resize";
import outsideclick from "../_tool/outsiteclick";

const modes = ['rgba', 'hex', 'hsla']

export default {
  name: 'ColorPicker',
  directives: { transfer, Resize, outsideclick },
  props: {
    value: String,
    transfer: { type: Boolean, default: true },
    showMode: { type: Boolean, default: false },
    large: Boolean,
    mini: Boolean,
    mode: {
      type: String, default: 'hex', validator: function (value) {
        return modes.indexOf(value) !== -1
      }
    },
    defalutColors: {
      type: Array, default: () => ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#000'],
      validator: function (value) { return value.length <= 20 }
    }
  },
  watch: {
    value(v1, v2) {
      if (v1 != v2)
        this.valueChange('COLOR', v)
    }
  },
  data() {
    return {
      currentMode: this.mode,
      currentColor: this.value || '#000',
      paintHelper: null,
      hueHelper: null,
      H: 0, S: 0, L: 0, A: 1,
      R: 0, G: 0, B: 0,
      HEX: '',
      huePointer: {
        x: 0
      },
      alphaPointer: {
        x: 0,
      },
      paintPointer: {
        x: 0, y: 0
      },
      placement: 'bottom',
      showDrop: false,
      showDropInit: false,
      left: 0,
      top: 0,
      isMouseDown: false
    }
  },
  methods: {
    setPosition() {
      let top = 0, left = 0, height = this.$el.offsetHeight, offset = 3;

      if (this.transfer) {
        let pos = getElementPos(this.$el)
        top = pos.top + height + offset
        left = pos.left + 1
      } else {
        top = height + offset
      }
      if (this.$refs.dom) {
        let clientH = document.body.scrollHeight
        let domH = this.$refs.dom.offsetHeight
        if (clientH - top - height - offset < domH + 5) {
          top = this.transfer ? top - domH - offset : -(domH + 3)
          this.placement = 'top'
        } else {
          this.placement = 'bottom'
        }
      }

      this.top = top
      this.left = left
    },
    hidedrop(e) {
      if (this.showDropInit && this.showDrop && !this.isMouseDown && !this.$el.contains(e.target) && !this.$refs.dom.contains(e.target)) {
        this.showDrop = false
        this.currentColor = this.value || '#000'
      }
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      if (!this.showDropInit) {

        this.showDropInit = true
        this.$nextTick(e => {
          this.setShowDrop()

          let { paint, hue, alpha } = this.$refs
          this.paintHelper = canvasHelper(paint)

          this.initHueCanvas(hue)
          this.initAlphaCanvas(alpha)
          this.initPaintCanvas(paint)

          this.valueChange('COLOR', this.value)
        })
      } else {
        this.setShowDrop()
      }
    },
    setShowDrop() {
      this.showDrop = !this.showDrop;
      if (this.showDrop) {
        this.$nextTick(e => this.setPosition())
      } else {
        this.currentColor = this.value || '#000'
      }
    },
    updatePostion() {
      //alpha
      {
        const x = 170 * this.A;
        this.alphaPointer.x = (x - 7);
      }
      //updaet hue pointer
      {
        const x = 170 * this.H / 360;
        this.huePointer.x = (x - 7);
      }
      //paint
      {
        const [r, g, b] = hslToRgb(this.H, this.S, this.L);
        const [x, y] = this.paintHelper.findColor(r, g, b);
        if (x >= 0) {
          this.paintPointer.x = (x - 7);
          this.paintPointer.y = (y - 7);
        }
      }

    },
    valueChange(prop, value) {
      switch (prop) {
        case 'COLOR':
          [this.R, this.G, this.B, this.A] = parseColor(value, 'rgba') || [0, 0, 0, 1];
          [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
          this.paintHelper.setHue(this.H);
          this.updatePostion()
          this.alphaCanvsSetHue(this.$refs.alpha)
          break;
        case 'HUE':
          this.H = value;
          [this.R, this.G, this.B] = hslToRgb(this.H, this.S, this.L)
          this.paintHelper.setHue(value)
          this.alphaCanvsSetHue(this.$refs.alpha)
          break;
        case 'RGB':
          [this.R, this.G, this.B] = value
          // [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
          let colors = rgbToHsl(this.R, this.G, this.B);
          [this.H, this.S, this.L] = colors
          this.alphaCanvsSetHue(this.$refs.alpha)
          break;
        case 'ALPHA':
          this.A = value;
          break;
      }
      this.setHEX()
    },
    setHEX() {
      if (this.A != 1) {
        this.HEX = parseColor([this.R, this.G, this.B, this.A], 'hexcss4');
      } else {
        this.HEX = rgbToHex(this.R, this.G, this.B);
      }
      this.currentColor = this.HEX
    },
    updateValue() {
      let { mode } = this.mode,
        value = null;
      if (mode == 'hex') {
        value = this.HEX
      } else if (mode == 'rgba') {
        value = `rgba(${this.R},${this.G},${this.B},${this.A})`
      } else {
        value = `hsla(${this.H},${this.S}%,${this.L}%,${this.A})`
      }
      this.currentColor = value
      this.$emit('input', value)
      this.$emit('change', value)
      this.showDrop = false
    },
    setMode() {
      let i = modes.indexOf(this.currentMode) + 1
      i = i > 2 ? 0 : i
      this.currentMode = modes[i]
    },
    initHueCanvas(canvas) {
      const ctx = canvas.getContext('2d'),
        setp = 1 / 360,
        width = canvas.width,
        height = canvas.height,
        gradient = ctx.createLinearGradient(0, 0, width, 0);

      for (let i = 0; i <= 1; i += setp) {
        gradient.addColorStop(i, `hsl(${360 * i},100%,50%)`)
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const onMouseMove = e => {
        const x = limit(e.clientX - canvas.getBoundingClientRect().left, 0, width),
          hue = Math.round(x * 360 / width)
        this.huePointer.x = x - 7
        this.valueChange('HUE', hue)
      }

      const onMouseUp = () => {
        setTimeout(() => {
          this.isMouseDown = false
        }, 300);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp)
      }

      canvas.addEventListener('mousedown', e => {
        this.isMouseDown = true
        onMouseMove(e)
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
        e.preventDefault()
      })
    },
    alphaCanvsSetHue(canvas) {
      const ctx = canvas.getContext('2d'),
        { width, height } = canvas,
        gradient = ctx.createLinearGradient(0, 0, width - 1, 0);
      let { H, S, L } = this
      ctx.clearRect(0, 0, width, height)
      gradient.addColorStop(0, `hsla(${H},${S}%,${L}%,0)`)
      gradient.addColorStop(1, `hsla(${H},${S}%,${L}%,1)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    },
    initAlphaCanvas(canvas) {
      this.alphaCanvsSetHue(canvas)
      const { width, height } = canvas;
      const onMouseMove = (e) => {
        const x = limit(e.clientX - canvas.getBoundingClientRect().left, 0, width),
          alpha = +(x / width).toFixed(2);
        this.alphaPointer.x = (x - 7)
        this.valueChange('ALPHA', alpha)
      }

      const onMouseUp = () => {
        setTimeout(() => {
          this.isMouseDown = false
        }, 300);

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp)
      }

      canvas.addEventListener('mousedown', e => {
        this.isMouseDown = true

        onMouseMove(e);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp)
        e.preventDefault()

      })

    },
    initPaintCanvas(canvas) {
      const { width, height } = canvas;
      const onMouseMove = e => {
        const x = limit(e.clientX - canvas.getBoundingClientRect().left, 0, width - 1),
          y = limit(e.clientY - canvas.getBoundingClientRect().top, 0, height - 1),
          color = this.paintHelper.grabColor(x, y)

        this.paintPointer.x = x - 7
        this.paintPointer.y = y - 7
        this.valueChange('RGB', color)

      }
      const onMouseUp = () => {
        setTimeout(() => {
          this.isMouseDown = false
        }, 300);

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp)
      }

      canvas.addEventListener('mousedown', e => {
        this.isMouseDown = true

        onMouseMove(e)
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
        e.preventDefault()
      })
    },
    renderPaint() {
      let prop = {
        class: 'k-color-picker-paint',
        attrs: { width: 254, height: 136 },
        ref: 'paint'
      }
      return <canvas {...prop} />
    },
    renderAlpha() {
      let prop = {
        class: 'k-color-picker-alpha',
        attrs: { width: 170, height: 13 },
        ref: 'alpha'
      }
      return <canvas {...prop} />
    },
    renderHue() {
      let prop = {
        class: 'k-color-picker-hue',
        attrs: { width: 170, height: 13 },
        ref: 'hue'
      }
      return <canvas {...prop} />
    },
    renderValueInput(key) {
      let prop = {
        props: {
          value: this[key] + ('SL'.indexOf(key) >= 0 ? '%' : ''),
          mini: true,
        },
        on: {
          "input": e => {
            this[key] = e.replace('%', '')
            // console.log(e,key)
            if ('RGB'.indexOf(key) >= 0)
              [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
            this.updatePostion()
            this.paintHelper.setHue(this.H)
            this.alphaCanvsSetHue(this.$refs.alpha)
          }
        }
      }
      return <Input {...prop} />
    },
    renderValue() {
      if (this.showMode) {
        let { currentMode, renderValueInput } = this, node = []
        if (currentMode == 'rgba') {
          let keys = ['R', 'G', 'B', 'A']
          let v = <div class="k-color-picker-val">{keys.map(k => renderValueInput(k))}</div>
          let k = <div class="k-color-picker-key">{keys.map(k => <span>{k}</span>)}</div>
          node.push(v, k)
        } else if (currentMode == 'hsla') {
          let keys = ['H', 'S', 'L', 'A']
          let v = <div class="k-color-picker-val">{keys.map(k => renderValueInput(k))}</div>
          let k = <div class="k-color-picker-key">{keys.map(k => <span>{k}</span>)}</div>
          node.push(v, k)
        } else { //hex
          let v = <div class="k-color-picker-val">{renderValueInput('HEX')}</div>
          let k = <div class="k-color-picker-key"><span>HEX</span></div>
          node.push(v, k)
        }
        let btn = <Button icon="ios-flash" mini circle onClick={this.setMode} />
        node.push(btn)
        return <div class={`k-color-picker-mode k-color-picker-${currentMode}`}>{node}</div>
      }
    },
    renderDefaultColor() {
      let color = this.defalutColors.map(c => <span style={"background-color:" + c} onClick={e => this.valueChange('COLOR', c)}></span>)
      let okBtn = <Button icon="ios-color-fill" circle onClick={this.updateValue} />
      return <div class="k-coclor-picker-defaults">{[color, okBtn]}</div>
    },
    renderDrop() {
      let paint = this.renderPaint()
      let alpha = this.renderAlpha()
      let hue = this.renderHue()
      // let colors = this.renderDefaultColor()
      let valueNode = this.renderValue()

      const dropStyle = {
        left: `${this.left}px`,
        top: `${this.top}px`,
        transformOrigin: this.placement == 'top' ? 'center bottom' : ''
      }
      return (
        <div class="k-color-picker-dropdown" ref="dom" v-show={this.showDrop} style={dropStyle} v-transfer={transfer} v-resize={this.setPosition}>
          {paint}
          < span class="k-color-picker-paint-dot" style={'left:' + this.paintPointer.x + 'px;top:' + this.paintPointer.y + 'px'} ></span >
          <div class="k-color-picker-bar">
            <div class="k-color-picker-avatar">
              <div class="k-color-picker-avatar-inner" style={`background-color:rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`}></div>
            </div>
            <div class="k-color-picker-bar-box">
              {[hue, alpha]}
              <span class="k-color-picker-hue-dot" style={'left:' + this.huePointer.x + 'px'}></span>
              <span class="k-color-picker-alpha-dot" style={'left:' + this.alphaPointer.x + 'px'}></span>
            </div>
          </div>
          {valueNode}
          {this.renderDefaultColor()}
        </div>
      )
    }
  },

  render() {
    let drop;
    if (this.showDropInit) {
      drop = <transition name="dropdown">{this.renderDrop()}</transition >
    }
    let style = [
      'k-color-picker',
      {
        'k-color-picker-mini': this.mini,
        'k-color-picker-large': this.large && !this.mini
      },
    ]
    return (<div class={style} v-outsideclick={this.hidedrop}>
      <div class="k-color-picker-selection" onClick={this.toggleDrop}>
        <div class="k-color-picker-color">
          <div class="k-color-picker-color-inner" style={`background-color:${this.currentColor}`}></div>
        </div>
        <Icon type="ios-arrow-down" />
      </div>
      {drop}
    </div >)
  }
}