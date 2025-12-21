import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";
import { withInstall } from "../utils/vue";
const TabPanel = defineComponent({
  name: "TabPanel",
  props: {
    title: String,
    icon: [String, Array],
    disabled: Boolean,
    closable: Boolean,
    activeKey: [String, Number],
    // key: String,
  },
  setup(ps, { emit, slots }) {
    onMounted(() => emit("resetNavPosition"));
    onBeforeUnmount(() => emit("resetNavPosition"));
    const instance = getCurrentInstance();
    const key = instance.vnode.key;
    return () => {
      return (
        <div
          class={[
            "k-tabs-tabpanel",
            { "k-tabs-tabpanel-active": ps.activeKey == key },
          ]}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});
export default withInstall(TabPanel);
