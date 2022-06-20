import Icon from '../icon'
export default {
  name: "TimeLineItem",
  props: {
    color: String,
    icon: [String, Array],
    time: String,
    extra: String,
  },
  render() {
    let { icon, color, time } = this
    const styles = { color }
    const iconNode = this.$slots.dot || (icon ? <Icon type={icon} /> : <span class="k-time-line-head"></span>)
    const iconCls = ['k-time-line-dot']
    let extra = this.extra || this.$slots.extra
    return (
      <li class="k-time-line-item">
        <div class={iconCls} style={styles}>
          {iconNode}
        </div>
        <div class="k-time-line-item-content">
          {this.$slots.default}
          {extra && <div class="k-time-line-item-extra">{extra}</div>}
          {time && <div class="k-time-line-item-time">{time}</div>}
        </div>
      </li>
    )
  }
};