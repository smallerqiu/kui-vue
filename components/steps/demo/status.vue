<template>
  <Space vertical block>
    <Steps :current="1" status="error" :items="items" />
    <Steps :current="2" :items="customStatusItems" />
  </Space>
</template>
<script setup lang="ts">
const items = [{ title: "提交" }, { title: "校验失败" }, { title: "完成" }];
const customStatusItems = [
  { title: "已完成", status: "finish" as const },
  { title: "已跳过", status: "wait" as const },
  { title: "处理中", status: "process" as const },
];
</script>
