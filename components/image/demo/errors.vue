<template>
  <Space vertical>
    <KImage
      :width="120"
      src="https://k-ui.cn/error.jpg"
      placeholder="https://cdn.chuchur.com/img/thumb.png"
    />
    <KImage :width="120" :height="120" src="https://k-ui.cn/error.jpg" />
    <KImage :width="120" :height="120" :src="src" />
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