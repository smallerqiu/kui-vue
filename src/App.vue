<template>
  <ConfigProvider :locale="locale">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </ConfigProvider>
</template>
<script setup>
import { ref } from "vue";
import en from "kui-vue/locale/en";
const locale = ref(en);
</script>
