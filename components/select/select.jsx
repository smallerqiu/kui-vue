import Option from "./option";
import Icon from "../icon";
import Empty from "../empty";
import transfer from "../directives/transfer";
import zhCN from "../locale/lang/zh-CN";
import { isEmpty } from "../utils/number";
import { getChildren } from "../utils/vnode";
import { setPlacement } from "../utils/placement";
import { Sync, Close, CloseCircle, ChevronDown } from "kui-icons";
import { ref, defineComponent, watch, nextTick, inject, Teleport, Transition, onMounted, provide, cloneVNode } from "vue";

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
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(value);
      },
      default: "bottom",
    },
    width: Number,
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
    icon: [String, Array],
    shape: String,
    arrowIcon: [String, Array],
    onSearch: Function,
  },
  setup(ps, { slots, emit, attrs }) {
    const locale = inject("locale", null) || zhCN;

    const labelText = ref([]);
    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref(ps.multiple ? ps.value || [] : isEmpty(ps.value) ? [] : [ps.value]);
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

    watch(
      () => ps.value,
      (v) => {
        currentValue.value = ps.multiple ? v : isEmpty(v) ? [] : [v];
      }
    );

    const updatePosition = () => {
      nextTick(() => {
        setPlacement(refCtx, refPopper, currentPlacement, transOrigin, top, left, 3);
      });
    };

    onMounted(() => {
      nextTick(() => {
        minWidth.value = refCtx.value.offsetWidth;
      });
    });

    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      if (refPopper.value && !refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) {
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
      setTimeout(() => {
        queryKey.value = "";
        queryInputRef.value.value = "";
      }, 300);
    };

    const onSelect = ({ value, label }) => {
      if (ps.multiple) {
        if (currentValue.value?.indexOf(value) >= 0) {
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
        toggle();
        clearQuery();
      }
      emit("update:value", ps.multiple ? currentValue.value : currentValue.value[0]);
    };

    // const showDrops = () => {
    //   visible.value = !visible.value;
    //   if (ps.filterable) {
    //     queryInputVisible.value = visible.value;
    //     if (visible.value) {
    //       nextTick((e) => {
    //         queryInputFocused.value = true;
    //         queryInputRef.value.focus();
    //       });
    //     } else {
    //       queryInputRef.value.blur();
    //       queryInputFocused.value = false;

    //       setTimeout(() => {
    //         queryKey.value = "";
    //         queryInputRef.value.value = "";
    //       }, 200);
    //     }
    //   }
    // };

    // const change = (item) => {
    //   let { multiple, value, currentValue } = this;
    //   // console.log(value, currentValue)

    //   if (queryInputVisible.value) {
    //     queryKey.value = "";
    //     this.$refs.search.value = "";
    //     this.$refs.search.style.width = "";
    //   }
    //   if (!multiple) {
    //     visible.value = false;
    //     queryInputVisible.value = false;
    //   } else if ("search" in this.$listeners || ps.filterable) {
    //     nextTick((e) => {
    //       this.$refs.search.focus();
    //       queryInputFocused.value = true;
    //     });
    //   }
    //   let hasValue = hasProp(this, "value");
    //   //set value
    //   if (multiple) {
    //     if (!hasValue) {
    //       value = currentValue || [];
    //     }
    //     let index = value.indexOf(item.value);
    //     if (index === -1) {
    //       value.push(item.value);
    //     } else {
    //       value.splice(index, 1);
    //     }
    //   } else {
    //     value = item.value;
    //   }
    //   currentValue.value = value;

    //   //set label

    //   nextTick((e) => updatePosition());
    //   emit("input", value);
    //   emit("change", item);
    // };

    const searchInput = (e) => {
      queryKey.value = e.target.value;
      nextTick(() => {
        e.target.style.width = queryInputMirrorRef.value.offsetWidth + "px";
        updatePosition();
      });
      if (hasSearchEvent) {
        clearTimeout(queryInputEventTimer.value);
        queryInputEventTimer.value = setTimeout(() => {
          visible.value = true;
          emit("search", e);
        }, 500);
      }
    };

    // const emptyClick = (e) => {
    //   if (queryInputVisible.value) {
    //     nextTick((e) => {
    //       this.$refs.search.focus();
    //       queryInputFocused.value = true;
    //     });
    //   }
    // };

    // const getOptions = (filter) => {
    //   let { queryKey, options } = ps;
    //   let childs = null;
    //   if (Array.isArray(options)) {
    //     childs = options.map((k, i) => {
    //       let prop = {
    //         props: { ...k },
    //         key: k.key || k.label + k.value,
    //       };
    //       return <Option {...prop} />;
    //     });
    //   } else {
    //     childs = getChild(slots.default?.());
    //   }
    //   if (!filter) return childs;

    //   if (ps.filterable && queryKey && !this.$listeners.search) {
    //     let parsedQuery = String(queryKey).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
    //     let Reg = new RegExp(parsedQuery, "i");

    //     childs = childs.filter((c) => {
    //       let label = c.componentOptions.propsData.label || c.componentOptions.children[0].text;
    //       return Reg.test(label);
    //     });
    //   }
    //   return childs;
    // };

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
    const toggle = () => {
      if (ps.disabled) {
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
        visible.value = !visible.value;
      }
      if (visible.value) {
        updatePosition();
        showQuery();
      }
    };

    const renderOptions = () => {
      const optionNodes = [];
      let labels = [];
      const key = queryKey.value;
      const filter = ps.filterable && !isEmpty(key);
      if (ps.options) {
        ps.options.forEach((item) => {
          if (filter && !item.label.includes(key)) {
            return;
          }
          const checked = isChecked(item.value);
          // console.log(checked);
          if (checked) {
            labels.push(item.label);
          }
          optionNodes.push(<Option onSelect={onSelect} value={item.value} label={item.label} checked={checked} multiple={ps.multiple}></Option>);
        });
      } else {
        const childs = getChildren(slots.default?.());
        childs.forEach((child) => {
          const label = child.props?.label || child.children.default()[0].children;
          if (filter && !label.includes(key)) {
            return;
          }
          const checked = isChecked(child.props?.value);
          // console.log(checked);
          if (checked) {
            labels.push(label);
          }
          optionNodes.push(cloneVNode(child, { multiple: ps.multiple, checked: checked, onSelect: onSelect }));
        });
      }
      // for (let i = 0; i < optionNodes.length; i++) {
      //   const child = optionNodes[i];
      //   console.log(child.props.checked);
      //   // console.log(child.children.default()[0].children);
      // }
      // console.log(labels);
      if (!rendered.value) {
        labelText.value = labels;
      } else {
        labels = null;
      }
      return optionNodes;
    };

    const queryKeydown = ({ key }) => {
      if (key === "Backspace") {
        if (queryKey.value == "" && ps.multiple && currentValue.value.length > 0) {
          labelText.value = labelText.value.slice(0, -1);
          currentValue.value = currentValue.value.slice(0, -1);
          emit("update:value", currentValue.value);
          console.log("11");
        }
      }
    };

    return () => {
      let { disabled, size, multiple, placeholder, showArrow, bordered, theme, arrowIcon, icon, shape, filterable, clearable } = ps;
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
      };
      const queryNode = (
        <div v-show={queryInputVisible.value} key="search" class="k-select-search-wrap">
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

      // for (let i = 0; i < optionNodes.length; i++) {
      //   const child = optionNodes[i];
      //   console.log(child.children.default()[0].children);
      // }

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
        // const nodes = optionNodes();
        // console.log(nodes.length)
        overlay = (
          <Transition name={`${preCls}`}>
            <div v-transfer={true} v-show={visible.value} {...props}>
              {optionNodes.length ? <ul>{optionNodes}</ul> : <Empty />}
            </div>
          </Transition>
        );
      }

      // childs = getOptions(true);

      // let overlay = <Drop {...props}>{ps.loading ? loadingNode : !childs.length ? <Empty onClick={emptyClick} description={ps.emptyText} /> : <ul>{childs}</ul>}</Drop>;

      // label = multiple ? label || [] : label;
      const placeholderText = placeholder || locale?.k.select.placeholder;
      const placeNode = placeholderText && isEmpty(labelText.value) && !queryKey.value ? <div class="k-select-placeholder">{placeholderText}</div> : null;

      const labelStyle = {
        display: queryKey.value.length ? "none" : "",
      };
      const labelsNode = multiple ? (
        <div class="k-select-labels" name="k-select-tag">
          {labelText.value.map((label, i) => {
            return (
              <span class="k-select-tag" key={label}>
                {label}
                <Icon type={Close} onClick={(e) => removeTag(e, i)} />
              </span>
            );
          })}
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
        iconNodes.push(<Icon class="k-select-clearable" type={CloseCircle} onClick={onClear} />);
      }

      // iconNodes.push(" ");
      return (
        <div tabIndex="0" class={classes} style={styles} onClick={toggle} ref={refCtx}>
          {icon ? <Icon type={icon} class="k-select-icon" /> : null}
          <div class="k-select-selection">{childNode}</div>
          {iconNodes}
          {overlay}
        </div>
      );
    };
  },
});
