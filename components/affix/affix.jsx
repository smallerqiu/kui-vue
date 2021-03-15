
import resize from '../_tool/resize'

function getOffset(element, target) {
  let { top, height, width } = element.getBoundingClientRect()
  if (target === document) target = target.documentElement
  let targetRect = (target !== window) ? target.getBoundingClientRect() : { top: 0, let: 0, bottom: 0 }

  let scrollTop = (target !== window) ? target.scrollTop : target.pageYOffset
  if (target !== window) {
    top = element.offsetTop - element.parentElement.offsetTop
  }
  return {
    top, height, width, scrollTop,
    targetTop: targetRect.top,
    targetHeight: targetRect.height,
    targetInnerHeight: target.innerHeight || target.clientHeight
  }
}

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
      offsetModeOfTop: false,
      offsetModeOfBottom: false,
      offsetTopValue: this.offsetTop,
      offsetBottomValue: this.offsetBottom
    }
  },

  mounted() {
    let target = this.target()
    if (target) {
      target.addEventListener('scroll', e => {
        // console.log(e)
        this.updatePosition(e)
        // console.log(e)
      })
    }
    // this.updatePosition(target)
  },
  methods: {
    updatePosition(e) {
      let { offsetBottom, offsetTop, $refs } = this
      if (!$refs.blob) return;

      let target = this.target()

      let { top, height, width, targetInnerHeight, scrollTop, targetTop } = getOffset($refs.blob, target)

      offsetTop = target === window ? offsetTop : scrollTop
      if (this.fixed) {

        if (typeof offsetBottom != undefined && offsetBottom >= 0) {
          // unfixedBottom
          // this.offsetModeOfBottom = false
          if (0 >= top + height + offsetBottom - targetInnerHeight) {
            this.offsetModeOfBottom = false
            this.fixed = false
          }
        } else if (top >= offsetTop) { // unfixedTop
          this.offsetModeOfTop = false
          this.fixed = false
        }
        if (target !== window && top !== targetTop) {
          this.offsetTopValue = targetTop
        }
        if (!this.fixed) {
          this.fixed = false
          this.$emit('change', false)
        }
      } else {
        if (typeof offsetBottom != undefined && offsetBottom >= 0) {
          //fixedBottom
          if (0 <= top + height + offsetBottom - targetInnerHeight) {
            this.offsetModeOfBottom = true
            this.fixed = true
          }
        } else {
          if (top <= offsetTop) { //fixedTop
            this.fixed = true
            this.offsetModeOfTop = true
            if (target !== window) {
              this.offsetTopValue = targetTop
            }
          }
        }
        if (this.fixed) {
          this.$emit('change', true)
          this.width = width
          this.height = height
        }
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
        height: `${this.height}px`
      }
      if (this.offsetModeOfBottom) {
        fixedStyle.bottom = `${this.offsetBottom}px`
      }
      if (this.offsetModeOfTop) {
        fixedStyle.top = `${this.offsetTopValue}px`
      }
      classes = { ['k-affix']: this.fixed }
    }

    return (
      <div style={blobStyle} ref="blob" v-resize={this.updatePosition}>
        <div style={fixedStyle} class={classes} ref="affix" >
          {this.$slots.default}
        </div>
      </div>
    )
  }
}