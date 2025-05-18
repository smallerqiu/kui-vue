<template>
  <Space vertical align="start">
    <select>
      <option value="">Select</option>
    </select>
    <Checkbox v-model:checked="checked" label="Circle" />
    <Select :width="256" clearable :icon="Search" theme="light" :shape="checked ? 'circle' : ''" :options="options" />
    <Select :width="256" clearable filterable theme="light" :shape="checked ? 'circle' : ''" :options="options">
    </Select>
    <Select :width="256" clearable :icon="Search" :shape="checked ? 'circle' : ''" :options="options" />
    <Select :width="256" multiple v-model:value="value" filterable theme="light" :options="options">
    </Select>
  </Space>
</template>
<script setup>
import { ref } from "vue";
import { Search } from "kui-icons";

const checked = ref(true)
const value = ref(['1', '3'])
const options = [
  { label: 'Apple', value: "1" },
  { label: 'Orange', value: "2" },
  { label: 'Banana', value: "3" },
  { label: 'Pear', value: "4" },
]
</script>
