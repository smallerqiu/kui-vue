import {
  defineComponent,
  getCurrentInstance,
  inject,
  isRef,
  provide,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import zhCN from "../locale/zh-CN";
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
    const inheritedLocale = inject("locale", zhCN);
    const getInheritedLocale = () =>
      isRef(inheritedLocale) ? inheritedLocale.value : inheritedLocale;
    const locale = ref(props.locale || getInheritedLocale());
    provide("locale", locale);
    if (props.getPopupContainer) provide(popupContainerKey, props.getPopupContainer);
    const instance = getCurrentInstance();
    if (instance && instance.appContext) {
      instance.appContext.provides["locale"] = locale;
    }
    const context = getCurrentInstance();
    setAppContext(context);
    watch(
      [() => props.locale, getInheritedLocale],
      ([newVal, parentLocale]) => {
        locale.value = newVal || parentLocale;
      },
      { immediate: true },
    );
    return () => {
      return slots.default?.();
    };
  },
});

export default ConfigProvider;
