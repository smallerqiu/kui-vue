export default {
  name: "Tabs",
  props: {
    title: String,
    icon: String,
    disabled: Boolean,
    closable: Boolean
  },
  inject: {
    Tabs: { default: {} },
  },
  render() {
    return (
      <div class={['k-tabs-tabpane', { 'k-tabs-tabpane-active': this.Tabs.activeKey == this.$vnode.key }]}>
        {this.$slots.default}
      </div>
    )
  }
}