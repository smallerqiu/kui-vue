import {
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { setAppContext } from "./context";
import { popupContainerKey, type PopupContainerGetter } from "./popup";
const configProviderProps = {
  locale: {
    type: Object,
    default: () => null,
  },
  getPopupContainer: Function as PropType<PopupContainerGetter>,
};

export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>;

const ConfigProvider = defineComponent({
  name: "ConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    const locale = ref(props.locale);
    provide("locale", locale);
    if (props.getPopupContainer) provide(popupContainerKey, props.getPopupContainer);
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
