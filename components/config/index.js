import { withInstall } from "../utils/vue";
import { defineComponent, provide, ref, watch, getCurrentInstance } from "vue";
import { setAppContext } from "./context";
const ConfigProvider = defineComponent({
  name: "ConfigProvider",
  props: {
    locale: {
      type: Object,
      default: () => null,
    },
    // theme: {
    //   type: Object,
    //   default: () => null,
    // },
  },
  setup(props, { slots }) {
    const locale = ref(props.locale);
    provide("locale", locale);
    const context = getCurrentInstance();
    setAppContext(context);
    // for 2
    watch(
      () => props.locale,
      (newVal) => {
        locale.value = newVal;
      },
      { immediate: true }
    );
    return () => {
      return slots.default?.();
    };
  },
});

export default withInstall(ConfigProvider);
