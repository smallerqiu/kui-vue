import Icon from '../icon'
import { Close } from 'kui-icons'
export default {
  name: 'Tag',
  props: {
    closeable: Boolean,
    color: String
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
    const { visible, styles, handle, color, $slots, close, classes, closeable } = this
    const props = {
      on: {
        ...this.$listeners
      },
      class: ['k-tag', {
        [`k-tag-${color}`]: color && !/^#/.test(color),
        ['k-tag-has-color']: /^#/.test(color)
      }],
      style: { backgroundColor: /^#/.test(color) ? color : null }
    }
    return (
      <transition name="k-tag">
        <div {...props} v-show={visible}>
          <span class="k-tag-text">
            {$slots.default}
          </span>
          {closeable ? <Icon class="k-tag-close" type={Close} onClick={close} /> : null}
        </div>
      </transition>
    )
  }
}