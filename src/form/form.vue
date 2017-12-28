<template>
  <div>
    <form autocomplete="off" :class="classes"></form>
  </div>
</template>
<script>
export default {
  name: "Form",
  props: {
    labelAlign: { type: String },
    model: { type: Object },
    rules: { type: Object },
    labelWidth: { type: Number }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        "k-form",
        {
          [`k-form-${this.labelAlign}`]: this.labelAlign
        }
      ];
    }
  }
};
</script>
