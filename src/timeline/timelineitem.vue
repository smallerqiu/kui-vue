<template>
  <li class="k-time-line-item">
    <div class="k-time-line-dot" :style="styles">
      <slot name="dot">
        <i :class="classes"></i>
      </slot>
    </div>
    <div class="k-time-line-item-content">
      <slot></slot>
    </div>
  </li>
</template>
<script>
export default {
  name: "TimeLineItem",
  props: {
    Color: String,
    Icon: String
  },
  computed: {
    styles() {
      let color = this.Color;
      return color ? { color: color } : {};
    },
    classes() {
      let icon = this.Icon;
      console.log(icon);
      return icon ? [`k-ion-${icon}`] : ["k-ion-ios-circle-outline"];
    }
  }
};
</script>

