import Icon from "../icon";
import Empty from "../empty";
import transfer from "../directives/transfer";
import resize from "../directives/resize";
import zhCN from "../locale/lang/zh-CN";
import { isEmpty } from "../utils/number";
import { setPlacement } from "../utils/placement";
import { Loading, Close, CloseCircle, ChevronDown } from "kui-icons";
import { withInstall } from "../utils/vue";
import Tree from "../tree";
import { buildTree } from "../tree/utils";
import {
  ref,
  defineComponent,
  watch,
  nextTick,
  inject,
  // Transition,
  onBeforeMount,
  onMounted,
  computed,
} from "vue";

const TreeSelect = defineComponent({
  name: "TreeSelect",
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
        return [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-left",
          "bottom-right",
        ].includes(value);
      },
      default: "bottom-left",
    },
    width: Number,
    maxTagCount: Number,
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
    theme: String,
    emptyText: String,
    icon: [String, Array],
    shape: String,
    arrowIcon: [String, Array],

    treeData: Array,
    treeCheckable: Boolean,
    treeShowLine: Boolean,
    treeShowIcon: { type: Boolean, default: true },
    treeCheckStrictly: Boolean,
    treeExpandedKeys: Array,
    treeSelectedKeys: Array,
    treeExpandedAll: Boolean,
  },
  setup(ps, { slots, emit, attrs, listeners }) {
    const locale = inject("locale", null) || zhCN;

    const labelText = ref([]);
    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref(
      ps.multiple ? ps.value || [] : isEmpty(ps.value) ? [] : [ps.value]
    );
    const queryInputVisible = ref(false);
    const queryKey = ref("");
    const queryInputMirrorRef = ref();
    const minWidth = ref("");
    const queryInputFocused = ref(false);
    const queryInputRef = ref();
    const hasSearchEvent = "search" in listeners;
    const refPopper = ref();
    const transOrigin = ref("bottom");
    const refCtx = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const queryInputEventTimer = ref();

    const hasLoad = "treeLoadData" in listeners;
    const defaultExpandedKeys = ref(ps.treeExpandedKeys || []);
    const defaultCheckedKeys = ref(ps.treeCheckedKeys || []);

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

    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });

    const updatePosition = () => {
      nextTick(() => {
        minWidth.value = refCtx.value?.offsetWidth;
        setPlacement({
          refCtx,
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
        minWidth.value = refCtx.value?.offsetWidth;
        updateLabel();
      });
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

    const clearQuery = () => {
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

    const searchInput = (e) => {
      queryKey.value = e.target.value;
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
      emit("input", ps.multiple ? [] : "");
      emit("change", ps.multiple ? [] : "");

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

    const updateLabel = () => {
      labelText.value = optionsData.value
        .filter((item) => currentValue.value.includes(item.key))
        .map((item) => item.title);
    };
    const optionsData = computed(() => {
      const options = buildTree({
        data: ps.treeData,
        expandedKeys: defaultExpandedKeys.value,
        selectedKeys: currentValue.value,
        checkedKeys: defaultCheckedKeys.value,
        hasLoad,
        checkStrictly: ps.treeCheckStrictly,
      });

      return options;
    });

    watch(
      () => ps.treeCheckedKeys,
      (nv) => {
        defaultCheckedKeys.value = nv || [];
      }
    );
    watch(
      () => ps.treeExpandedKeys,
      (nv) => {
        defaultExpandedKeys.value = nv || [];
      }
    );
    const onExpand = ({ key, expanded, targetNode }) => {
      let index = defaultExpandedKeys.value.indexOf(key);
      if (index > -1 && !expanded) {
        defaultExpandedKeys.value.splice(index, 1);
      } else {
        defaultExpandedKeys.value.push(key);
      }
      emit("update:treeExpandedKeys", [...defaultExpandedKeys.value]);
    };
    const onCheck = ({ key }, checked, checkedKeys) => {
      const result = [...checkedKeys];
      currentValue.value = result;
      emit("input", result);
    };
    const onSelect = (item) => {
      const { key: value, title: label } = { ...item };
      // const value = item.key,
      // label = item.title;
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
        visible.value = false;
        clearQuery();
      }
      const result = ps.multiple ? currentValue.value : currentValue.value[0];
      // emit("update:value", result);
      emit("input", result);
      emit("change", result);
      emit("select", value, label, selected);
    };
    const renderTree = () => {
      const props = {
        props: {
          checkable: ps.treeCheckable,
          loading: ps.loading,
          data: ps.treeData,
          multiple: ps.multiple || ps.treeCheckable,
          checkStrictly: ps.treeCheckStrictly,
          expandedKeys: [...defaultExpandedKeys.value],
          selectedKeys: [...currentValue.value],
          checkedKeys: [...currentValue.value],
          selectAsCheck: ps.treeCheckable,
          queryKey: queryKey.value,
        },
        on: {
          select: onSelect,
          expand: onExpand,
          check: onCheck,
        },
      };
      if (hasLoad) {
        props.on.loadData = listeners.treeLoadData;
      }
      return <Tree {...props} />;
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
          emit("input", currentValue.value);
          // emit("update:value", currentValue.value);
          emit(
            "change",
            ps.multiple ? currentValue.value : currentValue.value[0] || ""
          );
          updatePosition();
        }
      }
    };
    const showClear = computed(() => {
      return ps.clearable && !ps.disabled && !isEmpty(currentValue.value);
    });
    const renderOverlay = () => {
      let overlay = null;
      if (rendered.value) {
        const preCls = "k-tree-select";
        const props = {
          ref: refPopper,
          style: {
            minWidth: `${minWidth.value}px`,
            left: `${left.value}px`,
            top: `${top.value}px`,
            transformOrigin: transOrigin.value,
          },
          class: [
            "k-tree-select-dropdown",
            "k-scroll",
            {
              "k-tree-select-dropdown-multiple": ps.multiple,
              "k-tree-select-dropdown-sm": ps.size == "small",
            },
          ],
        };
        const loadingNode = (
          <div class="k-tree-select-loading">
            <Icon type={Loading} spin />
            <span>{locale?.k.select.loading}</span>
          </div>
        );
        overlay = (
          <transition name={`${preCls}`}>
            <div v-transfer={true} v-show={visible.value} {...props}>
              {ps.loading ? (
                loadingNode
              ) : ps.treeData?.length ? (
                renderTree()
              ) : (
                <Empty
                  onClick={emptyClick}
                  description={locale?.k.select.emptyText}
                />
              )}
            </div>
          </transition>
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
        class: "k-tree-select-search",
        autoComplete: "off",
        on: {
          change: (e) => e.stopPropagation(),
          keydown: queryKeydown,
          input: searchInput,
          blur: () => {
            if (!visible.value) {
              queryInputVisible.value = false;
            }
          },
        },
      };
      const queryNode = (
        <div
          v-show={queryInputVisible.value}
          key="search"
          class="k-tree-select-search-wrap"
        >
          <input {...queryProps} />
          <span class="k-tree-select-search-mirror" ref={queryInputMirrorRef}>
            {queryKey.value}
          </span>
        </div>
      );

      const placeholderText = placeholder || locale?.k.select.placeholder;
      const placeNode =
        placeholderText && isEmpty(labelText.value) && !queryKey.value ? (
          <div class="k-tree-select-placeholder">{placeholderText}</div>
        ) : null;

      const labelStyle = {
        display: queryKey.value.length ? "none" : "",
      };
      const renderTags = () => {
        let tags = labelText.value.map((label, i) => {
          return (
            <span class="k-tree-select-tag" key={label}>
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
            <span class="k-tree-select-tag">
              +{labelText.value.length - ps.maxTagCount}...
            </span>
          );
        }
        return tags;
      };
      const labelsNode = multiple ? (
        <div class="k-tree-select-labels" name="k-tree-select-tag">
          {renderTags()}
          {queryNode}
        </div>
      ) : !isEmpty(labelText.value) ? (
        <div class="k-tree-select-label" style={labelStyle}>
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
        !hasSearchEvent && showArrow ? (
          <Icon class="k-tree-select-arrow" type={arrowIcon} />
        ) : null;

      const classes = [
        "k-tree-select",
        {
          "k-tree-select-disabled": disabled,
          "k-tree-select-block": ps.block,
          "k-tree-select-opened": visible.value,
          "k-tree-select-borderless": bordered === false,
          "k-tree-select-lg": size == "large",
          "k-tree-select-sm": size == "small",
          "k-tree-select-light": theme == "light",
          "k-tree-select-has-icon": !!icon,
          "k-tree-select-circle": shape == "circle" && !multiple,
          "k-tree-select-multiple": multiple,
          "k-tree-select-show-search": queryInputFocused.value,
          "k-tree-select-show-tags": multiple && !isEmpty(labelText.value),
          "k-tree-select-has-clear": showClear.value,
        },
      ];
      const clearNode = showClear.value ? (
        <Icon class="k-tree-select-clearable" type={CloseCircle} onClick={onClear} />
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
          ref={refCtx}
        >
          {icon ? <Icon type={icon} class="k-tree-select-icon" /> : null}
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
export default withInstall(TreeSelect);
