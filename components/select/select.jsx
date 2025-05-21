import Option from "./option";
import Icon from "../icon";
import Empty from "../empty";
import transfer from "../directives/transfer";
import zhCN from "../locale/lang/zh-CN";
import { isEmpty } from "../utils/number";
import { getChildren } from "../utils/vnode";
import { setPlacement } from "../utils/placement";
import { Sync, Close, CloseCircle, ChevronDown } from "kui-icons";
import {
  ref,
  defineComponent,
  watch,
  nextTick,
  inject,
  Transition,
  onBeforeMount,
  onMounted,
  cloneVNode,
} from "vue";

export default defineComponent({
  name: "Select",
  directives: {
    transfer,
  },
  props: {
    placeholder: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    placement: {
      validator(value) {
        return [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-left",
          "bottom-right",
        ].includes(value);
      },
      default: "bottom",
    },
    width: Number,
    maxTagCount: Number,
    value: [String, Number, Array],
    clearable: Boolean,
    filterable: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    loading: Boolean,
    bordered: { type: Boolean, default: true },
    showArrow: { type: Boolean, default: true },
    options: Array,
    theme: String,
    emptyText: String,
    loadingText: String,
    icon: [String, Array],
    shape: String,
    arrowIcon: [String, Array],
  },
  setup(ps, { slots, emit, attrs }) {
    const locale = inject("locale", null) || zhCN;

    const labelText = ref([]);
    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref(
      ps.multiple ? ps.value || [] : isEmpty(ps.value) ? [] : [ps.value]
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref(null);
    const minWidth = ref("");
    const queryInputFocused = ref(false);
    const queryInputRef = ref(null);
    const hasSearchEvent = "onSearch" in attrs;
    const refPopper = ref(null);
    const transOrigin = ref("bottom");
    const refCtx = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const queryInputEventTimer = ref(null);

    const activeIndex = ref(-1);

    const valueMap = ref(new Map());
    const reallySize = ref(0);
    const ctxFocused = ref(false);
    watch(
      () => ps.placement,
      (v) => {
        currentPlacement.value = v;
        updatePosition();
      }
    );
    watch(
      () => ps.value,
      (v) => {
        currentValue.value = ps.multiple ? v || [] : isEmpty(v) ? [] : [v];
        updatePosition();
        updateLabel();
      }
    );
    // const scrollToelement = () => {
    //   // 影响外层 scroll
    //   const item = refPopper.value.children[0].children[activeIndex.value];
    //   item.scrollIntoView({ block: "center" });
    // };
    const scrollOptionIntoView = () => {
      const containerEl = refPopper.value;
      const optionEl = refPopper.value.children[0].children[activeIndex.value];
      const optionTop = optionEl.offsetTop;
      const optionHeight = optionEl.offsetHeight;
      const containerHeight = containerEl.clientHeight;

      const targetScroll = optionTop - containerHeight / 2 + optionHeight / 2;
      containerEl.scrollTop = targetScroll;
    };
    const onKeydown = (e) => {
      const key = e.key;
      if ((!visible.value || valueMap.value.size == 0) && ctxFocused.value) {
        if (key === "ArrowDown" || key === "ArrowUp") {
          toggle();
        }
        return;
      }
      if (visible.value) {
        if (key === "ArrowDown") {
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
        } else if (key === "ArrowUp") {
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
          key === "Enter" &&
          activeIndex.value >= 0 &&
          (ctxFocused.value || queryInputFocused.value)
        ) {
          const filter = ps.filterable && !isEmpty(key);
          let maps = valueMap.value; //value,key
          const reverseMap = new Map();
          for (const [v, k] of maps) {
            if (filter && queryKey.value && !k.includes(queryKey.value)) {
              continue;
            }
            reverseMap.set(k, v); // 注意是 key -> value
          }
          maps = reverseMap;
          // console.log(maps);
          const [label, value] = Array.from(maps)[activeIndex.value];
          onSelect({ label, value });
          e.preventDefault();
          return;
        } else if (
          key == "Escape" &&
          (ctxFocused.value || queryInputFocused.value)
        ) {
          visible.value = false;
          clearQuery();
          e.preventDefault();
        }
      }
    };
    onBeforeMount(() => {
      document.removeEventListener("keydown", onKeydown);
    });

    const updatePosition = () => {
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          3
        );
      });
    };

    onMounted(() => {
      nextTick(() => {
        minWidth.value = refCtx.value.offsetWidth;
        updateLabel();
      });
      document.addEventListener("keydown", onKeydown);
    });

    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        visible.value = false;
        clearQuery();
      }
    };

    const isChecked = (value) => {
      if (ps.multiple) {
        return currentValue.value?.indexOf(value) >= 0;
      } else {
        return !isEmpty(currentValue.value) && currentValue.value[0] === value;
      }
    };

    const clearQuery = () => {
      activeIndex.value = -1;
      if (ps.filterable || hasSearchEvent) {
        setTimeout(() => {
          queryKey.value = "";
          queryInputRef.value.value = "";
          queryInputRef.value.style.width = "";
          queryInputVisible.value = false;
        }, 300);
      }
    };

    const onMouseenter = (index) => {
      activeIndex.value = index;
    };

    const onSelect = (item) => {
      const { value, label } = { ...item };
      let selected = true;
      if (ps.multiple) {
        if (currentValue.value?.indexOf(value) >= 0) {
          selected = false;
          currentValue.value = currentValue.value.filter((v) => v !== value);
          labelText.value = labelText.value.filter((v) => v !== label);
        } else {
          currentValue.value.push(value);
          labelText.value.push(label);
        }
        updatePosition();
        if (hasSearchEvent || ps.filterable) {
          queryInputRef.value.value = "";
          queryKey.value = "";
          showQuery();
        }
      } else {
        currentValue.value = [value];
        labelText.value = [label];
        // toggle();
        visible.value = false;
        clearQuery();
        activeIndex.value = -1;
      }
      // console.log(currentValue.value, labelText.value);
      const result = ps.multiple
        ? currentValue.value
        : currentValue.value[0] || "";
      emit("update:value", result);

      emit("change", result);
      emit("select", value, label, selected);
    };
    const searchInput = (e) => {
      // todo: filter 时 上下键盘实效
      queryKey.value = e.target.value;
      activeIndex.value = -1;
      nextTick(() => {
        e.target.style.width = queryInputMirrorRef.value.offsetWidth + "px";
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

    const emptyClick = (e) => {
      if (queryInputVisible.value) {
        nextTick((e) => {
          queryInputRef.value.focus();
          queryInputFocused.value = true;
        });
      }
    };

    const removeTag = (e, index) => {
      if (ps.disabled) return;
      currentValue.value.splice(index, 1);
      labelText.value.splice(index, 1);
      e.stopPropagation();
      updatePosition();
    };
    const onClear = (e) => {
      currentValue.value = [];
      labelText.value = [];
      emit("update:value", ps.multiple ? [] : "");
      emit("change", ps.multiple ? [] : "");
      e.stopPropagation();
    };
    const showQuery = () => {
      if (ps.filterable || hasSearchEvent) {
        queryInputVisible.value = true;
        nextTick(() => {
          queryInputRef.value?.focus();
          queryInputFocused.value = true;
        });
      }
    };
    const toggle = (show = false) => {
      if (ps.disabled) {
        return;
      }
      // async search
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

    const setValueMap = (value, label) => {
      // if (!rendered.value) {
      valueMap.value.set(value, label);
      // }
    };
    const updateLabel = () => {
      // console.log(currentValue.value, valueMap.value);
      labelText.value = currentValue.value
        .map((value) => valueMap.value.get(value))
        .filter(Boolean);
    };
    const renderOptions = () => {
      const optionNodes = [];
      // let labels = [];
      const key = queryKey.value;
      const filter = ps.filterable && !isEmpty(key);
      // const valueLabelMap = new Map();
      valueMap.value.clear();
      if (ps.options) {
        ps.options.forEach((item, index) => {
          let { label, value } = { ...item };
          const labelText = (label || value || "").toString();
          if (filter && !labelText.toLowerCase().includes(key.toLowerCase())) {
            return;
          }
          const checked = isChecked(value);
          // valueLabelMap.set(item.value, label);
          optionNodes.push(
            <Option
              onSelect={onSelect}
              onMouseenter={() => onMouseenter(index)}
              key={value}
              actived={activeIndex.value == index}
              value={value}
              label={labelText}
              checked={checked}
              multiple={ps.multiple}></Option>
          );
          setValueMap(value, labelText);
        });
      } else {
        const childs = getChildren(slots.default?.());
        childs.forEach((child, index) => {
          const labelText =
            child.props?.label ||
            child.children?.default()[0].children ||
            child.props.value;
          if (filter && !labelText.toLowerCase().includes(key.toLowerCase())) {
            return;
          }
          const checked = isChecked(child.props?.value);
          setValueMap(child.props?.value, labelText);
          // console.log(child.props?.value, labelText);
          // valueLabelMap.set(child.props?.value, label);
          optionNodes.push(
            cloneVNode(child, {
              key: child.props?.value,
              actived: activeIndex.value == index,
              multiple: ps.multiple,
              checked: checked,
              onSelect: onSelect,
              onMouseenter: () => onMouseenter(index),
            })
          );
        });
      }

      reallySize.value = optionNodes.length;
      // console.log(valueMap.value);
      return optionNodes;
    };

    const queryKeydown = ({ key }) => {
      if (key === "Backspace") {
        if (
          queryKey.value == "" &&
          ps.multiple &&
          currentValue.value.length > 0
        ) {
          labelText.value = labelText.value.slice(0, -1);
          currentValue.value = currentValue.value.slice(0, -1);
          emit("update:value", currentValue.value);
          emit(
            "change",
            multiple ? currentValue.value : currentValue.value[0] || ""
          );
          updatePosition();
        }
      }
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
        clearable,
      } = ps;
      let childNode = [];
      if (arrowIcon === undefined) {
        arrowIcon = ChevronDown;
      }
      const optionNodes = renderOptions();

      const classes = [
        "k-select",
        {
          "k-select-disabled": disabled,
          "k-select-open": visible.value,
          "k-select-borderless": bordered === false,
          "k-select-lg": size == "large",
          "k-select-sm": size == "small",
          "k-select-light": theme == "light",
          "k-select-has-icon": !!icon,
          "k-select-circle": shape == "circle" && !multiple,
          "k-select-multiple": multiple,
          "k-select-show-search": queryInputFocused.value,
          "k-select-show-tags": multiple && !isEmpty(labelText.value),
        },
      ];

      const queryProps = {
        onKeydown: queryKeydown,
        onInput: searchInput,
        onBlur: (e) => {
          if (!visible.value) {
            queryInputVisible.value = false;
          }
        },
        ref: queryInputRef,
        class: "k-select-search",
        autoComplete: "off",
        onChange: (e) => e.stopPropagation(),
      };
      const queryNode = (
        <div
          v-show={queryInputVisible.value}
          key="search"
          class="k-select-search-wrap">
          <input {...queryProps} />
          <span class="k-select-search-mirror" ref={queryInputMirrorRef}>
            {queryKey.value}
          </span>
        </div>
      );

      const loadingNode = (
        <div class="k-select-loading">
          <Icon type={Sync} spin />
          <span>{locale?.k.select.loading}</span>
        </div>
      );

      let overlay = null;
      if (rendered.value) {
        const preCls = "k-select";
        const props = {
          ref: refPopper,
          style: {
            minWidth: `${minWidth.value}px`,
            left: `${left.value}px`,
            top: `${top.value}px`,
            transformOrigin: transOrigin.value,
          },
          class: [
            "k-select-dropdown",
            {
              "k-select-dropdown-multiple": multiple,
              "k-select-dropdown-sm": size == "small",
            },
          ],
        };
        overlay = (
          <Transition name={`${preCls}`}>
            <div v-transfer={true} v-show={visible.value} {...props}>
              {ps.loading ? (
                loadingNode
              ) : optionNodes.length ? (
                <ul>{optionNodes}</ul>
              ) : (
                <Empty
                  onClick={emptyClick}
                  description={locale?.k.select.emptyText}
                />
              )}
            </div>
          </Transition>
        );
      }

      const placeholderText = placeholder || locale?.k.select.placeholder;
      const placeNode =
        placeholderText && isEmpty(labelText.value) && !queryKey.value ? (
          <div class="k-select-placeholder">{placeholderText}</div>
        ) : null;

      const labelStyle = {
        display: queryKey.value.length ? "none" : "",
      };
      const renderTags = () => {
        let tags = labelText.value.map((label, i) => {
          return (
            <span class="k-select-tag" key={label}>
              {label}
              <Icon type={Close} onClick={(e) => removeTag(e, i)} />
            </span>
          );
        });
        if (
          ps.maxTagCount &&
          ps.maxTagCount > 0 &&
          tags.length > ps.maxTagCount
        ) {
          tags = tags.slice(0, ps.maxTagCount);
          tags.push(
            <span class="k-select-tag">
              +{labelText.value.length - ps.maxTagCount}...
            </span>
          );
        }
        return tags;
      };
      const labelsNode = multiple ? (
        <div class="k-select-labels" name="k-select-tag">
          {renderTags()}
          {queryNode}
        </div>
      ) : !isEmpty(labelText.value) ? (
        <div class="k-select-label" style={labelStyle}>
          {labelText.value[0]}
        </div>
      ) : null;

      childNode.push(labelsNode);

      placeNode && childNode.push(placeNode);

      if ((filterable || hasSearchEvent) && !multiple) {
        childNode.push(queryNode);
      }
      const styles = { width: `${ps.width}px` };
      let showClear = !disabled && clearable && !isEmpty(labelText.value);

      classes[1]["k-select-has-clear"] = showClear;
      const iconNodes = [];

      if (!hasSearchEvent && showArrow) {
        iconNodes.push(<Icon class="k-select-arrow" type={arrowIcon} />);
      }
      if (showClear) {
        iconNodes.push(
          <Icon
            class="k-select-clearable"
            type={CloseCircle}
            onClick={onClear}
          />
        );
      }

      // iconNodes.push(" ");
      return (
        <div
          tabIndex="0"
          class={classes}
          style={styles}
          onClick={toggle}
          onFocus={() => (ctxFocused.value = true)}
          onBlur={() => (ctxFocused.value = false)}
          ref={refCtx}>
          {icon ? <Icon type={icon} class="k-select-icon" /> : null}
          <div class="k-select-selection">{childNode}</div>
          {iconNodes}
          {overlay}
        </div>
      );
    };
  },
});
