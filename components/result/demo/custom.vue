<template>
  <Result title="迁移任务已就绪" subTitle="确认信息后即可开始迁移。">
    <template #icon><Icon :type="DatabaseZap" /></template>
    <div>预计迁移 1,240 条记录，过程大约需要 3 分钟。</div>
    <template #extra><Button type="primary">开始迁移</Button></template>
  </Result>
</template>

<script setup lang="ts">
import { DatabaseZap } from "kui-icons";
</script>
