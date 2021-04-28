<template>
  <transition v-if="!closed" @enter="enter" @leave="leave" @beforeEnter="beforeEnter">
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
        info: "ios-information-circle",
        error: "ios-close-circle",
        success: "ios-checkmark-circle",
        warning: "ios-alert"
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
    beforeEnter(el) {
      el.style.height = 0;
      el.style.overflow = 'hidden';
      el.style.opacity = 0.1;
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.opacity = 1;
      } else {
        el.style.height = "";
        el.style.opacity = "";
      }
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.overflow = 'hidden';
        el.style.opacity = 0.1;
      }
    },
    close() {
      this.closed = true;
      this.$emit("close");
    }
  }
};
</script>
