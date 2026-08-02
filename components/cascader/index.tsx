import { ChevronDown, ChevronRight, CircleX } from "kui-icons";
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
import Empty from "../empty";
import Icon from "../icon";
import { setPlacement } from "../utils/placement";
import { cascaderProps, type CascaderOption } from "./types.ts";

const Cascader = defineComponent({
  name: "Cascader",
  props: cascaderProps,
  emits: ["update:modelValue", "change", "openChange"],
  setup(props, { emit }) {
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
              currentOptions = target.children || [];
            } else {
              break;
            }
          }
          activePath.value = path;
        } else {
          activePath.value = [];
        }
      },
      { immediate: true, deep: true }
    );

    // 计算属性：根据当前的选项树和 activePath，生成多列菜单供层级渲染
    const menus = computed(() => {
      const result: CascaderOption[][] = [props.options]; // 第一列永远是根级 options

      // 遍历当前展开路径，把它们的 children 作为后续列灌进去
      for (let i = 0; i < activePath.value.length; i++) {
        const option = activePath.value[i];
        if (option.children && option.children.length > 0) {
          result.push(option.children);
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
          currentOptions = match.children || [];
        } else {
          // 兜底处理
          labels.push(String(val));
        }
      }

      return props.showAllLevels ? labels.join(props.separator) : labels[labels.length - 1];
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

    const toggleMenu = (show: boolean | null = null) => {
      if (props.disabled) return;

      const isFirstRender = !rendered.value;
      if (isFirstRender) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
      }

      // 计算下一步的显示状态
      const nextVisible = show !== null ? show : !visible.value;

      if (nextVisible) {
        // 首次渲染时，稍微延后变更 visible，让 Teleport 容器和 Transition 体察到 "appear" 状态的临界点
        if (isFirstRender) {
          nextTick(() => {
            visible.value = true;
            emit("openChange", true);
            nextTick(() => updatePosition());
          });
        } else {
          visible.value = true;
          emit("openChange", true);
          nextTick(() => updatePosition());
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
      document.removeEventListener("click", outsideClick);
    });

    // 处理选项项的点击/悬浮触发
    const handleOptionClick = (
      option: CascaderOption,
      columnIndex: number,
      isHoverTrigger = false
    ) => {
      if (option.disabled) return;

      // 斩断当前列后面的所有老旧高亮分支，重构高亮路径
      const nextPath = activePath.value.slice(0, columnIndex);
      nextPath[columnIndex] = option;
      activePath.value = nextPath;

      const hasChildren = option.children && option.children.length > 0;

      // 如果是叶子节点（没有子级了），或者用户就是强制点了这个不论有没有子级
      if (!hasChildren && !isHoverTrigger) {
        // 完成最终选择，抽取路径里所有节点的值
        const finalValue = activePath.value.map((item) => item.value);
        emit("update:modelValue", finalValue);
        emit("change", finalValue);
        // 关闭下拉层
        visible.value = false;
        emit("openChange", false);
      } else {
        // 还有子集，继续展开，实时刷新浮层相对位置
        updatePosition();
      }
    };

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation();
      emit("update:modelValue", []);
      emit("change", []);
      activePath.value = [];
      updatePosition();
    };

    // 渲染动态的多级弹窗列表
    const renderDropdown = () => {
      // 首次未触发时，body 保持绝对干净
      if (!rendered.value) return null;

      const popperProps = {
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        } as CSSProperties,
        class: ["k-cascader-dropdown", { "k-cascader-dropdown-sm": props.size === "small" }],
      };
      const isEmpty = !props.options || props.options.length === 0;

      return (
        <Teleport to="body">
          {/* 👈 核心修复：加上 appear 属性，强制首次渲染时也触发入场动画 */}
          <Transition name="k-cascader" appear>
            {visible.value && (
              <div {...popperProps}>
                {isEmpty ? (
                  <Empty />
                ) : (
                  <div class="k-cascader-dropdown-menus">
                    {menus.value.map((menuItems, columnIndex) => (
                      <ul class="k-cascader-dropdown-menu k-scroll" key={columnIndex}>
                        {menuItems.map((item) => {
                          const isActive = activePath.value[columnIndex]?.value === item.value;
                          const isSelected = props.modelValue[columnIndex] === item.value;
                          const hasChildren = item.children && item.children.length > 0;

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
                              onClick={() => handleOptionClick(item, columnIndex, false)}
                              onMouseenter={() => {
                                if (props.expandTrigger === "hover" && hasChildren) {
                                  handleOptionClick(item, columnIndex, true);
                                }
                              }}
                            >
                              <span>{item.label}</span>
                              {hasChildren && (
                                <Icon class="k-cascader-item-arrow" type={ChevronRight} />
                              )}
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
        </Teleport>
      );
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
      const showClear = clearable && !disabled && hasValue;

      const rootClasses = [
        "k-cascader",
        {
          "k-cascader-disabled": disabled,
          "k-cascader-opened": visible.value,
          "k-cascader-borderless": bordered === false,
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
          {showClear && <Icon class="k-cascader-clearable" onClick={handleClear} type={CircleX} />}
          {renderDropdown()}
        </div>
      );
    };
  },
});

export default Cascader;
