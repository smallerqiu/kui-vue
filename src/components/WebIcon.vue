<template>
  <span :class="'web-icon web-icon-' + name" @click="$emit('click')">
    <svg :width="width" fill="currentcolor" :height="height">
      <use :xlink:href="`${sprite}#${name}`"></use>
    </svg>
  </span>
</template>
<script setup>
// import { reactive } from "vue";
import sprite from "@/src/assets/img/web.svg";
defineProps({
  name: String,
  width: {
    type: [String, Number],
    default: "1em",
  },
  height: {
    type: String,
    default: "1em",
  },
});
// const state = reactive({
//   sprite,
// });
</script>
