<template>
  <div :class="classes" :style="selectStyles" v-docClick="close" v-winScroll="setPosition">
    <div :class="selectClass" @click="toggleDrop" ref="rel">
      <!-- <span class="k-select-placeholder" v-if="!label">{{placeholder}}</span> -->
      <input type="text" class="k-select-label" :placeholder="placeholder" v-model="label" :readonly="!filterable||disabled" :disabled="disabled" @keyup="handleKeyup" ref="input" />
      <span class="k-select-arrow"></span>
      <span class="k-select-clearable" v-if="isclearable" @click.stop="clear"></span>
    </div>
    <transition name="dropdown">
      <div class="k-select-dropdown" ref="dom" v-show="visible" :style="dropdownStyles" v-transferDom :data-transfer="transfer">
        <ul>
          <slot></slot>
          <li class="k-select-item" v-if="children.length==0||queryCount==0">暂无数据...</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import emitter from '../../mixins/emitter'
import transferDom from "../../directives/transferDom";
import winScroll from "../../directives/winScroll";
import docClick from "../../directives/docClick";
export default {
  name: "Select",
  directives: { docClick, transferDom, winScroll },
  mixins: [emitter],
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    filterable: Boolean,
    transfer: { type: Boolean, default: true },
    width: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  watch: {
    value(v) {
      this.updateSelect(v);
    },
    visible(val) {
      if (this.filterable) {
        if (!val) {
          setTimeout(() => {
            this.children.forEach(x => (x.visible = true));
          }, 300);

          this.$refs.input.blur();
          this.label = (this.selectItem && this.selectItem.label) || "";
        }
      }
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
      selectItem: null
    };
  },
  created() {
    this.$on('select-change', this.change)
    this.$on('select-add', this.add)
    this.$on('select-remove', this.remove)
  },
  mounted() {
    this.updateSelect();
  },
  computed: {
    isclearable() {
      return this.clearable && !this.disabled && this.label;
    },
    classes() {
      return [
        "k-select",
        {
          ["k-select-disabled"]: this.disabled,
          ["k-select-open"]: this.visible,
          ["k-select-mini"]: this.mini
        }
      ];
    },
    selectClass() {
      return [
        "k-select-selection",
        {
          ["k-select-isclearable"]: this.clearable && this.label
        }
      ];
    },
    selectStyles() {
      return this.width > 0 ? { width: `${this.width}px` } : {};
    },
    dropdownStyles() {
      let style = {};
      style.width = `${this.dropdownWith}px`;
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fadeInBottom) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    }
  },
  methods: {
    remove(obj) {
      this.children.splice(this.children.indexOf(obj), 1)
    },
    add(obj) {
      this.queryCount++
      obj.index = this.children.length
      this.children.push(obj)
    },
    handleKeyup(e) {
      if (!this.filterable) return;
      this.children.forEach(x => x.query(e.target.value));
      this.queryCount = this.children.filter(x => x.visible).length;
    },
    close() {
      this.visible = false;
    },
    updateSelect() {
      let value = this.value
      if (value === null || value === '' || value === undefined) { this.label = ''; this.selectItem = null; }
      this.children.forEach(child => {
        if (child.value !== '' && child.value !== null && child.value !== undefined) {
          child.selected = child.value == this.value && (this.value !== '' && this.value != undefined && this.value !== null)
          if (child.selected) {
            this.change({
              value: child.value,
              label: child.label === undefined ? child.$el.innerHTML : child.label
            })
          }
        }
      })
    },
    clear() {
      this.selectItem = null;
      this.label = "";
      this.children.forEach(child => (child.selected = false));
      this.$emit("input", "");
      this.$emit("change", {});
      this.dispatch('FormItem', 'form-item-change', '')
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }

      this.dropdownWith = this.$refs.rel.offsetWidth;
      this.visible = !this.visible;
      if (this.visible) {
        setTimeout(() => this.setPosition());
      }
    },
    setPosition() {
      let m = 3;
      let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      let relPos = this.getElementPos(rel);
      let clientH = window.innerHeight
      let clientW = window.innerWidth

      let scrollTop = document.documentElement.scrollTop;

      let domH = dom.offsetHeight;
      let relH = rel.offsetHeight;
      if (this.transfer) this.left = relPos.x + 1;
      //new
      if (clientH - relPos.y - relH - m < domH) {  //空出来的高度不足以放下dom
        this.fadeInBottom = true
        this.top = this.transfer ? relPos.y - m - domH + scrollTop : -(domH + m)
      } else {
        this.fadeInBottom = false
        this.top = this.transfer ? relPos.y + relH + m + scrollTop : relH + m
      }
      // console.log(this.fadeInBottom, clientH, relPos.y, relH, m, domH)
      //old
      // if (h - (pos.y - s) - rh < dh) {
      //   this.fadeInBottom = true;
      //   this.top = !this.transfer ? -dh - m : pos.y - dh - m;
      // } else {
      //   this.fadeInBottom = false;
      //   this.top = !this.transfer ? rh + m : pos.y + rh + m;
      // }
    },
    change(item) {
      this.selectItem = item;
      this.$emit("change", item);
      this.$emit("input", item.value);
      this.label = item.label
      this.dispatch('FormItem', 'form-item-change', item.value)
      setTimeout(() => (this.visible = false));
    }
  }
};
</script>

