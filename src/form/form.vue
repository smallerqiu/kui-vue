<template>
  <div>
    <form autocomplete="off" :class="classes"></form>
  </div>
</template>
<script>
export default {
  name: "Form",
  props: {
    labelAlign: { type: String }
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
