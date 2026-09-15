import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  isRef,
  onBeforeUnmount,
  provide,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import zhCN from "../locale/zh-CN";
import { CONFIG_PROVIDER_INJECTION_KEY, registerAppContext } from "./context";
import { popupContainerKey, type PopupContainerGetter } from "./popup";
const configProviderProps = {
  locale: {
    type: Object,
    default: () => null,
  },
  getPopupContainer: Function as PropType<PopupContainerGetter>,
  size: String as PropType<SizeType>,
  theme: String as PropType<ThemeType>,
  shape: String as PropType<ShapeType>,
};

export type ConfigProviderProps = Partial<ExtractPropTypes<typeof configProviderProps>>;

const ConfigProvider = defineComponent({
  name: "ConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    const parentConfig = inject(CONFIG_PROVIDER_INJECTION_KEY, null);
    provide(CONFIG_PROVIDER_INJECTION_KEY, {
      size: computed(() => props.size ?? parentConfig?.size.value),
      theme: computed(() => props.theme ?? parentConfig?.theme.value),
      shape: computed(() => props.shape ?? parentConfig?.shape.value),
    });
    const inheritedLocale = inject("locale", zhCN);
    const getInheritedLocale = () =>
      isRef(inheritedLocale) ? inheritedLocale.value : inheritedLocale;
    const locale = ref(props.locale || getInheritedLocale());
    provide("locale", locale);
    if (props.getPopupContainer) provide(popupContainerKey, props.getPopupContainer);
    const instance = getCurrentInstance();
    const unregisterAppContext = !parentConfig && instance ? registerAppContext(instance) : null;
    onBeforeUnmount(() => unregisterAppContext?.());
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
