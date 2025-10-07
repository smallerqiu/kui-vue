import { withInstall } from '../utils/vue'
const TabPanel = {
  name: "TabPanel",
  props: {
    title: String,
    icon: [String, Array],
    disabled: Boolean,
    closable: Boolean
  },
  inject: {
    Tabs: { default: {} },
  },
  beforeDestroy() {
    this.Tabs && this.Tabs.resetNavPosition();
  },
  mounted() {
    this.Tabs && this.Tabs.resetNavPosition();
  },
  render() {
    return (
      <div class={['k-tabs-tabpanel', { 'k-tabs-tabpanel-active': this.Tabs.activeKey == this.$vnode.key }]}>
        {this.$slots.default}
      </div>
    )
  }
}
export default withInstall(TabPanel)