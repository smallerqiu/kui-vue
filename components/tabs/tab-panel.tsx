import {
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import type { BooleanType } from "../const/types";
import type { IconType } from "../icon";
const tabPanelProps = {
  title: [String, Object] as PropType<VNodeChild>,
  icon: Array as PropType<IconType[]>,
  disabled: Boolean as BooleanType,
  closable: Boolean as BooleanType,
};
export type TabPanelProps = ExtractPropTypes<typeof tabPanelProps>;
const TabPanel = defineComponent({
  name: "TabPanel",
  props: tabPanelProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const key = instance?.vnode.key;
    const activeKey = inject<Ref<string | null>>("tabActiveKey", ref(null));
    const tabUpdateNav = inject<(() => void) | null>("tabUpdateNav", null);
    const tabsId = inject("tabsId", "k-tabs-default");

    onMounted(() => tabUpdateNav?.());
    onBeforeUnmount(() => tabUpdateNav?.());
    watch(
      () => props.title,
      () => tabUpdateNav?.(),
      { flush: "post" },
    );
    // console.log(activeKey.value, key);
    return () => {
      return (
        <div
          id={`${tabsId}-panel-${String(key)}`}
          class={[
            "k-tabs-tabpanel",
            { "k-tabs-tabpanel-active": String(activeKey.value) === String(key) },
          ]}
          role="tabpanel"
          aria-labelledby={`${tabsId}-tab-${String(key)}`}
          aria-hidden={String(activeKey.value) !== String(key)}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});
export default TabPanel;
