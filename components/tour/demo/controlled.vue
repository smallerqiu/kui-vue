<template>
  <Space vertical>
    <Button @click="open = true">从当前步骤开始</Button>
    <span>当前步骤：{{ current + 1 }}</span>
  </Space>
  <Tour
    v-model="open"
    :current="current"
    :steps="steps"
    @change="current = $event"
    @finish="current = 0"
  />
</template>
<script setup lang="ts">
import { Button, Space, Tour } from "kui-vue";
import { ref } from "vue";
const open = ref(false);
const current = ref(0);
const steps = [
  { title: "欢迎", description: "Tour 也可以不绑定页面目标。" },
  { title: "受控步骤", description: "current 与 change 由业务状态管理。" },
  { title: "完成", description: "完成后将步骤重置。" },
];
</script>
