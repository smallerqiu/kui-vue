<template>
  <ConfigProvider :locale="locale">
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </ConfigProvider>
</template>
<script setup>
import { ref } from "vue";
import en from "kui-vue/locale/en";
const locale = ref(en);
</script>
