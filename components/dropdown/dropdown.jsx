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
  data() {
    return {
      visible: this.value
    }
  },
  watch: {
    value(visible) {
      this.visible = visible
      console.log('www')
    }
  },
  render() {
    let props = {
      props: {
        preCls: 'dropdown',
        ...this.$props,
        value: this.visible
        // showPlacementArrow: true,
      },
      on: {
        'input': e => {
          // this.visible = e
          console.log('eeeee')
          this.$emit('input', e)
        }
      }
    }
    if (!hasProp(this, 'value')) {
      delete props.props.value
    }

    let child = (this.$slots.content || [])[0]
    child && (child.componentOptions.propsData.parentName = 'dropdown')
    return (
      <PopBase {...props}>
        {this.$slots.default}
        <template slot="content">{child}</template>
      </PopBase>
    )
  }
};