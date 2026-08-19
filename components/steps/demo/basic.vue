<template>
  <Steps :current="current" :items="items" @change="current = $event" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const current = ref(1);
const items = [
  { title: "填写信息", description: "完善基本资料" },
  { title: "确认内容", description: "检查提交内容" },
  { title: "完成" },
];
</script>
