<template>
   <div class="k-checkbox-group">
      <slot></slot>
   </div>
</template>
<script>
import uitls from "../utils";
export default {
  name: "CheckboxGroup",
  props: {
    value: { type: Array, default: [] }
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
      this.childrens = uitls.findChilds(this, "Checkbox");
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.checked = value.indexOf(child.label) >= 0;
          child.group = true;
        });
      }
    },
    updateModel(model) {
      this.$emit("input", model);
      this.$emit("change", model);
      this.update();
    },
    change(data) {
      let m = JSON.parse(JSON.stringify(this.value));
      let i = m.indexOf(data.value);
      if (data.checked && i < 0) {
        m.push(data.value);
      }
      if (!data.checked && i >= 0) {
        m.splice(i, 1);
      }
      // console.log(m)
      this.updateModel(m);
    }
  }
};
</script>
