<template>
  <Space><Button ref="first">创建项目</Button><Button ref="second">发布</Button><Button @click="open = true">开始引导</Button></Space>
  <Tour v-model="open" :steps="steps" />
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { Button, Space, Tour } from "kui-vue";
const open = ref(false);
const first = ref<{ $el?: HTMLElement }>();
const second = ref<{ $el?: HTMLElement }>();
const steps = computed(() => [{ target: () => first.value?.$el ?? null, title: "创建", description: "从这里建立一个新项目。" }, { target: () => second.value?.$el ?? null, title: "发布", description: "准备好以后将内容发布。", placement: "left" as const }]);
</script>
