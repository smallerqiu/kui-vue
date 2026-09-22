import { useInitialValue } from "../utils/model-value";
import Popup, { type PopupRef } from "../popup";
import { renderSelectionTags } from "../utils/selection-tags";
import { ChevronDown, CircleX, Loading } from "kui-icons";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type Ref,
  type VNode,
  type VNodeChild,
} from "vue";
import { markFormFieldComponent, useFormAppearance, useFormField } from "../form/context";
import Empty from "../empty";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import VirtualList from "../virtual-list";
import { isEmpty } from "../utils/number";
import { getChildren } from "../utils/vnode";

import type {
  BooleanType,
  DropPlacementsType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import Option from "./option";
import type { OptionSelectEvent, SelectOption, SelectValue } from "./types";
const selectProps = {
  placeholder: String,
  size: {
    type: String as PropType<SizeType>,
  },
  placement: {
    type: String as PropType<DropPlacementsType>,
    default: "bottom-left",
  },
  width: Number,
  maxTagCount: Number,
  modelValue: [String, Number, Array] as PropType<SelectValue | SelectValue[]>,
  value: [String, Number, Array] as PropType<SelectValue | SelectValue[]>,
  clearable: { type: Boolean as BooleanType, default: true },
  filterable: Boolean as BooleanType,
  allowCreate: Boolean as BooleanType,
  block: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  multiple: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: true },
  showArrow: { type: Boolean as BooleanType, default: true },
  options: Array as PropType<SelectOption[]>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  emptyText: String,
  loadingText: String,
  icon: [Array] as PropType<IconType[]>,
  shape: String as PropType<ShapeType>,
  arrowIcon: [Array] as PropType<IconType[]>,
  virtual: Boolean as BooleanType,
  itemHeight: { type: Number, default: 33 },
  overscan: { type: Number, default: 5 },
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;
type SelectModelValue = SelectValue | SelectValue[];
type SelectPublicProps<T extends SelectModelValue> = Omit<
  Partial<SelectProps>,
  "modelValue" | "value"
> &
  Omit<HTMLAttributes, "onChange" | "onSelect"> & {
    modelValue?: T;
    value?: T;
    "onUpdate:modelValue"?: (value: T) => void;
    onChange?: (value: T) => void;
    onSearch?: (event: InputEvent) => void;
    onSelect?: (option: OptionSelectEvent) => void;
    onOpenChange?: (open: boolean) => void;
    onClear?: () => void;
  };
type SelectComponent = {
  new <T extends SelectModelValue = SelectValue>(
    props: SelectPublicProps<T>,
  ): { $props: SelectPublicProps<T> };
};

const Select = defineComponent({
  name: "Select",
  emits: {
    "update:modelValue": (value: SelectValue | SelectValue[]) =>
      Array.isArray(value) || ["string", "number", "boolean"].includes(typeof value),
    search: (event: InputEvent) => typeof event?.type === "string",
    change: (value: SelectValue | SelectValue[]) =>
      Array.isArray(value) || ["string", "number", "boolean"].includes(typeof value),
    select: (option: OptionSelectEvent) => typeof option === "object" && option !== null,
    openChange: (open: boolean) => typeof open === "boolean",
    clear: () => true,
  },
  props: selectProps,
  setup(props, { slots, emit }) {
    const initialModel = useInitialValue(props);
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);

    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);

    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const visible = ref(false);
    const toValueArray = (value: SelectValue | SelectValue[] | undefined): SelectValue[] => {
      if (Array.isArray(value)) return [...value];
      return value === undefined || isEmpty(value) ? [] : [value];
    };
    const currentValue = ref<SelectValue[]>(
      toValueArray(
        field?.prop
          ? (field.value.value as SelectValue | SelectValue[] | undefined)
          : initialModel.value,
      ),
    );
    const createdOptions = ref<SelectOption[]>([]);
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref<HTMLElement | null>(null);

    const queryInputRef = ref<HTMLInputElement | null>(null);
    const hasSearchEvent = Boolean(getCurrentInstance()?.vnode.props?.onSearch);
    const searchable = computed(
      () => props.filterable || hasSearchEvent || (props.multiple && props.allowCreate),
    );
    const refPopper = ref<HTMLElement | null>(null);

    const refSelection = ref<HTMLElement | null>(null);

    const queryInputEventTimer = ref<ReturnType<typeof setTimeout>>();
    const clearQueryTimer = ref<ReturnType<typeof setTimeout>>();

    const activeIndex = ref(-1);
    const virtualListRef = ref<{ scrollToIndex: (index: number, align?: "auto") => void }>();

    watch(
      () => props.options,
      () => {
        if (visible.value) {
          updatePosition();
        }
      },
      { deep: true },
    );

    watch(
      () => (field?.prop ? field.value.value : initialModel.value),
      (v) => {
        currentValue.value = props.multiple
          ? toValueArray(Array.isArray(v) ? (v as SelectValue[]) : [])
          : toValueArray(v as SelectValue | undefined);
        if (visible.value) {
          updatePosition();
        }
      },
    );

    const scrollOptionIntoView = () => {
      if (props.virtual) {
        virtualListRef.value?.scrollToIndex(activeIndex.value, "auto");
        return;
      }
      const containerEl = refPopper.value;
      if (!containerEl) return;
      const optionEl =
        containerEl.querySelectorAll<HTMLElement>(".k-select-item")[activeIndex.value];
      if (!optionEl) return;
      const optionTop = optionEl.offsetTop;
      const optionHeight = optionEl.offsetHeight;
      const containerHeight = containerEl.clientHeight;

      const targetScroll = optionTop - containerHeight / 2 + optionHeight / 2;
      containerEl.scrollTop = targetScroll;
    };

    onBeforeUnmount(() => {
      clearTimeout(queryInputEventTimer.value);
      clearTimeout(clearQueryTimer.value);
    });

    const labelText = computed(() => {
      if (!optionsData.value || optionsData.value.length == 0) {
        return [];
      }
      const lookup = new Map<string | number, string | number>();
      optionsData.value.forEach((item) => {
        lookup.set(item.value, item.label);
      });
      return currentValue.value.map((val) => lookup.get(val) ?? val);
    });

    const popup = ref<PopupRef>();
    const updatePosition = () => popup.value?.updatePosition();

    const isChecked = (value: unknown) => {
      if (typeof value !== "string" && typeof value !== "number") return false;
      if (props.multiple) {
        return currentValue.value?.indexOf(value) >= 0;
      } else {
        return !isEmpty(currentValue.value) && currentValue.value[0] === value;
      }
    };

    const resetQueryInput = () => {
      queryKey.value = "";
      if (queryInputRef.value) {
        queryInputRef.value.value = "";
        queryInputRef.value.style.width = "";
      }
    };

    const clearQuery = () => {
      activeIndex.value = -1;
      if (searchable.value) {
        clearTimeout(clearQueryTimer.value);
        clearQueryTimer.value = setTimeout(() => {
          resetQueryInput();
          queryInputVisible.value = false;
        }, 300);
      }
    };

    const onMouseenter = (index: number) => {
      activeIndex.value = index;
    };

    const onSelect = (item: OptionSelectEvent) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const { value, label } = { ...item };
      let selected = true;
      if (props.multiple) {
        if (currentValue.value?.indexOf(value) >= 0) {
          selected = false;
          currentValue.value = currentValue.value.filter((v) => v !== value);
        } else {
          currentValue.value.push(value);
        }
        updatePosition();
        if (searchable.value) {
          resetQueryInput();
          activeIndex.value = optionsData.value.findIndex((option) => option.value === value);
          showQuery();
        }
      } else {
        currentValue.value = [value];
        visible.value = false;
        emit("openChange", false);
        clearQuery();
        activeIndex.value = -1;
      }
      emitValue();
      emit("select", { value, label, selected });
    };

    const searchInput = (e: Event) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const target = e.target as HTMLInputElement;
      queryKey.value = target.value;
      activeIndex.value = -1;
      nextTick(() => {
        if (queryInputMirrorRef.value) {
          const availableWidth = Math.max((refSelection.value?.clientWidth || 0) - 40, 7);
          const contentWidth = Math.max(queryInputMirrorRef.value.offsetWidth + 2, 7);
          target.style.width = `${Math.min(contentWidth, availableWidth)}px`;
        }
        updatePosition();
      });
      if (hasSearchEvent) {
        if (queryInputEventTimer.value) clearTimeout(queryInputEventTimer.value);
        queryInputEventTimer.value = setTimeout(() => {
          visible.value = true;
          emit("openChange", true);
          emit("search", e as InputEvent);
        }, 500);
      }
    };

    const emptyClick = () => {
      if (queryInputVisible.value) {
        nextTick(() => {
          queryInputRef.value?.focus();
        });
      }
    };

    const emitValue = () => {
      const result = props.multiple ? currentValue.value : currentValue.value[0];
      emit("update:modelValue", result);
      if (field?.prop) field.update(result);
      emit("change", result);
    };

    const removeTag = (index: number) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      currentValue.value.splice(index, 1);
      updatePosition();
      emitValue();
    };

    const onClear = (e: Event) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      emit("clear");
      currentValue.value = [];
      emitValue();
      clearQuery();
      e.stopPropagation();
    };

    const showQuery = () => {
      if (searchable.value) {
        queryInputVisible.value = true;
        nextTick(() => {
          queryInputRef.value?.focus();
        });
      }
    };

    const toggle = (show: boolean | null = null) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value) {
        return;
      }
      if (hasSearchEvent) {
        showQuery();
        return;
      }

      const next = show ?? !visible.value;
      visible.value = next;
      emit("openChange", next);
      if (next) showQuery();
      else clearQuery();
    };

    const optionsData = computed(() => {
      const { options, loading } = props;
      if (loading) return [];
      if (options && options.length > 0) {
        return [
          ...options,
          ...createdOptions.value.filter(
            (created) => !options.some((option) => option.value === created.value),
          ),
        ];
      }

      const data: SelectOption[] = [];
      const children = getChildren(slots.default?.());
      children.forEach((child: VNode) => {
        if (child.props) {
          const { label, value, disabled } = child.props as {
            label?: SelectOption["label"];
            value: SelectValue;
            disabled?: boolean;
          };
          const childSlots = child.children as { default?: () => VNode[] } | null;
          const resolvedLabel =
            label ?? childSlots?.default?.()?.[0]?.children?.toString() ?? value;
          data.push({
            value,
            disabled,
            label: resolvedLabel,
          });
        }
      });
      return [
        ...data,
        ...createdOptions.value.filter(
          (created) => !data.some((option) => option.value === created.value),
        ),
      ];
    });

    const filterOptions = () => {
      const key = queryKey.value;
      const filter = props.filterable && key.trim() !== "";
      return filter
        ? optionsData.value.filter((item) =>
            String(item.label).toLowerCase().includes(key.toLowerCase()),
          )
        : optionsData.value;
    };

    const renderOption = (item: SelectOption, index: number) => {
      const { label, value, disabled } = item;
      return (
        <Option
          onSelect={onSelect}
          onMouseenter={disabled ? undefined : () => onMouseenter(index)}
          key={`${value}-${String(label)}`}
          active={activeIndex.value === index}
          value={value}
          label={label}
          disabled={disabled}
          checked={isChecked(value)}
          multiple={props.multiple}
        />
      );
    };

    const queryKeydown = ({ key }: KeyboardEvent) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      if (key === "Backspace") {
        if (queryKey.value === "" && props.multiple && currentValue.value.length > 0) {
          currentValue.value = currentValue.value.slice(0, -1);
          emitValue();
          updatePosition();
        }
      }
    };

    const moveActive = (direction: 1 | -1) => {
      const options = filterOptions();
      if (options.length === 0) {
        activeIndex.value = -1;
        return;
      }
      let index = activeIndex.value;
      for (let count = 0; count < options.length; count += 1) {
        index = (index + direction + options.length) % options.length;
        if (!options[index]?.disabled) {
          activeIndex.value = index;
          nextTick(scrollOptionIntoView);
          return;
        }
      }
    };

    const createFromQuery = (): boolean => {
      if (!props.multiple || !props.allowCreate) return false;
      const value = queryKey.value.trim();
      if (!value) return false;

      const normalizedValue = value.toLocaleLowerCase();
      const existing = optionsData.value.find(
        (option) =>
          String(option.value).trim().toLocaleLowerCase() === normalizedValue ||
          String(option.label).trim().toLocaleLowerCase() === normalizedValue,
      );
      if (existing) {
        if (!existing.disabled && !isChecked(existing.value)) {
          onSelect(existing);
        } else {
          resetQueryInput();
          activeIndex.value = optionsData.value.findIndex(
            (option) => option.value === existing.value,
          );
          showQuery();
        }
        return true;
      }

      const option: SelectOption = { label: value, value };
      createdOptions.value.push(option);
      onSelect(option);
      return true;
    };

    const closeDropdown = () => {
      if (!visible.value) return;
      visible.value = false;
      emit("openChange", false);
      clearQuery();
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;

      if (!visible.value) {
        if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
          toggle(true);
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            nextTick(() => moveActive(e.key === "ArrowDown" ? 1 : -1));
          }
          e.preventDefault();
        }
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        moveActive(e.key === "ArrowDown" ? 1 : -1);
        e.preventDefault();
      } else if (e.key === "Enter") {
        const option = filterOptions()[activeIndex.value];
        if (option && !option.disabled) {
          onSelect(option);
          e.preventDefault();
        } else if (createFromQuery()) {
          e.preventDefault();
        }
      } else if (e.key === "Escape") {
        closeDropdown();
        refSelection.value?.focus();
        e.preventDefault();
      } else if (e.key === "Tab") {
        closeDropdown();
      }
    };

    const showClear = computed(() => {
      return (
        props.clearable &&
        !(props.disabled || field?.disabled.value) &&
        !(props.readonly || field?.readonly.value) &&
        !isEmpty(currentValue.value) &&
        !isEmpty(labelText.value)
      );
    });

    const renderOverlay = () => {
      const options = filterOptions();
      const preCls = "k-select";
      const popperProps = {
        ref: refPopper,
        class: [
          "k-select-dropdown",
          "k-scroll",
          {
            "k-select-dropdown-multiple": props.multiple,
            "k-select-dropdown-sm": props.size === "small",
            "k-select-dropdown-lg": props.size === "large",
            "k-select-dropdown-virtual": props.virtual,
          },
        ],
      };
      const loadingNode = (
        <div class="k-select-loading">
          <Icon type={Loading} spin />
          <span>{locale.value?.k.select.loading}</span>
        </div>
      );
      return [
        <Popup
          ref={popup}
          raw
          open={visible.value}
          target={refSelection}
          trigger="manual"
          placement={props.placement}
          prefixCls="k-select-dropdown"
          transitionName={preCls}
          matchTriggerWidth
          onOpenChange={(next) => {
            if (!next) closeDropdown();
          }}
          v-slots={{
            overlay: () => (
              <div {...popperProps}>
                {props.loading ? (
                  loadingNode
                ) : options.length ? (
                  props.virtual ? (
                    <VirtualList
                      ref={virtualListRef}
                      data={options}
                      height={Math.min(200, options.length * props.itemHeight)}
                      itemHeight={props.itemHeight}
                      overscan={props.overscan}
                      itemKey={(item) => (item as SelectOption).value}
                      v-slots={{
                        default: ({ item, index }: { item: SelectOption; index: number }) =>
                          renderOption(item, index),
                      }}
                    />
                  ) : (
                    <ul>{options.map(renderOption)}</ul>
                  )
                ) : (
                  <Empty
                    onClick={emptyClick}
                    description={props.emptyText || locale.value?.k.select.emptyText}
                  />
                )}
              </div>
            ),
          }}
        />,
      ];
    };

    return () => {
      const { multiple, placeholder, showArrow, bordered, arrowIcon, icon, filterable } = props;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const theme = appearance.theme.value;
      const shape = appearance.shape.value;
      const childNode: VNodeChild[] = [];
      const finalArrowIcon = arrowIcon || ChevronDown;

      const queryInputProps = {
        ref: queryInputRef,
        class: "k-select-search",
        autoComplete: "off",
        disabled,
        readonly,
        onChange: (e: Event) => e.stopPropagation(),
        onKeydown: queryKeydown,
        onInput: searchInput,
        onBlur: () => {
          if (!visible.value) {
            queryInputVisible.value = false;
          }
        },
      };
      const queryNode = (
        <div v-show={queryInputVisible.value} key="search" class="k-select-search-wrap">
          <input {...queryInputProps} />
          <span class="k-select-search-mirror" ref={queryInputMirrorRef}>
            {queryKey.value}
          </span>
        </div>
      );

      const placeholderText = placeholder || locale.value?.k.select.placeholder;
      const placeNode =
        placeholderText && isEmpty(labelText.value) && !queryKey.value ? (
          <div class="k-select-placeholder">{placeholderText}</div>
        ) : null;

      const renderTags = () =>
        renderSelectionTags({
          labels: labelText.value,
          maxTagCount: props.maxTagCount,
          size,
          shape,
          theme,
          disabled,
          readOnly: readonly,
          onRemove: removeTag,
        });

      const labelsNode = multiple ? (
        <div class="k-select-labels">
          {renderTags()}
          {queryNode}
        </div>
      ) : (
        <div class="k-select-label" v-show={!isEmpty(labelText.value) && !queryKey.value.length}>
          {labelText.value[0]}
        </div>
      );
      childNode.push(labelsNode);
      if (placeNode) childNode.push(placeNode);

      if ((filterable || hasSearchEvent) && !multiple) {
        childNode.push(queryNode);
      }

      const rootStyles: CSSProperties = {};
      if (props.width) {
        rootStyles.width = `${props.width}px`;
      }

      const arrowNode =
        !hasSearchEvent && showArrow ? <Icon class="k-select-arrow" type={finalArrowIcon} /> : null;

      const rootClasses = [
        "k-select",
        {
          "k-select-disabled": disabled,
          "k-select-readonly": readonly,
          "k-select-block": props.block,
          "k-select-opened": visible.value,
          "k-select-borderless": bordered === false || theme === "plain",
          "k-select-lg": size === "large",
          "k-select-sm": size === "small",
          "k-select-fill": theme === "fill",
          "k-select-has-icon": !!icon,
          "k-select-circle": shape === "circle",
          "k-select-square": shape === "square",
          "k-select-multiple": multiple,
          "k-select-show-search": queryInputVisible.value,
          "k-select-show-tags": multiple && !isEmpty(labelText.value),
          "k-select-has-clear": showClear.value,
        },
      ];
      const clearNode = showClear.value ? (
        <Icon
          class="k-select-clearable"
          type={CircleX}
          role="button"
          tabindex={0}
          aria-label="Clear"
          onPointerdown={(event: PointerEvent) => event.preventDefault()}
          onClick={onClear}
          onKeydown={(event: KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") onClear(event);
          }}
        />
      ) : null;

      const rootProps = {
        id: field?.prop ? field.id : undefined,
        tabIndex: disabled ? undefined : 0,
        class: rootClasses,
        style: rootStyles,
        onClick: () => toggle(),
        onKeydown,
        role: "combobox",
        "aria-expanded": visible.value,
        "aria-haspopup": "listbox" as const,
        "aria-disabled": disabled,
        "aria-readonly": readonly || undefined,
        "aria-labelledby": field?.prop ? field.labelId : undefined,
        "aria-describedby": field?.describedBy.value,
        "aria-invalid": field?.invalid.value || undefined,
        "aria-required": field?.required.value || undefined,
        onBlur: () => field?.blur(),
        ref: refSelection,
      };

      return (
        <div {...rootProps}>
          {icon ? <Icon type={icon} class="k-select-icon" /> : null}
          <div class="k-select-selection">{childNode}</div>
          <span class="k-select-suffix">
            {arrowNode}
            {clearNode}
          </span>
          {renderOverlay()}
        </div>
      );
    };
  },
});
const FormSelect = markFormFieldComponent(Select);
export default FormSelect as SelectComponent;

export type { SelectOption } from "./types";
