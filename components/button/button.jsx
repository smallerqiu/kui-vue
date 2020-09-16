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
    mini: Boolean,
    large: Boolean,
    loading: Boolean,
    circle: Boolean,
    hollow: Boolean,
    type: {
      validator(value) {
        return (
          ["danger", "primary", "warning", "success", "gray", "link", "default"].indexOf(value) >= 0
        );
      },
      default: 'default'
    },
    disabled: Boolean
  },
  computed: {
    classes() {
      const { type, mini, loading, large, circle, hollow, $slots, icon } = this
      const onlyIcon = !getChild($slots.default).length && icon
      return [
        "k-btn",
        {
          [`k-btn-${type}`]: !!type,
          ["k-btn-mini"]: !!mini,
          ["k-btn-block"]: !!this.block,
          ["k-btn-loading"]: loading,
          ["k-btn-icon-only"]: onlyIcon,
          ["k-btn-lg"]: !!large && !mini,
          ["k-btn-circle"]: !!circle,
          ["k-btn-hollow"]: !!hollow
        }
      ];
    }
  },
  methods: {
    click(e) {
      if (!this.loading) {
        this.$emit('click', e)
      }
    }
  },

  render() {
    const { classes, $slots, $attrs, disabled, click, buttonType, icon, loading, $listeners } = this
    const props = {
      attrs: { ...$attrs, disabled },
      class: classes,
      on: {
        ...$listeners,
        click: click
      }
    }
    const iconType = loading ? 'ios-sync' : icon;
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
      <button type={buttonType} {...props} >
        {iconNode}
        {kid}
      </button >
    )
    return button
  }
};