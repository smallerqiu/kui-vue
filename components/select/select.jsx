import Option from "./option.jsx";
import Icon from "../icon";
import Empty from "../empty";
import transfer from "../directives/transfer";
import resize from "../directives/resize";
import zhCN from "../locale/zh-CN";
import { isEmpty } from "../utils/number";
import { getChildren } from "../utils/vnode";
import { setPlacement } from "../utils/placement";
import { Loading, Close, CloseCircle, ChevronDown } from "kui-icons/dist/icons";
import { withInstall } from "../utils/vue";
import {
  ref,
  defineComponent,
  watch,
  nextTick,
  inject,
  Transition,
  onBeforeUnmount,
  onMounted,
  computed,
} from "vue";

const Select = defineComponent({
  name: "Select",
  directives: {
    transfer,
    resize,
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
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(
          value
        );
      },
      default: "bottom-left",
    },
    width: Number,
    maxTagCount: Number,
    modelValue: [String, Number, Array],
    value: [String, Number, Array],
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
    loadingText: String,
    icon: [String, Array],
    shape: String,
    arrowIcon: [String, Array],
  },
  setup(ps, { slots, emit, attrs, listeners }) {
    const locale = computed(() => {
      const injectedLocale = inject("locale", zhCN);
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });

    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref(
      ps.multiple
        ? ps.modelValue || ps.value || []
        : isEmpty(ps.modelValue || ps.value)
          ? []
          : [ps.modelValue || ps.value]
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref();
    const minWidth = ref("");
    const queryInputFocused = ref(false);
    const queryInputRef = ref();
    const hasSearchEvent = attrs?.onSearch;
    const refPopper = ref();
    const transOrigin = ref("bottom");
    const refSelection = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const queryInputEventTimer = ref();
    const activeIndex = ref(-1);

    const reallySize = ref(0);
    const ctxFocused = ref(false);

    watch(
      () => ps.placement,
      (v) => {
        currentPlacement.value = v;
        if (visible.value) {
          updatePosition();
        }
      }
    );
    watch(
      () => ps.options,
      (v) => {
        if (visible.value) {
          updatePosition();
        }
      },
      { deep: true }
    );

    watch(
      () => ps.modelValue,
      (v) => {
        currentValue.value = ps.multiple ? v || [] : isEmpty(v) ? [] : [v];
        if (visible.value) {
          updatePosition();
        }
      }
    );

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
      if ((!visible.value || optionsData.value.size == 0) && ctxFocused.value) {
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
          let { label, value } = optionsData.value[activeIndex.value];
          onSelect({ label, value });
          e.preventDefault();
          return;
        } else if (key == "Escape" && (ctxFocused.value || queryInputFocused.value)) {
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
      const lookup = new Map();
      optionsData.value.forEach((item) => {
        lookup.set(item.value, item.label);
      });
      return currentValue.value.map((val) => lookup.get(val) ?? val);
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
      document.addEventListener("keydown", onKeydown);
    });

    const outsideClick = (e) => {
      const ctx = refSelection.value?.$el || refSelection.value;
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
          if (queryInputRef.value) {
            queryInputRef.value.value = "";
            queryInputRef.value.style.width = "";
          }
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
        } else {
          currentValue.value.push(value);
        }
        updatePosition();
        if (hasSearchEvent || ps.filterable) {
          queryInputRef.value.value = "";
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
    const searchInput = (e) => {
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

    const emptyClick = (e) => {
      if (queryInputVisible.value) {
        nextTick((e) => {
          queryInputRef.value.focus();
          queryInputFocused.value = true;
        });
      }
    };
    const emitValue = () => {
      const result = ps.multiple ? currentValue.value : currentValue.value[0];
      emit("update:modelValue", result);
      emit("change", result);
    };
    const removeTag = (e, index) => {
      if (ps.disabled) return;
      currentValue.value.splice(index, 1);
      e.stopPropagation();
      updatePosition();
      emitValue();
    };
    const onClear = (e) => {
      currentValue.value = [];
      emitValue();
      clearQuery();
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
        visible.value = show || !visible.value;
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
      let { options, loading } = ps;
      if (loading) return [];
      if (!options) {
        options = [];
        const children = getChildren(slots.default?.());
        children.forEach((child, index) => {
          let { label, value, disabled } = child?.props;
          // console.log();
          options.push({
            value,
            disabled,
            label: label || child?.children?.default?.()[0]?.children || value,
          });
        });
      }
      return options;
    });
    const filterOptions = () => {
      const key = queryKey.value;
      const filter = ps.filterable && key.trim() !== "";
      return filter
        ? optionsData.value.filter((item) => item.label.toLowerCase().includes(key.toLowerCase()))
        : optionsData.value;
    };
    const renderOptions = () => {
      const optionNodes = [];
      const nodes = filterOptions();
      reallySize.value = nodes.length;
      nodes.forEach((item, index) => {
        let { label, value, disabled } = { ...item };
        const checked = isChecked(value);
        optionNodes.push(
          <Option
            onSelect={onSelect}
            onMouseenter={() => onMouseenter(index)}
            key={`${value}-${label}`}
            active={activeIndex.value == index}
            value={value}
            label={label}
            disabled={disabled}
            checked={checked}
            multiple={ps.multiple}
          />
        );
      });

      return optionNodes;
    };

    const queryKeydown = ({ key }) => {
      if (key === "Backspace") {
        if (queryKey.value == "" && ps.multiple && currentValue.value.length > 0) {
          currentValue.value = currentValue.value.slice(0, -1);
          emitValue();
          updatePosition();
        }
      }
    };
    const showClear = computed(() => {
      return (
        ps.clearable && !ps.disabled && !isEmpty(currentValue.value) && !isEmpty(labelText.value)
      );
    });
    const renderOverlay = () => {
      let overlay = null;
      if (rendered.value) {
        const optionNodes = renderOptions();
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
            "k-scroll",
            {
              "k-select-dropdown-multiple": ps.multiple,
              "k-select-dropdown-sm": ps.size == "small",
            },
          ],
        };
        const loadingNode = (
          <div class="k-select-loading">
            <Icon type={Loading} spin />
            <span>{locale.value?.k.select.loading}</span>
          </div>
        );
        overlay = (
          <Transition name={`${preCls}`}>
            <div v-transfer={true} v-show={visible.value} {...props}>
              {ps.loading ? (
                loadingNode
              ) : optionNodes.length ? (
                <ul>{optionNodes}</ul>
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
      } = ps;
      let childNode = [];
      if (arrowIcon === undefined) {
        arrowIcon = ChevronDown;
      }

      const queryProps = {
        ref: queryInputRef,
        class: "k-select-search",
        autoComplete: "off",
        onChange: (e) => e.stopPropagation(),
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
          <input {...queryProps} />
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
        if (ps.maxTagCount && ps.maxTagCount > 0 && tags.length > ps.maxTagCount) {
          tags = tags.slice(0, ps.maxTagCount);
          tags.push(
            <span class="k-select-tag">+{labelText.value.length - ps.maxTagCount}...</span>
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

      const arrowNode =
        !hasSearchEvent && showArrow ? <Icon class="k-select-arrow" type={arrowIcon} /> : null;

      const classes = [
        "k-select",
        {
          "k-select-disabled": disabled,
          "k-select-block": ps.block,
          "k-select-opened": visible.value,
          "k-select-borderless": bordered === false,
          "k-select-lg": size == "large",
          "k-select-sm": size == "small",
          "k-select-light": theme == "light",
          "k-select-has-icon": !!icon,
          "k-select-circle": shape == "circle" && !multiple,
          "k-select-multiple": multiple,
          "k-select-show-search": queryInputFocused.value,
          "k-select-show-tags": multiple && !isEmpty(labelText.value),
          "k-select-has-clear": showClear.value,
        },
      ];
      const clearNode = showClear.value ? (
        <Icon class="k-select-clearable" type={CloseCircle} onClick={onClear} />
      ) : null;

      return (
        <div
          tabIndex="0"
          class={classes}
          style={styles}
          v-resize={updatePosition}
          onClick={toggle}
          onFocus={() => (ctxFocused.value = true)}
          onBlur={() => (ctxFocused.value = false)}
          ref={refSelection}
        >
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
export default withInstall(Select);
