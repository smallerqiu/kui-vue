import Icon from '../icon'
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
    handle(e) {
      this.$emit('click', e)
    },
    close(e) {
      this.$emit('close', e)
      this.visible = false
    }
  },
  render() {
    const { visible, styles, handle, color, $slots, close, classes, closeable } = this
    const props = {
      on: {
        click: handle
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
          {closeable ? <Icon class="k-tag-close" type="close" onClick={close} /> : null}
        </div>
      </transition>
    )
  }
}