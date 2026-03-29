import { ChevronDown, Close, CloseCircle, Loading } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeMount,
  onMounted,
  ref,
  Transition,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
import resize from "../directives/resize";
import { transfer } from "../directives/transfer";
import Empty from "../empty";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
import Tree from "../tree";
import { buildTree } from "../tree/utils";
import { isEmpty } from "../utils/number";
import { setPlacement } from "../utils/placement";

export const treeSelectProps = {
  placeholder: String,
  size: {
    type: String as PropType<"small" | "large" | "default">,
    default: "default",
    validator(value: string) {
      return ["small", "large", "default"].includes(value);
    },
  },
  placement: {
    type: String as PropType<
      "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right"
    >,
    default: "bottom-left",
  },
  width: [Number, String] as PropType<number | string>,
  maxTagCount: Number,
  modelValue: [String, Number, Array] as PropType<string | number | (string | number)[]>,
  value: [String, Number, Array] as PropType<string | number | (string | number)[]>, // Deprecated, use modelValue
  clearable: { type: Boolean, default: true },
  filterable: Boolean,
  block: Boolean,
  disabled: Boolean,
  multiple: Boolean,
  loading: Boolean,
  bordered: { type: Boolean, default: true },
  showArrow: { type: Boolean, default: true },
  options: Array as PropType<any[]>, // Not used in current implementation, but kept for compatibility
  theme: { type: String as PropType<"light">, default: "light" },
  emptyText: String,
  icon: [String, Array] as PropType<any>,
  shape: String as PropType<"circle">,
  arrowIcon: [String, Array] as PropType<any>,

  treeData: Array as PropType<any[]>,
  treeCheckable: Boolean,
  treeShowLine: Boolean,
  treeShowIcon: { type: Boolean, default: true },
  treeCheckStrictly: Boolean,
  treeExpandedKeys: Array as PropType<string[]>,
  treeSelectedKeys: Array as PropType<string[]>,
  treeCheckedKeys: Array as PropType<string[]>, // Added for consistency with Tree component
  treeExpandedAll: Boolean,
};

export type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;

export default defineComponent({
  name: "TreeSelect",
  directives: {
    transfer,
    resize,
  },
  props: treeSelectProps,
  emits: ["update:modelValue", "change", "search", "update:treeExpandedKeys", "select"],
  setup(props, { emit, attrs }) {
    const injectedLocale = inject<any>("locale", zhCN);
    const locale = computed(() => {
      return injectedLocale?.value || injectedLocale || zhCN;
    });

    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref<(string | number)[]>([]);

    // Initialize currentValue based on props.modelValue or props.value
    watch(
      () => [props.modelValue, props.value, props.multiple],
      ([modelVal, val, multiple]) => {
        if (multiple) {
          currentValue.value = (modelVal || val || []) as (string | number)[];
        } else {
          currentValue.value = isEmpty(modelVal || val)
            ? []
            : [(modelVal || val) as string | number];
        }
      },
      { immediate: true, deep: true }
    );

    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref<HTMLElement | null>(null);
    const minWidth = ref<string>("0px");
    const queryInputFocused = ref(false);
    const queryInputRef = ref<HTMLInputElement | null>(null);
    const hasSearchEvent = attrs?.onSearch;
    const refPopper = ref<HTMLElement | null>(null);
    const transOrigin = ref("bottom");
    const refSelection = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const queryInputEventTimer = ref<number | undefined>(undefined);

    const hasLoad = attrs.onTreeLoadData;
    const defaultExpandedKeys = ref<string[]>(props.treeExpandedKeys || []);
    const defaultCheckedKeys = ref<string[]>(props.treeCheckedKeys || []);

    const ctxFocused = ref(false);
    watch(
      () => props.placement,
      (v) => {
        currentPlacement.value = v;
        updatePosition();
      }
    );
    watch(
      () => props.modelValue,
      (v) => {
        currentValue.value = props.multiple
          ? ((v || []) as (string | number)[])
          : isEmpty(v)
            ? []
            : [v as string | number];
        updatePosition();
      }
    );

    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });

    const updatePosition = () => {
      nextTick(() => {
        minWidth.value = refSelection.value?.offsetWidth;
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
        minWidth.value = refSelection.value?.offsetWidth;
      });
    });

    const outsideClick = (e: MouseEvent) => {
      const ctx = refSelection.value;
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

    const clearQuery = () => {
      if (props.filterable || hasSearchEvent) {
        setTimeout(() => {
          queryKey.value = "";
          if (queryInputRef.value?.value) {
            queryInputRef.value.value = "";
            queryInputRef.value.style.width = "";
          }
          queryInputVisible.value = false;
        }, 300);
      }
    };

    const searchInput = (e: InputEvent) => {
      queryKey.value = (e.target as HTMLInputElement).value;
      nextTick(() => {
        if (queryInputMirrorRef.value)
          (e.target as HTMLInputElement).style.width = queryInputMirrorRef.value.offsetWidth + "px";
        updatePosition();
      });
      if (hasSearchEvent) {
        clearTimeout(queryInputEventTimer.value);
        queryInputEventTimer.value = setTimeout(() => {
          if (!rendered.value) {
            rendered.value = true;
            document.addEventListener("click", outsideClick);
            nextTick(() => {
              visible.value = true;
              updatePosition();
            });
          } else {
            visible.value = true;
            updatePosition();
          }
          emit("search", e);
        }, 500);
      }
    };

    const emptyClick = (e: MouseEvent) => {
      if (queryInputVisible.value && queryInputRef.value) {
        nextTick(() => {
          queryInputRef.value?.focus();
          queryInputFocused.value = true;
        });
      }
    };
    const emitValue = () => {
      const result = props.multiple ? currentValue.value : currentValue.value[0] || null;
      emit("update:modelValue", result as string | number | (string | number)[] | null);
      emit("change", result);
    };

    const removeTag = (e: MouseEvent, index: number) => {
      if (props.disabled) return;
      currentValue.value.splice(index, 1); // Remove by index
      e.stopPropagation();
      updatePosition();
    };
    const onClear = (e: MouseEvent) => {
      currentValue.value = [];
      emitValue();

      clearQuery();
      e.stopPropagation();
    };
    const showQuery = () => {
      if (props.filterable || hasSearchEvent) {
        queryInputVisible.value = true; // Always show input if filterable or has search event
        nextTick(() => {
          queryInputRef.value?.focus();
          queryInputFocused.value = true;
        });
      }
    };
    const toggle = (show = false) => {
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
          updatePosition();
          showQuery();
        });
      } else {
        visible.value = show || !visible.value;
        if (visible.value) {
          updatePosition();
          showQuery();
        } else {
          clearQuery();
        }
      }
    };
    const labelText = computed<string[]>(() => {
      const lookup = new Map();
      optionsData.value.forEach((item) => {
        lookup.set(item.key, item.title);
      });
      return currentValue.value.map((val) => lookup.get(val) ?? val);
    });

    const optionsData = computed(() => {
      const options = buildTree({
        data: props.treeData,
        expandedKeys: defaultExpandedKeys.value,
        selectedKeys: currentValue.value,
        checkedKeys: defaultCheckedKeys.value,
        hasLoad: !!hasLoad,
        checkStrictly: props.treeCheckStrictly,
      });

      return options;
    });

    watch(
      () => props.treeCheckedKeys,
      (nv: string[] | undefined) => {
        defaultCheckedKeys.value = nv || [];
      }
    );
    watch(
      () => props.treeExpandedKeys,
      (nv: string[] | undefined) => {
        defaultExpandedKeys.value = nv || [];
      }
    );
    const onExpand = ({ key, expanded }: { key: string; expanded: boolean; targetNode: any }) => {
      let index = defaultExpandedKeys.value.indexOf(key);
      if (index > -1 && !expanded) {
        defaultExpandedKeys.value.splice(index, 1);
      } else {
        defaultExpandedKeys.value.push(key);
      }
      emit("update:treeExpandedKeys", [...defaultExpandedKeys.value]); // Emit a new array
    };
    const onCheck = (item: any, checked: boolean, checkedKeys: string[]) => {
      const result = [...checkedKeys]; // Ensure it's a new array
      currentValue.value = result;
      emitValue();
    };
    const onSelect = (item: { key: string | number; title: string }) => {
      const { key: value, title: label } = { ...item };
      let selected = true;
      if (props.multiple) {
        const existingIndex = currentValue.value.indexOf(value);
        if (existingIndex >= 0) {
          selected = false;
          // Create a new array to ensure reactivity
          const newCurrentValue = [...currentValue.value];
          newCurrentValue.splice(existingIndex, 1);
          currentValue.value = newCurrentValue;
        } else {
          currentValue.value.push(value);
        }

        updatePosition();
        if (hasSearchEvent || props.filterable) {
          queryInputRef.value.value = "";
          queryKey.value = ""; // Clear query key
          showQuery();
        }
      } else {
        currentValue.value = [value];
        visible.value = false;
        clearQuery();
      }
      emitValue();
      emit("select", value, label, selected);
    };
    const renderTree = () => {
      const treeProps = {
        checkable: props.treeCheckable,
        loading: props.loading,
        data: props.treeData,
        multiple: props.multiple || props.treeCheckable,
        checkStrictly: props.treeCheckStrictly,
        expandedKeys: [...defaultExpandedKeys.value],
        selectedKeys: [...currentValue.value],
        checkedKeys: [...currentValue.value],
        selectAsCheck: props.treeCheckable,
        queryKey: queryKey.value,
        onSelect: onSelect,
        onExpand: onExpand,
        onCheck: onCheck,
      };
      if (hasLoad) {
        props.onLoadData = attrs.onTreeLoadData;
      } // Pass through tree-specific listeners
      return <Tree {...treeProps} />;
    };

    const queryKeydown = (e: KeyboardEvent) => {
      const { key } = e;
      if (key === "Backspace") {
        if (queryKey.value === "" && props.multiple && currentValue.value.length > 0) {
          currentValue.value = currentValue.value.slice(0, -1);
          emitValue();
          updatePosition();
        }
      }
    };
    const showClear = computed(() => {
      return props.clearable && !props.disabled && !isEmpty(currentValue.value);
    });
    const renderOverlay = () => {
      let overlay = null;
      if (rendered.value) {
        const preCls = "k-tree-select";
        const overlayProps: Record<string, any> = {
          ref: refPopper,
          style: {
            // Explicitly type as CSSProperties
            minWidth: `${minWidth.value}px`,
            left: `${left.value}px`,
            top: `${top.value}px`,
            transformOrigin: transOrigin.value,
          },
          class: [
            "k-tree-select-dropdown",
            "k-scroll",
            {
              // Use props.multiple and props.size
              "k-tree-select-dropdown-multiple": props.multiple,
              "k-tree-select-dropdown-sm": props.size === "small",
            },
          ],
        };
        const loadingNode = (
          <div class="k-tree-select-loading">
            <Icon type={Loading} spin />
            <span>{locale.value?.k.select.loading}</span>
          </div>
        );
        overlay = (
          <Transition name={preCls}>
            <div v-transfer={true} v-show={visible.value} {...overlayProps}>
              {/* Cast to any for v-transfer */}
              {props.loading ? (
                loadingNode
              ) : props.treeData?.length ? (
                renderTree()
              ) : (
                <Empty onClick={emptyClick} description={locale.value?.k.select.emptyText} />
              )}
            </div>
          </Transition>
        );
      }
      return overlay;
    };
    return () => {
      let {
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
      const childNode: VNode[] = [];
      if (arrowIcon === undefined) {
        arrowIcon = ChevronDown;
      }

      const queryProps: Record<string, any> = {
        ref: queryInputRef,
        class: "k-tree-select-search",
        autoComplete: "off",
        onChange: (e:MouseEvent) => e.stopPropagation(),
        onKeydown: queryKeydown,
        onInput: searchInput,
        onBlur: () => {
          if (!visible.value && !queryInputFocused.value) {
            // Only hide if not visible and not focused
            queryInputVisible.value = false;
          }
        },
      };
      const queryNode = (
        <div v-show={queryInputVisible.value} key="search" class="k-tree-select-search-wrap">
          <input {...queryProps} />
          <span class="k-tree-select-search-mirror" ref={queryInputMirrorRef}>
            {queryKey.value}
          </span>
        </div>
      );

      const placeholderText = placeholder || locale.value?.k.select.placeholder;
      const placeNode =
        placeholderText && isEmpty(currentValue.value) && !queryKey.value ? (
          <div class="k-tree-select-placeholder">{placeholderText}</div>
        ) : null;

      const labelStyle = {
        display: queryKey.value.length ? "none" : "",
      };
      const renderTags = () => {
        let tags = labelText.value.map((label, i) => {
          return (
            <span class="k-tree-select-tag" key={label}>
              {label} {/* Use label directly */}
              <Icon type={Close} onClick={(e) => removeTag(e, i)} />
            </span>
          );
        });
        if (props.maxTagCount && props.maxTagCount > 0 && tags.length > props.maxTagCount) {
          tags = tags.slice(0, props.maxTagCount);
          tags.push(
            <span class="k-tree-select-tag" key="more">
              +{labelText.value.length - props.maxTagCount}...
            </span>
          );
        }
        return tags;
      };
      const labelsNode = multiple ? ( // Use props.multiple
        <div class="k-tree-select-labels">
          {renderTags()}
          {queryNode}
        </div>
      ) : !isEmpty(labelText.value) ? (
        <div class="k-tree-select-label" style={labelStyle}>
          {labelText.value[0]}
        </div>
      ) : null;

      if (labelsNode) childNode.push(labelsNode);
      if (placeNode) childNode.push(placeNode);

      if ((filterable || hasSearchEvent) && !multiple) {
        childNode.push(queryNode);
      }
      const styles: CSSProperties = { width: props.width ? `${props.width}px` : undefined };

      const arrowNode =
        !hasSearchEvent && showArrow ? <Icon class="k-tree-select-arrow" type={arrowIcon} /> : null;

      const classes = [
        "k-tree-select",
        {
          "k-tree-select-disabled": disabled,
          "k-tree-select-block": props.block,
          "k-tree-select-opened": visible.value,
          "k-tree-select-borderless": bordered === false,
          "k-tree-select-lg": size === "large",
          "k-tree-select-sm": size === "small",
          "k-tree-select-light": theme === "light",
          "k-tree-select-has-icon": !!icon, // Use props.icon
          "k-tree-select-circle": shape === "circle" && !multiple, // Use props.shape
          "k-tree-select-multiple": multiple,
          "k-tree-select-show-search": queryInputFocused.value,
          "k-tree-select-show-tags": multiple && !isEmpty(labelText.value),
          "k-tree-select-has-clear": showClear.value,
        },
      ];
      const clearNode = showClear.value ? (
        <Icon class="k-tree-select-clearable" type={CloseCircle} onClick={onClear} /> // Use CloseCircle
      ) : null;

      return (
        <div
          tabindex="0"
          class={classes}
          style={styles} // Use styles object
          v-resize={updatePosition}
          onClick={()=>toggle}
          onFocus={() => (ctxFocused.value = true)}
          onBlur={() => (ctxFocused.value = false)}
          ref={refSelection}
        >
          {icon ? <Icon type={icon} class="k-tree-select-icon" /> : null} {/* Use props.icon */}
          <div class="k-tree-select-selection">{childNode}</div>
          <span class="k-tree-select-suffix">
            {arrowNode}
            {clearNode}
          </span>
          {renderOverlay()}
        </div>
      );
    };
  },
});
