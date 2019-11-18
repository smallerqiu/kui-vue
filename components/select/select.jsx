import transfer from "../_tool/transfer";
import Icon from "../icon";
import { hasProp, getElementPos } from '../_tool/utils'
export default {
  directives: { transfer },
  name: "Select",
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    transfer: { type: Boolean, default: true },
    width: [Number, String],
    value: [String, Number, Array],
    clearable: Boolean,
    filterable: Boolean,
    disabled: Boolean,
    multiple: Boolean,
    loading: Boolean
  },
  provide() {
    return {
      groupContext: this
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      label: "",
      showDrop: false,
      showDropInit: false,
      currentValue: this.value || ''
    };
  },
  watch: {
    value(v) {
      if (v === '' || v === null || v === undefined) {
        this.label = ''
        this.currentValue = ''
      } else {
        this.currentValue = v
        this.setLabel()
      }
    }
  },
  methods: {
    setLabel() {
      let kid = this.$slots.default
      if (kid) {
        let Label = this.label || ''
        let Value = this.value
        if (this.multiple) {
          Label = []
          Value = Value || []
        }
        kid.forEach(c => {
          if (c.tag) {
            let { value, label } = c.componentOptions.propsData
            label = label || (c.componentOptions.children[0].text || '').trim()
            if (this.multiple) {
              if (Value.indexOf(value) >= 0) {
                Label.push(label)
              }
            } else if (Value === value) {
              Label = label
              return false
            }
          }
        })
        this.label = Label
      }
    },
    clear(e) {
      this.label = ''
      this.currentValue = ''
      this.$emit("input", "");
      this.$emit("change", {});
      e.stopPropagation()
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }

      this.setPosition()
      this.showDrop = !this.showDrop;
      this.showDropInit = true
      if (this.filterable || ('search' in this.$listeners)) {
        this.$refs.search.focus()
      }
    },
    setPosition() {
      if (!hasProp(this, 'width')) {
        this.width = this.$el.offsetWidth
      }
      let _top = 0, _left = 0;
      if (this.transfer) {
        let { top, left, height } = getElementPos(this.$el)
        _top = top + height + 3
        _left = left + 1
      } else {
        _top = this.$el.offsetHeight + 3
      }
      if (clientH - relPos.top - relH - m < domH) {
        //空出来的高度不足以放下dom
        this.fadeInBottom = true;
        this.top = this.transfer ? relPos.top - m - domH + scrollTop : -(domH + m);
      } else {
        this.fadeInBottom = false;
        this.top = this.transfer ? relPos.top + relH + m + scrollTop : relH + m;
      }
      this.top = _top
      this.left = _left
    },
    setPosition1() {
      // let m = 3;
      // let rel = this.$refs.rel;
      // let dom = this.$refs.dom;

      // this.dropdownWith = rel.offsetWidth;
      // let relPos = this.getElementPos(rel);
      // let clientH = window.innerHeight;
      // let clientW = window.innerWidth;
      // // console.log(relPos)
      // let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      // let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

      // let domH = dom.offsetHeight;
      // let relH = rel.offsetHeight;
      // if (this.transfer) this.left = relPos.left + 1 + scrollLeft;
      // //new
      // if (clientH - relPos.top - relH - m < domH) {
      //   //空出来的高度不足以放下dom
      //   this.fadeInBottom = true;
      //   this.top = this.transfer ? relPos.top - m - domH + scrollTop : -(domH + m);
      // } else {
      //   this.fadeInBottom = false;
      //   this.top = this.transfer ? relPos.top + relH + m + scrollTop : relH + m;
      // }
    },
    change(item) {
      let { multiple, value, currentValue } = this
      if (multiple) {
        if (!hasProp(this, 'value')) {
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
      if (!hasProp(this, 'value')) {
        if (!multiple)
          this.label = item.label
        else {
          let Label = this.label || []
          let index = Label.indexOf(item.label)
          if (index === -1) {
            Label.push(item.label)
          } else {
            Label.splice(index, 1)
          }
          this.label = Label
        }
        this.currentValue = value
      }
      // this.label = item.label
      this.$emit("input", value);
      this.$emit("change", item);
      if (!multiple)
        this.showDrop = false
      this.$nextTick(e => this.setPosition());
    },
    removeTag(e, i) {
      let values = this.value || this.currentValue || []
      let labels = this.label || []
      this.change({ value: values[i], label: labels[i] })
      setTimeout(e => this.setPosition(), 250)
      e.stopPropagation()
    },
  },
  mounted() {
    this.$nextTick(e => this.setLabel())
  },
  render() {
    // console.log(h)
    let { disabled, mini, multiple,
      width, top, left, showDrop, showDropInit, $slots, placeholder,
      clear, removeTag,
      clearable, label, toggleDrop, transfer } = this
    const classes = [
      "k-select",
      {
        ["k-select-disabled"]: disabled,
        ["k-select-open"]: showDrop,
        ["k-select-mini"]: mini
      }
    ]

    const styles = { width: `${width}px` }
    let showClear = !disabled && clearable && label && !multiple
    const selectCls = [
      "k-select-selection", {
        "k-select-has-clear": showClear
      }
    ]

    const dropStyle = {
      width: `${width}px`,
      left: `${left}px`,
      top: `${top}px`,
      // if(thfadeInBottom) {
      // style["transform-origin"] = "center bottom 0px";
    }
    const empty = (
      !$slots.default
        ? <div class="k-empty"><Icon type="ios-albums" /><p class="k-empty-desc">暂无数据</p></div>
        : null
    )
    const drop = (
      showDropInit ? <div class="k-select-dropdown" ref="dom" v-show={showDrop} style={dropStyle} v-transfer={transfer}>
        <ul>
          {$slots.default}
          {empty}
        </ul>
      </div> : null
    )
    label = multiple ? (label || []) : label
    const placeNode = (placeholder && (!label || !label.length)
      ? <div class="k-select-placeholder">{placeholder}</div>
      : null
    )
    const tags = multiple ? label.map((c, i) => <span class="k-select-tag" key={c}>{c}<Icon type="ios-close" onClick={e => removeTag(e, i)} /></span>) : null

    const labelsNode = (multiple
      ? (
        <div class="k-select-labels">
          <transition-group name="k-select-tag">{tags}</transition-group>
        </div>
      )
      : <div class="k-select-label">{label}</div>
    )
    const clearNode = (
      showClear ? <span class="k-select-clearable" onClick={clear}></span> : null
    )
    return (
      <div class={classes} style={styles} >
        <div class={selectCls} onClick={toggleDrop} ref="rel">
          {placeNode}
          {labelsNode}
          {<span class="k-select-arrow"></span>}
          {clearNode}
          {this.filterable ? <input autoComplete="off" class="k-select-search" ref="search" /> : null}
        </div >
        <transition name="dropdown">
          {drop}
        </transition >
      </div >
    )
  }
}; 
