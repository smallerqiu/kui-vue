<template>
  <Steps direction="vertical" :current="1" :items="items" />
</template>
<script setup lang="ts">
const items = [
  { title: "创建任务", description: "填写任务名称与负责人" },
  { title: "执行中", description: "团队正在处理任务" },
  { title: "完成", description: "归档处理结果" },
];
</script>
