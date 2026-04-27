<template>
  <Space wrap>
    <Button type="primary" :icon="Search" loading>Loading</Button>
    <Button type="primary" :icon="Search" loading size="small" @click="message.info('test')">
      Loading
    </Button>
    <Button type="primary" loading shape="circle"></Button>
    <Button type="primary" :loading="loading" @click="handleLoading"> Click me </Button>
    <br />
    <Button type="primary" :icon="Power" :loading="delayLoading" @click="handleDelay">
      1s delay
    </Button>
  </Space>
</template>
<script setup lang="ts">
import { Search, Power } from "kui-icons";
import { ref } from "vue";
import { message } from "kui-vue";
const delayLoading = ref(false);
const loading = ref(false);
const handleLoading = () => {
  loading.value = true;
};
const handleDelay = () => {
  setTimeout(() => {
    delayLoading.value = true;
  }, 1000);
};
</script>