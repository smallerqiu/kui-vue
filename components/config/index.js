
import { defineComponent, getCurrentInstance, provide, ref, watch } from "vue";
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
    const instance = getCurrentInstance();
    if (instance && instance.appContext) {
      instance.appContext.provides["locale"] = locale;
    }
    const context = getCurrentInstance();
    setAppContext(context);
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

export default ConfigProvider;
