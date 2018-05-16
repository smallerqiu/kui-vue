<template>
  <div class="k-tabs-tabpane" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import emitter from "../../mixins/emitter";
export default {
  name: "Tabs",
  mixins: [emitter],
  props: {
    name: [String, Number],
    label: [String, Number],
    icon: String,
    disabled: Boolean,
    closable: { type: Boolean, default: true }
  },
  data() {
    return {
      activeName: this.name,
      active: false,
      width: 0 //ie9
    };
  },
  computed: {
    styles() {
      return this.width ? { width: `${this.width}px` } : {};
    }
  },
  mounted() {
    this.dispatch("Tabs", "tabs-add", this);
  },
  beforeDestroy() {
    this.dispatch("Tabs", "tabs-remove", this);
  }
};
</script>