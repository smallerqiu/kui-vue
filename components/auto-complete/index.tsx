import { Loading } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  Teleport,
  Transition,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import { usePopupContainer } from "../config/popup";
import { usePopupHost } from "../config/popup-host";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import Icon from "../icon";
import { Input } from "../input";
import zhCN from "../locale/zh-CN";
import { setPlacement } from "../utils/placement";

export interface AutoCompleteOption {
  value: string;
  label?: VNodeChild;
  disabled?: boolean;
}
const propsDef = {
  modelValue: String,
  value: { type: String, default: "" },
  options: { type: Array as PropType<Array<string | AutoCompleteOption>>, default: () => [] },
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  showOnEmpty: Boolean,
  clearable: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  loadingText: String,
  placeholder: String,
  size: String as PropType<SizeType>,
  shape: String as PropType<ShapeType>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  filterOption: {
    type: [Boolean, Function] as PropType<
      boolean | ((input: string, option: AutoCompleteOption) => boolean)
    >,
    default: true,
  },
  onChange: Function as PropType<(value: string) => void>,
  onClear: Function as PropType<() => void>,
  onSearch: Function as PropType<(value: string) => void>,
  onSelect: Function as PropType<(value: string, option: AutoCompleteOption) => void>,
  onOpenChange: Function as PropType<(open: boolean) => void>,
};
export type AutoCompleteProps = ExtractPropTypes<typeof propsDef>;

export default defineComponent({
  name: "AutoComplete",
  inheritAttrs: false,
  props: propsDef,
  setup(props, { emit, attrs }) {
    usePopupHost(() => visible.value && setOpen(false));
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() =>
      isRef(injectedLocale) ? injectedLocale.value : injectedLocale,
    );
    const getPopupContainer = usePopupContainer();
    const inner = ref(props.value);
    const innerOpen = ref(props.defaultOpen);
    const rendered = ref(false);
    const active = ref(-1);
    const root = ref<HTMLElement | null>(null);
    const dropdown = ref<HTMLElement | null>(null);
    const current = computed(() => props.modelValue ?? inner.value);
    const normalized = computed(() =>
      props.options.map((item) => (typeof item === "string" ? { value: item, label: item } : item)),
    );
    const filter = (value: string) =>
      normalized.value.filter((option) =>
        typeof props.filterOption === "function"
          ? props.filterOption(value, option)
          : !props.filterOption ||
            option.value.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      );
    const initiallyOpen = props.open ?? props.defaultOpen;
    const shownOptions = shallowRef<AutoCompleteOption[]>(
      initiallyOpen && (current.value || props.showOnEmpty) ? filter(current.value) : [],
    );
    const suppressRemoteOptions = ref(false);
    const top = ref(0);
    const left = ref(0);
    const transOrigin = ref("left top");
    const currentPlacement = ref("bottom-left");
    let positionRaf = 0;
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== undefined) inner.value = value;
      },
    );
    const hasOptions = computed(() => normalized.value.length > 0);
    const visible = computed(
      () => (props.loading || shownOptions.value.length > 0) && (props.open ?? innerOpen.value),
    );
    watch(
      visible,
      (value) => {
        if (value) rendered.value = true;
      },
      { immediate: true, flush: "sync" },
    );
    const updatePosition = () => {
      cancelAnimationFrame(positionRaf);
      positionRaf = requestAnimationFrame(() => {
        if (!visible.value) return;
        setPlacement({
          refSelection: root,
          refPopper: dropdown,
          currentPlacement,
          transOrigin,
          top,
          left,
          offset: 6,
        });
      });
    };
    const refreshOptions = (value = current.value) => {
      const nextOptions = filter(value);
      if (nextOptions.length) {
        shownOptions.value = nextOptions;
        nextTick(updatePosition);
      }
      return nextOptions.length > 0;
    };
    const setOpen = (next: boolean) => {
      if (next && props.readonly) return;
      if (next && !props.loading && (!hasOptions.value || !shownOptions.value.length)) return;
      innerOpen.value = next;
      emit("openChange", next);
    };
    watch(hasOptions, (value) => {
      if (!value && !props.loading) setOpen(false);
    });
    watch(
      () => props.options,
      () => {
        if (props.loading) return;
        if (props.onSearch && suppressRemoteOptions.value) return;
        if (!(props.open ?? innerOpen.value)) return;
        if (!current.value && !props.showOnEmpty) {
          setOpen(false);
          return;
        }
        const hasMatches = refreshOptions();
        if (!hasMatches && !props.loading && innerOpen.value) setOpen(false);
      },
      { deep: true },
    );
    watch(
      () => props.loading,
      (value) => {
        if (value && (current.value || props.showOnEmpty)) {
          suppressRemoteOptions.value = false;
          setOpen(true);
        } else if (!value && (current.value || props.showOnEmpty)) {
          const hasMatches = refreshOptions();
          suppressRemoteOptions.value = !!props.onSearch && !hasMatches;
          setOpen(hasMatches);
        } else if (!value) {
          suppressRemoteOptions.value = !!props.onSearch;
          setOpen(false);
        }
        nextTick(updatePosition);
      },
    );
    onMounted(() => {
      if (
        (props.open ?? innerOpen.value) &&
        (current.value || props.showOnEmpty) &&
        !props.loading
      ) {
        const hasMatches = refreshOptions();
        if (!hasMatches) setOpen(false);
      }
      document.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);
    });
    onBeforeUnmount(() => {
      cancelAnimationFrame(positionRaf);
      document.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    });
    const update = (next: string) => {
      if (props.readonly) return;
      inner.value = next;
      emit("update:modelValue", next);
      emit("change", next);
    };
    const choose = (option: AutoCompleteOption) => {
      if (props.readonly || option.disabled) return;
      update(option.value);
      emit("select", option.value, option);
      setOpen(false);
      active.value = -1;
    };
    const keydown = (event: KeyboardEvent) => {
      if (props.readonly) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        if (!hasOptions.value) return;
        if (!shownOptions.value.length) return;
        if (!visible.value) setOpen(true);
        const direction = event.key === "ArrowDown" ? 1 : -1;
        let next = active.value;
        for (let i = 0; i < shownOptions.value.length; i += 1) {
          next = (next + direction + shownOptions.value.length) % shownOptions.value.length;
          if (!shownOptions.value[next]?.disabled) {
            active.value = next;
            break;
          }
        }
        event.preventDefault();
      } else if (event.key === "Enter" && active.value >= 0) {
        const option = shownOptions.value[active.value];
        if (option) choose(option);
        event.preventDefault();
      } else if (event.key === "Escape") setOpen(false);
    };
    return () => (
      <div ref={root} class={["k-auto-complete", attrs.class]}>
        <Input
          {...attrs}
          class={undefined}
          modelValue={current.value}
          disabled={props.disabled}
          readonly={props.readonly}
          placeholder={props.placeholder}
          size={props.size}
          shape={props.shape}
          theme={props.theme}
          clearable={props.clearable}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={visible.value}
          onFocus={() => {
            if (props.disabled || props.readonly) return;
            const hasMatches = refreshOptions();
            if ((current.value || props.showOnEmpty) && (hasMatches || props.loading))
              setOpen(true);
          }}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onClear={() => emit("clear")}
          onChange={(value) => {
            update(value);
            emit("search", value);
            if (!value && !props.showOnEmpty) {
              suppressRemoteOptions.value = !!props.onSearch;
              setOpen(false);
            } else if (props.loading) {
              suppressRemoteOptions.value = false;
              setOpen(true);
            } else {
              const hasMatches = refreshOptions(value);
              suppressRemoteOptions.value = !!props.onSearch && !hasMatches;
              setOpen(hasMatches);
            }
            active.value = -1;
          }}
          onKeydown={keydown}
        />
        {rendered.value
          ? [
              <Teleport key="overlay" to={getPopupContainer()}>
                <Transition name="k-select">
                  <div
                    ref={dropdown}
                    v-show={visible.value}
                    style={
                      {
                        left: `${left.value}px`,
                        top: `${top.value}px`,
                        minWidth: `${root.value?.offsetWidth || 0}px`,
                        transformOrigin: transOrigin.value,
                      } as CSSProperties
                    }
                    class={[
                      "k-select-dropdown",
                      "k-auto-complete-dropdown",
                      { "k-select-dropdown-sm": props.size === "small" },
                      { "k-select-dropdown-lg": props.size === "large" },
                    ]}
                    role="listbox"
                  >
                    {props.loading || suppressRemoteOptions.value ? (
                      <div class="k-select-loading">
                        <Icon type={Loading} spin />
                        <span>{props.loadingText || locale.value?.k.select.loading}</span>
                      </div>
                    ) : (
                      <ul>
                        {shownOptions.value.map((option, index) => (
                          <li
                            role="option"
                            aria-selected={active.value === index}
                            aria-disabled={option.disabled || undefined}
                            class={[
                              "k-select-item",
                              {
                                "k-select-item-active": active.value === index,
                                "k-select-item-disabled": option.disabled,
                              },
                            ]}
                            onMousedown={(event) => event.preventDefault()}
                            onClick={() => choose(option)}
                          >
                            {option.label ?? option.value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Transition>
              </Teleport>,
            ]
          : []}
      </div>
    );
  },
});
