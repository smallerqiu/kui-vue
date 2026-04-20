<template>
  <Space vertical block>
    <Checkbox label="Circle" v-model="isCircle" @change="setShape" />
    <Input placeholder="Please input" :shape="shape" />
    <Input placeholder="Disabled" disabled :shape="shape" />
    <Input placeholder="Please input" :icon="Search" :shape="shape" />
    <Input placeholder="theme='outline'" theme="outline" :shape="shape" />
    <Input placeholder="Please input" :clearable="false" :shape="shape" @search="onSearch" />
    <TextArea placeholder="Please input" :rows="3" />
  </Space>
</template>
<script setup lang="ts">
import { Search } from "kui-icons";
import { message, type ChangeEvent } from "kui-vue";
import { ref } from "vue";
const isCircle = ref();
const shape = ref();
const setShape = ({ checked }: ChangeEvent) => {
  shape.value = checked ? "circle" : null;
};
const onSearch = (value: string) => {
  message.info("This is search event");
  console.log(value);
};
</script>
