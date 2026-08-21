<template>
  <Space vertical>
    <Page v-model:page="page" simple :total="80" :page-size="10" />
    <Page v-model:page="page" simple show-elevator :total="1000" :page-size="10" />
    <Page v-model:page="page" simple size="small" theme="outline" :total="80" :page-size="10" />
    <Page simple disabled :page="3" :total="80" :page-size="10" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const page = ref(2);
</script>
