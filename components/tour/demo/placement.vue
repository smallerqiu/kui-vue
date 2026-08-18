<template>
  <Space>
    <Button ref="leftTarget">左侧目标</Button>
    <Button ref="rightTarget">右侧目标</Button>
    <Button type="primary" @click="open = true">查看定位</Button>
  </Space>
  <Tour v-model="open" :steps="steps" />
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { Button, Space, Tour } from "kui-vue";
const open = ref(false);
const leftTarget = ref<{ $el?: HTMLElement }>();
const rightTarget = ref<{ $el?: HTMLElement }>();
const steps = computed(() => [
  { target: () => leftTarget.value?.$el ?? null, title: "底部", description: "默认显示在目标底部。" },
  { target: () => rightTarget.value?.$el ?? null, title: "左侧", description: "空间不足时可调整方向。", placement: "left" as const },
]);
</script>
