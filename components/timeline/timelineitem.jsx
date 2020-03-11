import Icon from '../icon'
export default {
  name: "TimeLineItem",
  props: {
    color: String,
    icon: String
  },
  render() {
    const styles = { color: this.color }
    let { icon } = this
    const type = icon ? icon : "ios-radio-button-off";
    const iconNode = this.$slots.dot || <Icon type={type} />
    const iconCls = ['k-time-line-dot', { 'k-time-line-icon-default': !icon }]

    return (
      <li class="k-time-line-item">
        <div class={iconCls} style={styles}>
          {iconNode}
        </div>
        <div class="k-time-line-item-content">
          {this.$slots.default}
        </div>
      </li>
    )
  }
};