import Icon from '../icon'
import { getChild } from '../_tool/utils'
import { Sync } from 'kui-icons'
export default {
  name: "Button",
  props: {
    htmlType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].indexOf(value) >= 0;
      }
    },
    icon: [String, Array],
    block: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    loading: Boolean,
    type: {
      validator(value) {
        return (
          ["danger", "primary", 'warning', "link", "default", "dashed"].indexOf(value) >= 0
        );
      },
      default: 'default'
    },
    disabled: Boolean,
    theme: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'light', 'solid', 'normal', 'card'].indexOf(value) > -1
      }
    },
    shape: String,
    href: String,
    target: String
  },
  methods: {
    click(e) {
      if (!this.loading) {
        this.$emit('click', e)
      }
    }
  },

  render() {
    const { $slots, $attrs, size, disabled, click, theme, href, target,
      shape, htmlType, icon, loading, $listeners, type, block } = this
    const onlyIcon = !getChild($slots.default, 'Drop').length && icon
    const classes = [
      "k-btn",
      {
        [`k-btn-${type}`]: !!type && type != 'default',
        ["k-btn-sm"]: size == 'small',
        ["k-btn-block"]: !!block,
        ["k-btn-loading"]: loading,
        ["k-btn-icon-only"]: onlyIcon,
        ["k-btn-lg"]: size == 'large',
        ["k-btn-circle"]: shape == 'circle',
        [`k-btn-${theme}`]: !!theme && theme != 'default',
      }
    ]
    const props = {
      attrs: { ...$attrs, disabled, type: htmlType },
      class: classes,
      on: {
        ...$listeners,
        click: click
      }
    }
    const iconType = loading ? Sync : icon;
    const iconNode = iconType ? <Icon type={iconType} spin={loading} /> : null
    const child = getChild($slots.default)
    const childs = child.map(c => {
      return typeof c.text == 'string' ? <span>{c.text.trim()}</span> : c
    })
    const is_link = type == 'link' && href
    return is_link ? <a href={href} target={target} {...props}>{iconNode}{childs}</a> : <button {...props} >
      {iconNode}
      {childs}
    </button >
  }
};