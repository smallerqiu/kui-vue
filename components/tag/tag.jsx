import Icon from '../icon'
import { Close } from 'kui-icons'
export default {
  name: 'Tag',
  props: {
    closeable: Boolean,
    color: String,
    shape: String,
    icon: [String, Array],
    size: {
      default: 'small',
      validator(value) {
        return ["small", "large", "middle"].indexOf(value) >= 0;
      }
    },
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    close(e) {
      this.$emit('close', e)
      this.visible = false
    }
  },
  render() {
    const { visible, styles, shape, icon, size, color, $slots, close, classes, closeable } = this
    const props = {
      on: {
        ...this.$listeners
      },
      class: ['k-tag', {
        ["k-tag-sm"]: size == 'small',
        ["k-tag-lg"]: size == 'large',
        [`k-tag-${color}`]: color && !/^#/.test(color),
        ["k-tag-circle"]: shape == 'circle',
        ['k-tag-has-color']: /^#/.test(color),
        ['k-tag-closeable']: closeable
      }],
      style: { backgroundColor: /^#/.test(color) ? color : null }
    }
    return (
      <transition name="k-tag">
        <div {...props} v-show={visible}>
          {icon ? <Icon class="k-tag-icon" type={icon} /> : null}
          <span class="k-tag-text">
            {$slots.default}
          </span>
          {closeable ? <Icon class="k-tag-close" type={Close} onClick={close} /> : null}
        </div>
      </transition>
    )
  }
}