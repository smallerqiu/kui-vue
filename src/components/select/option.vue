<template>
  <li :class="itemClasses" @click.stop="select" v-show="visible">
    <slot>{{label}}</slot>
  </li>
</template>
<script>
export default {
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      selected: false,
      index: 0,
      visible: true
    };
  },
  computed: {
    itemClasses() {
      return [
        "k-select-item",
        {
          ["k-select-item-selected"]: this.selected,
          ["k-select-item-disabled"]: this.disabled
        }
      ];
    }
  },
  methods: {
    select() {
      if (this.disabled) return;
      this.$parent.select({
        value: this.value,
        label: this.label === undefined ? this.$el.innerHTML : this.label
      });
    },
    query(query) {
      // query 转义查询里面的正则
      let parsedQuery = String(query).replace(
        /(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g,
        "\\$1"
      );
      this.visible = new RegExp(parsedQuery, "i").test(this.label);
    }
  },
  created() {},
  mounted() {
    this.index = this.$parent.children.length;
    this.$parent.children.push(this);
    this.$parent.queryCount++;
  },
  beforeDestroy() {
    this.$parent.children.splice(this.index, 1);
  }
};
</script>

