import { canvasHelper, limit, hslToRgb, rgbToHsl, parseColor, rgbToHex, cssColorToRgba } from './canvasHelper'
import { Input } from '../input'
// import InputNumber from '../inputNumber'
import { Button } from '../button'
import Icon from '../icon'
import Drop from '../base/drop'
import { ChevronDown, CaretHor } from 'kui-icons'
const modes = ['rgba', 'hex', 'hsla']

export default {
  name: 'ColorPicker',
  props: {
    value: String,
    transfer: { type: Boolean, default: true },
    showMode: Boolean,
    disabled: Boolean,
    noAlpha: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    mode: {
      type: String, default: 'hex', validator: function (value) {
        return modes.indexOf(value) !== -1
      }
    },
    shape: String,
    icon: [String, Array],
    showArrow: { type: Boolean, default: true },
    defalutColors: {
      type: Array, default: () => ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#000'],
      validator: function (value) { return value.length <= 20 }
    }
  },
  watch: {
    value(v1) {
      // console.log(v1, v2, this.currentColor)
      if (v1 != this.currentColor) {
        this.valueChange('COLOR', v1)
      }
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
      opened: false,
      isMouseDown: false
    }
  },
  methods: {

    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      this.opened = !this.opened
      this.currentColor = this.value || '#000'
    },
    updatePostion() {
      //alpha
      {
        const x = 190 * this.A;
        this.alphaPointer.x = (x - 7);
      }
      //updaet hue pointer
      {
        const x = 190 * this.H / 360;
        this.huePointer.x = (x - 7);
      }
      //paint
      {
        const [r, g, b] = hslToRgb(this.H, this.S, this.L);
        const [x, y] = this.paintHelper.findColor(r, g, b);
        if (x >= 0) {
          this.paintPointer.x = (x - 7 + 10);
          this.paintPointer.y = (y - 7 + 10);
        }
      }

    },
    valueChange(prop, value) {
      switch (prop) {
        case 'COLOR':
          [this.R, this.G, this.B, this.A] = parseColor(value, 'rgba') || [0, 0, 0, 1];
          [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
          if (this.paintHelper) {
            this.paintHelper.setHue(this.H);
            this.updatePostion()
            this.alphaCanvsSetHue(this.$refs.alpha)
          }
          break;
        case 'HUE':
          this.H = value;
          // console.log(this.H);
          [this.R, this.G, this.B] = hslToRgb(this.H, this.S, this.L);
          if (this.paintHelper) {
            this.paintHelper.setHue(value);
            this.alphaCanvsSetHue(this.$refs.alpha);
          }
          break;
        case 'RGB':
          [this.R, this.G, this.B] = value;
          [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
          // let colors = rgbToHsl(this.R, this.G, this.B);
          // [this.H, this.S, this.L] = colors
          if (this.paintHelper) {
            this.alphaCanvsSetHue(this.$refs.alpha)
          }
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

      // this.currentColor = this.HEX
      // this.$emit('input', this.currentColor)
      // this.$emit('change', this.currentColor)

      this.updateValue()
    },
    updateValue() {
      let { currentMode, R, G, B, A, H, S, L, } = this, value = null;
      if (currentMode == 'hex') {
        value = this.HEX
      } else if (currentMode == 'rgba') {
        value = A < 1 ? `rgba(${R},${G},${B},${A})` : `rgba(${R},${G},${B})`
      } else {
        value = A < 1 ? `hsla(${H},${S}%,${L}%,${A})` : `hsl(${H},${S}%,${L}%)`
      }
      // console.log(value)
      this.currentColor = value
      this.$emit('input', value)
      this.$emit('change', value)
      // this.opened = false
    },
    setMode() {
      let i = modes.indexOf(this.currentMode) + 1
      i = i > 2 ? 0 : i
      this.currentMode = modes[i]
      this.updateValue()
    },
    initHueCanvas(canvas) {
      const ctx = canvas.getContext('2d', { willReadFrequently: true }),
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
      if (this.noAlpha || !canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true }),
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

        this.paintPointer.x = x - 7 + 10
        this.paintPointer.y = y - 7 + 10
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
        attrs: { width: 234, height: 136 },
        ref: 'paint'
      }
      return <canvas {...prop} />
    },
    renderAlpha() {
      let prop = {
        class: 'k-color-picker-alpha',
        attrs: { width: 190, height: 8 },
        ref: 'alpha'
      }
      return !this.noAlpha ? <canvas {...prop} /> : null
    },
    renderHue() {
      let prop = {
        class: 'k-color-picker-hue',
        attrs: { width: 190, height: 8 },
        ref: 'hue'
      }
      return <canvas {...prop} />
    },
    renderValueInput(key) {
      let prop = {
        attrs: {
          maxlength: key == 'HEX' ? 9 : 4
        },
        props: {
          value: this[key] + ('SL'.indexOf(key) >= 0 ? '%' : ''),
          size: "small",
        },
        on: {
          "input": e => {
            let value = e.replace('%', '')
            if (!value) return;
            if (key == 'HEX') {
              value = value.toString().toLowerCase()
              if (/^#([0-9A-F]{6}|[0-9A-F]{3}|[0-9A-F]{8})$/i.test(value)) {
                [this.R, this.G, this.B, this.A] = cssColorToRgba(value) || [this.R, this.G, this.B, this.A];
                [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
              } else {
                return;
              }
            } else if (key == 'A') {
              if (!/^\d(.)\d*$/.test(value) || value > 1) return;
            } else {
              if (!/^\d*$/.test(value)) return;
            }

            this[key] = value
            // console.log(e,key)
            if ('RGB'.indexOf(key) >= 0) {
              [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
            }
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
        let mode = "RGB"
        let alpha = <Input v-model={this.A} size="small" class="k-color-picker-alpha-input" />
        if (currentMode == 'rgba') {
          let keys = ['R', 'G', 'B']
          let v = <div class="k-color-picker-val">{keys.map(k => renderValueInput(k))}{alpha}</div>
          // let k = <div class="k-color-picker-key">{keys.map(k => <span>{k}</span>)}</div>
          node.push(v)
        } else if (currentMode == 'hsla') {
          mode = 'HSB'
          let keys = ['H', 'S', 'L']
          let v = <div class="k-color-picker-val">{keys.map(k => renderValueInput(k))}{alpha}</div>
          // let k = <div class="k-color-picker-key">{keys.map(k => <span>{k}</span>)}</div>
          node.push(v)
        } else { //hex
          mode = 'HEX'
          let v = <div class="k-color-picker-val">{renderValueInput('HEX')}{alpha}</div>
          // let k = <div class="k-color-picker-key"><span>HEX</span></div>
          node.push(v)
        }
        node.unshift(<span class="k-color-picker-mode-label">{mode}:</span>)
        let btn = <Button size="small" theme="normal" icon={CaretHor} onClick={this.setMode} />
        node.push(btn)
        return <div class={`k-color-picker-mode k-color-picker-${currentMode}`}>{node}</div>
      }
    },
    renderDefaultColor() {
      let color = this.defalutColors.map(c => <span style={"background-color:" + c} onClick={e => this.valueChange('COLOR', c)}></span>)
      // let okBtn = <Button circle onClick={this.updateValue}>OK</Button>
      return <div class="k-coclor-picker-defaults">{[color]}</div>
    },
    renderDrop() {
      let paint = this.renderPaint()
      let alpha = this.renderAlpha()
      let hue = this.renderHue()
      // let colors = this.renderDefaultColor()
      let valueNode = this.renderValue()

      const props = {
        ref: 'overlay',
        props: {
          placement: 'bottom-left',
          transfer: true,
          value: this.opened,
          selection: this.$el,
          className: 'k-color-picker-dropdown',
          transitionName: 'k-color-picker'
        },
        on: {
          input: e => {
            this.opened = e
            this.currentColor = this.value || '#000'
          },
          hide: () => {
            this.opened = false
            // this.currentColor = this.value || '#000'
          },
          render: () => {
            this.$nextTick(() => {
              let { paint, hue, alpha } = this.$refs
              this.paintHelper = canvasHelper(paint);
              this.initHueCanvas(hue);
              (!this.noAlpha && this.initAlphaCanvas(alpha));
              this.initPaintCanvas(paint)
              this.valueChange('COLOR', this.value)
            })
          },
        }
      }
      let [r, g, b] = hslToRgb(this.H, this.S, this.L);
      return (<Drop {...props}>
        {paint}
        < span class="k-color-picker-paint-dot" style={'left:' + this.paintPointer.x + 'px;top:' + this.paintPointer.y + 'px'} ></span >
        <div class="k-color-picker-bar">
          <div class="k-color-picker-avatar">
            <div class="k-color-picker-avatar-inner" style={`background-color:rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`}></div>
          </div>
          <div class="k-color-picker-bar-box">
            {[hue, alpha]}
            <span class="k-color-picker-hue-dot" style={{ 'left': this.huePointer.x + 'px', backgroundColor: `rgba(${r},${g},${b},1` }}></span>
            {!this.noAlpha ? <span class="k-color-picker-alpha-dot" style={{ 'left': this.alphaPointer.x + 'px', backgroundColor: `rgba(${r},${g},${b},${this.A}` }} ></span> : null}
          </div>
        </div>
        {valueNode}
        {this.renderDefaultColor()}
      </Drop >
      )
    }
  },

  render() {
    let drop = this.renderDrop()
    let { showArrow, icon, currentMode } = this
    let style = [
      'k-color-picker',
      {
        'k-color-picker-opened': this.opened,
        'k-color-picker-disabled': this.disabled,
        'k-color-picker-sm': this.size == 'small',
        'k-color-picker-circle': this.shape == 'circle' && !showArrow,
        'k-color-picker-lg': this.size == 'large'
      },
    ]
    // let triggerText = ""
    // if (currentMode == 'hex') {
    //   triggerText = this.currentColor
    // } else {
    //   triggerText = this.currentColor.substr(0, 7)
    // }


    return (<div class={style} >
      <div class="k-color-picker-selection" onClick={this.toggleDrop}>
        <div class="k-color-picker-color">
          <div class="k-color-picker-color-inner" style={`background-color:${this.currentColor}`}></div>
        </div>
        {/* <div class="k-color-picker-trigger-text">{triggerText}</div> */}
        {showArrow && <Icon class="k-color-picker-arrow" type={icon || ChevronDown} />}
      </div>
      {drop}
    </div >)
  }
}