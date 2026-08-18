<template>
  <Space vertical block>
    <Steps :current="current" :items="items" @change="current = $event" />
    <span>当前步骤：{{ current + 1 }}</span>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Space, Steps } from "kui-vue";
const current = ref(0);
const items = [{ title: "购物车" }, { title: "确认订单" }, { title: "支付" }];
</script>
