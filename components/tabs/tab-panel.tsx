import {
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { IconType } from "../icon";
import type { TabKey } from "./types";

export const tabPanelProps = {
  title: String,
  icon: [Array] as PropType<IconType[]>,
  disabled: Boolean,
  closable: Boolean,
  activeKey: [String, Number] as PropType<TabKey>,
};

export type TabPanelProps = ExtractPropTypes<typeof tabPanelProps>;

const TabPanel = defineComponent({
  name: "TabPanel",
  props: tabPanelProps,
  emits: ["resetNavPosition"],
  setup(props, { emit, slots }) {
    onMounted(() => emit("resetNavPosition"));
    onBeforeUnmount(() => emit("resetNavPosition"));

    const instance = getCurrentInstance();
    const key = instance && instance.vnode ? (instance.vnode.key as TabKey) : undefined;

    return () => {
      return (
        <div class={["k-tabs-tabpanel", { "k-tabs-tabpanel-active": props.activeKey === key }]}>
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default TabPanel;
