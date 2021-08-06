import Icon from "../icon";
export default {
  name: 'Card',
  props: {
    bordered: { type: Boolean, default: true },
    title: String,
    icon: String
  },
  render() {
    const { title, icon, $slots, bordered } = this
    const classes = ['k-card', {
      ['k-card-bordered']: bordered
    }]
    const extra = $slots.extra ? <div class="k-card-extra">{$slots.extra}</div> : null
    const iconNode = icon ? <Icon type={icon} /> : null
    const titleNode = title ? <span class="k-card-title">{title}</span> : $slots.title || null
    return (
      <div class={classes}>
        <div class="k-card-head">{iconNode}{titleNode}{extra}</div>
        {$slots.default ? <div class="k-card-body">{$slots.default}</div> : null}
      </div>
    )
  }
}