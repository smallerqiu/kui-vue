<template>
  <Space vertical style="width: 100%">
    <RadioGroup v-model="language" type="button" :options="options" />
    <ConfigProvider :locale="language === 'en' ? en : zhCN">
      <Calendar v-model="date" />
    </ConfigProvider>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import en from "kui-vue/locale/en";
import zhCN from "kui-vue/locale/zh-CN";

const language = ref("zh");
const date = ref("2026-08-23");
const options = [
  { label: "中文", value: "zh" },
  { label: "English", value: "en" },
];
</script>
