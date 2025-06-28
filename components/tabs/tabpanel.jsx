import { defineComponent, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
import { withInstall } from '../utils/vue';
const TabPanel = defineComponent({
  name: "TabPanel",
  props: {
    title: String,
    icon: [String, Array],
    disabled: Boolean,
    closable: Boolean,
    activeKey: String,
    key: String,
  },
  setup(ps, { emit, slots }) {
    onMounted(() => emit("reset-nav-position"));
    onBeforeUnmount(() => emit("reset-nav-position"));
    const instance = getCurrentInstance();

    return () => {
      return (
        <div class={["k-tabs-tabpane", { "k-tabs-tabpane-active": ps.activeKey == instance.vnode.key }]}>
          {slots.default?.()}
        </div>
      );
    };
  },
});
export default withInstall(TabPanel);
