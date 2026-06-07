<template>
  <Space vertical>
    use options to set options : {{ value1 }}
    <Select v-model="value1" :options="data" filterable clearable />
    <br />
    use children to set options: {{ value2 }}
    <Select v-model="value2" filterable clearable>
      <Option :value="item.value" v-for="item in data" :key="item.value">
        {{ item.label }}
      </Option>
    </Select>
  </Space>
</template>
<script setup lang="ts">
import { type SelectOption } from "kui-vue";
import { ref } from "vue";
const value1 = ref();
const value2 = ref();
const data = ref<SelectOption[]>([]);
// 异步加载数据
setTimeout(() => {
  data.value = [
    { label: "Apple1", value: 0 },
    { label: "Orange1", value: 1 },
    { label: "Banana2", value: 2 },
    { label: "Pear1", value: 3 },
    { label: "Grape2", value: 4 },
  ];
  // value2.value = 2;
}, 2000);
</script>
