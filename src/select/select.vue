<template>
  <div :class="classes" :style="selectStyles">
    <div class="k-select-selection" @click.stop="toggleDrop" ref="select">
      <span class="k-select-placeholder" v-if="!label">{{placeholder}}</span>
      <span class="k-select-label" v-if="label">{{label}}</span>
      <span class="k-select-arrow"></span>
      <span class="k-select-clearable" v-if="isclearable" @click.stop="clear"></span>
    </div>
    <transition name="dropdown">
      <div class="k-select-dropdown" v-show="isdrop" :style="dropdownStyles">
        <ul>
          <slot></slot>
          <li class="k-select-item" v-if="children.length==0">暂无数据...</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import utils from "../utils";
export default {
  name: "Select",
  props: {
    placeholder: { type: String, default: "请选择" },
    // data: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   }
    // },
    width: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  watch: {
    childs() {
      this.children = this.children = utils.findChilds(this, "Option");
    }
  },
  data() {
    return {
      childs: this.$children,
      isdrop: false,
      dropdownWith: 0,
      label: "",
      children: []
    };
  },
  beforeDestroy() {
    document.removeEventListener("click", this.dc);
  },
  mounted() {
    this.updateSelect();
    document.addEventListener("click", this.dc);
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
          ["k-select-open"]: this.isdrop
        }
      ];
    },
    selectStyles() {
      return this.width > 0 ? { width: `${this.width}px` } : {};
    },
    dropdownStyles() {
      return { width: `${this.dropdownWith}px` };
    }
  },
  methods: {
    updateSelect() {
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
      this.isdrop = this.$el.contains(e.target) && !this.disabled;
    },
    clear() {
      !this.isNotEmpty(this.value) && (this.label = "");
      this.children.map(child => (child.selected = false));
      this.$emit("input", "");
      this.$emit("change", {});
    },
    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      // setTimeout(() => (this.isdrop = this.isdrop));
      this.isdrop = !this.isdrop;
      this.dropdownWith = this.$refs.select.offsetWidth;
    },
    select(item) {
      !this.isNotEmpty(this.value) && (this.label = item.label);
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
      setTimeout(() => (this.isdrop = !this.isdrop));
    }
  }
};
</script>

