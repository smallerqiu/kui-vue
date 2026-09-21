import Popup, { type PopupRef } from "../popup";
import { ChevronDown, ChevronRight, CircleAlert, CircleX, Loading } from "kui-icons";
import { computed, defineComponent, nextTick, onBeforeUnmount, ref, toRaw, watch } from "vue";
import Empty from "../empty";
import { markFormFieldComponent, useFormAppearance, useFormField } from "../form/context";
import Icon from "../icon";
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
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const modelValue = computed<CascaderValue>(() =>
      field?.prop && Array.isArray(field.value.value)
        ? (field.value.value as CascaderValue)
        : props.modelValue,
    );

    const visible = ref(false);

    // 基础布局定位变量
    const refSelection = ref<HTMLElement | null>(null);
    const refPopper = ref<HTMLElement | null>(null);

    // 记录当前展开的每一层的 Option 对象路径
    const activePath = ref<CascaderOption[]>([]);
    const activeColumn = ref(0);
    const loadedChildren = ref(new Map<CascaderOption, CascaderOption[]>());
    const loadingOptions = ref(new Set<CascaderOption>());
    const failedOptions = ref(new Set<CascaderOption>());
    let unmounted = false;

    const getOptionChildren = (option: CascaderOption) =>
      option.children ?? loadedChildren.value.get(option) ?? [];
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
        const rawOption = toRaw(option);
        const result = await props.loadData(
          rawOption,
          path.map((item) => toRaw(item)),
        );
        const children = Array.isArray(result) ? result : rawOption.children || [];
        if (!unmounted) {
          // An empty successful response is still a completed load. Caching it
          // prevents the node from remaining expandable and loading forever.
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
      modelValue,
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
        for (const value of modelValue.value) {
          const option = options.find((item) => item.value === value);
          if (!option) break;
          path.push(option);
          options = getOptionChildren(option);
        }
        activePath.value = path;
      },
      { deep: true },
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
      if (!modelValue.value || modelValue.value.length === 0) return "";

      const labels: string[] = [];
      let currentOptions = props.options;

      for (const val of modelValue.value) {
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

    const popup = ref<PopupRef>();
    const updatePosition = () => popup.value?.updatePosition();

    const toggleMenu = (show: boolean | null = null) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const next = show ?? !visible.value;
      if (next === visible.value) return;
      if (next) {
        activeColumn.value = 0;
      }
      visible.value = next;
      emit("openChange", next);
    };

    onBeforeUnmount(() => {
      unmounted = true;
    });

    // 处理选项项的点击/悬浮触发
    const handleOptionClick = (
      option: CascaderOption,
      columnIndex: number,
      isHoverTrigger = false,
    ) => {
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        option.disabled
      )
        return;

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
        if (field?.prop) field.update(finalValue);
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
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      e.stopPropagation();
      emit("update:modelValue", []);
      if (field?.prop) field.update([]);
      emit("change", []);
      activePath.value = [];
      activeColumn.value = 0;
      updatePosition();
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
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

      const popperProps = {
        ref: refPopper,
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
        <Popup
          ref={popup}
          raw
          open={visible.value}
          target={refSelection}
          trigger="manual"
          placement={props.placement}
          prefixCls="k-cascader-dropdown"
          transitionName="k-cascader"
          matchTriggerWidth
          destroyOnClose
          onOpenChange={(next) => {
            visible.value = next;
            emit("openChange", next);
          }}
          v-slots={{
            overlay: () => (
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
                          const isSelected = modelValue.value[columnIndex] === item.value;
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
                              aria-busy={isLoading || undefined}
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
            ),
          }}
        />,
      ];
    };

    return () => {
      const { showArrow, placeholder, clearable, bordered, arrowIcon, icon } = props;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const theme = appearance.theme.value;
      const shape = appearance.shape.value;
      const hasValue = modelValue.value.length > 0;
      const showClear = clearable && !disabled && !readonly && hasValue;

      const rootClasses = [
        "k-cascader",
        {
          "k-cascader-disabled": disabled,
          "k-cascader-readonly": readonly,
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
          id={field?.prop ? field.id : undefined}
          class={rootClasses}
          tabindex={disabled ? undefined : 0}
          role="combobox"
          aria-expanded={visible.value}
          aria-disabled={disabled}
          aria-labelledby={field?.prop ? field.labelId : undefined}
          aria-describedby={field?.describedBy.value}
          aria-invalid={field?.invalid.value || undefined}
          aria-required={field?.required.value || undefined}
          aria-readonly={readonly || undefined}
          onBlur={() => field?.blur()}
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

export default markFormFieldComponent(Cascader);
