<template>
  <Space vertical>
    <Slider :min="0" :max="5" v-model="value" style="width: 300px" />
    <Space>
      <Rate :tooltips="desc" v-model="value" />
      {{ tipText }}
    </Space>
    <br />
    <code>allowClear = true</code>
    <Rate :allowClear="true" :value="3" />
    <code>allowClear = false</code>
    <Rate :allowClear="false" :value="3" />
  </Space>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
const value = ref(3);
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const tipText = computed(() => {
  return desc[value.value - 1];
});
</script>
