<template>
  <Space vertical block>
    <RadioGroup v-model="size" @change="setSize" type="button">
      <RadioButton value="large" label="large" />
      <RadioButton value="medium" label="Medium" />
      <RadioButton value="small" label="small" />
    </RadioGroup>
    <InputTag v-model="value1" :size="size" block />
    <InputTag v-model="value2" :size="size" block />
    <InputTag v-model="value3" :size="size" block />
  </Space>
</template>
<script setup lang="ts">
import type { SizeType } from "kui-vue";
import { ref } from "vue";
const size = ref<SizeType>("medium");
const value1 = ref(["Design"]);
const value2 = ref(["Design", "Develop"]);
const value3 = ref(["Design", "Develop", "Release"]);
const setSize = (value: string | number | (string | number)[]) => {
  if (value === "small" || value === "medium" || value === "large") size.value = value;
};
</script>
