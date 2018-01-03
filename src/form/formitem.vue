<template>
  <div :class="classes">
    <label :style="labelStyles" class="k-form-item-label">{{label}}</label>
    <div class="k-formitem-conten" :style="contentStyles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormItem",
  props: {
    label: { type: String, default: "" }
  },
  data() {
    return {
      form: this.$parent
    };
  },
  computed: {
    classes() {
      return [
        "k-form-item",
        {
          "": ""
        }
      ];
    },
    labelStyles() {
      let width = this.form.labelWidth;
      return width ? { width: `${width}px` } : {};
    },
    contentStyles() {
      let width = this.form.labelWidth;
      return width ? { marginLeft: `${width}px` } : {};
    }
  }
};
</script>

