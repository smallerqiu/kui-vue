import Option from './option'
import Icon from "../icon";
import Empty from '../empty';
import { hasProp, getChild, isNotEmpty } from '../_tool/utils'

import Drop from '../base/drop'

export default {
  name: "Select",
  props: {
    placeholder: { type: String, default: "请选择" },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    transfer: { type: Boolean, default: true },
    width: Number,
    value: [String, Number, Array],
    clearable: Boolean,
    filterable: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    loading: Boolean,
    bordered: { type: Boolean, default: true },
    showArrow: { type: Boolean, default: true },
    options: Array
  },
  provide() {
    return {
      Select: this
    }
  },
  inject: {
    FormItem: { default: null },
  },
  data() {
    return {
      label: "",
      opened: false,
      currentValue: this.value || '',
      showSearch: false,
      queryKey: '',
      selectWidth: this.width
    };
  },
  watch: {
    value(value) {
      if (isNotEmpty(value)) {
        this.currentValue = value
      } else {
        this.currentValue = this.multiple ? [] : ''
      }
      this.FormItem && this.FormItem.testValue(value)
    },
    currentValue(n, o) {
      this.setLabel()
    }
  },
  methods: {
    hidedrop() {
      if (this.showSearch) {
        this.queryKey = ''
        this.$refs.search.value = ''
        this.$refs.search.style.width = ''
      }
      this.showSearch = false
    },
    getLabel(kid, labelValue) {
      let Label = '';
      kid.forEach(c => {
        let { value, label } = c.componentOptions.propsData
        if (labelValue === value) {
          Label = label || (c.componentOptions.children[0].text || '').trim()
          return;
        }
      })
      return Label;
    },
    setLabel() {
      let { currentValue, multiple, label } = this
      currentValue = isNotEmpty(currentValue) ? currentValue : (multiple ? [] : '')
      let currentLabel = isNotEmpty(label) ? label : (multiple ? [] : '')

      let kid = this.getOptions()
      if (multiple) {
        if (currentValue.length) {
          let labels = []
          currentValue.forEach((value) => {
            let label = this.getLabel(kid, value)
            labels.push({ label, key: `label_${value}`, value })
          })
          currentLabel = labels
        } else {
          currentLabel = []
        }

      } else {
        currentLabel = this.getLabel(kid, currentValue)
      }
      this.label = currentLabel

      setTimeout(e => { this.setPosition() }, 230);

    },
    clear(e) {
      let label = this.multiple ? [] : ""
      let value = this.multiple ? [] : ""
      this.label = label
      this.currentValue = value
      this.$emit("input", value);
      this.$emit("change", value);
      e.stopPropagation()
    },
    showDrops() {
      let isSearch = ('search' in this.$listeners)

      this.opened = !this.opened;
      if (this.filterable || isSearch) {
        this.showSearch = this.opened
        if (this.opened) {
          this.$nextTick(e => this.$refs.search.focus())
        } else {
          this.$refs.search.blur()
          setTimeout(() => {
            this.queryKey = ''
            this.$refs.search.value = ''
          }, 200);
        }
      }
      this.$nextTick(e => this.setPosition())
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      let isSearch = ('search' in this.$listeners)
      if (isSearch) {
        this.$nextTick(e => {
          this.showSearch = true
          this.$nextTick(e => this.$refs.search.focus())
        })
        return;
      }
      this.showDrops()
    },
    setPosition() {
      if (!hasProp(this, 'width')) {
        this.selectWidth = this.$el.offsetWidth
      }
      if (this.opened) {
        this.$refs.overlay.setPosition()
      }
    },
    change(item) {
      let { multiple, value, currentValue } = this
      if (this.showSearch) {
        this.queryKey = ''
        this.$refs.search.value = ''
        this.$refs.search.style.width = ''
      }
      if (!multiple) {
        this.opened = false
        this.showSearch = false
      } else if ('search' in this.$listeners || this.filterable) {
        this.$nextTick(e => this.$refs.search.focus())
      }
      let hasValue = hasProp(this, 'value')

      //set value
      if (multiple) {
        if (!hasValue) {
          value = currentValue || []
        }
        let index = value.indexOf(item.value)
        if (index === -1) {
          value.push(item.value)
        } else {
          value.splice(index, 1)
        }

      } else {
        value = item.value
      }
      this.currentValue = value

      //set label
      if (!hasValue) {
        if (multiple) {
          let currentLabel = this.label || []
          let index = currentLabel.findIndex(x => x.value === item.value)//  .map(x => x.label).indexOf(item.label)
          if (index === -1) {
            currentLabel.push({ label: item.label, key: item.label + item.value, value: item.value })
          } else {
            currentLabel.splice(index, 1)
          }
          this.label = currentLabel
        } else {
          this.label = item.label
        }
        setTimeout(e => { this.setPosition() }, 230);
      } else {

        this.$nextTick(e => this.setPosition())
      }
      this.$emit("input", value);
      this.$emit("change", item);

    },
    removeTag(e, i) {
      if (this.disabled) return
      let values = this.currentValue || []
      let labels = this.label || []
      this.change({ value: values[i], label: labels[i].label })
      e.stopPropagation()
    },
    searchInput(e) {
      this.queryKey = e.target.value
      this.$nextTick(k => {
        e.target.style.width = this.$refs.mirror.offsetWidth + 'px'
        this.setPosition()
      })
      if ('search' in this.$listeners) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.opened = true;
          this.$emit('search', e)
        }, 500);
      }
    },
    emptyClick(e) {
      if (this.showSearch) {
        this.$nextTick(e => this.$refs.search.focus())
      }
    },
    getOptions() {
      let { queryKey, options, $slots } = this
      let kid = null
      if (Array.isArray(options)) {
        kid = options.map((k, i) => {
          let prop = {
            props: { ...k },
            key: k.key || (k.label + k.value)
          }
          return <Option {...prop} />
        })
      } else {
        kid = getChild($slots.default)
      }
      if (this.filterable && queryKey) {
        let parsedQuery = String(queryKey).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
        let Reg = new RegExp(parsedQuery, 'i')

        kid = kid.filter(c => {
          let label = c.componentOptions.propsData.label || c.componentOptions.children[0].text
          return Reg.test(label)
        })
      }
      return kid
    }
  },
  mounted() {
    if (hasProp(this, 'value'))
      this.setLabel()
  },
  render() {
    let { disabled, size, multiple,
      opened, placeholder, showArrow, bordered,
      clear, removeTag, queryKey,
      clearable, label, toggleDrop, transfer } = this
    let childNode = []

    const classes = [
      "k-select",
      {
        ["k-select-disabled"]: disabled,
        ["k-select-open"]: opened,
        'k-select-borderless': bordered === false,
        ["k-select-lg"]: size == 'large',
        ["k-select-sm"]: size == 'small'
      }
    ]

    const queryProps = {
      on: {
        input: this.searchInput,
      },
      ref: 'search',
      class: 'k-select-search',
      attrs: {
        autoComplete: 'off',
      }
    }
    const queryNode = <div v-show={this.showSearch} key="search" class="k-select-search-wrap">
      <input {...queryProps} />
      <span class="k-select-search-mirror" ref="mirror">{queryKey}</span>
    </div>

    let kid = this.getOptions()
    // kid = (
    //   !kid.length
    //     ? <li class="k-select-empty" onClick={this.emptyClick}><Icon type="albums" /><p class="k-empty-desc">暂无数据</p></li>
    //     : kid
    // )
    const loadingNode = <div class="k-select-loading"><Icon type="sync" spin /><span>加载中...</span></div>
    const props = {
      ref: 'overlay',
      props: {
        width: this.selectWidth,
        value: opened,
        selection: this.$el,
        // transfer: false,
        transfer: transfer,
        transitionName: 'k-select',
        className: ['k-select-dropdown', { 'k-select-dropdown-multiple': this.multiple }]
      },
      on: {
        hide: () => {
          this.opened = false
          setTimeout(() => {
            this.hidedrop()
          }, 300)
        }
      }
    }
    let overlay = <Drop {...props}>{this.loading ? loadingNode : (!kid.length ? <Empty onClick={this.emptyClick} /> : <ul>{kid}</ul>)}</Drop>

    label = multiple ? (label || []) : label
    const placeNode = ((placeholder && ((!label || !label.length) && !queryKey))
      ? <div class="k-select-placeholder">{placeholder}</div>
      : null
    )
    const tags = multiple ?
      label.map((c, i) => {
        return <span class="k-select-tag" key={c.key}>{c.label}<Icon type="close" onClick={e => removeTag(e, i)} /></span>
      })
      : null

    const labelStyle = {
      opacity: this.showSearch ? .4 : 1,
      display: queryKey.length ? 'none' : ''
    }
    const labelsNode = (multiple
      ? (
        [<transition-group tag="div" class="k-select-labels" name="k-select-tag">{tags}</transition-group>
          , queryNode]
      )
      : <div class="k-select-label" style={labelStyle}>{label}</div>
    )
    let isSearch = ('search' in this.$listeners)
    childNode.push(labelsNode);
    childNode.push(placeNode);

    (!isSearch && showArrow) && childNode.push(<Icon class="k-select-arrow" type="chevron-down" />)

    if ((this.filterable || isSearch) && !multiple) {
      childNode.push(queryNode)
    }

    const styles = { width: `${this.width}px` }
    let showClear = !disabled && clearable && isNotEmpty(label) && label.length > 0
    const selectCls = [
      "k-select-selection", {
        "k-select-has-clear": showClear
      }
    ]
    showClear && childNode.push(<Icon class="k-select-clearable" type="close-circle" onClick={clear} />)

    return (
      <div tabIndex="0" class={classes} style={styles}>
        <div class={selectCls} onClick={toggleDrop} ref="rel">
          {childNode}
        </div>
        {overlay}
      </div >
    )
  }
};
