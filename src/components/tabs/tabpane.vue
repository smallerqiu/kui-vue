<template>
   <div></div>
</template>
<script>
export default {
  name: "Tabs",
  props: {
    value: String,
    type: { type: String, default: "line" },
    closable: Boolean,
    mini: Boolean,
    animate: { type: Boolean, default: true }
  },
  computed: {
    classes() {
      return [
        "k-tabs",
        {
          ["k-tabs-mini"]: this.mini,
          ["k-tabs-card"]: this.type === "card"
        }
      ];
    }
  },
  data() {}
};
</script>