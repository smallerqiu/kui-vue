<template>
  <div :class="classes" :style="selectStyles" v-docClick="close" v-winScroll="handleScroll">
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
import Vue from 'vue';
const SSR = Vue.prototype.$isServer
import emitter from "@/mixins/emitter";
import transferDom from "@/directives/transferDom";
import winScroll from "@/directives/winScroll";
import docClick from "@/directives/docClick";
export default {
  name: "Select",
  directives: { docClick, transferDom, winScroll },
  mixins: [emitter],
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    filterable: Boolean,
    transfer: { type: Boolean, default: false },
    width: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  watch: {
    value(v, v2) {
      // console.log(v, v2)
      this.updateSelect(v);
    },
    visible(val) {
      if (this.filterable) {
        if (!val) {
          this.$nextTick(() => {
            this.children.forEach(x => (x.visible = true));
          });

          this.$refs.input.blur();
          this.label = (this.selectItem && this.selectItem.label) || "";
        }
      }
      this.$emit('open-change', val);
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
    this.$on("select-change", this.change);
    this.$on("select-add", this.add);
    this.$on("select-remove", this.remove);
  },
  mounted() {
    let value = this.value;
    if (value === null || value === "" || value === undefined) {
      this.label = "";
      this.selectItem = null;
    }
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
  updated() {
    this.handleScroll();
  },
  methods: {
    remove(obj) {
      this.children.splice(this.children.indexOf(obj), 1);
    },
    add(child) {
      this.queryCount++;
      child.index = this.children.length;
      let value = this.value;
      child.selected = child.value == value && (value !== "" && value != undefined && value !== null);
      if (child.selected) {
        this.label = child.label === undefined ? child.$el.innerHTML : child.label
        this.selectItem = { label: this.label, value: child.value }
      }
      this.children.push(child);
    },
    handleKeyup(e) {
      if (!this.filterable) return;
      this.children.forEach(x => x.query(e.target.value));
      this.queryCount = this.children.filter(x => x.visible).length;
      this.handleScroll()
    },
    close() {
      this.visible = false;
    },
    updateSelect(value) {
      let isNotValue = value !== "" && value != undefined && value !== null;
      this.children.forEach(child => {
        child.selected = isNotValue && value == child.value
        if (child.selected) {
          this.label = child.label === undefined ? child.$el.innerHTML : child.label
          this.dispatch("FormItem", "form-item-change", value);
        }
      });
      if (value === "" || value === undefined || value === null) this.label = ''
    },
    clear() {
      this.selectItem = null;
      this.label = "";
      this.children.forEach(child => (child.selected = false));
      this.$emit("input", "");
      this.$emit("change", {});
      this.dispatch("FormItem", "form-item-change", "");
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }

      this.dropdownWith = this.$refs.rel.offsetWidth;
      this.visible = !this.visible;

      this.handleScroll();
    },
    handleScroll() {
      this.$nextTick(() => this.setPosition());
    },
    setPosition() {
      if (SSR) return;
      let m = 3;
      let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      if (!dom) return;
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
      this.selectItem = item;
      this.label = item.label;
      //针对value没有定义的情况
      this.$emit("input", item.value);
      if (this.value === '') {
        this.children.forEach(child => {
          child.selected = item.value == child.value
        });
      }
      this.$emit("change", item);

      this.dispatch("FormItem", "form-item-change", item.value);
      this.$nextTick(() => (this.visible = false));
    }
  }
};
</script>

