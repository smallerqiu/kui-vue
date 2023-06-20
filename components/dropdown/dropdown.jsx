import PopBase from '../base/pop'

export default {
  name: 'Dropdown',
  props: {
    dark: Boolean,
    trigger: { type: String, default: "hover" },
    transfer: { type: Boolean, default: true },
    showPlacementArrow: Boolean,
    value: Boolean,
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].indexOf(value) >= 0
        );
      },
      default: "bottom-left"
    },
  },
  provide() {
    return {
      Dropdown: this
    }
  },
  data() {
    return {
      visible: this.value || false
    }
  },
  watch: {
    value(v) {
      this.visible = v
    }
  },
  render() {
    let props = {
      props: {
        preCls: 'dropdown',
        ...this.$props,
        value: this.visible
      },
      on: {
        input: e => {
          this.visible = e
          this.$emit('input', e)
        }
      }
    }
    return (
      <PopBase {...props}>
        {this.$slots.default}
        <template slot="content">{this.$slots.content}</template>
      </PopBase >
    )
  },
  methods: {
    handleClick(options) {
      this.$emit('click', options)
      this.visible = false
      this.$emit('input', false)
    }
  }
};