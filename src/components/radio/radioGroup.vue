<template>
  <div class="k-radio-group">
    <slot></slot>
  </div>
</template>
<script>
import emitter from '../../mixins/emitter'
export default {
  name: "RadioGroup",
  mixins:[emitter],
  props: {
    value: { type: [String, Number], default: "" },
  },
  data() {
    return {};
  },
  watch: {
    value(v) {
      this.update();
    },
  },
  mounted() {
    this.update();
    this.$on('radio-group-change',this.change)
  },
  methods: {
    update() {
      this.broadcast('Radio','radio-update',{
        value:this.value,
        group:true,
      })
    },
    change(data) {
      this.$emit("input", data.value);
      this.$emit("change", data.value);
      this.update();
      this.dispatch('FormItem','form-item-change',data.value)
    }
  }
};
</script>
