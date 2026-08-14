<template>
  <Space vertical>
    <Image
      :width="120"
      src="https://k-ui.cn/error.jpg"
      placeholder="https://cdn.chuchur.com/img/thumb.png"
    />
    <Image :width="120" :height="120" src="https://k-ui.cn/error.jpg" />
    <Image :width="120" :height="120" :src="src" />
    <Button @click="loadOrigin">Load origin</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const src = ref("https://cdn.chuchur.com/upload/demo/test_300.jpg");
const loadOrigin = () => {
  src.value = "https://k-ui.cn/error.jpg";
};
</script>
