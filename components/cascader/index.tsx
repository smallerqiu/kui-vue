import { ChevronDown, ChevronRight, CircleAlert, CircleX, Loading } from "kui-icons";
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  ref,
  Teleport,
  Transition,
  watch,
  type CSSProperties,
} from "vue";
import { usePopupContainer } from "../config/popup";
import { usePopupHost } from "../config/popup-host";
import Empty from "../empty";
import Icon from "../icon";
import { setPlacement } from "../utils/placement";
import { cascaderProps, type CascaderOption, type CascaderValue } from "./types";

const Cascader = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  emits: {
    "update:modelValue": (value: CascaderValue) => Array.isArray(value),
    change: (value: CascaderValue) => Array.isArray(value),
    openChange: (open: boolean) => typeof open === "boolean",
    expandChange: (value: CascaderValue) => Array.isArray(value),
  },
  setup(props, { emit }) {
    usePopupHost(() => visible.value && toggleMenu(false));
    const getPopupContainer = usePopupContainer();
    const visible = ref(false);
    const rendered = ref(false);

    // 基础布局定位变量
    const refSelection = ref<HTMLElement | null>(null);
    const refPopper = ref<HTMLElement | null>(null);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("top");
    const left = ref(0);
    const top = ref(0);
    const minWidth = ref(0);

    // 记录当前展开的每一层的 Option 对象路径
    const activePath = ref<CascaderOption[]>([]);
    const activeColumn = ref(0);
    const loadedChildren = ref(new Map<CascaderOption, CascaderOption[]>());
    const loadingOptions = ref(new Set<CascaderOption>());
    const failedOptions = ref(new Set<CascaderOption>());
    let unmounted = false;
    let positionRaf = 0;
    const getOptionChildren = (option: CascaderOption) =>
      loadedChildren.value.get(option) || option.children || [];
    const isExpandable = (option: CascaderOption) =>
      getOptionChildren(option).length > 0 ||
      Boolean(props.loadData && option.isLeaf !== true && !loadedChildren.value.has(option));

    const loadOption = async (option: CascaderOption, path: CascaderOption[]) => {
      if (!props.loadData || loadingOptions.value.has(option)) return getOptionChildren(option);
      loadingOptions.value = new Set(loadingOptions.value).add(option);
      const nextFailed = new Set(failedOptions.value);
      nextFailed.delete(option);
      failedOptions.value = nextFailed;
      try {
        const result = await props.loadData(option, path);
        const children = Array.isArray(result) ? result : option.children || [];
        if (!unmounted) {
          loadedChildren.value = new Map(loadedChildren.value).set(option, children);
          activePath.value = [...activePath.value];
          updatePosition();
        }
        return children;
      } catch {
        if (!unmounted) failedOptions.value = new Set(failedOptions.value).add(option);
        return [];
      } finally {
        if (!unmounted) {
          const nextLoading = new Set(loadingOptions.value);
          nextLoading.delete(option);
          loadingOptions.value = nextLoading;
        }
      }
    };

    // 监听已选择的真正结果路径值，反向初始化或校准当前展开高亮状态
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal && newVal.length > 0) {
          // 根据最终值重构高亮路径
          const path: CascaderOption[] = [];
          let currentOptions = props.options;
          for (const val of newVal) {
            const target = currentOptions.find((o) => o.value === val);
            if (target) {
              path.push(target);
              currentOptions = getOptionChildren(target);
            } else {
              break;
            }
          }
          activePath.value = path;
        } else {
          activePath.value = [];
        }
      },
      { immediate: true, deep: true },
    );
    watch(
      () => props.options,
      () => {
        const path: CascaderOption[] = [];
        let options = props.options;
        for (const value of props.modelValue) {
          const option = options.find((item) => item.value === value);
          if (!option) break;
          path.push(option);
          options = getOptionChildren(option);
        }
        activePath.value = path;
      },
      { deep: true },
    );
    watch(
      () => props.placement,
      (placement) => (currentPlacement.value = placement),
    );

    // 计算属性：根据当前的选项树和 activePath，生成多列菜单供层级渲染
    const menus = computed(() => {
      const result: CascaderOption[][] = [props.options]; // 第一列永远是根级 options

      // 遍历当前展开路径，把它们的 children 作为后续列灌进去
      for (let i = 0; i < activePath.value.length; i++) {
        const option = activePath.value[i];
        const children = getOptionChildren(option);
        if (children.length > 0) {
          result.push(children);
        } else {
          break;
        }
      }
      return result;
    });

    // 拼接最终展示在 Input 容器内的文本
    const displayLabel = computed(() => {
      if (!props.modelValue || props.modelValue.length === 0) return "";

      const labels: string[] = [];
      let currentOptions = props.options;

      for (const val of props.modelValue) {
        const match = currentOptions.find((o) => o.value === val);
        if (match) {
          labels.push(match.label);
          currentOptions = getOptionChildren(match);
        } else {
          // 兜底处理
          labels.push(String(val));
        }
      }

      return props.showAllLevels ? labels.join(props.separator) : labels[labels.length - 1];
    });

    const updatePosition = () => {
      cancelAnimationFrame(positionRaf);
      positionRaf = requestAnimationFrame(() => {
        if (!visible.value) return;
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

    const toggleMenu = (show: boolean | null = null) => {
      if (props.disabled || props.readonly) return;

      const isFirstRender = !rendered.value;
      if (isFirstRender) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);
      }

      // 计算下一步的显示状态
      const nextVisible = show !== null ? show : !visible.value;

      if (nextVisible) {
        activeColumn.value = 0;
        // 首次渲染时，稍微延后变更 visible，让 Teleport 容器和 Transition 体察到 "appear" 状态的临界点
        if (isFirstRender) {
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
      } else {
        visible.value = false;
        emit("openChange", false);
      }
    };

    const outsideClick = (e: MouseEvent) => {
      const selectionEl = refSelection.value;
      const popperEl = refPopper.value;
      if (
        selectionEl &&
        !selectionEl.contains(e.target as Node) &&
        popperEl &&
        !popperEl.contains(e.target as Node)
      ) {
        visible.value = false;
        emit("openChange", false);
      }
    };

    onBeforeUnmount(() => {
      unmounted = true;
      cancelAnimationFrame(positionRaf);
      document.removeEventListener("click", outsideClick);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    });

    // 处理选项项的点击/悬浮触发
    const handleOptionClick = (
      option: CascaderOption,
      columnIndex: number,
      isHoverTrigger = false,
    ) => {
      if (props.readonly || option.disabled) return;

      // 斩断当前列后面的所有老旧高亮分支，重构高亮路径
      const nextPath = activePath.value.slice(0, columnIndex);
      nextPath[columnIndex] = option;
      activePath.value = nextPath;

      const children = getOptionChildren(option);
      const expandable = isExpandable(option);
      activeColumn.value = expandable ? columnIndex + 1 : columnIndex;
      if (expandable)
        emit(
          "expandChange",
          nextPath.map((item) => item.value),
        );

      // 如果是叶子节点（没有子级了），或者用户就是强制点了这个不论有没有子级
      if (!expandable && !isHoverTrigger) {
        // 完成最终选择，抽取路径里所有节点的值
        const finalValue = activePath.value.map((item) => item.value);
        emit("update:modelValue", finalValue);
        emit("change", finalValue);
        // 关闭下拉层
        visible.value = false;
        emit("openChange", false);
      } else {
        if (!children.length) void loadOption(option, nextPath);
        // 还有子集，继续展开，实时刷新浮层相对位置
        updatePosition();
      }
    };

    const handleClear = (e: Event) => {
      if (props.readonly) return;
      e.stopPropagation();
      emit("update:modelValue", []);
      emit("change", []);
      activePath.value = [];
      activeColumn.value = 0;
      updatePosition();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (props.disabled || props.readonly) return;
      if (event.key === "Escape") {
        if (visible.value) {
          event.preventDefault();
          toggleMenu(false);
        }
        return;
      }
      if (!visible.value && ["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        toggleMenu(true);
        nextTick(() => {
          if (!activePath.value.length) {
            const first = props.options.find((item) => !item.disabled);
            if (first) activePath.value = [first];
          }
        });
        return;
      }
      if (!visible.value) return;

      const columnIndex = Math.max(0, Math.min(activeColumn.value, menus.value.length - 1));
      const menu = menus.value[columnIndex] || [];
      const enabled = menu.filter((item) => !item.disabled);
      if (!enabled.length) return;
      const current = activePath.value[columnIndex];
      const currentIndex = enabled.findIndex((item) => item.value === current?.value);

      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        let nextIndex: number;
        if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = enabled.length - 1;
        else if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % enabled.length;
        else nextIndex = currentIndex <= 0 ? enabled.length - 1 : currentIndex - 1;
        activePath.value = [...activePath.value.slice(0, columnIndex), enabled[nextIndex]];
        if (enabled[nextIndex].children?.length) {
          emit(
            "expandChange",
            activePath.value.map((item) => item.value),
          );
        }
      } else if (event.key === "ArrowLeft" && activePath.value.length > 1) {
        event.preventDefault();
        activeColumn.value = Math.max(0, columnIndex - 1);
        activePath.value = activePath.value.slice(0, columnIndex);
        emit(
          "expandChange",
          activePath.value.map((item) => item.value),
        );
      } else if (event.key === "ArrowRight") {
        const option = activePath.value[columnIndex];
        const children = option ? getOptionChildren(option) : [];
        if (option && !children.length && isExpandable(option)) {
          event.preventDefault();
          void loadOption(option, activePath.value.slice(0, columnIndex + 1)).then((items) => {
            const first = items.find((item) => !item.disabled);
            if (first) {
              activePath.value = [...activePath.value.slice(0, columnIndex + 1), first];
              activeColumn.value = columnIndex + 1;
            }
          });
          return;
        }
        const first = children.find((item) => !item.disabled);
        if (first) {
          event.preventDefault();
          activePath.value = [...activePath.value.slice(0, columnIndex + 1), first];
          activeColumn.value = columnIndex + 1;
        }
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const option = activePath.value[columnIndex] || enabled[0];
        if (isExpandable(option)) {
          const children = getOptionChildren(option);
          if (!children.length) {
            void loadOption(option, activePath.value.slice(0, columnIndex + 1)).then((items) => {
              const first = items.find((item) => !item.disabled);
              if (first) {
                activePath.value = [...activePath.value.slice(0, columnIndex + 1), first];
                activeColumn.value = columnIndex + 1;
              }
            });
            return;
          }
          const first = children.find((item) => !item.disabled);
          if (first) {
            activePath.value = [...activePath.value.slice(0, columnIndex + 1), first];
            activeColumn.value = columnIndex + 1;
          }
        } else {
          handleOptionClick(option, columnIndex);
        }
      }
      updatePosition();
    };

    // 渲染动态的多级弹窗列表
    const renderDropdown = () => {
      // 首次未触发时，body 保持绝对干净
      if (!rendered.value) return [];

      const popperProps = {
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          minWidth: `${minWidth.value}px`,
          transformOrigin: transOrigin.value,
        } as CSSProperties,
        class: [
          "k-cascader-dropdown",
          {
            "k-cascader-dropdown-sm": props.size === "small",
            "k-cascader-dropdown-lg": props.size === "large",
          },
        ],
      };
      const isEmpty = !props.options || props.options.length === 0;

      return [
        <Teleport key="overlay" to={getPopupContainer()}>
          {/* 👈 核心修复：加上 appear 属性，强制首次渲染时也触发入场动画 */}
          <Transition name="k-cascader" appear>
            {visible.value && (
              <div {...popperProps}>
                {isEmpty ? (
                  <Empty description={props.emptyText} />
                ) : (
                  <div class="k-cascader-dropdown-menus">
                    {menus.value.map((menuItems, columnIndex) => (
                      <ul
                        class="k-cascader-dropdown-menu k-scroll"
                        role="listbox"
                        key={columnIndex}
                      >
                        {menuItems.map((item) => {
                          const isActive = activePath.value[columnIndex]?.value === item.value;
                          const isSelected = props.modelValue[columnIndex] === item.value;
                          const hasChildren = isExpandable(item);
                          const isLoading = loadingOptions.value.has(item);
                          const isFailed = failedOptions.value.has(item);

                          return (
                            <li
                              class={[
                                "k-cascader-dropdown-item",
                                {
                                  "k-cascader-dropdown-item-active": isActive,
                                  "k-cascader-dropdown-item-selected": isSelected,
                                  "k-cascader-dropdown-item-disabled": item.disabled,
                                },
                              ]}
                              key={item.value}
                              role="option"
                              aria-disabled={item.disabled}
                              aria-selected={isSelected}
                              onClick={() => handleOptionClick(item, columnIndex, false)}
                              onMouseenter={() => {
                                if (props.expandTrigger === "hover" && hasChildren) {
                                  handleOptionClick(item, columnIndex, true);
                                }
                              }}
                            >
                              <span>{item.label}</span>
                              {isLoading ? (
                                <Icon class="k-cascader-item-arrow" type={Loading} spin />
                              ) : isFailed ? (
                                <Icon class="k-cascader-item-arrow" type={CircleAlert} />
                              ) : hasChildren ? (
                                <Icon class="k-cascader-item-arrow" type={ChevronRight} />
                              ) : null}
                            </li>
                          );
                        })}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Transition>
        </Teleport>,
      ];
    };

    return () => {
      const {
        disabled,
        showArrow,
        size,
        placeholder,
        clearable,
        theme,
        bordered,
        arrowIcon,
        shape,
        icon,
      } = props;
      const hasValue = props.modelValue && props.modelValue.length > 0;
      const showClear = clearable && !disabled && !props.readonly && hasValue;

      const rootClasses = [
        "k-cascader",
        {
          "k-cascader-disabled": disabled,
          "k-cascader-readonly": props.readonly,
          "k-cascader-opened": visible.value,
          "k-cascader-borderless": bordered === false || theme === "plain",
          "k-cascader-circle": shape === "circle",
          "k-cascader-square": shape === "square",
          "k-cascader-fill": theme === "fill",
          "k-cascader-lg": size === "large",
          "k-cascader-sm": size === "small",
          "k-cascader-has-clear": showClear,
        },
      ];
      const finalArrowIcon = arrowIcon || ChevronDown;

      const arrowNode = showArrow ? (
        <Icon
          class="k-cascader-arrow"
          type={finalArrowIcon}
          style={{
            transform: visible.value ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      ) : null;

      return (
        <div
          ref={refSelection}
          class={rootClasses}
          tabindex={disabled ? undefined : 0}
          role="combobox"
          aria-expanded={visible.value}
          aria-disabled={disabled}
          aria-readonly={props.readonly || undefined}
          onKeydown={handleKeydown}
          onClick={() => toggleMenu()}
        >
          {icon ? <Icon type={icon} class="k-cascader-icon" /> : null}

          <div class="k-cascader-selection">
            {hasValue ? (
              <div class="k-cascader-label" key="label">
                {displayLabel.value}
              </div>
            ) : (
              <div class="k-cascader-placeholder" key="placeholder">
                {placeholder || "请选择"}
              </div>
            )}
          </div>
          {arrowNode}
          {showClear && (
            <Icon
              class="k-cascader-clearable"
              type={CircleX}
              role="button"
              tabindex={0}
              aria-label="Clear"
              onPointerdown={(event: PointerEvent) => event.preventDefault()}
              onClick={handleClear}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") handleClear(event);
              }}
            />
          )}
          {renderDropdown()}
        </div>
      );
    };
  },
});

export default Cascader;
