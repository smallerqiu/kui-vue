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
import { message } from "kui-vue";
const iknow = localStorage.getItem("iknow-v4");
if (!iknow) {
  message.show({
    type: "warning",
    duration: 0,
    closable: true,
    content: "当前文档为v4.x 版本，不支持Vue2, Vue2 项目请使用v3.x ！",
    onClose: () => {
      localStorage.setItem("iknow-v4", "yes");
    },
  });
}
</script>
