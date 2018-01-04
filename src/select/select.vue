<template>
  <div :class="classes" :style="selectStyles">
    <div class="k-select-selection" @click.stop="toggleDrop" ref="select">
      <span class="k-select-placeholder" v-if="!label">{{placeholder}}</span>
      <span class="k-select-label" v-if="label">{{label}}</span>
      <span class="k-select-arrow"></span>
      <span class="k-select-clearable" v-if="isclearable" @click.stop="clear"></span>
    </div>
    <transition name="dropdown">
      <div class="k-select-dropdown" v-if="isdrop" :style="dropdownStyles">
        <ul>
          <li v-for="(item,index) in data" :key="index" :class="itemClasses(item)" @click="select(item)">{{item.label}}</li>
          <li v-if="data.length==0" class="k-select-item">没有数据...</li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Select",
  props: {
    placeholder: { type: String, default: "请选择" },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    width: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: "" },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      isdrop: false,
      dropdownWith: 0,
      label: ""
    };
  },
  beforeDestroy() {
    document.removeEventListener("click", this.dc);
  },
  mounted() {
    document.addEventListener("click", this.dc);
  },
  watch: {
    value(val) {
      let item = this.isNotEmpty(val) ? this.data.filter(x => x.value == val)[0] : null;
      this.label = item!=null ? item.label : "";
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
    isNotEmpty(obj) {
      return obj !== null && obj !== "" && obj !== undefined;
    },
    dc(e) {
      this.isdrop = this.$el.contains(e.target) && !this.disabled;
    },
    itemClasses(item) {
      return [
        "k-select-item",
        {
          ["k-select-item-selected"]: item.value == this.value
        }
      ];
    },
    clear() {
      !this.isNotEmpty(this.value) && (this.label = "");
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
      setTimeout(() => (this.isdrop = !this.isdrop));
      !this.isNotEmpty(this.value) && (this.label = item.label);
      this.$emit("change", item);
      this.$emit("input", item.value);
    }
  }
};
</script>

