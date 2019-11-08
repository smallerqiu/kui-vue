<template>
  <div :class="classes" v-if="noticeType=='message'">
    <div class="k-message-notice-content">
      <i :class="icon"></i>
      <span v-html="content"></span>
      <a class="k-message-close" v-if="closable" @click="onClose"></a>
    </div>
  </div>
  <div :class="classes" v-else>
    <div class="k-notice-notice-content">
      <!-- <i :class="icon" v-if="type"></i> -->
      <div class="k-notice-title">{{title}}</div>
      <div class="k-notoce-desc" v-html="content"></div>
      <a class="k-notice-close" @click="onClose"></a>
    </div>
  </div>
  <!-- </transition> -->
</template>
<script>
export default {
  props: {
    index: Number,
    type: { type: String, default: "info" },
    title: String,
    content: String,
    name: String,
    closable: { type: Boolean, default: false },
    transitionName: { type: String, default: "fadedown" },
    noticeType: { type: String, default: "message" },
    onClose: { type: Function, default: () => { } }
  },
  data() {
    return {
      closeTimer: null,
      show: false
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
      return `k-ion-${icons[this.type]}`;
    },
    classes() {
      return [
        `k-${this.noticeType}-notice`,
        {
          [`k-${this.noticeType}-${this.type}`]: this.type
        }
      ];
    }
  },
};
</script>
