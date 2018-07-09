<template>
  <transition name="dropdown" v-if="!closed">
    <div :class="classes">
      <Icon :type="icon" v-if="showIcon" />
      <a class="k-alert-close" v-if="closable" @click="close"></a>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import Icon from "../icon";
export default {
  components: { Icon },
  name: "Alert",
  props: {
    type: { type: String, default: "warning" },
    closable: Boolean,
    showIcon: Boolean
  },
  data() {
    return {
      closed: false
    };
  },
  computed: {
    icon() {
      let icons = {
        info: "information-circled",
        error: "android-cancel",
        success: "checkmark-circled",
        warning: "android-alert"
      };
      return icons[this.type];
    },
    classes() {
      return [
        "k-alert",
        {
          [`k-alert-${this.type}`]: this.type
        }
      ];
    }
  },
  methods: {
    close() {
      this.closed = true;
      this.$emit("close");
    }
  }
};
</script>
