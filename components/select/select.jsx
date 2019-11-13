import transfer from "../_tool/transfer";
import Icon from "../icon";
import { hasProp, getElementPos } from '../_tool/utils'
export default {
  directives: { transfer },
  name: "Select",
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    multiple: Boolean,
    transfer: { type: Boolean, default: false },
    width: [Number, String],
    value: [String, Number],
    clearable: Boolean,
    disabled: Boolean
  },
  provide() {
    return {
      groupContext: this
    }
  },
  data() {
    return {
      visible: false,
      dropdownWith: 0,
      left: 0,
      fadeInBottom: false,
      top: 0,
      label: "",
      children: [],
      queryCount: 0,
      selectItem: null,

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
  computed: {
    isclearable() {
      return this.clearable && !this.disabled && this.label;
    },
  },

  methods: {
    setLabel() {
      if (this.$slots.default) {
        let Label = this.label || ''
        let Value = this.value || ''
        if (this.multiple) {
          Label = Label ? Label.split(',') : []
          Value = Value.split(',')
        }
        this.$slots.default.forEach(c => {
          // console.log(x, this.value)
          if (c.tag) {
            let { value, label } = c.componentOptions.propsData
            label = label || c.componentOptions.children[0].text

            if (this.multiple) {
              if (Value.indexOf(value) !== -1) {
                Label.push(value)
              }
            } else if (Value === value) {
              this.label = label
              return false
            }
          }
        })
        if (this.multiple) {
          this.label = Label.map(l => l).join(',')
        }
      }
    },

    clear(e) {
      this.label = ''
      this.$emit("input", "");
      this.$emit("change", {});
      e.stopPropagation()
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }

      this.test()
      this.showDrop = !this.showDrop;
      this.showDropInit = true
    },
    test() {
      if (!hasProp(this, 'width')) {
        this.width = this.$el.offsetWidth
      }

      if (this.transfer) {
        let { top, left } = getElementPos(this.$el)
        this.top = top
        this.left = left
      } else {
        this.top = this.$el.offsetHeight + 3
      }
    },
    setPosition() {
      let m = 3;
      let rel = this.$refs.rel;
      let dom = this.$refs.dom;

      this.dropdownWith = rel.offsetWidth;
      let relPos = this.getElementPos(rel);
      let clientH = window.innerHeight;
      let clientW = window.innerWidth;
      // console.log(relPos)
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

      let domH = dom.offsetHeight;
      let relH = rel.offsetHeight;
      if (this.transfer) this.left = relPos.left + 1 + scrollLeft;
      //new
      if (clientH - relPos.top - relH - m < domH) {
        //空出来的高度不足以放下dom
        this.fadeInBottom = true;
        this.top = this.transfer ? relPos.top - m - domH + scrollTop : -(domH + m);
      } else {
        this.fadeInBottom = false;
        this.top = this.transfer ? relPos.top + relH + m + scrollTop : relH + m;
      }
    },
    change(item) {
      let { multiple, value, currentValue } = this
      if (multiple) {
        if (!hasProp(this, 'value')) {
          value = currentValue
        }
        value = value.split(',')
        let index = value.indexOf(item.value)
        if (index === -1) {
          value.push(item.value)
        } else {
          value.splice(index, 1)
        }
        value = value.join(',')
      } else {
        value = item.value
      }
      if (!hasProp(this, 'value')) {
        if (!multiple)
          this.label = item.label
        else {
          let Label = this.label || ''
          Label = Label ? Label.split(',') : []
          let index = Label.indexOf(item.label)
          if (index === -1) {
            Label.push(item.label)
          } else {
            Label.splice(index, 1)
          }
          this.label = Label.map(l => l).join(',')
        }
        this.currentValue = value
      }
      // this.label = item.label
      this.$emit("input", value);
      this.$emit("change", item);
      if (!multiple)
        this.showDrop = false


      this.$nextTick(e => this.test());
    },
    removeTag(l) {
      let label = this.label.split(',')
      let index = label.indexOf(l)
      if (index === -1) {
        label.push(item.label)
      } else {
        label.splice(index, 1)
      }
      this.label = label.map(l => l).join(',')
    },
    getCloseIcon(child){
      console.log(child)
      return <div></div>
    }
  },
  mounted() {
    this.setLabel()
  },
  render() {
    // console.log(h)
    let { disabled, mini, multiple,
      width, top, left, showDrop, showDropInit, $slots, placeholder,
      clear, removeTag,
      clearable, label, value, toggleDrop, transfer } = this
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
      <div class="k-empty"><Icon type="ios-albums" /><p class="k-empty-desc">暂无数据</p></div>
    )
    const drop = (
      showDropInit ? <div class="k-select-dropdown" ref="dom" v-show={showDrop} style={dropStyle} v-transfer={transfer}>
        <ul>
          {$slots.default}
          {/* <li class="k-select-item" v-if="children.length==0||queryCount==0">暂无数据...</li> */}
        </ul>
      </div> : null
    )

    const placeNode = (placeholder && !label
      ? <div class="k-select-placeholder">{placeholder}</div>
      : null
    )
    const labelsNode = (multiple
      ? (
        <div class="k-select-labels">
          {label && (label.split(',')).map(c => <span class="k-select-tag">{c}<Icon type="ios-close" onClick={e=>removeTag(c)} /></span>)}
          <input autoComplete="off" class="k-select-search" />
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
          {/* <input type="text" class="k-select-label" v-model={label} readonly="!filterable||disabled" disabled={disabled} keyup="handleKeyup" ref="input" /> */}
          {!multiple ? <span class="k-select-arrow"></span> : null}
          {clearNode}
        </div >
        <transition name="dropdown">
          {drop}
        </transition >
      </div >
    )
  }
}; 
