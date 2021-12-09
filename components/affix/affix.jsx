
import resize from '../_tool/resize'

// function getStyle(el, attr) {
//   if (el.currentStyle) {
//     return el.currentStyle[attr];
//   } else {
//     return getComputedStyle(el, false)[attr];
//   }
// }

export default {
  name: 'Affix',
  directives: { resize },
  props: {
    offsetTop: { type: Number, default: 0 },
    offsetBottom: Number,
    target: { type: Function, default: () => { return window } }
  },
  data() {
    return {
      fixed: false,
      width: 0,
      height: 0,
      offsetTopValue: 0,
    }
  },

  mounted() {
    let target = this.target()
    if (target) {
      target.addEventListener('scroll', e => {
        this.updatePosition(e)
      })
    }
  },
  methods: {
    updatePosition(e) {
      let { offsetBottom, offsetTop, $refs } = this
      let target = this.target()
      if (!$refs.blob || !target) return;

      let rect = $refs.blob.getBoundingClientRect();
      let rect2 = target != window && target != document ? target.getBoundingClientRect() : { top: 0, bottom: document.documentElement.clientHeight }

      let hasbottom = typeof offsetBottom == 'number' && offsetBottom >= 0
      let fx = hasbottom ? rect2.bottom - rect.bottom >= offsetBottom : rect.top - rect2.top <= offsetTop
      if (!fx) {
        this.offsetTopValue = rect.top
      }
      if (this.fixed != fx) {
        this.fixed = fx
        this.$emit('change', this.fixed)
        this.width = rect.width
        this.height = rect.height
      }
    }
  },
  render() {
    let blobStyle = null, fixedStyle = null, classes = null;
    if (this.fixed) {
      blobStyle = {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
      fixedStyle = {
        width: `${this.width}px`,
        height: `${this.height}px`,
        top: `${this.offsetTopValue}px`
      }
      classes = { ['k-affix']: this.fixed }
    }

    return (
      <div style={blobStyle} ref="blob" v-resize={this.updatePosition}>
        <div style={fixedStyle} class={classes}>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}