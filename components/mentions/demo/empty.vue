<template>
  <Mentions :options="[]" empty-text="没有匹配的成员" placeholder="输入 @ 查看空状态" />
</template>
<script setup lang="ts">
import { Mentions } from "kui-vue";
</script>
