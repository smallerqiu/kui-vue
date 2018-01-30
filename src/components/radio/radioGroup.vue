<template>
  <div class="k-radio-group">
    <slot></slot>
  </div>
</template>
<script>
import uitls from "../../utils";
export default {
  name: "RadioGroup",
  props: {
    value: { type: [String, Number], default: "" }
  },
  data() {
    return {};
  },
  watch: {
    value(v) {
      this.update();
    }
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      const value = this.value;
      this.childrens = uitls.findChilds(this, "Radio");
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checked = value == child.label;
          // child.$emit("input", child.checked);
          child.group = true;
        });
      }
    },
    change(data) {
      this.$emit("input", data.value);
      this.$emit("change", this.value);
      this.update();
    }
  }
};
</script>
