import { ChevronDown, CircleX, LoaderCircle, X } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
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
import type {
  BooleanType,
  DropPlacementsType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import resize from "../directives/resize";
import Empty from "../empty";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import Tree, { type TreeExpandEvent } from "../tree";
import { treeSelectContextKey } from "../tree/context";
import type { TreeNode } from "../tree/utils";
import { isEmpty } from "../utils/number";
import { setPlacement } from "../utils/placement";

type TreeSelectValue = string | string[] | null | undefined;
type TreeSelectPlacement =
  "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";

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
  treeExpandedKeys: Array as PropType<string[]>,
  treeLoadData: {
    type: Function as PropType<(node: TreeNode) => Promise<unknown>>,
  },
  onChange: {
    type: Function as PropType<(value: TreeSelectValue) => void>,
  },
  onTreeSelect: {
    type: Function as PropType<(value: string, label: string, selected: boolean) => void>,
  },
  onSearch: {
    type: Function as PropType<(e: InputEvent) => void>,
  },
  onTreeExpand: {
    type: Function as PropType<(value: TreeExpandEvent) => void>,
  },
  onOpenChange: {
    type: Function as PropType<(open: boolean) => void>,
  },
};

export type TreeSelectProps = ExtractPropTypes<typeof treeSelectProps>;

const TreeSelect = defineComponent({
  name: "TreeSelect",
  directives: {
    resize,
  },
  props: treeSelectProps,
  setup(props, { emit }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const getPopupContainer = usePopupContainer();

    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref<string[]>(
      props.multiple
        ? [...(Array.isArray(props.modelValue) ? props.modelValue : [])]
        : isEmpty(props.modelValue)
          ? []
          : [props.modelValue as string]
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref<HTMLElement | null>(null);
    const minWidth = ref<string | number>("");
    const queryInputFocused = ref(false);
    const queryInputRef = ref<HTMLInputElement | null>(null);
    const hasSearchEvent = typeof props.onSearch === "function";
    const refPopper = ref<HTMLElement | null>(null);
    const transOrigin = ref("bottom");
    const refSelection = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref<TreeSelectPlacement>(props.placement);
    const queryInputEventTimer = ref<number | undefined>(undefined);
    const clearQueryTimer = ref<number | undefined>(undefined);
    let positionRaf = 0;

    const defaultExpandedKeys = ref<string[]>([...(props.treeExpandedKeys || [])]);

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
          ? [...(Array.isArray(v) ? v : [])]
          : isEmpty(v)
            ? []
            : [v as string];
        updatePosition();
      }
    );

    provide(treeSelectContextKey, {
      checkOnClick: computed(() => !!props.treeCheckable),
      query: queryKey,
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(positionRaf);
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("scroll", updatePosition, true);
      clearTimeout(queryInputEventTimer.value);
      clearTimeout(clearQueryTimer.value);
    });

    const updatePosition = () => {
      cancelAnimationFrame(positionRaf);
      positionRaf = requestAnimationFrame(() => {
        nextTick(() => {
          if (!visible.value) return;
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
      });
    };

    onMounted(() => {
      nextTick(() => {
        minWidth.value = refSelection.value ? refSelection.value.offsetWidth : "";
      });
      document.addEventListener("scroll", updatePosition, true);
    });

    const openChange = (opened: boolean) => {
      visible.value = opened;
      emit("openChange", opened);
    };
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
        openChange(false);
        clearQuery();
      }
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
              openChange(true);
              updatePosition();
            });
          } else {
            openChange(true);
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
          openChange(true);
          nextTick(() => {
            updatePosition();
            showQuery();
          });
        });
      } else {
        openChange(show || !visible.value);
        if (visible.value) {
          nextTick(() => {
            updatePosition();
          });
          showQuery();
        } else {
          clearQuery();
        }
      }
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
      }
    );

    const onExpand = ({ key, expanded, node }: TreeExpandEvent) => {
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
        data: props.treeData,
        showLine: props.treeShowLine,
        showIcon: props.treeShowIcon,
        multiple: props.multiple || props.treeCheckable,
        checkStrictly: props.treeCheckStrictly,
        expandedKeys: defaultExpandedKeys.value.slice(),
        selectedKeys: currentValue.value.slice(),
        checkedKeys: currentValue.value.slice(),
        loadData: props.treeLoadData,
        onSelect,
        onExpand,
        onCheck,
      };

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
          <Icon type={LoaderCircle} spin />
          <span>{locale.value?.k?.select?.loading}</span>
        </div>
      );

      return (
        <Teleport to={getPopupContainer()}>
          <Transition name={preCls}>
            <div v-show={visible.value} {...overlayProps}>
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
          </Transition>
        </Teleport>
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
        let tags = labelText.value.map((label: string, i: number) => {
          return (
            <span class="k-tree-select-tag" key={String(label)}>
              {label}
              <Icon type={X} onClick={(e: MouseEvent) => removeTag(e, i)} />
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
          "k-tree-select-borderless": props.bordered === false || props.theme === "plain",
          "k-tree-select-lg": props.size === "large",
          "k-tree-select-sm": props.size === "small",
          "k-tree-select-fill": props.theme === "fill",
          "k-tree-select-has-icon": !!props.icon,
          "k-tree-select-circle": props.shape === "circle" && !props.multiple,
          "k-tree-select-square": props.shape == "square",
          "k-tree-select-multiple": props.multiple,
          "k-tree-select-show-search": queryInputFocused.value,
          "k-tree-select-show-tags": props.multiple && !isEmpty(labelText.value),
          "k-tree-select-has-clear": showClear.value,
        },
      ];

      const clearNode = showClear.value ? (
        <Icon class="k-tree-select-clearable" type={CircleX} onClick={onClear} />
      ) : null;
      const treeProps = {
        tabindex: "0",
        class: classes,
        style: styles,
        onClick: () => toggle(),
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
