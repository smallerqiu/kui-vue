import { withInstall } from '../utils/vue'
const TabPanel = {
  name: "TabPanel",
  props: {
    title: String,
    icon: [String, Array],
    disabled: Boolean,
    closable: Boolean,
    activeKey: String,
  },
  mounted() {
    this.$emit("resetNavPosition");
  },
  beforeDestroy() {
    this.$emit("resetNavPosition");
  },
  render() {
    const key = this.$vnode && this.$vnode.key;
    const isActive = this.activeKey === key;

    return (
      <div class={["k-tabs-tabpanel", { "k-tabs-tabpanel-active": isActive }]}>
        {this.$slots.default}
      </div>
    );
  },
};
export default withInstall(TabPanel)