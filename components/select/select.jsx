import Option from "./option";
import Icon from "../icon";
import Empty from "../empty";
import transfer from "../directives/transfer";
import zhCN from "../locale/lang/zh-CN";
import { isEmpty } from "../utils/number";
import { getChildren } from "../utils/vnode";
import { setPlacement } from "../utils/placement";
// import Drop from "../base/drop";
import { Sync, Close, CloseCircle, ChevronDown } from "kui-icons";
import { ref, defineComponent, watch, nextTick, inject, Transition, onMounted, onBeforeMount, cloneVNode } from "vue";

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
  },
  // watch: {
  //   value(value) {
  //     if (!isEmpty(value)) {
  //       currentValue.value = value;
  //     } else {
  //       currentValue.value = this.multiple ? [] : "";
  //     }
  //   },
  // },
  setup(ps, { slots, emit, attrs }) {
    const locale = inject("locale", null) || zhCN;

    const labelText = ref([]);
    const visible = ref(false);
    const rendered = ref(false);
    const currentValue = ref(ps.value);
    const showSearch = ref(false);
    const queryKey = ref("");
    const minWidth = ref("");
    const isFocus = ref(false);
    const searchRef = ref(null);
    const hasSearch = "onSearch" in attrs;
    const refPopper = ref(null);
    const transOrigin = ref("bottom");
    const refCtx = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);

    watch(
      () => ps.value,
      () => {
        currentValue.value = ps.value;
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
      }
    };

    // const hideDrop = () => {
    //   if (showSearch.value) {
    //     queryKey.value = "";
    //     this.$refs.search.value = "";
    //     this.$refs.search.style.width = "";
    //   }
    //   showSearch.value = false;
    // };

    const isChecked = (value) => {
      if (ps.multiple) {
        return currentValue.value?.indexOf(value) >= 0;
      } else {
        return !isEmpty(currentValue.value) && currentValue.value === value;
      }
    };
    const onInitValue = ({ value, label }) => {
      console.log(label);
      if (ps.multiple) {
        if (currentValue.value?.indexOf(value) >= 0) {
          labelText.value.push(label);
        }
      } else {
        if (currentValue?.value[0] === value) {
          labelText.value = [label];
        }
      }
    };
    const onSelect = ({ value, label }) => {
      if (ps.multiple) {
        if (currentValue.value?.indexOf(value) >= 0) {
          currentValue.value = currentValue.value.filter((v) => v !== value);
        } else {
          currentValue.value.push(value);
        }
      } else {
        currentValue.value = value;
        labelText.value = [label];
      }
      emit("update:value", currentValue.value);
      toggle();
    };

    const showDrops = () => {
      visible.value = !visible.value;
      if (ps.filterable) {
        showSearch.value = visible.value;
        if (visible.value) {
          nextTick((e) => {
            isFocus.value = true;
            searchRef.value.focus();
          });
        } else {
          searchRef.value.blur();
          isFocus.value = false;

          setTimeout(() => {
            queryKey.value = "";
            searchRef.value.value = "";
          }, 200);
        }
      }
    };

    // const change = (item) => {
    //   let { multiple, value, currentValue } = this;
    //   // console.log(value, currentValue)

    //   if (showSearch.value) {
    //     queryKey.value = "";
    //     this.$refs.search.value = "";
    //     this.$refs.search.style.width = "";
    //   }
    //   if (!multiple) {
    //     visible.value = false;
    //     showSearch.value = false;
    //   } else if ("search" in this.$listeners || ps.filterable) {
    //     nextTick((e) => {
    //       this.$refs.search.focus();
    //       isFocus.value = true;
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

    //   nextTick((e) => this.setPosition());
    //   emit("input", value);
    //   emit("change", item);
    // };

    // const searchInput = (e) => {
    //   queryKey.value = e.target.value;
    //   //todo:
    //   nextTick((k) => {
    //     e.target.style.width = this.$refs.mirror.offsetWidth + "px";
    //     this.setPosition();
    //   });
    //   if ("search" in this.$listeners) {
    //     clearTimeout(this.timer);
    //     this.timer = setTimeout(() => {
    //       visible.value = true;
    //       emit("search", e);
    //     }, 500);
    //   }
    // };

    // const emptyClick = (e) => {
    //   if (showSearch.value) {
    //     nextTick((e) => {
    //       this.$refs.search.focus();
    //       isFocus.value = true;
    //     });
    //   }
    // };

    const getOptions = (filter) => {
      let { queryKey, options } = ps;
      let childs = null;
      if (Array.isArray(options)) {
        childs = options.map((k, i) => {
          let prop = {
            props: { ...k },
            key: k.key || k.label + k.value,
          };
          return <Option {...prop} />;
        });
      } else {
        childs = getChild(slots.default?.());
      }
      if (!filter) return childs;

      if (ps.filterable && queryKey && !this.$listeners.search) {
        let parsedQuery = String(queryKey).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
        let Reg = new RegExp(parsedQuery, "i");

        childs = childs.filter((c) => {
          let label = c.componentOptions.propsData.label || c.componentOptions.children[0].text;
          return Reg.test(label);
        });
      }
      return childs;
    };

    const removeTag = (e, c) => {
      if (ps.disabled) return;
      change({ value: c.value, label: c.label });
      e.stopPropagation();
    };
    const clear = (e) => {
      currentValue.value = [];
      emit("update:value", []);
      e.stopPropagation();
    };
    const toggle = () => {
      if (ps.disabled) {
        return;
      }

      // showDrops();
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        nextTick(() => {
          visible.value = true;
          updatePosition();
        });
      } else {
        visible.value = !visible.value;
        visible.value && updatePosition();
      }

      if ("onSearch" in attrs) {
        showSearch.value = true;
        nextTick(() => {
          searchRef.value?.focus();
          isFocus.value = true;
        });
        return;
      }
    };

    return () => {
      let { disabled, size, multiple, placeholder, showArrow, bordered, theme, arrowIcon, icon, shape, filterable, clearable } = ps;
      let childNode = [];
      if (arrowIcon === undefined) {
        arrowIcon = ChevronDown;
      }

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
          "k-select-show-search": isFocus.value,
          // "k-select-show-tags": multiple && (label || []).length,
        },
      ];

      const queryProps = {
        // input: searchInput,
        onBlur: () => {
          if (!visible.value) showSearch.value = false;
          isFocus.value = false;
        },
        ref: searchRef,
        class: "k-select-search",
        autoComplete: "off",
      };
      const queryNode = (
        <div v-show={showSearch.value} key="search" class="k-select-search-wrap">
          <input {...queryProps} />
          <span class="k-select-search-mirror" ref="mirror">
            {queryKey}
          </span>
        </div>
      );

      const loadingNode = (
        <div class="k-select-loading">
          <Icon type={Sync} spin />
          <span>{locale?.k.select.loading}</span>
        </div>
      );

      const optionNodes = [];
      if (ps.options) {
        ps.options.forEach((item) => {
          optionNodes.push(<Option onSelect={onSelect} value={item.value} label={item.label} onInited={onInitValue} checked={isChecked(item.value)} multiple={ps.multiple}></Option>);
        });
      } else {
        const childs = getChildren(slots.default?.());
        childs.forEach((child) => {
          optionNodes.push(cloneVNode(child, { multiple: ps.multiple, onInited: onInitValue, checked: isChecked(child.props?.value), onSelect: onSelect }));
        });
      }

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
      // const tags = multiple
      //   ? label.map((c, i) => {
      //       return (
      //         <span class="k-select-tag" key={c.key}>
      //           {c.label}
      //           <Icon type={Close} onClick={(e) => removeTag(e, c)} />
      //         </span>
      //       );
      //     })
      //   : null;

      const labelStyle = {
        //   display: queryKey.length ? "none" : "",
      };
      const labelsNode = multiple ? (
        <div class="k-select-labels" name="k-select-tag">
          {/* {tags} */}
          {/* {queryNode} */}
        </div>
      ) : (
        <div class="k-select-label" style={labelStyle}>
          {labelText.value[0]}
        </div>
      );

      !isEmpty(labelText.value) && childNode.push(labelsNode);

      placeNode && childNode.push(placeNode);

      if ((filterable || hasSearch) && !multiple) {
        childNode.push(queryNode);
      }
      const styles = { width: `${ps.width}px` };
      let showClear = !disabled && clearable && !isEmpty(labelText.value);

      classes[1]["k-select-has-clear"] = showClear;
      const iconNodes = [];

      if (!hasSearch && showArrow) {
        iconNodes.push(<Icon class="k-select-arrow" type={arrowIcon} />);
      }
      if (showClear) {
        iconNodes.push(<Icon class="k-select-clearable" type={CloseCircle} onClick={clear} />);
      }

      iconNodes.push(" ");
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
