import {
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import type { BooleanType } from "../const/types";
import type { IconType } from "../icon";
export const tabPanelProps = {
  title: String,
  icon: Array as PropType<IconType[]>,
  disabled: Boolean as BooleanType,
  closable: Boolean as BooleanType,
};
export type TabPanelProps = ExtractPropTypes<typeof tabPanelProps>;
const TabPanel = defineComponent({
  name: "TabPanel",
  props: tabPanelProps,
  setup(_, { slots }) {
    const instance = getCurrentInstance();
    const key = instance?.vnode.key;
    const activeKey = inject<Ref<string | null>>("tabActiveKey", ref(null));
    const tabUpdateNav = inject<(() => void) | null>("tabUpdateNav", null);

    onMounted(() => tabUpdateNav?.());
    onBeforeUnmount(() => tabUpdateNav?.());
    // console.log(activeKey.value, key);
    return () => {
      return (
        <div class={["k-tabs-tabpanel", { "k-tabs-tabpanel-active": activeKey.value == key }]}>
          {slots.default?.()}
        </div>
      );
    };
  },
});
export default TabPanel;
