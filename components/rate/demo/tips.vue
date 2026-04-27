<template>
  <Space vertical>
    <Space>
      <Rate :tooltips="desc" v-model="value" />
      {{ tipText }}
    </Space>
    <br />
    <code>allowClear = true</code>
    <Rate :allowClear="true" :modelValue="3" />
    <code>allowClear = false</code>
    <Rate :allowClear="false" :modelValue="3" />
  </Space>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const value = ref(3);
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const tipText = computed(() => {
  return desc[value.value - 1];
});
</script>