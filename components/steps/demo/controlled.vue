<template>
  <Space vertical block>
    <Steps :current="current" :items="items" />
    <Space>
      <Button :disabled="current === 0" @click="current--">上一步</Button>
      <Button type="primary" :disabled="current === items.length - 1" @click="current++">
        下一步
      </Button>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const current = ref(0);
const items = [{ title: "填写信息" }, { title: "确认内容" }, { title: "完成" }];
</script>
