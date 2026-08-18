<template>
  <Space vertical>
    <code>value: {{ value || "-" }}</code>
    <AutoComplete v-model="value" :options="options" placeholder="输入城市" />
    <Button size="small" @click="value = '深圳'">设为深圳</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { AutoComplete, Button, Space } from "kui-vue";
const value = ref("");
const options = ["北京", "上海", "广州", "深圳", "杭州"];
</script>
