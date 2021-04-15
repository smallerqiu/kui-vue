import Icon from '../icon'
import { getChild } from '../_tool/utils'
export default {
  name: "Button",
  props: {
    buttonType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].indexOf(value) >= 0;
      }
    },
    icon: String,
    block: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    loading: Boolean,
    circle: Boolean,
    hollow: Boolean,
    type: {
      validator(value) {
        return (
          ["danger", "primary", "link", "default", "dashed"].indexOf(value) >= 0
        );
      },
      default: 'default'
    },
    disabled: Boolean
  },
  methods: {
    click(e) {
      if (!this.loading) {
        this.$emit('click', e)
      }
    }
  },

  render() {
    const { $slots, $attrs, size, disabled, click,
      circle, hollow, buttonType, icon, loading, $listeners, type, block } = this
    const onlyIcon = !getChild($slots.default).length && icon
    const classes = [
      "k-btn",
      {
        [`k-btn-${type}`]: !!type,
        ["k-btn-sm"]: size == 'small',
        ["k-btn-block"]: !!block,
        ["k-btn-loading"]: loading,
        ["k-btn-icon-only"]: onlyIcon,
        ["k-btn-lg"]: size == 'large',
        ["k-btn-circle"]: !!circle,
        ["k-btn-hollow"]: !!hollow
      }
    ]
    const props = {
      attrs: { ...$attrs, disabled, type: buttonType },
      class: classes,
      on: {
        ...$listeners,
        click: click
      }
    }
    const iconType = loading ? 'sync' : icon;
    const iconNode = iconType ? <Icon type={iconType} spin={loading} /> : null
    const child = getChild($slots.default)
    const kid = child.map(c => {
      if (typeof c.text == 'string') {
        let text = c.text.trim()
        return <span>{text}</span>
      }
      return c
    })
    const button = (
      <button {...props} >
        {iconNode}
        {kid}
      </button >
    )
    return button
  }
};