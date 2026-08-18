<template>
  <Button @click="open = true">无遮罩引导</Button>
  <Tour v-model="open" :mask="false" :steps="steps" />
</template>
<script setup lang="ts">
import { Button, Tour } from "kui-vue";
import { ref } from "vue";
const open = ref(false);
const steps = [
  { title: "无遮罩模式", description: "适合不希望打断用户当前操作的轻量提示。" },
  { title: "继续浏览", description: "背景内容保持可见。" },
];
</script>
