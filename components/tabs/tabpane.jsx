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
    collectTabPanes: { default: () => { } }
  },
  created() {
    this.collectTabPanes(this, 'add')
  },
  beforeDestroy() {
    this.collectTabPanes(this, 'delete')
  },
  render() {
    return (
      <div class={['k-tabs-tabpane', { 'k-tabs-tabpane-active': this.Tabs.activeKey == this.$vnode.key }]}>
        {this.$slots.default}
      </div>
    )
  }
}