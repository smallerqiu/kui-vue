import PopBase from '../base/pop'
import { hasProp } from "../_tool/utils";

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
      visible: this.value
    }
  },
  watch: {
    value(v) {
      this.visible = v
      // console.log('www')
    }
  },
  render() {
    // let data = Object.assign(this.$props, { value: this.visible })
    let props = {
      props: {
        preCls: 'dropdown',
        // ...data,
        ...this.$props,
        value: this.visible
        // showPlacementArrow: true,
      },
      on: {
        'input': e => {
          // console.log(e)
          this.visible = e
          this.$emit('input', e)
        }
      }
    }
    // if (!hasProp(this, 'value')) {
    // delete props.props.value
    // }
    let child = (this.$slots.content || [])[0]
    return (
      <PopBase {...props}>
        {this.$slots.default}
        <template slot="content">{child}</template>
      </PopBase>
    )
  },
  methods: {
    handleClick(options) {
      // console.log('ww')
      this.$emit('click', options)
      this.visible = false
      this.$emit('input', false)
    }
  }
};