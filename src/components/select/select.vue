<template>
  <div :class="classes" :style="selectStyles" v-docClick="close" v-winScroll="setPosition">
    <div class="k-select-selection" @click="toggleDrop" ref="rel">
      <span class="k-select-placeholder" v-if="!label">{{placeholder}}</span>
      <span class="k-select-label" v-if="label">{{label}}</span>
      <span class="k-select-arrow"></span>
      <span class="k-select-clearable" v-if="isclearable" @click.stop="clear"></span>
    </div>
    <transition name="dropdown">
      <div class="k-select-dropdown" ref="dom" v-show="visible" :style="dropdownStyles" v-transferDom :data-transfer="transfer">
        <ul>
          <slot></slot>
          <li class="k-select-item" v-if="children.length==0" @click.stop="()=>{}">暂无数据...</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import utils from "../../utils";
import transferDom from "../../directives/transferDom";
import winScroll from "../../directives/winScroll";
import docClick from "../../directives/docClick";
export default {
  name: "Select",
  directives: { docClick, transferDom, winScroll },
  props: {
    placeholder: { type: String, default: "请选择" },
    mini: Boolean,
    transfer: { type: Boolean, default: false },
    width: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  watch: {
    value(val) {
      this.updateSelect();
    },
  },
  data() {
    return {
      childs: this.$children,
      visible: false,
      dropdownWith: 0,
      left: 0,
      fb: false,
      top: 0,
      label: "",
      children: []
    };
  },
  mounted() {
    this.updateSelect();
    // this.children = utils.findChilds(this, "Option");
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
    selectStyles() {
      return this.width > 0 ? { width: `${this.width}px` } : {};
    },
    dropdownStyles() {
      let style = {};
      style.width = `${this.dropdownWith}px`;
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fb) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    }
  },
  methods: {
    close() {
      this.visible = false;
    },
    updateSelect() {
      if (!this.isNotEmpty(this.value)) {
        this.label = "";
        this.children.map(child => (child.selected = false));
        return false;
      }
      this.children.map(child => {
        if (this.isNotEmpty(this.value) && this.value == child.value) {
          child.selected = true;
          this.label =
            child.label === undefined ? child.$el.innerHTML : child.label;
        } else {
          child.selected = false;
        }
      });
    },
    isNotEmpty(obj) {
      return obj !== null && obj !== "" && obj !== undefined;
    },
    dc(e) {
      this.visible = this.$el.contains(e.target) && !this.disabled;
    },
    clear() {
      this.label = "";
      this.children.map(child => (child.selected = false));
      this.$emit("input", "");
      this.$emit("change", {});
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
      let pos = utils.getElementPos(rel);

      let h = document.documentElement.clientHeight;
      let w = document.documentElement.clientWidth;
      let s = document.documentElement.scrollTop;

      let dh = dom.offsetHeight;
      let rh = rel.offsetHeight;
      if (this.transfer) this.left = pos.x;
      if (h - (pos.y - s) - rh < dh) {
        this.fb = true;
        this.top = !this.transfer ? -dh - m : pos.y - dh - m;
      } else {
        this.fb = false;
        this.top = !this.transfer ? rh + m : pos.y + rh + m;
      }
    },
    select(item) {
      this.$emit("change", item);
      this.$emit("input", item.value);
      this.children.map(child => {
        if (item.value == child.value) {
          child.selected = true;
          this.label =
            child.label === undefined ? child.$el.innerHTML : child.label;
        } else {
          child.selected = false;
        }
      });
      setTimeout(() => (this.visible = !this.visible));
    }
  }
};
</script>

