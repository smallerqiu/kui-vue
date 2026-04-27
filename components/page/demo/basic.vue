<template>
  <Space vertical>
    <Page v-model:page="page" v-model:pageSize="size" :total="50" @change="onChange" />
    <Page v-model:page="page" v-model:pageSize="size" :total="50" @change="onChange" disabled />
  </Space>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { ref } from "vue";
const page = ref(1);
const size = ref(15);
const onChange = (page: number, pageSize: number) => {
  console.log(page, pageSize);
  message.info(`当前页: ${page}, 每页: ${pageSize}`);
};
</script>
