<template>
  <Space wrap>
    <Tag color="blue" closeable v-for="t in tags" :key="t">{{ t }}</Tag>
    <Input
      v-if="showInput"
      @blur="add"
      size="small"
      style="width: 81px"
      ref="inputRef"
      :value="tag"
    />
    <Button @click="show" size="small" :icon="Bookmark" v-show="!showInput"> New Tag </Button>
  </Space>
</template>
<script setup lang="ts">
import { Bookmark } from "kui-icons";
import { nextTick, ref } from "vue";
const showInput = ref(false);
const tag = ref("");
const tags = ["Apple", "Banana", "Cat", "Dog"];
const inputRef = ref();
const show = () => {
  showInput.value = true;
  nextTick(() => {
    // console.log(inputRef.value)
    inputRef.value.focus();
  });
};
const add = (e: FocusEvent) => {
  let value = (e.target as HTMLInputElement).value.trim();
  if (value && tags.indexOf(value) === -1) {
    tags.push(value);
  }
  tag.value = "";
  showInput.value = false;
};
</script>
