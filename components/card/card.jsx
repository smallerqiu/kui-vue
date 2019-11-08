import Icon from "../icon";
export default {
  name: 'Card',
  props: {
    bordered: Boolean,
    title: String,
    icon: String
  },
  computed: {
    classes() {
      return ['k-card', {
        ['k-card-bordered']: this.bordered
      }]
    }
  },
  render() {
    const { title, classes, icon, $slots } = this
    return (
      <div class={classes}>
        <div class="k-card-head">
          {icon ? <Icon type={icon} /> : null}
          {title ? <p>{title}</p> : $slots.title || null}
        </div>
        {$slots.extra ?
          <div class="k-card-extra">{$slots.extra}</div>
          : null}
        {$slots.default ?
          <div class="k-card-body">{$slots.default}</div>
          : null}
      </div>
    )
  }
}