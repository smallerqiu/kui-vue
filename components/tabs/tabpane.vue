<template>
  <div class="k-tabs-tabpane" v-if="visible" :style="{width:width+'px'}">
    <slot></slot>
  </div>
</template>
<script>
import emitter from "@/mixins/emitter";
export default {
  name: "Tabs",
  mixins: [emitter],
  props: {
    name: [String, Number],
    label: [String, Number],
    icon: String,
    disabled: Boolean,
    closable: { type: Boolean, default: true },
  },
  data() {
    return {
      width: null,
      visible: true,
      activeName: this.name,
      actived: true,
      index: 0,
    };
  },
  mounted() {
    this.dispatch("Tabs", "tabs-add", this);
  },
  beforeDestroy() {
    this.dispatch("Tabs", "tabs-remove", this);
  }
};
</script>