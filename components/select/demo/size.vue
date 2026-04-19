<template>
  <Space vertical block>
    <RadioGroup v-model="size" @change="setSize" type="button">
      <RadioButton value="large" label="large" />
      <RadioButton value="default" label="default" />
      <RadioButton value="small" label="small" />
    </RadioGroup>
    <br />
    <Select v-model="value1" :size="size" filterable block :options="data" />
    <Select v-model="value2" :size="size" block :options="data" multiple />
    <Select v-model="value3" :size="size" :maxTagCount="2" :options="data" multiple block />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SizeType } from "../../const/types";
const size = ref<SizeType>("default");
const value1 = ref(0);
const value2 = ref([0, 1]);
const value3 = ref([0, 1, 2]);
const data = [
  { label: "Apple", value: 0 },
  { label: "Orange", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Pear", value: 3 },
  { label: "Grape", value: 4 },
];
const setSize = (value: any) => {
  size.value = value;
};
</script>
