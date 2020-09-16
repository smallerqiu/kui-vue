import transfer from "../_tool/transfer";
import Resize from "../_tool/resize";
import Option from './option'
import outsideclick from "../_tool/outsiteclick";
import Icon from "../icon";
import Empty from '../empty';
import { hasProp, getElementPos, getChild, isNotEmpty } from '../_tool/utils'
let timestamp = Date.now()
let count = 0
function getUuid() {
  return `k-select-lable__${timestamp}__${count++}`
}
export default {
  directives: { transfer, Resize, outsideclick },
  name: "Select",
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    large: Boolean,
    transfer: { type: Boolean, default: true },
    width: [Number, String],
    value: [String, Number, Array],
    clearable: Boolean,
    filterable: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    loading: Boolean,
    options: Array
  },
  provide() {
    return {
      groupContext: this
    }
  },
  inject: {
    FormItem: { default: null },
  },
  data() {
    return {
      left: 0,
      top: 0,
      label: "",
      showDrop: false,
      showDropInit: false,
      currentValue: this.value || '',
      placement: 'bottom',
      showSearch: false,
      queryKey: '',
      selectWidth: this.width
    };
  },
  watch: {
    value(value) {
      if (isNotEmpty(value)) {
        this.currentValue = value
        this.setLabel()
      } else {
        this.label = ''
        this.currentValue = ''
      }
      this.FormItem && this.FormItem.testValue(value)
    }
  },
  methods: {
    hidedrop(e) {
      if (this.showDropInit && !this.$el.contains(e.target) && !this.$refs.dom.contains(e.target)) {
        if (this.showSearch) {
          this.queryKey = ''
          this.$refs.search.value = ''
          this.$refs.search.style.width = ''
        }
        this.showDrop = false
        this.showSearch = false
      }
    },
    setLabel() {
      let currentValue = this.value || this.currentValue
      // if (!isNotEmpty(currentValue) || currentValue.length == 0) return;
      let kid = this.getOptions()
      if (kid) {
        let currentLabel = this.label || ''
        if (this.multiple) {
          currentLabel = currentLabel || []
          currentValue = currentValue || []
        }
        kid.forEach(c => {
          if (c.tag) {
            let { value, label } = c.componentOptions.propsData
            label = label || (c.componentOptions.children[0].text || '').trim()
            if (this.multiple) {
              let index = currentLabel.map(v => v.label).indexOf(label)
              if (currentValue.indexOf(value) >= 0) {
                if (index === -1) {
                  let key = getUuid()
                  currentLabel.push({ label, key })
                }
              } else {
                if (index >= 0) {
                  currentLabel.splice(index, 1)
                }
              }
            } else if (currentValue === value) {
              currentLabel = label
              return false
            }
          }
        })
        this.label = currentLabel
      }
      setTimeout(e => { this.setPosition() }, 230);

    },
    clear(e) {
      this.label = ''
      this.currentValue = ''
      this.$emit("input", "");
      this.$emit("change", {});
      e.stopPropagation()
    },
    showDrops() {
      let isSearch = ('search' in this.$listeners)

      this.showDrop = !this.showDrop;
      if (this.filterable || isSearch) {
        if (this.showDrop) {
          this.showSearch = true
          this.$nextTick(e => this.$refs.search.focus())
        } else {
          this.showSearch = false
          this.$refs.search.blur()
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
        if (!this.showDropInit) {
          this.showDropInit = true
          this.$nextTick(e => {
            this.showSearch = true
            this.$nextTick(e => this.$refs.search.focus())
          })
        } else {
          this.showSearch = true
          this.$nextTick(e => this.$refs.search.focus())
        }
        return;
      }
      if (!this.showDropInit) {
        this.showDropInit = true
        this.$nextTick(e => this.showDrops())
      } else {
        this.showDrops()
      }
    },
    setPosition() {
      let top = 0, left = 0, height = this.$el.offsetHeight, offset = 3;
      if (!hasProp(this, 'width')) {
        this.selectWidth = this.$el.offsetWidth
      }
      if (this.transfer) {
        let pos = getElementPos(this.$el)
        top = pos.top + height + offset
        left = pos.left + 1
      } else {
        top = height + offset
      }
      if (this.$refs.dom) {
        let clientH = document.body.scrollHeight
        let domH = this.$refs.dom.offsetHeight
        if (clientH - top - height - offset < domH + 5) {
          top = this.transfer ? top - domH - offset : -(domH + 3)
          this.placement = 'top'
        } else {
          this.placement = 'bottom'
        }
      }

      this.top = top
      this.left = left
    },
    change(item) {
      let { multiple, value, currentValue } = this
      if (this.showSearch) {
        this.queryKey = ''
        this.$refs.search.value = ''
        this.$refs.search.style.width = ''
      }
      if (!multiple) {
        this.showDrop = false
        this.showSearch = false
      } else {
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
          let index = currentLabel.map(x => x.label).indexOf(item.label)
          if (index === -1) {
            currentLabel.push({ label: item.label, key: getUuid() })
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
          // let kid = getChild(this.$slots.default)
          // if (kid.length) {
          this.showDrop = true;
          this.$emit('search', e)
          // }
        }, 500);
      }
    },
    searchBlur(e) {
      // setTimeout(a => {
      //   this.queryKey = ''
      //   e.target.value = ''
      // }, 300)
    },
    searchFocus(e) {
      // e.target.value = ''
      // this.queryKey = ''
      // e.target.style.width = ''
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
            key: i
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
    // console.log(h)
    let { disabled, mini, multiple,
      showDrop, showDropInit, placeholder,
      clear, removeTag, queryKey,
      clearable, label, toggleDrop, transfer } = this
    let childNode = []

    const classes = [
      "k-select",
      {
        ["k-select-disabled"]: disabled,
        ["k-select-open"]: showDrop,
        ["k-select-large"]: this.large && !mini,
        ["k-select-mini"]: mini
      }
    ]

    const styles = { width: `${this.width}px` }
    let showClear = !disabled && clearable && label && !multiple
    const selectCls = [
      "k-select-selection", {
        "k-select-has-clear": showClear
      }
    ]

    const dropStyle = {
      width: `${this.selectWidth}px`,
      left: `${this.left}px`,
      top: `${this.top}px`,
      transformOrigin: this.placement == 'top' ? 'center bottom' : ''
    }

    const queryProps = {
      on: {
        input: this.searchInput,
        focus: this.searchFocus,
        blur: this.searchBlur
      },
      ref: 'search',
      class: 'k-select-search',
      attrs: {
        autoComplete: 'off'
      }
    }
    const queryNode = <div v-show={this.showSearch} key="search" class="k-select-search-wrap"><input {...queryProps} /><span class="k-select-search-mirror" ref="mirror">{queryKey}</span></div>

    let drop;
    if (showDropInit) {
      let kid = this.getOptions()
      // kid = (
      //   !kid.length
      //     ? <li class="k-select-empty" onClick={this.emptyClick}><Icon type="ios-albums" /><p class="k-empty-desc">暂无数据</p></li>
      //     : kid
      // )
      const loadingNode = <div class="k-select-loading"><Icon type="ios-sync" spin /><span>加载中...</span></div>
      drop = (
        <transition name="dropdown">
          <div class={['k-select-dropdown', { 'k-select-dropdown-multiple': this.multiple }]} ref="dom" v-show={showDrop} style={dropStyle} v-transfer={transfer} v-resize={this.setPosition}>
            {this.loading ? loadingNode : (!kid.length ? <Empty onClick={this.emptyClick} /> : <ul>{kid}</ul>)}
          </div>
        </transition>
      )
    }
    label = multiple ? (label || []) : label
    const placeNode = ((placeholder && ((!label || !label.length) && !queryKey))
      ? <div class="k-select-placeholder">{placeholder}</div>
      : null
    )
    const tags = multiple ?
      label.map((c, i) => {
        return <span class="k-select-tag" key={c.key}>{c.label}<Icon type="ios-close" onClick={e => removeTag(e, i)} /></span>
      })
      : null

    const labelStyle = {
      opacity: this.showSearch ? .4 : 1,
      display: queryKey.length ? 'none' : ''
    }
    const labelsNode = (multiple
      ? (
        <div class="k-select-labels">
          <transition-group name="k-select-tag">{tags}{queryNode}</transition-group>
        </div>
      )
      : <div class="k-select-label" style={labelStyle}>{label}</div>
    )
    let isSearch = ('search' in this.$listeners)
    childNode.push(labelsNode)
    childNode.push(placeNode)

    !isSearch && childNode.push(<Icon class="k-select-arrow" type="ios-arrow-down" />)

    if ((this.filterable || isSearch) && !multiple) {
      childNode.push(queryNode)
    }
    showClear && childNode.push(<Icon class="k-select-clearable" type="ios-close-circle" onClick={clear} />)

    return (
      <div tabIndex="0" class={classes} style={styles} v-outsideclick={this.hidedrop}>
        <div class={selectCls} onClick={toggleDrop} ref="rel">
          {childNode}
        </div >
        {drop}
      </div >
    )
  }
}; 
