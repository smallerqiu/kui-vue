<template>
  <Space vertical>
    <Page v-model:page="page" :total="100" />
    <code>showSizer</code>
    <Page v-model:page="page" :total="100" showSizer :page-size="20" />
    <code>showElevator</code>
    <Page
      v-model:page="page"
      :total="100"
      showSizer
      showElevator
      :pageSize="30"
      :sizeData="sizeData"
    />
    <code>disabled</code>
    <Page
      v-model:page="page"
      :total="100"
      disabled
      showSizer
      showElevator
      :pageSize="30"
      :sizeData="sizeData"
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const page = ref(3);
const sizeData = [30, 50, 80, 100];
</script>
