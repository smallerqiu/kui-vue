import Popup, { type PopupRef } from "../popup";
import { Loading } from "kui-icons";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import type { ShapeType, SizeType, ThemeType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import Icon from "../icon";
import { Input } from "../input";
import zhCN from "../locale/zh-CN";

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
};
export type AutoCompleteProps = ExtractPropTypes<typeof propsDef>;

const AutoComplete = defineComponent({
  name: "AutoComplete",
  inheritAttrs: false,
  props: propsDef,
  emits: {
    "update:modelValue": (value: string) => typeof value === "string",
    change: (value: string) => typeof value === "string",
    clear: () => true,
    search: (value: string) => typeof value === "string",
    select: (value: string, option: AutoCompleteOption) =>
      typeof value === "string" && typeof option === "object" && option !== null,
    openChange: (open: boolean) => typeof open === "boolean",
  },
  setup(props, { emit, attrs }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);

    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() =>
      isRef(injectedLocale) ? injectedLocale.value : injectedLocale,
    );

    const instance = getCurrentInstance();
    const listboxId = `k-auto-complete-listbox-${instance?.uid ?? "default"}`;
    const hasSearchEvent = Boolean(instance?.vnode.props?.onSearch);
    const inner = ref(props.value);
    const innerOpen = ref(props.open ?? false);
    watch(
      () => props.open,
      (value) => {
        innerOpen.value = value ?? false;
        if (value) {
          shownOptions.value = current.value || props.showOnEmpty ? filter(current.value) : [];
          suppressRemoteOptions.value = false;
        } else {
          active.value = -1;
        }
      },
    );
    const active = ref(-1);
    const root = ref<HTMLElement | null>(null);
    const dropdown = ref<HTMLElement | null>(null);

    const composing = ref(false);
    const current = computed(() =>
      field?.prop ? String(field.value.value ?? "") : (props.modelValue ?? inner.value),
    );
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
    const initiallyOpen = props.open ?? false;
    const shownOptions = shallowRef<AutoCompleteOption[]>(
      initiallyOpen && (current.value || props.showOnEmpty) ? filter(current.value) : [],
    );
    const suppressRemoteOptions = ref(false);

    let blurTimer: ReturnType<typeof setTimeout> | undefined;
    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (value) => {
        if (value !== undefined) inner.value = String(value);
      },
    );
    const hasOptions = computed(() => normalized.value.length > 0);
    const visible = computed(
      () =>
        (props.loading || (!suppressRemoteOptions.value && shownOptions.value.length > 0)) &&
        innerOpen.value,
    );
    const popup = ref<PopupRef>();
    const updatePosition = () => popup.value?.updatePosition();
    const refreshOptions = (value = current.value) => {
      const nextOptions = filter(value);
      if (nextOptions.length) {
        shownOptions.value = nextOptions;
        nextTick(updatePosition);
      }
      return nextOptions.length > 0;
    };
    const setOpen = (next: boolean) => {
      if (
        next &&
        (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
      )
        return;
      if (next && suppressRemoteOptions.value && !props.loading) return;
      if (next && !props.loading && (!hasOptions.value || !shownOptions.value.length)) return;
      if (!next) active.value = -1;
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
        if (hasSearchEvent && suppressRemoteOptions.value) return;
        if (!innerOpen.value) return;
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
          suppressRemoteOptions.value = hasSearchEvent && !hasMatches;
          setOpen(hasMatches);
        } else if (!value) {
          suppressRemoteOptions.value = hasSearchEvent;
          setOpen(false);
        }
        nextTick(updatePosition);
      },
    );
    onMounted(() => {
      if (innerOpen.value && (current.value || props.showOnEmpty) && !props.loading) {
        const hasMatches = refreshOptions();
        if (!hasMatches) setOpen(false);
      }
    });
    onBeforeUnmount(() => {
      clearTimeout(blurTimer);
    });
    const update = (next: string) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      inner.value = next;
      emit("update:modelValue", next);
      if (field?.prop) field.update(next);
      emit("change", next);
    };
    const choose = (option: AutoCompleteOption) => {
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        option.disabled
      )
        return;
      update(option.value);
      emit("select", option.value, option);
      setOpen(false);
      active.value = -1;
    };
    const search = (value: string) => {
      emit("search", value);
      if (!value && !props.showOnEmpty) {
        suppressRemoteOptions.value = hasSearchEvent;
        setOpen(false);
      } else if (props.loading) {
        suppressRemoteOptions.value = false;
        setOpen(true);
      } else {
        const hasMatches = refreshOptions(value);
        suppressRemoteOptions.value = hasSearchEvent && !hasMatches;
        setOpen(hasMatches);
      }
      active.value = -1;
    };
    const invokeAttr = (name: string, event: Event) => {
      const listener = attrs[name];
      if (Array.isArray(listener)) listener.forEach((handler) => handler(event));
      else if (typeof listener === "function") listener(event);
    };
    const keydown = (event: KeyboardEvent) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        if ((!current.value && !props.showOnEmpty) || suppressRemoteOptions.value) return;
        if (!filter(current.value).length) return;
        if (!hasOptions.value) return;
        if (!shownOptions.value.length) return;
        if (!visible.value) setOpen(true);
        const enabled = shownOptions.value
          .map((option, index) => (!option.disabled ? index : -1))
          .filter((index) => index >= 0);
        if (!enabled.length) return;
        const currentIndex = enabled.indexOf(active.value);
        active.value =
          currentIndex < 0
            ? enabled[event.key === "ArrowDown" ? 0 : enabled.length - 1]
            : enabled[
                (currentIndex + (event.key === "ArrowDown" ? 1 : -1) + enabled.length) %
                  enabled.length
              ];
        event.preventDefault();
      } else if (event.key === "Enter" && visible.value && active.value >= 0) {
        const option = shownOptions.value[active.value];
        if (option) choose(option);
        event.preventDefault();
      } else if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
      }
    };
    watch(active, () => {
      nextTick(() => {
        dropdown.value
          ?.querySelector<HTMLElement>(`#${listboxId}-option-${active.value}`)
          ?.scrollIntoView?.({ block: "nearest" });
      });
    });
    return () => (
      <div ref={root} class={["k-auto-complete", attrs.class]}>
        <Input
          {...attrs}
          {...resolveFormControlAttrs(attrs, field)}
          class={undefined}
          modelValue={current.value}
          disabled={props.disabled || field?.disabled.value}
          readonly={props.readonly || field?.readonly.value}
          placeholder={props.placeholder}
          size={appearance.size.value}
          shape={appearance.shape.value}
          theme={appearance.theme.value}
          clearable={props.clearable}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={visible.value}
          aria-controls={visible.value ? listboxId : undefined}
          aria-activedescendant={
            visible.value && active.value >= 0 ? `${listboxId}-option-${active.value}` : undefined
          }
          onFocus={(event: FocusEvent) => {
            invokeAttr("onFocus", event);
            if (event.defaultPrevented) return;
            if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
              return;
            const hasMatches = refreshOptions();
            if ((current.value || props.showOnEmpty) && (hasMatches || props.loading))
              setOpen(true);
          }}
          onBlur={(event: FocusEvent) => {
            invokeAttr("onBlur", event);
            if (event.defaultPrevented) return;
            clearTimeout(blurTimer);
            blurTimer = setTimeout(() => setOpen(false), 120);
            field?.blur();
          }}
          onCompositionstart={(event: CompositionEvent) => {
            composing.value = true;
            invokeAttr("onCompositionstart", event);
          }}
          onCompositionend={(event: CompositionEvent) => {
            composing.value = false;
            invokeAttr("onCompositionend", event);
            if (!event.defaultPrevented) search((event.target as HTMLInputElement).value);
          }}
          onClear={() => emit("clear")}
          onChange={(value) => {
            update(value);
            if (!composing.value) search(value);
          }}
          onKeydown={(event: KeyboardEvent) => {
            invokeAttr("onKeydown", event);
            if (!event.defaultPrevented) keydown(event);
          }}
        />
        {[
          <Popup
            ref={popup}
            raw
            open={visible.value}
            target={root}
            trigger="manual"
            placement={"bottom-left"}
            prefixCls="k-auto-complete-dropdown"
            transitionName="k-select"
            offset={6}
            matchTriggerWidth
            onOpenChange={setOpen}
            v-slots={{
              overlay: () => (
                <div
                  ref={dropdown}
                  id={listboxId}
                  class={[
                    "k-select-dropdown",
                    "k-auto-complete-dropdown",
                    { "k-select-dropdown-sm": props.size === "small" },
                    { "k-select-dropdown-lg": props.size === "large" },
                  ]}
                  role="listbox"
                >
                  {props.loading ? (
                    <div class="k-select-loading">
                      <Icon type={Loading} spin />
                      <span>{props.loadingText || locale.value?.k.select.loading}</span>
                    </div>
                  ) : (
                    <ul>
                      {shownOptions.value.map((option, index) => (
                        <li
                          key={option.value}
                          id={`${listboxId}-option-${index}`}
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
                          onMouseenter={() =>
                            !props.disabled &&
                            !field?.disabled.value &&
                            !props.readonly &&
                            !field?.readonly.value &&
                            !option.disabled &&
                            (active.value = index)
                          }
                          onClick={() => choose(option)}
                        >
                          {option.label ?? option.value}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ),
            }}
          />,
        ]}
      </div>
    );
  },
});

export default markFormFieldComponent(AutoComplete);
