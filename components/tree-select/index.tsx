import Popup, { type PopupRef } from "../popup";
import { renderSelectionTags } from "../utils/selection-tags";
import { ChevronDown, CircleX, LoaderCircle } from "kui-icons";
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  provide,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import type {
  BooleanType,
  DropPlacementsType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import { markFormFieldComponent, useFormAppearance, useFormField } from "../form/context";
import Empty from "../empty";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import Tree, { type TreeExpandEvent } from "../tree";
import { treeSelectContextKey } from "../tree/context";
import type { TreeNode } from "../tree/utils";
import { isEmpty } from "../utils/number";

export type TreeSelectValue = string | string[] | null | undefined;

interface SearchEventTarget extends EventTarget {
  value?: string;
  style?: { width?: string };
  focus?: () => void;
}

const treeSelectProps = {
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
  modelValue: [String, Number, Array] as PropType<TreeSelectValue>,
  clearable: { type: Boolean as BooleanType, default: true },
  filterable: Boolean as BooleanType,
  block: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  multiple: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: true },
  showArrow: { type: Boolean as BooleanType, default: true },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  emptyText: String,
  icon: [Array] as PropType<IconType[]>,
  shape: String as PropType<ShapeType>,
  arrowIcon: [Array] as PropType<IconType[]>,
  treeData: Array as PropType<TreeNode[]>,
  treeCheckable: Boolean as BooleanType,
  treeShowLine: Boolean as BooleanType,
  treeShowIcon: { type: Boolean as BooleanType, default: true },
  treeCheckStrictly: Boolean as BooleanType,
  virtual: Boolean as BooleanType,
  virtualHeight: { type: [Number, String] as PropType<number | string>, default: 260 },
  itemHeight: { type: Number, default: 28 },
  overscan: { type: Number, default: 5 },
  treeExpandedKeys: Array as PropType<string[]>,
  treeLoadData: {
    type: Function as PropType<(node: TreeNode) => Promise<unknown>>,
  },
};

export type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;
type TreeSelectPublicProps<T extends TreeSelectValue> = Omit<
  Partial<TreeSelectProps>,
  "modelValue"
> &
  Omit<HTMLAttributes, "onChange"> & {
    modelValue?: T;
    "onUpdate:modelValue"?: (value: T) => void;
    onChange?: (value: T) => void;
    onTreeExpand?: (event: TreeExpandEvent) => void;
    "onUpdate:treeExpandedKeys"?: (keys: string[]) => void;
    onTreeSelect?: (value: string, label: VNodeChild, selected: boolean) => void;
    onSearch?: (event: InputEvent) => void;
    onOpenChange?: (open: boolean) => void;
    onClear?: () => void;
  };
type TreeSelectComponent = {
  new <T extends TreeSelectValue = string>(
    props: TreeSelectPublicProps<T>,
  ): { $props: TreeSelectPublicProps<T> };
};

const TreeSelect = defineComponent({
  name: "TreeSelect",
  props: treeSelectProps,
  emits: {
    "update:modelValue": (value: TreeSelectValue) =>
      value == null || typeof value === "string" || Array.isArray(value),
    "update:treeExpandedKeys": (keys: string[]) => Array.isArray(keys),
    change: (value: TreeSelectValue) =>
      value == null || typeof value === "string" || Array.isArray(value),
    treeSelect: (value: string, label: VNodeChild, selected: boolean) =>
      typeof value === "string" && label !== undefined && typeof selected === "boolean",
    search: (event: InputEvent) => typeof event?.type === "string",
    treeExpand: (event: TreeExpandEvent) => typeof event === "object" && event !== null,
    openChange: (open: boolean) => typeof open === "boolean",
    clear: () => true,
  },
  setup(props, { emit }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);

    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);

    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const visible = ref(false);
    const initialValue = field?.prop ? (field.value.value as TreeSelectValue) : props.modelValue;
    const currentValue = ref<string[]>(
      props.multiple
        ? [...(Array.isArray(initialValue) ? initialValue : [])]
        : isEmpty(initialValue)
          ? []
          : [initialValue as string],
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref<HTMLElement | null>(null);

    const queryInputFocused = ref(false);
    const queryInputRef = ref<HTMLInputElement | null>(null);
    const hasSearchEvent = Boolean(getCurrentInstance()?.vnode.props?.onSearch);
    const refPopper = ref<HTMLElement | null>(null);

    const refSelection = ref<HTMLElement | null>(null);

    const queryInputEventTimer = ref<number | undefined>(undefined);
    const clearQueryTimer = ref<number | undefined>(undefined);

    const defaultExpandedKeys = ref<string[]>([...(props.treeExpandedKeys || [])]);

    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (v) => {
        currentValue.value = props.multiple
          ? [...(Array.isArray(v) ? v : [])]
          : isEmpty(v)
            ? []
            : [v as string];
        updatePosition();
      },
    );

    provide(treeSelectContextKey, {
      checkOnClick: computed(() => !!props.treeCheckable),
      query: queryKey,
    });

    onBeforeUnmount(() => {
      clearTimeout(queryInputEventTimer.value);
      clearTimeout(clearQueryTimer.value);
    });

    const popup = ref<PopupRef>();
    const updatePosition = () => popup.value?.updatePosition();

    const openChange = (opened: boolean) => {
      visible.value = opened;
      emit("openChange", opened);
    };

    const clearQuery = () => {
      if (props.filterable || hasSearchEvent) {
        clearTimeout(clearQueryTimer.value);
        clearQueryTimer.value = window.setTimeout(() => {
          queryKey.value = "";
          if (queryInputRef.value) {
            queryInputRef.value.value = "";
            queryInputRef.value.style.width = "";
          }
          queryInputVisible.value = false;
        }, 300);
      }
    };

    const searchInput = (e: InputEvent) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const target = e.target as SearchEventTarget;
      queryKey.value = target.value || "";
      nextTick(() => {
        if (target.style && queryInputMirrorRef.value) {
          const availableWidth = Math.max((refSelection.value?.clientWidth || 0) - 40, 7);
          const contentWidth = Math.max(queryInputMirrorRef.value.offsetWidth + 2, 7);
          target.style.width = `${Math.min(contentWidth, availableWidth)}px`;
        }
        updatePosition();
      });

      if (hasSearchEvent) {
        clearTimeout(queryInputEventTimer.value);
        queryInputEventTimer.value = window.setTimeout(() => {
          openChange(true);
          emit("search", e);
        }, 500);
      }
    };

    const emptyClick = () => {
      if (queryInputVisible.value) {
        nextTick(() => {
          if (queryInputRef.value) {
            queryInputRef.value.focus();
          }
          queryInputFocused.value = true;
        });
      }
    };

    const emitValue = () => {
      const result = props.multiple ? currentValue.value : currentValue.value[0] || null;
      emit("update:modelValue", result);
      if (field?.prop) field.update(result);
      emit("change", result);
    };

    const removeTag = (index: number) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      currentValue.value.splice(index, 1);
      emitValue();
      updatePosition();
    };

    const onClear = (e: Event) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      currentValue.value = [];
      emitValue();
      clearQuery();
      e.stopPropagation();
      emit("clear");
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
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value) {
        return;
      }
      if (hasSearchEvent) {
        showQuery();
        return;
      }

      const next = show ?? !visible.value;
      openChange(next);
      if (next) showQuery();
      else clearQuery();
    };

    const labelText = computed<string[]>(() => {
      const lookup: Record<string, string> = {};
      const collectLabels = (nodes: TreeNode[]) => {
        nodes.forEach((item) => {
          lookup[String(item.key)] = item.title || item.key;
          if (item.children?.length) collectLabels(item.children);
        });
      };
      collectLabels(props.treeData || []);
      return currentValue.value.map((val: string) => {
        const hit = lookup[String(val)];
        return hit || val;
      });
    });

    const hasMatchingNode = computed(() => {
      const query = queryKey.value.trim().toLocaleLowerCase();
      const nodes = props.treeData || [];
      if (!query) return nodes.length > 0;

      const stack = [...nodes];
      while (stack.length) {
        const node = stack.pop()!;
        if (
          String(node.title ?? "")
            .toLocaleLowerCase()
            .includes(query)
        ) {
          return true;
        }
        if (node.children?.length) stack.push(...node.children);
      }
      return false;
    });

    watch(
      () => props.treeExpandedKeys,
      (nv) => {
        defaultExpandedKeys.value = nv || [];
      },
    );

    const onExpand = ({ key, expanded, node }: TreeExpandEvent) => {
      if (props.disabled || field?.disabled.value) return;
      const nextKeys = defaultExpandedKeys.value.slice();
      const index = nextKeys.indexOf(key);
      if (index > -1 && !expanded) {
        nextKeys.splice(index, 1);
      } else if (index === -1 && expanded) {
        nextKeys.push(key);
      }
      defaultExpandedKeys.value = nextKeys;
      emit("update:treeExpandedKeys", nextKeys.slice());
      emit("treeExpand", { key, expanded, node });
    };

    const onCheck = (_checkedNode: TreeNode, _checked: boolean, checkedKeys: string[]) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      currentValue.value = checkedKeys.slice();
      emitValue();
    };

    const onSelect = (item: TreeNode) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const value = item.key;
      const label = item.title;
      let selected = true;

      if (props.multiple) {
        if (currentValue.value.indexOf(value) >= 0) {
          selected = false;
          currentValue.value = currentValue.value.filter((v: string) => v !== value);
        } else {
          currentValue.value.push(value);
        }

        updatePosition();
        if (hasSearchEvent || props.filterable) {
          if (queryInputRef.value) {
            queryInputRef.value.value = "";
          }
          queryKey.value = "";
          showQuery();
        }
      } else {
        currentValue.value = [value];
        openChange(false);
        clearQuery();
      }

      emitValue();
      emit("treeSelect", value, label, selected);
    };

    const renderTree = () => {
      const treePropsData: Record<string, unknown> = {
        checkable: props.treeCheckable,
        disabled: props.disabled || field?.disabled.value,
        data: props.treeData,
        showLine: props.treeShowLine,
        showIcon: props.treeShowIcon,
        multiple: props.multiple || props.treeCheckable,
        checkStrictly: props.treeCheckStrictly,
        expandedKeys: defaultExpandedKeys.value.slice(),
        selectedKeys: currentValue.value.slice(),
        checkedKeys: currentValue.value.slice(),
        loadData: props.treeLoadData,
        virtual: props.virtual,
        height: props.virtualHeight,
        itemHeight: props.itemHeight,
        overscan: props.overscan,
        onSelect,
        onExpand,
        onCheck,
      };

      return <Tree {...treePropsData} />;
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

    const triggerKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        if (visible.value) {
          openChange(false);
          clearQuery();
        }
      } else if (
        (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") &&
        !visible.value
      ) {
        event.preventDefault();
        toggle();
      }
    };

    const showClear = computed(() => {
      return (
        props.clearable &&
        !(props.disabled || field?.disabled.value) &&
        !(props.readonly || field?.readonly.value) &&
        !isEmpty(currentValue.value)
      );
    });

    const renderOverlay = () => {
      const preCls = "k-tree-select";
      const overlayProps = {
        ref: refPopper,
        class: [
          "k-tree-select-dropdown",
          "k-scroll",
          {
            "k-tree-select-dropdown-multiple": props.multiple,
            "k-tree-select-dropdown-sm": props.size === "small",
            "k-tree-select-dropdown-virtual": props.virtual,
          },
        ],
      };

      const loadingNode = (
        <div class="k-tree-select-loading">
          <Icon type={LoaderCircle} spin />
          <span>{locale.value?.k?.select?.loading}</span>
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
          prefixCls="k-tree-select-dropdown"
          transitionName={preCls}
          matchTriggerWidth
          onOpenChange={(next) => {
            if (!next) {
              openChange(false);
              clearQuery();
            }
          }}
          v-slots={{
            overlay: () => (
              <div {...overlayProps}>
                {props.loading ? (
                  loadingNode
                ) : hasMatchingNode.value ? (
                  renderTree()
                ) : (
                  <Empty
                    onClick={emptyClick}
                    description={props.emptyText || locale.value?.k?.select?.emptyText}
                  />
                )}
              </div>
            ),
          }}
        />,
      ];
    };

    return () => {
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const theme = appearance.theme.value;
      const shape = appearance.shape.value;
      let arrowIcon = props.arrowIcon;
      if (arrowIcon === undefined) {
        arrowIcon = ChevronDown;
      }

      const childNode: VNodeChild[] = [];

      const queryProps = {
        ref: queryInputRef,
        class: "k-tree-select-search",
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
        <div v-show={queryInputVisible.value} key="search" class="k-tree-select-search-wrap">
          <input {...queryProps} />
          <span class="k-tree-select-search-mirror" ref={queryInputMirrorRef}>
            {queryKey.value}
          </span>
        </div>
      );

      const placeholderText = props.placeholder || locale.value?.k?.select?.placeholder;
      const placeNode =
        placeholderText && isEmpty(labelText.value) && !queryKey.value ? (
          <div class="k-tree-select-placeholder">{placeholderText}</div>
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

      const labelsNode = props.multiple ? (
        <div class="k-tree-select-labels">
          {renderTags()}
          {queryNode}
        </div>
      ) : !isEmpty(labelText.value) ? (
        <div class="k-tree-select-label" v-show={queryKey.value.length == 0}>
          {labelText.value[0]}
        </div>
      ) : null;

      if (labelsNode) {
        childNode.push(labelsNode);
      }

      if (placeNode) {
        childNode.push(placeNode);
      }

      if ((props.filterable || hasSearchEvent) && !props.multiple) {
        childNode.push(queryNode);
      }

      const styles: CSSProperties = props.width ? { width: `${props.width}px` } : {};
      const arrowNode =
        !hasSearchEvent && props.showArrow ? (
          <Icon class="k-tree-select-arrow" type={arrowIcon} />
        ) : null;

      const classes = [
        "k-tree-select",
        {
          "k-tree-select-disabled": disabled,
          "k-tree-select-readonly": readonly,
          "k-tree-select-block": props.block,
          "k-tree-select-opened": visible.value,
          "k-tree-select-borderless": props.bordered === false || theme === "plain",
          "k-tree-select-lg": size === "large",
          "k-tree-select-sm": size === "small",
          "k-tree-select-fill": theme === "fill",
          "k-tree-select-has-icon": !!props.icon,
          "k-tree-select-circle": shape === "circle",
          "k-tree-select-square": shape == "square",
          "k-tree-select-multiple": props.multiple,
          "k-tree-select-show-search": queryInputFocused.value,
          "k-tree-select-show-tags": props.multiple && !isEmpty(labelText.value),
          "k-tree-select-has-clear": showClear.value,
        },
      ];

      const clearNode = showClear.value ? (
        <Icon
          class="k-tree-select-clearable"
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
      const treeProps = {
        id: field?.prop ? field.id : undefined,
        tabindex: "0",
        role: "combobox",
        "aria-expanded": visible.value,
        "aria-labelledby": field?.prop ? field.labelId : undefined,
        "aria-describedby": field?.describedBy.value,
        "aria-invalid": field?.invalid.value || undefined,
        "aria-required": field?.required.value || undefined,
        "aria-disabled": disabled || undefined,
        "aria-readonly": readonly || undefined,
        "aria-haspopup": "tree" as const,
        class: classes,
        style: styles,
        onClick: () => toggle(),
        onKeydown: triggerKeydown,
        onBlur: () => field?.blur(),
        ref: refSelection,
      };
      return (
        <div {...treeProps}>
          {props.icon ? <Icon type={props.icon} class="k-tree-select-icon" /> : null}
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

const FormTreeSelect = markFormFieldComponent(TreeSelect);
export default FormTreeSelect as TreeSelectComponent;
