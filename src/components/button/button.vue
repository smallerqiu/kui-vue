<template>
  <button :type="buttonType" :class="classes" :disabled="disabled" @click="click">
    <Icon :type="icon" :class="iconClasses" v-if="icon&&iconAlign=='left'&&!loading" />
    <Icon type="ios-sync" class="k-load-loop" v-if="loading" />
    <span v-if="showSlot">
      <slot></slot>
    </span>
    <Icon :type="icon" :class="iconClasses" v-if="icon&&iconAlign=='right'&&!loading" />
  </button>
</template>
<script>
import Icon from '../icon'
export default {
  name: "Button",
  components: { Icon },
  props: {
    buttonType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].indexOf(value) >= 0;
      }
    },
    icon: String,
    iconAlign: { type: String, default: 'left' },
    mini: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    loading: Boolean,
    circle: { type: Boolean, default: false },
    hollow: { type: Boolean, default: false },
    type: {
      validator(value) {
        return (
          ["danger", "primary", "warning", "success", "gray", "link", "default"].indexOf(value) >= 0
        );
      }
    },
    disabled: Boolean
  },
  data() {
    return {
      showSlot: true
    }
  },
  computed: {
    iconClasses() {
      return [{ 'icon-left': this.iconAlign == 'left', 'icon-right': this.iconAlign == 'right' }];
    },
    classes() {
      return [
        "k-btn",
        {
          [`k-btn-${this.type}`]: !!this.type,
          ["k-btn-mini"]: !!this.mini,
          ["k-btn-loading"]: this.loading,
          ["k-btn-icon-only"]: !this.showSlot,
          ["k-btn-lg"]: !!this.large && !this.mini,
          ["k-btn-circle"]: !!this.circle,
          ["k-btn-hollow"]: !!this.hollow
        }
      ];
    }
  },
  mounted() {
    this.showSlot = this.$slots.default !== undefined;
  },
  methods: {
    click(e) {
      if (!this.loading) {
        this.$emit('click', e)
      }
    }
  }
};
</script>