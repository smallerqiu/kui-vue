import { ChevronDown, CircleX, Loading, X } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  Transition,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import resize from "../directives/resize";
import { transfer } from "../directives/transfer";
import Empty from "../empty";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import { isEmpty } from "../utils/number";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

import type {
  BooleanType,
  DropPlacementsType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import Option, { type OptionSelectEvent } from "./option"; // 导入 Option 组件

export interface SelectOption {
  label: string | number;
  value: string | number;
  disabled?: boolean;
}
export const selectProps = {
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
  modelValue: [String, Number, Array] as PropType<string | number | any[]>,
  value: [String, Number, Array] as PropType<string | number | any[]>,
  clearable: { type: Boolean as BooleanType, default: true },
  filterable: Boolean as BooleanType,
  block: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  multiple: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: true },
  showArrow: { type: Boolean as BooleanType, default: true },
  options: Array as PropType<SelectOption[]>,
  theme: { type: String as PropType<ThemeType>, default: "light" },
  emptyText: String,
  loadingText: String,
  icon: [Array] as PropType<IconType[]>,
  shape: String as PropType<ShapeType>,
  arrowIcon: [Array] as PropType<IconType[]>,
  onSearch: Function as PropType<(e: InputEvent) => void>,
  onChange: Function as PropType<(value: string | number | any[]) => void>,
  onSelect: Function as PropType<(option: SelectOption) => void>,
};

export type SelectProps = ExtractPropTypes<typeof selectProps>;

const Select = defineComponent({
  name: "Select",
  directives: {
    transfer,
    resize,
  },
  props: selectProps,
  setup(props, { slots, emit }) {
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);
    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref<any[]>(
      props.multiple
        ? ((props.modelValue || props.value || []) as any[])
        : isEmpty(props.modelValue || props.value)
          ? []
          : [props.modelValue || props.value]
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref<HTMLElement | null>(null);
    const minWidth = ref(0);
    const queryInputFocused = ref(false);
    const queryInputRef = ref<HTMLInputElement | null>(null);
    const hasSearchEvent = !!props.onSearch;
    const refPopper = ref<HTMLElement | null>(null);
    const transOrigin = ref("bottom");
    const refSelection = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const queryInputEventTimer = ref<NodeJS.Timeout>();
    const activeIndex = ref(-1);

    const reallySize = ref(0);
    const ctxFocused = ref(false);

    watch(
      () => props.placement,
      (v) => {
        currentPlacement.value = v;
        if (visible.value) {
          updatePosition();
        }
      }
    );
    watch(
      () => props.options,
      () => {
        if (visible.value) {
          updatePosition();
        }
      },
      { deep: true }
    );

    watch(
      () => props.modelValue,
      (v) => {
        currentValue.value = props.multiple ? ((v || []) as any[]) : isEmpty(v) ? [] : [v];
        if (visible.value) {
          updatePosition();
        }
      }
    );

    const scrollOptionIntoView = () => {
      const containerEl = refPopper.value;
      if (!containerEl) return;
      const optionEl = containerEl.children[0].children[activeIndex.value] as HTMLElement;
      const optionTop = optionEl.offsetTop;
      const optionHeight = optionEl.offsetHeight;
      const containerHeight = containerEl.clientHeight;

      const targetScroll = optionTop - containerHeight / 2 + optionHeight / 2;
      containerEl.scrollTop = targetScroll;
    };

    const onKeydown = (e: KeyboardEvent) => {
      if ((!visible.value || optionsData.value.length === 0) && ctxFocused.value) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          toggle();
        }
        return;
      }
      if (visible.value) {
        if (e.key === "ArrowDown") {
          let index = activeIndex.value;
          if (index < reallySize.value - 1) {
            index += 1;
          } else {
            index = 0;
          }
          activeIndex.value = index;
          scrollOptionIntoView();
          e.preventDefault();
          return;
        } else if (e.key === "ArrowUp") {
          let index = activeIndex.value;
          if (index >= 1) {
            index -= 1;
          } else {
            index = reallySize.value - 1;
          }
          activeIndex.value = index;
          scrollOptionIntoView();
          e.preventDefault();
          return;
        } else if (
          e.key === "Enter" &&
          activeIndex.value >= 0 &&
          (ctxFocused.value || queryInputFocused.value)
        ) {
          const { label, value } = optionsData.value[activeIndex.value];
          onSelect({ label, value });
          e.preventDefault();
          return;
        } else if (e.key === "Escape" && (ctxFocused.value || queryInputFocused.value)) {
          visible.value = false;
          clearQuery();
          e.preventDefault();
        }
      }
    };

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("click", outsideClick);
    });

    const labelText = computed(() => {
      const lookup = new Map<string | number, string | number>();
      optionsData.value.forEach((item) => {
        lookup.set(item.value, item.label);
      });
      return currentValue.value.map((val) => lookup.get(val) ?? val);
    });

    const updatePosition = () => {
      nextTick(() => {
        minWidth.value = refSelection.value?.offsetWidth || 0;
        setPlacement({
          refSelection,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
      });
    };

    onMounted(() => {
      nextTick(() => {
        minWidth.value = refSelection.value?.offsetWidth || 0;
      });
      document.addEventListener("keydown", onKeydown);
    });

    const outsideClick = (e: MouseEvent) => {
      const ctx = (refSelection.value as any)?.$el || refSelection.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target as Node) &&
        ctx &&
        !ctx.contains(e.target as Node)
      ) {
        visible.value = false;
        clearQuery();
      }
    };

    const isChecked = (value: string | number | boolean) => {
      if (props.multiple) {
        return currentValue.value?.indexOf(value) >= 0;
      } else {
        return !isEmpty(currentValue.value) && currentValue.value[0] === value;
      }
    };

    const clearQuery = () => {
      activeIndex.value = -1;
      if (props.filterable || hasSearchEvent) {
        setTimeout(() => {
          queryKey.value = "";
          if (queryInputRef.value) {
            queryInputRef.value.value = "";
            queryInputRef.value.style.width = "";
          }
          queryInputVisible.value = false;
        }, 300);
      }
    };

    const onMouseenter = (index: number) => {
      activeIndex.value = index;
    };

    const onSelect = (item: OptionSelectEvent) => {
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
        if (hasSearchEvent || props.filterable) {
          if (queryInputRef.value) {
            queryInputRef.value.value = "";
            queryInputRef.value.style.width = "";
          }
          queryKey.value = "";
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
      const target = e.target as HTMLInputElement;
      queryKey.value = target.value;
      activeIndex.value = -1;
      nextTick(() => {
        if (queryInputMirrorRef.value) {
          target.style.width = queryInputMirrorRef.value.offsetWidth + "px";
        }
        updatePosition();
      });
      if (hasSearchEvent) {
        if (queryInputEventTimer.value) clearTimeout(queryInputEventTimer.value);
        queryInputEventTimer.value = setTimeout(() => {
          if (!rendered.value) {
            rendered.value = true;
            document.addEventListener("click", outsideClick);
            nextTick(() => {
              visible.value = true;
              emit("openChange", true);
              updatePosition();
            });
          } else {
            visible.value = true;
            emit("openChange", true);
            updatePosition();
          }
          emit("search", e);
        }, 500);
      }
    };

    const emptyClick = () => {
      if (queryInputVisible.value) {
        nextTick(() => {
          queryInputRef.value?.focus();
          queryInputFocused.value = true;
        });
      }
    };

    const emitValue = () => {
      const result = props.multiple ? currentValue.value : currentValue.value[0];
      emit("update:modelValue", result);
      emit("change", result);
    };

    const removeTag = (e: MouseEvent, index: number) => {
      if (props.disabled) return;
      currentValue.value.splice(index, 1);
      e.stopPropagation();
      updatePosition();
      emitValue();
    };

    const onClear = (e: MouseEvent) => {
      currentValue.value = [];
      emitValue();
      clearQuery();
      e.stopPropagation();
    };

    const showQuery = () => {
      if (props.filterable || hasSearchEvent) {
        queryInputVisible.value = true;
        nextTick(() => {
          queryInputRef.value?.focus();
          queryInputFocused.value = true;
        });
      }
    };

    const toggle = (show: boolean | null = null) => {
      if (props.disabled) {
        return;
      }
      if (hasSearchEvent) {
        showQuery();
        return;
      }

      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        nextTick(() => {
          visible.value = true;
          emit("openChange", true);
          updatePosition();
          showQuery();
        });
      } else {
        visible.value = show !== null ? show : !visible.value;
        emit("openChange", visible.value);
        if (visible.value) {
          updatePosition();
          showQuery();
        } else {
          clearQuery();
        }
      }
    };

    const optionsData = computed(() => {
      let { options, loading } = props;
      if (loading) return [];
      if (options && options.length > 0) {
        return options;
      }

      const data: SelectOption[] = [];
      const children = getChildren(slots.default?.());
      children.forEach((child: any) => {
        if (child?.props) {
          const { label, value, disabled } = child.props;
          const resolvedLabel = label || child?.children?.default?.()?.[0]?.children || value;
          data.push({
            value,
            disabled,
            label: resolvedLabel,
          });
        }
      });
      return data;
    });

    const filterOptions = () => {
      const key = queryKey.value;
      const filter = props.filterable && key.trim() !== "";
      return filter
        ? optionsData.value.filter((item) =>
            (item.label as string).toLowerCase().includes(key.toLowerCase())
          )
        : optionsData.value;
    };

    const renderOptions = () => {
      const optionNodes: any[] = [];
      const nodes = filterOptions();
      reallySize.value = nodes.length;
      nodes.forEach((item, index) => {
        const { label, value, disabled } = { ...item };
        const checked = isChecked(value);
        optionNodes.push(
          <Option
            onSelect={onSelect}
            onMouseenter={() => onMouseenter(index)}
            key={`${value}-${label}`}
            active={activeIndex.value === index}
            value={value}
            label={label}
            disabled={disabled}
            checked={checked}
            multiple={props.multiple}
          />
        );
      });
      return optionNodes;
    };

    const queryKeydown = ({ key }: KeyboardEvent) => {
      if (key === "Backspace") {
        if (queryKey.value === "" && props.multiple && currentValue.value.length > 0) {
          currentValue.value = currentValue.value.slice(0, -1);
          emitValue();
          updatePosition();
        }
      }
    };

    const showClear = computed(() => {
      return (
        props.clearable &&
        !props.disabled &&
        !isEmpty(currentValue.value) &&
        !isEmpty(labelText.value)
      );
    });

    const renderOverlay = () => {
      if (!rendered.value) return null;

      const optionNodes = renderOptions();
      const preCls = "k-select";
      const popperProps = {
        ref: refPopper,
        style: {
          minWidth: `${minWidth.value}px`,
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        } as CSSProperties,
        class: [
          "k-select-dropdown",
          "k-scroll",
          {
            "k-select-dropdown-multiple": props.multiple,
            "k-select-dropdown-sm": props.size === "small",
          },
        ],
      };
      const loadingNode = (
        <div class="k-select-loading">
          <Icon type={Loading} spin />
          <span>{locale.value?.k.select.loading}</span>
        </div>
      );
      return (
        <Transition name={`${preCls}`}>
          <div v-transfer={true} v-show={visible.value} {...popperProps}>
            {props.loading ? (
              loadingNode
            ) : optionNodes.length ? (
              <ul>{optionNodes}</ul>
            ) : (
              <Empty
                onClick={emptyClick}
                description={props.emptyText || locale.value?.k.select.emptyText}
              />
            )}
          </div>
        </Transition>
      );
    };

    return () => {
      const {
        disabled,
        size,
        multiple,
        placeholder,
        showArrow,
        bordered,
        theme,
        arrowIcon,
        icon,
        shape,
        filterable,
      } = props;
      let childNode: any[] = [];
      const finalArrowIcon = arrowIcon || ChevronDown;

      const queryInputProps = {
        ref: queryInputRef,
        class: "k-select-search",
        autoComplete: "off",
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
      // console.log(placeholderText, labelText.value, queryKey.value);
      const placeNode =
        placeholderText && isEmpty(labelText.value) && !queryKey.value ? (
          <div class="k-select-placeholder">{placeholderText}</div>
        ) : null;

      const renderTags = () => {
        let tags = labelText.value.map((label, i) => {
          return (
            <span class="k-select-tag" key={label}>
              {label}
              <Icon type={X} onClick={(e) => removeTag(e, i)} />
            </span>
          );
        });
        if (props.maxTagCount && props.maxTagCount > 0 && tags.length > props.maxTagCount) {
          tags = tags.slice(0, props.maxTagCount);
          tags.push(
            <span class="k-select-tag">+{labelText.value.length - props.maxTagCount}...</span>
          );
        }
        return tags;
      };

      const labelsNode = multiple ? (
        <div class="k-select-labels">
          {renderTags()}
          {queryNode}
        </div>
      ) : !isEmpty(labelText.value) ? (
        <div class="k-select-label" v-show={!queryKey.value.length}>
          {labelText.value[0]}
        </div>
      ) : null;

      childNode.push(labelsNode);
      placeNode && childNode.push(placeNode);

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
          "k-select-block": props.block,
          "k-select-opened": visible.value,
          "k-select-borderless": bordered === false,
          "k-select-lg": size === "large",
          "k-select-sm": size === "small",
          "k-select-light": theme === "light",
          "k-select-has-icon": !!icon,
          "k-select-circle": shape === "circle" && !multiple,
          "k-select-square": shape === "square",
          "k-select-multiple": multiple,
          "k-select-show-search": queryInputFocused.value,
          "k-select-show-tags": multiple && !isEmpty(labelText.value),
          "k-select-has-clear": showClear.value,
        },
      ];
      const clearNode = showClear.value ? (
        <Icon class="k-select-clearable" type={CircleX} onClick={onClear} />
      ) : null;

      const rootProps = {
        tabIndex: disabled ? undefined : 0,
        class: rootClasses,
        style: rootStyles,
        onClick: () => toggle(),
        onFocus: () => (ctxFocused.value = true),
        onBlur: () => (ctxFocused.value = false),
        ref: refSelection,
      };

      return (
        <div {...rootProps} v-resize={updatePosition}>
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
export default Select;
