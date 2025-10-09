import Option from "./option";
import Icon from "../icon";
import Empty from "../empty";
import { hasProp, getChildren, isNotEmpty, isEmpty } from "../utils/element";

import Drop from "../base/drop";
import { t } from "../locale";
import { Loading, Close, CloseCircle, ChevronDown } from "kui-icons";
import { withInstall } from '../utils/vue'

const Select = {
  name: "Select",
  props: {
    placeholder: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    transfer: { type: Boolean, default: true },
    width: Number,
    value: [String, Number, Array],
    clearable: { type: Boolean, default: false },
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
    maxTagCount: Number,
  },
  provide() {
    return {
      Select: this,
    };
  },
  data() {
    return {
      label: "",
      opened: false,
      currentValue: this.value || "",
      showSearch: false,
      queryKey: "",
      selectWidth: this.width,
      isFocus: false,
    };
  },
  watch: {
    value(value) {
      if (isNotEmpty(value)) {
        this.currentValue = value;
      } else {
        this.currentValue = this.multiple ? [] : "";
      }
    },
  },
  methods: {
    hideDrop() {
      if (this.showSearch) {
        this.queryKey = "";
        this.$refs.search.value = "";
        this.$refs.search.style.width = "";
      }
      this.showSearch = false;
    },
    getLabel(children, labelValue) {
      let Label = null;
      children.forEach((c) => {
        let { value, label } = c.componentOptions.propsData;
        if (labelValue === value) {
          Label = label || (c.componentOptions.children[0].text || "").trim();
          return;
        }
      });
      return Label;
    },
    clear(e) {
      let label = this.multiple ? [] : "";
      let value = this.multiple ? [] : "";
      this.label = label;
      this.currentValue = value;
      this.$emit("input", value);
      this.$emit("change", value);
      e.stopPropagation();
    },
    showDrops() {
      let isSearch = "search" in this.$listeners;

      this.opened = !this.opened;
      if (this.filterable || isSearch) {
        this.showSearch = this.opened;
        if (this.opened) {
          this.$nextTick(() => {
            this.isFocus = true;
            this.$refs.search.focus();
          });
        } else {
          this.$refs.search.blur();
          this.isFocus = false;

          setTimeout(() => {
            this.queryKey = "";
            this.$refs.search.value = "";
          }, 200);
        }
      }
      // this.$nextTick(e => this.setPosition())
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      let isSearch = "search" in this.$listeners;
      if (isSearch) {
        this.showSearch = true;
        this.$nextTick(() => {
          this.$refs.search.focus();
          this.isFocus = true;
        });
        return;
      }
      this.showDrops();
    },
    setPosition() {
      if (this.opened) {
        this.$refs.overlay.setPosition();
      }
    },
    change(item) {
      let { multiple, value, currentValue } = this;
      // console.log(value, currentValue)

      if (this.showSearch) {
        setTimeout(() => {
          this.queryKey = "";
          this.$refs.search.value = "";
          this.$refs.search.style.width = "";
        }, 300);
      }
      if (!multiple) {
        this.opened = false;
        this.showSearch = false;
      } else if ("search" in this.$listeners || this.filterable) {
        this.$nextTick(() => {
          this.$refs.search.focus();
          this.isFocus = true;
        });
      }
      let hasValue = hasProp(this, "value");
      //set value
      if (multiple) {
        if (!hasValue) {
          value = currentValue || [];
        }
        let index = value.indexOf(item.value);
        if (index === -1) {
          value.push(item.value);
        } else {
          value.splice(index, 1);
        }
      } else {
        value = item.value;
      }
      this.currentValue = value;

      //set label

      this.$nextTick(() => this.setPosition());
      this.$emit("input", value);
      this.$emit("change", item);
    },
    removeTag(e, c) {
      if (this.disabled) return;
      this.change({ value: c.value, label: c.label });
      e.stopPropagation();
    },
    searchInput(e) {
      this.queryKey = e.target.value;
      //todo:
      this.$nextTick(() => {
        //   let max = this.selectWidth - 15 - (this.showArrow ? 25 : 0)
        e.target.style.width = this.$refs.mirror.offsetWidth + "px";
        this.setPosition();
      });
      if ("search" in this.$listeners) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.opened = true;
          this.$emit("search", e);
        }, 500);
      }
    },
    emptyClick() {
      if (this.showSearch) {
        this.$nextTick(() => {
          this.$refs.search.focus();
          this.isFocus = true;
        });
      }
    },
    getOptions(filterable) {
      let { queryKey, options, $slots } = this;
      let children = null;
      if (Array.isArray(options)) {
        children = options.map((k) => {
          let prop = {
            props: { ...k },
            key: k.key || k.label + k.value,
          };
          return <Option {...prop} />;
        });
      } else {
        children = getChildren($slots.default);
      }
      if (!filterable) return children;

      if (this.filterable && queryKey && !this.$listeners.search) {
        let parsedQuery = String(queryKey).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
        let Reg = new RegExp(parsedQuery, "i");

        children = children.filter((c) => {
          let label = c.componentOptions.propsData.label || c.componentOptions.children[0].text;
          return Reg.test(label);
        });
      }
      return children;
    },
  },
  render() {
    let { disabled, size, multiple, opened, placeholder, currentValue, showArrow, bordered, clear, removeTag, queryKey, theme, arrowIcon, icon, shape, filterable, clearable, toggleDrop, isFocus } = this;
    let childNode = [];
    if (arrowIcon == undefined) {
      arrowIcon = ChevronDown;
    }

    let children = this.getOptions();

    let label = null;
    let values = isNotEmpty(currentValue) ? currentValue : multiple ? [] : "";
    if (multiple) {
      if (currentValue.length) {
        let labels = [];
        values.forEach((value) => {
          let label = this.getLabel(children, value);
          if (!label) return;
          labels.push({ label, key: `label_${value}`, value });
        });
        label = labels;
      } else {
        label = [];
      }
    } else {
      label = this.getLabel(children, values);
    }

    const classes = [
      "k-select",
      {
        "k-select-disabled": disabled,
        "k-select-open": opened,
        "k-select-borderless": bordered === false,
        "k-select-lg": size == "large",
        "k-select-sm": size == "small",
        "k-select-light": theme == "light",
        "k-select-has-icon": !!icon,
        "k-select-circle": shape == "circle" && !multiple,
        "k-select-multiple": multiple,
        "k-select-show-search": isFocus,
        "k-select-show-tags": multiple && (label || []).length,
      },
    ];

    const queryProps = {
      on: {
        input: this.searchInput,
        blur: () => {
          if (!this.opened) this.showSearch = false;
          this.isFocus = false;
        },
      },
      ref: "search",
      class: "k-select-search",
      attrs: {
        autoComplete: "off",
      },
    };
    const queryNode = (
      <div v-show={this.showSearch} key="search" class="k-select-search-wrap">
        <input {...queryProps} type="text" />
        <span class="k-select-search-mirror" ref="mirror">
          {queryKey}
        </span>
      </div>
    );

    const loadingNode = (
      <div class="k-select-loading">
        <Icon type={Loading} spin />
        <span>{t("k.select.loading")}</span>
      </div>
    );
    const props = {
      ref: "overlay",
      props: {
        width: this.selectWidth,
        value: opened,
        selection: this.$el,
        transfer: true,
        extendWidth: true,
        transitionName: "k-select",
        className: [
          "k-select-dropdown",
          {
            "k-select-dropdown-multiple": this.multiple,
            "k-select-dropdown-sm": size == "small",
          },
        ],
      },
      on: {
        input: (e) => {
          this.opened = e;
        },
        hide: () => {
          this.opened = false;
          setTimeout(() => {
            this.hideDrop();
          }, 300);
        },
      },
    };
    children = this.getOptions(true);

    let overlay = <Drop {...props}>{this.loading ? loadingNode : !children.length ? <Empty onClick={this.emptyClick} description={this.emptyText} /> : <ul>{children}</ul>}</Drop>;

    label = multiple ? label || [] : label;
    placeholder = placeholder || t("k.select.placeholder");
    // console.log('placeholder:', placeholder)
    // console.log('label:', label)
    // console.log('queryKey:', queryKey)
    const placeNode = (placeholder && isEmpty(label) && !queryKey) ? <div class="k-select-placeholder">{placeholder}</div> : null;
    // console.log('???:', placeholder, !isEmpty(label), !queryKey)
    // console.log('placeNode:', placeNode)
    const renderTags = () => {
      if (!multiple) return null;
      let tags = label.map((c) => {
        return (
          <span class="k-select-tag" key={c.key}>
            {c.label}
            <Icon type={Close} onClick={(e) => removeTag(e, c)} />
          </span>
        );
      })
      if (
        this.maxTagCount &&
        this.maxTagCount > 0 &&
        tags.length > this.maxTagCount
      ) {
        tags = tags.slice(0, this.maxTagCount);
        tags.push(
          <span class="k-select-tag">
            +{label.length - this.maxTagCount}...
          </span>
        );
      }
      return tags;

    }

    const labelStyle = {
      display: queryKey.length ? "none" : "",
    };
    const labelsNode = multiple ? (
      [
        <div class="k-select-labels" name="k-select-tag">
          {renderTags()}
          {queryNode}
        </div>,
      ]
    ) : label ? (
      <div class="k-select-label" style={labelStyle}>
        {label}
      </div>
    ) : null;
    let isSearch = "search" in this.$listeners;
    childNode.push(labelsNode);
    // console.log(placeNode)
    placeNode && childNode.push(placeNode);

    if ((filterable || isSearch) && !multiple) {
      childNode.push(queryNode);
    }
    // label = "1"
    const styles = { width: `${this.width}px` };
    let showClear = !disabled && clearable && isNotEmpty(label) && label.length > 0;

    classes[1]["k-select-has-clear"] = showClear;
    const iconNodes = [];

    if (!isSearch && showArrow) {
      iconNodes.push(<Icon class="k-select-arrow" type={arrowIcon} />);
    }
    if (showClear) {
      iconNodes.push(<Icon class="k-select-clearable" type={CloseCircle} onClick={clear} />);
    }
    // console.log(iconNodes)

    iconNodes.push(" ");
    return (
      <div tabIndex="0" class={classes} style={styles} onClick={toggleDrop} ref="rel">
        {icon ? <Icon type={icon} class="k-select-icon" /> : null}
        <div class="k-select-selection">{childNode}</div>
        {iconNodes}
        {overlay}
      </div>
    );
  },
};

export default withInstall(Select);