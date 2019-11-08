export default {
  name: 'Tag',
  props: {
    closeable: { type: Boolean, default: false },
    color: String
  },
  data() {
    return {
      visible: true,
      isDefaultColor: ['blue', 'red', 'orange', 'gray', 'green'].indexOf(this.color) >= 0
    }
  },
  computed: {
    classes() {
      return ['k-tag', {
        [`k-tag-${this.color}`]: this.isDefaultColor,
        ['k-tag-has-color']: this.color
      }]
    },
    styles() {
      return this.isDefaultColor ? {} : { backgroundColor: this.color }
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
    const { visible, styles, handle, $slots, close, classes, closeable } = this
    const props = {
      on: {
        click: handle
      },
      class: classes,
      style: styles
    }
    return (
      visible ? <transition name="fade">
        <div {...props}>
          <span class="k-tag-text">
            {$slots.default}
          </span>
          {closeable ? <i class="k-ion-md-close" onClick={close} /> : null}
        </div>
      </transition> : null
    )
  }
}