import { canvasHelper, limit, hslToRgb, rgbToHsl, parseColor, rgbToHex, cssColorToRgba } from './canvasHelper'
import { Input } from '../input'
import Button from '../button'
import Icon from '../icon'
import Drop from '../base/drop'

const modes = ['rgba', 'hex', 'hsla']

export default {
  name: 'ColorPicker',
  props: {
    value: String,
    transfer: { type: Boolean, default: true },
    showMode: Boolean,
    disabled: Boolean,
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
    defalutColors: {
      type: Array, default: () => ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#000'],
      validator: function (value) { return value.length <= 20 }
    }
  },
  // watch: {
  //   value(v1, v2) {
  //     console.log(v1, v2, this.currentColor)
  //     if (v1 != this.currentColor) {
  //       // this.valueChange('COLOR', v1)
  //     }
  //   }
  // },
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
          [this.R, this.G, this.B] = hslToRgb(this.H, this.S, this.L);
          this.paintHelper.setHue(value);
          this.alphaCanvsSetHue(this.$refs.alpha);
          break;
        case 'RGB':
          [this.R, this.G, this.B] = value;
          [this.H, this.S, this.L] = rgbToHsl(this.R, this.G, this.B);
          // let colors = rgbToHsl(this.R, this.G, this.B);
          // [this.H, this.S, this.L] = colors
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
      let { currentMode, R, G, B, A, H, S, L, } = this, value = null;
      if (currentMode == 'hex') {
        value = this.HEX
      } else if (currentMode == 'rgba') {
        value = `rgba(${R},${G},${B},${A})`
      } else {
        value = A < 1 ? `hsla(${H},${S}%,${L}%,${A})` : `hsl(${H},${S}%,${L}%)`
      }
      // console.log(value)
      this.currentColor = value
      this.$emit('input', value)
      this.$emit('change', value)
      this.opened = false
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
        let btn = <Button icon="flash" size="small" circle onClick={this.setMode} />
        node.push(btn)
        return <div class={`k-color-picker-mode k-color-picker-${currentMode}`}>{node}</div>
      }
    },
    renderDefaultColor() {
      let color = this.defalutColors.map(c => <span style={"background-color:" + c} onClick={e => this.valueChange('COLOR', c)}></span>)
      let okBtn = <Button icon="color-fill" circle onClick={this.updateValue} />
      return <div class="k-coclor-picker-defaults">{[color, okBtn]}</div>
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
          transfer: this.transfer,
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
            this.currentColor = this.value || '#000'
          },
          render: () => {
            this.$nextTick(() => {
              let { paint, hue, alpha } = this.$refs
              this.paintHelper = canvasHelper(paint)
              this.initHueCanvas(hue)
              this.initAlphaCanvas(alpha)
              this.initPaintCanvas(paint)
              this.valueChange('COLOR', this.value)
            })
          },
        }
      }
      return (<Drop {...props}>
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
      </Drop>
      )
    }
  },

  render() {
    let drop = this.renderDrop()
    let style = [
      'k-color-picker',
      {
        'k-color-picker-disabled': this.disabled,
        'k-color-picker-sm': this.size == 'small',
        'k-color-picker-lg': this.size == 'large'
      },
    ]
    return (<div class={style}>
      <div class="k-color-picker-selection" onClick={this.toggleDrop}>
        <div class="k-color-picker-color">
          <div class="k-color-picker-color-inner" style={`background-color:${this.currentColor}`}></div>
        </div>
        <Icon type="chevron-down" />
      </div>
      {drop}
    </div >)
  }
}