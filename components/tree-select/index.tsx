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
  type VNodeChild,
} from "vue";
import resize from "../directives/resize";
import { transfer } from "../directives/transfer";
import Empty from "../empty";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import Tree from "../tree";
import { buildTree, type TreeKey, type TreeNode } from "../tree/utils";
import { isEmpty } from "../utils/number";
import { setPlacement } from "../utils/placement";

type TreeSelectValue = TreeKey | TreeKey[] | null | undefined;
type TreeSelectSize = "small" | "large" | "default";
type TreeSelectPlacement =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

interface SearchEventTarget extends EventTarget {
  value?: string;
  style?: { width?: string };
  focus?: () => void;
}

export const treeSelectProps = {
  placeholder: String,
  size: {
    type: String as PropType<TreeSelectSize>,
    default: "default",
    validator(value: TreeSelectSize) {
      return ["small", "large", "default"].indexOf(value) >= 0;
    },
  },
  placement: {
    type: String as PropType<TreeSelectPlacement>,
    default: "bottom-left",
    validator(value: TreeSelectPlacement) {
      return (
        ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].indexOf(value) >=
        0
      );
    },
  },
  width: Number,
  maxTagCount: Number,
  modelValue: [String, Number, Array] as PropType<TreeSelectValue>,
  value: [String, Number, Array] as PropType<TreeSelectValue>,
  clearable: { type: Boolean, default: true },
  filterable: Boolean,
  block: Boolean,
  disabled: Boolean,
  multiple: Boolean,
  loading: Boolean,
  bordered: { type: Boolean, default: true },
  showArrow: { type: Boolean, default: true },
  options: Array,
  theme: { type: String, default: "light" },
  emptyText: String,
  icon: [Array] as PropType<IconType[]>,
  shape: String,
  arrowIcon: [Array] as PropType<IconType[]>,
  treeData: Array as PropType<TreeNode[]>,
  treeCheckable: Boolean,
  treeShowLine: Boolean,
  treeShowIcon: { type: Boolean, default: true },
  treeCheckStrictly: Boolean,
  treeExpandedKeys: Array as PropType<TreeKey[]>,
  treeCheckedKeys: Array as PropType<TreeKey[]>,
  treeSelectedKeys: Array as PropType<TreeKey[]>,
  treeExpandedAll: Boolean,
};

export type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;

const TreeSelect = defineComponent({
  name: "TreeSelect",
  directives: {
    transfer,
    resize,
  },
  props: treeSelectProps,
  emits: ["update:modelValue", "change", "search", "select", "update:treeExpandedKeys"],
  setup(props, { emit, attrs }) {
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref<TreeKey[]>(
      props.multiple
        ? ((props.modelValue || props.value || []) as TreeKey[])
        : isEmpty(props.modelValue || props.value)
          ? []
          : [(props.modelValue || props.value) as TreeKey]
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref<HTMLElement | null>(null);
    const minWidth = ref<string | number>("");
    const queryInputFocused = ref(false);
    const queryInputRef = ref<HTMLInputElement | null>(null);
    const hasSearchEvent = !!attrs.onSearch;
    const refPopper = ref<HTMLElement | null>(null);
    const transOrigin = ref("bottom");
    const refSelection = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref<TreeSelectPlacement>(props.placement);
    const queryInputEventTimer = ref<number | undefined>(undefined);

    const onTreeLoadData = attrs.onTreeLoadData as
      | ((node: TreeNode) => Promise<unknown>)
      | undefined;
    const hasLoad = !!onTreeLoadData;
    const defaultExpandedKeys = ref<TreeKey[]>(props.treeExpandedKeys || []);
    const defaultCheckedKeys = ref<TreeKey[]>(props.treeCheckedKeys || []);

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
          ? ((v || []) as TreeKey[])
          : isEmpty(v)
            ? []
            : [v as TreeKey];
        updatePosition();
      }
    );

    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });

    const updatePosition = () => {
      nextTick(() => {
        minWidth.value = refSelection.value ? refSelection.value.offsetWidth : "";
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
        minWidth.value = refSelection.value ? refSelection.value.offsetWidth : "";
      });
    });

    const outsideClick = (e: Event) => {
      const target = e.target as Node | null;
      const ctx = refSelection.value;
      if (
        refPopper.value &&
        target &&
        !refPopper.value.contains(target) &&
        ctx &&
        !ctx.contains(target)
      ) {
        visible.value = false;
        clearQuery();
      }
    };

    const clearQuery = () => {
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

    const searchInput = (e: Event) => {
      const target = e.target as SearchEventTarget;
      queryKey.value = target.value || "";
      nextTick(() => {
        if (target.style && queryInputMirrorRef.value) {
          target.style.width = queryInputMirrorRef.value.offsetWidth + "px";
        }
        updatePosition();
      });

      if (hasSearchEvent) {
        clearTimeout(queryInputEventTimer.value);
        queryInputEventTimer.value = window.setTimeout(() => {
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
      emit("change", result);
    };

    const removeTag = (e: MouseEvent, index: number) => {
      if (props.disabled) return;
      currentValue.value.splice(index, 1);
      e.stopPropagation();
      emitValue();
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
        queryInputVisible.value = true;
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

    const optionsData = computed(() => {
      return buildTree({
        data: props.treeData || [],
        expandedKeys: defaultExpandedKeys.value,
        selectedKeys: currentValue.value,
        checkedKeys: defaultCheckedKeys.value,
        hasLoad,
        checkStrictly: props.treeCheckStrictly,
      });
    });

    const labelText = computed<(string | TreeKey)[]>(() => {
      const lookup: Record<string, string | TreeKey> = {};
      optionsData.value.forEach((item: TreeNode) => {
        lookup[String(item.key)] = item.title || item.key;
      });
      return currentValue.value.map((val: TreeKey) => {
        const hit = lookup[String(val)];
        return hit || val;
      });
    });

    watch(
      () => props.treeCheckedKeys,
      (nv) => {
        defaultCheckedKeys.value = nv || [];
      }
    );

    watch(
      () => props.treeExpandedKeys,
      (nv) => {
        defaultExpandedKeys.value = nv || [];
      }
    );

    const onExpand = ({ key, expanded }: { key: TreeKey; expanded: boolean }) => {
      const nextKeys = defaultExpandedKeys.value.slice();
      const index = nextKeys.indexOf(key);
      if (index > -1 && !expanded) {
        nextKeys.splice(index, 1);
      } else if (index === -1 && expanded) {
        nextKeys.push(key);
      }
      defaultExpandedKeys.value = nextKeys;
      emit("update:treeExpandedKeys", nextKeys.slice());
    };

    const onCheck = (_checkedNode: TreeNode, _checked: boolean, checkedKeys: TreeKey[]) => {
      currentValue.value = checkedKeys.slice();
      emitValue();
    };

    const onSelect = (item: TreeNode) => {
      const value = item.key;
      const label = item.title;
      let selected = true;

      if (props.multiple) {
        if (currentValue.value.indexOf(value) >= 0) {
          selected = false;
          currentValue.value = currentValue.value.filter((v: TreeKey) => v !== value);
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
        visible.value = false;
        clearQuery();
      }

      emitValue();
      emit("select", value, label, selected);
    };

    const renderTree = () => {
      const treePropsData: Record<string, unknown> = {
        checkable: props.treeCheckable,
        loading: props.loading,
        data: props.treeData,
        multiple: props.multiple || props.treeCheckable,
        checkStrictly: props.treeCheckStrictly,
        expandedKeys: defaultExpandedKeys.value.slice(),
        selectedKeys: currentValue.value.slice(),
        checkedKeys: currentValue.value.slice(),
        selectAsCheck: props.treeCheckable,
        queryKey: queryKey.value,
        onSelect,
        onExpand,
        onCheck,
      };

      if (hasLoad) {
        treePropsData.onLoadData = onTreeLoadData;
      }

      return <Tree {...treePropsData} />;
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
      return props.clearable && !props.disabled && !isEmpty(currentValue.value);
    });

    const renderOverlay = () => {
      if (!rendered.value) return null;

      const preCls = "k-tree-select";
      const overlayProps = {
        ref: refPopper,
        style: {
          minWidth: String(minWidth.value ? `${minWidth.value}px` : ""),
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        } as CSSProperties,
        class: [
          "k-tree-select-dropdown",
          "k-scroll",
          {
            "k-tree-select-dropdown-multiple": props.multiple,
            "k-tree-select-dropdown-sm": props.size === "small",
          },
        ],
      };

      const loadingNode = (
        <div class="k-tree-select-loading">
          <Icon type={Loading} spin />
          <span>{locale.value?.k?.select?.loading}</span>
        </div>
      );

      return (
        <Transition name={preCls}>
          <div v-transfer={true} v-show={visible.value} {...overlayProps}>
            {props.loading ? (
              loadingNode
            ) : props.treeData && props.treeData.length ? (
              renderTree()
            ) : (
              <Empty
                onClick={emptyClick}
                description={props.emptyText || locale.value?.k?.select?.emptyText}
              />
            )}
          </div>
        </Transition>
      );
    };

    return () => {
      let arrowIcon = props.arrowIcon;
      if (arrowIcon === undefined) {
        arrowIcon = ChevronDown;
      }

      const childNode: VNodeChild[] = [];

      const queryProps = {
        ref: queryInputRef,
        class: "k-tree-select-search",
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

      const renderTags = () => {
        let tags = labelText.value.map((label: string | TreeKey, i: number) => {
          return (
            <span class="k-tree-select-tag" key={String(label)}>
              {label}
              <Icon type={Close} onClick={(e: MouseEvent) => removeTag(e, i)} />
            </span>
          );
        });

        if (props.maxTagCount && props.maxTagCount > 0 && tags.length > props.maxTagCount) {
          tags = tags.slice(0, props.maxTagCount);
          tags.push(
            <span class="k-tree-select-tag">+{labelText.value.length - props.maxTagCount}...</span>
          );
        }

        return tags;
      };

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
          "k-tree-select-disabled": props.disabled,
          "k-tree-select-block": props.block,
          "k-tree-select-opened": visible.value,
          "k-tree-select-borderless": props.bordered === false,
          "k-tree-select-lg": props.size === "large",
          "k-tree-select-sm": props.size === "small",
          "k-tree-select-light": props.theme === "light",
          "k-tree-select-has-icon": !!props.icon,
          "k-tree-select-circle": props.shape === "circle" && !props.multiple,
          "k-tree-select-multiple": props.multiple,
          "k-tree-select-show-search": queryInputFocused.value,
          "k-tree-select-show-tags": props.multiple && !isEmpty(labelText.value),
          "k-tree-select-has-clear": showClear.value,
        },
      ];

      const clearNode = showClear.value ? (
        <Icon class="k-tree-select-clearable" type={CloseCircle} onClick={onClear} />
      ) : null;
      const treeProps = {
        tabindex: "0",
        class: classes,
        style: styles,
        onClick: () => toggle(),
        onFocus: () => (ctxFocused.value = true),
        onBlur: () => (ctxFocused.value = false),
        ref: refSelection,
      };
      return (
        <div {...treeProps} v-resize={updatePosition}>
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

export default TreeSelect;
